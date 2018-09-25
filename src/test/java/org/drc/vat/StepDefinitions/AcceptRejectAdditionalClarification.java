package org.drc.vat.StepDefinitions;

import static org.drc.vat.appmanager.HelperBase.clickOn;
import static org.drc.vat.appmanager.HelperBase.type;
import static org.drc.vat.appmanager.HelperBase.wd;
import static org.drc.vat.appmanager.HelperBase.*;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.testng.Assert;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AcceptRejectAdditionalClarification 
{
	//TC_02
	
	@And("^user click on Approve and Continue button$")
	public void user_click_on_Approve_and_Continue_button() throws Throwable 
	{
		System.out.println("User Click on Approve & Continiue ");
		clickOn("BApproveContinue","");
		Thread.sleep(1000);
		/*String expectedMessage = "Form Submmited successfully!";
		String message = wd.findElement(By.xpath("//*[@class='toast-top-right toast-container']")).getText();
		Assert.assertTrue(message.contains(expectedMessage));
		System.out.println("User see Toast message "); */
	}		
	//TC_02
	@Then("^user seee the certificate$")
	public void user_seee_the_certificate() throws Throwable 
	{
		System.out.println("Certificate Display");
		
		String expectedMessage = "Certificate of Registration for VAT/NITVA";
		String message = wd.findElement(By.xpath("//*[contains(text(),'Certificate of Registration for VAT/NITVA')]")).getText();
		Assert.assertTrue(message.contains(expectedMessage));
		
	}
	
	//TC_03
	@And("^user click on view icon and file gets display$")
	public void user_click_on_view_icon_and_file_gets_display() throws Throwable 
	{
		System.out.println("user click on view icon");
		//clickOn("ViewEye1","");
		viewDoc("ViewEye",6);		
		Thread.sleep(1000);		
		//wd.findElement(By.cssSelector("body")).sendKeys(Keys.CONTROL +"\t");
		//Switch to current selected tab's content.
	   //wd.switchTo().defaultContent(); 	
		System.out.println("Back to old tab");
	}
	//TC_03
	@And("^user click on download icon and uploaded file gets downloaded$")
	public void user_click_on_download_icon_and_uploaded_file_gets_downloaded() throws Throwable 
	{
		System.out.println("user click on view icon");
		clickOn("DowView1","");
		verifyDownload("TexPayerDetails");
		/*Thread.sleep(2000);
		clickOn("DowView2","");
		verifyDownload("TexPayerDetails");
		Thread.sleep(2000);
		clickOn("DowView3","");
		verifyDownload("TexPayerDetails");
		Thread.sleep(2000);
		clickOn("DowView4","");
		verifyDownload("TexPayerDetails");
		Thread.sleep(2000);
		clickOn("DowView5","");
		verifyDownload("TexPayerDetails");
		Thread.sleep(2000);
		clickOn("DowView6","");
		verifyDownload("TexPayerDetails");
		Thread.sleep(2000);*/
	}

	//TC_04
	@And("^user click on Reject button and popup gets display$")
	public void user_click_on_Reject_button_and_popup_gets_display() throws Throwable 
	{
		System.out.println("user click on Reject Button");
		clickOn("BReject","");
		Thread.sleep(2000);
	}
	//TC_04
	@And("^user enter reason for rejection \"([^\"]*)\"$")
	public void user_enter_reason_for_rejection(String value) throws Throwable 
	{
		System.out.println("user enter Reason for Reject");
		//Sunmit Locator to found and enter value also
		type("ReasonCommentEdit",value);
		Thread.sleep(2000);
	}
	//TC_04
	@And("^user click on Submit button$")
	public void user_click_on_Submit_button() throws Throwable 
	{
		clickOn("CommentSubmit","");
		Thread.sleep(2000);
		//Assert.assertTrue(wd.findElement(By.xpath("//button[@title='Preview']")).isDisplayed());
		
		String expectedMessage = "Added rejection comment successfully";
		String message = wd.findElement(By.xpath("//*[@class='toast-top-right toast-container']")).getText();
		Assert.assertTrue(message.contains(expectedMessage));
		Thread.sleep(2000);
		System.out.println("user click on Submit button");
		
	}
	//TC_05
	@Then("^user click on Additional Clarification/Document Needed$")
	public void user_click_on_Additional_Clarification_Document_Needed() throws Throwable 
	{
		System.out.println("user click on Additional Clarification"); 
		clickOn("AdditionalClarification","");
		Thread.sleep(20000);
	}
	//TC_05
	@Then("^user entered comment for required document \"([^\"]*)\"$")
	public void user_entered_comment_for_required_document(String value) throws Throwable 
	{
		System.out.println("user enter comment for document");
		type("AdditionalInput",value);
		Thread.sleep(2000);
		clickOn("AdditionalInputSendButton","");
		Thread.sleep(2000);
	}
	//TC_05
	@Then("^user click on on hold button$")
	public void user_click_on_on_hold_button() throws Throwable 
	{
		System.out.println("user click on hold button");		
		clickOn("BHold","");
		Thread.sleep(2000);
		String expectedMessage = "Added On Hold comment successfull";
		String message = wd.findElement(By.xpath("//*[@class='toast-top-right toast-container']")).getText();
		Assert.assertTrue(message.contains(expectedMessage));
		Thread.sleep(2000);
		System.out.println("user see message for on hold");
	}
	//TC_07
	@And("^user click on Approve and Continue$")
	public void user_click_on_Approve_and_Continue() throws Throwable 
	{
		clickOn("BApproveContinue","");
		/*String expectedMessage = "Form Submmitted successfully!";
		String message = wd.findElement(By.xpath("//*[@class='toast-top-right toast-container']")).getText();
		Assert.assertTrue(message.contains(expectedMessage));
		Thread.sleep(2000);
		System.out.println("user submit the form ");*/
	}
	
	//TC_07
	@And("^user see the certificate and click on download$")
	public void user_see_the_certificate_and_click_on_download() throws Throwable 
	{
		
		String expectedMessage = "File not Downloaded";
		//String message = wd.findElement(By.xpath("//*[@class='toast-top-right toast-container']")).getText();
		Assert.assertEquals(expectedMessage.contains(expectedMessage), false);		
		// File name will come when certificate will download 
		clickOn("DownoadCertificate","");
	}
	
	
	
}
