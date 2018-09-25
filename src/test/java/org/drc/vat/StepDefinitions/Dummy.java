package org.drc.vat.StepDefinitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import static org.drc.vat.appmanager.HelperBase.*;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ISelect;

public class Dummy 
{
	@Given("^user is in current page$")
	public void user_is_in_current_page() throws Throwable 
	{
		System.out.println("Use is on Sorting Page ");
	}

	@And("^user click on Sorting \"([^\"]*)\"$")
	public void user_click_on_Sorting(String value) throws Throwable 
	{
		System.out.println("do Sorting ");
		
		clickOn("start","[@class='sorting_" + value + "']");	
	
	}

	@Then("^user see the result$")
	public void user_see_the_result() throws Throwable 
	{
						
		int rowCount=wd.findElements(By.tagName("tr")).size();
		int ColmnCount=wd.findElements(By.xpath("//table//thead//tr//th")).size();
		
		System.out.println("rowCount :"+rowCount);
		System.out.println("ColmnCount :"+ColmnCount);
		
			String name= wd.findElement(By.xpath("//*[@id='example']/tbody/tr[1]/td[1]")).getText();
			System.out.println(name);								
			
			if(name.contains("Y. Berry"))
			{
				
				System.out.println("Desceding order");
				
			}
			else
			{
				System.out.println("No Desceding order");
			}				 
	}   	
}
