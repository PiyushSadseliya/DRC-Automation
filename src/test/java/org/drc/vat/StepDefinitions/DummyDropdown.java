package org.drc.vat.StepDefinitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import static org.drc.vat.appmanager.HelperBase.*;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ISelect;

public class DummyDropdown 
{
	/*@And("^user click on Dropdown \"([^\"]*)\"$")
	public void user_click_on_Dropdown(String value) throws Throwable 
	{
		drp_select("selectdropdown", value); 
		Thread.sleep(1000);
	}*/
	/*int ColmnCount=wd.findElements(By.xpath("//*[@class='d-flex justify-content-between w-100 p-3 list-header font-medium cursor-pointer']")).size();	
	
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
	
	@Then("^user see the page result$")
	public void user_see_the_page_result() throws Throwable 
	{
		//int rowCount=wd.findElements(By.xpath("//*[@class='list-fields d-flex justify-content-between w-100 p-3 font-regular cursor-pointer ng-star-inserted']")).size();
		//System.out.println("rowCount :"+rowCount);
		System.out.println("ColmnCount :"+ColmnCount);				
	}*/
}
