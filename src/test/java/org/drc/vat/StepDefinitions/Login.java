package org.drc.vat.StepDefinitions;

import static org.drc.vat.appmanager.HelperBase.*;

import static org.junit.Assert.assertTrue;
import static org.junit.Assume.assumeTrue;
import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertTrue;

import org.openqa.selenium.By;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Login 
{
	
	static boolean emailValidation=false;
	static boolean passwordValidation=false;
	int Email_Maxcount=150;
	boolean showvalidationMessage = true;
	int password_mincount=6;
	int password_maxcount=20;
	
	@Given("^User is on DRC Tax Portal and login$")
	public void user_is_on_DRC_Tax_Portal_and_login() throws Throwable 
	{
		wd.get("http://103.249.120.58:8042");
	}
	
	@Given("^User is on DRC Tax Portal$")
	public void user_is_on_DRC_Tax_Portal() throws Throwable 
	{	
		 System.out.println("Welcome to DRC Tax Portal");
	}
	
	@And("^User is on DRC Tax Portal \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_is_on_DRC_Tax_Portal(String arg1, String arg2) throws Throwable 
	{
		 System.out.println("Welcome to DRC Tax Portal");
	}

	

	@When("^User Enter Data: \"([^\"]*)\" \"([^\"]*)\"$")
	public void i_Enter_Data(String email, String pwd) throws Throwable 
	{
		login(email, pwd);

	}
	
	
	@And("^User Enters Data \"([^\"]*)\" \"([^\"]*)\" in the respective fields$")
	public void user_Enters_Data_in_the_respective_fields(String Email, String Password) throws Throwable 
	{
		
		 type("txtbox_username",Email);		
		 type("txtbox_password",Password);
				
	}

	@And("^User Clicks on SignIn and checks Validation message \"([^\"]*)\"$")
	public void user_Clicks_on_SignIn_and_checks_Validation_message(String validationMessage) throws Throwable 
	{
		
		clickOn("btn_login", "");
				
		if(wd.findElement(By.xpath("//*[contains(text(),'" + validationMessage + "')]")).isDisplayed())
		{
			assertTrue("Passed", true);
		}
		
	}
	
	
	@And("^User Clicks on \"([^\"]*)\" and checks Validation message \"([^\"]*)\"$")
	public void user_Clicks_on_Validation_message(String arg1, String validationMessage) throws Throwable 
	{
		clickOn("btn_login", "");
	
		
	}

	@And("^User Clicks on \"([^\"]*)\"$")
	public void i_Clicks_on(String arg1) throws Throwable
	{
		
		clickOn("btn_login", "");		
		sleepWait(10000);
	}
	
	
	@And("^User Clicks on SendCode$")
	public void clicks_on_SendCode() throws Throwable 
	{
		;	
		clickOn("btn_sendcode", "");	
	}

	@And("^User Clicks on Verify$")
	public void clicks_on_Verify() throws Throwable 
	{
	
		clickOn("btn_verify", "");
		
	}
	@Then("^User see \"([^\"]*)\"$")
	public void i_see(String arg1) throws Throwable 
	{
		
	   System.out.println("Dashboard");	
	}
	
	//
	@When("^User Clicks on Forget Password$")
	public void user_Clicks_on_Forget_Password() throws Throwable 
	{
		clickOn("reset", "");
		
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
		//sleepWait(1000);
	}*/
	
	/*@And("^User wait for OTP to come on Email and Enter OTP$")
	public void user_wait_for_OTP_to_come_on_Email() throws Throwable 
	{
		//sleepWait(10000);
		clickOn("btn_Verify", "");
	}*/
	
	/*@And("^User Enter new Password \"([^\"]*)\"$")
	public void user_Enter_new_Password(String newPass) throws Throwable 
	{
		 type("txtbox_NewPassword",newPass);
		 //sleepWait(1000);
	}

	@When("^User Enter Confirm Password \"([^\"]*)\"$")
	public void user_Enter_Confirm_Password(String confirm) throws Throwable 
	{
		 type("txtbox_ConfirmPassword",confirm);
		// sleepWait(1000);
	}*/
	
	/*@And("^User Clicks on Reset Password$")
	public void user_Clicks_on_Reset_Password() throws Throwable 
	{
		clickOn("btn_ResetPassword", "");
		 //sleepWait(1000);
	}*/
	
	/*@And("^User Clicks on Go to Sign In$")
	public void user_Clicks_on_Go_to_Sign_In() throws Throwable 
	{
		clickOn("GotoSignIn", "");
		//sleepWait(1000);
	}*/
	
	@When("^User Enter New \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_Enter_New(String oldEmail, String newPass) throws Throwable 
	{
		type("txtbox_username",oldEmail);
		type("txtbox_password",newPass);
		clickOn("btn_login", "");
	
	}
	
	@And("^User Enter Email: \"([^\"]*)\"$")
	public void user_Enter_Email(String emailinvalid) throws Throwable 
	{
		type("txtbox_email",emailinvalid);
		clickOn("btn_sendcode", "");
	}
}