package org.drc.vat.StepDefinitions;

import java.util.concurrent.TimeUnit;

import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import static org.drc.vat.appmanager.HelperBase.*;
public class ShadowDOMExample {

	WebDriver driver;
	//String driverPath = "F:/Jars/chromedriver/";

	
	

	@BeforeTest
	public void setUp() 
	{
		
		wd = new ChromeDriver();
		wd.manage().window().maximize();
		wd.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		wd.get("chrome://settings/content/pdfDocuments");
		
	}

	@Test
	public void testGetText_FromShadowDOMElements() {
		System.out.println("Open Chrome downloads");
		//driver.get("chrome://downloads/");
		
		wd = new ChromeDriver();
		wd.manage().window().maximize();
		wd.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		wd.get("chrome://settings/content/pdfDocuments");

		System.out.println("Validate downloads page header text");
		WebElement root1 = driver.findElement(By.tagName("downloads-manager"));

                //Get shadow root element
		WebElement shadowRoot1 = expandRootElement(root1);

		WebElement root2 = shadowRoot1.findElement(By.cssSelector("downloads-toolbar"));
		WebElement shadowRoot2 = expandRootElement(root2);

		WebElement root3 = shadowRoot2.findElement(By.cssSelector("cr-toolbar"));
		WebElement shadowRoot3 = expandRootElement(root3);

		wd.findElement(By.xpath("//*[@id='knob']")).click();
		
		//String actualHeading = shadowRoot3.findElement(By.cssSelector("//*[@id=\"knob\"]")).getText();
		// Verify header title
		//Assert.assertEquals("Downloads", actualHeading);

	}

	//Returns webelement
	public WebElement expandRootElement(WebElement element) {
		WebElement ele = (WebElement) ((JavascriptExecutor) driver)
.executeScript("return arguments[0].shadowRoot",element);
		return ele;
	}

	@AfterTest
	public void tearDown() {
		driver.quit();
	}
}
