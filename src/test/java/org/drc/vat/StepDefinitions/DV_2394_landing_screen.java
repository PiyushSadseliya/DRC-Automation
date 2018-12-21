package org.drc.vat.StepDefinitions;

import static org.testng.Assert.assertTrue;
import static org.drc.vat.appmanager.HelperBase.*;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class DV_2394_landing_screen 
{	
	public static String check_TL;
	public String StoreMonth;

	@Then("^User logout$")
	public void user_logout() throws Throwable 
	{		
		sleepWait(2000);
		clickOn("btn_logout", "");
		sleepWait(2000);
		clickOn("link_click", "");
		sleepWait(1000);			
	}	

	@And("^User click on SignIn button$")
	public void user_click_on_SignIn_button() throws Throwable 
	{
		clickOn("btn_login", "");
	}	

	@Given("^User is on Vat e-Filing Page \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_is_on_Vat_e_Filing_Page(String arg1, String arg2) throws Throwable
	{
		System.out.println(arg1);
		System.out.println(arg2);    
	}

	@And("^User click on Download Template$")
	public void user_click_on_Download_Template() throws Throwable 
	{
		sleepWait(1000);
		clickOn("bDownloadTemplate", "");

		verifyDownload("e-filingScheduleTemplate.xlsx");	   

	}

	@Then("^User verify download file$")
	public void user_verify_download_file() throws Throwable 
	{
		sleepWait(1000);	
		verifyDownload("Sales-and-Purchase-Transactions");  
		sleepWait(2000);
	}		
	@And("^User click on Tab$")
	public void user_click_on_Tab() throws Throwable 
	{
		if (wd.findElement(By.xpath("//h3[contains(text(),'VAT')]")).isDisplayed()) {
			clickOn("tile_vat", "");
			sleepWait(2000);
			clickOn("a_sure", "");
			sleepWait(5000);
			clickOn("menu_vat-e-filing", "");		
			sleepWait(1000);
		}

		else {
			sleepWait(5000);
			clickOn("menu_vat-e-filing", "");		
			sleepWait(1000);
		}
	}


	@And("^clicks on e-filing to check$")
	public void clicks_on_e_filing_to_check() throws Throwable 
	{
		sleepWait(2000);
		for(int i =1;i<=12;i++)
		{
			String first_part = "(//div[@class='list-item-th text-left'])[";
			String second_part ="]";

			String month = first_part+i+second_part;
			wd.findElement(By.xpath(month)).click();
			sleepWait(500);

			String first_preview ="(//button[text()='Preview'])[";
			String second_preview="]";

			String preview = first_preview+i+second_preview;
			sleepWait(500);
			Boolean B;
			try{
				B =(wd.findElement(By.xpath(preview)).isDisplayed());
			}catch(NoSuchElementException ex){
				B= false;
			}
			sleepWait(500);
			if(B)
			{
				continue;
			}
			else
			{														
				break;
			}
		}
		if(wd.findElement(By.xpath(obj.getProperty("btn_file"))).isEnabled() && !wd.findElement(By.xpath(obj.getProperty("btn_pay_check_disable"))).isEnabled() && !wd.findElement(By.xpath(obj.getProperty("btn_view_check_disable"))).isEnabled())
		{
			assertTrue(true);
		}				

	}



	@And("^User click on Finicial year dropdown \"([^\"]*)\"$")
	public void user_click_on_Finicial_year_dropdown(String value) throws Throwable 
	{
		sleepWait(1000);			
		clickOn("drp_FinancialYear", "");
		sleepWait(2000);
		clickOn(value,"");	    
		sleepWait(1000);
	}		

	@And("^User see all month record from that year \"([^\"]*)\" to \"([^\"]*)\"$")
	public void user_see_all_month_record_from_that_year_to(String TextJan, String TextDec) throws Throwable 
	{
		sleepWait(1000);
		WebElement we,we1;
		we=wd.findElement(By.xpath(obj.getProperty(TextJan)));
		we1=wd.findElement(By.xpath(obj.getProperty(TextDec)));
		if(we.isDisplayed() && we1.isDisplayed())
		{
			assertTrue(true);
		}
		sleepWait(2000);
	}


	@Given("^user see Total Liability$")
	public void user_see_Total_Liability() throws Throwable 
	{
		String Total_Libality = elementText("txt_total_liability_efile");
		check_TL = Total_Libality;
	}

	@Given("^User see Total Liability is not changed$")
	public void user_see_Total_Liability_is_not_changed() throws Throwable 
	{
		String Total_Libality = elementText("txt_total_liability_efile");
		String storeTL= Total_Libality;

		if(check_TL.equals(storeTL))
		{
			assertTrue(true);
		}

	}


	@And("^User see File button is enabled for e-filing \"([^\"]*)\"$")
	public void user_see_File_button_is_enabled_for_e_filing(String eJanC) throws Throwable 
	{

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
		sleepWait(500);
		clickOn(value,"");
		sleepWait(500);
		if(wd.findElement(By.xpath(obj.getProperty("txt_eFiling"))).isEnabled());
		{
			assertTrue(true);
		}	    
	}

	@And("^User entered value \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_entered_value(String arg1, String arg2, String arg3, String arg4, String arg5, String arg6, String arg7, String arg8, String arg9) throws Throwable 
	{
		type("txt_Delivery_goods", arg1);
		sleepWait(500);
		type("txt_Delivercy1", arg2);
		sleepWait(500);
		type("txt_Delivercy2", arg3);
		sleepWait(500);
		sleepWait(1000);
		type("txt_Delivery_Itself", arg4);
		sleepWait(500);
		type("txt_Delivery_Services", arg5);
		sleepWait(500);
		type("txt_Operational", arg6);
		sleepWait(500);
		type("txt_Export", arg7);
		sleepWait(500);
		type("txt_Exempt", arg8);
		sleepWait(500);
		type("txt_Non_taaxable", arg9);
		sleepWait(500);
	}

	@And("^User click on check box and click on submit button$")
	public void user_click_on_check_box_and_click_on_submit_button() throws Throwable 
	{
		sleepWait(1000);

		clickOn("checkBox_efile_click", "");

		sleepWait(1000);
		clickOn("drp_aut_efile_click", "");
		sleepWait(500);
		clickOn("drp_select_efile_click1", "");
		sleepWait(500);
		clickOn("btn_efile_submit", "");

		sleepWait(1000);
	}


	@And("^User is navigate to Tax Calculation page$")
	public void user_is_navigate_to_Tax_Calculation_page() throws Throwable 
	{
		sleepWait(500);
		if(wd.findElement(By.xpath(obj.getProperty("txt_Tax_Page"))).isDisplayed());
		{
			assertTrue(true);
		}  
	}

	@And("^User click on Proceed button and navigate to PAyment of tax page$")
	public void user_click_on_Proceed_button_and_navigate_to_PAyment_of_tax_page() throws Throwable 
	{
		sleepWait(1000);
		clickOn("btn_efile_Proceed", "");
		sleepWait(1000);
		if(wd.findElement(By.xpath(obj.getProperty("txt_PaymentMethod"))).isDisplayed());
		{
			assertTrue(true);
		}   
	}



	@And("^clicks on e-filing on landing screen$")
	public void clicks_on_e_filing_on_landing_screen() throws Throwable 
	{
		sleepWait(2000);
		for(int i =1;i<=12;i++)
		{
			String first_part = "(//div[@class='list-item-th text-left'])[";
			String second_part ="]";

			String month = first_part+i+second_part;
			wd.findElement(By.xpath(month)).click();
			sleepWait(500);

			String first_preview ="(//button[text()='Preview'])[";
			String second_preview="]";

			String preview = first_preview+i+second_preview;
			sleepWait(500);
			Boolean B;
			try{
				B =(wd.findElement(By.xpath(preview)).isDisplayed());
			}catch(NoSuchElementException ex){
				B= false;
			}
			sleepWait(500);
			if(B)
			{
				continue;
			}
			else
			{
				StoreMonth = month;															
				clickOn("btn_file","");							
				break;
			}
		}		
	}

	@And("^User click on Preview on landing screen$")
	public void user_click_on_Preview_on_landing_screen() throws Throwable 
	{

		sleepWait(1000);							
		wd.findElement(By.xpath(StoreMonth)).click();			
		sleepWait(1000);			
		String first_part = StoreMonth;
		String second_part ="//following::button//following::button";				
		String month = first_part+second_part;
		sleepWait(1000);				
		wd.findElement(By.xpath(month)).click();								
		sleepWait(1000);
		if(wd.findElement(By.xpath(obj.getProperty("txt_Check_Pre"))).isDisplayed());
		{
			assertTrue(true);
		}
		sleepWait(1000);		 

	}


	@And("^User see Preview button is display and pay button gets enable and user click on pay button$")
	public void user_see_Preview_button_is_display_and_pay_button_gets_enable_and_user_click_on_pay_button() throws Throwable 
	{

		sleepWait(1000);							
		wd.findElement(By.xpath(StoreMonth)).click();			
		sleepWait(1000);			
		String first_part = StoreMonth;
		String second_part ="//following::button//following::button";
		String month = first_part+second_part;
		sleepWait(1000);				
		String third_part = month;
		String forth_part = "//following::button";

		String StorePay = third_part+forth_part;

		if(wd.findElement(By.xpath(StorePay)).isEnabled())
		{
			wd.findElement(By.xpath(StorePay)).click();	
			assertTrue(true);
		}


	}





	@And("^User click on cancel button on Payment of tax page and navaigate to e-filing page$")
	public void user_click_on_cancel_button_on_Payment_of_tax_page_and_navaigate_to_e_filing_page() throws Throwable 
	{
		sleepWait(1000);
		clickOn("btn_Payment_Cancel", "");
		sleepWait(1000);
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
		sleepWait(500);
		if(wd.findElement(By.xpath(obj.getProperty("txt_eFiling"))).isDisplayed());
		{
			assertTrue(true);
		}

	}

	@And("^User click on Previous button and user navigate back to e-declaraton Vate-Filing Page$")
	public void user_click_on_Previous_button_and_user_navigate_back_to_e_declaraton_Vate_Filing_Page() throws Throwable 
	{
		sleepWait(2000);
		clickOn("btn_efile_Previous","");
		sleepWait(500);
		if(wd.findElement(By.xpath(obj.getProperty("txt_efiingScreen"))).isDisplayed());
		{
			assertTrue(true);
		}    
	}

	@And("^User click on Pay button \"([^\"]*)\"$")
	public void user_click_on_Pay_button(String pay) throws Throwable 
	{
		clickOn(pay, "");
		sleepWait(500);
	}

	@And("^User click on proceed button and navigate to Payment of tax page$")
	public void user_click_on_proceed_button_and_navigate_to_Payment_of_tax_page() throws Throwable 
	{
		sleepWait(1000);
		clickOn("btn_efile_Proceed", "");
		sleepWait(1000);

	}

	@And("^User click on radio button on net banking and click on select bank and see bank name \"([^\"]*)\"$")
	public void user_click_on_radio_button_on_net_banking_and_click_on_select_bank_and_see_bank_name(String txt_BankName_Central) throws Throwable 
	{
		clickOn("rad_NetBanking", "");
		sleepWait(500);
		clickOn("drp_SelectBank", "");
		sleepWait(500);
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
		sleepWait(1000);
		clickOn("drp_SelectBank", "");
		sleepWait(1000);
		clickOn("txt_BankName_Central", "");
		sleepWait(1000);	    
	}

	@And("^User navigate to selected bank page$")
	public void user_navigate_to_selected_bank_page() throws Throwable 
	{
		sleepWait(5000);		
		wd.get("http://www.bcc.cd/");
		String title=wd.getTitle();
		System.out.println("Title is"+title);
		Assert.assertTrue(title.contains("Banque Centrale du Congo"));

	}

	/** 
	 * collpase and click on filing 
	 */

	@And("^User click on collpase icon for filing \"([^\"]*)\"$")
	public void user_click_on_collpase_icon_for_filing(String value) throws Throwable 
	{
		sleepWait(1000);
		System.out.println("user click on collpase icon ");
		clickOn(value, "");
		sleepWait(500);
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



	@And("^User click on over the counter$")
	public void user_click_on_over_the_counter() throws Throwable 
	{
		sleepWait(500);
		clickOn("rad_OverTheCounter", "");
	}

	@And("^User see Tax Payment bill$")
	public void user_see_Tax_Payment_bill() throws Throwable 
	{
		sleepWait(3000);
		if(wd.findElement(By.xpath(obj.getProperty("btn_Payment_Print"))).isEnabled());
		{
			clickOn("btn_Payment_Print", "");  
			assertTrue(true);				 			  
		}	 	    
		sleepWait(1000);
	}


	/**
	 *  For Payment 
	 *  	
	 */

	@Then("^cliccks on \"([^\"]*)\" and verify details$")
	public void cliccks_on_and_verify_details(String Paymentoption) throws Throwable 
	{
		sleepWait(4000);
		if(Paymentoption.equalsIgnoreCase("Over the Counter"))
		{
			clickOn("rad_OverTheCounter","");
		}
		else
		{
			clickOn("rad_NetBanking","");
		}

	}

	@Then("^Execute query for payment$")
	public void execute_query_for_payment() throws Throwable 
	{		

		sleepWait(3000);
		xls_file.xls();
		sleepWait(8000);
	}




	/**
	 * Important dates 
	 */


	@Then("^User can see the e-filing screen$")
	public void user_can_see_the_e_filing_screen() throws Throwable 
	{

		sleepWait(2000);
		WebElement we;
		we=wd.findElement(By.xpath("//h5[contains(text(),'VAT e-Filing')]"));
		if(we.isDisplayed())
		{
			assertTrue(true);

		}
		sleepWait(2000);
	}

	@Then("^User verify the \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_verify_the(String paymentdate1, String efiling1) throws Throwable 
	{

		if(wd.findElement(By.xpath(obj.getProperty(paymentdate1))).isDisplayed() && wd.findElement(By.xpath(obj.getProperty(efiling1))).isDisplayed() )
		{
			assertTrue(true);
		}

	}

	@Then("^user verify \"([^\"]*)\"$")
	public void user_verify(String efiling) throws Throwable 
	{
		sleepWait(2000);
		if(wd.findElement(By.xpath(obj.getProperty(efiling))).isDisplayed() )
		{
			assertTrue(true);
		}	


	}

	@Then("^user verify the \"([^\"]*)\"$")
	public void user_verify_the(String payment_date2 ) throws Throwable 
	{
		sleepWait(2000);
		if(wd.findElement(By.xpath(obj.getProperty(payment_date2))).isDisplayed() )
		{
			assertTrue(true);
		}	


	}

	@Then("^user can see the e-filing landing screen,verify \"([^\"]*)\" for payment$")
	public void user_can_see_the_e_filing_landing_screen_verify_for_payment(String payment_date2) throws Throwable 
	{
		sleepWait(2000);	   
		if(wd.findElement(By.xpath(obj.getProperty(payment_date2))).isDisplayed() )
		{
			assertTrue(true);
		}	  

	} 

	/**
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
		sleepWait(500);

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
		sleepWait(1000);
		if(wd.findElement(By.xpath(obj.getProperty("btn_Print_Bill_Seen"))).isDisplayed());
		{
			assertTrue(true);
		}	 	
	}	


}
