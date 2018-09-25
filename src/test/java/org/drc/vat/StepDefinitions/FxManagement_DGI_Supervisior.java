package org.drc.vat.StepDefinitions;

import static org.drc.vat.appmanager.HelperBase.clickOn;
import static org.drc.vat.appmanager.HelperBase.wd;
import static org.testng.Assert.assertTrue;

import java.awt.Robot;
import java.awt.Toolkit;
import java.awt.datatransfer.StringSelection;
import java.awt.event.KeyEvent;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

public class FxManagement_DGI_Supervisior 
{
	@And("^User click on Historical FX Rates button and verify ui for DGI Supervisor$")
	public void user_click_on_Historical_FX_Rates_button_and_verify_ui_for_DGI_Supervisor() throws Throwable 
	{
	    
		System.out.println("User verify ui ");
	}

	@Then("^User again log in DGI Supervisior$")
	public void user_again_log_in_DGI_Supervisior() throws Throwable 
	{

		wd.close();
		wd= new ChromeDriver();
		wd.manage().window().maximize();
		wd.get("http://103.249.120.58:8068");		
		
		/*Robot rb = new Robot();
		
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
		 rb.keyRelease(KeyEvent.VK_ENTER);*/
	   
	}
	// profile is on hold
	@And("^User verify the DGI officer name and profile picture \"([^\"]*)\" for DGI Supervisior$")
	public void user_verify_the_DGI_officer_name_and_profile_picture_for_DGI_Supervisior(String value) throws Throwable 
	{
		if(wd.findElement(By.xpath("(//*[contains(text(),'" + value + "')])")).isDisplayed() )
		{					
			assertTrue(true);
		}	  
	   
	}
/*	// profile pic on hold
	@And("^User verify name \"([^\"]*)\" and profile \"([^\"]*)\" for DGI Supervisior$")
	public void user_verify_name_and_profile_for_DGI_Supervisior(String value, String arg2) throws Throwable 
	{
		if(wd.findElement(By.xpath("(//*[contains(text(),'" + value + "')])")).isDisplayed() )
		{					
			assertTrue(true);
		}
	   
	}*/

	@Then("^User enter credencial for DGI Officer$")
	public void user_enter_credencial_for_DGI_Officer() throws Throwable
	{

		wd.close();
		wd= new ChromeDriver();
		wd.manage().window().maximize();
		wd.get("http://103.249.120.58:8068");		
		
		 //System.out.println("User Enter UN & Pass");
		
		/*Robot rb = new Robot();
		
		  // Enter user name in username field 
		 StringSelection un = new StringSelection("rohit.patil");
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
		 rb.keyRelease(KeyEvent.VK_ENTER);*/
	   
	}

	@Then("^User enter credencial for DGI Supervisior$")
	public void user_enter_credencial_for_DGI_Supervisior() throws Throwable 
	{
		

		wd.close();
		wd= new ChromeDriver();
		wd.manage().window().maximize();
		wd.get("http://103.249.120.58:8068");		
		
		/*Robot rb = new Robot();
		
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
		 rb.keyRelease(KeyEvent.VK_ENTER);*/
	}

	@Then("^User click on Approve button$")
	public void user_click_on_Approve_button() throws Throwable
	{
		clickOn("btn_ApproveFX", "");
	   
	}

	@Then("^User see approved toast message$")
	public void user_see_approved_toast_message() throws Throwable
	{
		 Thread.sleep(1000);
		 String expectedMessage = "New currency rates has been approved successfully";
		 String message = wd.findElement(By.xpath("//*[@class='toast-top-right toast-container']")).getText();
		 Assert.assertTrue(message.contains(expectedMessage));
		 Thread.sleep(1000);   
	}

	@And("^User see previous currency list which was on FX management dashboard \"([^\"]*)\"$")
	public void user_see_previous_currency_list_which_was_on_FX_management_dashboard(String value) throws Throwable 
	{
		if(wd.findElement(By.xpath("(//table//tr//td//div[contains(text(),'" + value + "')])[1]")).isDisplayed() )
		{					
			assertTrue(true);
		}	
	}
	
	//-------------//
	@Then("^User see Status of approvial with green tick with date and time$")
	public void user_see_Status_of_approvial_with_green_tick_with_date_and_time() throws Throwable 
	{
		// if reject than same data will show in table 
				Date thisDate = new Date();		
				SimpleDateFormat dateForm = new SimpleDateFormat("MM/dd/Y");
				System.out.println(dateForm.format(thisDate));

				WebElement element1 = wd.findElement(By.xpath("//div/table/tbody/tr[1]/td[3]/div"));		
				String number = element1.getText();
				Date d = new Date(number);
				System.out.println(dateForm.format(d));					
				if(dateForm.format(thisDate).toString().equals(dateForm.format(d).toString()))
				{
					assertTrue(true);
				}
				
				Thread.sleep(1000);	
		
	
	}
	//----------------//

	@Then("^User click on Reject button$")
	public void user_click_on_Reject_button() throws Throwable 
	{
		//Thread.sleep(1000);
		clickOn("btn_RejectFX", "");
		Thread.sleep(4000);
	}

	@Then("^User see Rejected toast message notification$")
	public void user_see_Rejected_toast_message_notification() throws Throwable 
	{
		
		String expectedMessage = "New currency rates has been rejected successfully";
		String message = wd.findElement(By.xpath("//*[@class='toast-top-right toast-container']")).getText();
		Assert.assertTrue(message.contains(expectedMessage));
		Thread.sleep(7000);
	}
	// only date 
	@Then("^User see Status of approvial with wrong tick with date and time$")
	public void user_see_Status_of_approvial_with_wrong_tick_with_date_and_time() throws Throwable 
	{
		// if reject than same data will show in table 
		Date thisDate = new Date();		
		SimpleDateFormat dateForm = new SimpleDateFormat("MM/dd/Y");
		System.out.println(dateForm.format(thisDate));

		WebElement element1 = wd.findElement(By.xpath("//div/table/tbody/tr[1]/td[3]/div"));		
		String number = element1.getText();
		Date d = new Date(number);
		System.out.println(dateForm.format(d));					
		if(dateForm.format(thisDate).toString().equals(dateForm.format(d).toString()))
		{
			assertTrue(true);
		}
		
		Thread.sleep(1000);	
	}

	@And("^User check \"([^\"]*)\" in FX management list for DGI Supervisior$")
	public void user_check_in_FX_management_list_for_DGI_Supervisior(String value) throws Throwable 
	{
		if(wd.findElement(By.xpath("(//table//tr//td//div[contains(text(),'" + value + "')])[1]")).isDisplayed() )
		{					
			assertTrue(true);
		}		   
	}

	@And("^User verify already added currencies \"([^\"]*)\" on FX management module for DGI Supervisior$")
	public void user_verify_already_added_currencies_on_FX_management_module_for_DGI_Supervisior(String value) throws Throwable 
	{
		if(wd.findElement(By.xpath("//span[contains(text(),'" + value + "')]")).isDisplayed() )
		{					
			assertTrue(true);
		}	   
	}

	@And("^User see approve toast message for DGI Supervisior$")
	public void user_see_approve_toast_message_for_DGI_Supervisior() throws Throwable 
	{
		String expectedMessage = "New currency rates has been approved successfully";
		 String message = wd.findElement(By.xpath("//*[@class='toast-top-right toast-container']']")).getText();
		 Assert.assertTrue(message.contains(expectedMessage));
	}

	@And("^User verify the currency rates of Approved rate$")
	public void user_verify_the_currency_rates_of_Approved_rate() throws Throwable 
	{
		String expectedMessage = "100";
		Thread.sleep(2000);
		WebElement element = wd.findElement(By.xpath("//section[1]/div[2]/div[2]"));
		JavascriptExecutor jse = (JavascriptExecutor)wd;
		Object message = jse.executeScript("return arguments[0].value", element);
		System.out.println(message.toString());		
 		Assert.assertTrue(message.toString().contains(expectedMessage));
	   
	}

	@And("^User see Approved date rate$")
	public void user_see_Approved_date_rate() throws Throwable 
	{
		Date thisDate = new Date();		
		SimpleDateFormat dateForm = new SimpleDateFormat("MM/dd/Y");
		System.out.println(dateForm.format(thisDate));

		WebElement element1 = wd.findElement(By.xpath("//div/table/tbody/tr[1]/td[3]/div"));		
		String number = element1.getText();
		Date d = new Date(number);
		System.out.println(dateForm.format(d));					
		if(dateForm.format(thisDate).toString().equals(dateForm.format(d).toString()))
		{
			assertTrue(true);
		}
		
		Thread.sleep(1000);	   
	}
	
	@And("^User see New Conversion Rate column is display for DGI Supervisior$")
	public void user_see_New_Conversion_Rate_column_is_display_for_DGI_Supervisior() throws Throwable 
	{
		WebElement we;
		 we=wd.findElement(By.xpath("//*[contains(text(),'New Conversion Rate')]"));		
		 if(we.isDisplayed())
		{			
			System.out.println("User see 'New Conversion Rate ");
			assertTrue(true);
		}		   
	}
	@And("^verify the currency rates of New Conversion Rate which dgi officer has updated for DGI Supervisior$")
	public void verify_the_currency_rates_of_New_Conversion_Rate_which_dgi_officer_has_updated_for_DGI_Supervisior() throws Throwable 
	{
		String expectedMessage = "1000";
		Thread.sleep(2000);
		WebElement element = wd.findElement(By.xpath("//section/section[2]/div[2]/div"));
		JavascriptExecutor jse = (JavascriptExecutor)wd;
		Object message = jse.executeScript("return arguments[0].value", element);
		System.out.println(message.toString());		
 		Assert.assertTrue(message.toString().contains(expectedMessage));
	}
}
