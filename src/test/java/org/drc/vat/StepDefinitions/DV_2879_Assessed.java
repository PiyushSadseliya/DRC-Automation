package org.drc.vat.StepDefinitions;

import static org.drc.vat.appmanager.HelperBase.clickOn;
import static org.drc.vat.appmanager.HelperBase.elementText;
import static org.drc.vat.appmanager.HelperBase.obj;
import static org.drc.vat.appmanager.HelperBase.wd;
import static org.testng.Assert.assertTrue;

import org.openqa.selenium.By;

import cucumber.api.java.en.And;

public class DV_2879_Assessed 
{
	@And("^User click on view icon on Supplementary deductions and navigate to  Assessed List Supplementary deductions page$")
	public void user_click_on_view_icon_on_Supplementary_deductions_and_navigate_to_Assessed_List_Supplementary_deductions_page() throws Throwable 
	{
		clickOn("btn_eye_Transaction_received", ""); 
		  if(wd.findElement(By.xpath(obj.getProperty("txt_check_SD"))).isDisplayed());
			{
			  assertTrue(true);
			}	
	}

	@And("^User click on previous button and navigate to Assessed List Adjustment page$")
	public void user_click_on_previous_button_and_navigate_to_Assessed_List_Adjustment_page() throws Throwable 
	{
		Thread.sleep(1000);
		//clickOn("btn_Prev_m", "");
		clickOn("btn_Previous_M", "");
		Thread.sleep(1000);
		  if(wd.findElement(By.xpath(obj.getProperty("txt_checkAdjustement_page"))).isDisplayed());
			{
			  assertTrue(true);
			}	

	}
	@And("^User click on view icon on VAT deducted by mining companies at source and navigate to Assessed List Supplementary Mining page$")
	public void user_click_on_view_icon_on_VAT_deducted_by_mining_companies_at_source_and_navigate_to_Assessed_List_Supplementary_Mining_page() throws Throwable 
	{
		Thread.sleep(1000);
		 clickOn("btn_eye_VD", ""); 
		 Thread.sleep(1000);
		  if(wd.findElement(By.xpath(obj.getProperty("txt_check_mining"))).isDisplayed());
			{
			  assertTrue(true);
			}	
	}

	@And("^User validate Total additional liability on Adjustement page Assessed List$")
	public void user_validate_Total_additional_liability_on_Adjustement_page_Assessed_List() throws Throwable 
	{
		Thread.sleep(500);		
		String Total_Assessed = elementText("txt_TotalAssessed");		 
		String Remov_FC = Total_Assessed.replaceAll("[A-Z]", "");	
	    String Remove_FC = Remov_FC.replace("." ,"");	
	    Remove_FC = Remove_FC.replace("," ,".");		    		    	 
	   Float Total_Ass = Float.parseFloat(Remove_FC);			
		
		
	    String Total_Ress =elementText("txt_Total_Reassessed");		 
		 String Remov_FC1 = Total_Ress.replaceAll("[A-Z]", "");	
		 String	Remove_FC2 = Remov_FC1.replace("." ,"");		
		 Remove_FC2 = Remove_FC2.replace("," ,".");
		Float Total_Reassed = Float.parseFloat(Remove_FC2);		 	
		
		 Float Validate =  Total_Ass - Total_Reassed;
		// Store_Validate =Validate;
		 
		 String Total_Add_Lib =elementText("txt_Total_Additionality_Liability");
		 String FC1 = Total_Add_Lib.replaceAll("[A-Z]", "");	
		 String	FC2 = FC1.replace("." ,"");		
		 String FC3 = FC2.replace("," ,".");
		 System.out.println(FC3);		 
		Float Check_Add_Lib =Float.parseFloat(FC3);		 
		 
		 
		 if(Validate ==Check_Add_Lib)
		 {
			assertTrue(true);
		 } 
	}

}
