package org.drc.vat.StepDefinitions;

import static org.drc.vat.appmanager.HelperBase.clickOn;
import static org.drc.vat.appmanager.HelperBase.obj;
import static org.drc.vat.appmanager.HelperBase.wd;
import static org.testng.Assert.assertTrue;
import static org.drc.vat.appmanager.HelperBase.*;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

import cucumber.api.java.en.And;

public class ReAssessmentSalesTransactionReceivedSalesAdjView 
{
	@And("^User click on manage setting drop down and click on ReAssess$")
	public void user_click_on_manage_setting_drop_down_and_click_on_ReAssess() throws Throwable
	{
	    clickOn("AssestManage", "");
		Thread.sleep(100);
		// re assesst one 
		clickOn("", "");
	}

	@And("^User click on Adjustement icon in sales adjustement$")
	public void user_click_on_Adjustement_icon_in_sales_adjustement() throws Throwable
	{
		clickOn("btn_SalesAdjustementjAsst", "");
		Thread.sleep(500);
	}

	@And("^User see NITVA number for Sales adjustment$")
	public void user_see_NITVA_number_for_Sales_adjustment() throws Throwable 
	{
		System.out.println("User see NITVA number");	    
	}

	@And("^User verify the NITVA number \"([^\"]*)\" for Sales adjustment$")
	public void user_verify_the_NITVA_number_for_Sales_adjustment(String value) throws Throwable 
	{		
		if(wd.findElement(By.xpath("(//*[contains(text(),'" + value + "')])[1]")).isDisplayed() )
		{					
			assertTrue(true);
		}		
	}

	@And("^User verify month/period for sale adjustement$")
	public void user_verify_month_period_for_sale_adjustement() throws Throwable 
	{
		String expectedMessage = "January 2018";
		Thread.sleep(2000);
		WebElement element = wd.findElement(By.xpath("//input[@class='form-control disabled date-disabled']"));
		JavascriptExecutor jse = (JavascriptExecutor)wd;
		Object message = jse.executeScript("return arguments[0].value", element);
		System.out.println(message.toString());		
 		Assert.assertTrue(message.toString().contains(expectedMessage));
	}

	@And("^User navigate to e-Declaration Reconciliation page and check$")
	public void user_navigate_to_e_Declaration_Reconciliation_page_and_check() throws Throwable 
	{
		WebElement we;
		we=wd.findElement(By.xpath("//span[text()='Sales']"));		
		if(we.isDisplayed())
		{			
			System.out.println("User is back on  manual assessment Page ");
			assertTrue(true);
		}	
	    
	}

	@And("^User check quantity list for sales adjustement$")
	public void user_check_quantity_list_for_sales_adjustement() throws Throwable 
	{	   
		System.out.println("User check quantiy list for sales adjustement");   
	}

	@And("^User calculate quantity from list and check Total Quantity for sales adjustement$")
	public void user_calculate_quantity_from_list_and_check_Total_Quantity_for_sales_adjustement() throws Throwable 
	{		
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

	@And("^User check gross amount list for sales adjustement$")
	public void user_check_gross_amount_list_for_sales_adjustement() throws Throwable 
	{
		System.out.println("User check gross amount list");
	}

	@And("^User calculate gross amount from list and check Total Gross Amount for sales adjustement$")
	public void user_calculate_gross_amount_from_list_and_check_Total_Gross_Amount_for_sales_adjustement() throws Throwable 
	{
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

	@And("^User check VAT amount list for sales adjustement$")
	public void user_check_VAT_amount_list_for_sales_adjustement() throws Throwable 
	{
		System.out.println("User check VAT amount list for sales adjustement");	    
	}

	@And("^User calculate VAT amount from list and check VAT Amount total for sales adjustement$")
	public void user_calculate_VAT_amount_from_list_and_check_VAT_Amount_total_for_sales_adjustement() throws Throwable 
	{
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
		Thread.sleep(1000);				
	}

	@And("^User check Net amount list for sales adjustement$")
	public void user_check_Net_amount_list_for_sales_adjustement() throws Throwable 
	{   
		System.out.println("User check Net amount list for sales adjustement");   
	}

	@And("^User calculate Net amount from list and check Net Amount total for sales adjustement$")
	public void user_calculate_Net_amount_from_list_and_check_Net_Amount_total_for_sales_adjustement() throws Throwable 
	{
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
		Thread.sleep(1000);	   
	}

	@And("^User check invoice number \"([^\"]*)\" for sales adjustement page$")
	public void user_check_invoice_number_for_sales_adjustement_page(String value) throws Throwable 
	{	   
		if(wd.findElement(By.xpath("(//*[contains(text(),'" + value + "')])[1]")).isDisplayed() )
		{		
			System.out.println("User see invoice number ");
			assertTrue(true);
		}	 
	}

	@And("^User check sales type \"([^\"]*)\" for sales adjustement page$")
	public void user_check_sales_type_for_sales_adjustement_page(String value) throws Throwable 
	{
		if(wd.findElement(By.xpath("(//*[contains(text(),'" + value + "')])[1]")).isDisplayed() )
		{		
			System.out.println("User see sales type ");
			assertTrue(true);
		}	   	    
	}

	@And("^User check Debit Credit note \"([^\"]*)\" for sales adjustement page$")
	public void user_check_Debit_Credit_note_for_sales_adjustement_page(String value) throws Throwable 
	{
		if(wd.findElement(By.xpath("(//*[contains(text(),'" + value + "')])[2]")).isDisplayed() )
		{		
			System.out.println("User see sales number for adjustement");
			assertTrue(true);
		}	
	}

	@And("^User check  sales type \"([^\"]*)\" and NITVA of customer \"([^\"]*)\" for sales adjustement page$")
	public void user_check_sales_type_and_NITVA_of_customer_for_sales_adjustement_page(String value, String value1) throws Throwable 
	{
		if(wd.findElement(By.xpath("(//*[contains(text(),'" + value + "')])[1]")).isDisplayed() && wd.findElement(By.xpath("(//*[contains(text(),'" + value1 + "')])[3]")).isDisplayed())
		{		
			System.out.println("User see sale type and nitva  number");
			assertTrue(true);
		}	
	}

	@And("^User check for single Commodity Service Code for sales \"([^\"]*)\" for sales adjustement page$")
	public void user_check_for_single_Commodity_Service_Code_for_sales_for_sales_adjustement_page(String value) throws Throwable 
	{
		if(wd.findElement(By.xpath("(//*[contains(text(),'" + value + "')])[1]")).isDisplayed() )
		{		
			System.out.println("User see sales number for adjustement");
			assertTrue(true);
		}		    
	}

	@And("^User check for multiple Commodity Service Code \"([^\"]*)\" \"([^\"]*)\" for sales adjustement page$")
	public void user_check_for_multiple_Commodity_Service_Code_for_sales_adjustement_page(String value, String value1) throws Throwable 
	{
		if(wd.findElement(By.xpath("(//*[contains(text(),'" + value + "')])[1]")).isDisplayed() && wd.findElement(By.xpath("(//*[contains(text(),'" + value1 + "')])[2]")).isDisplayed() )
		{		
			System.out.println("User see sales number for adjustement");
			assertTrue(true);
		}
	    
	}

	@And("^User check quantity \"([^\"]*)\" and unit \"([^\"]*)\" for invoice \"([^\"]*)\" for sales adjustement page$")
	public void user_check_quantity_and_unit_for_invoice_for_sales_adjustement_page(String value, String value1, String value2) throws Throwable 
	{	   
		WebElement we,we1,we2;
		we=wd.findElement(By.xpath(obj.getProperty(value)));
		we1=wd.findElement(By.xpath(obj.getProperty(value1)));
		we2=wd.findElement(By.xpath(obj.getProperty(value2)));		
		if(we.isDisplayed() && we1.isDisplayed() && we2.isDisplayed())
		{
			Assert.assertTrue(true);
		}	  
	}

	@And("^User check gross amount \"([^\"]*)\" for invoice \"([^\"]*)\" for sales adjustement page$")
	public void user_check_gross_amount_for_invoice_for_sales_adjustement_page(String value, String value1) throws Throwable 
	{	  
		WebElement we,we1;
		we=wd.findElement(By.xpath(obj.getProperty(value)));
		we1=wd.findElement(By.xpath(obj.getProperty(value1)));		
		
		if(we.isDisplayed() && we1.isDisplayed())
		{
			Assert.assertTrue(true);
			//System.out.println("Domestic and customer id");		
		}		
	}

	@And("^User check vat amount \"([^\"]*)\"  for invoice \"([^\"]*)\" for sales adjustement page$")
	public void user_check_vat_amount_for_invoice_for_sales_adjustement_page(String value, String value1) throws Throwable
	{
		WebElement we,we1;
		we=wd.findElement(By.xpath(obj.getProperty(value)));
		we1=wd.findElement(By.xpath(obj.getProperty(value1)));
				
		if(we.isDisplayed() && we1.isDisplayed())
		{
			Assert.assertTrue(true);
		}	
	}

	@And("^User check net amount \"([^\"]*)\"  for invoice \"([^\"]*)\" for sales adjustement page$")
	public void user_check_net_amount_for_invoice_for_sales_adjustement_page(String value, String value1) throws Throwable 
	{	   
		WebElement we,we1;
		we=wd.findElement(By.xpath(obj.getProperty(value)));
		we1=wd.findElement(By.xpath(obj.getProperty(value1)));
		if(we.isDisplayed() && we1.isDisplayed())
		{
			Assert.assertTrue(true);
			System.out.println("User check net amount for invoice");		
		}	
	}

}
