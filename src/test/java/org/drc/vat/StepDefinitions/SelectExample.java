package org.drc.vat.StepDefinitions;

import static org.drc.vat.appmanager.HelperBase.wd;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;
import org.testng.xml.dom.OnElement;

public class SelectExample {

	public static void main(String[] args) throws InterruptedException 
	{
		
		 WebDriver driver = new ChromeDriver();
		 driver.manage().window().maximize();
		 driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);		
		 driver.get("https://www.seleniumeasy.com/test/basic-select-dropdown-demo.html");
	
		 // One Type		 
		 
		 WebElement One = driver.findElement(By.id("select-demo"));
		 Select OneSelect = new Select(One);		 		
		 OneSelect.selectByVisibleText("Monday");	
		 Thread.sleep(1000);
	
		 /**
		  *  OR + SelectByVisbleText 
		  */
		 Select ONESELECT = new Select(driver.findElement(By.id("select-demo")));
		 ONESELECT.selectByVisibleText("Monday");		 
		 Thread.sleep(1000);		
	
			//--------------------------------------------------------//
	 
		  
		 /**
		 *  SelectByIndex 
		 */		 

		 //Select ONESELECT = new Select(driver.findElement(By.id("select-demo"))); 		 
		 ONESELECT.selectByIndex(5);
		 Thread.sleep(1000);
		 
		 /**
		  *  SelectByValue
		  *  the only difference in this is that it ask for the value of the option rather the option text or index.
		  */
		//Select ONESELECT = new Select(driver.findElement(By.id("select-demo")));
		 ONESELECT.selectByValue("Saturday");		 
		 Thread.sleep(1000);
		 
		/**
		 * To get the Count of the total elements inside SELECT.
		 */				
		//Select Count = new Select(driver.findElement(By.id("select-demo")));		
		List <WebElement> elementCount = ONESELECT.getOptions();
		System.out.println("Count = " +elementCount.size());		
		System.out.println("--------------");
		
		/**
		 * To get the Count of the total elements inside SELECT and to Print the text value of every element present in the SELECT.
		 */		 
		//Select CountPrint = new Select(driver.findElement(By.id("select-demo")));
		List <WebElement> elementPrint = ONESELECT.getOptions();
		int iSize = elementPrint.size();		 
		for(int i =0; i<iSize ; i++)
		{
			String sValue = elementPrint.get(i).getText();
			System.out.println("Text Present in Dropdown are = " +sValue);		
		}
		Thread.sleep(1000);		 
		/**
		 *  This tells whether the SELECT element support multiple selecting options or Not
		 */		 
		//Select ONESELECT = new Select(driver.findElement(By.id("select-demo")));
		//Select MultiSELECT = new Select(driver.findElement(By.id("multi-select")));
		boolean Check = ONESELECT.isMultiple();
		System.out.println(Check);
		Thread.sleep(1000);
		
		/**
		 *  Example of Multiple Select 
		 */
		Select MultiSELECT = new Select(driver.findElement(By.id("multi-select")));
		MultiSELECT.selectByVisibleText("California");
		MultiSELECT.selectByVisibleText("New York");	
		 
		//driver.quit();
	
		
		
	}

}
