package org.drc.vat.StepDefinitions;

import static org.drc.vat.appmanager.HelperBase.elementText;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class A {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		/*WebDriver wd= new ChromeDriver();
		wd.get("http://www.tutorialspoint.com/");
		WebElement se=wd.findElement(By.name("search"));
		System.out.println();
		System.out.println(se.getAttribute("name"));
		System.out.println(se.getCssValue("margin"));
		System.out.println(se.getAttribute("value"));
		System.out.println(se.getText());
	//	System.out.println(se.getClass()s());
*/		//wd.quit();

	//	String b="1 of 15 records are selected";
		 String []a="1 of 15 records are selected".split("[a-zA-Z]", 4);
		 System.out.println(a[0]);
		 System.out.println(a[2]);
		//String []c =a[1].toString().split("[a-zA-Z]", );
		 
		 
		

	}

}
