package org.drc.vat.StepDefinitions;

import static org.testng.Assert.assertTrue;
import static org.drc.vat.appmanager.HelperBase.*;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class DV_1294_TaxPayerProfile {
	
	@When("^user click on Dashboard link$")
	public void user_click_on_Dashboard_link() throws Throwable {
		clickOn("txt_dashboard", "");
	    sleepWait(200);
	    clickOn("label_pin", "");
	}
	
	@When("^user selects Tax Payer Profile$")
	public void user_selects_Tax_Payer_Profile() throws Throwable {
		sleepWait(1000);
		clickOn("txt_TaxpayerProfile","");
		sleepWait(2000);
	}
	
	@And("^user clicked on view button$")
	public void user_clicked_on_view_button() throws Throwable {
		clickOn("btn_SearchFX","");
		sleepWait(1000);
		clickOn("btn_viewTaxpayer","");
		sleepWait(2000);
	}
	
	@And("^enters data in text box \"([^\"]*)\" and clicked on search button$")
	public void enters_data_in_text_box_and_clicked_on_search_button(String value) throws Throwable {
		sleepWait(1000);
		type("TypeHere",value);
		sleepWait(1000);		
		clickOn("btn_SearchFX","");
		sleepWait(500);
	}
	
	@And("^user click on Associated risk button$")
	public void user_click_on_Associated_risk_button() throws Throwable {
		sleepWait(1000);
		clickOn("btn_associatedRisk","");
		sleepWait(2000);
		clickOn("txt_associatedBank","");
		clickOn("btn_previous_associatedbank","");
		clickOn("btn_previous_associatedbank","");
		if(wd.findElement(By.xpath("//h6[contains(text(),'Filter by')]")).isDisplayed())
		{
			assertTrue(true);
		}		
	}
}