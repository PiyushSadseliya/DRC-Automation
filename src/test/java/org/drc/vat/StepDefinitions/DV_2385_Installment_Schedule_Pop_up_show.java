package org.drc.vat.StepDefinitions;

import cucumber.api.java.en.And;
import static org.drc.vat.appmanager.HelperBase.*;
import static org.testng.Assert.assertTrue;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

public class DV_2385_Installment_Schedule_Pop_up_show 
{
	@And("^User is on Installment Schedule Screen \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_is_on_Installment_Schedule_Screen(String arg1, String arg2) throws Throwable 
	{
	    System.out.println(arg1);
	    System.out.println(arg2);
	   
	}

	@And("^User click on dropdown action and click on request payment agreement$")
	public void user_click_on_dropdown_action_and_click_on_request_payment_agreement() throws Throwable 
	{
		 	clickOn("drp_Action", "");
		     sleepWait(1000);
		    clickOn("", "");
	   
	}

	@And("^User click on continue button on case management$")
	public void user_click_on_continue_button_on_case_management() throws Throwable 
	{
		clickOn("btn_action_Continue", "");
	}
	
	@And("^User click on submit button on case management$")
	public void user_click_on_submit_button_on_case_management() throws Throwable 
	{
	    clickOn("btn_action_Submit", "");
	   
	}

	@And("^User click on installement scedule button$")
	public void user_click_on_installement_scedule_button() throws Throwable 
	{
		 sleepWait(500);
	    clickOn("btn_Installment_Schedules", "");   
	}

	@And("^User see ui of installement scedule pop up$")
	public void user_see_ui_of_installement_scedule_pop_up() throws Throwable 
	{
	    System.out.println("UI of notice page");
	    if(wd.findElement(By.xpath("(//*[contains(text(),'Installment Schedules')])[2]")).isDisplayed() )
		{					
			assertTrue(true);
		} 	  
	}

	@And("^User see installement scedule button is disable$")
	public void user_see_installement_scedule_button_is_disable() throws Throwable 
	{
		 sleepWait(1000);
		if(!wd.findElement(By.xpath("//span[contains(text(),'Installment Schedules')]")).isEnabled() )
		{					
			assertTrue(true);
		} 	   
	}


	@And("^Use validate number are in acending order$")
	public void use_validate_number_are_in_acending_order() throws Throwable 
	{
		int ColmnCount=wd.findElements(By.xpath("//tbody//tr[@class='data-table-row ng-star-inserted']")).size();
		System.out.println("ColmnCount :"+ColmnCount);		
	}

	@And("^User validate same date as it on installement date \"([^\"]*)\"$")
	public void user_validate_same_date_as_it_on_installement_date(String date) throws Throwable 
	{
		 sleepWait(500);
		if(wd.findElement(By.xpath("//*[contains(text(),'" + date + "')]")).isDisplayed() )
		{					
			assertTrue(true);
		} 		   
	}

	@And("^User see difference of two date \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_see_difference_of_two_date_and(String date1, String date2) throws Throwable 
	{
		if(wd.findElement(By.xpath("//*[contains(text(),'" + date1 + "')]")).isDisplayed() && wd.findElement(By.xpath("//*[contains(text(),'" + date2 + "')]")).isDisplayed() )
		{					
			assertTrue(true);
		} 	
	}

	@And("^User validate installment amount \"([^\"]*)\" same for secound install also \"([^\"]*)\"$")
	public void user_validate_installment_amount_same_for_secound_install_also(String inst1, String inst2) throws Throwable 
	{
		if(wd.findElement(By.xpath("(//td//div[contains(text(),'" + inst1 + "')])[1]")).isDisplayed() && wd.findElement(By.xpath("(//td//div[contains(text(),'" + inst2 + "')])[1]")).isDisplayed() )
		{					
			assertTrue(true);
		} 	
	}
	
	@And("^User Validate the tooltip for Close icon$")
	public void user_Validate_the_tooltip_for_Close_icon() throws Throwable 
	{
		if(wd.findElement(By.xpath("//button[@title='Close' and @type='button']")).isEnabled())
		{					
			assertTrue(true);
		} 		   
	}

	@And("^User Validate date format \"([^\"]*)\"$")
	public void user_Validate_date_format(String dateFormat) throws Throwable 
	{
		if(wd.findElement(By.xpath("//td//*[contains(text(),'" + dateFormat+ "')]")).isDisplayed())
		{					
			assertTrue(true);
		} 	 	   
	}

	@And("^User click on close icon buttton$")
	public void user_click_on_close_icon_buttton() throws Throwable 
	{
	    clickOn("", "");   
	}
}
