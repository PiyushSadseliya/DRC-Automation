package org.drc.vat.StepDefinitions;
import static org.drc.vat.appmanager.HelperBase.*;

import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;


public class Reset 
{
	
	int password_mincount=8;
	int password_maxcount=20;
	boolean minPasswordcount=false;
	boolean maxPasswordcount=false;
	boolean showvalidationMessage = true;
	
	
	
	@Given("^User is on DRC Tax Portal page$")
	public void user_is_on_DRC_Tax_Portal_page() throws Throwable 
	{

		 System.out.println("Welcome to DRC Tax Portal");
	}
	
	@And("^User Clicks on Forget Password\\? Reset$")
	public void user_Clicks_on_Forget_Password_Reset() throws Throwable 
	{
		clickOn("reset", "");
		
	}
	

	@And("^User Enter Email: \"([^\"]*)\" page$")
	public void user_Enter_Email_page(String sameEmail) throws Throwable 
	{
		
		 type("txtbox_email",sameEmail);
		
	}

	@And("^Clicks on SendOTP button$")
	public void clicks_on_SendOTP_button() throws Throwable 
	{
		System.out.println("SendOTP Clicked");
		clickOn("btn_SendOtp", "");
		
		//clickOn("web.Url", "");
	    
	}
	

	@And("^User Enter Same Email: \"([^\"]*)\"$")
	public void i_Enter_Same_Email(String sameEmail) throws Throwable 
	{
		 type("txtbox_email",sameEmail);		
	}
	
	@And("^Clicks on SendOTP$")
	public void clicks_on_SendOTP() throws Throwable 
	{
		clickOn("btn_SendOtp", "");
		Thread.sleep(1000);
	}
	
	@And("^User wait for OTP to come on Email and Enter OTP$")
	public void user_wait_for_OTP_to_come_on_Email() throws Throwable 
	{
		Thread.sleep(10000);
		clickOn("btn_Verify", "");
	}
	
	@And("^User Enters Data \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_Enters_Data(String Password, String ConfirmPassword) throws Throwable 
	{
	
		if(Password.length()==0 && ConfirmPassword.length()!=0 ) {
			type("txtbox_NewPassword",Password);
			type("txtbox_ConfirmPassword",ConfirmPassword);
		}else if(Password.length()!=0 && ConfirmPassword.length()==0) {
			type("txtbox_NewPassword",Password);
			type("txtbox_ConfirmPassword",ConfirmPassword);
		}
		else if(Password.length()<password_mincount) {
			type("txtbox_NewPassword",Password);
			type("txtbox_ConfirmPassword",ConfirmPassword);
		}
		else if(Password.length()>password_maxcount){
		type("txtbox_NewPassword",Password);
		type("txtbox_ConfirmPassword",ConfirmPassword);
		if(elementText("txtbox_NewPassword").length()==password_maxcount) {
		System.out.println(elementText("txtbox_NewPassword"));
		showvalidationMessage=false;
		}}
		else {
			type("txtbox_NewPassword",Password);
			type("txtbox_ConfirmPassword",ConfirmPassword);
		}
	}

	
	
	
	
	@And("^User Enter new Password \"([^\"]*)\"$")
	public void user_Enter_new_Password(String newPass) throws Throwable 
	{
		 type("txtbox_NewPassword",newPass);
		 Thread.sleep(1000);
	}

	@When("^User Enter Confirm Password \"([^\"]*)\"$")
	public void user_Enter_Confirm_Password(String confirm) throws Throwable 
	{
		 type("txtbox_ConfirmPassword",confirm);
		 Thread.sleep(1000);
	}
	
	/*@And("^User Clicks on Reset Password$")
	public void user_Clicks_on_Reset_Password(String validationMessage) throws Throwable 
	{
		clickOn("btn_ResetPassword", "");
		validationMessage().equalsIgnoreCase(validationMessage); 
		Thread.sleep(1000);
		 
	}*/
	//
	@When("^User Clicks on Reset Password$")
	public void user_Clicks_on_Reset_assword() throws Throwable 
	{
		clickOn("btn_ResetPassword", "");
		Thread.sleep(1000);
	}
	
	
	@And("^User Clicks on Reset Password and checks Validation \"([^\"]*)\"$")
	public void user_Clicks_on_Reset_Password_and_checks_Validation(String arg1) throws Throwable 
	{
		clickOn("btn_ResetPassword", "");
		Thread.sleep(1000);
	}
	
	
	/*@And("^User Clicks on Reset Password \"([^\"]*)\"$")
	public void user_Clicks_on_Reset_Password(String validationMessage) throws Throwable 
	{
		clickOn("btn_ResetPassword", "");
    	validationMessage("//*[@class='text-danger validation-summary-errors']").equalsIgnoreCase(validationMessage);
		Thread.sleep(1000);
	*/	
	
	
	
	@And("^User Clicks on Go to Sign In$")
	public void user_Clicks_on_Go_to_Sign_In() throws Throwable 
	{
		clickOn("GotoSignIn", "");
		Thread.sleep(1000);
	}
	
	@And("^User Enter new \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_Enter_new(String oldEmail, String NewPassword) throws Throwable 
	{
		type("txtbox_username",oldEmail);
		type("txtbox_password",NewPassword);
	}
	
	@And("^Clicks on SendOTP button and checks Validation message \"([^\"]*)\"$")
	public void clicks_on_SendOTP_button_and_checks_Validation_message(String arg1) throws Throwable {
		clickOn("btn_SendOtp", "");
		Thread.sleep(1000);
	}

	@And("^User Clicks on Reset Password \"([^\"]*)\"$")
	public void user_Clicks_on_Reset_Password(String arg1) throws Throwable 
	{
		clickOn("btn_ResetPassword", "");
    	
		Thread.sleep(1000);
	    
	}
}