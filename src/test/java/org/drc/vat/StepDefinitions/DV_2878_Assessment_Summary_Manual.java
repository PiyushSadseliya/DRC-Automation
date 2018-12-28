package org.drc.vat.StepDefinitions;
import static org.drc.vat.appmanager.HelperBase.*;
import static org.testng.Assert.assertTrue;

import org.drc.vat.appmanager.HelperBase;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.And;

public class DV_2878_Assessment_Summary_Manual 
{
	public static Float Total_TR_Ass;
	public static Float Total_AL_TA_;
	public static Float Check_Store_Re_TA;
	public static Float Check_Store_TA; 
	public static Float Total_Ass;
	public static Float Total_ReAss;
	public static Float Total_e_dec;
	public static Float Store_Delivery_goods;
	public static Float Store_DOG;
	public static Float Store_Toatal_AI_AL;
	public static Float Store_Assert;
	public static Float Store_Vat_rev;

	@And("^User click on next button and navigate to Assessment Summary page$")
	public void user_click_on_next_button_and_navigate_to_Assessment_Summary_page() throws Throwable 
	{
		Thread.sleep(1000);
		clickOn("btn_NEXT", "");
		Thread.sleep(2000);
		clickOn("btn_NEXT", "");
		Thread.sleep(2000);
		clickOn("btn_NEXT", "");
		Thread.sleep(2000);			
		if(wd.findElement(By.xpath(obj.getProperty("txt_AS"))).isDisplayed());
		{
			assertTrue(true);
		}
	}

	@And("^User see Total Assessed amount$")
	public void user_see_Total_Assessed_amount() throws Throwable 
	{
		/*Thread.sleep(1000);
		String Total_Assessed = wd.findElement(By.xpath(obj.getProperty("txt_TotalAssessed"))).getText();
	    Float Store_TA = Float.parseFloat(Total_Assessed);
	    Check_Store_TA =Store_TA;*/
		Thread.sleep(1000);
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
		String Total_Add_Lib =elementText("txt_Total_Additionality_Liability_MA_OP");
		String FC1 = Total_Add_Lib.replaceAll("[A-Z]", "");	
		String	FC2 = FC1.replace("." ,"");		
		String FC3 = FC2.replace("," ,".");
		System.out.println(FC3);		 
		Float Check_Add_Lib =Float.parseFloat(FC3);		 

	/*	if(Validate==Check_Add_Lib)
		{
			System.out.println("pass");
		}*/	    
	}

	@And("^User check Total Assessed amount is not changed$")
	public void user_check_Total_Assessed_amount_is_not_changed() throws Throwable 
	{
		/*String Total_Assessed = wd.findElement(By.xpath(obj.getProperty("txt_TotalAssessed"))).getText();
	    Float Store_TA = Float.parseFloat(Total_Assessed);*/
		String Total_Assessed = elementText("txt_TotalAssessed");		 
		String Remov_FC = Total_Assessed.replaceAll("[A-Z]", "");	
		String Remove_FC = Remov_FC.replace("." ,"");	
		Remove_FC = Remove_FC.replace("," ,".");		
		Float check_ta = Float.parseFloat(Remove_FC);

		if(Total_Ass==check_ta)
		{
			assertTrue(true);
		}
	}

	@And("^User validate Total Additional Liability on Assessment Summary page$")
	public void user_validate_Total_Additional_Liability_on_Assessment_Summary_page() throws Throwable 
	{
		String Total_e_Dec =elementText("txt_Total_Declaration");		 
		String Remov_FC1 = Total_e_Dec.replaceAll("[A-Z]", "");	
		String	Remove_FC2 = Remov_FC1.replace("." ,"");		
		Remove_FC2 = Remove_FC2.replace("," ,".");
		Total_e_dec = Float.parseFloat(Remove_FC2);
		Thread.sleep(500);

		/*String Total_Additional_Liability = wd.findElement(By.xpath(obj.getProperty("txt_check_TAL"))).getText();
		String Total_Assessed = wd.findElement(By.xpath(obj.getProperty("txt_TotalAssessed"))).getText();
		String Total_Declaration = wd.findElement(By.xpath(obj.getProperty("txt_Total_Declaration"))).getText();				


		 Float T_A_D = Float.parseFloat(Total_Assessed) -  Float.parseFloat(Total_Declaration);

		 if(Float.parseFloat(Total_Additional_Liability) ==T_A_D)
		 {
			 assertTrue(true);
		 }*/

	}

	@And("^User see message \"([^\"]*)\" when no changes done in adjustement$")
	public void user_see_message_when_no_changes_done_in_adjustement(String mess) throws Throwable 
	{
		Thread.sleep(1000);
		if(wd.findElement(By.xpath("//h6[contains(text(),'" + mess + "')]")).isDisplayed() )
		{					
			assertTrue(true);
		}	
	}

	@And("^User click on e-filing schedule when tax payer did not uploaded file at the time of e-declaration and shows message \"([^\"]*)\"$")
	public void user_click_on_e_filing_schedule_when_tax_payer_did_not_uploaded_file_at_the_time_of_e_declaration_and_shows_message(String mess) throws Throwable 
	{
		Thread.sleep(2000);
		clickOn("btn_eFile_Schedule", "");
		Thread.sleep(1000);
		if(wd.findElement(By.xpath("//div[contains(text(),'" + mess + "')]")).isDisplayed() )
		{					
			assertTrue(true);
		}	
		Thread.sleep(5000);

	}

	@And("^User click on Transaction Received button$")
	public void user_click_on_Transaction_Received_button() throws Throwable 
	{
		Thread.sleep(1000);
		clickOn("btn_TransactionReceived", "");
		verifyDownload("TransactionReceived");	   
	}

	@And("^User click on edit button$")
	public void user_click_on_edit_button() throws Throwable 
	{
		clickOn("btn_Edit", "");	   
	}

	@And("^User enter value \"([^\"]*)\" for Operation Performed in Assessment Adjustment$")
	public void user_enter_value_for_Operation_Performed_in_Assessment_Adjustment(String value) throws Throwable 
	{
		Thread.sleep(500);
		type("txt_Delivery_goods", value);
	}

	@And("^User click on Save button and validate save message \"([^\"]*)\"$")
	public void user_click_on_Save_button_and_validate_save_message(String mess) throws Throwable 
	{
		clickOn("btn_Save", "");
		Thread.sleep(2000);
		if(wd.findElement(By.xpath("//div[contains(text(),'" + mess + "')]")).isDisplayed() )
		{					
			assertTrue(true);
		}
		Thread.sleep(7000);	   
	}

	@And("^User entered value \"([^\"]*)\" \"([^\"]*)\" on Tax Deductible in Assessment Adjustment$")
	public void user_entered_value_on_Tax_Deductible_in_Assessment_Adjustment(String AI, String AL) throws Throwable 
	{
		type("txtBox_Assest_import", AI);
		type("txtBox_Assest_export", AL);	   
	}

	@And("^User entered value \"([^\"]*)\" on Adjustment in Assessment Adjustment$")
	public void user_entered_value_on_Adjustment_in_Assessment_Adjustment(String VR) throws Throwable
	{
		type("txtBox_VR",VR);

	}

	@And("^User is on Assessment Summary and see Opeartion performed ,Tax Deductible and Adjustment record list$")
	public void user_is_on_Assessment_Summary_and_see_Opeartion_performed_Tax_Deductible_and_Adjustment_record_list() throws Throwable
	{
		Thread.sleep(1000);
		WebElement we1,we2,we3;
		we1=wd.findElement(By.xpath(obj.getProperty("txt_AS_OP")));
		Thread.sleep(500);
		we2=wd.findElement(By.xpath(obj.getProperty("txt_AS_TD")));
		Thread.sleep(500);
		we3=wd.findElement(By.xpath(obj.getProperty("txt_AS_AD")));
		Thread.sleep(500);
		if(we1.isDisplayed() && we2.isDisplayed()&& we3.isDisplayed())
		{
			assertTrue(true);
		}
	}

	@And("^User select remark for Opeartion performed$")
	public void user_select_remark_for_Opeartion_performed() throws Throwable 
	{
		sleepWait(3000);
		
		clickOn("txtBox_OP_1", "");
		Thread.sleep(1000);
				
		clickOn("txt_Remark_VerifyEFD", "");
		Thread.sleep(1000);
		/*clickOn("txtBox_OP_2", "");
		Thread.sleep(1000);
		clickOn("txt_Remark_VerifyEFD", "");
		Thread.sleep(1000);*/
	}

	@And("^User select remark for Tax Deductible$")
	public void user_select_remark_for_Tax_Deductible() throws Throwable 
	{
		Thread.sleep(1000);
		clickOn("txtBox_TD_1", "");
		Thread.sleep(1000);
		clickOn("txt_Remark_VerifyEFD", "");
		Thread.sleep(1000);
		clickOn("txtBox_TD_2", "");
		Thread.sleep(1000);
		clickOn("txt_Remark_VerifyEFD", "");
		Thread.sleep(1000);
		/*clickOn("txtBox_TD_3", "");
		Thread.sleep(1000);
		clickOn("txt_Remark_VerifyEFD", "");
		Thread.sleep(1000);*/
	}

	@And("^User select remark for Adjustment$")
	public void user_select_remark_for_Adjustment() throws Throwable 
	{
		Thread.sleep(1000);
		clickOn("txtBox_Ad_1", "");
		Thread.sleep(1000);
		clickOn("txt_Remark_VerifyEFD", "");
		Thread.sleep(1000);

	}

	@And("^User navigate to Payment Summary page$")
	public void user_navigate_to_Payment_Summary_page() throws Throwable
	{
		Thread.sleep(1000);
		if(wd.findElement(By.xpath(obj.getProperty("txt_check_PaymentSummary"))).isDisplayed());
		{
			assertTrue(true);
		}		 
	}

	@And("^User click on prev button and navigate to Tax Deductible tab screen$")
	public void user_click_on_prev_button_and_navigate_to_Tax_Deductible_tab_screen() throws Throwable
	{
		Thread.sleep(1000);
		clickOn("btn_Prev", "");
		Thread.sleep(1000);		
		clickOn("btn_Prev", "");
		Thread.sleep(1000);
		//clickOn("btn_Prev", "");
		Thread.sleep(500);
		if(wd.findElement(By.xpath(obj.getProperty("txt_Tax_Deductible_Page"))).isDisplayed())
		{
			assertTrue(true);
		}

	}

	@And("^User click on next button and navigeta to Assessment Summary tab screen$")
	public void user_click_on_next_button_and_navigeta_to_Assessment_Summary_tab_screen() throws Throwable
	{
		Thread.sleep(1000);
		clickOn("btn_NEXT", "");
		Thread.sleep(1000);
		clickOn("btn_NEXT", "");
		Thread.sleep(1000);
		//	clickOn("btn_NEXT", "");
		Thread.sleep(1000);
		if(wd.findElement(By.xpath(obj.getProperty("txt_AS"))).isDisplayed());
		{
			assertTrue(true);
		}		   
	}

	@And("^User select remark and validate \"([^\"]*)\"$")
	public void user_select_remark_and_validate(String mess) throws Throwable
	{
		Thread.sleep(1000);
		clickOn("txtBox_OP_1", "");
		Thread.sleep(1000);
		clickOn("txt_Remark_VerifyEFD", "");
		Thread.sleep(1000);
		if(wd.findElement(By.xpath("//span[contains(text(),'" + mess + "')]")).isDisplayed() )
		{					
			assertTrue(true);
		}	
		/* if(wd.findElement(By.xpath(obj.getProperty("txt_Remark_VerifyEFD"))).isDisplayed());
		  {
				 assertTrue(true);
		  }*/	

	}

	@And("^User click on next button and validate remark is removed \"([^\"]*)\"$")
	public void user_click_on_next_button_and_validate_remark_is_removed(String mess) throws Throwable
	{
		Thread.sleep(1000);
		clickOn("btn_NEXT", "");
		Thread.sleep(1000);
		clickOn("btn_NEXT", "");
		Thread.sleep(1000);
		if(wd.findElement(By.xpath("(//div[contains(text(),'" + mess +"')])[1]")).isDisplayed() )
		{					
			assertTrue(true);
		}	

	}

	@And("^User see remark is selected	\"([^\"]*)\"$")
	public void user_see_remark_is_selected(String mess) throws Throwable 
	{
		Thread.sleep(500);
		if(wd.findElement(By.xpath("//span[contains(text(),'" + mess + "')]")).isDisplayed() )
		{					
			assertTrue(true);
		}	
	}
	/*@And("^User select all remark$")
	public void user_select_all_remark() throws Throwable
	{


	}*/

	@And("^User click on next button and navigate to Assessment Summary tab screen$")
	public void user_click_on_next_button_and_navigate_to_Assessment_Summary_tab_screen() throws Throwable 
	{
		Thread.sleep(1000);
		clickOn("btn_NEXT", "");
		Thread.sleep(1000);
		clickOn("btn_NEXT", "");
		Thread.sleep(1000);
		if(wd.findElement(By.xpath(obj.getProperty("txt_AS"))).isDisplayed());
		{
			assertTrue(true);
		}	
	}

	/*	@And("^User see all remark are selected$")
	public void user_see_all_remark_are_selected() throws Throwable
	{


	}*/

	@And("^User click on previous button and navigate to Manual Assessment landing screen$")
	public void user_click_on_previous_button_and_navigate_to_Manual_Assessment_landing_screen() throws Throwable
	{
		Thread.sleep(1000);
		clickOn("btn_Prev_m", "");
		Thread.sleep(1000);
		if(wd.findElement(By.xpath(obj.getProperty("txt_check_Landing_Man"))).isDisplayed());
		{
			assertTrue(true);
		}		   
	}

	@And("^User navigate to Operations Performed tab$")
	public void user_navigate_to_Operations_Performed_tab() throws Throwable
	{
		if(wd.findElement(By.xpath(obj.getProperty("txt_OP_check"))).isDisplayed());
		{
			assertTrue(true);
		}			   
	}

	@And("^User click on next and navigate to Tax Deductible tab$")
	public void user_click_on_next_and_navigate_to_Tax_Deductible_tab() throws Throwable 
	{
		Thread.sleep(1000);
		clickOn("btn_NEXT", "");
		Thread.sleep(500);		
		if(wd.findElement(By.xpath(obj.getProperty("txt_Tax_Deductible_Page"))).isDisplayed());
		{
			assertTrue(true);
		}		   
	}

	@And("^User click on next and navigate to Adjustment tab$")
	public void user_click_on_next_and_navigate_to_Adjustment_tab() throws Throwable
	{
		Thread.sleep(1000);
		clickOn("btn_NEXT", "");
		Thread.sleep(500);		
		if(wd.findElement(By.xpath(obj.getProperty("txt_Adjustement_check"))).isDisplayed());
		{
			assertTrue(true);
		}			   
	}

	@And("^User click on next and navigate to Assessment Summary tab$")
	public void user_click_on_next_and_navigate_to_Assessment_Summary_tab() throws Throwable 
	{
		Thread.sleep(1000);
		clickOn("btn_NEXT", "");
		Thread.sleep(1000);
		clickOn("btn_NEXT", "");
		Thread.sleep(1000);
		clickOn("btn_NEXT", "");
		Thread.sleep(1000);
		if(wd.findElement(By.xpath(obj.getProperty("txt_AS"))).isDisplayed());
		{
			assertTrue(true);
		}	
	}

	@And("^User see Total e-Declaration amount and Total Assessed amount$")
	public void user_see_Total_e_Declaration_amount_and_Total_Assessed_amount() throws Throwable 
	{
		/* String Total_e_Dec = getValue("txt_Total_Declaration");
		 Float Tol_e_dec= Float.parseFloat(Total_e_Dec);
		 Total_e_dec =Tol_e_dec;	

		 String Total_Assessed = getValue("txt_TotalAssessed");
		 Float T_A= Float.parseFloat(Total_Assessed);		 
		 Total_Ass=T_A; 		*/ 		 		

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

	}

	@And("^User see Total e-Declaration amount and Total Assessed amount is same on previous screen$")
	public void user_see_Total_e_Declaration_amount_and_Total_Assessed_amount_is_same_on_previous_screen() throws Throwable
	{
		/*String Total_e_Dec = getValue("txt_Total_Declaration");
		Float Tol_e_dec= Float.parseFloat(Total_e_Dec);

		String Total_Assessed = getValue("txt_TotalAssessed");
		Float T_A= Float.parseFloat(Total_Assessed);*/
		String Total_Assessed = elementText("txt_TotalAssessed");		 
		String Remov_FC = Total_Assessed.replaceAll("[A-Z]", "");	
		String Remove_FC = Remov_FC.replace("." ,"");	
		Remove_FC = Remove_FC.replace("," ,".");		    
		Float chAss = Float.parseFloat(Remove_FC);

		String Total_e_Dec =elementText("txt_Total_Declaration");		 
		String Remov_FC1 = Total_e_Dec.replaceAll("[A-Z]", "");	
		String	Remove_FC2 = Remov_FC1.replace("." ,"");		
		Remove_FC2 = Remove_FC2.replace("," ,".");
		Float chDec = Float.parseFloat(Remove_FC);

		if(chDec==Total_e_dec && chAss==Total_Ass)
		{
			assertTrue(true);
		}

	}

	@And("^User validate total additionality liability$")
	public void user_validate_total_additionality_liability() throws Throwable 
	{

		Float Validate =  Total_Ass - Total_e_dec;

		String Total_Add_Lib =elementText("txt_Total_Additionality_Liability_MA");
		String FC1 = Total_Add_Lib.replaceAll("[A-Z]", "");	
		String	FC2 = FC1.replace("." ,"");		
		String FC3 = FC2.replace("," ,".");
		System.out.println(FC3);		 
		Float Check_Add_Lib_1 =Float.parseFloat(FC3);	

		if(Validate==Check_Add_Lib_1)
		{
			System.out.println("pass");
		}
		/*String Total_Add_Lib = getValue("txt_Total_Additionality_Liability");
		//String Total_Add_Lib = wd.findElement(By.xpath(obj.getProperty("txt_Total_Additionality_Liability"))).getText();
		if(Validate==Float.parseFloat(Total_Add_Lib))
		 {
			 System.out.println("pass");
		 }*/

	}

	@And("^User see Total Additional Liability value is greater than zero$")
	public void user_see_Total_Additional_Liability_value_is_greater_than_zero() throws Throwable 
	{
		Thread.sleep(2000);
		String Total_Add_Lib =elementText("txt_Total_Additionality_Liability_MA");
		String FC1 = Total_Add_Lib.replaceAll("[A-Z]", "");	
		String	FC2 = FC1.replace("." ,"");		
		String FC3 = FC2.replace("," ,".");
		System.out.println(FC3);		 
		Float Check_Add_Lib_1 =Float.parseFloat(FC3);	

		if(Check_Add_Lib_1 > 0 )
		{
			assertTrue(true);
		}

		/*String Total_Add_Lib = getValue("txt_Total_Additionality_Liability");
		Float T_A_L= Float.parseFloat(Total_Add_Lib);
		if(T_A_L > 0 )
		{
			assertTrue(true);
		}*/	   
	}

	@And("^User see Total Additional Liability value is less than zero$")
	public void user_see_Total_Additional_Liability_value_is_less_than_zero() throws Throwable 
	{

		String Total_Add_Lib =elementText("txt_Total_Additionality_Liability_MA");
		String FC1 = Total_Add_Lib.replaceAll("[A-Z]", "");	
		String	FC2 = FC1.replace("." ,"");		
		String FC3 = FC2.replace("," ,".");
		System.out.println(FC3);		 
		Float Check_Add_Lib_1 =Float.parseFloat(FC3);	

		if(Check_Add_Lib_1 < 0 )
		{
			assertTrue(true);
		}
		/*String Total_Add_Lib = getValue("txt_Total_Additionality_Liability");
		Float T_A_L= Float.parseFloat(Total_Add_Lib);
		if(T_A_L < 0 )
		{
			assertTrue(true);
		}*/

	}

	@And("^User clicik on previous button on Assessment Summary$")
	public void user_clicik_on_previous_button_on_Assessment_Summary() throws Throwable 
	{
		Thread.sleep(1000);
		clickOn("btn_Prev_m", "");
	}

	@And("^User again enter value less amount \"([^\"]*)\" for Operation Performed in Assessment Adjustment$")
	public void user_again_enter_value_less_amount_for_Operation_Performed_in_Assessment_Adjustment(String value) throws Throwable 
	{
		type("txt_Delivery_goods", value);

	}

	@And("^User again enter value less amount \"([^\"]*)\" \"([^\"]*)\" on Tax Deductible in Assessment Adjustment$")
	public void user_again_enter_value_less_amount_on_Tax_Deductible_in_Assessment_Adjustment(String AI, String AL) throws Throwable 
	{
		type("txtBox_Assest_import", AI);
		type("txtBox_Assest_export", AL);

	}

	@And("^User again enter value less amount \"([^\"]*)\" on Adjustment in Assessment Adjustment$")
	public void user_again_enter_value_less_amount_on_Adjustment_in_Assessment_Adjustment(String VR) throws Throwable 
	{
		type("txtBox_VR",VR);

	}

	@And("^User enter value in Delivery of goods \"([^\"]*)\" for Operation Performed in Assessment Adjustment$")
	public void user_enter_value_in_Delivery_of_goods_for_Operation_Performed_in_Assessment_Adjustment(String value) throws Throwable 
	{
		Thread.sleep(1000);
		type("txt_Delivery_goods", value);
		String Delivery_goods = getValue("txt_Delivery_goods");
		Store_Delivery_goods = Float.parseFloat(Delivery_goods);

	}

	@And("^User entered value in Assets \"([^\"]*)\" \"([^\"]*)\" on Tax Deductible in Assessment Adjustment$")
	public void user_entered_value_in_Assets_on_Tax_Deductible_in_Assessment_Adjustment(String AI, String AL) throws Throwable 
	{
		type("txtBox_Assest_import", AI);
		type("txtBox_Assest_export", AL);
		Float TotalA= Float.parseFloat(AI)+Float.parseFloat(AL);
		Store_Toatal_AI_AL= TotalA;
		//String TotalAS = getValue("txtBox_disable_Assest");
		/*if(TotalA==Float.parseFloat(TotalAS))
		 {
			   System.out.println("pass");	
		 }*/

	}

	@And("^User entered value in VAT Reversal \"([^\"]*)\" on Adjustment in Assessment Adjustment$")
	public void user_entered_value_in_VAT_Reversal_on_Adjustment_in_Assessment_Adjustment(String VR) throws Throwable
	{
		type("txtBox_VR",VR);	   
		String Vat_rev = getValue("txtBox_VR");
		Store_Vat_rev = Float.parseFloat(Vat_rev);
	}
	/*
	@And("^User see Opeartion performed tab and validate entered value \"([^\"]*)\"$")
	public void user_see_Opeartion_performed_tab_and_validate_entered_value(String arg1) throws Throwable 
	{
		String check_DOG = getValue("txt_check_DOG");
		Store_DOG = Float.parseFloat(check_DOG);

		if(Store_Delivery_goods==Store_DOG)
		{
			assertTrue(true);
		}
		WebElement we1;
		we1=wd.findElement(By.xpath(obj.getProperty("txt_Adjustement_check")));
		Float.parseFloat(we1);
		if(Store_Delivery_goods==we1);
		 {
			 assertTrue(true);
		 }

	}

	@And("^User see Tax Deductible tab and validate entered value \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_see_Tax_Deductible_tab_and_validate_entered_value(String arg1, String arg2) throws Throwable 
	{
		String check_Assert = getValue("txt_check_Assert");
		Store_Assert = Float.parseFloat(check_Assert);
		if(Store_Toatal_AI_AL==Store_Assert)
		{
			assertTrue(true);
		}				
	}

	@And("^User see Adjustment tab and validate entered value \"([^\"]*)\"$")
	public void user_see_Adjustment_tab_and_validate_entered_value(String arg1) throws Throwable 
	{
		String check_Assert = getValue("txt_Vat_rev");
		Float check_Vat_rev=Float.parseFloat(check_Assert);
	   if(Store_Vat_rev==check_Vat_rev)
	   {
		   assertTrue(true);
	   }
	}
	 */


	@And("^User see remark is selected in Opeartion performed$")
	public void user_see_remark_is_selected_in_Opeartion_performed() throws Throwable 
	{
		Thread.sleep(1000);
		WebElement we1,we2;
		we1=wd.findElement(By.xpath(obj.getProperty("txt_Remark_VerifyEFD_check_OP_1")));
		Thread.sleep(500);
		we2=wd.findElement(By.xpath(obj.getProperty("txt_Remark_VerifyEFD_check_OP_2")));
		Thread.sleep(500);				
		if(we1.isDisplayed() && we2.isDisplayed());
		{
			assertTrue(true);
		}	
	}

	@And("^User see remark is selected in Tax Deductible$")
	public void user_see_remark_is_selected_in_Tax_Deductible() throws Throwable 
	{
		sleepWait(3000);
		WebElement we1,we2,we3;
		we1=wd.findElement(By.xpath(obj.getProperty("txt_Remark_VerifyEFD_check_TD_1")));
		Thread.sleep(500);	
		we2=wd.findElement(By.xpath(obj.getProperty("txt_Remark_VerifyEFD_check_TD_2")));
		Thread.sleep(500);	
		we3=wd.findElement(By.xpath(obj.getProperty("txt_Remark_VerifyEFD_check_TD_3")));
		Thread.sleep(500);					
		if(we1.isDisplayed() && we2.isDisplayed() && we3.isDisplayed());
		{
			assertTrue(true);
		}	
	}

	@And("^User see remark is selected in Adjustment$")
	public void user_see_remark_is_selected_in_Adjustment() throws Throwable 
	{
		Thread.sleep(1000);
		if(wd.findElement(By.xpath(obj.getProperty("txt_Remark_VerifyEFD_check_AD_1"))).isDisplayed());
		{
			assertTrue(true);
		}
	}


	//---------------Assessed List ---------//




	@And("^User see Total Reassessed amount$")
	public void user_see_Total_Reassessed_amount() throws Throwable 
	{
		/*String Total_Re_Assessed = wd.findElement(By.xpath(obj.getProperty("txt_Total_Reassessed"))).getText();
	    Float Store_TA = Float.parseFloat(Total_Re_Assessed);
	    Check_Store_Re_TA =Store_TA;*/

		Thread.sleep(1000);
		String Total_Assessed = elementText("txt_Total_Reassessed");		 
		String Remov_FC = Total_Assessed.replaceAll("[A-Z]", "");	
		String Remove_FC = Remov_FC.replace("." ,"");	
		Remove_FC = Remove_FC.replace("," ,".");		    		    	 
		Total_ReAss = Float.parseFloat(Remove_FC);

	}

	@And("^User check Total Reassessed amount is not changed$")
	public void user_check_Total_Reassessed_amount_is_not_changed() throws Throwable
	{
		//String Total_Re_Assessed = wd.findElement(By.xpath(obj.getProperty("txt_Total_Reassessed"))).getText();
		//Float Store_Re_TA = Float.parseFloat(Total_Re_Assessed);
		Thread.sleep(1000);
		String Total_Assessed = elementText("txt_Total_Reassessed");		 
		String Remov_FC = Total_Assessed.replaceAll("[A-Z]", "");	
		String Remove_FC = Remov_FC.replace("." ,"");	
		Remove_FC = Remove_FC.replace("," ,".");		    		    	 
		Float Check_ReAss = Float.parseFloat(Remove_FC);

		if(Check_ReAss==Check_Store_Re_TA)
		{
			assertTrue(true);
		}
	}

	@And("^User see Total Assessed amount amount and Total Reassessed$")
	public void user_see_Total_Assessed_amount_amount_and_Total_Reassessed() throws Throwable 
	{

		// String Total_ASS_TA = getValue("txt_TotalAssessed");
		String Total_Assessed = elementText("txt_TotalAssessed");		 
		String Remov_FC = Total_Assessed.replaceAll("[A-Z]", "");	
		String Remove_FC = Remov_FC.replace("." ,"");	
		Remove_FC = Remove_FC.replace("," ,".");		    		    	 
		Total_Ass = Float.parseFloat(Remove_FC);	

		String Total_ReAssessed = elementText("txt_Total_Reassessed");		 
		String Remov_FC1 = Total_ReAssessed.replaceAll("[A-Z]", "");	
		String Remove_FC1 = Remov_FC1.replace("." ,"");	
		Remove_FC1 = Remove_FC1.replace("," ,".");		    		    	 
		Total_ReAss = Float.parseFloat(Remove_FC1);

		//String Total_Re_Assessed = getValue("txt_Total_Reassessed");

		/*if(Total_AL_TA_==Total_TR_Ass)
		 {
			 assertTrue(true);
		 }*/
	}

	@And("^User see Total Total Assessed amount and Total Reassessed amount is same on previous screen$")
	public void user_see_Total_Total_Assessed_amount_and_Total_Reassessed_amount_is_same_on_previous_screen() throws Throwable 
	{
		String Total_Assessed = elementText("txt_TotalAssessed");		 
		String Remov_FC = Total_Assessed.replaceAll("[A-Z]", "");	
		String Remove_FC = Remov_FC.replace("." ,"");	
		Remove_FC = Remove_FC.replace("," ,".");		    		    	 
		Float Ass = Float.parseFloat(Remove_FC);	

		String Total_ReAssessed = elementText("txt_Total_Reassessed");		 
		String Remov_FC1 = Total_ReAssessed.replaceAll("[A-Z]", "");	
		String Remove_FC1 = Remov_FC1.replace("." ,"");	
		Remove_FC1 = Remove_FC1.replace("," ,".");		    		    	 
		Float ReAss = Float.parseFloat(Remove_FC1);	

		if(Ass==Total_Ass && ReAss==Total_ReAss)
		{
			assertTrue(true);
		}
	}

	@And("^User validate total additionality liability for Assessed List$")
	public void user_validate_total_additionality_liability_for_Assessed_List() throws Throwable
	{

		Float Validate =  Total_ReAss - Total_Ass;

		String Total_Add_Lib =elementText("txt_Total_Additionality_Liability");
		String FC1 = Total_Add_Lib.replaceAll("[A-Z]", "");	
		String	FC2 = FC1.replace("." ,"");		
		String FC3 = FC2.replace("," ,".");		 		 
		Float Check_Add_Lib_1 =Float.parseFloat(FC3);	

		if(Validate==Check_Add_Lib_1)
		{
			assertTrue(true);
		}
	}	

	@And("^User see Opeartion performed tab and validate entered value$")
	public void user_see_Opeartion_performed_tab_and_validate_entered_value() throws Throwable 
	{
		Thread.sleep(1000);

		String check_DOG =elementText("txt_check_DOG");
		// String FC1 = check_DOG.replaceAll("[A-Z]", "");	
		String	FC2 = check_DOG.replace("." ,"");		
		String FC3 = FC2.replace("," ,".");
		System.out.println(FC3);		 
		Float Check_DOG =Float.parseFloat(FC3);	
		//Store_DOG = Float.parseFloat(check_DOG);

		if(Store_Delivery_goods==Check_DOG)
		{
			assertTrue(true);
		}
	}

	@And("^User see Tax Deductible tab and validate entered value$")
	public void user_see_Tax_Deductible_tab_and_validate_entered_value() throws Throwable 
	{
		String check_Assert =elementText("txt_check_Assert");
		//String FC1 = check_Assert.replaceAll("[A-Z]", "");	
		String	FC2 = check_Assert.replace("." ,"");		
		String FC3 = FC2.replace("," ,".");
		System.out.println(FC3);		 
		Float Check_TD =Float.parseFloat(FC3);	

		if(Store_Toatal_AI_AL==Check_TD)
		{
			assertTrue(true);
		}		
	}

	@And("^User see Adjustment tab and validate entered value$")
	public void user_see_Adjustment_tab_and_validate_entered_value() throws Throwable 
	{


		String check_Reversal =elementText("txt_check_Assert");
		//String FC1 = check_Assert.replaceAll("[A-Z]", "");	
		String	FC2 = check_Reversal.replace("." ,"");		
		String FC3 = FC2.replace("," ,".");
		System.out.println(FC3);		 
		Float Check_Rev =Float.parseFloat(FC3);			

		if(Store_Vat_rev==Check_Rev)
		{
			assertTrue(true);
		}
	}


	@And("^User validate Total Additional Liability on Assessment Summary page on Assessed List$")
	public void user_validate_Total_Additional_Liability_on_Assessment_Summary_page_on_Assessed_List() throws Throwable 
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

	@And("^User click on previous button and navigate to Assessed List page$")
	public void user_click_on_previous_button_and_navigate_to_Assessed_List_page() throws Throwable 
	{
		clickOn("btn_Prev_m", "");
		Thread.sleep(1000);
		if(wd.findElement(By.xpath(obj.getProperty("txt_check_Landing_Man"))).isDisplayed());
		{
			assertTrue(true);
		}	
	}

}
