package org.drc.vat.StepDefinitions;

import cucumber.api.java.en.And;
import static org.drc.vat.appmanager.HelperBase.*;

public class CurrentLiability 
{
	//TC_02
	@And("^User click on Pay button on Total Liability dashboard$")
	public void user_click_on_Pay_button_on_Total_Liability_dashboard() throws Throwable 
	{
		clickOn("TotalLiabilityPay","");
	}

	//TC_02
	@And("^User check at totol liability after the payment$")
	public void user_check_at_totol_liability_after_the_payment() throws Throwable 
	{
		
	}
	
	//TC_04
	@And("^User check current liability \"([^\"]*)\"$")
	public void user_check_current_liability(String arg1) throws Throwable 
	{
	 
	}
	
	
	//TC_05
	@And("^User click on help button$")
	public void user_click_on_help_button() throws Throwable 
	{
		// not implement yet
	}
	//TC_05
	@And("^User see pop up for help button$")
	public void user_see_pop_up_for_help_button() throws Throwable 
	{
		// not implement yet
	}
		
	//TC_07
	@And("^User check the messasge for payment$")
	public void user_check_the_messasge_for_payment() throws Throwable 
	{
	    
	}
	
	
	//TC_08
	@And("^User click on Over the Counter radio button$")
	public void user_click_on_Over_thr_Counter_radio_button() throws Throwable 
	{
		clickOn("Payradio","");
	}
	//TC_08
	@And("^User click on Print button$")
	public void user_click_on_Print_button() throws Throwable 
	{
		clickOn("PayPrint","");
	}
	//TC_08
	@And("^User enter the details in downloaded challan form$")
	public void user_enter_the_details_in_downloaded_challan_form() throws Throwable 
	{
		// not possible
	}
	//TC_08
	@And("^User Visit the relavent bank and proceed for payment at the counter$")
	public void user_Visit_the_relavent_bank_and_proceed_for_payment_at_the_counter() throws Throwable 
	{
		// not possible
	}


}
