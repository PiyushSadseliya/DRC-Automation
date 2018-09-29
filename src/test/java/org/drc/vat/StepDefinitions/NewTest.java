package org.drc.vat.StepDefinitions;
import static org.drc.vat.appmanager.HelperBase.*;


import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;
import org.testng.asserts.SoftAssert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class NewTest {
	
	@Given("^user is on One Authority Login Page$")
	public void user_is_on_One_Authority_Login_Page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		
	   
	}

	@Then("^he needs to sign in with uname\"([^\"]*)\"pwd\"([^\"]*)\"$")
	public void he_needs_to_sign_in_with_uname_pwd(String arg1, String arg2) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions

		
}
}
