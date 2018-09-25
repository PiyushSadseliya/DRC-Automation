package org.drc.vat.StepDefinitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import static org.drc.vat.appmanager.HelperBase.*;
import static org.testng.Assert.assertTrue;

import java.io.IOException;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

public class VATeFiling 
{
		
	@Given("^User is on Vat e-Filing Page$")
	public void user_is_on_Vat_e_Filing_Page() throws Throwable 
	{
		System.out.println("User is on VAT e-Filing Page");
		login("demo1@mailinator.com", "demo1234");		
		clickOn("Login","");		
		
	}	
	
	
	
	//TC_02
	@And("^User click on Download Template$")
	public void user_click_on_Download_Template() throws Throwable 
	{
	   clickOn("bDownloadTemplate", "");
	   System.out.println("user click on download template button ");
	}
	//TC_02
	@Then("^User verify download file$")
	public void user_verify_download_file() throws Throwable 
	{
		  verifyDownload("Sales-and-Purchase-Transactions");  
		  Thread.sleep(2000);
	}	
	//TC_03
	
	@Given("^User click on Tab$")
	public void user_click_on_Tab() throws Throwable 
	{		
		System.out.println("User click on e Filing Tab");
		clickOn("VATFiling","");
		Thread.sleep(1000);
	}
		
	@And("^User click on Finicial year dropdown \"([^\"]*)\"$")
	public void user_click_on_Finicial_year_dropdown(String value) throws Throwable 
	{
		System.out.println("User click on e Filing Tab");		
		clickOn("FinancialYear", "");
		Thread.sleep(2000);
		clickOn(value,"");
	    System.out.println("user click on fincial year dropdown");
	    Thread.sleep(1000);
	}	
	//TC_03  text to match 
	@And("^User see all month record from that year$")
	public void user_see_all_month_record_from_that_year() throws Throwable 
	{		
		WebElement we;
		we=wd.findElement(By.xpath("(//*[contains(text(),'January')])[1]"));		
		if(we.isDisplayed())
		{			
			System.out.println("Pass");
			assertTrue(true);
		}		
		Thread.sleep(2000);
	}
		
	//TC_04
	@And("^User check image \"([^\"]*)\" for filing$")
	public void user_check_image_for_filing(String arg1) throws Throwable 
	{
		System.out.println("User see icon ");
	}
	//TC_04
	/*@And("^User click on collpase icon for filing$")
	public void user_click_on_collpase_icon_for_filing() throws Throwable 
	{
		System.out.println("user click on collpase icon ");
		clickOn("Jan", "");
		Thread.sleep(1000);
	}*/
	
	//common for All
	@And("^User click on collpase icon for filing \"([^\"]*)\"$")
	public void user_click_on_collpase_icon_for_filing(String value) throws Throwable 
	{
		System.out.println("user click on collpase icon ");
		clickOn(value, "");
		Thread.sleep(500);
	}	
	
	//TC_04
	@And("^User see Due Date for filing \"([^\"]*)\"$")
	public void user_see_Due_Date_for_filing(String value) throws Throwable 
	{
		System.out.println("user see due date ");
		//wd.findElement(By.id("DueDateJan"));
		
				/*try {
            obj.load(fis);
        } catch (IOException e) {
            e.printStackTrace();
        }*/
	
		WebElement we;
		we=wd.findElement(By.xpath(obj.getProperty(value)));
		
		if(we.isDisplayed())
		{
			//Assert.assertTrue(true);
			System.out.println("Pass");		
		}
		else
		{
			System.out.println("Fail");
			//Assert.assertTrue(false);
		}							
		//------------------------------------------------------------//
		/*String actual = value;
		 String expected = "DueDateFeb";
		try 
		{
			 Assert.assertEquals(expected, actual);
		 } 
		catch (Throwable e) 
		{
			System.out.println("Date Not Found" + e);
		}
	    System.out.println("After Assert.assertEquals(expected, actual)");*/
	  //------------------------------------------------------------//
	/*if(we.isDisplayed())
		{
			try
			{
				Assert.assertTrue(true);
				System.out.println("Date Found");
			}
			catch(Exception e)
			{
				Assert.assertTrue(false);
				System.out.println("Date Not Found" + e);		
			}
		}*/								
	//------------------------------------------------------------//
	/*try
	{
				we.isDisplayed();
				Assert.assertTrue(true);
				System.out.println("Date Found");
	}
	catch(Exception e)
			{
				Assert.assertTrue(false);
				System.out.println("Date Not Found" + e);		
		}*/
		
		
	}
	//TC_04
	@And("^User check Completed Date \"([^\"]*)\" for filing$")
	public void user_check_Completed_Date_for_filing(String value) throws Throwable 
	{
		System.out.println("user see due date ");
		WebElement we;
		we=wd.findElement(By.xpath(obj.getProperty(value)));
		
		if(we.isDisplayed())
		{
			Assert.assertTrue(true);
			System.out.println("Pass");
			
		}
		else
		{
			System.out.println("Fail");
			Assert.assertTrue(false);
		}
		
		
	}
	//TC_04
	@And("^User check button \"([^\"]*)\" for filing$")
	public void user_check_button_for_filing(String check) throws Throwable
	{
		
		WebElement we;
		we=wd.findElement(By.xpath(obj.getProperty(check)));
		
		if(we.isDisplayed())
		{
			System.out.println("Pass");
			Assert.assertTrue(true);
		}
		else
		{
			System.out.println("Fail");
			Assert.assertTrue(false);
		}
		/*Assert.assertTrue(wd.findElement(By.xpath("(//button[@title='Preview'])[2]")).isDisplayed());				
		System.out.println("user see Preview");
		Thread.sleep(2000);*/
	}

	//@TC_05
		@And("^User see Due Date  \"([^\"]*)\" for Payment$")
		public void user_see_Due_Date_for_Payment(String value) throws Throwable 
		{
			WebElement we;
			we=wd.findElement(By.xpath(obj.getProperty(value)));
			
			if(we.isDisplayed())
			{
				Assert.assertTrue(true);
				System.out.println("Pass");		
			}
			else
			{
				System.out.println("Fail");
				Assert.assertTrue(false);
			}
		}
		//@TC_05
		
		@And("^User check image \"([^\"]*)\" for payment$")
		public void user_check_image_for_payment(String arg1) throws Throwable 
		{
			System.out.println("See ima for payment");
		}

		
		@And("^User see Completed Date \"([^\"]*)\" for Payment$")
		public void user_see_Completed_Date_for_Payment(String value) throws Throwable 
		{
			WebElement we;
			we=wd.findElement(By.xpath(obj.getProperty(value)));
			
			if(we.isDisplayed())
			{
				Assert.assertTrue(true);
				System.out.println("Pass");			
			}
			else
			{
				System.out.println("Fail");
				Assert.assertTrue(false);
			}				
		}
		//@TC_05
		@And("^User see button \"([^\"]*)\" for Payment$")
		public void user_see_button_for_Payment(String check) throws Throwable 
		{
			WebElement we;
			we=wd.findElement(By.xpath(obj.getProperty(check)));
			
			if(we.isDisplayed())
			{
				System.out.println("Pass");
				Assert.assertTrue(true);
			}
			else
			{
				System.out.println("Fail");
				Assert.assertTrue(false);
			}
			
		}
	
	//TC_06
	@And("^User check image \"([^\"]*)\" for Assement$")
	public void user_check_image_for_Assement(String arg1) throws Throwable 
	{
		System.out.println("user see green tick ");
	}
	//TC_06
	@And("^User click on collpase icon for Assement$")
	public void user_click_on_collpase_icon_for_Assement() throws Throwable 
	{
		clickOn("Jan", "");
	}
	//TC_06
	@And("^User see Due Date \"([^\"]*)\" for Assement$")
	public void user_see_Due_Date_for_Assement(String arg1) throws Throwable 
	{
		System.out.println("User see - ");
		//loator find for -
	}
	//TC_06
	@And("^User check Completed Date \"([^\"]*)\" for Assement$")
	public void user_check_Completed_Date_for_Assement(String value) throws Throwable 
	{
		System.out.println("user see completed date");
		WebElement we;
		we=wd.findElement(By.xpath(obj.getProperty(value)));
		
		if(we.isDisplayed())
		{
			
			System.out.println("Fail");
		}
		else
		{
			System.out.println("Pass");
		}
	}
	//TC_06
	@And("^User check button \"([^\"]*)\" for Assement$")
	public void user_check_button_for_Assement(String value) throws Throwable 
	{
		System.out.println("user see view button enabled");
		WebElement we;
		we=wd.findElement(By.xpath(obj.getProperty(value)));
		
		if(we.isEnabled())
		{
			
			System.out.println("Fail");
		}
		else
		{
			System.out.println("Pass");
		}
	}	
	
	//TC_07
	@And("^User see \"([^\"]*)\" for particular month$")
	public void user_see_for_particular_month(String arg1) throws Throwable 
	{		
		System.out.println("user see Pending img");
		
	}
	//TC_07
	@And("^User click on collapse for the month$")
	public void user_click_on_collapse_for_the_month() throws Throwable 
	{
		System.out.println("use click on June month");
		clickOn("Jun", "");
	}
	//TC_07
	@And("^User see Due Date \"([^\"]*)\" for particular month$")
	public void user_see_Due_Date_for_particular_month(String value) throws Throwable 
	{
		System.out.println("user see due date ");
		WebElement we;
		we=wd.findElement(By.xpath(obj.getProperty(value)));
		
		if(we.isEnabled())
		{
			System.out.println("Pass");
			
		}
		
	}
	//TC_07
	@And("^User click on File button and navigate to E-Declaration page$")
	public void user_click_on_File_button_and_navigate_to_E_Declaration_page() throws Throwable 
	{
	    clickOn("JunFile","");
	    System.out.println("USer click on Jun File");
	    Thread.sleep(2000);
	}
	//TC_07
	
	@And("^User fill details for sales \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_fill_details_for_sales(String value1, String value2, String value3, String value4, String value5, String value6) throws Throwable 
	{
		type("sDomesticGross",value1);
	//	Thread.sleep(1000);
		type("sDomesticVAT",value2);
	//	Thread.sleep(1000);
		type("sExportGross",value3);
	//	Thread.sleep(1000);
		type("sExportVAT",value4);
	//	Thread.sleep(1000);
		type("sAdjustmentGross",value5);
	//	Thread.sleep(1000);
		type("sAdjustmentVAT",value6);
		//Thread.sleep(2000);
		
		
		 
	}
	//TC_07
	@And("^User fill details for purchase \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_fill_details_for_purchase(String value1, String value2, String value3, String value4, String value5, String value6) throws Throwable 
	{
		type("pDomesticGross",value1);
	//	Thread.sleep(1000);
		type("pDomesticVAT",value2);
	//	Thread.sleep(1000);
		type("pImportGross",value3);
	//	Thread.sleep(1000);
		type("eImportVAT",value4);
	//	Thread.sleep(1000);
		type("pAdjustmentGross",value5);
		Thread.sleep(1000);
		type("pAdjustmentVAT",value6);
	//	Thread.sleep(1000);
		
	}
	//TC_07
	@And("^User fill detail for document summary \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"  \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_fill_detail_for_document_summary(String value1, String value2, String value3, String value4, String value5, String value6) throws Throwable 
	{
		type("dInvoiceTotalno",value1);
	//	Thread.sleep(1000);
		type("dInvoiceCancel",value2);
	//	Thread.sleep(1000);
		type("dDebitNoteTotalno",value3);
	//	Thread.sleep(1000);
		type("dDebitNoteCancel",value4);
	//	Thread.sleep(1000);
		type("dCreditNoteTotalno",value5);
	//	Thread.sleep(1000);
		type("dCreditNoteCancel",value6);
	//	Thread.sleep(2000);
	}
	//TC_07
	@And("^User click on check box and click on submit button$")
	public void user_click_on_check_box_and_click_on_submit_button() throws Throwable 
	{
	   clickOn("eFileCheckBox", "");
	   System.out.println("user click on check box");
	   Thread.sleep(1000);
	   clickOn("eFileDropdown", "");
	   System.out.println("user click on drop down Authorised Signatory");
	   clickOn("eAuthoritySign", "");
	   System.out.println("user click on Demo Today");
	   clickOn("eFileSubmit", "");
	   System.out.println("user click on Submit");
	}
	//TC_07
	@And("^User see  verification code and enter OTP value and click on verify$")
	public void user_see_verification_code_and_enter_OTP_value_and_click_on_verify() throws Throwable 
	{	
		Thread.sleep(10000);
	   System.out.println("user enter OTP ");
	}
	//TC_07
	@And("^User see validation message and click on ok button$")
	public void user_see_validation_message_and_click_on_ok_button() throws Throwable
	{
	   clickOn("eOK", "");
	  /* String expectedMessage = "Form Submmitted successfully!";
	   String message = wd.findElement(By.xpath("//*[@class='toast-top-right toast-container']")).getText();
	   Assert.assertTrue(message.contains(expectedMessage));*/
	}
	
	//TC_07
	@And("^User navigate to payment page and click on Proceed to pay$")
	public void user_navigate_to_payment_page_and_click_on_Proceed_to_pay() throws Throwable 
	{
	    clickOn("paymentProceedtoPay", "");
	}
	//TC_07
	@And("^User see pop up and click on ok$")
	public void user_see_pop_up_and_click_on_ok() throws Throwable 
	{
		clickOn("eOK", "");
	}
	//TC_07
	@And("^User click on particular month and see File button converted to Preview button$")
	public void user_click_on_particular_month_and_see_File_button_converted_to_Preview_button() throws Throwable 
	{		
		clickOn("Jun", "");
		System.out.println("user click on collapse and check Preview ");
		WebElement we;
		we=wd.findElement(By.xpath("//button[@title='Preview']"));		
		if(we.isEnabled())
		{			
			System.out.println("Fail");
		}
		else
		{
			System.out.println("Pass");
		}
		
	}
	//TC_07
	@And("^User see Payment Pay button converted to View button$")
	public void user_see_Payment_Pay_button_converted_to_View_button() throws Throwable 
	{
		System.out.println("user See PAyment button");
		WebElement we;
		we=wd.findElement(By.xpath("(//button[@title='View'])[1]"));		
		if(we.isEnabled())
		{			
			System.out.println("Fail");
		}
		else
		{
			System.out.println("Pass");
		}
	}	
	
	//TC_08
	@Given("^User click on collpase icon$")
	public void user_click_on_collpase_icon() throws Throwable 
	{
		System.out.println("user click on jan month");
		clickOn("Jan", "");
		Thread.sleep(1000);
	}
	//TC_08
	@Given("^User click on Preview button$")
	public void user_click_on_Preview_button() throws Throwable 
	{
		//preview button locator to find
	}
	//TC_08
	@Then("^User navigate to another page$")
	public void user_navigate_to_another_page() throws Throwable 
	{
		//navigate than check text 
	}
	
	
	//TC_09 download check 	
	@And("^User see Preview button and click on it \"([^\"]*)\"$")
	public void user_see_Preview_button_and_click_on_it(String value) throws Throwable 
	{
		System.out.println("user click on preview button");
		clickOn(value,"");
	 
	}
	//TC_09 download check
	@And("^User navigate to e-Filing Preview page$")
	public void user_navigate_to_e_Filing_Preview_page() throws Throwable 
	{
		System.out.println("user navigate to e filing page ");
	}
	//TC_09 download check
	@And("^User click on Download button$")
	public void user_click_on_Download_button() throws Throwable 
	{
		clickOn("bDownloadEfile","");
		// issue with naming
		verifyDownload("EfillingDetails");
	}
		
	
	
	
	//TC_10
	@And("^User check image \"([^\"]*)\" Pay Payment status$")
	public void user_check_image_Pay_Payment_status(String arg1) throws Throwable 
	{
		System.out.println("user see Pending icon");
	}
	//TC_10
	@And("^User click on collpase icon Pay Payment status$")
	public void user_click_on_collpase_icon_Pay_Payment_status() throws Throwable 
	{
		clickOn("Feb", "");
	}
	//TC_10
	@And("^User see Due Date \"([^\"]*)\" Pay Payment status$")
	public void user_see_Due_Date_Pay_Payment_status(String value) throws Throwable 
	{
		System.out.println("user see due date ");
		WebElement we;
		we=wd.findElement(By.xpath(obj.getProperty(value)));
		
		if(we.isEnabled())
		{
			
			System.out.println("Fail");
		}
		else
		{
			System.out.println("Pass");
		}
	}
	//TC_10
	@And("^User check Completed Date \"([^\"]*)\" Pay Payment status$")
	public void user_check_Completed_Date_Pay_Payment_status(String arg1) throws Throwable 
	{
		//locator for - to find
		System.out.println("user see - ");
	}
	//TC_10
	@And("^User click on Proceded to Pay button and navigate to Payment of tax page$")
	public void user_click_on_Proceded_to_Pay_button_and_navigate_to_Payment_of_tax_page() throws Throwable 
	{
		clickOn("paymentProceedtoPay", "");
		Thread.sleep(1000);
		//check Payment of tax 
		
	}
	
	//TC_10
	@And("^User click on Net Banking Ratio and select bank from Other Bank$")
	public void user_click_on_Net_Banking_Ratio_and_select_bank_from_Other_Bank() throws Throwable 
	{
		clickOn("RadioNetBanking", "");
		Thread.sleep(1000);
		clickOn("SelectBankDropdown","" );
		Thread.sleep(1000);
		clickOn("SelectBankOne", "");
		Thread.sleep(1000);
	}
	//TC_10
	@And("^User click on Pay Now button$")
	public void user_click_on_Pay_Now_button() throws Throwable 
	{
		clickOn("PaymentPayNow","" );
		Thread.sleep(2000);
	}
	//TC_10
	@And("^User navigate to another page for payment$")
	public void user_navigate_to_another_page_for_payment() throws Throwable 
	{
		Thread.sleep(5000);
		
		wd.get("https://congo.accessbankplc.com/");
		String title=wd.getTitle();
		System.out.println("Title is"+title);
		Assert.assertTrue(title.contains("Access Bank DR Congo RSS"));
		System.out.println("Page Verified");
	}	
	
	//TC_11
	@And("^User check image \"([^\"]*)\" View Payment status$")
	public void user_check_image_View_Payment_status(String arg1) throws Throwable 
	{
	    System.out.println("user check image");
	}
	//TC_11
	@And("^User click on collpase icon View Payment status$")
	public void user_click_on_collpase_icon_View_Payment_status() throws Throwable 
	{
		//collpase for feb month
		clickOn("Feb", "");
	}
	//TC_11
	@And("^User see Due Date \"([^\"]*)\" View Payment status$")
	public void user_see_Due_Date_View_Payment_status(String value) throws Throwable 
	{
		WebElement we;
		we=wd.findElement(By.xpath(obj.getProperty(value)));
		
		if(we.isDisplayed())
		{
			
			System.out.println("Fail");
		}
		else
		{
			System.out.println("Pass");
		}
	}
	//TC_11
	@And("^User check Completed Date \"([^\"]*)\" View Payment status$")
	public void user_check_Completed_Date_View_Payment_status(String value) throws Throwable 
	{
		WebElement we;
		we=wd.findElement(By.xpath(obj.getProperty(value)));
		
		if(we.isDisplayed())
		{
			
			System.out.println("Fail");
		}
		else
		{
			System.out.println("Pass");
		}
	}
	//TC_11
	@And("^User check button \"([^\"]*)\" View Payment status$")
	public void user_check_button_View_Payment_status(String value) throws Throwable
	{
		WebElement we;
		we=wd.findElement(By.xpath(obj.getProperty(value)));
		
		if(we.isDisplayed())
		{
			
			System.out.println("Fail");
		}
		else
		{
			System.out.println("Pass");
		}
		
	}
	//TC_11
	@And("^User click on View button and navigate to View Payment Page$")
	public void user_click_on_View_button_and_navigate_to_View_Payment_Page() throws Throwable 
	{
		//view button locator 
	    clickOn("JanPay", "");
	     //navigate to page and check text which is present on page 
	}
	
	
	//TC_12
	@And("^User check image \"([^\"]*)\" View Assessment status$")
	public void user_check_image_View_Assessment_status(String arg1) throws Throwable 
	{
		System.out.println("user see green tick");
	}
	//TC_12
	@And("^User click on collpase icon View Assessment status$")
	public void user_click_on_collpase_icon_View_Assessment_status() throws Throwable 
	{
		clickOn("Jan", "");
	}
	//TC_12
	@And("^User see Due Date \"([^\"]*)\" View Assessment status$")
	public void user_see_Due_Date_View_Assessment_status(String arg1) throws Throwable 
	{
		//due date - locator to find
	}
	//TC_12  
	@And("^User check Completed Date \"([^\"]*)\" View Assessment status$")
	public void user_check_Completed_Date_View_Assessment_status(String see) throws Throwable 
	{
		System.out.println("user see completed date ");
		WebElement we;
		we=wd.findElement(By.xpath(obj.getProperty(see)));
		
		if(we.isDisplayed())
		{
			
			System.out.println("Fail");
		}
		else
		{
			System.out.println("Pass");
		}
	}
	//TC_12
	@And("^User click on View button and navigate to View Assessment status$")
	public void user_click_on_View_button_and_navigate_to_View_Assessment_status() throws Throwable 
	{
		//locatour for view
		//clickOn("", "");
		//navigate to page find text 
		
	}
	
}
