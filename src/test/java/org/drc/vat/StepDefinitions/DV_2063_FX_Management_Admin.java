package org.drc.vat.StepDefinitions;
import static org.drc.vat.appmanager.HelperBase.*;
import static org.testng.Assert.assertTrue;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.And;

public class DV_2063_FX_Management_Admin 
{
	
	public String StoreCurrencyAdmin;
	
	@And("^User verify the name and profile picture \"([^\"]*)\"$")
	public void user_verify_the_name_and_profile_picture(String value) throws Throwable 
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
		
	
	
	
	@And("^User click on List of currencies and select currency$")
	public void user_click_on_List_of_currencies_and_select_currency() throws Throwable 
	{
		sleepWait(1000);
	   clickOn("drp_select_LOC", "");
	   sleepWait(1000);	   
	  
	   sleepWait(1000);
	   clickOn("drp_select_LOC_first", "");
	}

	@And("^User click on Save button and see message \"([^\"]*)\"$")
	public void user_click_on_Save_button_and_see_message(String value) throws Throwable 
	{
		clickOn("btn_SaveFX", "");
		sleepWait(3000);
		
		if(wd.findElement(By.xpath("//*[contains(text(),'" + value + "')]")).isDisplayed() )
		{											
			assertTrue(true);
		}
	}

	@And("^User see mess for admin \"([^\"]*)\"$")
	public void user_see_mess_for_admin(String value) throws Throwable
	{
		if(wd.findElement(By.xpath("//*[contains(text(),'" + value + "')]")).isDisplayed() )
		{											
			assertTrue(true);
		}
	}
	
	@And("^User see reject and approve is disable on admin$")
	public void user_see_reject_and_approve_is_disable_on_admin() throws Throwable 
	{
		sleepWait(1000);		
		if(!wd.findElement(By.xpath(obj.getProperty("btn_ApproveFX"))).isEnabled() && !wd.findElement(By.xpath(obj.getProperty("btn_RejectFX"))).isEnabled() )
		{
			assertTrue(true);
		}		
	}
	
	@And("^User enter credencial for DGI Admin and verify Approve and user see toast mess \"([^\"]*)\"$")
	public void user_enter_credencial_for_DGI_Supervisor_and_verify_Approve_and_user_see_toast_mess(String value) throws Throwable 
	{
		sleepWait(1000);
		WebDriver wd = new ChromeDriver();
		wd.manage().window().maximize();		
		sleepWait(1000);	
		wd.navigate().to("http://103.249.120.58:8044");		
		Runtime.getRuntime().exec(System.getProperty("user.dir") +"\\QA_Internal_Portal_Login\\autoitsample.exe");
		wd.findElement(By.xpath(obj.getProperty("btn_windowsClick"))).click();
		sleepWait(5000);			
		wd.findElement(By.xpath(obj.getProperty("txt_FxManagement"))).click();
		sleepWait(1000);
		wd.findElement(By.xpath(obj.getProperty("btn_ApproveFX"))).click();
		sleepWait(1000);		
		if(wd.findElement(By.xpath("//*[contains(text(),'" + value + "')]")).isDisplayed() )
		{											
			assertTrue(true);
		}
		wd.close();
		
	}
	
	@And("^User enter credencial for DGI Admin and verify Reject and user see toast mess \"([^\"]*)\"$")
	public void user_enter_credencial_for_DGI_Supervisor_and_verify_Reject_and_user_see_toast_mess(String value) throws Throwable
	{
		WebDriver wd = new ChromeDriver();
		wd.manage().window().maximize();		
		sleepWait(1000);	
		wd.navigate().to("http://103.249.120.58:8044");		
		Runtime.getRuntime().exec(System.getProperty("user.dir") +"\\QA_Internal_Portal_Login\\autoitsample.exe");
		wd.findElement(By.xpath(obj.getProperty("btn_windowsClick"))).click();
		sleepWait(5000);			
		wd.findElement(By.xpath(obj.getProperty("txt_FxManagement"))).click();
		sleepWait(1000);
		wd.findElement(By.xpath(obj.getProperty("btn_RejectFX"))).click();
		sleepWait(5000);		
		if(wd.findElement(By.xpath("//*[contains(text(),'" + value + "')]")).isDisplayed() )
		{
			assertTrue(true);
		}
	}
	
	
	/*@And("^User click on Approve and user see toast mess \"([^\"]*)\"$")
	public void user_click_on_Approve_and_user_see_toast_mess(String value) throws Throwable 
	{
		sleepWait(1000);
		wd.findElement(By.xpath(obj.getProperty("btn_ApproveFX"))).click();
		if(wd.findElement(By.xpath("//*[contains(text(),'" + value + "')]")).isDisplayed() )
		{											
			assertTrue(true);
		}
	}*/
	
	
	@And("^User log in with officer credencial and update the currency$")
	public void user_log_in_with_officer_credencial_and_update_the_currency() throws Throwable 
	{
		WebDriver wd = new ChromeDriver();
		wd.manage().window().maximize();		
		sleepWait(1000);	
		wd.navigate().to("http://103.249.120.58:8044");		
		Runtime.getRuntime().exec(System.getProperty("user.dir") +"\\QA_Internal_Portal_Login\\autoitsample.rohit.exe");
		wd.findElement(By.xpath(obj.getProperty("btn_windowsClick"))).click();
		sleepWait(5000);
		wd.findElement(By.xpath(obj.getProperty("txt_FxManagement"))).click();
		sleepWait(1000);		
		wd.findElement(By.xpath(obj.getProperty("btn_UpdateFX"))).click();		
		sleepWait(3000);		
		StoreCurrencyAdmin  = wd.findElement(By.xpath(obj.getProperty("txtBox_type_Currency"))).getAttribute("value");
		//StoreCurrencyAdmin = elementText("txtBox_type_Currency");
		sleepWait(1000);
		wd.findElement(By.xpath(obj.getProperty("btn_SaveFX"))).click();
		sleepWait(1000);
	}

	
/*	@And("^User log in with DGI Admin credencial and verify currency$")
	public void user_log_in_with_DGI_Admin_credencial_and_verify_currency() throws Throwable 
	{
		//WebDriver wd = new ChromeDriver();		
		wd = new ChromeDriver();
		wd.manage().window().maximize();		
		sleepWait(1000);	
		wd.navigate().to("http://103.249.120.58:8044");		
		Runtime.getRuntime().exec(System.getProperty("user.dir") +"\\QA_Internal_Portal_Login\\autoitsample.exe");
		wd.findElement(By.xpath(obj.getProperty("btn_windowsClick"))).click();
		sleepWait(5000);			
		wd.findElement(By.xpath(obj.getProperty("txt_FxManagement"))).click();
		sleepWait(1000);
		
		String CheckCurrency = elementText("txt_new_curr_Check");	
		String	FC1 = CheckCurrency.replace("." ,"");		
		String FC2 = FC1.replace("," ,".");
		if(StoreCurrencyAdmin.equals(FC2))
		{
			assertTrue(true);
		}
		sleepWait(1000);				
		
	}*/
	
	
	
	@And("^User log in with DGI Admin credencial and verify currency and approve the currency and see mess \"([^\"]*)\"$")
	public void user_log_in_with_DGI_Admin_credencial_and_verify_currency_and_approve_the_currency_and_see_mess(String value) throws Throwable 
	{
		wd = new ChromeDriver();
		wd.manage().window().maximize();		
		sleepWait(1000);	
		wd.navigate().to("http://103.249.120.58:8044");		
		Runtime.getRuntime().exec(System.getProperty("user.dir") +"\\QA_Internal_Portal_Login\\autoitsample.exe");
		wd.findElement(By.xpath(obj.getProperty("btn_windowsClick"))).click();
		sleepWait(5000);			
		wd.findElement(By.xpath(obj.getProperty("txt_FxManagement"))).click();
		sleepWait(1000);		
		
		String CheckCurrency = elementText("txt_new_curr_Check");	
		String	FC1 = CheckCurrency.replace("." ,"");		
		String FC2 = FC1.replace("," ,".");
		
		if(StoreCurrencyAdmin.equals(FC2))
		{
			assertTrue(true);
		}
		sleepWait(1000);				
				
		wd.findElement(By.xpath(obj.getProperty("btn_ApproveFX"))).click();
		sleepWait(1000);
		if(wd.findElement(By.xpath("//*[contains(text(),'" + value + "')]")).isDisplayed() )
		{											
			assertTrue(true);
		}		
		sleepWait(1000);
		
	}

	
	
	
	
	@And("^User enter credencial for DGI Officer and update the currency and close$")
	public void user_enter_credencial_for_DGI_Officer_and_update_the_currency() throws Throwable 
	{
		sleepWait(1000);		
		wd = new ChromeDriver();
		//WebDriver wd = new ChromeDriver();
		wd.manage().window().maximize();		
		sleepWait(1000);	
		wd.navigate().to("http://103.249.120.58:8044");		
		Runtime.getRuntime().exec(System.getProperty("user.dir") +"\\QA_Internal_Portal_Login\\autoitsample.rohit.exe");
		wd.findElement(By.xpath(obj.getProperty("btn_windowsClick"))).click();
		sleepWait(1000);			
		wd.findElement(By.xpath(obj.getProperty("txt_FxManagement"))).click();
		//clickOn("txt_FxManagement", "");				 
		sleepWait(1000);
		wd.findElement(By.xpath(obj.getProperty("btn_UpdateFX"))).click();
		sleepWait(1000);								
		wd.findElement(By.xpath(obj.getProperty("btn_SaveFX"))).click();
		sleepWait(2000);
		wd.close();
	}
	
	
	

	
	
	
	
}
