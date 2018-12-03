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
import static org.drc.vat.appmanager.HelperBase.*;
import org.openqa.selenium.By;

//import javax.xml.bind.DatatypeConverter;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.remote.BrowserType;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.drc.vat.appmanager.*;

public class ApplicationManager {
	private final Properties properties;
	public WebDriver wd;
	private String browser;
	public static final String dir = System.getProperty("user.dir");
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
				System.setProperty("webdriver.ie.driver", "D:\\DRC_Cucumber\\DRC_VAT\\IEDriverServer.exe");
				wd = new InternetExplorerDriver();

			} else if (browser.equals(BrowserType.CHROME)) {
				System.setProperty("webdriver.CHROME.driver", "D:\\DRC_Cucumber\\DRC_VAT\\chromedriver.exe");
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

		/*
		 * if auto it is used than comment wd.get(properties.getProperty("web.Url"));
		 */
		// wd.get(properties.getProperty("web.Url"));

		helperBase = new HelperBase(wd);
		// auth();

	}

	public void stop() {
		wd.quit();
		wd = null;
	}

	public HelperBase helperBase() {
		return helperBase;
	}

	
	/**
	 *  Ketan.prajapati internal portal
	 */
	public void callinternalportal() throws AWTException, InterruptedException, IOException 
	{
		if (wd.getCurrentUrl().contains("8068")) 
		{			
			wd.close();
			Thread.sleep(1000);
			WebDriver wd = new ChromeDriver();
			 wd.manage().window().maximize();
			 wd.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
			wd.get("http://103.249.120.58:8044");
			Runtime.getRuntime().exec(System.getProperty("user.dir") +"\\autoitsample.exe.exe");
			wd.findElement(By.xpath(obj.getProperty("btn_windowsClick"))).click();
			Thread.sleep(1000);
		}
		else
		{
			if (!wd.getCurrentUrl().contains("8068")) 
			{
				Thread.sleep(1000);
				wd.get("http://103.249.120.58:8044");
				Runtime.getRuntime().exec(System.getProperty("user.dir") +"\\autoitsample.exe");
				clickOn("btn_windowsClick", "");
				Thread.sleep(1000);
			}
		}
		

	}

	public void callinternalportal_TaxOfficer() throws AWTException, InterruptedException, IOException 
	{
		if (wd.getCurrentUrl().contains("8068")) 
		{
			wd.close();

			WebDriver wd = new ChromeDriver();
			wd.manage().window().maximize();
			 wd.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
			wd.get("http://103.249.120.58:8044");
			Runtime.getRuntime().exec(System.getProperty("user.dir") +"\\autoitsample.TaxOfficer.exe");
			wd.findElement(By.xpath(obj.getProperty("btn_windowsClick"))).click();
			Thread.sleep(1000);
		}
		else
		{
			if (!wd.getCurrentUrl().contains("8068")) 
			{
				wd.get("http://103.249.120.58:8044");
				Runtime.getRuntime().exec(System.getProperty("user.dir") +"\\autoitsample.TaxOfficer.exe");
				clickOn("btn_windowsClick", "");
				Thread.sleep(1000);
			}						
		}
	}

	public void callinternalportal_Supervisor() throws AWTException, InterruptedException, IOException 
	{
		
		if (wd.getCurrentUrl().contains("8068")) 
		{		
			Thread.sleep(1000);
			WebDriver wd = new ChromeDriver();			
			wd.get("http://103.249.120.58:8044");
			Runtime.getRuntime().exec(System.getProperty("user.dir") +"\\autoitsample.Supervisiour.exe");			
			wd.findElement(By.xpath(obj.getProperty("btn_windowsClick"))).click();
			Thread.sleep(1000);
		}
		else
		{
			if (!wd.getCurrentUrl().contains("8068")) 
			{
				Thread.sleep(5000);
				wd.get("http://103.249.120.58:8044");
				Runtime.getRuntime().exec(System.getProperty("user.dir") +"\\autoitsample.Supervisiour.exe");				
				clickOn("btn_windowsClick", "");
				Thread.sleep(1000);
			}
		}
	}
	
	
	public void callinternalportal_Assessment_Officer() throws AWTException, InterruptedException, IOException 
	{	
		if (wd.getCurrentUrl().contains("8068")) 
		{		
			Thread.sleep(1000);
			WebDriver wd = new ChromeDriver();			
			wd.get("http://103.249.120.58:8044");
	       Runtime.getRuntime().exec(System.getProperty("user.dir") +"\\autoitsample.LaxmanAOO.exe");			
			wd.findElement(By.xpath(obj.getProperty("btn_windowsClick"))).click();
			Thread.sleep(1000);
		}
		else
		{
			if (!wd.getCurrentUrl().contains("8068")) 
			{
				Thread.sleep(1000);
				wd.get("http://103.249.120.58:8044");
				 Runtime.getRuntime().exec(System.getProperty("user.dir") +"\\autoitsample.LaxmanAOO.exe");				
				clickOn("btn_windowsClick", "");
				Thread.sleep(1000);
			}
		}
	}
	
	
	
	public void callurl() throws AWTException, InterruptedException 
	{
		 if(wd.getCurrentUrl().contains("8066"))
		 {
			 sleepWait(500);			
		 }
		 else if(!wd.getCurrentUrl().contains("8042"))
		 {
			 wd.get(properties.getProperty("web.Url"));
		 }
	}

	
	public byte[] takeScreenshot() {
		return ((TakesScreenshot) wd).getScreenshotAs(OutputType.BYTES);
	}

	public File takeScreenshotAsFile() {
		return ((TakesScreenshot) wd).getScreenshotAs(OutputType.FILE);
	}

}
