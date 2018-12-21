package org.drc.vat.appmanager;

import java.io.IOException;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Read_OTP {
	public static final String dir = System.getProperty("user.dir");
	public static String ReadOTP() throws IOException, InterruptedException 
	{
	
			
		System.setProperty("webdriver.chrome.driver", dir + "//chromedriver.exe");
		
		//System.setProperty("webdriver.chrome.driver", "E:\\DRC Merge Regreation\\DRC-Automation\\chromedriver.exe");
        WebDriver driver = new ChromeDriver();       
        driver.get("https://www.mailinator.com/v3/#/#inboxpane");
       Thread.sleep(3000);
        driver.findElement(By.xpath("//*[@id='inbox_field']")).sendKeys("testarun1112291");
        driver.findElement(By.xpath("//*[text()='Go!']")).click();
        Thread.sleep(5000);
        driver.findElement(By.xpath("//*[contains(text(),'testernew123456@gmail.com')]")).click();
        Thread.sleep(2000);
        driver.switchTo().frame(driver.findElement(By.id("msg_body")));
        Thread.sleep(2000);
        String S = driver.findElement(By.xpath("/html/body")).getText();
        
        int stringindex = S.indexOf("is: ");
		int stringlength = "is: ".length();		
		
		String SP = S.substring(stringindex + stringlength, stringindex + stringlength + 6);
        
        //String SP = S.substring(S.lastIndexOf(':')+2, S.length());        
        return SP;
    
        
        
	}

}


