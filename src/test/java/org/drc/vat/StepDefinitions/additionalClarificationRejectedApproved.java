package org.drc.vat.StepDefinitions;

import static org.drc.vat.appmanager.HelperBase.type;
import static org.drc.vat.appmanager.HelperBase.clickOn;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class additionalClarificationRejectedApproved {
	@Given("^the officer has Rejected the form and The User is on Dashboard After Successfully login from taxpayer portal$")
	public void the_officer_has_Rejected_the_form_and_The_User_is_on_Dashboard_After_Successfully_login_from_taxpayer_portal(String username,String password) throws Throwable {
		
		login(username,password);
	  
	}

	@Then("^User must see the application Status as Rejected$")
	public void user_must_see_the_application_Status_as_Rejected()  {
	    // Write code here that turns the phrase above into concrete actions
	      
	}

	@Then("^again applies for VAT Registration$")
	public void again_applies_for_VAT_Registration() {
	    // Write code here that turns the phrase above into concrete actions
		clickOn("btn_apply_new_Registration","");
	      
	}

	@Given("^the officer Ask for additional clarification in the form and The User is on Dashboard After Successfully login from taxpayer portal$")
	public void the_officer_Ask_for_additional_clarification_in_the_form_and_The_User_is_on_Dashboard_After_Successfully_login_from_taxpayer_portal(String username,String password) throws InterruptedException {
	    // Write code here that turns the phrase above into concrete actions
		login(username,password);
	}

	@When("^user clicks on edit button for clarifying form details$")
	public void user_clicks_on_edit_button_for_clarifying_form_details()  {
	    // Write code here that turns the phrase above into concrete actions
	      
	}

	@Then("^the user is redirected to review and submit page$")
	public void the_user_is_redirected_to_review_and_submit_page()  {
	    // Write code here that turns the phrase above into concrete actions
	      
	}

	@Then("^Edits the clarifications details needed respectively$")
	public void edits_the_clarifications_details_needed_respectively()  {
	    // Write code here that turns the phrase above into concrete actions
	      
	}

	@Then("^Must Reply with the comment along with the documents$")
	public void must_Reply_with_the_comment_along_with_the_documents(){
	    // Write code here that turns the phrase above into concrete actions
	      
	}

	@Then("^Can View the document$")
	public void can_View_the_document() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	      
	}

	@Then("^again Submits the form for review to DGI officer$")
	public void again_Submits_the_form_for_review_to_DGI_officer() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		clickOn("chkbx_agree","");
		clickOn("btn_submit","");
	      
	}

	@Given("^The DGI officer has approved for NITVA and The User is on Dashboard After Successfully login from taxpayer portal$")
	public void the_DGI_officer_has_approved_for_NITVA_and_The_User_is_on_Dashboard_After_Successfully_login_from_taxpayer_portal() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	      
	}

	@Then("^User must see the application Status as Approved   on the Dashboard$")
	public void user_must_see_the_application_Status_as_Approved_on_the_Dashboard() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	      
	}

	@Then("^Views the NITVA Certificate$")
	public void views_the_NITVA_Certificate() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	      
	}
	void login(String username,String password) throws InterruptedException {
		type("txtbox_username", "rihe@o3enzyme.com");
		Thread.sleep(2000);
		type("txtbox_password", "12345678");
	}

}
