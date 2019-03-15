package org.drc.vat.appmanager;

import static org.drc.vat.appmanager.HelperBase.wd;

import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;

public class VerifyEmail {
	static String Password;	
	public static final String dir = System.getProperty("user.dir");
	static Properties property;
	public static String VerifyEmail(String vendoremail) throws IOException, InterruptedException {
		wd.close();
		Thread.sleep(1000);
		wd = new ChromeDriver();
		wd.manage().window().maximize();
		wd.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		Thread.sleep(8000);
		wd.get("http://www.mytrashmail.com/");
		System.out.println("Vendor email id is:" + vendoremail);
		String email = vendoremail.substring(0, vendoremail.indexOf('@'));
		System.out.println("Vendor new email id is:" + email);
		wd.findElement(By.xpath("//input[@type='text']")).sendKeys(email);
		wd.findElement(By.xpath("//input[@value=\"Get Email\"]")).click();
		Thread.sleep(1500);
		wd.findElement(By.xpath("(//a[contains(@href,'MyTrash')])[1]")).click();
		
		String S = wd.findElement(By.xpath("/html/body")).getText();
		String Keyword = "Password :";
		String Password = S.substring(S.indexOf(Keyword) + 11, S.indexOf(Keyword) + 22);
		System.out.println("password is: " + Password);		
		wd.findElement(By.xpath("//a[contains(text(),'Click')]")).click();
		return Password;
	}
}