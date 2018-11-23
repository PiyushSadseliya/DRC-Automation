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

public class ApplicationManager {
    private final Properties properties;
    public WebDriver wd;
    private String browser;

    private HelperBase helperBase;

    public ApplicationManager(String browser) {
        this.browser = browser;
        System.out.println(browser);
        properties = new Properties();
    }

    public void initUrl() throws IOException, AWTException {
        String target = System.getProperty("target", "local");
        properties.load(new FileReader(new File(
                String.format("src/test/resources/%s.properties", target))));
        if ("".equals(properties.getProperty("selenium.server"))) {
            if (browser.equals(BrowserType.IE)) {
                //System.setProperty("webdriver.ie.driver","D:\\AutomationFHLBNY\\AuditConfirmations\\IEDriverServer.exe");
                wd = new InternetExplorerDriver();

            } else if (browser.equals(BrowserType.CHROME)) {
            	System.setProperty("webdriver.CHROME.driver","F:\\PROJECT-1\\DRC\\Automation\\drc_vat\\DRC_VAT\\chromedriver.exe");


            	ChromeOptions options = new ChromeOptions();
            	options.setExperimentalOption("plugins.always_open_pdf_externally", true);
            	
            	ChromeOptions co = new ChromeOptions();
            	Map<String,Object> prefs = new HashMap<>();
            	prefs.put("plugins.always_open_pdf_externally", true);
            	co.setExperimentalOption("prefs", prefs);
            	

                 
                wd = new ChromeDriver(co);
            }
            else if (browser.equals(BrowserType.FIREFOX)) {
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
        wd.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
       // wd.get(properties.getProperty("web.Url"));
        //auth();

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
 // application manager  
    public void callinternalportal()throws AWTException, InterruptedException, IOException
        {
    
        if(!wd.getCurrentUrl().contains("8068")) {
        	Thread.sleep(5000);
        	wd.get("http://103.249.120.58:8044");
        	Runtime.getRuntime().exec("F:\\DRC\\Automation\\drc_vat\\DRC_VAT\\autoitsample.exe");
        	wd.findElement(By.xpath("//*[contains (@title,'Windows Authentication')]")).click();
            Thread.sleep(5000);}
        }

     public void callurl() throws AWTException, InterruptedException
        {
    	 System.out.println(wd.getCurrentUrl());
        if(!wd.getCurrentUrl().contains("8042"))	{
        wd.get(properties.getProperty("web.Url"));
        }
        }

/*
    private void auth() throws AWTException {
        String decoded = new String(DatatypeConverter.parseBase64Binary(properties.getProperty("pw")));
        Robot robot = new Robot();
        robotType(robot, properties.getProperty("un"));
        robot.keyPress(KeyEvent.VK_TAB);
        robotType(robot, decoded);
        robot.keyPress(KeyEvent.VK_ENTER);
    }

    private void robotType(Robot robot, String characters) {
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
*/
}


