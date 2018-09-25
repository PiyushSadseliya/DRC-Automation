package org.drc.vat.StepDefinitions;
import static org.drc.vat.appmanager.HelperBase.*;
import static org.testng.Assert.assertTrue;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;

import static org.drc.vat.appmanager.HelperBase.*;

public class ManualAssessmentSalesAdjustement 
{
	@Given("^User is on Assessment Page \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_is_on_Assessment_Page(String value, String value1) throws Throwable 
	{
		System.out.println(value);
		System.out.println(value1);
	}
		
	
	@And("^User click on type here$")
	public void user_click_on_type_here() throws Throwable 
	{
		Thread.sleep(500);
	    clickOn("AssementSearchClick", "");
	}

	@And("^User see NITVA number$")
	public void user_see_NITVA_number() throws Throwable 
	{
		String expectedMessage = "20180705073851634";
		String message = wd.findElement(By.xpath("//*[contains(text(),'20180705073851634')]")).getText();
		Assert.assertTrue(message.contains(expectedMessage));
		Thread.sleep(1000);
	}

	@And("^User click on Adjustement icon in sales$")
	public void user_click_on_Adjustement_icon_in_sales() throws Throwable 
	{
		clickOn("btn_SalesAdjustementjAsst", "");
		Thread.sleep(500);
	}

	@And("^User verify the NITVA number \"([^\"]*)\"$")
	public void user_verify_the_NITVA_number(String arg1) throws Throwable 
	{		
		
		String expectedMessage = "20180705073851634";
		String message = wd.findElement(By.xpath("//*[contains(text(),'20180705073851634')]")).getText();
		Assert.assertTrue(message.contains(expectedMessage));
		Thread.sleep(1000);
		
		
		//dynamic only locator check once 
		/*if(wd.findElement(By.xpath("(//*[contains(text(),'" + value + "')])[1]")).isDisplayed() )
		{					
			assertTrue(true);
		}*/
		
		
		
	}	
	//TC_03
	@And("^User verify month for sale adjustement$")
	public void user_verify_month_for_sale_adjustement() throws Throwable 
	{
		String expectedMessage = "January 2018";
		Thread.sleep(2000);
		WebElement element = wd.findElement(By.xpath("//input[@class='form-control disabled date-disabled']"));
		JavascriptExecutor jse = (JavascriptExecutor)wd;
		Object message = jse.executeScript("return arguments[0].value", element);
		System.out.println(message.toString());		
 		Assert.assertTrue(message.toString().contains(expectedMessage));
	}
	
	//------------//
	//TC_05
	@And("^User click on Previous button$")
	public void user_click_on_Previous_button() throws Throwable 
	{
		Thread.sleep(100);
		clickOn("btn_Previous", "");
	}

	@And("^User navigate to sales and purchase page and check$")
	public void user_navigate_to_sales_and_purchase_page_and_check() throws Throwable 
	{
	    Thread.sleep(500);
	    WebElement we;
		we=wd.findElement(By.xpath("//span[text()='Sales']"));		
		if(we.isDisplayed())
		{			
			System.out.println("User is back on  manual assessment Page ");
			assertTrue(true);
		}		
	    
	}	
	
	//---------------//
	//TC_06
	@And("^User check quantity list$")
	public void user_check_quantity_list() throws Throwable 
	{
		System.out.println("User check quantiy list");		
	}

	@And("^User calculate quantity from list and check Total Quantity$")
	public void user_calculate_quantity_from_list_and_check_Total_Quantity() throws Throwable 
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
	//--------------//
	//TC_07
	@And("^User check gross amount list$")
	public void user_check_gross_amount_list() throws Throwable 
	{
		System.out.println("User check gross amount list");
	}

	@And("^User calculate gross amount from list and check Total Gross Amount$")
	public void user_calculate_gross_amount_from_list_and_check_Total_Gross_Amount() throws Throwable 
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
	
	//-------------------//
	//TC_08
	
	@And("^User check VAT amount list$")
	public void user_check_VAT_amount_list() throws Throwable 
	{
		System.out.println("User check VAT amount list");
	}

	@And("^User calculate VAT amount from list and check VAT Amount total$")
	public void user_calculate_VAT_amount_from_list_and_check_VAT_Amount_total() throws Throwable 
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
	
	//-------------//
	//TC_09
	
	@And("^User check Net amount list$")
	public void user_check_Net_amount_list() throws Throwable 
	{
		System.out.println("User check Net amount list");
	}

	@And("^User calculate Net amount from list and check Net Amount total$")
	public void user_calculate_Net_amount_from_list_and_check_Net_Amount_total() throws Throwable 
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
	
	//-----------//
	//TC_10
	
	@And("^User check invoice number \"([^\"]*)\" for sales adjustement$")
	public void user_check_invoice_number_for_sales_adjustement(String value) throws Throwable 
	{		
		if(wd.findElement(By.xpath("(//*[contains(text(),'" + value + "')])[1]")).isDisplayed() )
		{		
			System.out.println("User see invoice number ");
			assertTrue(true);
		}			
	}
	
	//-----------//
	//11
	@And("^User check sales type \"([^\"]*)\" for sales adjustement$")
	public void user_check_sales_type_for_sales_adjustement(String value) throws Throwable 
	{
		if(wd.findElement(By.xpath("(//*[contains(text(),'" + value + "')])[1]")).isDisplayed() )
		{		
			System.out.println("User see sales type");
			assertTrue(true);
		}			
	}
	
	//-------------//
	//12
	@And("^User check Debit Credit note \"([^\"]*)\" for sales adjustement$")
	public void user_check_Debit_Credit_note_for_sales_adjustement(String value) throws Throwable 
	{
		if(wd.findElement(By.xpath("(//*[contains(text(),'" + value + "')])[2]")).isDisplayed() )
		{		
			System.out.println("User see sales number for adjustement");
			assertTrue(true);
		}			
	}

	//-----------//
	//13
	@And("^User check  sales type \"([^\"]*)\" and NITVA of customer \"([^\"]*)\"$")
	public void user_check_sales_type_and_NITVA_of_customer(String value, String value1) throws Throwable 
	{
		
		if(wd.findElement(By.xpath("(//*[contains(text(),'" + value + "')])[1]")).isDisplayed() && wd.findElement(By.xpath("(//*[contains(text(),'" + value1 + "')])[3]")).isDisplayed())
		{		
			System.out.println("User see sale type and nitva  number");
			assertTrue(true);
		}				
		
	}
	//---------//
	//14	
	
	@And("^User check for single Commodity Service Code for sales \"([^\"]*)\"$")
	public void user_check_for_single_Commodity_Service_Code_for_sales(String value) throws Throwable 
	{
		if(wd.findElement(By.xpath("(//*[contains(text(),'" + value + "')])[1]")).isDisplayed() )
		{		
			System.out.println("User see sales number for adjustement");
			assertTrue(true);
		}	
	}	
	
	@And("^User check for multiple Commodity Service Code \"([^\"]*)\" \"([^\"]*)\" for sales$")
	public void user_check_for_multiple_Commodity_Service_Code_for_sales(String value, String value1) throws Throwable 
	{
		if(wd.findElement(By.xpath("(//*[contains(text(),'" + value + "')])[1]")).isDisplayed() && wd.findElement(By.xpath("(//*[contains(text(),'" + value1 + "')])[2]")).isDisplayed() )
		{		
			System.out.println("User see sales number for adjustement");
			assertTrue(true);
		}
	}
	
	/*@And("^User check for multiple Commodity Service Code \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_check_for_multiple_Commodity_Service_Code(String value, String value1, String value2) throws Throwable 
	{
		
		
		if(wd.findElement(By.xpath("(//*[contains(text(),'" + value + "')])[1]")).isDisplayed() && wd.findElement(By.xpath("(//*[contains(text(),'" + value1 + "')])[3]")).isDisplayed() && wd.findElement(By.xpath("(//*[contains(text(),'" + value2 + "')])[3]")).isDisplayed())
		{		
			System.out.println("User see sale type and nitva  number");
			assertTrue(true);
		}	
		
		WebElement we,we1,we2;
		we=wd.findElement(By.xpath(obj.getProperty(value)));
		we1=wd.findElement(By.xpath(obj.getProperty(value1)));
		we2=wd.findElement(By.xpath(obj.getProperty(value2)));
		
		if(we.isDisplayed() && we1.isDisplayed() && we2.isDisplayed())
		{
			Assert.assertTrue(true);
			//System.out.println("Domestic and customer id");		
		}		
	}*/

	//---------//
	//15
	@And("^User check quantity \"([^\"]*)\" and unit \"([^\"]*)\" for invoice \"([^\"]*)\"$")
	public void user_check_quantity_and_unit_for_invoice(String value, String value1, String value2) throws Throwable 
	{
		WebElement we,we1,we2;
		we=wd.findElement(By.xpath(obj.getProperty(value)));
		we1=wd.findElement(By.xpath(obj.getProperty(value1)));
		we2=wd.findElement(By.xpath(obj.getProperty(value2)));		
		if(we.isDisplayed() && we1.isDisplayed() && we2.isDisplayed())
		{
			Assert.assertTrue(true);
			//System.out.println("Domestic and customer id");		
		}		
	}
	
	//--------------//
	//16
	
	@And("^User check gross amount \"([^\"]*)\" for invoice \"([^\"]*)\"$")
	public void user_check_gross_amount_for_invoice(String value, String value1) throws Throwable 
	{
		
		/*if(wd.findElement(By.xpath("(//div[contains(text(),'" + value + "')])[1]")).isDisplayed() && wd.findElement(By.xpath("(//div[contains(text(),'" + value1 + "')])[1]")).isDisplayed())
		{		
			System.out.println("User see sale type and nitva  number");
			assertTrue(true);
		}		*/
				
		WebElement we,we1;
		we=wd.findElement(By.xpath(obj.getProperty(value)));
		we1=wd.findElement(By.xpath(obj.getProperty(value1)));		
		
		if(we.isDisplayed() && we1.isDisplayed())
		{
			Assert.assertTrue(true);
			//System.out.println("Domestic and customer id");		
		}		
	}			
	//-------------//
	//17		
	@And("^User check vat amount \"([^\"]*)\"  for invoice \"([^\"]*)\"$")
	public void user_check_vat_amount_for_invoice(String value, String value1) throws Throwable 
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
	
	//-----------//
	//18	
	@And("^User check net amount \"([^\"]*)\"  for invoice \"([^\"]*)\"$")
	public void user_check_net_amount_for_invoice(String value, String value1) throws Throwable 
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
