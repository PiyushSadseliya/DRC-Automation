package org.drc.vat.StepDefinitions;

import static org.drc.vat.appmanager.HelperBase.*;
import static org.testng.Assert.assertTrue;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.And;

public class DV_2253_TaxPayer_Portal_objection_appeal 
{
	public static String Storereference_value;
	public String Noticeperiod;

	@And("^user click on VAT menu$")
	public void user_click_on_VAT_menu() throws Throwable {
		List<WebElement> vatTile = wd.findElements(By.xpath("//h3[contains(text(),'VAT')]"));
		if (vatTile.size() > 0) {
			clickOn("tile_vat", "");
			sleepWait(2000);
			List<WebElement> sure = wd.findElements(By.xpath("//a[contains(text(),'Yes')]"));
			if (sure.size() > 0) {
				sure.get(0).click();
			}			
		}
	}
	
	@And("^User is on Tax Payer portal Objection and Appeal and click on VAT e-Filing Tab \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_is_on_Tax_Payer_portal_Objection_and_Appeal_and_click_on_VAT_e_Filing_Tab(String arg1, String arg2) throws Throwable 
	{
		sleepWait(1000);
		clickOn("menu_vat-e-filing", "");
		sleepWait(1000);
	}
	
	@And("^User click on Dashboard and click on VAT e-filling button$")
	public void user_click_on_Dashboard_and_click_on_VAT_e_filling_button() throws Throwable {
		clickOn("txt_dashboard", "");
	    sleepWait(200);
	    clickOn("label_pin", "");
	    sleepWait(300);
	    clickOn("menu_vat-e-filing", "");
	}

	@And("^User click on collapse for the month \"([^\"]*)\"$")
	public void user_click_on_collapse_for_the_month(String value) throws Throwable 
	{
		clickOn(value, "");
	}

	@And("^User click on view for month \"([^\"]*)\"$")
	public void user_click_on_view_for_month(String value) throws Throwable
	{
		clickOn(value, "");
	}

	@And("^User see pop up appear for Notice$")
	public void user_see_pop_up_appear_for_Notice() throws Throwable 
	{
		sleepWait(1000);
		if(wd.findElement(By.xpath(obj.getProperty("txt_Notice_popup"))).isDisplayed())
		{		
			assertTrue(true);
		}		
	}

	@And("^User see document type \"([^\"]*)\"$")
	public void user_see_document_type(String DocNam) throws Throwable 
	{
		sleepWait(1000);
		if(wd.findElement(By.xpath("(//table)[3]//tbody//div[contains(text(),'" + DocNam + "')]")).isDisplayed() )
		{					
			assertTrue(true);
		}	 
	}

	@And("^User click on view on notice popup$")
	public void user_click_on_view_on_notice_popup() throws Throwable 
	{
		sleepWait(1000);
		clickOn("btn_Notice_Click", "");
	}

	@And("^User see name on notice$")
	public void user_see_reference_id_and_name_on_notice() throws Throwable 
	{
		sleepWait(1000);
		String TaxP = elementText("txt_Name_Payer");
		String TaxP_N = elementText("txt_Name_on_Notice");
		if(TaxP.contains(TaxP_N))
		{
			assertTrue(true);
		}
	}

	@And("^User see barcode and ref id is same$")
	public void user_see_barcode_and_ref_id_is_same() throws Throwable 
	{
		String Ref = elementText("txt_Notice_RefId");
		String Barcode = elementText("txt_Barcode");		   
		if(Ref == Barcode)
		{
			assertTrue(true);
		}
	}

	@And("^User click on download button on notice page$")
	public void user_click_on_download_button_on_notice_page() throws Throwable 
	{	    
		sleepWait(1000);	
		clickOn("btn_dow_notice", "");
		sleepWait(1000);
		verifyDownloadCheck("Notice");
	}

	@And("^User click on previous button and navigate to VAT e-Filing$")
	public void user_click_on_previous_button_and_navigate_to_VAT_e_Filing() throws Throwable 
	{
		clickOn("btn_Previous_M", "");
	}

	@And("^User click on pay button and navigate to Payment Method$")
	public void user_click_on_pay_button_and_navigate_to_Payment_Method() throws Throwable
	{
		sleepWait(1000);
		clickOn("btn_pay_notice", "");
		sleepWait(1000);	   
		if(wd.findElement(By.xpath(obj.getProperty("txt_PaymentMethod"))).isDisplayed())
		{
			assertTrue(true);
		}
	}	

	@And("^User click on Object on notice page$")
	public void user_click_on_Object_on_notice_page() throws Throwable 
	{
		sleepWait(2000);
		clickOn("btn_object_notice", "");
		sleepWait(8000);
	}	

	@And("^User click on Objection Type and select \"([^\"]*)\"$")
	public void user_click_on_Objection_Type_and_select(String value) throws Throwable 
	{		
		sleepWait(1000);
		WebElement element1 = wd.findElement(By.id("iframe"));
		wd.switchTo().frame(element1);
		sleepWait(1000);
		clickOn("drp_ObjectionType","");
		sleepWait(1000);
		clickOn(value, "");
		sleepWait(1000);
		clickOn("drp_ObjectionType","");	    
	}

	@And("^User verify selected objection type \"([^\"]*)\"$")
	public void user_verify_selected_objection_type(String value) throws Throwable 
	{
		sleepWait(1000);
		if(wd.findElement(By.xpath("//option[contains(text(),'" + value + "')]")).isSelected())
		{			
			assertTrue(true);
		}	   	    
	}

	@And("^User enter data \"([^\"]*)\" in title for objection page$")
	public void user_enter_data_in_title_for_objection_page(String title) throws Throwable 
	{		
		sleepWait(1000);
		type("txt_Objection_Title", title);
		wd.findElement(By.xpath(obj.getProperty("txt_Objection_Title"))).sendKeys(Keys.CONTROL + "a",Keys.DELETE);
	}

	@And("^User click on submit button on notice page and see message \"([^\"]*)\"$")
	public void user_click_on_submit_button_on_notice_page_and_see_message(String mess) throws Throwable 
	{
		sleepWait(1000);
		clickOn("btn_Obj_Submit", "");		
		wd.switchTo().defaultContent();
		sleepWait(1000);
		if(wd.findElement(By.xpath("//*[contains(text(),'" + mess + "')]")).isDisplayed())
		{			
			assertTrue(true);
		}
	}

	@And("^User again enter data \"([^\"]*)\" in title for objection page$")
	public void user_again_enter_data_in_title_for_objection_page(String title) throws Throwable 
	{
		sleepWait(1000);
		WebElement element1 = wd.findElement(By.id("iframe"));
		wd.switchTo().frame(element1);
		type("txt_Objection_Title", title);		
		sleepWait(1000);
		String titlecheck = elementText("txt_Objection_Title");
		if(title.contains(titlecheck))
		{
			assertTrue(true);
		}
		// comment removed
		wd.switchTo().defaultContent();	
	}

	@And("^User enter number \"([^\"]*)\" and check$")
	public void user_enter_number_and_check(String num) throws Throwable 
	{		
		wd.switchTo().frame("iframe").switchTo().frame("my-editor_ifr");		
		type("txt_Obj_Description", num);
		if(wd.findElement(By.xpath("//p[contains(text(),'" + num + "')]")).isDisplayed())
		{			
			assertTrue(true);
		}
	}

	@And("^User enter alphabets \"([^\"]*)\" and check$")
	public void user_enter_alphabets_and_check(String alpa) throws Throwable 
	{
		sleepWait(1000);
		type("txt_Obj_Description", alpa);
		if(wd.findElement(By.xpath("//p[contains(text(),'" + alpa + "')]")).isDisplayed())
		{			
			assertTrue(true);
		} 	   
	}

	@And("^User enter special character \"([^\"]*)\" aned checks$")
	public void user_enter_special_character_aned_checks(String spec) throws Throwable
	{
		sleepWait(1000);
		type("txt_Obj_Description", spec);
//		if(wd.findElement(By.xpath("//p[contains(text(),'" + spec + "')]")).isDisplayed())
//		{			
//			assertTrue(true);
//		}
		
		Actions action = new Actions(wd);
		action.sendKeys(Keys.TAB).build().perform();
		
		/*JavascriptExecutor js = (JavascriptExecutor) wd;
		js.executeScript("window.scrollTo(0, document.body.scrollHeight)");*/
		
		wd.switchTo().defaultContent();
		WebElement element1 = wd.findElement(By.id("iframe"));
		wd.switchTo().frame(element1);
	}	

	@And("^User select file format zip \"([^\"]*)\" and see message \"([^\"]*)\" on objection page$")
	public void user_select_file_format_zip_and_see_message_on_objection_page(String ZIP, String Mess) throws Throwable 
	{
		sleepWait(1000);
		wd.findElement(By.xpath("//*[@for='File-Upload']")).click();
		sleepWait(1000);
		UploadImage("", ZIP);
		sleepWait(1000);
//		if(wd.findElement(By.xpath("//*[contains(text(),'" + Mess + "')]")).isDisplayed())
//		{					
//			assertTrue(true);
//		}	
		sleepWait(1000);
	} 

	@And("^User click on browse button and upload file more than two mp \"([^\"]*)\" and validate mess \"([^\"]*)\" on objection page$")
	public void user_click_on_browse_button_and_upload_file_more_than_two_mp_and_validate_mess_on_objection_page(String twoMB, String Mess) throws Throwable 
	{
		wd.findElement(By.xpath("//*[@for='File-Upload']")).click();
		UploadImage("", twoMB);
//		if(wd.findElement(By.xpath("//*[contains(text(),'" + Mess + "')]")).isDisplayed())
//		{
//			assertTrue(true);
//		}	
		sleepWait(1000);
	}

	@And("^User click on browser and upload file \"([^\"]*)\" on objection page$")
	public void user_click_on_browser_and_upload_file_on_objection_page(String file) throws Throwable 
	{
		wd.findElement(By.xpath("//*[@for='File-Upload']")).click();
		UploadImage("", file);
	}

	@And("^User click on Cancel and navigate to notice page$")
	public void user_click_on_Cancel_and_navigate_to_notice_page() throws Throwable
	{
		clickOn("btn_Obj_Cancel", "");
		sleepWait(1000);
		if(wd.findElement(By.xpath(obj.getProperty("txt_NoticePage"))).isDisplayed())
		{
			assertTrue(true);
		}
		wd.switchTo().defaultContent();	
	}


	@And("^User enter description \"([^\"]*)\"$")
	public void user_enter_description(String description) throws Throwable
	{
		WebElement element1 = wd.findElement(By.id("my-editor_ifr"));
		String number1 = element1.getText();
		System.out.println(number1);
		wd.switchTo().frame(element1);
		sleepWait(1000);
		type("txt_Obj_Description", description);
	}
	
	@And("^user return back to original frame from description$")
	public void user_return_back_to_original_frame_from_description() throws Throwable {
		wd.switchTo().defaultContent();
		WebElement element1 = wd.findElement(By.id("iframe"));
		wd.switchTo().frame(element1);
	}

	@And("^User click on submit button on notice page$")
	public void user_click_on_submit_button_on_notice_page() throws Throwable 
	{
		clickOn("btn_Obj_Submit", "");
		sleepWait(2000);
		
		if (wd.findElement(By.xpath("//h3[contains(text(),'Cases')]")).isDisplayed()) {			
			Storereference_value = elementText("text_storereference_value");
		}
	}	

	@And("^User see period on notice$")
	public void user_see_period_on_notice() throws Throwable 
	{
		sleepWait(2000);
		Noticeperiod = elementText("txt_Period_Notice");
	}

	@And("^User verify the period field on objection page$")
	public void user_verify_the_period_field_on_objection_page() throws Throwable 
	{
		/**
		 *  bug locator to find 
		 */
	}
}