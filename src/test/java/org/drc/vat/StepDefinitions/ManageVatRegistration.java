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
		//locatour to find
		//locatour comes here 
	}

	@Then("^user selects value from filter drop down \"([^\"]*)\"$")
	public void user_selects_value_from_filter_drop_down(String value) throws Throwable 
	{
		System.out.println("User select Filter ");
		clickOn("span","[contains(text(),'" + value + "')]");
	}

	@Then("^enters data in type here text box \"([^\"]*)\"$")
	public void enters_data_in_type_here_text_box(String value) throws Throwable 
	{
		System.out.println("User Enter Data to Filter ");
		type("TypeHere",value);
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
		verifyDownload("ManageVatRegistration");
	}
	
	@Then("^user click on view$")
	public void user_click_on_view() throws Throwable 
	{
		System.out.println("User Select View ");
		type("ViewdownArrow","");
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
	}

	// Rejected pop up 
	@Then("^User See pop up Reason for Rejected$")
	public void user_See_pop_up_Reason_for_Rejected() throws Throwable 
	{
		bodymessage("Reason for Rejection");
	}
	
	// select  proiority list 
	@And("^user click on Change Priority$")
	public void user_click_on_Change_Priority() throws Throwable 
	{
		//Locatours to find as it not showing
		//clickOn("ViewdownArrow", "");
		
	}

	@And("^select priority from priority list$")
	public void select_priority_from_priority_list() throws Throwable 
	{
		// Locatours to find as it not showing 
		System.out.println("Select Priority from list ");
	}
	
	
	@Then("^click on right tick$")
	public void click_on_right_tick() throws Throwable 
	{
		// Locatours to find as it not showing
		System.out.println("Click on right tick ");
	}
	
	
	
	@Then("^Priority will change$")
	public void priority_will_change() throws Throwable 
	{
		System.out.println("Priority changed ");
	}
	
	
	@And("^user click on Reassign$")
	public void user_click_on_Reassign() throws Throwable 
	{
		//have to check as it changing
		//clickOn("ViewdownArrow", "");
	}
	
	@And("^select another Tax Officier fron the list$")
	public void select_another_Tax_Officier_fron_the_list() throws Throwable 
	{
	   //locators to find 
		System.out.println("another officer selected  ");
	}
	

	@Then("^Tax Officier Changed and toast message display$")
	public void tax_Officier_Changed_and_toast_message_display() throws Throwable 
	{
		// Locotors to find
		System.out.println("Officier Changed  ");
		// toast display 
		toastMessage();
		//wait("Success Tax officer reassign successfully!");
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
		we1=wd.findElement(By.xpath(obj.getProperty(value2)));
		if(we.isEnabled() && we1.isEnabled())
		{
			System.out.println("Fail");
		}
		else
		{
			System.out.println("Pass");
		}
	}
	
	@Then("^User see Result$")
	public void user_see_Result() throws Throwable 
	{
		
			
	}
	
}
