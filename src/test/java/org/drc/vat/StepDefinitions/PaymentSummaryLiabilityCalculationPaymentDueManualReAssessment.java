package org.drc.vat.StepDefinitions;

import static org.drc.vat.appmanager.HelperBase.clickOn;
import static org.drc.vat.appmanager.HelperBase.elementText;
import static org.drc.vat.appmanager.HelperBase.type;
import static org.drc.vat.appmanager.HelperBase.validationMessage;
import static org.testng.Assert.assertEquals;

import org.openqa.selenium.By;

import static org.drc.vat.appmanager.HelperBase.wd;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class PaymentSummaryLiabilityCalculationPaymentDueManualReAssessment {
	@When("^the assessemnt officer does the Reassessment for that particular month with \"([^\"]*)\" Updation for period\"([^\"]*)\"year\"([^\"]*)\"nitva\"([^\"]*)\"$")
	public void the_assessemnt_officer_does_the_Reassessment_for_that_particular_month_with_Updation_for_period_year_nitva(String arg1, String period, String year, String nitva) throws Throwable {
	    clickOn("nav_manualAssessment","") ;
	    Thread.sleep(2000);
	    clickOn("nav_AssessedList","");
	    Thread.sleep(2000);
		clickOn("drp_manualAssessmnetPeriod","");  
	     clickOn("span","[contains(text(),'"+period+"')]");
	     Thread.sleep(2000);
	     clickOn("drp_mafilterby","");
	     clickOn("span","[contains(text(),'NITVA')]");
	     type("input_masearch",nitva);
	     Thread.sleep(2000);
	     clickOn("btn_search","");
	     clickOn("AssesManage","");
	     Thread.sleep(2000);
	     clickOn("href_maassess","");
	      
	}

	@Then("^the officer is on the Payment Summary page for Liabilty Calculation and Payment Due for ReAssessment for period\"([^\"]*)\"year\"([^\"]*)\"nitva\"([^\"]*)\"$")
	public void the_officer_is_on_the_Payment_Summary_page_for_Liabilty_Calculation_and_Payment_Due_for_ReAssessment_for_period_year_nitva(String arg1, String arg2, String arg3) throws Throwable {
		Thread.sleep(2000);   
		assertEquals(elementText("element_nontxable",""),"8. Non-taxable transactions" );
		clickOn("btn_maassessNext","");
		assertEquals(elementText("element_amtvatdeductible",""),"16. Amount of VAT Deductible" );
		clickOn("btn_maassessNext","");		
		assertEquals(elementText("element_recoveryofdeduc",""),"18. Supplementary deductions");
		clickOn("btn_maassessNext","");		
		Thread.sleep(2000);
		clickOn("btn_maassessNext","");		
	      
	}

	@Then("^User click download button on Payment Summary page from ReAssessment message should be displayed as \"([^\"]*)\"$")
	public void user_click_download_button_on_Payment_Summary_page_from_ReAssessment_message_should_be_displayed_as(String arg1) throws Throwable {
		clickOn("btn_efilingschedule","");
		Thread.sleep(1000);
		assertEquals(validationMessage(), arg1);
	      
	}

	@Then("^user click Raise Notice button on Payment Summary page from ReAssessment module and Notice is generated as per the Liability Calculation Table and Payment Due Table$")
	public void user_click_Raise_Notice_button_on_Payment_Summary_page_from_ReAssessment_module_and_Notice_is_generated_as_per_the_Liability_Calculation_Table_and_Payment_Due_Table() throws Throwable {
		clickOn("btn_maRaiseNotice","");
		Thread.sleep(2000);
		wd.switchTo().window(wd.getWindowHandles().toArray()[1].toString());
		Thread.sleep(5000);
	      
	}


	@Then("^Enter the penalty amount\"([^\"]*)\" in ReAssessment Liability$")
	public void enter_the_penalty_amount_in_ReAssessment_Liability(String arg1) throws Throwable {
		   type("txt_Aliabiltypenalty",arg1);  
	      
	}

	@Then("^Click on Save button on Payment Summary page and message is displayed\"([^\"]*)\"$")
	public void click_on_Save_button_on_Payment_Summary_page_and_message_is_displayed(String arg1) throws Throwable {
		  clickOn("btn_maSAve","");
		     Thread.sleep(2000);
		     assertEquals(validationMessage(),arg1);	
	      
	}

	@Then("^click on Previous Button on Payment Summary page and user is on Manual ReAssessment Landing Screen$")
	public void click_on_Previous_Button_on_Payment_Summary_page_and_user_is_on_Manual_ReAssessment_Landing_Screen() throws Throwable {
		clickOn("btn_maprev","");  
		assertEquals( wd.findElement(By.xpath("h6")).getText(),"Period:");
	}
	@Then("^Total Additional Liability tile should be displayed on ReAssessment as Total Assessed\\(FC\\) minus Total ReAssessed\\(FC\\)\"([^\"]*)\"$")
	public void total_Additional_Liability_tile_should_be_displayed_on_ReAssessment_as_Total_Assessed_FC_minus_Total_ReAssessed_FC(String edeclaredAmt)throws Throwable {
		assertEquals(elementText("txt_totalEtile",""), edeclaredAmt);
		assertEquals(elementText("txt_totalAltile",""), elementText("txt_totalReAltile",""));		
		assertEquals(elementText("txt_totalAltile",""), "0");
	      
	}

	@Then("^Calculates the Additional Liability column for ReAssessment$")
	public void calculates_the_Additional_Liability_column_for_ReAssessment() throws Throwable {
	   
	      
	}

	@Then("^Calculates the Net Payable column of Paymnent Due table for ReAssessment$")
	public void calculates_the_Net_Payable_column_of_Paymnent_Due_table_for_ReAssessment() throws Throwable {
		assertEquals(elementText("txt_Apymtdueint", ""), elementText("txt_ALliabiltyint", ""));
		assertEquals(elementText("txt_Apymtdueltfee", ""), elementText("txt_ALliabiltyltfee", ""));
		assertEquals(elementText("txt_Apymtduepenalty", ""), elementText("txt_ALliabiltypenalty", ""));
		assertEquals(elementText("txt_Apymtdueamttopay", ""), elementText("txt_ALliabiltyamttopay", ""));
		
		assertEquals(elementText("txt_ApymtdueVatLiab", ""), elementText("txt_NPpymtdueVatLiab", ""));
		assertEquals(elementText("txt_Apymtdueint", ""), elementText("txt_NPpymtdueint", ""));
		assertEquals(elementText("txt_Apymtdueltfee", ""), elementText("txt_NPpymtdueltfee", ""));
		assertEquals(elementText("txt_Apymtduepenalty", ""), elementText("txt_NPpymtduepenalty", ""));
		assertEquals(elementText("txt_Apymtdueamttopay", ""), elementText("txt_NPpymtdueamttopay", ""));
	      
	}

	@Then("^user clicks on Prev button and it should be on ReAssessement Summary Tab$")
	public void user_clicks_on_Prev_button_and_it_should_be_on_ReAssessement_Summary_Tab() throws Throwable {
		clickOn("btn_maPrevioustab","");
		Thread.sleep(2000);
	      
	}

	@Then("^user click on Next button on ReAsssessmnet Summary Tab and it should be on Payment Summary tab$")
	public void user_click_on_Next_button_on_ReAsssessmnet_Summary_Tab_and_it_should_be_on_Payment_Summary_tab() throws Throwable {
		Thread.sleep(2000);
		clickOn("btn_maassessNext","");		
		Thread.sleep(3000);
		assertEquals(elementText("element_pymtsummary",""),"Liability Calculation");
	      
	}
	



}
