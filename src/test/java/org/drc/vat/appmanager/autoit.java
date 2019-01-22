package org.drc.vat.appmanager;

import java.io.IOException;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class autoit {

public static void main(String[] args) throws InterruptedException, IOException
	{
	
	//WebDriver wd = new ChromeDriver();
	System.setProperty("webdriver.chrome.driver","D:\\DRC_Automation\\DRC-Automation-git\\DRC-Automation-develop-5e7fa7cde7bb4b3537a4b2c6dc3cf11a41792c36\\chromedriver.exe");
	WebDriver driver = new ChromeDriver();
	driver.manage().window().maximize();
	
	Thread.sleep(5000);
//	Runtime.getRuntime().exec("F:\\Office\\PracticeWork\\windows-authentication\\autoitsample.exe");
	//driver.get("http://103.249.120.58:8068");
	//D:\\DRC_Automation\\DRC-Automation-git\\DRC-Automation-develop-5e7fa7cde7bb4b3537a4b2c6dc3cf11a41792c36\\chromedriver.exe
	driver.get("https://www.engprod-charter.net/");
		Runtime.getRuntime().exec("D:\\DRC_Automation\\DRC-Automation-git\\DRC-Automation-develop-5e7fa7cde7bb4b3537a4b2c6dc3cf11a41792c36\\asd.exe");
		driver.get("https://www.engprod-charter.net/");

    	
    	Thread.sleep(8000);
	}
}
