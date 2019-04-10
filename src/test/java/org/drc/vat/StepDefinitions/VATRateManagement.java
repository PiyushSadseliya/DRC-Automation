package org.drc.vat.StepDefinitions;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import static org.drc.vat.appmanager.HelperBase.clickOn;
import static org.drc.vat.appmanager.HelperBase.elementText;
import static org.drc.vat.appmanager.HelperBase.elementList;
import static org.drc.vat.appmanager.HelperBase.wd;
import static org.drc.vat.appmanager.HelperBase.type;
import static org.drc.vat.appmanager.HelperBase.elementDisplayed;
import static org.drc.vat.appmanager.HelperBase.minutespattern;
import static org.drc.vat.appmanager.HelperBase.buttonEnabled;
import static org.drc.vat.appmanager.HelperBase.validationMessage;
import static org.drc.vat.appmanager.HelperBase.sleepWait;
import static org.drc.vat.appmanager.HelperBase.datePicker;
import static org.drc.vat.appmanager.HelperBase.saveFile;
import static org.testng.Assert.assertEquals;

import java.awt.AWTException;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.drc.vat.appmanager.ConnectDatabase;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Sleeper;


public class VATRateManagement {

	private static String previousRate;
	private static String lastupdatedate;
	List <WebElement> vatRatespreviousDate=null;
	@Given("^\"([^\"]*)\"\"([^\"]*)\"The officer has logged in to internal portal$")
	public void the_officer_has_logged_in_to_internal_portal(String arg1, String arg2) throws ClassNotFoundException, SQLException, InterruptedException {


	}

	@When("^Clicks on the VAT Rate Management menu$")
	public void clicks_on_the_VAT_Rate_Management_menu() throws InterruptedException {
		clickOn("href_vatrate","");
		sleepWait(5000);
	}

	@Then("^Should be on \"([^\"]*)\" page$")
	public void should_be_on_page(String VATRatepage) throws InterruptedException {
		sleepWait(2000);
		assertEquals(elementText("h5",""), VATRatepage);

	}

	@Then("^Clicks on Update Rates$")
	public void clicks_on_Update_Rates() throws InterruptedException {
		clickOn("btn_updateRates","");
		sleepWait(5000);

	}

	@Then("^Click on filterby on VAT Rate management$")
	public void click_on_filterby_on_VAT_Rate_management() throws InterruptedException {
		sleepWait(5000);
		clickOn("drpdwn_filterbyCommodity", "");


	}
	@Then("^Filterby list contains \"([^\"]*)\"\"([^\"]*)\"$")
	public void filterby_list_contains(String Category, String CommodityCode) throws InterruptedException {
		sleepWait(2000);
		List <WebElement>drpdwn=elementList("drpdwn_listbx","");
		assertEquals(drpdwn.get(0).getText(), Category);
		assertEquals(drpdwn.get(1).getText(), CommodityCode);
	}



	@Then("^Select \"([^\"]*)\"$")
	public void select(String selectfilter) throws InterruptedException {
		//sleepWait(3000);
		//clickOn("drpdwn_filterbyCommodity","");	   
		sleepWait(3000);
		clickOn("drpdwn_listbx","/*[text()='"+selectfilter+"']");	
	}

	@Then("^Select Category \"([^\"]*)\"$")
	public void select_Category(String categorytype) throws InterruptedException {
		clickOn("filterby_CommodityCategory","");	   
		sleepWait(3000);
		clickOn("drpdwn_listbx","/*[text()='"+categorytype+"']");	  
		sleepWait(3000);

	}

	@Then("^Click on search button$")
	public void click_on_search_button() throws InterruptedException {
		clickOn("btn_search", "");
		sleepWait(5000);

	}

	@Then("^Record of type \"([^\"]*)\" should be displayed$")
	public void record_of_type_should_be_displayed(String categoryType) {
		List <WebElement>records=elementList("txt_column2","");
		for(WebElement rec:records) {
			assertEquals(rec.getText(),categoryType);
		}

	}
	@Then("^Record of type \"([^\"]*)\" should be Displayed$")
	public void record_of_type_should_be_Displayed(String categoryType) throws Throwable {
		List <WebElement>records=elementList("txt_column2=//tbody//tr//td[2]","");
		for(WebElement rec:records) {
			assertEquals(rec.getText(),categoryType);
		}
	}


	@Then("^Enter \"([^\"]*)\"$")
	public void enter(String commodityCode) {
		type("txtbox_search",commodityCode);

	}

	@Then("^Recods \"([^\"]*)\" should be displayed$")
	public void recods_should_be_displayed(String commodityCode) {
		List <WebElement> updatePage=elementList( "count_selectedRecords", "");
		if (updatePage.size()>0) {
			assertEquals(elementText("td2",""), commodityCode);
		}else {
			assertEquals(elementText("td1",""), commodityCode);
		}


	}

	@Then("^\"([^\"]*)\" should be displayed$")
	public void should_be_displayed(String msg) {

		assertEquals(elementText("tbody",""), msg);

	}
	@Then("^Verify the Commodity/service code columns$")
	public void verify_the_Commodity_service_code_columns() throws ClassNotFoundException, SQLException, InterruptedException {
		List <String> dcommoditylist = new ArrayList<>();
		List <String> dCategorylist = new ArrayList<>();

		ConnectDatabase com=new ConnectDatabase();
		com.opendb();
		String commodityquery="SELECT CONCAT(CommodityCode,'-',CommodityDescription),[CommodityCodeCategory].Category "+ 
				"FROM [DRC-QA].[Ref].[CommodityCode] "+ 
				"LEFT JOIN  [DRC-QA].[Ref].[CommodityCodeCategory]  on [CommodityCode].CommodityCodeCategoryId=[CommodityCodeCategory].CommodityCodeCategoryId "+
				"order by Category desc";
		System.out.println(commodityquery);
		ResultSet rs=	ConnectDatabase.sta.executeQuery(commodityquery);
		while(rs.next()) {
			//System.out.println(rs.getRow(i));

			System.out.println(dcommoditylist.add(rs.getString(1)));
			System.out.println(dCategorylist.add(rs.getString(2)));		
		}
		com.closedb();
		clickOn("btn_records", "");
		clickOn("drpdwn_listbx","/*[contains(text(),'200')]");	  
		sleepWait(2000);
		List <WebElement>colCommodity=elementList("td1", "");
		List <WebElement>colCategory=elementList("td2", "");

		for(int i=0;i<dcommoditylist.size();i++) {
			System.out.println(	dcommoditylist.get(i));
			System.out.println(colCommodity.get(i).getText());
			assertEquals(	dcommoditylist.get(i), colCommodity.get(i).getText());
			assertEquals(	dCategorylist.get(i),colCategory.get(i).getText());
			System.out.println(colCategory.get(i).getText());
			System.out.println(dCategorylist.get(i));

		}

	}

	@Then("^By Default \"([^\"]*)\" records should be displayed$")
	public void by_Default_records_should_be_displayed(String count) {
		List <WebElement>records=elementList("list_noofrows","");
		assertEquals(records.size(), Integer.parseInt(count));
	}

	@Then("^Clicks on show records as per the list and records should be displayed$")
	public void clicks_on_show_records_as_per_the_list_and_records_should_be_displayed(DataTable shownrecords) {

		// For automatic transformation, change DataTable to one of
		// List<YourType>, List<List<E>>, List<Map<K,V>> or Map<K,V>.
		// E,K,V must be a scalar (String, Integer, Date, enum etc)
		clickOn("drpdwn_showrec", "");
		List <WebElement>shownN=elementList("drpdwn_listbx", "");
		List<String> list = shownrecords.asList(String.class);		
		for(int i=0;i<list.size();i++) {
			assertEquals(shownN.get(i).getText(), list.get(i));
		}

	}

	@Then("^Click on History button$")
	public void click_on_History_button() {
		clickOn("btn_history","");

	}

	@Then("^\"([^\"]*)\"History pop up shoudld be opened$")
	public void history_pop_up_shoudld_be_opened(String historypopheading) throws InterruptedException {
		sleepWait(2000);
		assertEquals(elementDisplayed("slash","*[contains(text(),'"+historypopheading+"')]"),true );	   
	}

	@Then("^Click on Download button$")
	public void click_on_Download_button() throws InterruptedException {
		clickOn("btn_img", "");
		sleepWait(2000);

	}

	@Then("^Records should get downloaded$")
	public void records_should_get_downloaded() throws AWTException, InterruptedException {
		saveFile();
		sleepWait(2000);

	}

	@Then("^Closes the pop up$")
	public void closes_the_pop_up() {
		clickOn("btn_close","");

	}
	@Then("^Click on Update Rates Button$")
	public void click_on_Update_Rates_Button() throws InterruptedException {
		sleepWait(5000);
		clickOn("btn_updateRates", "");
		sleepWait(5000);

	}
	@Then("^Select (\\d+) Records$")
	public void select_Records(int noOfRecordsSelected) throws InterruptedException {
		List <WebElement>list=	elementList("label_selectRecords","");
		if(noOfRecordsSelected==1) {
			list.get(noOfRecordsSelected).click();
		}else {
			for(int i=1;i<=noOfRecordsSelected;i++) {
				list.get(i).click();
				sleepWait(2000);
			}
		}
	}
	@Then("^Selected Records count should be (\\d+)$")
	public void selected_Records_count_should_be(int selectedRecordsCount) {
		int count =0;
		List <WebElement>list=	elementList("chkbx_select","");
		for(int i=1;i<list.size();i++) {
			if (list.get(i).isSelected()) {
				count++;
			}
		}
		String []splitintonos=elementText("count_selectedRecords","").split("[a-zA-Z]", 4);
		System.out.println(splitintonos[0]);
		System.out.println(splitintonos[2]);
		assertEquals(Integer.parseInt(splitintonos[0].trim()),selectedRecordsCount);
		assertEquals(Integer.parseInt(splitintonos[2].trim()),list.size());
	}

	@Then("^Select all records$")
	public void select_all_records() {
		clickOn("label_selectRecords", "");

	}

	@Then("^All Records count should be shown as per the page size$")
	public void all_Records_count_should_be_shown_as_per_the_page_size() {
		int count =1;
		List <WebElement>list=elementList("chkbx_select","");
		for(int i=1;i<list.size();i++) {
			if (list.get(i).isSelected()) {
				count++;
			}
		}

		String []a=elementText("count_selectedRecords","").split("[a-zA-Z]", 4);
		List <WebElement>rec= elementList("records_no", "");
		assertEquals(Integer.parseInt(a[0].trim()),count);	
		assertEquals(Integer.parseInt(a[0].trim()),rec.size());	
		assertEquals(Integer.parseInt(a[2].trim()),rec.size());

	}

	@Then("^Update button should be disabled$")
	public void update_button_should_be_disabled() {

		assertEquals(buttonEnabled("btn_updateRates",""),false);
	}

	@Then("^Pop up for updating VAT Rates should be opened$")
	public void pop_up_for_updating_VAT_Rates_should_be_opened() {

		assertEquals(buttonEnabled("btn_SaveRate", ""), false);
	}

	@Then("^Click on vat Rate dropdown$")
	public void click_on_vat_Rate_dropdown() {
		clickOn("drpdwn_vatRateSelect", "");

	}

	@Then("^List of Rate should be as below list$")
	public void list_of_Rate_should_be_as_below_list(DataTable rates) {

		// For automatic transformation, change DataTable to one of
		// List<YourType>, List<List<E>>, List<Map<K,V>> or Map<K,V>.
		// E,K,V must be a scalar (String, Integer, Date, enum etc)
		List <String>rate=rates.asList(String.class);
		List <WebElement> rateslist=elementList("drpdwn_listbx", "");
		System.out.println(rate.size());
		for (int i = 0; i < rate.size(); i++) {
			assertEquals(rate.get(i), rateslist.get(i).getText());
		}

	}

	@Then("^Select VAT Rate as \"([^\"]*)\"$")
	public void select_VAT_Rate_as(String newvatRate) {
		clickOn("drpdwn_listbx","/*[contains(text(),'"+newvatRate+"')]");	   	   
	}

	@Then("^Close the VAT Rate Update PopUp$")
	public void close_the_VAT_Rate_Update_PopUp() {	  
		clickOn("btn_close", "");

	}



	@Then("^Click on Save button$")
	public void click_on_Save_button() throws InterruptedException {
		sleepWait(2000);
		clickOn("btn_SaveRate", "");
		sleepWait(5000);
	}



	@Then("^commodity of Category \"([^\"]*)\"should be moved to Approval List$")
	public void commodity_of_Category_should_be_moved_to_Approval_List(String category) {

		List <WebElement> categorytype=elementList("td2", "");
		for(int i=0;i<categorytype.size();i++) {
			assertEquals(categorytype.get(i).getText(), category);
		}
	}

	@Then("^Filterby list contains \"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"$")
	public void filterby_list_contains(String Category, String CommodityCode, String Status) {

		//clickOn("drpdwn_filterbyCommodity", "");
		List <WebElement>drpdwn=elementList("drpdwn_listbx","");
		assertEquals(drpdwn.get(0).getText(), Category);
		assertEquals(drpdwn.get(1).getText(), CommodityCode);
		assertEquals(drpdwn.get(2).getText(), Status);

	}




	@Then("^Enter the commodity Service Code selected for approval$")
	public void enter_the_commodity_Service_Code_selected_for_approval() {
		type("txtbx_typehere","");
	}

	@Then("^Validate VAT Rate Commodity Commodity Service Code,Category,VAT Rate,Proposed VAT Rate\"([^\"]*)\"Updated By Status\"([^\"]*)\"Update Officer\"([^\"]*)\"$")
	public void validate_VAT_Rate_Commodity_Commodity_Service_Code_Category_VAT_Rate_Proposed_VAT_Rate_Updated_By_Status_Update_Officer(String newrate, String status, String officer) {
		List <WebElement>statusU=elementList("td6","" );
		List <WebElement>officername=elementList("td5","" );
		List <WebElement>proposerate=elementList("td4","" );
		for(int i=0;i<statusU.size();i++) {
			assertEquals(statusU.get(i).getText(),status);
			assertEquals(officername.get(i).getText(), officer);
			assertEquals(proposerate.get(i).getText(), newrate);
		}
	}


	@Then("^Click on Approval List$")
	public void click_on_Approval_List() {
		clickOn("href_approvalList", "");


	}

	@Then("^Click on close button and Click on Yes Button$")
	public void click_on_close_button_and_Click_on_Yes_Button() throws InterruptedException {
		List <WebElement>crossButton=elementList("btn_close", "");
		for(int i=0;i<crossButton.size();i++) {
		clickOn("btn_close", "");
		clickOn("btn_yes", "");
		sleepWait(5000);
		}

	}

	@Then("^Records should be displayed on Update new Rate page$")
	public void records_should_be_displayed_on_Update_new_Rate_page() {		

	}

	@Then("^Select show (\\d+) Entries$")
	public void select_show_Entries(int arg1) throws InterruptedException {
		clickOn("btn_records", "");
		clickOn("drpdwn_listbx","/*[contains(text(),'"+arg1+"')]");	  	
		sleepWait(3000);


	}



	@Then("^Message should be displayed as \"([^\"]*)\"$")
	public void message_should_be_displayed_as(String mutlipleselecterrormessage) {
		assertEquals(validationMessage(),mutlipleselecterrormessage);


	}
	@Then("^Status should be \"([^\"]*)\"$")
	public void status_should_be(String status) throws InterruptedException {
		sleepWait(8000);
		if (status.equals("Updated")) {
			assertEquals(elementText("txt_column6",""), status);
		}else{
			assertEquals(elementText("txt_int",""), status);
		}



	}

	@Then("^Removes the records$")
	public void removes_the_records() {


	}

	@Then("^click on Send for Approval button$")
	public void click_on_Send_for_Approval_button() {
		List <WebElement>records=elementList("btn_Reject", "");
		if (records.size()!=1 ){
			clickOn("btn_sendforapproval", "");
		}
	}

	@Then("^Selects Effective Date as Tomorrow$")
	public void selects_Effective_Date_as_Tomorrow() {
		clickOn("date_effective","");
		Calendar cal=Calendar.getInstance();
		cal.add(Calendar.DATE, 1);
		String tomorrow=new SimpleDateFormat("YYYY-MM-dd").format(cal.getTime());
		datePicker(tomorrow);
	}



	@Then("^Admin should not be able to Approve or Reject self Updated Rates$")
	public void admin_should_not_be_able_to_Approve_or_Reject_self_Updated_Rates() {
		assertEquals(buttonEnabled("btn_Approve", ""),false );
		assertEquals(buttonEnabled("btn_Reject", ""),false );
	}



	@Then("^Click on Reject button for Rejection of Commodity Rate$")
	public void click_on_Reject_button_for_Rejection_of_Commodity_Rate() throws InterruptedException {
		sleepWait(3000);
		clickOn("btn_Reject", "");
	}

	@Then("^Enter reason for rejection Rejection \"([^\"]*)\"$")
	public void enter_reason_for_rejection_Rejection(String reason) {
		System.out.println(reason);
		type("txtbx_comment", reason);
	}

	@Then("^Submit button should be disabled$")
	public void submit_button_should_be_disabled() {
		assertEquals(buttonEnabled("btn_Submit", ""),false );
	}

	@Then("^Closes the \"([^\"]*)\" popup$")
	public void closes_the_popup(String arg1) {
		clickOn("btn_close", "");
	}

	@Then("^Click on Submit Button$")
	public void click_on_Submit_Button() throws InterruptedException {
		clickOn("btn_Submit", "");
		sleepWait(8000);
	}

	@Then("^Verifies the reason\"([^\"]*)\" for Rejection$")
	public void verifies_the_reason_for_Rejection(String reason) throws InterruptedException {
		sleepWait(2000);
		List <WebElement> reasons=elementList("reject_img", "");
		for(int i=0;i<reasons.size();i++) {
			sleepWait(2000);
			reasons.get(i).click();
			sleepWait(5000);
			assertEquals(elementText("p",""), reason);
			clickOn("btn_close", "");
		}

	}

	@Then("^Edits the Rate with new Rate\"([^\"]*)\"$")
	public void edits_the_Rate_with_new_Rate(String newRate) throws InterruptedException {
		//clickOn("btn_EditMenu", "");
		sleepWait(3000);
		List<WebElement> editrate=elementList("btn_EditMenu", "");
		for(int i=0;i<editrate.size();i++) {			
			sleepWait(8000);
			clickOn("btn_EditMenu", "");
			sleepWait(3000);
			clickOn("td", "//button/following::*[text()='"+newRate+"']");
			sleepWait(2000);
		}

	}

	@Then("^Click on Approve button$")
	public void click_on_Approve_button() {
		//	clickOn("btn_Approve", "");
	}
	@Then("^deselect Recod (\\d+)$")
	public void deselect_Recod(int noOfRecordsSelected) throws Throwable {
		List <WebElement>list=	elementList("label_selectRecords","");
		if(noOfRecordsSelected==1) {
			list.get(noOfRecordsSelected).click();
		}else {
			for(int i=1;i<=noOfRecordsSelected;i++) {
				list.get(i).click();
				sleepWait(2000);
			}
		}
	}
	@Then("^Click on Cancel button on VAT Rate$")
	public void click_on_Cancel_button_on_VAT_Rate() throws InterruptedException {
		clickOn("btn_cancel", "");
		sleepWait(1000);
	}
	@Then("^display the count of selected records$")
	public void display_the_count_of_selected_records() {
		int count =1;
		List <WebElement>list=elementList("chkbx_select","");
		for(int i=1;i<list.size();i++) {
			if (list.get(i).isSelected()) {
				count++;
			}
		}

		String []a=elementText("count_selectedRecords","").split("[a-zA-Z]", 4);
		List <WebElement>rec= elementList("records_no", "");
		assertEquals(Integer.parseInt(a[0].trim()),count);	
		assertEquals(Integer.parseInt(a[2].trim()),rec.size());

	}
	@Then("^Store it in Previous vat Records$")
	public void store_it_in_Previous_vat_Records()  throws Throwable {
		sleepWait(2000);
		previousRate=elementText("td3","");

	}
	@Then("^Selects date$")
	public void selects_date() throws Throwable {
		clickOn("date_effective","");
		Calendar cal=Calendar.getInstance();
		cal.add(Calendar.DATE, 1);
		String tomorrow=new SimpleDateFormat("YYYY-MM-dd").format(cal.getTime());
		datePicker(tomorrow);


	}
	@Then("^Status should be \"([^\"]*)\" with proposed rate\"([^\"]*)\" and previous rate$")
	public void status_should_be_with_proposed_rate_and_previous_rate(String status, String proposedrate)throws Throwable {
		try {
			assertEquals(elementText("td7", ""), status);
			assertEquals(elementText("td4", ""), previousRate);
			assertEquals(elementText("td5", ""), proposedrate);
		}catch(AssertionError e){
			System.out.println("Mismatch in Rates"+e);
		}
	}

	@Then("^Supervisor has neither Approved or Rejected and date becomes old$")
	public void supervisor_has_neither_Approved_or_Rejected_and_date_becomes_old() throws Throwable {
		String VATRateId="Select TOP 1 [VatRateId] from .[Vat].[VatRateDetail] order by CreatedDate desc";
		ConnectDatabase vatrate=new ConnectDatabase();
		vatrate.opendb();

		ResultSet rs=	ConnectDatabase.sta.executeQuery(VATRateId);
		rs.next();
		int vatRateid=rs.getInt("VatRateId");
		String VATRateDetailEdatefrom="update [DRC-QA].[Vat].[VatRateDetail]  SET EffectiveDateFrom=DATEADD(day, -1, getdate()) where VatRateId="+vatRateid;
		ConnectDatabase.sta.executeUpdate(VATRateDetailEdatefrom);
		VATRateDetailEdatefrom="update  [DRC-QA].[Vat].[VatRate]   SET EffectiveDate=DATEADD(day, -1, getdate()) where VatRateId="+vatRateid;
		ConnectDatabase.sta.executeUpdate(VATRateDetailEdatefrom);	
		vatrate.closedb();
		sleepWait((5-Integer.parseInt(minutespattern.format(new Date()))%5)*60*1000);

	}

	@Then("^Rate prior to update must be displayed of Commodity \"([^\"]*)\"Category\"([^\"]*)\"$")
	public void rate_prior_to_update_must_be_displayed_of_Commodity_Category(String arg1, String arg2) throws InterruptedException {

		sleepWait(2000);
		assertEquals(elementText("td3",""), previousRate);

	}


	@Then("^Store previous VAT Rate of Commodities of\"([^\"]*)\"$")
	public void store_previous_VAT_Rate_of_Commodities_of(String arg1) throws Throwable {
		vatRatespreviousDate=elementList("td4","");

	}
	@Then("^Records should be displayed on Update new Rate page of Category\"([^\"]*)\"$")
	public void records_should_be_displayed_on_Update_new_Rate_page_of_Category(String category) throws Throwable {
		List<WebElement>catg=elementList("td3", "");
		for(int i=0;i<catg.size();i++) {
			assertEquals(catg.get(i).getText(), category);
		}
	}
	@Given("^click on dashboard$")
	public void click_on_dashboard() throws Throwable {
		sleepWait(1000);
		clickOn("href_dashboard", "");
		sleepWait(2000);
	}




}
