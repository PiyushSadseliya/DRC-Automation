package org.drc.vat.appmanager;

import java.io.IOException;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Read_OTP {

	public static String ReadOTP() throws IOException, InterruptedException {
		//System.setProperty("webdriver.chrome.driver", "D:\\DRC_Automation\\DRC-Automation-git\\DRC-Automation-develop-5e7fa7cde7bb4b3537a4b2c6dc3cf11a41792c36\\chromedriver.exe");
		System.setProperty("webdriver.chrome.driver", "D:\\LA\\GIT DRC-Automation-Regression\\chromedriver.exe");
        WebDriver driver = new ChromeDriver();        
       // driver.get("http://103.249.120.58:8044");
        driver.get("https://www.mailinator.com/v3/#/#inboxpane");
        driver.findElement(By.xpath("//*[@id='inbox_field']")).sendKeys("testarun11222");
        driver.findElement(By.xpath("//*[text()='Go!']")).click();
        Thread.sleep(5000);
        driver.findElement(By.xpath("//*[contains(text(),'testernew123456@gmail.com')]")).click();
        Thread.sleep(2000);
        //driver.switchTo().frame("msg_body");
        driver.switchTo().frame(driver.findElement(By.id("msg_body")));
        Thread.sleep(2000);
        String S = driver.findElement(By.xpath("/html/body")).getText();
        
        int stringindex = S.indexOf("is: ");
		int stringlength = "is: ".length();		
		
		String SP = S.substring(stringindex + stringlength, stringindex + stringlength + 6);
        
        //String SP = S.substring(S.lastIndexOf(':')+2, S.length());        
        return SP;
        
        /*driver.getUIWindowLocator().switchToFirstWindow();
        driver.switchTo().defaultContent();
        driver.switchTo().firstWindow();
        driver.switchTo().window(mainWindowHandle);*/
        //driver.quit();
        //driver.switchTo().defaultContent();
       // Runtime.getRuntime().exec("D:\\DRC_Automation\\DRC-Automation-git\\DRC-Automation-develop-5e7fa7cde7bb4b3537a4b2c6dc3cf11a41792c36\\test1.exe");        
      
     //   driver.get("http://www.engprod-charter.net/");
        
	}

}


