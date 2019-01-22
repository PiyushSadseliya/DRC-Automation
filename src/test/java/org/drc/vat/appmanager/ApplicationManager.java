package org.drc.vat.appmanager;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.Toolkit;
import java.awt.datatransfer.Clipboard;
import java.awt.datatransfer.StringSelection;
import java.awt.event.KeyEvent;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.net.URL;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import javax.xml.bind.DatatypeConverter;

import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.remote.BrowserType;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

public class ApplicationManager {
	private static Properties properties;
	public WebDriver wd;
	private String browser;

	private HelperBase helperBase;

	public ApplicationManager(String browser) {
		this.browser = browser;
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
				// System.setProperty("webdriver.CHROME.driver","D:\\AutomationFHLBNY\\AuditConfirmations\\chromedriver.exe");
				wd = new ChromeDriver();
			}
		} else {
			DesiredCapabilities capabilities = new DesiredCapabilities();
			capabilities.setBrowserName(browser);
			wd = new RemoteWebDriver(new URL(properties.getProperty("selenium.server")), capabilities);
			System.out.println(wd);
		}

		wd.manage().window().maximize();
		wd.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		// wd.get(properties.getProperty("web.Url"));

		helperBase = new HelperBase(wd);
		// helperBase.auth();
	}

	public void stop() {
		wd.quit();
		wd = null;
	}

	public HelperBase helperBase() {
		return helperBase;
	}

	public void callurl() throws AWTException, InterruptedException {

		wd.get(properties.getProperty("web.Url"));
	}

	public void callinternalportaladmin() throws AWTException, InterruptedException, IOException {
		
		wd.get("http://103.249.120.58:8044");
		// wd.findElement(By.xpath("//*[contains(@alt,'Windows
		// Authentication')]")).click();
		Runtime.getRuntime()
		.exec(System.getProperty("user.dir") + "\\autoitsample.exe",
				null, new File(
						"D:\\Office\\DRC\\DRC_Smoke Suite\\DRC-Automation\\"));
		wd.findElement(By.xpath("//*[contains(@alt,'Windows Authentication')]")).click();
		Thread.sleep(5000);

		// wd.get("http://103.249.120.58:8044");
		Thread.sleep(8000);
	}

	public void callinternalportalsuper() throws AWTException, InterruptedException, IOException {
		wd.get("http://103.249.120.58:8044");
		Runtime.getRuntime().exec(
				"\\super.exe");
		wd.findElement(By.xpath("//*[contains(@alt,'Windows Authentication')]")).click();
		Thread.sleep(5000);

	}

	public void callmanufactoreportal() throws AWTException, InterruptedException, IOException {
		wd.get("http://103.249.120.58:8057");
	}

	public void callvendorportal() throws AWTException, InterruptedException, IOException {
		wd.get("http://103.249.120.58:8012");
	}

	public byte[] takeScreenshot() {
		return ((TakesScreenshot) wd).getScreenshotAs(OutputType.BYTES);
	}

	public File takeScreenshotAsFile() {
		return ((TakesScreenshot) wd).getScreenshotAs(OutputType.FILE);
	}

	public static void auth() throws AWTException {
		// String decoded = new
		// String(DatatypeConverter.parseBase64Binary(properties.getProperty("pw")));
		Robot robot = new Robot();

		robotType(robot, properties.getProperty("username"));
		robot.keyPress(KeyEvent.VK_TAB);
		robotType(robot, properties.getProperty("password"));
		// robot.keyPress(KeyEvent.VK_TAB);
		// robotType(robot, decoded);
		robot.keyPress(KeyEvent.VK_ENTER);
	}

	private static void robotType(Robot robot, String characters) {
		Clipboard clipboard = Toolkit.getDefaultToolkit().getSystemClipboard();
		StringSelection stringSelection = new StringSelection(characters);
		clipboard.setContents(stringSelection, stringSelection);

		robot.delay(500);
		robot.keyPress(KeyEvent.VK_CONTROL);

		robot.keyPress(KeyEvent.VK_V);
		robot.keyRelease(KeyEvent.VK_V);
		robot.keyRelease(KeyEvent.VK_CONTROL);
		robot.delay(500);
	}

}
