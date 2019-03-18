package org.drc.vat.StepDefinitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import static org.drc.vat.appmanager.HelperBase.*;
import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertTrue;

import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;
import org.openqa.selenium.By;
import org.testng.Assert;
public class DV_4316_Reconciliation extends xls_file
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
	
	@And("^User click on Reconciled$")
	public void user_click_on_Reconciled() throws Throwable 
	{
		sleepWait(1000);
		clickOn("txt_Click_Reconciled", "");
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

	@And("^User enter value on Type here \"([^\"]*)\" and click on search button$")
	public void user_enter_value_on_Type_here_and_click_on_search_button(String data) throws Throwable
	{
		sleepWait(1000);
	   type("textboxsearch", data);
	   sleepWait(1000);
	   clickOn("txt_search_Button_Re", "");
	   sleepWait(1000);
	  
	}

	@Then("^User verify the result \"([^\"]*)\"$")
	public void user_verify_the_result(String data) throws Throwable
	{
	   sleepWait(1000);
	   if(wd.findElement(By.xpath("//*[contains(text(),'" +data+ "')]")).isDisplayed())
	   {
		   assertTrue(true);
	   }
	  
	}

	@And("^User click on download button and verify on Reconciled$")
	public void user_click_on_download_button_and_verify_on_Reconciled() throws Throwable 
	{
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

	@And("^User click on Reconciled tab and see the status Processed$")
	public void user_click_on_Reconciled_tab_and_see_the_status_Processed() throws Throwable 
	{
		sleepWait(1000);
		clickOn("txt_Click_Reconciled", "");
		sleepWait(1000);
		if(wd.findElement(By.xpath(obj.getProperty("txt_Processed_check"))).isDisplayed())
		{
		   assertTrue(true);
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
		System.out.println();
		sleepWait(1000);
		assertEquals(check_Nitva, NITVA);
	}

	@Then("^User click on FilterBy TaxPayer and verify Tax Payer name$")
	public void user_click_on_FilterBy_TaxPayer_and_verify_Tax_Payer_name() throws Throwable 
	{
		sleepWait(1000);
		String check_Name = elementText("txt_TaxPayer_Re_r");
		System.out.println(check_Name);
		System.out.println();
		sleepWait(1000);
		assertEquals(check_Name,Tax_Payer );
	}

	
	
	/*@And("^User enter value on Type here and click on search button$")
	public void user_enter_value_on_Type_here_and_click_on_search_button() throws Throwable 
	{
		sleepWait(1000);
		type("textboxsearch", Document_No);
		clickOn("txt_search_Button_Re", "");
		sleepWait(1000);
	}*/
	
}
