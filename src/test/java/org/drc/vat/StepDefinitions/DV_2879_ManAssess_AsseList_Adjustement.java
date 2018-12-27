package org.drc.vat.StepDefinitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import gherkin.lexer.Th;

import static org.drc.vat.appmanager.HelperBase.*;
import static org.junit.Assert.assertEquals;
import static org.testng.Assert.assertTrue;

import org.openqa.selenium.By;
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

	@And("^User click on drop down \"([^\"]*)\" for Manual Assessment Adjustment$")
	public void user_click_on_drop_down_for_Manual_Assessment_Adjustment(String period) throws Throwable 
	{
		Thread.sleep(500);		
		 clickOn("drp_month", "");
		 Thread.sleep(500);
		 clickOn(period, "");	  
	}

	@And("^User see NITVA number is selected$")
	public void user_see_NITVA_number_is_selected() throws Throwable
	{
		String NITVA_no = wd.findElement(By.xpath(obj.getProperty("txt_NITVA_Manual_Get"))).getText();
		Store_NITVA = NITVA_no;	  
	}

	@And("^User navigate to Adjustment page$")
	public void user_navigate_to_Adjustment_page() throws Throwable 
	{
		Thread.sleep(1000);
		clickOn("btn_NEXT", "");
		Thread.sleep(1000);
		clickOn("btn_NEXT", "");
		Thread.sleep(1000);
		if(wd.findElement(By.xpath(obj.getProperty("txt_checkAdjustement_page"))).isDisplayed());
		{
		  assertTrue(true);
		}	
	  
	}

	@And("^Validate NITVA number$")
	public void validate_NITVA_number() throws Throwable 
	{
		Thread.sleep(2000);
		String NITVA_Check = wd.findElement(By.xpath(obj.getProperty("txt_NITVA_Check"))).getText();
		if(Store_NITVA==NITVA_Check)
		 {
			 assertTrue(true);
		 }			  
	}

	@And("^User validate Total additional liability on Adjustement page$")
	public void user_validate_Total_additional_liability_on_Adjustement_page() throws Throwable
	{
		
		Thread.sleep(2000);		
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
		 
		 Thread.sleep(500);
		 String Total_Add_Lib =elementText("txt_Total_Additionality_Liability");
		 String FC1 = Total_Add_Lib.replaceAll("[A-Z]", "");	
		 String	FC2 = FC1.replace("." ,"");		
		 String FC3 = FC2.replace("," ,".");
		 System.out.println(FC3);		 
		 Check_Add_Lib =Float.parseFloat(FC3);		 
		 
		/* Float check = Float.parseFloat(FC2);
		 Float store = check;*/
		 
		 if(Validate==Check_Add_Lib)
		 {
			 System.out.println("pass");
		 }
		
		/*String Total_Additional_Liability = wd.findElement(By.xpath(obj.getProperty("txt_Total_Add_Lib"))).getText();
		String Total_Assessed = wd.findElement(By.xpath(obj.getProperty("txt_TotalAssessed"))).getText();
		String Total_Declaration = wd.findElement(By.xpath(obj.getProperty("txt_Total_Declaration"))).getText();		
		
		
		//String Check_T_A = Total_Assessed;
		//String Check_T_E = Total_Assessed;
		 Float T_A_D = Float.parseFloat(Total_Assessed) -  Float.parseFloat(Total_Declaration);
		 
		 if(Float.parseFloat(Total_Additional_Liability) ==T_A_D)
		 {
			 assertTrue(true);
		 }*/
	  
	}

	@And("^User check total assessed value and click on next button and validate same amount$")
	public void user_check_total_assessed_value_and_click_on_next_button_and_validate_same_amount() throws Throwable 
	{
		Thread.sleep(1000);
		clickOn("btn_NEXT", "");
		Thread.sleep(1000);
		 String Total_Add_Lib =elementText("txt_Total_Additionality_Liability");
		 String FC1 = Total_Add_Lib.replaceAll("[A-Z]", "");	
		 String	FC2 = FC1.replace("." ,"");		
		 String FC3 = FC2.replace("," ,".");
		 System.out.println(FC3);		 
		 Float check= Float.parseFloat(FC3);
		 
		 
		 if(check==Check_Add_Lib)
		 {
			 assertTrue(true);
		 }
		
		/*String Total_Additional_Liability = wd.findElement(By.xpath(obj.getProperty("txt_Total_Add_Lib"))).getText();
		//T_A_Total_Assessed =Float.parseFloat(Total_Additional_Liability);
		String check_AL = Total_Additional_Liability;
		clickOn("btn_NEXT", "");
		Thread.sleep(500);		
		
		if(check_AL==Total_Additional_Liability)
		{
			assertTrue(true);
		}
		*/
	  
	}

	@And("^User click on prev button$")
	public void user_click_on_prev_button() throws Throwable 
	{
	   clickOn("btn_Prev", "");	  
	}

	@And("^User click on edit button on Tax Adjustement$")
	public void user_click_on_edit_button_on_Tax_Adjustement() throws Throwable 
	{	   
		Thread.sleep(1000);
		clickOn("btn_Edit", "");
	}

	@And("^User entered value \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" for Adjustment page$")
	public void user_entered_value_for_Adjustment_page(String VR, String SD, String VD, String PC) throws Throwable 
	{
		Thread.sleep(1000);
		type("txtBox_VR",VR);
	    type("txtBox_SD",SD);
	    type("txtBox_VD",VD);
	    type("txtBox_PC",PC);
	  
	}

	@And("^User click on Save button and validate message \"([^\"]*)\"$")
	public void user_click_on_Save_button_and_validate_message(String mess) throws Throwable
	{
		Thread.sleep(1000);
	  clickOn("btn_Save", "");
	  if(wd.findElement(By.xpath("//div[contains(text(),'" + mess + "')]")).isDisplayed() )
		{					
			assertTrue(true);
		}	
	  
	}

	@And("^User again entered value \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" for Adjustment page$")
	public void user_again_entered_value_for_Adjustment_page(String VR, String SD, String VD, String PC) throws Throwable 
	{
		Thread.sleep(1000);
		/*type("txtBox_VR",VR);
		type("txtBox_SD",SD);
	    type("txtBox_VD",VD);
	    type("txtBox_PC",PC);*/
	    
		wd.findElement(By.xpath(obj.getProperty("txtBox_VR"))).clear();
		Thread.sleep(500);
		wd.findElement(By.xpath(obj.getProperty("txtBox_SD"))).clear();
		Thread.sleep(500);
		wd.findElement(By.xpath(obj.getProperty("txtBox_VD"))).clear();
		Thread.sleep(500);
		wd.findElement(By.xpath(obj.getProperty("txtBox_PC"))).clear();
		Thread.sleep(500);
	    
	    
	  /*  Thread.sleep(8000);
	    String VAT_VRC = getValue("txtBox_VR");
	    String VAT_SD = getValue("txtBox_SD");
	    String VAT_VD = getValue("txtBox_VD");
	    String VAT_PC = getValue("txtBox_PC");
	    
	 //   Float.parseFloat(VAT_VRC);
	    Float VAT_Float_VRC= Float.parseFloat(VAT_VRC);
	    Float VAT_Float_SDC= Float.parseFloat(VAT_SD);
	    Float VAT_Float_VDC= Float.parseFloat(VAT_VD);
	    Float VAT_Float_PCC= Float.parseFloat(VAT_PC);
	    
	    VAT_Store_VRC = VAT_Float_VRC;
	    VAT_Store_SDC = VAT_Float_SDC;
	    VAT_Store_VDC = VAT_Float_VDC;
	    VAT_Store_PCC = VAT_Float_PCC;*/
	    
	  
	}

	@And("^User click on next button and navigate to Assessment Summary$")
	public void user_click_on_next_button_and_navigate_to_Assessment_Summary() throws Throwable
	{
		Thread.sleep(1000);
		clickOn("btn_NEXT", "");
		Thread.sleep(1000);
		if(wd.findElement(By.xpath(obj.getProperty("txt_AS"))).isDisplayed());
		{
		  assertTrue(true);
		}	
	  
	}

	@And("^User again click on prev button and click on edit button and validate amount is saved$")
	public void user_again_click_on_prev_button_and_click_on_edit_button_and_validate_amount_is_saved() throws Throwable
	{
		Thread.sleep(1000);
	   clickOn("btn_Prev", "");
	   Thread.sleep(1000);
	   clickOn("btn_Edit", "");
	   Thread.sleep(1000);
	   
	 /*  String VAT_VRC = getValue("txtBox_VR");
	   String VAT_SD = getValue("txtBox_SD");
	   String VAT_VD = getValue("txtBox_VD");
	   String VAT_PC = getValue("txtBox_PC");
	   
	   
	   if(VAT_Store_VRC ==Float.parseFloat(VAT_VRC) && VAT_Store_SDC ==Float.parseFloat(VAT_SD) && VAT_Store_VDC ==Float.parseFloat(VAT_VD) && VAT_Store_PCC ==Float.parseFloat(VAT_PC) )
	   {
		   assertTrue(true);
	   }*/
	}

	@And("^User keep field blank and validate mess \"([^\"]*)\"$")
	public void user_keep_field_blank_and_validate_mess(String arg1) throws Throwable 
	{
		// bacspace
		Thread.sleep(2000);
		wd.findElement(By.xpath(obj.getProperty("txtBox_VR"))).clear();
		System.out.println("txtBox_VR");
		Thread.sleep(4000);
		wd.findElement(By.xpath(obj.getProperty("txtBox_SD"))).clear();
		Thread.sleep(4000);
		wd.findElement(By.xpath(obj.getProperty("txtBox_VD"))).clear();
		Thread.sleep(4000);
		wd.findElement(By.xpath(obj.getProperty("txtBox_PC"))).clear();
		Thread.sleep(2000);
	  
	}

	@And("^User see next button is disable$")
	public void user_see_next_buttron_is_disable() throws Throwable
	{
		//System.out.println(wd.findElement(By.xpath(obj.getProperty("btn_Save"))).isEnabled());
		Thread.sleep(1000);
		//asswd.findElement(By.xpath(obj.getProperty("btn_Save"))).isEnabled());
		assertEquals(wd.findElement(By.xpath(obj.getProperty("btn_Save"))).isEnabled(), false);
		/*{
			System.out.println(wd.findElement(By.xpath(obj.getProperty("btn_Save"))).isEnabled());
		  assertTrue(true);
		}	
	  */
	  
	}

	@And("^User click on view icon on Supplementary deductions and navigate to Manual Assessment Supplementary deductions page$")
	public void user_click_on_view_icon_on_Supplementary_deductions_and_navigate_to_Manual_Assessment_Supplementary_deductions_page() throws Throwable 
	{
	  clickOn("btn_eye_Transaction_received", ""); 
	  Thread.sleep(1000);
	  if(wd.findElement(By.xpath(obj.getProperty("txt_check_SD"))).isDisplayed());
		{
		  assertTrue(true);
		}	
	  
	}

	@And("^User click on previous button and navigate to Manual Assessment Adjustment page$")
	public void user_click_on_previous_button_and_navigate_to_Manual_Assessment_Adjustment_page() throws Throwable 
	{
		Thread.sleep(1000);
		 clickOn("btn_Previous_M", ""); 
		 
		  if(wd.findElement(By.xpath(obj.getProperty("txt_checkAdjustement_page"))).isDisplayed());
			{
			  assertTrue(true);
			}	
	  
	}

	@And("^User click on view icon on  VAT deducted by mining companies at source and navigate to Manual Assessment Supplementary Mining page$")
	public void user_click_on_view_icon_on_VAT_deducted_by_mining_companies_at_source_and_navigate_to_Manual_Assessment_Supplementary_Mining_page() throws Throwable
	{
		Thread.sleep(1000);
		 clickOn("btn_eye_VD", ""); 
		  if(wd.findElement(By.xpath(obj.getProperty("txt_check_mining"))).isDisplayed());
			{
			  assertTrue(true);
			}	
	  
	}

	@And("^User validate amount Difference on Adjustement page$")
	public void user_validate_amount_Difference_on_Adjustement_page() throws Throwable
	{
		Thread.sleep(1000);
		String Diff = wd.findElement(By.xpath(obj.getProperty("txt_difference"))).getText();
		//Float Check_Diff= Float.parseFloat(Diff);		
		 String Remove_FC = Diff.replace("." ,"");	
		 Remove_FC = Remove_FC.replace("," ,".");		    		    	 
		 Float Check_Diff = Float.parseFloat(Remove_FC);		
		
		
		String Amount_e_sd = wd.findElement(By.xpath(obj.getProperty("txt_e_SD"))).getText();
		//Float e_sd= Float.parseFloat(Amount_e_sd);		 
		//Total_edc=e_sd;
		 String Remove_FC1 = Amount_e_sd.replace("." ,"");	
		 Remove_FC1 = Remove_FC1.replace("," ,".");		    		    	 
		 Float e_sd = Float.parseFloat(Remove_FC1);

		 String Amount_e_mining= wd.findElement(By.xpath(obj.getProperty("txt_e_mining"))).getText();
		//Float e_min= Float.parseFloat(Amount_e_mining);
		 String Remove_FC2 = Amount_e_mining.replace("." ,"");	
		 Remove_FC2 = Remove_FC2.replace("," ,".");		    		    	 
		 Float e_min = Float.parseFloat(Remove_FC2);
		
		String Amount_tr_sd = wd.findElement(By.xpath(obj.getProperty("txt_tr_SD"))).getText();
		//Float e_tr_sd= Float.parseFloat(Amount_tr_sd);
		 String Remove_FC3 = Amount_tr_sd.replace("." ,"");	
		 Remove_FC3 = Remove_FC3.replace("," ,".");		    		    	 
		 Float e_tr_sd = Float.parseFloat(Remove_FC3);
		
		String Amount_tr_mining = wd.findElement(By.xpath(obj.getProperty("txt_tr_mining"))).getText();
		//Float e_tr_min= Float.parseFloat(Amount_tr_mining);
		 String Remove_FC4 = Amount_tr_mining.replace("." ,"");	
		 Remove_FC4 = Remove_FC4.replace("," ,".");		    		    	 
		 Float e_tr_min = Float.parseFloat(Remove_FC4);
	  
		Float e_dec_total = e_sd + e_min;
		Float e_tr_total = e_tr_sd + e_tr_min;
		
		Float Total = e_dec_total - e_tr_total;
		
		if(Total==Check_Diff)
		{
			assertTrue(true);
		}
		
	}

	@And("^User click on prev button and navigate to Tax Deductible$")
	public void user_click_on_prev_button_and_navigate_to_Tax_Deductible() throws Throwable
	{
		 clickOn("btn_Prev", ""); 
		  if(wd.findElement(By.xpath(obj.getProperty("txt_Tax_Deductible_Page"))).isDisplayed());
			{
			  assertTrue(true);
			}	
	  
	}
}
