package org.drc.vat.StepDefinitions;

import static org.drc.vat.appmanager.HelperBase.clickOn;
import static org.drc.vat.appmanager.HelperBase.login;
import static org.drc.vat.appmanager.HelperBase.softAssert;
import static org.drc.vat.appmanager.HelperBase.elementText;
import static org.drc.vat.appmanager.HelperBase.wd;
import static org.drc.vat.appmanager.HelperBase.sleepWait;
import static org.drc.vat.appmanager.HelperBase.elementDisplayed;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertNotEquals;
import static org.drc.vat.appmanager.xls_file.xls;
import java.text.SimpleDateFormat;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
/*
 * Tax Bill payment to view the tax details of monthwise vat liability amount to be paid and Total VAT Amount to be paid through over the counter on Net Banking Method
 * 
 * 
 */
public class TaxBillPayment {


	

@Given("^\"([^\"]*)\"\"([^\"]*)\"The User has logged in the DRC Tax Payer Portal with \"([^\"]*)\"\"([^\"]*)\" and has declared for the month of\"([^\"]*)\"$")
public void the_User_has_logged_in_the_DRC_Tax_Payer_Portal_with_and_has_declared_for_the_month_of(String arg1, String arg2, String arg3, String arg4, String arg5) throws Throwable {
//login(arg3, arg4);
	
}

@Then("^clicks on pay button of period\"([^\"]*)\"\"([^\"]*)\"$")
public void clicks_on_pay_button_of_period(String month, String year)  throws Throwable {
	sleepWait(1000);
	clickOn("h6","//div[contains(text(),'"+month+"')]");
	SimpleDateFormat format = new SimpleDateFormat("dd-MMM-yyyy");
	int monthNumber = format.parse("01-" + month + "-" + year).getMonth();

   	 clickOn("div","[@id='collapseOne"+monthNumber+"']//button[@title='Pay']");

       
}

@Then("^click on proceed button on Tax Calculation page\"([^\"]*)\"$")
public void click_on_proceed_button_on_Tax_Calculation_page(String arg1) throws Throwable {
	sleepWait(2000);	
	 assertEquals(elementText("h5",""), "Tax Calculation");  
	clickOn("btn_proceed","");
	sleepWait(2000);
	
       
}

@Then("^chooses \"([^\"]*)\" Payment Method$")
public void chooses_Payment_Method(String arg1) throws Throwable {
	sleepWait(1000);
	 assertEquals(elementText("heading_pymtmethod",""), "Payment Method");  
	if(arg1.equals("over the counter")) {
		clickOn("radio_overthecounter","");
		sleepWait(1000);
	}
	if(arg1.equals("net banking")) {
		clickOn("radio_netbanking","");
		 assertEquals(elementText("txt_selectbanks",""), "Select From Popular Banks");
	
		
	}
	
	
   
       
}

@Then("^Verifies the Detaisl of TaxPayer NITVA \"([^\"]*)\" emailid\"([^\"]*)\"mobile no \"([^\"]*)\"name\"([^\"]*)\"Address\"([^\"]*)\"$")
public void verifies_the_Detaisl_of_TaxPayer_NITVA_emailid_mobile_no_name_Address(String arg1, String arg2, String arg3, String arg4, String arg5) throws Throwable {
	sleepWait(3000);
	 assertEquals(elementText("txt_billno",""),elementText("txt_barcode",""));
	 assertEquals(elementText("txt_nitva",""),arg1);
	 assertEquals(elementText("txt_email",""),arg2);
	 assertEquals(elementText("txt_mobile",""),arg3);
	 assertEquals(elementText("txt_name",""),arg4);
	 assertEquals(elementText("txt_add",""),arg5);
       
}
@Then("^Verifies the Detaisl of TaxPayer NITVA \"([^\"]*)\" emailid\"([^\"]*)\"mobile no \"([^\"]*)\"name\"([^\"]*)\"Address\"([^\"]*)\"duedate\"([^\"]*)\"$")
public void verifies_the_Detaisl_of_TaxPayer_NITVA_emailid_mobile_no_name_Address_duedate(String arg1, String arg2, String arg3, String arg4, String arg5, String arg6) throws Throwable {
	sleepWait(3000);
	 assertEquals(elementText("txt_billno",""),elementText("txt_barcode",""));
	 //System.out.println(elementText("txt_billno",""));
	//System.out.println(elementText("txt_barcode",""));
	 assertEquals(elementText("txt_nitva",""),arg1);
	 //	System.out.println(elementText("txt_nitva","")+arg1);
	 assertEquals(elementText("txt_email",""),arg2);
	//System.out.println(elementText("txt_email","")+arg2);
	 assertEquals(elementText("txt_mobile",""),arg3);
	//System.out.println(elementText("txt_email","")+arg3);
	 assertEquals(elementText("txt_name",""),arg4);
	//System.out.println(elementText("txt_name","")+arg4);
	 assertEquals(elementText("txt_add",""),arg5);
	//System.out.println(elementText("txt_add","")+arg5);
///	 assertEquals(elementText("txt_duedate",""),arg6);
	//System.out.println(elementText("txt_duedate","")+arg6);
	
}

@Then("^Verifies the liability details Period\"([^\"]*)\"VAT\"([^\"]*)\"Interest\"([^\"]*)\"Penalty\"([^\"]*)\"LateFee\"([^\"]*)\"TotalAmount\"([^\"]*)\"total Amount Words\"([^\"]*)\"$")
public void verifies_the_liability_details_Period_VAT_Interest_Penalty_LateFee_TotalAmount_total_Amount_Words(String arg1, String arg2, String arg3, String arg4, String arg5, String arg6, String arg7) throws Throwable {

	 assertEquals(elementText("txt_lperiod",""),arg1);
	 //System.out.println(elementText("txt_lperiod","")+arg1);
	 assertEquals(elementText("txt_lvat",""),arg2);
	 //System.out.println(elementText("txt_lvat","")+arg2);
	 assertEquals(elementText("txt_linterest",""),arg3);
	 //System.out.println(elementText("txt_linterest","")+arg3);
	 assertEquals(elementText("txt_penalty",""),arg4);
	 //System.out.println(elementText("txt_penalty","")+arg4);
	 assertEquals(elementText("txt_ltfee",""),arg5);
	 //System.out.println(elementText("txt_ltfee","")+arg5);;
	 assertEquals(elementText("txt_ltotal",""),arg6);
	 //System.out.println(elementText("txt_ltotal","")+arg6);
	 assertEquals(elementText("txt_ltotalwords",""),arg7);
	 //System.out.println(elementText("txt_ltotalwords","")+arg7);
}

@Then("^Verifies Beneficiary Bank Details BeneficiaryName\"([^\"]*)\"account number\"([^\"]*)\"Bank name\"([^\"]*)\"Branch Code\"([^\"]*)\"$")
public void verifies_Beneficiary_Bank_Details_BeneficiaryName_account_number_Bank_name_Branch_Code(String arg1, String arg2, String arg3, String arg4) throws Throwable {
   
	 assertEquals(elementText("txt_Benfname",""),arg1);
	 //System.out.println(elementText("txt_Benfname","")+arg1);
	 assertEquals(elementText("txt_Benfacno",""),arg2);
	 //System.out.println(elementText("txt_Benfacno","")+arg2);
	 assertEquals(elementText("txt_Benfbankname",""),arg3);
	 //System.out.println(elementText("txt_Benfbankname","")+arg3);
	 assertEquals(elementText("txt_Benfbranchcode",""),arg4);
	 //System.out.println(elementText("txt_Benfbranchcode","")+arg4);
}

@Then("^Verifies Paid Bill Information \"([^\"]*)\" TaxPayerName\"([^\"]*)\"Amount\"([^\"]*)\"$")
public void verifies_Paid_Bill_Information_TaxPayerName_Amount(String arg1, String arg2, String arg3) throws Throwable {
	 assertEquals(elementText("txt_nitvapaidbill",""),arg1);
	 assertEquals(elementText("txt_txpayernamepaidbill",""),arg2);

       
}

@Then("^Verifies Details of Beneficiary BeneficiaryName\"([^\"]*)\"account number\"([^\"]*)\"Bank name\"([^\"]*)\"Branch Code\"([^\"]*)\"Amount\"([^\"]*)\"$")
public void verifies_Details_of_Beneficiary_BeneficiaryName_account_number_Bank_name_Branch_Code_Amount(String arg1, String arg2, String arg3, String arg4, String arg5) throws Throwable {
	 assertEquals(elementText("txt_DBenfname",""),elementText("txt_Benfname",""));
	 assertEquals(elementText("txt_DBenfacno",""),elementText("txt_Benfacno",""));
	 assertEquals(elementText("txt_DBenfbankname",""),elementText("txt_Benfbankname",""));
	 assertEquals(elementText("txt_DBenfbranchcode",""),elementText("txt_Benfbranchcode",""));

	
       
}

@Then("^Bank list should be displayed$")
public void bank_list_should_be_displayed() throws Throwable {
	List <WebElement> bankls=wd.findElements(By.xpath("//input[@name='selectedPopularBank']"));
	//System.out.println(bankls.size());
	 assertNotEquals(bankls.size(), 0);
	
       
}

@Then("^click on Cancel button on Payment of Tax$")
public void click_on_Cancel_button_on_Payment_of_Tax() throws Throwable {
   clickOn("cancelbtn_pymtTax","");
       
}

@Then("^user is on VAT e-Filing page\"([^\"]*)\"$")
public void user_is_on_VAT_e_Filing_page(String arg1) throws Throwable {
   sleepWait(2000);
    assertEquals(elementText("txt_heading",""), arg1);
       
}

@Then("^user is on Tax Payment Bill page \"([^\"]*)\"$")
public void user_is_on_Tax_Payment_Bill_page(String arg1) throws Throwable {
	 assertEquals(elementText("txt_taxbillpymt",""), arg1);
       
}

@Then("^does print of the tax Payment Bill$")
public void does_print_of_the_tax_Payment_Bill() throws Throwable {
 	sleepWait(3000);
   //clickOn("print_pymntbill","");
	 assertEquals( elementDisplayed("print_pymntbill",""),true);
       
}

/*@Then("^closes the print page$")
public void closes_the_print_page() throws Throwable {
	sleepWait(2000);
	//System.out.println(wd.getWindowHandles().toArray()[2].toString());
	//wd.switchTo().window(wd.getWindowHandles().toArray()[2].toString());
	sleepWait(5000);
   clickOn("cancel_printwindow","");
   sleepWait(4000);
  //  assertEquals(elementText("txt_taxbillpymt",""), "Tax Payment Bill");
  // wd.close();
   
   //wd.switchTo().window(wd.getWindowHandles().toArray()[1].toString());
   
       
}
*/
@Then("^user clicks on Cancel button on  Tax Payment Bill page$")
public void user_clicks_on_Cancel_button_on_Tax_Payment_Bill_page() throws Throwable {
   clickOn("cancelbtn_taxbill","");
   
       
}

@Then("^user clicks on pay button on Total Liability column$")
public void user_clicks_on_pay_button_on_Total_Liability_column() throws Throwable {
   clickOn("TLpaybtn_TotalLiaility","");
       
}

@Then("^Verifies the Details of TaxPayer NITVA \"([^\"]*)\" emailid\"([^\"]*)\"mobile no \"([^\"]*)\"name\"([^\"]*)\"Address\"([^\"]*)\"$")
public void verifies_the_Details_of_TaxPayer_NITVA_emailid_mobile_no_name_Address(String arg1, String arg2, String arg3, String arg4, String arg5) throws Throwable {
	 assertEquals(elementText("txt_billno",""),elementText("txt_barcode",""));
	 assertEquals(elementText("txt_nitva",""),arg1);
	 assertEquals(elementText("txt_email",""),arg2);
	 assertEquals(elementText("txt_mobile",""),arg3);
	 assertEquals(elementText("txt_name",""),arg4);
	 assertEquals(elementText("txt_add",""),arg5);
       
}


@Then("^Verifies the liability details records\"([^\"]*)\" Period\"([^\"]*)\"VAT\"([^\"]*)\"Interest\"([^\"]*)\"Penalty\"([^\"]*)\"LateFee\"([^\"]*)\"TotalAmount\"([^\"]*)\"$")
public void verifies_the_liability_details_records_Period_VAT_Interest_Penalty_LateFee_TotalAmount(String arg1, String arg2, String arg3, String arg4, String arg5, String arg6, String arg7) throws Throwable {
   

	 assertEquals(elementText("tbody_liabiltiytable","//tr["+arg1+"]/td[1]"),arg2);
	 assertEquals(elementText("tbody_liabiltiytable","//tr["+arg1+"]/td[2]"),arg3);
	 assertEquals(elementText("tbody_liabiltiytable","//tr["+arg1+"]/td[3]"),arg4);
	 assertEquals(elementText("tbody_liabiltiytable","//tr["+arg1+"]/td[4]"),arg5);
	 assertEquals(elementText("tbody_liabiltiytable","//tr["+arg1+"]/td[5]"),arg6);
	 assertEquals(elementText("tbody_liabiltiytable","//tr["+arg1+"]/td[6]"),arg7);
	
}

@Then("^does the paymnet\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"$")
public void does_the_paymnet(String acno, String branchname, String edate, String periodDate)throws Throwable {
	//xls(acno,branchname,edate,periodDate);
	

}



}
