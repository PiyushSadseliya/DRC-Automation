package org.drc.vat.StepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import static org.drc.vat.appmanager.HelperBase.*;
import static org.drc.vat.appmanager.HelperBase.clickOn;
import static org.drc.vat.appmanager.HelperBase.emailVerification;
import static org.junit.Assert.assertTrue;
import static org.testng.Assert.assertEquals;
import static org.drc.vat.appmanager.HelperBase.change_tab;

import java.awt.AWTException;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import static org.drc.vat.appmanager.HelperBase.cookieclear;
/*
 * 
 * User Registration to create account and login to perform tax related actitvities
 * 
 * 
 */
public class userRegistration {	
	int textbox_Maxcount=100;
	int textbox_Mincount=5;
	int Email_Maxcount=150;
	int Email_Mincount=6;
	int phone_Maxcount=15;
	int phone_Mincount=10;
	int password_mincount=6;
	int password_maxcount=20;
	boolean maxTextcount=false;
	boolean minTextcount=false;
	boolean minPhonecount=false;
	boolean maxPhonecount=false;
	boolean minPasswordcount=false;
	boolean maxPasswordcount=false;
	boolean showvalidationMessage = true;
	static boolean fullNameValidation=false;
	static boolean emailValidation=false;
	static boolean passwordValidation=false;
	static boolean cpasswordValidation=false;
	static boolean mobValidation=false;
	boolean novalidationMessage = false;
	String email=null;
	String verificationMsg="Your account has been verified";
	
	


	@Given("^User is on Welcome to DRC Tax Portal page\"([^\"]*)\" \"([^\"]*)\"$")
	public void user_is_on_Welcome_to_DRC_Tax_Portal_page(String arg1, String arg2) throws Throwable {
		sleepWait(2000);
		List <WebElement> buttonSignin = wd.findElements(By.xpath("//button[@title='Back to Sign In']"));
		if(buttonSignin.size()>0) {
			clickOn("btn_signin","");			
		}
		
		sleepWait(3000);
		assertEquals(elementText("h2",""), "Welcome to e-Service Portal");
	}

	@When("^User Clicks on Register$")
	public void user_Clicks_on_Register() throws Throwable {
		
		clickOn("register_link","");	
		

	}

	@Then("^User should be Navigated to Register With Us page$")
	public void user_should_be_Navigated_to_Register_With_Us_page() throws Throwable {
		assertEquals(elementText("h2",""), "Register With Us");
		
		//check_page_url("URL_Register");
	

	}

	@Then("^User Enters Data \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" in the respective fields$")
	public void user_Enters_Data_in_the_respective_fields(String FullName, String Email, String Password, String ConfirmPassword, String MobileNumber) throws Throwable {
		sleepWait(5000);		
		email=Email;
		//Blank value
		if(FullName.length()==0) {	
			System.out.println("full name blank");
		type("txtbx_fullname",FullName);
		fullNameValidation=true;
		
		
		}
		//more than field length
		else if(FullName.length()>textbox_Maxcount) {
			type("txtbx_fullname",FullName);
			sleepWait(2000);	
			if(getvalue("txtbx_fullname","").length()==textbox_Maxcount) {				
				showvalidationMessage=false;
			}
		}
		//less than minimum
		else if(FullName.length()<textbox_Mincount) {
			type("txtbx_fullname",FullName);
			fullNameValidation=true;
			
			sleepWait(2000);	
		}
		else if(FullName.length()>textbox_Mincount && FullName.length()<=textbox_Maxcount ) {
			type("txtbx_fullname",FullName);
			sleepWait(2000);	
			if(getvalue("txtbx_fullname","").length()==FullName.length()) {				
				fullNameValidation=false;
			
			}
		}
		else {
			type("txtbx_fullname",FullName);
		}
		
		//Email Field
		if(Email.length()==0) {
		type("txtbx_email",Email);
		emailValidation=true;
		System.out.println("Email- blank");
		}
		else if(Email.length()>Email_Maxcount) {
			type("txtbx_email",Email);
			sleepWait(2000);	
			
			if(elementText("txtbx_email","").length()==Email.length()) {				
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
		if(!(getvalue("txtbx_password","").length()==password_maxcount)) {
			assertTrue("Not Trimmed", true);
		
		}}
		else {
			type("txtbx_password",Password);
			type("txtbx_cfpassword",ConfirmPassword);
		}
		if(MobileNumber.length()>phone_Maxcount) {
			type("txtbx_phone",MobileNumber);
			
			if(!(getvalue("txtbx_phone", "").length()==phone_Maxcount)) {
				assertTrue("Not Trimmed", true);
			}
			
		}		
		else {		
		type("txtbx_phone",MobileNumber);
		}
	}

	@Then("^Accepts Terms and condition$")
	public void accepts_Terms_and_condition() throws Throwable {
		sleepWait(120000);
		clickOn("chkbx_agree","");
		sleepWait(3000);
		clickOn("btn_accept","");

	}

	@Then("^Clicks On Register Button$")
	public void clicks_On_Register_Button() throws Throwable {
		//System.out.println(maxPasswordcount);
		sleepWait(3000);
		clickOn("btn_register","");
		//Validation Message of Max and Min count is true skip Register button click
		

	}

	@Then("^User should be navigated to ThankYou for Registering Page after successful Registration\\.$")
	public void user_should_be_navigated_to_ThankYou_for_Registering_Page_after_successful_Registration() throws Throwable {
		check_page_url("URL_Success");		
		sleepWait(3000);

	}
	@Then("^checks inbox for verification mail\\.$")
	public void checks_inbox_for_verification_mail() throws Exception   {
	    // Write code here that turns the phrase above into concrete actions
		emailVerification(email);
		change_tab();
		System.out.println(elementText("heading_linkverify",""));
		if(elementText("heading_linkverify","").equals(verificationMsg)) {
			System.out.println("Email verificatin completed");
		}else {
			System.out.println("Verification Failed");
		}
	  
	}
	@Then("^Accepts/Rejects Terms and conditions$")
	public void accepts_Rejects_Terms_and_conditions() throws Throwable {
		sleepWait(2000);
		clickOn("chkbx_agree","");
		sleepWait(2000);
		clickOn("btn_accept","");
		sleepWait(1500);
	}

	@Then("^Error messages should be shown to user as\"([^\"]*)\"$")
	public void error_messages_should_be_shown_to_user_as(String validationMessage) throws Throwable {
		System.out.println(validationMessage.length());
		if(validationMessage.length()>0) {
			fullNameValidation=true;
			emailValidation=true;
			passwordValidation=true;
			cpasswordValidation=true;
			mobValidation=true;
			
			
		}
	
		
		if(fullNameValidation) {

			assertEquals(elementText("txt_fullnamevalidation", ""), validationMessage);         //validation message for Full Name
			
			
		}
		if(emailValidation) {
			assertEquals(elementText("txt_emailvalidation", ""), validationMessage);		 //validation message for Email
			
		}
		if(passwordValidation) {
			assertEquals(elementText("txt_passwordvalidation", ""), validationMessage); 		 //validation message for Password
			
		}
		if(cpasswordValidation) {
			assertEquals(elementText("txt_cpasswordvalidation", ""), validationMessage); 		 //validation message for Confirm Password
			
		}
		if(mobValidation) {
			assertEquals(elementText("txt_mobvalidation", ""), validationMessage);				 //validation message for Mobile
			
		}
	

		
	   
	}

	}
