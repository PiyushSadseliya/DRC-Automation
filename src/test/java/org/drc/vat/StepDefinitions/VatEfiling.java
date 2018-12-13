package org.drc.vat.StepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import static org.drc.vat.appmanager.HelperBase.clickOn;
import static org.drc.vat.appmanager.HelperBase.login;
import static org.drc.vat.appmanager.HelperBase.logout;
import static org.drc.vat.appmanager.HelperBase.elementText;
public class VatEfiling {



	@Given("^User is on VAT registration Dashboard after login\"([^\"]*)\"\"([^\"]*)\"$")
	public void user_is_on_VAT_registration_Dashboard_after_login(String uname, String pwd) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		login(uname,pwd);
		Thread.sleep(2000);
	}
	@When("^User selects VAT e-filing from Menu$")
	public void user_selects_VAT_e_filing_from_Menu() throws Throwable {
	    // Write code here that turns the phrasthrow new PendingException();
		clickOn("nav_vat_efiling","");
		Thread.sleep(2000);
	}

	@Then("^user can see the statement of transaction ,verify tables data from tables \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"\"([^\"]*)\" \"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\" \"([^\"]*)\"$")
	public void user_can_see_the_statement_of_transaction_verify_tables_data_from_tables(String arg1, String arg2, String arg3, String arg4, String arg5, String arg6, String arg7, String arg8, String arg9, String arg10) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Thread.sleep(2000); 
		clickOn("efiling_btn_view_all","");
		Thread.sleep(2000); 
		 clickOn("efiling_btn_previous","");
		 logout();
	}

	@Given("^User is on VAT registration Dashboard after login$")
	public void user_is_on_VAT_registration_Dashboard_after_login() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   
	}

	@Then("^user click on View All button from statement transaction section, verify \"([^\"]*)\" \"([^\"]*)\"\\.$")
	public void user_click_on_View_All_button_from_statement_transaction_section_verify(String arg1, String arg2) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	 if(!elementText("statement_of_transcation","").equals(arg1)) {
		 System.out.println("Not found");
	 }
	 clickOn("","//button[@title='Previous']");
	}
	

	@Then("^user can see the statement of transaction$")
	public void user_can_see_the_statement_of_transaction() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    logout();
	}
	@Then("^user can see the statement of transaction as \"([^\"]*)\"$")
	public void user_can_see_the_statement_of_transaction_as(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   if(!elementText("efiling_records","").equalsIgnoreCase(arg1)) {
		   System.out.println("Records are present");
	   }
	   logout();
	}

}
