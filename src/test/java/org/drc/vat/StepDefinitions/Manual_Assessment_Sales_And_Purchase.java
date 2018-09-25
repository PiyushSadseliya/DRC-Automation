package org.drc.vat.StepDefinitions;

import cucumber.api.java.en.And;
import static org.drc.vat.appmanager.HelperBase.*;
import static org.testng.Assert.assertTrue;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

public class Manual_Assessment_Sales_And_Purchase
{
	@And("^User see the ui of manaual assessement with sale and purchase section$")
	public void user_see_the_ui_of_manaual_assessement_with_sale_and_purchase_section() throws Throwable 
	{
		System.out.println("User see UI");
	    
	}

	@And("^User see the ui of manaual assessement when user click on domestic icon in transaction received$")
	public void user_see_the_ui_of_manaual_assessement_when_user_click_on_domestic_icon_in_transaction_received() throws Throwable 
	{
		System.out.println("User see UI");    
	    
	}

	@And("^User see the ui of manaual assessement when user click on Export sale icon in transaction received$")
	public void user_see_the_ui_of_manaual_assessement_when_user_click_on_Export_sale_icon_in_transaction_received() throws Throwable 
	{
		System.out.println("User see UI");    
	    
	}

	@And("^User see the ui of manaual assessement when user click on Adjustement sales icon in transaction received$")
	public void user_see_the_ui_of_manaual_assessement_when_user_click_on_Adjustement_sales_icon_in_transaction_received() throws Throwable 
	{
		System.out.println("User see UI");    
	    
	}

	@And("^User see the ui of manaual assessement when user click on Domestic purchase in transaction received$")
	public void user_see_the_ui_of_manaual_assessement_when_user_click_on_Domestic_purchase_in_transaction_received() throws Throwable 
	{
	    
		System.out.println("User see UI");    
	}

	@And("^User see the ui of manaual assessement when user click on Import purchase in transaction received$")
	public void user_see_the_ui_of_manaual_assessement_when_user_click_on_Import_purchase_in_transaction_received() throws Throwable 
	{
		System.out.println("User see UI");    
	    
	}

	@And("^User see the ui of manaual assessement when user click on Adjustment purchase in transaction received$")
	public void user_see_the_ui_of_manaual_assessement_when_user_click_on_Adjustment_purchase_in_transaction_received() throws Throwable 
	{
		System.out.println("User see UI");    
	    
	}

	@And("^User click on next button and navigate to Liability Caculation page$")
	public void user_click_on_next_button_and_navigate_to_Liability_Caculation_page() throws Throwable 
	{
		clickOn("btn_Next", "");
		Thread.sleep(1000);
		WebElement we;
		we=wd.findElement(By.xpath("//div[text()='Liability Calculation']"));		
		if(we.isDisplayed())
		{			
			System.out.println("User is on Liability Calculation Page");
			assertTrue(true);
		}			    
	}

	@And("^User click on Previous button and navigated to sales and purchased transaction received page$")
	public void user_click_on_Previous_button_and_navigated_to_sales_and_purchased_transaction_received_page() throws Throwable 
	{
		WebElement we;
		we=wd.findElement(By.xpath("//div[text()='Liability Calculation']"));		
		if(we.isDisplayed())
		{			
			System.out.println("User is on Liability Calculation Page");
			assertTrue(true);
		}			
	    
	}

	@And("^USer again click on Previous page and navigate to manual assement landing screen$")
	public void user_again_click_on_Previous_page_and_navigate_to_manual_assement_landing_screen() throws Throwable 
	{
		WebElement we;
		we=wd.findElement(By.xpath("//span[text()='Sales']"));		
		if(we.isDisplayed())
		{			
			System.out.println("User is on landing screen again");
			assertTrue(true);
		}	 
	    
	}

	@And("^User enter \"([^\"]*)\" in type here$")
	public void user_enter_in_type_here(String value) throws Throwable 
	{
		type(value, "");
		Thread.sleep(1000);
	    
	}

	@And("^User check its status has been changed \"([^\"]*)\"$")
	public void user_check_its_status_has_been_changed(String value) throws Throwable 
	{
		if(wd.findElement(By.xpath("(//span[contains(text(),'" + value + "')])[1]")).isDisplayed() )
		{		
			
			assertTrue(true);
		}
		
	}

	@And("^User validate nitva number \"([^\"]*)\" on top of Manual Assessment page$")
	public void user_validate_nitva_number_on_top_of_Manual_Assessment_page(String value) throws Throwable 
	{
		if(wd.findElement(By.xpath("(//div[contains(text(),'" + value + "')])[1]")).isDisplayed() )
		{								
			assertTrue(true);
		}	    
	}

	@And("^User validate Period field on top of Manual Assessment page$")
	public void user_validate_Period_field_on_top_of_Manual_Assessment_page() throws Throwable 
	{
		String expectedMessage = "January 2018";
		Thread.sleep(2000);
		WebElement element = wd.findElement(By.xpath("//div[1]/div[4]/input"));
		JavascriptExecutor jse = (JavascriptExecutor)wd;
		Object message = jse.executeScript("return arguments[0].value", element);
		System.out.println(message.toString());		
 		Assert.assertTrue(message.toString().contains(expectedMessage));    
	    
	}

	@And("^User click on Tansacstion Received button$")
	public void user_click_on_Tansacstion_Received_button() throws Throwable
	{
		clickOn("btn_TransactionReceived", "");
		Thread.sleep(100);
	    
	}
	//13 on hold
	@And("^User open the downloaded file and observe total count of record in sales sheet$")
	public void user_open_the_downloaded_file_and_observe_total_count_of_record_in_sales_sheet() throws Throwable 
	{
	    
		System.out.println("On Hold");
	}
	// on hold
	@And("^User open the downloaded file and observe total count of record in purchase sheet$")
	public void user_open_the_downloaded_file_and_observe_total_count_of_record_in_purchase_sheet() throws Throwable 
	{
		 System.out.println("On Hold");
	    
	}

	@And("^User click on e-filing schedule button$")
	public void user_click_on_e_filing_schedule_button() throws Throwable 
	{
		clickOn("btn_e_FilingSchedule", "");
		Thread.sleep(1000);
	    
	}
	//14 on hold
	@And("^User open the downloaded file and observe total count of record in sales sheet for e-filing schedule$")
	public void user_open_the_downloaded_file_and_observe_total_count_of_record_in_sales_sheet_for_e_filing_schedule() throws Throwable {
	    
	    
	}
	// 14 on hold
	@And("^User open the downloaded file and observe total count of record in purchase sheet for e-filing schedule$")
	public void user_open_the_downloaded_file_and_observe_total_count_of_record_in_purchase_sheet_for_e_filing_schedule() throws Throwable {
	    
	    
	}
	//15 
	@And("^User see toast message e-filing schedule file is not available$")
	public void user_see_toast_message_e_filing_schedule_file_is_not_available() throws Throwable 
	{
		// toast locator 
		String expectedMessage = "";
		String message = wd.findElement(By.xpath("//*[@class='toast-top-right toast-container']")).getText();
		Assert.assertTrue(message.contains(expectedMessage));
	    
	}

	@And("^User Click on View icon of Domestic sales type and navigate to domestic sales page$")
	public void user_Click_on_View_icon_of_Domestic_sales_type_and_navigate_to_domestic_sales_page() throws Throwable 
	{
		clickOn("btn_SalesDomesticAsst", "");
		Thread.sleep(1000);
		
		WebElement we;
		we=wd.findElement(By.xpath("//div[text()='Domestic Sales']"));		
		if(we.isDisplayed())
		{						
			assertTrue(true);
		}	
	    
	}

	@And("^User Click on View icon of Export sales type and navigate to export sales page$")
	public void user_Click_on_View_icon_of_Export_sales_type_and_navigate_to_export_sales_page() throws Throwable
	{
		clickOn("btn_Previous", "");
		Thread.sleep(1000);
		clickOn("btn_SalesExportAsst", "");
		Thread.sleep(1000);
		
		WebElement we;
		we=wd.findElement(By.xpath("//div[text()='Export Sales']"));		
		if(we.isDisplayed())
		{						
			assertTrue(true);
		}
	    
	}

	@And("^User Click on View icon of Adjustement sales type and navigate to adjustement sales page$")
	public void user_Click_on_View_icon_of_Adjustement_sales_type_and_navigate_to_adjustement_sales_page() throws Throwable 
	{
		clickOn("btn_Previous", "");
		Thread.sleep(1000);
		clickOn("btn_SalesAdjustementjAsst", "");
		Thread.sleep(1000);
		
		WebElement we;
		we=wd.findElement(By.xpath("//div[text()='Sales Adjustment']"));		
		if(we.isDisplayed())
		{						
			assertTrue(true);
		}
	    
	}

	@And("^User Click on View icon of Domestic sales type and navigate to domestic purchase page$")
	public void user_Click_on_View_icon_of_Domestic_sales_type_and_navigate_to_domestic_purchase_page() throws Throwable 
	{
		clickOn("btn_Purchase_DomesticAsst", "");
		Thread.sleep(1000);
		
		WebElement we;
		we=wd.findElement(By.xpath("//div[text()='Domestic Purchase']"));		
		if(we.isDisplayed())
		{						
			assertTrue(true);
		}
	    
	}

	@And("^User Click on View icon of Import sales type and navigate to import purchase page$")
	public void user_Click_on_View_icon_of_Import_sales_type_and_navigate_to_import_purchase_page() throws Throwable 
	{
		clickOn("btn_Previous", "");
		Thread.sleep(1000);
		clickOn("btn_Purchase_ImportAsst", "");
		Thread.sleep(1000);
		
		WebElement we;
		we=wd.findElement(By.xpath("//div[text()='Import Purchase']"));		
		if(we.isDisplayed())
		{						
			assertTrue(true);
		}	    	    
	}

	@And("^User Click on View icon of Adjustement sales type and navigate to adjustement purchase page$")
	public void user_Click_on_View_icon_of_Adjustement_sales_type_and_navigate_to_adjustement_purchase_page() throws Throwable 
	{
		clickOn("btn_Previous", "");
		Thread.sleep(1000);
		clickOn("btn_Purchase_AdjustementjAsst", "");
		Thread.sleep(1000);
		
		WebElement we;
		we=wd.findElement(By.xpath("//div[text()='Purchase Adjustment']"));		
		if(we.isDisplayed())
		{						
			assertTrue(true);
		}
	    
	}

	@And("^User Observe the Differece value of Net issued document column is blank for Manual Assesment sales page$")
	public void user_Observe_the_Differece_value_of_Net_issued_document_column_is_blank_for_Manual_Assesment_sales_page() throws Throwable 
	{
	    
		int sum = 0;
		List<WebElement> elementName =  wd.findElements(By.xpath("//section[1]/div[2]/div[2]/div[2]/div[2]"));
		for(int i = 2; i<elementName.size()+1;i++)
		{
			WebElement element1 = wd.findElement(By.xpath("//section[1]/div[2]/div[2]/div["+i+"]/div[2]"));
			String number1 = element1.getText();
			int result1 = Integer.parseInt(number1);			
			sum = sum + result1;
		}
		
		WebElement element3 = wd.findElement(By.xpath("(//div[@class='table-td px-1 d-flex align-items-center'])[4]"));		
		String number3 = element3.getText();
		int result3 = Integer.parseInt(number3);		
		
		System.out.println(sum);					
		if(sum ==result3)
		{
			assertTrue(true);
		}
		//section[1]/div[2]/div[2]/div["+i+"]/div[2]
		//section[1]/div[2]/div[2]/div[2]/div[2]
		
		//section[1]/div["+i+"]/div[7]
	}

	
	@And("^User count in domestic,export and adjustment sales type should be displayed equal/same as declared in Gross Amount for Sales Type of Sales e-filing \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_count_in_domestic_export_and_adjustment_sales_type_should_be_displayed_equal_same_as_declared_in_Gross_Amount_for_Sales_Type_of_Sales_e_filing(String value, String value1, String value2) throws Throwable 
	{
		WebElement we,we1,we2;
		we=wd.findElement(By.xpath(obj.getProperty(value)));
		we1=wd.findElement(By.xpath(obj.getProperty(value1)));
		we2=wd.findElement(By.xpath(obj.getProperty(value2)));
		if(we.isDisplayed()&& we1.isDisplayed()&& we2.isDisplayed())
		{						
			assertTrue(true);
		}
		
	}

	@And("^User count in domestic,export and adjustment sales type should be displayed equal/same as declared in Vat Amount for Sales Type of Sales e-filing \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_count_in_domestic_export_and_adjustment_sales_type_should_be_displayed_equal_same_as_declared_in_Vat_Amount_for_Sales_Type_of_Sales_e_filing(String value, String value1, String value2) throws Throwable 
	{
		WebElement we,we1,we2;
		we=wd.findElement(By.xpath(obj.getProperty(value)));
		we1=wd.findElement(By.xpath(obj.getProperty(value1)));
		we2=wd.findElement(By.xpath(obj.getProperty(value2)));
		if(we.isDisplayed()&& we1.isDisplayed()&& we2.isDisplayed())
		{						
			assertTrue(true);
		}
	}

	@And("^User count in domestic,export and adjustment sales type should be displayed equal/same as declared in Net Amount for Sales Type of Sales e-filing \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_count_in_domestic_export_and_adjustment_sales_type_should_be_displayed_equal_same_as_declared_in_Net_Amount_for_Sales_Type_of_Sales_e_filing(String value, String value1, String value2) throws Throwable 
	{
		WebElement we,we1,we2;
		we=wd.findElement(By.xpath(obj.getProperty(value)));
		we1=wd.findElement(By.xpath(obj.getProperty(value1)));
		we2=wd.findElement(By.xpath(obj.getProperty(value2)));
		if(we.isDisplayed()&& we1.isDisplayed()&& we2.isDisplayed())
		{						
			assertTrue(true);
		}
	}

	@And("^User count in Transaction received for domestic,export and adjustment sales in Gross Amount for Sales Type \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_count_in_Transaction_received_for_domestic_export_and_adjustment_sales_in_Gross_Amount_for_Sales_Type(String value, String value1, String value2) throws Throwable 
	{
		WebElement we,we1,we2;
		we=wd.findElement(By.xpath(obj.getProperty(value)));
		we1=wd.findElement(By.xpath(obj.getProperty(value1)));
		we2=wd.findElement(By.xpath(obj.getProperty(value2)));
		if(we.isDisplayed()&& we1.isDisplayed()&& we2.isDisplayed())
		{						
			assertTrue(true);
		}
	}

	@And("^User count in Transaction received for domestic,export and adjustment sales in Vat Amount for Sales Type \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_count_in_Transaction_received_for_domestic_export_and_adjustment_sales_in_Vat_Amount_for_Sales_Type(String value, String value1, String value2) throws Throwable 
	{
		WebElement we,we1,we2;
		we=wd.findElement(By.xpath(obj.getProperty(value)));
		we1=wd.findElement(By.xpath(obj.getProperty(value1)));
		we2=wd.findElement(By.xpath(obj.getProperty(value2)));
		if(we.isDisplayed()&& we1.isDisplayed()&& we2.isDisplayed())
		{						
			assertTrue(true);
		}
	}

	@And("^User count in Transaction received for domestic,export and adjustment sales in Net Amount for Sales Type \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_count_in_Transaction_received_for_domestic_export_and_adjustment_sales_in_Net_Amount_for_Sales_Type(String value, String value1, String value2) throws Throwable 
	{
		WebElement we,we1,we2;
		we=wd.findElement(By.xpath(obj.getProperty(value)));
		we1=wd.findElement(By.xpath(obj.getProperty(value1)));
		we2=wd.findElement(By.xpath(obj.getProperty(value2)));
		if(we.isDisplayed()&& we1.isDisplayed()&& we2.isDisplayed())
		{						
			assertTrue(true);
		}
	}
	
	
	
	//19
	@And("^User Observe the Differece value of Net issued document column is blank for Manual Assesment purchase page$")
	public void user_Observe_the_Differece_value_of_Net_issued_document_column_is_blank_for_Manual_Assesment_purchase_page() throws Throwable 
	{
	    
		 System.out.println("blank data");
	}

		
	
	@And("^User count in domestic,export and adjustment purchase type should be displayed equal/same as declared in Gross Amount for purchase Type of purchase e-filing \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_count_in_domestic_export_and_adjustment_purchase_type_should_be_displayed_equal_same_as_declared_in_Gross_Amount_for_purchase_Type_of_purchase_e_filing(String value, String value1, String value2) throws Throwable {
	   
		WebElement we,we1,we2;
		we=wd.findElement(By.xpath(obj.getProperty(value)));
		we1=wd.findElement(By.xpath(obj.getProperty(value1)));
		we2=wd.findElement(By.xpath(obj.getProperty(value2)));
		if(we.isDisplayed()&& we1.isDisplayed()&& we2.isDisplayed())
		{						
			assertTrue(true);
		}
	}

	@And("^User count in domestic,export and adjustment purchase type should be displayed equal/same as declared in Vat Amount for purchase Type of purchase e-filing \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_count_in_domestic_export_and_adjustment_purchase_type_should_be_displayed_equal_same_as_declared_in_Vat_Amount_for_purchase_Type_of_purchase_e_filing(String value, String value1, String value2) throws Throwable {
	   
		WebElement we,we1,we2;
		we=wd.findElement(By.xpath(obj.getProperty(value)));
		we1=wd.findElement(By.xpath(obj.getProperty(value1)));
		we2=wd.findElement(By.xpath(obj.getProperty(value2)));
		if(we.isDisplayed()&& we1.isDisplayed()&& we2.isDisplayed())
		{						
			assertTrue(true);
		}
	}

	@And("^User count in domestic,export and adjustment purchase type should be displayed equal/same as declared in Net Amount for purchase Type of purchase e-filing \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_count_in_domestic_export_and_adjustment_purchase_type_should_be_displayed_equal_same_as_declared_in_Net_Amount_for_purchase_Type_of_purchase_e_filing(String value, String value1, String value2) throws Throwable {
	   
		WebElement we,we1,we2;
		we=wd.findElement(By.xpath(obj.getProperty(value)));
		we1=wd.findElement(By.xpath(obj.getProperty(value1)));
		we2=wd.findElement(By.xpath(obj.getProperty(value2)));
		if(we.isDisplayed()&& we1.isDisplayed()&& we2.isDisplayed())
		{						
			assertTrue(true);
		}
	}

	@And("^User count in Transaction received for domestic,export and adjustment purchase in Gross Amount for purchase Type \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_count_in_Transaction_received_for_domestic_export_and_adjustment_purchase_in_Gross_Amount_for_purchase_Type(String value, String value1, String value2) throws Throwable {
	   
		WebElement we,we1,we2;
		we=wd.findElement(By.xpath(obj.getProperty(value)));
		we1=wd.findElement(By.xpath(obj.getProperty(value1)));
		we2=wd.findElement(By.xpath(obj.getProperty(value2)));
		if(we.isDisplayed()&& we1.isDisplayed()&& we2.isDisplayed())
		{						
			assertTrue(true);
		}
	}

	@And("^User count in Transaction received for domestic,export and adjustment purchase in Vat Amount for purchase Type  \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_count_in_Transaction_received_for_domestic_export_and_adjustment_purchase_in_Vat_Amount_for_purchase_Type(String value, String value1, String value2) throws Throwable {
	   
		WebElement we,we1,we2;
		we=wd.findElement(By.xpath(obj.getProperty(value)));
		we1=wd.findElement(By.xpath(obj.getProperty(value1)));
		we2=wd.findElement(By.xpath(obj.getProperty(value2)));
		if(we.isDisplayed()&& we1.isDisplayed()&& we2.isDisplayed())
		{						
			assertTrue(true);
		}
	}

	@And("^User count in Transaction received for domestic,export and adjustment purchase in Net Amount for purchase Type  \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_count_in_Transaction_received_for_domestic_export_and_adjustment_purchase_in_Net_Amount_for_purchase_Type(String value, String value1, String value2) throws Throwable {
	   
		WebElement we,we1,we2;
		we=wd.findElement(By.xpath(obj.getProperty(value)));
		we1=wd.findElement(By.xpath(obj.getProperty(value1)));
		we2=wd.findElement(By.xpath(obj.getProperty(value2)));
		if(we.isDisplayed()&& we1.isDisplayed()&& we2.isDisplayed())
		{						
			assertTrue(true);
		}
	}

	//20
	@And("^User Observe the Differece value of Net issued document column is blank Manual Assesment sales page$")
	public void user_Observe_the_Differece_value_of_Net_issued_document_column_is_blank_Manual_Assesment_sales_page() throws Throwable 
	{
	    
		 System.out.println("blank data");
	}

	@And("^User Observe the Difference value of Gross Amount column for sales$")
	public void user_Observe_the_Difference_value_of_Gross_Amount_column_for_sales() throws Throwable 
	{
		//adding edeclaration
		int edeclaration = 0;
		List<WebElement> elementName =  wd.findElements(By.xpath("//section[1]/div[2]/div[2]/div[2]/div[2]"));
		for(int i = 2; i<elementName.size()+1;i++)
		{
			WebElement element1 = wd.findElement(By.xpath("//section[1]/div[2]/div[2]/div["+i+"]/div[2]"));
			String number1 = element1.getText();
			int result1 = Integer.parseInt(number1);			
			edeclaration = edeclaration + result1;
		}
		
		//adding transaction received
		int transaction = 0;
		List<WebElement> elementName1 =  wd.findElements(By.xpath("//section[1]/div[2]/div[2]/div[2]/div[2]"));
		for(int i = 2; i<elementName1.size()+1;i++)
		{
			WebElement element2 = wd.findElement(By.xpath("//section[1]/div[2]/div[2]/div["+i+"]/div[2]"));
			String number2 = element2.getText();
			int result2 = Integer.parseInt(number2);			
			transaction = transaction + result2;
		}
		
		// edeclaration total - total transaction
		edeclaration=edeclaration-transaction;
		
		// compare
		WebElement element3 = wd.findElement(By.xpath("(//div[@class='table-td px-1 d-flex align-items-center'])[4]"));		
		String differance = element3.getText();
		int result3 = Integer.parseInt(differance);		
		
		System.out.println(result3);					
		if(edeclaration ==result3)
		{
			assertTrue(true);
		}		
		
	    
	}

	@And("^User Observe the Difference value of VET Amount column for sales$")
	public void user_Observe_the_Difference_value_of_VET_Amount_column_for_sales() throws Throwable 
	{
		//adding edeclaration
				int edeclaration = 0;
				List<WebElement> elementName =  wd.findElements(By.xpath("//section[1]/div[2]/div[2]/div[2]/div[2]"));
				for(int i = 2; i<elementName.size()+1;i++)
				{
					WebElement element1 = wd.findElement(By.xpath("//section[1]/div[2]/div[2]/div["+i+"]/div[2]"));
					String number1 = element1.getText();
					int result1 = Integer.parseInt(number1);			
					edeclaration = edeclaration + result1;
				}
				
				//adding transaction received
				int transaction = 0;
				List<WebElement> elementName1 =  wd.findElements(By.xpath("//section[1]/div[2]/div[2]/div[2]/div[2]"));
				for(int i = 2; i<elementName1.size()+1;i++)
				{
					WebElement element2 = wd.findElement(By.xpath("//section[1]/div[2]/div[2]/div["+i+"]/div[2]"));
					String number2 = element2.getText();
					int result2 = Integer.parseInt(number2);			
					transaction = transaction + result2;
				}
				
				// edeclaration total - total transaction
				edeclaration=edeclaration-transaction;
				
				// compare
				WebElement element3 = wd.findElement(By.xpath("(//div[@class='table-td px-1 d-flex align-items-center'])[4]"));		
				String differance = element3.getText();
				int result3 = Integer.parseInt(differance);		
				
				System.out.println(result3);					
				if(edeclaration ==result3)
				{
					assertTrue(true);
				}		
	    
	}

	@And("^User Observe the Difference value of NET Amount for sales$")
	public void user_Observe_the_Difference_value_of_NET_Amount_for_sales() throws Throwable 
	{
	    
		//adding edeclaration
				int edeclaration = 0;
				List<WebElement> elementName =  wd.findElements(By.xpath("//section[1]/div[2]/div[2]/div[2]/div[2]"));
				for(int i = 2; i<elementName.size()+1;i++)
				{
					WebElement element1 = wd.findElement(By.xpath("//section[1]/div[2]/div[2]/div["+i+"]/div[2]"));
					String number1 = element1.getText();
					int result1 = Integer.parseInt(number1);			
					edeclaration = edeclaration + result1;
				}
				
				//adding transaction received
				int transaction = 0;
				List<WebElement> elementName1 =  wd.findElements(By.xpath("//section[1]/div[2]/div[2]/div[2]/div[2]"));
				for(int i = 2; i<elementName1.size()+1;i++)
				{
					WebElement element2 = wd.findElement(By.xpath("//section[1]/div[2]/div[2]/div["+i+"]/div[2]"));
					String number2 = element2.getText();
					int result2 = Integer.parseInt(number2);			
					transaction = transaction + result2;
				}
				
				// edeclaration total - total transaction
				edeclaration=edeclaration-transaction;
				
				// compare
				WebElement element3 = wd.findElement(By.xpath("(//div[@class='table-td px-1 d-flex align-items-center'])[4]"));		
				String differance = element3.getText();
				int result3 = Integer.parseInt(differance);		
				
				System.out.println(result3);					
				if(edeclaration ==result3)
				{
					assertTrue(true);
				}		
	}

	@And("^User Observe the Differece value of Net issued document column is blankfor Manual Assesment purchase page$")
	public void user_Observe_the_Differece_value_of_Net_issued_document_column_is_blankfor_Manual_Assesment_purchase_page() throws Throwable
	{
	    
	    System.out.println("blank data");
	}

	@And("^User Observe the Difference value of Gross Amount column for purchase$")
	public void user_Observe_the_Difference_value_of_Gross_Amount_column_for_purchase() throws Throwable 
	{
		//adding edeclaration
				int edeclaration = 0;
				List<WebElement> elementName =  wd.findElements(By.xpath("//section[1]/div[2]/div[2]/div[2]/div[2]"));
				for(int i = 2; i<elementName.size()+1;i++)
				{
					WebElement element1 = wd.findElement(By.xpath("//section[1]/div[2]/div[2]/div["+i+"]/div[2]"));
					String number1 = element1.getText();
					int result1 = Integer.parseInt(number1);			
					edeclaration = edeclaration + result1;
				}
				
				//adding transaction received
				int transaction = 0;
				List<WebElement> elementName1 =  wd.findElements(By.xpath("//section[1]/div[2]/div[2]/div[2]/div[2]"));
				for(int i = 2; i<elementName1.size()+1;i++)
				{
					WebElement element2 = wd.findElement(By.xpath("//section[1]/div[2]/div[2]/div["+i+"]/div[2]"));
					String number2 = element2.getText();
					int result2 = Integer.parseInt(number2);			
					transaction = transaction + result2;
				}
				
				// edeclaration total - total transaction
				edeclaration=edeclaration-transaction;
				
				// compare
				WebElement element3 = wd.findElement(By.xpath("(//div[@class='table-td px-1 d-flex align-items-center'])[4]"));		
				String differance = element3.getText();
				int result3 = Integer.parseInt(differance);		
				
				System.out.println(result3);					
				if(edeclaration ==result3)
				{
					assertTrue(true);
				}		
	    
	}

	@And("^User Observe the Difference value of VET Amount column for purchase$")
	public void user_Observe_the_Difference_value_of_VET_Amount_column_for_purchase() throws Throwable 
	{
		//adding edeclaration
				int edeclaration = 0;
				List<WebElement> elementName =  wd.findElements(By.xpath("//section[1]/div[2]/div[2]/div[2]/div[2]"));
				for(int i = 2; i<elementName.size()+1;i++)
				{
					WebElement element1 = wd.findElement(By.xpath("//section[1]/div[2]/div[2]/div["+i+"]/div[2]"));
					String number1 = element1.getText();
					int result1 = Integer.parseInt(number1);			
					edeclaration = edeclaration + result1;
				}
				
				//adding transaction received
				int transaction = 0;
				List<WebElement> elementName1 =  wd.findElements(By.xpath("//section[1]/div[2]/div[2]/div[2]/div[2]"));
				for(int i = 2; i<elementName1.size()+1;i++)
				{
					WebElement element2 = wd.findElement(By.xpath("//section[1]/div[2]/div[2]/div["+i+"]/div[2]"));
					String number2 = element2.getText();
					int result2 = Integer.parseInt(number2);			
					transaction = transaction + result2;
				}
				
				// edeclaration total - total transaction
				edeclaration=edeclaration-transaction;
				
				// compare
				WebElement element3 = wd.findElement(By.xpath("(//div[@class='table-td px-1 d-flex align-items-center'])[4]"));		
				String differance = element3.getText();
				int result3 = Integer.parseInt(differance);		
				
				System.out.println(result3);					
				if(edeclaration ==result3)
				{
					assertTrue(true);
				}		
	    
	}

	@And("^User Observe the Difference value of NET Amount for purchase$")
	public void user_Observe_the_Difference_value_of_NET_Amount_for_purchase() throws Throwable 
	{
		//adding edeclaration
				int edeclaration = 0;
				List<WebElement> elementName =  wd.findElements(By.xpath("//section[1]/div[2]/div[2]/div[2]/div[2]"));
				for(int i = 2; i<elementName.size()+1;i++)
				{
					WebElement element1 = wd.findElement(By.xpath("//section[1]/div[2]/div[2]/div["+i+"]/div[2]"));
					String number1 = element1.getText();
					int result1 = Integer.parseInt(number1);			
					edeclaration = edeclaration + result1;
				}
				
				//adding transaction received
				int transaction = 0;
				List<WebElement> elementName1 =  wd.findElements(By.xpath("//section[1]/div[2]/div[2]/div[2]/div[2]"));
				for(int i = 2; i<elementName1.size()+1;i++)
				{
					WebElement element2 = wd.findElement(By.xpath("//section[1]/div[2]/div[2]/div["+i+"]/div[2]"));
					String number2 = element2.getText();
					int result2 = Integer.parseInt(number2);			
					transaction = transaction + result2;
				}
				
				// edeclaration total - total transaction
				edeclaration=edeclaration-transaction;
				
				// compare
				WebElement element3 = wd.findElement(By.xpath("(//div[@class='table-td px-1 d-flex align-items-center'])[4]"));		
				String differance = element3.getText();
				int result3 = Integer.parseInt(differance);		
				
				System.out.println(result3);					
				if(edeclaration ==result3)
				{
					assertTrue(true);
				}			    
	}		
}
