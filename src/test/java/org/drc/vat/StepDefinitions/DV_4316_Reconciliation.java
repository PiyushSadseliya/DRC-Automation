package org.drc.vat.StepDefinitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import static org.drc.vat.appmanager.HelperBase.*;
import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertTrue;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;
import org.openqa.selenium.By;
import org.testng.Assert;
public class DV_4316_Reconciliation extends xls_file
{
	public static String Transaction_Unreconciled;
	public static String TranNo ;
	
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

	@And("^User click on Reconciled Tile$")
	public void user_click_on_Reconciled_Tile() throws Throwable
	{
		sleepWait(1000);
		clickOn("txt_Click_Reconciled", "");
		sleepWait(1000);	   
	}
	

	@Then("^User calculate Total Amount addition of Reconciled and Unreconciled$")
	public void user_calculate_Total_Amount_addition_of_Reconciled_and_Unreconciled() throws Throwable 
	{	 		
		String Total_Amount_Reconciled= elementText("txt_Reconciled_Re");		
	    String Remove_Dot1 = Total_Amount_Reconciled.replace("." ,"");	
	    Remove_Dot1 = Remove_Dot1.replace("," ,".");		    		    	 	
	    Double result11 = Double.parseDouble(Remove_Dot1); 	
	    String Res11 = String.format ("%.2f", result11);
	    
		double Re = Double.parseDouble(Res11);				
		System.out.println(Re);
		
		String Total_Amount_UnReconciled= elementText("txt_Unreconciled_Re");	
	    String Remove_Dot12 = Total_Amount_UnReconciled.replace("." ,"");	
	    Remove_Dot12 = Remove_Dot12.replace("," ,".");		    		    	 
		Double  result12 = Double.parseDouble(Remove_Dot12);
		String Res12 = String.format ("%.2f", result12);
		
		double Un_Re = Double.parseDouble(Res12);				
		System.out.println(Un_Re);				
		
		double Validate =  Re + Un_Re;			
		System.out.println(Validate);		
		
		String Total_Amount_Re= elementText("txt_TotalAmount_Re");		
		 String Remove_Dot = Total_Amount_Re.replace("." ,"");	
		 Remove_Dot = Remove_Dot.replace("," ,".");		    		    	 
		 Double  result1 = Double.parseDouble(Remove_Dot);
		 System.out.println(result1);		
		 assertEquals(Validate, result1);
		 
	}

	@And("^User click on Date and select \"([^\"]*)\"$")
	public void user_click_on_Date_and_select(String date) throws Throwable 
	{
	   clickOn("txt_Date_Re", "");
	   sleepWait(500);
	   datePicker(date);
	  
	}

	@And("^User click FilterBy on Reconciled \"([^\"]*)\"$")
	public void user_click_FilterBy_on_Reconciled(String Filter) throws Throwable 
	{
	   sleepWait(1000);
	   clickOn("drp_FilterBy_Recon", "");
	   sleepWait(1000);	  
	   clickOn("drp_Filter_click_Re","/span[contains(text(),'" +Filter + "')]");
	}

	@And("^User click FilterBy Select Doc Type on Reconciled \"([^\"]*)\" and click on search button$")
	public void user_click_FilterBy_Select_Doc_Type_on_Reconciled_and_click_on_search_button(String Filter) throws Throwable 
	{
		sleepWait(1000);
		clickOn("drp_SelectDocType", "");
		sleepWait(1000);	  
		clickOn("drp_Filter_click_Re","/span[contains(text(),'" +Filter + "')]");
		clickOn("btn_Search_F", "");
		sleepWait(1000);
	}

	@And("^User click on download button and verify on Reconciled$")
	public void user_click_on_download_button_and_verify_on_Reconciled() throws Throwable 
	{
		sleepWait(2000);
		clickOn("btn_Download_Re", "");
		sleepWait(1000);
		verifyDownload("Reconciled Data");
	  
	}

	@And("^User enter invalid data \"([^\"]*)\" and click on search button and verify mess No records found$")
	public void user_enter_invalid_data_and_click_on_search_button_and_verify_mess_No_records_found(String invalid) throws Throwable 
	{
		type("textboxsearch", invalid);
		sleepWait(1000);
		clickOn("txt_search_Button_Re", "");
		sleepWait(1000);
	  
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

	@Then("^User see the status Processed$")
	public void user_see_the_status_Processed() throws Throwable 
	{
		sleepWait(1000);
		if(wd.findElement(By.xpath(obj.getProperty("txt_Processed_check"))).isDisplayed())
		{
		   assertTrue(true);
		 }	  
		else
		{
			assertTrue(false);
		}
	}
	
	@Then("^User click on Processed and verify Recipt in new tab$")
	public void user_click_on_Processed_and_verify_Recipt_in_new_tab() throws Throwable 
	{
		sleepWait(1000);		
		String text_Name = elementText("txt_TaxPayer_Re_r");	
		String text_NITVA =elementText("txt_Nitva_Re_r");
		String text_TransactionNo =elementText("txt_Transaction_Re_r");
		String text_InstitutionName_BankName=elementText("txt_InstituteName_Re_r");

		clickOn("txt_Processed_check", "");
		sleepWait(1000);
		PDDocument doc = PDDocument.load(getLatestFilefromDir1());   
		PDFTextStripper pdfStripper = new PDFTextStripper();  
		String text = pdfStripper.getText(doc);  
		//System.out.println(text);

		assertEquals(text.contains(text_Name), true);
		assertEquals(text.contains(text_NITVA), true);
		assertEquals(text.contains(text_TransactionNo), true);
		assertEquals(text.contains(text_InstitutionName_BankName), true);

	}
	
	@And("^User clik on month \"([^\"]*)\" and lick on pay \"([^\"]*)\" button$")
	public void user_clik_on_month_and_lick_on_pay_button(String month, String pay) throws Throwable 
	{
		sleepWait(1000);
		clickOn(month, "");
		sleepWait(1000);
		clickOn(pay, "");
		sleepWait(1000);
	}
	
	@Then("^User wait for ten minute$")
	public void user_wait_for_ten_minute() throws Throwable 
	{
		System.out.println("Ten min Starts...");
		
		Calendar cal = Calendar.getInstance();
	    Date date = cal.getTime();             
	    SimpleDateFormat format1 = new SimpleDateFormat("hh:mm:ss");
	    String date1 = format1.format(date);
	    System.out.println(date1);
		
		sleepWait(1000);		
		sleepWait(600000);
		System.out.println("Ten min Ends...");
	}

	
	@And("^User Type Doc No and click on search button$")
	public void user_Type_Doc_No_and_click_on_search_button() throws Throwable 
	{
		sleepWait(1000);
		type("textboxsearch", Document_No);
		clickOn("txt_search_Button_Re", ""); 
		sleepWait(1000);
	}

	@Then("^User verify Doc no$")
	public void user_verify_Doc_no() throws Throwable 
	{
		sleepWait(1000);
		String check_doc = elementText("txt_DocNo_Re_r");
		System.out.println(check_doc);
		System.out.println(Document_No);
		sleepWait(1000);
		assertEquals(check_doc, Document_No);
	}
	
	@And("^User click on FilterBy Nitva and verify NITVA no$")
	public void user_click_on_FilterBy_Nitva_and_verify_NITVA_no() throws Throwable 
	{
		sleepWait(1000);
		String check_Nitva = elementText("txt_Nitva_Re_r");
		System.out.println(check_Nitva);		
		sleepWait(1000);
		assertEquals(check_Nitva, NITVA);
	}
	
	/**
	 *  UnRecociled
	 */
	@When("^User click on Unreconciled Tile$")
	public void user_click_on_Unreconciled_Tile() throws Throwable 
	{
		sleepWait(1000);
	    clickOn("txt_Click_Unreconciled", "");
	    sleepWait(1000);	  
	}
	
	@And("^User click in Download button on Unreconciled record$")
	public void user_click_in_Download_button_on_Unreconciled_record() throws Throwable 
	{
		sleepWait(1000);
		clickOn("btn_Download_Re", "");
		verifyDownload("Unreconciled Data");
		waitFor("btn_Download_Re");
		sleepWait(1000);
	}
	

	@When("^User click on Filter by and select Transaction no and type Transaction and click on search button and verify$")
	public void user_click_on_Filter_by_and_select_Transaction_no_and_type_Transaction_and_click_on_search_button_and_verify() throws Throwable 
	{
		sleepWait(1000);
		String Transaction_No = elementText("txt_Transaction_Re_u");
		sleepWait(1000);
	    clickOn("drp_FilterBy_Recon", "");
	    sleepWait(1000);
	    clickOn("drp_FilterBy_Tran", "");
	    sleepWait(1000);
	    type("textboxsearch",Transaction_No);	    	    
	    clickOn("txt_search_Button_Re", "");	
	    sleepWait(1000);	    
	    if(wd.findElement(By.xpath("//*[contains(text(),'" +Transaction_No + "')]")).isDisplayed())
	    {
	    	assertTrue(true);
	    }
	    else
	    {
	    	assertTrue(false);
	    }	   
	}

	@When("^User click on Filter by and select Taxpayer and type Taxpayer Name  and click on search button and verify$")
	public void user_click_on_Filter_by_and_select_Taxpayer_and_type_Taxpayer_Name_and_click_on_search_button_and_verify() throws Throwable 
	{
		sleepWait(1000);
		String Taxpayer_Name = elementText("txt_TaxpayerName_ch");
		sleepWait(1000);
	    clickOn("drp_FilterBy_Recon", "");
	    sleepWait(1000);
	    clickOn("drp_FilterBy_Taxpayer", "");
	    sleepWait(1000);
	    type("textboxsearch",Taxpayer_Name);	  
	    sleepWait(1000);
	    clickOn("txt_search_Button_Re", "");
	    sleepWait(1000);
	    if(wd.findElement(By.xpath("//*[contains(text(),'" +Taxpayer_Name+ "')]")).isDisplayed())
	    {
	    	assertTrue(true);
	    }
	    else
	    {
	    	assertTrue(false);
	    }	   
	}

	@When("^User click on Filter by \"([^\"]*)\" and type invalid data \"([^\"]*)\" and clik on search buttom$")
	public void user_click_on_Filter_by_and_type_invalid_data_and_clik_on_search_buttom(String One, String Two) throws Throwable
	{
	    sleepWait(1000);
	    clickOn("drp_FilterBy_Recon", "");
	    sleepWait(1000);
	    clickOn(One, "");
	    sleepWait(1000);
	    type("textboxsearch",Two);
	    sleepWait(1000);
	    clickOn("txt_search_Button_Re", "");	    	    
	}

	@Given("^User see the status is Error$")
	public void user_see_the_status_is_Error() throws Throwable 
	{
	   sleepWait(1000);	   
	   if(wd.findElement(By.xpath(obj.getProperty("txt_Un_Error"))).isDisplayed())
	   {
		   assertTrue(true);
	   }
	   else
	   {
		   assertTrue(false);
	   }	   
	}

	@When("^User click on Edit pencil$")
	public void user_click_on_Edit_pencil() throws Throwable 
	{
	    sleepWait(1000);
	    clickOn("ing_Edit_Re", "");
	    sleepWait(1000);	   
	}

	@When("^User click on Update button and see mess \"([^\"]*)\"$")
	public void user_click_on_Update_button_and_see_mess(String mess) throws Throwable 
	{
	    sleepWait(1000);
	    clickOn("btn_Update_Re", "");
	    sleepWait(1000);
	    if(wd.findElement(By.xpath(obj.getProperty("txt_Validate_NITVA_Re"))).isDisplayed())
	    {
	    	assertTrue(true);	    	
	    	clickOn("btn_Cancel_Re", "");
	    }
	    else
	    {
	    	assertTrue(false);
	    }	   
	}

	@When("^User click on Cancel button and pop up gets closed$")
	public void user_click_on_Cancel_button_and_pop_up_gets_closed() throws Throwable
	{
		sleepWait(1000);		
		if(wd.findElement(By.xpath(obj.getProperty("btn_Cancel_Re"))).isEnabled())
		{
			sleepWait(1000);
			assertTrue(true);
			clickOn("btn_Cancel_Re", "");
		}
		else
		{
			assertTrue(false);
		}	   
	}

	@And("^User type \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_type_and(String DOC, String Nitva) throws Throwable
	{
		sleepWait(1000);
	    type("txt_DocNo_Re", DOC);	
	    sleepWait(1000);
	    type("txt_Nitva_Re", Nitva);
	    sleepWait(1000);
	   
	}

	@When("^User enter Doc No and enter invalid Nitva no \"([^\"]*)\" in popup and click on Update button$")
	public void user_enter_Doc_No_and_enter_invalid_Nitva_no_in_popup_and_click_on_Update_button(String invalid) throws Throwable 
	{
	    sleepWait(1000);
	    type("txt_DocNo_Re", Document_No);	 
	    sleepWait(1000);
	    type("txt_Nitva_Re", invalid);
	    sleepWait(1000); 
	    clickOn("btn_Update_Re", "");
		
	}

	@When("^User see the pop up message \"([^\"]*)\"$")
	public void user_see_the_pop_up_message(String mess) throws Throwable 
	{
	    sleepWait(1000);
	    assertEquals(validationMessage(), mess);		   
	}

	@When("^User enter Invalid Doc No \"([^\"]*)\" and valid NITVA no in popup and click on Update button$")
	public void user_enter_Invalid_Doc_No_and_valid_NITVA_no_in_popup_and_click_on_Update_button(String InvalidDoc) throws Throwable 
	{
	    sleepWait(1000);
	    type("txt_DocNo_Re", InvalidDoc);
	    sleepWait(1000);
	    type("txt_Nitva_Re", NITVA);	   
	    sleepWait(1000);
	    clickOn("btn_Update_Re", "");
	}

	@When("^User Enter Valid Doc No and Valid Nitva no and click on Update button$")
	public void user_Enter_Valid_Doc_No_and_Valid_Nitva_no_and_click_on_Update_button() throws Throwable 
	{
		sleepWait(1000);
		type("txt_DocNo_Re", Document_No);		
		sleepWait(1000);
		type("txt_Nitva_Re", NITVA);		
		sleepWait(1000);
		clickOn("btn_Update_Re","");	   
	}

	@When("^User see Reprocess button is disable$")
	public void user_see_Reprocess_button_is_disable() throws Throwable 
	{
	    sleepWait(3000);
	    if(!wd.findElement(By.xpath(obj.getProperty("btn_Reprocess_Re"))).isEnabled())	    
	    {
	    	assertTrue(true);
	    }
	    else
	    {
	    	assertTrue(false);
	    }	  
	}

	@When("^User again click on Check box$")
	public void user_again_click_on_Check_box() throws Throwable 
	{
		sleepWait(1000);
		clickOn("chBox_Un_Re", "");
		sleepWait(1000);
	}

	@Then("^User see Reprocess button is enabled$")
	public void user_see_Reprocess_button_is_enabled() throws Throwable
	{
		sleepWait(1000);
		if(wd.findElement(By.xpath(obj.getProperty("btn_Reprocess_Re"))).isEnabled())	    
	    {
	    	assertTrue(true);
	    }
	    else
	    {
	    	assertTrue(false);
	    }	  	   
	}

	@And("^User click on Reprocess button and see Processed Successfully and click on Ok button$")
	public void user_click_on_Reprocess_button_and_see_Processed_Successfully_and_click_on_Ok_button() throws Throwable 
	{		
			sleepWait(1000);						 
			String TR = elementText("txt_Transaction_Re_u");
			Transaction_Unreconciled = TR;		
			sleepWait(1000);
		   clickOn("btn_Reprocess_Re", "");
		    sleepWait(3000);
		    waitFor("btn_OK_Re");
		    sleepWait(1000); 
		    waitFor("btn_OK_Re");
		    sleepWait(1000);
		    if(wd.findElement(By.xpath(obj.getProperty("txt_Process_Succ_Mess_Re"))).isDisplayed())
		    {
		    	assertTrue(true);	    	
		    	clickOn("btn_OK_Re", "");
		    	sleepWait(1000);
		    }
		    else
		    {
		    	assertTrue(false);
		    }		
	}


	@And("^User click on Filter by \"([^\"]*)\" and type data and click on search button and verify the Status is Processed$")
	public void user_click_on_Filter_by_and_type_data_and_click_on_search_button_and_verify_the_Status_is_Processed(String drp) throws Throwable 
	{
		sleepWait(1000);
		clickOn("drp_FilterBy_Recon", "");
		sleepWait(1000);
		clickOn(drp, "");
		sleepWait(1000);
		type("textboxsearch",Transaction_Unreconciled);	    	    
		clickOn("txt_search_Button_Re", "");	
		sleepWait(1000);
		if(wd.findElement(By.xpath(obj.getProperty("txt_Processed_check"))).isDisplayed())
		{
			assertTrue(true);
		}
		else
		{
			assertTrue(false);
		}
	}

	@When("^User see Reason is \"([^\"]*)\"$")
	public void user_see_Reason_is(String overpayment) throws Throwable 
	{
	    sleepWait(1000);
	    if(wd.findElement(By.xpath("//*[contains(text(),'" +overpayment + "')]")).isDisplayed())
	    {
	    	assertTrue(true);
	    }
	    else
	    {
	    	assertTrue(false);
	    }	    
	}

	@And("^User see Status is \"([^\"]*)\"$")
	public void user_see_Status_is(String war) throws Throwable 
	{
		 sleepWait(1000);
		 if(wd.findElement(By.xpath("//*[contains(text(),'" +war + "')]")).isDisplayed())
		 {
		   	assertTrue(true);
		 }
		 else
		 {
		  	assertTrue(false);
		  }	    
	}
	
	

	@And("^User click on Filter Transaction No and type overpayment Transactrion no and click on search button$")
	public void user_click_on_Filter_Transaction_No_and_type_overpayment_Transactrion_no_and_click_on_search_button() throws Throwable 
	{
		sleepWait(1000);
		clickOn("drp_FilterBy_Recon", "");
		sleepWait(1000);		   
		clickOn("drp_FilterBy_Tran", "");
		sleepWait(1000);
		type("textboxsearch",OverpaymentTran_No);
		sleepWait(1000);
		clickOn("txt_search_Button_Re", "");
		sleepWait(1000);
		
	}
	
	@When("^User get the user get Transaction number$")
	public void user_get_the_user_get_Transaction_number() throws Throwable 
	{
	    sleepWait(1000);
	    String OverPay_TranNo = elementText("txt_Transaction_Re_u");
	    TranNo = OverPay_TranNo;	   
	}

	
	@Then("^User click on Filter by \"([^\"]*)\" and type data and click on search button and verify the Status is Processed for Overpayment$")
	public void user_click_on_Filter_by_and_type_data_and_click_on_search_button_and_verify_the_Status_is_Processed_for_Overpayment(String tran) throws Throwable 
	{
		sleepWait(1000);
		clickOn("drp_FilterBy_Recon", "");
		sleepWait(1000);
		clickOn(tran, "");
		sleepWait(1000);
		type("textboxsearch",TranNo);	    
		sleepWait(1000);
		clickOn("txt_search_Button_Re", "");
		sleepWait(1000);		
		if(wd.findElement(By.xpath(obj.getProperty("txt_Processed_check"))).isDisplayed())
		{
			assertTrue(true);
		}
		else
		{
			assertTrue(false);
		}		
	}
	
	@Then("^User see mess \"([^\"]*)\" for UnReconciliation$")
	public void user_see_mess_for_UnReconciliation(String mess) throws Throwable 
	{
		sleepWait(1000);
		assertEquals(validationMessage(), mess);
	}
	

	@And("^User see Today Date is displayed$")
	public void user_see_Today_Date_is_displayed() throws Throwable 
	{
		sleepWait(1000);
		String DA = getValue("txt_Date_Re");		
		Calendar cal = Calendar.getInstance();
	    cal.add(Calendar.DATE,0);
	    Date date = cal.getTime();             
	    SimpleDateFormat format1 = new SimpleDateFormat("dd MMM, YYYY");	    
	    String date1 = format1.format(date);
	    System.out.println(date1);	    
	    assertEquals(DA, date1);
	}

	
	
	@Then("^User click on Date and see today day is selected$")
	public void user_click_on_Date_and_see_today_day_is_selected() throws Throwable 
	{
		sleepWait(1000);
		clickOn("txt_Date_Re", "");
		sleepWait(1000);		
		if(wd.findElement(By.xpath(obj.getProperty("txt_T_Date"))).isEnabled())
		{
			assertTrue(true);
		}
		else
		{
			assertTrue(false);
		}	
	}

	@When("^User see future date is disable$")
	public void user_see_future_date_is_disable() throws Throwable
	{
		sleepWait(1000);
		if(!wd.findElement(By.xpath(obj.getProperty("tst_F_Date"))).isSelected())
		{
			assertTrue(true);
		}
		else
		{
			assertTrue(false);
		}	
	}

	@Then("^User see previous date is enable and select the date$")
	public void user_see_previous_date_is_enable_and_select_the_date() throws Throwable 
	{
		if(wd.findElement(By.xpath(obj.getProperty("txt_P_Date"))).isEnabled())
		{
			assertTrue(true);
			clickOn("txt_P_Date", "");
		}
		else
		{
			assertTrue(false);
		}				 
		String DA_Check = getValue("txt_Date_Re");		
	    Calendar cal = Calendar.getInstance();
	    cal.add(Calendar.DATE,0-1);
	    Date date = cal.getTime();             
	    SimpleDateFormat format1 = new SimpleDateFormat("dd MMM, YYYY");
	    String date1 = format1.format(date);	    	    	    
	    System.out.println(date1);	    
	    assertEquals(DA_Check, date1);	    
	}

	
	@And("^User click on check box and see reprocess button is enabled$")
	public void user_click_on_check_box_and_see_reprocess_button_is_enabled() throws Throwable 
	{
		sleepWait(1000);
		clickOn("chBox_Un_Re", "");
		sleepWait(1000);
		if(wd.findElement(By.xpath(obj.getProperty("btn_Reprocess_Re"))).isEnabled())
		{			
			assertTrue(true);
		}
		else
		{
			assertTrue(false);
		}
	}

	@Then("^User deselect checkbox then see reprocess is disabled$")
	public void user_deselect_checkbox_then_see_reprocess_is_disabled() throws Throwable 
	{
	    sleepWait(1000);
	    clickOn("chBox_Un_Re", "");
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

	@And("^User click on check box and click on Reconciled Tile and again click on Unreconcilied Tile$")
	public void user_click_on_check_box_and_click_on_Reconciled_Tile_and_again_click_on_Unreconcilied_Tile() throws Throwable 
	{
	    sleepWait(1000);
	    clickOn("chBox_Un_Re", "");
	    sleepWait(1000);	    
	    clickOn("txt_Click_Reconciled", "");
	    sleepWait(1000);
	    clickOn("txt_Click_Unreconciled", "");
	    sleepWait(1000);
	}

	@Then("^User see reprocess is disabled$")
	public void user_see_reprocess_is_disabled() throws Throwable 
	{
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

	
	
}
