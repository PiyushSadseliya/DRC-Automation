package org.drc.vat.appmanager;

import java.io.IOException;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class Read_OTP 
{
	static String SP;
	static int stringindex;
	static int stringlength;

	public static final String dir = System.getProperty("user.dir");
	public static String ReadOTP(String email) throws IOException, InterruptedException 
	{		

		System.setProperty("webdriver.chrome.driver", dir + "//chromedriver.exe");

		//System.setProperty("webdriver.chrome.driver", "E:\\DRC Merge Regreation\\DRC-Automation\\chromedriver.exe");
		WebDriver driver = new ChromeDriver();       
		driver.get("http://www.mytrashmail.com/");
		Thread.sleep(5000);	
		  
		driver.findElement(By.xpath("//input[@type='text']")).sendKeys(email);
		Thread.sleep(2000);
		driver.findElement(By.xpath("//input[contains(@value,'Ge')]")).click();
		Thread.sleep(8000);
		driver.findElement(By.xpath("//b//a")).click();
		Thread.sleep(8000);
		List <WebElement> body=driver.findElements(By.xpath("//body"));
		if (body.size()>0) {
			if (body.get(0).getText().equalsIgnoreCase("502 bad gateway")) {
				driver.navigate().refresh();
				Thread.sleep(8000);
				fetchOTP(driver);
			}else {
				//driver.switchTo().frame(driver.findElement(By.id("msg_body")));				 
				fetchOTP(driver);			  
			}

		}
		//String SP = S.substring(S.lastIndexOf(':')+2, S.length());  
		return SP;        
	}
	static void fetchOTP(WebDriver driver) {



		String S = driver.findElement(By.xpath("//td//p")).getText();
		System.out.println(S);
		stringindex = S.indexOf("is: ");
		stringlength = "is: ".length();		
		System.out.println(stringindex);
		System.out.println(stringlength);

		SP = S.substring(stringindex + stringlength, stringindex + stringlength + 6);
		System.out.println(SP);
		driver.close();
	}




}


