package org.drc.vat.StepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import static org.drc.vat.appmanager.HelperBase.getvalue;
import static org.drc.vat.appmanager.HelperBase.elementText;
import static org.drc.vat.appmanager.HelperBase.internalPortal;
import static org.drc.vat.appmanager.HelperBase.user_Enter_Valid;
import static org.drc.vat.appmanager.HelperBase.assertMsg;
import static org.drc.vat.appmanager.HelperBase.type;
import static org.drc.vat.appmanager.HelperBase.waitfor;
import static org.drc.vat.appmanager.HelperBase.sleepWait;

import org.testng.Assert;

import static org.drc.vat.appmanager.HelperBase.clickOn;
import static org.drc.vat.appmanager.HelperBase.isElementPresent;
public class ManualAssessmentPaymentDue {

	static int count=1;
@Given("^The taxofficer has logged in internal portal\"([^\"]*)\"|\"([^\"]*)\"$")
public void the_taxofficer_has_logged_in_internal_portal(String arg1, String arg2) throws Throwable {
    
	// Write code here that turns the phrase above into concrete actions
	if(count==1) {
	internalPortal();
	//user_Enter_Valid("laxman.prajapati","admin");
	count++;
	
	}
	
}

	@When("^the officer checks for the particular period\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"$")
	public void the_officer_checks_for_the_particular_period(String month, String year, String nitva) throws Throwable {
		
	    // Write code here that turns the phrase above into concrete actions
		sleepWait(5000);
	       clickOn("AssessmentTab","");
	       sleepWait(2000);
	       clickOn("AssementPeriod","");
	       sleepWait(2000);
	       clickOn("span","[text()='"+month+"']");
	       sleepWait(2000);
			clickOn("AssementYear","");
			sleepWait(1000);
			clickOn("AssessmentSelectyear","//span[text()='"+year+"']");
			sleepWait(2000);
			type("txtbox_search",nitva);
		
			clickOn("AssementSearchClick","");
			sleepWait(2000);
			clickOn("AssesManage","");
			sleepWait(2000);
			clickOn("txt_asess", "");
			

	}

	@When("^Clicks next button on EFD summary$")
	public void clicks_next_button_on_EFD_summary() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		sleepWait(2000);
		clickOn("btn_next","");
		sleepWait(2000);
		
		
		
	       
	}

	@Then("^Clicks on next button in liability Calcualtion and Observe the Assessed amount for vat liablity should be same as per liability calculation page$")
	public void clicks_on_next_button_in_liability_Calcualtion_and_Observe_the_Assessed_amount_for_vat_liablity_should_be_same_as_per_liability_calculation_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		sleepWait(2000);
		int vatsales=Integer.parseInt(getvalue("txtbx_assesssedVatonSales",""));
		int vatpurch=Integer.parseInt(getvalue("txtbx_assesssedVatonPurchase",""));
		clickOn("btn_next","");
		sleepWait(2000);
		System.out.println(elementText("txt_assessed_vatliability",""));
		sleepWait(2000);
		System.out.println(Integer.toString(vatsales-vatpurch));
		Assert.assertEquals(elementText("txt_assessed_vatliability",""),Integer.toString(vatsales-vatpurch)); 
		sleepWait(2000);
		
	}

	@Then("^Clicks on next button in liability Calcualtion and Observe the Assessed amount for utilised credit should be same as per liability calculation page$")
	public void clicks_on_next_button_in_liability_Calcualtion_and_Observe_the_Assessed_amount_for_utilised_credit_should_be_same_as_per_liability_calculation_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions		
		sleepWait(2000);
		String utilcredit=getvalue("txtbx_assesssedutilisedCredit","");
		clickOn("btn_next","");
		sleepWait(2000);
		System.out.println(utilcredit);
		System.out.println(elementText("txt_assessed_utilcredit",""));
		Assert.assertEquals(elementText("txt_assessed_utilcredit",""),utilcredit); 
	}

	@Then("^Clicks on next button in liability Calcualtion and Observe the Assessed amount for late fee should be same as per liability calculation page$")
	public void clicks_on_next_button_in_liability_Calcualtion_and_Observe_the_Assessed_amount_for_late_fee_should_be_same_as_per_liability_calculation_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		sleepWait(2000);
		String ltfee=getvalue("txtbx_assesssedLate","");
		sleepWait(2000);
		clickOn("btn_next","");
		sleepWait(2000);
		Assert.assertEquals(elementText("page_assessment_pymtdue",""),"Payment Due");
		sleepWait(2000);
		Assert.assertEquals(elementText("txt_assessed_ltfee",""),ltfee);
	}

	@Then("^Clicks on next button in liability Calcualtion and Observe the Assessed amount for interest should be same as per liability calculation page$")
	public void clicks_on_next_button_in_liability_Calcualtion_and_Observe_the_Assessed_amount_for_interest_should_be_same_as_per_liability_calculation_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		sleepWait(2000);
		String interst =getvalue("txtbx_assesssedInterest","");
		sleepWait(2000);
		clickOn("btn_next","");
		sleepWait(2000);
		Assert.assertEquals(elementText("page_assessment_pymtdue",""),"Payment Due");
		sleepWait(2000);
		Assert.assertEquals(elementText("txt_assessed_interest",""),interst);
		sleepWait(2000);
	}

	@Then("^Clicks on next button in liability Calcualtion and Observe the Assessed amount for penalty should be same as per liability calculation page for when assessed amount is greater than edeclared amount$")
	public void clicks_on_next_button_in_liability_Calcualtion_and_Observe_the_Assessed_amount_for_penalty_should_be_same_as_per_liability_calculation_page_for_when_assessed_amount_is_greater_than_edeclared_amount() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		String penalty=getvalue("txtbx_assesssedPenalty","");
		sleepWait(2000);
		clickOn("btn_next","");
		sleepWait(2000);
		
		Assert.assertEquals(elementText("page_assessment_pymtdue",""),"Payment Due");
		sleepWait(2000);
		Assert.assertEquals(elementText("txt_assessed_penalty",""),penalty);
		sleepWait(2000);
	}

	@Then("^Clicks on next button in liability Calcualtion and Observe the Assessed amount of Total  should be Vat liability- utillised credit\\+ late fees \\+ Interest \\+ Penalty$")
	public void clicks_on_next_button_in_liability_Calcualtion_and_Observe_the_Assessed_amount_of_Total_should_be_Vat_liability_utillised_credit_late_fees_Interest_Penalty() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		clickOn("btn_next","");  
		sleepWait(2000);
		if(!elementText("page_assessment_pymtdue","").equals("Payment Due")) {
			assertMsg("not on Pyament Due Page");
		}
		int vatLiability=Integer.parseInt(elementText("txt_assessed_vatliability",""));
		sleepWait(2000);
	      int utilcredit=Integer.parseInt(elementText("txt_assessed_utilcredit",""));
	      sleepWait(2000);
	      int latefee=Integer.parseInt(elementText("txt_assessed_ltfee",""));
	      sleepWait(2000);
	      int interest=Integer.parseInt(elementText("txt_assessed_interest",""));
	      sleepWait(2000);
	      int penalty=Integer.parseInt(elementText("txt_assessed_penalty",""));
	      sleepWait(2000);
	      Assert.assertEquals(elementText("txt_assessed_total",""),Integer.toString(vatLiability-utilcredit+latefee+interest+penalty));
	      sleepWait(2000);
	}

	@Then("^Clicks on next button in liability Calcualtion and Observe the paid amount of vat liability\"([^\"]*)\"$")
	public void clicks_on_next_button_in_liability_Calcualtion_and_Observe_the_paid_amount_of_vat_liability(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		clickOn("btn_next","");  
		sleepWait(2000);
		Assert.assertEquals(elementText("page_assessment_pymtdue",""),"Payment Due");
		sleepWait(2000);
		Assert.assertEquals(elementText("txt_paid_vatliability",""),arg1);
		sleepWait(2000);
	}

	@Then("^Clicks on next button in liability Calcualtion and Observe the paid amount of Utilised Credit\"([^\"]*)\"$")
	public void clicks_on_next_button_in_liability_Calcualtion_and_Observe_the_paid_amount_of_Utilised_Credit(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		clickOn("btn_next","");  
		sleepWait(2000);
		Assert.assertEquals(elementText("page_assessment_pymtdue",""),"Payment Due");
		sleepWait(2000);
		Assert.assertEquals(elementText("txt_paid_utilcredit",""),arg1);
		sleepWait(2000);
	}

	@Then("^Clicks on next button in liability Calcualtion and Observe the paid amount of late fee\"([^\"]*)\"$")
	public void clicks_on_next_button_in_liability_Calcualtion_and_Observe_the_paid_amount_of_late_fee(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		clickOn("btn_next","");  
		sleepWait(2000);
		Assert.assertEquals(elementText("page_assessment_pymtdue",""),"Payment Due");
		sleepWait(2000);
		Assert.assertEquals(elementText("txt_paid_ltfee",""),arg1);
		sleepWait(2000);
	}

	@Then("^Clicks on next button in liability Calcualtion and Observe the paid amount of interest\"([^\"]*)\"$")
	public void clicks_on_next_button_in_liability_Calcualtion_and_Observe_the_paid_amount_of_interest(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		sleepWait(2000);
		clickOn("btn_next","");  
		sleepWait(2000);
		Assert.assertEquals(elementText("page_assessment_pymtdue",""),"Payment Due");
		sleepWait(2000);
		Assert.assertEquals(elementText("txt_paid_interest",""),arg1);
	}

	@Then("^Clicks on next button in liability Calcualtion and Observe the paid amount of penalty\"([^\"]*)\"$")
	public void clicks_on_next_button_in_liability_Calcualtion_and_Observe_the_paid_amount_of_penalty(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		clickOn("btn_next","");  
		sleepWait(2000);
		Assert.assertEquals(elementText("page_assessment_pymtdue",""),"Payment Due");
		sleepWait(2000);
		Assert.assertEquals(elementText("txt_paid_penalty",""),arg1);
	}

	@Then("^Clicks on next button in liability Calcualtion and Observe the net payable amount of for Vat Liability,Utilised Credit,Late Fee,Interest,Penalty \"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"$")
	public void clicks_on_next_button_in_liability_Calcualtion_and_Observe_the_net_payable_amount_of_for_Vat_Liability_Utilised_Credit_Late_Fee_Interest_Penalty(String arg1, String arg2, String arg3, String arg4, String arg5) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		clickOn("btn_next","");  
		sleepWait(2000);
		Assert.assertEquals(elementText("page_assessment_pymtdue",""),"Payment Due");
		sleepWait(2000);
		Assert.assertEquals(elementText("txt_paid_penalty",""),arg1);

	}

	@Then("^Clicks on next button in liability Calcualtion and Observe the paid amount of total for total=Vat Liability-Utilised Credit\\+Late Fee\\+Interest\\+Penalty \"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"$")
	public void clicks_on_next_button_in_liability_Calcualtion_and_Observe_the_paid_amount_of_total_for_total_Vat_Liability_Utilised_Credit_Late_Fee_Interest_Penalty(String arg1, String arg2, String arg3, String arg4, String arg5) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		clickOn("btn_next","");  
		sleepWait(2000);
		Assert.assertEquals(elementText("page_assessment_pymtdue",""),"Payment Due");
		sleepWait(2000);
		int vatLiability=Integer.parseInt(elementText("txt_paid_vatliability",""));
		sleepWait(2000);
	      int utilcredit=Integer.parseInt(elementText("txt_paid_utilcredit",""));
	      sleepWait(2000);
	      int latefee=Integer.parseInt(elementText("txt_paid_ltfee",""));
	      sleepWait(2000);
	      int interest=Integer.parseInt(elementText("txt_paid_interest",""));
	      sleepWait(2000);
	      int penalty=Integer.parseInt(elementText("txt_paid_penalty",""));
	      sleepWait(2000);
	      Assert.assertEquals(elementText("txt_assessed_total",""),Integer.toString(vatLiability-utilcredit+latefee+interest+penalty));
	    	 
	      sleepWait(2000);
	}
	@Then("^Clicks on next button in liability Calcualtion and Observe the net payable amount for Total=AssessedTotal\"([^\"]*)\"-Paid Total\"([^\"]*)\"$")
	public void clicks_on_next_button_in_liability_Calcualtion_and_Observe_the_net_payable_amount_for_Total_AssessedTotal_Paid_Total(String Atotal, String Ptotal) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		clickOn("btn_next","");
		sleepWait(2000);
		Assert.assertEquals(elementText("page_assessment_pymtdue",""),"Payment Due");
		sleepWait(2000);
		Assert.assertEquals(elementText("txt_netpay_total",""),Integer.toString(Integer.parseInt(Atotal)-Integer.parseInt(Ptotal)));
	}
	@Then("^Clicks on next button in liability Calcualtion and Observe the net payable amount of for total=Vat Liability-Utilised Credit\\+Late Fee\\+Interest\\+Penalty \"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"$")
	public void clicks_on_next_button_in_liability_Calcualtion_and_Observe_the_net_payable_amount_of_for_total_Vat_Liability_Utilised_Credit_Late_Fee_Interest_Penalty(String arg1, String arg2, String arg3, String arg4, String arg5) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		clickOn("btn_next","");  
		sleepWait(2000);
		Assert.assertEquals(elementText("page_assessment_pymtdue",""),"Payment Due");
		  int vatLiability=Integer.parseInt(elementText("txt_netpay_vatliability",""));
		  sleepWait(2000);
	      int utilcredit=Integer.parseInt(elementText("txt_netpay_utilcredit",""));
	      sleepWait(2000);
	      int latefee=Integer.parseInt(elementText("txt_netpay_ltfee",""));
	      sleepWait(2000);
	      int interest=Integer.parseInt(elementText("txt_netpay_interest",""));
	      sleepWait(2000);
	      int penalty=Integer.parseInt(elementText("txt_netpay_penalty",""));
	      sleepWait(2000);
	      Assert.assertEquals(elementText("txt_netpay_total",""),Integer.toString(vatLiability-utilcredit+latefee+interest+penalty));

	}

	@When("^clicks on previos button to view Liability calculation page$")
	public void clicks_on_previos_button_to_view_Liability_calculation_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		sleepWait(2000);
	    clickOn("btn_prev","");
	    sleepWait(2000);
	    Assert.assertEquals(elementText("txt_page_liabilitycalculation",""),"Liability Calculation");
	}

	@When("^clicks on raise button$")
	public void clicks_on_raise_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		sleepWait(2000);
		if(!isElementPresent("btn_raisenotice_paymentdue")) {
			assertMsg("Raise Button not Present");
		}
	}

	@Then("^Notice of Assessment should be generated to taxpayer$")
	public void notice_of_Assessment_should_be_generated_to_taxpayer() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		sleepWait(2000);
		Assert.assertEquals("Not implemeneted","not implemnted");
	}

	@Then("^Email should be sent to the email address$")
	public void email_should_be_sent_to_the_email_address() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		sleepWait(2000);
		Assert.assertEquals("Not implemeneted","not implemnted");
		
	}



}
