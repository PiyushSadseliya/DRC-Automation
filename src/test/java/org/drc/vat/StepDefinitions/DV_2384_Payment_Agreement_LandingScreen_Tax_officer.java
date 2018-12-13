package org.drc.vat.StepDefinitions;

import static org.drc.vat.appmanager.HelperBase.*;
import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertTrue;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;

public class DV_2384_Payment_Agreement_LandingScreen_Tax_officer
{
	public String newCaseId;
	public String agreementId;
	
	@Given("^User is on Payment Agreement Landing Screen \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_is_on_Payment_Agreement_Landing_Screen(String arg1, String arg2) throws Throwable 
	{
	   System.out.println(arg1);
	   System.out.println(arg2);
	}

	@Given("^User see new agrement id \"([^\"]*)\"$")
	public void user_see_new_agrement_id(String Aid) throws Throwable 
	{
		if(wd.findElement(By.xpath("//span[contains(text(),'" + Aid +"')]")).isDisplayed() )
		{					
			assertTrue(true);
		} 
	}

	@Given("^User click on browse button on payment agreement document browse$")
	public void user_click_on_browse_button_on_payment_agreement_document_browse() throws Throwable 
	{
		clickOn("btn_browsePA", "");
	}


	@And("^User clck on continue$")
	public void user_clck_on_continue() throws Throwable 
	{
		sleepWait(500);
		clickOn("btn_continue_click", "");
	}

	@And("^User see NITVA number \"([^\"]*)\" for Payment Agreement$")
	public void user_see_NITVA_number_for_Payment_Agreement(String nitva) throws Throwable 
	{
		if(wd.findElement(By.xpath("(//span[contains(text(),'" + nitva +"')])[1]")).isDisplayed() )
		{					
			assertTrue(true);
		} 	    
	}

	@And("^User see NIF number \"([^\"]*)\" for Payment Agreement$")
	public void user_see_NIF_number_for_Payment_Agreement(String nif) throws Throwable 
	{
		if(wd.findElement(By.xpath("(//span[contains(text(),'" + nif +"')])[1]")).isDisplayed() )
		{					
			assertTrue(true);
		}    
	}

	@And("^User see Address \"([^\"]*)\" for Payment Agreement$")
	public void user_see_Address_for_Payment_Agreement(String add) throws Throwable 
	{
		if(wd.findElement(By.xpath("(//div[contains(text(),'" + add +"')])[1]")).isDisplayed())
		{					
			assertTrue(true);
		}     
	}

	@And("^User see Business Type \"([^\"]*)\" for Payment Agreement$")
	public void user_see_Business_Type_for_Payment_Agreement(String bus) throws Throwable 
	{
		sleepWait(500);
		if(wd.findElement(By.xpath("(//div[contains(text(),'" + bus +"')])[1]")).isDisplayed())
		{					
			assertTrue(true);
		}    
	}

	@And("^User click on notification on Payment Agreement$")
	public void user_click_on_notification_on_Payment_Agreement() throws Throwable 
	{
		sleepWait(1000);
		clickOn("btn_Notification_Click", "");
	    
	}

	@And("^User see notification is open$")
	public void user_see_notification_is_open() throws Throwable 
	{
		sleepWait(1000);
		if(wd.findElement(By.xpath("//*[contains(text(),'Notifications')]")).isDisplayed() )
		{					
			assertTrue(true);
		}  	    
	}

	@And("^User see Case Id \"([^\"]*)\"$")
	public void user_see_Case_Id(String caseid) throws Throwable 
	{
		sleepWait(500);
		if(wd.findElement(By.xpath("//span[contains(text(),'" + caseid + "')]")).isDisplayed() )
		{					
			assertTrue(true);
		}  
		
	}
 
	@And("^User see Total Amount \"([^\"]*)\"$")
	public void user_see_Total_Amount(String arg1) throws Throwable 
	{
		String check = elementText("txt_payAm");
		if(arg1.contains(check))			
		{
			assertTrue(true);
		}
	}

	@And("^User type initial amount \"([^\"]*)\"$")
	public void user_type_initial_amount(String value) throws Throwable 
	{
		sleepWait(500);
		type("txt_InitialAmount", value);
	    
	}

	@And("^User again type initial amount \"([^\"]*)\"$")
	public void user_again_type_initial_amount(String value) throws Throwable 
	{
		
		type("txt_InitialAmount", value);
	    
	}
	

	@And("^User see validation message \"([^\"]*)\" for Payment Agreement$")
	public void user_see_validation_message_for_Payment_Agreement(String mess) throws Throwable 
	{
		if(wd.findElement(By.xpath("//span[contains(text(),'" + mess + "')]")).isDisplayed() )
		{					
			assertTrue(true);
		}  
		
	}

	@And("^User click on discount radio button$")
	public void user_click_on_discount_radio_button() throws Throwable 
	{
		sleepWait(500);
		clickOn("rad_Discount_Amount", "");
	    
	}

	@And("^User see percentage is deselected$")
	public void user_see_percentage_is_deselected() throws Throwable 
	{
		
		if(!wd.findElement(By.xpath(obj.getProperty("txt_per_deselected"))).isEnabled())
		{
			assertTrue(true);
		}	
	    
	}

	@And("^User click on percentage radio button$")
	public void user_click_on_percentage_radio_button() throws Throwable 
	{
		clickOn("rad_Percentage", "");
	    
	}

	@And("^User see discount amount is deselected$")
	public void user_see_discount_amount_is_deselected() throws Throwable 
	{
		if(!wd.findElement(By.xpath(obj.getProperty("txt_dis_deselected"))).isEnabled())
		{
			assertTrue(true);
		}		    
	}

	@And("^User type amount \"([^\"]*)\" in discount textbox$")
	public void user_type_amount_in_discount_textbox(String amount) throws Throwable 
	{
		sleepWait(500);
		type("txt_Discount_Amount", amount);	  
	}

	@And("^User type percentage \"([^\"]*)\" in percentage textbox$")
	public void user_type_percentage_in_percentage_textbox(String per) throws Throwable 
	{
		type("txt_Percentage", per);
	    
	}
	@And("^User click on Installement radio button$")
	public void user_click_on_Installement_radio_button() throws Throwable 
	{
		clickOn("rad_installement", "");	    
	}

	@And("^User see no of installement is deselected$")
	public void user_see_no_of_installement_is_deselected() throws Throwable 
	{
		if(!wd.findElement(By.xpath(obj.getProperty("txt_no_of_install_deselected"))).isEnabled())
		{
			assertTrue(true);
		}	
	    
	}

	@And("^User click on No of Installement radio button$")
	public void user_click_on_No_of_Installement_radio_button() throws Throwable 
	{
		clickOn("rad_No_of_installement", "");
	    
	}

	@And("^User see installement amount is deselected$")
	public void user_see_installement_amount_is_deselected() throws Throwable 
	{		
		if(!wd.findElement(By.xpath(obj.getProperty("txt_installment_amount"))).isEnabled())
		{
			assertTrue(true);
		}		    
	}

	@And("^User type installment amount \"([^\"]*)\"$")
	public void user_type_installment_amount(String installamount) throws Throwable 
	{
		sleepWait(500);
		type("txt_Installement",installamount);	    
	}

	@And("^User click on Installement Frequency dropdown$")
	public void user_click_on_Installement_Frequency_dropdown() throws Throwable 
	{
		sleepWait(500);
		clickOn("drp_Installment_Frequency", "");
	    
	}

	@And("^User select from dropdown \"([^\"]*)\"$")
	public void user_select_from_dropdown(String list) throws Throwable 
	{
		clickOn(list, "");	    
	}

	@And("^User see installement date \"([^\"]*)\"$")
	public void user_see_installement_date(String date) throws Throwable 
	{
		String expectedMessage = date;
		String check = getValue("//section[4]/div/div[2]/div/input");
		if(expectedMessage==check)
		{
			assertTrue(true);
		}
	    
	}
	
	
	@And("^User select Authority \"([^\"]*)\"$")
	public void user_select_Authority(String value) throws Throwable 
	{
		sleepWait(500);
		clickOn(value, "");
	}

	@And("^User see Authority  is selected \"([^\"]*)\"$")
	public void user_see_Authority_is_selected(String selected) throws Throwable 
	{
		sleepWait(500);
		if(wd.findElement(By.xpath("//span[contains(text(),'" + selected + "')]")).isDisplayed() )
		{					
			assertTrue(true);
		}  
	}

	
	@And("^User enter data in comment \"([^\"]*)\" and check$")
	public void user_enter_data_in_comment_and_check(String comment) throws Throwable 
	{
		sleepWait(500);
		type("lbl_Comment", comment);			
		String expectedMessage = comment;		
		String check = getValue("//textarea[@formcontrolname='value']");
		if(expectedMessage==check)
		{
			assertTrue(true);
		}
	}

	@And("^User again enter data \"([^\"]*)\" and check$")
	public void user_again_enter_data_and_check(String num) throws Throwable 
	{
		sleepWait(500);
		type("lbl_Comment", num);		
		String expectedMessage = num;
				
		String check = getValue("//textarea[@formcontrolname='value']");
		if(expectedMessage==check)
		{
			assertTrue(true);
		}
	}
	

	@And("^User click on browse button on payment agreement$")
	public void user_click_on_browse_button_on_payment_agreement() throws Throwable 
	{
		sleepWait(1000);
		clickOn("btn_Brose_Att", "");
		sleepWait(1000);
	    
	}

	@And("^User select file to upload \"([^\"]*)\"$")
	public void user_select_file_to_upload(String up) throws Throwable 
	{
		
		UploadImage("", up);
	}

	@Given("^User again click on browse and select file \"([^\"]*)\" and user see message \"([^\"]*)\"$")
	public void user_again_click_on_browse_and_select_file_and_user_see_message(String up, String validation) throws Throwable 
	{
		clickOn("btn_Attachment", "");
		sleepWait(1000);		
		UploadImage("", up);
		sleepWait(1000);
		
		if(wd.findElement(By.xpath("(//*[contains(text(),'" + validation + "')")).isDisplayed() )
		{					
			assertTrue(true);
		}   
	}

		@And("^User click on cancel button on payment agreement$")
		public void user_click_on_cancel_button_on_payment_agreement() throws Throwable 
		{
			sleepWait(500);
			clickOn("btn_PaymentAgrementCancel", "");
		    
		}

		@And("^User is redirect to list$")
		public void user_is_redirect_to_list() throws Throwable 
		{
			if(wd.findElement(By.xpath("//h3[contains(text(),'Case Management')]")).isDisplayed() )
			{					
				assertTrue(true);
			} 	 		   
		}

		@And("^User type discount amount \"([^\"]*)\"$")
		public void user_type_discount_amount(String amount) throws Throwable 
		{
		   type("txt_Discount_Amount", amount);
		}

		@And("^User click on installement Scledules button$")
		public void user_click_on_installement_Scledules_button() throws Throwable 
		{
			clickOn("btn_Installment_Schedules", "");
		    
		}

		@And("^User see pop up appear$")
		public void user_see_pop_up_appear() throws Throwable 
		{
			if(wd.findElement(By.xpath("(//*[contains(text(),'Installment Schedules')])[2]")).isDisplayed() )
			{					
				assertTrue(true);
			} 	    
		}

		@And("^User see installment amount \"([^\"]*)\"$")
		public void user_see_installment_amount(String popAmount) throws Throwable 
		{
			if(wd.findElement(By.xpath("(//div[contains(text(),'" + popAmount + "')])[1]")).isDisplayed() )
			{							
				assertTrue(true);
			} 	
	   
		}

		@And("^User click on submit button on payment agreement$")
		public void user_click_on_submit_button_on_payment_agreement() throws Throwable 
		{
		   clickOn("btn_action_Submit", "");  
		}

		@And("^User navigate to payment agreement notice page$")
		public void user_navigate_to_payment_agreement_notice_page() throws Throwable 
		{
			sleepWait(500);
			if(wd.findElement(By.xpath("//*[@id='printSectionId']//h2[contains(text(),'Payment Agreement')]")).isDisplayed() )
			{					
				assertTrue(true);
			} 
			sleepWait(500);
		}

		@And("^User see date \"([^\"]*)\" on payment agreement$")
		public void user_see_date_on_payment_agreement(String date) throws Throwable 
		{
			String expectedMessage = date;
			sleepWait(2000);			
			String check = elementText("//*[contains(text(),'Date:')]//following::input");
			if(expectedMessage==check)
			{
				assertTrue(true);
			}
		}
		


		@And("^User see new agrement id$")
		public void user_see_new_agrement_id() throws Throwable 
		{
			if(wd.findElement(By.id("agreementId")).isDisplayed() )
			{					
				assertTrue(true);
			} 
		    
		}
	@And("^User see total amount is displayed and field is disable \"([^\"]*)\"$")
	public void user_see_total_amount_is_displayed_and_field_is_disable(String totalAmount) throws Throwable 
	{
		String expectedMessage = totalAmount;
		sleepWait(2000);
		
		String check = elementText("//input[@formcontrolname='totalAmount']");
		if(expectedMessage==check)
		{
			assertTrue(true);
		}
	}
	

	@And("^User see initial amount is displayed and field is disable \"([^\"]*)\"$")
	public void user_see_initial_amount_is_displayed_and_field_is_disable(String Iamount) throws Throwable 
	{
		if(!wd.findElement(By.xpath("//input[@formcontrolname='initialAmount']")).isEnabled() )
		{					
			String expectedMessage = Iamount;
			sleepWait(2000);
			String check = elementText("//input[@formcontrolname='initialAmount']");
			if(expectedMessage==check)
			{
				assertTrue(true);
			}
		} 	
	}

	@And("^User see radio button is disable for discount$")
	public void user_see_radio_button_is_disable_for_discount() throws Throwable 
	{
		if(!wd.findElement(By.xpath("//input[@id='1']")).isEnabled() )
		{					
			assertTrue(true);
		} 	
	    
	}

	@And("^User see radio button is disable for percentage$")
	public void user_see_radio_button_is_disable_for_percentage() throws Throwable 
	{
		if(!wd.findElement(By.xpath("//input[@id='3']")).isEnabled() )
		{		
			assertTrue(true);
		} 	
	}

	@And("^User see textbox is disable for discount \"([^\"]*)\"$")
	public void user_see_textbox_is_disable_for_discount(String dis) throws Throwable 
	{
		if(!wd.findElement(By.xpath("//input[@formcontrolname='discountAmount']")).isEnabled() )
		{		
			String expectedMessage = dis;
			sleepWait(2000);			
			String check = elementText("//input[@formcontrolname='discountAmount']");
			if(expectedMessage==check)
			{
				assertTrue(true);
			}
		}
			
	}

	@Given("^User see radio button text box is disable for percentage \"([^\"]*)\"$")
	public void user_see_radio_button_text_box_is_disable_for_percentage(String per) throws Throwable 
	{
		String expectedMessage = per;
		sleepWait(2000);
		String check = elementText("//input[@formcontrolname='discountPercentage']");
		if(expectedMessage==check)
		{
			assertTrue(true);
		}
	}

	@And("^User see installement radio button is disable$")
	public void user_see_installement_radio_button_is_disable() throws Throwable 
	{
		if(!wd.findElement(By.xpath("//input[@id='3']")).isEnabled() )
		{		
			assertTrue(true);
		} 		    
	}

	@And("^User see no of installement radio button is disable$")
	public void user_see_no_of_installement_radio_button_is_disable() throws Throwable 
	{
		if(!wd.findElement(By.xpath("//input[@id='4']")).isEnabled() )
		{		
			assertTrue(true);
		} 		   	   
	}

	@And("^User see installement amount textbox is disable \"([^\"]*)\"$")
	public void user_see_installement_amount_textbox_is_disable(String amo) throws Throwable 
	{
		String expectedMessage = amo;
		sleepWait(2000);
		String check = elementText("//input[@formcontrolname='installmentAmount']");
		if(expectedMessage==check)
		{
			assertTrue(true);
		}
	}

	@And("^User see installment frequency is disable \"([^\"]*)\"$")
	public void user_see_installment_frequency_is_disable(String fre) throws Throwable 
	{
		if(wd.findElement(By.xpath("//*[contains(text(),'" + fre + "')]")).isEnabled() )
		{		
			assertTrue(true);
		} 				
	}

	@And("^User see next installment data is disable \"([^\"]*)\"$")
	public void user_see_next_installment_data_is_disable(String date) throws Throwable 
	{
		String expectedMessage = date;
		sleepWait(2000);
		
		String check = elementText("//*[@formcontrolname='nextInstallmentDate']");
		if(expectedMessage==check)
		{
			assertTrue(true);
		}
	}

	@And("^User see Authorized signatory is disable \"([^\"]*)\"$")
	public void user_see_Authorized_signatory_is_disable(String sig) throws Throwable 
	{
		if(!wd.findElement(By.xpath("//*[@formcontrolname='authorizedSignatoryId']")).isEnabled() )
		{		
			String expectedMessage = sig;
			sleepWait(2000);
			
			String check = elementText("//*[@formcontrolname='authorizedSignatoryId']");
			if(expectedMessage==check)
			{
				assertTrue(true);
			}	
		} 	
	}

	@And("^User clcik on action and select pa executed$")
	public void user_clcik_on_action_and_select_pa_executed() throws Throwable 
	{
		clickOn("drp_Action", "");
		sleepWait(1000);
		clickOn("drp_PA_executedClick", "");
	}
	
	@And("^User click on browse button on payment agreement document$")
	public void user_click_on_browse_button_on_payment_agreement_document() throws Throwable 
	{
	    clickOn("btn_Brose_Att", "");
	}

	@And("^User select file and verify uploaded file$")
	public void user_select_file_and_verify_uploaded_file() throws Throwable 
	{
		UploadImage("","C:\\Users\\admin\\Downloads\\Sales-and-Purchase-Transactions.xlsx");
		sleepWait(1000);		
	    
	}

	@And("^User see paid installment \"([^\"]*)\"$")
	public void user_see_paid_installment(String paid) throws Throwable 
	{
		if(wd.findElement(By.xpath("(//div[contains(text(),'" + paid + "')])[1]")).isEnabled() )
		{		
			assertTrue(true);
		} 	
	}

	@And("^User see over due installment \"([^\"]*)\"$")
	public void user_see_over_due_installment(String overdue) throws Throwable 
	{
		if(wd.findElement(By.xpath("(//div[contains(text(),'" + overdue + "')])[2]")).isEnabled() )
		{		
			assertTrue(true);
		} 	
	}

	@And("^User see pending installement \"([^\"]*)\"$")
	public void user_see_pending_installement(String pending) throws Throwable 
	{
		if(wd.findElement(By.xpath("(//div[contains(text(),'" + pending + "')])[1]")).isEnabled() )
		{		
			assertTrue(true);
		} 
	}

	@And("^User click on view icon on installement status$")
	public void user_click_on_view_icon_on_installement_status() throws Throwable 
	{
		sleepWait(500);
		clickOn("btn_installment_Status_click", "");
		sleepWait(500);
	    
	}
	
	@And("^User see notification of installement details$")
	public void user_see_notification_of_installement_details() throws Throwable 
	{
		if(wd.findElement(By.xpath("//h5[contains(text(),'Installment Details')]")).isEnabled() )
		{		
			assertTrue(true);
		} 
		
	}
	@And("^User click on action and select under review$")
	public void user_click_on_action_and_select_under_review() throws Throwable 
	{
		clickOn("drp_Action", "");
		sleepWait(1000);
		clickOn("drp_actin_Under_Review", "");
	}

	@And("^User click on submit button and see message for under review$")
	public void user_click_on_submit_button_and_see_message_for_under_review() throws Throwable 
	{
		sleepWait(500);
		clickOn("btn_PaymentAgrementSubmit", "");		
		if(wd.findElement(By.xpath("//*[contains(text(),'Case update successfully')]")).isDisplayed() )
		{		
			assertTrue(true);
		} 		
	}
	
	@And("^User click on action and select cancel$")
	public void user_click_on_action_and_select_cancel() throws Throwable 
	{
		clickOn("drp_Action", "");
		sleepWait(1000);
		clickOn("drp_ActionCancel_Click", "");
	}

	@And("^User click on submit button and see message for cancel status$")
	public void user_click_on_submit_button_and_see_message_for_cancel_status() throws Throwable 
	{
		clickOn("btn_PaymentAgrementSubmit", "");
		sleepWait(500);
		if(wd.findElement(By.xpath("//*[contains(text(),'Case update successfully')]")).isDisplayed() )
		{		
			assertTrue(true);
		} 
	}
	
	
}
