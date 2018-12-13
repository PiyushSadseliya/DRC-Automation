package org.drc.vat.StepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import static org.drc.vat.appmanager.HelperBase.clickOn;
import static org.drc.vat.appmanager.HelperBase.elementText;
import static org.drc.vat.appmanager.HelperBase.buttonEnabled;
import static org.drc.vat.appmanager.HelperBase.sleepWait;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.testng.Assert;

public class ManualAssessmentPaymentDueRaiseNotice {
	@Given("^The tax officer has logged in and has done Liability Calculation\"([^\"]*)\"|\"([^\"]*)\"$")
public void the_tax_officer_has_logged_in_and_has_done_Liability_Calculation(String arg1, String arg2) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		//Internal portal Login to implemented
	}

	@Then("^Tax officer is on Assessment Notice$")
	public void tax_officer_is_on_Assessment_Notice() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    clickOn("btn_raisenotice_paymentdue","");
	    Assert.assertEquals(elementText("",""), "", "Not on Assessment Notice Page");
	}

	@Then("^Validate the Barcode generated\"([^\"]*)\"$")
	public void validate_the_Barcode_generated(String barcodeno) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Assert.assertEquals(elementText("txt_docnumber",""),barcodeno);
	}

	@Then("^Validate the Taxpayer name\"([^\"]*)\"Address\"([^\"]*)\"NITVA\"([^\"]*)\"$")
	public void validate_the_Taxpayer_name_Address_NITVA(String name, String Add, String nitva) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Assert.assertEquals(elementText("",""),name);
		Assert.assertEquals(elementText("",""),Add);
		Assert.assertEquals(elementText("",""),nitva);
	}
	@Then("^Validate the ReferenceID\"([^\"]*)\"Period\"([^\"]*)\"DateIssued\"([^\"]*)\" taxCentre\"([^\"]*)\"$")
	public void validate_the_ReferenceID_Period_DateIssued_taxCentre(String refid, String period, String issueddate, String taxcentre) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		SimpleDateFormat dateFormat = new SimpleDateFormat("dd-mm-YYYY");
		Date date = new Date();		
		Assert.assertEquals(elementText("",""),refid);
		Assert.assertEquals(elementText("",""),period);
		Assert.assertEquals(elementText("",""),dateFormat.format(date));	
		
		//issuedate pending
		Assert.assertEquals(elementText("",""),taxcentre);
	}

	@Then("^Validate the Assessed VatLiability as per the Payment Due$")
	public void validate_the_Assessed_VatLiability_as_per_the_Payment_Due() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		String AVAtliability=elementText("txt_assessed_vatliability","");
		String AutiliCredit=elementText("txt_assessed_utilcredit","");
		String Alatefee=elementText("txt_assessed_ltfee","");
		String Ainterst=elementText("txt_assessed_interest","");
		String Apenalty=elementText("txt_assessed_penalty","");
		String Atotal=elementText("txt_assessed_total","");
		//Paid
		String PVAtliability=elementText("txt_paid_vatliability","");
		String PutiliCredit=elementText("txt_paid_utilcredit","");
		String Platefee=elementText("txt_paid_ltfee","");
		String Pinterst=elementText("txt_paid_interest","");
		String Ppenalty=elementText("txt_paid_penalty","");
		String Ptotal=elementText("txt_paid_total","");
		//NetPayable
		String NVAtliability=elementText("txt_netpay_vatliability","");
		String NutiliCredit=elementText("txt_netpay_utilcredit","");
		String Nlatefee=elementText("txt_netpay_ltfee","");
		String Ninterst=elementText("txt_netpay_interest","");
		String Npenalty=elementText("txt_netpay_penalty","");
		String Ntotal=elementText("txt_netpay_total","");
		clickOn("","");
		//Assesed
		Assert.assertEquals(elementText("txt_assessed_vatliability",""),AVAtliability);
		Assert.assertEquals(elementText("txt_assessed_utilcredit",""), AutiliCredit);
		Assert.assertEquals(elementText("txt_assessed_ltfee",""),Alatefee);
		Assert.assertEquals(elementText("txt_assessed_interest",""),Ainterst);
		Assert.assertEquals(elementText("txt_assessed_penalty",""),Apenalty);
		Assert.assertEquals(elementText("txt_assessed_total",""),Atotal);
		//Paid
		Assert.assertEquals(elementText("txt_paid_vatliability",""),PVAtliability);		
		Assert.assertEquals(elementText("txt_paid_utilcredit",""),PutiliCredit);
		Assert.assertEquals(elementText("txt_paid_ltfee",""),Platefee);		
		Assert.assertEquals(elementText("txt_paid_interest",""),Pinterst);
		Assert.assertEquals(elementText("txt_paid_penalty",""),Ppenalty);		
		Assert.assertEquals(elementText("txt_paid_total",""),Ptotal);
		Assert.assertEquals(elementText("txt_netpay_vatliability",""),NVAtliability);		
		Assert.assertEquals(elementText("txt_netpay_utilcredit",""),NutiliCredit);
		Assert.assertEquals(elementText("txt_netpay_ltfee",""),Nlatefee);		
		Assert.assertEquals(elementText("txt_netpay_interest",""),Ninterst);
		Assert.assertEquals(elementText("txt_netpay_penalty",""),Npenalty);		
		Assert.assertEquals(elementText("txt_netpay_total",""),Ntotal);		
	}
	

	@Then("^Validate the TaxAssesement is as per the Liability Calculated$")
	public void validate_the_TaxAssesement_is_as_per_the_Liability_Calculated() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   String DvatonSales=elementText("txtbx_declaredVatonSales","");
	   String DvatonPurchase=elementText("txtbx_declaredVatonPurchase","");
	   String Dutilcredit=elementText("txtbx_declaredutilisedCredit","");
	   String Dlatefee=elementText("txtbx_declaredLate","");
	   String Dinterest=elementText("txtbx_declaredInterest","");
	   String Dpenalty=elementText("txtbx_declaredPenalty","");	   
	   String Dtotal=elementText("txtbx_declaredTotal","");
	   
	   
	   
	   
	   String AvatonSales=elementText("txtbx_assesssedVatonSales","");
	   String AvatonPurchase=elementText("txtbx_assesssedVatonPurchase","");
	   String Autilcredit=elementText("txtbx_assesssedutilisedCredit","");
	   String Alatefee=elementText("txtbx_assesssedLate","");
	   String Ainterest=elementText("txtbx_assesssedInterest","");
	   String Apenalty=elementText("txtbx_assesssedPenalty","");
	   String Atotal=elementText("txtbx_assesssedTotal","");
	   
	   
	   
	   
	   
	   
	   String ALvatonSales=elementText("txtbx_addliablityVatonSales","");
	   String ALvatonPurchase=elementText("txtbx_addliablityVatonPurchase","");
	   String ALutilcredit=elementText("txtbx_addliablityutilisedCredit","");
	   String ALlatefee=elementText("txtbx_addliablityLate","");
	   String ALinterest=elementText("txtbx_addliablityInterest","");
	   String ALpenalty=elementText("txtbx_addliablityPenalty","");
	   String ALtotal=elementText("txtbx_addliablityTotal","");	 
	   clickOn("","");
	   Assert.assertEquals("", "");
	   clickOn("","");
	   Assert.assertEquals("","");
	   //EDeclared
	   Assert.assertEquals("txtbx_declaredVatonSales", DvatonSales);
	   Assert.assertEquals("txtbx_declaredVatonPurchase",DvatonPurchase);
	   Assert.assertEquals("txtbx_declaredutilisedCredit",Dutilcredit);
	   Assert.assertEquals("txtbx_declaredLate",Dlatefee);
	   Assert.assertEquals("txtbx_declaredInterest", Dinterest);
	   Assert.assertEquals("txtbx_declaredPenalty", Dpenalty);
	   Assert.assertEquals("txtbx_declaredTotal", Dtotal);

	   //Assessed
	   
	   Assert.assertEquals("txtbx_assesssedVatonSales", AvatonSales);
	   Assert.assertEquals("txtbx_assesssedVatonPurchase",AvatonPurchase);
	   Assert.assertEquals("txtbx_assesssedutilisedCredit",Autilcredit);
	   Assert.assertEquals("txtbx_assesssedLate",Alatefee);
	   Assert.assertEquals("txtbx_assesssedInterest", Ainterest);
	   Assert.assertEquals("txtbx_assesssedPenalty", Apenalty);
	   Assert.assertEquals("txtbx_assesssedTotal", Atotal);
	   //Additional Liability
	   Assert.assertEquals("txtbx_addliablityVatonSales", ALvatonSales);
	   Assert.assertEquals("txtbx_addliablityVatonPurchase",ALvatonPurchase);
	   Assert.assertEquals("txtbx_addliablityutilisedCredit",ALutilcredit);
	   Assert.assertEquals("txtbx_addliablityLate",ALlatefee);
	   Assert.assertEquals("txtbx_addliablityInterest", ALinterest);
	   Assert.assertEquals("txtbx_addliablityPenalty", ALpenalty);
	   Assert.assertEquals("txtbx_addliablityTotal", ALtotal);
	}



	@Then("^Validate the \"([^\"]*)\" Button Functionality\\.$")
	public void validate_the_Button_Functionality(String btn) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    if(btn.equals("Confirm")) {
	    	sleepWait(2000);
	    	Assert.assertEquals(buttonEnabled("btn_confirm",""), true);
	    	
	    }
	    if(btn.equals("Close")) {
	    	sleepWait(2000);
	    	clickOn("btn_close","");
	    	Assert.assertEquals(elementText("",""),"ManualAssessmentPage");
	    }
	}


}
