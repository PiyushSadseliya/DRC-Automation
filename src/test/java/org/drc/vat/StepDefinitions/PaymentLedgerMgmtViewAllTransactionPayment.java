package org.drc.vat.StepDefinitions;

import static org.drc.vat.appmanager.HelperBase.login;
import static org.drc.vat.appmanager.HelperBase.clickOn;
import static org.drc.vat.appmanager.HelperBase.logout;
import java.util.Arrays;
import java.util.Collections;

import org.testng.asserts.SoftAssert;

import static org.drc.vat.appmanager.HelperBase.clickOn;
import static org.drc.vat.appmanager.HelperBase.elementText;

import static org.drc.vat.appmanager.HelperBase.assertMsg;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class PaymentLedgerMgmtViewAllTransactionPayment {
	String sortingColumnName="";
	Boolean ascendingOrder = false;
	Boolean descendingOrder = false;
	String sortingTable[][];
	
	
	@Given("^The user has logged in \"([^\"]*)\" \"([^\"]*)\"and has done the transaction before$")
	public void the_user_has_logged_in_and_has_done_the_transaction_before(String username, String password) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    login(username,password);	    
	}
	@Given("^clicks on View All - from Statement of Transaction table and can view all the transaction done in current financial Year$")
	public void clicks_on_View_All_from_Statement_of_Transaction_table_and_can_view_all_the_transaction_done_in_current_financial_Year() throws InterruptedException{
	    // Write code here that turns the phrase above into concrete actions
	    clickOn("nav_vat_efiling","");
	    if(elementText("efiling_stmt_of_transaction","").equalsIgnoreCase("Statement of Transaction")) {
	    	//softAssert.assertTrue(true);
	    	Thread.sleep(2000);	    	
	    }else {
	    	assertMsg("not on Statement of Transaction After Clicking on View all" );
	    	
	    }
	    clickOn("efiling_btn_view_all","");
	    if(elementText("efiling_stmt_of_transaction","").equalsIgnoreCase("Statement of Transaction")) {
	    	Thread.sleep(2000);	    
	    }else {
	    	assertMsg("not opened View all Statement of Transaction ");
	    	Thread.sleep(2000);
	    }
	}

	@When("^User Clicks on Previous button$")
	public void user_Clicks_on_Previous_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Thread.sleep(2000);
		clickOn("efiling_btn_previous","");
	}

	@Then("^the user should be redirected to VAT e-Filing Dashboard page$")
	public void the_user_should_be_redirected_to_VAT_e_Filing_Dashboard_page() throws InterruptedException {
	    // Write code here that turns the phrase above into concrete actions
		Thread.sleep(2000);
		 if(elementText("efiling_stmt_of_transaction","").equalsIgnoreCase("Statement of Transaction")) {
			
		    }else {
		    	
		    	assertMsg("On Statement of Transaction");
		    }
		 
		logout();
	}
	@When("^user clicks on column \"([^\"]*)\"$")
	public void user_clicks_on_column(String colname) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		if(colname.equalsIgnoreCase("")){
			clickOn("efiling_date_order","");
				}
		if(colname.equalsIgnoreCase("period")){
			clickOn("efiling_period_order","");
		}
		if(colname.equalsIgnoreCase("particulars")){
			clickOn("efiling_particular_order","");
		}
		if(colname.equalsIgnoreCase("opening balance")){
			clickOn("efiling_openingbal_order","");
		}
		
		if(colname.equalsIgnoreCase("vatliability")){
			clickOn("efiling_liablity_order","");
		}
		if(colname.equalsIgnoreCase("latefee")){
			clickOn("efiling_latefee_order","");
		}
		if(colname.equalsIgnoreCase("interest")){
			clickOn("efiling_interest_order","");
		}
		if(colname.equalsIgnoreCase("penalty")){
			clickOn("efiling_penalty_order","");
		}
		if(colname.equalsIgnoreCase("total")){
			clickOn("efiling_total_order","");
		}
	   
	}

	@Then("^results appear in ascending with date \"([^\"]*)\" period\"([^\"]*)\" particular\"([^\"]*)\" openbal\"([^\"]*)\" vatliab\"([^\"]*)\" latefee\"([^\"]*)\" interest\"([^\"]*)\" penalty\"([^\"]*)\" total\"([^\"]*)\" should be displayed first row\\.$")
	public void results_appear_in_ascending_with_date_period_particular_openbal_vatliab_latefee_interest_penalty_total_should_be_displayed_first_row(String arg1, String arg2, String arg3, String arg4, String arg5, String arg6, String arg7, String arg8, String arg9) throws Exception {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println(arg1+arg2+arg3+arg4+arg5+arg6+arg7+arg8+arg9);
		if(elementText("text_row_date","").equals(arg1)) {
			System.out.println("Matched"+elementText("text_row_date","")+arg1);
		}else {
			assertMsg("Donot Match as per Expected");
		}
		Thread.sleep(2000);
		if(elementText("text_row_period","").equals(arg2)) {
			System.out.println("Matched"+elementText("text_row_period","")+arg2);
		}else {
			assertMsg("Donot Match as per Expected");
		}
		Thread.sleep(2000);
		if(elementText("text_row_particular","").equals(arg3)) {
			System.out.println("Matched"+elementText("text_row_particular","")+arg3);
		}else {
			assertMsg("Donot Match as per Expected");
		}
		Thread.sleep(2000);
		if(elementText("text_row_openbal","").equals(arg4)) {
			System.out.println("Matched"+elementText("text_row_openbal","")+arg4);
		}else {
			assertMsg("Donot Match as per Expected");
		}
		Thread.sleep(2000);
		if(elementText("text_row_liablity","").equals(arg5)) {
			System.out.println("Matched"+elementText("text_row_liablity","")+arg5);
		}else {
			assertMsg("Donot Match as per Expected");
		}
		Thread.sleep(2000);
		if(elementText("text_row_latefee","").equals(arg6)) {
			System.out.println("Matched"+elementText("text_row_latefee","")+arg6);
		}else {
			assertMsg("Donot Match as per Expected");
		}
		Thread.sleep(2000);
		if(elementText("text_row_interest","").equals(arg7)) {
			System.out.println("Matched"+elementText("text_row_interest","")+arg7);
		}else {
			assertMsg("Donot Match as per Expected");
		}
		Thread.sleep(2000);
		if(elementText("text_row_penalty","").equals(arg8)) {
			System.out.println("Matched"+elementText("text_row_penalty","")+arg8);
		}else {
			assertMsg("Donot Match as per Expected");
		}
		Thread.sleep(2000);
		if(elementText("text_row_total","").equals(arg9)) {
			System.out.println("Matched"+elementText("text_row_total","")+arg9);
		}else {
			assertMsg("Donot Match as per Expected");
		}
		Thread.sleep(2000);
	}

	@Then("^user clicks on Date column \"([^\"]*)\"again$")
	public void user_clicks_on_Date_column_again(String colname) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		user_clicks_on_column(colname);
	}

	@Then("^results appear in descending with  with date \"([^\"]*)\" period\"([^\"]*)\" particular\"([^\"]*)\" openbal\"([^\"]*)\" vatliab\"([^\"]*)\" latefee\"([^\"]*)\" interest\"([^\"]*)\" penalty\"([^\"]*)\" total\"([^\"]*)\" should be displayed first row\\.$")
	public void results_appear_in_descending_with_with_date_period_particular_openbal_vatliab_latefee_interest_penalty_total_should_be_displayed_first_row(String arg1, String arg2, String arg3, String arg4, String arg5, String arg6, String arg7, String arg8, String arg9) throws InterruptedException  {
	    // Write code here that turns the phrase above into concrete actions
		if(elementText("text_row_date","").equals(arg1)) {
			System.out.println("Matched"+elementText("text_row_date","")+arg1);
		}else {
			assertMsg("Donot Match as per Expected");
		}
		Thread.sleep(2000);
		if(elementText("text_row_period","").equals(arg2)) {
			System.out.println("Matched"+elementText("text_row_period","")+arg2);
		}else {
			assertMsg("Donot Match as per Expected");
		}
		Thread.sleep(2000);
		if(elementText("text_row_particular","").equals(arg3)) {
			System.out.println("Matched"+elementText("text_row_particular","")+arg3);
		}else {
			assertMsg("Donot Match as per Expected");
		}
		Thread.sleep(2000);
		if(elementText("text_row_openbal","").equals(arg4)) {
			System.out.println("Matched"+elementText("text_row_openbal","")+arg4);
		}else {
			assertMsg("Donot Match as per Expected");
		}
		Thread.sleep(2000);
		if(elementText("text_row_liablity","").equals(arg5)) {
			System.out.println("Matched"+elementText("text_row_liablity","")+arg5);
		}else {
			assertMsg("Donot Match as per Expected");
		}
		Thread.sleep(2000);
		if(elementText("text_row_latefee","").equals(arg6)) {
			System.out.println("Matched"+elementText("text_row_latefee","")+arg6);
		}else {
			assertMsg("Donot Match as per Expected");
		}
		Thread.sleep(2000);
		if(elementText("text_row_interest","").equals(arg7)) {
			System.out.println("Matched"+elementText("text_row_interest","")+arg7);
		}else {
			assertMsg("Donot Match as per Expected");
		}
		Thread.sleep(2000);
		if(elementText("text_row_penalty","").equals(arg8)) {
			System.out.println("Matched"+elementText("text_row_penalty","")+arg8);
		}else {
			assertMsg("Donot Match as per Expected");
		}
		Thread.sleep(2000);
		if(elementText("text_row_total","").equals(arg9)) {
			System.out.println("Matched"+elementText("text_row_total","")+arg9);
		}else {
			assertMsg("Donot Match as per Expected");
		}
		Thread.sleep(2000);
		logout();
	}

	

}
