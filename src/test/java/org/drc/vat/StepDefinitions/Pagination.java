package org.drc.vat.StepDefinitions;

import static org.drc.vat.appmanager.HelperBase.fis;
import static org.drc.vat.appmanager.HelperBase.obj;
import static org.drc.vat.appmanager.HelperBase.wd;

import java.io.IOException;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

public class Pagination 
{

	/*@And("^user click on the page \"([^\"]*)\" and check page\"([^\"]*)\"$")
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
		//we1.click();
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
	@Then("^User see Result$")
	public void user_see_Result() throws Throwable 
	{
		System.out.println("Result Display");		
	}	*/
}
