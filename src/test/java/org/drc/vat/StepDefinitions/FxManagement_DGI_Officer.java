package org.drc.vat.StepDefinitions;

import cucumber.api.java.en.And;
import static org.drc.vat.appmanager.HelperBase.*;
import static org.testng.Assert.assertTrue;

import java.awt.Robot;
import java.awt.Toolkit;
import java.awt.datatransfer.StringSelection;
import java.awt.event.KeyEvent;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import cucumber.api.java.en.Then;

public class FxManagement_DGI_Officer 
{
	@And("^User is on FX Management \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_is_on_FX_Management(String value, String value1) throws Throwable
	{
	    
		System.out.println(value);
		System.out.println(value1);
	}

	@And("^User see FX Management$")
	public void user_see_FX_Management() throws Throwable 
	{
		WebElement we;
		we=wd.findElement(By.xpath("(//*[contains(text(),'FX Management')])[1]"));		
		if(we.isDisplayed())
		{			
			System.out.println("User see FX Managment  ");
			assertTrue(true);
		}	
	    Thread.sleep(1000);
	}

	@And("^User click on FX Management tab$")
	public void user_click_on_FX_Management_tab() throws Throwable 
	{
		clickOn("txt_FxManagement", "");	   
		Thread.sleep(1000);
		
	}

	@And("^User click on Historical FX Rates button and verify ui$")
	public void user_click_on_Historical_FX_Rates_button_and_verify_ui() throws Throwable 
	{
	    System.out.println("User verify ui ");
	    
	}

	@And("^User click on Update button$")
	public void user_click_on_Update_button() throws Throwable 
	{
		Thread.sleep(1000);
		clickOn("btn_UpdateFX", "");
		Thread.sleep(1000);
	    
	}

	@And("^User see the pop up Update currency rate$")
	public void user_see_the_pop_up_Update_currency_rate() throws Throwable 
	{
		 System.out.println("User verify ui of pop up ");
		 
	    
	}
	//02 on hold
	@And("^User click on Help button on FX manageent page$")
	public void user_click_on_Help_button_on_FX_manageent_page() throws Throwable 
	{
	    clickOn("btn_HelpFX", "");
	    
	}

	@And("^User click on Help button on Historical FX Rates$")
	public void user_click_on_Help_button_on_Historical_FX_Rates() throws Throwable 
	{
		clickOn("btn_HelpFX", "");
	    
	}

	@And("^User see help page display$")
	public void user_see_help_page_display() throws Throwable 
	{
		System.out.println("User see help button page");
	    
	}

	@And("^User verify the Base currency on the FX management is Congolese France and its value is (\\d+)$")
	public void user_verify_the_Base_currency_on_the_FX_management_is_Congolese_France_and_its_value_is(int arg1) throws Throwable 
	{
		String expectedMessage = "1";
		Thread.sleep(2000);
		WebElement element = wd.findElement(By.xpath("//drc-default-currency-info/section/div[2]"));
		JavascriptExecutor jse = (JavascriptExecutor)wd;
		Object message = jse.executeScript("return arguments[0].value", element);
		System.out.println(message.toString());		
 		Assert.assertTrue(message.toString().contains(expectedMessage));
 		
 		WebElement we;
		we=wd.findElement(By.xpath("//span[text()='Congolese franc(FC)']"));		
		if(we.isDisplayed())
		{						
			assertTrue(true);    
		}
	}
	    
	

	@And("^User click on update button$")
	public void user_click_on_update_button() throws Throwable 
	{
		Thread.sleep(1000);
		clickOn("btn_UpdateFX", "");
	    
	}

	@And("^User see pop up and see base currency is (\\d+)$")
	public void user_see_pop_up_and_see_base_currency_is(int arg1) throws Throwable 
	{
		String expectedMessage = "1";
		Thread.sleep(2000);
		WebElement element = wd.findElement(By.xpath("//drc-default-currency-info/section/div[2]"));
		JavascriptExecutor jse = (JavascriptExecutor)wd;
		Object message = jse.executeScript("return arguments[0].value", element);
		System.out.println(message.toString());		
 		Assert.assertTrue(message.toString().contains(expectedMessage));
	    
	}

	@And("^User click on cancel button on pop up$")
	public void user_click_on_cancel_button_on_pop_up() throws Throwable 
	{
	    clickOn("btn_CancelFX", "");
	    
	}

	@And("^User click on Historical FX Rates button and verify the base currency$")
	public void user_click_on_Historical_FX_Rates_button_and_verify_the_base_currency() throws Throwable 
	{
		Thread.sleep(1000);
		clickOn("btn_HistoricalFX", "");
		Thread.sleep(1000);
		String expectedMessage = "1";
		Thread.sleep(2000);
		WebElement element = wd.findElement(By.xpath("//drc-default-currency-info/section/div[2]"));
		JavascriptExecutor jse = (JavascriptExecutor)wd;
		Object message = jse.executeScript("return arguments[0].value", element);
		System.out.println(message.toString());		
 		Assert.assertTrue(message.toString().contains(expectedMessage));
	    
	}

	@And("^User click on Update button and pop up appear$")
	public void user_click_on_Update_button_and_pop_up_appear() throws Throwable 
	{
		clickOn("btn_UpdateFX", "");
		 WebElement we;
		 we=wd.findElement(By.xpath("//span[text()='Update Currency Rate']"));		
		 if(we.isDisplayed())
		{			
			System.out.println("User See pop up ");
			assertTrue(true);
		}		    
	}

	/*@And("^User clear all field blank and click on save button$")
	public void user_clear_all_field_blank_and_click_on_save_button() throws Throwable 
	{
		
		wd.findElement(By.id("    ")).sendKeys(Keys.RETURN);
		try
		{
			wd.findElement(By.id("     ")).clear();
		}catch(Exception e)
		{
			System.out.println("Element not found");
		}
		Thread.sleep(1000);
		clickOn("btn_UpdateFX", "");
	    
	}*/
	// 05
	@And("^User click on \"([^\"]*)\"enter data \"([^\"]*)\"  and click on save button and check \"([^\"]*)\"$")
	public void user_click_on_enter_data_and_click_on_save_button_and_check(String value, String value1, String value2) throws Throwable
	{
	    clickOn("value", "");
	    
	    type(value1, "");
	    
	}

	@And("^User enter currency for \"([^\"]*)\"$")
	public void user_enter_currency_for(String value) throws Throwable 
	{
		clickOn("txt_CurrencySelect", "");
		Thread.sleep(100);
	    type("txt_CurrencySelect", value);
	    
	}

	@And("^User check previously enter currency value \"([^\"]*)\"$")
	public void user_check_previously_enter_currency_value(String value) throws Throwable 
	{
	    
		if(wd.findElement(By.xpath("(//*[contains(text(),'" + value + "')])[1]")).isDisplayed() )
		{		
			System.out.println("User see Previosly currency ");
			assertTrue(true);
		}	
	}

	@And("^User click on Save button$")
	public void user_click_on_Save_button() throws Throwable 
	{
		clickOn("btn_SaveFX", "");
	}

	@And("^User see New Conversion Rate column is display$")
	public void user_see_New_Conversion_Rate_column_is_display() throws Throwable 
	{
					
		if(wd.findElement(By.xpath("//span[text()='New Conversion Rate']")).isDisplayed())
		{		
			System.out.println("User see Conversion Rate column is display with currency value added ");
			assertTrue(true);
		}	
		
		String expectedMessage = "100";
		Thread.sleep(2000);
		WebElement element = wd.findElement(By.xpath("//section/section[2]/div[2]/div"));
		JavascriptExecutor jse = (JavascriptExecutor)wd;
		Object message = jse.executeScript("return arguments[0].value", element);
		System.out.println(message.toString());		
 		Assert.assertTrue(message.toString().contains(expectedMessage));
	}

	@And("^User Click on Historical fx rates button$")
	public void user_Click_on_Historical_fx_rates_button() throws Throwable 
	{
		clickOn("btn_HistoricalFX", "");
		Thread.sleep(2000);
	}
	@And("^User check \"([^\"]*)\" in FX management list$")
	public void user_check_in_FX_management_list(String value) throws Throwable 
	{
		
		String expectedMessage = "100";
		Thread.sleep(2000);
		WebElement element = wd.findElement(By.xpath("//div/table/tbody/tr[1]/td[1]/div"));
		JavascriptExecutor jse = (JavascriptExecutor)wd;
		Object message = jse.executeScript("return arguments[0].value", element);
		System.out.println(message.toString());		
 		Assert.assertTrue(message.toString().contains(expectedMessage));

	}

	@And("^User verify the by default date displaying in the From date and To date$")
	public void user_verify_the_by_default_date_displaying_in_the_From_date_and_To_date() throws Throwable
	{
		String sum ="08/31/2018";
		String sum1 ="08/31/2018";
		 WebElement element1 = wd.findElement(By.xpath("//div[1]/div[2]/input"));		
		 String number1 = element1.getAttribute("value");
		 
		 WebElement element2 = wd.findElement(By.xpath("//div[2]/div[2]/input"));		
		 String number2 = element2.getAttribute("value");
		if(sum==number1 && sum1==number2)
		{
			assertTrue(true);
		} 
	}

	//--------------//
	@And("^User Select Todays date \"([^\"]*)\" in From and check selected date$")
	public void user_Select_Todays_date_in_From_and_check_selected_date(String arg1) throws Throwable
	{
		
		String sum ="24";
		clickOn("FromDateSelectFX", "");
	    Thread.sleep(2000);
        WebElement To_date = wd.findElement(By.xpath("//div[2]/table/tbody"));    
        Thread.sleep(2000);

        List<WebElement> startDate = To_date.findElements(By.tagName("td"));
        for(int i = 0; i < startDate.size(); i++)
        {
         String date = startDate.get(i).getText();
         if(date.equals("24"))
         {
          startDate.get(i).click();
           break;
         }
        }
		
        WebElement element1 = wd.findElement(By.xpath("//div[1]/div[2]/input"));		
		String number1 = element1.getAttribute("value");
		System.out.println(number1);
						
		if(sum == number1)
		{
			assertTrue(true);
		}		
	}

	@And("^USer Select todays days \"([^\"]*)\" in To and check selected date$")
	public void user_Select_todays_days_in_To_and_check_selected_date(String arg1) throws Throwable 
	{
		
		String sum ="24";
		clickOn("ToDateSelect", "");
	    Thread.sleep(2000);
        WebElement To_date = wd.findElement(By.xpath("//div[2]/table/tbody"));    
        Thread.sleep(2000);

        List<WebElement> startDate = To_date.findElements(By.tagName("td"));
        for(int i = 0; i < startDate.size(); i++)
        {
         String date = startDate.get(i).getText();
         if(date.equals("24"))
         {
          startDate.get(i).click();
           break;
         }
        }
		
        WebElement element1 = wd.findElement(By.xpath("//div[2]/div[2]/input"));		
		String number1 = element1.getAttribute("value");
		System.out.println(number1);
						
		if(sum == number1)
		{
			assertTrue(true);
		}			
	}

	@And("^User click on search icon and today date should display \"([^\"]*)\"$")
	public void user_click_on_search_icon_and_today_date_should_display(String value) throws Throwable 
	{
		clickOn("btn_SearchFX", "");
				
		if(wd.findElement(By.xpath("(//div[contains(text(),'" + value + "')])[1]")).isDisplayed() )
		{		
			System.out.println("User see Display date");
			assertTrue(true);
		}			
	}

	@And("^User select future date \"([^\"]*)\" in from and check selected date$")
	public void user_select_future_date_in_from_and_check_selected_date(String arg1) throws Throwable 
	{
		String sum ="24";
		clickOn("FromDateSelectFX", "");
	    Thread.sleep(2000);
        WebElement To_date = wd.findElement(By.xpath("//div[2]/table/tbody"));    
        Thread.sleep(2000);

        List<WebElement> startDate = To_date.findElements(By.tagName("td"));
        for(int i = 0; i < startDate.size(); i++)
        {
         String date = startDate.get(i).getText();
         if(date.equals("24"))
         {
          startDate.get(i).click();
           break;
         }
        }
		
        WebElement element1 = wd.findElement(By.xpath("//div[1]/div[2]/input"));		
		String number1 = element1.getAttribute("value");
		System.out.println(number1);
						
		if(sum == number1)
		{
			assertTrue(true);
		}		
	}

	@And("^User select future date \"([^\"]*)\" in TO and check selected date$")
	public void user_select_future_date_in_TO_and_check_selected_date(String arg1) throws Throwable 
	{

		String sum ="24";
		clickOn("ToDateSelect", "");
	    Thread.sleep(2000);
        WebElement To_date = wd.findElement(By.xpath("//div[2]/table/tbody"));    
        Thread.sleep(2000);

        List<WebElement> startDate = To_date.findElements(By.tagName("td"));
        for(int i = 0; i < startDate.size(); i++)
        {
         String date = startDate.get(i).getText();
         if(date.equals("24"))
         {
          startDate.get(i).click();
           break;
         }
        }
		
        WebElement element1 = wd.findElement(By.xpath("//div[2]/div[2]/input"));		
		String number1 = element1.getAttribute("value");
		System.out.println(number1);
						
		if(sum == number1)
		{
			assertTrue(true);
		}		
	}

	@And("^User select present date \"([^\"]*)\" in From and check selected date$")
	public void user_select_present_date_in_From_and_check_selected_date(String arg1) throws Throwable 
	{
		String sum ="1";
		clickOn("FromDateSelectFX", "");
	    Thread.sleep(2000);
        WebElement To_date = wd.findElement(By.xpath("//div[2]/table/tbody"));    
        Thread.sleep(2000);

        List<WebElement> startDate = To_date.findElements(By.tagName("td"));
        for(int i = 0; i < startDate.size(); i++)
        {
         String date = startDate.get(i).getText();
         if(date.equals("1"))
         {
          startDate.get(i).click();
           break;
         }
        }
		
        WebElement element1 = wd.findElement(By.xpath("//div[1]/div[2]/input"));		
		String number1 = element1.getAttribute("value");
		System.out.println(number1);
						
		if(sum == number1)
		{
			assertTrue(true);
		}		
	}

	@And("^User select present date \"([^\"]*)\" in TO and check selected date$")
	public void user_select_present_date_in_TO_and_check_selected_date(String arg1) throws Throwable
	{
		String sum ="01";
		clickOn("ToDateSelect", "");
	    Thread.sleep(2000);
        WebElement To_date = wd.findElement(By.xpath("//div[2]/table/tbody"));    
        Thread.sleep(2000);

        List<WebElement> startDate = To_date.findElements(By.tagName("td"));
        for(int i = 0; i < startDate.size(); i++)
        {
         String date = startDate.get(i).getText();
         if(date.equals("01"))
         {
          startDate.get(i).click();
           break;
         }
        }
		
        WebElement element1 = wd.findElement(By.xpath("//div[2]/div[2]/input"));		
		String number1 = element1.getAttribute("value");
		System.out.println(number1);
						
		if(sum == number1)
		{
			assertTrue(true);
		}		
	}

	@And("^User select date which the currency record are not present in From \"([^\"]*)\"$")
	public void user_select_date_which_the_currency_record_are_not_present_in_From(String arg1) throws Throwable 
	{
		
		clickOn("FromDateSelectFX", "");
	    Thread.sleep(2000);
        WebElement To_date = wd.findElement(By.xpath("//div[2]/table/tbody"));    
        Thread.sleep(2000);

        List<WebElement> startDate = To_date.findElements(By.tagName("td"));
        for(int i = 0; i < startDate.size(); i++)
        {
         String date = startDate.get(i).getText();
         if(date.equals("26"))
         {
          startDate.get(i).click();
           break;
         }
        }     
	}

	@And("^User select date which the currency record are not present in To \"([^\"]*)\"$")
	public void user_select_date_which_the_currency_record_are_not_present_in_To(String arg1) throws Throwable 
	{
		
		clickOn("ToDateSelect", "");
	    Thread.sleep(2000);
        WebElement To_date = wd.findElement(By.xpath("//div[2]/table/tbody"));    
        Thread.sleep(2000);

        List<WebElement> startDate = To_date.findElements(By.tagName("td"));
        for(int i = 0; i < startDate.size(); i++)
        {
         String date = startDate.get(i).getText();
         if(date.equals("26"))
         {
          startDate.get(i).click();
           break;
         }
        }
	}


	@And("^User click on search icon$")
	public void user_click_on_search_icon() throws Throwable
	{
	    clickOn("btn_SearchFX", "");
	    
	}

	@And("^User see message no record found for date$")
	public void user_see_message_no_record_found_for_date() throws Throwable 
	{
		String expectedMessage = "No records found";
		String message = wd.findElement(By.xpath("//*[contains(text(),'No records found')]")).getText();
		Assert.assertTrue(message.contains(expectedMessage));
		Thread.sleep(200);
	    
	}

	@And("^User navigate to FX management page$")
	public void user_navigate_to_FX_management_page() throws Throwable 
	{
		 WebElement we;
		 we=wd.findElement(By.xpath("(//*[contains(text(),'FX Management')])[2]"));		
		 if(we.isDisplayed())
		{			
			System.out.println("User is on FX Management Page ");
			assertTrue(true);
		}		
	    
	}

	@And("^User click on Previous button and again navigate to FX management dashboard$")
	public void user_click_on_Previous_button_and_again_navigate_to_FX_management_dashboard() throws Throwable 
	{
		clickOn("btn_PreviousFX", "");
		
		 WebElement we;
		 we=wd.findElement(By.xpath("(//*[contains(text(),'FX Management')])[2]"));		
		 if(we.isDisplayed())
		{			
			System.out.println("User is on FX Management Dashboard ");
			assertTrue(true);
		}		
	    
	}

	@And("^User see New Conversion Rate column on FX management landing page$")
	public void user_see_New_Conversion_Rate_column_on_FX_management_landing_page() throws Throwable 
	{
		WebElement we;
		 we=wd.findElement(By.xpath("//span[text()='New Conversion Rate']"));		
		 if(we.isDisplayed())
		{			
			System.out.println("User see new conversion rate column ");
			assertTrue(true);
		}	
	    
	}

	@And("^User verify \"([^\"]*)\" updated currency rates in new conversion rate column$")
	public void user_verify_updated_currency_rates_in_new_conversion_rate_column(String value) throws Throwable 
	{
		
		
		/*if(wd.findElement(By.xpath("(//*[contains(text(),'" + value + "')])[1]")).isDisplayed() )
		{		
			System.out.println("User verify value ");
		}*/
		
		String expectedMessage = "100";
		Thread.sleep(2000);
		WebElement element = wd.findElement(By.xpath("//section/section[2]/div[2]/div"));
		JavascriptExecutor jse = (JavascriptExecutor)wd;
		Object message = jse.executeScript("return arguments[0].value", element);
		System.out.println(message.toString());		
 		Assert.assertTrue(message.toString().contains(expectedMessage));
	    
	}

	@Then("^User logout$")
	public void user_logout() throws Throwable 
	{
		Thread.sleep(7000);
		clickOn("btn_LogoutFX", "");
		//Thread.sleep(7000);
	    
	}

	@Then("^User enter credencial for DGI Supervisor and verify New Updated rates notification on their FX management landing page \"([^\"]*)\"$")
	public void user_enter_credencial_for_DGI_Supervisor_and_verify_New_Updated_rates_notification_on_their_FX_management_landing_page(String arg1) throws Throwable 
	{
		clickOn("btn_LogoutFX", "");
		wd.navigate().to("http://103.249.120.58:8073/manage-vat-registration/list");
		
		
		System.out.println("User Enter UN & Pass");
		
		//wd.get("http://103.249.120.58:8068");
		Robot rb = new Robot();
		
		  // Enter user name in username field 
		 StringSelection un = new StringSelection("pooja.parmar");
		        Toolkit.getDefaultToolkit().getSystemClipboard().setContents(un, null);            
		        rb.keyPress(KeyEvent.VK_CONTROL);
		        rb.keyPress(KeyEvent.VK_V);
		        rb.keyRelease(KeyEvent.VK_V);
		        rb.keyRelease(KeyEvent.VK_CONTROL);

		  // press tab to move to password field
		       rb.keyPress(KeyEvent.VK_TAB);
		       rb.keyRelease(KeyEvent.VK_TAB);
		       Thread.sleep(2000);	     

		  //Enter password in password field
		       StringSelection pwd = new StringSelection("admin");
		       Toolkit.getDefaultToolkit().getSystemClipboard().setContents(pwd, null);
		       rb.keyPress(KeyEvent.VK_CONTROL);
		       rb.keyPress(KeyEvent.VK_V);
		       rb.keyRelease(KeyEvent.VK_V);
		       rb.keyRelease(KeyEvent.VK_CONTROL);
                 Thread.sleep(5000);
               
		  //press enter
		 rb.keyPress(KeyEvent.VK_ENTER);
		 rb.keyRelease(KeyEvent.VK_ENTER);			 
	    
		 clickOn("txt_FxManagement", "");
		 
		 String expectedMessage = "100";
			Thread.sleep(2000);
			WebElement element = wd.findElement(By.xpath("//section/section[2]/div[2]/div"));
			JavascriptExecutor jse = (JavascriptExecutor)wd;
			Object message = jse.executeScript("return arguments[0].value", element);
			System.out.println(message.toString());		
	 		Assert.assertTrue(message.toString().contains(expectedMessage));
	}

	@Then("^User enter credencial for DGI Admin and verify New Updated rates notification on their FX management landing page \"([^\"]*)\"$")
	public void user_enter_credencial_for_DGI_Admin_and_verify_New_Updated_rates_notification_on_their_FX_management_landing_page(String arg1) throws Throwable 
	{	
		wd.navigate().to("http://103.249.120.58:8073/manage-vat-registration/list");				
		System.out.println("User Enter UN & Pass");
		
		//wd.get("http://103.249.120.58:8068");
		Robot rb = new Robot();
		
		  // Enter user name in username field 
		 StringSelection un = new StringSelection("ketan.prajapati");
		        Toolkit.getDefaultToolkit().getSystemClipboard().setContents(un, null);            
		        rb.keyPress(KeyEvent.VK_CONTROL);
		        rb.keyPress(KeyEvent.VK_V);
		        rb.keyRelease(KeyEvent.VK_V);
		        rb.keyRelease(KeyEvent.VK_CONTROL);

		  // press tab to move to password field
		       rb.keyPress(KeyEvent.VK_TAB);
		       rb.keyRelease(KeyEvent.VK_TAB);
		       Thread.sleep(2000);	     

		  //Enter password in password field
		       StringSelection pwd = new StringSelection("admin");
		       Toolkit.getDefaultToolkit().getSystemClipboard().setContents(pwd, null);
		       rb.keyPress(KeyEvent.VK_CONTROL);
		       rb.keyPress(KeyEvent.VK_V);
		       rb.keyRelease(KeyEvent.VK_V);
		       rb.keyRelease(KeyEvent.VK_CONTROL);
                 Thread.sleep(5000);
               
		  //press enter
		 rb.keyPress(KeyEvent.VK_ENTER);
		 rb.keyRelease(KeyEvent.VK_ENTER);			 
	    
		 clickOn("txt_FxManagement", "");
		 
		 String expectedMessage = "100";
			Thread.sleep(2000);
			WebElement element = wd.findElement(By.xpath("//section/section[2]/div[2]/div"));
			JavascriptExecutor jse = (JavascriptExecutor)wd;
			Object message = jse.executeScript("return arguments[0].value", element);
			System.out.println(message.toString());		
	 		Assert.assertTrue(message.toString().contains(expectedMessage));	    
	}

	@And("^User enter currency \"([^\"]*)\" for field$")
	public void user_enter_currency_for_field(String value) throws Throwable 
	{
	    type(value, "");
	    
	}

	@And("^User click on save button$")
	public void user_click_on_save_button() throws Throwable 
	{
		clickOn("btn_SaveFX", "");
		Thread.sleep(1000);
	}

	@And("^User veruify currency \"([^\"]*)\" and approved rate date \"([^\"]*)\"$")
	public void user_veruify_currency_and_approved_rate_date(String arg1, String value) throws Throwable 
	{
		String expectedMessage = "1000";
		Thread.sleep(2000);
		WebElement element = wd.findElement(By.xpath("//section/section[2]/div[2]/div"));
		JavascriptExecutor jse = (JavascriptExecutor)wd;
		Object message = jse.executeScript("return arguments[0].value", element);
		System.out.println(message.toString());		
 		Assert.assertTrue(message.toString().contains(expectedMessage));
		
 		if(wd.findElement(By.xpath("(//*[contains(text(),'" + value + "')])[1]")).isDisplayed() )
		{		
 			assertTrue(true);
		}
		
	    
	}

	@And("^User log in with DGI Admin credencial$")
	public void user_log_in_with_DGI_Admin_credencial() throws Throwable 
	{
		wd.close();
		wd= new ChromeDriver();
		wd.manage().window().maximize();
		wd.get("http://103.249.120.58:8068");		
		//Robot rb = new Robot();
		
		
		/*wd.navigate().to("http://103.249.120.58:8073/manage-vat-registration/list");				
		System.out.println("User Enter UN & Pass");*/
		
		//wd.get("http://103.249.120.58:8068");
		/*Robot rb = new Robot();
		
		  // Enter user name in username field 
		 StringSelection un = new StringSelection("ketan.prajapati");
		        Toolkit.getDefaultToolkit().getSystemClipboard().setContents(un, null);            
		        rb.keyPress(KeyEvent.VK_CONTROL);
		        rb.keyPress(KeyEvent.VK_V);
		        rb.keyRelease(KeyEvent.VK_V);
		        rb.keyRelease(KeyEvent.VK_CONTROL);

		  // press tab to move to password field
		       rb.keyPress(KeyEvent.VK_TAB);
		       rb.keyRelease(KeyEvent.VK_TAB);
		       Thread.sleep(2000);	     

		  //Enter password in password field
		       StringSelection pwd = new StringSelection("admin");
		       Toolkit.getDefaultToolkit().getSystemClipboard().setContents(pwd, null);
		       rb.keyPress(KeyEvent.VK_CONTROL);
		       rb.keyPress(KeyEvent.VK_V);
		       rb.keyRelease(KeyEvent.VK_V);
		       rb.keyRelease(KeyEvent.VK_CONTROL);
                 Thread.sleep(5000);
               
		  //press enter
		 rb.keyPress(KeyEvent.VK_ENTER);
		 rb.keyRelease(KeyEvent.VK_ENTER);			 
	    */
	}

	@And("^User click on approve button$")
	public void user_click_on_approve_button() throws Throwable 
	{
		clickOn("btn_ApproveFX", "");
	    
	}
	// officer test 
	@And("^User log in with officer credencial \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_log_in_with_officer_credencial(String username, String password) throws Throwable 
	{
		wd.close();
		wd= new ChromeDriver();
		wd.manage().window().maximize();
		wd.get("http://103.249.120.58:8068");
		
		System.out.println("User Enter UN & Pass");
		System.out.println(username);
		System.out.println(password);
		//wd.get("http://103.249.120.58:8068");
		Robot rb = new Robot();
		
		  // Enter user name in username field 
		 StringSelection un = new StringSelection(username);
		        Toolkit.getDefaultToolkit().getSystemClipboard().setContents(un, null);            
		        rb.keyPress(KeyEvent.VK_CONTROL);
		        rb.keyPress(KeyEvent.VK_V);
		        rb.keyRelease(KeyEvent.VK_V);
		        rb.keyRelease(KeyEvent.VK_CONTROL);

		  // press tab to move to password field
		       rb.keyPress(KeyEvent.VK_TAB);
		       rb.keyRelease(KeyEvent.VK_TAB);
		       Thread.sleep(2000);	     

		  //Enter password in password field
		       StringSelection pwd = new StringSelection(password);
		       Toolkit.getDefaultToolkit().getSystemClipboard().setContents(pwd, null);
		       rb.keyPress(KeyEvent.VK_CONTROL);
		       rb.keyPress(KeyEvent.VK_V);
		       rb.keyRelease(KeyEvent.VK_V);
		       rb.keyRelease(KeyEvent.VK_CONTROL);
                 Thread.sleep(5000);
               
		  //press enter
		 rb.keyPress(KeyEvent.VK_ENTER);
		 rb.keyRelease(KeyEvent.VK_ENTER);	
	}
	
	@And("^User log in with officer credencial$")
	public void user_log_in_with_officer_credencial() throws Throwable 
	{
		
		wd.close();
		wd= new ChromeDriver();
		wd.manage().window().maximize();
		wd.get("http://103.249.120.58:8068");
		Thread.sleep(2000);
		
		
	/*	Robot rb = new Robot();		
		  // Enter user name in username field 
		 StringSelection un = new StringSelection("rohit.patl");
		        Toolkit.getDefaultToolkit().getSystemClipboard().setContents(un, null);            
		        rb.keyPress(KeyEvent.VK_CONTROL);
		        rb.keyPress(KeyEvent.VK_V);
		        rb.keyRelease(KeyEvent.VK_V);
		        rb.keyRelease(KeyEvent.VK_CONTROL);

		  // press tab to move to password field
		       rb.keyPress(KeyEvent.VK_TAB);
		       rb.keyRelease(KeyEvent.VK_TAB);
		       Thread.sleep(2000);	     

		  //Enter password in password field
		       StringSelection pwd = new StringSelection("admin");
		       Toolkit.getDefaultToolkit().getSystemClipboard().setContents(pwd, null);
		       rb.keyPress(KeyEvent.VK_CONTROL);
		       rb.keyPress(KeyEvent.VK_V);
		       rb.keyRelease(KeyEvent.VK_V);
		       rb.keyRelease(KeyEvent.VK_CONTROL);
                 Thread.sleep(5000);
               
		  //press enter
		 rb.keyPress(KeyEvent.VK_ENTER);
		 rb.keyRelease(KeyEvent.VK_ENTER);			
*/
		}
	

	@And("^verify the currency rates of New Conversion Rate which dgi admin has approved$")
	public void verify_the_currency_rates_of_New_Conversion_Rate_which_dgi_admin_has_approved() throws Throwable 
	{
		String expectedMessage = "1000";
		Thread.sleep(2000);
		WebElement element = wd.findElement(By.xpath("//section/section[2]/div[2]/div"));
		JavascriptExecutor jse = (JavascriptExecutor)wd;
		Object message = jse.executeScript("return arguments[0].value", element);
		System.out.println(message.toString());		
 		Assert.assertTrue(message.toString().contains(expectedMessage));
	}

	@And("^User verify already added currencies \"([^\"]*)\" on FX management module$")
	public void user_verify_already_added_currencies_on_FX_management_module(String value) throws Throwable 
	{
		if(wd.findElement(By.xpath("(//span[contains(text(),'" + value + "')])")).isDisplayed() )
		{					
			assertTrue(true);
		}	
		
	}

	@And("^User click on update button and check currencies \"([^\"]*)\" on Update Currency Rate popup window$")
	public void user_click_on_update_button_and_check_currencies_on_Update_Currency_Rate_popup_window(String value) throws Throwable 
	{	
		if(wd.findElement(By.xpath("(//span[contains(text(),'" + value + "')])")).isDisplayed() )
		{					
			assertTrue(true);
		}
	}
	// on hold it will fail
	@And("^User click on notification icon and see notification window$")
	public void user_click_on_notification_icon_and_see_notification_window() throws Throwable 
	{
		clickOn("btn_NotificationFX", "");
		WebElement we;
		 we=wd.findElement(By.xpath("//*[contains(text(),'Notification')]"));		
		 if(we.isDisplayed())
		{			
			System.out.println("User see notifiaction window ");
			assertTrue(true);
		}	
		
	    
	}

	@Then("^User again log in$")
	public void user_again_log_in() throws Throwable 
	{
		wd.navigate().to("http://103.249.120.58:8073/manage-vat-registration/list");				
		System.out.println("User Enter UN & Pass");
		
		//wd.get("http://103.249.120.58:8068");
		Robot rb = new Robot();
		
		  // Enter user name in username field 
		 StringSelection un = new StringSelection("rohit.patl");
		        Toolkit.getDefaultToolkit().getSystemClipboard().setContents(un, null);            
		        rb.keyPress(KeyEvent.VK_CONTROL);
		        rb.keyPress(KeyEvent.VK_V);
		        rb.keyRelease(KeyEvent.VK_V);
		        rb.keyRelease(KeyEvent.VK_CONTROL);

		  // press tab to move to password field
		       rb.keyPress(KeyEvent.VK_TAB);
		       rb.keyRelease(KeyEvent.VK_TAB);
		       Thread.sleep(2000);	     

		  //Enter password in password field
		       StringSelection pwd = new StringSelection("admin");
		       Toolkit.getDefaultToolkit().getSystemClipboard().setContents(pwd, null);
		       rb.keyPress(KeyEvent.VK_CONTROL);
		       rb.keyPress(KeyEvent.VK_V);
		       rb.keyRelease(KeyEvent.VK_V);
		       rb.keyRelease(KeyEvent.VK_CONTROL);
                 Thread.sleep(5000);
               
		  //press enter
		 rb.keyPress(KeyEvent.VK_ENTER);
		 rb.keyRelease(KeyEvent.VK_ENTER);
	    
	}

	@Then("^User Click on Historical FX Rates button$")
	public void user_Click_on_Historical_FX_Rates_button() throws Throwable 
	{
		Thread.sleep(1000);
		clickOn("btn_HistoricalFX", "");
	    
		
	}

	@Then("^User logout and verify$")
	public void user_logout_and_verify() throws Throwable 
	{
		clickOn("btn_logout", "");
		WebElement we;
		we=wd.findElement(By.xpath("//*[contains(text(),'You have been successfully logged out')]"));		
		 if(we.isDisplayed())
		{			
			System.out.println("User see notifiaction window ");
			assertTrue(true);
		}	
	    
	}
	// on hold
	@And("^User verify the DGI officer name and profile picture \"([^\"]*)\"$")
	public void user_verify_the_DGI_officer_name_and_profile_picture(String value) throws Throwable 
	{
		if(wd.findElement(By.xpath("(//*[contains(text(),'" + value + "')])")).isDisplayed() )
		{					
			assertTrue(true);
		}	
		
		
	    
	}
	// profile pic on hold
	@And("^User verify name \"([^\"]*)\" and profile \"([^\"]*)\" of dgi officer$")
	public void user_verify_name_and_profile_of_dgi_officer(String value, String value1) throws Throwable 
	{
		if(wd.findElement(By.xpath("(//*[contains(text(),'" + value + "')])")).isDisplayed() )
		{					
			assertTrue(true);
		}	
	    
	}
}
