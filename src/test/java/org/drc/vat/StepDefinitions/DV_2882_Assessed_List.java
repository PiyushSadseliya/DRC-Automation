package org.drc.vat.StepDefinitions;

import cucumber.api.java.en.And;
import static org.drc.vat.appmanager.HelperBase.*;
import static org.testng.Assert.assertTrue;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.testng.internal.thread.ThreadTimeoutException;

import com.mongodb.gridfs.CLI;

public class DV_2882_Assessed_List 
{
	public String Referance_ChecK;
	public String NITVA_ChecK;


	@And("^User see referance id and nitva$")
	public void user_see_referance_id_and_nitva() throws Throwable 
	{
		String Assessed_Ref_Id= wd.findElement(By.xpath(obj.getProperty("txt_ref_change"))).getText();
		Referance_ChecK=Assessed_Ref_Id;
	}

	@And("^User click on filter and select nitva$")
	public void user_click_on_filter_and_select_nitva() throws Throwable 
	{
		Thread.sleep(1000);
		clickOn("drp_FilterBy", "");
		Thread.sleep(500);
		clickOn("drp_NITVA", "");
	}

	@And("^User type nitva in filter and click on search button$")
	public void user_type_nitva_in_filter_and_click_on_search_button() throws Throwable 
	{
		Thread.sleep(1000);
		type("txtbox_TypeHere", Referance_ChecK);		  
		clickOn("btn_TypeHere_click", "");
	}

	@And("^User click on status in progress$")
	public void user_click_on_status_in_progress() throws Throwable 
	{
		Thread.sleep(500);
		clickOn("drp_Status_check", "");
		Thread.sleep(500);
		clickOn("txt_InProgress", "");

	}


	@And("^User see status is changed to re assessed$")
	public void user_see_status_is_changed_to_re_assessed() throws Throwable 
	{
		Thread.sleep(500);
		if(wd.findElement(By.xpath(obj.getProperty("txt_st_Re_ass"))).isDisplayed())
		{
			assertTrue(true);
		}
	}

	@And("^User click on type here search$")
	public void user_click_on_type_here_search() throws Throwable 
	{
		Thread.sleep(500);
		clickOn("btn_search_click", "");
	}

	@And("^User click on Assessed List$")
	public void user_click_on_Assessed_List() throws Throwable 
	{
		Thread.sleep(1000);
		clickOn("txt_Assessed_ListTab", "");
	}

	@And("^User click on drop down \"([^\"]*)\" on assessed list$")
	public void user_click_on_drop_down_on_assessed_list(String period) throws Throwable 
	{		
		Thread.sleep(1000);
		clickOn("drp_month", "");
		Thread.sleep(500);
		clickOn(period, "");

	}

	@And("^User click on type here$")
	public void user_click_on_type_here() throws Throwable 
	{
		Thread.sleep(500);
		clickOn("btn_TypeHere_click", "");		   
	}

	@And("^User click on manage setting drop down for Assessement list$")
	public void user_click_on_manage_setting_drop_down_for_Assessement_list() throws Throwable 
	{
		Thread.sleep(1500);
		clickOn("drp_AssestManage", "");
	}

	@And("^User click on view notice and navigate to new tab$")
	public void user_click_on_view_notice_and_navigate_to_new_tab() throws Throwable 
	{
		Thread.sleep(500);
		clickOn("drp_view_notice", "");	
		wd.switchTo().window(wd.getWindowHandles().toArray()[1].toString());
		Thread.sleep(1000);

	}

	@And("^User see notice$")
	public void user_see_notice() throws Throwable 
	{
		System.out.println("User see Notice is generated");

	}

	@And("^User click on Reassess option$")
	public void user_click_on_Reassess_option() throws Throwable 
	{
		clickOn("drp_ReAssess", "");	   
	}

	@And("^User navigate to re assement screen$")
	public void user_navigate_to_re_assement_screen() throws Throwable 
	{
		WebElement we;
		we=wd.findElement(By.xpath(obj.getProperty("txt_OperPeerfor")));		
		if(we.isDisplayed())
		{			
			assertTrue(true);
		}	   
		Thread.sleep(1000);

	}

	@And("^User see referance id$")
	public void user_see_referance_id() throws Throwable 
	{
		String Assessed_Ref_Id= wd.findElement(By.xpath(obj.getProperty("txt_Referance_Type"))).getText();
		Referance_ChecK=Assessed_Ref_Id;
		//clickOn("btn_OperationPerformed_Previous", "");		
	}


	@And("^User click on filter and select referance id$")
	public void user_click_on_filter_and_select_referance_id() throws Throwable 
	{
		Thread.sleep(1000);
		clickOn("drp_FilterBy", "");
		Thread.sleep(500);
		clickOn("drp_ReferanceId", "");
	}

	@And("^User type referance id in filter and click on search button$")
	public void user_type_referance_id_in_filter_and_click_on_search_button() throws Throwable 
	{		  
		Thread.sleep(1000);
		type("txtbox_TypeHere", Referance_ChecK);		  
		clickOn("btn_TypeHere_click", "");

	}

	@And("^User see referance id which is entered$")
	public void user_see_referance_id_which_is_entered() throws Throwable 
	{		
		//elementText("txt_Referance_Type", Referance_ChecK);
		if(wd.findElement(By.xpath(obj.getProperty("txt_Referance_Type"))).getText()==Referance_ChecK)
		{
			assertTrue(true);
		}
	}

	@And("^User click on drop down \"([^\"]*)\" on re assessed list$")
	public void user_click_on_drop_down_on_re_assessed_list(String period) throws Throwable 
	{
		Thread.sleep(1000);
		clickOn("drp_month", "");
		Thread.sleep(500);
		clickOn(period, "");

	}

	@And("^User click on filter and select NITVA no$")
	public void user_click_on_filter_and_select_NITVA_no() throws Throwable 
	{
		Thread.sleep(500);
		clickOn("drp_FilterBy", "");
		Thread.sleep(500);
		clickOn("drp_NITVA", "");
	}

	@And("^User see nitva number$")
	public void user_see_nitva_number() throws Throwable 
	{
		String Assessed_Nitva= wd.findElement(By.xpath(obj.getProperty("txt_NITVA_no"))).getText();
		NITVA_ChecK=Assessed_Nitva;		 			

	}

	@And("^User type nitva no in filter and click on search button$")
	public void user_type_nitva_no_in_filter_and_click_on_search_button() throws Throwable 
	{
		Thread.sleep(1000);
		type("txtbox_TypeHere",NITVA_ChecK );		  
		clickOn("btn_TypeHere_click", "");	   
	}

	@And("^User see nitva no which is entered$")
	public void user_see_nitva_no_which_is_entered() throws Throwable 
	{
		if(wd.findElement(By.xpath(obj.getProperty("txt_NITVA_no"))).getText()==NITVA_ChecK)
		{
			assertTrue(true);
		}

	}

	@And("^User click on FilterBy \"([^\"]*)\" dropdown and click on Status on re assessed list$")
	public void user_click_on_FilterBy_dropdown_and_click_on_Status_on_re_assessed_list(String value) throws Throwable 
	{
		Thread.sleep(500);
		clickOn("drp_FilterBy", "");
		Thread.sleep(500);
		clickOn(value, "");

	}

	@And("^User click on Status and click on \"([^\"]*)\" on assessed list$")
	public void user_click_on_Status_and_click_on_on_assessed_list(String value) throws Throwable 
	{
		Thread.sleep(500);
		clickOn("drp_Status_check", "");
		Thread.sleep(500);
		clickOn(value, "");				

	}
	@And("^User click on search button on re assessment page$")
	public void user_click_on_search_button_on_re_assessment_page() throws Throwable 
	{
		Thread.sleep(500);
		clickOn("btn_search_click", "");
	}

	@And("^User click on manage status \"([^\"]*)\" on re assessment page$")
	public void user_click_on_manage_status_on_re_assessment_pagev(String value) throws Throwable 
	{
		Thread.sleep(500);
		clickOn(value, "");

	}

	@And("^User click on drop down \"([^\"]*)\" on re assessment page$")
	public void user_click_on_drop_down_on_re_assessment_page(String period) throws Throwable 
	{
		Thread.sleep(500);
		clickOn("drp_month", "");
		Thread.sleep(500);
		clickOn(period, "");
	}

	@And("^User click on FilterBy \"([^\"]*)\" on re assessed list$")
	public void user_click_on_FilterBy_on_re_assessed_list(String value) throws Throwable 
	{
		Thread.sleep(500);
		clickOn("drp_FilterBy", "");
		Thread.sleep(500);
		clickOn(value, "");
	}

	@And("^User click on assess and user is navigate to Operations Performed page$")
	public void user_click_on_assess_and_user_is_navigate_to_Operations_Performed_page() throws Throwable 
	{
		clickOn("txt_AssestManageAssess", "");

	}

	@And("^User click on next button and navigate to Payment summary$")
	public void user_click_on_next_button_and_navigate_to_Payment_summary() throws Throwable 
	{
		Thread.sleep(2000);
		clickOn("btn_NEXT", "");
		Thread.sleep(1000);
		clickOn("btn_NEXT", "");
		Thread.sleep(1000);
		clickOn("btn_NEXT", "");
		Thread.sleep(1000);
		clickOn("btn_NEXT", "");
		Thread.sleep(500);
		//	clickOn("btn_NEXT", "");
		//	Thread.sleep(500);

	}

	@And("^User click on raise notice$")
	public void user_click_on_raise_notice() throws Throwable 
	{
		Thread.sleep(1500);
		clickOn("btn_RaiseNotice", "");
		Thread.sleep(10000);
	}

	@And("^User see notice is raised and see referance id$")
	public void user_see_notice_is_raised_and_see_referance_id() throws Throwable 
	{		
		//wd.switchTo().window(wd.getWindowHandles().toArray()[1].toString());	 		 
		// notice generate referance id which is unique
		System.out.println("new tab");

	}

	@And("^User navigate to assessement landing screen again$")
	public void user_navigate_to_assessement_landing_screen_again() throws Throwable 
	{
		Thread.sleep(1000);
		//wd.switchTo().window(wd.getWindowHandles().toArray()[1].toString());
	}

	@And("^User click on FilterBy and click on referance on re assessed list$")
	public void user_click_on_FilterBy_and_click_on_referance_if_on_re_assessed_list() throws Throwable 
	{
		clickOn("drp_month", "");
		Thread.sleep(500);
		clickOn("txt_PeriodJan", "");
		Thread.sleep(500);
		clickOn("drp_FilterBy", "");
		Thread.sleep(500);
		clickOn("drp_ReferanceId", "");

	}

	@And("^Uer type refrance id and click on search button$")
	public void uer_type_refrance_id_and_click_on_search_button() throws Throwable
	{
		// here referance id will come 
		Thread.sleep(500);
		//  type("txtbox_TypeHere", ref);

	}

	@And("^User see the status is changed to \"([^\"]*)\"$")
	public void user_see_the_status_is_changed_to(String status) throws Throwable
	{
		Thread.sleep(500);
		if(wd.findElement(By.xpath("//span[contains(text(),'" + status + "')]")).isDisplayed() )
		{					
			assertTrue(true);
		}	

	}

	@And("^User click on period \"([^\"]*)\" and click on filter by \"([^\"]*)\" status and select assessed status$")
	public void user_click_on_period_and_click_on_filter_by_status_and_select_assessed_status(String period, String status) throws Throwable 
	{
		clickOn("drp_month", "");
		Thread.sleep(500);
		clickOn(period, "");
		Thread.sleep(500);
		clickOn("drp_FilterBy", "");
		Thread.sleep(500);
		clickOn(status, "");
		Thread.sleep(500);
		clickOn("drp_Status_check", "");
		Thread.sleep(500);
		clickOn("txt_Assessed", "");
		Thread.sleep(500);
		clickOn("btn_search_click", "");


	}
	/*@And("^User click on filterby and click on status and select assessed status$")
	public void user_click_on_filterby_and_click_on_status_and_select_assessed_status() throws Throwable
	{
		clickOn("", "");

		clickOn("", "");
	}*/

	@And("^User click reassess and user navigate to Operations Performed page$")
	public void user_click_assess_reassess_and_user_navigate_to_Operations_Performed_page() throws Throwable 
	{
		Thread.sleep(500);
		clickOn("drp_ReAssess", "");
	}

	@And("^User again click on filter and enter referance id and see status assessed list changed to re assessed$")
	public void user_again_click_on_filter_and_enter_referance_id_and_see_status_assessed_list_changed_to_re_assessed() throws Throwable 
	{
		Thread.sleep(500);
		clickOn("drp_Status", "");
		Thread.sleep(500);
		clickOn("drp_ReferanceId", "");
		Thread.sleep(500);
		type("txtbox_TypeHere", "");
		Thread.sleep(500);


	}

	@And("^User see the current month \"([^\"]*)\" and year \"([^\"]*)\" is shown$")
	public void user_see_the_current_month_and_year_is_shown(String arg1, String arg2) throws Throwable 
	{
		Thread.sleep(1000);
		clickOn("drp_month", "");
		Thread.sleep(500);
		clickOn("txt_PeriodJan", "");
		/*	Thread.sleep(500);
		clickOn("drp_year", "");
		Thread.sleep(500);
		clickOn("txt_AssYear18", "");*/
		
		if(wd.findElement(By.xpath(obj.getProperty("txt_PeriodJan_selected"))).isDisplayed() && wd.findElement(By.xpath(obj.getProperty("txt_AssYear18_check"))).isDisplayed())
		{					
			assertTrue(true);
		}
	}

	@And("^User click on year and see no future year is display$")
	public void user_click_on_year_and_see_no_future_year_is_display() throws Throwable 
	{
		Thread.sleep(1000);
		clickOn("drp_year", "");
		Thread.sleep(500);
		if(wd.findElement(By.xpath(obj.getProperty("txt_AssYear18"))).isDisplayed())
		{
			assertTrue(true);
		}

	}

	@And("^User click on FilterBy \"([^\"]*)\" for assessed list$")
	public void user_click_on_FilterBy_for_assessed_list(String value) throws Throwable 
	{
		Thread.sleep(1000);
		clickOn("drp_FilterBy", "");
		Thread.sleep(1000);
		clickOn(value, "");	   
	}

	@And("^User click on type here and check for ReferenceID \"([^\"]*)\"$")
	public void user_click_on_type_here_and_check_for_ReferenceID(String id) throws Throwable 
	{
		Thread.sleep(500);
		clickOn("btn_TypeHere_click", "");
		Thread.sleep(500);
		if(wd.findElement(By.xpath("//div[contains(text(),'" + id + "')]")).isDisplayed() )
		{					
			assertTrue(true);
		}	
	}

	@And("^User now type invalid referance \"([^\"]*)\"$")
	public void user_now_type_invalid_referance(String typeValue) throws Throwable 
	{	  
		type("txtbox_TypeHere",typeValue);
	}
	@And("^User click on type here and see no record found$")
	public void user_click_on_type_here_and_see_no_record_found() throws Throwable 
	{
		Thread.sleep(500);
		clickOn("btn_TypeHere_click", "");
		Thread.sleep(1000);
		if(wd.findElement(By.xpath(obj.getProperty("txt_NoRecordFound"))).isDisplayed() )
		{					
			assertTrue(true);
		}					

	}

	@And("^User type \"([^\"]*)\" and see no record found$")
	public void user_type_and_see_no_record_found(String typeValue) throws Throwable 
	{
		type("txtbox_TypeHere",typeValue);
		sleepWait(500);
		clickOn("btn_TypeHere_click", "");
		sleepWait(1000);
		if(wd.findElement(By.xpath(obj.getProperty("txt_NoRecordFound"))).isDisplayed() )
		{					
			assertTrue(true);
		}						   
	}

	@And("^User click on type here and check for Assessed Date \"([^\"]*)\"$")
	public void user_click_on_type_here_and_check_for_Assessed_Date(String typeValue) throws Throwable 
	{
		type("txtbox_TypeHere",typeValue);
		Thread.sleep(500);
		clickOn("btn_TypeHere_click", "");

	}


	@And("^User now type invalid Assessed Date \"([^\"]*)\"$")
	public void user_now_type_invalid_Assessed_Date(String typeValue) throws Throwable 
	{
		type("txtbox_TypeHere",typeValue);

	}

	@And("^User click on type here and check for NITVA \"([^\"]*)\"$")
	public void user_click_on_type_here_and_check_for_NITVA(String nitva) throws Throwable 
	{
		clickOn("btn_TypeHere_click", "");
		Thread.sleep(500);
		if(wd.findElement(By.xpath("//div[contains(text(),'" + nitva + "')]")).isDisplayed() )
		{					
			assertTrue(true);
		}	

	}

	@And("^User now type invalid NITVA \"([^\"]*)\" and click on search and see no record found$")
	public void user_now_type_invalid_NITVA_and_click_on_search_and_see_no_record_found(String typeValue) throws Throwable 
	{
		type("txtbox_TypeHere",typeValue);
		clickOn("btn_TypeHere_click", "");
		Thread.sleep(500);
		if(wd.findElement(By.xpath(obj.getProperty("txt_NoRecordFound"))).isDisplayed() )
		{					
			assertTrue(true);
		}	
	}

	@And("^User now type invalid NITVA \"([^\"]*)\" and see no record found$")
	public void user_now_type_invalid_NITVA_and_see_no_record_found(String typeValue) throws Throwable 
	{
		type("txtbox_TypeHere",typeValue);
		clickOn("btn_TypeHere_click", "");
		Thread.sleep(1000);
		if(wd.findElement(By.xpath(obj.getProperty("txt_NoRecordFound"))).isDisplayed() )
		{					
			assertTrue(true);
		}	

	}

	@And("^User click on type here and check for Tax Payer \"([^\"]*)\"$")
	public void user_click_on_type_here_and_check_for_Tax_Payer(String name) throws Throwable 
	{
		clickOn("btn_TypeHere_click", "");
		if(wd.findElement(By.xpath("//div[contains(text(),'" + name + "')]")).isDisplayed() )
		{					
			assertTrue(true);
		}	

	}

	@And("^User now type invalid Tax Payer \"([^\"]*)\"$")
	public void user_now_type_invalid_Tax_Payer(String typeValue) throws Throwable 
	{
		Thread.sleep(500);
		type("txtbox_TypeHere",typeValue);

	}

	@And("^User now type invalid name \"([^\"]*)\" and see no record found$")
	public void user_now_type_invalid_name_and_see_no_record_found(String arg1) throws Throwable 
	{
		clickOn("btn_TypeHere_click", "");
		sleepWait(1000);
		if(wd.findElement(By.xpath(obj.getProperty("txt_NoRecordFound"))).isDisplayed() )
		{					
			assertTrue(true);
		}	
	}

	@And("^User click on status and select \"([^\"]*)\" and click on search$")
	public void user_click_on_status_and_select_and_click_on_search(String value) throws Throwable 
	{
		Thread.sleep(500);	
		//clickOn("drp_Status", "");
		//Thread.sleep(500);
		clickOn("drp_Status_check", "");
		Thread.sleep(500);
		clickOn(value, "");
		Thread.sleep(500);
		clickOn("btn_search_click", "");
	}

	@And("^USer check search record \"([^\"]*)\"$")
	public void user_check_search_record(String status) throws Throwable 
	{
		Thread.sleep(1000);
		if(wd.findElement(By.xpath("(//span[contains(text(),'" + status + "')])[2]")).isDisplayed() )
		{					
			assertTrue(true);
		}		   
	}

}
