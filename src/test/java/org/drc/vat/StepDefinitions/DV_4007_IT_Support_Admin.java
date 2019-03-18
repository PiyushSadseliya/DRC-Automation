package org.drc.vat.StepDefinitions;

import org.apache.commons.lang.RandomStringUtils;
import org.drc.vat.appmanager.*;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import static org.drc.vat.appmanager.HelperBase.*;
import static org.testng.Assert.assertTrue;


import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import java.util.Date;
import java.util.Set;
import java.awt.Robot;
import java.io.File;
import java.text.SimpleDateFormat;
import java.util.concurrent.TimeUnit;

public class DV_4007_IT_Support_Admin {
	String times = new SimpleDateFormat("HHmmss").format(new Date());
	String cwd = System.getProperty("user.dir");
	public static String issuetype;
	public static String Title;
	public static String Currentstatus;
	public static String Description;
	public static String Comments;
	public static String Referid;

	@Given("^user must be logged in and should be on dashboard$")
	public void user_must_be_logged_in_and_should_be_on_dashboard() throws Throwable {
		System.out.println("logged into internal portal with IT support module ");

	}

	@Then("^click on the IT support Sub menu$")
	public void click_on_the_IT_support_Sub_menu() throws Throwable {
		clickOn("Tab_ITsupport", "");
		System.out.println("User's redirected to 1TrakIT link ");

	}

	@Then("^user must be logged in and should be on trakIT issue page$")
	public void user_must_be_logged_in_and_should_be_on_trakIT_issue_page() throws Throwable {
		System.out.println("redirect to 1TrakIT issue page  ");

	}
	@Then("^user should redirect to add issue page$")
	public void user_should_redirect_to_add_issue_page() throws Throwable {
		System.out.println("user redirect to 1TrakIT add issue page  ");
		clickOn("btn_Add_New_Issue", "");
		sleepWait(2000);

	}

	@Then("^enter the required details \"([^\"]*)\" \"([^\"]*)\"$")
	public void enter_the_required_details(String issue, String title) throws Throwable {

		
		drp_select("drp_Select_Issue",issue);		
		type("txtboxtitle", title);

	}

	@Then("^current status as per test data details section should be open$")
	public void current_status_as_per_test_data_details_section_should_be_open() throws Throwable {

	}

	@Then("^Enter the comments \"([^\"]*)\"$")
	public void Enter_the_comments(String comments) throws Throwable {
		// sleepWait(1000);
		waitFor("clickcommentsection");
		type("txt_Communication_Session", comments + " " + times);
	}

	@Then("^Add the comment in comment section \"([^\"]*)\"$")
	public void add_the_comment_in_comment_section(String comments) throws Throwable {
		wd.switchTo().defaultContent();
		sleepWait(1000);
		type("txt_Communication_Session", comments + " " + times);
	}

	@Then("^click on attach icon choose file section window is displayed$")
	public void click_on_attach_icon_choose_file_section_window_is_displayed() throws Throwable {
		JavascriptExecutor jse = (JavascriptExecutor) wd;
		jse.executeScript("scroll(0, 250)");
		waitFor("Iconupload");
		clickOn("Iconupload", "");

	}

	@Then("^select the files \"([^\"]*)\"$")
	public void select_the_files(String file) throws Throwable {
		sleepWait(1000);
		UploadImage("", file);
	}

	@Then("^click on upload button$")
	public void click_on_upload_button() throws Throwable {

	}

	@Then("^click on cross button$")
	public void click_on_cross_button() throws Throwable {
		Robot r = new Robot();
		r.keyPress(java.awt.event.KeyEvent.VK_ESCAPE);
		r.keyRelease(java.awt.event.KeyEvent.VK_ESCAPE);
	}

	@Then("^click on IT support submit button$")
	public void click_on_IT_support_submit_button() throws Throwable {
		sleepWait(2000);
		clickOn("btn_Help_Submit", "");
	}
	
	@Then("^successfull \"([^\"]*)\" display on given page$")
	public void successfull_display_on_given_page(String tostmessage) throws Throwable {
		sleepWait(1000);
		if(wd.findElement(By.xpath("//*[contains(text(),'" + tostmessage + "')]")).isDisplayed() )
        {
			assertTrue(true);
        }
	sleepWait(2000);
	}
	@And("^User switch to tab$")
	public void user_switch_to_tab() throws Throwable 
	{
		 Set<String> windowHandle = wd.getWindowHandles();		
		 for(String handle:wd.getWindowHandles()) 
		 {
			 wd.switchTo().window(handle).getWindowHandle();
		 }
	}

	@Given("^user click on Add button$")
	public void user_click_on_Add_button() throws Throwable 
	{	
		//sleepWait(1000);
		clickOn("btn_Add_New_Issue", "");
		sleepWait(1000);
		
	}


	@Then("^Enter the description \"([^\"]*)\"$")
	public void enter_the_description(String description) throws Throwable {	
		type("txtareadescription", description + " #" + times);
		sleepWait(2000);
	}

	@Then("^click on cancel button$")
	public void click_on_cancel_button() throws Throwable {
		clickOn("btn_Help_Cancel", "");
	}

	@Then("^click on search box$")
	public void click_on_search_box() throws Throwable {
		clickOn("Search_issue", "");
	}

	@Then("^enter any text on the dashboard page \"([^\"]*)\"$")
	public void enter_any_text_on_the_dashboard_page(String searchelement) throws Throwable {
		type("Search_issue", searchelement);
		sleepWait(2000);
	}

	
	@Then("^click on cross button or clear the filter given in the textbox for cancel the search$")
	public void click_on_cross_button_or_clear_the_filter_given_in_the_textbox_for_cancel_the_search()
			throws Throwable {
		clickOn("crossicon", "");
	}

	@Then("^click on edit icon of any issue from the issue grid$")
	public void click_on_edit_icon_of_any_issue_from_the_issue_grid() throws Throwable {
		waitFor("btn_Edit_Click");
		clickOn("btn_Edit_Click", "");
		sleepWait(1000);
	}

	@Then("^user should redirected to edit screen$")
	public void user_should_redirected_to_edit_screen() throws Throwable {
		System.out.println("user on edit screen");
	}	

	@Then("^click on download icon on any file$")
	public void click_on_download_icon_on_any_file() throws Throwable {
		clickOn("downloadicon", "");
		sleepWait(4000);
	}

	@Then("^file should get the download$")
	public void file_should_get_the_download() throws Throwable {
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
