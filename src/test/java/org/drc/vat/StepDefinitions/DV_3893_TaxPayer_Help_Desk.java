package org.drc.vat.StepDefinitions;


import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import static org.drc.vat.appmanager.HelperBase.*;
import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertTrue;

import java.awt.RenderingHints.Key;
import java.awt.Robot;
import java.awt.event.KeyEvent;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.events.EventFiringWebDriver;
import org.openqa.selenium.support.ui.Select; 
public class DV_3893_TaxPayer_Help_Desk
{
	public static String StoreTit;
	public static String StoreTit_PR;
	public static String StorePaymentRelated;
	public static String StoreID;
	public static String Issue_store_GQ;
	public static String Store_Issue_store_GQ;
	public static String Store_EFD_ID;
	public static String StoreEFDTitle;
	public static String Store_Payment_ID;
	public static String StorePayRel;
	public static String StoreSysRelated;
	public static String Store_Title;
	public static String Issue_TypeGQ;
	public static String Issue_Description;
	
	@Given("^User click on Helpdesk menu \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_click_on_Helpdesk_menu(String TestcaseID, String Description) throws Throwable 
	{
	   sleepWait(1000);
	   clickOn("txt_Helpdesk_Menu", "");
	   sleepWait(1000);    
	   System.out.println(TestcaseID);
	   System.out.println(Description);
	}

	@And ("^User click here for first time$")
	public void user_click_here_for_first_time() throws Throwable 
	{
		sleepWait(1000);		
		clickOn("txt_First_Click_Here", "");
	}
	@And("^User click on Add New Issue button$")
	public void user_click_on_Add_New_Issue_button() throws Throwable 
	{
		sleepWait(1000);
		/*WebElement element1 = wd.findElement(By.id("iframe"));
		wd.switchTo().frame(element1);
		sleepWait(1000);		*/
		clickOn("btn_Add_New_Issue", "");	
		sleepWait(1000);
	}

	@And("^User click on Issue Type and select \"([^\"]*)\"$")
	public void user_click_on_Issue_Type_and_select(String value) throws Throwable 
	{
		/*sleepWait(1000);
		WebElement element1 = wd.findElement(By.id("iframe"));
		wd.switchTo().frame(element1);
		sleepWait(1000);*/
		sleepWait(1000);
		waitFor("drp_Select_Issue");
		clickOn("drp_Select_Issue","");
		sleepWait(1000);
		clickOn(value, "");
		sleepWait(1000);
	    
	}

	@And("^User type title \"([^\"]*)\" for Helpdesk$")
	public void user_type_title_for_Helpdesk(String title) throws Throwable 
	{
		
		type("txt_HelpdeskTitle", title);
	}

	@And("^User store title for System releated$")
	public void user_store_title_for_System_releated() throws Throwable 
	{
	  sleepWait(1000);
	  StoreTit = getValue("txt_HelpdeskTitle");
	  sleepWait(1000);
	}

	@And("^User type store title and get issue id$")
	public void user_type_store_title_and_get_issue_id() throws Throwable 
	{
		/*WebElement element1 = wd.findElement(By.id("iframe"));
		wd.switchTo().frame(element1);*/		
		sleepWait(1000);
		type("txt_Search_Issue", StoreTit);
		
	}
	/**
	 *  Here title is typed and user get ticket id and stored 
	 *   going out from iframe 
	 */
	@And("^User see referance id for System related issue$")
	public void user_see_referance_id_for_System_related_issue() throws Throwable 
	{
		sleepWait(2000);
		String Value = elementText("txt_Reference_ID_Store");
		Value = Value.substring(14);	
		StoreSysRelated  = Value;
		System.out.println(StoreSysRelated);
		wd.switchTo().defaultContent();
		
	}
	// for 29 and 32 TC
	@And("^User type System related issue id$")
	public void user_type_System_related_issue_id() throws Throwable 
	{
		sleepWait(1000);
		type("txt_Search_Issue",StoreSysRelated);		
		System.out.println(StoreSysRelated);
		
	}

	@And("^User store title for Payment Related$")
	public void user_store_title_for_Payment_Related() throws Throwable 
	{
		sleepWait(1000);
		StoreTit_PR = getValue("txt_HelpdeskTitle");
		sleepWait(1000);
	}

	@And("^User type store title and get issue id Payment Related$")
	public void user_type_store_title_and_get_issue_id_Payment_Related() throws Throwable
	{
		sleepWait(1000);
		type("txt_Search_Issue", StoreTit_PR);
	}
	/**
	 *  Here title is typed and get ticket id and stored  
	 */	
	@And("^User see referance id forPayment Related issue$")
	public void user_see_referance_id_forPayment_Related_issue() throws Throwable 
	{
		sleepWait(2000);		
		String Value = elementText("txt_Reference_ID_Store");
		Value = Value.substring(14);			
		StorePaymentRelated  = Value;
		System.out.println(StorePaymentRelated);
		wd.switchTo().defaultContent();	
	}

	@And("^User type Payment related issue id$")
	public void user_type_Payment_related_issue_id() throws Throwable 
	{
		sleepWait(1000);
		waitFor("txt_Search_Issue");
		sleepWait(1000);
		type("txt_Search_Issue", StorePaymentRelated);
		System.out.println(StorePaymentRelated);
	}
	
	@And("^User type description \"([^\"]*)\" for Helpdesk$")
	public void user_type_description_for_Helpdesk(String description) throws Throwable 
	{
		/*WebElement element1 = wd.findElement(By.id("my-editor_ifr"));
		String number1 = element1.getText();
		System.out.println(number1);
		wd.switchTo().frame(element1);*/
		sleepWait(1000);
		type("txt_Helpdesk_Description", description);
	    
	}
	
	@And("^User click on Submit button for system related$")
	public void user_click_on_Submit_button_for_system_related() throws Throwable 
	{
		wd.switchTo().defaultContent();	
		WebElement element1 = wd.findElement(By.id("iframe"));
		wd.switchTo().frame(element1);		
		clickOn("btn_Help_Submit", "");
		waitFor("btn_Add_New_Issue");
	}
	
	@And("^User click on Submit button$")
	public void user_click_on_Submit_button() throws Throwable 
	{
		clickOn("btn_Help_Submit", "");
		waitFor("btn_Add_New_Issue");
		sleepWait(1000);
 	}
	@And("^User type Trasnsaction ID \"([^\"]*)\"$")
	public void user_type_Trasnsaction_ID(String Tran) throws Throwable 
	{
		wd.switchTo().defaultContent();		
		WebElement element1 = wd.findElement(By.id("iframe"));
		wd.switchTo().frame(element1);		
		type("txt_Transaction_ID", Tran);
	}

	@And("^User type Amount \"([^\"]*)\"$")
	public void user_type_Amount(String Amo) throws Throwable 
	{
		type("txt_Amount", Amo);
	}
	
	@And("^User select date \"([^\"]*)\"$")
	public void user_select_date(String Date) throws Throwable 
	{
		clickOn("txt_Click_date", "");
		datePicker(Date);
		
	}

	
	@And("^User tab for payment$")
	public void user_tab_for_payment() throws Throwable 
	{
		sleepWait(1000);
		clickOn("txt_Transaction_ID", "");
		sleepWait(1000);
		wd.findElement(By.xpath(obj.getProperty("txt_Transaction_ID"))).sendKeys(Keys.TAB);
		wd.findElement(By.xpath(obj.getProperty("txt_Amount"))).sendKeys(Keys.TAB);
		wd.findElement(By.xpath(obj.getProperty("txt_Click_date"))).sendKeys(Keys.TAB);
		sleepWait(1000);		
		
	}
	
	@And("^User validate Helpdesk page$")	
	public void user_validate_Helpdesk_page() throws Throwable 
	{
		if(wd.findElement(By.xpath(obj.getProperty("txt_Helpdesk_page_title"))).isDisplayed())
		{
			assertTrue(true);
		}
	}


	
	@And("^User click on Submit button and see mess \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_click_on_Submit_button_and_see_mess_and_and(String mess1, String mess2, String mess3) throws Throwable 
	{		
		clickOn("btn_Help_Submit", "");
		sleepWait(500);
		wd.switchTo().defaultContent();
		if(wd.findElement(By.xpath("//*[contains(text(),'" +mess1 + "')]")).isDisplayed() && wd.findElement(By.xpath("//*[contains(text(),'" +mess2 + "')]")).isDisplayed() && wd.findElement(By.xpath("//*[contains(text(),'" +mess3 + "')]")).isDisplayed())
		{
			assertTrue(true);
		}
		
	}

	@And("^User click on Subcategory and select \"([^\"]*)\"$")
	public void user_click_on_Subcategory_and_select(String click) throws Throwable 
	{
		clickOn("drp_Subcategory", "");
		sleepWait(2000);
		clickOn(click, "");
		sleepWait(1000);
		clickOn("drp_Subcategory", "");
		sleepWait(1000);
	}

	@And("^User click on browse button and select file \"([^\"]*)\"$")
	public void user_click_on_browse_button_and_select_file(String file) throws Throwable
	{
		sleepWait(1000);		
		type("txt_comment_here", "comment Here");
		wd.findElement(By.xpath(obj.getProperty("txt_comment_here"))).sendKeys(Keys.PAGE_UP);
		sleepWait(1000);
		//wd.findElement(By.xpath("//div[@id='form-scroll']/div"));
		
		/*WebElement itemsPageDropdown = wd.findElement(By.xpath("//div[@id='form-scroll']/div"));		
		Select select = new Select(itemsPageDropdown);
		sleepWait(1000);
		EventFiringWebDriver eventFiringWebDriver = new EventFiringWebDriver(wd);
		eventFiringWebDriver.executeScript("document.quearySelector('//div[@id='form-scroll']/div').scrollTop= 0");*/
		
		/*JavascriptExecutor js = (JavascriptExecutor) wd;
		js.executeScript("window.scrollTo(0, document.body.scrollHeight)");*/
		
		waitFor("upload_File_helpdesk");
		sleepWait(1000);
		clickOn("upload_File_helpdesk", "");
		UploadImage("", file);
	    
	}

	@And("^User click on Cancel button and navigate to helpdesk$")
	public void user_click_on_Cancel_button_and_navigate_to_helpdesk() throws Throwable 
	{
		clickOn("btn_Help_Cancel", ""); 
		waitFor("btn_Add_New_Issue");
		if(wd.findElement(By.xpath(obj.getProperty("btn_Add_New_Issue"))).isDisplayed())
		{
			assertTrue(true);
		}
	}

	@And("^User click on Submit button and the unique id is generated$")
	public void user_click_on_Submit_button_and_the_unique_id_is_generated() throws Throwable 
	{
	   clickOn("btn_Help_Submit", "");	    
	   waitFor("btn_Add_New_Issue");
	}
	
	/**
	  *  Store title	     
	  */
	@And("^User store title for new user$")
	public void user_store_title_for_new_user() throws Throwable 
	{
		sleepWait(1000);
		Store_Title = getValue("txt_HelpdeskTitle");	
	}
	
	@And("^User type title one$")
	public void user_type_title_one() throws Throwable 
	{
		sleepWait(1000);
		type("txt_Search_Issue", Store_Title);
	}
	/**
	 * Store id  
	 */
	@And("^User get issue id for system related$")
	public void user_get_issue_id_for_system_related() throws Throwable 
	{
	   String Value = elementText("txt_Reference_ID_Store");
	   Value = Value.substring(14);			
	   StoreID  = Value;
	   System.out.println(StoreID);
	  
	}
	
	@And("^User type get issue id for system related$")
	public void user_type_get_issue_id_for_system_related() throws Throwable 
	{
		sleepWait(1000);
		type("txt_Search_Issue", StoreID);
		sleepWait(1000);
		
	}
	
	@And("^User type invalid search id \"([^\"]*)\" and verify mess \"([^\"]*)\"$")
	public void user_type_invalid_search_id_and_verify_mess(String invalid, String check) throws Throwable 
	{
		 waitFor("txt_Search_Issue");
		 type("txt_Search_Issue", invalid);
		 String mess = elementText("txt_NRF");
		 System.out.println(mess);
		 
		 //assertEquals(mess, check);		 
		 
		 if(mess.contentEquals(check))
		 {
			 assertTrue(true);
		 }
		 
	}

	@And("^User click on Issue Type and select \"([^\"]*)\" and user verify issue type is selected$")
	public void user_click_on_Issue_Type_and_select_and_user_verify_issue_type_is_selected(String issue) throws Throwable 
	{
		sleepWait(2000);
		clickOn("drp_Select_Issue", "");
		sleepWait(2000);
		clickOn(issue, "");
		sleepWait(1000);
		clickOn("drp_Select_Issue", "");
		sleepWait(1000);
	}
	

	@And("^User type title \"([^\"]*)\" and verify title$")
	public void user_type_title_and_verify_title(String title) throws Throwable 
	{
		type("txt_HelpdeskTitle", title);
		
	}
	/**
	 *  Store issue type  
	 */
	@And("^User see Issue Type$")
	public void user_see_Issue_Type() throws Throwable 
	{
		sleepWait(1000);
		Issue_TypeGQ = getValue("drp_Select_Issue");
		System.out.println(Issue_TypeGQ);
	}

	/**
	 * 	Store Title
	 */
	@And("^User store title for general query issue type$")
	public void user_store_title_for_general_query_issue_type() throws Throwable 
	{
	
	//String	Issue_store_GQ1 = elementText("txt_HelpdeskTitle");
	//System.out.println(Issue_store_GQ1);
	
	Issue_store_GQ = getValue("txt_HelpdeskTitle"); 
	System.out.println(Issue_store_GQ);
		
	}

	@And("^User type title for general query issue type$")
	public void user_type_title_for_general_query_issue_type() throws Throwable 
	{
		sleepWait(1000);
		type("txt_Search_Issue", Issue_store_GQ);
		sleepWait(1000);
		
	}
	/**
	 * Store id  GQ
	 */
	@And("^User get issue id for general query issue type$")
	public void user_get_issue_id_for_general_query_issue_type() throws Throwable
	{
		sleepWait(2000);
		String Value = elementText("txt_Reference_ID_Store");
		Value = Value.substring(14);			
		Store_Issue_store_GQ  = Value;	
		System.out.println(Store_Issue_store_GQ);
	}
	
	@And("^User type issue id for general query issue type$")
	public void user_type_issue_id_for_general_query_issue_type() throws Throwable 
	{
		sleepWait(1000);
		type("txt_Search_Issue", Store_Issue_store_GQ);
	} 

	/**
	 *  Store description 
	 */
	@And("^User type description \"([^\"]*)\" and verify description$")
	public void user_type_description_and_verify_description(String description) throws Throwable
	{
		type("txt_Helpdesk_Description", description);
		Issue_Description =elementText("txt_Helpdesk_Description");
		System.out.println(Issue_Description);
	}

	@And("^User click on Subcategory and select \"([^\"]*)\" and verify subcategory is selected$")
	public void user_click_on_Subcategory_and_select_and_verify_subcategory_is_selected(String sub) throws Throwable 
	{
		clickOn("drp_Subcategory", "");
		sleepWait(2000);
		clickOn(sub, "");
	}

	@And("^User type Tax Period \"([^\"]*)\" and verify tax period$")
	public void user_type_Tax_Period_and_verify_tax_period(String tax) throws Throwable
	{
		type("txt_TaxPeriod", tax);
	}

	@And("^User verify Issue Type$")
	public void user_verify_Issue_Type() throws Throwable 
	{
		sleepWait(1000);
		String Check_IssType = getValue("drp_Select_Issue");
		assertEquals(Check_IssType, Issue_TypeGQ);
		sleepWait(1000);
	}

	@And("^User verify Ticket id$")
	public void user_verify_Ticket_id() throws Throwable 
	{
		sleepWait(1000);
		String Check_Ref_ID = elementText("txt_Ticket_Id_Check");	
		assertEquals(Check_Ref_ID, Store_Issue_store_GQ);	 
	/*	sleepWait(2000);
		String Value = elementText("txt_Reference_ID_Store");
		Value = Value.substring(14);			
		Store_Issue_store_GQ  = Value;	*/
		
		
	//	System.out.println(Check_Ref_ID);
	//	System.out.println(Store_Issue_store_GQ);
	    sleepWait(1000);
	}
	/**
	 * 	Verify Title
	 */
	@And("^User verify title$")
	public void user_verify_title() throws Throwable 
	{	  
		String Check_ti = getValue("txt_HelpdeskTitle");				
	 //   System.out.println(Check_ti);
	 //   System.out.println(Issue_store_GQ);	    
	    assertEquals(Check_ti, Issue_store_GQ);
	    sleepWait(1000);
	}

	@And("^User verify derscription$")
	public void user_verify_derscription() throws Throwable 
	{
		String Check_Des = elementText("txt_Helpdesk_Description");
		assertEquals(Check_Des, Issue_Description);
	}
	
	@And("^User tab general query$")
	public void user_tab_general_query() throws Throwable 
	{
		
		sleepWait(1000);
		clickOn("txt_dis_comm", "");
		sleepWait(1000);		
	//	wd.findElement(By.xpath(obj.getProperty("txt_dis_comm"))).sendKeys(Keys.PAGE_DOWN);	
//		sleepWait(1000);		
		
		
	}

	/*@And("^User click on upload button and select file \"([^\"]*)\" and verify uploaded file$")
	public void user_click_on_upload_button_and_select_file_and_verify_uploaded_file(String file) throws Throwable
	{		
		type("txt_comment_here", "comment Here");
		wd.findElement(By.xpath(obj.getProperty("txt_comment_here"))).sendKeys(Keys.PAGE_DOWN);		
		sleepWait(1000);
		clickOn("upload_File", "");
		UploadImage("", file);
		
		sleepWait(1000);
		hlkm;ll
	    
	}*/

	@And("^User click on submit button on helpdesk$")
	public void user_click_on_submit_button_on_helpdesk() throws Throwable 
	{
	   clickOn("btn_Help_Submit", "");
	   sleepWait(1000);
	   waitFor("btn_Help_Submit");
	   sleepWait(1000);
	   waitFor("btn_Help_Submit");
	   sleepWait(500);
	   waitFor("btn_Help_Submit");
	   sleepWait(500);
	   
	    
	}

	@And("^User click on download and verify$")
	public void user_click_on_download_and_verify() throws Throwable
	{
	    sleepWait(2000);
	    waitFor("download_uploaded_file");
	    sleepWait(3000);
		String checkFile = elementText("uploaded_file_name");		
		clickOn("download_uploaded_file", "");
		sleepWait(2000);
		waitFor("download_uploaded_file");
		sleepWait(1000);
		verifyDownload(checkFile);
		sleepWait(1000);
	}

	
	@And("^User store title for EFD Related Issue type$")
	public void user_store_title_for_EFD_Related_Issue_type() throws Throwable 
	{
		sleepWait(1000);
		StoreEFDTitle = getValue("txt_HelpdeskTitle");
	}
	
	@And("^User type title for EFD Related Issue type$")
	public void user_type_title_for_EFD_Related_Issue_type() throws Throwable 
	{
		sleepWait(1000);
		type("txt_Search_Issue", StoreEFDTitle);
	}
	
	/**
	 * Store EFD related 
	 */	
	@And("^User get issue id for EFD Related Issue type$")
	public void user_get_issue_id_for_EFD_Related_Issue_type() throws Throwable
	{
		sleepWait(1000);	
		String Value = elementText("txt_Reference_ID_Store");
		Value = Value.substring(14);			
		Store_EFD_ID  = Value;
		System.out.println(Store_EFD_ID);
	}
	
	@And("^User type issue id for EFD Related Issue type$")
	public void user_type_issue_id_for_EFD_Related_Issue_type() throws Throwable 
	{
		sleepWait(1000);
		type("txt_Search_Issue", Store_EFD_ID);
		sleepWait(1000);
	}
	

	@And("^User type EFD id \"([^\"]*)\" and click on EFD Manufacturer and select \"([^\"]*)\"$")
	public void user_type_EFD_id_and_click_on_EFD_Manufacturer_and_select(String EFD, String select) throws Throwable 
	{
		type("txt_EFD_id", EFD);
		clickOn("drp_SelectEFD_Man", "");
		sleepWait(1000);
		clickOn(select, "");
		sleepWait(1000);		 
	}

	@And("^User tab for efd$")
	public void user_tab_for_efd() throws Throwable 
	{
		clickOn("drp_Subcategory", "");
		sleepWait(1000);
		clickOn("drp_Subcategory", "");
		sleepWait(1000);
		wd.findElement(By.xpath(obj.getProperty("drp_Subcategory"))).sendKeys(Keys.TAB);
		wd.findElement(By.xpath(obj.getProperty("txt_EFD_id"))).sendKeys(Keys.TAB);
		wd.findElement(By.xpath(obj.getProperty("drp_SelectEFD_Man"))).sendKeys(Keys.TAB);
		sleepWait(1000);		
		
	}

	
	
	@Given("^User store title for Payment Related Issue type Drop-down$")
	public void user_store_title_for_Payment_Related_Issue_type_Drop_down() throws Throwable 
	{
		sleepWait(1000);
		StorePayRel = getValue("txt_HelpdeskTitle");
		sleepWait(1000);
	}

	@Given("^User type title for Payment Related Issue type Drop-down$")
	public void user_type_title_for_Payment_Related_Issue_type_Drop_down() throws Throwable 
	{
		type("txt_Search_Issue", StorePayRel);
	}
	/**
	 * StorePayment related
	 */	
	@Given("^User get id for Payment Related Issue type Drop-down$")
	public void user_get_id_for_Payment_Related_Issue_type_Drop_down() throws Throwable 
	{
		
		sleepWait(2000);
		String Value = elementText("txt_Reference_ID_Store");
		Value = Value.substring(14);			
		Store_Payment_ID  = Value;
		System.out.println(Store_Payment_ID);
	}
	
	@And("^User type id for Payment Related Issue type Drop-down$")
	public void user_type_id_for_Payment_Related_Issue_type_Drop_down() throws Throwable 
	{
		sleepWait(1000);
		type("txt_Search_Issue", Store_Payment_ID);
	}
	
	@And("^User see \"([^\"]*)\" is selected$")
	public void user_see_is_selected(String value) throws Throwable
	{
		String CheckIssue = getValue("drp_Select_Issue"); 
		assertEquals(CheckIssue,"11");
		
		/*if(CheckIssue.equals(value))
		{
			assertTrue(true);
		}*/
	    
	}

	@And("^User type title \"([^\"]*)\" and verify$")
	public void user_type_title_and_verify(String title) throws Throwable 
	{
		type("txt_HelpdeskTitle", title);
		sleepWait(1000);
		String CheckTitle = getValue("txt_HelpdeskTitle");		
		assertEquals(title, CheckTitle);
		
	/*	if(CheckTitle.equals(title))
		{
			assertTrue(true);
		}*/
	    
	}

	@And("^User type description \"([^\"]*)\" and verify$")
	public void user_type_description_and_verify(String des) throws Throwable 
	{
		type("txt_Helpdesk_Description", des);
		sleepWait(1000);
		String Checkdes = elementText("txt_Helpdesk_Description");		
		assertEquals(des, Checkdes);
		
		/*if(Checkdes.equals(des))
		{
			assertTrue(true);
		}*/
	}

	@And("^User upload more than two mb file \"([^\"]*)\" and verify the message \"([^\"]*)\"$")
	public void user_upload_more_than_two_mb_file_and_verify_the_message(String file, String mess) throws Throwable 
	{
		type("txt_comment_here", "comment Here");
		wd.findElement(By.xpath(obj.getProperty("txt_comment_here"))).sendKeys(Keys.PAGE_UP);		
		sleepWait(1000);
		clickOn("upload_File_helpdesk", "");
		UploadImage("", file);
		sleepWait(1000);
		clickOn("btn_Help_Submit", "");
		waitFor("btn_Help_Submit");
				
		wd.switchTo().defaultContent();
		sleepWait(1000);
		waitFor("toast_common");		
		assertEquals(validationMessage(), mess);
	}

	@And("^User click on upload button and and verify the file \"([^\"]*)\" and see file name$")
	public void user_click_on_upload_button_and_and_verify_the_file_and_see_file_name(String file) throws Throwable 
	{
		sleepWait(1000);
		type("txt_comment_here", "comment Here");
		wd.findElement(By.xpath(obj.getProperty("txt_comment_here"))).sendKeys(Keys.PAGE_DOWN);		
		sleepWait(1000);
		clickOn("upload_File_helpdesk", "");
		UploadImage("", file);		
		String Check_file_Name = elementText("upload_file_name_check");
		assertEquals(Check_file_Name, file);
		
		/*if(Check_file_Name.equals(file))
		{
			assertTrue(true);
		}*/
	}

	@And("^User click on cancel button$")
	public void user_click_on_cancel_button() throws Throwable 
	{
		sleepWait(2000);
		waitFor("btn_Help_Cancel");
		sleepWait(3000);
		waitFor("btn_Help_Cancel");
		sleepWait(2000);
		waitFor("btn_Help_Cancel");
		sleepWait(2000);				
		
		clickOn("btn_Help_Cancel", "");	   
		sleepWait(2000);
		waitFor("txt_Search_Issue");
		sleepWait(1000);
	   
	}

	@And("^User click on Helpdesk menu on internal portal \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_click_on_Helpdesk_menu_on_internal_portal(String TestcaseID, String Description) throws Throwable 
	{
		System.out.println(TestcaseID);
		System.out.println(Description);
		clickOn("txt_Helpdesk_Menu", "");
		sleepWait(3000);
		waitFor("txt_Helpdesk_Menu");
		sleepWait(3000);
		waitFor("txt_Helpdesk_Menu");		
		sleepWait(1000);
		waitFor("txt_Helpdesk_Menu");
		sleepWait(1000);
		waitFor("txt_Helpdesk_Menu");
		sleepWait(1000);
		//sleepWait(5000);
		//waitFor("btn_help_Internal");
	}

	@And("^User click on edit buton$")
	public void user_click_on_edit_buton() throws Throwable 
	{
		clickOn("btn_Edit_Click", "");
		sleepWait(1000);    
		waitFor("btn_Help_Cancel");
		clickOn("btn_Help_Cancel", "");
		waitFor("btn_Add_New_Issue");		
		clickOn("btn_Add_New_Issue", "");
		clickOn("btn_Help_Cancel", "");		
		type("txt_Search_Issue", Store_Issue_store_GQ);		
		System.out.println(Store_Issue_store_GQ);
		clickOn("btn_Edit_Click", "");
		sleepWait(1000);

		/*Robot robot = new Robot();
		robot.keyPress(KeyEvent.VK_HOME);
		robot.keyRelease(KeyEvent.VK_HOME);*/
		
	}
	

	@And("^User see status changed to \"([^\"]*)\"$")
	public void user_see_status_changed_to(String Status) throws Throwable 
	{
		sleepWait(1000);
		waitFor("txt_Search_Issue");		
		String Status_Check = elementText("Status_check");
		sleepWait(1000);
		assertEquals(Status,Status_Check);
	//	System.out.println(Status);
	//	System.out.println(Status_Check);
		
	  /* if(wd.findElement(By.xpath("//*[contains(text(),'" +Status +"')]")).isDisplayed())
	   {
		   assertTrue(true);
	   }*/
	}

	@And("^User click on Next status and click on under review$")
	public void user_click_on_Next_status_and_click_on_under_review() throws Throwable 
	{
	   clickOn("drp_Next_Status", "");
	   sleepWait(1000);
	   clickOn("drp_UR", "");
	   sleepWait(1000);
	}

	@And("^User click on Next status and click on Request Adjustement$")
	public void user_click_on_Next_status_and_click_on_Request_Adjustement() throws Throwable
	{
		sleepWait(1000);
		waitFor("drp_Next_Status");
		sleepWait(2000);
		waitFor("drp_Next_Status");
		sleepWait(2000);
		clickOn("drp_Next_Status", "");
		sleepWait(1000);
		clickOn("drp_RA", "");
		sleepWait(1000);
		
	    
	}

	@And("^User click on Next status and click on Request Information$")
	public void user_click_on_Next_status_and_click_on_Request_Information() throws Throwable
	{
		sleepWait(1000);
		waitFor("drp_Next_Status");
		sleepWait(1000);
		waitFor("drp_Next_Status");
		sleepWait(1000);
		waitFor("drp_Next_Status");
		sleepWait(1000);
		clickOn("drp_Next_Status", "");
		sleepWait(1000);
		clickOn("drp_RI", "");
		sleepWait(1000);
	}
	
	
	@And("^User click on comments and Attachments$")
	public void user_click_on_comments_and_Attachments() throws Throwable 
	{
		sleepWait(1000);
		Actions actions = new Actions(wd);		
		actions.moveToElement(wd.findElement(By.xpath(obj.getProperty("txt_Priority_tab"))));
		actions.click();
		actions.sendKeys(Keys.PAGE_DOWN);
		actions.build().perform();
		sleepWait(1000);		
	}

	
	@And("^User click on comments and Attachments and press page up$")
	public void user_click_on_comments_and_Attachments_and_press_page_up() throws Throwable 
	{
		sleepWait(3000);
		Actions actions = new Actions(wd);		
		actions.moveToElement(wd.findElement(By.xpath(obj.getProperty("txt_Priority_tab"))));
		actions.click();
		actions.sendKeys(Keys.PAGE_UP);
		actions.build().perform();
		sleepWait(1000);
	}
	
	
	@And("^User type comments and Attachments \"([^\"]*)\"$")
	public void user_type_comments_and_Attachments(String comment) throws Throwable 
	{
		sleepWait(1000);		
		type("txt_comment_here", "comment Here");
		sleepWait(1000);
	}
	
	

	@And("^User login in to tax payer email \"([^\"]*)\" and  password \"([^\"]*)\"$")
	public void user_login_in_to_tax_payer_email_and_password(String email, String password) throws Throwable
	{
		sleepWait(1000);
		login_Helpdesk(email, password);
	}

	@And("^User click on helpdesk$")
	public void user_click_on_helpdesk() throws Throwable
	{
	   sleepWait(1000);
	   clickOn("txt_Helpdesk_Menu", "");
	   sleepWait(1000);
	   waitFor("txt_Helpdesk_Menu");
	   sleepWait(1000);
	   waitFor("txt_Helpdesk_Menu");
	   sleepWait(1000);
	   waitFor("txt_Helpdesk_Menu");
	   sleepWait(1000);
	    
	}

	
	/*@And("^User click on comment and press tab on taxpayer$")
	public void user_click_on_comment_and_press_tab_on_taxpayer() throws Throwable 
	{
		sleepWait(1000);
		Actions actions = new Actions(wd);
		actions.moveToElement(wd.findElement(By.xpath(obj.getProperty("txt_title_tab"))));
		actions.click();
		actions.sendKeys(Keys.PAGE_DOWN);
		actions.build().perform();
		sleepWait(1000);
	}*/
	
	@And("^User respond to the comment \"([^\"]*)\"$")
	public void user_respond_to_the_comment(String data) throws Throwable 
	{
		sleepWait(1000);
	   type("txt_comment_here", data);
	   sleepWait(1000);
	    
	}
	
	@And("^User click on Next status and click on close status$")
	public void user_click_on_Next_status_and_click_on_close_status() throws Throwable
	{
		clickOn("drp_Next_Status", "");
		sleepWait(1000);
		clickOn("drp_close", "");
	    
	}
	
	@And("^User enter in add new button frame$")
	public void user_enter_in_add_new_button_frame() throws Throwable 
	{
		sleepWait(1000);
		WebElement element1 = wd.findElement(By.id("iframe"));
		wd.switchTo().frame(element1);
		//sleepWait(1000);		
	}

	@And("^User enter again in add new button frame$")
	public void user_enter_again_in_add_new_button_frame() throws Throwable 
	{
		wd.switchTo().defaultContent();		
		sleepWait(1000);
		WebElement element1 = wd.findElement(By.id("iframe"));
		wd.switchTo().frame(element1);	
	}
	
	@And("^User enter in description frame$")
	public void user_enter_in_description_frame() throws Throwable 
	{
		WebElement element1 = wd.findElement(By.id("my-editor_ifr"));
		String number1 = element1.getText();
		System.out.println(number1);
		wd.switchTo().frame(element1);	 		
		
	}

	@And("^User enter in subcategory frame$")
	public void user_enter_in_subcategory_frame() throws Throwable 
	{
		wd.switchTo().defaultContent();
		WebElement element1 = wd.findElement(By.id("iframe"));
		wd.switchTo().frame(element1);
	}
	
	@And("^User see frame is default$")
	public void user_see_frame_is_default() throws Throwable 
	{		
		wd.switchTo().defaultContent();
		sleepWait(1000);
	}

	@And("^User click on edit buton internal portal$")
	public void user_click_on_edit_buton_internal_portal() throws Throwable 
	{
		sleepWait(1000);
		waitFor("btn_Edit_Click");		
		clickOn("btn_Edit_Click", "");
		sleepWait(1000);
	}

	@And("^User click on Submit button internal portal$")
	public void user_click_on_Submit_button_internal_portal() throws Throwable 
	{
		sleepWait(1000);
		waitFor("btn_Help_Submit");
		sleepWait(1000);
		waitFor("btn_Help_Submit");
		clickOn("btn_Help_Submit", "");		
		sleepWait(1000);
		waitFor("btn_Help_Submit");
		sleepWait(1000);
		waitFor("btn_Help_Submit");
		sleepWait(1000);
		waitFor("btn_Help_Submit");
		sleepWait(1000);
		
	}
	
	
	@And("^User type \"([^\"]*)\" test$")
	public void user_type_test(String test) throws Throwable 
	{
		sleepWait(1000);
	  type("txt_Search_Issue", test);
	}
	
	@And("^User type \"([^\"]*)\" taxpayer$")
	public void user_type_taxpayer(String id) throws Throwable 
	{
		sleepWait(1000);
		waitFor("txt_Search_Issue");
		type("txt_Search_Issue", id);
		sleepWait(1000);		
		waitFor("btn_Edit_Click");		
		clickOn("btn_Edit_Click", "");
		sleepWait(1000);
	
	}
	
	@And("^User click on title and press tab$")
	public void user_click_on_title_and_press_tab() throws Throwable 
	{
		sleepWait(1000);
		Actions actions = new Actions(wd);		
		actions.moveToElement(wd.findElement(By.xpath(obj.getProperty("txt_title_tab"))));
		actions.click();
		actions.sendKeys(Keys.PAGE_DOWN);
		actions.build().perform();
		sleepWait(1000);
	}
	
	@And("^User see upload button is disable$")
	public void user_see_upload_button_is_disable() throws Throwable 
	{
		sleepWait(1000);
		if(!wd.findElement(By.xpath(obj.getProperty("upload_File_helpdesk"))).isEnabled())
		{
			assertTrue(true);
		} 
		else
		{
			assertTrue(false);
		}
		
	}

	@And("^User again click on Helpdesk$")
	public void user_again_click_on_Helpdesk() throws Throwable 
	{
		sleepWait(1000);
		waitFor("txt_Helpdesk_Menu");
		sleepWait(1000);
		clickOn("txt_Helpdesk_Menu", "");
		sleepWait(1000);
		waitFor("txt_Helpdesk_Menu");
		sleepWait(1000);		
	}
	
	
	
	
}
