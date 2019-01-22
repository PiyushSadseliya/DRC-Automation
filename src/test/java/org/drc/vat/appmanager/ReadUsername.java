package org.drc.vat.appmanager;

import java.io.IOException;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class ReadUsername {

	public static String ReadUsername(String vendoremail) throws IOException, InterruptedException
	{
	System.setProperty("webdriver.chrome.driver", "D:\\DRC_Automation\\DRC-Automation-git\\DRC-Automation-develop-5e7fa7cde7bb4b3537a4b2c6dc3cf11a41792c36\\chromedriver.exe");
    WebDriver driver = new ChromeDriver();
   // driver.get("http://103.249.120.58:8044");
    driver.get("https://www.mailinator.com/v3/#/#inboxpane");
    //String A = "ateuser28@mailinator.com";
    String email = vendoremail.substring(0, vendoremail.indexOf('@'));
    WebElement wb = driver.findElement(By.xpath("//*[@id='inbox_field']"));
    wb.sendKeys(email);
    Thread.sleep(3000);
    wb.sendKeys(Keys.ENTER);
   // driver.findElement(By.xpath("//*[text()='Go!']")).click();
    Thread.sleep(5000);
    driver.findElement(By.xpath("//*[contains(text(),'1rivettest@gmail.com')]")).click();
    //driver.switchTo().frame("msg_body");
    driver.switchTo().frame(driver.findElement(By.id("msg_body")));
    Thread.sleep(2000);
    driver.findElement(By.xpath("//a[contains(text(),'Click')]")).click();
String S = driver.findElement(By.xpath("/html/body")).getText();  
String Keyword = "Password :";
    String Password = S.substring(S.indexOf(Keyword)+11, S.indexOf(Keyword)+22);      
    return Password;
    
    
}
	
	public static void main(String args[]) throws IOException, InterruptedException
	{
		ReadUsername("082417jack@mailinator.com");
	}
}
