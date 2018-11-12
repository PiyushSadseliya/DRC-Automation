package org.drc.vat.StepDefinitions;

import static org.drc.vat.appmanager.HelperBase.clickOn;
import static org.drc.vat.appmanager.HelperBase.sleepWait;
import static org.drc.vat.appmanager.HelperBase.elementText;
import static org.drc.vat.appmanager.HelperBase.getLatestFilefromDir;
import static org.drc.vat.appmanager.HelperBase.getvalue;
import static org.drc.vat.appmanager.HelperBase.type;
import static org.drc.vat.appmanager.HelperBase.validationMessage;
import static org.testng.Assert.assertEquals;

import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;
import org.openqa.selenium.By;

import static org.drc.vat.appmanager.HelperBase.wd;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class PaymentSummaryLiabilityCalculationPaymentDueManualReAssessment {
	String txpayer=null;
	String Rperiod=null;
	String Ryear=null;
	@When("^the assessemnt officer does the Reassessment for that particular month with \"([^\"]*)\" Updation for period\"([^\"]*)\"year\"([^\"]*)\"tpayer\"([^\"]*)\"$")
	public void the_assessemnt_officer_does_the_Reassessment_for_that_particular_month_with_Updation_for_period_year_tpayer(String arg1, String period, String year, String tpayer) throws Throwable {
	   
		clickOn("nav_manualAssessment","") ;
	    sleepWait(2000);
	    clickOn("nav_AssessedList","");
	   
	   Rperiod=period;
	   Ryear=year;
	    sleepWait(4000);
		clickOn("drp_manualAssessmnetPeriod","");  
	     clickOn("span","[contains(text(),'"+period+"')]");
	     sleepWait(2000);
	     clickOn("drp_mafilterby","");
	     clickOn("span","[contains(text(),'Tax Payer')]");
	     type("input_masearch",tpayer);
	     sleepWait(2000);
	     clickOn("btn_search","");
	     clickOn("AssesManage","");
	     sleepWait(2000);
	     clickOn("href_maRassess","");
	     txpayer=tpayer;
	      
	}

	@Then("^the officer is on the Payment Summary page for Liabilty Calculation and Payment Due for ReAssessment for period\"([^\"]*)\"year\"([^\"]*)\"tpayer\"([^\"]*)\"$")
	public void the_officer_is_on_the_Payment_Summary_page_for_Liabilty_Calculation_and_Payment_Due_for_ReAssessment_for_period_year_tpayer(String arg1, String arg2, String arg3) throws Throwable {
		sleepWait(2000);   
		assertEquals(elementText("h6",""),txpayer);
		assertEquals(elementText("element_nontxable",""),"8. Non-taxable transactions" );
		clickOn("btn_maassessNext","");
		sleepWait(2000);
		assertEquals(elementText("h6",""),txpayer);
		assertEquals(elementText("element_amtvatdeductible",""),"16. Amount of VAT Deductible" );
		clickOn("btn_maassessNext","");	
		sleepWait(2000);
		assertEquals(elementText("h6",""),txpayer);
		assertEquals(elementText("element_recoveryofdeduc",""),"18. Supplementary deductions");
		clickOn("btn_maassessNext","");		
		sleepWait(2000);
		assertEquals(elementText("h6",""),txpayer);
		sleepWait(2000);
		clickOn("btn_maassessNext","");	
		sleepWait(2000);
		assertEquals(elementText("h6",""),txpayer);
	      
	}

	@Then("^User click download button on Payment Summary page from ReAssessment message should be displayed as \"([^\"]*)\"$")
	public void user_click_download_button_on_Payment_Summary_page_from_ReAssessment_message_should_be_displayed_as(String arg1) throws Throwable {
		clickOn("btn_efilingschedule","");
		sleepWait(1000);
		assertEquals(validationMessage(), arg1);
		clickOn("btn_maprev","");  
	      
	}

	@Then("^user click Raise Notice button on Payment Summary page from ReAssessment module and Notice is generated as per the Liability Calculation Table and Payment Due Table$")
	public void user_click_Raise_Notice_button_on_Payment_Summary_page_from_ReAssessment_module_and_Notice_is_generated_as_per_the_Liability_Calculation_Table_and_Payment_Due_Table() throws Throwable {
		String per ="Period: "+Rperiod.substring(0, 3)+"-"+Ryear;
		System.out.println(per);
			String nitva="NITVA No:"+elementText("txt_Anitva","");
			System.out.println(nitva);
			String Lvat=elementText("txt_Lvat","");
			System.out.println(Lvat);
			
				String Lcred=elementText("txt_Lcredit","");
				System.out.println(Lcred);
					String Lref=elementText("txt_Lrefund","");		
					System.out.println(Lref);
					String Lcredfwd=elementText("txt_Lcreditfwd","");			System.out.println(Lcredfwd);
					String Lpubproc=elementText("txt_Lpublicproc","");System.out.println(Lpubproc);
					String Ltparty=elementText("txt_Ltpartyac","");		System.out.println(Ltparty);
					String Lint=elementText("txt_Lint","");System.out.println(Lint);
					String Lltfee=elementText("txt_Lltfee","");System.out.println(Lltfee);
					String Lpen=elementText("txt_ALliabiltypenalty","")+elementText("txt_Lpena","");System.out.println(Lpen);
					String Lamtpay=elementText("txt_Lamounttopay","");System.out.println(Lamtpay);
					String Pvat=elementText("txt_Pvat","");System.out.println(Pvat);
					String Pint=elementText("txt_Pint","");System.out.println(Pint);
					String Pltfee=elementText("txt_Pltfee","");System.out.println(Pltfee);
					String Ppen=elementText("txt_Ppena","");System.out.println(Ppen);
					String Pamt=elementText("txt_Pamounttopay","");System.out.println(Pamt);

		clickOn("btn_maRaiseNotice","");
		sleepWait(2000);
		PDDocument doc = PDDocument.load(getLatestFilefromDir());   
		PDFTextStripper pdfStripper = new PDFTextStripper();  
		String text = pdfStripper.getText(doc);  
		//Liability Calculation
		System.out.println(text);
		assertEquals(text.contains(per), true,"Period Mismatch");
		//assertEquals(text.contains(nitva), true,"Nitva Mismatch");
		
		assertEquals(text.contains(Lamtpay), true,"Liabilty Calculation Amount to pay");




	
	}


	@Then("^Enter the penalty amount\"([^\"]*)\" in ReAssessment Liability$")
	public void enter_the_penalty_amount_in_ReAssessment_Liability(String arg1) throws Throwable {		
		clickOn("btn_maassessNext","");		
		sleepWait(3000);
		 assertEquals(elementText("h6",""),txpayer);
		   type("txt_Aliabiltypenalty",arg1);  
	      
	}

	@Then("^Click on Save button on Payment Summary page and message is displayed\"([^\"]*)\"$")
	public void click_on_Save_button_on_Payment_Summary_page_and_message_is_displayed(String arg1) throws Throwable {
		  clickOn("btn_maSAve","");
		     sleepWait(2000);
		     assertEquals(validationMessage(),arg1);	
	      
	}

	@Then("^click on Previous Button on Payment Summary page and user is on Manual ReAssessment Landing Screen$")
	public void click_on_Previous_Button_on_Payment_Summary_page_and_user_is_on_Manual_ReAssessment_Landing_Screen() throws Throwable {
		sleepWait(2000);
		clickOn("btn_maprev","");  
		sleepWait(2000);
		assertEquals(elementText("h6",""),"Period :");
	}
	@Then("^Total Additional Liability tile should be displayed on ReAssessment as Total Assessed\\(FC\\) minus Total ReAssessed\\(FC\\)\"([^\"]*)\"$")
	public void total_Additional_Liability_tile_should_be_displayed_on_ReAssessment_as_Total_Assessed_FC_minus_Total_ReAssessed_FC(String edeclaredAmt)throws Throwable {
		System.out.println(elementText("txt_totalEtile","").substring(3));
		System.out.println(elementText("txt_totalEtile","").substring(3));
		System.out.println(elementText("txt_totalAtile","").substring(3));
		System.out.println(elementText("txt_Aliabiltyamttopay",""));
		System.out.println(elementText("txt_totalReAltile","").substring(3));	
		System.out.println(elementText("txt_ReAliabiltyamttopay",""));
		System.out.println(elementText("txt_totalAltile","").substring(3));
		System.out.println(elementText("txt_ReALliabiltyamttopay",""));
		
		assertEquals(elementText("txt_totalEtile","").substring(3), edeclaredAmt);		
		
		assertEquals(elementText("txt_totalAtile","").substring(3),elementText("txt_Aliabiltyamttopay","") );		
		assertEquals(elementText("txt_totalReAltile","").substring(3),elementText("txt_ReAliabiltyamttopay","") );
		assertEquals(elementText("txt_totalAltile","").substring(3),elementText("txt_ReALliabiltyamttopay","") );
		
	      
	}

	@Then("^Calculates the Additional Liability column for ReAssessment$")
	public void calculates_the_Additional_Liability_column_for_ReAssessment() throws Throwable {
		System.out.println(elementText("txt_ReALliabiltynetvatpaid",""));
		System.out.println(elementText("txt_ReALliabiltycredit",""));
		System.out.println(elementText("txt_ReALliabiltycreditrefundreq",""));
		System.out.println(elementText("txt_ReALliabiltyvcreditfwd",""));
		
		System.out.println(elementText("txt_ReALliabiltyvpublicprocu",""));
		System.out.println(elementText("txt_ReALliabiltyTpartyac",""));
		System.out.println(elementText("txt_ReALliabiltyint",""));
		System.out.println(elementText("txt_ReALliabiltyltfee",""));
		System.out.println(elementText("txt_ReALliabiltypenalty",""));
		
	
		
		assertEquals(elementText("txt_ReALliabiltynetvatpaid",""), "0,00");
		assertEquals(elementText("txt_ReALliabiltycredit",""), "0,00");
		assertEquals(elementText("txt_ReALliabiltycreditrefundreq",""), "0,00");
		assertEquals(elementText("txt_ReALliabiltyvcreditfwd",""), "0,00");		
		assertEquals(elementText("txt_ReALliabiltyvpublicprocu",""), "0,00");
		assertEquals(elementText("txt_ReALliabiltyTpartyac",""), "0,00");
		//assertEquals(elementText("txt_ReALliabiltyint",""), "0,00");

		assertEquals(elementText("txt_ReALliabiltyltfee",""), "0,00");		
		assertEquals(elementText("txt_ReALliabiltypenalty",""), "0,00");
	//	assertEquals(elementText("txt_ReAliabiltyamttopay",""), "0,00");
	
		
	      
	}

	@Then("^Calculates the Net Payable column of Paymnent Due table for ReAssessment$")
	public void calculates_the_Net_Payable_column_of_Paymnent_Due_table_for_ReAssessment() throws Throwable {
		System.out.println(elementText("txt_Apymtdueint",""));
		System.out.println(elementText("txt_ALliabiltyint",""));
		
		System.out.println(elementText("txt_Apymtdueltfee",""));
		System.out.println(elementText("txt_ALliabiltyltfee",""));
		
		System.out.println(elementText("txt_Apymtduepenalty",""));
		System.out.println(elementText("txt_ALliabiltypenalty",""));
		
		System.out.println(elementText("txt_Apymtdueamttopay",""));
		System.out.println(elementText("txt_ALliabiltyamttopay",""));
		
		System.out.println(elementText("txt_ApymtdueVatLiab",""));
		System.out.println(elementText("txt_NPpymtdueVatLiab",""));
		
		System.out.println(elementText("txt_Apymtdueint",""));
		System.out.println(elementText("txt_NPpymtdueint",""));
		
		System.out.println(elementText("txt_Apymtdueltfee",""));
		System.out.println(elementText("txt_NPpymtdueltfee",""));
		
		System.out.println(elementText("txt_Apymtduepenalty",""));
		System.out.println(elementText("txt_NPpymtduepenalty",""));
		
		System.out.println(elementText("txt_Apymtdueamttopay",""));
		System.out.println(elementText("txt_NPpymtdueamttopay",""));
		
		assertEquals(elementText("txt_Apymtdueint", ""), elementText("txt_ALliabiltyint", ""));
		assertEquals(elementText("txt_Apymtdueltfee", ""), elementText("txt_ALliabiltyltfee", ""));
		assertEquals(elementText("txt_Apymtduepenalty", ""), elementText("txt_RAliabiltypenalty", ""));
		assertEquals(elementText("txt_Apymtdueamttopay", ""), elementText("txt_ALliabiltyamttopay", ""));
		
		assertEquals(elementText("txt_ApymtdueVatLiab", ""), elementText("txt_NPpymtdueVatLiab", ""));
		assertEquals(elementText("txt_Apymtdueint", ""), elementText("txt_NPpymtdueint", ""));
		assertEquals(elementText("txt_Apymtdueltfee", ""), elementText("txt_NPpymtdueltfee", ""));
		assertEquals(elementText("txt_Apymtduepenalty", ""), elementText("txt_NPpymtduepenalty", ""));
		assertEquals(elementText("txt_Apymtdueamttopay", ""), elementText("txt_NPpymtdueamttopay", ""));
	      
	}

	@Then("^user clicks on Prev button and it should be on ReAssessement Summary Tab$")
	public void user_clicks_on_Prev_button_and_it_should_be_on_ReAssessement_Summary_Tab() throws Throwable {
		sleepWait(2000);
		clickOn("btn_maPrevioustab","");
		sleepWait(2000);
	      
	}

	@Then("^user click on Next button on ReAsssessmnet Summary Tab and it should be on Payment Summary tab$")
	public void user_click_on_Next_button_on_ReAsssessmnet_Summary_Tab_and_it_should_be_on_Payment_Summary_tab() throws Throwable {
		sleepWait(2000);
		clickOn("btn_maassessNext","");		
		sleepWait(3000);
		assertEquals(elementText("element_pymtsummary",""),"Liability Calculation");
	      
	}
	



}
