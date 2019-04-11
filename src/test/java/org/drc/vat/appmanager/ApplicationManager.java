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
import org.apache.log4j.Logger;
import static org.drc.vat.appmanager.HelperBase.*;
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
	public static Logger Add_Log = null;

	public ApplicationManager(String browser) {
		this.browser = browser;
		properties = new Properties();
	}

	public void initUrl() throws IOException, AWTException {
		Add_Log = Logger.getLogger("rootLogger");
		String target = System.getProperty("target", "local");
		properties.load(new FileReader(new File(String.format("src/test/resources/%s.properties", target))));
		if ("".equals(properties.getProperty("selenium.server"))) {
			if (browser.equals(BrowserType.IE)) {
				wd = new InternetExplorerDriver();
			} else if (browser.equals(BrowserType.CHROME)) {
				wd = new ChromeDriver();
			}
		} else {
			DesiredCapabilities capabilities = new DesiredCapabilities();
			capabilities.setBrowserName(browser);
			wd = new RemoteWebDriver(new URL(properties.getProperty("selenium.server")), capabilities);
			System.out.println(wd);
		}
		wd.manage().window().maximize();
		wd.manage().timeouts().implicitlyWait(80, TimeUnit.SECONDS);
		helperBase = new HelperBase(wd);
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
		Runtime.getRuntime()
		.exec(System.getProperty("user.dir") + "\\src\\test\\resources\\Auth\\admin.exe");
		wd.get("http://103.249.120.58:8043");
		sleepWait(500);
		
		//wd.findElement(By.xpath("//*[contains(@alt,'Windows Authentication')]")).click();
		
	}

	public void callinternalportalsupervisor() throws AWTException, InterruptedException, IOException {
		Runtime.getRuntime()
		.exec(System.getProperty("user.dir") + "\\src\\test\\resources\\Auth\\supervisor.exe");
		wd.get("http://103.249.120.58:8043");
	
		//wd.findElement(By.xpath("//*[contains(@alt,'Windows Authentication')]")).click();
		sleepWait(2000);

	}

	public void callmanufacturerportal() throws AWTException, InterruptedException, IOException {
		wd.get("http://103.249.120.58:8057");
	}

	public void callvendorportal() throws AWTException, InterruptedException, IOException {
		wd.get("http://103.249.120.58:8012");
	}

	public void callinternalportaltaxofficer() throws AWTException, InterruptedException, IOException {
		Runtime.getRuntime()
		.exec(System.getProperty("user.dir") + "\\src\\test\\resources\\Auth\\taxofficer.exe");
		wd.get("http://103.249.120.58:8043");
		
		//wd.findElement(By.xpath("//*[contains(@alt,'Windows Authentication')]")).click();
		sleepWait(1000);
	}

	public void call1trackitadminUser() throws AWTException, InterruptedException, IOException {
		Runtime.getRuntime().exec(System.getProperty("user.dir") + "\\src\\test\\resources\\Auth\\itsupportadmin.exe");
		wd.get("http://103.249.120.58:8027");
		wd.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);

		//clickOn("btn_windowsClick", "");
	}

	public void call1trackituser() throws AWTException, InterruptedException, IOException {
		wd.get("http://103.249.120.58:8027");
	}

	public byte[] takeScreenshot() {
		return ((TakesScreenshot) wd).getScreenshotAs(OutputType.BYTES);
	}

	public File takeScreenshotAsFile() {
		return ((TakesScreenshot) wd).getScreenshotAs(OutputType.FILE);
	}

	public static void auth() throws AWTException {

		Robot robot = new Robot();
		robotType(robot, properties.getProperty("username"));
		robot.keyPress(KeyEvent.VK_TAB);
		robotType(robot, properties.getProperty("password"));

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
