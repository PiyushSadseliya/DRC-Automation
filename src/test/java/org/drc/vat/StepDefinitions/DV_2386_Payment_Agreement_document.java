package org.drc.vat.StepDefinitions;
import static org.drc.vat.appmanager.HelperBase.*;
import static org.testng.Assert.assertTrue;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import cucumber.api.java.en.And;
public class DV_2386_Payment_Agreement_document 
{
	
	@And("^User is on Payment Agreement document \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_is_on_Payment_Agreement_document(String arg1, String arg2) throws Throwable 
	{
		System.out.println(arg1);
		System.out.println(arg2);
	    
	}

	@And("^User see UI of Payment Agreement page - Document$")
	public void user_see_UI_of_Payment_Agreement_page_Document() throws Throwable 
	{
		System.out.println("User see ui");
	    
	}

	@And("^User see Date field above barcode \"([^\"]*)\"$")
	public void user_see_Date_field_above_barcode(String date) throws Throwable 
	{
	    sleepWait(1000);
		if(wd.findElement(By.xpath("(//*[contains(text(),'" + date +"')])[1]")).isDisplayed() )
		{					
			assertTrue(true);
		} 
	}

	@And("^User validate barcode \"([^\"]*)\" format$")
	public void user_validate_barcode_format(String bar) throws Throwable 
	{
		if(wd.findElement(By.xpath("(//*[contains(text(),'" + bar +"')])[1]")).isDisplayed() )
		{					
			assertTrue(true);
		} 
	    
	}

	@And("^User validate taxpayer name \"([^\"]*)\"$")
	public void user_validate_taxpayer_name(String name) throws Throwable 
	{
		if(wd.findElement(By.xpath("(//div[contains(text(),'" + name +"')])[1]")).isDisplayed() )
		{					
			assertTrue(true);
		} 
	    
	}

	@And("^User validate taxpayer address \"([^\"]*)\"$")
	public void user_validate_taxpayer_address(String add) throws Throwable 
	{
		if(wd.findElement(By.xpath("(//div[contains(text(),'" + add +"')])[1]")).isDisplayed() )
		{					
			assertTrue(true);
		}    
	    
	}

	@And("^User validate subject field \"([^\"]*)\"$")
	public void user_validate_subject_field(String arg1) throws Throwable 
	{
		if(wd.findElement(By.xpath("//strong[contains(text(),'Subject')]//following::text()")).isDisplayed() )
		{					
			assertTrue(true);
		}   
	    
	}

	@And("^User validate case id field format \"([^\"]*)\"$")
	public void user_validate_case_id_field_format(String caseID) throws Throwable 
	{
		if(wd.findElement(By.xpath("//section[contains(text(),'" + caseID + "')]")).isDisplayed() )
		{					
			assertTrue(true);
		} 
	    
	}

	@And("^User validate payment agreement format \"([^\"]*)\"$")
	public void user_validate_payment_agreement_format(String format) throws Throwable 
	{
		if(wd.findElement(By.xpath("//section[contains(text(),'" + format + "')]")).isDisplayed() )
		{					
			assertTrue(true);
		} 
	    
	}

	@And("^User validate payment period date$")
	public void user_validate_payment_period_date() throws Throwable 
	{
		if(wd.findElement(By.xpath("//section[contains(text(),'Payment Period ')]//following::text()")).isDisplayed() )
		{					
			assertTrue(true);
		} 
	    
	}

	@And("^User Validate the Payment Amount Due$")
	public void user_Validate_the_Payment_Amount_Due() throws Throwable 
	{
		if(wd.findElement(By.xpath("//section[contains(text(),'Payment Amount Due')]//following::text()")).isDisplayed() )
		{					
			assertTrue(true);
		}    
	    
	}

	@And("^User validate Regards field officer name \"([^\"]*)\"$")
	public void user_validate_Regards_field_officer_name(String off) throws Throwable 
	{
		if(wd.findElement(By.xpath("//div[contains(text(),'" + off + "')]")).isDisplayed() )
		{					
			assertTrue(true);
		}  
		
	}

	@And("^User Validate the Payment Schedule field$")
	public void user_Validate_the_Payment_Schedule_field() throws Throwable 
	{
		if(wd.findElement(By.xpath("(//strong[contains(text(),' Payment Schedule')]//following::p)[1]")).isDisplayed() )
		{					
			assertTrue(true);
		}  
	}


	
	@And("^User verify Annexure A Page no$")
	public void user_verify_Annexure_A_Page_no() throws Throwable 
	{
		
		int ColmnCount=wd.findElements(By.xpath("//div/table/tbody/tr[1]/td[1]/div")).size();
		System.out.println("ColmnCount :"+ColmnCount);		
		
		
	}

	@And("^User verify Annexure A date$")
	public void user_verify_Annexure_A_date() throws Throwable 
	{	  
		if(wd.findElement(By.xpath("//div/table/tbody/tr[1]/td[2]/div")).isDisplayed() )
		{					
			assertTrue(true);
		}  
	}

	@And("^Use Verify Annexure A installement amount$")
	public void use_Verify_Annexure_A_installement_amount() throws Throwable 
	{	  
		if(wd.findElement(By.xpath("//div/table/tbody/tr[1]/td[3]/div")).isDisplayed() )
		{					
			assertTrue(true);
		}  
	}
	
	
	@And("^User click on print button and new window is open$")
	public void user_click_on_print_button_and_new_window_is_open() throws Throwable 
	{
		clickOn("btn_print_page", "");
		 sleepWait(1000);
	    
	}

	@And("^User click on previous button and navigate to payment agrement landing screen$")
	public void user_click_on_previous_button_and_navigate_to_payment_agrement_landing_screen() throws Throwable 
	{
		clickOn("btn_Previous_page", "");
	    
	}
	
	@And("^User Click on Action and click on PA Amended$")
	public void user_Click_on_Action_and_click_on_PA_Amended() throws Throwable 
	{
	  clickOn("drp_Action", "");
	   sleepWait(1000);
	  clickOn("drp_Action_PA_Amemded", "");
	}

	@And("^User clcik on Submit button on payment agreement$")
	public void user_clcik_on_Submit_button_on_payment_agreement() throws Throwable 
	{
		clickOn("btn_action_Submit", "");
		 sleepWait(500);
	}
	
	
	
}
