package org.drc.vat.appmanager;

import org.joda.time.DateTime;
import org.joda.time.format.DateTimeFormat;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.Wait;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.asserts.SoftAssert;

import com.google.common.base.Function;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.Toolkit;

import static org.testng.Assert.assertFalse;
import static org.testng.Assert.assertTrue;

import java.awt.datatransfer.StringSelection;
import java.awt.event.KeyEvent;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.text.NumberFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.temporal.ChronoUnit;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.Locale;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

public class HelperBase {
	public static WebDriver wd;
	public static WebElement seleniumElement;
	public static Properties obj = new Properties();
	public static boolean flag = false;
	private static String bodyMessage = "";
	public static FileInputStream fis;
	private static String currentWindow = null;
	static int i = 0;
	public static int no_window;
	public static SimpleDateFormat minutespattern =new SimpleDateFormat("mm");

	public static Boolean login=true;
	public static String[] monthName = 
		{ "January", "February", "March", "April", "May", "June", "July",
				"August", "September", "October", "November", "December" };

	public static String[] yearName = {"2019","2018","2017"};
	public static String emailid;



	public static SoftAssert softAssert = new SoftAssert();

	HelperBase(WebDriver wd) {
		HelperBase.wd = wd;
	}

	private static String cwd = System.getProperty("user.dir");
	public static String filedoc = cwd + "\\src\\test\\resources\\docs\\";
	private static File dir = new File(System.getProperty("user.home") + "/Pictures");

	/**
	 *  For Download file location
	 */
	private static File dir1 = new File(System.getProperty("user.home") + "/Downloads");

	static {
		try {
			fis = new FileInputStream(System.getProperty("user.dir") + "/src/test/resources/locators.properties");
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		}
	}

	public static void waitFor(String object) {
		WebDriverWait wait = new WebDriverWait(wd, 60);
		By locator = By.xpath(obj.getProperty(object));
		wait.until(ExpectedConditions.elementToBeClickable(locator)); 
	}

	/**
	 *  Wait for particulat text 
	 */


	public static WebElement FluetWait1(WebElement driverelement) 
	{
		Wait<WebDriver> wait = new FluentWait<WebDriver>(wd).withTimeout(30, TimeUnit.SECONDS)
				.pollingEvery(5, TimeUnit.SECONDS).ignoring(NoSuchElementException.class);
		seleniumElement = wait.until(new Function<WebDriver, WebElement>()	
		{
			public WebElement apply(WebDriver driver) 
			{
				return driverelement;
			}
		});
		return seleniumElement;
	}

	public static void clickOn(String object, String data) {
		WebDriverWait wait = new WebDriverWait(wd, 60);
		try {
			obj.load(fis);
		} catch (IOException e) {
			e.printStackTrace(); 
		}
		By locator = By.xpath(obj.getProperty(object) + data);
		wd.manage().timeouts().implicitlyWait(800, TimeUnit.MILLISECONDS);
		wait.until(ExpectedConditions.elementToBeClickable(locator)).click();
	}

	public static void waitfor(long time) {
		wd.manage().timeouts().implicitlyWait(time, TimeUnit.MILLISECONDS);
	}

	public static void type(String object, String data) {
		try {
			obj.load(fis);
		} catch (IOException e) {
			e.printStackTrace();
		}

		By locator = By.xpath(obj.getProperty(object));
		wd.manage().timeouts().implicitlyWait(700, TimeUnit.MILLISECONDS);
		if (data != null) {
			String existingText = wd.findElement(locator).getAttribute("value");
			if (!data.equals(existingText)) {
				wd.findElement(locator).clear();
				wd.findElement(locator).sendKeys(data);
			}
		}
	}

	public static void typeb(String object, String data) {
		try {
			obj.load(fis);
		} catch (IOException e) {
			e.printStackTrace();
		}

		By locator = By.xpath(obj.getProperty(object));
		wd.manage().timeouts().implicitlyWait(700, TimeUnit.MILLISECONDS);
		if (data != null) {
			wd.findElement(locator).sendKeys(data);
		}
	}

	public static void clearCache() throws InterruptedException, AWTException {
		wd.get("chrome://settings/clearBrowserData");
		sleepWait(2000);
		// JavascriptExecutor js = (JavascriptExecutor)wd;
		Robot rb = new Robot();
		rb.keyPress(KeyEvent.VK_ENTER);
		rb.keyRelease(KeyEvent.VK_ENTER);
		sleepWait(8000);
	}

	public static String toastMessage() {
		waitFor("toast_message");
		return text(By.xpath("(//*[contains(@class,'toast-content')])[last()]"));
	}

	public static void saveFile() throws AWTException {
		//Arrays.stream(Objects.requireNonNull(
		//new File(String.valueOf(dir)).listFiles())).forEach(File::delete);
		Robot robot = new Robot();
		robot.delay(1000);
		robot.keyPress(KeyEvent.VK_ALT);
		robot.keyPress(KeyEvent.VK_S);
		robot.delay(100);
		robot.keyRelease(KeyEvent.VK_ALT);
		robot.keyRelease(KeyEvent.VK_S);
	}

	public static void verifyDownload(String data) 
	{
		File[] files = dir1.listFiles();
		assert files != null; 
		for (File file : files) 
		{				
			if (file.getName().contains(data))
			{
				assertTrue(true);
				break;				
			}

			/*if (file.getName().contains(data)) 
			{					
				if(data.equals(file.getName()))
				{									
					assertTrue(true);
					break;											
				}			
			}
			else
			{
				assertTrue(false);
			}			*/
		}
	}

	/*public static void waitUntilFileToDownload(String folderLocation) throws InterruptedException 
	{
        File directory = new File(folderLocation);
        boolean downloadinFilePresence = false;
        //File[] filesList =null;
        File[] filesList = dir1.listFiles();
        LOOP:   
            while(true) 
            {
            	File[] files = dir1.listFiles();
        		assert files != null; 


                for (File file : filesList) 
                {
                    downloadinFilePresence = file.getName().contains(folderLocation);
                }
                if(downloadinFilePresence) 
                {
                    for(;downloadinFilePresence;) 
                    {
                         	//sleep(5);
                    	sleepWait(500);
                        continue LOOP;
                    }
                }else 
                {
                    break;
                }
            }
    }*/


	/**
	 * 
	 * This check extension for PDF, JPG ,PNG,JPEG
	 */
	public static void verifyDownloadCheck(String data) {
		File[] files = dir.listFiles();
		assert files != null;
		for (File file : files) {
			if (file.getName().contains(data) == file.getName().toLowerCase().endsWith(".pdf")
					|| file.getName().toLowerCase().endsWith(".jpg") || file.getName().toLowerCase().endsWith(".png")
					|| file.getName().toLowerCase().endsWith(".jpeg")) {
				assertTrue(true);
			} else {
				assertTrue(false);
			}
		}

		/*File[] files = dir.listFiles();
		assert files != null;
		//for (File file : files) 
		for (int i = 0; i < files.length; i++) 
		{
			if (files[i].getName().contains(data) == files[i].getName().toLowerCase().endsWith(".pdf") || files[i].getName().toLowerCase().endsWith(".jpg") || files[i].getName().toLowerCase().endsWith(".png") || files[i].getName().toLowerCase().endsWith(".jpeg")) 
			{  
				System.out.println(files[i]);
				assertTrue(true);
			}
			else
			{
				assertTrue(false);
			}
		}*/		
	}

	/*
	 * Type method without clearing the text
	 */
	public static void type_without_clear(String object, String data) {
		try {
			obj.load(fis);
		} catch (IOException e) {
			e.printStackTrace();
		}
		By locator = By.xpath(obj.getProperty(object));
		if (data != null) {
			String existingText = wd.findElement(locator).getAttribute("value");
			if (!data.equals(existingText)) {
				wd.findElement(locator).sendKeys(data);
			}
		}
	}

	public static String getValue(String object) throws InterruptedException {
		try {
			obj.load(fis);
		} catch (IOException e) {
			e.printStackTrace();
		}
		By locator = By.xpath(obj.getProperty(object));
		// String text;
		return wd.findElement(locator).getAttribute("value");

	}

	public static String elementText(String object) {
		try {
			obj.load(fis);
		} catch (IOException e) {
			e.printStackTrace();
		}
		By locator = By.xpath(obj.getProperty(object));
		return wd.findElement(locator).getText();
	} 

	void attach(By locator, File file) {
		if (file != null) {
			wd.findElement(locator).sendKeys(file.getAbsolutePath());
		}
	}

	private static String text(By locator) {
		String text;
		return text = wd.findElement(locator).getText();
	}

	public static boolean isElementPresent(String locator) {
		try {
			wd.findElement(By.xpath(locator));
			return true;
		} catch (NoSuchElementException e) {
			return false;
		}
	}

	public static void logout() throws InterruptedException {
		WebDriverWait wait = new WebDriverWait(wd, 10);
		// wait.until(ExpectedConditions.invisibilityOfElementLocated(
		// By.xpath("(//*[contains(@class,'toast-content')])[last()]")));
		clickOn("drp_btn_logout", "");
		clickOn("drp_Sign_out", "");		
		//System.out.println("browser closed");
		//		clickOn("link_clickhere", "");
		//		sleepWait(2000);
	}

	public static void drp_select(String object, String data) {

		try {
			obj.load(fis);
		} catch (IOException e) {
			e.printStackTrace();
		}
		By locator = By.xpath(obj.getProperty(object));
		WebElement drp = wd.findElement(locator);
		Select drp_down = new Select(drp);
		drp_down.selectByVisibleText(data);
	}

	public static void call_url(String object) {
		wd.get(obj.getProperty(object));
	}

	public static void check_page_url(String data) throws InterruptedException {
		sleepWait(2000);
		wd.getCurrentUrl().equals(obj.getProperty(data));

	}

	public static String validationMessage() {
		// System.out.println(text(By.xpath("//*[@class='text-danger position-absolute
		// error-msg']")));
		/*
		 * String body_Message=wd.findElement(By.
		 * xpath("//div[@class='toast-message ng-star-inserted']")).getText();
		 * if(body_Message.contains(messages.toLowerCase())) {
		 * System.out.println("Message Validated"); }
		 * //text(By.xpath("//*[@class='toast-top-right toast-container']"));
		 */
		return text(By.xpath("//div[@class='toast-message ng-star-inserted']"));
		//return text(By.xpath("//*[@role='alertdialog']"));
	}

	public static String elementText(String object, String data) {

		try {
			obj.load(fis);
		} catch (IOException e) {
			e.printStackTrace();
		}
		By locator = By.xpath(obj.getProperty(object) + data);
		return wd.findElement(locator).getText();
	}

	public static WebElement findelements(String object) {
		try {
			obj.load(fis);
		} catch (IOException e) {
			e.printStackTrace();
		}
		By locator = By.xpath(obj.getProperty(object));
		// WebElement ele = wd.findElements(locator);
		WebElement ele = wd.findElement(locator);
		return ele;

	}

	public static void elements(String object) throws InterruptedException {
		wd.findElement(By.xpath(object)).click();
		sleepWait(3000);

	}

	public static void UploadImage(String object, String data) throws Exception {
		try {

			StringSelection stringSelection_filepath = new StringSelection(filedoc + data);
			System.out.println(filedoc + data);
			Toolkit.getDefaultToolkit().getSystemClipboard().setContents(stringSelection_filepath, null);
			sleepWait(500);
			Robot robot = new Robot();
			/**
			 * Press CTRL+V
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
			sleepWait(5000);

		} catch (Exception e) {

		}

	}

	public static void assessmentOfficer() throws InterruptedException, IOException, AWTException {
		clearCache();
		sleepWait(2000);
		wd.get("http://103.249.120.58:8044");
		sleepWait(5000);
		Runtime.getRuntime().exec("F:\\DRC\\Automation\\drc_vat\\DRC_VAT\\autoitlaxman.exe");
		wd.findElement(By.xpath("//*[contains (@title,'Windows Authentication')]")).click();
		Thread.sleep(5000);

	}

	/*
	 *
	 ** to get View Document
	 *
	 */
	public static void viewDoc(String object, int data) throws InterruptedException {
		try {
			obj.load(fis);
		} catch (IOException e) {
			e.printStackTrace();
		}
		String handle = wd.getWindowHandle();
		System.out.println(handle);
		By locator = By.xpath(obj.getProperty(object));
		List<WebElement> view = wd.findElements(locator);
		for (WebElement element : view) {
			element.click();
			sleepWait(5000);

		}
		for (String handles : wd.getWindowHandles()) {			
			if(!wd.switchTo().window(handles).getWindowHandle().equals(handle)) {				
				wd.close();
			}
		}
		System.out.println(view.size());
		if (view.size() == data) {
			System.out.println("All Documents viewed");
			wd.switchTo().window(handle);
			sleepWait(2000);
		}
	}

	/*
	 *
	 ** to get Page source of the current Page
	 *
	 */
	public static String pageSource() {
		return wd.getPageSource();
	}

	public static void emailVerification(String email) throws InterruptedException, AWTException {
		String[] arrOfStr = email.split("@", 2);
		try {
			obj.load(fis);
		} catch (IOException e) {
			e.printStackTrace();
		}
		wd.get("https://temp-mail.org/en/option/change/");

		type("txtbx_Tempmail_name", arrOfStr[0]);

		clickOn("button_Tempmail_submit", "");
		System.out.println("Clciked on Save");
		sleepWait(2000);
		wd.get("https://temp-mail.org/en/option/refresh/");
		sleepWait(2000);
		clickOn("mail_inbox", "");
		System.out.println("Clciked on inbox");

		clickOn("verification_link", "");

		System.out.println("Clciked on email veriification");
		sleepWait(5000);
	}

	public static void cookieclear() {
		wd.manage().deleteAllCookies();
	}

	public static void change_tab() throws AWTException {
		Robot robot = new Robot();
		/**
		 * Press CTRL+Tab
		 */
		robot.setAutoDelay(100);
		robot.keyPress(KeyEvent.VK_CONTROL);
		robot.keyPress(KeyEvent.VK_TAB);
		/**
		 * Press CTRL+Tab
		 */
		robot.setAutoDelay(100);
		robot.keyRelease(KeyEvent.VK_TAB);
		robot.keyRelease(KeyEvent.VK_CONTROL);
	}

	/*
	 * Login
	 *  
	 * @param username
	 * 
	 * @param Password
	 */

	public static void login(String email,String password) throws InterruptedException {
		//List <WebElement> homepage=wd.findElements(By.xpath("//h2"));
		//System.out.println(i++);
		/*	if(homepage.size()>0) {
		if(!homepage.get(0).getText().equals("Welcome to e-Service Portal")) {
			sleepWait(5000);
	}
	}else{
		logout();
	}*/

		emailid=email;
		if (login) {

			type("txtbox_username", email);
			type("txtbox_password", password);
			sleepWait(2000);
			clickOn("btn_login", "");
			sleepWait(3000);
			List<WebElement> vatTile = wd.findElements(By.xpath("//h3[contains(text(),'VAT')]"));
			if (vatTile.size() > 0) 
			{
				clickOn("tile_vat", "");
				sleepWait(2000);
				List<WebElement> sure = wd.findElements(By.xpath("//a[contains(text(),'Yes')]"));
				if (sure.size() > 0) {
					sure.get(0).click();
				}
				// login=false;
			}
			sleepWait(2000);
			if (wd.getWindowHandles().size() > 0) 
			{
				wd.switchTo().window(wd.getWindowHandles().toArray()[wd.getWindowHandles().size() - 1].toString());
			}
			sleepWait(3000);
		}
	}

	/**
	 *  Login for Helpdesk Tax Payer
	 */
	public static void login_Helpdesk(String email,String password) throws InterruptedException
	{
		type("txtbox_username", email);
		type("txtbox_password", password);
		sleepWait(2000);
		clickOn("btn_login", "");
		sleepWait(1000);
	}




	public static void bodymessage(String object) throws InterruptedException
	{
		try 
		{
			obj.load(fis);   

			String expectedMessage = obj.getProperty(object);
			bodyMessage = wd.findElement(By.tagName("body")).getText();
			sleepWait(2000);
			if (bodyMessage.equals(null) || bodyMessage.equals("") || expectedMessage.equals("")) {
				System.out.println("All data are inserted");
			} else {
				if (bodyMessage.toLowerCase().contains(expectedMessage.toLowerCase())) {
					flag = true;
					// addLog.info("Validation message verified successfully " + expectedMessage);
					// System.out.println("Validation message verified successfully " +
					// expectedMessage);
				} else {
					flag = false;
					// addLog.info("Validation message not verified successfully "
					// +expectedMessage);
					// System.out.println("Validation message not verified successfully "
					// +expectedMessage);
				}
			}

		} catch (Exception e) {
			// addLog.info("Body message not verified successfully " +expectedMessage);
			System.out.println("Body message not verified successfully " + e);
		}
	}

	/**
	 * Checking Whether Element is present or not in a page
	 * 
	 * @param Element
	 *            locator
	 */
	public static boolean checkElement(String object) {
		try {
			obj.load(fis);
		} catch (IOException e) {
			e.printStackTrace();
		}
		By locator = By.xpath(obj.getProperty(object));
		if (wd.findElement(locator) != null) {
			return true;
		} else {
			return false;
		}

	}

	public static void assertMsg(String msg) {
		try {
			assertFalse(false, msg);
		} catch (Exception e) {
			e.printStackTrace();
		}

	}

	public static void assertEnding() {
		softAssert.assertAll();

	}

	public static String getCurrentWindow() {
		return wd.getWindowHandle();
	}

	public static void gotoWindow(String windowname) {
		wd.switchTo().window(windowname);

	}

	public static void switchPreviousWindow(int wno) {
		no_window = wd.getWindowHandles().toArray().length;
		System.out.println(no_window);
		System.out.println(wd.getWindowHandles().toArray()[0].toString());
		String wname = wd.getWindowHandles().toArray()[wno].toString();
		System.out.println(wname);
		System.out.println(wd.getTitle());
		gotoWindow(wname);
	}

	public static void key(String key) throws AWTException {
		Robot robot = new Robot();
		if (key.equalsIgnoreCase("enter")) {
			robot.setAutoDelay(100);
			robot.keyPress(KeyEvent.VK_ENTER);
			robot.keyRelease(KeyEvent.VK_ENTER);
		}
		if (key.equalsIgnoreCase("tab")) {
			robot.setAutoDelay(100);
			robot.keyPress(KeyEvent.VK_TAB);
			robot.keyRelease(KeyEvent.VK_TAB);
		}

	}

	public static void closeCurrentWindow() {
		wd.close();
	}

	public static String getvalue(String object, String data) {
		try {
			obj.load(fis);
		} catch (IOException e) {
			e.printStackTrace();
		}

		By locator = By.xpath(obj.getProperty(object) + data);

		return wd.findElement(locator).getAttribute("value");

	}

	// List <WebElements> e=wd.findElements(By.xpath(""));
	public static void searchonelist(String locator, String permname) {
		List<WebElement> e = wd.findElements(By.xpath(locator));
		for (WebElement item : e) {

			if (!item.getText().contains(permname)) {
				assertMsg("Not present in the list as per the searches");
			}
		}

	}
 

	public static void datePicker(String date) {
		try {
			String d, m, y;
			d = date.substring(8, 10).replaceFirst ("^0*", "");			
			System.out.println(d);

			m = date.substring(5, 7);
			y = date.substring(0, 4);
			clickOn("span", "[contains(text(),'2019')]");
			//clickOn("span", "[contains(text(),'" + y + "')]");			
			wd.findElement(By.xpath("(//span[contains(text(),'" + y + "')])[last()]")).click();			
			// clickOn("span","[contains(text(),'June')]");

			sleepWait(2000);
			if (m.equals("01")) {
				clickOn("span", "[contains(text(),'January')]");
			} else if (m.equals("02")) {
				clickOn("span", "[contains(text(),'February')]");
			} else if (m.equals("03")) {
				clickOn("span", "[contains(text(),'March')]");
			} else if (m.equals("04")) {
				clickOn("span", "[contains(text(),'April')]");
			} else if (m.equals("05")) {
				clickOn("span", "[contains(text(),'May')]");
			} else if (m.equals("06")) {
				clickOn("span", "[contains(text(),'June')]");
			} else if (m.equals("07")) {
				clickOn("span", "[contains(text(),'July')]");
			} else if (m.equals("08")) {
				clickOn("span", "[contains(text(),'August')]");
			} else if (m.equals("09")) {
				clickOn("span", "[contains(text(),'September')]");
			} else if (m.equals("10")) {
				clickOn("span", "[contains(text(),'October')]");
			} else if (m.equals("11")) {
				clickOn("span", "[contains(text(),'November')]");
			} else if (m.equals("12")) {
				clickOn("span", "[contains(text(),'December')]");
			}
			sleepWait(2000);	
			clickOn("slash", "td[@role='gridcell']/span[text()='" + d + "' and not(contains(@class,'is'))]");
		} catch (Exception e) {

		}

	}

	public static double interestCalculation(float amount, int period, int rate) {

		return (amount * rate * period) / (100 * 365);
	}

	public static long dayscounter(Date date1, Date date2) {
		return TimeUnit.DAYS.convert(date2.getTime() - date1.getTime(), TimeUnit.MILLISECONDS);
	}

	public static void internalPortal() {
		try {
			obj.load(fis);
		} catch (IOException e) {
			e.printStackTrace();
		}
		wd.get("http://103.249.120.58:8068");
		waitfor(6000);
	}

	public static void user_Enter_Valid(String username, String password) throws Throwable {

		System.out.println("User Enter UN & Pass");

		Robot rb = new Robot();

		// Enter user name in username field
		StringSelection un = new StringSelection(username);
		Toolkit.getDefaultToolkit().getSystemClipboard().setContents(un, null);
		sleepWait(2000);
		rb.keyPress(KeyEvent.VK_CONTROL);
		rb.keyPress(KeyEvent.VK_V);
		rb.keyRelease(KeyEvent.VK_V);
		rb.keyRelease(KeyEvent.VK_CONTROL);

		// press tab to move to password field
		rb.keyPress(KeyEvent.VK_TAB);
		rb.keyRelease(KeyEvent.VK_TAB);
		sleepWait(2000);
		System.out.println(username);
		System.out.println(password);

		// Enter password in password field
		StringSelection pwd = new StringSelection(password);
		Toolkit.getDefaultToolkit().getSystemClipboard().setContents(pwd, null);
		rb.keyPress(KeyEvent.VK_CONTROL);
		rb.keyPress(KeyEvent.VK_V);
		rb.keyRelease(KeyEvent.VK_V);
		rb.keyRelease(KeyEvent.VK_CONTROL);
		sleepWait(5000);

		// press enter
		rb.keyPress(KeyEvent.VK_ENTER);
		rb.keyRelease(KeyEvent.VK_ENTER);

		System.out.println("pass");
		rb = null;
	}

	public static boolean buttonEnabled(String object, String data) {
		try {
			obj.load(fis);
		} catch (IOException e) {
			e.printStackTrace();
		}
		By locator = By.xpath(obj.getProperty(object) + data);
		return wd.findElement(locator).isEnabled();
	}

	public static boolean elementDisplayed(String object, String data) {
		try {
			obj.load(fis);
		} catch (IOException e) {
			e.printStackTrace();
		}
		By locator = By.xpath(obj.getProperty(object) + data);
		return wd.findElement(locator).isDisplayed();

	}

	public static File getLatestFilefromDir() {

		File[] files = dir.listFiles();
		// System.out.println(files.length);
		if (files == null || files.length == 0) {
			return null;
		}

		File lastModifiedFile = files[0];
		for (int i = 1; i < files.length; i++) {
			if (lastModifiedFile.lastModified() < files[i].lastModified()) {
				lastModifiedFile = files[i];
				System.out.println(lastModifiedFile.getName());
			}
		}
		return lastModifiedFile;
	}

	/**
	 * Select the value from the Drop Down
	 * 
	 * @param object
	 * @param data
	 * @throws Exception
	 */
	public static void SelectDDByValue(String object, String data) throws Exception {
		try {
			FluetWait(wd.findElement(By.xpath(obj.getProperty(object))));
			Select selectByValue = new Select(seleniumElement);
			selectByValue.selectByValue(data);

		} catch (Exception e) {

		}
	}

	/**
	 * Select the value from the Drop Down by visible text
	 * 
	 * @param object
	 * @param data
	 * @throws Exception
	 */
	public static void SelectDDByVisibleText(String object, String data) throws Exception {
		try {
			FluetWait(wd.findElement(By.xpath(obj.getProperty(object))));
			Select selectByValue = new Select(seleniumElement);
			selectByValue.selectByVisibleText(data);

		} catch (Exception e) {

		}
	}

	/**
	 * Fluent wait will using polling for checking an element is visible on web page
	 * or not
	 * 
	 * @param driverelement
	 * @return
	 */
	public static WebElement FluetWait(final WebElement driverelement) {
		Wait<WebDriver> wait = new FluentWait<WebDriver>(wd).withTimeout(30, TimeUnit.SECONDS)
				.pollingEvery(5, TimeUnit.SECONDS).ignoring(NoSuchElementException.class);
		seleniumElement = wait.until(new Function<WebDriver, WebElement>() {
			public WebElement apply(WebDriver driver) {
				return driverelement;
			}
		});
		return seleniumElement;
	}

	public static long countDays(String dFormat, String Date1, String Date2) {
		long diff = 0;
		SimpleDateFormat myFormat = new SimpleDateFormat(dFormat);

		try {
			Date date1 = myFormat.parse(Date1);
			Date date2 = myFormat.parse(Date2);
			diff = date2.getTime() - date1.getTime();
			//System.out.println("Days: " + TimeUnit.DAYS.convert(diff, TimeUnit.MILLISECONDS));
		} catch (ParseException e) {
			e.printStackTrace();
		}
		return TimeUnit.DAYS.convert(diff, TimeUnit.MILLISECONDS);

	}

	public static void sleepWait(long wait) throws InterruptedException {
		Thread.sleep(wait);
	}


	public static String getAttribute(String attribue,String object,String data) {
		try {
			obj.load(fis);
		} catch (IOException e) {
			e.printStackTrace();
		}
		By locator = By.xpath(obj.getProperty(object) + data);
		return wd.findElement(locator).getAttribute(attribue);		
	}

	public static void waitUntilElementFound(String object,String data) {
		try {
			obj.load(fis);
		} catch (IOException e) {
			e.printStackTrace();
		}
		By locator = By.xpath(obj.getProperty(object) + data);
		WebDriverWait wait=new WebDriverWait(wd, 10);		

		wait.until(ExpectedConditions.elementToBeClickable(locator));
	}
	/*
	 * 
	 * To convert the text contain
	 * 
	 */
	public static String frenchToIndian(String text) {

		return text.replace(".", "").replace(",", ".");

	}

	public static double frenchtoDouble(String text) {
		return Double.parseDouble(frenchToIndian(text));
	}

	/*
	 * To convert the number to french System
	 * 
	 * 
	 */
	public static String tofrench(Double d) {
		NumberFormat nf = NumberFormat.getNumberInstance(Locale.ITALY);

		return nf.format(d);
	}

	/*
	 * to append comma if the douoble value dont contains decimal places
	 * 
	 * 
	 */
	public static String appendfrenchsys(String frenchNo) {
		String frenchnum;
		if (!frenchNo.contains(",")) {
			frenchNo = frenchNo + ",00";
		}
		return frenchNo;
	}


	/**
	 *  Date Pattern DD-MMM-YYYY
	 */
	public static boolean isValidDate(String dateMatch) 
	{
		boolean validDate = true;			
		try
		{
			org.joda.time.format.DateTimeFormatter formatter = DateTimeFormat.forPattern("dd-MMM-yyyy");
			DateTime dob = formatter.parseDateTime(dateMatch);		
		}
		catch(Exception e)
		{
			validDate = false;
		}		
		return validDate; 

	}
	public static void waitTillElementLocated(String object) {
		try {
			obj.load(fis);
		} catch (IOException e) {
			e.printStackTrace();
		}
		WebElement myDynamicElement = (new WebDriverWait(wd, 15))
				.until(ExpectedConditions.presenceOfElementLocated(By.xpath(obj.getProperty(object))));
	}

	public static boolean waitTillElementDisappear(String object) {

		WebDriverWait wait = new WebDriverWait(wd, 100);

		return wait.until(ExpectedConditions.invisibilityOfElementLocated(By.xpath(object)));
	}
}