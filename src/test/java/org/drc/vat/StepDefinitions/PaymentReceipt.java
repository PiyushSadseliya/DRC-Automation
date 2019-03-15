package org.drc.vat.StepDefinitions;

import cucumber.api.java.en.Given;
import static org.drc.vat.appmanager.HelperBase.clickOn;
import static org.drc.vat.appmanager.HelperBase.elementText;
import static org.drc.vat.appmanager.HelperBase.getLatestFilefromDir;
import static org.drc.vat.appmanager.HelperBase.login;
import static org.drc.vat.appmanager.HelperBase.saveFile;
import static org.drc.vat.appmanager.HelperBase.softAssert;
import static org.drc.vat.appmanager.HelperBase.wd;
import static org.testng.Assert.assertEquals;

import java.text.SimpleDateFormat;

import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;

import static org.drc.vat.appmanager.xls_file.xls;
import static org.drc.vat.appmanager.HelperBase.sleepWait;
import org.openqa.selenium.By;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

/*
 * To 
 */
public class PaymentReceipt {

	@Given("^The user has declared the VAT Liability for the Month of \"([^\"]*)\" usernmame\"([^\"]*)\"password\"([^\"]*)\"$")
	public void the_user_has_declared_the_VAT_Liability_for_the_Month_of_usernmame_password(String arg1, String arg2,
			String arg3) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		login(arg2, arg3);
	}

	@When("^User clicks on view button from pay column for month\"([^\"]*)\"$")
	public void user_clicks_on_view_button_from_pay_column_for_month(String arg1) throws Throwable {

		clickOn("h6", "//div[contains(text(),'" + arg1 + "')]");
		SimpleDateFormat format = new SimpleDateFormat("dd-MMM-yyyy");
		int monthNumber = format.parse("01-" + arg1 + "-" + "2018").getMonth();

		if (arg1.equalsIgnoreCase("january")) {
			clickOn("Vbtn_jan", "");

		}
		if (arg1.equalsIgnoreCase("february")) {

			clickOn("Vbtn_feb", "");
		}
		if (arg1.equalsIgnoreCase("march")) {

			clickOn("Vbtn_mar", "");
		}
		if (arg1.equalsIgnoreCase("april")) {

			clickOn("Vbtn_apr", "");
		}
		if (arg1.equalsIgnoreCase("may")) {

			clickOn("Vbtn_may", "");
		}
		if (arg1.equalsIgnoreCase("june")) {
			clickOn("Vbtn_jun", "");
		}
		if (arg1.equalsIgnoreCase("july")) {

			clickOn("Vbtn_jul", "");
		}
		if (arg1.equalsIgnoreCase("august")) {

			clickOn("Vbtn_aug", "");
		}
		if (arg1.equalsIgnoreCase("september")) {

			clickOn("Vbtn_sep", "");
		}
		if (arg1.equalsIgnoreCase("october")) {

			clickOn("Vbtn_oct", "");
		}
		if (arg1.equalsIgnoreCase("november")) {

			clickOn("Vbtn_nov", "");
		}
		if (arg1.equalsIgnoreCase("december")) {

			clickOn("Vbtn_dec", "");

		}
	}

	@Then("^user must be on Payment Receipt \"([^\"]*)\" Details of Taxpayer Name\"([^\"]*)\"Nitva\"([^\"]*)\"Email-id\"([^\"]*)\"MobileNo\"([^\"]*)\"Address\"([^\"]*)\" Total Words should be \"([^\"]*)\"Details of Deposit records \"([^\"]*)\" Period\"([^\"]*)\"vat\"([^\"]*)\"Interest\"([^\"]*)\"Penalty\"([^\"]*)\"LateFee\"([^\"]*)\"TotalAmount\"([^\"]*)\"$")
	public void user_must_be_on_Payment_Receipt_Details_of_Taxpayer_Name_Nitva_Email_id_MobileNo_Address_Total_Words_should_be_Details_of_Deposit_records_Period_vat_Interest_Penalty_LateFee_TotalAmount(
			String bankname, String name, String nitva, String email, String mobile, String address, String words,
			String arg8, String period, String vat, String intere, String penalty, String ltfee, String totalamt)
			throws Throwable {
		sleepWait(2000);
		clickOn("pymtreceipt_btn_view", "");
		sleepWait(5000);
		saveFile();
		sleepWait(5000);
		PDDocument firstDocument = new PDDocument();
		PDFTextStripper pdfStripper = new PDFTextStripper();
		String text = pdfStripper.getText(firstDocument.load(getLatestFilefromDir()));
		System.out.println(text);
		sleepWait(3000);
		assertEquals(toLower(text).contains(toLower(bankname)), true);
	//	assertEquals(toLower(text).contains(toLower(name)), true);
		//assertEquals(toLower(text).contains(toLower(nitva)), true);
		assertEquals(toLower(text).contains(toLower(email)), true);
		assertEquals(toLower(text).contains(toLower(mobile)), true);
		// assertEquals(toLower(text).contains(toLower(address)), true);
		assertEquals(toLower(text).contains(toLower(words)), true);
	//	assertEquals(toLower(text).contains(toLower(period)), true);
		assertEquals(toLower(text).contains(toLower(vat)), true);
		assertEquals(toLower(text).contains(toLower(intere)), true);
		assertEquals(toLower(text).contains(toLower(penalty)), true);
		assertEquals(toLower(text).contains(toLower(ltfee)), true);
		assertEquals(toLower(text).contains(toLower(totalamt)), true);
	}

	String toLower(String txt) {
		return txt.toLowerCase();
	}

}
