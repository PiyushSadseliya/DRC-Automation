package org.drc.vat.appmanager;

import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import static org.drc.vat.StepDefinitions.End2EndTest.Username;

public class Read_OTP {
	public static final String dir = System.getProperty("user.dir");
	static Properties property;

	public static String ReadOTP() throws IOException, InterruptedException {
		System.setProperty("webdriver.chrome.driver", dir + "//chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.get("https://www.mailinator.com/v3/#/#inboxpane");
		//driver.findElement(By.xpath("//*[@id='inbox_field']")).sendKeys("smokesuiteuser6");
		driver.findElement(By.xpath("//*[@id='inbox_field']")).sendKeys(Username);
		driver.findElement(By.xpath("//*[text()='Go!']")).click();
		Thread.sleep(5000);
		driver.findElement(By.xpath("//*[contains(text(),'testernew123456@gmail.com')]")).click();
		driver.switchTo().frame(driver.findElement(By.id("msg_body")));
		String S = driver.findElement(By.xpath("//*[@style='margin: 0']")).getText();
		String SP = S.substring(S.lastIndexOf(':') + 2, S.length());
		return SP;

	}

}
