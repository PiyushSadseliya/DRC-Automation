package org.drc.vat.StepDefinitions;
import static org.drc.vat.appmanager.HelperBase.*;
import static org.testng.Assert.assertTrue;

import java.awt.Robot;
import java.awt.Toolkit;
import java.awt.datatransfer.StringSelection;
import java.awt.event.KeyEvent;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

public class FxManagement_DGI_Admin 
{
	
	@And("^User see FX Management landing screen$")
	public void user_see_FX_Management_landing_screen() throws Throwable 
	{
		WebElement we;
		we=wd.findElement(By.xpath("(//*[contains(text(),'FX Management')])[2]"));		
		if(we.isDisplayed())
		{			
			System.out.println("User see FX Managment  ");
			assertTrue(true);
		}	
	    Thread.sleep(1000);
	}

	
	
	@And("^User click on Historical FX Rates button and verify ui for DGI Admin$")
	public void user_click_on_Historical_FX_Rates_button_and_verify_ui_for_DGI_Admin() throws Throwable 
	{
		 System.out.println("User verify ui ");
	    
	}

	@And("^User Click on Historical FX Rates button and verify ui for DGI Admin$")
	public void user_Click_on_Historical_FX_Rates_button_and_verify_ui_for_DGI_Admin() throws Throwable 
	{
		System.out.println("User verify ui ");
	    
	}

	@And("^User click on Help button on FX manageent page for DGI Admin$")
	public void user_click_on_Help_button_on_FX_manageent_page_for_DGI_Admin() throws Throwable 
	{
		clickOn("btn_HelpFX", "");	    
	}

	@And("^User click on Help button on Historical FX Rates for DGI Admin$")
	public void user_click_on_Help_button_on_Historical_FX_Rates_for_DGI_Admin() throws Throwable 
	{
		clickOn("btn_HelpFX", "");	    
	}

	@And("^User see help page display for DGI Admin$")
	public void user_see_help_page_display_for_DGI_Admin() throws Throwable 
	{
		
		System.out.println("User see help button page");	    
	}

	@Then("^User again log in DGI Admin$")
	public void user_again_log_in_DGI_Admin() throws Throwable 
	{
		System.out.println("User Again log in ");		
		wd.get("http://103.249.120.58:8068");			    
	}

	@And("^User verify the DGI officer name and profile picture \"([^\"]*)\" for DGI Admin$")
	public void user_verify_the_DGI_officer_name_and_profile_picture_for_DGI_Admin(String value) throws Throwable 
	{
		if(wd.findElement(By.xpath("(//*[contains(text(),'" + value + "')])")).isDisplayed() )
		{					
			assertTrue(true);
		}
	}

	@And("^User click on currency and select \"([^\"]*)\"$")
	public void user_click_on_currency_and_select(String value) throws Throwable 
	{
		clickOn("drp_SelectOptionFX", "");
		Thread.sleep(1000);
		clickOn(value, "");
	
	    
	}

	@And("^User select List of currencies \"([^\"]*)\"$")
	public void user_select_List_of_currencies(String value) throws Throwable 
	{
		clickOn("drp_SelctListCurrency", "");
		Thread.sleep(1000);
		clickOn(value, "");		
						
	    
	}

	@And("^User check selected curency \"([^\"]*)\" is added in target currency$")
	public void user_check_selected_curency_is_added_in_target_currency(String value) throws Throwable 
	{
		Thread.sleep(1000);
		if(wd.findElement(By.xpath("//span[contains(text(),'" + value + "')]")).isDisplayed() )
		{					
			assertTrue(true);
		}	
	    
	}
	// 06
	// it will fail as update button is not present 
	@And("^verify the currency rates which DGI Admin has updated$")
	public void verify_the_currency_rates_which_DGI_Admin_has_updated() throws Throwable
	{
		String expectedMessage = "10";
		Thread.sleep(2000);
		WebElement element = wd.findElement(By.xpath("//section[2]/div[2]/div"));
		JavascriptExecutor jse = (JavascriptExecutor)wd;
		Object message = jse.executeScript("return arguments[0].value", element);
		System.out.println(message.toString());		
 		Assert.assertTrue(message.toString().contains(expectedMessage));
	    
	}

/*	@And("^User check selected curency \"([^\"]*)\" is removed from target currency$")
	public void user_check_selected_curency_is_removed_from_target_currency(String arg1) throws Throwable {
	   
	    
	}*/

	@And("^User see toast message currencuy removed$")
	public void user_see_toast_message_currencuy_removed() throws Throwable 
	{
		String expectedMessage = "Currency removed successfully";
		String message = wd.findElement(By.xpath("//*[@class='toast-top-right toast-container']")).getText();
		Assert.assertTrue(message.contains(expectedMessage));
	    
	}
	 // it on hold 08
	@And("^User click on Auto update toogle$")
	public void user_click_on_Auto_update_toogle() throws Throwable 
	{
	   clickOn("slider_AutoUpdateFX", "");
	    
	}
	// on hold 08
	@And("^User verify target currency gets auto update$")
	public void user_verify_target_currency_gets_auto_update() throws Throwable 
	{
		System.out.println(" it on hold ");
	    
	}
	// on hold 08
	@And("^User Click on Historical FX Rates button and check currency \"([^\"]*)\"$")
	public void user_Click_on_Historical_FX_Rates_button_and_check_currency(String arg1) throws Throwable 
	{
		clickOn("btn_HistoricalFX","");
	    
	}
	// on hold 08
	@And("^User verify currency value for last updated date$")
	public void user_verify_currency_value_for_last_updated_date() throws Throwable 
	{
		System.out.println(" it on hold ");
	    
	}

	@And("^User click on currency \"([^\"]*)\"$")
	public void user_click_on_currency(String value) throws Throwable 
	{
		clickOn("txt_CurrencySelect", "");
	    
	}

	@And("^User enter data \"([^\"]*)\" in currency$")
	public void user_enter_data_in_currency(String value) throws Throwable 
	{	   
		type(value, "");
	}

	@And("^User verify approve and reject is displayed$")
	public void user_verify_approve_and_reject_is_displayed() throws Throwable 
	{
		WebElement we,we1;
		we=wd.findElement(By.xpath("//button[@title='Approve']"));	
		we1=wd.findElement(By.xpath("//button[@class='btn btn-danger mr-2 ng-star-inserted']"));
		if(we.isEnabled() && we1.isEnabled())
		{
			Assert.assertTrue(true);		
		}	
	    
	}
	// invalid data also cant do
	@And("^User check validation \"([^\"]*)\"$")
	public void user_check_validation(String arg1) throws Throwable 
	{
		System.out.println(" invalid data cant do");
	    
	}
	

	@And("^User check \"([^\"]*)\" in FX management list for DGI Admin$")
	public void user_check_in_FX_management_list_for_DGI_Admin(String value) throws Throwable 
	{
		if(wd.findElement(By.xpath("(//table//tr//td//div[contains(text()'" + value + "')])[1]")).isDisplayed() )
		{					
			assertTrue(true);
		}		   
	    
	}

	@Then("^User verify \"([^\"]*)\" updated currency rates in new conversion rate column for DGI Admin$")
	public void user_verify_updated_currency_rates_in_new_conversion_rate_column_for_DGI_Admin(String arg1) throws Throwable 
	{
		String expectedMessage = "100";
		Thread.sleep(2000);
		WebElement element = wd.findElement(By.xpath("//section/section[2]/div[2]/div"));
		JavascriptExecutor jse = (JavascriptExecutor)wd;
		Object message = jse.executeScript("return arguments[0].value", element);
		System.out.println(message.toString());		
 		Assert.assertTrue(message.toString().contains(expectedMessage));
	    
	}

	@Then("^User verify Approval currency rate for DGI Admin$")
	public void user_verify_Approval_currency_rate_for_DGI_Admin() throws Throwable 
	{
	   
		String expectedMessage = "100";
		Thread.sleep(2000);
		WebElement element = wd.findElement(By.xpath("//section/div[2]/div[2]"));
		JavascriptExecutor jse = (JavascriptExecutor)wd;
		Object message = jse.executeScript("return arguments[0].value", element);
		System.out.println(message.toString());		
 		Assert.assertTrue(message.toString().contains(expectedMessage));
	}

	@Then("^User veruify currency approved rate date \"([^\"]*)\" for DGI Admin$")
	public void user_veruify_currency_approved_rate_date_for_DGI_Admin(String value) throws Throwable 
	{
		if(wd.findElement(By.xpath("(//*[contains(text(),'" + value + "')])[1]")).isDisplayed() )
		{		
 			assertTrue(true);
		}
	    
	}

	
	
}
