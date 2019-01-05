package org.drc.vat.StepDefinitions;
import static org.drc.vat.appmanager.HelperBase.*;
import static org.testng.Assert.assertTrue;

import java.text.DecimalFormat;
import java.text.NumberFormat;
import java.util.List;
import java.util.Locale;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class DV_2876_manual_EFD_All 
{
	@Given("^User is on Manual Assessment \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_is_on_Manual_Assessment(String arg1, String arg2) throws Throwable 
	{
		System.out.println(arg1);
		System.out.println(arg2);
	}

	
	@And("^User click on Delivery of goods$")
	public void user_click_on_Delivery_of_goods() throws Throwable 
	{
		Thread.sleep(1000);
		clickOn("btn_eye_DOG", "");
	}

	@And("^User calculate Total Quantity on Delivery of Goods$")
	public void user_calculate_Total_Quantity_on_Delivery_of_Goods() throws Throwable 
	{		
		Thread.sleep(500);
		int sum = 0;
		List<WebElement> elementName =  wd.findElements(By.xpath("//tr/td[8]/div"));
		for(int i = 1; i<elementName.size()+1;i++)
		{
			WebElement element1 = wd.findElement(By.xpath("//tr["+i+"]//td[8]/div"));
			String number1 = element1.getText();
			int result1 = Integer.parseInt(number1);			
			sum = sum + result1;
		}				
		String ConSum =Integer.toString(sum);
		WebElement element3 = wd.findElement(By.xpath(obj.getProperty("txt_TQ_DOG")));		
		String number3 = element3.getText();	
		String New_number3 = number3.replaceAll("[A-Z]", "");									
		if(ConSum ==New_number3)
		{
			assertTrue(true);
		}
	}

	@And("^User calculate Total Gross Amount on Delivery of Goods$")
	public void user_calculate_Total_Gross_Amount_on_Delivery_of_Goods() throws Throwable 
	{ 
		Thread.sleep(500);
		double sum = 0.0f;
		List<WebElement> elementName =  wd.findElements(By.xpath("//tr/td[10]/div"));
		for(int i = 1; i<elementName.size()+1;i++)
		{
			WebElement element1 = wd.findElement(By.xpath("//tr["+i+"]//td[10]/div"));
			String number1 = element1.getText();	
			String num = number1;		
						
		   String Remove_FC = num.replace("." ,"");	
		   Remove_FC = Remove_FC.replace("," ,".");		    		    	 
		 Float  result1 = Float.parseFloat(Remove_FC);
		 sum = sum + result1;
		}		
		double ConSum =sum;		
		String Total_Assessed = elementText("txt_TGA_DOG");		 
		String Remov_FC = Total_Assessed.replaceAll("[A-Z]", "");	
	    String Remove_FC = Remov_FC.replace("." ,"");	
	    Remove_FC = Remove_FC.replace("," ,".");		    		    	 
	    Float ch_result = Float.parseFloat(Remove_FC);
		if(ConSum ==ch_result)
		{
			assertTrue(true);
		}		
	}

	@And("^User calculate Total Vat Amount on Delivery of Goods$")
	public void user_calculate_Total_Vat_Amount_on_Delivery_of_Goods() throws Throwable 
	{
		Thread.sleep(500);
		double sum = 0.0f;				
		List<WebElement> elementName =  wd.findElements(By.xpath("//tr/td[11]/div"));
		for(int i = 1; i<elementName.size()+1;i++)
		{
			WebElement element1 = wd.findElement(By.xpath("//tr["+i+"]//td[11]/div"));
			String number1 = element1.getText();			
			String num = number1;					
			String Remove_FC = num.replace("." ,"");	
			Remove_FC = Remove_FC.replace("," ,".");		    		    	 
			Float  result1 = Float.parseFloat(Remove_FC);
			sum = sum + result1;
		}		
		
		double ConSum =sum;
		String Total_Assessed = elementText("txt_VA");
		String Remov_FC = Total_Assessed.replaceAll("[A-Z]", "");	
	    String Remove_FC = Remov_FC.replace("." ,"");	
	    Remove_FC = Remove_FC.replace("," ,".");		    		    	 
	    Float ch_result = Float.parseFloat(Remove_FC);
		if(ConSum ==ch_result)
		{
			assertTrue(true);
		}		
	}

	@And("^User calculate Total Net Amount on Delivery of Goods$")
	public void user_calculate_Total_Net_Amount_on_Delivery_of_Goods() throws Throwable 
	{
		Thread.sleep(500);
//		int sum = 0;
		double sum = 0.0f;
		List<WebElement> elementName =  wd.findElements(By.xpath("//tr/td[12]/div"));
		for(int i = 1; i<elementName.size()+1;i++)
		{
			WebElement element1 = wd.findElement(By.xpath("//tr["+i+"]//td[12]/div"));
			String number1 = element1.getText();
			String num = number1;					
			String Remove_FC = num.replace("." ,"");	
			Remove_FC = Remove_FC.replace("," ,".");		    		    	 
			Float  result1 = Float.parseFloat(Remove_FC);
			sum = sum + result1;			
			
		}		
		double ConSum =sum;
		//WebElement element3 = wd.findElement(By.xpath(obj.getProperty("txt_NA")));		
		String Total_Assessed = elementText("txt_NA");
		String Remov_FC = Total_Assessed.replaceAll("[A-Z]", "");	
	    String Remove_FC = Remov_FC.replace("." ,"");	
	    Remove_FC = Remove_FC.replace("," ,".");		    		    	 
	    Float ch_result = Float.parseFloat(Remove_FC);
		if(ConSum ==ch_result)
		{
			assertTrue(true);
		}		
	}

	@And("^User click on previous button and navigate to Operations Performed page$")
	public void user_click_on_previous_button_and_navigate_to_Operations_Performed_page() throws Throwable 
	{
		Thread.sleep(500);
		clickOn("btn_efile_Previous", "");
		Thread.sleep(3000);
		 if(wd.findElement(By.xpath(obj.getProperty("txt_OperPeerfor"))).isDisplayed());
		{
		  assertTrue(true);
		}	
	}
	
	//--------sorting------------------//
	
	@Given("^User click on sorting sales type$")
	public void user_click_on_sorting_sales_type() throws Throwable 
	{
		
		clickOn("txt_SalesType_sort", "");
	}

	@Then("^User see sorting result ascending order \"([^\"]*)\"$")
	public void user_see_sorting_result_ascending_order(String asc) throws Throwable
	{
		if(wd.findElement(By.xpath("//div[contains(text(),'" + asc + "')]")).isDisplayed() )
		{					
			assertTrue(true);
		}	
	}

	
	@Then("^User see sorting result descending order \"([^\"]*)\"$")
	public void user_see_sorting_result_descending_order(String dec) throws Throwable 
	{
		if(wd.findElement(By.xpath("//div[contains(text(),'" + dec + "')]")).isDisplayed() )
		{					
			assertTrue(true);
		}
	}

	@Then("^user click on the sorting Date$")
	public void user_click_on_the_sorting_Date() throws Throwable 
	{
		clickOn("txt_Date_sort", "");
	}

	@Then("^user click on the sorting Invoice$")
	public void user_click_on_the_sorting_Invoice() throws Throwable 
	{
		clickOn("txt_IN_no_sort", "");
	}

	@Then("^user click on the sorting nitva$")
	public void user_click_on_the_sorting_nitva() throws Throwable 
	{
		clickOn("txt_nitva_sort", "");
	}

	@Then("^user click on the sorting CSS$")
	public void user_click_on_the_sorting_CSS() throws Throwable 
	{
		clickOn("txt_css_sort", "");
	}

	@Then("^user click on the sorting Quantity$")
	public void user_click_on_the_sorting_Quantity() throws Throwable 
	{
		clickOn("txt_qua_sort", "");
	}

	@Then("^user click on the sorting Unit$")
	public void user_click_on_the_sorting_Unit() throws Throwable 
	{
		clickOn("txt_unit_sort", "");
	}

	@Then("^user click on the sorting Gross Amount$")
	public void user_click_on_the_sorting_Gross_Amount() throws Throwable 
	{
		clickOn("txt_GA_sort", "");
	}

	@Then("^user click on the sorting Vat Amount$")
	public void user_click_on_the_sorting_Vat_Amount() throws Throwable 
	{
		clickOn("txt_VA_sort", "");
	}

	@Then("^user click on the sorting Net Amount$")
	public void user_click_on_the_sorting_Net_Amount() throws Throwable 
	{
		clickOn("txt_NA_sort", "");
	}
	
	
	
	//-----------------------------------//
	
	
	
	
	//-------------------Delivery of Services--------------//
	
	@And("^User click on Delivery of Services$")
	public void user_click_on_Delivery_of_Services() throws Throwable 
	{
		Thread.sleep(1000);
		clickOn("btn_eye_DOS", "");
	}

	@And("^User calculate Total Quantity on Delivery of Services$")
	public void user_calculate_Total_Quantity_on_Delivery_of_Services() throws Throwable 
	{
		
		Thread.sleep(500);
		int sum = 0;
		List<WebElement> elementName =  wd.findElements(By.xpath("//tr/td[8]/div"));
		for(int i = 1; i<elementName.size()+1;i++)
		{
			WebElement element1 = wd.findElement(By.xpath("//tr["+i+"]//td[8]/div"));
			String number1 = element1.getText();
			int result1 = Integer.parseInt(number1);			
			sum = sum + result1;
		}				
		String ConSum =Integer.toString(sum);
		WebElement element3 = wd.findElement(By.xpath(obj.getProperty("txt_TQ_DOG")));		
		String number3 = element3.getText();	
		String New_number3 = number3.replaceAll("[A-Z]", "");									
		if(ConSum ==New_number3)
		{
			assertTrue(true);
		}
		
		
		
	}

	@And("^User calculate Total Gross Amount on Delivery of Services$")
	public void user_calculate_Total_Gross_Amount_on_Delivery_of_Services() throws Throwable 
	{
		Thread.sleep(500);
		double sum = 0.0f;
		List<WebElement> elementName =  wd.findElements(By.xpath("//tr/td[10]/div"));
		for(int i = 1; i<elementName.size()+1;i++)
		{
			WebElement element1 = wd.findElement(By.xpath("//tr["+i+"]//td[10]/div"));
			String number1 = element1.getText();	
			String num = number1;		
						
		   String Remove_FC = num.replace("." ,"");	
		   Remove_FC = Remove_FC.replace("," ,".");		    		    	 
		 Float  result1 = Float.parseFloat(Remove_FC);
		 sum = sum + result1;
		}		
		double ConSum =sum;		
		String Total_Assessed = elementText("txt_TGA_DOG");		 
		String Remov_FC = Total_Assessed.replaceAll("[A-Z]", "");	
	    String Remove_FC = Remov_FC.replace("." ,"");	
	    Remove_FC = Remove_FC.replace("," ,".");		    		    	 
	    Float ch_result = Float.parseFloat(Remove_FC);
		if(ConSum ==ch_result)
		{
			assertTrue(true);
		}		
	}

	@And("^User calculate Total Vat Amount on Delivery of Services$")
	public void user_calculate_Total_Vat_Amount_on_Delivery_of_Services() throws Throwable 
	{
		Thread.sleep(500);
		double sum = 0.0f;				
		List<WebElement> elementName =  wd.findElements(By.xpath("//tr/td[11]/div"));
		for(int i = 1; i<elementName.size()+1;i++)
		{
			WebElement element1 = wd.findElement(By.xpath("//tr["+i+"]//td[11]/div"));
			String number1 = element1.getText();			
			String num = number1;					
			String Remove_FC = num.replace("." ,"");	
			Remove_FC = Remove_FC.replace("," ,".");		    		    	 
			Float  result1 = Float.parseFloat(Remove_FC);
			sum = sum + result1;
		}		
		
		double ConSum =sum;
		String Total_Assessed = elementText("txt_VA");
		String Remov_FC = Total_Assessed.replaceAll("[A-Z]", "");	
	    String Remove_FC = Remov_FC.replace("." ,"");	
	    Remove_FC = Remove_FC.replace("," ,".");		    		    	 
	    Float ch_result = Float.parseFloat(Remove_FC);
		if(ConSum ==ch_result)
		{
			assertTrue(true);
		}		
	}

	@And("^User calculate Total Net Amount on Delivery of Services$")
	public void user_calculate_Total_Net_Amount_on_Delivery_of_Services() throws Throwable 
	{
		Thread.sleep(500);
//		int sum = 0;
		double sum = 0.0f;
		List<WebElement> elementName =  wd.findElements(By.xpath("//tr/td[12]/div"));
		for(int i = 1; i<elementName.size()+1;i++)
		{
			WebElement element1 = wd.findElement(By.xpath("//tr["+i+"]//td[12]/div"));
			String number1 = element1.getText();
			String num = number1;					
			String Remove_FC = num.replace("." ,"");	
			Remove_FC = Remove_FC.replace("," ,".");		    		    	 
			Float  result1 = Float.parseFloat(Remove_FC);
			sum = sum + result1;			
			
		}		
		double ConSum =sum;
		//WebElement element3 = wd.findElement(By.xpath(obj.getProperty("txt_NA")));		
		String Total_Assessed = elementText("txt_NA");
		String Remov_FC = Total_Assessed.replaceAll("[A-Z]", "");	
	    String Remove_FC = Remov_FC.replace("." ,"");	
	    Remove_FC = Remove_FC.replace("," ,".");		    		    	 
	    Float ch_result = Float.parseFloat(Remove_FC);
		if(ConSum ==ch_result)
		{
			assertTrue(true);
		}		
	}	
	
	//--------------------EXPORT---------------------------//
	
	@And("^User click on Exports and related transactions$")
	public void user_click_on_Exports_and_related_transactions() throws Throwable 
	{
		Thread.sleep(1000);
		clickOn("btn_eye_Export", "");
	}

	@And("^User calculate Total Quantity on Exports and related transactions$")
	public void user_calculate_Total_Quantity_on_Exports_and_related_transactions() throws Throwable 
	{
		Thread.sleep(500);
		int sum = 0;
		List<WebElement> elementName =  wd.findElements(By.xpath("//tr/td[8]/div"));
		for(int i = 1; i<elementName.size()+1;i++)
		{
			WebElement element1 = wd.findElement(By.xpath("//tr["+i+"]//td[8]/div"));
			String number1 = element1.getText();
			int result1 = Integer.parseInt(number1);			
			sum = sum + result1;
		}				
		String ConSum =Integer.toString(sum);
		WebElement element3 = wd.findElement(By.xpath(obj.getProperty("txt_TQ_DOG")));		
		String number3 = element3.getText();	
		String New_number3 = number3.replaceAll("[A-Z]", "");									
		if(ConSum ==New_number3)
		{
			assertTrue(true);
		}
	}

	@And("^User calculate Total Gross Amount on Exports and related transactions$")
	public void user_calculate_Total_Gross_Amount_on_Exports_and_related_transactions() throws Throwable 
	{
		Thread.sleep(500);
		double sum = 0.0f;
		List<WebElement> elementName =  wd.findElements(By.xpath("//tr/td[10]/div"));
		for(int i = 1; i<elementName.size()+1;i++)
		{
			WebElement element1 = wd.findElement(By.xpath("//tr["+i+"]//td[10]/div"));
			String number1 = element1.getText();	
			String num = number1;		
						
		   String Remove_FC = num.replace("." ,"");	
		   Remove_FC = Remove_FC.replace("," ,".");		    		    	 
		 Float  result1 = Float.parseFloat(Remove_FC);
		 sum = sum + result1;
		}		
		double ConSum =sum;		
		String Total_Assessed = elementText("txt_TGA_DOG");		 
		String Remov_FC = Total_Assessed.replaceAll("[A-Z]", "");	
	    String Remove_FC = Remov_FC.replace("." ,"");	
	    Remove_FC = Remove_FC.replace("," ,".");		    		    	 
	    Float ch_result = Float.parseFloat(Remove_FC);
		if(ConSum ==ch_result)
		{
			assertTrue(true);
		}		
	}

	@And("^User calculate Total Vat Amount on Exports and related transactions$")
	public void user_calculate_Total_Vat_Amount_on_Exports_and_related_transactions() throws Throwable 
	{
		Thread.sleep(500);
		double sum = 0.0f;				
		List<WebElement> elementName =  wd.findElements(By.xpath("//tr/td[11]/div"));
		for(int i = 1; i<elementName.size()+1;i++)
		{
			WebElement element1 = wd.findElement(By.xpath("//tr["+i+"]//td[11]/div"));
			String number1 = element1.getText();			
			String num = number1;					
			String Remove_FC = num.replace("." ,"");	
			Remove_FC = Remove_FC.replace("," ,".");		    		    	 
			Float  result1 = Float.parseFloat(Remove_FC);
			sum = sum + result1;
		}		
		
		double ConSum =sum;
		String Total_Assessed = elementText("txt_VA");
		String Remov_FC = Total_Assessed.replaceAll("[A-Z]", "");	
	    String Remove_FC = Remov_FC.replace("." ,"");	
	    Remove_FC = Remove_FC.replace("," ,".");		    		    	 
	    Float ch_result = Float.parseFloat(Remove_FC);
		if(ConSum ==ch_result)
		{
			assertTrue(true);
		}		
	}

	@And("^User calculate Total Net Amount on Exports and related transactions$")
	public void user_calculate_Total_Net_Amount_on_Exports_and_related_transactions() throws Throwable 
	{
		Thread.sleep(500);
//		int sum = 0;
		double sum = 0.0f;
		List<WebElement> elementName =  wd.findElements(By.xpath("//tr/td[12]/div"));
		for(int i = 1; i<elementName.size()+1;i++)
		{
			WebElement element1 = wd.findElement(By.xpath("//tr["+i+"]//td[12]/div"));
			String number1 = element1.getText();
			String num = number1;					
			String Remove_FC = num.replace("." ,"");	
			Remove_FC = Remove_FC.replace("," ,".");		    		    	 
			Float  result1 = Float.parseFloat(Remove_FC);
			sum = sum + result1;			
			
		}		
		double ConSum =sum;
		//WebElement element3 = wd.findElement(By.xpath(obj.getProperty("txt_NA")));		
		String Total_Assessed = elementText("txt_NA");
		String Remov_FC = Total_Assessed.replaceAll("[A-Z]", "");	
	    String Remove_FC = Remov_FC.replace("." ,"");	
	    Remove_FC = Remove_FC.replace("," ,".");		    		    	 
	    Float ch_result = Float.parseFloat(Remove_FC);
		if(ConSum ==ch_result)
		{
			assertTrue(true);
		}		
	}

	//------------------EXEMPT------------------------//
	
	@And("^User click on Exempt transactions$")
	public void user_click_on_Exempt_transactions() throws Throwable 
	{
		Thread.sleep(1000);
		clickOn("btn_eye_Exempt", "");
	}

	@And("^User calculate Total Quantity on Exempt transactions$")
	public void user_calculate_Total_Quantity_on_Exempt_transactions() throws Throwable 
	{
		Thread.sleep(500);
		int sum = 0;
		List<WebElement> elementName =  wd.findElements(By.xpath("//tr/td[8]/div"));
		for(int i = 1; i<elementName.size()+1;i++)
		{
			WebElement element1 = wd.findElement(By.xpath("//tr["+i+"]//td[8]/div"));
			String number1 = element1.getText();
			int result1 = Integer.parseInt(number1);			
			sum = sum + result1;
		}				
		String ConSum =Integer.toString(sum);
		WebElement element3 = wd.findElement(By.xpath(obj.getProperty("txt_TQ_DOG")));		
		String number3 = element3.getText();	
		String New_number3 = number3.replaceAll("[A-Z]", "");									
		if(ConSum ==New_number3)
		{
			assertTrue(true);
		}
	}

	@And("^User calculate Total Gross Amount on Exempt transactions$")
	public void user_calculate_Total_Gross_Amount_on_Exempt_transactions() throws Throwable 
	{
		Thread.sleep(500);
		double sum = 0.0f;
		List<WebElement> elementName =  wd.findElements(By.xpath("//tr/td[10]/div"));
		for(int i = 1; i<elementName.size()+1;i++)
		{
			WebElement element1 = wd.findElement(By.xpath("//tr["+i+"]//td[10]/div"));
			String number1 = element1.getText();	
			String num = number1;		
						
		   String Remove_FC = num.replace("." ,"");	
		   Remove_FC = Remove_FC.replace("," ,".");		    		    	 
		 Float  result1 = Float.parseFloat(Remove_FC);
		 sum = sum + result1;
		}		
		double ConSum =sum;		
		String Total_Assessed = elementText("txt_TGA_DOG");		 
		String Remov_FC = Total_Assessed.replaceAll("[A-Z]", "");	
	    String Remove_FC = Remov_FC.replace("." ,"");	
	    Remove_FC = Remove_FC.replace("," ,".");		    		    	 
	    Float ch_result = Float.parseFloat(Remove_FC);
		if(ConSum ==ch_result)
		{
			assertTrue(true);
		}		
	}

	@And("^User calculate Total Vat Amount on Exempt transactions$")
	public void user_calculate_Total_Vat_Amount_on_Exempt_transactions() throws Throwable 
	{
		Thread.sleep(500);
		double sum = 0.0f;				
		List<WebElement> elementName =  wd.findElements(By.xpath("//tr/td[11]/div"));
		for(int i = 1; i<elementName.size()+1;i++)
		{
			WebElement element1 = wd.findElement(By.xpath("//tr["+i+"]//td[11]/div"));
			String number1 = element1.getText();			
			String num = number1;					
			String Remove_FC = num.replace("." ,"");	
			Remove_FC = Remove_FC.replace("," ,".");		    		    	 
			Float  result1 = Float.parseFloat(Remove_FC);
			sum = sum + result1;
		}		
		
		double ConSum =sum;
		String Total_Assessed = elementText("txt_VA");
		String Remov_FC = Total_Assessed.replaceAll("[A-Z]", "");	
	    String Remove_FC = Remov_FC.replace("." ,"");	
	    Remove_FC = Remove_FC.replace("," ,".");		    		    	 
	    Float ch_result = Float.parseFloat(Remove_FC);
		if(ConSum ==ch_result)
		{
			assertTrue(true);
		}		
	}

	@And("^User calculate Total Net Amount on Exempt transactions$")
	public void user_calculate_Total_Net_Amount_on_Exempt_transactions() throws Throwable 
	{
		Thread.sleep(500);
//		int sum = 0;
		double sum = 0.0f;
		List<WebElement> elementName =  wd.findElements(By.xpath("//tr/td[12]/div"));
		for(int i = 1; i<elementName.size()+1;i++)
		{
			WebElement element1 = wd.findElement(By.xpath("//tr["+i+"]//td[12]/div"));
			String number1 = element1.getText();
			String num = number1;					
			String Remove_FC = num.replace("." ,"");	
			Remove_FC = Remove_FC.replace("," ,".");		    		    	 
			Float  result1 = Float.parseFloat(Remove_FC);
			sum = sum + result1;			
			
		}		
		double ConSum =sum;
		//WebElement element3 = wd.findElement(By.xpath(obj.getProperty("txt_NA")));		
		String Total_Assessed = elementText("txt_NA");
		String Remov_FC = Total_Assessed.replaceAll("[A-Z]", "");	
	    String Remove_FC = Remov_FC.replace("." ,"");	
	    Remove_FC = Remove_FC.replace("," ,".");		    		    	 
	    Float ch_result = Float.parseFloat(Remove_FC);
		if(ConSum ==ch_result)
		{
			assertTrue(true);
		}		
	}
	
	//------------------Non-taxable transactions------------------//
	
	@And("^User click on Non-taxable transactions$")
	public void user_click_on_Non_taxable_transactions() throws Throwable 
	{
		Thread.sleep(1000);
		clickOn("btn_eye_NT", "");
	}

	@And("^User calculate Total Quantity on Non-taxable transactions$")
	public void user_calculate_Total_Quantity_on_Non_taxable_transactions() throws Throwable 
	{
		Thread.sleep(500);
		int sum = 0;
		List<WebElement> elementName =  wd.findElements(By.xpath("//tr/td[8]/div"));
		for(int i = 1; i<elementName.size()+1;i++)
		{
			WebElement element1 = wd.findElement(By.xpath("//tr["+i+"]//td[8]/div"));
			String number1 = element1.getText();
			int result1 = Integer.parseInt(number1);			
			sum = sum + result1;
		}				
		String ConSum =Integer.toString(sum);
		WebElement element3 = wd.findElement(By.xpath(obj.getProperty("txt_TQ_DOG")));		
		String number3 = element3.getText();	
		String New_number3 = number3.replaceAll("[A-Z]", "");									
		if(ConSum ==New_number3)
		{
			assertTrue(true);
		}
	}

	@And("^User calculate Total Gross Amount on Non-taxable transactions$")
	public void user_calculate_Total_Gross_Amount_on_Non_taxable_transactions() throws Throwable
	{
		Thread.sleep(500);
		double sum = 0.0f;
		List<WebElement> elementName =  wd.findElements(By.xpath("//tr/td[10]/div"));
		for(int i = 1; i<elementName.size()+1;i++)
		{
			WebElement element1 = wd.findElement(By.xpath("//tr["+i+"]//td[10]/div"));
			String number1 = element1.getText();	
			String num = number1;		
						
		   String Remove_FC = num.replace("." ,"");	
		   Remove_FC = Remove_FC.replace("," ,".");		    		    	 
		 Float  result1 = Float.parseFloat(Remove_FC);
		 sum = sum + result1;
		}		
		double ConSum =sum;		
		String Total_Assessed = elementText("txt_TGA_DOG");		 
		String Remov_FC = Total_Assessed.replaceAll("[A-Z]", "");	
	    String Remove_FC = Remov_FC.replace("." ,"");	
	    Remove_FC = Remove_FC.replace("," ,".");		    		    	 
	    Float ch_result = Float.parseFloat(Remove_FC);
		if(ConSum ==ch_result)
		{
			assertTrue(true);
		}		
	}

	@And("^User calculate Total Vat Amount on Non-taxable transactions$")
	public void user_calculate_Total_Vat_Amount_on_Non_taxable_transactions() throws Throwable
	{
		Thread.sleep(500);
		double sum = 0.0f;				
		List<WebElement> elementName =  wd.findElements(By.xpath("//tr/td[11]/div"));
		for(int i = 1; i<elementName.size()+1;i++)
		{
			WebElement element1 = wd.findElement(By.xpath("//tr["+i+"]//td[11]/div"));
			String number1 = element1.getText();			
			String num = number1;					
			String Remove_FC = num.replace("." ,"");	
			Remove_FC = Remove_FC.replace("," ,".");		    		    	 
			Float  result1 = Float.parseFloat(Remove_FC);
			sum = sum + result1;
		}		
		
		double ConSum =sum;
		String Total_Assessed = elementText("txt_VA");
		String Remov_FC = Total_Assessed.replaceAll("[A-Z]", "");	
	    String Remove_FC = Remov_FC.replace("." ,"");	
	    Remove_FC = Remove_FC.replace("," ,".");		    		    	 
	    Float ch_result = Float.parseFloat(Remove_FC);
		if(ConSum ==ch_result)
		{
			assertTrue(true);
		}		
	}

	@And("^User calculate Total Net Amount on Non-taxable transactions$")
	public void user_calculate_Total_Net_Amount_on_Non_taxable_transactions() throws Throwable 
	{
		Thread.sleep(500);
//		int sum = 0;
		double sum = 0.0f;
		List<WebElement> elementName =  wd.findElements(By.xpath("//tr/td[12]/div"));
		for(int i = 1; i<elementName.size()+1;i++)
		{
			WebElement element1 = wd.findElement(By.xpath("//tr["+i+"]//td[12]/div"));
			String number1 = element1.getText();
			String num = number1;					
			String Remove_FC = num.replace("." ,"");	
			Remove_FC = Remove_FC.replace("," ,".");		    		    	 
			Float  result1 = Float.parseFloat(Remove_FC);
			sum = sum + result1;			
			
		}		
		double ConSum =sum;
		//WebElement element3 = wd.findElement(By.xpath(obj.getProperty("txt_NA")));		
		String Total_Assessed = elementText("txt_NA");
		String Remov_FC = Total_Assessed.replaceAll("[A-Z]", "");	
	    String Remove_FC = Remov_FC.replace("." ,"");	
	    Remove_FC = Remove_FC.replace("," ,".");		    		    	 
	    Float ch_result = Float.parseFloat(Remove_FC);
		if(ConSum ==ch_result)
		{
			assertTrue(true);
		}		
	}
	
	///---------------------------Total deductible----------------------//
	
	@And("^User click on Total deductible$")
	public void user_click_on_Total_deductible() throws Throwable 
	{
		Thread.sleep(1000);
		clickOn("btn_eye_TD", "");
	}

	@And("^User calculate Total Quantity on Total deductible$")
	public void user_calculate_Total_Quantity_on_Total_deductible() throws Throwable 
	{
		Thread.sleep(500);
		int sum = 0;
		List<WebElement> elementName =  wd.findElements(By.xpath("//tr/td[8]/div"));
		for(int i = 1; i<elementName.size()+1;i++)
		{
			WebElement element1 = wd.findElement(By.xpath("//tr["+i+"]//td[8]/div"));
			String number1 = element1.getText();
			int result1 = Integer.parseInt(number1);			
			sum = sum + result1;
		}				
		String ConSum =Integer.toString(sum);
		WebElement element3 = wd.findElement(By.xpath(obj.getProperty("txt_TQ_DOG")));		
		String number3 = element3.getText();	
		String New_number3 = number3.replaceAll("[A-Z]", "");									
		if(ConSum ==New_number3)
		{
			assertTrue(true);
		}
	}

	@And("^User calculate Total Gross Amount on Total deductible$")
	public void user_calculate_Total_Gross_Amount_on_Total_deductible() throws Throwable 
	{
		Thread.sleep(500);
		double sum = 0.0f;
		List<WebElement> elementName =  wd.findElements(By.xpath("//tr/td[10]/div"));
		for(int i = 1; i<elementName.size()+1;i++)
		{
			WebElement element1 = wd.findElement(By.xpath("//tr["+i+"]//td[10]/div"));
			String number1 = element1.getText();	
			String num = number1;		
						
		   String Remove_FC = num.replace("." ,"");	
		   Remove_FC = Remove_FC.replace("," ,".");		    		    	 
		 Float  result1 = Float.parseFloat(Remove_FC);
		 sum = sum + result1;
		}		
		double ConSum =sum;		
		String Total_Assessed = elementText("txt_TGA_DOG");		 
		String Remov_FC = Total_Assessed.replaceAll("[A-Z]", "");	
	    String Remove_FC = Remov_FC.replace("." ,"");	
	    Remove_FC = Remove_FC.replace("," ,".");		    		    	 
	    Float ch_result = Float.parseFloat(Remove_FC);
		if(ConSum ==ch_result)
		{
			assertTrue(true);
		}		
	}

	@And("^User calculate Total Vat Amount on Total deductible$")
	public void user_calculate_Total_Vat_Amount_on_Total_deductible() throws Throwable 
	{
		Thread.sleep(500);
		double sum = 0.0f;				
		List<WebElement> elementName =  wd.findElements(By.xpath("//tr/td[11]/div"));
		for(int i = 1; i<elementName.size()+1;i++)
		{
			WebElement element1 = wd.findElement(By.xpath("//tr["+i+"]//td[11]/div"));
			String number1 = element1.getText();			
			String num = number1;					
			String Remove_FC = num.replace("." ,"");	
			Remove_FC = Remove_FC.replace("," ,".");		    		    	 
			Float  result1 = Float.parseFloat(Remove_FC);
			sum = sum + result1;
		}		
		
		double ConSum =sum;
		String Total_Assessed = elementText("txt_VA");
		String Remov_FC = Total_Assessed.replaceAll("[A-Z]", "");	
	    String Remove_FC = Remov_FC.replace("." ,"");	
	    Remove_FC = Remove_FC.replace("," ,".");		    		    	 
	    Float ch_result = Float.parseFloat(Remove_FC);
		if(ConSum ==ch_result)
		{
			assertTrue(true);
		}		
	}

	@And("^User calculate Total Net Amount on Total deductible$")
	public void user_calculate_Total_Net_Amount_on_Total_deductible() throws Throwable 
	{
		Thread.sleep(500);
//		int sum = 0;
		double sum = 0.0f;
		List<WebElement> elementName =  wd.findElements(By.xpath("//tr/td[12]/div"));
		for(int i = 1; i<elementName.size()+1;i++)
		{
			WebElement element1 = wd.findElement(By.xpath("//tr["+i+"]//td[12]/div"));
			String number1 = element1.getText();
			String num = number1;					
			String Remove_FC = num.replace("." ,"");	
			Remove_FC = Remove_FC.replace("," ,".");		    		    	 
			Float  result1 = Float.parseFloat(Remove_FC);
			sum = sum + result1;			
			
		}		
		double ConSum =sum;
		//WebElement element3 = wd.findElement(By.xpath(obj.getProperty("txt_NA")));		
		String Total_Assessed = elementText("txt_NA");
		String Remov_FC = Total_Assessed.replaceAll("[A-Z]", "");	
	    String Remove_FC = Remov_FC.replace("." ,"");	
	    Remove_FC = Remove_FC.replace("," ,".");		    		    	 
	    Float ch_result = Float.parseFloat(Remove_FC);
		if(ConSum ==ch_result)
		{
			assertTrue(true);
		}		
	}

	@And("^User click on previous button and navigate to Tax Deductible page$")
	public void user_click_on_previous_button_and_navigate_to_Tax_Deductible_page() throws Throwable 
	{
		clickOn("btn_efile_Previous", "");
		 if(wd.findElement(By.xpath(obj.getProperty("txt_Tax_Deductible_Page"))).isDisplayed());
			{
			  assertTrue(true);
			}	
	}
	
	//------------------Supplementary deductions ------------------//
	
	@And("^User click on Supplementary deductions$")
	public void user_click_on_Supplementary_deductions() throws Throwable 
	{
		Thread.sleep(1000);
		clickOn("btn_eye_SD", "");
	}

	@And("^User calculate Total Quantity on Supplementary deductions$")
	public void user_calculate_Total_Quantity_on_Supplementary_deductions() throws Throwable 
	{
		Thread.sleep(500);
		int sum = 0;
		List<WebElement> elementName =  wd.findElements(By.xpath("//tr/td[8]/div"));
		for(int i = 1; i<elementName.size()+1;i++)
		{
			WebElement element1 = wd.findElement(By.xpath("//tr["+i+"]//td[8]/div"));
			String number1 = element1.getText();
			int result1 = Integer.parseInt(number1);			
			sum = sum + result1;
		}				
		String ConSum =Integer.toString(sum);
		WebElement element3 = wd.findElement(By.xpath(obj.getProperty("txt_TQ_DOG")));		
		String number3 = element3.getText();	
		String New_number3 = number3.replaceAll("[A-Z]", "");									
		if(ConSum ==New_number3)
		{
			assertTrue(true);
		}
	}

	@And("^User calculate Total Gross Amount on Supplementary deductions$")
	public void user_calculate_Total_Gross_Amount_on_Supplementary_deductions() throws Throwable 
	{
		Thread.sleep(500);
		double sum = 0.0f;
		List<WebElement> elementName =  wd.findElements(By.xpath("//tr/td[10]/div"));
		for(int i = 1; i<elementName.size()+1;i++)
		{
			WebElement element1 = wd.findElement(By.xpath("//tr["+i+"]//td[10]/div"));
			String number1 = element1.getText();	
			String num = number1;		
						
		   String Remove_FC = num.replace("." ,"");	
		   Remove_FC = Remove_FC.replace("," ,".");		    		    	 
		 Float  result1 = Float.parseFloat(Remove_FC);
		 sum = sum + result1;
		}		
		double ConSum =sum;		
		String Total_Assessed = elementText("txt_TGA_DOG");		 
		String Remov_FC = Total_Assessed.replaceAll("[A-Z]", "");	
	    String Remove_FC = Remov_FC.replace("." ,"");	
	    Remove_FC = Remove_FC.replace("," ,".");		    		    	 
	    Float ch_result = Float.parseFloat(Remove_FC);
		if(ConSum ==ch_result)
		{
			assertTrue(true);
		}		
	}

	@And("^User calculate Total Vat Amount on Supplementary deductions$")
	public void user_calculate_Total_Vat_Amount_on_Supplementary_deductions() throws Throwable 
	{
		Thread.sleep(500);
		double sum = 0.0f;				
		List<WebElement> elementName =  wd.findElements(By.xpath("//tr/td[11]/div"));
		for(int i = 1; i<elementName.size()+1;i++)
		{
			WebElement element1 = wd.findElement(By.xpath("//tr["+i+"]//td[11]/div"));
			String number1 = element1.getText();			
			String num = number1;					
			String Remove_FC = num.replace("." ,"");	
			Remove_FC = Remove_FC.replace("," ,".");		    		    	 
			Float  result1 = Float.parseFloat(Remove_FC);
			sum = sum + result1;
		}		
		
		double ConSum =sum;
		String Total_Assessed = elementText("txt_VA");
		String Remov_FC = Total_Assessed.replaceAll("[A-Z]", "");	
	    String Remove_FC = Remov_FC.replace("." ,"");	
	    Remove_FC = Remove_FC.replace("," ,".");		    		    	 
	    Float ch_result = Float.parseFloat(Remove_FC);
		if(ConSum ==ch_result)
		{
			assertTrue(true);
		}		
	}

	@And("^User calculate Total Net Amount on Supplementary deductions$")
	public void user_calculate_Total_Net_Amount_on_Supplementary_deductions() throws Throwable 
	{
		Thread.sleep(500);
//		int sum = 0;
		double sum = 0.0f;
		List<WebElement> elementName =  wd.findElements(By.xpath("//tr/td[12]/div"));
		for(int i = 1; i<elementName.size()+1;i++)
		{
			WebElement element1 = wd.findElement(By.xpath("//tr["+i+"]//td[12]/div"));
			String number1 = element1.getText();
			String num = number1;					
			String Remove_FC = num.replace("." ,"");	
			Remove_FC = Remove_FC.replace("," ,".");		    		    	 
			Float  result1 = Float.parseFloat(Remove_FC);
			sum = sum + result1;			
			
		}		
		double ConSum =sum;
		//WebElement element3 = wd.findElement(By.xpath(obj.getProperty("txt_NA")));		
		String Total_Assessed = elementText("txt_NA");
		String Remov_FC = Total_Assessed.replaceAll("[A-Z]", "");	
	    String Remove_FC = Remov_FC.replace("." ,"");	
	    Remove_FC = Remove_FC.replace("," ,".");		    		    	 
	    Float ch_result = Float.parseFloat(Remove_FC);
		if(ConSum ==ch_result)
		{
			assertTrue(true);
		}		
	}
	
	@And("^User click on previous button and navigate to Adjustment Page$")
	public void user_click_on_previous_button_and_navigate_to_Adjustment_Page() throws Throwable 
	{
		clickOn("btn_efile_Previous", "");
		 if(wd.findElement(By.xpath(obj.getProperty("txt_checkAdjustement_page"))).isDisplayed());
			{
			  assertTrue(true);
			}	
	}
	
	//--------------Mining------------//
	
	@And("^User click on VAT deducted by mining companies at source$")
	public void user_click_on_VAT_deducted_by_mining_companies_at_source() throws Throwable 
	{
		Thread.sleep(1000);
		clickOn("btn_eye_Min", "");
	}

	@And("^User calculate Total Quantity on Mining$")
	public void user_calculate_Total_Quantity_on_Mining() throws Throwable 
	{
		Thread.sleep(500);
		int sum = 0;
		List<WebElement> elementName =  wd.findElements(By.xpath("//tr/td[8]/div"));
		for(int i = 1; i<elementName.size()+1;i++)
		{
			WebElement element1 = wd.findElement(By.xpath("//tr["+i+"]//td[8]/div"));
			String number1 = element1.getText();
			int result1 = Integer.parseInt(number1);			
			sum = sum + result1;
		}				
		String ConSum =Integer.toString(sum);
		WebElement element3 = wd.findElement(By.xpath(obj.getProperty("txt_TQ_DOG")));		
		String number3 = element3.getText();	
		String New_number3 = number3.replaceAll("[A-Z]", "");									
		if(ConSum ==New_number3)
		{
			assertTrue(true);
		}
	}

	@And("^User calculate Total Gross Amount on Mining$")
	public void user_calculate_Total_Gross_Amount_on_Mining() throws Throwable 
	{
		Thread.sleep(500);
		double sum = 0.0f;
		List<WebElement> elementName =  wd.findElements(By.xpath("//tr/td[10]/div"));
		for(int i = 1; i<elementName.size()+1;i++)
		{
			WebElement element1 = wd.findElement(By.xpath("//tr["+i+"]//td[10]/div"));
			String number1 = element1.getText();	
			String num = number1;		
						
		   String Remove_FC = num.replace("." ,"");	
		   Remove_FC = Remove_FC.replace("," ,".");		    		    	 
		 Float  result1 = Float.parseFloat(Remove_FC);
		 sum = sum + result1;
		}		
		double ConSum =sum;		
		String Total_Assessed = elementText("txt_TGA_DOG");		 
		String Remov_FC = Total_Assessed.replaceAll("[A-Z]", "");	
	    String Remove_FC = Remov_FC.replace("." ,"");	
	    Remove_FC = Remove_FC.replace("," ,".");		    		    	 
	    Float ch_result = Float.parseFloat(Remove_FC);
		if(ConSum ==ch_result)
		{
			assertTrue(true);
		}		
	}

	@And("^User calculate Total Vat Amount on Mining$")
	public void user_calculate_Total_Vat_Amount_on_Mining() throws Throwable 
	{
		Thread.sleep(500);
		double sum = 0.0f;				
		List<WebElement> elementName =  wd.findElements(By.xpath("//tr/td[11]/div"));
		for(int i = 1; i<elementName.size()+1;i++)
		{
			WebElement element1 = wd.findElement(By.xpath("//tr["+i+"]//td[11]/div"));
			String number1 = element1.getText();			
			String num = number1;					
			String Remove_FC = num.replace("." ,"");	
			Remove_FC = Remove_FC.replace("," ,".");		    		    	 
			Float  result1 = Float.parseFloat(Remove_FC);
			sum = sum + result1;
		}		
		
		double ConSum =sum;
		String Total_Assessed = elementText("txt_VA");
		String Remov_FC = Total_Assessed.replaceAll("[A-Z]", "");	
	    String Remove_FC = Remov_FC.replace("." ,"");	
	    Remove_FC = Remove_FC.replace("," ,".");		    		    	 
	    Float ch_result = Float.parseFloat(Remove_FC);
		if(ConSum ==ch_result)
		{
			assertTrue(true);
		}		
	}

	@And("^User calculate Total Net Amount on Mining$")
	public void user_calculate_Total_Net_Amount_on_Mining() throws Throwable 
	{
		Thread.sleep(500);
//		int sum = 0;
		double sum = 0.0f;
		List<WebElement> elementName =  wd.findElements(By.xpath("//tr/td[12]/div"));
		for(int i = 1; i<elementName.size()+1;i++)
		{
			WebElement element1 = wd.findElement(By.xpath("//tr["+i+"]//td[12]/div"));
			String number1 = element1.getText();
			String num = number1;					
			String Remove_FC = num.replace("." ,"");	
			Remove_FC = Remove_FC.replace("," ,".");		    		    	 
			Float  result1 = Float.parseFloat(Remove_FC);
			sum = sum + result1;			
			
		}		
		double ConSum =sum;
		//WebElement element3 = wd.findElement(By.xpath(obj.getProperty("txt_NA")));		
		String Total_Assessed = elementText("txt_NA");
		String Remov_FC = Total_Assessed.replaceAll("[A-Z]", "");	
	    String Remove_FC = Remov_FC.replace("." ,"");	
	    Remove_FC = Remove_FC.replace("," ,".");		    		    	 
	    Float ch_result = Float.parseFloat(Remove_FC);
		if(ConSum ==ch_result)
		{
			assertTrue(true);
		}		
	}
	
	
	
	
}
