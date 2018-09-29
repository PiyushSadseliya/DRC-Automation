package org.drc.vat.appmanager;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.asserts.SoftAssert;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.Toolkit;

import static org.drc.vat.appmanager.HelperBase.assertMsg;
import static org.drc.vat.appmanager.HelperBase.internalPortal;
import static org.drc.vat.appmanager.HelperBase.type;
import static org.testng.Assert.assertFalse;

import java.awt.*;
import java.awt.datatransfer.StringSelection;
import java.awt.event.KeyEvent;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.Objects;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

public class HelperBase {
    public static WebDriver wd;
    private static Properties obj = new Properties();
    public static boolean flag=false;
    private static String bodyMessage="";
    private static FileInputStream fis;
    private static String currentWindow=null;
    public static int no_window;
  public static SoftAssert softAssert = new SoftAssert();
    private static File dir = new File(
            System.getProperty("user.home") + "/Downloads");

    HelperBase(WebDriver wd) {
        HelperBase.wd = wd;
    }
    public static String TaxpayerURL="http://103.249.120.58:8066/";

    static {
        try {
            fis = new FileInputStream(System.getProperty(
                    "user.dir") + "/src/test/resources/locators.properties");
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
    }

    private static void waitFor(String object) {
        WebDriverWait wait = new WebDriverWait(wd, 30);
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
        wd.manage().timeouts().implicitlyWait(700,TimeUnit.MILLISECONDS) ;
        wait.until(ExpectedConditions.elementToBeClickable(locator)).click();
    }
    public static void waitfor(long time) {
    	 wd.manage().timeouts().implicitlyWait(time,TimeUnit.MILLISECONDS) ;
    }
    public static void type(String object, String data) 
    {
    	 try {
             obj.load(fis);
         } catch (IOException e) {
             e.printStackTrace();
         }
    	 
        By locator = By.xpath(obj.getProperty(object));
        wd.manage().timeouts().implicitlyWait(700,TimeUnit.MILLISECONDS) ;
        if (data != null) {
            String existingText = wd.findElement(locator).getAttribute("value");
            if (!data.equals(existingText)) {
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
      //  wait.until(ExpectedConditions.invisibilityOfElementLocated(
 //By.xpath("(//*[contains(@class,'toast-content')])[last()]")));
        clickOn("span", "[@class='fa fa-power-off']");
        Thread.sleep(2000);
        clickOn("link_clickhere","");
        Thread.sleep(1000);

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
    public static void call_url(String object) {    	
    	wd.get(obj.getProperty(object));
    }
    public static void check_page_url(String data) throws InterruptedException {
    	Thread.sleep(2000);
    	wd.getCurrentUrl().equals(obj.getProperty(data));
    	
    }
    public static String validationMessage(String messages) {
    	//System.out.println(text(By.xpath("//*[@class='text-danger position-absolute error-msg']")));
    	String body_Message=wd.findElement(By.tagName("body")).getText();
    	if(body_Message.contains(messages.toLowerCase())) {
    	System.out.println("Message Validated");
    	}
    	//text(By.xpath("//*[@class='toast-top-right toast-container']"));
    	return text(By.xpath("//*[@class='text-danger position-absolute error-msg']"));  
    	
    	
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
    public static WebElement findelements(String object) {
    	 try {
             obj.load(fis);
         } catch (IOException e) {
             e.printStackTrace();
         }
    	 By locator = By.xpath(obj.getProperty(object));
    	// WebElement ele = wd.findElements(locator);
    	 WebElement ele=wd.findElement(locator);
		return ele;   	
    	
    }
    public static void elements(String object) throws InterruptedException {
    	 wd.findElement(By.xpath(object)).click();
    	 Thread.sleep(3000);
       
       
    }
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
			Thread.sleep(5000);
			
		} 	catch (Exception e)	{
			
		}
		
	}
	/*
	*
	**to get View Document 
	*
	*/
	public static void viewDoc(String object,int data) throws InterruptedException {
		 try {
             obj.load(fis);
         } catch (IOException e) {
             e.printStackTrace();
         }
		 String  handle= wd.getWindowHandle();
		 System.out.println(handle);
		 By locator = By.xpath(obj.getProperty(object));
		List<WebElement> view = wd.findElements(locator);
		for(WebElement element:view){
	element.click();
	Thread.sleep(5000);
		}
		System.out.println(view.size());
		if(view.size()==data) {
			System.out.println("All Documents viewed");
			wd.switchTo().window(handle);
			 
		}
		
	}
	/*
	*
	**to get Page source of the current Page
	*
	*/
	public static String pageSource() {
		return wd.getPageSource();
	}
	
	public static void emailVerification(String email) throws InterruptedException, AWTException {       
        String [] arrOfStr = email.split("@", 2);
        try {
            obj.load(fis);
        } catch (IOException e) {
            e.printStackTrace();
        }
        wd.get("https://temp-mail.org/en/option/change/");
      
        type("txtbx_Tempmail_name",arrOfStr[0]);
       
        clickOn("button_Tempmail_submit","");
        System.out.println("Clciked on Save");
        Thread.sleep(2000);
        wd.get("https://temp-mail.org/en/option/refresh/");
        Thread.sleep(2000);
        clickOn("mail_inbox","");
        System.out.println("Clciked on inbox");
    
        clickOn("verification_link","");          

        System.out.println("Clciked on email veriification");
        Thread.sleep(5000);
	}
public static void cookieclear() {
	wd.manage().deleteAllCookies();
}
public static void change_tab() throws AWTException {
Robot robot = new Robot();
/**
 *  Press CTRL+Tab
 */
robot.setAutoDelay(100);
robot.keyPress(KeyEvent.VK_CONTROL);
robot.keyPress(KeyEvent.VK_TAB);
/**
 *  Press CTRL+Tab
 */
robot.setAutoDelay(100);
robot.keyRelease(KeyEvent.VK_TAB);
robot.keyRelease(KeyEvent.VK_CONTROL);		
}
/*
 * Login 
 * @param username
 * @param Password
 */
public static void login(String email,String password) throws InterruptedException {
	type("txtbox_username",email);
	type("txtbox_password",password);
	clickOn("btn_login","");
	
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
/**
 * Checking Whether Element is present or not in a page
 * @param Element locator
 */
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
public static void assertMsg(String msg) {
	try {
	assertFalse(false, msg);
	}
	catch(Exception e) {		
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
	no_window=wd.getWindowHandles().toArray().length;
	System.out.println(no_window);
	System.out.println(wd.getWindowHandles().toArray()[0].toString());
	String wname=wd.getWindowHandles().toArray()[wno].toString();
	System.out.println(wname);
	System.out.println(wd.getTitle());
	gotoWindow(wname);	
}
public static void key(String key) throws AWTException {
	Robot robot = new Robot();
	if(key.equalsIgnoreCase("enter")) {
	robot.setAutoDelay(100);	
	robot.keyPress(KeyEvent.VK_ENTER);
	robot.keyRelease(KeyEvent.VK_ENTER);
	} if (key.equalsIgnoreCase("tab")){
		robot.setAutoDelay(100);	
		robot.keyPress(KeyEvent.VK_TAB);
		robot.keyRelease(KeyEvent.VK_TAB);
	}
	
}

public static void closeCurrentWindow() {	
	wd.close();
}
public static String getvalue(String object,String data) {
	try {
        obj.load(fis);
    } catch (IOException e) {
        e.printStackTrace();
    }
	 
   By locator = By.xpath(obj.getProperty(object)+data);
  
       return wd.findElement(locator).getAttribute("value");
	
}
//List <WebElements> e=wd.findElements(By.xpath(""));
public static void searchonelist(String locator,String permname){
	List <WebElement> e=wd.findElements(By.xpath(locator));
	for (WebElement item : e) {
		
	    if(!item.getText().contains(permname)) {
	    	assertMsg("Not present in the list as per the searches");
	    }
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

public static double interestCalculation(float amount,int period,int rate) {
	
	return (amount*rate*period)/(100*365);
	}
public static long dayscounter(Date date1,Date date2) {
	return TimeUnit.DAYS.convert(date2.getTime()-date1.getTime(), TimeUnit.MILLISECONDS);
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
public static void user_Enter_Valid(String username, String password) throws Throwable 
{
	
 System.out.println("User Enter UN & Pass");



 Robot rb = new Robot();

   // Enter user name in username field 
  StringSelection un = new StringSelection(username);
         Toolkit.getDefaultToolkit().getSystemClipboard().setContents(un, null);            
         Thread.sleep(2000);
         rb.keyPress(KeyEvent.VK_CONTROL);
         rb.keyPress(KeyEvent.VK_V);
         rb.keyRelease(KeyEvent.VK_V);
         rb.keyRelease(KeyEvent.VK_CONTROL);

   // press tab to move to password field
        rb.keyPress(KeyEvent.VK_TAB);
        rb.keyRelease(KeyEvent.VK_TAB);
        Thread.sleep(2000);    
        System.out.println(username);
  	  System.out.println(password);

   //Enter password in password field
        StringSelection pwd = new StringSelection(password);
        Toolkit.getDefaultToolkit().getSystemClipboard().setContents(pwd, null);
        rb.keyPress(KeyEvent.VK_CONTROL);
        rb.keyPress(KeyEvent.VK_V);
        rb.keyRelease(KeyEvent.VK_V);
        rb.keyRelease(KeyEvent.VK_CONTROL);
        Thread.sleep(5000);
              
   //press enter
  rb.keyPress(KeyEvent.VK_ENTER);
  rb.keyRelease(KeyEvent.VK_ENTER);
  
  System.out.println("pass");
  rb=null;
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
public static boolean elementDisplayed(String object,String data) {
	try {
        obj.load(fis);
    } catch (IOException e) {
        e.printStackTrace();
    }
    By locator = By.xpath(obj.getProperty(object) + data);
    return wd.findElement(locator).isDisplayed();

}
}
