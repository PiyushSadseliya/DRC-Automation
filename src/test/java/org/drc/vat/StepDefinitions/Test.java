package org.drc.vat.StepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class Test
{
	public static void main (String[] args){
		
		//WebDriver wd = new FirefoxDriver();
	WebDriver wd = new ChromeDriver();
	wd.get("http://gmail.com");
	System.out.print(wd.getTitle());
	/*wd.findElement(By.cssSelector("body")).sendKeys(Keys.CONTROL +"t");

	 
	 wd.get("http://bing.com");
	 System.out.print(wd.getTitle());
	 	 
	 
	 wd.findElement(By.cssSelector("body")).sendKeys(Keys.CONTROL +"\t");
	 System.out.print(wd.getTitle());*/
	 
	}
}
