package org.drc.vat.StepDefinitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import gherkin.lexer.Th;

import static org.drc.vat.appmanager.HelperBase.*;
import static org.junit.Assert.assertEquals;
import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertTrue;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.testng.Assert;
public class DV_2879_ManAssess_AsseList_Adjustement 
{
	public static Float Total_Ass;
	public static Float Total_e_dec;
	public String Store_NITVA;	
	public static Float T_A_Total_Assessed;	
	public static Float VAT_Store_VRC;
	public static Float VAT_Store_SDC;
	public static Float VAT_Store_VDC;
	public static Float VAT_Store_PCC;
	public static Float Check_Add_Lib;
	
	@Given("^User is on Adjustment \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_is_on_Adjustment(String arg1, String arg2) throws Throwable
	{
		System.out.println(arg1);
		System.out.println(arg2);	  
	}

	
	@And("^User see NITVA number is selected$")
	public void user_see_NITVA_number_is_selected() throws Throwable
	{
		String NITVA_no = wd.findElement(By.xpath(obj.getProperty("txt_NITVA_Manual_Get"))).getText();
		Store_NITVA = NITVA_no;	  
	}

	
	@Given("^User type NITVA number and check$")
	public void user_type_NITVA_number_and_check() throws Throwable 
	{
		sleepWait(1000);
		type("txtbox_TypeHere", Store_NITVA);
		
		String NITVA_Check = elementText("txt_NITVA_ch");
		assertEquals(Store_NITVA, NITVA_Check);
	}
	
	
	@And("^User click on Next button$")
	public void user_click_on_Next_button() throws Throwable 
	{
		sleepWait(3000);
		clickOn("btn_NEXT", "");
		sleepWait(3000);
		
	}

	
	
	@And("^User navigate to Adjustment page$")
	public void user_navigate_to_Adjustment_page() throws Throwable 
	{						
		sleepWait(3000);				
		if(wd.findElement(By.xpath(obj.getProperty("txt_checkAdjustement_page"))).isDisplayed());
		{
		  assertTrue(true);
		}	
	  
	}

	@And("^Validate NITVA number$")
	public void validate_NITVA_number() throws Throwable 
	{
		sleepWait(2000);
		String NITVA_Check = wd.findElement(By.xpath(obj.getProperty("txt_NITVA_Check"))).getText();
		if(Store_NITVA.contains(NITVA_Check))
		 {
			 assertTrue(true);
		 }			  
	}

	@And("^User validate Total additional liability on Adjustement page$")
	public void user_validate_Total_additional_liability_on_Adjustement_page() throws Throwable
	{
		
		sleepWait(2000);		
		String Total_Assessed = elementText("txt_TotalAssessed");		 
		String Remov_FC = Total_Assessed.replaceAll("[A-Z]", "");	
	    String Remove_FC = Remov_FC.replace("." ,"");	
	    Remove_FC = Remove_FC.replace("," ,".");		    		    	 
	    Total_Ass = Float.parseFloat(Remove_FC);		
		 
		 String Total_e_Dec =elementText("txt_Total_Declaration");		 
		 String Remov_FC1 = Total_e_Dec.replaceAll("[A-Z]", "");	
		 String	Remove_FC2 = Remov_FC1.replace("." ,"");		
		 Remove_FC2 = Remove_FC2.replace("," ,".");
		 Total_e_dec = Float.parseFloat(Remove_FC2);		 		
		 
		 Float Validate =  Total_Ass - Total_e_dec;		 		 
		 
		 sleepWait(500);
		 String Total_Add_Lib =elementText("txt_Total_Additionality_Liability_MA_OP");
		 String FC1 = Total_Add_Lib.replaceAll("[A-Z]", "");	
		 String	FC2 = FC1.replace("." ,"");		
		 String FC3 = FC2.replace("," ,".");
		 System.out.println(FC3);		 
		 Check_Add_Lib =Float.parseFloat(FC3);		 
		 
		 if(Validate.equals(Check_Add_Lib))
		 {
			 assertTrue(true);
		 }
	}

	@And("^User check total assessed value and click on next button and validate same amount$")
	public void user_check_total_assessed_value_and_click_on_next_button_and_validate_same_amount() throws Throwable 
	{
		sleepWait(1000);
		clickOn("btn_NEXT", "");
		sleepWait(1000);
		 String Total_Add_Lib =elementText("txt_Total_Additionality_Liability_MA_OP");
		 String FC1 = Total_Add_Lib.replaceAll("[A-Z]", "");	
		 String	FC2 = FC1.replace("." ,"");		
		 String FC3 = FC2.replace("," ,".");
				 
		 Float check= Float.parseFloat(FC3);
		 
		 
		 if(check.equals(Check_Add_Lib))
		 {
			 assertTrue(true);
		 }
		
		/*String Total_Additional_Liability = wd.findElement(By.xpath(obj.getProperty("txt_Total_Add_Lib"))).getText();
		//T_A_Total_Assessed =Float.parseFloat(Total_Additional_Liability);
		String check_AL = Total_Additional_Liability;
		clickOn("btn_NEXT", "");
		sleepWait(500);		
		
		if(check_AL==Total_Additional_Liability)
		{
			assertTrue(true);
		}
		*/
	  
	}

	@And("^User click on prev button$")
	public void user_click_on_prev_button() throws Throwable 
	{		
		sleepWait(3000);
	   clickOn("btn_Prev", "");	  
	   sleepWait(1000);
	}

	@And("^User click on edit button on Tax Adjustement$")
	public void user_click_on_edit_button_on_Tax_Adjustement() throws Throwable 
	{	   
		sleepWait(1000);
		clickOn("btn_Edit", "");
	}

	@And("^User entered value \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" for Adjustment page$")
	public void user_entered_value_for_Adjustment_page(String VR, String SD, String VD, String PC) throws Throwable 
	{
		sleepWait(1000);
		type("txtBox_VR",VR);
	    type("txtBox_SD",SD);
	    type("txtBox_VD",VD);
	    type("txtBox_PC",PC);
	  
	}

	@And("^User click on Save button and validate message \"([^\"]*)\"$")
	public void user_click_on_Save_button_and_validate_message(String mess) throws Throwable
	{
		sleepWait(1000);
	  clickOn("btn_Save", "");
	  if(wd.findElement(By.xpath("//div[contains(text(),'" + mess + "')]")).isDisplayed() )
		{					
			assertTrue(true);
		}	
	  
	}

	@And("^User again entered value \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" for Adjustment page$")
	public void user_again_entered_value_for_Adjustment_page(String VR, String SD, String VD, String PC) throws Throwable 
	{
		sleepWait(1000);
		type("txtBox_VR",VR);
		type("txtBox_SD",SD);
	    type("txtBox_VD",VD);
	    type("txtBox_PC",PC);
	    
	    sleepWait(8000);
	    String VAT_VRC = getValue("txtBox_VR");
	    String VAT_SD = getValue("txtBox_SD");
	    String VAT_VD = getValue("txtBox_VD");
	    String VAT_PC = getValue("txtBox_PC");
	    
	    Float VAT_Float_VRC= Float.parseFloat(VAT_VRC);
	    Float VAT_Float_SDC= Float.parseFloat(VAT_SD);
	    Float VAT_Float_VDC= Float.parseFloat(VAT_VD);
	    Float VAT_Float_PCC= Float.parseFloat(VAT_PC);
	    
	    VAT_Store_VRC = VAT_Float_VRC;
	    VAT_Store_SDC = VAT_Float_SDC;
	    VAT_Store_VDC = VAT_Float_VDC;
	    VAT_Store_PCC = VAT_Float_PCC;
	    
	  
	}

	@And("^User click on next button and navigate to Assessment Summary$")
	public void user_click_on_next_button_and_navigate_to_Assessment_Summary() throws Throwable
	{
		sleepWait(1000);
		clickOn("btn_NEXT", "");
		sleepWait(1000);
		if(wd.findElement(By.xpath(obj.getProperty("txt_AS"))).isDisplayed());
		{
		  assertTrue(true);
		}	
	  
	}

	@And("^User again click on prev button and click on edit button and validate amount is saved$")
	public void user_again_click_on_prev_button_and_click_on_edit_button_and_validate_amount_is_saved() throws Throwable
	{
		sleepWait(1000);
	   clickOn("btn_Prev", "");
	   sleepWait(1000);
	   clickOn("btn_Edit", "");
	   sleepWait(1000);
	   
	   String VAT_VRC = getValue("txtBox_VR");
	   String VAT_SD = getValue("txtBox_SD");
	   String VAT_VD = getValue("txtBox_VD");
	   String VAT_PC = getValue("txtBox_PC");
	   
	    Float VAT_VRC_1= Float.parseFloat(VAT_VRC);
	    Float VAT_SD_1= Float.parseFloat(VAT_SD);
	    Float VAT_VD_1= Float.parseFloat(VAT_VD);
	    Float VAT_PC_1= Float.parseFloat(VAT_PC);
	   
	   
	   if(VAT_Store_VRC.equals(VAT_VRC_1) && VAT_Store_SDC.equals(VAT_SD_1) &&  VAT_Store_VDC.equals(VAT_VD_1) && VAT_Store_PCC.equals(VAT_PC_1))
	   {
		   		
		   assertTrue(true);
	   }	   
	   
	}

	@And("^User keep field blank and validate mess \"([^\"]*)\"$")
	public void user_keep_field_blank_and_validate_mess(String mess) throws Throwable 
	{
		/*sleepWait(2000);
		wd.findElement(By.xpath(obj.getProperty("txtBox_VR"))).clear();
		System.out.println("txtBox_VR");
		sleepWait(4000);
		wd.findElement(By.xpath(obj.getProperty("txtBox_SD"))).clear();
		sleepWait(4000);
		wd.findElement(By.xpath(obj.getProperty("txtBox_VD"))).clear();
		sleepWait(4000);
		wd.findElement(By.xpath(obj.getProperty("txtBox_PC"))).clear();
		sleepWait(2000);*/
		
		
		sleepWait(500);
		wd.findElement(By.xpath(obj.getProperty("txtBox_VR"))).sendKeys(Keys.chord(Keys.CONTROL,"a",Keys.DELETE));
		sleepWait(500);
		
		wd.findElement(By.xpath(obj.getProperty("txtBox_VR"))).sendKeys(Keys.TAB);
				
		if(wd.findElement(By.xpath("//span[contains(text(),'" + mess + "')]")).isDisplayed())
		{
			assertTrue(true);
		}
	}
	
	@And("^User see next button is disable$")
	public void user_see_next_button_is_disable() throws Throwable 
	{
		sleepWait(500);
		if(!wd.findElement(By.xpath(obj.getProperty("btn_NEXT"))).isEnabled())
		{
			assertTrue(true);
		}
	}


	
	@And("^User click on view icon on Supplementary deductions and navigate to Manual Assessment Supplementary deductions page$")
	public void user_click_on_view_icon_on_Supplementary_deductions_and_navigate_to_Manual_Assessment_Supplementary_deductions_page() throws Throwable 
	{
	  clickOn("btn_eye_Transaction_received", ""); 
	  sleepWait(1000);
	  if(wd.findElement(By.xpath(obj.getProperty("txt_check_SD"))).isDisplayed());
		{
		  assertTrue(true);
		}	
	  
	}

	@And("^User click on previous button and navigate to Manual Assessment Adjustment page$")
	public void user_click_on_previous_button_and_navigate_to_Manual_Assessment_Adjustment_page() throws Throwable 
	{
		sleepWait(1000);
		 clickOn("btn_Previous_M", ""); 		 
		  if(wd.findElement(By.xpath(obj.getProperty("txt_checkAdjustement_page"))).isDisplayed());
			{
			  assertTrue(true);
			}	
	  
	}

	@And("^User click on view icon on  VAT deducted by mining companies at source and navigate to Manual Assessment Supplementary Mining page$")
	public void user_click_on_view_icon_on_VAT_deducted_by_mining_companies_at_source_and_navigate_to_Manual_Assessment_Supplementary_Mining_page() throws Throwable
	{
		sleepWait(1000);
		 clickOn("btn_eye_VD", ""); 
		  if(wd.findElement(By.xpath(obj.getProperty("txt_check_mining"))).isDisplayed());
			{
			  assertTrue(true);
			}	
	  
	}

	@And("^User validate amount Difference on Adjustement page$")
	public void user_validate_amount_Difference_on_Adjustement_page() throws Throwable
	{
		sleepWait(1000);
		String Diff = wd.findElement(By.xpath(obj.getProperty("txt_difference"))).getText();
			
		 String Remove_FC = Diff.replace("." ,"");	
		 Remove_FC = Remove_FC.replace("," ,".");		    		    	 
		 Float Check_Diff = Float.parseFloat(Remove_FC);		
		
		
		String Amount_e_sd = wd.findElement(By.xpath(obj.getProperty("txt_e_SD"))).getText();
	
		 String Remove_FC1 = Amount_e_sd.replace("." ,"");	
		 Remove_FC1 = Remove_FC1.replace("," ,".");		    		    	 
		 Float e_sd = Float.parseFloat(Remove_FC1);

		 String Amount_e_mining= wd.findElement(By.xpath(obj.getProperty("txt_e_mining"))).getText();
		
		 String Remove_FC2 = Amount_e_mining.replace("." ,"");	
		 Remove_FC2 = Remove_FC2.replace("," ,".");		    		    	 
		 Float e_min = Float.parseFloat(Remove_FC2);
		
		String Amount_tr_sd = wd.findElement(By.xpath(obj.getProperty("txt_tr_SD"))).getText();
		
		 String Remove_FC3 = Amount_tr_sd.replace("." ,"");	
		 Remove_FC3 = Remove_FC3.replace("," ,".");		    		    	 
		 Float e_tr_sd = Float.parseFloat(Remove_FC3);
		
		String Amount_tr_mining = wd.findElement(By.xpath(obj.getProperty("txt_tr_mining"))).getText();
		
		 String Remove_FC4 = Amount_tr_mining.replace("." ,"");	
		 Remove_FC4 = Remove_FC4.replace("," ,".");		    		    	 
		 Float e_tr_min = Float.parseFloat(Remove_FC4);
	  
		Float e_dec_total = e_sd + e_min;
		Float e_tr_total = e_tr_sd + e_tr_min;
		
		Float Total = e_dec_total - e_tr_total;
		
		if(Total.equals(Check_Diff))
		{
			assertTrue(true);
		}
		
	}

	@And("^User click on prev button and navigate to Tax Deductible$")
	public void user_click_on_prev_button_and_navigate_to_Tax_Deductible() throws Throwable
	{
		 sleepWait(1000);
		 clickOn("btn_Prev", "");
		 sleepWait(3000);
		  if(wd.findElement(By.xpath(obj.getProperty("txt_Tax_Deductible_Page"))).isDisplayed());
		  {
			  assertTrue(true);
		  }		  
	}
	
	
	
	@And("^User entered value \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" for Adjustment page negative field$")
	public void user_entered_value_for_Adjustment_page_negative_field(String VR, String SD, String VD, String PC) throws Throwable 
	{
    
	    type("txtBox_VR",VR);
		String VAT_Collected_VR= getValue("txtBox_VR");		
		if(VR!=VAT_Collected_VR)
		{
			assertTrue(true);
		}		
	    
		type("txtBox_SD",SD);
		String VAT_Collected_SD= getValue("txtBox_SD");		
		if(SD!=VAT_Collected_SD)
		{
			assertTrue(true);
		}
		
		
		type("txtBox_VD",VD);
		String VAT_Collected_VD= getValue("txtBox_VD");		
		if(VD!=VAT_Collected_VD)
		{
			assertTrue(true);
		}
		
		type("txtBox_PC",PC);
		String VAT_Collected_PC= getValue("txtBox_PC");		
		if(PC!=VAT_Collected_PC)
		{
			assertTrue(true);
		}
		
	}
	
	@And("^User entered value \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" for Adjustment page negative field length$")
	public void user_entered_value_for_Adjustment_page_negative_field_length(String VR, String SD, String VD, String PC) throws Throwable 
	{
		type("txtBox_VR", VR);
		int actualLimit =wd.findElement(By.xpath(obj.getProperty("txtBox_VR"))).getAttribute("value").length();
		assertEquals(actualLimit, 15);				
		
		type("txtBox_SD", SD);
		int actualLimit1 =wd.findElement(By.xpath(obj.getProperty("txtBox_SD"))).getAttribute("value").length();
		assertEquals(actualLimit1, 15);	
		
		type("txtBox_VD", VD);
		int actualLimit2 =wd.findElement(By.xpath(obj.getProperty("txtBox_VD"))).getAttribute("value").length();
		assertEquals(actualLimit2, 15);	
		
		type("txtBox_PC", PC);
		int actualLimit3 =wd.findElement(By.xpath(obj.getProperty("txtBox_PC"))).getAttribute("value").length();
		assertEquals(actualLimit3, 15);	
	}
	
	
}
