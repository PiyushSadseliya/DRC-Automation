package org.drc.vat.StepDefinitions;

import org.testng.asserts.SoftAssert;

import static org.drc.vat.appmanager.HelperBase.elementText;
import static org.drc.vat.appmanager.HelperBase.clickOn;
import static org.drc.vat.appmanager.HelperBase.type;
import static org.drc.vat.appmanager.HelperBase.wd;
import static org.testng.Assert.assertEquals;
import static org.drc.vat.appmanager.HelperBase.UploadImage;
import static org.drc.vat.appmanager.HelperBase.pageSource;
import static org.drc.vat.appmanager.HelperBase.sleepWait;


import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;

import cucumber.api.java.en.Then;

public class DebtCollectionCaseScreen {
	
	
	
	@Then("^user should be on Debt Collection Case$")
	public void user_should_be_on_Debt_Collection_Case() throws Throwable {
		sleepWait(2000);
		assertEquals(elementText("heading_debtcasescreen",""), "");
		
	}
	@Then("^user verifies the Total Due HyperLink\"([^\"]*)\"$")
	public void user_verifies_the_Total_Due_HyperLink(String arg1) throws Throwable {
		assertEquals(elementText("href_totalamountDue",""),arg1);

	}
	@Then("^user Verifies Received Amount\"([^\"]*)\"$")
	public void user_Verifies_Received_Amount(String arg1) throws Throwable {
		assertEquals(elementText("txt_recvAmt",""),arg1);
	}
	@Then("^Verifies the balance amount\"([^\"]*)\"$")
	public void verifies_the_balance_amount(String arg1) throws Throwable {
		assertEquals(elementText("txt_balAmt",""), arg1);
	}
	@Then("^click on Amount radio at Expected Recovery$")
	public void click_on_Amount_radio_at_Expected_Recovery() throws Throwable {
		clickOn("radbtn_expRecoveryAmt","");

	}
	@Then("^Enter the amount to be Recovered\"([^\"]*)\" and the percentage field should dispaly \"([^\"]*)\"$")
	public void enter_the_amount_to_be_Recovered_and_the_percentage_field_should_dispaly(String arg1, String arg2) throws Throwable {
		System.out.println(arg1);
		System.out.println(arg2);
		sleepWait(2000);
		type("txtbx_recAmt",arg1);		
		WebElement rper=wd.findElement(By.xpath("//input[@formcontrolname='expectedRecoveryPercentage']"));
	    JavascriptExecutor jse = (JavascriptExecutor)wd;
	   String perc = jse.executeScript("return arguments[0].value", rper).toString();
	   System.out.println(perc);
	   assertEquals(perc, arg2);
	}
	@Then("^Status \"([^\"]*)\" should be displayed$")
	public void status_should_be_displayed(String arg1) throws Throwable {
		WebElement dt=wd.findElement(By.xpath("//label[text()='Status : ']/following-sibling::input"));
	    JavascriptExecutor jse = (JavascriptExecutor)wd;
	   String status = jse.executeScript("return arguments[0].value", dt).toString();
	   System.out.println(status);
	   assertEquals(status, arg1);


	}
	@Then("^Selects Action \"([^\"]*)\"$")
	public void selects_Action(String arg1) throws Throwable {
		//action select action
		clickOn("select_action","");
		sleepWait(2000);
		clickOn("span","[text()='"+arg1+"']");

	}
	@Then("^click on Submit button$")
	public void click_on_Submit_button() throws Throwable {
	    clickOn("btn_submit","");
	    String txt=pageSource();
	  // assertEquals(txt.contains("Case update successfully"), true);
	}
	@Then("^click in Percentage Radio At Expected Recovery$")
	public void click_in_Percentage_Radio_At_Expected_Recovery() throws Throwable {
		sleepWait(2000);
		clickOn("radbtn_expRecoveryper","");
		sleepWait(2000);
	
	}

	@Then("^Enter the Percentage \"([^\"]*)\" and displayed amount field\"([^\"]*)\"$")
	public void enter_the_Percentage_and_display_the_amount_field(String arg1, String arg2) throws Throwable {
		type("txtbx_recPer",arg1);	
		sleepWait(2000);
		WebElement peramt=wd.findElement(By.xpath("//input[@formcontrolname='expectedRecoveryAmount']"));
	    JavascriptExecutor jse = (JavascriptExecutor)wd;
	   String perc = jse.executeScript("return arguments[0].value", peramt).toString();
	   sleepWait(2000);
	   assertEquals(perc, arg2);
	}
	@Then("^add Comment \"([^\"]*)\"$")
	public void add_Comment(String arg1) throws Throwable {
	  type("txtbx_comment",arg1);
	}
	@Then("^attach the document\"([^\"]*)\"$")
	public void attach_the_document(String arg1)throws Throwable {
		clickOn("browse_debt","");
		sleepWait(2000);
	 UploadImage("", arg1);
	 sleepWait(2000);
	 
	}
	@Then("^user should be on Case Management Page$")
	public void user_should_be_on_Case_Management_Page() throws Throwable {
		sleepWait(2000);
	    assertEquals(elementText("txt_heading",""), "Case Management");
	    sleepWait(2000);
	}
	



}
