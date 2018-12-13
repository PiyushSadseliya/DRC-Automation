package org.drc.vat.StepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import static org.drc.vat.appmanager.HelperBase.assertMsg;
import static org.drc.vat.appmanager.HelperBase.checkElement;
import static org.drc.vat.appmanager.HelperBase.clickOn;
import static org.drc.vat.appmanager.HelperBase.type;

import java.time.Year;

import static org.drc.vat.appmanager.HelperBase.getvalue;
import static org.drc.vat.appmanager.HelperBase.type;
import static org.drc.vat.appmanager.HelperBase.elementText;
import static org.drc.vat.appmanager.HelperBase.pageSource;
import static org.drc.vat.appmanager.HelperBase.buttonEnabled;
import org.testng.Assert;
import org.testng.asserts.SoftAssert;


public class ReAssessManualAssessLiablityCalculation {
	SoftAssert sassert = new SoftAssert();

	@Given("^The tax officer has logged in and has done Manual Assessment of the taxpayer\"([^\"]*)\"|\"([^\"]*)\"$")
	public void the_tax_officer_has_logged_in_and_has_done_Manual_Assessment_of_the_taxpayer(String arg1, String arg2) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	//internal Portal Login
	}

	@When("^the officer checks for Reassessment the particular period\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"$")
	public void the_officer_checks_for_Reassessment_the_particular_period(String month, String year, String Nitvano) throws Throwable {
		//Assessment tab
		clickOn("navlink_assessment_href","");
		//Assessed list tab
		clickOn("href_assessedlist","");
		//clickonPeriod
		clickOn("AssementPeriod","");
		Thread.sleep(2500);
		clickOn("span","[text()='"+month+"']");
		Thread.sleep(2500);
	
		int cyear = Year.now().getValue();
		if(!Integer.toString(cyear).equals(year)) {
			clickOn("AssementYear","");
			Thread.sleep(2500);
			clickOn("span","[text()='"+year+"']");
					
		}
clickOn("AssementFilterBy","");		//nitva number 

		Thread.sleep(2500);
		clickOn("span","[text()='NITVA']");
		type("txtbox_search",Nitvano);
		Thread.sleep(2500);
		clickOn("REAssementSearchClick","");
		Thread.sleep(2500);
		//option menu
		clickOn("AssestManage","");
		Thread.sleep(2500);
		//Select Reassessment
	clickOn("AssestManageReAssess","");
	sassert.assertEquals(elementText("AssessedListPage_verify", ""),"Assessed List","Not on Assesed list");

		Thread.sleep(2500);
		clickOn("btn_assess_next","");
		if(!checkElement("txt_page_liabilitycalculation")) {
			sassert.assertEquals(true, false);
		}
	      
	}

	@Then("^officer is on Reassessment Liability Calculation$")
	public void officer_is_on_Reassessment_Liability_Calculation() throws Throwable {
	    //Verify the EFD summary page
		sassert.assertEquals("","Transaction Received" );
		//click on next button 
		clickOn("","");
		//verify Liability Calculation page
		sassert.assertEquals("","Liabilty Calculation");
	
	    
	      
	}

	@Then("^Observes Amount of Declaration VatonSales\"([^\"]*)\"VatonPurchase\"([^\"]*)\"UtilisedCredit\"([^\"]*)\"Latefee\"([^\"]*)\"Interest\"([^\"]*)\"Penalty\"([^\"]*)\"Total\"([^\"]*)\"Assessed VatonSales\"([^\"]*)\"VatonPurchase\"([^\"]*)\"UtilisedCredit\"([^\"]*)\"Latefee\"([^\"]*)\"Interest\"([^\"]*)\"Penalty\"([^\"]*)\"Total\"([^\"]*)\" Reasessed VatonSales\"([^\"]*)\"VatonPurchase\"([^\"]*)\"UtilisedCredit\"([^\"]*)\"Latefee\"([^\"]*)\"Interest\"([^\"]*)\"Penalty\"([^\"]*)\"Total\"([^\"]*)\"$")
	public void observes_Amount_of_Declaration_VatonSales_VatonPurchase_UtilisedCredit_Latefee_Interest_Penalty_Total_Assessed_VatonSales_VatonPurchase_UtilisedCredit_Latefee_Interest_Penalty_Total_Reasessed_VatonSales_VatonPurchase_UtilisedCredit_Latefee_Interest_Penalty_Total(String dvsales, String dvpurchase, String dutilcredit, String dltfee, String dinterest, String dpenalty, String dtotal, String avsales, String avpurchase, String autilcredit, String altfee, String ainterest, String apenalty, String atotal, String rvsales, String rvpurchase, String rutilcredit, String rltfee, String rinterest, String rpenalty, String rtotal) throws Throwable {
		sassert.assertEquals(elementText("txtbx_DVatonSales",""),dvsales);
		sassert.assertEquals(elementText("txtbx_DVatonPurchase",""),dvpurchase);
		sassert.assertEquals(elementText("txtbx_DutilisedCredit",""),dutilcredit);
		sassert.assertEquals(elementText("txtbx_DLate",""),dltfee);
		sassert.assertEquals(elementText("txtbx_DInterest",""),dinterest);
		sassert.assertEquals(elementText("txtbx_declaredPenalty",""),dpenalty);
		sassert.assertEquals(elementText("txtbx_declaredTotal",""),dtotal);
		sassert.assertEquals(elementText("txtbx_AVatonSales",""),avsales);
		sassert.assertEquals(elementText("txtbx_AVatonPurchase",""),avpurchase);
		sassert.assertEquals(elementText("txtbx_AutilisedCredit",""),autilcredit);
		sassert.assertEquals(elementText("txtbx_ALate",""),altfee);
		sassert.assertEquals(elementText("txtbx_AInterest",""),ainterest);
		sassert.assertEquals(elementText("txtbx_APenalty",""),apenalty);
		sassert.assertEquals(elementText("txtbx_ATotal",""),atotal);
		sassert.assertEquals(getvalue("txtbx_reassesssedVatonSales",""),rvsales);
		sassert.assertEquals(getvalue("txtbx_reassesssedVatonPurchase",""),rvpurchase);
		sassert.assertEquals(getvalue("txtbx_reassesssedutilisedCredit",""),rutilcredit);
		sassert.assertEquals(getvalue("txtbx_reassesssedLate",""),rltfee);
		sassert.assertEquals(getvalue("txtbx_reassesssedInterest",""),rinterest);
		sassert.assertEquals(getvalue("txtbx_reassesssedPenalty",""),rpenalty);
		sassert.assertEquals(elementText("txtbx_reassesssedTotal",""),rtotal);
		
	      
	}



	@Then("^Enters in \"([^\"]*)\" \"([^\"]*)\" and Additional Liability must be\"([^\"]*)\"$")
	public void enters_in_and_Additional_Liability_must_be(String arg1, String arg2, String arg3) throws Throwable {
	    type("","");
	      
	}



	@Then("^the Interest Amount when the Total Liabillity  calculated is \"([^\"]*)\"\\.$")
	public void the_Interest_Amount_when_the_Total_Liabillity_calculated_is(String intamt) throws Throwable {
		
		sassert.assertEquals(getvalue("",""),intamt);
	      
	}

	@Then("^The Utilised Credit should be non-Editable Reimbursement of previous Period and it is Utilised by the tax payer while E-filing\"([^\"]*)\"\\.$")
	public void the_Utilised_Credit_should_be_non_Editable_Reimbursement_of_previous_Period_and_it_is_Utilised_by_the_tax_payer_while_E_filing(String utilcredit) throws Throwable {
	    //utilcredit
		type("","00000");
		sassert.assertEquals(getvalue("",""),utilcredit,"Utilised credit is editable");
	      
	}

	@Then("^Utilised Credit should be same under Reassesed, Assessed and  e-Declaration \"([^\"]*)\"$")
	public void utilised_Credit_should_be_same_under_Reassesed_Assessed_and_e_Declaration(String utilcredit) throws Throwable {
		sassert.assertEquals(elementText("",""),utilcredit);
		sassert.assertEquals(getvalue("",""),utilcredit);
		sassert.assertEquals(elementText("",""),utilcredit);
	      
	}

	@Then("^Late Fees \"([^\"]*)\"field on Liability Calculation Page for \"([^\"]*)\" under Reassessed column\\.$")
	public void late_Fees_field_on_Liability_Calculation_Page_for_under_Reassessed_column(String rltfee, String efiling)  throws Throwable {
	    
	      //Reassed late fee column
		if(efiling.equals("before")) {
			sassert.assertEquals(getvalue("",""),rltfee);
		}
		if(efiling.equals("after")) {
			sassert.assertEquals(getvalue("",""),rltfee);
		}
	}

	@Then("^Interest \"([^\"]*)\"field on Liability Calculation Page under Reassessed column\\.$")
	public void interest_field_on_Liability_Calculation_Page_under_Reassessed_column(String rinterest) throws Throwable {
	    //Reassessed Column interset
		sassert.assertEquals(getvalue("",""),rinterest);
	      
	}



	@Then("^Penalty \"([^\"]*)\"field on Liability Calculation Page under Reassessed column Message \"([^\"]*)\" should be shown for Penalty Amount should greater than the Total Liability$")
	public void penalty_field_on_Liability_Calculation_Page_under_Reassessed_column_Message_should_be_shown_for_Penalty_Amount_should_greater_than_the_Total_Liability(String value, String msg) {
		//Penalty field by default
		sassert.assertEquals(getvalue("",""),"0");
		if(msg.equals("")) {
			type("",value);
			sassert.assertEquals(getvalue("",""),value);
		}
		if(!msg.equals("")) {
			type("",value);
			sassert.assertEquals(getvalue("",""),value);
			pageSource().contains(msg);
		}
	}

	@Then("^e-Declaration total \"([^\"]*)\"should be calculated by: VAT on sales - VAT on Purchase - Utilised credit$")
	public void e_Declaration_total_should_be_calculated_by_VAT_on_sales_VAT_on_Purchase_Utilised_credit(String arg1) throws Throwable {
		int Dvsales=Integer.parseInt(elementText("",""));
		int Dvpurchase=Integer.parseInt(elementText("",""));
		int Dutilcredit=Integer.parseInt(elementText("",""));
		int total =Dvsales-Dvpurchase-Dutilcredit;
		sassert.assertEquals(elementText("",""),Integer.toString(total));
	}

	@Then("^Assessed Total \"([^\"]*)\"should be calculated by VAT on Sales - VAT on Purchase \\+ Utilised Credit \\+ Late fees \\+ Interest \\+ Penalty$")
	public void assessed_Total_should_be_calculated_by_VAT_on_Sales_VAT_on_Purchase_Utilised_Credit_Late_fees_Interest_Penalty(String arg1) throws Throwable {
	    //Assessed Total 
		int Avsales=Integer.parseInt(elementText("",""));
		int Avpurchase=Integer.parseInt(elementText("",""));
		int Autilcredit=Integer.parseInt(elementText("",""));
		int Alatefee=Integer.parseInt(elementText("",""));
		int Ainterest=Integer.parseInt(elementText("",""));
		int Apenalty=Integer.parseInt(elementText("",""));
		int total =Avsales-Avpurchase+Autilcredit+Alatefee+Apenalty;
		sassert.assertEquals(elementText("",""),Integer.toString(total));
	}

	@Then("^Click on Previous button user should be on Manual Assessment \\(Sales and Purchase Summary\\)$")
	public void click_on_Previous_button_user_should_be_on_Manual_Assessment_Sales_and_Purchase_Summary() throws Throwable {
	    //previosbutton
		clickOn("","");
		//Verify Manual Assesment page Sales And Purchase Summary
		sassert.assertEquals("","" );
	      
	}

	@Then("^Click on Next button in Manual Assessment \\(Sales and Purchase Summary\\) user should be on Liability Calculation$")
	public void click_on_Next_button_in_Manual_Assessment_Sales_and_Purchase_Summary_user_should_be_on_Liability_Calculation() throws Throwable {
	   //nextbutton
		clickOn("","");
		//Verify page is Liability  Calculation page
				sassert.assertEquals("","" );
	      
	}

	@Then("^Click on Next button user should be navigated to payment due page$")
	public void click_on_Next_button_user_should_be_navigated_to_payment_due_page() throws Throwable {
		//nextbutton
		clickOn("","");
		//Verify page is PaymentDue 
				sassert.assertEquals("","" );
	      
	}

	@Then("^Observe the e-Declaration Amount VAT on Sales\"([^\"]*)\"VAT on Purchase\"([^\"]*)\"Utilised Credit\"([^\"]*)\"LateFee\"([^\"]*)\"Interest\"([^\"]*)\"Penalty\"([^\"]*)\"$")
	public void observe_the_e_Declaration_Amount_VAT_on_Sales_VAT_on_Purchase_Utilised_Credit_LateFee_Interest_Penalty(String arg1, String arg2, String arg3, String arg4, String arg5, String arg6) throws Throwable {
	   //EDeclaration Fields
		sassert.assertEquals(elementText("", ""), arg1);
	    sassert.assertEquals(elementText("", ""), arg2);
	    sassert.assertEquals(elementText("", ""), arg3);
	    sassert.assertEquals(elementText("", ""), arg4);
	    sassert.assertEquals(elementText("", ""), arg5);
	    sassert.assertEquals(elementText("", ""), arg6);
	
	}

	@Then("^Observe the Reassessed Amount VAT on Sales\"([^\"]*)\"VAT on Purchase\"([^\"]*)\"Utilised Credit\"([^\"]*)\"LateFee\"([^\"]*)\"Interest\"([^\"]*)\"Penalty\"([^\"]*)\"$")
	public void observe_the_Reassessed_Amount_VAT_on_Sales_VAT_on_Purchase_Utilised_Credit_LateFee_Interest_Penalty(String arg1, String arg2, String arg3, String arg4, String arg5, String arg6) throws Throwable {
		//Reassessed Fields
		sassert.assertEquals(elementText("", ""), arg1);
	    sassert.assertEquals(elementText("", ""), arg2);
	    sassert.assertEquals(elementText("", ""), arg3);
	    sassert.assertEquals(elementText("", ""), arg4);
	    sassert.assertEquals(elementText("", ""), arg5);
	    sassert.assertEquals(elementText("", ""), arg6);
	      
	}

	@Then("^Enters the Reassessed Amount VAT on Sales\"([^\"]*)\"VAT on Purchase\"([^\"]*)\"Utilised Credit\"([^\"]*)\"LateFee\"([^\"]*)\"Interest\"([^\"]*)\"Penalty\"([^\"]*)\" \"([^\"]*)\" should be shown$")
	public void enters_the_Reassessed_Amount_VAT_on_Sales_VAT_on_Purchase_Utilised_Credit_LateFee_Interest_Penalty_should_be_shown(String arg1, String arg2, String arg3, String arg4, String arg5, String arg6, String arg7) throws Throwable {
	   type("",arg1);
	   type("",arg2);
	   type("",arg3);
	   type("",arg4);
	   type("",arg5);
	   type("",arg6);
	   pageSource().contains(arg7);
	   
	   sassert.assertEquals(buttonEnabled("",""), false);
	   
	}

	@Then("^should be on Reassessment Liability Calculation$")
	public void should_be_on_Reassessment_Liability_Calculation() throws Throwable {
	    
		//Verify page is Liabilty Calculation Page
		sassert.assertEquals("","");
	}

}
