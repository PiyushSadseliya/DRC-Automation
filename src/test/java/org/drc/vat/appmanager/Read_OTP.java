package org.drc.vat.appmanager;

import java.io.IOException;
import java.util.Properties;

import org.drc.vat.StepDefinitions.End2EndTest;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import static org.drc.vat.StepDefinitions.End2EndTest.Username;

public class Read_OTP {
	public static final String dir = System.getProperty("user.dir");
	static Properties property;

	public static String ReadOTP(String username) throws IOException, InterruptedException {
		System.setProperty("webdriver.chrome.driver", dir + "//chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		driver.get("https://www.mailinator.com");
		Thread.sleep(5000);
		driver.findElement(By.xpath("//input[@type='text']")).sendKeys(Username);
		Thread.sleep(2000);
		driver.findElement(By.xpath("//button[contains(text(),'G')]")).click();
		Thread.sleep(8000);
		driver.findElement(By.xpath("//*[contains(text(),'testernew123456@gmail.com')]")).click();
		Thread.sleep(2000);
		driver.switchTo().frame(driver.findElement(By.id("msg_body")));
		Thread.sleep(4000);
		String S = driver.findElement(By.xpath("/html/body")).getText();
		String SP = S.substring(S.indexOf(':') + 2, S.indexOf(':') + 8);
		return SP;
	}

}
