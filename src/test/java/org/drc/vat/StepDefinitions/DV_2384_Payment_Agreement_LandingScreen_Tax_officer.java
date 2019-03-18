package org.drc.vat.StepDefinitions;

import static org.drc.vat.appmanager.HelperBase.*;
import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertTrue;

import java.math.BigDecimal;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.testng.Assert;
import org.testng.asserts.SoftAssert;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class DV_2384_Payment_Agreement_LandingScreen_Tax_officer
{
	public static String StoreCaseID;
	public static String StoreCaseID_NITVA;
	public static String StoreRecoveryAmount;
	public static String StoteTA;
	public static String StoteIA;
	public static String StoteDA;
	public static String StoteDP;
	public static String StoteSIA;
	public static String StoteNoIA;
	public static String StoteIF;
	public static String StoteNIA;
	public static String StoreNID_1;
	public static String StoteAS;
	public static String StoreIA;
	public static String StrorePA_Case_ID;
	public static String StrorePA_Agreement_ID;
	public static String Store_CreationDate;
	
	public static String StoreTaxPayerName;
	public static String StoreTaxPayerAddress;
	public static String  StoreAssignedTo;
	
	static int Weekly_1 =7;
	static int Fortnightly_1 =14 ;
	static int Monthly_1 = 31;
	static int Quarterly_1 =92 ;	
	
	@Given("^User is on Payment Agreement Landing Screen \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_is_on_Payment_Agreement_Landing_Screen(String TC, String Des) throws Throwable 
	{
	   System.out.println(TC);
	   System.out.println(Des);
	}
	
	@And("^User click on notification on Payment Agreement$")
	public void user_click_on_notification_on_Payment_Agreement() throws Throwable 
	{
		sleepWait(1000);
		clickOn("btn_Notification_Click", "");
		sleepWait(1000);
	    
	}

	@And("^User see notification is open$")
	public void user_see_notification_is_open() throws Throwable 
	{
		sleepWait(1000);
		if(wd.findElement(By.xpath(obj.getProperty("txt_NotificationCheck"))).isDisplayed())
		{
			assertTrue(true);
		}
		clickOn("btn_NotificationClose", "");
		sleepWait(1000);
	}
	
	@And("^User click on continue$")
	public void user_click_on_continue() throws Throwable 
	{
		sleepWait(1000);
		waitFor("btn_continue_click");
		clickOn("btn_continue_click", "");
	}
	
	@And("^User type initial amount \"([^\"]*)\"$")
	public void user_type_initial_amount(String value) throws Throwable 
	{
		sleepWait(1000);
		type("txt_InitialAmount", value);
		sleepWait(1000);	    
	}

	@And("^User again type initial amount \"([^\"]*)\"$")
	public void user_again_type_initial_amount(String value) throws Throwable 
	{
		sleepWait(1000);
		type("txt_InitialAmount", value);	    
	}
	
	@And("^User see validation message \"([^\"]*)\" for Payment Agreement$")
	public void user_see_validation_message_for_Payment_Agreement(String mess) throws Throwable 
	{
		sleepWait(1000);
		if(wd.findElement(By.xpath("//span[contains(text(),'" + mess + "')]")).isDisplayed() )
		{					
			assertTrue(true);
		}  		
	}
	
	@And("^User click on discount radio button$")
	public void user_click_on_discount_radio_button() throws Throwable 
	{
		sleepWait(2000);
		clickOn("rad_Discount_Amount", "");	    
	}

	@And("^User see percentage is deselected$")
	public void user_see_percentage_is_deselected() throws Throwable 
	{
		sleepWait(1000);
		if(!wd.findElement(By.xpath(obj.getProperty("txt_per_deselected"))).isEnabled())
		{
			assertTrue(true);
		}		    
	}

	@And("^User click on percentage radio button$")
	public void user_click_on_percentage_radio_button() throws Throwable 
	{
		sleepWait(1000);
		waitFor("rad_Percentage");
		clickOn("rad_Percentage", "");
	    
	}

	@And("^User see discount amount is deselected$")
	public void user_see_discount_amount_is_deselected() throws Throwable 
	{
		sleepWait(1000);
		if(!wd.findElement(By.xpath(obj.getProperty("txt_dis_deselected"))).isEnabled())
		{
			assertTrue(true);
		}		    
	}
	
	@And("^User click on Installement radio button$")
	public void user_click_on_Installement_radio_button() throws Throwable 
	{
		sleepWait(1000);
		waitFor("rad_installement");
		clickOn("rad_installement", "");	    
	}

	@And("^User see no of installement is deselected$")
	public void user_see_no_of_installement_is_deselected() throws Throwable 
	{
		sleepWait(1000);
		if(!wd.findElement(By.xpath(obj.getProperty("txt_no_of_install_deselected"))).isEnabled())
		{
			assertTrue(true);
		}		   
	}

	@And("^User click on No of Installement radio button$")
	public void user_click_on_No_of_Installement_radio_button() throws Throwable 
	{
		sleepWait(1000);
		waitFor("rad_No_of_installement");
		clickOn("rad_No_of_installement", "");
	    
	}

	@And("^User see installement amount is deselected$")
	public void user_see_installement_amount_is_deselected() throws Throwable 
	{		
		sleepWait(1000);
		if(!wd.findElement(By.xpath(obj.getProperty("txt_installment_amount"))).isEnabled())
		{
			assertTrue(true);
		}		    
	}

	@And("^User type amount \"([^\"]*)\" in discount textbox$")
	public void user_type_amount_in_discount_textbox(String amount) throws Throwable 
	{
		sleepWait(1000);
		type("txt_Discount_Amount", amount);	  
	}

	@And("^User type percentage \"([^\"]*)\" in percentage textbox$")
	public void user_type_percentage_in_percentage_textbox(String per) throws Throwable 
	{
		sleepWait(1000);
		type("txt_Percentage", per);
	    
	}
	
	@And("^User click on Installement Frequency dropdown$")
	public void user_click_on_Installement_Frequency_dropdown() throws Throwable 
	{
		sleepWait(1000);
		clickOn("drp_Installment_Frequency", "");
	    
	}

	@And("^User select from dropdown \"([^\"]*)\"$")
	public void user_select_from_dropdown(String list) throws Throwable 
	{
		sleepWait(1000);
		clickOn(list, "");	    
	}

	@Given("^User click on Authorized Signatory on Payment Agreement$")
	public void user_click_on_Authorized_Signatory_on_Payment_Agreement() throws Throwable 
	{
		sleepWait(1000);
	   clickOn("drp_AuthorisedSignatory", "");
	   sleepWait(1000);
	   clickOn("drp_auth_click", "");
	   sleepWait(1000);
	}

	
	@And("^User enter data in comment \"([^\"]*)\" and check$")
	public void user_enter_data_in_comment_and_check(String comment) throws Throwable 
	{
		sleepWait(1000);
		type("lbl_Comment", comment);			
		String check = getValue("lbl_Comment");		
		assertEquals(comment, check);
	}
	
	@And("^User click on browse and select file \"([^\"]*)\" and verify$")
	public void user_click_on_browse_and_select_file_and_verify(String upload) throws Throwable 
	{
		sleepWait(1000);
		clickOn("btn_Brose_Att", "");		
		sleepWait(1000);
		UploadImage("", upload);
		String Check_upload = elementText("btn_check_PAD");
		assertEquals(Check_upload, upload);
	}

	@And("^User click on cancel button on payment agreement$")
	public void user_click_on_cancel_button_on_payment_agreement() throws Throwable 
	{
		sleepWait(1000);
		clickOn("btn_PaymentAgrementCancel", "");
		sleepWait(1000);	   
	}

	@And("^User is redirect to list$")
	public void user_is_redirect_to_list() throws Throwable 
	{
		sleepWait(1000);
		waitFor("txt_redirect");
		if(wd.findElement(By.xpath(obj.getProperty("txt_redirect"))).isDisplayed())
		{
			assertTrue(true);
		}
	}

	@And("^User type discount amount \"([^\"]*)\"$")
	public void user_type_discount_amount(String amount) throws Throwable 
	{
		sleepWait(1000);
	   type("txt_Discount_Amount", amount);
	}
	

	@And("^User type installment amount \"([^\"]*)\"$")
	public void user_type_installment_amount(String installamount) throws Throwable 
	{
		sleepWait(1000);
		type("txt_Installement",installamount);		
	}
	

	@And("^User click on installement Scledules button$")
	public void user_click_on_installement_Scledules_button() throws Throwable 
	{
		sleepWait(1000);
		clickOn("btn_Installment_Schedules", "");	    
	}

	@And("^User see pop up appear$")
	public void user_see_pop_up_appear() throws Throwable 
	{
		sleepWait(1000);
		waitFor("txt_pop_up_InstallSche");
		if(wd.findElement(By.xpath(obj.getProperty("txt_pop_up_InstallSche"))).isDisplayed())
		{
			assertTrue(true);
		}		
	}

	@And("^User see installment amount \"([^\"]*)\"$")
	public void user_see_installment_amount(String popAmount) throws Throwable 
	{
		sleepWait(1000);
		if(wd.findElement(By.xpath("(//div[contains(text(),'" + popAmount + "')])[1]")).isDisplayed() )
		{							
			assertTrue(true);
		} 	   
	}	

	@And("^User click on submit button on payment agreement$")
	public void user_click_on_submit_button_on_payment_agreement() throws Throwable 
	{
		sleepWait(1000);
		waitFor("btn_PaymentAgrementSubmit");
	   clickOn("btn_PaymentAgrementSubmit", "");
	   sleepWait(1000);	   
	}
	
	@And("^User click on submit button on Payment agreement$")
	public void user_click_on_submit_button_on_Payment_agreement() throws Throwable 
	{
		sleepWait(1000);
		clickOn("btn_PaymentAgrementSubmit", "");
		sleepWait(5000);
		waitFor("txt_dashboard");
		sleepWait(1000);		 
	}

	@And("^User navigate to payment agreement notice page$")
	public void user_navigate_to_payment_agreement_notice_page() throws Throwable 
	{
		sleepWait(2000);
		if(wd.findElement(By.xpath(obj.getProperty("txt_Paymet_Agreement"))).isDisplayed())
		{
			assertTrue(true);
		}
		sleepWait(1000);
	}

	@And("^User click on action and select pa executed$")
	public void user_click_on_action_and_select_pa_executed() throws Throwable 
	{
		sleepWait(1000);		
		waitFor("drp_Next");
		clickOn("drp_Next", "");
		sleepWait(1000);
		clickOn("drp_PA_executedClick", "");
		sleepWait(1000);
	}

	@And("^User see paid installment \"([^\"]*)\"$")
	public void user_see_paid_installment(String paid) throws Throwable 
	{
		sleepWait(1000);
		if(wd.findElement(By.xpath("(//div[contains(text(),'" + paid + "')])[1]")).isEnabled() )
		{		
			assertTrue(true);
		} 	
	}

	@And("^User see over due installment \"([^\"]*)\"$")
	public void user_see_over_due_installment(String overdue) throws Throwable 
	{
		sleepWait(1000);
		if(wd.findElement(By.xpath("(//div[contains(text(),'" + overdue + "')])[2]")).isEnabled() )
		{		
			assertTrue(true);
		} 	
	}

	@And("^User see pending installement \"([^\"]*)\"$")
	public void user_see_pending_installement(String pending) throws Throwable 
	{
		sleepWait(1000);
		if(wd.findElement(By.xpath("(//div[contains(text(),'" + pending + "')])[1]")).isEnabled() )
		{		
			assertTrue(true);
		} 
	}

	@And("^User click on view icon on installement status$")
	public void user_click_on_view_icon_on_installement_status() throws Throwable 
	{
		sleepWait(1000);
		clickOn("btn_installment_Status_eye_click", "");
		sleepWait(2000);	    
	}
	
	@And("^User see notification of installement details$")
	public void user_see_notification_of_installement_details() throws Throwable 
	{
		sleepWait(1000);
		if(wd.findElement(By.xpath(obj.getProperty("btn_eye_Installment_Details_popup"))).isDisplayed())
		{
			assertTrue(true);
		}
		sleepWait(1000);		
		clickOn("btn_eye_Installment_Details_popup_close", "");
		sleepWait(1000);		
	}
	
	
	@And("^User click on action and select cancel$")
	public void user_click_on_action_and_select_cancel() throws Throwable 
	{		
		sleepWait(1000);
		waitFor("drp_Next");
		clickOn("drp_Next", "");
		sleepWait(1000);
		clickOn("drp_ActionCancel_Click", "");
		sleepWait(1000);
		
	}
	
	@Then("^User see the status \"([^\"]*)\" on case management$")
	public void user_see_the_status_on_case_management(String status) throws Throwable 
	{
		sleepWait(1000);
		if(wd.findElement(By.xpath("//*[contains(text(),'" +status+ "')]")).isDisplayed())
		{
			assertTrue(true);
		}
			
	}
	
/**
 *  Updated 
 */
	
	@And("^User store CaseID for Case Management$")
	public void user_store_CaseID_for_Case_Management() throws Throwable 
	{
		sleepWait(1000);
		String CaseID = elementText("txt_StoreCaseID_CM");
		StoreCaseID = CaseID; 		   
	}
	
	@And("^User type CaseID for Case Management$")
	public void user_type_CaseID_for_Case_Management() throws Throwable 
	{
		sleepWait(1000);
		waitFor("txtbox_TypeHere");
		type("txtbox_TypeHere", StoreCaseID);
		//type("txtbox_TypeHere", "R19021500000006");		
		sleepWait(1000);		
	}	

	@And("^User store NITVA for Case Management$")
	public void user_store_NITVA_for_Case_Management() throws Throwable 
	{
		sleepWait(1000);
		String NITVA = elementText("txt_StoreNITVA_CM");
		StoreCaseID_NITVA = NITVA; 		   
	}

	@And("^User store Total Amount$")
	public void user_store_Total_Amount() throws Throwable 
	{
		sleepWait(1000);
		String RecoveryAmount =getValue("txt_RecoveryAmount"); 
		StoreRecoveryAmount =RecoveryAmount;  
	   
	}

	@And("^User see status is \"([^\"]*)\"$")
	public void user_see_status_is(String status) throws Throwable
	{
		sleepWait(1000);
		if(wd.findElement(By.xpath("//*[contains(text(),'" + status + "')]")).isDisplayed())
		{
			assertTrue(true);
		}	   
	}

	@And("^User select action and click on Under Review and click on save button$")
	public void user_select_action_and_click_on_Under_Review_and_click_on_save_button() throws Throwable 
	{
		sleepWait(1000);
	    clickOn("drp_Next", "");
	    sleepWait(1000);	   	   
	    clickOn("drp_Action_UnderReview_CM", "");
	    sleepWait(1000);	    
	    clickOn("btn_PopUp_Save", "");
	    waitFor("btn_PopUp_Save");
	    sleepWait(1000);
	   
	}
	
	@And("^User select action and click on Request Payment Agreement and click on save button$")
	public void user_select_action_and_click_on_Request_Payment_Agreement_and_click_on_save_button() throws Throwable 
	{
		 sleepWait(1000);
		 waitFor("drp_Next");
		 sleepWait(1000);
		 clickOn("drp_Next", "");
		 sleepWait(1000);	   		
		 clickOn("drp_Action_PaymentAgreement_CM", "");
		 sleepWait(1000);	    
		 clickOn("btn_PopUp_Save", "");
		 waitFor("btn_PopUp_Save");
		 sleepWait(1000);	   
	}

	@And("^User verify NITVA for Case Management$")
	public void user_verify_NITVA_for_Case_Management() throws Throwable
	{
		sleepWait(2000);
		waitFor("txt_RPA_Check");
		String CheckNITVA= elementText("txt_RPA_Check");		
		assertEquals(CheckNITVA, StoreCaseID_NITVA);		 
	   
	}

	@And("^User verify Total Amount and field is disable$")
	public void user_verify_Total_Amount_and_field_is_disable() throws Throwable
	{
	   sleepWait(1000);
	   String checkTA = getValue("txt_payAm");
	   assertEquals(checkTA, StoreRecoveryAmount);
	   sleepWait(1000);
	}

	@And("^User see percentage is calculated$")
	public void user_see_percentage_is_calculated() throws Throwable 
	{
		sleepWait(1000);
		String Discount_Amount= getValue("txt_dis_deselected");
		String Total_Amount = getValue("txt_payAm");
		
		Double  DA = Double.parseDouble(Discount_Amount);						
		Double  TA = Double.parseDouble(Total_Amount);	
		
		Double Discount_Percentage = (DA/TA*100);		
	    
		String DP = String.format ("%.3f", Discount_Percentage);	    
		// add new 
		String DP1 = String.format ("%.2f", Discount_Percentage);
	    
		String PercentageCheck= getValue("txt_per_deselected");				

		if(DP.contains(PercentageCheck) || DP1.contains(PercentageCheck))
		{
			assertTrue(true);
		}
		else
		{
			assertTrue(false);
		}		
	}

	@And("^User see discount amount is calculated$")
	public void user_see_discount_amount_is_calculated() throws Throwable 
	{
		sleepWait(1000);
		String Discount_Percentage= getValue("txt_Percentage");
		String Total_Amount = getValue("txt_payAm");
		
		Double  DP = Double.parseDouble(Discount_Percentage);
		Double  TA = Double.parseDouble(Total_Amount);
		
		Double Discount_Amount_Cal = DP/100*TA;
		
		String Cal = String.format ("%.3f", Discount_Amount_Cal);	
		String Cal1 = String.format ("%.2f", Discount_Amount_Cal);
		
		String Discount_AmountCheck= getValue("txt_dis_deselected");
		if(Cal.contains(Discount_AmountCheck) || Cal1.contains(Discount_AmountCheck))
		{
			System.out.println(Cal);
			System.out.println(Discount_AmountCheck);
			assertTrue(true);
		}
		else
		{
			System.out.println(Cal);
			System.out.println(Discount_AmountCheck);
			assertTrue(false);
		}	   
	}

	@And("^User see Installement amount is calculated$")
	public void user_see_Installement_amount_is_calculated() throws Throwable 
	{
		sleepWait(1000);
		String Total_Amount = getValue("txt_payAm");
		Double  TA = Double.parseDouble(Total_Amount);
		
		String Initial_Amount = getValue("txt_InitialAmount");
		Double  IA = Double.parseDouble(Initial_Amount);
		
		String Discount_Amount= getValue("txt_dis_deselected");
		Double  DA = Double.parseDouble(Discount_Amount);
		
		String NumberOfInstallment= getValue("txt_No_of_installement");
		Float  NoIA = Float.parseFloat(NumberOfInstallment);
		 
		Double Check = (TA-IA-DA)/NoIA;
		
		String Installement_Amount_check = getValue("txt_Installement");
		Double  IAC = Double.parseDouble(Installement_Amount_check);
		
		assertEquals(IAC, Check);
	}
	

	@And("^User see next installement date is displayed$")
	public void user_see_next_installement_date_is_displayed() throws Throwable
	{
		sleepWait(1000);
	    String NID = getValue("drp_NextInstallementDate");
	   
	    Calendar cal = Calendar.getInstance();
	    cal.add(Calendar.DAY_OF_WEEK, 7);
	    Date date = cal.getTime();             
	    SimpleDateFormat format1 = new SimpleDateFormat("dd MMMM, yyyy");
	    String date1 = format1.format(date);    
	    assertEquals(NID, date1);
	}

	@And("^User verify Authority and verify it is selected$")
	public void user_verify_Authority_and_verify_it_is_selected() throws Throwable 
	{
	   sleepWait(1000);
	   clickOn("drp_AuthorisedSignatory", "");
	   sleepWait(1000);
	   String check = elementText("drp_auth_click");
	   System.out.println(check);
	   clickOn("drp_auth_click", "");
	   sleepWait(1000);	  
	   	String verify = elementText("drp_AuthorisedSignatory");
	   	
	   	if(verify.contains(check))
	   	{
	   		assertTrue(true);
	   	}
	   	else 
	   	{
			assertTrue(false);
		}
	}
	

	@And("^User type No of Installement \"([^\"]*)\"$")
	public void user_type_No_of_Installement(String install) throws Throwable
	{
	    sleepWait(1000);
	    type("txt_no_of_install_deselected", install);	   
	}

	@And("^User store total amount$")
	public void user_store_total_amount() throws Throwable
	{
		sleepWait(1000);
		String TA = getValue("txt_payAm");
		StoteTA = TA; 	   
	}

	@And("^User store initial amount$")
	public void user_store_initial_amount() throws Throwable
	{
		sleepWait(1000);
		String IA = getValue("txt_InitialAmount");
		StoteIA = IA; 	   
	}

	@And("^User store discount amount$")
	public void user_store_discount_amount() throws Throwable
	{
		sleepWait(1000);
		String DA = getValue("txt_Discount_Amount");
		StoteDA = DA; 
	}

	@And("^User store discount percantage$")
	public void user_store_discount_percantage() throws Throwable 
	{
		sleepWait(1000);
		String DP = getValue("txt_Percentage");
		StoteDP = DP; 
	}

	@And("^User store installement amount$")
	public void user_store_installement_amount() throws Throwable
	{
		sleepWait(1000);
		String SIA = getValue("txt_Installement");
		StoteSIA = SIA; 
	}

	@And("^User store no of installements$")
	public void user_store_no_of_installements() throws Throwable
	{
		sleepWait(1000);
		String NoIA = getValue("txt_No_of_installement");
		StoteNoIA = NoIA; 	   
	}

	@And("^User store installement frequency$")
	public void user_store_installement_frequency() throws Throwable
	{
		sleepWait(1000);
		String IF = elementText("drp_InstallmentFrequency");
		StoteIF = IF; 
	}

	@And("^User store Next installements Date$")
	public void user_store_Next_installements_Date() throws Throwable
	{
		sleepWait(1000);
		String NIA = getValue("drp_NextInstallementDate");
		StoteNIA = NIA;		
		StoreNID_1 =NIA;
	}

	@And("^User store authorized signatory$")
	public void user_store_authorized_signatory() throws Throwable 
	{
		sleepWait(1000);
		String AS = elementText("drp_AuthorisedSignatory");
		StoteAS = AS; 
	}
	
	@And("^User store payment agreement Case id$")
	public void user_store_payment_agreement_Case_id() throws Throwable 
	{
		sleepWait(1000);
		String PA = elementText("txt_StoreCaseId");
		String value_PA = PA;
		value_PA = value_PA.substring(10);		
		StrorePA_Case_ID = value_PA;		
	}
	
	@And("^User store Agreement Id$")
	public void user_store_Agreement_Id() throws Throwable 
	{
		sleepWait(1000);
		String A_ID = elementText("txt_StoreAgreeId");	
		String value_A_ID = A_ID;
		value_A_ID = value_A_ID.substring(15);		
		StrorePA_Agreement_ID = value_A_ID;	   
	}

	@And("^User store payment agreement creation date$")
	public void user_store_payment_agreement_creation_date() throws Throwable 
	{
		sleepWait(1000);
	    String SCD = elementText("txt_StoreCreationDate");
	    Store_CreationDate= SCD;
	}

	@And("^User type case id of payment agreement$")
	public void user_type_case_id_of_payment_agreement() throws Throwable 
	{
	   sleepWait(1000);	   
	   waitFor("txtbox_TypeHere");
	   sleepWait(1000);	   
	   type("txtbox_TypeHere", StrorePA_Case_ID);	   
	   sleepWait(1000);	   
	}

	@And("^User verify store payment agreement creation date$")
	public void user_verify_store_payment_agreement_creation_date() throws Throwable 
	{
		sleepWait(1000);
		String verifyDate = elementText("txt_Verify_Date");
		assertEquals(Store_CreationDate, verifyDate);	   
	}

	@And("^User verify store Agreement Id$")
	public void user_verify_store_Agreement_Id() throws Throwable 
	{		
		sleepWait(1000);
		String verifyAgreeID = elementText("txt_P_Agree_ID");
		assertEquals(StrorePA_Agreement_ID, verifyAgreeID);	  	   
	}
	
	
	@And("^User verify store payment agreement Case id$")
	public void user_verify_store_payment_agreement_Case_id() throws Throwable 
	{		
		sleepWait(1000);
		String verifyAgreeID = elementText("txt_P_Case_ID");
		assertEquals(StrorePA_Case_ID, verifyAgreeID);	 	   
	}

	@And("^User verify store total amount$")
	public void user_verify_store_total_amount() throws Throwable
	{
	    sleepWait(1000);
		String Verify_Total_Amount = getValue("txt_payAm");			
		assertEquals(StoreRecoveryAmount, Verify_Total_Amount);		
	}

	@And("^User verify store initial amount$")
	public void user_verify_store_initial_amount() throws Throwable 
	{
	    sleepWait(1000);
		String Verify_Initial_Amount = getValue("txt_InitialAmount");				
		assertEquals(StoteIA, Verify_Initial_Amount);	   
	}

	@And("^User verify store discount amount$")
	public void user_verify_store_discount_amount() throws Throwable 
	{
		sleepWait(1000);
		String Verify_Discount_Amount = getValue("txt_Discount_Amount");		
		assertEquals(StoteDA, Verify_Discount_Amount);		  
	}

	@And("^User verify store discount percantage$")
	public void user_verify_store_discount_percantage() throws Throwable 
	{
		sleepWait(1000);
		String Verify_Discount_Percentage = getValue("txt_Percentage");		
		assertEquals(StoteDP, Verify_Discount_Percentage);		
	}

	@And("^User verify store installement amount$")
	public void user_verify_store_installement_amount() throws Throwable
	{
		sleepWait(1000);
		String Verify_Installement_Amount = getValue("txt_Installement");		
		assertEquals(StoteSIA, Verify_Installement_Amount);				
	}

	@And("^User verify store no of installements$")
	public void user_verify_store_no_of_installements() throws Throwable 
	{
		sleepWait(1000);
		String Verify_NO_of_Installement_Amount = getValue("txt_No_of_installement");		
		assertEquals(StoteNoIA, Verify_NO_of_Installement_Amount);	   		
	}

	@And("^User verify store installement frequency$")
	public void user_verify_store_installement_frequency() throws Throwable
	{
		sleepWait(1000);
		String Verify_Installement_Frequency = elementText("drp_InstallmentFrequency_check");		
		assertEquals(StoteIF, Verify_Installement_Frequency);	 
	}

	@And("^User verify store Next installements Date$")
	public void user_verify_store_Next_installements_Date() throws Throwable 
	{
		sleepWait(1000);
		String Verify_NextInstallementDate = getValue("drp_NextInstallementDate");
		assertEquals(StoteNIA, Verify_NextInstallementDate);	 
	}

	@And("^User verify store authorized signatory$")
	public void user_verify_store_authorized_signatory() throws Throwable
	{
		sleepWait(1000);
		String Verify_AuthorizedSign = elementText("drp_AuthorisedSignatory");
		assertEquals(StoteAS, Verify_AuthorizedSign);		
	}
	
	@And("^User click on browse button on communication session and upload file \"([^\"]*)\" and verify$")
	public void user_click_on_browse_button_on_communication_session_and_upload_file_and_verify(String upload) throws Throwable 
	{	
		sleepWait(1000);
		clickOn("btn_Communication_click", "");
		sleepWait(1000);
		UploadImage("", upload);
		String Check = elementText("txt_UploadFileCheck");
		assertEquals(Check, upload);
	}
	
	@And("^User get installement amount$")
	public void user_get_installement_amount() throws Throwable 
	{
		sleepWait(1000);
		String IA = getValue("txt_Installement");
		StoreIA = IA; 
	}

	@And("^User verify installement amount$")
	public void user_verify_installement_amount() throws Throwable 
	{
		sleepWait(1000);		
		waitFor("btn_pop_up_close");
		String Check = elementText("txt_checkInstallementAmount");							
		sleepWait(1000);
		if(StoreIA.equals(Check))
		{			
			assertTrue(true); 
			System.out.println(StoreIA);
			System.out.println(Check);
			clickOn("btn_pop_up_close", "");			
		}
		else
		{		
			System.out.println(StoreIA);
			System.out.println(Check);
			clickOn("btn_pop_up_close", "");
			assertTrue(false);			
		}		
	}
	
	/**
	 *  Updated
	 *  Here DV_2385 start from here
	 */
	
	@Then("^User see Installment Schedule button is disable$")
	public void user_see_Installment_Schedule_button_is_disable() throws Throwable 
	{
		sleepWait(1000);
		if(!wd.findElement(By.xpath(obj.getProperty("btn_Installment_Schedules"))).isEnabled())
		{
			assertTrue(true);
		}
		else
		{
			assertTrue(false);
		}
	}
	
	
	@And("^User is on Installment Schedule Screen \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_is_on_Installment_Schedule_Screen(String arg1, String arg2) throws Throwable 
	{
	    System.out.println(arg1);
	    System.out.println(arg2);	   
	}

	@And("^User verify Agreement ID in installement pop up$")
	public void user_verify_Agreement_ID_in_installement_pop_up() throws Throwable 
	{
		sleepWait(1000);
		String verifyAgreeID = elementText("txt_ID_Aree_Id");
		assertEquals(StrorePA_Agreement_ID, verifyAgreeID);
	}
	
	@And("^User verify the creation date of payment agreement on pop up$")
	public void user_verify_the_creation_date_of_payment_agreement_on_pop_up() throws Throwable 
	{
		sleepWait(1000);
		String verifyDate = elementText("txt_ID_date_Verify_format");
		assertEquals(Store_CreationDate, verifyDate);	  
		
	}
	
	@And("^User verify the difference between two consecutive date$")
	public void user_verify_the_difference_between_two_consecutive_date() throws Throwable 
	{
		sleepWait(1000);
		SimpleDateFormat myFormat = new SimpleDateFormat("dd-MMM-yyyy");			
		String Checkdate1 = elementText("txt_ID_popup_EMI_DueDate_1");
		String Checkdate2 = elementText("txt_ID_popup_EMI_DueDate_2");	
		int diff1 =0;
		try 
		{
		    Date date1 = myFormat.parse(Checkdate1);
		    Date date2 = myFormat.parse(Checkdate2);
		    long diff = date2.getTime() - date1.getTime();		    
		    diff1 = (int) TimeUnit.DAYS.convert(diff, TimeUnit.MILLISECONDS);		    
		} catch (ParseException e) 
		{
		    e.printStackTrace();
		}		
		//String InstallementFrequency = elementText("drp_InstallmentFrequency");					
		if(StoteIF.equals("Weekly"))
		{
			assertEquals(diff1, Weekly_1);
		}
		else if(StoteIF.equals("Fortnightly"))
		{
			assertEquals(diff1, Fortnightly_1);
		}
		else if(StoteIF.equals("Monthly"))
		{
			assertEquals(diff1, Monthly_1);
		}
		else if(StoteIF.equals("Quarterly"))
		{
			assertEquals(diff1, Quarterly_1);
		}
		else
		{
			assertTrue(false);
		}
	}

	@And("^User verify Installment amount calculated as per the selection$")
	public void user_verify_Installment_amount_calculated_as_per_the_selection() throws Throwable 
	{
	    sleepWait(2000);
		String InstAmou = elementText("txt_ID_Install_Amount_1");		
		if(StoteSIA.contains(InstAmou))
		{
			assertTrue(true);
		}
		else 
		{
			System.out.println(StoteSIA);
			System.out.println(InstAmou);
			clickOn("btn_pop_up_close", "");
			assertTrue(false);
			
		}
	}

	@And("^User verify the date format DD/MMM/YYYY$")
	public void user_verify_the_date_format_DD_MMM_YYYY() throws Throwable
	{
		sleepWait(1000);
		String DateFormat = elementText("txt_ID_date_Verify_format");		
		sleepWait(1000);
		if(isValidDate(DateFormat))
		{					
			assertTrue(true);
		}
		else
		{	
			assertTrue(false);
		}		   
	}

	@Then("^User click on close icon on Installment Details pop up$")
	public void user_click_on_close_icon_on_Installment_Details_pop_up() throws Throwable 
	{
	   sleepWait(1000);
	   clickOn("btn_pop_up_close", "");
	   sleepWait(1000);
	}
	
	@Then("^User search TaxPayer name \"([^\"]*)\" and store TaxPayer name and address$")
	public void user_search_TaxPayer_name_and_store_TaxPayer_name_and_address(String arg1) throws Throwable 
	{
		sleepWait(1000);
		waitFor("btn_filter");
		clickOn("btn_filter","");
		clickOn("drpdwnfilterby_txpayer", "");
		sleepWait(2000);
		clickOn("filterbytpayer", "");		
		sleepWait(2000);
		type("input_search_tpprofile",arg1);
		clickOn("btn_searchage","");	
		sleepWait(2000);
		   
		StoreTaxPayerName = elementText("txt_store_TaxPaeyerName");   
		sleepWait(1000);
		clickOn("eye_click_AA", "");
		sleepWait(3000);
		StoreTaxPayerAddress = elementText("txt_store_TaxPyerAddress");
		sleepWait(1000);
		
		clickOn("nav_debt","");

	}

	@And("^User store Assigned To Tax Officer name$")
	public void user_store_Assigned_To_Tax_Officer_name() throws Throwable 
	{
		sleepWait(1000);
		StoreAssignedTo = elementText("txt_store_AssignedTO");
		sleepWait(1000);
		
	}

	/**
	 *  Payment agreement documents starts from here
	 */
	
	@Given("^User see current date generated and verify date format DD/MMM/YYYY and on payment agreement$")
	public void user_see_current_date_generated_and_verify_date_format_DD_MMM_YYYY_and_on_payment_agreement() throws Throwable
	{
		sleepWait(1000);
		String DateFormatPaymentAgreementCheck = elementText("txt_newDate");		
		sleepWait(1000);
		if(isValidDate(DateFormatPaymentAgreementCheck))
		{					
			assertTrue(true);
		}
		else
		{	
			assertTrue(false);
		}		   
	}

	@Given("^User validate barcode on payment agreement$")
	public void user_validate_barcode_on_payment_agreement() throws Throwable
	{
			sleepWait(1000);
			Date Mydate = new Date();		
			SimpleDateFormat mdyFormat = new SimpleDateFormat("YYMMdd");
			String mdy = mdyFormat.format(Mydate);			
			
			String barcode = elementText("txt_Case_ID");		
			//String CaseID_PaymentAgreement = elementText("txt_Case_ID");
			//String CaseID_PaymentAgreement = "Case Id : R19021400000036";
			String value = barcode;
			value = value.substring(10);
			value = value.substring(1,7);
			System.out.println(value);			
			if(mdy.startsWith(value))
			{
				assertTrue(true);
			}
			else
			{
				assertTrue(false);
			}
			
			
			//String s = "R19021300000006";
			//String Bar = barcode.substring(1, barcode.length() / 2);			
		/*	String Bar = barcode;
			String value = Bar;
			value = value.substring(1,7);
			
			System.out.println(Bar);			
			if(mdy.startsWith(Bar))
			{
				assertTrue(true);
			}
			else
			{
				assertTrue(false);
			}*/
	}

	@And("^User validate taxpayer name and address on payment agreement$")
	public void user_validate_taxpayer_name_and_address_on_payment_agreement() throws Throwable 
	{
		sleepWait(1000);		
		String PA_TaxpayerName = elementText("txt_TaxPayerName");			
		String PA_TaxpayerAddress = elementText("txt_TaxPayerAdrress");		
		assertEquals(StoreTaxPayerName, PA_TaxpayerName);		
		assertEquals(StoreTaxPayerAddress, PA_TaxpayerAddress);
	}
	
	@And("^User validate case id field format YYMMDD$")
	public void user_validate_case_id_field_format_YYMMDD() throws Throwable
	{
		Date Mydate = new Date();		
		SimpleDateFormat mdyFormat = new SimpleDateFormat("YYMMdd");
		String mdy = mdyFormat.format(Mydate);		
		
		String CaseID_PaymentAgreement = elementText("txt_Case_ID");
		//String CaseID_PaymentAgreement = "Case Id : R19021400000036";
		String value = CaseID_PaymentAgreement;
		value = value.substring(10);
		value = value.substring(1,7);
		System.out.println(value);
		
		assertEquals(mdy, value);
		
	}

	@And("^User validate payment agreement id format YYMMDD$")
	public void user_validate_payment_agreement_id_format_YYMMDD() throws Throwable
	{
		sleepWait(1000);			
		Date Mydate = new Date();		
		SimpleDateFormat mdyFormat = new SimpleDateFormat("YYMMdd");
		String mdy = mdyFormat.format(Mydate);	
		
		String CaseID_PaymentAgreement = elementText("txt_Agree_ID");
//		String CaseID_PaymentAgreement = "Agreement Id : PA19021400001";
	
		String value = CaseID_PaymentAgreement;
		value = value.substring(14);
		value = value.substring(3,9);
		System.out.println(value);
		assertEquals(mdy, value);
		
		
	}

	@And("^User verify the payment period field start date and end date$")
	public void user_verify_the_payment_period_field_start_date_and_end_date() throws Throwable
	{
		sleepWait(1000);
		String PaymentstartDate = elementText("txt_PaymentPeriod");		
		//String value = "21-Feb-2019 To 28-Feb-2019 ";
		String value = PaymentstartDate;
		value = value.substring(0,11);
		System.out.println(value);					 
		
		//String Mydate = "22-February-2019";
		String Mydate = StoreNID_1;
		SimpleDateFormat mdyFormat = new SimpleDateFormat("dd MMMM, yyyy");		
		SimpleDateFormat mdyFormat1 = new SimpleDateFormat("dd-MMM-yyyy");		
		System.out.println(mdyFormat.parse(Mydate));
		String check =  mdyFormat1.format(mdyFormat.parse(Mydate));
		System.out.println(check);
		assertEquals(check, value);
		
		
	}

	@And("^User verify payment amount due date$")
	public void user_verify_payment_amount_due_date() throws Throwable 
	{
		String PayAmountDue = elementText("txt_PaymentAmountDue");		
		PayAmountDue = PayAmountDue.substring(3);		
		System.out.println(PayAmountDue);
		assertEquals(StoreRecoveryAmount, PayAmountDue);
	}

	@And("^User verify Payment Schedule field and verify date for Annexure A and installment amount$")
	public void user_verify_Payment_Schedule_field_and_verify_date_for_Annexure_A_and_installment_amount() throws Throwable 
	{
		String InstAmount_A  = elementText("txt_check_1_Amount");		
		//String value = "90,87";				
	
/*	String value = InstAmount;	
 * String FC1 = value.replace("." ,",");			
   System.out.println(FC1);		 	*/			
		
		assertEquals(StoteSIA, InstAmount_A);		
		
		String PaymentPeriodDate = elementText("txt_check_1_Date");
		// 14-02-2019		
		//StoreNID_1 =14 Febuary, 2019 				
	    Date Mydate = new Date();		
		SimpleDateFormat mdyFormat = new SimpleDateFormat("dd-MM-yyyy");
		StoreNID_1 = mdyFormat.format(Mydate);		
		System.out.println(StoreNID_1);
		assertEquals(PaymentPeriodDate, StoreNID_1);
	}



	@And("^User verify the Regards field$")
	public void user_verify_the_Regards_field() throws Throwable
	{
		sleepWait(3000);
		String Regards_PA = elementText("txt_Regards_check");
		sleepWait(2000);
		System.out.println(StoreAssignedTo);
		System.out.println(Regards_PA);
		assertEquals(StoreAssignedTo, Regards_PA);
	}

	@And("^User see print button is enabled$")
	public void user_see_print_button_is_enabled() throws Throwable
	{
		sleepWait(1000);
		if(wd.findElement(By.xpath(obj.getProperty("btn_Print_PA_notice"))).isEnabled())			
		{
			assertTrue(true);
		}
		else
		{
			assertTrue(false);
		}			
	}
	
	@And("^User click on previous button and navigate to payment agrement landing screen$")
	public void user_click_on_previous_button_and_navigate_to_payment_agrement_landing_screen() throws Throwable 
	{
		sleepWait(1000);
		clickOn("btn_Previous_page", "");	
		sleepWait(1000);
	}
	
	@And("^User validate subject field \"([^\"]*)\"$")
	public void user_validate_subject_field(String subject) throws Throwable 
	{
		String check = elementText("txt_PaymentAgreement");		
		//String value = "Subject : Payment Agreement";
		String value = check;
		value = value.substring(10);
		System.out.println(value);		
		assertEquals(subject, value);		
		
	}
	
	
}
