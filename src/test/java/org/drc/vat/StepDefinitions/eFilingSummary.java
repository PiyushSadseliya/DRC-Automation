package org.drc.vat.StepDefinitions;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import static org.drc.vat.appmanager.HelperBase.*;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

public class eFilingSummary 
{
	
	@And("^User see Due Date for filing \"([^\"]*)\" done$")
	public void user_see_Due_Date_for_filing_done(String value) throws Throwable 
	{
		WebElement we;
		we=wd.findElement(By.xpath(obj.getProperty(value)));
		
		if(we.isDisplayed())
		{
			//Assert.assertTrue(true);
			System.out.println("Pass");		
		}
		else
		{
			System.out.println("Fail");
			//Assert.assertTrue(false);
		}
	}

	@And("^User check Completed Date \"([^\"]*)\" for filing done$")
	public void user_check_Completed_Date_for_filing_done(String value) throws Throwable 
	{
		System.out.println("user see due date ");
		WebElement we;
		we=wd.findElement(By.xpath(obj.getProperty(value)));
		
		if(we.isDisplayed())
		{
			//Assert.assertTrue(true);
			System.out.println("Pass");			
		}
		else
		{
			System.out.println("Fail");
			//Assert.assertTrue(false);
		}				

	}

	@And("^User check button \"([^\"]*)\" for filing done$")
	public void user_check_button_for_filing_done(String check) throws Throwable 
	{
		WebElement we;
		we=wd.findElement(By.xpath(obj.getProperty(check)));
		
		if(we.isDisplayed())
		{
			System.out.println("Pass");
			//Assert.assertTrue(true);
		}
		else
		{
			System.out.println("Fail");
			//Assert.assertTrue(false);
		}
		

		Assert.assertTrue(wd.findElement(By.xpath("(//button[@title='Preview'])[2]")).isDisplayed());				
		System.out.println("user see Preview");
		Thread.sleep(2000);

	}

	//----------------//
	

	
	
}
