package org.drc.vat.appmanager;

import java.awt.AWTException;
import java.io.FileInputStream;
import java.io.IOException;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Windows_Auth {

	public static final String dir = System.getProperty("user.dir");
	static FileInputStream fs;
	public static void main(String[] args) throws IOException, InterruptedException, AWTException {
		System.setProperty("webdriver.chrome.driver", dir + "//chromedriver.exe");
		fs = new FileInputStream(System.getProperty("user.dir") + "src\\test\\resources\\authentication\\DRCAdmin.exe");
		WebDriver driver = new ChromeDriver();
		driver.manage().window().maximize();
		//driver.get("http://103.249.120.58:8044");
		Runtime.getRuntime().exec(System.getProperty("user.dir") +"src\\test\\resources\\authentication\\DRCAdmin.exe");
		driver.findElement(By.xpath("//*[contains(@alt,'Windows Authentication')]")).click();
		Thread.sleep(2000);
		//driver.close();
	}
}