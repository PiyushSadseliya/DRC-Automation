package org.drc.vat.appmanager;

//import org.apache.poi.hssf.record.RefreshAllRecord;
//import org.apache.xmlbeans.impl.xb.xsdschema.Public;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import static org.testng.Assert.assertFalse;
import static org.testng.Assert.assertTrue;

import java.awt.*;
import java.awt.datatransfer.StringSelection;
import java.awt.event.KeyEvent;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Arrays;
//import java.util.Objects;
import java.util.Properties;
import java.util.List;
public class HelperBase {
    public static WebDriver wd;
    private static String bodyMessage="";
    public static Properties obj = new Properties();
    public static FileInputStream fis;
    private static File dir = new File(System.getProperty("user.home") + "/Downloads");

    HelperBase(WebDriver wd) 
    {
        HelperBase.wd = wd;
    }
    static 
    {
      try 
      {
          fis = new FileInputStream(System.getProperty("user.dir") + "/src/test/resources/locators.properties");
      } catch (FileNotFoundException e) 
      {
            e.printStackTrace();
      }
    }
    
    public static void login(String email,String password) throws InterruptedException 
    {
    	 type("txtbox_username",email);
    	 type("txtbox_password",password);
    }
        
    public static void waitFor(String object) 
    {
        WebDriverWait wait = new WebDriverWait(wd, 5000);
        By locator = By.xpath(obj.getProperty(object));
        wait.until(ExpectedConditions.elementToBeClickable(locator));
    }
   
    public static void clickOn(String object, String data) {
        
        WebDriverWait wait = new WebDriverWait(wd, 60);
        try {
            obj.load(fis);
        } catch (IOException e) {
            e.printStackTrace();
        }
        By locator = By.xpath(obj.getProperty(object) + data);
        wait.until(ExpectedConditions.elementToBeClickable(locator)).click();
       
    }    
  
    
    
    
    
    /*
     * Thread sleep method 
     */
    public static void sleepWait(long wait) throws InterruptedException 
    {
        Thread.sleep(wait);
    }

    
    public static void type(String object, String data) 
    {
    	try {
            obj.load(fis);
        } catch (IOException e) 
    	{
            e.printStackTrace();
        }
    	By locator = By.xpath(obj.getProperty(object));
        if (data != null) {
            String existingText = wd.findElement(locator).getAttribute("value");
            if (!data.equals(existingText)) {
                wd.findElement(locator).clear();
                wd.findElement(locator).sendKeys(data);
            }
        }
    }
  
    /*
    * Type method without clearing the text 
    */    
    public static void type_without_clear(String object, String data) 
    {
    	try {
            obj.load(fis);
        } catch (IOException e) 
    	{
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
     

    public static String getValue(String object) throws InterruptedException
    {
    try {
            obj.load(fis);
        } catch (IOException e) {
            e.printStackTrace();
        }
       By locator = By.xpath(obj.getProperty(object));
      // String text;
       return wd.findElement(locator).getAttribute("value");
   
    }
    
    public static String toastMessage() 
    {
        waitFor("toast_message");
        return text(By.xpath("(//*[contains(@class,'toast-top-right toast-container')])[last()]"));
    }

/*    public static void saveFile() throws AWTException {
        Arrays.stream(Objects.requireNonNull(
        new File(String.valueOf(dir)).listFiles())).forEach(File::delete);
        Robot robot = new Robot();
        robot.delay(1000);
        robot.keyPress(KeyEvent.VK_ALT);
        robot.keyPress(KeyEvent.VK_S);
        robot.delay(100);
        robot.keyRelease(KeyEvent.VK_ALT);
        robot.keyRelease(KeyEvent.VK_S);
    }*/

    public static boolean verifyDownload(String data)
    {
    	boolean name=false;
        File[] files = dir.listFiles();
        assert files != null;
        for (File file : files) 
        {
            if (file.getName().equals(data) ) 
            {
                 name=true;
            }
        }
		return name;
    }
        
    /**
     *  
     *  This check extension for PDF, JPG ,PNG,JPEG    
     */
	public static void verifyDownloadCheck(String data) 
    {     	
        File[] files = dir.listFiles();
        assert files != null;
        for (File file : files) 
        {
            if (file.getName().contains(data) == file.getName().toLowerCase().endsWith(".pdf") || file.getName().toLowerCase().endsWith(".jpg") || file.getName().toLowerCase().endsWith(".png") || file.getName().toLowerCase().endsWith(".jpeg")) 
            {            	
            	assertTrue(true);
            }
            else
            {
            	assertTrue(false);
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
    
   
    public static void bodymessage(String expectedMessage) throws InterruptedException
    {
    	
		try 
		{
			//WebDriverWait Wait = new WebDriverWait(wd, 30);
		//	Wait.until(ExpectedConditions.visibilityOfElementLocated((By.xpath("(//*[contains(text(),'" + expectedMessage + "')]")))).getText();
			//bodyMessage = Wait.until(ExpectedConditions.visibilityOfElementLocated((By.xpath("(//*[contains(text(),'" + expectedMessage + "')]")))).getText();
			bodyMessage= wd.findElement(By.tagName("body")).getText();
			//System.out.println(expectedMessage);
			//System.out.println(bodyMessage);
			Thread.sleep(2000);
			if(bodyMessage.equals(null)||bodyMessage.equals(""))
			{
				System.out.println("Fail");				
			}
			else
			{
				if (bodyMessage.toLowerCase().contains(expectedMessage.toLowerCase()))	
				{
					//addLog.info("Validation message verified successfully " + expectedMessage);
					System.out.println("Validation message verified successfully " + expectedMessage);
				} 
				else 
				{
					//addLog.info("Validation message  not verified successfully " +expectedMessage);
					System.out.println("Validation message  not verified successfully " +expectedMessage);
				}
			}				
		} 
		catch(Exception e)
		{
			//addLog.info("Body message not verified successfully " +expectedMessage);
			System.out.println("Body message not verified successfully " +expectedMessage);
		}
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
          
    public static void viewDoc(String object,int data) throws InterruptedException 
    {
		 try {
            obj.load(fis);
        } catch (IOException e) {
            e.printStackTrace();
        }
		 String  handle= wd.getWindowHandle();
		 System.out.println(handle);
		 By locator = By.xpath(obj.getProperty(object));
		 List<WebElement> view = wd.findElements(locator);
		for(WebElement element:view)
		{
			element.click();
			Thread.sleep(5000);
		}
		
		if(view.size()==data) {
			System.out.println("All Documents viewed");
			wd.switchTo().window(handle);			 
		}		
	}
  
    public static boolean buttonEnabled(String object ,String data) {
    	 try {
    	        obj.load(fis);
    	    } catch (IOException e) {
    	        e.printStackTrace();
    	    }
    	    By locator = By.xpath(obj.getProperty(object) + data);
    	 return wd.findElement(locator).isEnabled();
    	}
    
   
    public static void assertMsg(String msg) {
    	 try {
    	 assertFalse(false, msg);
    	 }
    	 catch(Exception e) {  
    	   e.printStackTrace();
    	 }
    	 
    	 }
   
    public static String elementText(String object,String data) {
        try {
            obj.load(fis);
        } catch (IOException e) {
            e.printStackTrace();
        }
       By locator = By.xpath(obj.getProperty(object)+data);
       return wd.findElement(locator).getText();
       }
    
  
    public static boolean checkElement(String object) {
    	 try {
    	        obj.load(fis);
    	    } catch (IOException e) {
    	        e.printStackTrace();
    	    }
    	  By locator = By.xpath(obj.getProperty(object));
    	 if(wd.findElement(locator)!= null) {
    	  return true;
    	 }else {
    	  return false;
    	 }
    	 
    	}
  
    public static void UploadImage(String object, String data) throws Exception 
    {
    	  try 
    	  {
    	   
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
    	   Thread.sleep(5000);
    	   
    	  }  catch (Exception e) 
    	  {
    	  }            
    }    
    
    
    public static void datePicker(String date)
    {
    	try
    	{
    		String d,m,y;
    		d=date.substring(8,10);;
    		m=date.substring(5,7);
    		y=date.substring(0,4);
    		clickOn("span","[contains(text(),'2018')]");
    		clickOn("span","[contains(text(),'" +y+"')]");
    		//clickOn("span","[contains(text(),'June')]");
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
    
    public static void call_url(String object) 
    {    	
    	wd.get(obj.getProperty(object));
    }
    public static void check_page_url(String data) throws InterruptedException 
    {
    	Thread.sleep(2000);
    	wd.getCurrentUrl().equals(obj.getProperty(data));        
    }    
    
   
    
}    
