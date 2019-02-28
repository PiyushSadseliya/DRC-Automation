package org.drc.vat.appmanager;

import java.awt.AWTException;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.net.URL;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.Proxy;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.remote.BrowserType;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import static org.drc.vat.appmanager.HelperBase.*;

public class ApplicationManager {
	private final Properties properties;
	private String browser;

	private HelperBase helperBase;

	public ApplicationManager(String browser) {
		this.browser = browser;
		System.out.println(browser);
		properties = new Properties();
	}

	public void initUrl() throws IOException, AWTException {
		String target = System.getProperty("target", "local");
		properties.load(new FileReader(new File(String.format("src/test/resources/%s.properties", target))));
		if ("".equals(properties.getProperty("selenium.server"))) {
			if (browser.equals(BrowserType.IE)) {
				// System.setProperty("webdriver.ie.driver","D:\\AutomationFHLBNY\\AuditConfirmations\\IEDriverServer.exe");
				wd = new InternetExplorerDriver();

			} else if (browser.equals(BrowserType.CHROME)) {
				System.setProperty("webdriver.CHROME.driver", System.getProperty("user.dir") + "\\chromedriver.exe");

				ChromeOptions options = new ChromeOptions();
				options.setExperimentalOption("plugins.always_open_pdf_externally", true);

				ChromeOptions co = new ChromeOptions();
				Map<String, Object> prefs = new HashMap<>();
				prefs.put("plugins.always_open_pdf_externally", true);
				co.setExperimentalOption("prefs", prefs);

				wd = new ChromeDriver(co);
			} else if (browser.equals(BrowserType.FIREFOX)) {
				System.setProperty("webdriver.gecko.driver", "F:\\DRC\\Automation\\drc_vat\\DRC_VAT\\geckodriver.exe");
				wd = new FirefoxDriver();
			}
		} else {
			DesiredCapabilities capabilities = new DesiredCapabilities();
			capabilities.setBrowserName(browser);
			wd = new RemoteWebDriver(new URL(properties.getProperty("selenium.server")), capabilities);
			System.out.println(wd);
		}

		wd.manage().window().maximize();
		wd.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		helperBase = new HelperBase(wd);

	}

	public void stop() {
		wd.quit();
		wd = null;
	}

	public HelperBase helperBase() {
		return helperBase;
	}

	public byte[] takeScreenshot() {
		return ((TakesScreenshot) wd).getScreenshotAs(OutputType.BYTES);
	}

	public File takeScreenshotAsFile() {
		return ((TakesScreenshot) wd).getScreenshotAs(OutputType.FILE);
	}

	/**
	 * Ketan.prajapati internal portal
	 */
	public void callinternalportal() throws AWTException, InterruptedException, IOException 
	{
		if (wd.getCurrentUrl().contains("8068") || wd.getCurrentUrl().contains("8042")) 
		{
			wd.close();
			Thread.sleep(2000);
			wd = new ChromeDriver();
			wd.manage().window().maximize();
			wd.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
			wd.get("http://103.249.120.58:8044");
			//Runtime.getRuntime().exec(System.getProperty("user.dir") +"\\src\\test\\resources\\authusers\\autoitsample.exe");
			Runtime.getRuntime().exec(System.getProperty("user.dir") +"\\QA_Internal_Portal_Login\\autoitsample.exe");
			clickOn("btn_windowsClick", "");			
			Thread.sleep(1000);
		}
		else {
			if (!wd.getCurrentUrl().contains("8068")) {
				wd.close();
				Thread.sleep(1000);
				wd = new ChromeDriver();
				wd.manage().window().maximize();
				Thread.sleep(2000);
				wd.get("http://103.249.120.58:8044");
				Thread.sleep(500);
				Runtime.getRuntime().exec(System.getProperty("user.dir") + "\\QA_Internal_Portal_Login\\autoitsample.exe");
				clickOn("btn_windowsClick", "");
				Thread.sleep(1000);
			}
		}
	}

	public void EFDinternalportal() throws AWTException, InterruptedException, IOException {
		if (wd.getCurrentUrl().contains("8057")) {
			wd.close();
			Thread.sleep(1000);
			wd = new ChromeDriver();
			wd.manage().window().maximize();
			wd.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
			wd.get("http://103.249.120.58:8044");
			Runtime.getRuntime().exec(System.getProperty("user.dir") +"\\QA_Internal_Portal_Login\\autoitsample.exe");
			wd.findElement(By.xpath(obj.getProperty("btn_windowsClick"))).click();
			Thread.sleep(1000);
		}
	}

	public void callmanufacturerportal() throws AWTException, InterruptedException, IOException 
	{
		wd.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		wd.get("http://103.249.120.58:8057");
	}

	public void callvendorportal() throws AWTException, InterruptedException, IOException {
		wd.get("http://103.249.120.58:8012");
	}

	public void calltaxpayerportal() throws AWTException, InterruptedException, IOException 
	{				
		if (wd.getCurrentUrl().contains("8068")) 
		{
			sleepWait(1500);
			wd.close();
			Thread.sleep(1000);
			wd = new ChromeDriver();
			wd.manage().window().maximize();
			wd.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
			wd.get("http://103.249.120.58:8042");
			Thread.sleep(1000);
		}
	}
	
	/** 
	 * Arun creted
	 */
	/*public void calltaxpayerportal() throws AWTException, InterruptedException, IOException 
	{				
		sleepWait(1500);
		wd.close();
		Thread.sleep(1000);
		wd = new ChromeDriver();
		wd.manage().window().maximize();
		wd.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		wd.get("http://103.249.120.58:8042");	
		Thread.sleep(1000);			
	}*/


	/** 
	 * Arun creted
	 */
	/*public void calltaxpayerportal() throws AWTException, InterruptedException, IOException 
	{				
		sleepWait(1500);
		wd.close();
		Thread.sleep(1000);
		wd = new ChromeDriver();
		wd.manage().window().maximize();
		wd.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		wd.get("http://103.249.120.58:8042");	

		Thread.sleep(1000);			
	}*/


	/**
	 * rohit.patil internal portal
	 */
	public void callinternalportal_TaxOfficer() throws AWTException, InterruptedException, IOException {
		if (wd.getCurrentUrl().contains("8068")) {
			wd.close();
			wd = new ChromeDriver();
			wd.manage().window().maximize();
			wd.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
			wd.get("http://103.249.120.58:8044");

			Runtime.getRuntime()
			.exec(System.getProperty("user.dir") + "\\QA_Internal_Portal_Login\\autoitsample.rohit.exe");
			wd.findElement(By.xpath(obj.getProperty("btn_windowsClick"))).click();
			Thread.sleep(1000);
		} else {
			if (!wd.getCurrentUrl().contains("8068")) {
				wd.get("http://103.249.120.58:8044");
				Runtime.getRuntime()
				.exec(System.getProperty("user.dir") + "\\QA_Internal_Portal_Login\\autoitsample.rohit.exe");
				clickOn("btn_windowsClick", "");
				Thread.sleep(1000);
			}
		}
	}

	/**
	 * pooja.parmar internal portal
	 */
	public void callinternalportal_Supervisor() throws AWTException, InterruptedException, IOException {

		if (wd.getCurrentUrl().contains("8068")) {
			wd.close();
			wd = new ChromeDriver();
			wd.manage().window().maximize();
			wd.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
			wd.get("http://103.249.120.58:8044");
			Runtime.getRuntime()
			.exec(System.getProperty("user.dir") + "\\QA_Internal_Portal_Login\\autoitsample.Supervisiour.exe");
			wd.findElement(By.xpath(obj.getProperty("btn_windowsClick"))).click();
			Thread.sleep(1000);
		} else {
			if (!wd.getCurrentUrl().contains("8068")) {
				Thread.sleep(5000);
				wd.get("http://103.249.120.58:8044");
				Runtime.getRuntime().exec(
						System.getProperty("user.dir") + "\\QA_Internal_Portal_Login\\autoitsample.Supervisiour.exe");
				clickOn("btn_windowsClick", "");
				Thread.sleep(1000);
			}
		}
	}

	/**
	 * laxman.prajapati internal portal
	 */
	public void callinternalportal_Assessment_Officer() throws AWTException, InterruptedException, IOException {
		if (wd.getCurrentUrl().contains("8068")) {
			wd.close();
			WebDriver wd = new ChromeDriver();
			wd = new ChromeDriver();
			wd.manage().window().maximize();
			wd.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
			wd.get("http://103.249.120.58:8044");
			Runtime.getRuntime().exec(System.getProperty("user.dir") + "\\QA_Internal_Portal_Login\\autoitlaxman.exe");
			wd.findElement(By.xpath(obj.getProperty("btn_windowsClick"))).click();
			Thread.sleep(1000);
		} else {
			if (!wd.getCurrentUrl().contains("8068")) {
				Thread.sleep(1000);
				wd.get("http://103.249.120.58:8044");
				Runtime.getRuntime()
				.exec(System.getProperty("user.dir") + "\\QA_Internal_Portal_Login\\autoitlaxman.exe");

				clickOn("btn_windowsClick", "");
				Thread.sleep(1000);
			}
		}
	}

	public void callurl() throws AWTException, InterruptedException {
		if (wd.getCurrentUrl().contains(":90")) {
			wd.get(properties.getProperty("web.Url"));
		} else if (wd.getCurrentUrl().contains(":8066")) {
			sleepWait(500);
		} else if (wd.getCurrentUrl().contains(":8068")) {
			sleepWait(500);
		} else if (wd.getCurrentUrl().contains(":8031")) {
			sleepWait(500);
		}else if(wd.getCurrentUrl().contains(":8027")){
			
		}
		else if (!wd.getCurrentUrl().contains(":8042")) {
			wd.get(properties.getProperty("web.Url"));
		}
	}

	/**
	 * For Demo Environment
	 */

	/**
	 * Ketan.prajapati internal portal demo
	 */
	public void callinternalportal_ketan_demo() throws AWTException, InterruptedException, IOException {
		if (wd.getCurrentUrl().contains("8031")) {
			wd.close();
			Thread.sleep(1000);
			WebDriver wd = new ChromeDriver();
			wd.manage().window().maximize();
			wd.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
			wd.get("http://103.249.120.58:8046");
			Runtime.getRuntime()
			.exec(System.getProperty("user.dir") + "\\Demo_Internal_Roles_Login\\Ketan_Internal.exe");
			Thread.sleep(1000);
		} else {
			if (!wd.getCurrentUrl().contains("8031")) {
				Thread.sleep(1000);
				wd.get("http://103.249.120.58:8046");
				Runtime.getRuntime()
				.exec(System.getProperty("user.dir") + "\\Demo_Internal_Roles_Login\\Ketan_Internal.exe");
				Thread.sleep(1000);
			}
		}
	}

	/**
	 * rohit.patil internal portal demo
	 */
	public void callinternalportal_TaxOfficer_demo() throws AWTException, InterruptedException, IOException {
		if (wd.getCurrentUrl().contains("8031")) {
			wd.close();
			WebDriver wd = new ChromeDriver();
			wd = new ChromeDriver();
			wd.manage().window().maximize();
			wd.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
			wd.get("http://103.249.120.58:8046");
			Runtime.getRuntime()
			.exec(System.getProperty("user.dir") + "\\Demo_Internal_Roles_Login\\Rohit_Internal.exe");

			Thread.sleep(1000);
		} else {
			if (!wd.getCurrentUrl().contains("8031")) {

				Runtime.getRuntime()
				.exec(System.getProperty("user.dir") + "\\Demo_Internal_Roles_Login\\Rohit_Internal.exe");
				wd.get("http://103.249.120.58:8046");

				Thread.sleep(1000);
			}
		}
	}

	/**
	 * pooja.parmar internal portal demo
	 */
	public void callinternalportal_Supervisor_demo() throws AWTException, InterruptedException, IOException {

		if (wd.getCurrentUrl().contains("8031")) {
			Thread.sleep(1000);
			WebDriver wd = new ChromeDriver();
			wd.get("http://103.249.120.58:8046");
			Runtime.getRuntime()
			.exec(System.getProperty("user.dir") + "\\Demo_Internal_Roles_Login\\Pooja_Internal.exe");

			Thread.sleep(1000);
		} else {
			if (!wd.getCurrentUrl().contains("8031")) {
				Thread.sleep(5000);
				wd.get("http://103.249.120.58:8046");
				Runtime.getRuntime()
				.exec(System.getProperty("user.dir") + "\\Demo_Internal_Roles_Login\\Pooja_Internal.exe");
				Thread.sleep(1000);
			}
		}
	}

	/**
	 * laxman.prajapati internal portal demo
	 */
	public void callinternalportal_Assessment_Officer_laxman_demo()
			throws AWTException, InterruptedException, IOException {
		if (wd.getCurrentUrl().contains("8031")) {
			Thread.sleep(1000);
			WebDriver wd = new ChromeDriver();
			wd.get("http://103.249.120.58:8046");
			Runtime.getRuntime()
			.exec(System.getProperty("user.dir") + "Demo_Internal_Roles_Login\\Laxman_Internal.exe");
			Thread.sleep(1000);
		} else {
			if (!wd.getCurrentUrl().contains("8031")) {
				Thread.sleep(1000);
				wd.get("http://103.249.120.58:8046");
				Runtime.getRuntime()
				.exec(System.getProperty("user.dir") + "Demo_Internal_Roles_Login\\Laxman_Internal.exe");
				Thread.sleep(1000);
			}
		}
	}

	public void call1trackitadminUser() throws AWTException, InterruptedException, IOException {

		wd.close();
		wd = new ChromeDriver();
		wd.manage().window().maximize();
		wd.manage().timeouts().implicitlyWait(40, TimeUnit.SECONDS);
		wd.get("http://103.249.120.58:8027");
		Thread.sleep(3000);
		Runtime.getRuntime().exec(System.getProperty("user.dir") + "\\QA_Internal_Portal_Login\\itsupportadmin.exe");
		clickOn("btn_windowsClick", "");
	}

	public void call1trackituser() throws AWTException, InterruptedException, IOException {
		wd.close();
		wd = new ChromeDriver();
		wd.manage().window().maximize();
		wd.manage().timeouts().implicitlyWait(40, TimeUnit.SECONDS);
		wd.get("http://103.249.120.58:8027");
		Thread.sleep(4000);
	}
}
