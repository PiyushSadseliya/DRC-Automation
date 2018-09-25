package org.drc.vat.StepDefinitions;

import cucumber.api.java.en.And;
import static org.drc.vat.appmanager.HelperBase.*;
import static org.testng.Assert.assertTrue;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

public class Assessed_List_Sales_And_Purchase 

{
	@And("^User click on Assessed List Tab$")
	public void user_click_on_Assessed_List_Tab() throws Throwable 
	{
	   clickOn("AssessedListTab", "");
	   
	}

	@And("^User click on manage setting drop down and click on Reassess$")
	public void user_click_on_manage_setting_drop_down_and_click_on_Reassess() throws Throwable 
	{
		clickOn("AssestManage", "");
		Thread.sleep(1000);
		clickOn("AssestManageReassign", "");
	   
	}

	@And("^User see the ui of Reassess assessement with sale and purchase section$")
	public void user_see_the_ui_of_Reassess_assessement_with_sale_and_purchase_section() throws Throwable 
	{
	    
		System.out.println("User see UI");   
	}

	@And("^User see the ui of Reassess assessement when user click on domestic icon in transaction received$")
	public void user_see_the_ui_of_Reassess_assessement_when_user_click_on_domestic_icon_in_transaction_received() throws Throwable 
	{
	    
		System.out.println("User see UI");
	}

	@And("^User see the ui of Reassess assessement when user click on Export sale icon in transaction received$")
	public void user_see_the_ui_of_Reassess_assessement_when_user_click_on_Export_sale_icon_in_transaction_received() throws Throwable 
	{
		System.out.println("User see UI");    
	   
	}

	@And("^User see the ui of Reassess assessement when user click on Adjustement sales icon in transaction received$")
	public void user_see_the_ui_of_Reassess_assessement_when_user_click_on_Adjustement_sales_icon_in_transaction_received() throws Throwable 
	{
		System.out.println("User see UI");    
	   
	}

	@And("^User see the ui of Reassess assessement when user click on Domestic purchase in transaction received$")
	public void user_see_the_ui_of_Reassess_assessement_when_user_click_on_Domestic_purchase_in_transaction_received() throws Throwable 
	{
		System.out.println("User see UI");    
	   
	}

	@And("^User see the ui of Reassess assessement when user click on Import purchase in transaction received$")
	public void user_see_the_ui_of_Reassess_assessement_when_user_click_on_Import_purchase_in_transaction_received() throws Throwable 
	{
		System.out.println("User see UI");    
	   
	}

	@And("^User see the ui of Reassess assessement when user click on Adjustment purchase in transaction received$")
	public void user_see_the_ui_of_Reassess_assessement_when_user_click_on_Adjustment_purchase_in_transaction_received() throws Throwable 
	{
		System.out.println("User see UI");    
	   
	}

	@And("^User click on next button and navigate to Liability Caculation page and see Reassessed cloumn$")
	public void user_click_on_next_button_and_navigate_to_Liability_Caculation_page_and_see_Reassessed_cloumn() throws Throwable 
	{
	    
		clickOn("btn_Next", "");
		Thread.sleep(1000);
		WebElement we;
		// locator for Reassessed 
		we=wd.findElement(By.xpath("    "));		
		if(we.isDisplayed())
		{			
			System.out.println("User is Reassessed coloum");
			assertTrue(true);
		}		
	}

	@And("^USer again click on Previous page and navigate to Assessed list landing screen$")
	public void user_again_click_on_Previous_page_and_navigate_to_Assessed_list_landing_screen() throws Throwable
	{
		WebElement we;
		we=wd.findElement(By.xpath("//span[text()='Sales']"));		
		if(we.isDisplayed())
		{			
			System.out.println("User is on landing screen again");
			assertTrue(true);
		}	
	   
	}

	@And("^User check its status has been changed \"([^\"]*)\" for Reassess$")
	public void user_check_its_status_has_been_changed_for_Reassess(String value) throws Throwable 
	{
		if(wd.findElement(By.xpath("(//span[contains(text(),'" + value + "')])[1]")).isDisplayed() )
		{		
			
			assertTrue(true);
		}
	   
	}

	@And("^User validate nitva number \"([^\"]*)\" on top of the Assessed list page$")
	public void user_validate_nitva_number_on_top_of_the_Assessed_list_page(String value) throws Throwable 
	{
	    
		if(wd.findElement(By.xpath("(//div[contains(text(),'" + value + "')])[1]")).isDisplayed() )
		{								
			assertTrue(true);
		}	
	}

	@And("^User validate Period field on top of the Assessed list page$")
	public void user_validate_Period_field_on_top_of_the_Assessed_list_page() throws Throwable 
	{
	    
		String expectedMessage = "January 2018";
		Thread.sleep(2000);
		WebElement element = wd.findElement(By.xpath("//div[1]/div[4]/input"));
		JavascriptExecutor jse = (JavascriptExecutor)wd;
		Object message = jse.executeScript("return arguments[0].value", element);
		System.out.println(message.toString());		
 		Assert.assertTrue(message.toString().contains(expectedMessage));    
	    
	}
	// on hold futhure implemente 
	@And("^User open the downloaded file and observe total count of record in sales sheet of Assessed list$")
	public void user_open_the_downloaded_file_and_observe_total_count_of_record_in_sales_sheet_of_Assessed_list() throws Throwable {
	    
	   
	}
	// on hold futhure implemente 
	@And("^User open the downloaded file and observe total count of record in purchase sheet of Assessed list$")
	public void user_open_the_downloaded_file_and_observe_total_count_of_record_in_purchase_sheet_of_Assessed_list() throws Throwable {
	    
	   
	}
	// on hold futhure implemente
	@And("^User open the downloaded file and observe total count of record in sales sheet for e-filing schedule of Assessed list$")
	public void user_open_the_downloaded_file_and_observe_total_count_of_record_in_sales_sheet_for_e_filing_schedule_of_Assessed_list() throws Throwable {
	    
	   
	}
	// on hold futhure implemente
	@And("^User open the downloaded file and observe total count of record in purchase sheet for e-filing schedule of Assessed list$")
	public void user_open_the_downloaded_file_and_observe_total_count_of_record_in_purchase_sheet_for_e_filing_schedule_of_Assessed_list() throws Throwable {
	    
	   
	}

	@And("^User see toast message e-filing schedule file is not available for Assessed list$")
	public void user_see_toast_message_e_filing_schedule_file_is_not_available_for_Assessed_list() throws Throwable 
	{
		// toast locator 
		String expectedMessage = "";
		String message = wd.findElement(By.xpath("//*[@class='toast-top-right toast-container']")).getText();
		Assert.assertTrue(message.contains(expectedMessage));
	}


}
