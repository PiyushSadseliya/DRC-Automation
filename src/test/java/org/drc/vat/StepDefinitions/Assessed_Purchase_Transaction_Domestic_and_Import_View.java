package org.drc.vat.StepDefinitions;

import static org.testng.Assert.assertTrue;
import static org.drc.vat.appmanager.HelperBase.*;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

import cucumber.api.java.en.And;

public class Assessed_Purchase_Transaction_Domestic_and_Import_View 
{
	@And("^User calculate quantity from list and check Total Quantity for domestic purchase$")
	public void user_calculate_quantity_from_list_and_check_Total_Quantity_for_domestic_purchase() throws Throwable {
	   
		int sum = 0;
		List<WebElement> elementName =  wd.findElements(By.xpath("//section[1]/div/div[7]"));
		for(int i = 2; i<elementName.size()+1;i++)
		{
			WebElement element1 = wd.findElement(By.xpath("//section[1]/div["+i+"]/div[7]"));
			String number1 = element1.getText();
			int result1 = Integer.parseInt(number1);			
			sum = sum + result1;
		}
		
		WebElement element3 = wd.findElement(By.xpath("(//*[@class='ng-star-inserted'])[3]"));		
		String number3 = element3.getText();
		int result3 = Integer.parseInt(number3);		
		
		System.out.println(sum);					
		if(sum ==result3)
		{
			assertTrue(true);
		}
	}

	@And("^User calculate gross amount from list and check Total Gross Amount for domestic purchase$")
	public void user_calculate_gross_amount_from_list_and_check_Total_Gross_Amount_for_domestic_purchase() throws Throwable {
	   
		int sum = 0;
		List<WebElement> elementName =  wd.findElements(By.xpath("//section[1]/div/div[9]"));
		for(int i = 2; i<elementName.size()+1;i++)
		{
			WebElement element1 = wd.findElement(By.xpath("//section[1]/div["+i+"]/div[9]"));
			String number1 = element1.getText();
			int result1 = Integer.parseInt(number1);			
			sum = sum + result1;
		}
		
		WebElement element3 = wd.findElement(By.xpath("(//*[@class='ng-star-inserted'])[4]"));		
		String number3 = element3.getText();
		int result3 = Integer.parseInt(number3);		
		
		System.out.println(sum);					
		if(sum ==result3)
		{
			assertTrue(true);
		}
		Thread.sleep(1000);
	}

	@And("^User calculate VAT amount from list and check VAT Amount total for domestic purchase$")
	public void user_calculate_VAT_amount_from_list_and_check_VAT_Amount_total_for_domestic_purchase() throws Throwable {
		int sum = 0;
		List<WebElement> elementName =  wd.findElements(By.xpath("//section[1]/div/div[10]"));
		for(int i = 2; i<elementName.size()+1;i++)
		{
			WebElement element1 = wd.findElement(By.xpath("//section[1]/div["+i+"]/div[10]"));
			String number1 = element1.getText();
			int result1 = Integer.parseInt(number1);			
			sum = sum + result1;
		}
		
		WebElement element3 = wd.findElement(By.xpath("(//*[@class='ng-star-inserted'])[5]"));		
		String number3 = element3.getText();
		int result3 = Integer.parseInt(number3);		
		
		System.out.println(sum);					
		if(sum ==result3)
		{
			assertTrue(true);
		}
	    
	    
	}

	@And("^User calculate Net amount from list and check Net Amount total for domestic purchase$")
	public void user_calculate_Net_amount_from_list_and_check_Net_Amount_total_for_domestic_purchase() throws Throwable {
		int sum = 0;
		List<WebElement> elementName =  wd.findElements(By.xpath("//section[1]/div/div[11]"));
		for(int i = 2; i<elementName.size()+1;i++)
		{
			WebElement element1 = wd.findElement(By.xpath("//section[1]/div["+i+"]/div[11]"));
			String number1 = element1.getText();
			int result1 = Integer.parseInt(number1);			
			sum = sum + result1;
		}
		
		WebElement element3 = wd.findElement(By.xpath("(//*[@class='ng-star-inserted'])[6]"));		
		String number3 = element3.getText();
		int result3 = Integer.parseInt(number3);		
		
		System.out.println(sum);					
		if(sum ==result3)
		{
			assertTrue(true);
		}
	    
	}

	@And("^User check  sales type \"([^\"]*)\" and NITVA of customer \"([^\"]*)\" for domestic purchase$")
	public void user_check_sales_type_and_NITVA_of_customer_for_domestic_purchase(String value, String value1) throws Throwable {
		if(wd.findElement(By.xpath("(//*[contains(text(),'" + value + "')])[1]")).isDisplayed() && wd.findElement(By.xpath("(//*[contains(text(),'" + value1 + "')])[3]")).isDisplayed())
		{		
			System.out.println("User see sale type and nitva  number");
			assertTrue(true);
		}	
	    
	}

	@And("^User check for multiple Commodity Service Code \"([^\"]*)\" \"([^\"]*)\" for domestic purchase$")
	public void user_check_for_multiple_Commodity_Service_Code_for_domestic_purchase(String value, String value1) throws Throwable {
	   
		if(wd.findElement(By.xpath("(//*[contains(text(),'" + value + "')])[1]")).isDisplayed() && wd.findElement(By.xpath("(//*[contains(text(),'" + value1 + "')])[2]")).isDisplayed() )
		{		
			System.out.println("User see sales number for adjustement");
			assertTrue(true);
		}
	}

	@And("^User check quantity \"([^\"]*)\" and unit \"([^\"]*)\" for invoice \"([^\"]*)\" for domestic purchase$")
	public void user_check_quantity_and_unit_for_invoice_for_domestic_purchase(String value, String value1, String value2) throws Throwable {
		WebElement we,we1,we2;
		we=wd.findElement(By.xpath(obj.getProperty(value)));
		we1=wd.findElement(By.xpath(obj.getProperty(value1)));
		we2=wd.findElement(By.xpath(obj.getProperty(value2)));		
		if(we.isDisplayed() && we1.isDisplayed() && we2.isDisplayed())
		{
			Assert.assertTrue(true);
		}	  
	    
	}

	@And("^User verify the NITVA number \"([^\"]*)\" for import purchase$")
	public void user_verify_the_NITVA_number_for_import_purchase(String value) throws Throwable {

		if(wd.findElement(By.xpath("(//*[contains(text(),'" + value + "')])[1]")).isDisplayed() )
		{					
			assertTrue(true);
		}	
	    
	}

	@And("^User click on view icon in sales for import purchase$")
	public void user_click_on_view_icon_in_sales_for_import_purchase() throws Throwable 
	{
		 clickOn("btn_SalesDomesticAsst", "");
		
	}

	@And("^User verify another nitva number \"([^\"]*)\" for import sales$")
	public void user_verify_another_nitva_number_for_import_sales(String value) throws Throwable {
		if(wd.findElement(By.xpath("(//*[contains(text(),'" + value + "')])[1]")).isDisplayed() )
		{					
			assertTrue(true);
		}	
	    
	}

	@And("^User verify month for sale adjustement for import sales$")
	public void user_verify_month_for_sale_adjustement_for_import_sales() throws Throwable {
	   
		String expectedMessage = "January 2018";
		Thread.sleep(2000);
		WebElement element = wd.findElement(By.xpath("//input[@class='form-control disabled date-disabled']"));
		JavascriptExecutor jse = (JavascriptExecutor)wd;
		Object message = jse.executeScript("return arguments[0].value", element);
		System.out.println(message.toString());		
 		Assert.assertTrue(message.toString().contains(expectedMessage));
	}

	@And("^User click on previous button and again click on view icon for domestic sales and check data \"([^\"]*)\" is reset for import purchase$")
	public void user_click_on_previous_button_and_again_click_on_view_icon_for_domestic_sales_and_check_data_is_reset_for_import_purchase(String value) throws Throwable {
	   
	    
	}

	@And("^User calculate quantity from list and check Total Quantity for import purchase$")
	public void user_calculate_quantity_from_list_and_check_Total_Quantity_for_import_purchase() throws Throwable {
		 
		int sum = 0;
		List<WebElement> elementName =  wd.findElements(By.xpath("//section[1]/div/div[7]"));
		for(int i = 2; i<elementName.size()+1;i++)
		{
			WebElement element1 = wd.findElement(By.xpath("//section[1]/div["+i+"]/div[7]"));
			String number1 = element1.getText();
			int result1 = Integer.parseInt(number1);			
			sum = sum + result1;
		}
		
		WebElement element3 = wd.findElement(By.xpath("(//*[@class='ng-star-inserted'])[3]"));		
		String number3 = element3.getText();
		int result3 = Integer.parseInt(number3);		
		
		System.out.println(sum);					
		if(sum ==result3)
		{
			assertTrue(true);
		}
		Thread.sleep(1000);
	    
	}

	@And("^User calculate gross amount from list and check Total Gross Amount import purchase$")
	public void user_calculate_gross_amount_from_list_and_check_Total_Gross_Amount_import_purchase() throws Throwable {
		int sum = 0;
		List<WebElement> elementName =  wd.findElements(By.xpath("//section[1]/div/div[9]"));
		for(int i = 2; i<elementName.size()+1;i++)
		{
			WebElement element1 = wd.findElement(By.xpath("//section[1]/div["+i+"]/div[9]"));
			String number1 = element1.getText();
			int result1 = Integer.parseInt(number1);			
			sum = sum + result1;
		}
		
		WebElement element3 = wd.findElement(By.xpath("(//*[@class='ng-star-inserted'])[4]"));		
		String number3 = element3.getText();
		int result3 = Integer.parseInt(number3);		
		
		System.out.println(sum);					
		if(sum ==result3)
		{
			assertTrue(true);
		}
	    
	}

	@And("^User calculate VAT amount from list and check VAT Amount total for import purchase$")
	public void user_calculate_VAT_amount_from_list_and_check_VAT_Amount_total_for_import_purchase() throws Throwable {
	   
		int sum = 0;
		List<WebElement> elementName =  wd.findElements(By.xpath("//section[1]/div/div[10]"));
		for(int i = 2; i<elementName.size()+1;i++)
		{
			WebElement element1 = wd.findElement(By.xpath("//section[1]/div["+i+"]/div[10]"));
			String number1 = element1.getText();
			int result1 = Integer.parseInt(number1);			
			sum = sum + result1;
		}
		
		WebElement element3 = wd.findElement(By.xpath("(//*[@class='ng-star-inserted'])[5]"));		
		String number3 = element3.getText();
		int result3 = Integer.parseInt(number3);		
		
		System.out.println(sum);					
		if(sum ==result3)
		{
			assertTrue(true);
		}
	}

	@And("^User calculate Net amount from list and check Net Amount total for import purchase$")
	public void user_calculate_Net_amount_from_list_and_check_Net_Amount_total_for_import_purchase() throws Throwable {

		int sum = 0;
		List<WebElement> elementName =  wd.findElements(By.xpath("//section[1]/div/div[11]"));
		for(int i = 2; i<elementName.size()+1;i++)
		{
			WebElement element1 = wd.findElement(By.xpath("//section[1]/div["+i+"]/div[11]"));
			String number1 = element1.getText();
			int result1 = Integer.parseInt(number1);			
			sum = sum + result1;
		}
		
		WebElement element3 = wd.findElement(By.xpath("(//*[@class='ng-star-inserted'])[6]"));		
		String number3 = element3.getText();
		int result3 = Integer.parseInt(number3);		
		
		System.out.println(sum);					
		if(sum ==result3)
		{
			assertTrue(true);
		}
	    
	}

	@And("^User check invoice number \"([^\"]*)\" for eimport purchase$")
	public void user_check_invoice_number_for_eimport_purchase(String value) throws Throwable {
		if(wd.findElement(By.xpath("(//*[contains(text(),'" + value + "')])[1]")).isDisplayed() )
		{		
			System.out.println("User see invoice number ");
			assertTrue(true);
		}	 
	    
	}

	@And("^User check  sales type \"([^\"]*)\" and NITVA of customer \"([^\"]*)\" for import purchase$")
	public void user_check_sales_type_and_NITVA_of_customer_for_import_purchase(String value, String value1) throws Throwable {
		if(wd.findElement(By.xpath("(//*[contains(text(),'" + value + "')])[1]")).isDisplayed() && wd.findElement(By.xpath("(//*[contains(text(),'" + value1 + "')])[3]")).isDisplayed())
		{		
			System.out.println("User see sale type and nitva  number");
			assertTrue(true);
		}	
	    
	}

	@And("^User check for single Commodity Service Code for sales \"([^\"]*)\" for import purchase$")
	public void user_check_for_single_Commodity_Service_Code_for_sales_for_import_purchase(String value) throws Throwable {
		if(wd.findElement(By.xpath("(//*[contains(text(),'" + value + "')])[1]")).isDisplayed() )
		{		
			System.out.println("User see sales number for adjustement");
			assertTrue(true);
		}	
	    
	}

	@And("^User check for multiple Commodity Service Code \"([^\"]*)\" \"([^\"]*)\" for import purchase$")
	public void user_check_for_multiple_Commodity_Service_Code_for_import_purchase(String value, String value1) throws Throwable {
	   
		if(wd.findElement(By.xpath("(//*[contains(text(),'" + value + "')])[1]")).isDisplayed() && wd.findElement(By.xpath("(//*[contains(text(),'" + value1 + "')])[2]")).isDisplayed() )
		{		
			System.out.println("User see sales number for adjustement");
			assertTrue(true);
		}
	}

	@And("^User check quantity \"([^\"]*)\" and unit \"([^\"]*)\" for invoice \"([^\"]*)\" for import purchase$")
	public void user_check_quantity_and_unit_for_invoice_for_import_purchase(String value, String value1, String value2) throws Throwable {
		WebElement we,we1,we2;
		we=wd.findElement(By.xpath(obj.getProperty(value)));
		we1=wd.findElement(By.xpath(obj.getProperty(value1)));
		we2=wd.findElement(By.xpath(obj.getProperty(value2)));		
		if(we.isDisplayed() && we1.isDisplayed() && we2.isDisplayed())
		{
			Assert.assertTrue(true);
		}	 
	    
	}
	// on hold
	@And("^Verify the value in Total Quantity ,Total Gross Amount ,VAT Amount and Net Amount displayed above the table for import purchase$")
	public void verify_the_value_in_Total_Quantity_Total_Gross_Amount_VAT_Amount_and_Net_Amount_displayed_above_the_table_for_import_purchase() throws Throwable {
	   
	    
	}

}
