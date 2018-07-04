package org.drc.vat.StepDefinitions;

import static org.drc.vat.appmanager.HelperBase.clickOn;
import static org.drc.vat.appmanager.HelperBase.type;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AcceptRejectAdditionalClarification 
{
	//TC_02
	@And("^user click on Approve and Continue Button$")
	public void user_click_on_Approve_and_Continue_Button() throws Throwable 
	{
		System.out.println("User Click on Approve & Continiue ");
		clickOn("BApproveContinue","");
		Thread.sleep(20000);
	}
	//TC_02
	@Then("^user seee the certificate$")
	public void user_seee_the_certificate() throws Throwable 
	{
		System.out.println("Certificate Display");
	}
	
	//TC_03
	@And("^user click on view icon and file gets display$")
	public void user_click_on_view_icon_and_file_gets_display() throws Throwable 
	{
		System.out.println("user click on view icon");
		clickOn("ViewEye1","");
		Thread.sleep(20000);
	}
	//TC_03
	@And("^user click on download icon and uploaded file gets downloaded$")
	public void user_click_on_download_icon_and_uploaded_file_gets_downloaded() throws Throwable 
	{
		System.out.println("user click on view icon");
		clickOn("DowView1","");
		Thread.sleep(20000);
	}

	//TC_04
	@And("^user click on Reject button and popup gets display$")
	public void user_click_on_Reject_button_and_popup_gets_display() throws Throwable 
	{
		System.out.println("user click on Reject Button");
		clickOn("BReject","");
		Thread.sleep(20000);
	}
	//TC_04
	@And("^user enter reason for rejection \"([^\"]*)\"$")
	public void user_enter_reason_for_rejection(String value) throws Throwable 
	{
		System.out.println("user enter Reason for Reject");
		//Sunmit Locator to found and enter value also
		//type("TypeHere",value);
		Thread.sleep(20000);

	}
	//TC_04
	@And("^user click on Submit button$")
	public void user_click_on_Submit_button() throws Throwable 
	{
		System.out.println("user click on Submit button");
		//submit button locator to find  
		//clickOn("BReject","");
		Thread.sleep(20000);
	}
	//TC_05
	@Then("^user click on Additional Clarification/Document Needed$")
	public void user_click_on_Additional_Clarification_Document_Needed() throws Throwable 
	{
		System.out.println("user click on Additional Clarification"); 
		clickOn("AdditionalClarification","");
		Thread.sleep(20000);
	}
	//TC_05
	@Then("^user entered comment for required document \"([^\"]*)\"$")
	public void user_entered_comment_for_required_document(String value) throws Throwable 
	{
		System.out.println("user enter comment for document");
		type("AdditionalInput",value);
		Thread.sleep(20000);
		//after comment enter button locatour to check/find
		//clickOn("AdditionalClarification","");		
	}
	//TC_05
	@Then("^user click on on hold button$")
	public void user_click_on_on_hold_button() throws Throwable 
	{
		System.out.println("user click on hold button");		
		clickOn("BHold","");
		Thread.sleep(20000);
	}
			
	
}
