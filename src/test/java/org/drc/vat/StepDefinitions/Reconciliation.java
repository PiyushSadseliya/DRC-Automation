package org.drc.vat.StepDefinitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import static org.drc.vat.appmanager.HelperBase.*;
import static org.testng.Assert.assertTrue;

import org.openqa.selenium.By;
public class Reconciliation 
{
	@Given("^User is on Reconciliation \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_is_on_Reconciliation(String one, String two) throws Throwable
	{
	   System.out.println(one);
	   System.out.println(two);	  
	}

	@And("^User click on Accounts$")
	public void user_click_on_Accounts() throws Throwable 
	{		
		clickOn("txt_Account", "");
		sleepWait(1000);
	}

	@Then("^User calculate Total Amount addition of Reconciled and Unreconciled$")
	public void user_calculate_Total_Amount_addition_of_Reconciled_and_Unreconciled() throws Throwable 
	{
	   
	  
	}

	@And("^User click on Date and select \"([^\"]*)\"$")
	public void user_click_on_Date_and_select(String date) throws Throwable 
	{
	   clickOn("txt_Date_Re", "");
	   sleepWait(500);
	   datePicker(date);
	  
	}

	@And("^User click FilterBy on Reconciled \"([^\"]*)\"$")
	public void user_click_FilterBy_on_Reconciled(String arg1) throws Throwable 
	{
	   sleepWait(1000);
	   clickOn("", "");
	   sleepWait(1000);
	   
	  
	}

	@And("^User enter value on Type here \"([^\"]*)\" and click on search button$")
	public void user_enter_value_on_Type_here_and_click_on_search_button(String data) throws Throwable
	{
		sleepWait(1000);
	   type("textboxsearch", data);
	   sleepWait(1000);
	  
	}

	@Then("^User verify the result \"([^\"]*)\"$")
	public void user_verify_the_result(String arg1) throws Throwable
	{
	   
	  
	}

	@And("^User click on download button and verify on Reconciled$")
	public void user_click_on_download_button_and_verify_on_Reconciled() throws Throwable 
	{
	  clickOn("", "");
	  verifyDownload("");
	  
	}

	@And("^User enter invalid data \"([^\"]*)\" and click on search button and verify mess No records found$")
	public void user_enter_invalid_data_and_click_on_search_button_and_verify_mess_No_records_found(String invalid) throws Throwable 
	{
		type("", invalid);
	  
	}

	@And("^User click on Reconciled and verify status$")
	public void user_click_on_Reconciled_and_verify_status() throws Throwable 
	{
		sleepWait(1000);
	   clickOn("txt_Click_Reconciled", "");
	   sleepWait(1000);
	   if(wd.findElement(By.xpath(obj.getProperty("btn_Download_Re"))).isEnabled())
	   {
		   assertTrue(true);
	   }
	   else
		{
			assertTrue(false);
		}	  
	}

	@And("^User click on Unreconciled and verify navigation Reprocess is disable$")
	public void user_click_on_Unreconciled_and_verify_navigation_Reprocess_is_disable() throws Throwable 
	{
		sleepWait(1000);
		clickOn("txt_Click_Unreconciled", "");
		sleepWait(1000);
		if(!wd.findElement(By.xpath(obj.getProperty("btn_Reprocess_Re"))).isEnabled())
		{
		   assertTrue(true);
		 }
		else
		{
			assertTrue(false);
		}	  
	}

	@And("^User click on Reconciled tab and see the status Processed$")
	public void user_click_on_Reconciled_tab_and_see_the_status_Processed() throws Throwable 
	{
		sleepWait(1000);
		clickOn("", "");
		sleepWait(1000);
		if(wd.findElement(By.xpath(obj.getProperty(""))).isDisplayed())
		{
		   assertTrue(true);
		 }	  
	}

}
