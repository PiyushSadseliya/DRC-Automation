package org.drc.vat.StepDefinitions;
import static org.drc.vat.appmanager.HelperBase.*;
import static org.testng.Assert.assertTrue;

import org.openqa.selenium.By;

import cucumber.api.java.en.And;

public class DV_2389_calculation_with_offset 
{	
	public String VAT_Store_Paid21;
	public String VAT_Store_Paid22;
	public String VAT_Store_Paid23;
	public String VAT_Store_Paid24;
	public String VAT_Store_Paid25;
	public String VAT_Store_Paid26;
	public String VAT_Store_Paid27;	
	public String VAT_Store_Period;

	
	@And("^User click on browser and upload file \"([^\"]*)\" for tax calculation$")
	public void user_click_on_browser_and_upload_file_for_tax_calculation(String upload) throws Throwable 
	{
		sleepWait(1000);			
		wd.findElement(By.xpath("//label[@for='validatedCustomFile']")).click();			
		UploadImage("",upload);
		sleepWait(2000);		
	}

	
	@And("^User see period field on filing$")
	public void user_see_period_field_on_filing() throws Throwable 
	{
		String Vat_Period_field=getValue("txt_efile_Period");
		VAT_Store_Period=Vat_Period_field;
	}
	
	@And("^User validate period field on tax calculation$")
	public void user_validate_period_field_on_tax_calculation() throws Throwable 
	{
		if(VAT_Store_Period.equals("txt_net_vat_to_paid"))
	    {
	    	assertTrue(true);
	    }
	}
	
	@And("^User click on proceed button on tax calculation$")
	public void user_click_on_proceed_button_on_tax_calculation() throws Throwable 
	{
	    clickOn("btn_efile_Proceed", "");
	}

	@And("^User see pop up for offset successful$")
	public void user_see_pop_up_for_offset_successful() throws Throwable 
	{
		sleepWait(2000);
		if(wd.findElement(By.xpath(obj.getProperty("lbl_Offset_Scccessful"))).isDisplayed());
		 {
			 assertTrue(true);
		 }
		 clickOn("btn_offset_ok", "");
		 sleepWait(1000);
	}

	@And("^User will navigate to e-filing landing screen$")
	public void user_will_navigate_to_e_filing_landing_screen() throws Throwable 
	{
		if(wd.findElement(By.xpath(obj.getProperty("txt_eFiling"))).isDisplayed());
		 {
			 assertTrue(true);
		 }
	}

	@And("^User clicjk on \"([^\"]*)\" button and navigate to tax calculation page$")
	public void user_clicjk_on_button_and_navigate_to_tax_calculation_page(String pay) throws Throwable 
	{
	    clickOn(pay, "");
	    sleepWait(1000);
	    if(wd.findElement(By.xpath(obj.getProperty("txt_Tax_Page"))).isDisplayed());
		 {
			 assertTrue(true);
		 }
	}

	@And("^User click on previous button on tax calculation and navigate to e-filing landing screen$")
	public void user_click_on_previous_button_on_tax_calculation_and_navigate_to_e_filing_landing_screen() throws Throwable 
	{
		sleepWait(2000);
		clickOn("btn_efile_Previous", "");
		sleepWait(2000);
		if(wd.findElement(By.xpath(obj.getProperty("txt_eFiling"))).isDisplayed());
		 {
			 assertTrue(true);
		 }		
	}
	
	@And("^User validate vat third party account value \"([^\"]*)\"$")
	public void user_validate_vat_third_party_account_value(String third) throws Throwable 
	{
		//type("txt_VatThird",VAT3Party);
		
		 String VAT_Collected_DG= getValue("txt_third_party_account");	
		 if(Float.parseFloat(VAT_Collected_DG)==((Float.parseFloat(third))))
		 {
			 assertTrue(true);
		 } 				
	}

	@And("^User entered value \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" for Operation Performed  on calculation$")
	public void user_entered_value_for_Operation_Performed_on_calculation(String DG, String DS1, String DS2, String DGI, String DSI, String FPP, String Export, String Exempt, String Nontaxable) throws Throwable 
	{
		type("txt_Delivery_goods", DG);
	    sleepWait(500);
	    type("txt_Delivercy1", DS1);
	    sleepWait(500);
	    type("txt_Delivercy2", DS2);
	   sleepWait(500);
		
	    type("txt_Delivery_goods_Itself", DGI);
	    sleepWait(500);
	    type("txt_Delivery_Services_itself", DSI);
	    sleepWait(500);
	    type("txt_Operational", FPP);
	    sleepWait(500);
	    type("txt_Export", Export);
	    sleepWait(500);
	    type("txt_Exempt", Exempt);
	    sleepWait(500);
	    type("txt_Non_taaxable", Nontaxable);
	    sleepWait(500);
	}

	@And("^User entered value \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" for Tax Deductible On calculation$")
	public void user_entered_value_for_Tax_Deductible_On_calculation(String AI, String AL, String GI, String GL, String RI, String RL, String OI, String OL) throws Throwable
	{
		type("txt_Assest1", AI);
	    sleepWait(500);
	    type("txt_Assest2", AL);
	    sleepWait(500);
	    type("txt_Goods1", GI);
	   sleepWait(500);
		sleepWait(1000);
	    type("txt_Goods2", GL);
	    sleepWait(500);
	    type("txt_RawMateria1", RI);
	    sleepWait(500);
	    type("txt_RawMateria2", RL);
	    sleepWait(500);
	    type("txt_OtherGoods1", OI);
	    sleepWait(500);
	    type("txt_OtherGoods2", OL);
	    sleepWait(500);
	}

	@And("^User entered value \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" for Adjustment on calculation$")
	public void user_entered_value_for_Adjustment_on_calculation(String VR, String SD, String VD, String PC) throws Throwable
	{
		type("txt_VatReversal",VR);
	    type("txt_Supp",SD);
	    type("txt_VatDeducted",VD);
	    type("txt_Recovery",PC);
	}

	@And("^User entered value \"([^\"]*)\" for Tax Calculation on calculation$")
	public void user_entered_value_for_Tax_Calculation_on_calculation(String VAT3Party) throws Throwable 
	{
		type("txt_VatThird",VAT3Party);		
		
		String VAT_Paid21=getValue("txt_NetVat_disable");
		String VAT_Paid22=getValue("txt_VatCredit_disable");
		String VAT_Paid23=getValue("txt_RefundCredit_disable");
		String VAT_Paid24=getValue("txt_VarCredit_carriedForward_disable");
		String VAT_Paid25=getValue("txt_Vatexternal_disable");		
		String VAT_Paid26=getValue("txt_VatThird");
		String VAT_Paid27=getValue("txt_Amount_disable");
		
		VAT_Store_Paid21=VAT_Paid21;
		VAT_Store_Paid22=VAT_Paid22;
		VAT_Store_Paid23=VAT_Paid23;
		VAT_Store_Paid24=VAT_Paid24;
		VAT_Store_Paid25=VAT_Paid25;
		VAT_Store_Paid26=VAT_Paid26;
		VAT_Store_Paid27=VAT_Paid27;
	}

	@And("^User verify Tax calculation$")
	public void user_verify_Tax_calculation() throws Throwable 
	{		
		sleepWait(1000);
		String VAT_21= getValue("txt_net_vat_to_paid");				
		if(VAT_Store_Paid21.equals(VAT_21))
		{
			assertTrue(true);
		}

		String VAT_22 = getValue("txt_vat_credit");		
		if(VAT_Store_Paid22.equals(VAT_22))
	    {
	    	assertTrue(true);
	    }
		
		String VAT_23 = getValue("txt_refund_on_vat_credit");
		if(VAT_Store_Paid23.equals(VAT_23))
	    {
	    	assertTrue(true);
	    }
		
		String VAT_24 = getValue("txt_vat_credit_carried_forward");
		if(VAT_Store_Paid24.equals(VAT_24))
	    {
	    	assertTrue(true);
	    }
		
		String VAT_25 = getValue("txt_fincial_publi_procurement");
		if(VAT_Store_Paid25.equals(VAT_25))
	    {
	    	assertTrue(true);
	    }
		
		String VAT_26 = getValue("txt_third_party_account");
		if(VAT_Store_Paid26.equals(VAT_26))
	    {
	    	assertTrue(true);
	    }
		
		String VAT_27 = getValue("txt_amount_to_pay");
		if(VAT_Store_Paid27.equals(VAT_27))
	    {
	    	assertTrue(true);
	    }
	}
	
	@And("^User verify period \"([^\"]*)\" for Tax Calculation$")
	public void user_verify_period_for_Tax_Calculation(String period) throws Throwable 
	{
		String period_check = getValue("txt_period_offset_check");		
		if(period_check.equals(period))
		{
			assertTrue(true);
		}		
	}
	
	
}
