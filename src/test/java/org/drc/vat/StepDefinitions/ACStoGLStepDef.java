package org.drc.vat.StepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import java.util.List;
import static org.drc.vat.appmanager.HelperBase.*;
import static org.hamcrest.CoreMatchers.containsString;
import static org.hamcrest.MatcherAssert.assertThat;

public class ACStoGLStepDef
{
	WebDriver driver;
	@Given("^user is on ACS_to_GL page$")
	public void user_is_on_ACS_to_GL_page() throws Throwable
	{
		clickOn("report_menu", "");
		clickOn("acs_gl_menu", "");
	}
	@When("^user clicks on add button$")
	public void user_clicks_on_add_button() throws Throwable
	{
		clickOn("addnew-btn", "");
	}

	@Then("^user enter \"([^\"]*)\" value$")
	public void user_enter_value(String group) throws Throwable
	{
		drp_select("group_drp",group);
	}

	@Then("^enters ACCOUNT ID \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
	public void enters_ACCOUNT_ID(String ac1, String ac2, String ac3) throws Throwable
	{
		type("account",ac1);
		type("account","|");
		type("account",ac2);
		type("account","|");
		type("account",ac3);
	}

	@Then("^Selects \"([^\"]*)\"$")
	public void selects(String rvrse) throws Throwable
	{
		drp_select("reverse-sign",rvrse);
	}

	@Then("^Select \"([^\"]*)\"$")
	public void select(String sign) throws Throwable
	{
		clickOn("label","[@for='"+sign+"']");

	}

	@Then("^clicks on \"([^\"]*)\" button$")
	public void clicks_on_button(String btn) throws Throwable
	{
		clickOn(btn,"");
	}

	@Then("^verify toast message \"([^\"]*)\"$")
	public void verify_toast_message(String toastMessage) throws Throwable
	{

		assertThat(toastMessage(), containsString(toastMessage));
	}

	@When("^Search for \"([^\"]*)\"$")
	public void search_for(String data) throws Throwable
	{
		type("txtbox_search",data);
	}

	@FindAll(@FindBy(how = How.CSS, using = ".resize-col"))
	private List<WebElement> prd_List;

	@Then("^select account id$")
	public void select_account_id() throws Throwable
	{
		prd_List.get(0).click();
	}

	@Then("^click on edit icon$")
	public void click_on_edit_icon() throws Throwable
	{
		clickOn("edit-btn","");
	}

	@Then("^click on \"([^\"]*)\"$")
	public void click_on(String btn) throws Throwable
	{
		clickOn(btn,"");
	}

	@Then("^select other the value of \"([^\"]*)\" from dropdown$")
	public void select_other_the_value_of_from_dropdown(String value) throws Throwable
	{
		drp_select("group_drp",value);
	}

	@Then("^change the account id \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
	public void change_the_account_id(String acct1, String acct2, String acct3) throws Throwable
	{
		type("account-id",acct1);
		type("account-id",acct2);
		type("account-id",acct3);
	}

	@Then("^user clicks on delete icon of first value$")
	public void user_clicks_on_delete_icon_of_first_value() throws Throwable
	{
		clickOn("delete-icon","");
	}

	@When("^select \"([^\"]*)\" option$")
	public void select_option(String format) throws Throwable
	{
		clickOn("label" , "[contains(.,\"" + format + "\")]");
	}

	@When("^click on export button$")
	public void click_on_export_button() throws Throwable
	{
		clickOn("export_report_btn", "");
	}

	@When("^saved report equals report name: \"([^\"]*)\"$")
	public void saved_report_equals_report_name(String filename) throws Throwable
	{
		saveFile();
		verifyDownload(filename);
	}
}
