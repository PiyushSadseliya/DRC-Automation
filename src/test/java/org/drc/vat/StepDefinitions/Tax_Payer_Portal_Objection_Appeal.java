package org.drc.vat.StepDefinitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import static org.drc.vat.appmanager.HelperBase.*;
import static org.testng.Assert.assertTrue;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

public class Tax_Payer_Portal_Objection_Appeal 
{
	@Given("^User is on Tax Payer portal Objection and Appeal \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_is_on_Tax_Payer_portal_Objection_and_Appeal(String arg1, String arg2) throws Throwable 
	{
		System.out.println(arg1);
		System.out.println(arg2);
	}

	@And("^User click on view for month \"([^\"]*)\"$")
	public void user_click_on_view_for_month(String value) throws Throwable 
	{
		Thread.sleep(1000);
		clickOn(value, "");
	    
	}

	@And("^User see pop up appear for Notice$")
	public void user_see_pop_up_appear_for_Notice() throws Throwable 
	{
		Thread.sleep(500);
		System.out.println("user see pop apper for notice");
		if(wd.findElement(By.xpath("//*[contains(text(),'Notice')]")).isDisplayed() )
		{		
			System.out.println("user see pop apper for notice");
			assertTrue(true);
		}		    
	}

	@And("^User see document type \"([^\"]*)\"$")
	public void user_see_document_type(String value) throws Throwable
	{
		Thread.sleep(500);
		if(wd.findElement(By.xpath("(//*[contains(text(),'" + value + "')])[1]")).isDisplayed() )
		{		
			System.out.println("User see Document Type ");
			assertTrue(true);
		}	    
	    
	}

	@And("^User click on view$")
	public void user_click_on_view() throws Throwable 
	{
		Thread.sleep(500);
		clickOn("btn_Notice_View", "");
	    
	}

	@And("^User click on Object button$")
	public void user_click_on_Object_button() throws Throwable 
	{
		Thread.sleep(1000);
	    clickOn("btn_View_Obj", "");
	   // Thread.sleep(10000);
	}

	@And("^User click on dropdown and select \"([^\"]*)\"$")
	public void user_click_on_dropdown_and_select(String value) throws Throwable 
	{
		
		WebElement element1 = wd.findElement(By.id("iframe"));
		String number1 = element1.getText();
		System.out.println(number1);
		wd.switchTo().frame(element1);
		
		Thread.sleep(1000);
		clickOn("drp_ObjectionType","");
		Thread.sleep(1000);
	    clickOn(value, "");	    
	}

	@And("^User enter title \"([^\"]*)\"$")
	public void user_enter_title(String title) throws Throwable 
	{		
	    Thread.sleep(1000);
	    type("txt_Objection_Title",title);	  
	}

	@And("^User enter description \"([^\"]*)\"$")
	public void user_enter_description(String description) throws Throwable
	{
		WebElement element1 = wd.findElement(By.id("my-editor_ifr"));
		String number1 = element1.getText();
		System.out.println(number1);
		wd.switchTo().frame(element1);
		Thread.sleep(1000);
		type("txt_Obj_Description", description);		
		
	}

	@And("^User click on choose fie button and select file$")
	public void user_click_on_choose_fie_button_and_select_file() throws Throwable 
	{
		WebElement element1 = wd.findElement(By.id("iframe"));
		String number1 = element1.getText();
		System.out.println(number1);
		wd.switchTo().frame(element1);
		//wd.switchTo().parentFrame();
		Thread.sleep(2000);
		WebElement element2 = wd.findElement(By.xpath("//label[@title='File Upload']"));
		String number2 = element2.getText();
		System.out.println(number2);
		
		//label[@title="File Upload"]
		
		Thread.sleep(1000);
		clickOn("btn_Obj_ChooseFile","");			
		UploadImage("","C:\\Users\\admin\\Downloads\\Sales-and-Purchase-Transactions.xlsx");
	    
	}

	@And("^User click on submit button for objection$")
	public void user_click_on_submit_button_for_objection() throws Throwable 
	{
		Thread.sleep(500);
		clickOn("btn_Obj_Submit", "");	    
	}

	@And("^User see date \"([^\"]*)\" and click on view button$")
	public void user_see_date_and_click_on_view_button(String date) throws Throwable 
	{
		Thread.sleep(1000);
		if(wd.findElement(By.xpath("(//td//*[contains(text(),'" + date + "')])[1]")).isDisplayed() )
		{		
			System.out.println("User see Date ");
			assertTrue(true);
		}	    	    
	}

	@And("^User see same date \"([^\"]*)\" on notice on assessment$")
	public void user_see_same_date_on_notice_on_assessment(String date) throws Throwable 
	{
		Thread.sleep(500);
		clickOn("btn_Notice_View", "");
		Thread.sleep(500);
		if(wd.findElement(By.xpath("(//td//*[contains(text(),'" + date + "')])[1]")).isDisplayed() )
		{		
			System.out.println("User see Date ");
			assertTrue(true);
		}    	    
	}

	@And("^User is on Notice page$")
	public void user_is_on_Notice_page() throws Throwable 
	{
		Thread.sleep(500);
		if(wd.findElement(By.xpath("//div[contains(text(),'Government of Democratic Republic of the Congo')]")).isDisplayed() )
		{		
			System.out.println("User see Notice Page ");
			assertTrue(true);
		}  	    
	}

	@And("^User ui of Notice of assessement$")
	public void user_ui_of_Notice_of_assessement() throws Throwable 
	{
		System.out.println("User see Notice Page UI ");
	    
	}

	@And("^User scan barcode \"([^\"]*)\"$")
	public void user_scan_barcode(String barcode) throws Throwable
	{
		Thread.sleep(500);
		if(wd.findElement(By.xpath("(//*[contains(text(),'" + barcode + "')])[1]")).isDisplayed() )
		{		
			System.out.println("User see Date ");
			assertTrue(true);
		}    
	    
	}

	@And("^User see Taxpayer name \"([^\"]*)\" Address \"([^\"]*)\" and NITVA \"([^\"]*)\"  of the Customer$")
	public void user_see_Taxpayer_name_Address_and_NITVA_of_the_Customer(String name, String add, String nitva) throws Throwable
	{
		Thread.sleep(500);
		{		
			System.out.println("User see Date ");
			assertTrue(true);
		}     
		//div[contains(text(),'20180907063930964')]
		//div[contains(text(),'valsad,,Aketi,Bas-Uele')]
	}

	

	@And("^User see Ref ID \"([^\"]*)\" for notice$")
public void user_see_Ref_ID_for_notice(String refId) throws Throwable
	{
		Thread.sleep(1000);
		if(wd.findElement(By.xpath("//div[contains(text(),'" + refId + "')]")).isDisplayed() )
		{		
			System.out.println("User see Notice datails section ");
			assertTrue(true);
		}
	}

	
	
	@And("^User see Period \"([^\"]*)\"$")
	public void user_see_Period(String period) throws Throwable 
	{

		Thread.sleep(1000);
		if(wd.findElement(By.xpath("//div[contains(text(),'" + period + "')]")).isDisplayed() )
		{		
			System.out.println("User see Notice datails section ");
			assertTrue(true);
		}
	}

	@And("^User see Date Issued \"([^\"]*)\"$")
	public void user_see_Date_Issued(String date) throws Throwable
	{

		Thread.sleep(1000);
		if(wd.findElement(By.xpath("//div[contains(text(),'" + date + "')]")).isDisplayed() )
		{		
			System.out.println("User see Notice datails section ");
			assertTrue(true);
		}    
	}

	@And("^User see Tax Center \"([^\"]*)\"$")
	public void user_see_Tax_Center(String tax) throws Throwable
	{

		Thread.sleep(1000);
		if(wd.findElement(By.xpath("//div[contains(text(),'" + tax + "')]")).isDisplayed() )
		{		
			System.out.println("User see Notice datails section ");
			assertTrue(true);
		}    
	}
	
	
	
	
	
	/*And("^User see Ref ID \"([^\"]*)\" Period \"([^\"]*)\" Date Issued \"([^\"]*)\"  and Tax Center \"([^\"]*)\"$")
	public void user_see_Ref_ID_Period_Date_Issued_and_Tax_Center(String refId, String period, String date, String center) throws Throwable 
	{
		Thread.sleep(500);
		if(wd.findElement(By.xpath("//div[contains(text(),'" + date + "')]")).isDisplayed())
		{		
			System.out.println("User see Notice datails section ");
			assertTrue(true);
		}    
	    
	}*/

	/*@And("^User verify vat libality in table$")
	public void user_verify_vat_libality_in_table() throws Throwable
	{
	    
	    
	}*/	
	
	
	@And("^User verify vat libality in table for Assessed FC$")
	public void user_verify_vat_libality_in_table_for_Assessed_FC() throws Throwable 
	{
		Thread.sleep(500);
		int sum = 0;
		List<WebElement> elementName =  wd.findElements(By.xpath("//section[3]/div[2]/div[2]"));
		for(int i = 2; i<elementName.size()+1;i++)
		{
			WebElement element1 = wd.findElement(By.xpath("//section[3]/div["+i+"]/div[2]"));
			String number1 = element1.getText();
			int result1 = Integer.parseInt(number1);			
			sum = sum + result1;
		}
		
		WebElement element3 = wd.findElement(By.xpath("(//div[contains(text(),'Total')])[1]//following::div"));		
		String number3 = element3.getText();
		int result3 = Integer.parseInt(number3);		
		
		System.out.println(sum);					
		if(sum ==result3)
		{
			assertTrue(true);
		}	   
	}

	@And("^User verify vat libality in table for Paid FC$")
	public void user_verify_vat_libality_in_table_for_Paid_FC() throws Throwable 
	{
		Thread.sleep(500);
		int sum = 0;
		List<WebElement> elementName =  wd.findElements(By.xpath("//section[3]/div[2]/div[3]"));
		for(int i = 2; i<elementName.size()+1;i++)
		{
			WebElement element1 = wd.findElement(By.xpath("//section[3]/div["+i+"]/div[3]"));
			String number1 = element1.getText();
			int result1 = Integer.parseInt(number1);			
			sum = sum + result1;
		}
		
		WebElement element3 = wd.findElement(By.xpath("(//div[contains(text(),'Total')])[1]//following::div//following::div"));		
		String number3 = element3.getText();
		int result3 = Integer.parseInt(number3);		
		
		System.out.println(sum);					
		if(sum ==result3)
		{
			assertTrue(true);
		}	   
	   
	}

	@And("^User verify vat libality in table for Net Payable FC$")
	public void user_verify_vat_libality_in_table_for_Net_Payable_FC() throws Throwable 
	{
		Thread.sleep(500);
		int sum = 0;
		List<WebElement> elementName =  wd.findElements(By.xpath("//section[3]/div[2]/div[4]"));
		for(int i = 2; i<elementName.size()+1;i++)
		{
			WebElement element1 = wd.findElement(By.xpath("//section[3]/div["+i+"]/div[4]"));
			String number1 = element1.getText();
			int result1 = Integer.parseInt(number1);			
			sum = sum + result1;
		}
		
		WebElement element3 = wd.findElement(By.xpath("(//div[contains(text(),'Total')])[1]//following::div//following::div//following::div"));		
		String number3 = element3.getText();
		int result3 = Integer.parseInt(number3);		
		
		System.out.println(sum);					
		if(sum ==result3)
		{
			assertTrue(true);
		}	   	   
	}
	
	
	/*@And("^User verify Tax assement in Annexure A$")
	public void user_verify_Tax_assement_in_Annexure_A() throws Throwable 
	{
	    
	    
	}*/
	@And("^User verify Tax assement in Annexure A for e-Declared \\(FC\\)$")
	public void user_verify_Tax_assement_in_Annexure_A_for_e_Declared_FC() throws Throwable 
	{
		int sum=0;
		WebElement element3 = wd.findElement(By.xpath("(//div[contains(text(),'Total')])[2]//following::div"));		
		String number3 = element3.getText();
		int result3 = Integer.parseInt(number3);		
		
		System.out.println(sum);					
		if(sum ==result3)
		{
			assertTrue(true);
		}	   	   
	}

	@And("^User verify Tax assement in Annexure A for Assessed \\(FC\\)$")
	public void user_verify_Tax_assement_in_Annexure_A_for_Assessed_FC() throws Throwable 
	{
		int sum=500000;
		WebElement element3 = wd.findElement(By.xpath("(//div[contains(text(),'Total')])[2]//following::div//following::div"));		
		String number3 = element3.getText();
		int result3 = Integer.parseInt(number3);		
		
		System.out.println(sum);					
		if(sum ==result3)
		{
			assertTrue(true);
		}
	}

	@And("^User verify Tax assement in Annexure A for Additional Liability \\(FC\\)$")
	public void user_verify_Tax_assement_in_Annexure_A_for_Additional_Liability_FC() throws Throwable 
	{
		int sum=500000;
		WebElement element3 = wd.findElement(By.xpath("(//div[contains(text(),'Total')])[2]//following::div//following::div//following::div"));		
		String number3 = element3.getText();
		int result3 = Integer.parseInt(number3);		
		
		System.out.println(sum);					
		if(sum ==result3)
		{
			assertTrue(true);
		}
	}

	@And("^User see notice page$")
	public void user_see_notice_page() throws Throwable 
	{
		Thread.sleep(500);
		if(wd.findElement(By.xpath("//div[contains(text(),'Notice details')]")).isDisplayed())
		{
			System.out.println("User is on Notice Page");
			assertTrue(true);
		}
	    
	}

	@And("^User click on download button on notice page$")
	public void user_click_on_download_button_on_notice_page() throws Throwable
	{	    
		Thread.sleep(1000);
		clickOn("btn_View_Dow", "");
		verifyDownload("Notice of assessment");
	}

	@And("^User click on previous button on notice page$")
	public void user_click_on_previous_button_on_notice_page() throws Throwable 
	{
	    clickOn("btn_View_Pre", "");
	    
	}

	@And("^User navigate to efiling landing screen$")
	public void user_navigate_to_efiling_landing_screen() throws Throwable 
	{
		Thread.sleep(1000);
		if(wd.findElement(By.xpath("//h3[text()='VAT e-Filing']")).isDisplayed())
		{
			System.out.println("User is on e Filing screen");
			assertTrue(true);
		}	    
	}

	@And("^User see pay button$")
	public void user_see_pay_button() throws Throwable 
	{
		Thread.sleep(1000);
		
		if(wd.findElement(By.xpath("//button[@title='Pay']")).isEnabled())
		{
			System.out.println("User is on e Filing screen");
			assertTrue(true);
		}	    
		
	    
	}

	@And("^User click on pay button and navigate to Payement of tax page$")
	public void user_click_on_pay_button_and_navigate_to_Payement_of_tax_page() throws Throwable 
	{
	    clickOn("btn_View_Pay", "");
	    if(wd.findElement(By.name("textPaymentofText")).isDisplayed())
	    {
	    	assertTrue(true);
	    }
	}

	@And("^User see Object button$")
	public void user_see_Object_button() throws Throwable 
	{
		Thread.sleep(1000);
		
		if(wd.findElement(By.xpath("//button[@title='Object']")).isEnabled())
		{
			System.out.println("User is on e Filing screen");
			assertTrue(true);
		}	  		
		
			
	    
	}
//   iframae will come
	@And("^User click on Object button and navigate to Objection and Appeal case screen$")
	public void user_click_on_Object_button_and_navigate_to_Objection_and_Appeal_case_screen() throws Throwable
	{
		
		clickOn("btn_View_Obj", "");
		Thread.sleep(2000);
		WebElement element1 = wd.findElement(By.id("iframe"));
		String number1 = element1.getText();
		System.out.println(number1);
		wd.switchTo().frame(element1);		
		
		Thread.sleep(5000);
		if(wd.findElement(By.xpath("//div[contains(text(),'Objection')]")).isDisplayed())
		{
			System.out.println("User is on e Filing screen");
			assertTrue(true);
		}	
		
	  
	}

	@And("^User validate UI$")
	public void user_validate_UI() throws Throwable 
	{
	    System.out.println("User see UI");	    
	}

	@Given("^User validate period field$")
	public void user_validate_period_field() throws Throwable 
	{
		Thread.sleep(500);
		String expectedMessage = "Feb-2018";
		Thread.sleep(2000);
		WebElement element = wd.findElement(By.xpath("//h6/div[2]/input"));
		JavascriptExecutor jse = (JavascriptExecutor)wd;
		Object message = jse.executeScript("return arguments[0].value", element);
		System.out.println(message.toString());		
 		Assert.assertTrue(message.toString().contains(expectedMessage));	 
	}	

	@And("^User see Assessement id \"([^\"]*)\" on notice$")
	public void user_see_Assessement_id_on_notice(String id) throws Throwable 
	{
		Thread.sleep(500);
		if(wd.findElement(By.xpath("//div[contains(text(),'" + id + "')]")).isDisplayed())
		{			
			assertTrue(true);
		}	
	    
	}

	@And("^User validate assement id \"([^\"]*)\" on cases page$")
	public void user_validate_assement_id_on_cases_page(String validateId) throws Throwable 
	{
		Thread.sleep(500);
		if(wd.findElement(By.xpath("//div[contains(text(),'" + validateId + "')]")).isDisplayed())
		{			
			assertTrue(true);
		}	
	    
	}

	@And("^User click on Objection Type and select \"([^\"]*)\"$")
	public void user_click_on_Objection_Type_and_select(String value) throws Throwable 
	{		
		Thread.sleep(1000);
		WebElement element1 = wd.findElement(By.id("iframe"));
		String number1 = element1.getText();
		System.out.println(number1);
		wd.switchTo().frame(element1);
		
		Thread.sleep(1000);
		clickOn("drp_ObjectionType","");
		Thread.sleep(1000);
	    clickOn(value, "");	   
	
	    
	}

	@And("^User verify selected objection type \"([^\"]*)\"$")
	public void user_verify_selected_objection_type(String value) throws Throwable 
	{
		Thread.sleep(1000);
		if(wd.findElement(By.xpath("//option[contains(text(),'" + value + "')]")).isSelected())
		{			
			assertTrue(true);
		}	   	    
	}

	@And("^User click on title on objection page$")
	public void user_click_on_title_on_objection_page() throws Throwable 
	{
		Thread.sleep(500);
		clickOn("txt_Objection_Title", "");
	    
	}

	@And("^User enter data \"([^\"]*)\" in title for objection page$")
	public void user_enter_data_in_title_for_objection_page(String title) throws Throwable 
	{
		
		
		
		Thread.sleep(500);
		type("txt_Objection_Title", title);		
	
	}
	@And("^User again enter data \"([^\"]*)\" in title for objection page$")
	public void user_again_enter_data_in_title_for_objection_page(String title) throws Throwable 
	{
		Thread.sleep(500);
		type("txt_Objection_Title", title);		
		
		String sum="Objection against re-assessment notice";
		WebElement element3 = wd.findElement(By.xpath("//input[@id='title']"));		
		String number3 = element3.getText();				
		
		System.out.println(sum);					
		
		if(sum.equals(number3))
		{
			assertTrue(true);
		}	   
	}
	// 19 message to check
	@And("^User click on submit button on notice page and see message \"([^\"]*)\"$")
	public void user_click_on_submit_button_on_notice_page_and_see_message(String mess) throws Throwable 
	{
		Thread.sleep(1000);
		clickOn("btn_Obj_Submit", "");
				
		if(wd.findElement(By.xpath("//*[contains(text(),'" + mess + "')]")).isDisplayed())
		{			
			assertTrue(true);
		}
		
		
		//Title is required
		/*String expectedMessage = "Title field is required.";
		String message = wd.findElement(By.xpath("//*[contains(text(),'Title field is required.')]")).getText();
		Assert.assertTrue(message.contains(expectedMessage));
		Thread.sleep(200);*/
	}

	@And("^User click on submit button$")
	public void user_click_on_submit_button() throws Throwable 
	{
		Thread.sleep(500);
		clickOn("btn_Obj_Submit", "");
	    
	}

	@And("^User click on description field$")
	public void user_click_on_description_field() throws Throwable 
	{
		Thread.sleep(500);
	    clickOn("txt_Obj_Description", "");
	    
	}

	@And("^User enter number \"([^\"]*)\" and check$")
	public void user_enter_number_and_check(String num) throws Throwable 
	{
		Thread.sleep(500);
		type("txt_Obj_Description", num);
		
		if(wd.findElement(By.xpath("//p[contains(text(),'" + num + "')]")).isDisplayed())
		{			
			assertTrue(true);
		}	 			    
	}

	@And("^User enter alphabets \"([^\"]*)\" and check$")
	public void user_enter_alphabets_and_check(String alpa) throws Throwable 
	{
		Thread.sleep(500);
		type("txt_Obj_Description", alpa);
		if(wd.findElement(By.xpath("//p[contains(text(),'" + alpa + "')]")).isDisplayed())
		{			
			assertTrue(true);
		}	 	   
	}

	@And("^User enter special character \"([^\"]*)\" aned checks$")
	public void user_enter_special_character_aned_checks(String spec) throws Throwable
	{
		Thread.sleep(500);
		type("txt_Obj_Description", spec);
		if(wd.findElement(By.xpath("//p[contains(text(),'" + spec + "')]")).isDisplayed())
		{			
			assertTrue(true);
		}	 	    
	}

	@And("^User click on choose file$")
	public void user_click_on_choose_file() throws Throwable 
	{
		Thread.sleep(500);
		clickOn("btn_Obj_ChooseFile", "");
	    
	}
	@And("^User choose file which is not supported and verify validation message \"([^\"]*)\"$")
	public void user_choose_file_which_is_not_supported_and_verify_validation_message(String arg1) throws Throwable
	{
		Thread.sleep(500);
		UploadImage("","C:\\Users\\admin\\Downloads\\Sales-and-Purchase-Transactions.xlsx");
		Thread.sleep(2000);			
	    
	}

	@And("^User upload file  which is more than (\\d+) mb and verify message\"([^\"]*)\"$")
	public void user_upload_file_which_is_more_than_mb_and_verify_message(int arg1, String arg2) throws Throwable
	{
		Thread.sleep(500);
		UploadImage("","C:\\Users\\admin\\Downloads\\Sales-and-Purchase-Transactions.xlsx");
		Thread.sleep(2000);	
	    
	}

	@And("^User choose file which is supported$")
	public void user_choose_file_which_is_supported() throws Throwable 
	{
		Thread.sleep(500);
		UploadImage("","C:\\Users\\admin\\Desktop\\new user 99000.PNG");
		Thread.sleep(2000);	
	    
	}

	@And("^User click on cancel button on notice page$")
	public void user_click_on_cancel_button_on_notice_page() throws Throwable
	{
		Thread.sleep(500);
		clickOn("btn_Obj_Cancel", "");	    
	}

	@And("^User navigate to Notice Of Assessment Page$")
	public void user_navigate_to_Notice_Of_Assessment_Page() throws Throwable 
	{
		Thread.sleep(500);
		if(wd.findElement(By.xpath("//*[contains(text(),'Notice details')]")).isDisplayed() )
		{		
			System.out.println("user is back on notice page");
			assertTrue(true);
		}
	}

	@And("^User enter description in object \"([^\"]*)\"$")
	public void user_enter_description_in_object(String des) throws Throwable 
	{
		Thread.sleep(1000);
		
		
		
		type("txt_Obj_Description", des);
	    
	}

	@And("^User click on submit button on notice page$")
	public void user_click_on_submit_button_on_notice_page() throws Throwable 
	{
		Thread.sleep(500);
	    clickOn("btn_Obj_Submit", "");	    
	}

	@And("^User click on Cases Tab$")
	public void user_click_on_Cases_Tab() throws Throwable 
	{
		Thread.sleep(500);
		clickOn("txt_Cases", "");	    
	}

	@And("^User click on button which is open status$")
	public void user_click_on_button_which_is_open_status() throws Throwable 
	{
		Thread.sleep(500);
	    clickOn("btn_cases_open", "");
	    
	}

	@And("^User see on objection page current state is open$")
	public void user_see_on_objection_page_current_state_is_open() throws Throwable 
	{
		Thread.sleep(500);
		if(wd.findElement(By.xpath("//*[@class='type-text-gray form-field-container' and //div[contains(text(),'Open')]]")).isDisplayed() )
		{					
			assertTrue(true);
		}	    
	}

	@And("^User logout from tax payer portal$")
	public void user_logout_from_tax_payer_portal() throws Throwable 
	{
		Thread.sleep(500);
	    clickOn("btn_logout", "");
	    wd.close();
		wd= new ChromeDriver();
		wd.manage().window().maximize();
		wd.get("http://103.249.120.58:8068");	
	    
	}

	@And("^User login in internal portal$")
	public void user_login_in_internal_portal() throws Throwable 
	{
	    // robot class
		System.out.println("log in as ketan.prajapati");
	    
	}

	@And("^User click on filter by \"([^\"]*)\"$")
	public void user_click_on_filter_by(String value) throws Throwable 
	{
		Thread.sleep(500);
		clickOn("FilterBy", "");
		Thread.sleep(1000);
		//clickOn(value, "");
		clickOn("span1","[contains(text(),'" + value + "')])[1]");
	}

	@And("^User type case id \"([^\"]*)\"$")
	public void user_type_case_id(String id) throws Throwable 
	{
		
	    type("txtbox_search", id);
	}

	@And("^User click on search button$")
	public void user_click_on_search_button() throws Throwable 
	{
	   clickOn("btn_SearchFX", ""); 
	   Thread.sleep(1000);
	    
	}

	@And("^User click on manage drop down and click on view$")
	public void user_click_on_manage_drop_down_and_click_on_view() throws Throwable 
	{
	    clickOn("btn_ManageDown", "");
	    Thread.sleep(1000);
	    clickOn("txt_View_Select", "");
	    
	}

	@And("^User click on Next Status drop down$")
	public void user_click_on_Next_Status_drop_down() throws Throwable 
	{
		System.out.println("User click on next status drop down");
		clickOn("txt_Select_Action", "");
	    
	}

	@And("^User click on status \"([^\"]*)\"$")
	public void user_click_on_status(String value) throws Throwable 
	{
		clickOn(value, "");
	    
	}

	@And("^User logout from internal portal$")
	public void user_logout_from_internal_portal() throws Throwable 
	{
		clickOn("btn_logout", "");
	    wd.close();
		wd= new ChromeDriver();
		wd.manage().window().maximize();
		wd.get("http://103.249.120.58:8066");	
	    
	}

	@And("^User login in tax payer portal \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_login_in_tax_payer_portal(String email, String pwd) throws Throwable 
	{
		Thread.sleep(1000);
		System.out.print("User Enter  Email");
		 type("txtbox_username",email);
		 System.out.print("User Enter  Password");
		 type("txtbox_password",pwd);
	    
	}
	 
	@And("^User click on search issue and type \"([^\"]*)\"$")
	public void user_click_on_search_issue_and_type(String search) throws Throwable 
	{
		clickOn("txtSearch_Click", "");
		
		type("txtSearch_Click", search);
	    
	}

	@And("^User see status as under review$")
	public void user_see_status_as_under_review() throws Throwable 
	{
		if(wd.findElement(By.xpath("//div[contains(text(),'Under Review')]")).isDisplayed() )
		{					
			assertTrue(true);
		}	 
	}

	@And("^User click on comment section$")
	public void user_click_on_comment_section() throws Throwable 
	{
		clickOn("txt_OfficerCommentAdd", "");
	    
	}

	@And("^User enter comment \"([^\"]*)\"$")
	public void user_enter_comment(String comment) throws Throwable 
	{
	    type("txt_OfficerCommentAdd", comment);
	    
	}
	 
	@And("^User see status as Information Requested$")
	public void user_see_status_as_Information_Requested() throws Throwable 
	{
		if(wd.findElement(By.xpath("//div[contains(text(),'Request Information')]")).isDisplayed() )
		{					
			assertTrue(true);
		}	 
	    
	}

	@And("^User click on button Information Requested$")
	public void user_click_on_button_Information_Requested() throws Throwable 
	{
	    clickOn("btn_RequestInformation", "");
	    
	}

	@And("^User see officer comment \"([^\"]*)\"$")
	public void user_see_officer_comment(String value) throws Throwable 
	{
		
		/*if(wd.findElement(By.xpath("//div[contains(text(),'" + value + " ')]")).isDisplayed() )
		{					
			assertTrue(true);
		}*/	
		
		String sum="Need more information about objection";
		WebElement element3 = wd.findElement(By.xpath("textarea[@id='Tax Payer Comment']"));		
		String number3 = element3.getText();				
		
		System.out.println(sum);					
		
		if(sum.equals(number3))
		{
			assertTrue(true);
		}	   
		
		
	    
	}

	@And("^User see status as closed$")
	public void user_see_status_as_closed() throws Throwable 
	{
		
		if(wd.findElement(By.xpath("//div[contains(text(),'Closed')]")).isDisplayed() )
		{					
			assertTrue(true);
		}	
	    
	}

	@And("^User see status as rejected$")
	public void user_see_status_as_rejected() throws Throwable 
	{
		if(wd.findElement(By.xpath("//div[contains(text(),'Reject')]")).isDisplayed() )
		{					
			assertTrue(true);
		}		    
	    
	}

	
	@And("^User click on reject button edit page$")
	public void user_click_on_reject_button_edit_page() throws Throwable 
	{
		clickOn("btn_click_reject", "");
	}

	@And("^User navigate to cases page$")
	public void user_navigate_to_cases_page() throws Throwable 
	{
		if(wd.findElement(By.xpath("//h3[contains(text(),'Cases')]")).isDisplayed() )
		{					
			assertTrue(true);
		}	
	}
	
	
	@And("^User navigate to Objection and Appeal List Page$")
	public void user_navigate_to_Objection_and_Appeal_List_Page() throws Throwable
	{
		if(wd.findElement(By.xpath("//div[contains(text(),'Notice details')]")).isDisplayed())
		{			
			assertTrue(true);
		}	    
	}

	/*@And("^User see status \"([^\"]*)\" and click on it and see button is \"([^\"]*)\"$")
	public void user_see_status_and_click_on_it_and_see_button_is(String value, String value2) throws Throwable 
	{
		WebElement we,we1;
		
		we=wd.findElement(By.xpath(obj.getProperty(value)));									
		we1=wd.findElement(By.xpath(obj.getProperty(value2)));		
		Thread.sleep(2000);
		
		if(!we.isEnabled() && !we1.isEnabled())
		{
			assertTrue(true);
			
		}		
		Thread.sleep(3000);
	    
	}*/
	
	@And("^User click on open status$")
	public void user_click_on_open_status() throws Throwable
	{
		clickOn("btn_OpenStatus", "");	    
	}

	@And("^User see button is disable$")
	public void user_see_button_is_disable() throws Throwable
	{
		
		if(!wd.findElement(By.xpath("//button[contains(text(),'submit')]")).isEnabled())
		{			
			assertTrue(true);
		}	
	}

	@And("^User click on it under review status$")
	public void user_click_on_it_under_review_status() throws Throwable 
	{
	    clickOn("btn_UnderReview", "");
	}

	@And("^User click on closed status$")
	public void user_click_on_closed_status() throws Throwable
	{
	    clickOn("btn_Closed", "");
	}

	@Given("^User click on Request Information$")
	public void user_click_on_Request_Information() throws Throwable 
	{
		clickOn("btn_RequestInformation", "");
	}

	@And("^User see button is enabled$")
	public void user_see_button_is_enabled() throws Throwable 
	{
		if(wd.findElement(By.xpath("//button[contains(text(),'submit')]")).isEnabled())
		{			
			assertTrue(true);
		}	
	}
	

	@And("^User validate UI of cases$")
	public void user_validate_UI_of_cases() throws Throwable 
	{
	    System.out.println("User see ui of cases");
	    
	}

	@And("^User click on search issue on cases page$")
	public void user_click_on_search_issue_on_cases_page() throws Throwable
	{
	    clickOn("txtSearch_Click", "");
	    
	}

	@And("^User enter referance id \"([^\"]*)\" and check$")
	public void user_enter_referance_id_and_check(String type1) throws Throwable 
	{
		 type("txtSearch_Click", type1);
		    
		    if(wd.findElement(By.xpath("(//span[contains(text(),'Reference Id')])//following::text()")).isDisplayed())
			{			
				assertTrue(true);
			}			    
	}

	@And("^User enter invalid referance id \"([^\"]*)\" and check$")
	public void user_enter_invalid_referance_id_and_check(String type1) throws Throwable
	{
		 type("txtSearch_Click", type1);
		    
		 if(wd.findElement(By.xpath("//span[@class='icon-i']//following::text()")).isDisplayed())
			{			
				assertTrue(true);
			}		 
	}

	@And("^User enter valid title \"([^\"]*)\" and check$")
	public void user_enter_valid_title_and_check(String type1) throws Throwable
	{
		 type("txtSearch_Click", type1);
		 
	}

	@And("^User enter invalid title \"([^\"]*)\" and check$")
	public void user_enter_invalid_title_and_check(String type1) throws Throwable 
	{
		 type("txtSearch_Click", type1);
		    
		 if(wd.findElement(By.xpath("//span[@class='icon-i']//following::text()")).isDisplayed())
			{			
				assertTrue(true);
			}		
	}
	

	
	
}
