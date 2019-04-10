package org.drc.vat.StepDefinitions;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import static org.drc.vat.appmanager.HelperBase.*;
import static org.testng.Assert.assertTrue;

public class Test123 
{
	public static void main(String[] args) throws InterruptedException {
		// TODO Auto-generated method stub
	//	System.setProperty("webdriver.chrome.driver", "E:/harsh/chromedriver.exe");
	
		 WebDriver driver = new ChromeDriver();
		 driver.manage().window().maximize();
		 driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);		
		// driver.get("https://codeseven.github.io/toastr/demo.html");
		 driver.get("http://the-internet.herokuapp.com/add_remove_elements/");
		 
		 driver.findElement(By.xpath("//*[@onclick='addElement()']")).click();		 		 
		 sleepWait(1000);
		 driver.findElement(By.xpath("//*[@onclick='deleteElement()']")).click();
		// sleepWait(1000);
		 
		 


int ok_size=driver.findElements(By.xpath("//*[@onclick='deleteElement()")).size(); 
driver.findElements(By.xpath("//*[@onclick='deleteElement()")).get(ok_size-1).click();
		 
		 
	/*	WebDriverWait waiter = new WebDriverWait(driver, 1000);
		if(!waiter.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[@onclick='deleteElement()"))).isDisplayed()   )
		{
			assertTrue(true);
		}
		else
		{
			assertTrue(false);
		}
	*/
		 
		 
/*		WebDriverWait wait = new WebDriverWait(driver, 15);
		//wait.until(ExpectedConditions.invisibilityOfElementLocated(By.xpath("//*[@onclick='deleteElement()")));		 
		if(wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@onclick='deleteElement()"))).isDisplayed())
		{
			driver.close();
		}
*/		
		
		
		 /*if(!driver.findElement(By.xpath("//*[@onclick='deleteElement()")).isSelected())
		 {
			assertTrue(true);
			driver.close();
		 }	*/
		 
		 
		 
		 
		// driver.close();
		 
		
		 
		 
		 
		 //button[contains(text(),'toast')]
		 
		 
	/*	Select ONESELECT = new Select(driver.findElement(By.id("multi-select")));
		ONESELECT.selectByValue("New York");		 
		Thread.sleep(1000);
		ONESELECT.deselectByValue("New York");*/
		
	
		
		
		
	/*	
		WebElement select2=driver.findElement(By.xpath("//select[@id='selenium_commands']"));
		Select select0 = new Select(select2);
		
		System.out.println("selenium_commands  is multiSelected "+select0.isMultiple());
		select0.selectByIndex(3);
		select0.selectByIndex(1);
		select0.selectByIndex(0);
		select0.selectByIndex(2);
		select0.selectByIndex(4);
		select0.deselectByVisibleText("Browser Commands");
		
		select0.deselectByValue("Navigation Commands");
		
		System.out.println("deselectByVisibleText successful");
		Thread.sleep(1000);
		select0.deselectByIndex(4);
		Thread.sleep(1000);
		select0.deselectAll();*/


}
	}