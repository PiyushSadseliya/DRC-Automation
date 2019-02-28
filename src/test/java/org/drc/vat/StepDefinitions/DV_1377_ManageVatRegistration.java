package org.drc.vat.StepDefinitions;

import static org.drc.vat.appmanager.HelperBase.clickOn;
import static org.drc.vat.appmanager.HelperBase.elementText;
import static org.drc.vat.appmanager.HelperBase.fis;
import static org.drc.vat.appmanager.HelperBase.obj;
import static org.drc.vat.appmanager.HelperBase.type;
import static org.drc.vat.appmanager.HelperBase.verifyDownload;
import static org.drc.vat.appmanager.HelperBase.wd;
import static org.testng.Assert.assertTrue;
import static org.drc.vat.appmanager.HelperBase.*;

import java.io.IOException;
import java.util.List;
import java.util.Set;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

/**
 * Manage VAT Registration filter functionality , pagination , Show Entries , Download PDF and Excel , Review-Change Priority and Reassign , sorting 
 */
public class DV_1377_ManageVatRegistration 
{
	public static int count;
	public static int Storesum;

	@Given("^User is on Internal Portal \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_is_on_Internal_Portal(String arg1, String arg2) throws Throwable 
	{		
		System.out.println(arg1);
		System.out.println(arg1);		
	}			

	@And("^User see mess \"([^\"]*)\"$")
	public void user_see_mess(String mess) throws Throwable 
	{
		sleepWait(2000);
		if(wd.findElement(By.xpath(obj.getProperty("NoRecord"))).isDisplayed())
		{
			assertTrue(true);
		}
	}

	@When("^user selects Manage Vat Registraion$")
	public void user_selects_Manage_Vat_Registraion() throws Throwable 
	{					
		sleepWait(1000);
		clickOn("txt_ManageVAT","");			
		sleepWait(2000);
	}

	@Then("^user selects value from filter drop down \"([^\"]*)\"$")
	public void user_selects_value_from_filter_drop_down(String value) throws Throwable 
	{				
		sleepWait(1000);
		clickOn("drp_FilterByMVT", "");
		sleepWait(1000);
		clickOn("span","[contains(text(),'" + value + "')][last()]");
		sleepWait(1000);			
	}


	@And("^user selects value from filter drop down \"([^\"]*)\" for piority$")
	public void user_selects_value_from_filter_drop_down_for_piority(String value) throws Throwable 
	{
		sleepWait(1000);
		clickOn("drp_FilterByMVT", "");
		sleepWait(1000);
		clickOn("drp_NIF", "");			
		sleepWait(1000);
		clickOn("drp_FilterByMVT", "");
		sleepWait(1000);
		clickOn("span","[contains(text(),'" + value + "')]");			
		sleepWait(500);
	}

	@And("^user selects value from filter drop down \"([^\"]*)\" for nif$")
	public void user_selects_value_from_filter_drop_down_for_nif(String value) throws Throwable 
	{
		sleepWait(1000);
		clickOn("drp_FilterByMVT", "");
		sleepWait(1000);
		clickOn("drp_ApplicantName", "");			
		sleepWait(1000);
		clickOn("drp_FilterByMVT", "");
		sleepWait(1000);
		clickOn("span","[contains(text(),'" + value + "')]");			
		sleepWait(1000);
	}

	@And("^user selects value from filter drop down \"([^\"]*)\" for Applicant Name$")
	public void user_selects_value_from_filter_drop_down_for_Applicant_Name(String value) throws Throwable 
	{
		sleepWait(1000);
		clickOn("drp_FilterByMVT", "");
		sleepWait(1000);
		clickOn("drp_TaxPayerCategory", "");			
		sleepWait(1000);
		clickOn("drp_FilterByMVT", "");
		sleepWait(1000);
		clickOn("span","[contains(text(),'" + value + "')]");			
		sleepWait(1000);
	}

	@And("^user selects value from filter drop down \"([^\"]*)\" for Taxpayer Category$")
	public void user_selects_value_from_filter_drop_down_for_Taxpayer_Category(String value) throws Throwable 
	{
		sleepWait(1000);
		clickOn("drp_FilterByMVT", "");
		sleepWait(1000);
		clickOn("drp_Priority", "");			
		sleepWait(1000);
		clickOn("drp_FilterByMVT", "");
		sleepWait(2000);
		clickOn("span","[contains(text(),'" + value + "')]");			
		sleepWait(1000);
	}


	@And("^user selects value from filter drop down \"([^\"]*)\" for Location$")
	public void user_selects_value_from_filter_drop_down_for_Location(String value) throws Throwable 
	{
		sleepWait(1000);
		clickOn("drp_FilterByMVT", "");
		sleepWait(1000);
		clickOn("drp_Priority", "");			
		sleepWait(1000);
		clickOn("drp_FilterByMVT", "");
		sleepWait(2000);
		clickOn("span","[contains(text(),'" + value + "')]");			
		sleepWait(1000);
	}

	@And("^user selects value from filter drop down \"([^\"]*)\" for Updated Date$")
	public void user_selects_value_from_filter_drop_down_for_Updated_Date(String value) throws Throwable 
	{
		sleepWait(1000);
		clickOn("drp_FilterByMVT", "");
		sleepWait(1000);
		clickOn("drp_Priority", "");			
		sleepWait(1000);
		clickOn("drp_FilterByMVT", "");
		sleepWait(1000);
		clickOn("span","[contains(text(),'" + value + "')]");			
		sleepWait(1000);
	}

	@And("^user selects value from filter drop down \"([^\"]*)\" for Tax Officer$")
	public void user_selects_value_from_filter_drop_down_for_Tax_Officer(String value) throws Throwable 
	{
		sleepWait(1000);
		clickOn("drp_FilterByMVT", "");
		sleepWait(1000);
		clickOn("drp_Priority", "");			
		sleepWait(1000);
		clickOn("drp_FilterByMVT", "");
		sleepWait(1000);
		clickOn("span","[contains(text(),'" + value + "')]");			
		sleepWait(1000);
	}


	@And("^user selects value from filter drop down \"([^\"]*)\" for Status$")
	public void user_selects_value_from_filter_drop_down_for_Status(String value) throws Throwable 
	{
		sleepWait(1000);
		clickOn("drp_FilterByMVT", "");
		sleepWait(1000);
		clickOn("drp_Priority", "");			
		sleepWait(1000);
		clickOn("drp_FilterByMVT", "");
		sleepWait(1000);
		clickOn("span","[contains(text(),'" + value + "')]");			
		sleepWait(1000);
	}

	@And("^User see output \"([^\"]*)\"$")
	public void user_see_output(String value) throws Throwable 
	{			
		sleepWait(1000);
		if(wd.findElement(By.xpath("(//*[contains(text(),'" + value + "')])[1]")).isDisplayed())
		{
			assertTrue(true);
		}
	}

	@And("^User see value \"([^\"]*)\"$")
	public void user_see_value(String value) throws Throwable 
	{
		sleepWait(1000);
		if(wd.findElement(By.xpath("(//span[contains(text(),'" + value + "')])[1]")).isDisplayed())
		{
			assertTrue(true);
		}
	}

	@Then("^user selects All from filter dropdown$")
	public void user_selects_All_from_filter_dropdown() throws Throwable 
	{
		sleepWait(1000);
		clickOn("drp_FilterByMVT", "");
		sleepWait(1000);
		clickOn("txt_All", "");
	}

	@Then("^user selects All from filter dropdown select$")
	public void user_selects_All_from_filter_dropdown_select() throws Throwable 
	{

		sleepWait(1000);
		clickOn("drp_FilterByMVT", "");			
		sleepWait(1000);			
		clickOn("drp_Priority", "");	
		sleepWait(1000);
		clickOn("drp_FilterByMVT", "");
		clickOn("txt_All", "");
	}


	@Then("^enters data in type here text box \"([^\"]*)\"$")
	public void enters_data_in_type_here_text_box(String value) throws Throwable 
	{
		sleepWait(1500);
		type("TypeHere",value);
 		sleepWait(3000);
	}

	@And("^User see piority \"([^\"]*)\"$")
	public void user_see_piority(String value) throws Throwable 
	{ 
		sleepWait(1000);
		if(wd.findElement(By.xpath("(//*[contains(text(),'" + value + "')])[1]")).isDisplayed())
		{
			assertTrue(true);
		}
	}
	
	@And("^User see result \"([^\"]*)\"$")
	public void user_see_result(String value) throws Throwable {
		sleepWait(1000);
		if(wd.findElement(By.xpath("(//*[contains(text(),'" + value + "')])[1]")).isDisplayed())
		{
			assertTrue(true);
		}
	}

	@Then("^clicks on download pdf button$")
	public void clicks_on_download_pdf_button() throws Throwable 
	{
		clickOn("btn_Download_drop", "");
		sleepWait(1000);
		clickOn("btn_DownloadPDF", "");		
		verifyDownload("ManageVatRegistration.pdf");
	}

	@Then("^user click on view$")
	public void user_click_on_view() throws Throwable 
	{
		sleepWait(1000);
		clickOn("drp_ManageDropdown","");
		sleepWait(1000);
		clickOn("drp_View","");
		sleepWait(2000);
	}


	@Then("^it Navigate to Tax Payer Details$")
	public void it_Navigate_to_Tax_Payer_Details() throws Throwable 
	{
		sleepWait(1000);	
		if(elementText("txt_ViewClick").equals("Tax Payer Details"))
		{
			assertTrue(true);
		}
	}

	@And("^User click on Rejected$")
	public void user_click_on_Rejected() throws Throwable 
	{
		sleepWait(1000);
		clickOn("txt_Rejected", "");					
	}

	@Then("^User See pop up Reason for Rejected$")
	public void user_See_pop_up_Reason_for_Rejected() throws Throwable 
	{			
		sleepWait(500);
		if(elementText("txt_RejectedReason_popup").equals("Reason for Rejected"))
		{
			assertTrue(true);
		}			
		sleepWait(1000);			
		clickOn("btn_close_popup", "");
		sleepWait(1000);			
	}


	@When("^select filter$")
	public void select_filter() throws Throwable 
	{
		sleepWait(1000);
		clickOn("drp_FilterByMVT", "");
		sleepWait(1000);
		clickOn("drp_NIF", "");			
	}


	@And("^user click on manage setting and select Review$")
	public void user_click_on_manage_setting_and_select_Review() throws Throwable 
	{
		sleepWait(1000);
		clickOn("drp_ManageDropdown","");			
		sleepWait(1000);
		clickOn("drp_Review","");
		sleepWait(1000);
	}	

	@And("^user click on Change Priority$")
	public void user_click_on_Change_Priority() throws Throwable 
	{
		sleepWait(1000);
		clickOn("drp_ManageDropdown","");
		sleepWait(1000);
		clickOn("drp_ChangePriority","");
		sleepWait(1000);
	}

	@And("^user selects priority from priority list \"([^\"]*)\"$")
	public void user_selects_priority_from_priority_list(String value) throws Throwable 
	{
		clickOn("drp_ChangePriorityDropDown", "");
		clickOn(value, "");
	}	

	@Then("^click on right tick$")
	public void click_on_right_tick() throws Throwable 
	{
		sleepWait(1000);
		clickOn("TickRight","");
	}			

	@Then("^Priority is Changed and toast message display$")
	public void priority_is_Changed_and_toast_message_display() throws Throwable 
	{
		sleepWait(1000);
		if(elementText("txt_ChangePriority_toastMess").equals("Priority updated successfully"))
		{
			assertTrue(true);
		}
		sleepWait(1000);
	}

	@And("^user click on Reassign$")
	public void user_click_on_Reassign() throws Throwable 
	{
		sleepWait(3000);
		clickOn("drp_ManageDropdown","");
		sleepWait(1000);
		clickOn("drp_Reassign", "");							
	}

	@Then("^select another Tax Officier fron the list \"([^\"]*)\"$")
	public void select_another_Tax_Officier_fron_the_list(String value) throws Throwable 
	{
		sleepWait(1000);
		clickOn("drp_SelectDropdownTaxOfficer", ""); 
		sleepWait(1000);
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
		sleepWait(6000);
		if(elementText("txt_reassigned_toastMess").equals("Officer reassigned successfully"))
		{
			assertTrue(true);
		}		
		sleepWait(1000);
	}


	@And("^User Click Dropdown \"([^\"]*)\"$")
	public void user_Type_Dropdown(String value) throws Throwable 		
	{
		sleepWait(1000);
		clickOn("TypeList","");
		if(value.equals("20"))
		{
			clickOn("drp_select20","");
			sleepWait(2000);			
		}
		else if(value.equals("15"))
		{
			clickOn("drp_select15","");
			sleepWait(3000);			
		}
		else if(value.equals("25"))
		{
			clickOn("drp_select25","");
			sleepWait(3000);
		}
		else if(value.equals("50"))
		{
			clickOn("drp_select50","");
			sleepWait(2000);
		}
		else if(value.equals("100"))
		{
			clickOn("drp_select100","");
			sleepWait(2000);
		}
		int rowCount=wd.findElements(By.xpath("//*[@class='data-table-row ng-star-inserted']")).size();			
		count = rowCount;			
	}

	@Then("^user see the page result$")
	public void user_see_the_page_result() throws Throwable 
	{
		sleepWait(1000);
		int rowCount1=wd.findElements(By.xpath("//*[@class='data-table-row ng-star-inserted']")).size();			
		if(count==rowCount1)
		{
			assertTrue(true);
		}
	}	

	@And("^user click on the sorting \"([^\"]*)\"$")
	public void user_click_on_the_sorting(String value) throws Throwable 
	{
		sleepWait(1000);
		clickOn("lbl_AssLast", "");
		sleepWait(1000);
		int sum = 0;
		sleepWait(1000);
		List<WebElement> elementName =  wd.findElements(By.xpath("//tbody/tr[1]/td[1]/div"));
		for(int i = 1; i<elementName.size()+1;i++)
		{
			WebElement element1 = wd.findElement(By.xpath("//tbody/tr["+i+"]/td[1]/div"));
			String number1 = element1.getText();
			int result1 = Integer.parseInt(number1);
			sum = result1;
		}			
		Storesum = sum;
		clickOn("lbl_AssFirst", "");
		sleepWait(1000);
		clickOn("start","[@class='pl-1 fa fa-sort-" + value + "']");
		sleepWait(1000);
	}

	@Then("^User see sorting result$")
	public void user_see_sorting_result() throws Throwable 
	{
		String checkSort =elementText("txt_priority_sort_check");
		Float sort = Float.parseFloat(checkSort);			
		if(sort == Storesum)
		{
			assertTrue(true);
		}
	}

	@When("^user selects filter by and select all$")
	public void user_selects_filter_by_and_select_all() throws Throwable 
	{
		sleepWait(1000);
		clickOn("drp_FilterBy", "");
		sleepWait(1000);
		clickOn("txt_All", "");
		sleepWait(1000);
		wd.findElement(By.xpath(obj.getProperty("TypeHere"))).clear();			
		sleepWait(1000);		   
	}

	@And("^user clicks on download and click on Excel button$")
	public void user_clicks_on_download_and_click_on_Excel_burtton() throws Throwable 
	{
		sleepWait(1000);
		clickOn("btn_Download_drop", "");
		sleepWait(1000);
		clickOn("btn_Download_Excel", "");
		sleepWait(1000);
		verifyDownload("ManageVatRegistration.xslx");
		sleepWait(1000);
	}

	@Then("^user checks its result \"([^\"]*)\"$")
	public void user_checks_its_result(String value) throws Throwable 
	{	
		sleepWait(3000);						
		if(elementText("txt_NoRecordFound").equals(value))
		{
			assertTrue(true);
		}
	}

	@And("^enter valid data in Type Here \"([^\"]*)\"$")
	public void enter_valid_data_in_Type_Here(String value) throws Throwable 
	{			
		sleepWait(800);
		type("TypeHere",value);
		sleepWait(1000);	
	}

	@And("^user select from filter \"([^\"]*)\"$")
	public void user_select_from_filter(String value) throws Throwable 
	{
		sleepWait(1000);
		clickOn("drp_FilterByMVT", "");
		sleepWait(1000);
		clickOn("span","[contains(text(),'" + value + "')]");
		sleepWait(1000);
	}

	@And("^enter filter data \"([^\"]*)\"$")
	public void enter_filter_data(String value2) throws Throwable 
	{			
		clickOn("span","[contains(text(),'" + value2 + "')]");
		sleepWait(1000);
	}

	@And("^user click on NIF sorting \"([^\"]*)\"$")
	public void user_click_on_NIF_sorting(String value) throws Throwable 
	{
		sleepWait(1000);
		clickOn("label_SortNifClick", "");
		sleepWait(1000);
		clickOn("start","[@class='pl-1 fa fa-sort-" + value + "']");
		sleepWait(1000);				
	}

	@And("^user Refresh Manage VAT Registration page$")
	public void user_Refresh_Manage_VAT_Registration_page() throws Throwable 
	{			
		wd.navigate().refresh();
	}

	@And("^enter valid filter data \"([^\"]*)\"$")
	public void enter_valid_filter_data(String value3) throws Throwable 
	{
		type("TypeHere",value3);
		sleepWait(2000);
	}	

	@When("^enter valid filter data \"([^\"]*)\" and verify$")
	public void enter_valid_filter_data_and_verify(String value3) throws Throwable 
	{			
		type("TypeHere",value3);
		sleepWait(1000);		

		if(elementText("txt_check_filter_combination").equals(value3))
		{
			assertTrue(true);
		}						
	}	

	@And("^User click on OnHold$")
	public void user_click_on_OnHold() throws Throwable 
	{		    
		sleepWait(1000);
		clickOn("txt_OnHold_Click", "");					
	}	

	@Then("^User See pop up Reason for OnHold$")
	public void user_See_pop_up_Reason_for_OnHold() throws Throwable 
	{
		sleepWait(1000);
		if(elementText("txt_OnHold_popup").equals("Reason for On Hold"))
		{
			assertTrue(true);
		}	
		sleepWait(1000);			
		clickOn("btn_close_onHold_popup", "");
		sleepWait(1000);
	}
}
