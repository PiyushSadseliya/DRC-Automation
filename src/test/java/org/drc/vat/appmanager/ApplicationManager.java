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


import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.remote.BrowserType;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

public class ApplicationManager {
    private final Properties properties;
    public WebDriver wd;
    private String browser;

    private HelperBase helperBase;

    public ApplicationManager(String browser) {
        this.browser = browser;
        properties = new Properties();
    }

    public void initUrl() throws IOException, AWTException {
    
		    	String target = System.getProperty("target", "local");
        properties.load(new FileReader(new File(
                String.format("src/test/resources/%s.properties", target))));
        if ("".equals(properties.getProperty("selenium.server"))) {
            if (browser.equals(BrowserType.IE)) {
                System.setProperty("webdriver.ie.driver","D:\\DRC_Cucumber\\DRC_VAT\\IEDriverServer.exe");
                wd = new InternetExplorerDriver();

            } else if (browser.equals(BrowserType.CHROME)) {
                  System.setProperty("webdriver.CHROME.driver","D:\\DRC_Cucumber\\DRC_VAT\\chromedriver.exe");
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
     //   wd.get(properties.getProperty("web.Url"));        
        
        helperBase = new HelperBase(wd);
        //auth();       
      
    }

    public void stop() {
    	
        wd.quit();
    	wd = null;
    }

    public HelperBase helperBase() {
        return helperBase;
    }
    public void callurl() throws AWTException, InterruptedException
    {    		  	
    	
    	wd.get(properties.getProperty("web.Url"));       	    	    	
    	/*Robot rb = new Robot();	
    	StringSelection un = new StringSelection("http://103.249.120.58:8068");
    	Toolkit.getDefaultToolkit().getSystemClipboard().setContents(un, null);
    	Toolkit.getDefaultToolkit().getSystemClipboard().setContents(un, null);   
    	rb.keyPress(KeyEvent.VK_TAB);
    	rb.keyRelease(KeyEvent.VK_TAB);
    	Thread.sleep(2000);
    	rb.keyPress(KeyEvent.VK_TAB);
    	rb.keyRelease(KeyEvent.VK_TAB);
    	rb.keyPress(KeyEvent.VK_CONTROL);
    	rb.keyPress(KeyEvent.VK_V);
    	rb.keyRelease(KeyEvent.VK_V);
    	rb.keyRelease(KeyEvent.VK_CONTROL);
    	// press tab to move to password field
    	rb.keyPress(KeyEvent.VK_ENTER);
    	rb.keyRelease(KeyEvent.VK_TAB);
    	Thread.sleep(2000);  	   	    	*/
    }
    public byte[] takeScreenshot() {
        return ((TakesScreenshot) wd).getScreenshotAs(OutputType.BYTES);
    }

    public File takeScreenshotAsFile() {
        return ((TakesScreenshot) wd).getScreenshotAs(OutputType.FILE);
    }

   /* public void auth() throws AWTException {
    	
        String decoded = new String(DatatypeConverter.parseBase64Binary(properties.getProperty("pw")));
        Robot robot = new Robot();
        robot.setAutoDelay(500);
        robotType(robot, properties.getProperty("un"));
        robot.setAutoDelay(500);
        robot.keyPress(KeyEvent.VK_TAB);
        robot.setAutoDelay(500);
        robotType(robot, decoded);
        robot.keyPress(KeyEvent.VK_ENTER);
       
    }

    public void robotType(Robot robot, String characters) {
        Clipboard clipboard = Toolkit.getDefaultToolkit().getSystemClipboard();
        StringSelection stringSelection = new StringSelection(characters);
        clipboard.setContents(stringSelection, stringSelection);
        robot.delay(500);
        robot.keyPress(KeyEvent.VK_CONTROL);
        robot.keyPress(KeyEvent.VK_V);
        robot.keyRelease(KeyEvent.VK_V);
        robot.keyRelease(KeyEvent.VK_CONTROL);
        robot.delay(500);
    }*/
}


