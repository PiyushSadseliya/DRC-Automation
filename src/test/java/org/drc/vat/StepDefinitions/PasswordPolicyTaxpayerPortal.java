package org.drc.vat.StepDefinitions;

import cucumber.api.java.en.Given;
import static org.drc.vat.appmanager.HelperBase.clickOn;
import static org.drc.vat.appmanager.HelperBase.elementText;
import static org.drc.vat.appmanager.HelperBase.type;
import static org.drc.vat.appmanager.HelperBase.pageSource;
import static org.drc.vat.appmanager.HelperBase.wd;
import static org.drc.vat.appmanager.HelperBase.sleepWait;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import static org.drc.vat.appmanager.HelperBase.getvalue;
import static org.drc.vat.appmanager.HelperBase.login;
import org.testng.Assert;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class PasswordPolicyTaxpayerPortal {
	@Given("^The user is on TaxPayer portal Registeration page for registration\"([^\"]*)\"|\"([^\"]*)\"$")
	public void the_user_is_on_TaxPayer_portal_Registeration_page_for_registration(String arg1, String arg2)
			throws Throwable {
		clickOn("register_link", "");
		Assert.assertEquals(elementText("h2", ""), "Register With Us");

	}

	@When("^user Enters valid details in fields FullName\"([^\"]*)\"Email\"([^\"]*)\"MobileNumber\"([^\"]*)\"$")
	public void user_Enters_valid_details_in_fields_FullName_Email_MobileNumber(String arg1, String arg2, String arg3)
			throws Throwable {
		sleepWait(2000);
		type("txtbx_fullname", arg1);
		sleepWait(2000);
		type("txtbx_email", arg2);
		sleepWait(2000);
		type("txtbx_phone", arg3);

	}

	@When("^user enters password\"([^\"]*)\"confirm\"([^\"]*)\"$")
	public void user_enters_password_confirm(String arg1, String arg2) throws Throwable {
		type("txtbx_password", arg1);
		sleepWait(2000);
		type("txtbx_cfpassword", arg2);
		sleepWait(2000);

	}

	@Then("^Message should be displayed \"([^\"]*)\" for Password field\"([^\"]*)\" for Confirm Password field$")
	public void message_should_be_displayed_for_Password_field_for_Confirm_Password_field(String arg1, String arg2)
			throws Throwable {
		String validation = pageSource();
		validation.contains(arg1);
		validation.contains(arg2);

	}

	@Given("^User should be on Change Password screen\"([^\"]*)\"|\"([^\"]*)\"$")
	public void user_should_be_on_Change_Password_screen(String arg1, String arg2) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		sleepWait(2000);
		login("refac@mailinator.com", "Test@123");
		sleepWait(3000);
		;
		clickOn("link_myaccount", "");
	}

	@When("^Password\"([^\"]*)\"Confirm Password\"([^\"]*)\"$")
	public void password_Confirm_Password(String arg1, String arg2) throws Throwable {
		type("txtbx_password", arg1);

		sleepWait(2000);
		type("txtbx_cfpassword", arg2);
	}

	@Then("^Message should be displayed \"([^\"]*)\"$")
	public void message_should_be_displayed(String arg1) throws Throwable {
		String validation = pageSource();
		validation.contains(arg1);

	}

	@Then("^click on Register Button$")
	public void click_on_Register_Button() throws Throwable {
		clickOn("btn_register", "");
		if (wd.getCurrentUrl().contains("/user-registration-success")) {
			Assert.assertEquals(false, true);
			sleepWait(2000);
			wd.get("http://103.249.120.58:8066/user-registration");
		}

	}

	@Then("^password and confirm password should accept field length of upto twenty$")
	public void password_and_confirm_password_should_accept_field_length_of_upto_twenty() throws Throwable {
		if (getvalue("txtbx_password", "").length() > 20) {
			sleepWait(2000);
			Assert.assertEquals(false, true);
		}
		if (getvalue("txtbx_cfpassword", "").length() > 20) {
			sleepWait(2000);
			Assert.assertEquals(false, true);
		}

	}

	@When("^Accepts privacy policy$")
	public void accepts_privacy_policy() throws Throwable {
		clickOn("chkbx_agree", "");
		sleepWait(2000);

	}

	@Then("^click on Register Button to register user$")
	public void click_on_Register_Button_to_register_user() throws Throwable {
		clickOn("btn_register", "");

	}

	@Then("^user is on \"([^\"]*)\" Screen$")
	public void user_is_on_Screen(String arg1) throws Throwable {
		wd.getCurrentUrl().contains("user-registration-success");

	}

	@Given("^The user is on TaxPayer portal \"([^\"]*)\"|\"([^\"]*)\"$")
	public void the_user_is_on_TaxPayer_portal(String arg1, String arg2) throws Throwable {
		wd.get("http://103.249.120.58:8066");
		sleepWait(2000);
	}

	@When("^user clicks on Forgot Password Link$")
	public void user_clicks_on_Forgot_Password_Link() throws Throwable {
		clickOn("href_reset_taxpayerportal", "");
		sleepWait(2000);

	}

	@Then("^User is on Reset Password$")
	public void user_is_on_Reset_Password() throws Throwable {
		Assert.assertEquals(elementText("h2", ""), "Reset your password");

	}

	@Then("^User is on Reset Your Password$")
	public void user_is_on_Reset_Your_Password() throws Throwable {
		Assert.assertEquals(elementText("h2", ""), "Reset your password");

	}

	@Then("^Enters UnRegistered \"([^\"]*)\"$")
	public void enters_UnRegistered(String arg1) throws Throwable {
		type("input_reset_email", arg1);
		sleepWait(2000);

	}

	@Then("^Clicks button Send OTP$")
	public void clicks_button_Send_OTP() throws Throwable {
		sleepWait(2000);
		clickOn("btn_reset_sendotp", "");

	}

	@Then("^Message\"([^\"]*)\" Should be displayed$")
	public void message_Should_be_displayed(String arg1) throws Throwable {
		Assert.assertEquals(elementText("txt_error_pwdrest", ""), arg1);

	}

	@Then("^Enters blank spaces in email\"([^\"]*)\"$")
	public void enters_blank_spaces_in_email(String arg1) throws Throwable {
		type("input_reset_email", arg1);
		sleepWait(2000);
	}

	@Then("^Enter Registered Email\"([^\"]*)\"$")
	public void enter_Registered_Email(String arg1) throws Throwable {
		type("input_reset_email", arg1);

	}

	@Then("^Enter OTP After Three minutes$")
	public void enter_OTP_After_Three_minutes() throws Throwable {
		System.out.println("Enter OTP of six digit");
		sleepWait(180000);
	}

	@Then("^Enter OTP Received in the mail$")
	public void enter_OTP_Received_in_the_mail() throws Throwable {

	}

	@Then("^Click on verify button$")
	public void click_on_verify_button() throws Throwable {
		clickOn("btn_verify_resetpassword", "");

	}

	@Then("^user should be on Reset Password Screen$")
	public void user_should_be_on_Reset_Password_Screen() throws Throwable {
		Assert.assertEquals(elementText("h1", ""), "ResetPasswordScreen");

	}

	@Then("^Enters new password\"([^\"]*)\" in password field$")
	public void enters_new_password_in_password_field(String arg1) throws Throwable {
		type("txtbx_newpassword", arg1);

	}

	@Then("^Enter new password in \"([^\"]*)\" in confirm password field$")
	public void enter_new_password_in_in_confirm_password_field(String arg1) throws Throwable {

		type("txtbx_newCpassword", arg1);
	}

	@Then("^Click on Reset Password button$")
	public void click_on_Reset_Password_button() throws Throwable {
		clickOn("btn_reset_password", "");

	}

	@Then("^Enter blank in password field$")
	public void enter_blank_in_password_field() throws Throwable {
		type("txtbx_newpassword", "            ");
	}

	@Then("^Enter blank in confirm password field$")
	public void enter_blank_in_confirm_password_field() throws Throwable {
		type("txtbx_newCpassword", "   ");

	}

	@Then("^user should be on \"([^\"]*)\" page$")
	public void user_should_be_on_page(String arg1) throws Throwable {
		Assert.assertEquals(elementText("h1", ""), arg1);

	}

	@Then("^Enter Code\"([^\"]*)\"$")
	public void enter_Code(String arg1) throws Throwable {
		type("txtbx_mobilecode_reset", arg1);

	}

	@Then("^Enter Mobile Number\"([^\"]*)\"$")
	public void enter_Mobile_Number(String arg1) throws Throwable {
		type("txtbx_mobilenumber_reset", arg1);

	}

	@Then("^user should not be able to enter the Alphabets$")
	public void user_should_not_be_able_to_enter_the_Alphabets() throws Throwable {
		Assert.assertEquals(isAlpha(getvalue("txtbx_mobilecode_reset", "")), false);
		Assert.assertEquals(isAlpha(getvalue("txtbx_mobilenumber_reset", "")), false);

	}

	@Then("^Enter UnRegistered Mobile Number\"([^\"]*)\"$")
	public void enter_UnRegistered_Mobile_Number(String arg1) throws Throwable {
		type("txtbx_mobilenumber_reset", arg1);

	}

	@Then("^Enter Registered Mobile Number\"([^\"]*)\"$")
	public void enter_Registered_Mobile_Number(String arg1) throws Throwable {
		type("txtbx_mobilenumber_reset", arg1);

	}

	@When("^user dont Enter any password$")
	public void user_dont_Enter_any_password() throws Throwable {
		clickOn("btn_changepassword", "");

	}

	@Then("^Messages dhould be displayed\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"$")
	public void messages_dhould_be_displayed(String arg1, String arg2, String arg3) throws Throwable {
		List<WebElement> ele = wd
				.findElements(By.className("text-danger position-absolute error-msg ng-star-inserted"));
		String[] msg = { arg1, arg2, arg3 };
		for (int i = 0; i < 3; i++) {
			Assert.assertEquals(ele.get(i).getText(), msg[i]);
		}
	}

	@When("^Enters invalid Old Password\"([^\"]*)\" invalid New Password\"([^\"]*)\"  invalid confirm password\"([^\"]*)\"$")
	public void enters_invalid_Old_Password_invalid_New_Password_invalid_confirm_password(String arg1, String arg2,
			String arg3) throws Throwable {
		type("txtbx_Oldpassword", arg1);
		type("txbx_newPassword", arg2);
		type("txbx_newCPassword", arg3);

	}

	@Then("^click on submit button$")
	public void click_on_submit_button() throws Throwable {
		clickOn("btn_changepassword", "");
	}

	@Then("^Message should display \"([^\"]*)\"\"([^\"]*)\"$")
	public void message_should_display(String arg1, String arg2) throws Throwable {
		List<WebElement> ele = wd
				.findElements(By.className("text-danger position-absolute error-msg ng-star-inserted"));
		String[] msg = { arg1, arg2 };
		for (int i = 0; i < 2; i++) {
			Assert.assertEquals(ele.get(i).getText(), msg[i]);
		}

	}

	@When("^Enter Valid Old password\"([^\"]*)\"$")
	public void enter_Valid_Old_password(String arg1) throws Throwable {
		type("txtbx_Oldpassword", arg1);

	}

	@When("^Enter New password without capital letters\"([^\"]*)\"$")
	public void enter_New_password_without_capital_letters(String arg1) throws Throwable {
		type("txbx_newPassword", arg1);

	}

	@When("^Enter Confirm New password without capital letters\"([^\"]*)\"$")
	public void enter_Confirm_New_password_without_capital_letters(String arg1) throws Throwable {
		type("txbx_newCPassword", arg1);

	}

	@Then("^Enter Confirm password\"([^\"]*)\"$")
	public void enter_Confirm_password(String arg1) throws Throwable {

		type("txbx_newCPassword", arg1);
	}

	@Then("^Enter Old Password\"([^\"]*)\"$")
	public void enter_Old_Password(String arg1) throws Throwable {
		type("txtbx_Oldpassword", arg1);

	}

	@Then("^Enter new password\"([^\"]*)\"$")
	public void enter_new_password(String arg1) throws Throwable {

		type("txbx_newPassword", arg1);
	}

	@Then("^Message should display \"([^\"]*)\"$")
	public void message_should_display(String arg1) throws Throwable {
		Assert.assertEquals(
				wd.findElement(By.className("text-danger position-absolute error-msg ng-star-inserted")).getText(),
				arg1);

	}

	@Then("^user should not be able to enter more than (\\d+) characters$")
	public void user_should_not_be_able_to_enter_more_than_characters(int arg1) throws Throwable {
		Assert.assertEquals(getvalue("txtbx_Oldpassword", "").length(), arg1);
		Assert.assertEquals(getvalue("txbx_newPassword", "").length(), arg1);
		Assert.assertEquals(getvalue("txbx_newCPassword", "").length(), arg1);

	}

	@Then("^Validation Message should be displayed \"([^\"]*)\"$")
	public void validation_Message_should_be_displayed(String arg1) throws Throwable {
		Assert.assertEquals(elementText("h2", ""), arg1);

	}

	@Given("^User should be on Login screen\"([^\"]*)\"|\"([^\"]*)\"$")
	public void user_should_be_on_Login_screen(String arg1, String arg2) throws Throwable {
		wd.get("http://103.249.120.58:8066");
		Assert.assertEquals(elementText("h2", ""), "Welcome to DRC Tax Portal");

	}

	@When("^Enter Email Id \"([^\"]*)\"$")
	public void enter_Email_Id(String arg1) throws Throwable {
		type("txtbox_username", arg1);

	}

	@When("^Enters wrong password \"([^\"]*)\"$")
	public void enters_wrong_password(String arg1) throws Throwable {

		type("txtbox_password", arg1);
	}

	@When("^Click on sign in button$")
	public void click_on_sign_in_button() throws Throwable {
		clickOn("btn_login", "");

	}

	@When("^Enter wrong Email Id \"([^\"]*)\"$")
	public void enter_wrong_Email_Id(String arg1) throws Throwable {
		type("txtbox_username", arg1);

	}

	@When("^Enter valid password\"([^\"]*)\"$")
	public void enter_valid_password(String arg1) throws Throwable {
		type("txtbox_password", arg1);

	}

	@When("^Enter valid Email id \"([^\"]*)\"$")
	public void enter_valid_Email_id(String arg1) throws Throwable {
		type("txtbox_username", arg1);

	}

	@When("^Enter Invalid password\"([^\"]*)\"$")
	public void enter_Invalid_password(String arg1) throws Throwable {
		type("txtbox_password", arg1);

	}

	@When("^Click on Reset link$")
	public void click_on_Reset_link() throws Throwable {

		clickOn("href_reset_taxpayerportal", "");
	}

	@Then("^user should be redirected to Forgot password Screen$")
	public void user_should_be_redirected_to_Forgot_password_Screen() throws Throwable {

		Assert.assertEquals(elementText("", "h3"), "Forgot Password?");
	}

	@Then("^Enter registerd email id\"([^\"]*)\"$")
	public void enter_registerd_email_id(String arg1) throws Throwable {
		type("input_reset_email", arg1);

	}

	@Then("^Click on Send OTP and Enters the OTP pin$")
	public void click_on_Send_OTP_and_Enters_the_OTP_pin() throws Throwable {
		clickOn("btn_reset_sendotp", "");

	}

	@When("^Enter valid in confirm password\"([^\"]*)\"$")
	public void enter_valid_in_confirm_password(String arg1) throws Throwable {
		type("txtbx_newCpassword", arg1);

	}

	@Then("^Click on Reset button password reset$")
	public void click_on_Reset_button_password_reset() throws Throwable {
		clickOn("btn", "");

	}

	@Then("^user is on sign in page$")
	public void user_is_on_sign_in_page() throws Throwable {
		wd.get("http://103.249.120.58:8066");

	}

	@Then("^Enter email\"([^\"]*)\"$")
	public void enter_email(String arg1) throws Throwable {
		type("txtbox_username", arg1);

	}

	@Then("^Enters Old password\"([^\"]*)\"$")
	public void enters_Old_password(String arg1) throws Throwable {

		type("txtbox_password", arg1);

	}

	@Then("^enter valid email\"([^\"]*)\"$")
	public void enter_valid_email(String arg1) throws Throwable {
		type("txtbox_username", arg1);

	}

	@Then("^Enter more than fifty character in password field\"([^\"]*)\"$")
	public void enter_more_than_fifty_character_in_password_field(String arg1) throws Throwable {
		type("txtbox_password", arg1);

	}

	@Then("^user is not able to enter more than fifty character$")
	public void user_is_not_able_to_enter_more_than_fifty_character() throws Throwable {
		Assert.assertEquals(getvalue("txtbox_password", "").length(), 50);

	}

	@When("^Enter password\"([^\"]*)\"$")
	public void enter_password(String arg1) throws Throwable {
		type("txtbox_password", arg1);

	}

	@Then("^user should not be logged in to the application$")
	public void user_should_not_be_logged_in_to_the_application() throws Throwable {
		Assert.assertEquals(elementText("h2", ""), "Welcome to DRC Tax Portal");

	}

	@Then("^user should be logged in to the application$")
	public void user_should_be_logged_in_to_the_application() throws Throwable {
		sleepWait(5000);
		Assert.assertEquals(elementText("h3", ""), "Dashboard");

	}

	public boolean isAlpha(String name) {
		return name.matches("[a-zA-Z]+");
	}

}
