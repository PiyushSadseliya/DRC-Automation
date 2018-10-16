package org.drc.vat.StepDefinitions;

import cucumber.api.java.en.Given;
import static org.drc.vat.appmanager.HelperBase.clickOn;
import static org.drc.vat.appmanager.HelperBase.elementText;
import static org.drc.vat.appmanager.HelperBase.softAssert;
import static org.drc.vat.appmanager.HelperBase.wd;
import static org.testng.Assert.assertEquals;

import org.openqa.selenium.By;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class PaymentReceipt {
	String receiptno;

	@Given("^The user has declared the VAT Liability and has done the payment for period January & March$")
	public void the_user_has_declared_the_VAT_Liability_and_has_done_the_payment_for_period_January_March() throws Throwable {
	      
	       
	}

	@When("^User clicks on view button from pay column$")
	public void user_clicks_on_view_button_from_pay_column() throws Throwable {
	      clickOn("btn_view_rec","");
	       
	}

	@Then("^user must be on Payment Receipt \"([^\"]*)\"$")
	public void user_must_be_on_Payment_Receipt(String arg1) throws Throwable {
		assertEquals(wd.findElement(By.xpath("//tbody/tr["+arg1+"]/td[1]")).getText(),arg1);
	       
	}

	@Then("^Payment Receipt must have the details of Receipt No, Bill Generated On$")
	public void payment_Receipt_must_have_the_details_of_Receipt_No_Bill_Generated_On() throws Throwable {
		assertEquals(elementText("txt_totalpay",""),receiptno);
		
	       
	}

	@Then("^Paymnet Particulars must have the details of Transaction No & Name of The Bank\"([^\"]*)\"$")
	public void paymnet_Particulars_must_have_the_details_of_Transaction_No_Name_of_The_Bank(String arg1) throws Throwable {
		assertEquals(elementText("txt_banem",""),arg1);
	       
	}

	@Then("^Details of Taxpayer Name\"([^\"]*)\"Nitva\"([^\"]*)\"Email-id\"([^\"]*)\"MobileNo\"([^\"]*)\"Address\"([^\"]*)\"$")
	public void details_of_Taxpayer_Name_Nitva_Email_id_MobileNo_Address(String arg1, String arg2, String arg3, String arg4, String arg5) throws Throwable {
		assertEquals(elementText("txt_nitva",""),arg1);
		assertEquals(elementText("txt_email",""),arg1);
		assertEquals(elementText("txt_mob",""),arg1);
		assertEquals(elementText("txt_name",""),arg1);
		assertEquals(elementText("txt_add",""),arg1);
		
	       
	}

	@Then("^Details of Deposit records \"([^\"]*)\" Period\"([^\"]*)\"vat\"([^\"]*)\"Interest\"([^\"]*)\"Penalty\"([^\"]*)\"LateFee\"([^\"]*)\"TotalAmount\"([^\"]*)\"$")
	public void details_of_Deposit_records_Period_vat_Interest_Penalty_LateFee_TotalAmount(String arg1, String arg2, String arg3, String arg4, String arg5, String arg6, String arg7) throws Throwable {
	      
	       
	}




	@Then("^Total Words should be \"([^\"]*)\"$")
	public void total_Words_should_be(String arg1) throws Throwable {
		assertEquals(elementText("txt_totalpaywords",""),arg1);
	       
	}

	@Then("^Mode of Payment \"([^\"]*)\" must be displayed$")
	public void mode_of_Payment_must_be_displayed(String arg1) throws Throwable {
	      
		assertEquals(elementText("txt_pymtmode",""),arg1);
	}


}
