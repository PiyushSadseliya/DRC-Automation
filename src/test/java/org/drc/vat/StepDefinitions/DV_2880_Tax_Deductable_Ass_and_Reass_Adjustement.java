package org.drc.vat.StepDefinitions;
import static org.drc.vat.appmanager.HelperBase.*;
import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertTrue;

import java.text.DecimalFormat;
import java.text.DecimalFormatSymbols;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;

public class DV_2880_Tax_Deductable_Ass_and_Reass_Adjustement 
{
	public static Float Total_Ass;
	public static Float Total_e_dec;
	
	public static Float Check_Add_Lib;
	
	public static Float Total_edc;
	public static Float Total_tranc;
	public static Float Check_Value_Previous_entered;
	
	public String Check_month;
	public String Check_year;
	public String check;
	 
	
	@Given("^User is on Tax Deductible \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_is_on_Tax_Deductible(String arg1, String arg2) throws Throwable 
	{
	  System.out.println(arg1);
	  System.out.println(arg2);
	}

	@And("^User click on drop down \"([^\"]*)\" for Manual Assessment$")
	public void user_click_on_drop_down_for_Manual_Assessment(String value) throws Throwable 
	{
		sleepWait(3000);
		clickOn("drp_month", "");
		sleepWait(500);
		clickOn(value, "");
		sleepWait(500);
	}
	
	/*@And("^User click on FilterBy and click on TaxPayer$")
	public void user_click_on_FilterBy_and_click_on_TaxPayer() throws Throwable 
	{
		Thread.sleep(2000);
		clickOn("drp_FilterBy", "");
		Thread.sleep(500);
		clickOn("txt_TaxPayer", "");	  
	}*/

	@And("^User type \"([^\"]*)\" and click on search button$")
	public void user_type_and_click_on_search_button(String taxpayer) throws Throwable 
	{
		type("txtbox_TypeHere", taxpayer);
		Thread.sleep(500);
		clickOn("btn_TypeHere_click", "");
	}

	@And("^User see that period field month and year is selected$")
	public void user_see_that_period_field_month_and_year_is_selected() throws Throwable 
	{
		sleepWait(500);
		String VAT_Period = wd.findElement(By.xpath(obj.getProperty("drp_month"))).getText();
		String VAT_Year = wd.findElement(By.xpath(obj.getProperty("drp_year"))).getText();
		//String VAT_Period= getValue("drp_month");
		//String VAT_Year= getValue("drp_year");
		
		String month = VAT_Period;
		String year = VAT_Year;
		
		Check_month =month;
		Check_year =year;
		//check=Check_month.concat(Check_year);
		 check=Check_month+","+Check_year;
		  System.out.println(check);
		//check.concat(check);
	}

	@And("^User click on manage and click on assess$")
	public void user_click_on_manage_and_click_on_assess() throws Throwable 
	{
		Thread.sleep(500);		
		clickOn("drp_AssestManage", "");
		Thread.sleep(500);
		clickOn("txt_AssestManageAssess", "");  
	}

	@And("^User navigate to Tax Deductible$")
	public void user_navigate_to_Tax_Deductible() throws Throwable 
	{
		sleepWait(1000);
		clickOn("btn_NEXT", "");
		sleepWait(2000);
		if(wd.findElement(By.xpath(obj.getProperty("txt_Tax_Deductible_Page"))).isDisplayed())
		{
			assertTrue(true);
		}
	  
	}

	@And("^Validate NITVA no \"([^\"]*)\"$")
	public void validate_NITVA_no(String nitva) throws Throwable 
	{
		Thread.sleep(500);
		if(wd.findElement(By.xpath("//div[contains(text(),'" + nitva + "')]")).isDisplayed())
		{					
			assertTrue(true);
		}		  
	}

	@And("^Validate Period field")
	public void validate_Period_field() throws Throwable 
	{
		sleepWait(500);
		String VAT_Period= getValue("txtbox_Disable_Period");				
		
		if(check.equals(VAT_Period) )
		{
			assertTrue(true);
		}

	}

	@And("^User calculate Total Additional liability$")
	public void user_calculate_Total_Additional_liability() throws Throwable 
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
		 String Total_Add_Lib =elementText("txt_TAL");
		 String FC1 = Total_Add_Lib.replaceAll("[A-Z]", "");	
		 String	FC2 = FC1.replace("." ,"");		
		 String FC3 = FC2.replace("," ,".");
		 		 
		 Check_Add_Lib =Float.parseFloat(FC3);		 
		 	
		 if(Validate.equals(Check_Add_Lib))
		 {
			 assertTrue(true);
		 }
	  
	}

	@And("^User see by default Total Assessed and Total e Declaration value are same$")
	public void user_see_by_default_Total_Assessed_and_Total_e_Declaration_value_are_same() throws Throwable 
	{
		sleepWait(500);
		if(Total_Ass == Total_e_dec)
		{
			assertTrue(true);
		}
	  
	}

	@And("^User click on edit button on Tax Deductible$")
	public void user_click_on_edit_button_on_Tax_Deductible() throws Throwable 
	{
		sleepWait(500);
		clickOn("btn_Edit", "");	  
	}

	@And("^User entered value \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" on Manual Assessment Tax Deductible and calculate total Deductible$")
	public void user_entered_value_on_Manual_Assessment_Tax_Deductible_and_calculate_total_Deductible(String AI, String AL, String GI, String GL, String RI, String RL, String OI, String OL) throws Throwable 
	{
		sleepWait(500);
		type("txtBox_Assest_import", AI);
		type("txtBox_Assest_export", AL);
		Float TotalA= Float.parseFloat(AI)+Float.parseFloat(AL);
		String TotalAS = getValue("txtBox_Total_I_E_10");
		if(TotalA==Float.parseFloat(TotalAS))
		{
			assertTrue(true);
		 }
		   
		type("txtBox_Goods_import", GI);
		type("txtBox_Goods_export", GL);
		Float TotalG = Float.parseFloat(GI)+Float.parseFloat(GL);
		String TotalGS= getValue("txtBox_Total_I_E_11");
		if(TotalG==Float.parseFloat(TotalGS))
		{
			assertTrue(true);	
		}		
		
		type("txtBox_Raw_Material_import", RI);		
		type("txtBox_Raw_Material_export", RL);
		Float TotalR= Float.parseFloat(RI)+ Float.parseFloat(RL);
	    String TotalRS= getValue("txtBox_Total_I_E_12");
	    if (TotalR==Float.parseFloat(TotalRS))
	    {
	    	assertTrue(true);
	    }
		
		
		type("txtBox_OGS_import", OI);
		type("txtBox_OGS_export", OL);
		Float TotalO=Float.parseFloat(OI)+Float.parseFloat(OL);
	    String TotalOS=getValue("txtBox_Total_I_E_13");
	    if(TotalO==Float.parseFloat(TotalOS))
	    {
	    	assertTrue(true);
	    }
	    
	    /**
	     * 14 Total deductible = 10+11+12+13 
	     */
	    Float TotalD = TotalA + TotalG + TotalR + TotalO;
	    String TotalDS = getValue("txtBox_TotalD_14");
	    
	    if (TotalD==Float.parseFloat(TotalDS))
	    {
	    	assertTrue(true);
	    	
	    }
	    
	    /**
	     * Amount of VAT Deductible = Total Deductible + Report of credit carry forward (If Any))
	     */
		
		String TotalVatDed = getValue("txtBox_TotalD_14");
		String TotalCC = getValue("txtBox_RCC_15");		
	    Float Amount=Float.parseFloat(TotalVatDed)+Float.parseFloat(TotalCC);
	    String TotalAVD = getValue("txtBox_AVD_16");
	    if (Amount==Float.parseFloat(TotalAVD))
	    {
	    	assertTrue(true);	    	
	    }	    	    
	    
	   Float Check = Float.parseFloat(TotalAVD) - Total_e_dec;
	   if(Check ==Total_Ass )
	   {
		   assertTrue(true);
	   }
	  
	}

	@And("^User click on next button and validate Total Assessed$")
	public void user_click_on_next_button_and_validate_Total_Assessed() throws Throwable 
	{	 
		sleepWait(500);
		clickOn("btn_NEXT", "");
		sleepWait(500);
		/*if(wd.findElement(By.xpath(obj.getProperty("drp_aut_efile_click"))).isEnabled());
		 {
			 assertTrue(true);
		 }	*/
		
		
	}

	@And("^User see Assessment Adjustmen and see all field are editable$")
	public void user_see_Assessment_Adjustmen_and_see_all_field_are_editable() throws Throwable 
	{
		sleepWait(500);
		 if(wd.findElement(By.xpath(obj.getProperty("txt_AssessementAdjustement"))).isDisplayed());
		 {
			 assertTrue(true);
		 }	
	
	    WebElement we1,we2,we3,we4,we5,we6,we7,we8;		 
	    we1=wd.findElement(By.xpath(obj.getProperty("txtBox_Assest_import")));		 		
		we2=wd.findElement(By.xpath(obj.getProperty("txtBox_Assest_export")));
		we3=wd.findElement(By.xpath(obj.getProperty("txtBox_Goods_import")));
		we4=wd.findElement(By.xpath(obj.getProperty("txtBox_Goods_export")));
		we5=wd.findElement(By.xpath(obj.getProperty("txtBox_Raw_Material_import")));
		we6=wd.findElement(By.xpath(obj.getProperty("txtBox_Raw_Material_export")));
		we7=wd.findElement(By.xpath(obj.getProperty("txtBox_OGS_import")));
		we8=wd.findElement(By.xpath(obj.getProperty("txtBox_OGS_export")));
		if(we1.isEnabled() && we2.isEnabled() && we3.isEnabled() && we4.isEnabled() && we5.isEnabled() && we6.isEnabled() && we7.isEnabled() && we8.isEnabled())
		{
			assertTrue(true);
		}
	  
	}

	@And("^User entered value \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" on Manual Assessment Tax Deductible$")
	public void user_entered_value_on_Manual_Assessment_Tax_Deductible(String AI, String AL, String GI, String GL, String RI, String RL, String OI, String OL) throws Throwable
	{
		type("txtBox_Assest_import", AI);
		type("txtBox_Assest_export", AL);
		Float TotalA= Float.parseFloat(AI)+Float.parseFloat(AL);
		String TotalAS = getValue("txtBox_Total_I_E_10");
		if(TotalA==Float.parseFloat(TotalAS))
		{
			assertTrue(true);
		 }
		   
		type("txtBox_Goods_import", GI);
		type("txtBox_Goods_export", GL);
		Float TotalG = Float.parseFloat(GI)+Float.parseFloat(GL);
		String TotalGS= getValue("txtBox_Total_I_E_11");
		if(TotalG==Float.parseFloat(TotalGS))
		{
			assertTrue(true);	
		}		
		
		type("txtBox_Raw_Material_import", RI);		
		type("txtBox_Raw_Material_export", RL);
		Float TotalR= Float.parseFloat(RI)+ Float.parseFloat(RL);
	    String TotalRS= getValue("txtBox_Total_I_E_12");
	    if (TotalR==Float.parseFloat(TotalRS))
	    {
	    	assertTrue(true);
	    }
		
		
		type("txtBox_OGS_import", OI);
		type("txtBox_OGS_export", OL);
		Float TotalO=Float.parseFloat(OI)+Float.parseFloat(OL);
	    String TotalOS=getValue("txtBox_Total_I_E_13");
	    if(TotalO==Float.parseFloat(TotalOS))
	    {
	    	assertTrue(true);
	    }
	    
	    /*
	     * 14 Total deductible = 10+11+12+13 
	     */
	    Float TotalD = TotalA + TotalG + TotalR + TotalO;
	    String TotalDS = getValue("txtBox_TotalD_14");
	    
	    if (TotalD==Float.parseFloat(TotalDS))
	    {
	    	assertTrue(true);
	    }
	    
	    Float check_TotalD_Value = TotalD;
	    Check_Value_Previous_entered=check_TotalD_Value;
	  
	}

	/*@And("^User calculates and verify the amount for Total deductible field$")
	public void user_calculates_and_verify_the_amount_for_Total_deductible_field() throws Throwable 
	{
	 
	  
	}
*/
	@And("^User click on Save button and verify toast message \"([^\"]*)\"$")
	public void user_click_on_Save_button_and_verify_toast_message(String mess) throws Throwable 
	{
		clickOn("btn_Save", "");
		sleepWait(500);
		if(wd.findElement(By.xpath("//div[contains(text(),'" + mess + "')]")).isDisplayed() )
		{					
			assertTrue(true);
		}			
	  
	}

	@And("^User click on next button$")
	public void user_click_on_next_button() throws Throwable 
	{
		sleepWait(1000);
		clickOn("btn_NEXT", "");	  
		sleepWait(1000);
	}

	@And("^User click on previous button and click on edit button$")
	public void user_click_on_previous_button_and_click_on_edit_button() throws Throwable
	{
		sleepWait(1000);
		clickOn("btn_Prev", "");
		sleepWait(500);
		clickOn("btn_Edit", "");
	  
	}

	@And("^User validate previously enter value$")
	public void user_validate_previously_enter_value() throws Throwable
	{
		sleepWait(1000);
		String TotalDS = getValue("txtBox_TotalD_14");
		
		if(Check_Value_Previous_entered==Float.parseFloat(TotalDS))
		{
			assertTrue(true);
		}
		
	}

	@And("^User click on view icon on transaction received and navigate to Manual Assessment Total Deduction page$")
	public void user_click_on_view_icon_on_transaction_received_and_navigate_to_Manual_Assessment_Total_Deduction_page() throws Throwable
	{
		clickOn("btn_eye_Transaction_received", "");
		sleepWait(500);
		if(wd.findElement(By.xpath(obj.getProperty("txt_Total_Deduction_page"))).isDisplayed());
		 {
			 assertTrue(true);
		 }				  
	}

	@And("^User click on previous button on Manual Assessment Total Deduction page$")
	public void user_click_on_previous_button_on_Manual_Assessment_Total_Deduction_page() throws Throwable 
	{
		sleepWait(1000);
		clickOn("btn_Previous_M", "");	  
	}

	@And("^User validate total difference field$")
	public void user_validate_total_difference_field() throws Throwable 
	{
		   
		String e_dec_total = elementText("txt_e_Dec_TD_Total_FC");		 
		String Remov_FC = e_dec_total.replaceAll("[A-Z]", "");	
	    String Remove_FC = Remov_FC.replace("." ,"");	
	    Remove_FC = Remove_FC.replace("," ,".");		    		    	 
	    //Total_Ass = Float.parseFloat(Remove_FC);	
	    Total_edc =Float.parseFloat(Remove_FC);
		
	    String tran_rec_total = elementText("txt_Tran_Rec_TD_Total_FC");		 
		String Remov_FC1 = tran_rec_total.replaceAll("[A-Z]", "");	
	    String Remove_FC2 = Remov_FC1.replace("." ,"");	
	    Remove_FC2 = Remove_FC2.replace("," ,".");		    		    	 
	    Total_tranc = Float.parseFloat(Remove_FC2);	
		
	    Float check = Total_tranc - Total_edc;
	    
	    String total_Diff =elementText("txt_Difference_Total_FC");
		 String FC1 = total_Diff.replaceAll("[A-Z]", "");	
		 String	FC2 = FC1.replace("." ,"");		
		 String FC3 = FC2.replace("," ,".");
		 	
		 
		 if(Float.parseFloat(FC3)==check)
		  {
			   assertTrue(true);
		   }
		 
	/* String e_dec_total = getValue("txt_e_Dec_TD_Total_FC");
		   Float edec= Float.parseFloat(e_dec_total);		 
		   Total_edc=edec;
		   
		   String tran_rec_total = getValue("txt_Tran_Rec_TD_Total_FC");
		   Float tran= Float.parseFloat(tran_rec_total);		 
		   Total_tranc=tran;
		  
		   Float check = Total_tranc - Total_edc;
		   String total_Diff = getValue("txt_Difference_Total_FC");
		   if(Float.parseFloat(total_Diff)==check)
		   {
			   assertTrue(true);
		   }
	 */
		  
		  
	}

	@And("^User click on e-Filing Scedule on Manual Assessment and validate$")
	public void user_click_on_e_Filing_Scedule_on_Manual_Assessment_and_validate() throws Throwable 
	{
		sleepWait(1000);
		clickOn("btn_eFile_Schedule", "");
		sleepWait(500);
		verifyDownload("e-Filing Schedule");
	}

	
	@And("^User click on Transaction Received button and validate$")
	public void user_click_on_Transaction_Received_button_and_validate() throws Throwable 
	{
		clickOn("btn_TransactionReceived", "");
		verifyDownload("TransactionReceived");
		sleepWait(1000);
	  
	}

	@And("^User click on e-Filing Scedule when file is not upload by tax payer and user see \"([^\"]*)\"$")
	public void user_click_on_e_Filing_Scedule_when_file_is_not_upload_by_tax_payer_and_user_see(String mess) throws Throwable 
	{
		sleepWait(1000);
		clickOn("btn_eFile_Schedule", "");
		sleepWait(500);
		if(wd.findElement(By.xpath("//div[contains(text(),'" + mess + "')]")).isDisplayed() )
		{					
			assertTrue(true);
		}			
	  
	}

	@And("^User click on prev button and navigate to Operations Performed page$")
	public void user_click_on_prev_button_and_navigate_to_Operations_Performed_page() throws Throwable 
	{
		sleepWait(1000);
		clickOn("btn_Prev", "");
		sleepWait(1000);				
		if(wd.findElement(By.xpath(obj.getProperty("txt_OP_check"))).isDisplayed());
		 {
			 assertTrue(true);
		 }				  
	}

	@And("^User click on next button and navigate to Tax Deductible$")
	public void user_click_on_next_button_and_navigate_to_Tax_Deductible() throws Throwable 
	{
		sleepWait(1000);
		clickOn("btn_NEXT", "");
		sleepWait(1000);		
		if(wd.findElement(By.xpath(obj.getProperty("txt_Tax_Deductible_Page"))).isDisplayed());
		 {
			 assertTrue(true);
		 }		  
	}

	@And("^User click on next button and navigate to Adjustment page$")
	public void user_click_on_next_button_and_navigate_to_Adjustment_page() throws Throwable 
	{
		sleepWait(1000);
		clickOn("btn_NEXT", "");
		sleepWait(500);		
		if(wd.findElement(By.xpath(obj.getProperty("txt_Adjustement_check"))).isDisplayed());
		 {
			 assertTrue(true);
		 }		  
	}

	@And("^User click on Previous button and navigate to Manual assessment Tax payer list page$")
	public void user_click_on_Previous_button_and_navigate_to_Manual_assessment_Tax_payer_list_page() throws Throwable 
	{
		sleepWait(1000);
		clickOn("btn_Prev_m", "");
		sleepWait(500);
		if(wd.findElement(By.xpath(obj.getProperty("txt_check_Landing_Man"))).isDisplayed());
		 {
			 assertTrue(true);
		 }	
	}
		
	

	/** 
	 *  Negative Scenario 
	 */
	@And("^User entered value \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" on Manual Assessment Tax Deductible negative$")
	public void user_entered_value_on_Manual_Assessment_Tax_Deductible_negative(String AI, String AL, String GI, String GL, String RI, String RL, String OI, String OL) throws Throwable 
	{		
		
		//type_without_clear("txtBox_Assest_import", AI);
		
		type("txtBox_Assest_import", AI);
		String VAT_Collected_AI= getValue("txtBox_Assest_import");		
		if(AI!=VAT_Collected_AI)
		{
			assertTrue(true);
		}					
		
		type("txtBox_Assest_export", AL);		
		String VAT_Collected_AL= getValue("txtBox_Assest_export");		
		if(AL!=VAT_Collected_AL)
		{
			assertTrue(true);
		}
		type("txtBox_Goods_import", GI);
		String VAT_Collected_GI= getValue("txtBox_Goods_import");		
		if(GI!=VAT_Collected_GI)
		{
			assertTrue(true);
		}
		type("txtBox_Goods_export", GL);
		String VAT_Collected_GL= getValue("txtBox_Goods_export");		
		if(GL!=VAT_Collected_GL)
		{
			assertTrue(true);
		}
		type("txtBox_Raw_Material_import", RI);
		String VAT_Collected_RI= getValue("txtBox_Raw_Material_import");		
		if(AL!=VAT_Collected_RI)
		{
			assertTrue(true);
		}
		type("txtBox_Raw_Material_export", RL);
		String VAT_Collected_RL= getValue("txtBox_Raw_Material_export");		
		if(RL!=VAT_Collected_RL)
		{
			assertTrue(true);
		}
		type("txtBox_OGS_import", OI);
		String VAT_Collected_OI= getValue("txtBox_OGS_import");		
		if(OI!=VAT_Collected_OI)
		{
			assertTrue(true);
		}
		type("txtBox_OGS_export", OL);
		String VAT_Collected_OL= getValue("txtBox_OGS_export");		
		if(OL!=VAT_Collected_OL)
		{
			assertTrue(true);
		}			
		
	}
	

	@And("^User entered value \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" on Manual Assessment Tax Deductible field length$")
	public void user_entered_value_on_Manual_Assessment_Tax_Deductible_field_length(String AI, String AL, String GI, String GL, String RI, String RL, String OI, String OL) throws Throwable 
	{
		type("txtBox_Assest_import", AI);
		int actualLimit =wd.findElement(By.xpath(obj.getProperty("txtBox_Assest_import"))).getAttribute("value").length();
		assertEquals(actualLimit, 15);				
		
		type("txtBox_Assest_export", AL);
		int actualLimit1 =wd.findElement(By.xpath(obj.getProperty("txtBox_Assest_export"))).getAttribute("value").length();
		assertEquals(actualLimit1, 15);	
		
		type("txtBox_Goods_import", GI);
		int actualLimit2 =wd.findElement(By.xpath(obj.getProperty("txtBox_Goods_import"))).getAttribute("value").length();
		assertEquals(actualLimit2, 15);	
		
		type("txtBox_Goods_export", GL);
		int actualLimit3 =wd.findElement(By.xpath(obj.getProperty("txtBox_Goods_export"))).getAttribute("value").length();
		assertEquals(actualLimit3, 15);	
		
		type("txtBox_Raw_Material_import", RI);
		int actualLimit4 =wd.findElement(By.xpath(obj.getProperty("txtBox_Raw_Material_import"))).getAttribute("value").length();
		assertEquals(actualLimit4, 15);	
		
		type("txtBox_Raw_Material_export", RL);
		int actualLimit5 =wd.findElement(By.xpath(obj.getProperty("txtBox_Raw_Material_export"))).getAttribute("value").length();
		assertEquals(actualLimit5, 15);			
		
		type("txtBox_OGS_import", OI);
		int actualLimit6 =wd.findElement(By.xpath(obj.getProperty("txtBox_OGS_import"))).getAttribute("value").length();
		assertEquals(actualLimit6, 15);	
		
		type("txtBox_OGS_export", OL);
		int actualLimit7 =wd.findElement(By.xpath(obj.getProperty("txtBox_OGS_export"))).getAttribute("value").length();
		assertEquals(actualLimit7, 15);			
	}
	
	

}
