package org.drc.vat.StepDefinitions;
import static org.drc.vat.appmanager.HelperBase.wd;

import java.io.IOException;

import static org.drc.vat.appmanager.HelperBase.elementText;
import static org.drc.vat.appmanager.HelperBase.bodymessage;
import static org.drc.vat.appmanager.HelperBase.toastMessage;

import javax.xml.soap.Text;
import static org.drc.vat.appmanager.HelperBase.verifyDownload;
import static org.drc.vat.appmanager.HelperBase.clickOn;
import static org.drc.vat.appmanager.HelperBase.type;
import static org.drc.vat.appmanager.HelperBase.*;
import org.apache.http.entity.SerializableEntity;
import org.codehaus.plexus.util.dag.TopologicalSorter;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.WebElement;

import bsh.org.objectweb.asm.Type;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ManageVatRegistration 
{
	
	@Given("^User is on Internal Portal$")
	public void user_is_on_Internal_Portal() throws Throwable 
	{
		System.out.println("User is on Internal Poratal");
	}

	@When("^user selects Manage Vat Registraion$")
	public void user_selects_Manage_Vat_Registraion() throws Throwable 
	{
		System.out.println("User selects Manage Vat Registraion ");
		clickOn("ManageVAT","");
		
	}

	@Then("^user selects value from filter drop down \"([^\"]*)\"$")
	public void user_selects_value_from_filter_drop_down(String value) throws Throwable 
	{
		System.out.println("User select Filter ");
		clickOn("FilterBy", "");
		clickOn("span","[contains(text(),'" + value + "')]");
		Thread.sleep(2000);
		
	}
	//TC_04
	@Then("^user selects All from filter dropdown$")
	public void user_selects_All_from_filter_dropdown() throws Throwable 
	{
		System.out.println("All is selected");
	}
		
	@Then("^enters data in type here text box \"([^\"]*)\"$")
	public void enters_data_in_type_here_text_box(String value) throws Throwable 
	{
		System.out.println("User Enter Data to Filter ");
		Thread.sleep(5000);
		type("TypeHere",value);
		Thread.sleep(5000);				
	}

	@When("^User selects all in filter$")
	public void user_selects_all_in_filter() throws Throwable 
	{
		System.out.println("User Select all Filter ");
		clickOn("FilterBy", "");
	}
		
	@Then("^clicks on download pdf button$")
	public void clicks_on_download_pdf_button() throws Throwable 
	{
		clickOn("DownloadPDF", "");
		Thread.sleep(1000);
		clickOn("DownloadPDFClick", "");		
		verifyDownload("ManageVatRegistration");
	}

	@Then("^user click on view$")
	public void user_click_on_view() throws Throwable 
	{
		System.out.println("User Select View ");
		clickOn("ManageDropdown","");
		clickOn("ViewdownArrow","");
		Thread.sleep(5000);
	}

	// Display Tax Payer Portal Title 
	@Then("^it Navigate to Tax Payer Details$")
	public void it_Navigate_to_Tax_Payer_Details() throws Throwable 
	{
		System.out.println("Tax Payer Portal Display ");
		bodymessage("Tax Payer Details");
	}

	// click on rejected
	@And("^User click on Rejected$")
	public void user_click_on_Rejected() throws Throwable 
	{
		clickOn("Rejected", "");
		Thread.sleep(2000);		
	}

	// Rejected pop up 
	@Then("^User See pop up Reason for Rejected$")
	public void user_See_pop_up_Reason_for_Rejected() throws Throwable 
	{
		//String message = wd.findElement(By.xpath("//span[@class='col p-0']")).getText();
		//String expectedMessage = "Reason for Rejection";
		//Assert.assertTrue(message.contains(expectedMessage));
		//Thread.sleep(2000);
		
		WebElement errorMessage= wd.findElement(By.xpath("//span[@class='col p-0']"));
		Assert.assertEquals(errorMessage.getText(),"Reason for Rejection");
		Thread.sleep(2000);		
	}

	//@StatusReview
	@And("^user click on manage setting and select Review$")
	public void user_click_on_manage_setting_and_select_Review() throws Throwable 
	{
		System.out.println("User Select View ");
		clickOn("StatusReview","");
		//Thread.sleep(2000);
		clickOn("ReviewSelect","");
		Thread.sleep(5000);
	}	
	//@StatusChangePriority  
	@And("^user click on Change Priority$")
	public void user_click_on_Change_Priority() throws Throwable 
	{
		clickOn("StatusChangePriority","");
		Thread.sleep(2000);
		clickOn("StatusChangePrioritySelect", "");
		Thread.sleep(2000);
	}
	//@StatusChangePriority	
	@And("^user selects priority from priority list \"([^\"]*)\"$")
	public void user_selects_priority_from_priority_list(String value) throws Throwable 
	{
		clickOn("ChangePriorityDropDown", "");
		clickOn(value, "");
	}	
	//@StatusChangePriority	
	@Then("^click on right tick$")
	public void click_on_right_tick() throws Throwable 
	{
		System.out.println("Click on right tick ");
		clickOn("TickRight","");
	}	
	
	//@StatusChangePriority
	@Then("^Priority is Changed and toast message display$")
	public void priority_is_Changed_and_toast_message_display() throws Throwable 
	{
		Thread.sleep(2000);
		String expectedMessage = "Priority update successfully!";
		String message = wd.findElement(By.xpath("//*[@class='toast-top-right toast-container']")).getText();
		Assert.assertTrue(message.contains(expectedMessage));
		System.out.println("Priority changed ");
	}

	//@StatusReassign
	@And("^user click on Reassign$")
	public void user_click_on_Reassign() throws Throwable 
	{
		clickOn("ManageDropdown","");
		clickOn("StatusReassign","");						
	}

	@Then("^select another Tax Officier fron the list \"([^\"]*)\"$")
	public void select_another_Tax_Officier_fron_the_list(String value) throws Throwable 
	{
		System.out.println("another officer selected  ");
		clickOn("SelectDropdownTaxOfficer", ""); 
		clickOn(value, "");
	}

	@And("^click on right tick for reassign$")
	public void click_on_right_tick_for_reassign() throws Throwable 
	{
		clickOn("TickRight","");
	}

	@Then("^Tax Officier Changed and toast message display$")
	public void tax_Officier_Changed_and_toast_message_display() throws Throwable 
	{
		Thread.sleep(2000);
		String expectedMessage = "Tax officer reassign successfully!";
		String message = wd.findElement(By.xpath("//*[@class='toast-top-right toast-container']")).getText();
		Assert.assertTrue(message.contains(expectedMessage));
		System.out.println("Officier Changed  ");
	}

	//on hold
	@And("^user select show \"([^\"]*)\"$")
	public void user_select_show(String arg1) throws Throwable 
	{
		System.out.println("Show Changed  ");
	}

	// on hold
	@Then("^see the result$")
	public void see_the_result() throws Throwable 
	{
		System.out.println("Result Changed  ");
	}
	
//Pagination 
	@And("^user click on the page \"([^\"]*)\" and check page\"([^\"]*)\"$")
	public void user_click_on_the_page_and_check_page(String value, String value2) throws Throwable 
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
		}
		else
		{
			System.out.println("Pass");
		}
		Thread.sleep(3000);
	}	
	//Pagination	
	@Then("^User see Result$")
	public void user_see_Result() throws Throwable 
	{
		System.out.println("Result Display");		
	}		
	
	//For Number Of Row
	int ColmnCount=wd.findElements(By.xpath("//*[@class='d-flex justify-content-between w-100 p-3 list-header font-medium cursor-pointer']")).size();	
	@And("^User Click Dropdown \"([^\"]*)\"$")
	public void user_Type_Dropdown(String value) throws Throwable 
	{
		clickOn("TypeList","");
		if(value.equals("20"))
		{
			clickOn("select20","");
			Thread.sleep(2000);			
		}
		else if(value.equals("15"))
		{
			clickOn("select15","");
			Thread.sleep(3000);			
		}
		else if(value.equals("25"))
		{
			clickOn("select25","");
			Thread.sleep(3000);
		}
		else if(value.equals("50"))
		{
			clickOn("select50","");
			Thread.sleep(2000);
		}
		else if(value.equals("100"))
		{
			clickOn("select100","");
			Thread.sleep(2000);
		}
		int rowCount=wd.findElements(By.xpath("//*[@class='list-fields d-flex justify-content-between w-100 p-3 font-regular cursor-pointer ng-star-inserted']")).size();
		System.out.println("rowCount :"+rowCount);
	}
	//For Number Of Row
	@Then("^user see the page result$")
	public void user_see_the_page_result() throws Throwable 
	{
		//int rowCount=wd.findElements(By.xpath("//*[@class='list-fields d-flex justify-content-between w-100 p-3 font-regular cursor-pointer ng-star-inserted']")).size();
		//System.out.println("rowCount :"+rowCount);
		System.out.println("ColmnCount :"+ColmnCount);				
	}	
	
	//For Sorting
	@And("^user click on the sorting \"([^\"]*)\"$")
	public void user_click_on_the_sorting(String value) throws Throwable 
	{
		System.out.println("User Click on Sorting");		

		clickOn("start","[@class='pl-1 fa fa-sort-" + value + "']");		
	}
	//For Sorting
	@Then("^User see sorting result \"([^\"]*)\"$")
	public void user_see_sorting_result(String value) throws Throwable 
	{
		int ColmnCount=wd.findElements(By.xpath("//*[@class='d-flex justify-content-between w-100 p-3 list-header font-medium cursor-pointer']")).size();
		int rowCount=wd.findElements(By.xpath("//*[@class='list-fields d-flex justify-content-between w-100 p-3 font-regular cursor-pointer ng-star-inserted']")).size();
		
		System.out.println("rowCount :"+rowCount);
		System.out.println("ColmnCount :"+ColmnCount);
		Thread.sleep(10000);
		
		String name= wd.findElement(By.xpath("(//span[contains(text(),'9')])[1]")).getText();
		
		System.out.println(name);		
		
		WebElement errorMessage= wd.findElement(By.xpath("(//span[contains(text(),'9')])[1]"));
		Assert.assertEquals(errorMessage.getText(),value);
	}
	
	//TC_05
	@When("^user selects filter by and select all$")
	public void user_selects_filter_by_and_select_all() throws Throwable 
	{
	   System.out.println("Filter BY All is Selected");
	}
	//TC_05
	@Then("^clicks on download pdf button and all record gets downloaded$")
	public void clicks_on_download_pdf_button_and_all_record_gets_downloaded() throws Throwable 
	{
		clickOn("DownloadPDF", "");
		Thread.sleep(1000);
		clickOn("DownloadPDFClick", "");		
		verifyDownload("ManageVatRegistration");
	}
	//@FilterCombinationInvalid	
	@Then("^user checks its result \"([^\"]*)\"$")
	public void user_checks_its_result(String value) throws Throwable 
	{	
		Thread.sleep(3000);
		 try
		 {
	            obj.load(fis);
	        } catch (IOException e) {
	            e.printStackTrace();
	        }
		//WebElement errorMessage= wd.findElement(By.xpath("//*[contains(text(),'No records found!')]"));
		//Assert.assertEquals(errorMessage.getText(),value);
		
		if(elementText("NoRecord").equalsIgnoreCase("No records"))
		{
			System.out.println("Pass");
		}
		
	}
		
}
