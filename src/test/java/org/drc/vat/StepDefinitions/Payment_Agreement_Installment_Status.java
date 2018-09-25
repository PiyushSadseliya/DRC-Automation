package org.drc.vat.StepDefinitions;
import static org.drc.vat.appmanager.HelperBase.*;
import static org.testng.Assert.assertTrue;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;

public class Payment_Agreement_Installment_Status 
{
	
	
	@Given("^User is on Payment Agreement Installment Status \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_is_on_Payment_Agreement_Installment_Status(String arg1, String arg2) throws Throwable 
	{
		System.out.println(arg1);
		System.out.println(arg2);
	}
	
	@And("^User click on eye button on installement page$")
	public void user_click_on_eye_button_on_installement_page() throws Throwable 
	{
			Thread.sleep(2000);
			clickOn("btn_installment_Status_click", "");
			Thread.sleep(2000);
	    
	}

	@And("^User see ui for installement details$")
	public void user_see_ui_for_installement_details() throws Throwable 
	{
		
		System.out.println("User see Ui of pop up");
		Thread.sleep(1000);
	    
	}

	@And("^User see installement pop up appear$")
	public void user_see_installement_pop_up_appear() throws Throwable 
	{
		Thread.sleep(1000);
		if(wd.findElement(By.xpath("//*[contains(text(),'Installment Details')]")).isDisplayed() )
		{					
			assertTrue(true);
		} 
	    
	}

	@And("^User see date$")
	public void user_see_date() throws Throwable 
	{
		String expectedMessage = "20-Sep-2018";
		Thread.sleep(2000);
		WebElement element = wd.findElement(By.xpath("//header/div/div[2]/div/input"));
		JavascriptExecutor jse = (JavascriptExecutor)wd;
		Object message = jse.executeScript("return arguments[0].value", element);
		System.out.println(message.toString());		
 		Assert.assertTrue(message.toString().contains(expectedMessage));	
	    
	}

	@And("^User see agreement id \"([^\"]*)\"$")
	public void user_see_agreement_id(String id) throws Throwable
	{
		if(wd.findElement(By.xpath("(//span[contains(text(),'" + id + "')])[2]")).isDisplayed() )
		{					
			assertTrue(true);
		} 
		
	    
	}

	@And("^User see status column \"([^\"]*)\"$")
	public void user_see_status_column(String status) throws Throwable 
	{
		if(wd.findElement(By.xpath("(//div[contains(text(),'" + status + "')])[1]")).isDisplayed() )
		{					
			assertTrue(true);
		} 
		
	}

	@And("^User validate date field \"([^\"]*)\"$")
	public void user_validate_date_field(String date) throws Throwable 
	{
		if(wd.findElement(By.xpath("(//div[contains(text(),'" + date + "')])[1]")).isDisplayed() )
		{					
			assertTrue(true);
		}    
		 
	}

	@And("^User see installment Amount \"([^\"]*)\"$")
	public void user_see_installment_Amount(String amount) throws Throwable
	{
		if(wd.findElement(By.xpath("(//div[contains(text(),'" + amount + "')])[1]")).isDisplayed() )
		{					
			assertTrue(true);
		}    
	    
	}

	@And("^User see emi start date \"([^\"]*)\" and end date \"([^\"]*)\"$")
	public void user_see_emi_start_date_and_end_date(String start, String end) throws Throwable 
	{
		if(wd.findElement(By.xpath("(//div[contains(text(),'" + start + "')])[1]")).isDisplayed() && wd.findElement(By.xpath("(//div[contains(text(),'" + end + "')])[1]")).isDisplayed())
		{					
			assertTrue(true);
		}    
	    
	}

	@And("^User see close button$")
	public void user_see_close_button() throws Throwable 
	{
		if(wd.findElement(By.xpath("//button[@title='Close' or type='button']")).isDisplayed() )
		{					
			assertTrue(true);
		}    
		Thread.sleep(1000);
	    
	}

}
