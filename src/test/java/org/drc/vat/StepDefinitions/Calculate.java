package org.drc.vat.StepDefinitions;

import static org.drc.vat.appmanager.HelperBase.*;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

public class Calculate
{
	public static void main(String args[]) 
	{
		WebElement element12 = wd.findElement(By.xpath("(//*[text()='11'])[1]"));
		String number1 = element12.toString();
		int result1 = Integer.parseInt(number1);			
		System.out.println(result1);
		
		/*String number2 = "11";
		int result2 = Integer.parseInt(number2);			
		//System.out.println(result2);
		
		System.out.println(result1 + result2);
		
			
		int  Value=22;
		int  Value2=22;
		int sum = Value+Value2;
		
		System.out.println(Value + Value2);*/
		
		
	}
}
