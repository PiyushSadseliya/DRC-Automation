package utility;
import java.awt.AWTException;
import java.awt.Robot;
import java.awt.Toolkit;
import java.awt.datatransfer.StringSelection;
import java.awt.event.KeyEvent;
import java.io.File;
import java.io.IOException;
import java.net.URL;
import java.util.HashMap;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.Wait;
import org.openqa.selenium.support.ui.WebDriverWait;
import com.google.common.base.Function;
import com.relevantcodes.extentreports.LogStatus;
import testsuitebase.CommonMethods;
import testsuitebase.SuiteBase;

/**
 * This  class contains Selenium action which we can perform on web element 
 * 
 */
public class SeleniumFunctions extends SuiteBase {
	static JavascriptExecutor js;
	public static WebElement seleniumElement;
	/**
	 * The browser desired capabilities are defined with the driver.exe to invoke the particular browser to execute test cases
	 * @param object
	 * @param data
	 * @throws InterruptedException
	 */
	public static void openBrowser(String object, String data) throws InterruptedException {
		addLog.info("Opening Browser");
		try	{
			if (data.equals("IE")) {
				System.setProperty("webdriver.ie.driver", DIR + "\\IEDriverServer.exe");
				DesiredCapabilities cap = DesiredCapabilities.internetExplorer();
				cap.setCapability(InternetExplorerDriver.INTRODUCE_FLAKINESS_BY_IGNORING_SECURITY_DOMAINS,true);
				driver = new InternetExplorerDriver();
				addLog.info("IE browser started");
			} else if (data.equals("Chrome")) {
				System.setProperty("webdriver.chrome.driver", DIR + "//chromedriver.exe");
				driver = new ChromeDriver();
				addLog.info("Chrome browser started");
			}
			int implicitWaitTime = (30);
			driver.manage().window().maximize();
			driver.manage().timeouts().implicitlyWait(implicitWaitTime, TimeUnit.SECONDS);
		} catch (Exception e){
			addLog.info("Not able to open the Browser --- " + e.getMessage());
		}
	}
	
		/**
		 * The browser desired capabilities are defined with the driver.exe to invoke the particular browser to execute test cases
		 * @param object
		 * @param data
		 * @throws InterruptedException
		 */
		public static void openRemoteBrowser(String object, String data) throws InterruptedException {
			addLog.info("Opening Browser");
			try	{
				if (data.equals("IE")) {
					System.setProperty("webdriver.ie.driver", DIR + "\\IEDriverServer.exe");
					DesiredCapabilities cap = DesiredCapabilities.internetExplorer();
					cap.setCapability(InternetExplorerDriver.INTRODUCE_FLAKINESS_BY_IGNORING_SECURITY_DOMAINS,true);
					driver = new RemoteWebDriver(new URL("http://172.16.16.45:4444/wd/hub"),cap);
					addLog.info("IE browser started");
				} else if (data.equals("Chrome")) {
					System.setProperty("webdriver.chrome.driver", DIR + "//chromedriver.exe");
					DesiredCapabilities cap = DesiredCapabilities.chrome();
					driver = new RemoteWebDriver(new URL("http://172.16.16.45:4444/wd/hub"),cap);
					addLog.info("Chrome browser started");
				}
				int implicitWaitTime = (30);
				driver.manage().window().maximize();
				driver.manage().timeouts().implicitlyWait(implicitWaitTime, TimeUnit.SECONDS);
			} catch (Exception e){
				addLog.info("Not able to open the Browser --- " + e.getMessage());
			}
		}

	/**
	 * This is particular the methods for the navigation to the URL
	 * @param object
	 * @param data
	 * @throws InterruptedException
	 */
	public static void navigate(String object, String data) throws InterruptedException {
		try {
			addLog.info("Navigating to URL");
			driver.get(data);
			Thread.sleep(3000);
		} catch (Exception e) {
			addLog.info("Not able to navigate --- " + e.getMessage());
		}
	}
	/**
	 * Login with the use of the common locator user name and password with the URL is defined in Common Locator
	 * @throws Exception 
	 */
	public static void login() throws Exception {
		try {
			driver.get(baseURL+"/#/login");
			Thread.sleep(2000);
			driver.findElement(By.xpath(commonLocator.getProperty("txtbx_username"))).sendKeys(commonLocator.getProperty("Username"));
			driver.findElement(By.xpath(commonLocator.getProperty("txtbx_password"))).sendKeys(commonLocator.getProperty("Password"));
			driver.findElement(By.xpath(commonLocator.getProperty("btn_login"))).click();
			Thread.sleep(2000);
			addLog.info("Login Successful");
		} catch(Exception e) {
			addLog.error("Failed to Login "+e);
		}
	}
	/**
	 * Fluent wait will using polling for checking an element is visible on web page or not
	 * @param driverelement
	 * @return
	 */
	public static WebElement FluetWait(WebElement driverelement) {
		Wait<WebDriver> wait = new FluentWait<WebDriver>(driver).withTimeout(30, TimeUnit.SECONDS)
				.pollingEvery(5, TimeUnit.SECONDS).ignoring(NoSuchElementException.class);
		seleniumElement = wait.until(new Function<WebDriver, WebElement>()	{
			public WebElement apply(WebDriver driver) {
				return driverelement;
			}
		});
		return seleniumElement;
	}
	public static void passLog(String logText,String object)
	{
		addLog.info(logText+" " + object);
		testReport.log(LogStatus.PASS, logText+" "  + object);
		testEmailReport.log(LogStatus.PASS, logText+" "  + object);
	}
	public static void failLog(String logText,String object,Exception e) throws Exception
	{
		addLog.error(logText+" " + e.getMessage());
		testReport.log(LogStatus.FAIL, logText+" "  + object);
		testEmailReport.log(LogStatus.FAIL, logText+" "  + object);
		CommonMethods CM = new CommonMethods();
		CM.captureScreenshot(testCaseName);
		failureCount_SeleniumFun++;
		if (failureCount_SeleniumFun > failureAllowed)
			throw e;
	}
	/**
	 * Find the element and click them by the xpath
	 * @param object
	 * @param data
	 * @throws Exception 
	 */
	public static void clickbyXpath(String object, String data) throws Exception {
		try {
			FluetWait(driver.findElement(By.xpath(objectRepository.getProperty(object))));
			seleniumElement.click();
			passLog("Clicking on Web element",object);
		} catch (Exception e) {
			failLog("Not able to click",object,e);
		}
	}
	/**
	 * The method is for the submit button
	 * @param object
	 * @param data
	 * @throws Exception 
	 */
	public static void Submit(String object, String data) throws Exception {
		try	{
			FluetWait(driver.findElement(By.xpath(objectRepository.getProperty(object))));
			seleniumElement.submit();
			passLog("Clicking on Web element",object);
		} catch (Exception e) {
			failLog("Not able to click",object,e);
		}
	}
	/**
	 * Find the element and click them by the text
	 * @param object
	 * @param data
	 * @throws Exception 
	 */
	public static void clickByText(String object, String data) throws Exception {
		try {
			FluetWait(driver.findElement(By.xpath(objectRepository.getProperty(object) + "[contains(.,'" + data + "')]")));
			seleniumElement.click();
			passLog("Clicking on Web element",object);
		} catch (Exception e) {
			failLog("Not able to click",object,e);
		}
	}
	/**
	 * Find the element and click them by the Java Script xpath
	 * @param object
	 * @param data
	 * @throws Exception 
	 */
	public static void ClickByJSXpath(String object, String data) throws Exception {
		try {
			WebElement element = driver.findElement(By.xpath(objectRepository.getProperty(object)));
			JavascriptExecutor executor = (JavascriptExecutor) driver;
			executor.executeScript("arguments[0].click();", element);
			passLog("Clicking on Web element",object);
		} catch (Exception e) {
			failLog("Not able to click",object,e);
		}
	}
	/**
	 *  Find element by locator and return text
	 * @param object
	 * @param data
	 * @return
	 * @throws Exception
	 */
	public static String FindElementbyXPath_returnText(String object, String data) throws Exception {
		String text = null;
		try	{
			text = driver.findElement(By.xpath(objectRepository.getProperty(object))).getText();
			passLog("Verifying " + data + " from the ",object);
		} catch (Exception e)	{
			failLog("Verification failed to identify an element",object,e);
		}
		return text;
	}
	/**
	 * Input the test data which are defined in test data excel file
	 * @param object
	 * @param data
	 * @throws Exception 
	 */
	public static void input(String object, String data) throws Exception {
		try {
			FluetWait(driver.findElement(By.xpath(objectRepository.getProperty(object))));
			seleniumElement.clear();
			seleniumElement.sendKeys(data);
			passLog("Entering the " + data + " in ",object);
		} catch (Exception e) {
			failLog("Entering the " + data + " in ",object,e);
		}
	}
	/**
	 * Select the value from the Drop Down
	 * @param object
	 * @param data
	 * @throws Exception 
	 */
	public static void SelectDDByValue(String object, String data) throws Exception {
		try {
			FluetWait(driver.findElement(By.xpath(objectRepository.getProperty(object))));
			Select selectByValue = new Select(seleniumElement);
			selectByValue.selectByValue(data);
			passLog("Selecting " + data + " from the drop down",object);
		} catch (Exception e) {
			failLog("Not able to select DD value ",data,e);
		}
	}
	/**
	 *  Select the value from the Drop Down by visible text
	 * @param object
	 * @param data
	 * @throws Exception 
	 */
	public static void SelectDDByVisibleText(String object, String data) throws Exception	{
		try {
			FluetWait(driver.findElement(By.xpath(objectRepository.getProperty(object))));
			Select selectByValue = new Select(seleniumElement);
			selectByValue.selectByVisibleText(data);
			passLog("Selecting " + data + " from the drop down",object);
		} catch (Exception e) {
			failLog("Not able to select DD value ",data,e);
		}
	}
	/**
	 * Upload Image control by robot class
	 * @param object
	 * @param data
	 * @throws Exception 
	 */
	public static void UploadImage(String object, String data) throws Exception {
		try {
			StringSelection stringSelection_filepath = new StringSelection(data);
			Toolkit.getDefaultToolkit().getSystemClipboard().setContents(stringSelection_filepath, null);
			Thread.sleep(500);
			Robot robot = new Robot();
			/**
			 *  Press CTRL+V
			 */
			robot.setAutoDelay(100);
			robot.keyPress(KeyEvent.VK_CONTROL);
			robot.keyPress(KeyEvent.VK_V);
			/**
			 * Release CTRL+V
			 */
			robot.keyRelease(KeyEvent.VK_V);
			robot.keyRelease(KeyEvent.VK_CONTROL);
			/**
			 * Press Enter
			 */
			robot.setAutoDelay(100);
			robot.keyPress(KeyEvent.VK_ENTER);
			robot.keyRelease(KeyEvent.VK_ENTER);
			passLog("Uploading Image for",data);
		} 	catch (Exception e)	{
			failLog("Not able to select DD value ",data,e);
		}
	}
	/**
	 *  Save export report to download directory of the system
	 *  NOTE: It will first delete all the existing files in the download directory and then save the file
	 * @param object
	 * @param data
	 * @throws Exception
	 */
	public static void SaveFile(String object, String data) throws Exception {
		try {
			File dirPath = new File(DOWNLOADPATH);
			addLog.info("Clear download directory of the system ");
			for (File f : dirPath.listFiles()) {
				if (!f.isDirectory())
					f.delete();
			}
			Robot robot = new Robot();
			robot.delay(1000);
			robot.keyPress(KeyEvent.VK_ALT);
			robot.keyPress(KeyEvent.VK_S);
			robot.delay(100);
			robot.keyRelease(KeyEvent.VK_ALT);
			robot.keyRelease(KeyEvent.VK_S);
			passLog("Save report to downloads folder","");
		} catch (AWTException e) {
			failLog("Failed to save report","",e);
		}
	}
	/**
	 *  Verify file download in the system download directory
	 * @param object
	 * @param data
	 * @throws Exception
	 */
	public static void VerifyFileDownloaded(String object, String data) throws Exception {
		try {
			File downloadDir = new File(DOWNLOADPATH);
			File[] files = downloadDir.listFiles();
			if (files == null || files.length == 0){
				actualResult = false;
				addLog.error("Not able to Verify file download");
			}
			for (int i = 1; i < files.length; i++)	{
				if (files[i].getName().contains(data))	{
					actualResult = true;
					passLog("File Downloaded Successfuly","");
				}
			}
		} catch (Exception e) {
			actualResult = false;
			failLog("Not able to Verify file download","",e);
		}
	}
}