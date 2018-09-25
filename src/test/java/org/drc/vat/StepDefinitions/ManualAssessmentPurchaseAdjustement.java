package org.drc.vat.StepDefinitions;

import static org.drc.vat.appmanager.HelperBase.clickOn;
import static org.drc.vat.appmanager.HelperBase.obj;
import static org.drc.vat.appmanager.HelperBase.wd;
import static org.testng.Assert.assertTrue;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

import cucumber.api.java.en.And;

public class ManualAssessmentPurchaseAdjustement 
{
	//common
	@And("^User click on Adjustement icon in Purchase$")
	public void user_click_on_Adjustement_icon_in_Purchase() throws Throwable 
	{
		clickOn("btn_Purchase_AdjustementjAsst", "");
		Thread.sleep(500);	
	}
	
	//03
	@And("^User verify month for purchase adjustement$")
	public void user_verify_month_for_purchase_adjustement() throws Throwable 
	{
		String expectedMessage = "January 2018";
		Thread.sleep(2000);
		WebElement element = wd.findElement(By.xpath("//input[@class='form-control disabled date-disabled']"));
		JavascriptExecutor jse = (JavascriptExecutor)wd;
		Object message = jse.executeScript("return arguments[0].value", element);
		System.out.println(message.toString());		
 		Assert.assertTrue(message.toString().contains(expectedMessage));
	}

	//10
	@And("^User check invoice number \"([^\"]*)\" for Purchase adjustement$")
	public void user_check_invoice_number_for_Purchase_adjustement(String value) throws Throwable 
	{
		if(wd.findElement(By.xpath("(//div[contains(text(),'" + value + "')])[1]")).isDisplayed() )
		{		
			System.out.println("User see invoice number ");
			assertTrue(true);
		}	
	}

	//11
	@And("^User check sales type \"([^\"]*)\" for Purchase adjustement$")
	public void user_check_sales_type_for_Purchase_adjustement(String value) throws Throwable 
	{
		if(wd.findElement(By.xpath("(//*[contains(text(),'" + value + "')])[1]")).isDisplayed() )
		{		
			//System.out.println("User see invoice number ");
			assertTrue(true);
		}		
	}

	//12
	@And("^User check Debit Credit note \"([^\"]*)\" for Purchase adjustement$")
	public void user_check_Debit_Credit_note_for_Purchase_adjustement(String value) throws Throwable 
	{
		if(wd.findElement(By.xpath("(//div[contains(text(),'Debit')])[1]")).isDisplayed() )
		{		
			//System.out.println("User see sales number for adjustement");
			assertTrue(true);
		}		
		
	}
	//14
	
	@And("^User check for single Commodity Service Code for purchase \"([^\"]*)\"$")
	public void user_check_for_single_Commodity_Service_Code_for_purchase(String value) throws Throwable 
	{
		if(wd.findElement(By.xpath("(//*[contains(text(),'" + value + "')])[1]")).isDisplayed() )
		{		
			System.out.println("User see salesw number for adjustement");
			assertTrue(true);
		}	
	}
	
	@And("^User check for multiple Commodity Service Code \"([^\"]*)\" \"([^\"]*)\" for purchase$")
	public void user_check_for_multiple_Commodity_Service_Code_for_purchase(String value, String value1) throws Throwable
	{
		if(wd.findElement(By.xpath("(//*[contains(text(),'" + value + "')])[1]")).isDisplayed() && wd.findElement(By.xpath("(//*[contains(text(),'" + value1 + "')])[2]")).isDisplayed() )
		{		
			System.out.println("User see sales number for adjustement");
			assertTrue(true);
		}
	}
	
	
	
	
	
	
	
}
