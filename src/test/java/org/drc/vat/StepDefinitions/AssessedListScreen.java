package org.drc.vat.StepDefinitions;
import static org.drc.vat.appmanager.HelperBase.*;
import static org.testng.Assert.assertTrue;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AssessedListScreen 
{

	@And("^User click on Assessed List$")
	public void user_click_on_Assessed_List() throws Throwable 
	{
		clickOn("txt_AsssessedList", "");
		Thread.sleep(100);
	   
	}

	@And("^User click on manage setting drop down for Assessement list$")
	public void user_click_on_manage_setting_drop_down_for_Assessement_list() throws Throwable 
	{
		Thread.sleep(100);
		clickOn("drp_setting", "");	   
	}

	@And("^User click on view notice$")
	public void user_click_on_view_notice() throws Throwable 
	{
		Thread.sleep(100);
		clickOn("drp_view_notice", "");
	}

	@And("^User check view notice$")
	public void user_check_view_notice() throws Throwable 
	{
		WebElement we;
		we=wd.findElement(By.xpath(""));		
		if(we.isDisplayed())
		{			
			System.out.println("User see List ");
			assertTrue(true);    
		}
	}
	
	@And("^User click on \"([^\"]*)\" for View objection$")
	public void user_click_on_for_View_objection(String value) throws Throwable 
	{
	   clickOn(value, "");
	   
	}
	@And("^User check view notice for view objection$")
	public void user_check_view_notice_for_view_objection() throws Throwable 
	{
	   
	}
	//04
	@And("^User click on \"([^\"]*)\" for Reassess option$")
	public void user_click_on_for_Reassess_option(String value) throws Throwable 
	{
		clickOn(value, "");
	   
	}

	@And("^User navigate to re assement screen$")
	public void user_navigate_to_re_assement_screen() throws Throwable 
	{	
		// re assement screen 
	}
	
	//05
	@And("^User click on FilterBy \"([^\"]*)\" for assessed list$")
	public void user_click_on_FilterBy_for_assessed_list(String value) throws Throwable 
	{
		clickOn("drp_assesst_filter", "");
		Thread.sleep(100);
		clickOn(value, "");	   
	}

	@And("^User type \"([^\"]*)\" for assessed type here$")
	public void user_type_for_assessed_type_here(String value) throws Throwable 
	{
		 type(value, "");
		 Thread.sleep(100);
	}

	@And("^User check referance id \"([^\"]*)\"$")
	public void user_check_referance_id(String value) throws Throwable
	{
		WebElement we;
		we=wd.findElement(By.xpath(obj.getProperty(value)));						
		if(we.isDisplayed())
		{
			assertTrue(true);
		}	   
	}
	//06
	@And("^User check date$")
	public void user_check_date() throws Throwable
	{
	    
	}
	//07
	@And("^User ckeck NITVA number \"([^\"]*)\" for tax payer \"([^\"]*)\"$")
	public void user_ckeck_NITVA_number_for_tax_payer(String value1, String value2) throws Throwable 
	{
	    
		WebElement we,we1;
		we=wd.findElement(By.xpath(obj.getProperty(value1)));
		we1=wd.findElement(By.xpath(obj.getProperty(value2)));
		if(we.isDisplayed() && we1.isDisplayed())
		{
			assertTrue(true);
		}	   
	}
	
	@And("^User see status Assessed$")
	public void user_see_status_Assessed() throws Throwable 
	{
	  // Assessed status will come 
	}

	@And("^User go to tax payer$")
	public void user_go_to_tax_payer() throws Throwable 
	{
	  wd.navigate().to("103.249.120.58:8066");
	}

	//09
	@And("^User click on reassess and user see Reassessment e-Declaration Reconciliation page$")
	public void user_click_on_reassess_and_user_see_Reassessment_e_Declaration_Reconciliation_page() throws Throwable 
	{
	    clickOn("", "");	        
	   
	}

	@And("^User click on Next button and user see Reassessment Liability Calculation page$")
	public void user_click_on_Next_button_and_user_see_Reassessment_Liability_Calculation_page() throws Throwable 
	{
		clickOn("", "");
	   
	}

	@And("^User click on Previous button and user see Reassessment e-Declaration Reconciliation page$")
	public void user_click_on_Previous_button_and_user_see_Reassessment_e_Declaration_Reconciliation_page() throws Throwable 
	{
		clickOn("", "");
	   
	}
	//09
	@And("^User again click on Previous button and user see Assessed list dashboard$")
	public void user_again_click_on_Previous_button_and_user_see_Assessed_list_dashboard() throws Throwable 
	{
		clickOn("", "");
	   
	}

	@And("^User see manual assement is selected$")
	public void user_see_manual_assement_is_selected() throws Throwable 
	{
	    System.out.println("User seee manual assement is selected");	   
	}
	//10
	//---------
	@And("^User click assess \"([^\"]*)\" and user see Manual Assessment e-declaration page$")
	public void user_click_assess_and_user_see_Manual_Assessment_e_declaration_page(String value) throws Throwable 
	{
	    clickOn(value, "");	   
	}

	@And("^User click on next button and user see Manual Assessment liability calculation page$")
	public void user_click_on_next_button_and_user_see_Manual_Assessment_liability_calculation_page() throws Throwable 
	{
		clickOn("", "");
	   
	}

	@And("^User click on next buton and user see Payment due page$")
	public void user_click_on_next_buton_and_user_see_Payment_due_page() throws Throwable 
	{
	    
	   
	}

	@And("^User click on Raise notice button and user see Notice of assessment page$")
	public void user_click_on_Raise_notice_button_and_user_see_Notice_of_assessment_page() throws Throwable {
	    
	   
	}

	@And("^User click on close button and user navigate to Manual assessment dashboard$")
	public void user_click_on_close_button_and_user_navigate_to_Manual_assessment_dashboard() throws Throwable {
	    
	   
	}

	@And("^User again follow same step$")
	public void user_again_follow_same_step() throws Throwable 
	{
		System.out.println("User follow same step");    	   
	}

	@And("^User click on confirm button and user navigate to Manual assessment dashboard$")
	public void user_click_on_confirm_button_and_user_navigate_to_Manual_assessment_dashboard() throws Throwable 
	{
	  clickOn("", "");
	  // click on button and navigate	   
	}

	@And("^User click on assessed list tab$")
	public void user_click_on_assessed_list_tab() throws Throwable 
	{
		clickOn("AssessedListTab", "");
	   
	}

	@And("^User again click on FilterBy \"([^\"]*)\"$")
	public void user_again_click_on_FilterBy(String value) throws Throwable 
	{
		clickOn(value, "");
	}

	@And("^User again type \"([^\"]*)\"$")
	public void user_again_type(String value) throws Throwable 
	{
		type(value, "");
	   
	}
	//10
	@And("^User check status Assessed for particular user at Assessed list$")
	public void user_check_status_Assessed_for_particular_user_at_Assessed_list() throws Throwable 
	{
	   // status will be in progress
	}

	@And("^User click on filterby \"([^\"]*)\" and click on \"([^\"]*)\" and click on search button$")
	public void user_click_on_filterby_and_click_on_and_click_on_search_button(String value, String value2) throws Throwable 
	{
		clickOn(value, "");
		Thread.sleep(100);
		clickOn(value2, "");
		Thread.sleep(100);
		clickOn("AssementSearchClick", "");
		
	   
	}
	//11
	@And("^User click on close button and user navigate to assessment list dashboard$")
	public void user_click_on_close_button_and_user_navigate_to_assessment_list_dashboard_navigate_to_assessed_list_dashboard() throws Throwable 
	{
	 clickOn("", "");    
	   
	}

	@And("^User click on confirm button and user navigate to navigate to Assessed List dashboard$")
	public void user_click_on_confirm_button_and_user_navigate_to_navigate_to_Assessed_List_dashboard() throws Throwable 
	{
		clickOn("", ""); 
	   
	}

	@And("^check status changed to in progress$")
	public void check_status_changed_to_in_progress() throws Throwable 
	{	    
	   //11 
		// status will changed
	}
	//13
	@And("^User click on type here and check for ReferenceID$")
	public void user_click_on_type_here_and_check_for_ReferenceID() throws Throwable 
	{
	   clickOn("AssementSearchClick", "");
	   
	   WebElement we;
		we=wd.findElement(By.xpath(""));		
		if(we.isDisplayed())
		{			
			//System.out.println("User see List ");
			assertTrue(true);    
		}
	   
	}

	@And("^User now type invalid referance \"([^\"]*)\"$")
	public void user_now_type_invalid_referance(String value) throws Throwable 
	{
		type(value, "");	   
	}

	@And("^User click on type here and see no record found$")
	public void user_click_on_type_here_and_see_no_record_found() throws Throwable 
	{
		clickOn("AssementSearchClick", "");
		
		String expectedMessage = "No records found";
		String message = wd.findElement(By.xpath("//*[contains(text(),'No records found')]")).getText();
		Assert.assertTrue(message.contains(expectedMessage));
		Thread.sleep(200);
	   
	}

	@And("^User refresh the page$")
	public void user_refresh_the_page() throws Throwable 
	{
		wd.navigate().refresh();
		Thread.sleep(1000);	   
	}

	@And("^User go to extreme page$")
	public void user_go_to_extreme_page() throws Throwable 
	{
		clickOn("AssLast", "");		
	   
	}

	@And("^User type \"([^\"]*)\" and check record that was on first page for ReferenceID$")
	public void user_type_and_check_record_that_was_on_first_page_for_ReferenceID(String value) throws Throwable
	{
		type(value, "");
		
		WebElement we;
		we=wd.findElement(By.xpath("                 "));		
		if(we.isDisplayed())
		{			
			// referance number 
			assertTrue(true);    
		}
	   
	}

	@And("^User click on type here and check for Assessed Date$")
	public void user_click_on_type_here_and_check_for_Assessed_Date() throws Throwable 
	{
		clickOn("AssementSearchClick", "");
		   
		   WebElement we;
			we=wd.findElement(By.xpath("           "));		
			if(we.isDisplayed())
			{			
				// assessed date
				assertTrue(true);    
			}
	   
	}
	@And("^User now type invalid Assessed Date \"([^\"]*)\"$")
	public void user_now_type_invalid_Assessed_Date(String value) throws Throwable 
	{
	   type(value, "");
	}

	@And("^User type \"([^\"]*)\" and check record that was on first page for Assessed Date$")
	public void user_type_and_check_record_that_was_on_first_page_for_Assessed_Date(String value) throws Throwable 
	{
		type(value, "");
		
		WebElement we;
		we=wd.findElement(By.xpath("           "));		
		if(we.isDisplayed())
		{			
			// assessed date
			assertTrue(true);    
		}
	   
	}

	//13
	@And("^User click on type here and check for NITVA$")
	public void user_click_on_type_here_and_check_for_NITVA() throws Throwable 
	{
		clickOn("AssementSearchClick", "");
		
		WebElement we;
		we=wd.findElement(By.xpath("           "));		
		if(we.isDisplayed())
		{			
			// assessed date
			assertTrue(true);    
		}
	   
	}
	@And("^User now type invalid NITVA \"([^\"]*)\"$")
	public void user_now_type_invalid_NITVA(String value) throws Throwable 
	{
		type(value, "");
	}
	@And("^User type \"([^\"]*)\" and check record that was on first page for NITVA$")
	public void user_type_and_check_record_that_was_on_first_page_for_NITVA(String value) throws Throwable 
	{
	    type(value, "");
	    
	    WebElement we;
		we=wd.findElement(By.xpath("           "));		
		if(we.isDisplayed())
		{			
			// assessed date
			assertTrue(true);    
		}
	   
	}

	@And("^User click on type here and check for Tax Payer$")
	public void user_click_on_type_here_and_check_for_Tax_Payer() throws Throwable 
	{
	    clickOn("AssementSearchClick", "");
	    
	    WebElement we;
		we=wd.findElement(By.xpath("           "));		
		if(we.isDisplayed())
		{			
			// assessed date
			assertTrue(true);    
		}
	   
	}
	@And("^User now type invalid Tax Payer \"([^\"]*)\"$")
	public void user_now_type_invalid_Tax_Payer(String value) throws Throwable 
	{
		type(value, "");
	}
	@And("^User type \"([^\"]*)\" and check record that was on first page for Tax Payer$")
	public void user_type_and_check_record_that_was_on_first_page_for_Tax_Payer(String value) throws Throwable 
	{
		type(value, "");
		
		 WebElement we;
			we=wd.findElement(By.xpath("           "));		
			if(we.isDisplayed())
			{			
				// assessed date
				assertTrue(true);    
			}		
	   
	}

	@And("^User click on FilterBy \"([^\"]*)\" for Status$")
	public void user_click_on_FilterBy_for_Status(String value) throws Throwable {
	    
	   clickOn(value, "");
	}

	@And("^User click on type here and check for Status$")
	public void user_click_on_type_here_and_check_for_Status() throws Throwable {
	    
	   
	}
	@And("^User now type invalid Status \"([^\"]*)\"$")
	public void user_now_type_invalid_Status(String value) throws Throwable 
	{
		type(value, "");
	}
	@And("^User type \"([^\"]*)\" and check record that was on first page for Status$")
	public void user_type_and_check_record_that_was_on_first_page_for_Status(String value) throws Throwable 
	{
		type(value, "");
	   
		 WebElement we;
			we=wd.findElement(By.xpath("           "));		
			if(we.isDisplayed())
			{			
				// assessed date
				assertTrue(true);    
			}	
		
	}
	//14
	@And("^User see Flter by all is selected$")
	public void user_see_Flter_by_all_is_selected() throws Throwable
	{
		System.out.println("filte by All is selected");
	   
	}

	@And("^User enter valid \"([^\"]*)\" in type here$")
	public void user_enter_valid_in_type_here(String value) throws Throwable {
	    
	   type(value, "");
	}

	@And("^User check the valid data$")
	public void user_check_the_valid_data() throws Throwable 
	{
		WebElement we;
		we=wd.findElement(By.xpath("           "));		
		if(we.isDisplayed())
		{			
			// assessed date
			assertTrue(true);    
		}	
	   
	}

	@And("^User again enter invalid data \"([^\"]*)\" in type here$")
	public void user_again_enter_invalid_data_in_type_here(String value) throws Throwable 
	{
	   type(value, "");	   
	   
	}
	

	
	//-------------------------------------------//
	
	 @When("^the officer checks for the particular period\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"$")
	 public void the_officer_checks_for_the_particular_period(String month, String year, String nitva) throws Throwable {
	  
	     
	  Thread.sleep(5000);
	        clickOn("AssessmentTab","");
	        Thread.sleep(2000);
	        clickOn("AssementPeriod","");
	        Thread.sleep(2000);
	        clickOn("span","[text()='"+month+"']");
	        Thread.sleep(2000);
	   clickOn("AssementYear","");
	   Thread.sleep(1000);
	   clickOn("AssessmentSelectyear","//span[text()='2018']");
	   Thread.sleep(2000);
	   type("txtbox_search",nitva);
	  
	   clickOn("AssementSearchClick","");
	   Thread.sleep(2000);
	   clickOn("AssesManage","");
	   Thread.sleep(2000);
	   clickOn("txt_asess", "");
	   

	 }

	@Then("^Tax officer is on Assessment Notice$")
	 public void tax_officer_is_on_Assessment_Notice() throws Throwable {
	     
	     clickOn("btn_raisenotice_paymentdue","");
	     Assert.assertEquals(elementText("",""), "", "Not on Assessment Notice Page");
	 }
	
	
/*	@And("^The tax officer has logged in and has done Liability Calculation\"([^\"]*)\"|\"([^\"]*)\"$")
	public void the_tax_officer_has_logged_in_and_has_done_Liability_Calculation(String arg1, String arg2) throws Throwable {
	    
		//Internal portal Login to implemented
	}
*/
	

	@Then("^Validate the Barcode generated\"([^\"]*)\"$")
	public void validate_the_Barcode_generated(String barcodeno) throws Throwable {
	    
		Assert.assertEquals(elementText("txt_docnumber",""),barcodeno);
	}

	@Then("^Validate the Taxpayer name\"([^\"]*)\"Address\"([^\"]*)\"NITVA\"([^\"]*)\"$")
	public void validate_the_Taxpayer_name_Address_NITVA(String name, String Add, String nitva) throws Throwable {
	    
		Assert.assertEquals(elementText("",""),name);
		Assert.assertEquals(elementText("",""),Add);
		Assert.assertEquals(elementText("",""),nitva);
	}
	@Then("^Validate the ReferenceID\"([^\"]*)\"Period\"([^\"]*)\"DateIssued taxCentre\"([^\"]*)\"$")
	public void validate_the_ReferenceID_Period_DateIssued_taxCentre(String refid, String period, String taxcentre) throws Throwable {
	    
		SimpleDateFormat dateFormat = new SimpleDateFormat("dd-mm-YYYY");
		Date date = new Date();		
		Assert.assertEquals(elementText("",""),refid);
		Assert.assertEquals(elementText("",""),period);
		Assert.assertEquals(elementText("",""),dateFormat.format(date));	
		
		Assert.assertEquals(elementText("",""),taxcentre);
	}

	@Then("^Validate the Assessed VatLiability as per the Payment Due$")
	public void validate_the_Assessed_VatLiability_as_per_the_Payment_Due() throws Throwable {
	    
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
	    
	    if(btn.equals("Confirm")) {
	    	Thread.sleep(2000);
	    	Assert.assertEquals(buttonEnabled("btn_confirm",""), true);
	    	
	    }
	    if(btn.equals("Close")) {
	    	Thread.sleep(2000);
	    	clickOn("btn_close","");
	    	Assert.assertEquals(elementText("",""),"ManualAssessmentPage");
	    }
	}

	//-------------------------------------------------------//
}
