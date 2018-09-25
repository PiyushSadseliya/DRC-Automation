package org.drc.vat.StepDefinitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import static org.drc.vat.appmanager.HelperBase.*;
import static org.testng.Assert.assertTrue;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

public class Internal_Portal_Objection_Appeal 
{
	@Given("^User is on Internal portal Objection and Appeal \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_is_on_Internal_portal_Objection_and_Appeal(String arg1, String arg2) throws Throwable 
	{
		System.out.println(arg1);
		System.out.println(arg2);
	   
	}

	@And("^User click on Case Management$")
	public void user_click_on_Case_Management() throws Throwable 
	{		
		clickOn("txt_CaseManagement", "");
		Thread.sleep(1000);
	}

	@And("^User see UI of case management$")
	public void user_see_UI_of_case_management() throws Throwable 
	{
		System.out.println("Ui of case managemnt");
	   
	}

	@And("^User see UI of Objection page$")
	public void user_see_UI_of_Objection_page() throws Throwable 
	{
		System.out.println("Ui of objection page");
	   
	}

	@And("^User click on filter by on case management and click on \"([^\"]*)\"$")
	public void user_click_on_filter_by_on_case_management_and_click_on(String value) throws Throwable 
	{
	   //Thread.sleep(3000);
		Thread.sleep(500);
	   clickOn("drp_filter_CaseManagement", "");
	   Thread.sleep(500);
	   clickOn(value, "");
	   Thread.sleep(500);
	   
	}

	@And("^User user click on case type \"([^\"]*)\"$")
	public void user_user_click_on_case_type(String value) throws Throwable 
	{
		Thread.sleep(1000);
		clickOn("drp_filter_CaseType", "");
		Thread.sleep(1000);
		clickOn(value, "");
		Thread.sleep(1000);
	   
	}

	@And("^User see search result \"([^\"]*)\"$")
	public void user_see_search_result(String result) throws Throwable 
	{
		Thread.sleep(2000);
		if(wd.findElement(By.xpath("(//div[contains(text(),'" + result + "')])[1]")).isDisplayed())
		{					
			assertTrue(true);
		}	
	   
	}

	@And("^User again click on filter by \"([^\"]*)\"$")
	public void user_again_click_on_filter_by(String status) throws Throwable 
	{
		 Thread.sleep(1000);
		 clickOn("drp_filter_CaseManagement", "");
		 Thread.sleep(1000);
		 clickOn(status, "");
	   
	}

	@And("^User type \"([^\"]*)\" in type here and click on search$")
	public void user_type_in_type_here_and_click_on_search(String type) throws Throwable 
	{
		Thread.sleep(1000);
		type("txt_TypeHere", type);
		Thread.sleep(1000);
		clickOn("btn_SearchFX", "");
	   
	}

	@And("^User see entered status \"([^\"]*)\"$")
	public void user_see_entered_status(String status) throws Throwable 
	{
		Thread.sleep(1000);
		if(wd.findElement(By.xpath("(//span[contains(text(),'" + status + "')])[1]")).isDisplayed() )
		{					
			assertTrue(true);
		}
	   
	}

	@And("^User see entered priority \"([^\"]*)\"$")
	public void user_see_entered_priority(String priority) throws Throwable 
	{
		Thread.sleep(1000);
		if(wd.findElement(By.xpath("(//div[contains(text(),'" + priority + "')])[1]")).isDisplayed() )
		{					
			assertTrue(true);
		}
	   
	}

	@And("^User see entered name \"([^\"]*)\"$")
	public void user_see_entered_name(String name) throws Throwable 
	{
		Thread.sleep(1000);
		if(wd.findElement(By.xpath("(//span[contains(text(),'Laxman')])[1]")).isDisplayed() )
		{					
			assertTrue(true);
		}
	   
	}

	@And("^User Select From date on case management$")
	public void user_Select_From_date_on_case_management() throws Throwable 
	{
		Thread.sleep(1000);
		clickOn("txt_From_Date", "");
		Thread.sleep(2000);
		
	    datePicker("2018-08-14");
	    Thread.sleep(1000);
	   
	}

	@And("^User Select To date on case management$")
	public void user_Select_To_date_on_case_management() throws Throwable 
	{
		Thread.sleep(1000);
		clickOn("txt_To_Date", "");
		Thread.sleep(1000);
		datePicker("2018-09-13");
		 Thread.sleep(1000);
	   
	}

	@And("^User see date on case management \"([^\"]*)\"$")
	public void user_see_date_on_case_management(String date) throws Throwable 
	{
		if(wd.findElement(By.xpath("(//div[contains(text(),'" + date + "')])[1]")).isDisplayed() )
		{					
			assertTrue(true);
		}
	}

	@And("^User Type id \"([^\"]*)\"$")
	public void user_Type_id(String id) throws Throwable 
	{
		//type(id, "");
		Thread.sleep(2000);
		type("txt_TypeHere",id);
	   
	}

	@And("^User see case type \"([^\"]*)\"$")
	public void user_see_case_type(String caseType) throws Throwable
	{
		if(wd.findElement(By.xpath("(//div[contains(text(),'" + caseType + "')])[1]")).isDisplayed() )
		{					
			assertTrue(true);
		}
	   
	}

	@And("^User see TaxPayer \"([^\"]*)\"$")
	public void user_see_TaxPayer(String taxpayer) throws Throwable 
	{
		if(wd.findElement(By.xpath("(//div[contains(text(),'" + taxpayer + "')])[1]")).isDisplayed() )
		{					
			assertTrue(true);
		} 
	   
	}

	@And("^User see creation date \"([^\"]*)\"$")
	public void user_see_creation_date(String date) throws Throwable 
	{
		if(wd.findElement(By.xpath("(//div[contains(text(),'" + date + "')])[1]")).isDisplayed() )
		{					
			assertTrue(true);
		} 
	   
	}
	
	@And("^User see ageing \"([^\"]*)\"$")
	public void user_see_ageing(String arg1) throws Throwable 
	{
		/*if(wd.findElement(By.xpath("//tbody/tr/td[6]/div")).isDisplayed() )
		{					
			assertTrue(true);
		} */
		
		int sum = 1;
		WebElement element3 = wd.findElement(By.xpath("//tbody/tr/td[6]/div"));		
		String number3 = element3.getText();
		int result3 = Integer.parseInt(number3);		
		
		System.out.println(sum);					
		if(sum ==result3)
		{
			assertTrue(true);
		}	   		
		
	}


	@And("^User see TaxOfficer \"([^\"]*)\"$")
	public void user_see_TaxOfficer(String officer) throws Throwable 
	{
		if(wd.findElement(By.xpath("(//span[contains(text(),'" + officer + "')])[1]")).isDisplayed() )
		{					
			assertTrue(true);
		} 
	   
	}

	@And("^User click on priority$")
	public void user_click_on_priority() throws Throwable 
	{
		Thread.sleep(5000);
		WebElement element1 = wd.findElement(By.id("iframe"));
		String number1 = element1.getText();
		System.out.println(number1);
		wd.switchTo().frame(element1);
		
		clickOn("drp_Priority_click", "");   
		//Thread.sleep(1000);
	   
	}

	@And("^User select priority \"([^\"]*)\"$")
	public void user_select_priority(String value) throws Throwable 
	{		
		clickOn(value, "");
		Thread.sleep(1000);	   
	}

	@And("^User see validation message for changing priority$")
	public void user_see_validation_message_for_changing_priority() throws Throwable 
	{		
		wd.switchTo().parentFrame();
		if(wd.findElement(By.xpath("//*[contains(text(),'Object updated successfully')]")).isDisplayed() )
		{					
			assertTrue(true);
		} 			   
		
	}

	@And("^User click on previous button$")
	public void user_click_on_previous_button() throws Throwable
	{
		
		Thread.sleep(1000);
	    clickOn("btn_previousInternal", "");
	}

	@And("^User see priority is changed \"([^\"]*)\"$")
	public void user_see_priority_is_changed(String value) throws Throwable
	{
		if(wd.findElement(By.xpath("(//div[contains(text(),'" + value +"')])[1]")).isDisplayed() )
		{					
			assertTrue(true);
		} 
	   
	}

	@And("^User click on officer name and type \"([^\"]*)\" and click on search$")
	public void user_click_on_officer_name_and_type_and_click_on_search(String value) throws Throwable 
	{
		clickOn("drp_filter_CaseManagement", "");
		Thread.sleep(1000);
		clickOn("drp_Officer_Click", "");
		Thread.sleep(1000);
		type("TypeHere",value);
		Thread.sleep(1000);
		clickOn("btn_SearchFX", "");
	   
	}

	@And("^User click on manage dropdown on case management and click on reassign$")
	public void user_click_on_manage_dropdown_on_case_management_and_click_on_reassign() throws Throwable 
	{
		Thread.sleep(500);
		clickOn("btn_ManageDown", "");
	   Thread.sleep(500);
	   clickOn("txt_Reassign_CaseMan", "");
	}

	@And("^User click on officer list and click on \"([^\"]*)\"$")
	public void user_click_on_officer_list_and_click_on(String value) throws Throwable 
	{
	    clickOn("drp_officer_caseMan", "");
	    Thread.sleep(1000);
	    clickOn(value, "");
	}

	@And("^User click on right tick$")
	public void user_click_on_right_tick() throws Throwable
	{
		Thread.sleep(1000);
		clickOn("btn_TickRight", "");
		
	   
	}
	// message to check 
	@And("^User see validation mesage \"([^\"]*)\"$")
	public void user_see_validation_mesage(String message) throws Throwable 
	{
		if(wd.findElement(By.xpath("(//div[contains(text(),'" + message +"')])[1]")).isDisplayed() )
		{					
			assertTrue(true);
		} 
	   
	}

	@And("^User again click on manage dropdown on case management and click on reassign$")
	public void user_again_click_on_manage_dropdown_on_case_management_and_click_on_reassign() throws Throwable 
	{	    
		clickOn("btn_ManageDown", "");
		Thread.sleep(1000);
		clickOn("txt_Reassign_CaseMan", "");
		Thread.sleep(1000);
		
		//clickOn("drp_officer_caseMan", "");
	   
		
		
	}
	@And("^User again click on officer list and select \"([^\"]*)\"$")
	public void user_again_click_on_officer_list_and_select(String value) throws Throwable 
	{
		clickOn("drp_officer_caseMan", "");
	    Thread.sleep(1000);
	    clickOn(value, "");  
		
	}

	@And("^User clik on wrong tick$")
	public void user_clik_on_wrong_tick() throws Throwable 
	{
		clickOn("btn_Tickwrong", "");
	}
// executed
	@And("^User see officer is not changed \"([^\"]*)\"$")
	public void user_see_officer_is_not_changed(String officer) throws Throwable
	{
		if(wd.findElement(By.xpath("(//span[contains(text(),'" + officer +"')])[1]")).isDisplayed() )
		{					
			assertTrue(true);
		} 
	   
	}

	@And("^User click on select action$")
	public void user_click_on_select_action() throws Throwable
	{
		Thread.sleep(5000);
		WebElement element1 = wd.findElement(By.id("iframe"));
		String number1 = element1.getText();
		System.out.println(number1);
		wd.switchTo().frame(element1);   
		
		clickOn("txt_Select_Action", "");
	}

	@And("^User select reject$")
	public void user_select_reject() throws Throwable 
	{
	    clickOn("drp_Reject_CaseMan", "");	   
	}

	@And("^login in taxpayer portal$")
	public void login_in_taxpayer_portal() throws Throwable 
	{
		wd.close();
		wd= new ChromeDriver();
		wd.manage().window().maximize();
		wd.get("http://103.249.120.58:8066");		
	   
	}

	@And("^User see case id \"([^\"]*)\"$")
	public void user_see_case_id(String id) throws Throwable
	{
		if(wd.findElement(By.xpath("(//span[contains(text(),'" + id +"')])[1]")).isDisplayed() )
		{					
			assertTrue(true);
		} 
	   
	}

	@And("^User see NITVA \"([^\"]*)\"$")
	public void user_see_NITVA(String nitva) throws Throwable 
	{
		if(wd.findElement(By.xpath("(//div[contains(text(),'" + nitva +"')])[1]")).isDisplayed() )
		{					
			assertTrue(true);
		}     
	   
	}

	@And("^User see period \"([^\"]*)\"$")
	public void user_see_period(String arg1) throws Throwable 
	{
		String expectedMessage = "December,2018";
		Thread.sleep(2000);
		WebElement element = wd.findElement(By.xpath("//section/div[3]/input"));
		JavascriptExecutor jse = (JavascriptExecutor)wd;
		Object message = jse.executeScript("return arguments[0].value", element);
		System.out.println(message.toString());		
 		Assert.assertTrue(message.toString().contains(expectedMessage));
	   
	}

	@And("^User see name \"([^\"]*)\"$")
	public void user_see_name(String name) throws Throwable 
	{
		if(wd.findElement(By.xpath("(//span[contains(text(),'" + name +"')])[1]")).isDisplayed() )
		{					
			assertTrue(true);
		} 
	   
	}

	@And("^User see date \"([^\"]*)\"$")
	public void user_see_date(String name) throws Throwable 
	{    
		if(wd.findElement(By.xpath("(//small[contains(text(),'" + name +"')])[1]")).isDisplayed() )
		{					
			assertTrue(true);
		} 
	}

	@And("^User see Objection Type \"([^\"]*)\"$")
	public void user_see_Objection_Type(String value) throws Throwable 
	{		
		WebElement element1 = wd.findElement(By.id("iframe"));
		String number1 = element1.getText();
		System.out.println(number1);
		wd.switchTo().frame(element1);
		
		String sum="Assessment";
		WebElement element3 = wd.findElement(By.xpath("//option[contains(text(),'" + value + "')]"));
		String number3 = element3.getText();				
		
		System.out.println(number3);					
		
		if(sum.equals(number3))
		{
			assertTrue(true);
		}	   
	}

	@And("^User see Ref ID \"([^\"]*)\"$")
	public void user_see_Ref_ID(String value) throws Throwable 
	{
		
		/*String sum="O18091400000002";
		
		WebElement element3 = wd.findElement(By.xpath("//input[@formcontrolname='issueReferenceId']')]"));		
		String number3 = element3.getText();				
		
		System.out.println(sum);					
		
		if(sum.equals(number3))
		{
			assertTrue(true);
		}*/
		String expectedMessage = "O18091400000002";
		Thread.sleep(2000);
		WebElement element = wd.findElement(By.xpath("//input[@formcontrolname='issueReferenceId']"));
		JavascriptExecutor jse = (JavascriptExecutor)wd;
		Object message = jse.executeScript("return arguments[0].value", element);
		System.out.println(message.toString());		
 		Assert.assertTrue(message.toString().contains(expectedMessage));
	   
	}

	@And("^User see Title \"([^\"]*)\"$")
	public void user_see_Title(String arg1) throws Throwable 
	{
		/*String sum="object for assessment";
		WebElement element3 = wd.findElement(By.xpath("//input[@formcontrolname='title']"));		
		String number3 = element3.getText();				
		
		System.out.println(sum);					
		
		if(sum.equals(number3))
		{
			assertTrue(true);
		}
	   */
		String expectedMessage = "object for assessment ";
		Thread.sleep(2000);
		WebElement element = wd.findElement(By.xpath("//input[@formcontrolname='title']"));
		JavascriptExecutor jse = (JavascriptExecutor)wd;
		Object message = jse.executeScript("return arguments[0].value", element);
		System.out.println(message.toString());		
 		Assert.assertTrue(message.toString().contains(expectedMessage));
	}

	@And("^User see Description \"([^\"]*)\"$")
	public void user_see_Description(String des) throws Throwable 
	{
		
		//p[contains(text(),'object for assessment')]

		/*String sum="object for assessment";
		WebElement element3 = wd.findElement(By.xpath("//input[@formcontrolname='title']"));		
		String number3 = element3.getText();				
		
		System.out.println(sum);					
		
		if(sum.equals(number3))
		{
			assertTrue(true);
		}*/
		WebElement element1 = wd.findElement(By.id("my-editor_ifr"));
		String number1 = element1.getText();
		System.out.println(number1);
		wd.switchTo().frame(element1);
		
		if(wd.findElement(By.xpath("(//p[contains(text(),'" + des +"')])[1]")).isDisplayed() )
		{					
			assertTrue(true);
		} 
	}

	@And("^User see file upload \"([^\"]*)\"$")
	public void user_see_file_upload(String file) throws Throwable 
	{
		if(wd.findElement(By.xpath("(//p[contains(text(),'" + file +"')])[1]")).isDisplayed() )
		{					
			assertTrue(true);
		} 
	   
	}

	@And("^User click on Assign to$")
	public void user_click_on_Assign_to() throws Throwable 
	{
		WebElement element1 = wd.findElement(By.id("iframe"));
		String number1 = element1.getText();
		System.out.println(number1);
		wd.switchTo().frame(element1);
		clickOn("drp_Assigned_CaseMan", "");	   
	}

	@And("^User select officer \"([^\"]*)\"$")
	public void user_select_officer(String officer) throws Throwable
	{
		//option[contains(text(),'Kirti')]
		clickOn(officer, "");
	   
	}

	@And("^User see validation message$")
	public void user_see_validation_message() throws Throwable 
	{
		if(wd.findElement(By.xpath("//*[contains(text(),'Object updated successfully')]")).isDisplayed() )
		{					
			assertTrue(true);
		} 			       
	   
	}

	@And("^User click on attachment icon$")
	public void user_click_on_attachment_icon() throws Throwable 
	{
		clickOn("lbl_Attachment", "");
	   
	}

	@And("^User upload the file and click on upload button$")
	public void user_upload_the_file_and_click_on_upload_button() throws Throwable 
	{
		Thread.sleep(500);
		UploadImage("","C:\\Users\\admin\\Downloads\\Sales-and-Purchase-Transactions.xlsx");
		Thread.sleep(2000);
		clickOn("btn_Upload_CaseMan", "");
	   
	}

	@And("^User see upload message$")
	public void user_see_upload_message() throws Throwable 
	{
		if(wd.findElement(By.xpath("//*[contains(text(),'Object updated successfully')]")).isDisplayed() )
		{					
			assertTrue(true);
		} 
	   
	}
	//	doenload to see
	@And("^User click on download button and verify download file$")
	public void user_click_on_download_button_and_verify_download_file() throws Throwable 
	{
		clickOn("lbl_iconDown_CaseMan", "");
		verifyDownload("");
	   
	}

	@And("^User click on comment section on Attachments and comment section$")
	public void user_click_on_comment_section_on_Attachments_and_comment_section() throws Throwable 
	{
	 clickOn("txt_CommentAdd_CaseMAn", "");   
	   
	}

	@And("^User type comment \"([^\"]*)\"$")
	public void user_type_comment(String type) throws Throwable 
	{
		type("txt_CommentAdd_CaseMAn", type);
	   
	}

	@And("^User click on add comment button$")
	public void user_click_on_add_comment_button() throws Throwable 
	{
		clickOn("btn_AddComment", "");
	}

	@And("^User see comment added message$")
	public void user_see_comment_added_message() throws Throwable 
	{
		if(wd.findElement(By.xpath("//*[contains(text(),'Comment saved successfully')]")).isDisplayed() )
		{					
			assertTrue(true);
		} 
	}

	@And("^User click on cancel button on objection page$")
	public void user_click_on_cancel_button_on_objection_page() throws Throwable 
	{
		WebElement element1 = wd.findElement(By.id("iframe"));
		String number1 = element1.getText();
		System.out.println(number1);
		wd.switchTo().frame(element1);
	    clickOn("btn_Cancel_CaseMan", "");
	   
	}

	@And("^User navigate to Case Management list page$")
	public void user_navigate_to_Case_Management_list_page() throws Throwable
	{
		if(wd.findElement(By.xpath("//h3[contains(text(),'Case Management')]")).isDisplayed() )
		{					
			assertTrue(true);
		} 	   
	}

	@And("^User click on Transaction Detail button$")
	public void user_click_on_Transaction_Detail_button() throws Throwable 
	{
	    clickOn("btn_TransactionDetails", "");
	   
	}

	@And("^User navigate to Statement of transaction page$")
	public void user_navigate_to_Statement_of_transaction_page() throws Throwable 
	{		
		if(wd.findElement(By.xpath("//span[contains(text(),'Sales')]")).isDisplayed() )
		{					
			assertTrue(true);
		}
	   
	}

	@And("^User click on Logout$")
	public void user_click_on_Logout() throws Throwable 
	{
		clickOn("btn_logout", "");
	}

	
	@And("^User click on dropdown$")
	public void user_click_on_dropdown() throws Throwable 
	{
		Thread.sleep(1000);
		clickOn("drp_ObjectionType","");
	   
	}

	@And("^User click on previous button on objection page$")
	public void user_click_on_previous_button_on_objection_page() throws Throwable 
	{	    
	 clickOn("btn_Previous", "");  
	}
}
