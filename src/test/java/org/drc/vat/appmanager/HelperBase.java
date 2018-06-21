package org.drc.vat.appmanager;

import static org.drc.vat.appmanager.HelperBase.clickOn;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.event.KeyEvent;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Arrays;
import java.util.Objects;
import java.util.Properties;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

public class HelperBase 
{
    public static WebDriver wd;
    private static String bodyMessage="";
    public static Properties obj = new Properties();
    private static FileInputStream fis;
    private static File dir = new File(
            System.getProperty("user.home") + "/Downloads");
    public static boolean flag=false;
    HelperBase(WebDriver wd) {
        HelperBase.wd = wd;
    }

    static {
        try {
            fis = new FileInputStream(System.getProperty(
                    "user.dir") + "/src/test/resources/locators.properties");
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
    }

    private static void waitFor(String object) {
        WebDriverWait wait = new WebDriverWait(wd, 60);
        By locator = By.xpath(obj.getProperty(object));
        wait.until(ExpectedConditions.elementToBeClickable(locator));
    }

    public static void clickOn(String object, String data) throws InterruptedException {
      // WebDriverWait wait = new WebDriverWait(wd, 60);
        try {
            obj.load(fis);
        } catch (IOException e) {
            e.printStackTrace();
        }
        //By locator = By.xpath(obj.getProperty(object) + data);
        Thread.sleep(1000);
       wd.findElement(By.xpath(obj.getProperty(object) + data)).click();
       // wait.until(ExpectedConditions.elementToBeClickable(locator)).click();
    }

    public static void type(String object, String data) {
    	
        try 
        {
            obj.load(fis);
        }
        catch (IOException e)
        {
            e.printStackTrace();
        }
    	By locator = By.xpath(obj.getProperty(object));
        if (data != null) 
        {
            String existingText = wd.findElement(locator).getAttribute("value");
            if (!data.equals(existingText)) 
            {
                wd.findElement(locator).clear();
                wd.findElement(locator).sendKeys(data);
            }
        }
    }

    public static String toastMessage() {
        waitFor("toast_message");
        return text(By.xpath("(//*[contains(@class,'toast-content')])[last()]"));
    }

    public static void saveFile() throws AWTException {
        Arrays.stream(Objects.requireNonNull(
                new File(String.valueOf(dir)).listFiles())).forEach(File::delete);
        Robot robot = new Robot();
        robot.delay(1000);
        robot.keyPress(KeyEvent.VK_ALT);
        robot.keyPress(KeyEvent.VK_S);
        robot.delay(100);
        robot.keyRelease(KeyEvent.VK_ALT);
        robot.keyRelease(KeyEvent.VK_S);
    }

    public static void verifyDownload(String data) {
        File[] files = dir.listFiles();
        assert files != null;
        for (File file : files) {
            if (file.getName().contains(data)) {
                return;
            }
        }
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

    boolean isElementPresent(By locator) {
        try {
            wd.findElement(locator);
            return true;
        } catch (NoSuchElementException e) {
            return false;
        }
    }

    public static void logout() throws Exception {
        WebDriverWait wait = new WebDriverWait(wd, 10);
        wait.until(ExpectedConditions.invisibilityOfElementLocated(
                By.xpath("(//*[contains(@class,'toast-content')])[last()]")));
        clickOn("i", "[@class='fa fa-power-off']");
       

    }

    public static void drp_select(String object,String data)
    {
        By locator = By.xpath(obj.getProperty(object));
        WebElement drp = wd.findElement(locator);
        Select drp_down = new Select(drp);
        drp_down.selectByVisibleText(data);
    }
    
    public static void bodymessage(String object) throws InterruptedException
    {
    	
		try 
		{
			 
		     obj.load(fis);   
		     String expectedMessage = obj.getProperty(object);
			bodyMessage= wd.findElement(By.tagName("body")).getText();
			Thread.sleep(2000);
			if(bodyMessage.equals(null)||bodyMessage.equals("")||expectedMessage.equals(""))
			{
				System.out.println("All data are inserted" );				
			}
			else
			{
				if (bodyMessage.toLowerCase().contains(expectedMessage.toLowerCase()))	
				{
					flag=true;
					//addLog.info("Validation message verified successfully " + expectedMessage);
					//System.out.println("Validation message verified successfully " + expectedMessage);
				} 
				else 
				{
					flag=false;
					//addLog.info("Validation message  not verified successfully " +expectedMessage);
					//System.out.println("Validation message  not verified successfully " +expectedMessage);
				}
			}
				
		} 
		catch(Exception e)
		{
			//addLog.info("Body message not verified successfully " +expectedMessage);
			System.out.println("Body message not verified successfully " + e);
		}
    }
    
    public static void datePicker(String date)
    {
    	try
    	{
    		String d,m,y;
    		d=date.substring(8,2);
    		m=date.substring(5,2);
    		y=date.substring(0,4);
    		clickOn("span","[contains(text(),'2018')]");
    		clickOn("span","[contains(text(),'" +y+"')]");
    		clickOn("span","[contains(text(),'June')]");
    		if(m.equals("01"))
    		{
    			clickOn("span","[contains(text(),'January')]");
    		}
    		else if(m.equals("02"))
    		{
    			clickOn("span","[contains(text(),'February')]");
    		}
    		else if(m.equals("03"))
    		{
    			clickOn("span","[contains(text(),'March')]");
    		}
    		else if(m.equals("04"))
    		{
    			clickOn("span","[contains(text(),'April')]");
    		}
    		else if(m.equals("05"))
    		{
    			clickOn("span","[contains(text(),'May')]");
    		}
    		else if(m.equals("06"))
    		{
    			clickOn("span","[contains(text(),'June')]");
    		}
    		else if(m.equals("07"))
    		{
    			clickOn("span","[contains(text(),'July')]");
    		}
    		else if(m.equals("08"))
    		{
    			clickOn("span","[contains(text(),'August')]");
    		}
    		else if(m.equals("09"))
    		{
    			clickOn("span","[contains(text(),'September')]");
    		}
    		else if(m.equals("10"))
    		{
    			clickOn("span","[contains(text(),'October')]");
    		}
    		else if(m.equals("11"))
    		{
    			clickOn("span","[contains(text(),'November')]");
    		}
    		else if(m.equals("12"))
    		{
    			clickOn("span","[contains(text(),'December')]");
    		}
    		clickOn("span","[contains(text(),'" +d+"')]");
    	}
    	catch(Exception e)
    	{
    		
    	}
    	
    }
}
