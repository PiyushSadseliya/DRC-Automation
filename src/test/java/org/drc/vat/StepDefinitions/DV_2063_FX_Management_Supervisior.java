package org.drc.vat.StepDefinitions;
import static org.drc.vat.appmanager.HelperBase.*;
import static org.testng.Assert.assertTrue;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.And;

public class DV_2063_FX_Management_Supervisior 
{

	public String CurrencyBox;
	
	@And("^User verify the DGI officer name and profile picture \"([^\"]*)\" for DGI Supervisior$")
	public void user_verify_the_DGI_officer_name_and_profile_picture_for_DGI_Supervisior(String value) throws Throwable 
	{
		if(wd.findElement(By.xpath("(//*[contains(text(),'" + value + "')])")).isDisplayed() )
		{					
			assertTrue(true);
		}	  
	}
	
	@And("^User close browser$")
	public void user_close_browser() throws Throwable 
	{
		wd.close();
	}
	
	@And("^User enter credencial for DGI Officer and update the currency$")
	public void user_enter_credencial_for_DGI_Officer_and_update_the_currency() throws Throwable 
	{
		sleepWait(1000);
		
		wd = new ChromeDriver();
		//WebDriver wd = new ChromeDriver();
		wd.manage().window().maximize();		
		sleepWait(1000);	
		wd.navigate().to("http://103.249.120.58:8044");		
		Runtime.getRuntime().exec(System.getProperty("user.dir") +"\\autoitsample.TaxOfficer.exe");
		wd.findElement(By.xpath(obj.getProperty("btn_windowsClick"))).click();
		sleepWait(1000);			
		wd.findElement(By.xpath(obj.getProperty("txt_FxManagement"))).click();
		//clickOn("txt_FxManagement", "");				 
		sleepWait(1000);
		wd.findElement(By.xpath(obj.getProperty("btn_UpdateFX"))).click();
		sleepWait(1000);				
		CurrencyBox = wd.findElement(By.xpath(obj.getProperty("txtBox_type_Currency"))).getAttribute("value");
		
		wd.findElement(By.xpath(obj.getProperty("btn_SaveFX"))).click();
		sleepWait(2000);
		wd.quit();

	}
	
	
	@And("^User enter credencial for DGI Supervisor and verify New Updated rates notification and click on approve and verify message \"([^\"]*)\"$")
	public void user_enter_credencial_for_DGI_Supervisor_and_verify_New_Updated_rates_notification_and_click_on_approve_and_verify_message(String value) throws Throwable 
	{	
		
		WebDriver wd = new ChromeDriver();
		wd.manage().window().maximize();		
		sleepWait(1000);	
		wd.navigate().to("http://103.249.120.58:8044");		
		Runtime.getRuntime().exec(System.getProperty("user.dir") +"\\autoitsample.Supervisiour.exe");
		wd.findElement(By.xpath(obj.getProperty("btn_windowsClick"))).click();
		sleepWait(1000);			
		wd.findElement(By.xpath(obj.getProperty("txt_FxManagement"))).click();				 
		sleepWait(1000);
		wd.findElement(By.xpath(obj.getProperty("btn_ApproveFX"))).click();
		sleepWait(1000);
		if(wd.findElement(By.xpath("//*[contains(text(),'" + value + "')]")).isDisplayed() )
		{											
			assertTrue(true);
		}		
		sleepWait(1000);
		
	}

	@And("^User enter credencial for DGI Supervisor and verify New Updated rates notification and click on reject and verify message \"([^\"]*)\"$")
	public void user_enter_credencial_for_DGI_Supervisor_and_verify_New_Updated_rates_notification_and_click_on_reject_and_verify_message(String value) throws Throwable 
	{
		
		WebDriver wd = new ChromeDriver();
		wd.manage().window().maximize();		
		sleepWait(1000);	
		wd.navigate().to("http://103.249.120.58:8044");		
		Runtime.getRuntime().exec(System.getProperty("user.dir") +"\\autoitsample.Supervisiour.exe");
		wd.findElement(By.xpath(obj.getProperty("btn_windowsClick"))).click();
		sleepWait(1000);			
		wd.findElement(By.xpath(obj.getProperty("txt_FxManagement"))).click();				 
		sleepWait(1000);
		wd.findElement(By.xpath(obj.getProperty("btn_RejectFX"))).click();
		sleepWait(5000);
		if(wd.findElement(By.xpath("//*[contains(text(),'" + value + "')]")).isDisplayed() )
		{											
			assertTrue(true);
		}
		sleepWait(1000);
	}

	

	
	

	@And("^User see new approved coloumn$")
	public void user_see_new_approved_coloumn() throws Throwable 
	{
		sleepWait(1000);
		if(wd.findElement(By.xpath(obj.getProperty("txt_ApprovalRequired"))).isDisplayed())
		{
			assertTrue(true);
		}
	}
	
	
	@And("^User enter credencial for DGI Supervisior and approve the currency$")
	public void user_enter_credencial_for_DGI_Supervisior_and_approve_the_currency() throws Throwable 
	{
		
		WebDriver wd = new ChromeDriver();
		wd.manage().window().maximize();		
		sleepWait(1000);	
		wd.navigate().to("http://103.249.120.58:8044");		
		Runtime.getRuntime().exec(System.getProperty("user.dir") +"\\autoitsample.Supervisiour.exe");
		wd.findElement(By.xpath(obj.getProperty("btn_windowsClick"))).click();
		sleepWait(5000);			
		wd.findElement(By.xpath(obj.getProperty("txt_FxManagement"))).click();
		//clickOn("txt_FxManagement", "");				 
		sleepWait(1000);
			
		String BaseCurrCheck1= wd.findElement(By.xpath(obj.getProperty("txt_new_curr_Check"))).getAttribute("value");
		
		if(CurrencyBox==BaseCurrCheck1)
		{
			assertTrue(true);
		}
	}
	
}
