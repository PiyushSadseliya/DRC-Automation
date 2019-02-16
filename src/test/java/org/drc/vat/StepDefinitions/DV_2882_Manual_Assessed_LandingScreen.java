package org.drc.vat.StepDefinitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import static org.drc.vat.appmanager.HelperBase.*;
import static org.testng.Assert.assertTrue;

import java.io.IOException;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;
/*import org.sikuli.script.Pattern;
import org.sikuli.script.Screen;*/
import org.testng.Assert;

public class DV_2882_Manual_Assessed_LandingScreen {

	public String NITVA_ChecK;

	@And("^User click on Dashboard$")
	public void user_click_on_Dashboard() throws Throwable 
	{
		sleepWait(1000);
		waitFor("txt_dashboard");
		sleepWait(1000);
		waitFor("txt_dashboard");
		sleepWait(1000);
		clickOn("txt_dashboard", "");
		sleepWait(200);
	}

	@Given("^User click on windows icon$")
	public void user_click_on_windoews_icon() throws Throwable {
		sleepWait(2000);
		clickOn("btn_windowsClick", "");
		sleepWait(2000);
	}

	@And("^User enter username and password and click on login and see dashboard$")
	public void user_enter_username_and_password_and_click_on_login_and_see_dashboard() throws Throwable {
		sleepWait(1000);
		clickOn("tile_vat", "");
		wd.switchTo().window(wd.getWindowHandles().toArray()[1].toString());
		sleepWait(1000);
	}

	@Given("^User is on Assessment Page$")
	public void user_is_on_Assessment_Page() throws Throwable {
		/*
		 * User on Assement page
		 */
	}

	@Given("^User is on Assessment Page \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_is_on_Assessment_Page(String arg1, String arg2) throws Throwable {
		sleepWait(2000);
		System.out.println(arg1);
		System.out.println(arg2);
	}

	@And("^User click on Assessment Tab$")
	public void user_click_on_Assessment_Tab() throws Throwable 
	{
		sleepWait(1000);
		clickOn("txt_Assessment", "");
		sleepWait(2000);
		waitFor("txt_Assessment");
		sleepWait(2000);
	}

	@And("^User see manual assessment and assessament list tab$")
	public void user_see_manual_assessment_and_assessament_list_tab() throws Throwable {
		WebElement we, we1;
		we = wd.findElement(By.xpath(obj.getProperty("ManualAssessmentTab")));
		we1 = wd.findElement(By.xpath(obj.getProperty("AssessedListTab")));
		sleepWait(2000);

		if (we.isDisplayed() && we1.isDisplayed()) 
		{
			assertTrue(true);
		}

	}

	@And("^User click on manual assessment$")
	public void user_click_on_manual_assessment() throws Throwable 
	{
		clickOn("ManualAssessmentTab", "");
		sleepWait(1000);
	}

	@And("^User click on drop down \"([^\"]*)\"$")
	public void user_click_on_drop_down(String period) throws Throwable {
		
		sleepWait(2000);
		waitFor("drp_month");
		clickOn("drp_month", "");
		sleepWait(1000);
		clickOn(period, "");
		sleepWait(1000);
	}

	@And("^User click on year \"([^\"]*)\" and check$")
	public void user_click_on_year_and_check(String year) throws Throwable {
		
		sleepWait(1000);
		waitFor("drp_year");
		clickOn("drp_year", "");
		sleepWait(500);
		clickOn(year, ""); 
		sleepWait(1000);
		waitFor("drp_year");
		
	}

	@And("^User click on FilterBy \"([^\"]*)\"$")
	public void user_click_on_FilterBy(String FilterBy) throws Throwable {
		sleepWait(1000);
		clickOn("drp_FilterBy", "");
		sleepWait(1000);
		clickOn(FilterBy, "");
		sleepWait(1000);
	}

	@And("^User type \"([^\"]*)\"$")
	public void user_type(String typeValue) throws Throwable {
		sleepWait(500);
		type("txtbox_TypeHere",typeValue);	
		sleepWait(1000);
		type("txtbox_TypeHere", typeValue);
		sleepWait(500);
	}

	@And("^User click on search button and check data \"([^\"]*)\"$")
	public void user_click_on_search_button_and_check_data(String nitva) throws Throwable {
		sleepWait(500);
		clickOn("btn_TypeHere_click", "");
		if (wd.findElement(By.xpath("//div[contains(text(),'" + nitva + "')]")).isDisplayed()) {
			assertTrue(true);
		}
	}

	@And("^User click on manage setting drop down and check drop down list for Reassign and Assess$")
	public void user_click_on_manage_setting_drop_down_and_check_drop_down_list_for_Reassign_and_Assess()
			throws Throwable {
		sleepWait(1000);
		clickOn("drp_AssestManage", "");
		WebElement we, we1;
		we = wd.findElement(By.xpath(obj.getProperty("txt_AssestManageAssess")));
		we1 = wd.findElement(By.xpath(obj.getProperty("txt_AssestManageReassign")));
		sleepWait(1000);
		if (we.isDisplayed() && we1.isDisplayed()) {
			assertTrue(true);
		}
	}

	@And("^User click on reassign and click on drop down and check list \"([^\"]*)\"$")
	public void user_click_on_reassign_and_click_on_drop_down_and_check_list(String officer) throws Throwable {
		// clickOn("drp_AssestManage", "");
		// sleepWait(1000);
		clickOn("txt_AssestManageReassign", "");
		sleepWait(1000);
		clickOn("drp_AssessOfficerChangedDropdown", "");
		sleepWait(1000);
		clickOn(officer, "");
		sleepWait(1000);
		clickOn("btn_AssesofficerWrong", "");
	}

	@And("^User click on FilterBy \"([^\"]*)\" and type \"([^\"]*)\" and click on search button$")
	public void user_click_on_FilterBy_and_type_and_click_on_search_button(String officer, String officerName)
			throws Throwable {
		sleepWait(1000);
		clickOn("drp_FilterBy", "");
		sleepWait(1000);
		clickOn(officer, "");
		sleepWait(1000);
		type("txtbox_TypeHere", officerName);
		sleepWait(1000);
		clickOn("btn_TypeHere_click", "");

		WebElement we;
		we = wd.findElement(By.xpath(obj.getProperty("txt_AssestManageAssess")));
		if (we.isEnabled()) {
			assertTrue(true);
		}
	}

	@And("^User click on manage setting drop down and click on Assess$")
	public void user_click_on_manage_setting_drop_down_and_click_on_Assess() throws Throwable {
		sleepWait(1000);
		clickOn("drp_AssestManage", "");
		sleepWait(1000);
		clickOn("txt_AssestManageAssess", "");
		sleepWait(1000);
	}

	@And("^User will navigate to user manual assessement page$")
	public void user_will_navigate_to_user_manual_assessement_page() throws Throwable 
	{
		sleepWait(2000);
		WebElement we;
		we = wd.findElement(By.xpath(obj.getProperty("txt_OperPeerfor")));
		if (we.isDisplayed()) 
		{
			assertTrue(true);
		}
		sleepWait(1000);
	}

	@And("^User click on FilterBy \"([^\"]*)\" dropdown and click on Status$")
	public void user_click_on_FilterBy_dropdown_and_click_on_Status(String filterby) throws Throwable {
		sleepWait(1000);

		clickOn("drp_FilterBy", "");
		sleepWait(1000);
		clickOn(filterby, "");
		/*
		 * clickOn(filterby, ""); sleepWait(500);
		 * //clickOn("txt_AssestFilterBusinessType", ""); sleepWait(500);
		 * //clickOn(filterby, ""); sleepWait(500); clickOn("txt_AssestFilterStatus",
		 * "");
		 */

	}

	@And("^User click on Status and click on \"([^\"]*)\"$")
	public void user_click_on_Status_and_click_on(String status) throws Throwable {
		sleepWait(500);
		clickOn("drp_Status_check", "");
		sleepWait(1000);
		clickOn(status, "");
	}

	@And("^User click on search button and check status \"([^\"]*)\"$")
	public void user_click_on_search_button_and_check_status(String checkStatus) throws Throwable {
		sleepWait(500);
		clickOn("btn_search_click", "");
		sleepWait(500);

		/*
		 * if(wd.findElement(By.xpath(obj.getProperty("txt_OperPeerfor"))).isDisplayed()
		 * ) { assertTrue(true); }
		 */
		if (wd.findElement(By.xpath("//span[contains(text(),'" + checkStatus + "')]")).isDisplayed()) {
			System.out.println("User click status ");
			assertTrue(true);
		}

		// (//span[contains(text(),'Pending')])[2]
	}

	@And("^User click on manage setting$")
	public void user_click_on_manage_setting() throws Throwable {
		sleepWait(500);
		clickOn("drp_AssestManage", "");
		sleepWait(1000);
	}

	@And("^User click on manage status \"([^\"]*)\"$")
	public void user_click_on_manage_status(String value) throws Throwable {
		sleepWait(1000);
		clickOn(value, "");
	}

	@And("^User click on drop down officer \"([^\"]*)\" and click on cancel$")
	public void user_click_on_drop_down_officer_and_click_on_cancel(String value) throws Throwable {
		sleepWait(1000);
		clickOn("drp_AssessOfficerChangedDropdown", "");
		sleepWait(1000);
		clickOn(value, "");
		sleepWait(1000);
		clickOn("btn_AssesofficerWrong", "");
	}

	@And("^User again click on drop down officer \"([^\"]*)\" and click on right tick$")
	public void user_again_click_on_drop_down_officer_and_click_on_right_tick(String value) throws Throwable {
		sleepWait(1000);
		clickOn("txt_AssestManageReassign", "");
		sleepWait(1000);
		clickOn("drp_AssessOfficerChangedDropdown", "");
		sleepWait(1000);
		clickOn(value, "");
		sleepWait(1000);
		clickOn("btn_AssseOfficerRight", "");
	}

	@And("^User check message for officer changed \"([^\"]*)\"$")
	public void user_check_message_for_officer_changed(String message) throws Throwable {
		String expectedMessage = message;
		String message1 = wd.findElement(By.xpath("//div[@id='toast-container']")).getText();
		Assert.assertTrue(message.contains(expectedMessage));

	}

	@And("^User click on serarch button on assessment page$")
	public void user_click_on_serarch_button_on_assessment_page() throws Throwable {
		sleepWait(500);
		clickOn("btn_search_click", "");
	}

	@And("^User is navigate to Operations Performed page$")
	public void user_is_navigate_to_Operations_Performed_page() throws Throwable {
		sleepWait(3000);
		WebElement we;
		we = wd.findElement(By.xpath(obj.getProperty("txt_OperPeerfor")));
		if (we.isDisplayed()) {
			assertTrue(true);
		}

	}

	@And("^User click on Previous button on Operations Performed page$")
	public void user_click_on_Previous_button_on_Operations_Performed_page() throws Throwable {
		sleepWait(1000);
		// String Manual_Asseessment_NITVA= getValue("txt_NITVA_Status_Changed");
		String Manual_Asseessment_NITVA = wd.findElement(By.xpath(obj.getProperty("txt_NITVA_Status_Changed")))
				.getText();
		NITVA_ChecK = Manual_Asseessment_NITVA;
		clickOn("btn_OperationPerformed_Previous", "");
		sleepWait(1000);

	}

	@And("^User type nitva no on assessement and click on search button$")
	public void user_type_nitva_no_on_assessement_and_click_on_search_button() throws Throwable {
		sleepWait(1000);
		type("txtbox_TypeHere", NITVA_ChecK);
		sleepWait(1000);
		clickOn("btn_TypeHere_click", "");
	}

	@And("^User see status is changed to \"([^\"]*)\"$")
	public void user_see_status_is_changed_to(String checkStatus) throws Throwable {
		if (wd.findElement(By.xpath("(//span[contains(text(),'" + checkStatus + "')])[1]")).isDisplayed()) {
			assertTrue(true);
		}
	}

	@And("^User click on drop down Period and select \"([^\"]*)\"$")
	public void user_click_on_drop_down_Period_and_select(String period) throws Throwable {
		sleepWait(500);
		clickOn("drp_month", "");
		sleepWait(1000);
		clickOn(period, "");

	}

	@And("^User click on year and select \"([^\"]*)\"$")
	public void user_click_on_year_and_select(String year) throws Throwable {
		sleepWait(1000);
		clickOn("drp_year", "");
		sleepWait(1000);
		clickOn(year, "");
	}

	@And("^User see message no record found$")
	public void user_see_message_no_record_found() throws Throwable {
		sleepWait(1000);
		if (wd.findElement(By.xpath(obj.getProperty("txt_NoRecordFound"))).isDisplayed()) {
			assertTrue(true);
		}

		/*
		 * WebElement we;
		 * we=wd.findElement(By.xpath(obj.getProperty("txt_NoRecordFound")));
		 * if(we.isDisplayed()) { assertTrue(true); }
		 */
	}

	@And("^User click on year \"([^\"]*)\"$")
	public void user_click_on_year(String year) throws Throwable {
		sleepWait(1000);
		clickOn("drp_year", "");
		sleepWait(2000);
		clickOn(year, "");
	}

	@And("^User enter data for NITVA \"([^\"]*)\" and click on search button$")
	public void user_enter_data_for_NITVA_and_click_on_search_button(String nitva) throws Throwable {
		sleepWait(500);
		type("txtbox_TypeHere", nitva);
		sleepWait(500);
		clickOn("btn_TypeHere_click", "");
	}

	@And("^User check NITVA number \"([^\"]*)\" no$")
	public void user_check_NITVA_number_no(String checkNitva) throws Throwable {
		if (wd.findElement(By.xpath("//div[contains(text(),'" + checkNitva + "')]")).isDisplayed()) {
			assertTrue(true);
		}
	}

	@And("^User again enter invalid data \"([^\"]*)\" and check message no record found$")
	public void user_again_enter_invalid_data_and_check_message_no_record_found(String nitva) throws Throwable {
		sleepWait(500);
		type("txtbox_TypeHere", nitva);
		sleepWait(500);
		clickOn("btn_TypeHere_click", "");
		sleepWait(500);
		if (wd.findElement(By.xpath(obj.getProperty("txt_NoRecordFound"))).isDisplayed()) {
			assertTrue(true);
		}
	}

	/*
	 * @And("^User enter again data \"([^\"]*)\" and check message no record found$"
	 * ) public void user_enter_again_data_and_check_message_no_record_found(String
	 * arg1) throws Throwable {
	 * 
	 * 
	 * }
	 */

	@And("^User filter record again \"([^\"]*)\" and click on business type \"([^\"]*)\" and user click on \"([^\"]*)\"$")
	public void user_filter_record_again_and_click_on_business_type_and_user_click_on(String value1, String value2,
			String value3) throws Throwable {
		sleepWait(500);
		clickOn(value1, "");
		sleepWait(1000);
		clickOn(value2, "");
		sleepWait(1000);
		clickOn("drp_BusinessType", "");
		sleepWait(1000);
		clickOn(value3, "");
	}

	@And("^User click on search button and check \"([^\"]*)\"$")
	public void user_click_on_search_button_and_check(String Trading) throws Throwable {
		sleepWait(500);
		clickOn("btn_search_click", "");
		sleepWait(500);
		if (wd.findElement(By.xpath("//div[contains(text(),'" + Trading + "')]")).isDisplayed()) {
			assertTrue(true);
		}
	}

	@And("^User selects value from Assessment filter drop down \"([^\"]*)\"$")
	public void user_selects_value_from_Assessment_filter_drop_down(String FilterBy) throws Throwable {
		sleepWait(1000);
		clickOn("drp_FilterBy", "");
		sleepWait(500);
		clickOn(FilterBy, "");

	}

	@And("^User enters data for Assessment in type here text box \"([^\"]*)\"$")
	public void user_enters_data_for_Assessment_in_type_here_text_box(String typeName) throws Throwable {
		type("txtbox_TypeHere", typeName);
		sleepWait(1000);
		clickOn("btn_TypeHere_click", "");
	}

	@And("^User check for valid data for TAX Payer \"([^\"]*)\"$")
	public void user_check_for_valid_data_for_TAX_Payer(String TaxName) throws Throwable {
		sleepWait(1000);
		if (wd.findElement(By.xpath("//div[contains(text(),'" + TaxName + "')]")).isDisplayed()) 
		{
			assertTrue(true);
		}
	}

	@And("^User again enter data in type here \"([^\"]*)\" for invalid data$")
	public void user_again_enter_data_in_type_here_for_invalid_data(String typeValue) throws Throwable {
		sleepWait(500);
		type("txtbox_TypeHere", typeValue);
		sleepWait(500);
		clickOn("btn_TypeHere_click", "");
	}

	@Given("^User check for valid data for NITVA \"([^\"]*)\"$")
	public void user_check_for_valid_data_for_NITVA(String NITVA) throws Throwable {
		sleepWait(500);
		if (wd.findElement(By.xpath("//div[contains(text(),'" + NITVA + "')]")).isDisplayed()) {
			assertTrue(true);
		}
	}

	@And("^User check for valid data for Assessment Officer \"([^\"]*)\"$")
	public void user_check_for_valid_data_for_Assessment_Officer(String Officer) throws Throwable {
		sleepWait(500);
		if (wd.findElement(By.xpath("//span[contains(text(),'" + Officer + "')]")).isDisplayed()) {
			assertTrue(true);
		}

	}

	@And("^User click on business type and click on \"([^\"]*)\"$")
	public void user_click_on_business_type_and_click_on(String business) throws Throwable {

		sleepWait(500);
		clickOn("drp_BusinessType", "");
		sleepWait(500);
		clickOn(business, "");

	}

	@And("^User click on search button and check Business Type \"([^\"]*)\"$")
	public void user_click_on_search_button_and_check_Business_Type(String businessType) throws Throwable {
		sleepWait(500);
		clickOn("btn_search_click", "");
		sleepWait(500);
		if (wd.findElement(By.xpath("//div[contains(text(),'" + businessType + "')]")).isDisplayed()) {
			assertTrue(true);
		}

	}

	@And("^User click on company size and click on \"([^\"]*)\"$")
	public void user_click_on_company_size_and_click_on(String companySize) throws Throwable {
		sleepWait(500);
		clickOn("drp_CompanySize", "");
		sleepWait(1000);
		clickOn(companySize, "");

	}

	@And("^User click on search button and check Company Size \"([^\"]*)\"$")
	public void user_click_on_search_button_and_check_Company_Size(String company) throws Throwable {
		sleepWait(500);
		clickOn("btn_search_click", "");
		sleepWait(1000);
		if (wd.findElement(By.xpath("//div[contains(text(),'" + company + "')]")).isDisplayed()) {
			assertTrue(true);
		}

	}

	@And("^User click Status In Progress \"([^\"]*)\" and check \"([^\"]*)\"$")
	public void user_click_Status_In_Progress_and_check(String status, String check) throws Throwable {
		sleepWait(1000);
		clickOn("drp_Status_check", "");
		sleepWait(1000);
		clickOn(status, "");
		sleepWait(1000);
		clickOn("btn_search_click", "");
		sleepWait(1000);
		if (wd.findElement(By.xpath("(//span[contains(text(),'" + check + "')])[1]")).isDisplayed()) {
			assertTrue(true);
		}
	}

	@And("^User click Status Pending \"([^\"]*)\" and check \"([^\"]*)\"$")
	public void user_click_Status_Pending_and_check(String status, String check) throws Throwable {
		sleepWait(500);
		clickOn("drp_Status_check", "");
		sleepWait(500);
		clickOn(status, "");
		sleepWait(500);
		clickOn("btn_search_click", "");
		sleepWait(1000);
		if (wd.findElement(By.xpath("(//span[contains(text(),'" + check + "')])[2]")).isDisplayed()) {
			assertTrue(true);
		}
	}

	@And("^User enter data \"([^\"]*)\"$")
	public void user_enter_data(String typeValue) throws Throwable {
		sleepWait(500);
		type("txtbox_TypeHere", typeValue);
		clickOn("btn_TypeHere_click", "");
		sleepWait(500);

	}

	@And("^User click on last button$")
	public void user_click_on_last_button() throws Throwable {
		sleepWait(500);
		clickOn("lbl_AssLast", "");

	}

	@And("^User check \"([^\"]*)\" and check page\"([^\"]*)\"$")
	public void user_check_and_check_page(String value, String value2) throws Throwable {
		WebElement we, we1;

		we = wd.findElement(By.xpath(obj.getProperty(value)));
		sleepWait(500);
		we1 = wd.findElement(By.xpath(obj.getProperty(value2)));
		sleepWait(2000);
		if (!we.isEnabled() && !we1.isEnabled()) {
			System.out.println("Fail");
		} else {
			System.out.println("Pass");
		}
	}

	@And("^User click on page \"([^\"]*)\" and check page\"([^\"]*)\" \"([^\"]*)\"$")
	public void user_click_on_page_and_check_page(String value, String value2, String arg3) throws Throwable {
		sleepWait(1000);
		// sleepWait(2000);
		try {
			obj.load(fis);
		} catch (IOException e) {
			e.printStackTrace();
		}
		if (arg3.equals("last and right")) {
			WebElement we, we1;
			we = wd.findElement(By.xpath(obj.getProperty(value)));
			we.click();
			sleepWait(1000);
			we1 = wd.findElement(By.xpath(obj.getProperty(value2)));
			sleepWait(1000);
			we = wd.findElement(By.xpath(obj.getProperty(value)));
			sleepWait(1000);
			if ((!we.isEnabled() && !we1.isEnabled())) {
				assertTrue(true);
			}
		} else if (arg3.equals("last and left")) {
			WebElement we, we1;
			we = wd.findElement(By.xpath(obj.getProperty(value)));
			we.click();
			sleepWait(1000);
			we1 = wd.findElement(By.xpath(obj.getProperty(value2)));
			sleepWait(1000);
			we = wd.findElement(By.xpath(obj.getProperty(value)));
			sleepWait(1000);
			if ((!we.isEnabled() && we1.isEnabled())) {
				assertTrue(true);
			}

		} else if (arg3.equals("right and left")) {
			WebElement we, we1;
			we = wd.findElement(By.xpath(obj.getProperty(value)));
			we.click();
			sleepWait(1000);
			we1 = wd.findElement(By.xpath(obj.getProperty(value2)));
			sleepWait(1000);
			we = wd.findElement(By.xpath(obj.getProperty(value)));
			sleepWait(1000);
			if ((we.isEnabled() && we1.isEnabled())) {
				assertTrue(true);
			}
		} else if (arg3.equals("right and first")) {
			WebElement we, we1;
			we = wd.findElement(By.xpath(obj.getProperty(value)));
			we.click();
			sleepWait(1000);
			we1 = wd.findElement(By.xpath(obj.getProperty(value2)));
			sleepWait(1000);
			we = wd.findElement(By.xpath(obj.getProperty(value)));
			sleepWait(1000);
			if ((we.isEnabled() && we1.isEnabled())) {
				assertTrue(true);
			}
		} else if (arg3.equals("first and left")) {
			WebElement we, we1;
			we = wd.findElement(By.xpath(obj.getProperty(value)));
			// we.click();
			sleepWait(1000);
			we1 = wd.findElement(By.xpath(obj.getProperty(value2)));
			sleepWait(1000);
			if ((!we.isEnabled() && !we1.isEnabled())) {
				assertTrue(true);
			}
		} else if (arg3.endsWith("first and first")) {
			WebElement we, we1;
			we = wd.findElement(By.xpath(obj.getProperty(value)));
			sleepWait(1000);
			we1 = wd.findElement(By.xpath(obj.getProperty(value2)));
			sleepWait(1000);
			if ((!we.isEnabled() && !we1.isEnabled())) {
				assertTrue(true);
			}
		}

	}

	/*
	 * @And("^User click on page \"([^\"]*)\" and check page\"([^\"]*)\"$") public
	 * void user_click_on_page_and_check_page(String value, String value2,String
	 * arg3) throws Throwable { try { obj.load(fis); } catch (IOException e) {
	 * e.printStackTrace(); } if(arg3.equals("last and right")) { WebElement we,we1;
	 * we=wd.findElement(By.xpath(obj.getProperty(value))); we.click();
	 * sleepWait(1000); we1=wd.findElement(By.xpath(obj.getProperty(value2)));
	 * sleepWait(1000); we=wd.findElement(By.xpath(obj.getProperty(value)));
	 * sleepWait(1000); if((!we.isEnabled() && !we1.isEnabled())) {
	 * assertTrue(true); } }
	 * 
	 * if(!wd.findElement(By.xpath(obj.getProperty(value))).isEnabled()) {
	 * if((!we.isEnabled() && !we1.isEnabled())) { System.out.println("Pass"); } }
	 * // sleepWait(3000); if(we1.isEnabled()) { if(!we.isEnabled() &&
	 * !we1.isEnabled()) { System.out.println("Pass"); } } else {
	 * System.out.println("Fail"); }
	 * 
	 * 
	 * }
	 */

	@And("^User click on Last \"([^\"]*)\"$")
	public void user_click_on_Last(String value) throws Throwable 
	{ 		
		
	  /*  WebElement Click_C=wd.findElement(By.xpath(obj.getProperty(value)));
	    Select click=new Select(Click_C);
	    country.selectByVisibleText("India (+91)");*/
		
	  /*  WebElement Click_C= wd.findElement(By.xpath(obj.getProperty(value)));
	    List<WebElement> click = Click_C.findElements(By.tagName("li"));
	    for (WebElement li : click) 
	    {
	    	if (Click_C.isEnabled()) 
	    	{
	    		System.out.println("User Click and navigate to last page");
	    		li.click();
	    	}	
	    	else
	    	{
	    		System.out.println("User is on last page");
	    	}
	    }*/
	
		WebElement button = wd.findElement(By.xpath(obj.getProperty(value)));
        if (button.isEnabled()) 
        {
        	System.out.println("button is enable");
        	button.click();
        }
        else
        {
        	System.out.println("button disable");        	
        	//System.out.println("User is on last page");
        }

	}

	/*
	 * @And("^User select \"([^\"]*)\"$") public void user_select(String month)
	 * throws Throwable { clickOn("", ""); sleepWait(1000); clickOn(month, "");
	 * 
	 * }
	 */

	@And("^User enter data for NITVA \"([^\"]*)\"$")
	public void user_enter_data_for_NITVA(String typeValue) throws Throwable {
		sleepWait(500);
		type("txtbox_TypeHere", typeValue);
	}

	@And("^User check NITVA number \"([^\"]*)\"$")
	public void user_check_NITVA_number(String check) throws Throwable {
		sleepWait(500);
		clickOn("btn_TypeHere_click", "");
		sleepWait(500);
		if (wd.findElement(By.xpath("//div[contains(text(),'" + check + "')]")).isDisplayed()) {
			assertTrue(true);
		}
	}

	@And("^User click on sorting on nitva and validate order$")
	public void user_click_on_sorting_on_nitva_and_validate_order() throws Throwable {
		int ColmnCount = wd.findElements(By
				.xpath("//*[@class='d-flex justify-content-between w-100 p-3 list-header font-medium cursor-pointer']"))
				.size();
		int rowCount = wd.findElements(By.xpath(
				"//*[@class='list-fields d-flex justify-content-between w-100 p-3 font-regular cursor-pointer ng-star-inserted']"))
				.size();

		System.out.println("rowCount :" + rowCount);
		System.out.println("ColmnCount :" + ColmnCount);

		String name = wd.findElement(By.xpath("(//span[contains(text(),'10')])[1]")).getText();

		System.out.println(name);

		WebElement errorMessage = wd.findElement(By.xpath("(//span[contains(text(),'10')])[1]"));
		// Assert.assertEquals(errorMessage.getText(),value);

	}

	@And("^User click on sorting on tax payer and validate order$")
	public void user_click_on_sorting_on_tax_payer_and_validate_order() throws Throwable {
		/*
		 * List<Integer> celltext_list = Arrays.asList(celltext);
		 * Collections.sort(celltext_list, Collections.reverseOrder()); int[]
		 * celltext_new = celltext_list.toArray();
		 * 
		 * if(Arrays.equals(celltext_new, celltext)){
		 * System.out.println("Celltext is in descending order"); } else{
		 * System.out.println("Celltext is in ascending order"); }
		 */

	}

	@And("^User click on sorting on business type and validate order$")
	public void user_click_on_sorting_on_business_type_and_validate_order() throws Throwable {

	}

	@And("^User click on sorting on company size and validate order$")
	public void user_click_on_sorting_on_company_size_and_validate_order() throws Throwable {

	}

	@And("^User click on sorting on assesemnt officer and validate order$")
	public void user_click_on_sorting_on_assesemnt_officer_and_validate_order() throws Throwable {

	}

	@And("^User click on sorting on status and validate order$")
	public void user_click_on_sorting_on_status_and_validate_order() throws Throwable {

	}

	@And("^User refresh the page and click on click here$")
	public void user_refresh_the_page_and_click_on_click_here() throws Throwable {
		wd.quit();
		wd = new ChromeDriver();
		wd.manage().window().maximize();
		wd.get("http://103.249.120.58:8044");

	}

}
