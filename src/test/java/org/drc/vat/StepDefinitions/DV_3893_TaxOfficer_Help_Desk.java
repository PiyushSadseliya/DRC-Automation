package org.drc.vat.StepDefinitions;

import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertTrue;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.joda.time.DateTime;
import org.joda.time.format.DateTimeFormat;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;

import static org.drc.vat.appmanager.HelperBase.*; 
import cucumber.api.java.en.And;

public class DV_3893_TaxOfficer_Help_Desk 
{
	public String StoreTicketID;
	public String  StoreTicketIdOne;
	public String StoreAdjID;	
	int  EFD_Related_issue = 9;
	int General_Query =10;
	int System_Related_issue =11;
	int Payment_Related =12;
	
	@And("^User type \"([^\"]*)\" on internal$")
	public void user_type_on_internal(String message) throws Throwable 
	{
		waitFor("txt_Search_Issue");
		type("txt_Search_Issue", message);
	}
	
	@And("^User navigate to helpdesk page$")
	public void user_navigate_to_helpdesk_page() throws Throwable 
	{	
	   sleepWait(1000);
	   if(wd.findElement(By.xpath(obj.getProperty("txt_Helpdesk_page_title"))).isDisplayed())
	   {
		   assertTrue(true);
	   }
	}

	@And("^User verify date format on internal$")
	public void user_verify_date_format_on_internal() throws Throwable 
	{
		sleepWait(1000);
		String DateFormat  = elementText("txt_Date");
		DateFormat = DateFormat.substring(7);
		sleepWait(1000);
		if(isValidDate(DateFormat))
		{					
			assertTrue(true);
		}
		else
		{	
			assertTrue(false);
		}		   
	}

	
	@And("^User search for Invalid data \"([^\"]*)\" and verify mess \"([^\"]*)\"$")
	public void user_search_for_Invalid_data_and_verify_mess(String invalid, String valid) throws Throwable 
	{
		 sleepWait(1000);
		 type("txt_Search_Issue", invalid);		    
		 String mess = elementText("txt_NRF");						 
		 assertEquals(mess, valid);
		 sleepWait(1000);
	}

	@And("^User search for valid data \"([^\"]*)\" and verify$")
	public void user_search_for_valid_data_and_verify(String valid) throws Throwable 
	{
		 type("txt_Search_Issue", valid);			 
		 String Status_Check = elementText("Status_check");		 
		 assertEquals(valid, Status_Check);
		 sleepWait(1000);	  
	}

	@And("^User verify mess \"([^\"]*)\"$")
	public void user_verify_mess(String mess) throws Throwable
	{
		waitFor("toast_mess_Issue_Check");
		assertEquals(validationMessage(), mess);		
		sleepWait(1000);
	}

	@And("^User verify the issue type$")
	public void user_verify_the_issue_type() throws Throwable 
	{
		String IssueType = getValue("drp_Select_Issue");
		int Issue = Integer.parseInt(IssueType);
		if(Issue == EFD_Related_issue)
		{		
			assertTrue(true);			
		}
		else if(Issue == General_Query)
		{
			assertTrue(true);
		}
		else if(Issue == System_Related_issue)
		{
			assertTrue(true);
		}
		else if(Issue == Payment_Related) 
		{
			assertTrue(true);
		}
		else
		{
			assertTrue(false);
		}
	}

	@And("^User see ticket id$")
	public void user_see_ticket_id() throws Throwable 
	{
		sleepWait(1000);
		String Value = elementText("txt_Reference_ID_Store");
		Value = Value.substring(14);			
		StoreTicketID  = Value;
		System.out.println(StoreTicketID);
	}

	@And("^User click on Priority and select \"([^\"]*)\"$")
	public void user_click_on_Priority_and_select(String pri) throws Throwable 
	{
	    clickOn("drp_Priority_Select", "");
	    sleepWait(1000);
	    clickOn(pri, "");
	}

	@And("^User type comment \"([^\"]*)\"$")
	public void user_type_comment(String comm) throws Throwable
	{
		sleepWait(1000);
	    type("txt_comment_here", comm);
	    sleepWait(1000);
	}

	@And("^User click on chat \"([^\"]*)\"$")
	public void user_click_on_chat(String click) throws Throwable
	{
	   clickOn(click, "");
	}

	@And("^User click on browse button and select file on internal \"([^\"]*)\"$")
	public void user_click_on_browse_button_and_select_file_on_internal(String file) throws Throwable 
	{
		/*sleepWait(1000);
		type("txt_comment_here", "comment Here");
		
		wd.findElement(By.xpath(obj.getProperty("txt_comment_here"))).sendKeys(Keys.PAGE_UP);;
		sleepWait(1000);*/
		sleepWait(1000);
		waitFor("upload_File_helpdesk");
		sleepWait(1000);
		clickOn("upload_File_helpdesk", "");
		UploadImage("", file);
	   
	}

	@And("^User see file \"([^\"]*)\" is uploaded and click on download button and verify$")
	public void user_see_file_is_uploaded_and_click_on_download_button_and_verify(String file) throws Throwable
	{		
		String Check_file_Name = elementText("upload_file_name_check");		
		assertEquals(Check_file_Name, file);	   		
		verifyDownloadCheck(file);
	}

	@And("^User click on Re-Asign to and select another officer \"([^\"]*)\"$")
	public void user_click_on_Re_Asign_to_and_select_another_officer(String officer) throws Throwable 
	{
	   clickOn("drp_Assign_to", ""); 
	   sleepWait(1000);
	   clickOn(officer, "");
	}
	
	@And("^User see ticket id for officier$")
	public void user_see_ticket_id_for_officier() throws Throwable 
	{
		sleepWait(1000);
		String Value = elementText("txt_Reference_ID_Store");
		Value = Value.substring(14);	
		StoreTicketIdOne  = Value;
		System.out.println(StoreTicketIdOne);
	
	}
	
	@And("^User type ticket id and see mess and verify mess \"([^\"]*)\"$")
	public void user_type_ticket_id_and_see_mess_and_verify_mess(String mess1) throws Throwable 
	{
		 waitFor("txt_Search_Issue");
		 type("txt_Search_Issue", StoreTicketIdOne);		   
		 String mess = elementText("txt_NRF");		 		 
		 assertEquals(mess, mess1);
		 sleepWait(1000);
	}
	@And("^User type ticket id$")
	public void user_type_ticket_id() throws Throwable
	{
	   waitFor("txt_Search_Issue");		
	   type("txt_Search_Issue", StoreTicketID);
	}
	@And("^User click on Submit button internal portal and navigate to Account Adjustement$")
	public void user_click_on_Submit_button_internal_portal_and_navigate_to_Account_Adjustement() throws Throwable 
	{
		clickOn("btn_Help_Submit", "");		
		sleepWait(1000);
		waitFor("txt_Req_Adj_Page");
		if(wd.findElement(By.xpath(obj.getProperty("txt_Req_Adj_Page"))).isDisplayed())
		{
		  assertTrue(true);
		 }
	}

	@And("^User click on Approved by and select officier \"([^\"]*)\"$")
	public void user_click_on_Approved_by_and_select_officier(String sel) throws Throwable 
	{
		sleepWait(1000);
		waitFor("drp_ApproveBy");
		clickOn("drp_ApproveBy", "");
		sleepWait(1000);
		clickOn(sel, "");
		
	}

	@And("^User type data in \"([^\"]*)\" account adjustement and clik on search button$")
	public void user_type_data_in_account_adjustement_and_clik_on_search_button(String click) throws Throwable 
	{
		type("txt_type_nita", click);
		sleepWait(1000);
		clickOn("btn_Search_click", "");
	}

	@And("^User select radio button and click on select$")
	public void user_select_radio_button_and_click_on_select() throws Throwable
	{
		sleepWait(1000);
		waitFor("rad_Click");
	   clickOn("rad_Click", "");
	   sleepWait(1000);
	   waitFor("btn_Select");
	   clickOn("btn_Select", "");
	   sleepWait(1000);
	}

	@And("^User click on Add button and select radio and click on select$")
	public void user_click_on_Add_button_and_select_radio_and_click_on_select() throws Throwable 
	{	   
		 clickOn("btn_add", "");
		 sleepWait(1000);
		 clickOn("rad_Click", "");
		 sleepWait(1000);
		 clickOn("btn_Select", "");
		 sleepWait(1000);
	}

	@And("^User select Reason dropdown and click on Submit button$")
	public void user_select_Reason_dropdown_and_click_on_Submit_button() throws Throwable 
	{
		clickOn("drp_Reason", "");
		sleepWait(1000);
		clickOn("drp_SysytemError", "");
		sleepWait(1000);
		clickOn("btn_Help_Submit", "");
		sleepWait(4000);
	}

	@And("^User click on Account Adjustment and select case id and type \"([^\"]*)\" and clik on search$")
	public void user_click_on_Account_Adjustment_and_select_case_id_and_type_and_clik_on_search(String data) throws Throwable
	{
	   sleepWait(1000);
	   clickOn("nav_acAdjstmnt", "");
	   sleepWait(1000);
	   waitFor("filterby_acAdjstmnt");
	   sleepWait(1000);
	   waitFor("filterby_acAdjstmnt");
	   sleepWait(1000);
	   clickOn("filterby_acAdjstmnt", "");
	   sleepWait(1000);
	   clickOn("drp_FilterBuy_AA_Case_Id", "");
	   sleepWait(1000);
	   type("input_searchAcadjst", data);
	   sleepWait(1000);
	   clickOn("btn_searchAcadjst", "");
	   	}

	@And("^User click on eye and navigate to account adjustement page and click on approve button$")
	public void user_click_on_eye_and_navigate_to_account_adjustement_page_and_click_on_approve_button() throws Throwable
	{
		sleepWait(1000);
		waitFor("eye_click_AA");
		clickOn("eye_click_AA", "");
		sleepWait(1000);
		clickOn("btn_Approve_AA", "");
		sleepWait(4000);		
		}
     
	@And("^User wait for Account Adjustment page$")
	public void user_wait_for_Account_Adjustment_page() throws Throwable 
	{
		sleepWait(1000);
		waitFor("input_searchAcadjst");
		sleepWait(2000);
	}

	@And("^User get request adj id$")
	public void user_get_request_adj_id() throws Throwable 
	{
		String Value = elementText("txt_Reference_ID_Store");
		Value = Value.substring(14);			
		StoreAdjID  = Value;
		System.out.println(StoreAdjID);
	   
	}

	@And("^User click on Next status and click on Perform Adjustment$")
	public void user_click_on_Next_status_and_click_on_Perform_Adjustment() throws Throwable 
	{
		clickOn("drp_Next_Status", "");
		sleepWait(1000);
		clickOn("drp_PA", "");
		sleepWait(1000);
	}

	@And("^User type request adj id$")
	public void user_type_request_adj_id() throws Throwable
	{
		waitFor("txt_Search_Issue");
		type("txt_Search_Issue", StoreAdjID);   
	}
	
	@And("^User click on Helpdesk$")
	public void user_click_on_Helpdesk() throws Throwable 
	{
		sleepWait(3000);
		waitFor("txt_Helpdesk_Menu");
		clickOn("txt_Helpdesk_Menu", "");
		sleepWait(1000);
		
	}
	
	@And("^User see frame is default in internal$")
	public void user_see_frame_is_default_in_internal() throws Throwable 
	{
		wd.switchTo().defaultContent();
	}

	@And("^User click on Submit button internal portal officer$")
	public void user_click_on_Submit_button_internal_portal_officer() throws Throwable 
	{
		clickOn("btn_Help_Submit", "");
		waitFor("btn_Help_Submit");
	}

	@And("^User type comment for Request Information \"([^\"]*)\"$")
	public void user_type_comment_for_Request_Information(String data) throws Throwable 
	{
		sleepWait(1000);
		type("txt_comment_here", data);
		sleepWait(1000);
	}
	
	
	
}
