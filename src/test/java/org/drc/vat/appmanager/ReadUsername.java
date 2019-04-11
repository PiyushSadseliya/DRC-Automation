package org.drc.vat.appmanager;

import java.io.IOException;
import java.util.List;
import java.util.Properties;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import static org.drc.vat.appmanager.HelperBase.sleepWait;

public class ReadUsername {
	public static final String dir = System.getProperty("user.dir");
	static Properties property;
	static String Password;

	public static String ReadUsername(String vendoremail) throws IOException, InterruptedException {
		System.setProperty("webdriver.chrome.driver", dir + "//chromedriver.exe");
		WebDriver driver = new ChromeDriver();
	    driver.get("http://www.mytrashmail.com");
	    //String email = vendoremail.substring(0, vendoremail.indexOf('@'));
	    sleepWait(3000);
	    driver.findElement(By.xpath("//input[@type='text']")).sendKeys(vendoremail);
	    sleepWait(8000);
	    driver.findElement(By.xpath("//input[contains(@value,'Ge')]")).click();
	    sleepWait(8000);
	    driver.findElement(By.xpath("//b//a")).click();
	    sleepWait(8000);
	    List <WebElement> body=driver.findElements(By.xpath("//body"));
	    if (body.size()>0) {
	    	if (body.get(0).getText().equalsIgnoreCase("502 bad gateway")) {
	    		driver.navigate().refresh();
	    		sleepWait(8000);
	    		fetchUserName(driver);
	    	}else {
	    		//driver.switchTo().frame(driver.findElement(By.id("msg_body")));				 
	    		fetchUserName(driver);			  
	    	}

	    }
	    //String SP = S.substring(S.lastIndexOf(':')+2, S.length());  
	    return Password;        
	    }

	    static void fetchUserName(WebDriver driver) {
	    	String S = driver.findElement(By.xpath("/html/body")).getText();  
	    	String Keyword = "Password :";
	    	     Password = S.substring(S.indexOf(Keyword)+11, S.indexOf(Keyword)+22);      
	    	   driver.close();
	    }

	    
	    
	}
		
