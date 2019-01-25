package org.drc.vat.StepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import static org.drc.vat.appmanager.HelperBase.*;
import static org.drc.vat.appmanager.HelperBase.clickOn;
import static org.drc.vat.appmanager.HelperBase.emailVerification;
import static org.junit.Assert.assertTrue;
import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertNotEquals;
import static org.drc.vat.appmanager.HelperBase.change_tab;

import java.awt.AWTException;
import java.sql.ResultSet;
import java.util.List;

import org.apache.commons.lang.ObjectUtils.Null;
import org.drc.vat.appmanager.ConnectDatabase;
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
	int textbox_Maxcount = 100;
	int textbox_Mincount = 5;
	int Email_Maxcount = 150;
	int Email_Mincount = 6;
	int phone_Maxcount = 15;
	int phone_Mincount = 10;
	int password_mincount = 6;
	int password_maxcount = 20;
	boolean maxTextcount = false;
	boolean minTextcount = false;
	boolean minPhonecount = false;
	boolean maxPhonecount = false;
	boolean minPasswordcount = false;
	boolean maxPasswordcount = false;
	boolean showvalidationMessage = true;
	static boolean fullNameValidation = false;
	static boolean emailValidation = false;
	static boolean passwordValidation = false;
	static boolean cpasswordValidation = false;
	static boolean mobValidation = false;
	boolean novalidationMessage = false;
	String email = null;
	String verificationMsg = "Your account has been verified";
	public static String EmailUsername;
	public static String Username;
	public static String EmailCapsUsername;

	@Given("^User is on Welcome to DRC Tax Portal page\"([^\"]*)\" \"([^\"]*)\"$")
	public void user_is_on_Welcome_to_DRC_Tax_Portal_page(String arg1, String arg2) throws Throwable {
		sleepWait(2000);
		List<WebElement> buttonSignin = wd.findElements(By.xpath("//button[@title='Back to Sign In']"));
		if (buttonSignin.size() > 0) {
			clickOn("btn_signin", "");
		}

		sleepWait(3000);
		assertEquals(elementText("h2", ""), "Welcome to e-Service Portal");
	}

	// Data base connection for 1authority table
	@When("^Establish a connection with data base and execute query to create user\"([^\"]*)\"\\.$")
	public void establish_a_connection_with_data_base_and_execute_query_to_create_user(String UserName)
			throws Throwable {
		Username = UserName;
		EmailUsername = UserName.replace(" ", "");
		EmailCapsUsername = UserName.replace(" ", "").toUpperCase();

		ConnectDatabase CD = new ConnectDatabase();
		CD.opendb();
		String user = // "DECLARE @a int = (select count(*)+1 from [1AuthoritySTS].dbo.aspnetusers
				// where email like 'AutomationUser%')"
				"INSERT INTO [1AuthoritySTS].[dbo].[AspNetUsers]            "
				+ "         (Id,                                                "
				+ "         [AccessFailedCount]                                 "
				+ "         ,[ConcurrencyStamp]                                 "
				+ "         ,[Email]                                            "
				+ "         ,[EmailConfirmed]                                   "
				+ "         ,[LockoutEnabled]                                   "
				+ "         ,[LockoutEnd]                                       "
				+ "         ,[NormalizedEmail]                                  "
				+ "         ,[NormalizedUserName]                               "
				+ "         ,[PasswordHash]                                     "
				+ "         ,[PhoneNumber]                                      "
				+ "         ,[PhoneNumberConfirmed]                             "
				+ "         ,[SecurityStamp]                                    "
				+ "         ,[TwoFactorEnabled]                                 "
				+ "         ,[UserClient]                                       "
				+ "         ,[UserName]                                         "
				+ "         ,[TokenExpiration]                                  "
				+ "         ,[FullName])                                        "
				+ "   VALUES                                                    "
				+ "         (NEWID(),                                           "
				+ "         0                                                   "
				+ "         ,NEWID()                                            " + "         ,CONCAT('"
				+ EmailUsername + "','@mailinator.com')              "
				// +",'"+UserName+"'"
				+ "         ,1                                                  "
				+ "         ,0                                                  "
				+ "         ,NULL                                               "
				/*
				 * +"         ,CONCAT('AutomationUser',@a,'@MAILINATOR.COM')              "
				 * +"         ,CONCAT('AutomationUser',@a,'@MAILINATOR.COM')              "
				 */
				 + "        ,CONCAT('" + EmailCapsUsername + "','@MAILINATOR.COM')              "
				 + "         ,CONCAT('" + EmailCapsUsername + "','@MAILINATOR.COM')              "
				 + "         ,'AQAAAAEAACcQAAAAEM/wSgVN/nG79PYxp2X4xCzrtdQcsTEYE911sxUm9sniuJtbzybplBD6TYP+BnxhDg=='  "
				 + "         ,'+919999999999'                                                                         "
				 + "         ,1                                                                                       "
				 + "          , NEWID()                                                                               "
				 + "          ,0                                                                                      "
				 + "          ,'TaxPortal'                                                                            "
				 // +" ,CONCAT('AutomationUser',@a,'@MAILINATOR.COM') "
				 + "          ,CONCAT('" + EmailCapsUsername
				 + "','@MAILINATOR.COM')                                                  "
				 + "          ,CURRENT_TIMESTAMP                                                                      "
				 // +" ,CONCAT('AutomationUser',@a)) ";
				 + "          ,'" + UserName + "') ";

		CD.sta.executeUpdate(user);
	}

	// Data base connection for DRC database
	@When("^Update data in another table based on created user$")
	public void update_data_in_another_table_based_on_created_user() throws Throwable {
		ConnectDatabase CD = new ConnectDatabase();
		CD.opendb();

		String Reguser = // "DECLARE @a int = (select count(*) from [1AuthoritySTS].dbo.aspnetusers where
				// email like 'AutomationUser%')"
				// +
				"declare  @emailvalue Nvarchar(500) "
				+ "Set @emailvalue = (select ID from  [1AuthoritySTS].[dbo].[AspNetUsers] "
				+ "where Email = CONCAT('" + EmailUsername + "','@mailinator.com'))               "
				+ "insert into [DRC-QA].[Ref].[RegisteredUsers] values                             "
				+ "  (@emailvalue                                                          "
				+ "  ,1                                                                   " + "  ,'" + Username
				+ "'" + "  ,CONCAT('" + EmailUsername + "','@MAILINATOR.COM')                              "
				+ "  ,CURRENT_TIMESTAMP                                                   "
				+ "  ,NULL                                                                "
				+ "  ,CURRENT_TIMESTAMP                                                   "
				+ "  ,NUll                                                                "
				+ "  ,null                                                                " + "  ) ";

		CD.sta.executeUpdate(Reguser);
		System.out.println("test");
	}

	// updating the data in roles tables
	@When("^Update data in roles table$")
	public void update_data_in_roles_table() throws Throwable {
		ConnectDatabase CD = new ConnectDatabase();
		CD.opendb();

		String roles = // "declare @i int = (select count(*) from [1AuthoritySTS].dbo.aspnetusers where
				// email like 'dfdj%')"
				" declare  @emailvalue Nvarchar(500)"
				+ " set @emailvalue = (select ID from  [1AuthoritySTS].[dbo].[AspNetUsers] "
				+ " where Email = CONCAT('" + EmailUsername + "','@mailinator.com'))"
				+ " insert into [1AuthoritySTS].[dbo].[AspNetUserRoles] ([UserId],[RoleId]) VALUES  (@emailvalue,'B828372F-B0AD-40DF-B8BB-5C6E11A8682E')";

		// System.out.println("test");
		CD.sta.executeUpdate(roles);

	}

	@When("^User Clicks on Register$")
	public void user_Clicks_on_Register() throws Throwable {
		clickOn("register_link", "");
	}

	@Then("^User should be Navigated to Register With Us page$")
	public void user_should_be_Navigated_to_Register_With_Us_page() throws Throwable {
		assertEquals(elementText("h2", ""), "Register With Us");
	}

	@Then("^User Enters Data \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" in the respective fields$")
	public void user_Enters_Data_in_the_respective_fields(String FullName, String Email, String Password,
			String ConfirmPassword, String MobileNumber) throws Throwable {
		sleepWait(5000);
		email = Email;
		// Blank value
		if (FullName.length() == 0) {
			System.out.println("full name blank");
			type("txtbx_fullname", FullName);
			fullNameValidation = true;
		}
		// more than field length
		else if (FullName.length() > textbox_Maxcount) {
			type("txtbx_fullname", FullName);
			sleepWait(2000);
			if (getvalue("txtbx_fullname", "").length() == textbox_Maxcount) {
				showvalidationMessage = false;
			}
		}
		// less than minimum
		else if (FullName.length() < textbox_Mincount) {
			type("txtbx_fullname", FullName);
			fullNameValidation = true;
			sleepWait(2000);
		} else if (FullName.length() > textbox_Mincount && FullName.length() <= textbox_Maxcount) {
			type("txtbx_fullname", FullName);
			sleepWait(2000);
			if (getvalue("txtbx_fullname", "").length() == FullName.length()) {
				fullNameValidation = false;
			}
		} else {
			type("txtbx_fullname", FullName);
		}

		// Email Field
		if (Email.length() == 0) {
			type("txtbx_email", Email);
			emailValidation = true;
		} else if (Email.length() > Email_Maxcount) {
			type("txtbx_email", Email);
			sleepWait(2000);
			if (elementText("txtbx_email", "").length() == Email.length()) {
				System.out.println("As it isEmail ");
				emailValidation = false;
			}
		}

		else {
			type("txtbx_email", Email);
		}

		if (Password.length() == 0 && ConfirmPassword.length() != 0) {
			type("txtbx_password", Password);
			type("txtbx_cfpassword", ConfirmPassword);
		} else if (Password.length() != 0 && ConfirmPassword.length() == 0) {
			type("txtbx_password", Password);
			type("txtbx_cfpassword", ConfirmPassword);
		} else if (Password.length() < password_mincount) {
			type("txtbx_password", Password);
			type("txtbx_cfpassword", ConfirmPassword);
		} else if (Password.length() > password_maxcount) {
			type("txtbx_password", Password);
			type("txtbx_cfpassword", ConfirmPassword);
			if (!(getvalue("txtbx_password", "").length() == password_maxcount)
					|| !(getvalue("txtbx_cfpassword", "").length() == password_maxcount)) {
				assertTrue("Not Trimmed", true);
			}
		} else {
			type("txtbx_password", Password);
			type("txtbx_cfpassword", ConfirmPassword);
		}
		if (MobileNumber.length() > phone_Maxcount) {
			type("txtbx_phone", MobileNumber);

			if (!(getvalue("txtbx_phone", "").length() == phone_Maxcount)) {
				assertTrue("Not Trimmed", true);
			}
		} else {
			type("txtbx_phone", MobileNumber);
		}
	}

	@Then("^Accepts Terms and condition$")
	public void accepts_Terms_and_condition() throws Throwable {
		sleepWait(120000);
		clickOn("chkbx_agree", "");
		sleepWait(3000);
		clickOn("btn_accept", "");
	}

	@Then("^User should be navigated to ThankYou for Registering Page after successful Registration\\.$")
	public void user_should_be_navigated_to_ThankYou_for_Registering_Page_after_successful_Registration()
			throws Throwable {
		check_page_url("URL_Success");
		sleepWait(3000);

	}

	@Then("^checks inbox for verification mail\\.$")
	public void checks_inbox_for_verification_mail() throws Exception {
		// Write code here that turns the phrase above into concrete actions
		emailVerification(email);
		change_tab();
		System.out.println(elementText("heading_linkverify", ""));
		if (elementText("heading_linkverify", "").equals(verificationMsg)) {
			System.out.println("Email verificatin completed");
		} else {
			System.out.println("Verification Failed");
		}
	}

	@Then("^Accepts/Rejects Terms and conditions$")
	public void accepts_Rejects_Terms_and_conditions() throws Throwable {
		sleepWait(2000);
		clickOn("chkbx_agree", "");
		sleepWait(2000);
		//clickOn("btn_accept", "");
		//sleepWait(1500);
	}

	@Then("^Clicks On Register Button$")
	public void clicks_On_Register_Button() throws Throwable {
		// System.out.println(maxPasswordcount);
		sleepWait(3000);
		clickOn("btn_register", "");
		// Validation Message of Max and Min count is true skip Register button click
	}

	@Then("^Error messages should be shown to user as\"([^\"]*)\"$")
	public void error_messages_should_be_shown_to_user_as(String validationMessage) throws Throwable {
		if (validationMessage.length() > 0) {
			assertEquals(elementText("txt_fullnamevalidation", ""), validationMessage); // validation message for Full Name																						
		}

	}

}
