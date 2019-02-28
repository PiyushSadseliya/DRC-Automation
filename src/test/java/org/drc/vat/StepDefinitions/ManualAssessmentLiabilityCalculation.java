package org.drc.vat.StepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import static org.drc.vat.appmanager.HelperBase.clickOn;
import static org.drc.vat.appmanager.HelperBase.checkElement;
import static org.drc.vat.appmanager.HelperBase.type;
import static org.drc.vat.appmanager.HelperBase.internalPortal;
import static org.drc.vat.appmanager.HelperBase.user_Enter_Valid;
import org.testng.Assert;

import static org.drc.vat.appmanager.HelperBase.elementText;
import static org.drc.vat.appmanager.HelperBase.getvalue;
import static org.drc.vat.appmanager.HelperBase.pageSource;
import static org.drc.vat.appmanager.HelperBase.isElementPresent;
import static org.drc.vat.appmanager.HelperBase.logout;
import static org.drc.vat.appmanager.HelperBase.sleepWait;

import static org.drc.vat.appmanager.HelperBase.assertMsg;

public class ManualAssessmentLiabilityCalculation {
	int count=1;
	@Given("^The tax payer has done E-Filing for the particular month\"([^\"]*)\"\"([^\"]*)\"$")
	public void the_tax_payer_has_done_E_Filing_for_the_particular_month(String arg1, String arg2) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	  System.out.println("done");
	}


	@When("^The taxofficer has logged in internal portal$")
	public void the_taxofficer_has_logged_in_internal_portal() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		if(count==1) {
		 internalPortal();
		//user_Enter_Valid("laxman.prajapati", "admin");
		//count++;
		}
	}

	@When("^the officer is on liability calculation for the particular period\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"$")
	public void the_officer_is_on_liability_calculation_for_the_particular_period(String month, String year, String Nitvano) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		sleepWait(3500);
		clickOn("navlink_assessment_href","");		
		/*clickOn("navlink_manualAssessment_href","");*/
		sleepWait(4000);
		if(!checkElement("manualAssessmentPage_verify")) {
			assertMsg("Not on Manual Assessment Landing Screen");
		}sleepWait(2500);
		clickOn("AssementPeriod","");
		sleepWait(2500);
		clickOn("span","[text()='"+month+"']");
		sleepWait(2500);
		clickOn("AssementYear","");
		sleepWait(2500);
		clickOn("AssessmentSelectyear","//span[text()='2018']");
		//nitva number 
		sleepWait(2500);
		type("txtbox_search",Nitvano);
		sleepWait(2500);
		clickOn("AssementSearchClick","");
		sleepWait(2500);
		clickOn("AssestManage","");
		sleepWait(2500);
	clickOn("AssestManageAssess","");
		if(!checkElement("manualAssessmentPage_verify")) {
			assertMsg("Not on Manual Assessment Landing Screen");			
		}
		sleepWait(2500);
		clickOn("btn_assess_next","");
		if(!checkElement("txt_page_liabilitycalculation")) {
			assertMsg("Not on Liablity Calculation Landing Screen");			
		}
	}

	@When("^the e-declartion data must be same as efiling with\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"$")
	public void the_e_declartion_data_must_be_same_as_efiling_with(String declaredVatonSales, String declaredVatonPurchase, String declaredutilisedCredit, String declaredLate, String declaredInterest, String declaredPenalty, String declaredTotal) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Assert.assertEquals(elementText("txtbx_declaredVatonSales",""),declaredVatonSales);
		Assert.assertEquals(elementText("txtbx_declaredVatonPurchase",""),declaredVatonPurchase);
		Assert.assertEquals(elementText("txtbx_declaredutilisedCredit",""),declaredutilisedCredit);
		Assert.assertEquals(elementText("txtbx_declaredLate",""),declaredLate);
		Assert.assertEquals(elementText("txtbx_declaredInterest",""),declaredInterest);
		Assert.assertEquals(elementText("txtbx_declaredPenalty",""),declaredPenalty);
		Assert.assertEquals(elementText("txtbx_declaredTotal",""),declaredTotal);
	      
	}

	@When("^The Assessed data must be same as from EFD\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"$")
	public void the_Assessed_data_must_be_same_as_from_EFD(String assessedVatonSales, String assessedVatonPurchase, String assessedutilisedCredit, String assessedLate, String assessedInterest, String assessedPenalty, String assessedTotal) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		type("txtbx_assesssedVatonSales",assessedVatonSales);
		type("txtbx_assesssedVatonPurchase",assessedVatonPurchase);		
		type("txtbx_assesssedPenalty",assessedPenalty);
		
		
		
		Assert.assertEquals(getvalue("txtbx_assesssedVatonSales",""), assessedVatonSales);
		Assert.assertEquals(getvalue("txtbx_assesssedVatonPurchase",""), assessedVatonPurchase);
		Assert.assertEquals(getvalue("txtbx_assesssedutilisedCredit",""), assessedutilisedCredit);
		Assert.assertEquals(getvalue("txtbx_assesssedLate",""), assessedLate);
		Assert.assertEquals(getvalue("txtbx_assesssedInterest",""), assessedInterest);
		Assert.assertEquals(getvalue("txtbx_assesssedPenalty",""), assessedPenalty);
		Assert.assertEquals(elementText("txtbx_assesssedTotal",""), assessedTotal);
	}

	@Then("^The Additional liability must be Assessed minus e-Declaration\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"$")
	public void the_Additional_liability_must_be_Assessed_minus_e_Declaration(String addliablityVatonSales, String addliablityVatonPurchase, String addliablityutilisedCredit, String addliablityLate, String addliablityInterest, String addliablityPenalty, String addliablityTotal) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Assert.assertEquals(elementText("txtbx_addliablityVatonSales",""),addliablityVatonSales);
		Assert.assertEquals(elementText("txtbx_addliablityVatonPurchase",""),addliablityVatonPurchase);
		Assert.assertEquals(elementText("txtbx_addliablityutilisedCredit",""),addliablityutilisedCredit);
		Assert.assertEquals(elementText("txtbx_addliablityLate",""),addliablityLate);

		Assert.assertEquals(elementText("txtbx_addliablityInterest",""),addliablityInterest);
		Assert.assertEquals(elementText("txtbx_addliablityPenalty",""),addliablityPenalty);
		Assert.assertEquals(elementText("txtbx_addliablityTotal",""),addliablityTotal);
		
	}



	



	@Then("^Late fee \"([^\"]*)\"should be applied$")
	public void late_fee_should_be_applied(String latefee) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Assert.assertEquals(getvalue("txtbx_assesssedLate",""),latefee);
	}







	@Then("^the penalty amount should be by default (\\d+)$")
	public void the_penalty_amount_should_be_by_default(int arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Assert.assertEquals(Integer.parseInt(getvalue("txtbx_assesssedPenalty","")),arg1);
	}

	@Then("^Adds the penalty amount for wrong E-Filing\"([^\"]*)\"$")
	public void adds_the_penalty_amount_for_wrong_E_Filing(String penalty) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		type("txtbx_assesssedPenalty",penalty);
	}





	@Then("^Additional Liability should be calculated by VAT on Sales-VAT on Purchase-Utilised Credit\\+Late Fees\\+Interest\\+Penalty Amount\\.\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"$")
	public void additional_Liability_should_be_calculated_by_VAT_on_Sales_VAT_on_Purchase_Utilised_Credit_Late_Fees_Interest_Penalty_Amount(String addliablityVatonSales, String addliablityVatonPurchase, String addliablityutilisedCredit, String addliablityLate, String addliablityInterest, String addliablityPenalty, String addliablityTotal) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		
		Assert.assertEquals(elementText("txtbx_addliablityVatonSales",""),addliablityVatonSales);
		Assert.assertEquals(elementText("txtbx_addliablityVatonPurchase",""),addliablityVatonPurchase);
		Assert.assertEquals(elementText("txtbx_addliablityutilisedCredit",""),addliablityutilisedCredit);
		Assert.assertEquals(	elementText("txtbx_addliablityLate",""),addliablityLate);
		Assert.assertEquals(elementText("txtbx_addliablityInterest",""),addliablityInterest);
		Assert.assertEquals(elementText("txtbx_addliablityPenalty",""),addliablityPenalty);
		Assert.assertEquals(elementText("txtbx_addliablityTotal",""),addliablityTotal);
	
	      
	}

	@Then("^click on \"([^\"]*)\" button$")
	public void click_on_button(String btn) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	if(btn.equalsIgnoreCase("previous")) {
			clickOn("btn_prev","");
		}
		if(btn.equalsIgnoreCase("Next")) {
			clickOn("btn_next","");
		}
	      
	}

	@Then("^tax officer must be navigated to Assessment Sales and Purchase Summary$")
	public void tax_officer_must_be_navigated_to_Assessment_Sales_and_Purchase_Summary() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		if(isElementPresent("//span[text()='Transaction Received']")){
			System.out.println("Assessment Sales and Purchase Summary");
		}
	}

	@Then("^tax officer must be navigated to liability Calculation page$")
	public void tax_officer_must_be_navigated_to_liability_Calculation_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		sleepWait(5000);
		Assert.assertEquals(elementText("txt_page_liabilitycalculation",""),"Liability Calculation");
	      
	}

	@Then("^tax officer must be navigated to Payment Due$")
	public void tax_officer_must_be_navigated_to_Payment_Due() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Assert.assertEquals(elementText("page_assessment_pymtdue",""),"Payment Due");
	}







	@Then("^tax office enter \"([^\"]*)\" \"([^\"]*)\"\"([^\"]*)\"$")
	public void tax_office_enter(String assessedVatonSales, String assessedVatonPurchase, String assessedPenalty) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		type("txtbx_assesssedVatonSales",assessedVatonSales);
		type("txtbx_assesssedVatonPurchase",assessedVatonPurchase);		
		type("txtbx_assesssedPenalty",assessedPenalty);
	}

	@Then("^Click on next button$")
	public void click_on_next_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		if(true) {
		clickOn("btn_next","");
		Assert.assertEquals(elementText("txt_page_liabilitycalculation",""),"Liability Calculation");
		
		}
		
	}

	@Then("^Validation Messages should be shown\"([^\"]*)\"$")
	public void validation_Messages_should_be_shown(String msg) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		if(!pageSource().contains("<span>"+msg+"</span>")) {
			System.out.println(msg+""+"Not Displayed");
			
		}
	}
	@Then("^Assessed Total should be calculated by VAT on Sales - VAT on Purchase - Utilised Credit \\+ Late fees \\+ Interest \\+ Penalty\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"$")
	public void assessed_Total_should_be_calculated_by_VAT_on_Sales_VAT_on_Purchase_Utilised_Credit_Late_fees_Interest_Penalty(String declaredVatonSales, String declaredVatonPurchase, String declaredutilisedCredit, String arg4, String arg5, String arg6, String arg7) throws Throwable {
	  
	    // Write code here that turns the phrase above into concrete actions
	  

	    
		/*declaredVatonSales=Integer.parseInt(elementText("txtbx_declaredVatonSales",""));
		declaredVatonPurchase=Integer.parseInt(elementText("txtbx_declaredVatonPurchase",""));
		declaredutilisedCredit=Integer.parseInt(elementText("txtbx_declaredutilisedCredit",""));		
		declaredTotal=declaredVatonSales-declaredVatonPurchase-declaredutilisedCredit;
		Assert.assertEquals(!elementText("txtbx_declaredTotal",""),Integer.toString(declaredTotal))) {
			System.out.println("E-declaration Total Wrongly calculated");
	}	
	}*/
	}
	@Then("^The Interest should be calculated from the Due Date To Payment Date or to the assessed date which ever is smaller\"([^\"]*)\"$")
	public void the_Interest_should_be_calculated_from_the_Due_Date_To_Payment_Date_or_to_the_assessed_date_which_ever_is_smaller(String assessedInterest) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Assert.assertEquals(getvalue("txtbx_assesssedInterest",""),assessedInterest);
	}



	@When("^Verifies the interest rate calculated\"([^\"]*)\"$")
	public void verifies_the_interest_rate_calculated(String assessedInterest) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Assert.assertEquals(getvalue("txtbx_assesssedInterest",""), assessedInterest);
	}
	@Then("^The e-Declaration total amount must be VAT on Sales-VAT in purchase -Utilised Credit\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"$")
	public void the_e_Declaration_total_amount_must_be_VAT_on_Sales_VAT_in_purchase_Utilised_Credit(String arg1, String arg2, String arg3, String arg4) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		int declaredVatonSales=Integer.parseInt(arg1);
		int declaredVatonPurchase=Integer.parseInt(arg2);
		int declaredutilisedCredit=Integer.parseInt(arg3);
		Assert.assertEquals(Integer.parseInt(arg4),Integer.parseInt(elementText("txtbx_declaredTotal","")));
		
		
		
	}



	@When("^The Assessed data must be same as from EFD\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"$")
	public void the_Assessed_data_must_be_same_as_from_EFD(String arg1, String arg2, String arg3, String arg4, String arg5, String arg6) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Assert.assertEquals(getvalue("txtbx_assesssedVatonSales",""), arg1);
		Assert.assertEquals(getvalue("txtbx_assesssedVatonPurchase",""), arg2);
		Assert.assertEquals(getvalue("txtbx_assesssedutilisedCredit",""), arg3);
		Assert.assertEquals(getvalue("txtbx_assesssedLate",""), arg4);
		Assert.assertEquals(getvalue("txtbx_assesssedInterest",""), arg5);
		Assert.assertEquals(getvalue("txtbx_assesssedPenalty",""), arg6);
	}

	@Then("^Amounts under e-Declaration Column should  pre populated from the e-Declaration done by user\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"$")
	public void amounts_under_e_Declaration_Column_should_pre_populated_from_the_e_Declaration_done_by_user(String declaredVatonSales, String declaredVatonPurchase, String declaredutilisedCredit, String declaredLate, String declaredInterest, String declaredPenalty, String declaredTotal) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Assert.assertEquals(elementText("txtbx_declaredVatonSales",""),declaredVatonSales);
		Assert.assertEquals(elementText("txtbx_declaredVatonPurchase",""),declaredVatonPurchase);
		Assert.assertEquals(elementText("txtbx_declaredutilisedCredit",""),declaredutilisedCredit);
		Assert.assertEquals(elementText("txtbx_declaredLate",""),declaredLate);
		Assert.assertEquals(elementText("txtbx_declaredInterest",""),declaredInterest);
		Assert.assertEquals(elementText("txtbx_declaredPenalty",""),declaredPenalty);
		Assert.assertEquals(elementText("txtbx_declaredTotal",""),declaredTotal);
	}

	@Then("^Assessed column in liability calculation should be prepoulated as per the EFD transactions received\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"$")
	public void assessed_column_in_liability_calculation_should_be_prepoulated_as_per_the_EFD_transactions_received(String assessedVatonSales, String assessedVatonPurchase, String assessedutilisedCredit, String assessedLate, String assessedInterest, String assessedPenalty) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Assert.assertEquals(getvalue("txtbx_assesssedVatonSales",""), assessedVatonSales);
		Assert.assertEquals(getvalue("txtbx_assesssedVatonPurchase",""), assessedVatonPurchase);
		Assert.assertEquals(getvalue("txtbx_assesssedutilisedCredit",""), assessedutilisedCredit);
		Assert.assertEquals(getvalue("txtbx_assesssedLate",""), assessedLate);
		Assert.assertEquals(getvalue("txtbx_assesssedInterest",""), assessedInterest);
		Assert.assertEquals(getvalue("txtbx_assesssedPenalty",""), assessedPenalty);

	}
}
