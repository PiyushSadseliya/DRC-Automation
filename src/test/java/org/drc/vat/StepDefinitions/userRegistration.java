package org.drc.vat.StepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import static org.drc.vat.appmanager.HelperBase.*;
import static org.drc.vat.appmanager.HelperBase.clickOn;

public class userRegistration {
	static int count = 1;
	int textbox_Maxcount=100;
	int textbox_Mincount=2;
	int Email_Maxcount=150;
	int Email_Mincount=6;
	int phone_Maxcount=15;
	int phone_Mincount=10;
	int password_mincount=8;
	int password_maxcount=20;
	boolean maxTextcount=false;
	boolean minTextcount=false;
	boolean minPhonecount=false;
	boolean maxPhonecount=false;
	boolean minPasswordcount=false;
	boolean maxPasswordcount=false;
	boolean showvalidationMessage = true;
	boolean novalidationMessage = false;
	
	

	@Given("^User is on Welcome to DRC Tax Portal page$")
	public void user_is_on_Welcome_to_DRC_Tax_Portal_page() throws Throwable {
		System.out.println(count);
		if(count==1) {
		check_page_url("baseurl");
		}
	}

	@When("^User Clicks on Register$")
	public void user_Clicks_on_Register() throws Throwable {
		if(count==1) {
		clickOn("register_link","");	
		count++;
		}

	}

	@Then("^User should be Navigated to Register With Us page$")
	public void user_should_be_Navigated_to_Register_With_Us_page() throws Throwable {
		check_page_url("URL_Register");
		if(count>1) {
			call_url("URL_Register");
		}


	}

	@Then("^User Enters Data \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" in the respective fields$")
	public void user_Enters_Data_in_the_respective_fields(String FullName, String Email, String Password, String ConfirmPassword, String MobileNumber) throws Throwable {
		Thread.sleep(5000);
		//Blank value
		if(FullName.length()==0) {	
			System.out.println("full name blank");
		type("txtbx_fullname",FullName);
		
		}
		//more than field length
		else if(FullName.length()>textbox_Maxcount) {
			type("txtbx_fullname",FullName);
			Thread.sleep(2000);	
			if(elementText("txtbx_fullname").length()==textbox_Maxcount) {				
				System.out.println("trimmed ");
				showvalidationMessage=false;
			}
		}
		//less than minimum
		else if(FullName.length()<textbox_Mincount) {
			type("txtbx_fullname",FullName);
			Thread.sleep(2000);	
		}
		else if(FullName.length()>textbox_Mincount && FullName.length()<textbox_Maxcount ) {
			type("txtbx_fullname",FullName);
			Thread.sleep(2000);	
			if(elementText("txtbx_fullname").length()==FullName.length()) {				
				System.out.println("As it is ");
				showvalidationMessage=false;
			}
		}
		else {
			type("txtbx_fullname",FullName);
		}
		
		//Email Field
		if(Email.length()==0) {
		type("txtbx_email",Email);
		System.out.println("Email- blank");
		}
		else if(Email.length()>Email_Maxcount) {
			type("txtbx_email",Email);
			Thread.sleep(2000);	
			if(elementText("txtbx_email").length()==Email.length()) {				
				System.out.println("As it isEmail ");
				showvalidationMessage=false;
			}
		}
		
		else {
			type("txtbx_email",Email);

		}
		if(Password.length()==0 && ConfirmPassword.length()!=0 ) {
			type("txtbx_password",Password);
			type("txtbx_cfpassword",ConfirmPassword);
		}else if(Password.length()!=0 && ConfirmPassword.length()==0) {
			type("txtbx_password",Password);
			type("txtbx_cfpassword",ConfirmPassword);
		}
		else if(Password.length()<password_mincount) {
			type("txtbx_password",Password);
			type("txtbx_cfpassword",ConfirmPassword);
		}
		else if(Password.length()>password_maxcount){
		type("txtbx_password",Password);
		type("txtbx_cfpassword",ConfirmPassword);
		if(elementText("txtbx_password").length()==password_maxcount) {
		System.out.println(elementText("txtbx_password"));
		showvalidationMessage=false;
		}}
		else {
			type("txtbx_password",Password);
			type("txtbx_cfpassword",ConfirmPassword);
		}
		if(MobileNumber.length()>phone_Maxcount) {
			showvalidationMessage=false;
		}		
		else {		
		type("txtbx_phone",MobileNumber);
		}
	}

	@Then("^Accepts Terms and condition$")
	public void accepts_Terms_and_condition() throws Throwable {
		Thread.sleep(9000);
		clickOn("chkbx_agree","");
		Thread.sleep(3000);
		clickOn("btn_accept","");

	}

	@Then("^Clicks On Register Button$")
	public void clicks_On_Register_Button() throws Throwable {
		//System.out.println(maxPasswordcount);
		Thread.sleep(2000);
		clickOn("btn_register","");
		//Validation Message of Max and Min count is true skip Register button click
		

	}

	@Then("^User should be navigated to ThankYou for Registering Page after successful Registration\\.$")
	public void user_should_be_navigated_to_ThankYou_for_Registering_Page_after_successful_Registration() throws Throwable {
		check_page_url("URL_Success");		

	}
	@Then("^Accepts/Rejects Terms and conditions$")
	public void accepts_Rejects_Terms_and_conditions() throws Throwable {
		Thread.sleep(9000);
		clickOn("chkbx_agree","");
		Thread.sleep(3000);
		clickOn("btn_accept","");
	}
	
	@Then("^Error messages should be shown to user as\"([^\"]*)\"$")
	public void error_messages_should_be_shown_to_user_as(String validationMessage) throws Throwable {
		
		if(showvalidationMessage) {
			System.out.println(showvalidationMessage);
			
			validationMessage(validationMessage);
		}
		else {
			System.out.println("No Validation messages");
			
		}
	   
	}

	}
