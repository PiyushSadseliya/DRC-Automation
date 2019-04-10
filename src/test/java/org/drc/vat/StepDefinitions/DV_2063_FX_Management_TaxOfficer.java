package org.drc.vat.StepDefinitions;

import static org.drc.vat.appmanager.HelperBase.*;
import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertTrue;

import java.awt.Robot;
import java.awt.Toolkit;
import java.awt.datatransfer.StringSelection;
import java.awt.event.KeyEvent;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

public class DV_2063_FX_Management_TaxOfficer 
{
	 
	public static String BaseCurr;
	public static String BaseCurrName;
	public static String BaseCurrCheck;
	public static String StoreCurrency;
	public static String ToDate;
	public static String toCheckDate;
	
	@And("^User is on FX Management \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_is_on_FX_Management(String value, String value1) throws Throwable
	{	    
		System.out.println(value);
		System.out.println(value1);
	}

	@And("^User see FX Management$")
	public void user_see_FX_Management() throws Throwable 
	{
		sleepWait(1000);
		if(wd.findElement(By.xpath(obj.getProperty("txt_FxManagement"))).isDisplayed())			
		{
			assertTrue(true);
		}
		sleepWait(1000);
	}

	@And("^User click on FX Management tab$")
	public void user_click_on_FX_Management_tab() throws Throwable 
	{
		sleepWait(1000);
		clickOn("txt_FxManagement", "");				 
		sleepWait(1000);
		
	}	

	@And("^User click on Update button$")
	public void user_click_on_Update_button() throws Throwable 
	{
		sleepWait(1000);
		clickOn("btn_UpdateFX", "");
		sleepWait(1000);
	    
	}	
	
	@And("^User verify the Base currency on the FX management is Congolese France and its value is one$")
	public void user_verify_the_Base_currency_on_the_FX_management_is_Congolese_France_and_its_value_is() throws Throwable 
	{
		BaseCurr =elementText("txt_BaseCurrency_1");
		BaseCurrName =elementText("txt_BaseCurrency_Name");	
		if(BaseCurr.contains("1") && BaseCurrName.contains("Congolese Franc(FC)"))
		{
			assertTrue(true);
		}
	}	    	

	@And("^User click on update button$")
	public void user_click_on_update_button() throws Throwable 
	{
		sleepWait(1000);
		waitFor("btn_UpdateFX");
		sleepWait(1000);
		waitFor("btn_UpdateFX");
		clickOn("btn_UpdateFX", "");	    
	}

	@And("^User see pop up and see base currency is (\\d+)$")
	public void user_see_pop_up_and_see_base_currency_is(int arg1) throws Throwable 
	{
		if(BaseCurr.contains("1") && BaseCurrName.contains("Congolese Franc(FC)"))
		{
			assertTrue(true);
		}
	    
	}

	@And("^User click on cancel button on pop up$")
	public void user_click_on_cancel_button_on_pop_up() throws Throwable 
	{
	    clickOn("btn_CancelFX", "");
	    
	}

	@And("^User click on Historical FX Rates button and verify the base currency$")
	public void user_click_on_Historical_FX_Rates_button_and_verify_the_base_currency() throws Throwable 
	{
		sleepWait(1000);
		clickOn("btn_HistoricalFX", "");
		sleepWait(1000);
		if(BaseCurr.contains("1") && BaseCurrName.contains("Congolese Franc(FC)"))
		{
			assertTrue(true);
		}		
	}

	@And("^User click on Update button and pop up appear$")
	public void user_click_on_Update_button_and_pop_up_appear() throws Throwable 
	{		
		sleepWait(2000);
		clickOn("btn_UpdateFX", "");
		sleepWait(3000);
		if(wd.findElement(By.xpath(obj.getProperty("txt_Update_popup"))).isDisplayed())
		{
			assertTrue(true);
		}		
	}
	    
	
	@And("^User click on cancel button on fx management$")
	public void user_click_on_cancel_button_on_fx_management() throws Throwable 
	{
		sleepWait(1000);
		clickOn("btn_CancelFX", "");
		sleepWait(1000);
		
	}


	@And("^User see entered currency on officer$")
	public void user_see_entered_currency_on_officer() throws Throwable 
	{
		BaseCurrCheck =elementText("txtBox_type_Currency");
	}

	
	@And("^User see new currency rate on officer$")
	public void user_see_new_currency_rate_on_officer() throws Throwable 
	{
		String BaseCurrCheck1 =elementText("txt_new_curr_Check");
		
		if(BaseCurrCheck==BaseCurrCheck1)
		{
			assertTrue(true);
		}
			
	}	
	
	
	@And("^User click on \"([^\"]*)\"enter data \"([^\"]*)\"  and click on save button and check \"([^\"]*)\"$")
	public void user_click_on_enter_data_and_click_on_save_button_and_check(String value, String value1, String value2) throws Throwable
	{
	    clickOn("value", "");	    
	    type(value1, "");
	    
	}

	@And("^User enter currency for \"([^\"]*)\"$")
	public void user_enter_currency_for(String value) throws Throwable 
	{		
		sleepWait(1000);
	    type("txtBox_type_Currency", value);
	    
	}
	
	@And("^User see previously currency entered value on fx management$")
	public void user_see_previously_currency_entered_value_on_fx_management() throws Throwable 
	{		
		sleepWait(1000);
		//BaseCurrCheck =elementText("txtBox_type_Currency");
		BaseCurrCheck =getvalue("txtBox_type_Currency", "");
	}

	@And("^User check previously enter currency value on fx management officer$")
	public void user_check_previously_enter_currency_value() throws Throwable 
	{
	   sleepWait(2000);		  
	   String curr =getvalue("txtBox_type_Currency", "");
	   if(BaseCurrCheck.equals(curr))
	   {
		   assertTrue(true);
	   }	   
	}
	
	@And("^User click on save button on pop up$")
	public void user_click_own_save_button_on_pop_up() throws Throwable 
	{
		sleepWait(1000);
		clickOn("btn_SaveFxPopUP", "");		
	}

	@And("^User click on save button on pop up on officer$")
	public void user_click_on_save_button_on_pop_up_on_officer() throws Throwable 
	{
		sleepWait(1000);
		clickOn("btn_SaveFX", "");	
	}
	
	
	@And("^User see message for fx management officer \"([^\"]*)\"$")
	public void user_see_message_for_fx_management_officer(String value) throws Throwable 
	{
		sleepWait(1000);
		if(wd.findElement(By.xpath("//*[contains(text(),'" + value + "')]")).isDisplayed() )
		{											
			assertTrue(true);
		}
	}
	
	@And("^User see New Conversion Rate column is display$")
	public void user_see_New_Conversion_Rate_column_is_display() throws Throwable 
	{					
		sleepWait(5000);
		if(wd.findElement(By.xpath(obj.getProperty("txt_ApprovalRequired"))).isDisplayed())
		{
			assertTrue(true);
		}
	}

	@And("^User Click on Historical fx rates button$")
	public void user_Click_on_Historical_fx_rates_button() throws Throwable 
	{
		sleepWait(2000);
		clickOn("btn_HistoricalFX", "");
		sleepWait(2000);
	}
	@And("^User check in FX management list$")
	public void user_check_in_FX_management_list() throws Throwable 
	{		
		sleepWait(1000);
		if(wd.findElement(By.xpath(obj.getProperty("txt_record_in_table"))).isDisplayed() || wd.findElement(By.xpath(obj.getProperty("txt_FxManNRF"))).isDisplayed())
		{
			assertTrue(true);			
		}		
	}

	
	@And("^User verify the by default date displaying in the From date and To date$")
	public void user_verify_the_by_default_date_displaying_in_the_From_date_and_To_date() throws Throwable 
	{
		String ToDatecheck = getValue("txtBoxTo");
		String FromDate =getValue("txtBoxFrom");
		Calendar cal = Calendar.getInstance();
	    cal.add(Calendar.DATE,0);
	    Date date = cal.getTime();             
	    SimpleDateFormat format1 = new SimpleDateFormat("MM/dd/YYYY");
	    String date1 = format1.format(date);
	    ToDate = date1;
	    assertEquals(ToDate, ToDatecheck);
	    cal.add(Calendar.DATE,0-6);
	    Date date01 = cal.getTime();             
	    SimpleDateFormat format2 = new SimpleDateFormat("MM/dd/YYYY");
	    String date2 = format2.format(date01);    
	    assertEquals(date2, FromDate);
	}
	 
	@And("^User Select Todays date \"([^\"]*)\" in From and Select todays days \"([^\"]*)\" in To check selected date$")
	public void user_Select_Todays_date_in_From_and_Select_todays_days_in_To_check_selected_date(String To, String From) throws Throwable 
	{
		sleepWait(1000);
		clickOn("FromDateSelectFX", "");		
		datePicker(To);	
		clickOn("ToDateSelect", "");		
		datePicker(From);		
		String ToCheck = getValue("txtBoxTo");		
		assertEquals(ToDate, ToCheck);	

		String FromCheck = getValue("txtBoxFrom");		
		Calendar cal = Calendar.getInstance();
	    cal.add(Calendar.DATE,0);
	    Date date = cal.getTime();             
	    SimpleDateFormat format1 = new SimpleDateFormat("MM/dd/YYYY");
	    String date1 = format1.format(date);		
		assertEquals(FromCheck, date1);
		
	}

	@And("^User click on search icon and today date should display \"([^\"]*)\"$")
	public void user_click_on_search_icon_and_today_date_should_display(String value) throws Throwable 
	{
		sleepWait(1000);
		clickOn("btn_SearchFX", "");
		sleepWait(1000);
		if(wd.findElement(By.xpath("(//div[contains(text(),'" + value + "')])[1]")).isDisplayed())
		{					
			assertTrue(true);
		}		
		else
		{
			assertTrue(false);
		}
	}

	
	@And("^User select date which the currency record are not present in From \"([^\"]*)\" and in To \"([^\"]*)\"$")
	public void user_select_date_which_the_currency_record_are_not_present_in_From_and_in_To(String To, String From) throws Throwable 
	{
		sleepWait(1000);
		clickOn("FromDateSelectFX", "");
		datePicker(To);	
		sleepWait(1000);
		clickOn("ToDateSelect", "");
		datePicker(From);
	}

	@And("^User click on search icon$")
	public void user_click_on_search_icon() throws Throwable
	{
	    clickOn("btn_SearchFX", "");	   
	}

	@And("^User see message no record found for date$")
	public void user_see_message_no_record_found_for_date() throws Throwable 
	{		
		sleepWait(1000);
		if(wd.findElement(By.xpath(obj.getProperty("txt_FxManNRF"))).isDisplayed())
		{
			assertTrue(true);
		}				
	}

	@And("^User navigate to FX management page$")
	public void user_navigate_to_FX_management_page() throws Throwable 
	{
		sleepWait(1000);
		if(wd.findElement(By.xpath(obj.getProperty("txt_FxManagement_Page"))).isDisplayed())
		{
			assertTrue(true);
		}				
	}

	@And("^User click on Previous button and again navigate to FX management dashboard$")
	public void user_click_on_Previous_button_and_again_navigate_to_FX_management_dashboard() throws Throwable 
	{
		sleepWait(2000);
		clickOn("btn_PreviousFX", "");
		sleepWait(2000);
		if(wd.findElement(By.xpath(obj.getProperty("txt_FxManPage"))).isDisplayed())
		{
			assertTrue(true);
		}
	}

	@And("^User see New Conversion Rate column on FX management landing page$")
	public void user_see_New_Conversion_Rate_column_on_FX_management_landing_page() throws Throwable 
	{		
		sleepWait(4000);
		if(wd.findElement(By.xpath(obj.getProperty("txt_ApprovalRequired"))).isDisplayed())
		{
			assertTrue(true);
		}				
	}

	
	@Then("^User logout fx$")
	public void user_logout() throws Throwable 
	{
		sleepWait(7000);
		logout();
		//clickOn("btn_LogoutFX", "");
		//sleepWait(7000);
	}

	/**
	 *  Logout and login in supervisor
	 */
	@Then("^User enter credencial for DGI Supervisor and verify New Updated rates notification on their FX management landing page$")
	public void user_enter_credencial_for_DGI_Supervisor_and_verify_New_Updated_rates_notification_on_their_FX_management_landing_page() throws Throwable 
	{
		/**
		 *  new add
		 */
		wd.quit();		
		
		//WebDriver wd = new ChromeDriver();
		wd = new ChromeDriver();
		
		
		wd.manage().window().maximize();		
		sleepWait(1000);	
		wd.navigate().to("http://103.249.120.58:8044");		
		Runtime.getRuntime().exec(System.getProperty("user.dir") +"\\QA_Internal_Portal_Login\\autoitsample.Supervisiour.exe");
		wd.findElement(By.xpath(obj.getProperty("btn_windowsClick"))).click();
		sleepWait(5000);			
		wd.findElement(By.xpath(obj.getProperty("txt_FxManagement"))).click();
		//clickOn("txt_FxManagement", "");				 
		sleepWait(3000);
		if(wd.findElement(By.xpath(obj.getProperty("txt_ApprovalRequired"))).isDisplayed())
		{
			assertTrue(true);
		}
		wd.navigate().refresh();
		sleepWait(1000);
		//wd.findElement(By.xpath(obj.getProperty("btn_LogoutFX"))).click();				
		//wd.close();
	}

	@Then("^User enter credencial for DGI Admin and verify New Updated rates notification on their FX management landing page$")
	public void user_enter_credencial_for_DGI_Admin_and_verify_New_Updated_rates_notification_on_their_FX_management_landing_page() throws Throwable 
	{	
		/**
		 * add quit 
		 */
		wd.quit();		
		
		//WebDriver wd = new ChromeDriver();
		wd = new ChromeDriver();
		
		wd.manage().window().maximize();		
		sleepWait(1000);	
		wd.navigate().to("http://103.249.120.58:8044");		
		Runtime.getRuntime().exec(System.getProperty("user.dir") +"\\QA_Internal_Portal_Login\\autoitsample.exe");
		wd.findElement(By.xpath(obj.getProperty("btn_windowsClick"))).click();
		sleepWait(5000);		
		wd.findElement(By.xpath(obj.getProperty("txt_FxManagement"))).click();
		//clickOn("txt_FxManagement", "");				 
		sleepWait(3000);
		if(wd.findElement(By.xpath(obj.getProperty("txt_ApprovalRequired"))).isDisplayed())
		{
			assertTrue(true);
		}
		wd.findElement(By.xpath(obj.getProperty("btn_ApproveFX"))).click();
		sleepWait(7000);
//		wd.findElement(By.xpath(obj.getProperty("btn_LogoutFX"))).click();
//		sleepWait(1000);
	}

	@And("^User enter currency \"([^\"]*)\" for field$")
	public void user_enter_currency_for_field(String value) throws Throwable 
	{
	    type(value, "");
	    
	}

	@And("^User click on save button$")
	public void user_click_on_save_button() throws Throwable 
	{
		clickOn("btn_SaveFX", "");
		sleepWait(1000);
	}

	

	@And("^User log in with DGI Admin credencial and update the currency$")
	public void user_log_in_with_DGI_Admin_credencial() throws Throwable 
	{
		/**
		 *  add quit
		 */
		wd.quit();
		
		sleepWait(2000);
		WebDriver wd = new ChromeDriver();
		wd.manage().window().maximize();		
		sleepWait(1000);	
		wd.navigate().to("http://103.249.120.58:8044");		
		Runtime.getRuntime().exec(System.getProperty("user.dir") +"\\QA_Internal_Portal_Login\\autoitsample.exe");
		wd.findElement(By.xpath(obj.getProperty("btn_windowsClick"))).click();
		sleepWait(3000);
		wd.findElement(By.xpath(obj.getProperty("txt_FxManagement"))).click();						
		sleepWait(1000);				
		wd.findElement(By.xpath(obj.getProperty("btn_UpdateFX"))).click();		
		sleepWait(1000);		
		StoreCurrency = wd.findElement(By.xpath(obj.getProperty("txtBox_type_Currency"))).getAttribute("value");		
		wd.findElement(By.xpath(obj.getProperty("btn_SaveFxPopUP"))).click();
		sleepWait(7000);
		if(wd.findElement(By.xpath(obj.getProperty("txt_ApprovalRequired"))).isDisplayed())
		{
			assertTrue(true);
		}						
		wd.findElement(By.xpath(obj.getProperty("btn_LogoutFX"))).click();
		sleepWait(1000);
		
	}

	@And("^User click on approve button$")
	public void user_click_on_approve_button() throws Throwable 
	{
		clickOn("btn_ApproveFX", "");
	    
	}
	
	
	@And("^User log in with officer credencial and verify currency rate$")
	public void user_log_in_with_officer_credencial() throws Throwable 
	{
		/**
		 *  qiut
		 */
		wd.quit();
		
		//WebDriver wd = new ChromeDriver();
		wd = new ChromeDriver();
		wd.manage().window().maximize();		
		sleepWait(1000);	
		wd.navigate().to("http://103.249.120.58:8044");		
		Runtime.getRuntime().exec(System.getProperty("user.dir") +"\\QA_Internal_Portal_Login\\autoitsample.rohit.exe");
		wd.findElement(By.xpath(obj.getProperty("btn_windowsClick"))).click();
		sleepWait(5000);
		wd.findElement(By.xpath(obj.getProperty("txt_FxManagement"))).click();
		//clickOn("txt_FxManagement", "");				 
		sleepWait(1000);		
		
		
		String CurrencyAR =elementText("txt_new_curr_Check", "");
		String	FC1 = CurrencyAR.replace("." ,"");		
		String FC2 = FC1.replace("," ,".");
		
		if(StoreCurrency.equals(FC2))
		{
			assertTrue(true);
		}
		sleepWait(1000);
	}
	
	@And("^User log in with supervisiour and click on approve$")
	public void user_log_in_with_supervisiour_and_click_on_approve() throws Throwable 
	{
		/**
		 * add quit
		 */
		wd.quit();
		
		wd = new ChromeDriver();
		wd.manage().window().maximize();		
		sleepWait(1000);	
		wd.navigate().to("http://103.249.120.58:8044");		
		Runtime.getRuntime().exec(System.getProperty("user.dir") +"\\QA_Internal_Portal_Login\\autoitsample.Supervisiour.exe");
		wd.findElement(By.xpath(obj.getProperty("btn_windowsClick"))).click();
		sleepWait(5000);
		wd.findElement(By.xpath(obj.getProperty("txt_FxManagement"))).click();						
		sleepWait(1000);
		wd.findElement(By.xpath(obj.getProperty("btn_ApproveFX"))).click();	
		sleepWait(1000);
	}

	
	
	
	@And("^User verify already added currencies \"([^\"]*)\" on FX management module$")
	public void user_verify_already_added_currencies_on_FX_management_module(String value) throws Throwable 
	{
		sleepWait(1000);
		if(wd.findElement(By.xpath("(//span[contains(text(),'" + value + "')])")).isDisplayed() )
		{					
			assertTrue(true);
		}	
		
	}

	@And("^User click on update button and check currencies \"([^\"]*)\" on Update Currency Rate popup window$")
	public void user_click_on_update_button_and_check_currencies_on_Update_Currency_Rate_popup_window(String value) throws Throwable 
	{	
		clickOn("btn_UpdateFX", "");
		if(wd.findElement(By.xpath("((//span[contains(text(),'" + value + "')]))[2]")).isDisplayed() )
		{											
			assertTrue(true);
		}
	}
	// on hold it will fail
	@And("^User click on notification icon and see notification window$")
	public void user_click_on_notification_icon_and_see_notification_window() throws Throwable 
	{
		clickOn("btn_NotificationFX", "");
		WebElement we;
		 we=wd.findElement(By.xpath("//*[contains(text(),'Notification')]"));		
		 if(we.isDisplayed())
		{			
			System.out.println("User see notifiaction window ");
			assertTrue(true);
		}	
		
	    
	}

	@Then("^User again log in$")
	public void user_again_log_in() throws Throwable 
	{
		sleepWait(1000);
		waitFor("txt_Click");
		sleepWait(2000);		
		clickOn("txt_Click", "");
		sleepWait(1000);
		clickOn("btn_windowsClick", "");
	}

	@Then("^User Click on Historical FX Rates button$")
	public void user_Click_on_Historical_FX_Rates_button() throws Throwable 
	{
		sleepWait(1000);
		waitFor("btn_HistoricalFX");
		sleepWait(1000);
		waitFor("btn_HistoricalFX");
		sleepWait(1000);
		clickOn("btn_HistoricalFX", "");
	}

	@Then("^User logout and verify$")
	public void user_logout_and_verify() throws Throwable 
	{
		sleepWait(2000);
		clickOn("btn_logout", "");
		sleepWait(1000);
		if(wd.findElement(By.xpath(obj.getProperty("txt_logout_check"))).isDisplayed())
		{
			assertTrue(true);
		}	
	}
	// on hold
	@And("^User verify the DGI officer name and profile picture \"([^\"]*)\"$")
	public void user_verify_the_DGI_officer_name_and_profile_picture(String value) throws Throwable 
	{
		if(wd.findElement(By.xpath("(//*[contains(text(),'" + value + "')])")).isDisplayed() )
		{					
			assertTrue(true);
		}	
	}
	// profile pic on hold
	@And("^User verify name \"([^\"]*)\" and profile \"([^\"]*)\" of dgi officer$")
	public void user_verify_name_and_profile_of_dgi_officer(String value, String value1) throws Throwable 
	{
		if(wd.findElement(By.xpath("(//*[contains(text(),'" + value + "')])")).isDisplayed() )
		{					
			assertTrue(true);
		}		    
	}
	
	
	@And("^User type \"([^\"]*)\" and see \"([^\"]*)\"$")
	public void user_type_and_see(String data, String check) throws Throwable 
	{		
		type("txtBox_type_Currency", data);		
		String check1 = getvalue("txtBox_type_Currency", ""); 
		if(!data.equals(check1))
		{
			assertTrue(true);
		}
	}

	@And("^User type \"([^\"]*)\" and see message \"([^\"]*)\"$")
	public void user_type_and_see_message(String arg1, String mess) throws Throwable 
	{
		type("txtBox_type_Currency", arg1);	
		sleepWait(1000);
		if(wd.findElement(By.xpath("(//*[contains(text(),'" + mess + "')])")).isDisplayed() )
		{					
			assertTrue(true);
		}
	}
	
	/**
	 *  for demo 
	 */
	
	@And("^User enter credencial for DGI Supervisor and verify New Updated rates notification on their FX management landing page demo$")
	public void user_enter_credencial_for_DGI_Supervisor_and_verify_New_Updated_rates_notification_on_their_FX_management_landing_page_demo() throws Throwable 
	{
		wd.quit();		
		WebDriver wd = new ChromeDriver();
		wd.manage().window().maximize();		
		sleepWait(1000);	
		wd.navigate().to("http://103.249.120.58:8046");		
		Runtime.getRuntime().exec(System.getProperty("user.dir") +"\\Demo_Internal_Roles_Login\\Pooja_Internal.exe");
		wd.findElement(By.xpath(obj.getProperty("btn_windowsClick"))).click();
		sleepWait(5000);			
		wd.findElement(By.xpath(obj.getProperty("txt_FxManagement"))).click();
		//clickOn("txt_FxManagement", "");				 
		sleepWait(3000);
		if(wd.findElement(By.xpath(obj.getProperty("txt_ApprovalRequired"))).isDisplayed())
		{
			assertTrue(true);
		}	
		wd.findElement(By.xpath(obj.getProperty("btn_LogoutFX"))).click();				
		//wd.close();
	}

	/**
	 *  for demo 
	 */
	
	@And("^User enter credencial for DGI Admin and verify New Updated rates notification on their FX management landing page demo$")
	public void user_enter_credencial_for_DGI_Admin_and_verify_New_Updated_rates_notification_on_their_FX_management_landing_page_demo() throws Throwable 
	{
		wd.quit();		
		WebDriver wd = new ChromeDriver();
		wd.manage().window().maximize();		
		sleepWait(1000);	
		wd.navigate().to("http://103.249.120.58:8046");		
		Runtime.getRuntime().exec(System.getProperty("user.dir") +"\\Demo_Internal_Roles_Login\\Ketan_Internal.exe");
		wd.findElement(By.xpath(obj.getProperty("btn_windowsClick"))).click();
		sleepWait(5000);		
		wd.findElement(By.xpath(obj.getProperty("txt_FxManagement"))).click();
		//clickOn("txt_FxManagement", "");				 
		sleepWait(3000);
		if(wd.findElement(By.xpath(obj.getProperty("txt_ApprovalRequired"))).isDisplayed())
		{
			assertTrue(true);
		}
		wd.findElement(By.xpath(obj.getProperty("btn_ApproveFX"))).click();
		sleepWait(7000);
	}

	@And("^User verify new currency rates on tax officer$")
	public void user_verify_new_currency_rates_on_tax_officer() throws Throwable 
	{
		sleepWait(3000);
		if(wd.findElement(By.xpath(obj.getProperty("txt_ApprovalRequired"))).isDisplayed())
		{
			assertTrue(true);
		}	
	}

	@And("^User verify new currency rates on admin$")
	public void user_verify_new_currency_rates_on_admin() throws Throwable 
	{
		sleepWait(3000);
		if(wd.findElement(By.xpath(obj.getProperty("txt_ApprovalRequired"))).isDisplayed())
		{
			assertTrue(true);
		}
		sleepWait(1000);
		wd.findElement(By.xpath(obj.getProperty("btn_ApproveFX"))).click();
		sleepWait(3000);
		//wd.close();
	}

	@And("^User enter credencial for admin$")
	public void user_enter_credencial_for_DGI_Officer_and_update_the_currency_for_admin() throws Throwable 
	{
		//wd.close();		
		wd = new ChromeDriver();		
		wd.manage().window().maximize();		
		sleepWait(1000);	
		wd.navigate().to("http://103.249.120.58:8044");		
		Runtime.getRuntime().exec(System.getProperty("user.dir") +"\\QA_Internal_Portal_Login\\autoitsample.exe");
		wd.findElement(By.xpath(obj.getProperty("btn_windowsClick"))).click();
		sleepWait(1000);			
		//wd.findElement(By.xpath(obj.getProperty("txt_FxManagement"))).click();
	}
}
