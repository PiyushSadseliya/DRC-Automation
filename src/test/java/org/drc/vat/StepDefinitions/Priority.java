package org.drc.vat.StepDefinitions;

import static org.drc.vat.appmanager.HelperBase.clickOn;
import static org.drc.vat.appmanager.HelperBase.wd;
import static org.drc.vat.appmanager.HelperBase.*;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

public class Priority 
{
/*	@And("^user click on the sorting \"([^\"]*)\"$")
	public void user_click_on_the_sorting(String value) throws Throwable 
	{
		System.out.println("User Click on Sorting");		

		clickOn("start","[@class='pl-1 fa fa-sort-" + value + "']");		
	}

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
*/
	
}
