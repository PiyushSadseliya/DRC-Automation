package org.drc.vat.StepDefinitions;

import static org.drc.vat.appmanager.HelperBase.clickOn;
import static org.drc.vat.appmanager.HelperBase.login;
import static org.drc.vat.appmanager.HelperBase.obj;
import static org.drc.vat.appmanager.HelperBase.type;
import static org.drc.vat.appmanager.HelperBase.verifyDownload;
import static org.drc.vat.appmanager.HelperBase.wd;
import static org.testng.Assert.assertTrue;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class DV_2394_landing_screen 
{
	@Given("^User is on Vat e-Filing Page \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_is_on_Vat_e_Filing_Page(String arg1, String arg2) throws Throwable
	{
	    System.out.println(arg1);
	    System.out.println(arg2);    
	}
	
	@And("^User click on Download Template$")
	public void user_click_on_Download_Template() throws Throwable 
	{
		Thread.sleep(500);
	   clickOn("bDownloadTemplate", "");
	   System.out.println("user click on download template button ");
	}
	
	@Then("^User verify download file$")
	public void user_verify_download_file() throws Throwable 
	{
		Thread.sleep(1000);	
		  verifyDownload("Sales-and-Purchase-Transactions");  
		  Thread.sleep(2000);
	}		
	@And("^User click on Tab$")
	public void user_click_on_Tab() throws Throwable 
	{		
		
		Thread.sleep(1000);
		clickOn("menu_vat-e-filing", "");
		Thread.sleep(1000);
	}
	
	@And("^User click on Finicial year dropdown \"([^\"]*)\"$")
	public void user_click_on_Finicial_year_dropdown(String value) throws Throwable 
	{
		Thread.sleep(1000);
		System.out.println("User click on e Filing Tab");		
		clickOn("FinancialYear", "");
		Thread.sleep(2000);
		clickOn(value,"");
	    System.out.println("user click on fincial year dropdown");
	    Thread.sleep(1000);
	}		

	@And("^User see all month record from that year \"([^\"]*)\" to \"([^\"]*)\"$")
	public void user_see_all_month_record_from_that_year_to(String TextJan, String TextDec) throws Throwable 
	{
		 Thread.sleep(1000);
		   WebElement we,we1;
		   we=wd.findElement(By.xpath(obj.getProperty(TextJan)));
		   we1=wd.findElement(By.xpath(obj.getProperty(TextDec)));
		   if(we.isDisplayed() && we1.isDisplayed())
		   {
			   assertTrue(true);
		   }
		   Thread.sleep(2000);
	}
	
	@And("^User see important dates \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_see_important_dates(String txtDate1, String txtDate2, String txtDate3, String txtDate4, String txtDate5, String txtDate6) throws Throwable 
	{
		 WebElement we1,we2,we3,we4,we5,we6;
		   we1=wd.findElement(By.xpath(obj.getProperty(txtDate1)));
		   we2=wd.findElement(By.xpath(obj.getProperty(txtDate2)));
		   we3=wd.findElement(By.xpath(obj.getProperty(txtDate1)));
		   we4=wd.findElement(By.xpath(obj.getProperty(txtDate2)));
		   we5=wd.findElement(By.xpath(obj.getProperty(txtDate1)));
		   we6=wd.findElement(By.xpath(obj.getProperty(txtDate2)));
		   
		   if(we1.isDisplayed() && we2.isDisplayed() && we3.isDisplayed() && we4.isDisplayed() && we5.isDisplayed() && we6.isDisplayed())
		   {
			   assertTrue(true);
		   }
		   Thread.sleep(2000);
	}

	@And("^User see File button is enabled for e-filing \"([^\"]*)\"$")
	public void user_see_File_button_is_enabled_for_e_filing(String eJanC) throws Throwable 
	{
		 //WebElement we;
		 if(wd.findElement(By.xpath(obj.getProperty(eJanC))).isEnabled());
		 {
			 assertTrue(true);
		 }
	}		

	@And("^User see Pay button is disable for payment \"([^\"]*)\"$")
	public void user_see_Pay_button_is_disable_for_payment(String eJanP) throws Throwable 
	{
		if(!wd.findElement(By.xpath(obj.getProperty(eJanP))).isEnabled());
		 {
			 assertTrue(true);
		 }
	}

	@And("^User see View button is disable for assessment \"([^\"]*)\"$")
	public void user_see_View_button_is_disable_for_assessment(String eJanA) throws Throwable 
	{
		if(!wd.findElement(By.xpath(obj.getProperty(eJanA))).isEnabled());
		 {
			 assertTrue(true);
		 }
	}
	
	@And("^User click on file button \"([^\"]*)\" and navigate to e-declaration page$")
	public void user_click_on_file_button_and_navigate_to_e_declaration_page(String value) throws Throwable 
	{
		Thread.sleep(500);
		clickOn(value,"");
		Thread.sleep(500);
		if(wd.findElement(By.xpath(obj.getProperty("txt_eFiling"))).isEnabled());
		 {
			 assertTrue(true);
		 }	    
	}

	@And("^User entered value \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_entered_value(String arg1, String arg2, String arg3, String arg4, String arg5, String arg6, String arg7, String arg8, String arg9) throws Throwable 
	{
	    type("txt_Delivery_goods", arg1);
	    Thread.sleep(500);
	    type("txt_Delivercy1", arg2);
	    Thread.sleep(500);
	    type("txt_Delivercy2", arg3);
	   Thread.sleep(500);
		Thread.sleep(1000);
	    type("txt_Delivery_Itself", arg4);
	    Thread.sleep(500);
	    type("txt_Delivery_Services", arg5);
	    Thread.sleep(500);
	    type("txt_Operational", arg6);
	    Thread.sleep(500);
	    type("txt_Export", arg7);
	    Thread.sleep(500);
	    type("txt_Exempt", arg8);
	}
	
	@And("^User click on check box and click on submit button$")
	public void user_click_on_check_box_and_click_on_submit_button() throws Throwable 
	{
	   Thread.sleep(1000);
	   clickOn("checkBox_efile_click", "");
	   System.out.println("user click on check box");
	   Thread.sleep(1000);
	   clickOn("drp_aut_efile_click", "");
	   Thread.sleep(500);
	   clickOn("drp_select_efile_click1", "");
	   Thread.sleep(500);
	   clickOn("btn_efile_submit", "");
	   System.out.println("user click on Submit");
	}

	@And("^User see OTP and enter OTP$")
	public void user_see_OTP_and_enter_OTP() throws Throwable 
	{
	    System.out.println("User see Enter your OTP ");
	    Thread.sleep(10000);
	}

	@And("^User click Verify button$")
	public void user_click_Verify_button() throws Throwable 
	{
		Thread.sleep(10000);
		clickOn("btn_efile_Verify", "");
	}

	@And("^User click on ok button$")
	public void user_click_on_ok_button() throws Throwable 
	{
		Thread.sleep(500);
		clickOn("btn_efile_OK", ""); 
	}

	@And("^User is navigate to Tax Calculation page$")
	public void user_is_navigate_to_Tax_Calculation_page() throws Throwable 
	{
		Thread.sleep(500);
		if(wd.findElement(By.xpath(obj.getProperty("txt_Tax_Page"))).isDisplayed());
		 {
			 assertTrue(true);
		 }  
	}

	@And("^User click on Proceed button and navigate to PAyment of tax page$")
	public void user_click_on_Proceed_button_and_navigate_to_PAyment_of_tax_page() throws Throwable 
	{
		Thread.sleep(1000);
		clickOn("btn_efile_Proceed", "");
		Thread.sleep(500);
		if(wd.findElement(By.xpath(obj.getProperty("txt_PaymentMethod"))).isDisplayed());
		 {
			 assertTrue(true);
		 }   
	}

	@And("^User click on cancel button on Payment of tax page and navaigate to e-filing page$")
	public void user_click_on_cancel_button_on_Payment_of_tax_page_and_navaigate_to_e_filing_page() throws Throwable 
	{
		clickOn("btn_Payment_Cancel", "");
	    Thread.sleep(500);
	    if(wd.findElement(By.xpath(obj.getProperty("txt_eFiling"))).isDisplayed());
		 {
			 assertTrue(true);
		 }    
	}

	@And("^User again click on collase icon for month \"([^\"]*)\"$")
	public void user_again_click_on_collase_icon_for_month(String month) throws Throwable 
	{
		clickOn(month,"");    
	}

	@And("^User see Preview button is display$")
	public void user_see_Preview_button_is_display() throws Throwable 
	{
		if(wd.findElement(By.xpath(obj.getProperty("eJanPre"))).isDisplayed());
		 {
			 assertTrue(true);
		 }    
	}

	@And("^User see Payment status Pay \"([^\"]*)\" button gets enable and assessment view \"([^\"]*)\" is disable$")
	public void user_see_Payment_status_Pay_button_gets_enable_and_assessment_view_is_disable(String eJanPre, String eJanA) throws Throwable 
	{
		if(wd.findElement(By.xpath(obj.getProperty(eJanPre))).isEnabled()  &&  !wd.findElement(By.xpath(obj.getProperty(eJanA))).isEnabled() );
		 {
			 assertTrue(true);
		 }  
	}

	@And("^User click on Preview button and navigate to e-declaration filled data page \"([^\"]*)\"$")
	public void user_click_on_Preview_button_and_navigate_to_e_declaration_filled_data_page(String preview) throws Throwable 
	{
		clickOn(preview, "");
		Thread.sleep(500);
		if(wd.findElement(By.xpath(obj.getProperty("txt_eFiling"))).isDisplayed());
		 {
			 assertTrue(true);
		 }
		
	}

	@And("^User click on Previous button and user navigate back to e-declaraton Vate-Filing Page$")
	public void user_click_on_Previous_button_and_user_navigate_back_to_e_declaraton_Vate_Filing_Page() throws Throwable 
	{
		Thread.sleep(2000);
		clickOn("btn_efile_Previous","");
		Thread.sleep(500);
		if(wd.findElement(By.xpath(obj.getProperty("txt_efiingScreen"))).isDisplayed());
		 {
			 assertTrue(true);
		 }    
	}

	@And("^User click on Pay button \"([^\"]*)\"$")
	public void user_click_on_Pay_button(String pay) throws Throwable 
	{
	    clickOn(pay, "");
	    Thread.sleep(500);
	}

	@And("^User click on proceed button and navigate to Payment of tax page$")
	public void user_click_on_proceed_button_and_navigate_to_Payment_of_tax_page() throws Throwable 
	{
	    clickOn("btn_efile_Proceed", "");
	    Thread.sleep(500);
	    
	}

	@And("^User click on radio button on net banking and click on select bank and see bank name \"([^\"]*)\"$")
	public void user_click_on_radio_button_on_net_banking_and_click_on_select_bank_and_see_bank_name(String txt_BankName_Central) throws Throwable 
	{
	  clickOn("rad_NetBanking", "");
	  Thread.sleep(500);
	  clickOn("drp_SelectBank", "");
	  Thread.sleep(500);
	  if(wd.findElement(By.xpath(obj.getProperty(txt_BankName_Central))).isDisplayed());
	  {
			 assertTrue(true);
	  }	  
	    
	}

	@And("^User see cancel \"([^\"]*)\" and pay now \"([^\"]*)\" is enable$")
	public void user_see_cancel_and_pay_now_is_enable(String btn_PaymentCancel, String btn_PaymentPayNow) throws Throwable 
	{
		if(wd.findElement(By.xpath(obj.getProperty(btn_PaymentCancel))).isEnabled() &&  wd.findElement(By.xpath(obj.getProperty(btn_PaymentPayNow))).isEnabled());
		{
				 assertTrue(true);
		}	  
	    
	}

	@And("^User click on cancel buttton and navigate to e-filing landing page$")
	public void user_click_on_cancel_buttton_and_navigate_to_e_filing_landing_page() throws Throwable 
	{
		clickOn("btn_PaymentCancel", "");
		if(wd.findElement(By.xpath(obj.getProperty("txt_efiingScreen"))).isDisplayed());
		  {
				 assertTrue(true);
		  }	 
	    
	}

	@And("^User click on radio button on particular bank$")
	public void user_click_on_radio_button_on_particular_bank() throws Throwable 
	{
		clickOn("rad_NetBanking", "");
	}

	@And("^User click on Pay now buttton on payment of tax page$")
	public void user_click_on_Pay_now_buttton_on_payment_of_tax_page() throws Throwable 
	{
		clickOn("rad_NetBanking", "");
		Thread.sleep(1000);
		clickOn("drp_SelectBank", "");
		Thread.sleep(1000);
		clickOn("txt_BankName_Central", "");
		Thread.sleep(1000);	    
	}

	@And("^User navigate to selected bank page$")
	public void user_navigate_to_selected_bank_page() throws Throwable 
	{
		Thread.sleep(5000);		
		wd.get("http://www.bcc.cd/");
		String title=wd.getTitle();
		System.out.println("Title is"+title);
		Assert.assertTrue(title.contains("Banque Centrale du Congo"));
		System.out.println("Page Verified");
	}

	@And("^User click on collpase icon for filing \"([^\"]*)\"$")
	public void user_click_on_collpase_icon_for_filing(String value) throws Throwable 
	{
		Thread.sleep(1000);
		System.out.println("user click on collpase icon ");
		clickOn(value, "");
		Thread.sleep(500);
	}	
	
	
	@And("^User click on view \"([^\"]*)\"$")
	public void user_click_on_view(String PayView) throws Throwable 
	{
		clickOn(PayView, "");
	    
	}

	@And("^User navigate to vat e-filing payment receipt$")
	public void user_navigate_to_vat_e_filing_payment_receipt() throws Throwable 
	{
		// receipt payment done from backend
	    
	}

	/*@And("^User click on over the counter and click on print button$")
	public void user_click_on_over_the_counter_and_click_on_print_button() throws Throwable 
	{
	    
	    clickOn("rad_OverTheCounter", "");
	    Thread.sleep(500);
	    clickOn("btn_Payment_Print", "");
	}*/

	@And("^User click on over the counter$")
	public void user_click_on_over_the_counter() throws Throwable 
	{
		Thread.sleep(500);
		clickOn("rad_OverTheCounter", "");
	}

	@And("^User see Tax Payment bill$")
	public void user_see_Tax_Payment_bill() throws Throwable 
	{
		Thread.sleep(3000);
		if(wd.findElement(By.xpath(obj.getProperty("btn_Payment_Print"))).isEnabled());
		  {
			  clickOn("btn_Payment_Print", "");  
			  assertTrue(true);				 			  
		  }	 	    
		  Thread.sleep(1000);
	}
/*
 * Important dates 
 */
	
	/*@Given("^User login to DRC VAT$")
    public void user_login_to_DRC_VAT() throws Throwable 
	{
    login("franky03@mailinator.com", "franky@123");
    clickOn("btn_login","");
    Thread.sleep(1000);
    
    }*/

   @Then("^User open E-filing page$")
   public void user_open_E_filing_page() throws Throwable 
   {
	  Thread.sleep(1000);
      clickOn("menu_vat-e-filing", "");
      Thread.sleep(500);
  
   }
   @Then("^User can see the e-filing screen$")
   public void user_can_see_the_e_filing_screen() throws Throwable 
   {

    Thread.sleep(2000);
    WebElement we;
    we=wd.findElement(By.xpath("//h5[contains(text(),'VAT e-Filing')]"));
    if(we.isDisplayed())
    {
    	assertTrue(true);
    	System.out.println("screen verified");
    }
    Thread.sleep(2000);
    }

  @Then("^User verify the \"([^\"]*)\" \"([^\"]*)\"$")
   public void user_verify_the(String paymentdate1, String efiling1) throws Throwable 
  {
    
	  WebElement we,we1;
	  we=wd.findElement(By.xpath(obj.getProperty("txt_efiling1")));
	  we1=wd.findElement(By.xpath(obj.getProperty("txt_payment_date1")));
	   if(we.isDisplayed() && we1.isDisplayed())
	   {
		   assertTrue(true);
	   }          	  
 }
 
@Then("^user verify \"([^\"]*)\"$")
public void user_verify(String efiling) throws Throwable 
{
	Thread.sleep(2000);
	   WebElement we;
	   we=wd.findElement(By.xpath(obj.getProperty(efiling)));
	   if(we.isDisplayed())
	   {
		   assertTrue(true);
	   }
	   Thread.sleep(2000);
}

@Then("^user verify the \"([^\"]*)\"$")
public void user_verify_the(String payment_date2 ) throws Throwable 
{
	Thread.sleep(2000);
	   WebElement we;
	   we=wd.findElement(By.xpath(obj.getProperty(payment_date2)));
	   if(we.isDisplayed())
	   {
		   assertTrue(true);
	   }
	   Thread.sleep(2000);
  }
   
@Then("^user can see the e-filing landing screen,verify \"([^\"]*)\" for payment$")
public void user_can_see_the_e_filing_landing_screen_verify_for_payment(String payment_date2) throws Throwable 
   {
	   Thread.sleep(2000);
	   WebElement we;
	   we=wd.findElement(By.xpath(obj.getProperty(payment_date2)));
	   if(we.isDisplayed())
	   {
		   assertTrue(true);
	   }
	   Thread.sleep(2000);
    } 
	
/*
 * Total Liability
 * 
 */
@And("^User click on Pay button on Total Liability$")
public void user_click_on_Pay_button_on_Total_Liability() throws Throwable 
{
	clickOn("btn_T_L_button", "");
}

@And("^User check current liability \"([^\"]*)\"$")
public void user_check_current_liability(String totalLiability) throws Throwable 
{
	Thread.sleep(500);
	
	if(wd.findElement(By.xpath("//h2[contains(text(),'" + totalLiability + "')]")).isDisplayed() )
	{					
		assertTrue(true);
	} 	
}	
	
@And("^User click on over the counter on payment method$")
public void user_click_on_over_the_counter_on_payment_method() throws Throwable 
{
	clickOn("rad_OverTheCounter", "");
}

@And("^User click on print button on over the counter page$")
public void user_click_on_print_button_on_over_the_counter_page() throws Throwable 
{
	clickOn("btn_Payment_Print", "");
}

@And("^User see pdf is open with print button$")
public void user_see_pdf_is_open_with_print_button() throws Throwable 
{
	Thread.sleep(1000);
	if(wd.findElement(By.xpath(obj.getProperty("btn_Print_Bill_Seen"))).isDisplayed());
	  {
			 assertTrue(true);
	  }	 	
}	
}
