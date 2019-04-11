package org.drc.vat.StepDefinitions;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import static org.drc.vat.appmanager.HelperBase.*;
import static org.drc.vat.appmanager.HelperBase.clickOn;
import static org.drc.vat.appmanager.HelperBase.elementText;
import static org.drc.vat.appmanager.HelperBase.elementList;
import static org.drc.vat.appmanager.HelperBase.type;
import static org.drc.vat.appmanager.HelperBase.isElementPresent;
import static org.drc.vat.appmanager.HelperBase.buttonEnabled;
import static org.drc.vat.appmanager.HelperBase.sleepWait;
import static org.drc.vat.appmanager.HelperBase.datePicker;
import static org.testng.Assert.assertEquals;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Sleeper;
//import bsh.org.objectweb.asm.Type;

public class VATRateManagement {
	@Given("^\"([^\"]*)\"\"([^\"]*)\"The officer has logged in to internal portal$")
	public void the_officer_has_logged_in_to_internal_portal(String arg1, String arg2) {

	}

	@When("^Clicks on the VAT Rate Management menu$")
	public void clicks_on_the_VAT_Rate_Management_menu() throws InterruptedException {
		clickOn("href_vatrate", "");

	}

	@Then("^Should be on \"([^\"]*)\" page$")
	public void should_be_on_page(String VATRatepage) throws InterruptedException {
		sleepWait(2000);
		assertEquals(elementText("h5", ""), VATRatepage);

	}

	@Then("^Clicks on Update Rates$")
	public void clicks_on_Update_Rates() throws InterruptedException {
		clickOn("btn_updateRates", "");
		sleepWait(5000);

	}

	@Then("^Click on filterby on VAT Rate management$")
	public void click_on_filterby_on_VAT_Rate_management() {
		// clickOn("drpdwn_filterbyCommodity", "");

	}

	@Then("^Filterby list contains \"([^\"]*)\"\"([^\"]*)\"$")
	public void filterby_list_contains(String Category, String CommodityCode) throws InterruptedException {
		sleepWait(2000);
		List<WebElement> drpdwn = elementList("drpdwn_listbx", "");
		assertEquals(drpdwn.get(0).getText(), Category);
		assertEquals(drpdwn.get(1).getText(), CommodityCode);
	}

	@Then("^Select \"([^\"]*)\"$")
	public void select(String selectfilter) throws InterruptedException {
		sleepWait(3000);
		clickOn("drpdwn_filterbyCommodity", "");
		sleepWait(3000);
		clickOn("drpdwn_listbx", "/*[text()='" + selectfilter + "']");
	}

	@Then("^Select Category \"([^\"]*)\"$")
	public void select_Category(String categorytype) throws InterruptedException {
		clickOn("filterby_CommodityCategory", "");
		sleepWait(3000);
		clickOn("drpdwn_listbx", "/*[text()='" + categorytype + "']");
		sleepWait(3000);

	}

	@Then("^Click on search button$")
	public void click_on_search_button() throws InterruptedException {
		clickOn("btn_search", "");
		sleepWait(5000);

	}

	@Then("^Record of type \"([^\"]*)\" should be displayed$")
	public void record_of_type_should_be_displayed(String categoryType) {
		List<WebElement> records = elementList("txt_column2", "");
		for (WebElement rec : records) {
			assertEquals(rec.getText(), "categoryType");
		}

	}

	@Then("^Enter \"([^\"]*)\"$")
	public void enter(String commodityCode) {
		type("txtbox_search", commodityCode);

	}

	@Then("^Recods \"([^\"]*)\" should be displayed$")
	public void recods_should_be_displayed(String commodityCode) {
		assertEquals(elementText("txt_date", ""), commodityCode);

	}

	@Then("^\"([^\"]*)\" should be displayed$")
	public void should_be_displayed(String msg) {

		assertEquals(elementText("tbody", ""), msg);

	}

	@Then("^Verify the Commodity/service code,VAT Rate,Last Updated Date columns$")
	public void verify_the_Commodity_service_code_VAT_Rate_Last_Updated_Date_columns() {

	}

	@Then("^By Default \"([^\"]*)\" records should be displayed$")
	public void by_Default_records_should_be_displayed(String count) {
		List<WebElement> records = elementList("list_noofrows", "");
		assertEquals(records.size(), count);
	}

	@Then("^Clicks on show records as per the list and records should be displayed$")
	public void clicks_on_show_records_as_per_the_list_and_records_should_be_displayed(DataTable shownrecords) {

		// For automatic transformation, change DataTable to one of
		// List<YourType>, List<List<E>>, List<Map<K,V>> or Map<K,V>.
		// E,K,V must be a scalar (String, Integer, Date, enum etc)
		List<WebElement> shownN = elementList("drpdwn_listbx", "");
		List<String> list = shownrecords.asList(String.class);
		for (int i = 0; i < list.size(); i++) {
			assertEquals(shownN.get(i).getText(), list.get(i));
		}

	}

	@Then("^Click on History button$")
	public void click_on_History_button() throws InterruptedException {
		clickOn("btn_history", "");

	}

	@Then("^\"([^\"]*)\"History pop up shoudld be opened$")
	public void history_pop_up_shoudld_be_opened(String historypopheading) {
		assertEquals(isElementPresent("slash", "*[contains(text(),'" + historypopheading + "')]"), true);
	}

	@Then("^Click on Download button$")
	public void click_on_Download_button() throws InterruptedException {
		clickOn("btn_img", "");

	}

	@Then("^Records should get downloaded$")
	public void records_should_get_downloaded() {

	}

	@Then("^Closes the pop up$")
	public void closes_the_pop_up() throws InterruptedException {
		clickOn("btn_close", "");

	}

	@Then("^Click on Update Rates Button$")
	public void click_on_Update_Rates_Button() throws InterruptedException {
		clickOn("btn_updateRates", "");

	}

	@Then("^Select (\\d+) Records$")
	public void select_Records(int noOfRecordsSelected) {
		List<WebElement> list = elementList("label_selectRecords", "");
		if (noOfRecordsSelected > 1) {
			list.get(noOfRecordsSelected).click();
		} else {
			for (int i = 1; i <= noOfRecordsSelected; i++) {
				list.get(i).click();
			}
		}
	}

	@Then("^Selected Records count should be (\\d+)$")
	public void selected_Records_count_should_be(int selectedRecordsCount) {
		int count = 0;
		List<WebElement> list = elementList("chkbx_select", "");
		for (int i = 1; i <= list.size(); i++) {
			if (list.get(i).isSelected()) {
				count++;
			}
		}

		String[] splitintonos = elementText("count_selectedRecords", "").split("[a-zA-Z]", 4);
		System.out.println(splitintonos[0]);
		System.out.println(splitintonos[2]);
		assertEquals(Integer.parseInt(splitintonos[0]), selectedRecordsCount);
		assertEquals(Integer.parseInt(splitintonos[2]), list.size());
	}

	@Then("^Select record$")
	public void select_all_records() throws InterruptedException {
		clickOn("label_selectRecord", "");

	}

	@Then("^All Records count should be shown as per the page size$")
	public void all_Records_count_should_be_shown_as_per_the_page_size() {
		int count = 0;
		List<WebElement> list = elementList("chkbx_select", "");
		for (int i = 1; i <= list.size(); i++) {
			if (list.get(i).isSelected()) {
				count++;
			}
		}

		String[] a = elementText("count_selectedRecords", "").split("[a-zA-Z]", 4);
		List<WebElement> rec = elementList("records_no", "");
		assertEquals(Integer.parseInt(a[0]), count);
		assertEquals(Integer.parseInt(a[0]), rec.size());
		assertEquals(Integer.parseInt(a[2]), rec.size());

	}

	@Then("^Update button should be disabled$")
	public void update_button_should_be_disabled() {

		assertEquals(buttonEnabled("btn_updateRates", ""), false);
	}

	@Then("^Pop up for updating VAT Rates should be opened$")
	public void pop_up_for_updating_VAT_Rates_should_be_opened() {

		assertEquals(buttonEnabled("btn_SaveRate", ""), false);
	}

	@Then("^Click on vat Rate dropdown$")
	public void click_on_vat_Rate_dropdown() throws InterruptedException {
		clickOn("drpdwn_vatRateSelect", "");

	}

	@Then("^List of Rate should be as below list$")
	public void list_of_Rate_should_be_as_below_list(DataTable rates) {

		// For automatic transformation, change DataTable to one of
		// List<YourType>, List<List<E>>, List<Map<K,V>> or Map<K,V>.
		// E,K,V must be a scalar (String, Integer, Date, enum etc)
		List<String> rate = rates.asList(String.class);
		List<WebElement> rateslist = elementList("drpdwn_listbx", "");
		for (int i = 0; i < rate.size(); i++) {
			assertEquals(rate.get(i), rateslist.get(i).getText());
		}

	}

	@Then("^Select VAT Rate as \"([^\"]*)\"$")
	public void select_VAT_Rate_as(String newvatRate) throws InterruptedException {
		clickOn("drpdwn_listbx", "/*[contains(text(),'" + newvatRate + "')]");
	}

	@Then("^Close the VAT Rate Update PopUp$")
	public void close_the_VAT_Rate_Update_PopUp() throws InterruptedException {
		clickOn("btn_close", "");

	}

	@Then("^Click on Save button$")
	public void click_on_Save_button() throws InterruptedException {
		clickOn("btn_SaveRate", "");
		sleepWait(10000);
	}

	@When("^has selected first commodity to update$")
	public void has_selected_first_commodity_to_update() {

	}

	@Then("^Commodity List for Approval should be displayed$")
	public void commodity_List_for_Approval_should_be_displayed() {

	}

	@Then("^commodity should be moved to Approval List$")
	public void commodity_should_be_moved_to_Approval_List() {

	}

	@Then("^Filterby list contains \"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"$")
	public void filterby_list_contains(String Category, String CommodityCode, String Status)
			throws InterruptedException {

		clickOn("drpdwn_filterbyCommodity", "");
		List<WebElement> drpdwn = elementList("drpdwn_listbx", "");
		assertEquals(drpdwn.get(0).getText(), Category);
		assertEquals(drpdwn.get(1).getText(), CommodityCode);
		assertEquals(drpdwn.get(1).getText(), Status);

	}

	@Then("^Select the commidity Category selected for approval$")
	public void select_the_commidity_Category_selected_for_approval() {
		// clickOn("drpdwn_listbx","/*[contains(text(),'"++"')]");

	}

	@Then("^Commodity of Category should be listed accordingly$")
	public void commodity_of_Category_should_be_listed_accordingly() {

	}

	@Then("^Enter the commodity Service Code selected for approval$")
	public void enter_the_commodity_Service_Code_selected_for_approval() {
		type("txtbx_typehere", "");
	}

	@Then("^Validate VAT Rate Commodity Commodity Service Code,Category,VAT Rate,Proposed VAT Rate\"([^\"]*)\"Updated By Status\"([^\"]*)\"Update Officer\"([^\"]*)\"$")
	public void validate_VAT_Rate_Commodity_Commodity_Service_Code_Category_VAT_Rate_Proposed_VAT_Rate_Updated_By_Status_Update_Officer(
			String arg1, String arg2, String arg3) {

	}

	@Then("^\"([^\"]*)\" should be Displayed$")
	public void should_be_Displayed(String arg1) {

	}

	@Then("^Click on Approval List$")
	public void click_on_Approval_List() throws InterruptedException {
		clickOn("href_approvalList", "");

	}

	@Then("^Click on close button and Click on Yes Button$")
	public void click_on_close_button_and_Click_on_Yes_Button() throws InterruptedException {
		clickOn("btn_close", "");
		clickOn("btn_yes", "");

	}

	@Then("^Records should be displayed on Update new Rate page$")
	public void records_should_be_displayed_on_Update_new_Rate_page() {

	}

	@Then("^Select show (\\d+) Entries$")
	public void select_show_Entries(int arg1) throws InterruptedException {
		clickOn("btn_records", "");
		clickOn("drpdwn_listbx", "/*[contains(text(),'" + arg1 + "')]");

	}

	/*
	 * @Then("^Message should be displayed as \"([^\"]*)\"$") public void
	 * message_should_be_displayed_as(String mutlipleselecterrormessage)throws
	 * InterruptedException { assertEquals(validationMessage(),
	 * mutlipleselecterrormessage);
	 * 
	 * }
	 */
	@Then("^Status should be \"([^\"]*)\"$")
	public void status_should_be(String status) {
		if (status.equals("Approval Pending")) {
			assertEquals(elementText("txt_column6", ""), status);
		} else {
			assertEquals(elementText("txt_int", ""), status);
		}

	}

	@Then("^Removes the records$")
	public void removes_the_records() {

	}

	@Then("^click on Send for Approval button$")
	public void click_on_Send_for_Approval_button() throws InterruptedException {
		clickOn("btn_sendforapproval", "");

	}

	@Then("^Selects Effective Date as Tomorrow$")
	public void selects_Effective_Date_as_Tomorrow() throws InterruptedException {
		clickOn("date_effective", "");
		Calendar cal = Calendar.getInstance();
		cal.add(Calendar.DATE, 1);
		String tomorrow = new SimpleDateFormat("YYYY-MM-dd").format(cal.getTime());
		datePicker(tomorrow);

	}

	@Then("^Admin should not be able to Approve or Reject self Updated Rates$")
	public void admin_should_not_be_able_to_Approve_or_Reject_self_Updated_Rates() {
		assertEquals(buttonEnabled("btn_Approve", ""), false);
		assertEquals(buttonEnabled("btn_Reject", ""), false);
	}

	@Then("^Click on Reject button for Rejection of Commodity Rate$")
	public void click_on_Reject_button_for_Rejection_of_Commodity_Rate() throws InterruptedException {
		clickOn("btn_Reject", "");
	}

	@Then("^Enter reason for rejection Rejection \"([^\"]*)\"$")
	public void enter_reason_for_rejection_Rejection(String reason) {
		type("txtbx_comment", reason);
	}

	@Then("^Submit button should be disabled$")
	public void submit_button_should_be_disabled() {
		assertEquals(buttonEnabled("btn_Submit", ""), false);
	}

	@Then("^Closes the \"([^\"]*)\" popup$")
	public void closes_the_popup(String arg1) throws InterruptedException {
		clickOn("btn_close", "");
	}

	@Then("^Click on Submit Button$")
	public void click_on_Submit_Button() throws InterruptedException {
		clickOn("btn_Submit", "");
	}

	@Then("^Verifies the reason\"([^\"]*)\" for Rejection$")
	public void verifies_the_reason_for_Rejection(String reason) {
		// List elementList("txt_int", "");
	}

	@Then("^Edits the Rate with new Rate\"([^\"]*)\"$")
	public void edits_the_Rate_with_new_Rate(String arg1) throws InterruptedException {
		clickOn("btn_EditMenu", "");
	}

	@Then("^Click on Approve button$")
	public void click_on_Approve_button() throws InterruptedException {
		clickOn("btn_Approve", "");
		sleepWait(4000);
	}

}
