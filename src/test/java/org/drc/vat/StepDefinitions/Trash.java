package org.drc.vat.StepDefinitions;

import static org.drc.vat.appmanager.HelperBase.clickOn;
import static org.drc.vat.appmanager.HelperBase.elementText;
import static org.drc.vat.appmanager.HelperBase.type;
import static org.drc.vat.appmanager.HelperBase.wd;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class Trash 
{

	@Given("^User is on Manage VAT Registration$")
	public void user_is_on_Manage_VAT_Registration() throws Throwable 
	{
		System.out.println("User is on VAT Registration Page");
	}
	
	@And("^User Select Priority from Filter by dropdown$")
	public void user_Select_Priority_from_Filter_by_dropdown() throws Throwable 
	{
		System.out.println("User Click on Dropdown $ select Priority");
		clickOn("FilterBy", "");
		clickOn("Dropdown_Priority", "");
		
	}

	// Enter Data in type here 
	@And("^User Enter \"([^\"]*)\" in Type Here field$")
	public void user_Enter_in_Type_Here_field(String value) throws Throwable 
	{
		System.out.println("User enter Value");
		type("TypeHere",value);
		Thread.sleep(10000);
	}

	
	//Add refresh
	@Given("^User Refresh the Page and all Filters are removed$")
	public void user_Refresh_the_Page_and_all_Filters_are_removed() throws Throwable 
	{
	    System.out.println("User Refresh");
	    wd.navigate().refresh();
	}

	@And("^User Click on Last Page$")
	public void user_Click_on_Last_Page() throws Throwable 
	{
		System.out.println("Priority selected and entered data in Type Here");
		clickOn("LastNavigation", "");
	}
	
	//Common for all filter  
	@And("^User Filter Record for First Page \"([^\"]*)\">$")
	public void user_Filter_Record_for_First_Page(String record) throws Throwable 
	{
		System.out.println("User Filter Record for First Page");
		type("TypeHere",record);
	}

	// Filter is left to compare 
	@Then("^User See the Filtered Result$")
	public void user_See_the_Filtered_Result() throws Throwable 
	{
		System.out.println("User see Filter Result");
		
		
	}
	
	//no record found for invalid data
	@Then("^User see message$")
	public void user_see_message() throws Throwable 
	{
		
		System.out.println("Message Shown No record found");
		if(elementText("NoRecord").equalsIgnoreCase("No records found!"))
		{
			System.out.println("Pass");
		}
		else
		{
			System.out.println("Fail");
		}
		Thread.sleep(1000);
		
	}

	//Nif
	@And("^User Select NIF from Filter by dropdown$")
	public void user_Select_NIF_from_Filter_by_dropdown() throws Throwable 
	{
		System.out.println("User Click on Dropdown $ select Nif");
		clickOn("FilterBy", "");
		clickOn("Dropdown_NIF", "");
	}
	
	
	@Then("^User See NIF Result$")
	public void user_See_NIF_Result() throws Throwable 
	{
		System.out.println("NIF Record Found");
	//	bodymessage();
		if(elementText("NIFRecord").equalsIgnoreCase("TypeHere"))
		{
			System.out.println("Pass");
		}
		else
		{
			System.out.println("Fail");
		}	
		Thread.sleep(1000);
	//	verifyDownload("");
		
	}
	//
	@Then("^User see Nif Message$")
	public void user_see_Nif_Message() throws Throwable 
	{
		System.out.println("Message Shown No record found");
		if(elementText("NoRecord").equalsIgnoreCase("No records found!"))
		{
			System.out.println("Pass");
		}
		else
		{
			System.out.println("Fail");
		}
		Thread.sleep(1000);
	}

	@And("^User Select Name of Business /Applicant from Filter by dropdown$")
	public void user_Select_Name_of_Business_Applicant_from_Filter_by_dropdown() throws Throwable 
	{
		System.out.println("User Click on Dropdown $ select Nif");
		clickOn("FilterBy", "");
		clickOn("Dropdown_NameBusiness", "");
	}

	@Then("^User see Business Name$")
	public void user_see_Business_Name() throws Throwable 
	{
		System.out.println("Business Name Found");
		
		if(elementText("BusinessName").equalsIgnoreCase("TypeHere"))
		{
			System.out.println("Pass");
		}
		else
		{
			System.out.println("Fail");
		}	
		Thread.sleep(1000);
	}
	
	
	@Then("^User see Business Name Result$")
	public void user_see_Business_Name_Result() throws Throwable 
	{
		System.out.println("Business Name Not Found");
		
		if(elementText("NoRecord").equalsIgnoreCase("No records found!"))
		{
			System.out.println("Pass");
		}
		else
		{
			System.out.println("Fail");
		}	
		Thread.sleep(1000);
	}
	
	
	@And("^User Select Taxpayer Sub category from Filter by dropdown$")
	public void user_Select_Taxpayer_Sub_category_from_Filter_by_dropdown() throws Throwable 
	{
		System.out.println("User Click on Dropdown $ select Taxpayer ");
		clickOn("FilterBy", "");
		clickOn("Dropdown_NIF", "");
		
	}

	
	
}
