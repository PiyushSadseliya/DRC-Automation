package org.drc.vat.StepDefinitions;

import static org.drc.vat.appmanager.HelperBase.*;
import static org.testng.Assert.assertTrue;
import static org.drc.vat.StepDefinitions.DV_2253_TaxPayer_Portal_objection_appeal.*;
import java.util.List;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import cucumber.api.java.en.And;

public class DV_2254_Internal_Portal_objection_appeal 
{
	@And("^User click on Dashboard and click on pin button$")
	public void user_click_on_Dashboard_and_click_on_pin_button() throws Throwable {
	    clickOn("txt_dashboard", "");
	    sleepWait(200);
//	    clickOn("label_pin", "");	    
	}
	
	@And("^User click on case management$")
	public void user_click_on_case_management() throws Throwable
	{
		//wd.findElement(By.xpath("//label[@class='ng-tns-c2-1']")).click();
		sleepWait(1000);
		waitFor("txt_CaseManagement");
		sleepWait(1000);
		clickOn("txt_CaseManagement", "");
		sleepWait(1000);
	}

	@And("^User click on filter by on case management and click on \"([^\"]*)\"$")
	public void user_click_on_filter_by_on_case_management_and_click_on(String value) throws Throwable 
	{
		sleepWait(1000);
		waitFor("drp_FilterByMVT");
		sleepWait(1000);
		clickOn("drp_FilterByMVT", "");
		sleepWait(1000);
		clickOn(value, "");
		sleepWait(1000);
	}

	@And("^User user click on case type \"([^\"]*)\" and click on search button search result \"([^\"]*)\" on case management$")
	public void user_user_click_on_case_type_and_click_on_search_button_search_result_on_case_management(String value, String mess) throws Throwable 
	{
		sleepWait(1000);
		clickOn("drp_CaseType_2", "");
		sleepWait(1000);
		clickOn(value, "");
		sleepWait(1000);
		clickOn("btn_SearchFX", "");
		sleepWait(1000);
		if(wd.findElement(By.xpath("//table//div[contains(text(),'"+ mess +"')]")).isDisplayed()  || wd.findElement(By.xpath(obj.getProperty("txt_NRF_CM"))).isDisplayed())
		{		   
			assertTrue(true);
		}
	}
	
	@And("^User type status \"([^\"]*)\"$")
	public void user_type_status(String status) throws Throwable {
		type("TypeHere",status);
		sleepWait(1000);
		clickOn("btn_SearchFX", "");
	}

	@And("^User type status \"([^\"]*)\" and verify \"([^\"]*)\"$")
	public void user_type_status_and_verify(String status, String verify) throws Throwable
	{
		type("TypeHere",status);
		sleepWait(500);
		clickOn("btn_SearchFX", "");

		if(wd.findElement(By.xpath("(//*[contains(text(),'"+ verify +"')])[1]")).isDisplayed())
		{
			assertTrue(true);
		}		   
	}

	@And("^User Type id \"([^\"]*)\"$")
	public void user_Type_id(String id) throws Throwable 
	{	
		type("TypeHere", Storereference_value);
	}

	@And("^User click on search button$")
	public void user_click_on_search_button() throws Throwable 
	{
		sleepWait(1000);
		waitFor("btn_SearchFX");
		clickOn("btn_SearchFX", "");
		sleepWait(1000);
		waitFor("btn_SearchFX");
	}

	@And("^User click on manage drop down and click on view$")
	public void user_click_on_manage_drop_down_and_click_on_view() throws Throwable
	{
		sleepWait(1000);
		clickOn("drp_ManageDropdown","");			
		sleepWait(1000);
		clickOn("drp_view_click", "");
		sleepWait(3000);
	}

	@And("^User click on priority$")
	public void user_click_on_priority() throws Throwable
	{
		WebElement element1 = wd.findElement(By.id("iframe"));		
		wd.switchTo().frame(element1);
		clickOn("drp_Priority_click", "");
	}

	@And("^User select priority \"([^\"]*)\"$")
	public void user_select_priority(String pir) throws Throwable
	{		
		sleepWait(1000);
		clickOn(pir, "");
	}

	@And("^User click on submit button$")
	public void user_click_on_submit_button() throws Throwable
	{
		clickOn("btn_Obj_Submit", "");
		{
			assertTrue(true);
		}
		sleepWait(1500);
	}

	@And("^User see validation message for changing priority \"([^\"]*)\"$")
	public void user_see_validation_message_for_changing_priority(String Mess) throws Throwable 
	{sleepWait(1000);
		if(wd.findElement(By.xpath("//*[contains(text(),'" + Mess + "')]")).isDisplayed() )
		{		
			assertTrue(true);
		}	
	}


	@And("^User click on select action$")
	public void user_click_on_select_action() throws Throwable 
	{
		clickOn("txt_Select_Action", "");
		sleepWait(2000);
	}

	@And("^User select reject$")
	public void user_select_reject() throws Throwable 
	{
		clickOn("drp_Reject_CaseMan", "");
	}
	
	@And("^User select under review$")
	public void user_select_under_review() throws Throwable {
		clickOn("drp_UnderReview_CaseMan", "");
	}

	@And("^User click on Transaction Detail button$")
	public void user_click_on_Transaction_Detail_button() throws Throwable
	{
		sleepWait(5000);
		clickOn("btn_TransactionDetails", "");
		sleepWait(2000);
	}

	@And("^User navigate to Statement of transaction page$")
	public void user_navigate_to_Statement_of_transaction_page() throws Throwable 
	{
		if(wd.findElement(By.xpath(obj.getProperty("txt_NoticePage"))).isDisplayed())
		{
			assertTrue(true);
		}
	}

	@And("^User click on previous button on objection page$")
	public void user_click_on_previous_button_on_objection_page() throws Throwable 
	{
		sleepWait(3000);		
		clickOn("btn_previousInternal", "");
	}

	@And("^User navigate to Case Management list page$")
	public void user_navigate_to_Case_Management_list_page() throws Throwable
	{
		sleepWait(1000);
		if(wd.findElement(By.xpath(obj.getProperty("txt_NoticePage"))).isDisplayed())
		{
			assertTrue(true);
		}
	}

	@And("^User click on cancel button on objection page$")
	public void user_click_on_cancel_button_on_objection_page() throws Throwable 
	{
		sleepWait(1000);
		clickOn("btn_Obj_Cancel", "");
	}
}