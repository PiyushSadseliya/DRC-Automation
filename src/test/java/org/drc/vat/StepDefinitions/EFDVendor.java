package org.drc.vat.StepDefinitions;

import static org.drc.vat.appmanager.HelperBase.clickOn;
import static org.drc.vat.appmanager.HelperBase.datePicker;
import static org.drc.vat.appmanager.HelperBase.sleepWait;
import static org.drc.vat.appmanager.HelperBase.type;
import static org.drc.vat.appmanager.HelperBase.waitFor;
import static org.drc.vat.appmanager.HelperBase.wd;

import java.sql.ResultSet;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.concurrent.TimeUnit;

import org.drc.vat.appmanager.*;
import org.drc.vat.appmanager.VerifyEmail;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class EFDVendor {
	public static String Username;
	public static String NITVA;
	public static String NitvaNo;
	public static String NIF;
	public static String vendoremail;
	public static String VendorEmail;
	public static String PersonEmail;
	public static String Vmobile;
	public static String Cmobile;
	String times = new SimpleDateFormat("HHmmsss").format(new Date());
	String extra = new SimpleDateFormat("HHmm").format(new Date());
	String emailid = new SimpleDateFormat("MMMMddhh").format(new Date());
	public static String EFDID;
	public static String SIM1;
	public static String SIM2;

	@Given("^User login vendor's credentials$")
	public void user_login_vendor_s_credentials() throws Throwable {
		type("txtbox_username", "tripty.chauhan@1rivet.com");
		type("txtbox_password", "Test@123");
		clickOn("btn_login", "");
		sleepWait(1000);
	}

	@And("^User Login with vendor's credentials$")
	public void user_Login_with_vendor_s_credentials() throws Throwable {
		sleepWait(2000);
		/*wd.close();
		Thread.sleep(1000);
		wd = new ChromeDriver();
		wd.manage().window().maximize();
		wd.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);*/
		VerifyEmail RU = new VerifyEmail();
		String Password = RU.VerifyEmail(vendoremail);
		clickOn("link_returntologin", "");
		type("txtbox_username", vendoremail);		
		type("txtbox_password", Password);
		sleepWait(2000);
		clickOn("btn_login", "");
	}

	@Then("^Click on vendor registration tab$")
	public void click_on_vendor_registration_tab() throws Throwable {
		sleepWait(1000);
		clickOn("EFDVendortab", "");
		sleepWait(1000);
	}

	@Then("^Click on Register vendor$")
	public void click_on_Register_vendor() throws Throwable {
		sleepWait(2000);
		//waitFor("vendorregtitle");
		clickOn("btnRegisterVendor", "");
		sleepWait(1000);
	}

	@Then("^Enters NIF number \"([^\"]*)\"$")
	public void enters_NIF_number(String nif) throws Throwable {
		// String times = new SimpleDateFormat("HHmmss").format(new Date());
		// NITVA = times.concat(NIF);

		type("txtbox_NIF", nif);
		System.out.println(NITVA);

		// NIF = nif + times;
		type("txtbox_NIF", NITVA);
		System.out.println(NITVA);

	}

	@Then("^Enters NIF Registration Date \"([^\"]*)\"$")
	public void enters_NIF_Registration_Date(String NIFDate) throws Throwable {
		clickOn("EFDnifregdate", "");
		datePicker(NIFDate);
	}

	@Then("^Enter the NITVA$")
	public void enter_the_NITVA() throws Throwable {
		type("EDFNitva", NitvaNo);
		System.out.println(NitvaNo);

	}

	@Then("^Enter the NITVA \"([^\"]*)\"$")
	public void enter_the_NITVA(String NitvaNo1) throws Throwable {
		// NitvaNo = NitvaNo + times;
		type("EDFNitva", NitvaNo);
		System.out.println(NitvaNo);
	}

	@Then("^Enter Vendor Information \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\"$")
	public void enter_Vendor_Information(String vendorname, String bussinessname, String VEmail, String VMobileNumber,
			String Website) throws Throwable {
		type("txt_Vendorname", vendorname);
		type("EFDbusinessname", bussinessname);
		sleepWait(3000);
		String VMobNo = times.concat(VMobileNumber);
		type("txtmobileno1", VMobNo);
		sleepWait(3000);
		vendoremail = times.concat(VEmail);
		type("venemail", vendoremail);
		sleepWait(3000);
		type("venwebsite", Website);
	}

	@Then("^Enter Contact information \"([^\"]*)\",\"([^\"]*)\" , \"([^\"]*)\"$")
	public void enter_Contact_information(String Nameofperson, String CMobileNumber, String CEmail) throws Throwable {
		type("conctactname", Nameofperson);
		sleepWait(3000);
		String daytime = new SimpleDateFormat("HHmmss").format(new Date());
		String CMobnum = daytime.concat(CMobileNumber);
		type("txtmobileno2", CMobnum);
		sleepWait(3000);
		String Cemail = daytime.concat(CEmail);
		type("contactemail", Cemail);
		sleepWait(3000);
	}

	@Then("^Enters Business Address Details \"([^\"]*)\" , \"([^\"]*)\" , \"([^\"]*)\" ,\"([^\"]*)\" ,\"([^\"]*)\"$")
	public void enters_Business_Address_Details(String AddressLine1, String AddressLine2, String Province, String City,
			String ZipCode) throws Throwable {
		type("businessAdd1", AddressLine1);
		sleepWait(3000);
		type("businessAdd2", AddressLine2);
		clickOn("drp_province", "");
		clickOn("span", "[contains(text(),'" + Province + "')]");
		sleepWait(2000);
		clickOn("drp_city", "");
		clickOn("span", "[contains(text(),'" + City + "')]");
		sleepWait(1000);
		type("txtbox_zipcode", ZipCode);
	}

	@Then("^Click on Cancel button$")
	public void click_on_Cancel_button() throws Throwable {
		waitFor("vendorregtitle");
		clickOn("btnefdcancel", "");
		waitFor("EFDconfirmbox");
		clickOn("btn_yes", "");
		sleepWait(1000);
	}

	@Then("^Click on Register button$")
	public void click_on_Register_button() throws Throwable {
		waitFor("vendorregtitle");
		clickOn("btnvenRegister", "");
		sleepWait(3000);
	}

	/*
	 * #Vendor Portal #EFd Registration LIst
	 * 
	 * sleepWait(3000);
		clickOn("drp_filter", "");
		clickOn("span", "[contains(text(),'" + Filter + "')]");
		type("txt_search", NITVA);
	 */

	@Given("^User login vendor credentials$")

	public void user_login_vendor_credentials() throws Throwable {
		type("txtbox_username", "vendor52@mailinator.com");
		type("txtbox_password", "Vendor@6210");
		clickOn("btn_login", "");
		sleepWait(1000);
	}

	@Then("^Click on EFD registration list tab$")
	public void click_on_EFD_registration_list_tab() throws Throwable {
		clickOn("EFDreglisttab", "");
		sleepWait(2000);
	}

	@Then("^Click on EFD Registration button$")
	public void click_on_EFD_Registration_button() throws Throwable {
		waitFor("labelreglist");
		clickOn("btnEFDReg", "");
		sleepWait(2000);
	}

	@Then("^Click on NITVA Cancel button$")
	public void click_on_NITVA_Cancel_button() throws Throwable {
		clickOn("btn_nitvacancel", "");
		sleepWait(2000);
	}

	@Then("^Enter NITVA no \"([^\"]*)\"$")
	public void enter_NITVA_no(String txtNITVAno) throws Throwable {
		//type("txtboxnitva", NitvaNo);
		ConnectDatabase CD = new ConnectDatabase();
		CD.opendb();
		String NITVANumber = "select NITVA from vat.VuUsers where RegisteredUserId in("
				+ "select RegisteredUserId from ref.RegisteredUsers where " + "Email ='" + vendoremail + "')";

		ResultSet rs = CD.sta.executeQuery(NITVANumber);
		System.out.println(rs);
		while (rs.next()) {
			String NITVA1 = (rs.getString("NITVANumber")).trim();

			type("txt_NITVA", NITVA1);
		}
	}
	
	@Then("^Select Type of Device \"([^\"]*)\" , EFD Model \"([^\"]*)\"$")
	public void selects_Type_of_Device_EFD_Model(String device, String edfmodel) throws Throwable {
		clickOn("drptypeofdevice", "");
		clickOn("span", "[contains(text(),'" + device + "')]");
		clickOn("drpEdfmodel", "");
		clickOn("span", "[contains(text(),'" + edfmodel + "')]");
		sleepWait(2000);
	}

	@Then("^Enter EFD ID \"([^\"]*)\"$")
	public void enter_EFD_ID(String efdid) throws Throwable {
		// EFDID = times.concat(efdid);
		EFDID = efdid + times;
		type("txtbox_EFDId", EFDID);
		sleepWait(2000);
	}

	@Then("^Click on NITVA Search button$")
	public void click_on_NITVA_Search_button() throws Throwable {
		clickOn("btn_nitvasrch", "");
		sleepWait(2000);
	}

	@Then("^Click on Registration List close button$")
	public void click_on_Registration_List_close_button() throws Throwable {
		clickOn("btn_Vclose", "");
		sleepWait(2000);
	}

	@Then("^Enters  BusinessAddress \"([^\"]*)\"$")
	public void enters_BusinessAddress(String Baddress) throws Throwable {
		clickOn("drpefdaddress", "");
		clickOn("span", "[contains(text(),'" + Baddress + "')]");

	}

	/*@Then("^Click on Test button$")
	public void click_on_Test_button() throws Throwable {
		clickOn("btn_Vtest", "");
		sleepWait(2000);
	}*/

	@Then("^Click on Registration List Register button$")
	public void click_on_Registration_List_Register_button() throws Throwable {
		waitFor("efdtoastmsg");
		clickOn("btn_Vreg", "");
		sleepWait(1000);
	}

	@When("^Clicks on Search Button$")
	public void clicks_on_Search_Button() throws Throwable {
		clickOn("btn_search", "");
	}
	
	@And("^user closed the current browser$")
	public void user_closed_the_current_browser() throws Throwable {
		sleepWait(1000);
		wd.close();
		Thread.sleep(1000);
		wd = new ChromeDriver();
		wd.manage().window().maximize();
		wd.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
	}
}