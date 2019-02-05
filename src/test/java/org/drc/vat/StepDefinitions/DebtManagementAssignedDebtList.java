package org.drc.vat.StepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import static org.drc.vat.appmanager.HelperBase.clickOn;
import static org.drc.vat.appmanager.HelperBase.wd;
import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertNotEquals;
import static org.drc.vat.appmanager.HelperBase.elementText;
import static org.drc.vat.appmanager.HelperBase.type;
import static org.drc.vat.appmanager.HelperBase.pageSource;
import static org.drc.vat.appmanager.HelperBase.datePicker;
import static org.drc.vat.appmanager.HelperBase.sleepWait;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.testng.asserts.SoftAssert;

/*
 * 
 * the officer assigns collection officer to collect the debt
 * and can assign the officer accordingly  collect the debt
 * 
 */
public class DebtManagementAssignedDebtList {
	static int recordNo=0;
	static boolean isRecordSet=true;
	public static String debtcaseid;
	

	@Given("^\"([^\"]*)\"\"([^\"]*)\"DGI \"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"should be logged in to the internal portal$")
	public void dgi_should_be_logged_in_to_the_internal_portal(String arg1, String arg2, String arg3, String arg4,
			String arg5) throws Throwable {

		List<WebElement> vat = wd.findElements(By.xpath("//h3[contains(text(),'VAT')]"));
		if (!wd.getCurrentUrl().contains("8068")) {
			if (vat.size() > 0) {
				vat.get(0).click();
				sleepWait(3000);
				List<WebElement> sure = wd.findElements(By.xpath("//a[contains(text(),'Sure')]"));

			}
			sleepWait(3000);
			if (wd.getWindowHandles().size() > 0) {
				wd.switchTo().window(wd.getWindowHandles().toArray()[1].toString());
			}
		}
		sleepWait(5000);

	}

	@When("^Clicked on assigned amount for \"([^\"]*)\"$")
	public void clicked_on_assigned_amount_for(String arg1) throws Throwable {
		if (arg1.equals("24 Months and Above")) {
			clickOn("txt_24monthsup", "//following::a[2]");

		}
		if (arg1.equals("13-24 Months")) {
			clickOn("txt_13to24months", "//following::a[2]");

		}
		if (arg1.equals("7-12 Months")) {
			clickOn("txt_7to12months", "//following::a[2]");
		}
		if (arg1.equals("4-6 Months")) {

			clickOn("txt_4to6months", "//following::a[2]");

		}
		if (arg1.equals("0-3 Months")) {
			clickOn("txt_0to3months", "//following::a[2]");

		}

	}

	@Then("^List of cases assgined to the officer should be displayed$")
	public void list_of_cases_assgined_to_the_officer_should_be_displayed() throws Throwable {
		sleepWait(3000);
		assertEquals(elementText("txt_heading", ""), "Case Management");
		List<WebElement> ele = wd.findElements(By.xpath("//tbody//tr"));
		assertNotEquals(ele.size(), 0);

	}

	@Then("^click on filter by dropdown TaxPayer\"([^\"]*)\"$")
	public void click_on_filter_by_dropdown_TaxPayer(String arg1) throws Throwable {
		clickOn("txt_filterby", "/following::span");
		sleepWait(1000);
		clickOn("slash", "*[name()='ng-dropdown-panel']//span[contains(text(),'Taxpayer')]");
		sleepWait(2000);
		type("txtbx_typehere", arg1);
		clickOn("btn_search_case", "");
		sleepWait(3000);
		List<WebElement>rec=wd.findElements(By.xpath("//tbody//tr"));
		
		for(int i=1;i<=rec.size();i++) {
			System.out.println(wd.findElement(By.xpath("//tr["+i+"]//td[3]")).getText());
			if(wd.findElement(By.xpath("//tr["+i+"]//td[3]")).getText().trim().equalsIgnoreCase("debt collection")&&isRecordSet) {
				recordNo=i;
				System.out.println(i);
				isRecordSet=false;
			
			}
			
		}
	}
	@Then("^click on previous button from debt case$")
	public void click_on_previous_button_from_debt_case() throws Throwable {
	debtcaseid=elementText("txt_cseid","");
clickOn("btn_previous_associatedbank", "");
sleepWait(5000);

	}

	@Then("^click on filter by dropdown CaseID$")
	public void click_on_filter_by_dropdown_CaseID() throws Throwable {
		clickOn("txt_filterby", "/following::span");
		sleepWait(1000);
		clickOn("slash", "*[name()='ng-dropdown-panel']//span[contains(text(),'Case Id')]");
		sleepWait(2000);
		type("txtbx_typehere", debtcaseid);
		clickOn("btn_search_case", "");
		sleepWait(5000);
		clickOn("btn_casemanage", "");
		clickOn("btn_casemanageview", "");
	}

	@Then("^Manage options should display wtih options\"([^\"]*)\"\"([^\"]*)\"$")
	public void manage_options_should_display_wtih_options(String view, String reassign) throws Throwable {
		wd.findElement(By.xpath("//tr["+recordNo+"]//td[12]//button")).click();
		sleepWait(3000);
		wd.findElement(By.xpath("//tr["+recordNo+"]//td[12]//button//following::a[1]")).getText();
		assertEquals(wd.findElement(By.xpath("//tr["+recordNo+"]//td[12]//button//following::a[1]")).getText().trim(), view);
		assertEquals(wd.findElement(By.xpath("//tr["+recordNo+"]//td[12]//button//following::a[2]")).getText().trim(), reassign);

	}

	@Then("^user selects \"([^\"]*)\" Debt collection case\"([^\"]*)\" page should be displayed of Taxpayername\"([^\"]*)\"$")
	public void user_selects_Debt_collection_case_page_should_be_displayed_of_Taxpayername(String arg1, String arg2,String arg3) throws Throwable {
		wd.findElement(By.xpath("//tr["+recordNo+"]//td[12]//button//following::a[1]")).click();
				sleepWait(2000);
		assertEquals(wd.findElement(By.xpath("//*[contains(text(),'Debt Collection Case')]")).getText().equalsIgnoreCase(arg2), true);
		assertEquals(wd.findElement(By.xpath("//span[@class='mr-2 ng-star-inserted']")).getText(), arg3);
		clickOn("debt_collection_prev", "");
		sleepWait(3000);
		assertEquals(elementText("txt_heading", ""), "Case Management");

	}

	@Then("^User select officer\"([^\"]*)\" to Reassign$")
	public void user_select_officer_to_Reassign(String officername) throws Throwable {
		wd.findElement(By.xpath("//tr["+recordNo+"]//td[12]//button//following::a[2]")).click();;
		//clickOn("href_reAssignCase", "");
		sleepWait(2000);
		//clickOn("btn_reassignViewof", "");
		wd.findElement(By.xpath("//tr["+recordNo+"]//td[9]//span")).click();;
		sleepWait(4000);
		clickOn("drpdown_panel", "[text()='" + officername + "']");
		//wd.findElement(By.xpath("//tr["+recordNo+"]//*[name()='ng-dropdown-panel']//span[text()='" + officername + "']"));
		sleepWait(3000);
		//clickOn("check_newassignof", "");
		wd.findElement(By.xpath("//tr["+recordNo+"]//td[12]//a[1]/span")).click();;
		sleepWait(2000);
		//assertEquals(pageSource().contentEquals("Officer reassigned successfully"), true);

	}

	@When("^clicked on Case Management Module must be on Case Management Module List of cases assigned to the officer should be displayed$")
	public void clicked_on_Case_Management_Module_must_be_on_Case_Management_Module_List_of_cases_assigned_to_the_officer_should_be_displayed()
			throws Throwable {
		clickOn("href_dashboards", "");
		clickOn("nav_href_caseManagement", "");
		sleepWait(3000);
		assertEquals(elementText("txt_heading", ""), "Case Management");
		List<WebElement> ele = wd.findElements(By.xpath("//tbody//tr"));
		assertNotEquals(ele.size(), 0);

	}

	@Then("^user can filter by\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"$")
	public void user_can_filter_by(String arg1, String arg2, String arg3, String arg4, String arg5, String arg6)
			throws Throwable {
		sleepWait(2000);
		clickOn("txt_filterby", "/following::span");
		sleepWait(2000);
		List<WebElement> ele = wd.findElements(By.xpath("//div[@role='option']"));
		System.out.println(ele.size());
		System.out.println(ele.get(0).getText());
		assertEquals(ele.get(0).getText(), arg1);
		assertEquals(ele.get(1).getText(), arg2);
		assertEquals(ele.get(2).getText(), arg3);
		assertEquals(ele.get(3).getText(), arg4);
		assertEquals(ele.get(4).getText(), arg5);
		assertEquals(ele.get(5).getText(), arg6);

	}

	@Then("^user filter using \"([^\"]*)\" and from\"([^\"]*)\" to date\"([^\"]*)\"$")
	public void user_filter_using_and_from_to_date(String arg1, String arg2, String arg3) throws Throwable {
		clickOn("txt_filterby", "/following::span");	
		sleepWait(2000);
		wd.findElement(By.xpath("//*[name()='ng-dropdown-panel']//span[contains(text(),'"+arg1+"')]")).click();


	}

	@Then("^enter the \"([^\"]*)\" data \"([^\"]*)\" in type here$")
	public void enter_the_data_in_type_here(String arg1, String arg2) throws Throwable {
		type("txtbox_search", arg2);
		clickOn("btn_search_case", "");
	}

	@Then("^for \"([^\"]*)\"data  Message \"([^\"]*)\" should be displayed$")
	public void for_data_Message_should_be_displayed(String arg1, String arg2) throws Throwable {
		if (arg1.equals("invalid")) {
			//System.out.println(elementText("txt_norec", ""));
			assertEquals(elementText("txt_norec", ""), arg2);
		}
	}

	@Then("^for valid records containing Case id should be \"([^\"]*)\" with creation date\"([^\"]*)\" \"([^\"]*)\"$")
	public void for_valid_records_containing_Case_id_should_be_with_creation_date(String arg1, String arg2, String arg3)
			throws Throwable {
		System.out.println(elementText("td", "[1]"));
		System.out.println(elementText("td", "[5]"));
		System.out.println(elementText("td", "[2]"));
		assertEquals(elementText("td", "[1]"), arg1);
		assertEquals(elementText("td", "[5]"), arg2);
		assertEquals(elementText("td", "[2]"), arg3);
	}

	@Then("^Select from date\"([^\"]*)\" and to date\"([^\"]*)\"$")
	public void select_from_date_and_to_date(String arg1, String arg2) throws Throwable {
		clickOn("txt_filterby", "/following::span");
		clickOn("select", "//span[text()='Case Type']");
		clickOn("div", "[text()='From: ']//preceding::ng-select[1]//child::span");
		clickOn("div", "[text()='From: ']//preceding::ng-select[1]//span[text()='Debt Collection']");
		clickOn("from_calendar", "");
		datePicker(arg1);
		clickOn("to_calendar", "");
		datePicker(arg2);
		clickOn("btn_search_case", "");

	}

	@Then("^creation date should be between from date\"([^\"]*)\" and to date\"([^\"]*)\"$")
	public void creation_date_should_be_between_from_date_and_to_date(String arg1, String arg2) throws Throwable {

		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		Date date1 = sdf.parse(arg1);
		Date date2 = sdf.parse(arg2);
		System.out.println(date1);
		System.out.println(date2);
		List<WebElement> rec = wd.findElements(By.xpath("//tbody//td[5]"));
		for (int i = 0; i < rec.size(); i++) {
			// cdate =mm/dd/yy
			String cdate = rec.get(i).getText();
			System.out.println(cdate);
			// ndate ->new DAte
			String ndate = "2018" + "-" + cdate.substring(0, 2) + "-" + cdate.substring(3, 5);

			// ncdate ->type date -Creation date field
			Date ncdate = sdf.parse(ndate);

			System.out.println(ncdate);
			System.out.println(ncdate.equals(date1));
			assertEquals(ncdate.equals(date1), true);
			System.out.println(ncdate.after(date1));
			assertEquals(ncdate.after(date1), true);
			System.out.println(ncdate.equals(date2));
			assertEquals(ncdate.equals(date2), true);
			System.out.println(ncdate.before(date2));
			assertEquals(ncdate.before(date2), true);
			// DAte Comparision Creation date to be done afterwards
			if (ncdate.equals(date1) || ncdate.after(date1)) {
				assertEquals(true, true);
			}
			if (ncdate.before(date2) || ncdate.equals(date2)) {
				assertEquals(true, true);
			}
		}

	}

	@Then("^For future date in To Date it should be disabled\"([^\"]*)\"\"([^\"]*)\"$")
	public void for_future_date_in_To_Date_it_should_be_disabled(String arg1, String arg2) throws Throwable {
		clickOn("from_calendar", "");
		datePicker(arg1);
		clickOn("to_calendar", "");
		datePicker(arg2);
	}

	@Then("^Case Type should be in ascending Order$")
	public void case_Type_should_be_in_ascending_Order() throws Throwable {
		List<WebElement> records = wd.findElements(By.xpath("//tbody/tr"));
		String a = wd.findElement(By.xpath("//tbody/tr[1]/td[2]")).getText();
		String b = wd.findElement(By.xpath("//tbody/tr[" + records.size() + "]/td[2]")).getText();
		// System.out.println(a);
		// System.out.println(b);

		if (a.compareToIgnoreCase(b) <= 0) {
			assertEquals(true, true);
		} else {
			assertEquals(true, false, "Not in Ascending Order");
		}
	}

	@Then("^Click on \"([^\"]*)\" column it should be in descending order$")
	public void click_on_column_it_should_be_in_descending_order(String col) throws Throwable {
		clickOn("slash", "table//span[contains(text(),'" + col + "')]");
		sleepWait(3000);
		if (col.equals("Case Type")) {

			List<WebElement> records = wd.findElements(By.xpath("//tbody/tr"));
			String a = wd.findElement(By.xpath("//tbody/tr[1]/td[3]")).getText();
			String b = wd.findElement(By.xpath("//tbody/tr[" + records.size() + "]/td[3]")).getText();
			if (a.compareToIgnoreCase(b) >= 0) {
				assertEquals(true, true);
			} else {
				assertEquals(true, false, "Not in Descending Order");
			}
		}
		if (col.equals("City")) {	

			List<WebElement> records = wd.findElements(By.xpath("//tbody/tr"));
			String a = wd.findElement(By.xpath("//tbody/tr[1]/td[4]")).getText();
			String b = wd.findElement(By.xpath("//tbody/tr[" + records.size() + "]/td[4]")).getText();
			System.out.println(a.compareToIgnoreCase(b));
			if (a.compareToIgnoreCase(b) >= 0) {
				assertEquals(true, true);
			} else {
				assertEquals(true, false, "Not in Descending Order");
			}
		}
		if (col.equals("Ageing (Days)")) {

			List<WebElement> records = wd.findElements(By.xpath("//tbody/tr"));
			long a = new Long(wd.findElement(By.xpath("//tbody/tr[1]/td[8]")).getText());
			long b = new Long(wd.findElement(By.xpath("//tbody/tr[" + records.size() + "]/td[8]")).getText());
			System.out.println(a);
			System.out.println(b);
			assertEquals(true, desccomp(a, b));
		}
		if (col.equals("Tax Officer")) {

			List<WebElement> records = wd.findElements(By.xpath("//tbody/tr"));
			String a = wd.findElement(By.xpath("//tbody/tr[1]/td[9]")).getText();
			String b = wd.findElement(By.xpath("//tbody/tr[" + records.size() + "]/td[9]")).getText();
			System.out.println(a.compareToIgnoreCase(b));
			if (a.compareToIgnoreCase(b) >= 0) {
				assertEquals(true, true);
			} else {
				assertEquals(true, false, "Not in Descending Order");
			}
		}
		if (col.equals("Status")) {

			List<WebElement> records = wd.findElements(By.xpath("//tbody/tr"));
			String a = wd.findElement(By.xpath("//tbody/tr[1]/td[10]")).getText();
			String b = wd.findElement(By.xpath("//tbody/tr[" + records.size() + "]/td[10]")).getText();
			if (a.compareToIgnoreCase(b) >= 0) {
				assertEquals(true, true);
			} else {
				assertEquals(true, false, "Not in Descending Order");
			}
		}


	}

	private boolean asccomp(long a, long b) {
		// TODO Auto-generated method stub
		return a <= b;
	}

	private boolean desccomp(long a, long b) {
		// TODO Auto-generated method stub
		return a >= b;
	}

	@Then("^Records contains details of displayed CaseId\"([^\"]*)\"CaseType\"([^\"]*)\"$")
	public void records_contains_details_of_displayed_CaseId_CaseType(String arg1, String arg2) throws Throwable {
		assertEquals(wd.findElement(By.xpath("//tbody/tr[1]/td[1]")).getText(), arg1);
		assertEquals(wd.findElement(By.xpath("//tbody/tr[1]/td[2]")).getText(), arg2);
	}

	@Then("^Click on \"([^\"]*)\" column it should be in ascending order$")
	public void click_on_column_it_should_be_in_ascending_order(String col) throws Throwable {
		clickOn("slash", "table//span[contains(text(),'" + col + "')]/following::span");
		sleepWait(2000);
		if (col.equals("Case Type")) {
			List<WebElement> records = wd.findElements(By.xpath("//tbody/tr"));
			String a = wd.findElement(By.xpath("//tbody/tr[1]/td[3]")).getText();
			String b = wd.findElement(By.xpath("//tbody/tr[" + records.size() + "]/td[3]")).getText();
			if (a.compareToIgnoreCase(b) <= 0) {
				assertEquals(true, true);
			} else {
				assertEquals(true, false, "Not in ascending Order");
			}
		}
		if (col.equals("City")) {
			List<WebElement> records = wd.findElements(By.xpath("//tbody/tr"));
			String a = wd.findElement(By.xpath("//tbody/tr[1]/td[4]")).getText();
			String b = wd.findElement(By.xpath("//tbody/tr[" + records.size() + "]/td[4]")).getText();
			if (a.compareToIgnoreCase(b) <= 0) {
				assertEquals(true, true);
			} else {
				assertEquals(true, false, "Not in ascending Order");
			}
		}
		if (col.equals("Ageing (Days)")) {
			List<WebElement> records = wd.findElements(By.xpath("//tbody/tr"));
			long a = new Long(wd.findElement(By.xpath("//tbody/tr[1]/td[8]")).getText());
			System.out.println(a);
			long b = new Long(wd.findElement(By.xpath("//tbody/tr[" + records.size() + "]/td[8]")).getText());
			System.out.println(b);
			assertEquals(true, asccomp(a, b));
		}
		if (col.equals("Tax Office")) {
			List<WebElement> records = wd.findElements(By.xpath("//tbody/tr"));
			String a = wd.findElement(By.xpath("//tbody/tr[1]/td[9]")).getText();
			String b = wd.findElement(By.xpath("//tbody/tr[" + records.size() + "]/td[9]")).getText();
			if (a.compareToIgnoreCase(b) <= 0) {
				assertEquals(true, true);
			} else {
				assertEquals(true, false, "Not in ascending Order");
			}
		}
		if (col.equals("Status")) {
			List<WebElement> records = wd.findElements(By.xpath("//tbody/tr"));
			String a = wd.findElement(By.xpath("//tbody/tr[1]/td[10]")).getText();
			String b = wd.findElement(By.xpath("//tbody/tr[" + records.size() + "]/td[10]")).getText();
			if (a.compareToIgnoreCase(b) <= 0) {
				assertEquals(true, true);
			} else {
				assertEquals(true, false, "Not in ascending Order");
			}
		}


	}

	@Then("^Records contains Case id\"([^\"]*)\" created date\"([^\"]*)\"\"([^\"]*)\"$")
	public void records_contains_Case_id_created_date(String arg1, String arg2, String arg3) throws Throwable {
		List<WebElement> records = wd.findElements(By.xpath("//tbody/tr"));
		for (int i = 0; i < records.size(); i++) {
			String caseid = elementText("slash", "tbody/tr/td[" + i + "]");
			if (caseid.equals(arg1)) {
				assertEquals(elementText("slash", "tbody/tr[" + i + "]/td[5]"), arg2);
				assertEquals(elementText("slash", "tbody/tr[" + i + "]/td[2]"), arg3);
			}

		}
	}

}
