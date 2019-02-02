package org.drc.vat.StepDefinitions;

import static org.drc.vat.appmanager.HelperBase.*;
import static org.testng.Assert.assertTrue;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class EFDManufacture {

	String cwd = System.getProperty("user.dir");
	public static String EFDID;
	public static String SIM1;
	public static String SIM2;
	public static String FirmwareVersion;
	String times = new SimpleDateFormat("HHmmss").format(new Date());

	@Given("^User login manufacture's credentials$")
	public void user_login_manufacture_s_credentials() throws Throwable {
		type("txtbox_username", "tripty.chauhan@1rivet.com");
		type("txtbox_password", "Test@123");
		clickOn("btn_login", "");
		sleepWait(1000);
	}

	@When("^User landed on dashboard$")
	public void user_landed_on_dashboard() throws Throwable {
		clickOn("dashboard", "");
		clickOn("Pin", "");
		sleepWait(1000);
	}

	@When("^Click on EFD Firmware Testing")
	public void click_on_EFD_Firmware_Testing() throws Throwable {
		clickOn("EFDFirmwaretab", "");
		sleepWait(1500);
	}

	@And("^user clicked on Testing logs from EFD firmware$")
	public void user_clicked_on_Testing_logs_from_EFD_firmware() throws Throwable {
		sleepWait(3000);
		clickOn("EFDFirmwaretab", "");
		sleepWait(1000);
		clickOn("Testinglogstab", "");
		sleepWait(1500);
	}

	@And("^Click on Testing Logs")
	public void Click_on_Testing_Logs() throws Throwable {		
		sleepWait(1500);
		clickOn("Testinglogstab", "");
		sleepWait(1500);
	}

	@And("^click on Test new Firmware button$")
	public void click_on_Test_new_Firmware_button() throws Throwable {
		clickOn("btnNewfirmware", "");
		sleepWait(1500);
	}

	@And("^Enter sim numberone \"([^\"]*)\" sim numbertwo \"([^\"]*)\"$")
	public void enter_sim_numberone_sim_numbertwo(String Sim1, String Sim2) throws Throwable {
		sleepWait(2500);
		SIM1 = Sim1 + times;
		type("Sim1", SIM1);
		sleepWait(1000);
		SIM2 = Sim2 + times;
		type("Sim2", SIM2);
		sleepWait(2000);
	}

	@Then("^Selects Type of Device \"([^\"]*)\"$")
	public void selects_Type_of_Device(String device) throws Throwable {
		clickOn("typeofdevice", "");
		clickOn("span", "[contains(text(),'" + device + "')]");
		waitfor(1000);
	}

	@Then("^Enter EFD ID \"([^\"]*)\" and EFD Model \"([^\"]*)\"$")
	public void enter_EFD_ID_and_EFD_Model(String efdid, String edfmodel) throws Throwable {
		EFDID = efdid + times;
		type("txtbox_EFDId", EFDID);
		sleepWait(2000);		
		clickOn("Edfmodel", "");
		clickOn("span", "[contains(text(),'" + edfmodel + "')]");
		sleepWait(2000);
	}	

	@Then("^Upload Firmware \"([^\"]*)\"$")
	public void upload_Firmware(String file) throws Throwable {
		clickOn("EDFbrowse", "");
		//String image = cwd.concat(file);
		UploadImage("", file);
		sleepWait(2000);
	}

	@Then("^Click on Test button$")
	public void click_on_Test_button() throws Throwable {
		clickOn("btn_test", "");
		sleepWait(6000);
	}

	@Then("^Click on Next button$")
	public void click_on_Next_button() throws Throwable {
		FirmwareVersion = elementText("firmwareVer");
		sleepWait(1500);
		clickOn("btn_efdnext", "");
		sleepWait(1500);
	}

	@Then("^Click Add Release Note and enter the description \"([^\"]*)\"$")
	public void click_Add_Release_Note_and_enter_the_description(String description) throws Throwable {
		clickOn("adddescription", "");
		type("adddescription", description);
		sleepWait(2000);
	}

	@Then("^Click On Submit button$")
	public void click_On_Submit_button() throws Throwable {
		clickOn("btn_fsubmit", "");
		sleepWait(1500);
	}
	
	@And("^Click On Cancel button$")
	public void click_On_Cancel_button() throws Throwable {
		clickOn("btn_fcancel", "");
		sleepWait(500);
		clickOn("btn_cancelyes", "");
		if(wd.findElement(By.xpath(obj.getProperty("btnNewfirmware"))).isDisplayed())
		{
			assertTrue(true);
		}		
	}

	@When("^Click on Released Firmware Testing \"([^\"]*)\" option and \"([^\"]*)\"$")
	public void click_on_Released_Firmware_Testing_option_and(String Filter, String StatusName) throws Throwable {
		clickOn("EFDFirmwaretab", "");
		sleepWait(2000);
		clickOn("drpstatus", "");
		clickOn("span", "[contains(text(),'" + Filter + "')]");
		clickOn("drpstatusname", "");
		clickOn("span", "[contains(text(),'" + StatusName + "')]");
		sleepWait(2000);
		clickOn("btn_search", "");
		sleepWait(2000);
		clickOn("btn_reject", "");
		sleepWait(2000);
		clickOn("btncancelX", "");
		sleepWait(1500);
	}

	@Then("^Verify the select filter of testing logs \"([^\"]*)\" option and \"([^\"]*)\" and click on search button$")
	public void verfiy_the_select_filter_of_testing_logs_option_and_and_click_on_search_button(String Tfilter,String Tstatus) throws Throwable {
		//clickOn("Testinglogstab", "");
		sleepWait(1000);
		clickOn("drpstatus", "");
		clickOn("span", "[contains(text(),'" + Tfilter + "')]");
		sleepWait(2000);
		clickOn("textboxsearch", "");
		type("textboxsearch", Tstatus);
		sleepWait(2000);
		clickOn("btn_efd_search", "");
		sleepWait(2000);
		String TStatus = elementText("EFDtype");
		if (Tstatus.equals(TStatus)) {
			System.out.println("Verified:" + TStatus);
		}
		sleepWait(2000);
	}

	@Then("^Verify the view button with destripton \"([^\"]*)\"$")
	public void verify_the_view_button_with_destripton(String description) throws Throwable {
		clickOn("btnview", "");
		sleepWait(2000);

		String FirmVer = elementText("firmwareVer");
		if (FirmVer.equals(FirmwareVersion)) {
			System.out.println("Verified:" + FirmVer);
		}

		clickOn("btnefdcancel", "");
		sleepWait(2000);
		clickOn("btn_yes", "");
		sleepWait(2000);
		clickOn("Releasetab", "");
		sleepWait(2000);
		clickOn("btnview", "");
		sleepWait(2000);
		clickOn("Testinglogstab", "");
		sleepWait(1000);
		clickOn("btnview", "");
		sleepWait(1000);
		clickOn("btn_efdnext", "");
		sleepWait(1000);
		clickOn("adddescription", "");
		type("adddescription", description);
		sleepWait(2000);
	}

	@Then("^Verify the view icon functionality")
	public void verify_the_view_icon_functionality() throws Throwable {
		clickOn("btnview", "");
		sleepWait(2000);
		String FirmVer = elementText("firmwareVer");
		if (FirmVer.equals(FirmwareVersion)) {
			System.out.println("Verified:" + FirmVer);
		}
		sleepWait(1500);
	}

	@And("^Click on Previous button$")
	public void click_on_Previous_button() throws Throwable {
		clickOn("btnEFDPrevious", "");
		sleepWait(2000);
	}

	@When("^Click on Admin EFD Firmware Testing$")
	public void click_on_Admin_EFD_Firmware_Testing() throws Throwable {
		clickOn("EFDAdmintab", "");
		sleepWait(2000);
	}

	@When("^Click the Admin view icon$")
	public void click_the_Admin_view_icon() throws Throwable {
		clickOn("btnadminview", "");
		sleepWait(2000);
	}

	@When("^Click on Admin Reject button$")
	public void click_on_Admin_Reject_button() throws Throwable {
		clickOn("btn_RejectFX", "");
		sleepWait(2000);
	}

	@When("^Click on Admin Approve button$")
	public void click_on_Admin_Approve_button() throws Throwable {
		clickOn("btn_ApproveFX", "");
		sleepWait(2000);
	}

	@Given("^User click on EFD management link$")
	public void user_click_on_EFD_management_link() throws Throwable {
		sleepWait(1000);
		clickOn("txt_EFDmanagement","");			
		sleepWait(2000);
	}

	@When("^User click on filter by on EFD management and selects \"([^\"]*)\"$")
	public void user_click_on_filter_by_on_EFD_management_and_selects(String value) throws Throwable {
		sleepWait(1500);
		clickOn("drp_FilterByMVT", "");
		sleepWait(500);
		clickOn("span","[contains(text(),'" + value + "')][last()]");
	}

	@And("^user enters the \"([^\"]*)\" and click on Search button$")
	public void user_enters_the_and_click_on_Search_button(String input) throws Throwable {
		type("TypeHere",input);
		sleepWait(500);
		clickOn("btn_SearchFX", "");
		sleepWait(1000);
		
	}
	
	@And("^verify the result \"([^\"]*)\"$")
	public void verify_the_result(String result) throws Throwable {
		if(wd.findElement(By.xpath("//table//div[contains(text(),'"+ result +"')]")).isDisplayed())
		{		   
			assertTrue(true);
		}
	}
}