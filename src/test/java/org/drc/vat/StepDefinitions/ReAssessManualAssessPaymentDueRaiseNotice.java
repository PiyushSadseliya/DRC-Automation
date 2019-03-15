package org.drc.vat.StepDefinitions;

import static org.drc.vat.appmanager.HelperBase.elementText;

import org.testng.Assert;

import cucumber.api.java.en.Then;

import static org.drc.vat.appmanager.HelperBase.buttonEnabled;
import static org.drc.vat.appmanager.HelperBase.clickOn;

public class ReAssessManualAssessPaymentDueRaiseNotice {
	
	
	@Then("^Tax officer is on ReAssessment Notice$")
	public void tax_officer_is_on_ReAssessment_Notice() throws Throwable {
	        //next button on liabilty Calculation page
		clickOn("btn_next","");
		Thread.sleep(2000);
		Assert.assertEquals(elementText("",""), "", "PaymentDuepage");
		
		clickOn("btn_next","");
		Thread.sleep(2000);
		Assert.assertEquals(elementText("",""), "", "AssementNotice");
		    
	}

	@Then("^\"([^\"]*)\"should be generated\\.$")
	public void should_be_generated(String barcodeno) throws Throwable {
		Assert.assertEquals(elementText("txt_docnumber",""),barcodeno);
	         
	}

	@Then("^the Taxpayer name\"([^\"]*)\", Address\"([^\"]*)\" and NITVA\"([^\"]*)\" of the Customer is same as that the record selected on Assessed List  Page\\.$")
	public void the_Taxpayer_name_Address_and_NITVA_of_the_Customer_is_same_as_that_the_record_selected_on_Assessed_List_Page(String name, String Add, String nitva) throws Throwable {
		Assert.assertEquals(elementText("",""),name);
		Assert.assertEquals(elementText("",""),Add);
		Assert.assertEquals(elementText("",""),nitva);
	         
	}
	@Then("^Validate the Close Button Functionality on ReAssessment Notice\\.$")
	public void validate_the_Close_Button_Functionality_on_ReAssessment_Notice() throws Throwable {
		Thread.sleep(2000);
    	clickOn("btn_close","");
    	Assert.assertEquals(elementText("",""),"ManualReAssessmentPage");
	}

	@Then("^Validate the Confirm Button Functionality on ReAssessment Notice\\.$")
	public void validate_the_Confirm_Button_Functionality_on_ReAssessment_Notice() throws Throwable {
		Thread.sleep(2000);
    	Assert.assertEquals(buttonEnabled("btn_confirm",""), true);
    	clickOn("btn_confirm","");
	}


	
	
	
	
	}




