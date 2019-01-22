package org.drc.vat.appmanager;

import java.io.IOException;

import org.drc.vat.StepDefinitions.End2EndTest;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class Read_OTP   {

	/*public Read_OTP(String username2) {
	// TODO Auto-generated constructor stub
}*/
	public static String ReadOTP(String username) throws IOException, InterruptedException {
		System.setProperty("webdriver.chrome.driver", "D:\\DRC_Automation\\DRC-Automation-git\\DRC-Automation-develop-5e7fa7cde7bb4b3537a4b2c6dc3cf11a41792c36\\chromedriver.exe");
        WebDriver driver = new ChromeDriver();
       // driver.get("http://103.249.120.58:8044");
        driver.get("https://www.mailinator.com/v3/#/#inboxpane");
        //String A = "ateuser28@mailinator.com";
        String auth = username.substring(0, username.indexOf('@'));
        WebElement wb = driver.findElement(By.xpath("//*[@id='inbox_field']"));
        wb.sendKeys(auth);
        Thread.sleep(4000);
        wb.sendKeys(Keys.ENTER);
       // driver.findElement(By.xpath("//*[text()='Go!']")).click();
        Thread.sleep(7000);
        driver.findElement(By.xpath("//*[contains(text(),'testernew123456@gmail.com')]")).click();
        //driver.switchTo().frame("msg_body");
        driver.switchTo().frame(driver.findElement(By.id("msg_body")));
        Thread.sleep(4000);
    String S = driver.findElement(By.xpath("/html/body")).getText();       
        String SP = S.substring(S.indexOf(':')+2, S.indexOf(':')+8);      
        return SP;
	}
/*	public static void main(String args[]) throws IOException, InterruptedException
	{
		ReadOTP();
	}
*/
}


