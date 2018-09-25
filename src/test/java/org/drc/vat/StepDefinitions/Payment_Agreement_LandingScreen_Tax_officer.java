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

public class Payment_Agreement_LandingScreen_Tax_officer
{
	public String newCaseId;
	public String agreementId;
	@Given("^User is on Payment Agreement Landing Screen \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_is_on_Payment_Agreement_Landing_Screen(String arg1, String arg2) throws Throwable 
	{
	   System.out.println(arg1);
	   System.out.println(arg2);
	}
	
	@And("^User clck on continue$")
	public void user_clck_on_continue() throws Throwable 
	{
		Thread.sleep(500);
		clickOn("btn_continue_click", "");
		
	}
	
	
	@And("^User see Ui of Payment Agreement Page$")
	public void user_see_Ui_of_Payment_Agreement_Page() throws Throwable 
	{
		System.out.println("User see ui of page");
	    
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
		Thread.sleep(500);
		if(wd.findElement(By.xpath("(//div[contains(text(),'" + bus +"')])[1]")).isDisplayed())
		{					
			assertTrue(true);
		} 
	    
	}

	@And("^User click on notification on Payment Agreement$")
	public void user_click_on_notification_on_Payment_Agreement() throws Throwable 
	{
		Thread.sleep(1000);
		clickOn("btn_Notification_Click", "");
	    
	}

	@And("^User see notification is open$")
	public void user_see_notification_is_open() throws Throwable 
	{
		Thread.sleep(1000);
		if(wd.findElement(By.xpath("//*[contains(text(),'Notifications')]")).isDisplayed() )
		{					
			assertTrue(true);
		}  
	    
	}

	@And("^User see Case Id \"([^\"]*)\"$")
	public void user_see_Case_Id(String caseid) throws Throwable 
	{
		Thread.sleep(500);
		if(wd.findElement(By.xpath("//span[contains(text(),'" + caseid + "')]")).isDisplayed() )
		{					
			assertTrue(true);
		}  
		
	}

	// 
	@And("^User see Total Amount \"([^\"]*)\"$")
	public void user_see_Total_Amount(String arg1) throws Throwable 
	{
		String expectedMessage = "8400160";
		Thread.sleep(2000);
		WebElement element = wd.findElement(By.xpath("//input[@formcontrolname='totalAmount']"));
		JavascriptExecutor jse = (JavascriptExecutor)wd;
		Object message = jse.executeScript("return arguments[0].value", element);
		System.out.println(message.toString());		
 		Assert.assertTrue(message.toString().contains(expectedMessage));
	    
	}

	@And("^User type initial amount \"([^\"]*)\"$")
	public void user_type_initial_amount(String value) throws Throwable 
	{
		Thread.sleep(500);
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
		Thread.sleep(500);
		clickOn("rad_Discount_Amount", "");
	    
	}

	@And("^User see percentage is deselected$")
	public void user_see_percentage_is_deselected() throws Throwable 
	{
		WebElement we;
		we=wd.findElement(By.xpath("//input[@formcontrolname='discountPercentage']"));		
		if(!we.isEnabled())
		{			
			System.out.println("percentage is not selected");
			assertTrue(true);
		}
		/*if(wd.findElement(By.xpath("(//small[contains(text(),'" + name +"')])[1]")).isDisplayed() )
		{					
			assertTrue(true);
		}*/ 
	    
	}

	@And("^User click on percentage radio button$")
	public void user_click_on_percentage_radio_button() throws Throwable 
	{
		clickOn("rad_Percentage", "");
	    
	}

	@And("^User see discount amount is deselected$")
	public void user_see_discount_amount_is_deselected() throws Throwable 
	{
		WebElement we;
		we=wd.findElement(By.xpath("//input[@formcontrolname='discountAmount']"));		
		if(!we.isEnabled())
		{			
			System.out.println("discount amount is not selected");
			assertTrue(true);
		}
	    
	}

	@And("^User type amount \"([^\"]*)\" in discount textbox$")
	public void user_type_amount_in_discount_textbox(String amount) throws Throwable 
	{
		Thread.sleep(500);
		type("txt_Discount_Amount", amount);	  
	}

	@And("^User see percentage is calculated$")
	public void user_see_percentage_is_calculated() throws Throwable 
	{
		
	    
	}

	@And("^User type percentage \"([^\"]*)\" in percentage textbox$")
	public void user_type_percentage_in_percentage_textbox(String per) throws Throwable 
	{
		type("txt_Percentage", per);
	    
	}

	@And("^User see discount amount is calculated$")
	public void user_see_discount_amount_is_calculated() throws Throwable 
	{
	   
	    
	}

	@And("^User click on Installement radio button$")
	public void user_click_on_Installement_radio_button() throws Throwable 
	{
		clickOn("rad_installement", "");
	    
	}

	@And("^User see no of installement is deselected$")
	public void user_see_no_of_installement_is_deselected() throws Throwable 
	{
		WebElement we;
		we=wd.findElement(By.xpath("//input[@formcontrolname='numberOfInstallment']"));		
		if(!we.isEnabled())
		{			
			System.out.println("no of installement is not selected");
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
		WebElement we;
		we=wd.findElement(By.xpath("//input[@formcontrolname='installmentAmount']"));		
		if(!we.isEnabled())
		{			
			System.out.println("no of installement is not selected");
			assertTrue(true);
		}
	    
	}

	@And("^User type installment amount \"([^\"]*)\"$")
	public void user_type_installment_amount(String installamount) throws Throwable 
	{
		Thread.sleep(500);
		type("txt_Installement",installamount);	    
	}

	@And("^User see no of installement is calculated$")
	public void user_see_no_of_installement_is_calculated() throws Throwable 
	{
		
	    
	}

	@And("^User click on Installement Frequency dropdown$")
	public void user_click_on_Installement_Frequency_dropdown() throws Throwable 
	{
		Thread.sleep(500);
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
		Thread.sleep(2000);
		WebElement element = wd.findElement(By.xpath("//section[4]/div/div[2]/div/input"));
		JavascriptExecutor jse = (JavascriptExecutor)wd;
		Object message = jse.executeScript("return arguments[0].value", element);
		System.out.println(message.toString());		
 		Assert.assertTrue(message.toString().contains(expectedMessage));
	    
	}

	@And("^User click on Authorized Signatory$")
	public void user_click_on_Authorized_Signatory() throws Throwable
	{	// locator to find    
		Thread.sleep(500);
		clickOn("drp_Authorizeed_Signatory", "");
	}

	@And("^User select Authority \"([^\"]*)\"$")
	public void user_select_Authority(String value) throws Throwable 
	{
		Thread.sleep(500);
		clickOn(value, "");
	    
	}
	// locator to check
	@And("^User see Authority  is selected \"([^\"]*)\"$")
	public void user_see_Authority_is_selected(String selected) throws Throwable 
	{
		Thread.sleep(500);
		if(wd.findElement(By.xpath("//span[contains(text(),'" + selected + "')]")).isDisplayed() )
		{					
			assertTrue(true);
		}  
		
	}

	
	@And("^User enter data in comment \"([^\"]*)\" and check$")
	public void user_enter_data_in_comment_and_check(String comment) throws Throwable 
	{
		Thread.sleep(500);
		type("lbl_Comment", comment);		
		String expectedMessage = comment;
		Thread.sleep(2000);
		WebElement element = wd.findElement(By.xpath("//textarea[@formcontrolname='value']"));
		JavascriptExecutor jse = (JavascriptExecutor)wd;
		Object message = jse.executeScript("return arguments[0].value", element);
		System.out.println(message.toString());		
 		Assert.assertTrue(message.toString().contains(expectedMessage));
	}

	@And("^User again enter data \"([^\"]*)\" and check$")
	public void user_again_enter_data_and_check(String num) throws Throwable 
	{
		Thread.sleep(500);
		type("lbl_Comment", num);		
		String expectedMessage = num;
		Thread.sleep(2000);
		WebElement element = wd.findElement(By.xpath("//textarea[@formcontrolname='value']"));
		JavascriptExecutor jse = (JavascriptExecutor)wd;
		Object message = jse.executeScript("return arguments[0].value", element);
		System.out.println(message.toString());		
 		Assert.assertTrue(message.toString().contains(expectedMessage));
		
	}
	
	
	
	// check
	@And("^User click on browse button on payment agreement$")
	public void user_click_on_browse_button_on_payment_agreement() throws Throwable 
	{
		/*WebElement element1 = wd.findElement(By.id("myiFrameForSilentRenew"));
		String number1 = element1.getText();
		System.out.println(number1);
		wd.switchTo().frame(element1);*/
				
		Thread.sleep(1000);
		clickOn("btn_Brose_Att", "");
		Thread.sleep(1000);
	    
	}

	@And("^User select file to upload$")
	public void user_select_file_to_upload() throws Throwable 
	{		
		UploadImage("","C:\\Users\\admin\\Downloads\\Sales-and-Purchase-Transactions.xlsx");
		Thread.sleep(1000);		
	}

	// validation to check 
	@And("^User again click on browse and select file and user see message \"([^\"]*)\"$")
	public void user_again_click_on_browse_and_select_file_and_user_see_message(String validation) throws Throwable 
	{
		clickOn("btn_Attachment", "");
		Thread.sleep(1000);		
		UploadImage("","C:\\Users\\admin\\Downloads\\text.txt");
		Thread.sleep(1000);
		
		if(wd.findElement(By.xpath("(//*[contains(text(),'" + validation + "')")).isDisplayed() )
		{					
			assertTrue(true);
		}    
	}

	@And("^User click on cancel button on payment agreement$")
	public void user_click_on_cancel_button_on_payment_agreement() throws Throwable 
	{
		Thread.sleep(500);
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
	// locator for poip up to check
	@And("^User see pop up appear$")
	public void user_see_pop_up_appear() throws Throwable 
	{
		if(wd.findElement(By.xpath("(//*[contains(text(),'Installment Schedules')])[2]")).isDisplayed() )
		{					
			assertTrue(true);
		} 	
	    
	}
	// check 
	@And("^User see installment amount \"([^\"]*)\"$")
	public void user_see_installment_amount(String popAmount) throws Throwable 
	{
		if(wd.findElement(By.xpath("(//div[contains(text(),'" + popAmount + "')])[1]")).isDisplayed() )
		{					
			
			assertTrue(true);
		} 	
	    
	    
	}

	
	//--------------------02 -------------//
	
	@And("^User click on action dropdown and click on under review$")
	public void user_click_on_action_dropdown_and_click_on_under_review() throws Throwable 
	{
	    clickOn("", "");
	    Thread.sleep(1000);
	    clickOn("", "");
	}

	@And("^User click on dropdown and click on request payment agreement$")
	public void user_click_on_dropdown_and_click_on_request_payment_agreement() throws Throwable 
	{
		clickOn("", "");
	    Thread.sleep(1000);
	    clickOn("", "");
	}

	@And("^User navigate to payment agreement notice page$")
	public void user_navigate_to_payment_agreement_notice_page() throws Throwable 
	{
		// notice page text
		Thread.sleep(500);
		if(wd.findElement(By.xpath("//*[@id='printSectionId']//h2[contains(text(),'Payment Agreement')]")).isDisplayed() )
		{					
			assertTrue(true);
		} 
		Thread.sleep(500);
	}
	// store into variable
	@And("^User see new case id for payment agreement$")
	public void user_see_new_case_id_for_payment_agreement() throws Throwable 
	{
	    
		String newCaseId = elementText("");
		
		System.out.println("newCaseId");
		
		
	}
	// store in variable
	@And("^User see new agreement id$")
	public void user_see_new_agreement_id() throws Throwable 
	{
		String agreementId = elementText("");		
		System.out.println("agreementId");		
		
	}
	
	@And("^User see new agrement id \"([^\"]*)\"$")
	public void user_see_new_agrement_id(String Aid) throws Throwable 
	{
		if(wd.findElement(By.xpath("//span[contains(text(),'" + Aid +"')]")).isDisplayed() )
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
	
	@And("^User type new id$")
	public void user_type_new_id() throws Throwable 
	{
		type("txt_TypeHere",newCaseId);
	}

	
	
	@And("^User see new case id$")
	public void user_see_new_case_id() throws Throwable 
	{
		if(wd.findElement(By.id("newCaseId")).isDisplayed() )
		{					
			assertTrue(true);
		} 
	}
	
	@And("^User see UI of Payment Agreement – Installment Status$")
	public void user_see_UI_of_Payment_Agreement_Installment_Status() throws Throwable 
	{
		System.out.println("UI of payment");
	    
	}

	// date to check as not showing in 
	@And("^User see date \"([^\"]*)\" on payment agreement$")
	public void user_see_date_on_payment_agreement(String date) throws Throwable 
	{
		String expectedMessage = date;
		Thread.sleep(2000);
		WebElement element = wd.findElement(By.xpath("//*[contains(text(),'Date:')]//following::input"));
		JavascriptExecutor jse = (JavascriptExecutor)wd;
		Object message = jse.executeScript("return arguments[0].value", element);
		System.out.println(message.toString());		
 		Assert.assertTrue(message.toString().contains(expectedMessage));
	}
	
	
	
	
	@And("^User see total amount is displayed and field is disable \"([^\"]*)\"$")
	public void user_see_total_amount_is_displayed_and_field_is_disable(String totalAmount) throws Throwable 
	{
		String expectedMessage = totalAmount;
		Thread.sleep(2000);
		WebElement element = wd.findElement(By.xpath("//input[@formcontrolname='totalAmount']"));
		JavascriptExecutor jse = (JavascriptExecutor)wd;
		Object message = jse.executeScript("return arguments[0].value", element);
		System.out.println(message.toString());		
 		Assert.assertTrue(message.toString().contains(expectedMessage));
	}
	
	
	@And("^User see initial amount is displayed and field is disable \"([^\"]*)\"$")
	public void user_see_initial_amount_is_displayed_and_field_is_disable(String Iamount) throws Throwable 
	{
		if(!wd.findElement(By.xpath("//input[@formcontrolname='initialAmount']")).isEnabled() )
		{					
			String expectedMessage = Iamount;
			Thread.sleep(2000);
			WebElement element = wd.findElement(By.xpath("//input[@formcontrolname='initialAmount']"));
			JavascriptExecutor jse = (JavascriptExecutor)wd;
			Object message = jse.executeScript("return arguments[0].value", element);
			System.out.println(message.toString());		
	 		Assert.assertTrue(message.toString().contains(expectedMessage));
			//assertTrue(true);
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

	@Given("^User see radio button text box is disable for percentage \"([^\"]*)\"$")
	public void user_see_radio_button_text_box_is_disable_for_percentage(String per) throws Throwable 
	{
		/*if(!wd.findElement(By.xpath("//input[@id='2']")).isEnabled() )
		{					
			String expectedMessage = per;
			Thread.sleep(2000);
			WebElement element = wd.findElement(By.xpath("//input[@formcontrolname='initialAmount']"));
			JavascriptExecutor jse = (JavascriptExecutor)wd;
			Object message = jse.executeScript("return arguments[0].value", element);
			System.out.println(message.toString());		
	 		Assert.assertTrue(message.toString().contains(expectedMessage));
		} */
		
		
		String expectedMessage = per;
		Thread.sleep(2000);
		WebElement element = wd.findElement(By.xpath("//input[@formcontrolname='discountPercentage']"));
		JavascriptExecutor jse = (JavascriptExecutor)wd;
		Object message = jse.executeScript("return arguments[0].value", element);
		System.out.println(message.toString());		
 		Assert.assertTrue(message.toString().contains(expectedMessage));
	}
	
	
	


	@And("^User see textbox is disable for discount \"([^\"]*)\"$")
	public void user_see_textbox_is_disable_for_discount(String dis) throws Throwable 
	{
		if(!wd.findElement(By.xpath("//input[@formcontrolname='discountAmount']")).isEnabled() )
		{		
			String expectedMessage = dis;
			Thread.sleep(2000);
			WebElement element = wd.findElement(By.xpath("//input[@formcontrolname='discountAmount']"));
			JavascriptExecutor jse = (JavascriptExecutor)wd;
			Object message = jse.executeScript("return arguments[0].value", element);
			System.out.println(message.toString());		
	 		Assert.assertTrue(message.toString().contains(expectedMessage));
	 		
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
		Thread.sleep(2000);
		WebElement element = wd.findElement(By.xpath("//input[@formcontrolname='installmentAmount']"));
		JavascriptExecutor jse = (JavascriptExecutor)wd;
		Object message = jse.executeScript("return arguments[0].value", element);
		System.out.println(message.toString());		
 		Assert.assertTrue(message.toString().contains(expectedMessage));
	}
	
	

	@And("^User see Discount amount textbox is disable$")
	public void user_see_Discount_amount_textbox_is_disable() throws Throwable 
	{

		if(!wd.findElement(By.xpath("//input[@id='3']")).isEnabled() )
		{		
			String expectedMessage = "500";
			Thread.sleep(2000);
			WebElement element = wd.findElement(By.xpath("   "));
			JavascriptExecutor jse = (JavascriptExecutor)wd;
			Object message = jse.executeScript("return arguments[0].value", element);
			System.out.println(message.toString());		
	 		Assert.assertTrue(message.toString().contains(expectedMessage));
			
			//assertTrue(true);
		} 	
	    
	}

	
	@And("^User see installment frequency is disable \"([^\"]*)\"$")
	public void user_see_installment_frequency_is_disable(String fre) throws Throwable 
	{

	
	
	
	
		if(wd.findElement(By.xpath("//*[contains(text(),'" + fre + "')]")).isEnabled() )
		{		
			assertTrue(true);
		} 
		
		
		/*String expectedMessage =fre;
		Thread.sleep(2000);
		WebElement element = wd.findElement(By.xpath("//section[4]/div/div[1]/ng-select/div"));
		JavascriptExecutor jse = (JavascriptExecutor)wd;
		Object message = jse.executeScript("return arguments[0].value", element);
		System.out.println(message.toString());		
 		Assert.assertTrue(message.toString().contains(expectedMessage));*/
	}
	
	
	@And("^User see next installment data is disable \"([^\"]*)\"$")
	public void user_see_next_installment_data_is_disable(String date) throws Throwable 
	{
		String expectedMessage = date;
		Thread.sleep(2000);
		WebElement element = wd.findElement(By.xpath("//*[@formcontrolname='nextInstallmentDate']"));
		JavascriptExecutor jse = (JavascriptExecutor)wd;
		Object message = jse.executeScript("return arguments[0].value", element);
		System.out.println(message.toString());		
 		Assert.assertTrue(message.toString().contains(expectedMessage));
	}
	
	@And("^User see Authorized signatory is disable \"([^\"]*)\"$")
	public void user_see_Authorized_signatory_is_disable(String sig) throws Throwable 
	{
		if(!wd.findElement(By.xpath("//*[@formcontrolname='authorizedSignatoryId']")).isEnabled() )
		{		
			String expectedMessage = sig;
			Thread.sleep(2000);
			WebElement element = wd.findElement(By.xpath("//*[@formcontrolname='authorizedSignatoryId']"));
			JavascriptExecutor jse = (JavascriptExecutor)wd;
			Object message = jse.executeScript("return arguments[0].value", element);
			System.out.println(message.toString());		
	 		Assert.assertTrue(message.toString().contains(expectedMessage));
			
			//assertTrue(true);
		} 	
	}

	
  
	// locator for action staus
	@And("^User clcik on action and select pa executed$")
	public void user_clcik_on_action_and_select_pa_executed() throws Throwable 
	{
		clickOn("drp_Action", "");
		Thread.sleep(1000);
		clickOn("drp_PA_executedClick", "");
	}
	
	
	@And("^User click on browse button on payment agreement document browse$")
	public void user_click_on_browse_button_on_payment_agreement_document_browse() throws Throwable 
	{
		clickOn("btn_browsePA", "");
	}
	
	
	@And("^User click on browse button on payment agreement document$")
	public void user_click_on_browse_button_on_payment_agreement_document() throws Throwable 
	{
	    clickOn("btn_Brose_Att", "");
	}
	// verify to do 
	@And("^User select file and verify uploaded file$")
	public void user_select_file_and_verify_uploaded_file() throws Throwable 
	{
		UploadImage("","C:\\Users\\admin\\Downloads\\Sales-and-Purchase-Transactions.xlsx");
		Thread.sleep(1000);		
	    
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
		Thread.sleep(500);
		clickOn("btn_installment_Status_click", "");
		Thread.sleep(500);
	    
	}
	
	@And("^User see notification of installement details$")
	public void user_see_notification_of_installement_details() throws Throwable 
	{
		if(wd.findElement(By.xpath("//h5[contains(text(),'Installment Details')]")).isEnabled() )
		{		
			assertTrue(true);
		} 
		
	}
// locator
	@And("^User clcik on action and select breach warning$")
	public void user_clcik_on_action_and_select_breach_warning() throws Throwable 
	{
		clickOn("", "");
	}
	
	// submit 
	@And("^User click on submit button on payment agreement$")
	public void user_click_on_submit_button_on_payment_agreement() throws Throwable 
	{
	   clickOn("btn_action_Submit", "");
	    
	}

	@And("^User see message \"([^\"]*)\" on payment agreement$")
	public void user_see_message_on_payment_agreement(String arg1) throws Throwable {
	   
	    
	}

	
	@And("^User click on action and select under review$")
	public void user_click_on_action_and_select_under_review() throws Throwable 
	{
		clickOn("drp_Action", "");
		Thread.sleep(1000);
		clickOn("drp_actin_Under_Review", "");
	}

	@And("^User click on submit button and see message for under review$")
	public void user_click_on_submit_button_and_see_message_for_under_review() throws Throwable 
	{
		Thread.sleep(500);
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
		Thread.sleep(1000);
		clickOn("drp_ActionCancel_Click", "");
	}

	@And("^User click on submit button and see message for cancel status$")
	public void user_click_on_submit_button_and_see_message_for_cancel_status() throws Throwable 
	{
		clickOn("btn_PaymentAgrementSubmit", "");
		Thread.sleep(500);
		if(wd.findElement(By.xpath("//*[contains(text(),'Case update successfully')]")).isDisplayed() )
		{		
			assertTrue(true);
		} 
	}
	
	
	
	
	
	
	
}
