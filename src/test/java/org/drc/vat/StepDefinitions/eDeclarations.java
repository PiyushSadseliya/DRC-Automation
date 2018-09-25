package org.drc.vat.StepDefinitions;
import static org.drc.vat.appmanager.HelperBase.*;

import java.io.IOException;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;

public class eDeclarations 
{
	@Given("^User is on E Declaration Page$")
	public void user_is_on_E_Declaration_Page() throws Throwable 
	{
		login("demo1@mailinator.com", "demo1234");		
	//	login("franky@mailinator.com", "Franky@7");
	//	login("franky@loketa.com","123456789");
		clickOn("Login","");		
	}
	
	// Common for Tab
	@And("^User click on VAT e-Filing Tab$")
	public void user_click_on_VAT_e_Filing_Tab() throws Throwable 
	{
		System.out.println("User click on e Filing Tab");
		clickOn("VATFiling","");
		Thread.sleep(500);		
	}
	
	
	@And("^User click on collapse for the month \"([^\"]*)\"$")
	public void user_click_on_collapse_for_the_month(String value) throws Throwable 
	{
		System.out.println("use click on month");
		clickOn(value, "");
	}
	
	@And("^User click on File button \"([^\"]*)\" and navigate to E-Declaration page$")
	public void user_click_on_File_button_and_navigate_to_E_Declaration_page(String value) throws Throwable 
	{
		 clickOn(value,"");
		 System.out.println("USer click on File");
	}
	
	//TC_02   period label 
	@And("^User check the period label$")
	public void user_check_the_period_label() throws Throwable 
	{
		String expectedMessage = "February, 2018";
		//String message = wd.findElement(By.xpath("//*[contains(text(),'January 2018')]")).getText();
		Thread.sleep(2000);
		WebElement element = wd.findElement(By.xpath("//*[@id='scrollWrapper']/drc-vat-e-filing/div/drc-e-filing/drc-e-filing-content-wrapper/section/div/div[2]/div[2]/input"));
		JavascriptExecutor jse = (JavascriptExecutor)wd;
		Object message = jse.executeScript("return arguments[0].value", element);
		System.out.println(message.toString());		
 		Assert.assertTrue(message.toString().contains(expectedMessage));
 		
	}
	
	//TC_03	
	@And("^User fill details for domestic sales \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_fill_details_for_domestic_sales(String value1, String value2) throws Throwable 
	{
		type("sDomesticGross",value1);
		Thread.sleep(100);
		type("sDomesticVAT",value2);
		Thread.sleep(100);
		clickOn("sDomesticGross", "");
	}
	//TC_03
	@And("^User Verify calculation of Domestic Net Amount$")
	public void user_Verify_calculation_of_Domestic_Net_Amount() throws Throwable 
	{
		String expectedMessage = "20";
		Thread.sleep(2000);
		WebElement element = wd.findElement(By.xpath("(//*[@class='form-control disabled d-flex justify-content-end text-right ng-untouched ng-pristine'])[1]"));
		JavascriptExecutor jse = (JavascriptExecutor)wd;
		Object message = jse.executeScript("return arguments[0].value", element);
		System.out.println(message.toString());		
 		Assert.assertTrue(message.toString().contains(expectedMessage));	
	}
	//TC_03
	@And("^User fill details for export sales \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_fill_details_for_export_sales(String value1, String value2) throws Throwable 
	{
		type("sExportGross",value1);
		Thread.sleep(100);
		type("sExportVAT",value2);
		Thread.sleep(100);
		clickOn("sExportGross", "");
	}
	//TC_03
	@And("^User Verify calculation of Export Net Amount$")
	public void user_Verify_calculation_of_Export_Net_Amount() throws Throwable 
	{		
		String expectedMessage = "20";
		Thread.sleep(2000);
		WebElement element = wd.findElement(By.xpath("(//*[@class='form-control disabled d-flex justify-content-end text-right ng-untouched ng-pristine'])[2]"));
		JavascriptExecutor jse = (JavascriptExecutor)wd;
		Object message = jse.executeScript("return arguments[0].value", element);
		System.out.println(message.toString());		
 		Assert.assertTrue(message.toString().contains(expectedMessage));	
	}
	//TC_03
	@And("^User fill details for sales adjustment \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_fill_details_for_sales_adjustment(String value1, String value2) throws Throwable 
	{
		type("sAdjustmentGross",value1);
		Thread.sleep(100);
		type("sAdjustmentVAT",value2);
		Thread.sleep(100);
		clickOn("sAdjustmentGross", "");
	}
	//TC_03
	@And("^User Verify calculation of Adjustment Net Amount$")
	public void user_Verify_calculation_of_Adjustment_Net_Amount() throws Throwable 
	{		
		String expectedMessage = "20";
		Thread.sleep(2000);
		WebElement element = wd.findElement(By.xpath("(//*[@class='form-control disabled d-flex justify-content-end text-right ng-untouched ng-pristine'])[3]"));
		JavascriptExecutor jse = (JavascriptExecutor)wd;
		Object message = jse.executeScript("return arguments[0].value", element);
		System.out.println(message.toString());		
 		Assert.assertTrue(message.toString().contains(expectedMessage));
	}
	//TC_03
	@And("^User fill details for purchase domestic \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_fill_details_for_purchase_domestic(String value1, String value2) throws Throwable 
	{
		type("pDomesticGross",value1);
		Thread.sleep(100);
		type("pDomesticVAT",value2);
		Thread.sleep(100);
		clickOn("pDomesticGross", "");
	}
	//TC_03
	@And("^User Verify calculation of Domestic Net Amount for purchase$")
	public void user_Verify_calculation_of_Domestic_Net_Amount_for_purchase() throws Throwable 
	{
		String expectedMessage = "20";
		Thread.sleep(2000);
		WebElement element = wd.findElement(By.xpath("(//*[@class='form-control disabled d-flex justify-content-end text-right ng-untouched ng-pristine'])[4]"));
		JavascriptExecutor jse = (JavascriptExecutor)wd;
		Object message = jse.executeScript("return arguments[0].value", element);
		System.out.println(message.toString());		
 		Assert.assertTrue(message.toString().contains(expectedMessage));
	}
	//TC_03
	@And("^User fill details for purchase import \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_fill_details_for_purchase_import(String value1, String value2) throws Throwable 
	{
		type("pImportGross",value1);
		Thread.sleep(100);
		type("eImportVAT",value2);
		clickOn("pImportGross","");
	}
	//TC_03
	@And("^User Verify calculation of Import Net Amount for purchase$")
	public void user_Verify_calculation_of_Import_Net_Amount_for_purchase() throws Throwable 
	{
		String expectedMessage = "20";
		Thread.sleep(2000);
		WebElement element = wd.findElement(By.xpath("(//*[@class='form-control disabled d-flex justify-content-end text-right ng-untouched ng-pristine'])[5]"));
		JavascriptExecutor jse = (JavascriptExecutor)wd;
		Object message = jse.executeScript("return arguments[0].value", element);
		System.out.println(message.toString());		
 		Assert.assertTrue(message.toString().contains(expectedMessage));
	}
	//TC_03
	@And("^User fill details for purchase adjustement \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_fill_details_for_purchase_adjustement(String value1, String value2) throws Throwable 
	{
		type("pAdjustmentGross",value1);
		Thread.sleep(100);
		type("pAdjustmentVAT",value2);
		Thread.sleep(100);
		clickOn("pAdjustmentGross","");
		
	}
	//TC_03
	@And("^User Verify calculation of Adjustment Net Amount for purchase$")
	public void user_Verify_calculation_of_Adjustment_Net_Amount_for_purchase() throws Throwable 
	{
		String expectedMessage = "20";
		Thread.sleep(2000);
		WebElement element = wd.findElement(By.xpath("(//*[@class='form-control disabled d-flex justify-content-end text-right ng-untouched ng-pristine'])[6]"));
		JavascriptExecutor jse = (JavascriptExecutor)wd;
		Object message = jse.executeScript("return arguments[0].value", element);
		System.out.println(message.toString());		
 		Assert.assertTrue(message.toString().contains(expectedMessage));
	}
	//TC_03	
	@And("^User fill detail for document summary invoice \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_fill_detail_for_document_summary_invoice(String value1, String value2) throws Throwable 
	{
		type("dInvoiceTotalno",value1);
		Thread.sleep(100);
		type("dInvoiceCancel",value2);
		Thread.sleep(100);
		clickOn("dInvoiceTotalno","");
		Thread.sleep(100);
		
	}
	//TC_03
	@And("^User Verify calculated Net Issued for invoices of Sales$")
	public void user_Verify_calculated_Net_Issued_for_invoices_of_Sales() throws Throwable 
	{
		String expectedMessage = "90";
		Thread.sleep(2000);
		WebElement element = wd.findElement(By.xpath("(//*[@class='form-control disabled ng-untouched ng-pristine'])[1]"));
		JavascriptExecutor jse = (JavascriptExecutor)wd;
		Object message = jse.executeScript("return arguments[0].value", element);
		System.out.println(message.toString());		
 		Assert.assertTrue(message.toString().contains(expectedMessage));
	}	
	//TC_03
	@And("^User fill detail for document summary debit \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_fill_detail_for_document_summary_debit(String value1, String value2) throws Throwable 
	{
		type("dDebitNoteTotalno",value1);
		Thread.sleep(100);
		type("dDebitNoteCancel",value2);
		Thread.sleep(100);
		clickOn("dDebitNoteTotalno", "");
	}
	//TC_03
	@And("^User Verify calcuated Net Issued for Debit note$")
	public void user_Verify_calcuated_Net_Issued_for_Debit_note() throws Throwable 
	{
		String expectedMessage = "90";
		Thread.sleep(2000);
		WebElement element = wd.findElement(By.xpath("(//*[@class='form-control disabled ng-untouched ng-pristine'])[2]"));
		JavascriptExecutor jse = (JavascriptExecutor)wd;
		Object message = jse.executeScript("return arguments[0].value", element);
		System.out.println(message.toString());		
 		Assert.assertTrue(message.toString().contains(expectedMessage));
	}		
	//TC_03
	@And("^User fill detail for document summary credit \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_fill_detail_for_document_summary_credit(String value1, String value2) throws Throwable 
	{
		type("dCreditNoteTotalno",value1);
		Thread.sleep(100);
		type("dCreditNoteCancel",value2);
		Thread.sleep(100);
		clickOn("dCreditNoteTotalno", "");
	}
	//TC_03
	@And("^User Verify calcuated Net Issued for Credit note$")
	public void user_Verify_calcuated_Net_Issued_for_Credit_note() throws Throwable 
	{
		String expectedMessage = "90";
		Thread.sleep(2000);
		WebElement element = wd.findElement(By.xpath("(//*[@class='form-control disabled ng-untouched ng-pristine'])[3]"));
		JavascriptExecutor jse = (JavascriptExecutor)wd;
		Object message = jse.executeScript("return arguments[0].value", element);
		System.out.println(message.toString());		
 		Assert.assertTrue(message.toString().contains(expectedMessage));
	}		
	
	//TC_03
	@And("^User click on browse button and select file$")
	public void user_click_on_browse_button_and_select_file() throws Throwable 
	{
		System.out.println("User will select file from browser");
		clickOn("Browse", "");
		UploadImage("","C:\\Users\\admin\\Downloads\\Sales-and-Purchase-Transactions.xlsx");
		Thread.sleep(1000);		
	}
	//TC_03		
	@And("^User click on check box and select Authorised Signatory for filing$")
	public void user_click_on_check_box_and_select_Authorised_Signatory_for_filing() throws Throwable 
	{
		   clickOn("eFileCheckBox", "");
		   System.out.println("user click on check box");
		   Thread.sleep(1000);
		   clickOn("eFileDropdown", "");
		   System.out.println("user click on drop down Authorised Signatory");
		   clickOn("eAuthoritySign", "");
		   System.out.println("user clicked checkbox");
		   //clickOn("eFileSaveDraft", "");
		   //System.out.println("user click on Save Draft");
		   
	}

	//TC_03
	@And("^User click on Save Draft and click on Submit button$")
	public void user_click_on_Save_Draft_and_click_on_Submit_button() throws Throwable 
	{
		//clickOn("eFileSaveDraft", "");
		System.out.println("user click on Save Draft");
		Thread.sleep(2000);
		clickOn("eFileSubmit", "");
		Thread.sleep(2000);
		System.out.println("user click on Submit");
	}
	//TC_03
	@And("^User see verification code and enter OTP value and click on verify for e filing$")
	public void user_see_verification_code_and_enter_OTP_value_and_click_on_verify_for_e_filing() throws Throwable 
	{
		Thread.sleep(10000);
		System.out.println("user enter OTP ");
		
	}
	//TC_03
	@And("^User see validation message and click on ok button for e filing$")
	public void user_see_validation_message_and_click_on_ok_button_for_e_filing() throws Throwable 
	{
		 Thread.sleep(1000);
		 String expectedMessage = "e-Declaration is Successful";
		 String message = wd.findElement(By.xpath("//*[contains(text(),'e-Declaration is Successful')]")).getText();
		 Assert.assertTrue(message.contains(expectedMessage));
		 Thread.sleep(1000);
		   
	}
	//TC_03
	/*@And("^User Navigate to Payment of Tax Page$")
	public void user_Navigate_to_Payment_of_Tax_Page() throws Throwable 
	{
	    // payment
	}*/
	
	//TC_04
	@And("^User click on collapse for the month \"([^\"]*)\" for Gross amount$")
	public void user_click_on_collapse_for_the_month_for_Gross_amount(String value) throws Throwable 
	{
		System.out.println("use click on  month");
		clickOn(value, "");
	}
	//TC_04
	@And("^User click on File button \"([^\"]*)\" and navigate to E-Declaration page for Gross amount$")
	public void user_click_on_File_button_and_navigate_to_E_Declaration_page_for_Gross_amount(String value) throws Throwable 
	{
		clickOn(value,"");
	    System.out.println("USer click on  File");
	}
	//TC_04
	@And("^User Enter Details$")
	public void user_Enter_Details() throws Throwable 
	{
		 System.out.println("User start to fill details");
	}	
	//TC_04
	@And("^User fill details for sales \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" for sales$")
	public void user_fill_details_for_sales_for_sales(String value1, String value2, String value3, String value4, String value5, String value6) throws Throwable 
	{
		type("sDomesticGross",value1);
			Thread.sleep(500);
			type("sDomesticVAT",value2);
			Thread.sleep(1000);
		//	clickOn("sDomesticGross", "");
			type("sExportGross",value3);
		//	Thread.sleep(1000);
			type("sExportVAT",value4);
		//	Thread.sleep(1000);
			type("sAdjustmentGross",value5);
		//	Thread.sleep(1000);
			type("sAdjustmentVAT",value6);
			//Thread.sleep(2000);
	}
	//TC_04
	@And("^User fill details for purchase \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" for purchase$")
	public void user_fill_details_for_purchase_for_purchase(String value1, String value2, String value3, String value4, String value5, String value6) throws Throwable 
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
	//TC_04
	@And("^User fill detail for document summary \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"  \"([^\"]*)\" \"([^\"]*)\" for document summary$")
	public void user_fill_detail_for_document_summary_for_document_summary(String value1, String value2, String value3, String value4, String value5, String value6) throws Throwable 
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
			clickOn("dCreditNoteTotalno", "");
	}

	//TC_04
	@And("^User click on check box and select Authorised Signatory$")
	public void user_click_on_check_box_and_select_Authorised_Signatory() throws Throwable 
	{
			Thread.sleep(1000);
			clickOn("eFileCheckBox", "");
		   System.out.println("user click on check box");
		   
		 //  clickOn("eFileDropdown", "");
		 //  System.out.println("user click on drop down Authorised Signatory");
		 //  clickOn("eAuthoritySign", "");
		 //  System.out.println("user click on Demo Today");
	}    
	//TC_04	
	@And("^User click on submit button and check Validation message for Gross Amount$")
	public void user_click_on_submit_button_and_check_Validation_message_for_Gross_Amount() throws Throwable 
	{
		 clickOn("eFileSubmit", "");
		 System.out.println("user click on Submit");
		 Thread.sleep(2000);
	     String expectedMessage = "Gross Amount is required";
	  	 String message = wd.findElement(By.xpath("(//*[contains(text(),'Gross Amount is required')])[1]")).getText();
	  	 Assert.assertTrue(message.contains(expectedMessage));
	  	 
	}		
	@And("^User log out$")
	public void user_log_out() throws Throwable 
	{
		//logout();
		wd.navigate().back();
	}
	//TC_05			
	@And("^User click on collapse for the month \"([^\"]*)\" for VAT amount$")
	public void user_click_on_collapse_for_the_month_for_VAT_amount(String value) throws Throwable 
	{
		System.out.println("use click on month");
		clickOn(value, "");
	}
	//TC_05	
	@And("^User click on File button \"([^\"]*)\" and navigate to E-Declaration page for VAT amount$")
	public void user_click_on_File_button_and_navigate_to_E_Declaration_page_for_VAT_amount(String value) throws Throwable 
	{
		clickOn(value,"");
	    System.out.println("USer click on File");
	}
	
	//TC_05
	@And("^User click on submit button and check Validation message for VAT amount$")
	public void user_click_on_submit_button_and_check_Validation_message_for_VAT_amount() throws Throwable 
	{
		clickOn("eFileSubmit", "");
		 System.out.println("user click on Submit");
		 Thread.sleep(2000);
	     String expectedMessage = "VAT Amount is required";
	  	 String message = wd.findElement(By.xpath("(//*[contains(text(),'VAT Amount is required')])[1]")).getText();
	  	 Assert.assertTrue(message.contains(expectedMessage));
	}
		
	//TC_06
	@And("^User fill details for domestic \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_fill_details_for_domestic(String value1, String value2) throws Throwable 
	{
		type("sDomesticGross",value1);
		Thread.sleep(100);
		type("sDomesticVAT",value2);
		Thread.sleep(100);
		clickOn("sDomesticGross", "");
	
	}
	//TC_06
	@And("^User check Net amount for domestic sales$")
	public void user_check_Net_amount_for_domestic_sales() throws Throwable 
	{
		
		String expectedMessage = "20";
		Thread.sleep(2000);
		WebElement element = wd.findElement(By.xpath("(//*[@class='form-control disabled d-flex justify-content-end text-right ng-untouched ng-pristine'])[1]"));
		JavascriptExecutor jse = (JavascriptExecutor)wd;
		Object message = jse.executeScript("return arguments[0].value", element);
		System.out.println(message.toString());		
 		Assert.assertTrue(message.toString().contains(expectedMessage));			
	}
	//TC_06
	@And("^User fill details for export \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_fill_details_for_export(String value1, String value2) throws Throwable 
	{
		type("sExportGross",value1);
		Thread.sleep(100);
		type("sExportVAT",value2);
		clickOn("sExportGross", "");
	}
	//TC_06
	@And("^User check Net amount for export$")
	public void user_check_Net_amount_for_export() throws Throwable 
	{
		
		String expectedMessage = "30";
		Thread.sleep(2000);
		WebElement element = wd.findElement(By.xpath("(//*[@class='form-control disabled d-flex justify-content-end text-right ng-untouched ng-pristine'])[2]"));
		JavascriptExecutor jse = (JavascriptExecutor)wd;
		Object message = jse.executeScript("return arguments[0].value", element);
		System.out.println(message.toString());		
 		Assert.assertTrue(message.toString().contains(expectedMessage));	

	}
	//TC_06
	@And("^User fill details for adjustement sales \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_fill_details_for_adjustement_sales(String value1, String value2) throws Throwable 
	{
		type("sAdjustmentGross",value1);
		Thread.sleep(100);
		type("sAdjustmentVAT",value2);
		clickOn("sAdjustmentGross", "");
	}
	//TC_06
	@And("^User check Net amount for adjustement sales$")
	public void user_check_Net_amount_for_adjustement_sales() throws Throwable 
	{
		String expectedMessage = "40";
		Thread.sleep(2000);
		WebElement element = wd.findElement(By.xpath("(//*[@class='form-control disabled d-flex justify-content-end text-right ng-untouched ng-pristine'])[3]"));
		JavascriptExecutor jse = (JavascriptExecutor)wd;
		Object message = jse.executeScript("return arguments[0].value", element);
		System.out.println(message.toString());		
 		Assert.assertTrue(message.toString().contains(expectedMessage));	
	}
	//TC_06
	@And("^User fill details for domestic purchase \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_fill_details_for_domestic_purchase(String value1, String value2) throws Throwable 
	{
		type("pDomesticGross",value1);
		Thread.sleep(100);
		type("pDomesticVAT",value2);
		clickOn("pDomesticGross", "");

	}
	//TC_06
	@And("^User check Net amount for domestic purchase$")
	public void user_check_Net_amount_for_domestic_purchase() throws Throwable 
	{
		String expectedMessage = "50";
		Thread.sleep(2000);
		WebElement element = wd.findElement(By.xpath("(//*[@class='form-control disabled d-flex justify-content-end text-right ng-untouched ng-pristine'])[4]"));
		JavascriptExecutor jse = (JavascriptExecutor)wd;
		Object message = jse.executeScript("return arguments[0].value", element);
		System.out.println(message.toString());		
 		Assert.assertTrue(message.toString().contains(expectedMessage));	
	}
	//TC_06
	@And("^User fill details for import \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_fill_details_for_import(String value1, String value2) throws Throwable 
	{
		type("pImportGross",value1);
		Thread.sleep(1000);
		type("eImportVAT",value2);
		clickOn("pImportGross", "");
	}
	//TC_06
	@And("^User check Net amount for import$")
	public void user_check_Net_amount_for_import() throws Throwable 
	{
		
		String expectedMessage = "60";
		Thread.sleep(2000);
		WebElement element = wd.findElement(By.xpath("(//*[@class='form-control disabled d-flex justify-content-end text-right ng-untouched ng-pristine'])[5]"));
		JavascriptExecutor jse = (JavascriptExecutor)wd;
		Object message = jse.executeScript("return arguments[0].value", element);
		System.out.println(message.toString());		
 		Assert.assertTrue(message.toString().contains(expectedMessage));	

	}
	//TC_06
	@And("^User fill details for adjustement puchase \"([^\"]*)\" \"([^\"]*)\" for purchase$")
	public void user_fill_details_for_adjustement_puchase_for_purchase(String value1, String value2) throws Throwable 
	{
		type("pAdjustmentGross",value1);
		Thread.sleep(100);
		type("pAdjustmentVAT",value2);
		clickOn("pAdjustmentGross", "");
		
	}
	//TC_06
	@And("^User check Net amount for adjustement purchase$")
	public void user_check_Net_amount_for_adjustement_purchase() throws Throwable 
	{
		String expectedMessage = "70";
		Thread.sleep(2000);
		WebElement element = wd.findElement(By.xpath("(//*[@class='form-control disabled d-flex justify-content-end text-right ng-untouched ng-pristine'])[6]"));
		JavascriptExecutor jse = (JavascriptExecutor)wd;
		Object message = jse.executeScript("return arguments[0].value", element);
		System.out.println(message.toString());		
 		Assert.assertTrue(message.toString().contains(expectedMessage));	
	}
	
	//TC_06
	@And("^User click on check box and click on submit button and validate Net Amount for sales$")
	public void user_click_on_check_box_and_click_on_submit_button_and_validate_Net_Amount_for_sales() throws Throwable 
	{
		clickOn("eFileCheckBox","");
		Thread.sleep(100);
		clickOn("eFileSubmit", "");
		Thread.sleep(100);
	}
			
	//TC_07
	@And("^User click on browse button$")
	public void user_click_on_browse_button() throws Throwable 
	{
		Thread.sleep(1000);
	    clickOn("Browse","");
	    Thread.sleep(200);
	    
	}
	//TC_07
	@And("^User select excel file$")
	public void user_select_excel_file() throws Throwable 
	{
		UploadImage("","C:\\Users\\admin\\Downloads\\Sales-and-Purchase-Transactions.xlsx");
		Thread.sleep(2000);			
	}
	//TC_07
	// do when start scripting
	@And("^User Check uploaded file$")
	public void user_Check_uploaded_file() throws Throwable
	{		
		Thread.sleep(2000);	
	/*	String expectedMessage = "Sales-and-Purchase-Transactions.xlsx";	
		WebElement element = wd.findElement(By.xpath("(//*[@class='form-control disabled font-medium ng-untouched ng-pristine ng-valid'])[1]"));
		JavascriptExecutor jse = (JavascriptExecutor)wd;
		Object message = jse.executeScript("return arguments[0].value", element);
		System.out.println(message.toString());		
 		Assert.assertTrue(message.toString().contains(expectedMessage));
 		Thread.sleep(10000);*/
		
	}
	
	@And("^User click on cancel button$")
	public void user_click_on_cancel_button() throws Throwable 
	{
		// need to implement
	}
	
	
	//TC_08_InValid
	@And("^User click on check box and click on \"([^\"]*)\" and click on \"([^\"]*)\"$")
	public void user_click_on_check_box_and_click_on_and_click_on(String value1, String value2) throws Throwable 
	{
		clickOn(value1,"");
		System.out.println("user click on check box");
		Thread.sleep(1000);
		clickOn(value2,"");
		System.out.println("user click on Submit Button");		
		String expectedMessage = "Select Authorized Signatory";
	  	String message = wd.findElement(By.xpath("//*[contains(text(),'Select Authorized Signatory')]")).getText();
	  	Assert.assertTrue(message.contains(expectedMessage));
	  	Thread.sleep(1000);
	}
	
	//TC_08_Valid
	@And("^User click on check box and click on \"([^\"]*)\" and select dropdown \"([^\"]*)\" and click on \"([^\"]*)\"$")
	public void user_click_on_check_box_and_click_on_and_select_dropdown_and_click_on(String value1, String value2, String value3) throws Throwable 
	{
		clickOn(value1,"");
		System.out.println("user click on check box");
		Thread.sleep(1000);
		clickOn(value2,"");
		Thread.sleep(1000);
		System.out.println("user Select Dropdown");
		clickOn(value3,"");
		Thread.sleep(1000);
		System.out.println("user Select Authorized Person");
	}

	//TC_08_Valid
	@Given("^User check Authorised Signatory$")
	public void user_check_Authorised_Signatory() throws Throwable 
	{
		Thread.sleep(1000);
		String expectedMessage = "franky";
	  	String message = wd.findElement(By.xpath("(//*[contains(text(),'franky')])[2]")).getText();
	  	Assert.assertTrue(message.contains(expectedMessage));
	  	Thread.sleep(1000);
		
	}	
	//TC_09	
	@And("^User upload file and click on Save Draft and check message$")
	public void user_upload_file_and_click_on_Save_Draft_and_check_message() throws Throwable 
	{
		clickOn("Browse","");	
	
		UploadImage("","C:\\Users\\admin\\Downloads\\Sales-and-Purchase-Transactions.xlsx");
		clickOn("eFileSaveDraft","");
		String expectedMessage = "Details drafted successfully";
	  	String message = wd.findElement(By.xpath("//*[contains(text(),'Details drafted successfully')]")).getText();
	  	Assert.assertTrue(message.contains(expectedMessage));
	 // 	Thread.sleep(5000);	
	
	}
	//TC_09
	@And("^User Logout$")
	public void user_Logout() throws Throwable 
	{	
		Thread.sleep(3000);
		//WebDriverWait wait = new WebDriverWait(wd, 15);
		//wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[contains(@title,'Logout')]"))).click();;
		// wd.findElement(By.xpath("//*[contains(@title,'Logout')]")).click();
		clickOn("btn_logout","");
		
		//clickOn("LogoutDropdown","");
		//clickOn("LogoutClick","");
		//wd.findElement(By.xpath("//*[contains(@title,'Logout')])")).click();		
		//wd.navigate().back();
	    //clickOn("btn_logout","");
	}
	
	
	//TC_10
	@And("^User click on Previous button and check$")
	public void user_click_on_Previous_button_and_check() throws Throwable 
	{
		Thread.sleep(1000);
		clickOn("eFilePrevious","");
		Thread.sleep(1000);
	}
	//TC_10
	@And("^User fill details \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_fill_details(String value1, String value2, String value3, String value4, String value5, String value6, String value7, String value8, String value9, String value10, String value11, String value12, String value13, String value14, String value15, String value16, String value17, String value18) throws Throwable 
	{
		
		type("sDomesticGross",value1);
		Thread.sleep(500);
		type("sDomesticVAT",value2);
		Thread.sleep(500);
		type("sExportGross",value3);
		Thread.sleep(500);
		type("sExportVAT",value4);
		Thread.sleep(500);
		type("sAdjustmentGross",value5);
		Thread.sleep(500);
		type("sAdjustmentVAT",value6);
		Thread.sleep(500);
			
		type("pDomesticGross",value7);
		Thread.sleep(500);		
		type("pDomesticVAT",value8);
		Thread.sleep(500);				
		type("pImportGross",value9);
		Thread.sleep(500);		
		type("eImportVAT",value10);
		Thread.sleep(500);		
		type("pAdjustmentGross",value11);
		Thread.sleep(500);		
		type("pAdjustmentVAT",value12);
		Thread.sleep(500);
						
		type("dInvoiceTotalno",value13);
		Thread.sleep(500);
		type("dInvoiceCancel",value14);
		Thread.sleep(500);
		type("dDebitNoteTotalno",value15);
		Thread.sleep(500);
		type("dDebitNoteCancel",value16);
		Thread.sleep(500);
		type("dCreditNoteTotalno",value17);
		Thread.sleep(500);
		type("dCreditNoteCancel",value18);				
	}
	//TC_10
	@And("^User click on Save Draft and click on previous button$")
	public void user_click_on_Save_Draft_and_click_on_previous_button() throws Throwable 
	{
		clickOn("eFileSaveDraft","");
		System.out.println("User click on Save Button");		
		Thread.sleep(1000);
		clickOn("eFilePrevious","");
		Thread.sleep(1000);
		System.out.println("After Save User click on Previous button");
	}	
	//TC_10
	@And("^User check saved record$")
	public void user_check_saved_record() throws Throwable 
	{
		String expectedMessage = "100";
		Thread.sleep(2000);
		WebElement element = wd.findElement(By.xpath("(//*[@class='form-control disabled d-flex justify-content-end text-right ng-untouched ng-pristine'])[1]"));
		JavascriptExecutor jse = (JavascriptExecutor)wd;
		Object message = jse.executeScript("return arguments[0].value", element);
		System.out.println(message.toString());		
 		Assert.assertTrue(message.toString().contains(expectedMessage));
 		Thread.sleep(100);
	}
	
	
	//TC_11
	@And("^User see verification code and enter OTP value and click on verify$")
	public void user_see_verification_code_and_enter_OTP_value_and_click_on_verify() throws Throwable 
	{
	  	clickOn("EnterOTP","");
	  	clickOn("eVerify","");
	  	String expectedMessage = "Enter OTP";
	  	String message = wd.findElement(By.xpath("(//*[contains(text(),' Enter OTP")).getText();
	  	Assert.assertTrue(message.contains(expectedMessage));
	}

	
	
	//TC_11  and  TC_12
	@And("^User click on Submit and check VAliadation message$")
	public void user_click_on_Submit_and_check_VAliadation_message() throws Throwable 
	{
		clickOn("eFileCheckBox","");
		System.out.println("CheckBox Clicked");
		clickOn("eFileSubmit","");
		
		String expectedMessage = "VAT Amount should be less than Gross Amount";
	  	String message = wd.findElement(By.xpath("(//*[contains(text(),'VAT Amount should be less than Gross Amount')])[1]")).getText();
	  	Assert.assertTrue(message.contains(expectedMessage));
	  	Thread.sleep(1000);			
		
	}
	//TC_14
	@Given("^User click on submit button and check Validation message for Total Number Invoices for Sales$")
	public void user_click_on_submit_button_and_check_Validation_message_for_Total_Number_Invoices_for_Sales() throws Throwable 
	{
		 clickOn("eFileSubmit", "");
		 System.out.println("user click on Submit");
		 Thread.sleep(2000);
	     String expectedMessage = "Total Number is required";
	  	 String message = wd.findElement(By.xpath("(//*[contains(text(),'Total Number is required')])[1]")).getText();
	  	 Assert.assertTrue(message.contains(expectedMessage));
	}

	//TC_15
	@Given("^User click on submit button and check Validation message for Cancelled Invoices for Sales$")
	public void user_click_on_submit_button_and_check_Validation_message_for_Cancelled_Invoices_for_Sales() throws Throwable 
	{
		 clickOn("eFileSubmit", "");
		 System.out.println("user click on Submit");
		 Thread.sleep(2000);
	     String expectedMessage = "Cancelled Number is required";
	  	 String message = wd.findElement(By.xpath("(//*[contains(text(),'Cancelled Number is required')])[1]")).getText();
	  	 Assert.assertTrue(message.contains(expectedMessage));
	}
	
	//TC_16
	@And("^User click on submit button and check Validation message for Total Number Debit Note$")
	public void user_click_on_submit_button_and_check_Validation_message_for_Total_Number_Debit_Note() throws Throwable 
	{
		 clickOn("eFileSubmit", "");
		 System.out.println("user click on Submit");
		 Thread.sleep(2000);
		  String expectedMessage = "Total Number is required";
		  String message = wd.findElement(By.xpath("(//*[contains(text(),'Total Number is required')])[1]")).getText();
	  	 Assert.assertTrue(message.contains(expectedMessage));
	}

/*	@And("^User click on submit button and check Validation message for Total Number Debit Note \"([^\"]*)\"$")
	public void user_click_on_submit_button_and_check_Validation_message_for_Total_Number_Debit_Note(String arg1) throws Throwable 
	{
		 clickOn("eFileSubmit", "");
		 System.out.println("user click on Submit");
		 Thread.sleep(2000);		 		 
		
	}*/
	
	//TC_17
	@And("^User click on submit button and check Validation message for Total Number Debit Cancelled$")
	public void user_click_on_submit_button_and_check_Validation_message_for_Total_Number_Debit_Cancelled() throws Throwable 
	{
		 clickOn("eFileSubmit", "");
		 System.out.println("user click on Submit");
		 Thread.sleep(2000);
	     String expectedMessage = "Cancelled Number is required";
	  	 String message = wd.findElement(By.xpath("(//*[contains(text(),'Cancelled Number is required')])[1]")).getText();
	  	 Assert.assertTrue(message.contains(expectedMessage));
	}
	
	//TC_18
	@And("^User click on submit button and check Validation message for Total Number Credit Note$")
	public void user_click_on_submit_button_and_check_Validation_message_for_Total_Number_Credit_Note() throws Throwable 
	{
		 clickOn("eFileSubmit", "");
		 System.out.println("user click on Submit");
		 Thread.sleep(2000);
		  String expectedMessage = "Total Number is required";
		  String message = wd.findElement(By.xpath("(//*[contains(text(),'Total Number is required')])[1]")).getText();
	  	 Assert.assertTrue(message.contains(expectedMessage));
	}
	
	//TC_19
	@And("^User check and select authorised signatory$")
	public void user_check_and_select_authorised_signatory() throws Throwable 
	{
		clickOn("eFileCheckBox", "");
	 	Thread.sleep(2000);
	  // System.out.println("user click on check box");
	  // Thread.sleep(1000);
	 //  clickOn("eFileDropdown", "");
	 //  System.out.println("user click on drop down Authorised Signatory");
	//   clickOn("eAuthoritySign", "");
	}
		
	//TC_19
	@And("^User click on submit button and check Validation message for Credit Note Cancelled field$")
	public void user_click_on_submit_button_and_check_Validation_message_for_Credit_Note_Cancelled_field() throws Throwable 
	{	
		 clickOn("eFileSubmit", "");
		 System.out.println("user click on Submit");
		
		 Thread.sleep(2000);
	     String expectedMessage = "Cancelled Number is required";
	  	 String message = wd.findElement(By.xpath("(//*[contains(text(),'Cancelled Number is required')])[1]")).getText();
	  	 Assert.assertTrue(message.contains(expectedMessage));
	}
	
	//TC_20
	@Given("^User click on Submit and check Valiadation message for Total Number is less than Cancelled document$")
	public void user_click_on_Submit_and_check_Valiadation_message_for_Total_Number_is_less_than_Cancelled_document() throws Throwable 
	{
		clickOn("eFileCheckBox","");
		System.out.println("CheckBox Clicked");
		clickOn("eFileSubmit","");
		
		String expectedMessage = "Cancelled count should be less than Total Number count";
	  	String message = wd.findElement(By.xpath("(//*[contains(text(),' Cancelled count should be less than Total Number count')])[1]")).getText();
	  	Assert.assertTrue(message.contains(expectedMessage));
	  	Thread.sleep(1000);			
	}
	
	//TC_21  
	@And("^User check upload file size$")
	public void user_check_upload_file_size() throws Throwable 
	{
		UploadImage("","C:\\Users\\admin\\Downloads\\Sales-and-Purchase-Transactions.xlsx");
		Thread.sleep(2000);		
		clickOn("Jan","");
	}
	
	//TC_22_InValid
	@And("^User check message for sales Adjustment$")
	public void user_check_message_for_sales_Adjustment() throws Throwable 
	{
		String expectedMessage = "GROSS Amount should be Negative";
	  	String message = wd.findElement(By.xpath("(//*[contains(text(),'GROSS Amount should be Negative')])[1]")).getText();
	  	Assert.assertTrue(message.contains(expectedMessage));
	  	Thread.sleep(1000);			

	}
	
	//TC_23_InValid
	@And("^User check message for purchase Adjustment$")
	public void user_check_message_for_purchase_Adjustment() throws Throwable 
	{
		String expectedMessage = "GROSS Amount should be Negative";
	  	String message = wd.findElement(By.xpath("(//*[contains(text(),'GROSS Amount should be Negative')])[1]")).getText();
	  	Assert.assertTrue(message.contains(expectedMessage));
	  	Thread.sleep(1000);		
	}

	
	
	//TC_24_InValid
	@And("^User click on submit button and check Validation message for invoice of sale$")
	public void user_click_on_submit_button_and_check_Validation_message_for_invoice_of_sale() throws Throwable 
	{					
				
		//clickOn("eFileSubmit","");
		String expectedMessage = "Cancelled count should be less than Total Number count";
	  	String message = wd.findElement(By.xpath("(//*[contains(text(),'Cancelled count should be less than Total Number count')])[1]")).getText();
	  	Assert.assertTrue(message.contains(expectedMessage));
	  	Thread.sleep(1000);			
	}
			
	
	
	
	
	
}






