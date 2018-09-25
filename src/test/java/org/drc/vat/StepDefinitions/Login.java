package org.drc.vat.StepDefinitions;

import static org.drc.vat.appmanager.HelperBase.clickOn;

import static org.drc.vat.appmanager.HelperBase.*;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Login 
{
	@Given("^User is on DRC Tax Portal$")
	public void user_is_on_DRC_Tax_Portal() throws Throwable 
	{	
		 System.out.println("Welcome to DRC Tax Portal");
	}

	@When("^User Enter Data: \"([^\"]*)\" \"([^\"]*)\"$")
	public void i_Enter_Data(String email, String pwd) throws Throwable 
	{
		System.out.print("User Enter  Email");
		 type("txtbox_username",email);
		 System.out.print("User Enter  Password");
		 type("txtbox_password",pwd);
	}
	
	@And("^User Clicks on \"([^\"]*)\" and checks Validation message \"([^\"]*)\"$")
	public void user_Clicks_on_Validation_message(String arg1, String arg2) throws Throwable {
		clickOn("btn_log	`in", "");		
		//Thread.sleep(10000);
	}

	@And("^User Clicks on \"([^\"]*)\"$")
	public void i_Clicks_on(String arg1) throws Throwable
	{
		
		clickOn("btn_login", "");		
		Thread.sleep(10000);
	}
	
	
	@And("^User Clicks on SendCode$")
	public void clicks_on_SendCode() throws Throwable 
	{
		//Thread.sleep(10000);	
		clickOn("btn_sendcode", "");	
	}

	@And("^User Clicks on Verify$")
	public void clicks_on_Verify() throws Throwable 
	{
		//Thread.sleep(15000);
		clickOn("btn_verify", "");
		
	}
	@Then("^User see \"([^\"]*)\"$")
	public void i_see(String arg1) throws Throwable 
	{
		//Thread.sleep(15000);
	   System.out.println("Dashboard");	
	}
	
	//
	@When("^User Clicks on Forget Password$")
	public void user_Clicks_on_Forget_Password() throws Throwable 
	{
		clickOn("reset", "");
		//Thread.sleep(2000);
	}
	
	
	/*@And("^User Enter Same Email: \"([^\"]*)\"$")
	public void i_Enter_Same_Email(String sameEmail) throws Throwable 
	{
		 type("txtbox_email",sameEmail);
		
	}*/
	
	/*@And("^Clicks on SendOTP$")
	public void clicks_on_SendOTP() throws Throwable 
	{
		clickOn("btn_SendOtp", "");
		//Thread.sleep(1000);
	}*/
	
	/*@And("^User wait for OTP to come on Email and Enter OTP$")
	public void user_wait_for_OTP_to_come_on_Email() throws Throwable 
	{
		//Thread.sleep(10000);
		clickOn("btn_Verify", "");
	}*/
	
	/*@And("^User Enter new Password \"([^\"]*)\"$")
	public void user_Enter_new_Password(String newPass) throws Throwable 
	{
		 type("txtbox_NewPassword",newPass);
		 //Thread.sleep(1000);
	}

	@When("^User Enter Confirm Password \"([^\"]*)\"$")
	public void user_Enter_Confirm_Password(String confirm) throws Throwable 
	{
		 type("txtbox_ConfirmPassword",confirm);
		// Thread.sleep(1000);
	}*/
	
	/*@And("^User Clicks on Reset Password$")
	public void user_Clicks_on_Reset_Password() throws Throwable 
	{
		clickOn("btn_ResetPassword", "");
		 //Thread.sleep(1000);
	}*/
	
	/*@And("^User Clicks on Go to Sign In$")
	public void user_Clicks_on_Go_to_Sign_In() throws Throwable 
	{
		clickOn("GotoSignIn", "");
		//Thread.sleep(1000);
	}*/
	
	@When("^User Enter New \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_Enter_New(String oldEmail, String newPass) throws Throwable 
	{
		type("txtbox_username",oldEmail);
		type("txtbox_password",newPass);
		clickOn("btn_login", "");
		//Thread.sleep(20000);
	}
	
	@And("^User Enter Email: \"([^\"]*)\"$")
	public void user_Enter_Email(String emailinvalid) throws Throwable 
	{
		type("txtbox_email",emailinvalid);
		clickOn("btn_sendcode", "");
	}
}