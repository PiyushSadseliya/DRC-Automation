package org.drc.vat.StepDefinitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import static org.drc.vat.appmanager.HelperBase.*;
import static org.testng.Assert.assertTrue;

import java.awt.Robot;
import java.awt.Toolkit;
import java.awt.datatransfer.StringSelection;
import java.awt.event.KeyEvent;
import java.io.IOException;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

public class ManualAssementtLandingScreen 
{
	@Given("^User is on DRC Internal Portal$")
	public void user_is_on_DRC_Internal_Portal() throws Throwable 
	{		
	 System.out.println("User See Internal Portal");
	}

	@When("^User Enter Valid : \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_Enter_Valid(String username, String password) throws Throwable 
	{
		
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
			 	
		 
		 System.out.println("pass");
	}

	@When("^User Clicks on \"([^\"]*)\" Button$")
	public void user_Clicks_on_Button(String arg1) throws Throwable 
	{
		 System.out.println("User click on Sign In");
	}

	@Then("^User Redirect to  \"([^\"]*)\"$")
	public void user_Redirect_to(String arg1) throws Throwable 
	{		
		 System.out.println("User Redirect to Internal Portal");
	}
	
	//common for all 
	@Given("^User is on Assessment Page$")
	public void user_is_on_Assessment_Page() throws Throwable 
	{
		System.out.println("User is on Assessment Page");	
	}
	//common for all
	@And("^User click on Assessment Tab$")
	public void user_click_on_Assessment_Tab() throws Throwable 
	{
		Thread.sleep(1000);
		clickOn("AssessmentTab", "");
		Thread.sleep(1000);
	}
	//TC_01
	@And("^User see Manual Assessment Page$")
	public void user_see_Manual_Assessment_Page() throws Throwable
	{
		WebElement we;
		we=wd.findElement(By.xpath("//span[@class='col text-title p-0 font-24px font-medimum']"));		
		if(we.isDisplayed())
		{			
			System.out.println("User is on Assessment Page");
			assertTrue(true);
		}		
		Thread.sleep(200);
	}	
	
	//TC_02
	@And("^User see manual assessment and assessament list tab$")
	public void user_see_manual_assessment_and_assessament_list_tab() throws Throwable 
	{
		WebElement we,we1;
		we=wd.findElement(By.xpath("//*[@title='Manual Assessment']"));
		we1=wd.findElement(By.xpath("//*[@title='Assessed List']"));
		if(we.isDisplayed() && we1.isDisplayed())
		{			
			System.out.println("User see manual assessment and assessament list tab");
			assertTrue(true);
		}
	}
	//TC_02
	@And("^User click on manual assessment$")
	public void user_click_on_manual_assessment() throws Throwable 
	{
		System.out.println("User is on manual assessment page");
	}
	//TC_02
	@And("^User click on drop down \"([^\"]*)\"$")
	public void user_click_on_drop_down(String value) throws Throwable 
	{
		Thread.sleep(1000);
		clickOn("AssementPeriod", "");
		Thread.sleep(1000);
		clickOn(value, "");
	}		
	
	@And("^User click on month \"([^\"]*)\" and check$")
	public void user_click_on_month_and_check(String value) throws Throwable 
	{
		clickOn("AssementYear", "");
		Thread.sleep(1000);
		clickOn(value,"");
		Thread.sleep(1000);
			
		WebElement we;
		we=wd.findElement(By.xpath("//span[text()='January']"));		
		if(we.isDisplayed())
		{			
			System.out.println("User see manual assessment and assessament list tab");
			assertTrue(true);
		}					
	}

	@And("^User click on year \"([^\"]*)\" and check$")
	public void user_click_on_year_and_check(String value) throws Throwable 
	{
		Thread.sleep(1000);
		clickOn("AssementYear", "");
		Thread.sleep(1000);
		clickOn(value,"");
		
	}		

	//TC_02
	@And("^User click on FilterBy \"([^\"]*)\"$")
	public void user_click_on_FilterBy(String value) throws Throwable 
	{
		Thread.sleep(1000);
		clickOn("AssementFilterBy", "");
		Thread.sleep(1000);
		clickOn(value,"");
	}
	//TC_02
	@And("^User type \"([^\"]*)\"$")
	public void user_type(String value) throws Throwable 
	{
		type("TypeHere",value);				
	}
	//TC_02
	
	@And("^User click on search button and check data$")
	public void user_click_on_search_button_and_check_data() throws Throwable 
	{
		clickOn("AssementSearchClick", "");
		Thread.sleep(1000);
		WebElement we;
		we=wd.findElement(By.xpath("//*[text()='20180726023824844']"));		
		if(we.isDisplayed())
		{			
			System.out.println("User see NIVTA Number");
			assertTrue(true);
		}		
	}
	
	//TC_02
	@And("^User click on manage setting drop down and check drop down list \"([^\"]*)\"$")
	public void user_click_on_manage_setting_drop_down_and_check_drop_down_list(String value) throws Throwable 
	{
		clickOn(value, "");
		Thread.sleep(1000);
		
		WebElement we;
		we=wd.findElement(By.xpath("(//a[contains(text(),'Reassign')])[1]"));		
		if(we.isDisplayed())
		{			
			System.out.println("User see Reassign ");
			assertTrue(true);
		}
		
	}
	//TC_02
	@And("^User click on reassign and click on drop down and check list \"([^\"]*)\"$")
	public void user_click_on_reassign_and_click_on_drop_down_and_check_list(String value) throws Throwable 
	{
		clickOn("AssestManageReassign", "");
		Thread.sleep(1000);
		clickOn(value,"" );
		Thread.sleep(1000);
		
		WebElement we;
		we=wd.findElement(By.xpath("(//span[contains(text(),'Ritesh')])[1]"));		
		if(we.isDisplayed())
		{			
			System.out.println("User see List ");
			assertTrue(true);
		}
		
	}
	//TC_02
	@And("^User click on FilterBy \"([^\"]*)\" and type \"([^\"]*)\"> and click on search button$")
	public void user_click_on_FilterBy_and_type_and_click_on_search_button(String value, String value2) throws Throwable 
	{
	    clickOn("AssementFilterBy", "");
	    Thread.sleep(1000);
	    clickOn(value, "");
	    type(value2, "");
	    Thread.sleep(1000);
	    clickOn("AssetTypehereSearch", "");
	    
	}
	//TC_02
	@And("^User click on manage setting drop down and click on Assess$")
	public void user_click_on_manage_setting_drop_down_and_click_on_Assess() throws Throwable 
	{
		clickOn("AssestManage", "");
		Thread.sleep(1000);
		clickOn("AssestManageAssess", "");
		
	}
	//TC_02
	@And("^User will navigate to user manual assessement page$")
	public void user_will_navigate_to_user_manual_assessement_page() throws Throwable 
	{
		WebElement we;
		we=wd.findElement(By.xpath("(//*[contains(text(),'Manual Assessment')])[2]"));		
		if(we.isDisplayed())
		{			
			System.out.println("User Navigate to Manual Assessement Page ");
			assertTrue(true);
		}
	}
	
	//-----------------//
	//TC_03
	@And("^User click on \"([^\"]*)\"$")
	public void user_click_on(String value) throws Throwable 
	{
		Thread.sleep(1000);
		clickOn("AssestFilterByOption", "");	
		Thread.sleep(1000);	
	   clickOn(value, "");
	   Thread.sleep(1000);
	}

	
	@And("^User click on search button and check status \"([^\"]*)\"$")
	public void user_click_on_search_button_and_check_status(String value) throws Throwable 
	{
		Thread.sleep(1000);				
		clickOn("AssetTypehereSearch", "");
		Thread.sleep(1000);				
		if(wd.findElement(By.xpath("(//span[contains(text(),'" + value + "')])[2]")).isDisplayed() )
		{		
			System.out.println("User click status ");
			assertTrue(true);
		}		
	}
		
	

	@And("^User click on manage setting$")
	public void user_click_on_manage_setting() throws Throwable 
	{
		clickOn("AssestManage", "");
	}

	@And("^User click on manage status \"([^\"]*)\"$")
	public void user_click_on_manage_status(String value) throws Throwable 
	{
		clickOn(value, "");
	}

	@And("^User click on drop down officer \"([^\"]*)\" and click on cancel$")
	public void user_click_on_drop_down_officer_and_click_on_cancel(String value) throws Throwable 
	{
		clickOn("AssessOfficerChangedDropdown", "");
		Thread.sleep(1000);
		clickOn(value, "");
		Thread.sleep(1000);
		clickOn("AssesofficerWrong", "");
	}

	@And("^User again click on drop down officer \"([^\"]*)\" and click on right tick$")
	public void user_again_click_on_drop_down_officer_and_click_on_right_tick(String value) throws Throwable 
	{
		clickOn("AssessOfficerChangedDropdown", "");
		Thread.sleep(1000);
		clickOn(value, "");
		Thread.sleep(1000);
		clickOn("AssseOfficerRight", "");
		
	}

	@And("^User check message for officer changed$")
	public void user_check_message_for_officer_changed() throws Throwable 
	{
		Thread.sleep(2000);
		String expectedMessage = "";
		String message = wd.findElement(By.xpath("//*[@class='toast-top-right toast-container']")).getText();
		Assert.assertTrue(message.contains(expectedMessage));
	}
	
	//--------------//
	//TC_04
	@And("^User click on year \"([^\"]*)\"$")
	public void user_click_on_year(String value) throws Throwable 
	{
		Thread.sleep(1000);
		clickOn("AssementYear", "");
		Thread.sleep(1000);
		clickOn(value, "");
		Thread.sleep(1000);
	}
	
	
	//--------Common for No record found--------------//
	@And("^User see message no record found$")
	public void user_see_message_no_record_found() throws Throwable 
	{
		Thread.sleep(1000);
		String expectedMessage = "No records found";
		String message = wd.findElement(By.xpath("//*[contains(text(),'No records found')]")).getText();
		Assert.assertTrue(message.contains(expectedMessage));
		Thread.sleep(1000);
	}
	
	
	//------------//
	//TC_05
	
	@And("^User enter data for NITVA \"([^\"]*)\"$")
	public void user_enter_data_for_NITVA(String value) throws Throwable 
	{
		Thread.sleep(1000);
		type("TypeHere",value);
	    
	}

	@And("^User check NITVA number$")
	public void user_check_NIFTVA_number() throws Throwable 
	{		
		clickOn("AssementSearchClick", "");
		Thread.sleep(1000);
		String expectedMessage = "20180726023824844";
		String message = wd.findElement(By.xpath("//*[contains(text(),'20180726023824844')]")).getText();
		Assert.assertTrue(message.contains(expectedMessage));
		Thread.sleep(1000);
	}

	@And("^User refresh page$")
	public void user_refresh_page() throws Throwable 
	{
		wd.navigate().refresh();
		Thread.sleep(1000);
	}

	@And("^User again click on filter \"([^\"]*)\"$")
	public void user_again_click_on_filter(String value ) throws Throwable 
	{
		Thread.sleep(1000);
		clickOn("AssementFilterBy", "");
		Thread.sleep(1000);
	    clickOn(value, "");
	}

	@And("^User enter again data \"([^\"]*)\" and check message no record found$")
	public void user_enter_again_data_and_check_message_no_record_found(String value) throws Throwable 
	{
		type("TypeHere",value);
		Thread.sleep(1000);
		clickOn("AssementSearchClick", "");
		Thread.sleep(1000);
		String expectedMessage = "No records found";
		String message = wd.findElement(By.xpath("//*[contains(text(),'No records found')]")).getText();
		Assert.assertTrue(message.contains(expectedMessage));
		
	}

	@And("^User filter record again \"([^\"]*)\" and click on business type \"([^\"]*)\"$")
	public void user_filter_record_again_and_ckick_on_business_type(String value, String value2) throws Throwable 
	{
		clickOn("AssementFilterBy", "");
		Thread.sleep(2000);
		clickOn(value, "");
		Thread.sleep(2000);
		clickOn("AssestFilterByOption", "");
		Thread.sleep(2000);		
		clickOn(value2, "");
	}

	@And("^User click on search button and check$")
	public void user_click_on_search_button_and_check() throws Throwable 
	{
		Thread.sleep(1000);
		clickOn("AssementSearchClick", "");
		
		String expectedMessage = "Trading";
		String message = wd.findElement(By.xpath("//span[contains(text(),'Trading')]")).getText();
		Assert.assertTrue(message.contains(expectedMessage));
		Thread.sleep(5000);
	}
		
	
	//------------------------------------------------------------------------------//
	//TC_06
	@And("^User selects value from Assessment filter drop down \"([^\"]*)\"$")
	public void user_selects_value_from_Assessment_filter_drop_down(String value) throws Throwable 
	{
		Thread.sleep(1000);
		clickOn("AssementFilterBy", "");
		Thread.sleep(2000);
		clickOn(value, "");
	}

	@And("^User enters data for Assessment in type here text box \"([^\"]*)\"$")
	public void user_enters_data_for_Assessment_in_type_here_text_box(String value) throws Throwable 
	{
		type("TypeHere",value);
		clickOn("AssementSearchClick", "");
		Thread.sleep(1000);
	}

	@And("^User check for valid data for TAX Payer$")
	public void user_check_for_valid_data_for_TAX_Payer() throws Throwable 
	{
		String expectedMessage = "franky";
		String message = wd.findElement(By.xpath("//*[contains(text(),'franky')]")).getText();
		Assert.assertTrue(message.contains(expectedMessage));
		Thread.sleep(2000);
	}


	//------common-----//
	@And("^User again enter data in type here \"([^\"]*)\" for invalid data$")
	public void user_again_enter_data_in_type_here_for_invalid_data(String value) throws Throwable 
	{
		type("TypeHere",value);
		Thread.sleep(2000);
		clickOn("AssementSearchClick", "");
		Thread.sleep(1000);
	}
	//------TC_06_NITVA--------//
	
	@And("^User check for valid data for NITVA$")
	public void user_check_for_valid_data_for_NITVA() throws Throwable 
	{
		String expectedMessage = "20180726023824844";
		String message = wd.findElement(By.xpath("//*[contains(text(),'20180726023824844')]")).getText();
		Assert.assertTrue(message.contains(expectedMessage));
		Thread.sleep(1000);
	}
	//-----------------------------------TC_06_Business_Type-------------------------//
	
	@And("^User click on search button and check Business Type \"([^\"]*)\"$")
	public void user_click_on_search_button_and_check_Business_Type(String value) throws Throwable 
	{
		Thread.sleep(1000);				
		clickOn("AssetTypehereSearch", "");
		Thread.sleep(1000);				
		if(wd.findElement(By.xpath("(//span[contains(text(),'" + value + "')])[2]")).isDisplayed() )
		{		
			System.out.println("User click status ");
			assertTrue(true);
		}
	}
	//---------------------------------- @TC_06_company_Size---------------------------------------------//
	
	@And("^User click on search button and check Company Size \"([^\"]*)\"$")
	public void user_click_on_search_button_and_check_Company_Size(String value) throws Throwable 
	{
		Thread.sleep(1000);				
		clickOn("AssetTypehereSearch", "");
		Thread.sleep(1000);				
		if(wd.findElement(By.xpath("(//span[contains(text(),'" + value + "')])[2]")).isDisplayed() )
		{		
			System.out.println("User click status ");
			assertTrue(true);
		}
	}
	
	
	//-----------------------------------------------------------------------------------------------------------//
	
	@And("^User check for valid data for Assessment Officer$")
	public void user_check_for_valid_data_for_Assessment_Officer() throws Throwable 
	{
		Thread.sleep(1000);
		String expectedMessage = "Shraddha";
		String message = wd.findElement(By.xpath("//*[contains(text(),'Shraddha')]")).getText();
		Assert.assertTrue(message.contains(expectedMessage));
		Thread.sleep(1000);
	}
	//---------//
	
	@And("^User click Status In Progress \"([^\"]*)\" and check$")
	public void user_click_Status_In_Progress_and_check(String value) throws Throwable 
	{
		clickOn("AssestFilterByOption", "");
		Thread.sleep(3000);
		clickOn(value, "");
		Thread.sleep(3000);
		clickOn("AssementSearchClick", "");
		WebElement we;
		we=wd.findElement(By.xpath("(//span[contains(text(),'In Progress')])[2]"));		
		if(we.isDisplayed())
		{			
			System.out.println("User click on In Progress");
			assertTrue(true);
		}
	}

	@And("^User click Status Pending \"([^\"]*)\"  and check$")
	public void user_click_Status_Pending_and_check(String value) throws Throwable 
	{
		clickOn("AssestFilterByOption", "");
		Thread.sleep(3000);
		clickOn(value, "");
		Thread.sleep(3000);
		clickOn("AssementSearchClick", "");
		WebElement we;
		we=wd.findElement(By.xpath("(//span[contains(text(),'Pending')])[2]"));		
		if(we.isDisplayed())
		{			
			System.out.println("User click on Pending");
			assertTrue(true);
		}
	}

	@And("^User click Status In Progress \"([^\"]*)\" and check for no record found$")
	public void user_click_Status_In_Progress_and_check_for_no_record_found(String value) throws Throwable 
	{
		clickOn("AssestFilterByOption", "");
		Thread.sleep(3000);
		clickOn(value, "");		
		Thread.sleep(3000);
		clickOn("AssementSearchClick", "");
		String expectedMessage = "No records found";
		String message = wd.findElement(By.xpath("//*[contains(text(),'No records found')]")).getText();
		Assert.assertTrue(message.contains(expectedMessage));
	}

	@And("^User click Status Pending \"([^\"]*)\"  and check for no record found$")
	public void user_click_Status_Pending_and_check_for_no_record_found(String value) throws Throwable 
	{
		clickOn("AssestFilterByOption", "");
		Thread.sleep(3000);
		clickOn(value, "");		
		Thread.sleep(3000);
		clickOn("AssementSearchClick", "");
		String expectedMessage = "No records found";
		String message = wd.findElement(By.xpath("//*[contains(text(),'No records found')]")).getText();
		Assert.assertTrue(message.contains(expectedMessage));
	}
	
	//----------//
	//TC_07
	@And("^User check message for combination of period$")
	public void user_check_message_for_combination_of_period() throws Throwable 
	{
		clickOn("AssetTypehereSearch", "");
		Thread.sleep(1000);		
		String expectedMessage = "20180726023824844";
		String message = wd.findElement(By.xpath("//*[contains(text(),'20180726023824844')]")).getText();
		Assert.assertTrue(message.contains(expectedMessage));
		Thread.sleep(1000);
	}
	//----------//
	//TC_08
	@And("^User enter data \"([^\"]*)\"$")
	public void user_enter_data(String value) throws Throwable 
	{
		type("TypeHere",value);
		Thread.sleep(1000);
		clickOn("AssementSearchClick", "");
		Thread.sleep(1000);
	}
	//--------//
	//TC_09
	@And("^User click on page \"([^\"]*)\" and check page\"([^\"]*)\"$")
	public void user_click_on_page_and_check_page(String value, String value2) throws Throwable 
	{
		try {
            obj.load(fis);
        } catch (IOException e) {
            e.printStackTrace();
        }
		WebElement we,we1;
		
		we=wd.findElement(By.xpath(obj.getProperty(value)));
		we.click();
				
		Thread.sleep(2000);				
		we1=wd.findElement(By.xpath(obj.getProperty(value2)));		
		Thread.sleep(2000);
		
		if(we.isEnabled() && !we1.isEnabled())
		{
			
			System.out.println("Fail");
			assertTrue(false);
		}
		else
		{
			assertTrue(true);
			System.out.println("Pass");
		}
		Thread.sleep(3000);
	}
	
	//----------//
	//TC_10
	@And("^User click on Last \"([^\"]*)\"$")
	public void user_click_on_Last(String value) throws Throwable 
	{
	   clickOn(value, "");
	   Thread.sleep(1000);
	}

	@And("^User select \"([^\"]*)\"$")
	public void user_select(String value) throws Throwable 
	{
		clickOn("AssementPeriod", "");
		Thread.sleep(3000);
		clickOn(value, "");
		Thread.sleep(1000);
	}

	@And("^User check NITVA number and status$")
	public void user_check_NITVA_number_and_status() throws Throwable 
	{
		clickOn("AssementSearchClick", "");
		
		WebElement we,we1;
		we=wd.findElement(By.xpath("//*[text()='20180726023824844']"));		
		we1=wd.findElement(By.xpath("(//*[contains(text(),'In Progress')])[1]"));
		if(we.isDisplayed()&& we1.isDisplayed())
		{			
			System.out.println("User see NIVTA Number");
			assertTrue(true);
		}		
	}
}
