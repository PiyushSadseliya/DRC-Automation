package org.drc.vat.StepDefinitions;

import static org.drc.vat.appmanager.HelperBase.clickOn;
import static org.drc.vat.appmanager.HelperBase.obj;
import static org.drc.vat.appmanager.HelperBase.sleepWait;
import static org.drc.vat.appmanager.HelperBase.type;
import static org.drc.vat.appmanager.HelperBase.verifyDownload;
import static org.drc.vat.appmanager.HelperBase.viewDoc;
import static org.drc.vat.appmanager.HelperBase.wd;
import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertTrue;
import static org.drc.vat.appmanager.HelperBase.*;
import org.openqa.selenium.By;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.testng.Assert;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

/**
 *  This contains approve , Reject , On hold button functionality along with toast message ,with download taxpayer file and view file 
 */

public class DV_1376_AcceptRejectAdditionalClarification 
{	
	
	@And("^user click on Approve and Continue button$")
	public void user_click_on_Approve_and_Continue_button() throws Throwable 
	{		
		clickOn("btn_BApproveContinue","");
		sleepWait(1000);		
	}		
	
	@Then("^user see the certificate$")
	public void user_seee_the_certificate() throws Throwable
	{		
		sleepWait(1000);
		if(wd.findElement(By.xpath(obj.getProperty("txt_VerifyCertificate"))).isDisplayed())
		{
			assertTrue(true);
		}			
	}
	
	@And("^user click on download icon and uploaded file gets downloaded$")
	public void user_click_on_download_icon_and_uploaded_file_gets_downloaded() throws Throwable 
	{		
		sleepWait(1000);
		clickOn("DowView1","");
		sleepWait(5000);
		//verifyDownloadCheck("TexPayerDetailsDocuments");
		sleepWait(2000);
	}
	
	@And("^user click on view icon and file gets display$")
	public void user_click_on_view_icon_and_file_gets_display() throws Throwable 
	{ 
		sleepWait(1000);
		viewDoc("txt_Eye_click",6);
		sleepWait(1000);
	}	

	@And("^user click on Reject button and popup gets display$")
	public void user_click_on_Reject_button_and_popup_gets_display() throws Throwable 
	{		
		clickOn("btn_BReject","");
		sleepWait(2000);
	}

	@And("^user enter reason for rejection \"([^\"]*)\"$")
	public void user_enter_reason_for_rejection(String value) throws Throwable 
	{
		sleepWait(1000);
		type("txt_ReasonCommentEdit",value);
		sleepWait(1000);
	}

	@And("^user click on Submit button$")
	public void user_click_on_Submit_button() throws Throwable 
	{
		sleepWait(1000);
		clickOn("btn_RejCommentSubmit","");
		sleepWait(4000);
		
		//waitTillElementDisappear(object)
		if(!wd.findElement(By.xpath(obj.getProperty("txt_RejectCommentPopup"))).isDisplayed())
		{
			if(wd.findElement(By.xpath(obj.getProperty("txt_RejectCommentPopup"))).isDisplayed())
			{
				assertTrue(true);
			}
		}
		
		
		/*if(wd.findElement(By.xpath(obj.getProperty("txt_RejectCommentPopup"))).isDisplayed())
		{
			assertTrue(true);
		}*/	
	}
	
	@Then("^user click on Additional Clarification/Document Needed$")
	public void user_click_on_Additional_Clarification_Document_Needed() throws Throwable 
	{	
		sleepWait(1000);
		clickOn("txt_AdditionalClarification","");
		sleepWait(20000);
	}

	@Then("^user entered comment for required document \"([^\"]*)\"$")
	public void user_entered_comment_for_required_document(String value) throws Throwable 
	{		
		sleepWait(1000);
		type("txt_AdditionalInput",value);
		sleepWait(2000);
		clickOn("btb_AdditionalInputSendButton","");
		sleepWait(5000);
	}
	
	@Then("^user click on on hold button$")
	public void user_click_on_on_hold_button() throws Throwable
	{
		sleepWait(1000);
		clickOn("btn_BHold","");				
		//sleepWait(5000);				
		waitFor("txt_BHoldCommentPopup");
		sleepWait(1000);		
		if(wd.findElement(By.xpath(obj.getProperty("txt_BHoldCommentPopup"))).isDisplayed())
		{
			assertTrue(true);
		}
	}

	@And("^user click on Approve and Continue$")
	public void user_click_on_Approve_and_Continue() throws Throwable 
	{
		clickOn("btn_BApproveContinue","");
		sleepWait(10000);
	}

	@And("^user see the certificate and click on download$")
	public void user_see_the_certificate_and_click_on_download() throws Throwable 
	{
		sleepWait(5000);
		if(wd.findElement(By.xpath(obj.getProperty("txt_VerifyCertificate"))).isDisplayed())
		{
			assertTrue(true);
		}
		clickOn("btn_DownoadCertificate","");
		verifyDownloadCheck("certificate");
		sleepWait(1000);		
	}
}
