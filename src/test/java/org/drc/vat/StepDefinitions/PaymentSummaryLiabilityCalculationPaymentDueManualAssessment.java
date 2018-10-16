package org.drc.vat.StepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import static org.drc.vat.appmanager.HelperBase.clickOn;
import static org.drc.vat.appmanager.HelperBase.type;
import static org.testng.Assert.assertEquals;
import static org.drc.vat.appmanager.HelperBase.pageSource;
import static org.drc.vat.appmanager.HelperBase.buttonEnabled;
import static org.drc.vat.appmanager.HelperBase.validationMessage;
import org.openqa.selenium.By;

import static org.drc.vat.appmanager.HelperBase.elementText;
import static org.drc.vat.appmanager.HelperBase.wd;



public class PaymentSummaryLiabilityCalculationPaymentDueManualAssessment {
	//esum Edeclare sum 
	//asum Assessment Sum 
	//Edeclare ,Assess EDeclaration and assess column records fetch
	int esum=0,asum=0;
	int Edeclare,Assess,addL;

	@Given("^The user has done the filing for the particular month$")
	public void the_user_has_done_the_filing_for_the_particular_month() throws Throwable {
	       
	     Thread.sleep(10000);
	}

	@When("^the assessemnt officer does the assessment for that particular month with \"([^\"]*)\" Updation for period\"([^\"]*)\"year\"([^\"]*)\"nitva\"([^\"]*)\"$")
	public void the_assessemnt_officer_does_the_assessment_for_that_particular_month_with_Updation_for_period_year_nitva(String updation, String period, String year, String nitva) throws Throwable {
	    clickOn("nav_manualAssessment","") ;
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

	@Then("^the officer is on the Payment Summary page for Liabilty Calculation and Payment Due$")
	public void the_officer_is_on_the_Payment_Summary_page_for_Liabilty_Calculation_and_Payment_Due()  throws Throwable {
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

	@Then("^user clicks on Prev button and it should be on Assessement Summary Tab$")
	public void user_clicks_on_Prev_button_and_it_should_be_on_Assessement_Summary_Tab() throws Throwable {
		clickOn("btn_maPrevioustab","");
		Thread.sleep(2000);
	       
	     
	}

	@Then("^user click on Next button on Asssessmnet Summary Tab and it should be on Payment Summary tab$")
	public void user_click_on_Next_button_on_Asssessmnet_Summary_Tab_and_it_should_be_on_Payment_Summary_tab() throws Throwable {
		Thread.sleep(2000);
		clickOn("btn_maassessNext","");		
		Thread.sleep(3000);
		assertEquals(elementText("element_pymtsummary",""),"Liability Calculation");
		
	       
	     
	}

	@Then("^enter the penalty amount\"([^\"]*)\"$")
	public void enter_the_penalty_amount(String arg1) throws Throwable {
	     type("txt_Aliabiltypenalty",arg1);  
	     
	}

	@Then("^calculates the Additional Liability column\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"$")
	public void calculates_the_Additional_Liability_column(String arg1, String arg2, String arg3, String arg4, String arg5, String arg6, String arg7, String arg8, String arg9, String arg10) throws Throwable {
		String EremovedDot,EremovedComma,AremovedDot,AremovedComma;
     for(int i=0;i<=8;i++) {
	    	 String edeclararion=wd.findElement(By.xpath("//tr["+i+"]/td[2]")).getText();
	    	 String assessment=wd.findElement(By.xpath("//tr["+i+"]/td[3")).getText();
	    	 
	    	 System.out.println(edeclararion);
	    	 System.out.println(assessment);
	    	 
    	 if(edeclararion.contains(".")||edeclararion.contains(".")||assessment.contains(",")||assessment.contains(",")) {
	    		  EremovedDot=edeclararion.replace(".", "");
	    		  EremovedComma=EremovedDot.replace(",", ".");
	    		  AremovedDot=assessment.replace(".", "");
	    		  AremovedComma=AremovedDot.replace(",", ".");
	    		 
	    		 
	    	 }else {
	    		 EremovedComma=edeclararion;
	    				 AremovedComma=assessment;
	    		 
	    		 
	    	 }
	    	 Edeclare=Integer.parseInt(edeclararion);
	    	 System.out.println(Edeclare);
	    	 Assess=Integer.parseInt(assessment);
	    	 System.out.println(Assess);
	    	 esum = esum+Edeclare;
System.out.println(esum);
	    	 asum=asum+Assess; 
	    	 System.out.println(asum);
	    	 //Additional Liability Calculation
	    	 String addlL=wd.findElement(By.xpath("//tr["+i+"]/td[4")).getText();
	    	 addL=Assess-Edeclare;
	    	 
	    	 elementText(Integer.toString(addL),addlL);
	    	 
	    	 
	    
	       }
	       String edeclararionpenalty=wd.findElement(By.xpath("//tr[9]/td[2]")).getText();
	    	 String assessmentpenalty=wd.findElement(By.xpath("//tr[9]/td[3")).getText();
	     
	}



	@Then("^Checks the amount to pay in Liability Calculation$")
	public void checks_the_amount_to_pay_in_Liability_Calculation() throws Throwable {
	       assertEquals(elementText("txt_Apymtdueint",""), elementText("txt_Aliabiltyint",""));
	       assertEquals(elementText("txt_Apymtdueltfee",""), elementText("txt_Aliabiltyltfee",""));	       
	       assertEquals(elementText("txt_Apymtduepenalty",""), elementText("txt_Aliabiltypenalty",""));
	       assertEquals(elementText("txt_Apymtdueamttopay",""), elementText("txt_Aliabiltyamttopay",""));
	       
	     
	}

	@Then("^Clicks on Save button on Payment Summary page and message is displayed\"([^\"]*)\"$")
	public void clicks_on_Save_button_on_Payment_Summary_page_and_message_is_displayed(String arg1) throws Throwable {
	       clickOn("btn_maSAve","");
	     Thread.sleep(2000);
	     assertEquals(validationMessage(),arg1);	}

	@Then("^click on Previous Button on Payment Summary page and user is on Manual Assessment Landing Screen$")
	public void click_on_Previous_Button_on_Payment_Summary_page_and_user_is_on_Manual_Assessment_Landing_Screen() throws Throwable {
	     clickOn("btn_maprev","");  
	     Thread.sleep(3000);
	     assertEquals( wd.findElement(By.xpath("h6")).getText(),"Period:");
	     
	}

	



	@Then("^Calculates the Additional Liability column$")
	public void calculates_the_Additional_Liability_column() throws Throwable {
		//net vat to be paid
		  assertEquals(elementText("txt_ALliabiltynetvatpaid",""), "0");
	       assertEquals(elementText("txt_ALliabiltycredit",""), "0");	       
	       assertEquals(elementText("txt_ALliabiltycreditrefundreq",""), "0");
	       assertEquals(elementText("txt_ALliabiltyvcreditfwd",""), "0");
		
			  assertEquals(elementText("txt_ALliabiltyvpublicprocu",""), "0");
		       assertEquals(elementText("txt_ALliabiltyTpartyac",""), "0");	       
		       assertEquals(elementText("txt_Aliabiltyint",""), elementText("txt_ALliabiltyint",""));
		       assertEquals(elementText("txt_Aliabiltyltfee",""), elementText("txt_ALliabiltyltfee",""));
		       assertEquals(elementText("txt_ALliabiltypenalty",""),wd.findElement(By.xpath("//tr[9]//div[contains(text(),'Penalty')]//following::input")).getAttribute("value"));
		       
		       assertEquals(elementText("txt_ALliabiltyamttopay",""), "0");

	}

	@Then("^Calculates the Net Payable column of Paymnent Due table$")
	public void calculates_the_Net_Payable_column_of_Paymnent_Due_table() throws Throwable {

		//assertEquals(elementText("txt_ApymtdueVatLiab", ""), elementText("txt_NPpymtdueVatLiab", ""));
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

@Then("^User click on download button message should be displayead as \"([^\"]*)\"$")
public void user_click_on_download_button_message_should_be_displayead_as(String arg1) throws Throwable {
clickOn("btn_efilingschedule","");
Thread.sleep(1000);
assertEquals(validationMessage(), arg1);
}
@Then("^user clicks on Raise notice button and Notice is generated as per the Liability Calculation Table and Payment Due Table$")
public void user_clicks_on_Raise_notice_button_and_Notice_is_generated_as_per_the_Liability_Calculation_Table_and_Payment_Due_Table() throws Throwable {
	
clickOn("btn_maRaiseNotice","");
Thread.sleep(2000);
wd.switchTo().window(wd.getWindowHandles().toArray()[1].toString());
Thread.sleep(5000);

}

@Then("^the next button on manual assessemnt page should be disabled$")
public void the_next_button_on_manual_assessemnt_page_should_be_disabled() throws Throwable {
assertEquals(buttonEnabled("btn_maassessNext",""), false,"Next button not Disabled");
}

@Then("^Total Additional Liability tile should be displayed as Total Assessed\\(FC\\) minus Total e-declaration\\(FC\\)\"([^\"]*)\"$")
public void total_Additional_Liability_tile_should_be_displayed_as_Total_Assessed_FC_minus_Total_e_declaration_FC(String arg1) throws Throwable {
	String TotaladdLiab=elementText("txt_totalAltile","");
	String Toatledeclared=elementText("txt_totalAltile","");
	String TotalAssessed=elementText("txt_totalAltile","");
assertEquals(Toatledeclared, arg1);
/*	String TALremovedDot,TALremovedComma,TDremovedDot,TDremovedComma,TAremovedDot,TAremovedComma;
	if(TotaladdLiab.contains(".")||Toatledeclared.contains(".")||TotalAssessed.contains(".")||TotaladdLiab.contains(",")||Toatledeclared.contains(",")||TotalAssessed.contains(",")) {
		  TALremovedDot=TotaladdLiab.replace(".", "");
		  TALremovedComma=TALremovedDot.replace(",", ".");
		  TDremovedDot=Toatledeclared.replace(".", "");
		  TDremovedComma=TDremovedDot.replace(",", ".");
		  TAremovedDot=TotalAssessed.replace(".", "");
		  TAremovedComma=TAremovedDot.replace(",", ".");		 
	}else {
		TAremovedComma=TotalAssessed;
		TDremovedComma=Toatledeclared;
		TALremovedComma=TotaladdLiab;
		}*/
	
	
	assertEquals(Toatledeclared, TotalAssessed,"Total Assessed and Total Ededeclared are not same");
	assertEquals(TotaladdLiab, "0");
	
	

}
String coverse(String text) {	

	return text.replace(".", "").replace(",", ".");
	
}





}
