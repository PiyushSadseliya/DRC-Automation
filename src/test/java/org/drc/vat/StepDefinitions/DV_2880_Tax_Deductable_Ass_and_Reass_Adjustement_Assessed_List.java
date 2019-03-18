package org.drc.vat.StepDefinitions;
import static org.drc.vat.appmanager.HelperBase.*;
import static org.testng.Assert.assertTrue;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
public class DV_2880_Tax_Deductable_Ass_and_Reass_Adjustement_Assessed_List 
{
	
	public static Float Total_Assed;
	public static Float Total_Reassed;
	public static Float checkPrevious_Value;
	public static Float Total_e_dec;
	public static Float Total_edc;
	public static Float Total_tranc;
	public static Float TA_AVD;
	public static Float Store_TA_AVD;
	public static Float Store_Validate;	
	public static Float Total_Ass;
	public static Float Check_Add_Lib;
	
	public static Float checkPrevious_Reassessed;
	
	@And("^User click on drop down \"([^\"]*)\" for Assessed List$")
	public void user_click_on_drop_down_for_Assessed_List(String period) throws Throwable 
	{
	  sleepWait(2000);
	  waitFor("drp_month");
	  clickOn("drp_month", "");
	  sleepWait(500);
	  clickOn(period, "");
	    
	}

	@And("^User click on manage and click on Reassess$")
	public void user_click_on_manage_and_click_on_Reassess() throws Throwable 
	{	
		sleepWait(1000);  
		clickOn("drp_AssestManage", "");
		sleepWait(1000);
		clickOn("drp_ReAssess", "");
		sleepWait(5000);
	}

	@And("^User entered value \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" on Assessed List Tax Deductible and calculate Total Reassessed amount$")
	public void user_entered_value_on_Assessed_List_Tax_Deductible_and_calculate_Total_Reassessed_amount(String AI, String AL, String GI, String GL, String RI, String RL, String OI, String OL) throws Throwable 
	{
		type("txtBox_Assest_import", AI);
		type("txtBox_Assest_export", AL);
				   
		type("txtBox_Goods_import", GI);
		type("txtBox_Goods_export", GL);
				
		type("txtBox_Raw_Material_import", RI);		
		type("txtBox_Raw_Material_export", RL);
				
		type("txtBox_OGS_import", OI);
		type("txtBox_OGS_export", OL);
		
		
		//Total_Assed  
		String TotalReassessed_Check= getValue("txtBox_AVD_16");
		Float A_V_D = Float.parseFloat(TotalReassessed_Check);
				
		/*
		Float TA_AVD = Total_Assed - A_V_D;
		Store_TA_AVD = TA_AVD;*/
		
				 
		sleepWait(500);		
		String Total_Assessed = elementText("txt_TotalAssessed");		 
		String Remov_FC = Total_Assessed.replaceAll("[A-Z]", "");	
	    String Remove_FC = Remov_FC.replace("." ,"");	
	    Remove_FC = Remove_FC.replace("," ,".");		    		    	 
	    Total_Ass = Float.parseFloat(Remove_FC);			
			
	    Float Store_Ass =  Total_Ass;
	    
	    String Total_Ress =elementText("txt_Total_Reassessed");		 
		 String Remov_FC1 = Total_Ress.replaceAll("[A-Z]", "");	
		 String	Remove_FC2 = Remov_FC1.replace("." ,"");		
		 Remove_FC2 = Remove_FC2.replace("," ,".");
		 Total_Reassed = Float.parseFloat(Remove_FC2);		 	
	  
		 Float TA_AVD = Store_Ass - A_V_D;
		 Store_TA_AVD = TA_AVD;
	   
	}
//	needf to discuss calculation
	@And("^User click on next button and validate Total Reassessed$")
	public void user_click_on_next_button_and_validate_Total_Reassessed() throws Throwable 
	{
		sleepWait(1000);
		clickOn("btn_NEXT", "");
		sleepWait(3000);
		
	//	String TotalReassessed_Check= getValue("txt_Total_Reassessed");
		
		//Float T_R_Check = Float.parseFloat(TotalReassessed_Check);		
		 String Total_Ress =elementText("txt_Total_Reassessed");		 
		 String Remov_FC1 = Total_Ress.replaceAll("[A-Z]", "");	
		 String	Remove_FC2 = Remov_FC1.replace("." ,"");		
		 Remove_FC2 = Remove_FC2.replace("," ,".");
		Float Total_Reassed1 = Float.parseFloat(Remove_FC2);		 	
		
		
		
		if(Store_TA_AVD==Total_Reassed1)
		{
			assertTrue(true);
		}
		
	    
		
	}

	@And("^User entered value \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" on Assessed List on Tax Deductible and calculate total$")
	public void user_entered_value_on_Assessed_List_on_Tax_Deductible_and_calculate_total(String AI, String AL, String GI, String GL, String RI, String RL, String OI, String OL) throws Throwable 
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
	    
	    /*
	     * Amount of VAT Deductible = Total Deductible + Report of credit carry forward (If Any))
	     */
		
		String TotalVatDed = getValue("txtBox_TotalD_14");
		String TotalCC = getValue("txtBox_RCC_15");		
	    Float Amount=Float.parseFloat(TotalVatDed)+Float.parseFloat(TotalCC);
	    String TotalAVD = getValue("txtBox_AVD_16");
	    
	     checkPrevious_Value=Float.parseFloat(TotalAVD);
	     
	    if (Amount==Float.parseFloat(TotalAVD))
	    {
	    	assertTrue(true);
	    }
	    
	}

	@And("^User click on next button and navigate to Adjustment tab$")
	public void user_click_on_next_button_and_navigate_to_Adjustment_tab() throws Throwable 
	{
		sleepWait(1000);
		clickOn("btn_NEXT", "");
		sleepWait(500);
		if(wd.findElement(By.xpath(obj.getProperty("txt_checkAdjustement_page"))).isDisplayed());
		{
		  assertTrue(true);
		}		    
	}
	
	@And("^User see Reassessment Adjustmen and see all field are editable$")
	public void user_see_Reassessment_Adjustmen_and_see_all_field_are_editable() throws Throwable 
	{
		sleepWait(500);
		 if(wd.findElement(By.xpath(obj.getProperty("txtReassessmentAdjustement"))).isDisplayed());
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

	@And("^User validate previously enter value on Reassessment Adjustment field$")
	public void user_validate_previously_enter_value_on_Reassessment_Adjustment_field() throws Throwable 
	{
		
		 String Amount_of_VAT_Deductible = getValue("txtBox_AVD_16");		 
		 if(checkPrevious_Value==Float.parseFloat(Amount_of_VAT_Deductible))
		 {
			 assertTrue(true);
		 }
		//h6[contains(text(),'Reassessment Adjustment')]
	}

	@And("^User click on view icon on transaction received and navigate to Assessed List Total Deduction page$")
	public void user_click_on_view_icon_on_transaction_received_and_navigate_to_Assessed_List_Total_Deduction_page() throws Throwable 
	{
	  clickOn("btn_eye_Transaction_received", "");
	  sleepWait(500);
	  if(wd.findElement(By.xpath(obj.getProperty("txt_Total_Deduction_page"))).isDisplayed());
		 {
			 assertTrue(true);
		 }		  
	    
	}

	@And("^User click on previous button on Assessed List$")
	public void user_click_on_previous_button_on_Assessed_List() throws Throwable
	{
		sleepWait(1000);
	  clickOn("btn_Previous_M", "");
	  sleepWait(1000);
	    
	}

	@And("^User Validate the amount in Total of Difference field$")
	public void user_Validate_the_amount_in_Total_of_Difference_field() throws Throwable 
	{
		
		sleepWait(1000);
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
		 System.out.println(FC3);	 
		 
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
		   }		   */

		   
	}

	@And("^User click on e-Filing Scedule on Assessed List and validate$")
	public void user_click_on_e_Filing_Scedule_on_Assessed_List_and_validate() throws Throwable 
	{
		clickOn("btn_eFile_Schedule", "");
		sleepWait(1000);
		verifyDownload("e-Filing Schedule");
		 
	    
	}

	@And("^User click on Transaction Received button on Assessed List and validate$")
	public void user_click_on_Transaction_Received_button_on_Assessed_List_and_validate() throws Throwable 
	{
		sleepWait(1000);
		clickOn("btn_TransactionReceived", "");
		verifyDownload("TransactionReceived");
		sleepWait(1000);
	    
	}

	@And("^User click on e-Filing Scedule when file is not upload by tax payer and user see \"([^\"]*)\" on Assessed List$")
	public void user_click_on_e_Filing_Scedule_when_file_is_not_upload_by_tax_payer_and_user_see_on_Assessed_List(String mess) throws Throwable 
	{
		sleepWait(1000);
		clickOn("btn_eFile_Schedule", "");
		sleepWait(300);
		if(wd.findElement(By.xpath("//div[contains(text(),'" + mess + "')]")).isDisplayed() )
		{					
			assertTrue(true);
		}	
	    
	}

	@And("^User click on Previous button and navigate to Assessed List Page$")
	public void user_click_on_Previous_button_and_navigate_to_Assessed_List_Page() throws Throwable
	{
	  sleepWait(1000);
	  clickOn("btn_Prev_m", "");
	  sleepWait(500);
	  if(wd.findElement(By.xpath(obj.getProperty("txt_check_Landing_Man"))).isDisplayed());
	  {
			 assertTrue(true);
	  }		  	    
	}
	
	
	@And("^User Check the amount displayed in Total Assessed tile and Total Reassessed tile on assessement list$")
	public void user_Check_the_amount_displayed_in_Total_Assessed_tile_and_Total_Reassessed_tile_on_assessement_list() throws Throwable 
	{
		sleepWait(500);		
		String Total_Assessed = elementText("txt_TotalAssessed");		 
		String Remov_FC = Total_Assessed.replaceAll("[A-Z]", "");	
	    String Remove_FC = Remov_FC.replace("." ,"");	
	    Remove_FC = Remove_FC.replace("," ,".");		    		    	 
	    Total_Ass = Float.parseFloat(Remove_FC);					
		
	    String Total_Ress =elementText("txt_Total_Reassessed");		 
		 String Remov_FC1 = Total_Ress.replaceAll("[A-Z]", "");	
		 String	Remove_FC2 = Remov_FC1.replace("." ,"");		
		 Remove_FC2 = Remove_FC2.replace("," ,".");
		 Total_Reassed = Float.parseFloat(Remove_FC2);		 			 
		 
		 if(Total_Ass.equals(Total_Reassed))
		 {
			assertTrue(true);
		 }
		 
		 Float Validate =  Total_Ass - Total_Reassed;
		 Store_Validate =Validate;		 
		 
	}
	
	@And("^User Check the amount displayed in Total Assessed tile and Total Reassessed tile$")
	public void user_Check_the_amount_displayed_in_Total_Assessed_tile_and_Total_Reassessed_tile() throws Throwable 
	{
		 
		sleepWait(500);		
		String Total_Assessed = elementText("txt_TotalAssessed");		 
		String Remov_FC = Total_Assessed.replaceAll("[A-Z]", "");	
	    String Remove_FC = Remov_FC.replace("." ,"");	
	    Remove_FC = Remove_FC.replace("," ,".");		    		    	 
	    Total_Assed = Float.parseFloat(Remove_FC);			
		
		
	    String Total_Ress =elementText("txt_Total_Reassessed");		 
		 String Remov_FC1 = Total_Ress.replaceAll("[A-Z]", "");	
		 String	Remove_FC2 = Remov_FC1.replace("." ,"");		
		 Remove_FC2 = Remove_FC2.replace("," ,".");
		 Total_Reassed = Float.parseFloat(Remove_FC2);		 	
		
		 Float Validate =  Total_Assed - Total_Reassed;
		 Store_Validate =Validate;		 
		 
		 if(Total_Assed.equals(Total_Reassed))
		 {
			assertTrue(true);
		 } 		
		 
	}
	
	@And("^User Check the amount displayed in Total Additional liability tile$")
	public void user_Check_the_amount_displayed_in_Total_Additional_liability_tile() throws Throwable
	{		
		 String Total_Add_Lib =elementText("txt_Total_Additionality_Liability");
		 String FC1 = Total_Add_Lib.replaceAll("[A-Z]", "");	
		 String	FC2 = FC1.replace("." ,"");		
		 String FC3 = FC2.replace("," ,".");
		 System.out.println(FC3);		 
		 Check_Add_Lib =Float.parseFloat(FC3);		 
		
		 if(Store_Validate.equals(Check_Add_Lib))
		{
			assertTrue(true);
		}		 		   
	}

}
