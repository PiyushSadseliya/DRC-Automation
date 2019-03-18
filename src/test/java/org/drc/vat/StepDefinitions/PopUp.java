package org.drc.vat.StepDefinitions;

import java.util.List;
import java.util.Set;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
public class PopUp 
{
	public static void main(String args[]) throws InterruptedException
	{
		
	  //System.setProperty("webdriver.gecko.driver","E:\\DRC Merge Regreation\\DRC-Automation\\geckodriver.exe");
	  //System.setProperty("webdriver.chrome.driver", "E:\\DRC Merge Regreation\\DRC-Automation\\chromedriver.exe");	
	  
	  //WebDriver driver = new ChromeDriver();
	  WebDriver driver = new FirefoxDriver();
	
	  driver.get("https://www.toolsqa.com/handling-alerts-using-selenium-webdriver/");
	  driver.manage().window().maximize();
	  Thread.sleep(2000);
    
	  driver.findElement(By.xpath("//button[contains(text(),'Simple Alert')]")).click();
	  Thread.sleep(2000);
	  /**
	   *  Simple Alert
	   */
	  Alert simpleAlert = driver.switchTo().alert();
	  String alertText = simpleAlert.getText();
	  System.out.println("Alert text is " + alertText);
	  simpleAlert.accept();
	  Thread.sleep(3000);

	  Thread.sleep(3000);
	  driver.findElement(By.xpath("//button[contains(text(),'Prompt Pop up')]")).click();
	  /**
	   * Prompt Alert
	   */
	  Alert promptAlert  = driver.switchTo().alert();
	  String alertText_1 = promptAlert .getText();
	  System.out.println("Alert text is " + alertText_1);
	  Thread.sleep(3000);
	  promptAlert.sendKeys("Accepting the alert");
	  Thread.sleep(3000);
	  promptAlert.accept();
	  Thread.sleep(2000);
	  
	  Thread.sleep(2000);
	  driver.findElement(By.xpath("//button[contains(text(),'Confirm Pop up')]")).click();
	  Thread.sleep(3000);
	  /**
	   *  Confirmation Alert 
	   */
	  Alert confirmationAlert = driver.switchTo().alert();
	  String alertText_2 = confirmationAlert.getText();
	  System.out.println("Alert text is " + alertText_2);
	  confirmationAlert.dismiss();     
	  Thread.sleep(2000);     
	  driver.close();
    }
}
