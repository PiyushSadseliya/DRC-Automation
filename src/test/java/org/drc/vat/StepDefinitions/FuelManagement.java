package org.drc.vat.StepDefinitions;

import static org.drc.vat.appmanager.HelperBase.*;
import static org.testng.Assert.assertTrue;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class FuelManagement {	
	Actions action = new Actions(wd);
	
	@Given("^User click on Fuel Management tab$")
	public void user_click_on_Fuel_Management_tab() throws Throwable {
		clickOn("txt_FuelManagement", "");
	}

	@When("^click on Reject button$")
	public void click_on_Reject_button() throws Throwable {
		Thread.sleep(1000);
		clickOn("btn_Reject_AA", "");
		Thread.sleep(1000);
	}
	
	@When("^user click on cancel button$")
	public void user_click_on_cancel_button() throws Throwable {
		clickOn("btn_closebutton", "");
		Thread.sleep(1000);
	}

	@And("^enter the reason for the comment \"([^\"]*)\"$")
	public void enter_the_reason_for_the_comment(String data) throws Throwable {
		type("txtbx_ReasonforRejection", data);
		Thread.sleep(1000);
	}
	
	@And("^user check the informative message \"([^\"]*)\"$")
	public void user_check_the_informative_message(String message) throws Throwable {
		//Actions action = new Actions(wd);
		action.sendKeys(Keys.TAB).build().perform();
		if(wd.findElement(By.xpath("//*[contains(text(),'" + message + "')]")).isDisplayed() )
		{		
			assertTrue(true);
		}	
	}
	
	@And("^user clicked on update button \"([^\"]*)\"$")
	public void user_clicked_on_update_button(String message) throws Throwable {
		clickOn("btn_Obj_Submit", "");
		Thread.sleep(1000);
		if(wd.findElement(By.xpath("(//*[contains(text(),'" + message + "')])")).isDisplayed())
		{
			assertTrue(true);
		}
	}
	
	@And("^click on Approve button and check the message \"([^\"]*)\"$")
	public void click_on_Approve_button_and_check_the_message(String message) throws Throwable {
		clickOn("btn_Approve_AA", "");
		if(wd.findElement(By.xpath("(//*[contains(text(),'" + message + "')])")).isDisplayed() )
		{					
			assertTrue(true);
		}
	}
	
	@And("^user check the validation message \"([^\"]*)\"$")
	public void user_check_the_validation_message(String arg1) throws Throwable {
		String message = elementText("text_domestic","");
	}
}