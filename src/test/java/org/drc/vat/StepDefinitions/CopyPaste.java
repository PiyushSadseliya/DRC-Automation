package org.drc.vat.StepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.GeckoDriverService;

public class CopyPaste {

	public static void main(String[] args) throws InterruptedException 
	{
		WebDriver wd = new ChromeDriver();
		
		wd.get("http://103.249.120.58:8042/user-registration");
		String value = wd.findElement(By.xpath("//*[@class='text-white']")).getText();
		System.out.println(value);				
		wd.findElement(By.xpath("//*[@formcontrolname='fullName']")).sendKeys(value);
		Thread.sleep(1000);
		
	}
	

}
