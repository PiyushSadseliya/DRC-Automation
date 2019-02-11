package org.drc.vat.StepDefinitions;

import org.drc.vat.appmanager.*;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import static org.drc.vat.appmanager.HelperBase.*;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;

import java.util.Date;
import java.awt.Robot;
import java.awt.event.KeyEvent;
import java.io.File;
import java.text.SimpleDateFormat;
import java.util.concurrent.TimeUnit;

public class DV_4007_IT_Support_User1 {
	String times = new SimpleDateFormat("HHmmss").format(new Date());

	@Given("^user should enter Username \"([^\"]*)\" and Password \"([^\"]*)\"$")
	public void user_should_enter_Username_and_Password(String username, String password) throws Throwable {
		
		System.out.println("User on 1TrakIT portal");
		type("txtbox_username", username);
		sleepWait(2000);
		type("txtbox_password", password);
		sleepWait(2000);
		clickOn("btn_login", "");
		sleepWait(4000);
	}
	@Then("^user is navigated to next page$")
	public void rivet_user_is_navigated_to_next_page() throws Throwable {
	}

	@Then("^user clicks on Search \"([^\"]*)\" textbox and enters the text$")
	public void user_clicks_on_Search_textbox_and_enters_the_text(String Search) throws Throwable {
		clickOn("Search_issue", "");
		type("Search_issue", Search);
		sleepWait(1000);
		
	}

	@Then("^user clicks on edit icon$")
	public void user_clicks_on_edit_icon() throws Throwable {
		clickOn("btn_Edit_Click", "");
		sleepWait(2000);
	}

	@Then("^user selects option from Priority dropdown \"([^\"]*)\"$")
	public void user_selects_option_from_Priority_dropdown(String Priority) throws Throwable {
		sleepWait(2000);
		wd.findElement(By.xpath(obj.getProperty("Priority_dropd"))).sendKeys(Priority);
	}

	@Then("^user selects option from Next Status dropdown \"([^\"]*)\"$")
	public void user_selects_option_from_Next_Status_dropdown(String Next_Status) throws Throwable {
		sleepWait(2000);
		wd.findElement(By.xpath(obj.getProperty("Next_status_dropd"))).sendKeys(Next_Status);
	}

	@Then("^user selects option from Assign To Group dropdown$")
	public void user_selects_option_from_Assign_To_Group_dropdown() throws Throwable {
		Select Issue_typ_drpd = new Select(wd.findElement(By.xpath(obj.getProperty("AssignTo_grp"))));
		Issue_typ_drpd.selectByVisibleText("Global User");
	}

	@Then("^user enters comments \"([^\"]*)\" in Communication$")
	public void user_enters_comments_in_Communication(String comments) throws Throwable {
		wd.findElement(By.xpath(obj.getProperty("Comments"))).sendKeys(comments);
	}

	@Then("^user downloads the file$")
	public void user_downloads_the_file() throws Throwable {
		wd.findElement(By.xpath(obj.getProperty("download"))).click();
		File getLatestFile = new File(System.getProperty("user.dir") + "\\capture.pdf");
		String Actual = getLatestFile.getName();
		String Expected = "capture.pdf";
		Assert.assertEquals(Actual, Expected);
		if (Expected.equals(Actual)) {
			System.out.println("Image Matched");
		} else {
			System.out.println("Image Not Matched");
		}
		saveFile();
	}


}
