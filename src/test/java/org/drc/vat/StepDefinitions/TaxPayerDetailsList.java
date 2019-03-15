package org.drc.vat.StepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import static org.drc.vat.appmanager.HelperBase.clickOn;
import static org.drc.vat.appmanager.HelperBase.elementText;
import static org.drc.vat.appmanager.HelperBase.buttonEnabled;
import static org.drc.vat.appmanager.HelperBase.type;
import static org.drc.vat.appmanager.HelperBase.wd;
import static org.drc.vat.appmanager.HelperBase.elementDisplayed;
import static org.drc.vat.appmanager.HelperBase.sleepWait;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.testng.asserts.SoftAssert;
/*
 * 
 * The officer can see  the records of the tax payer whose nitva has been allocated
 * for The Status Rejected and On HOld Status officer cannot view the profile for particular user
 * only admin for now officer  is remaining
 * 
 * 
 */
public class TaxPayerDetailsList {
	String nif=null;
	SoftAssert sassert = new SoftAssert();
	String officer=null;
	String dp1=null;
	String dp2=null;
	static Boolean once=true;
	@Given("^\"([^\"]*)\"\"([^\"]*)\"the Officer\"([^\"]*)\" has logged in internal portal\"([^\"]*)\"\"([^\"]*)\"$")
	public void the_Officer_has_logged_in_internal_portal(String arg1, String arg2, String arg3, String arg4, String arg5) throws Throwable {
	      //login
		
		List <WebElement> vat =wd.findElements(By.xpath("//h3[contains(text(),'VAT')]"));
		if(!wd.getCurrentUrl().contains("8068")) {
		if(vat.size()>0) {
			vat.get(0).click();
			sleepWait(3000);
			List <WebElement> sure =wd.findElements(By.xpath("//a[contains(text(),'Sure')]"));
			
		}
		sleepWait(3000);
		if(wd.getWindowHandles().size()>0) {
			wd.switchTo().window(wd.getWindowHandles().toArray()[1].toString());
			}
	}
   
	}

	@When("^Clicks on Tax Payer Profile Menu item\"([^\"]*)\"$")
	public void clicks_on_Tax_Payer_Profile_Menu_item(String arg1)throws Throwable {
		sleepWait(3000);
		if(arg1.equalsIgnoreCase("admin")||arg1.equalsIgnoreCase("Taxofficer")) {
			officer=arg1;
			sassert.assertEquals(true,elementDisplayed("nav_tpprofile",""));
	      clickOn("nav_tpprofile","");
		}else {
			sassert.assertEquals(false,elementDisplayed("nav_tpprofile",""));
		}
	      
   
	}

	@Then("^officer is on Tax Payer Profile List$")
	public void officer_is_on_Tax_Payer_Profile_List() throws Throwable {     
		
		sassert.assertEquals(elementText("page_tpprofile",""),"Taxpayer Details");
	}

	@Then("^Tax Payer Profile Page should get displayed along with  the List of all Registered Tax Payer$")
	public void tax_Payer_Profile_Page_should_get_displayed_along_with_the_List_of_all_Registered_Tax_Payer() throws Throwable {
		List <WebElement> taxpayer= wd.findElements(By.xpath("//table/tbody/tr"));
		
		sassert.assertEquals(taxpayer.size()>0,true);
	
   
	}

	@Then("^Select the Option from the Filter by Dropdown as \"([^\"]*)\"$")
	public void select_the_Option_from_the_Filter_by_Dropdown_as(String arg1) throws Throwable {
	      clickOn("filterby_tpprofile","");
	      sleepWait(2000);
	      dp1=arg1;
	      List <WebElement> dropdownmenu=wd.findElements(By.cssSelector("ng-option ng-star-inserted"));
	      if(officer.equals("admin")) {
	    	  sassert.assertEquals(dropdownmenu.get(0),"All");
	    	  sassert.assertEquals(dropdownmenu.get(1),"NITVA");
	    	  sassert.assertEquals(dropdownmenu.get(2),"NIF");
	    	  sassert.assertEquals(dropdownmenu.get(3),"TaxPayer");
	    	  sassert.assertEquals(dropdownmenu.get(4),"BusinessType");
	    	  sassert.assertEquals(dropdownmenu.get(5),"TaxPayerCategory");
	    	  sassert.assertEquals(dropdownmenu.get(6),"Location");
	      }
	      if(officer.equals("Taxofficer")) {
	    	  sassert.assertEquals(dropdownmenu.get(0),"All");
	    	  sassert.assertEquals(dropdownmenu.get(1),"NITVA");
	    	  sassert.assertEquals(dropdownmenu.get(2),"NIF");
	    	  sassert.assertEquals(dropdownmenu.get(3),"TaxPayer");
	    	  sassert.assertEquals(dropdownmenu.get(4),"BusinessType");
	    	  sassert.assertEquals(dropdownmenu.get(5),"TaxPayerCategory");	    	 
	      }if(arg1.equals("All")) {	    	  
	    	     clickOn("general","span[contains(text(),'"+arg1+"')])[2]");
	      }else {
	      clickOn("span","[contains(text(),'"+arg1+"')]");
	      }
   
   
	}

	@Then("^Enter valid data in \"([^\"]*)\" Text Box and click on search icon Result should get filtered based on Input in Type Here Text box$")
	public void enter_valid_data_in_Text_Box_and_click_on_search_icon_Result_should_get_filtered_based_on_Input_in_Type_Here_Text_box(String arg1) throws Throwable {
	    if(dp1.equals("TaxPayerCategory")||dp1.equals("Business type")) {
	    	sleepWait(2000);
	    	clickOn("general","span[@class='ng-arrow'])[3]");
	    	clickOn("span","[text()='"+arg1+"']");
	    }else {
		type("input_search_tpprofile",arg1);
	    }	     
	      clickOn("btn_searchtprofile","");
	      if(dp1.equals("Business type")||dp1.equals("Location")||dp1.equals("TaxPayerCategory")) {
	    	  if(dp1.equals("Business type")){
	    		  List <WebElement> list1=wd.findElements(By.xpath("//td[5]"));
	    		  for(WebElement l:list1 ){
	    			  sassert.assertEquals(l.getText(),dp2);	  
	    		  }
	    	  }

	    	  if(dp1.equals("Location")){
	    		  List <WebElement> list1=wd.findElements(By.xpath("//td[6]"));
	    		  for(WebElement l:list1 ){
	    			  sassert.assertEquals(l.getText(),dp2);	  
	    		  }
	    	  }
	    	  if(dp1.equals("TaxPayerCategory")){
	    		  List <WebElement> list1=wd.findElements(By.cssSelector("data-table-row ng-star-inserted"));
	    		  

	    	  }
	      }
	      
	      List <WebElement> lis=wd.findElements(By.xpath("//*[@class='data-table-row ng-star-inserted']"));
	      sassert.assertEquals(lis.size(),1);
	      
   
	}

	@Then("^Validate the View Icon Functionality$")
	public void validate_the_View_Icon_Functionality() throws Throwable {
		nif=elementText("text_validatenif","");
		clickOn("btn_viewtpprofile","");
   
	}

	@Then("^Tax Payer details of the particular Tax Payer should be displayed$")
	public void tax_Payer_details_of_the_particular_Tax_Payer_should_be_displayed() throws Throwable {
		sassert.assertEquals(elementText("page_tpdetails",""),nif);
   
	}

	@Then("^Click on Previous Button on TaxPayerDetails page$")
	public void click_on_Previous_Button_on_TaxPayerDetails_page() throws Throwable {
	      clickOn("btn_prev","");
   
	}

	@Then("^User clicks on page button\"([^\"]*)\" other than first button ths page should be displayed$")
	public void user_clicks_on_page_button_other_than_first_button_ths_page_should_be_displayed(String arg1) throws Throwable {
	      clickOn("a","[contains(text(),'"+arg1+"')]");
   
	}

	@Then("^User click on page button \"([^\"]*)\" User should be on that page$")
	public void user_click_on_page_button_User_should_be_on_that_page(String arg1) throws Throwable {
		 clickOn("a","[contains(text(),'"+arg1+"')]");
		 
   
	}

	@Then("^User clicks on page button Next user should be second page$")
	public void user_clicks_on_page_button_Next_user_should_be_second_page() throws Throwable {
		clickOn("a","[contains(text(),'First')]");		
		sleepWait(2000);
		 clickOn("btn_nextpg_tprofile",""); 
		 sleepWait(2000);
		 
		 
		 
	}

	@Then("^User click on page button Previous button User should be on First Page$")
	public void user_click_on_page_button_Previous_button_User_should_be_on_First_Page() throws Throwable {
		sleepWait(2000);
		clickOn("btn_prevpg_tprofile","");
		sleepWait(2000);
   
	}

	@Then("^User click on page button Previous button,Previous button should be non-editable$")
	public void user_click_on_page_button_Previous_button_Previous_button_should_be_non_editable() throws Throwable {		
		sassert.assertEquals(buttonEnabled("btn_prevpg_tprofile",""), false);
   
	}

	@Then("^User click on page button Last button User should be on Last Page$")
	public void user_click_on_page_button_Last_button_User_should_be_on_Last_Page() throws Throwable {
		sassert.assertEquals(buttonEnabled("a","[contains(text(),'Last')]"), false);
		
   
	}

	@Then("^User Search using NITVA\"([^\"]*)\"$")
	public void user_Search_using_NITVA(String arg1) throws Throwable {
	      clickOn("filterby_tpprofile","");
	      sleepWait(2000);
	      clickOn("span","[contains(text(),'NITVA')]");
   
	}

	@Then("^Observes the details displayed in the list NIF\"([^\"]*)\"BusinessNmae/ApplicantName\"([^\"]*)\"Address\"([^\"]*)\"BusinessType\"([^\"]*)\"Taxoffice\"([^\"]*)\"$")
	public void observes_the_details_displayed_in_the_list_NIF_BusinessNmae_ApplicantName_Address_BusinessType_Taxoffice(String arg1, String arg2, String arg3, String arg4, String arg5) throws Throwable {
		sassert.assertEquals(elementText("slash","td[2]"),arg1);
		sassert.assertEquals(elementText("slash","td[3]"),arg2);
		sassert.assertEquals(elementText("slash","td[4]"),arg3);
		sassert.assertEquals(elementText("slash","td[5]"),arg4);
		sassert.assertEquals(elementText("slash","td[6]"),arg5);
		
   
	}

	@Then("^Observes Tax Office\"([^\"]*)\"field$")
	public void observes_Tax_Office_field(String arg1) throws Throwable {
		sassert.assertEquals(elementText("slash","td[6]"),arg1);
   
	}

	@Then("^Observes NITVA\"([^\"]*)\"field$")
	public void observes_NITVA_field(String arg1) throws Throwable {
		sassert.assertEquals(elementText("slash","td[1]"),arg1);
   
	}

	@Then("^User Search using NIF\"([^\"]*)\"$")
	public void user_Search_using_NIF(String arg1) throws Throwable {
		clickOn("filterby_tpprofile","");	 
		if(once) {
			
	      clickOn("span","[contains(text(),'NIF')]");
	      once=false;
	      }
	else {
		 clickOn("general","span[contains(text(),'NIF')])[2]"); 
		
	}
	      
	      type("input_search_tpprofile",arg1);
	      clickOn("btn_searchtprofile","");
   
	}

	@Then("^No record found Messages \"([^\"]*)\"should be displayed$")
	public void no_record_found_Messages_should_be_displayed(String arg1) throws Throwable {
		sassert.assertEquals(elementText("txt_norecd",""),arg1);
   
	}

	@Then("^Taxpayer Detail list shows NITVA\"([^\"]*)\"NIF\"([^\"]*)\"Taxpayer\"([^\"]*)\"Address\"([^\"]*)\"BusinessType\"([^\"]*)\"TaxOffice\"([^\"]*)\"$")
	public void taxpayer_Detail_list_shows_NITVA_NIF_Taxpayer_Address_BusinessType_TaxOffice(String arg1, String arg2, String arg3, String arg4, String arg5, String arg6) throws Throwable {
		sassert.assertEquals(elementText("slash","td[1]"),arg1);
		sassert.assertEquals(elementText("slash","td[2]"),arg2);
		sassert.assertEquals(elementText("slash","td[3]"),arg3);
		sassert.assertEquals(elementText("slash","td[4]"),arg4);
		sassert.assertEquals(elementText("slash","td[5]"),arg5);
		sassert.assertEquals(elementText("slash","td[5]"),arg6);
   
	}


}
