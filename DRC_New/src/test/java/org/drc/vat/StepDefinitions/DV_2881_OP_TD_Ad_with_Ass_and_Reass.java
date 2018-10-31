package org.drc.vat.StepDefinitions;
import static org.drc.vat.appmanager.HelperBase.*;
import static org.testng.Assert.assertTrue;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;

import cucumber.api.java.en.And;

public class DV_2881_OP_TD_Ad_with_Ass_and_Reass 
{
	
	public static Float Store_TaxTurnOver;
	public static Float Store_VATCollected;
	public static Float Total_Assed;
	public static Float Total_Reassed;
	//public static Float Store_e_Declaration;
	
	
	@And("^User entered value \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" for Operation Performed and calculate$")
	public void user_entered_value_for_Operation_Performed_and_calculate(String DG, String DS1, String DS2, String DGI, String DSI, String FPP, String Export, String Exempt, String Nontaxable) throws Throwable 
	{
		  type("txt_Delivery_goods",DG);		 		    
		  String VAT_Collected_DG= getValue("txt_Delivery_goods_disable1");
		  if(Float.parseFloat(VAT_Collected_DG)==((Float.parseFloat(DG))*16/100))
		  {
			  assertTrue(true);
		  }
		    
		    type("txt_Delivercy11",DS1);
		    type("txt_Delivercy22",DS2);
		    String VAT_Collected_DS = getValue("txt_Delivercy_disable1");
		    if(Float.parseFloat(VAT_Collected_DS)==((Float.parseFloat(DS2))*16/100))
		    {
		    	assertTrue(true);
		    }   
		    type("txt_Delivery_goods_Itself1",DGI);
		    String VAT_Collected_DGI=getValue("txt_Delivery_goods_Itself_disable1");
		    if(Float.parseFloat(VAT_Collected_DGI)==((Float.parseFloat(DGI))*16/100))
		    {
		    	assertTrue(true);
		    }
		    type("txt_Delivery_Services_itself1",DSI);
		    String VAT_Collected_DSI=getValue("txt_Delivery_Services_itself_disable1");
		    if(Float.parseFloat(VAT_Collected_DSI)==((Float.parseFloat(DSI))*16/100))
		    {
		    	assertTrue(true);
		    }
		    type("txt_Operational1",FPP);
		    String VAT_Collected_FPP=getValue("txt_Operational_disable1");
		    if(Float.parseFloat(VAT_Collected_FPP)==((Float.parseFloat(FPP))*16/100))
		    {
		    	assertTrue(true);
		    }
		    type("txt_Export1",Export);
		    type("txt_Exempt1",Exempt);
		    type("txt_Non_taaxable1",Nontaxable);
		    
		    /*
		     * global test FPP
		     
		    String VAT_Float_FPP = getValue("txt_Operational_disable");
		    Float VAT_CheckFloat_FPP= Float.parseFloat(VAT_Float_FPP);
		    VAT_Store_FPP_Check = VAT_CheckFloat_FPP;*/
		    
		    /*
		     *  Total for 16 % no 1+2+3+4+5 =9 
		     */
		    Float Total_VC = ((Float.parseFloat(DG))*16/100) + ((Float.parseFloat(DS2))*16/100) + ((Float.parseFloat(DGI))*16/100)+ ((Float.parseFloat(DSI))*16/100)+((Float.parseFloat(FPP))*16/100);		    
		    String Total_VCT = getValue("txt_Total2_disable1");
		    if(Total_VC==Float.parseFloat(Total_VCT))
		    {
		    	assertTrue(true);	
		    }
		    
		    /*
		     * Declaring global test 
		     */
		    
		   // VAT_Store_Total_VC=Total_VC;
		    
		    
		    /*
		     * Total Taxable Turnover(FC)
		     */
		    Float Total_VC_FC = (Float.parseFloat(DG)) + (Float.parseFloat(DS2)) + (Float.parseFloat(DGI))+ (Float.parseFloat(DSI))+(Float.parseFloat(FPP))+(Float.parseFloat(Export))+(Float.parseFloat(Exempt))+(Float.parseFloat(Nontaxable));
		    String Total_TT=getValue("txt_Total1_disable1");
		     if(Total_VC_FC==Float.parseFloat(Total_TT))
		    {
		    	assertTrue(true);
		    }
	   
	}

	@And("^User again make changes \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" for Operation Performed$")
	public void user_again_make_changes_for_Operation_Performed(String DG, String DS1, String DS2, String DGI, String DSI, String FPP, String Export, String Exempt, String Nontaxable) throws Throwable 
	{
		type("txt_Delivery_goods", DG);
		type("txt_Delivercy11", DS1);
		type("txt_Delivercy22", DS2);
		type("txt_Delivery_goods_Itself1", DGI);
		type("txt_Delivery_Services_itself1", DSI);
		type("txt_Operational1", FPP);
		type("txt_Export1", Export);
		type("txt_Exempt1", Exempt);
		type("txt_Non_taaxable1", Nontaxable);
		
		
		 String TaxTurnOver = getValue("txtBox_TaxableTurnover_dis");
		 Float Check_TaxTurnOver= Float.parseFloat(TaxTurnOver);
		 Store_TaxTurnOver =Check_TaxTurnOver;	
		 
		 String VATCollected = getValue("txtBox_VATCollected_dis");
		 Float Check_VATCollected= Float.parseFloat(VATCollected);
		 Store_VATCollected =Check_VATCollected;	
		 
		
	}

	@And("^User click on next button and navigate to Tax deductible tab$")
	public void user_click_on_next_button_and_navigate_to_Tax_deductible_tab() throws Throwable 
	{
		Thread.sleep(500);
		clickOn("btn_NEXT", "");
		Thread.sleep(1000);		
		if(wd.findElement(By.xpath(obj.getProperty("txt_Tax_Deductible_Page"))).isDisplayed())
		{
			assertTrue(true);
		}	   
	}

	@And("^User see previously entered value$")
	public void user_see_previously_entered_value() throws Throwable
	{
		 String ch_TaxTurnOver = getValue("txtBox_TaxableTurnover_dis");
		 Float Check_TaxTurnOver= Float.parseFloat(ch_TaxTurnOver);
		 
		 
		 String ch_VATCollected = getValue("txtBox_VATCollected_dis");
		 Float Check_VATCollected= Float.parseFloat(ch_VATCollected);
		 
		 
		 if(Store_TaxTurnOver==Check_TaxTurnOver && Store_VATCollected==Check_VATCollected)
		 {
			 assertTrue(true);
		 }
	   
	}

	@And("^User clear all fields$")
	public void user_clear_all_fields() throws Throwable
	{
	 
		
		//wd.findElement(By.xpath(obj.getProperty("txt_Delivery_goods"))).clear();
		Thread.sleep(1000);		
		wd.findElement(By.xpath(obj.getProperty("txt_Delivery_goods"))).sendKeys(Keys.chord(Keys.CONTROL,"a",Keys.DELETE));
		Thread.sleep(2000);
		wd.findElement(By.xpath(obj.getProperty("txt_Delivercy11"))).sendKeys(Keys.chord(Keys.CONTROL,"a",Keys.DELETE));
		Thread.sleep(2000);
		wd.findElement(By.xpath(obj.getProperty("txt_Delivercy22"))).sendKeys(Keys.chord(Keys.CONTROL,"a",Keys.DELETE));
		Thread.sleep(2000);
		wd.findElement(By.xpath(obj.getProperty("txt_Delivery_goods_Itself1"))).sendKeys(Keys.chord(Keys.CONTROL,"a",Keys.DELETE));
		Thread.sleep(2000);
		wd.findElement(By.xpath(obj.getProperty("txt_Delivery_Services_itself1"))).sendKeys(Keys.chord(Keys.CONTROL,"a",Keys.DELETE));
		Thread.sleep(2000);
		wd.findElement(By.xpath(obj.getProperty("txt_Operational1"))).sendKeys(Keys.chord(Keys.CONTROL,"a",Keys.DELETE));
		Thread.sleep(2000);
		wd.findElement(By.xpath(obj.getProperty("txt_Export1"))).sendKeys(Keys.chord(Keys.CONTROL,"a",Keys.DELETE));
		Thread.sleep(2000);
		wd.findElement(By.xpath(obj.getProperty("txt_Exempt1"))).sendKeys(Keys.chord(Keys.CONTROL,"a",Keys.DELETE));
		Thread.sleep(2000);
		wd.findElement(By.xpath(obj.getProperty("txt_Non_taaxable1"))).sendKeys(Keys.chord(Keys.CONTROL,"a",Keys.DELETE));
		Thread.sleep(2000);
		
	}

	@And("^User see save button is disable$")
	public void user_see_submit_button_is_disable() throws Throwable 
	{
		
		Thread.sleep(1000);
		if(!wd.findElement(By.xpath(obj.getProperty("btn_Save"))).isEnabled())
		{
			assertTrue(true);
		}	   	   
	}

	@And("^User click on Delivery of goods and validate navigation$")
	public void user_click_on_Delivery_of_goods_and_validate_navigation() throws Throwable
	{
		Thread.sleep(1000);
		clickOn("btn_eye_DOG", "");
		Thread.sleep(500);
		if(wd.findElement(By.xpath(obj.getProperty("txt_check_del_of_goods"))).isDisplayed())
		{
			assertTrue(true);
		}	   
	   
	}

	@And("^User click on Delivery of Services and validate navigation$")
	public void user_click_on_Delivery_of_Services_and_validate_navigation() throws Throwable 
	{
		clickOn("btn_eye_DOS", "");
		Thread.sleep(500);
		if(wd.findElement(By.xpath(obj.getProperty("txt_check_del_of_service"))).isDisplayed())
		{
			assertTrue(true);
		}
	   
	}

	@And("^User click on Exports and related transactions and validate navigation$")
	public void user_click_on_Exports_and_related_transactions_and_validate_navigation() throws Throwable 
	{
		clickOn("btn_eye_Export", "");
		Thread.sleep(500);
		if(wd.findElement(By.xpath(obj.getProperty("txt_check_export"))).isDisplayed())
		{
			assertTrue(true);
		}
	   
	}

	@And("^User click on Exempt transactions and validate navigation$")
	public void user_click_on_Exempt_transactions_and_validate_navigation() throws Throwable 
	{
		clickOn("btn_eye_Exempt", "");
		Thread.sleep(500);
		if(wd.findElement(By.xpath(obj.getProperty("txt_check_exempt"))).isDisplayed())
		{
			assertTrue(true);
		}
	   
	}

	@And("^User click on Non-taxable transactions and validate navigation$")
	public void user_click_on_Non_taxable_transactions_and_validate_navigation() throws Throwable
	{
		clickOn("btn_eye_NT", "");
		Thread.sleep(500);
		if(wd.findElement(By.xpath(obj.getProperty("txt_check_Non_Taxable"))).isDisplayed())
		{
			assertTrue(true);
		}	  
	}

	@And("^User validate difference amount on operation performed$")
	public void user_validate_difference_amount_on_operation_performed() throws Throwable 
	{
		Thread.sleep(1000);
		double sum = 0.0f;		
		List<WebElement> elementName =  wd.findElements(By.xpath("//section/div[2]/table/tbody/tr[1]/td[3]/div"));
		for(int i = 1; i<=5;i++)
		{
			WebElement element1 = wd.findElement(By.xpath("//section/div[2]/table/tbody/tr["+i+"]/td[3]/div"));
			String number1 = element1.getText();	
			String num = number1;		
						
		   String Remove_FC = num.replace("." ,"");	
		   Remove_FC = Remove_FC.replace("," ,".");		    		    	 
		   Float  result1 = Float.parseFloat(Remove_FC);
		   sum = sum + result1;
		}		
		double Total_TaxableTurnover = sum;
		
		
		
		Thread.sleep(500);
		double sum2 = 0.0f;
		List<WebElement> elementName2 =  wd.findElements(By.xpath("//table/tbody/tr[6]/td[3]/div"));
		for(int i = 6; i<=10;i++)
		{
			WebElement element22 = wd.findElement(By.xpath("//table/tbody/tr["+i+"]/td[3]/div"));
			String number2 = element22.getText();	
			String num1 = number2;		
						
		   String Remove_FC1 = num1.replace("." ,"");	
		   Remove_FC1 = Remove_FC1.replace("," ,".");		    		    	 
		   Float  result2 = Float.parseFloat(Remove_FC1);
		   sum2 = sum2 + result2;
		}		
		double Total_VATCollected =sum2;
	
		double calulation = Total_TaxableTurnover - Total_VATCollected;
		
		String Difference_TT = elementText("txt_D_TT");	 
	    String Remove_FC = Difference_TT.replace("." ,"");	
	    Remove_FC = Remove_FC.replace("," ,".");		    		    	 
	    Float ch_result = Float.parseFloat(Remove_FC);
		
	    if(calulation==ch_result)
	    {
	    	assertTrue(true);
	    }
		
	    String VAT_Collected = elementText("txt_VATCollected");
	    String Remove_FC1 = VAT_Collected.replace("." ,"");	
	    Remove_FC1 = Remove_FC1.replace("," ,".");		    		    	 
	    Float ch_result1 = Float.parseFloat(Remove_FC1);
	    
	    double cal = calulation*0.16;
	    
	    if(cal==ch_result1)
	    {
	    	assertTrue(true);
	    }
	    
	}

	@And("^User verify total amount for taxable turnover$")
	public void user_verify_total_amount_for_taxable_turnover() throws Throwable 
	{
	   
		Thread.sleep(1000);
		double sum = 0.0f;		
		List<WebElement> elementName =  wd.findElements(By.xpath("//section/div[2]/table/tbody/tr[1]/td[3]/div"));
		for(int i = 1; i<=5;i++)
		{
			WebElement element1 = wd.findElement(By.xpath("//section/div[2]/table/tbody/tr["+i+"]/td[3]/div"));
			String number1 = element1.getText();	
			String num = number1;		
						
		   String Remove_FC = num.replace("." ,"");	
		   Remove_FC = Remove_FC.replace("," ,".");		    		    	 
		   Float  result1 = Float.parseFloat(Remove_FC);
		   sum = sum + result1;
		}		
		double Total_TaxableTurnover = sum;
		
		double sum1 = 0.0f;		
		List<WebElement> elementName1 =  wd.findElements(By.xpath("//section/section/div/table/tbody/tr[1]/td[3]/div"));
		for(int i = 1; i<=3;i++)
		{
			WebElement element2 = wd.findElement(By.xpath("//section/section/div/table/tbody/tr["+i+"]/td[3]/div"));
			String number2 = element2.getText();	
			String num1 = number2;		
						
		   String Remove_FC1 = num1.replace("." ,"");	
		   Remove_FC1 = Remove_FC1.replace("," ,".");		    		    	 
		   Float  result2 = Float.parseFloat(Remove_FC1);
		   sum1 = sum + result2;
		}		
		double Total_Others_TaxableTurnover = sum1;
		
		double Sum = Total_TaxableTurnover + Total_Others_TaxableTurnover;
		
	    String Other_TT = elementText("txt_total_TT1");
	    String Remove_FC1 = Other_TT.replace("." ,"");	
	    Remove_FC1 = Remove_FC1.replace("," ,".");		    		    	 
	    Float ch_result1 = Float.parseFloat(Remove_FC1);		
		
		if(Sum==ch_result1)
		{
			assertTrue(true);
		}		
		
	}

	@And("^User verify the total amount for VAT collected$")
	public void user_verify_the_total_amount_for_VAT_collected() throws Throwable 
	{
		String DOG = elementText("txt_dog_vat1");
	    String Remove_FC1 = DOG.replace("." ,"");	
	    Remove_FC1 = Remove_FC1.replace("," ,".");		    		    	 
	    Float ch_dog = Float.parseFloat(Remove_FC1);
	    
	    String DOS = elementText("txt_dos_vat1");
	    String Remove_FC2 = DOS.replace("." ,"");	
	    Remove_FC2 = Remove_FC2.replace("," ,".");		    		    	 
	    Float ch_dos = Float.parseFloat(Remove_FC2);
		
		Float tot = ch_dog + ch_dos;
		
		double sum1 = 0.0f;		
		List<WebElement> elementName1 =  wd.findElements(By.xpath("//section/section/div/table/tbody/tr[1]/td[4]/div"));
		for(int i = 1; i<=3;i++)
		{
			WebElement element2 = wd.findElement(By.xpath("//section/section/div/table/tbody/tr["+i+"]/td[4]/div"));
			String number2 = element2.getText();	
			String num1 = number2;		
						
		   String Remove_FC = num1.replace("." ,"");	
		   Remove_FC = Remove_FC.replace("," ,".");		    		    	 
		   Float  result2 = Float.parseFloat(Remove_FC);
		   sum1 = sum1 + result2;
		}		
		double Total_Others_TaxableTurnover = sum1;
		
		double add = tot + Total_Others_TaxableTurnover;
		
		String Other_VC = elementText("txt_totalTT2");
	    String Remove_FC11 = Other_VC.replace("." ,"");	
	    Remove_FC11 = Remove_FC11.replace("," ,".");		    		    	 
	    Float ch_tot_VC = Float.parseFloat(Remove_FC11);
	    
	    if(add==ch_tot_VC )
	    {
	    	assertTrue(true);
	   }
	   
	}

	@And("^User click on next button and navigate to Tax deductible page$")
	public void user_click_on_next_button_and_navigate_to_Tax_deductible_page() throws Throwable
	{
		Thread.sleep(1000);
		clickOn("btn_NEXT", "");
		Thread.sleep(1000);
		if(wd.findElement(By.xpath(obj.getProperty("txt_Tax_Deductible_Page"))).isDisplayed())
		{
			assertTrue(true);
		}	   
	}

	@And("^User click on prev and navigate to operation tap and prev button is disable$")
	public void user_click_on_prev_and_navigate_to_operation_tap_and_prev_button_is_disable() throws Throwable
	{
		Thread.sleep(1000);
		clickOn("btn_Prev", "");
		Thread.sleep(1000);
		if(wd.findElement(By.xpath(obj.getProperty("txt_AS_OP"))).isDisplayed())
		{
			assertTrue(true);
		}	   
	}

	@And("^User click on previous button and navigate to manual assessement landing screen$")
	public void user_click_on_previous_button_and_navigate_to_manual_assessement_landing_screen() throws Throwable 
	{
		Thread.sleep(1000);
		clickOn("btn_Prev_m", "");
		Thread.sleep(1000);
		if(wd.findElement(By.xpath(obj.getProperty("txt_check_Landing_Man"))).isDisplayed())
		{
			assertTrue(true);
		}
	   
	}

	@And("^User click on Transaction received button and verify$")
	public void user_click_on_Transaction_received_button_and_verify() throws Throwable 
	{
		Thread.sleep(1000);
	   clickOn("btn_TransactionReceived", "");
	   Thread.sleep(1000);
	   verifyDownload("TransactionReceived.xslx");	   
	}

	@And("^User click on e-filing schedule button and validate$")
	public void user_click_on_e_filing_schedule_button_and_validate() throws Throwable 
	{
		Thread.sleep(1000);
		clickOn("btn_eFile_Schedule", "");
		 Thread.sleep(1000);
		 verifyDownload("e-Filing Schedule.xslx");
		 Thread.sleep(3000);
	   
	}

	@And("^User calculate Total Additional liability for assessed list$")
	public void user_calculate_Total_Additional_liability_for_assessed_list() throws Throwable 
	{
		Thread.sleep(1000);	
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
		 
		 String Total_Add_Lib =elementText("txt_Total_Additionality_Liability");
		 String FC1 = Total_Add_Lib.replaceAll("[A-Z]", "");	
		 String	FC2 = FC1.replace("." ,"");		
		 String FC3 = FC2.replace("," ,".");
		 Float 	Check_Add_Lib = Float.parseFloat(FC3);	 
		 
		 if(Validate==Check_Add_Lib)
		 {
			 assertTrue(true);
		 }
		 
	}
	
	
}
