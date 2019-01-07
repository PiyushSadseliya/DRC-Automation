package org.drc.vat.StepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import static org.drc.vat.appmanager.HelperBase.wd;
import static org.testng.Assert.assertEquals;
import static org.drc.vat.appmanager.HelperBase.sleepWait;
import static org.drc.vat.appmanager.HelperBase.frenchToIndian;

import java.math.BigInteger;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import static org.drc.vat.appmanager.HelperBase.clickOn;
import static org.drc.vat.appmanager.HelperBase.elementText;
import static org.drc.vat.appmanager.HelperBase.type;
import static org.drc.vat.appmanager.HelperBase.waitUntilElementFound;

import org.apache.xmlbeans.impl.store.Saaj;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.testng.asserts.SoftAssert;
/*
 * Based on the selection of the Pending Amount of age brackets the officer can 
 * assign the pending VAT amount to be collected to the Collection officer
 *  
 * 
 * 
 */

public class DebtManagementUnassignedDebt {
	SoftAssert sassert = new SoftAssert();
	String pendingamount;
	public static String totalDebtAmount=null;
	@Given("^\"([^\"]*)\"\"([^\"]*)\"DGI \"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"should be logged in to the internal portal$")
	public void dgi_should_be_logged_in_to_the_internal_portal(String arg1, String arg2, String arg3, String arg4, String arg5, String arg6) throws Throwable {
/*    	ChromeOptions options = new ChromeOptions();
    	options.setExperimentalOption("plugins.always_open_pdf_externally", true);
    	
    	ChromeOptions co = new ChromeOptions();
    	Map<String,Object> prefs = new HashMap<>();
    	prefs.put("plugins.always_open_pdf_externally", true);
    	co.setExperimentalOption("prefs", prefs);
    	

         
        wd = new ChromeDriver(co);

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
		  sleepWait(5000);*/

	}

	@When("^Clicked on pending amount for \"([^\"]*)\"$")
	public void clicked_on_pending_amount_for(String arg1) throws Throwable {
		//By pending_href =By.xpath("//td[1]/div[text()='0-3 Months']/following::a");
		sleepWait(2000);
		WebElement pendinglink=wd.findElement(By.xpath("//td/div[text()='0-3 Months']/following::a"));
		pendingamount=pendinglink.getText();
		pendinglink.click();



	}


	@Then("^user is on Pending debts$")
	public void user_is_on_Pending_debts() throws Throwable {
		sleepWait(5000);	
		 assertEquals(elementText("txt_heading",""),"Debt Management");
		sleepWait(2000);

	}
	@Then("^selects unassigned debt and selects the officer and closes the popup window$")
	public void selects_unassigned_debt_and_selects_the_officer_and_closes_the_popup_window() throws Throwable {
		List <WebElement> record = wd.findElements(By.xpath("//tr"));
		if(record.size()>1) {
			clickOn("slash","tr/following::label");
			sleepWait(1000);
			clickOn("btn_assignofficer","");
			wd.manage().timeouts().implicitlyWait(2,TimeUnit.SECONDS);
			clickOn("select_officer","");
			 assertEquals(wd.findElement(By.xpath("//input[@type='radio']")).isSelected(),true);
			clickOn("btn_close","");
			wd.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS);
			 assertEquals(elementText("txt_heading",""), "Debt Management");	    

		}

	}
	@Then("^Date selection should be disabled and should be same as debt management$")
	public void date_selection_should_be_disabled_and_should_be_same_as_debt_management() throws Throwable {
		assertEquals(wd.findElement(By.xpath("//h6[text()='Upto Date: ']/following::input")).isEnabled(),false);
	}
	@Then("^clicks on \"([^\"]*)\" column on Debt Management$")
	public void clicks_on_column_on_Debt_Management(String arg1) throws Throwable {
		sleepWait(2000);
		clickOn("slash","table//span[text()='"+arg1+"']/following::span");
		sleepWait(3000);

	}

	@Then("^\"([^\"]*)\" should be in ascending order$")
	public void should_be_in_ascending_order(String arg1) throws Throwable {
		sleepWait(2000);
		List <WebElement> records = wd.findElements(By.xpath("//tbody/tr"));
		//System.out.println(records.size());
		if(records.size()>1) {
			if(arg1.equalsIgnoreCase("NITVA")) {
				Double a =new Double(wd.findElement(By.xpath("//tbody/tr[1]/td[2]")).getText());
	//			System.out.println(a);
				Double b =new Double(wd.findElement(By.xpath("//tbody/tr["+records.size()+"]/td[2]")).getText());		   
		//		System.out.println(b);
				assertEquals(true, asccomp(a, b));

			}
			if(arg1.equalsIgnoreCase("Others")) {
				Double a = Double.parseDouble(frenchToIndian(wd.findElement(By.xpath("//tbody/tr[1]/td[6]")).getText()));
			//	System.out.println(a);
				Double b = Double.parseDouble(frenchToIndian(wd.findElement(By.xpath("//tbody/tr["+records.size()+"]/td[6]")).getText()));		
			//	System.out.println(b);
				assertEquals(true, asccomp(a, b));

			}
			if(arg1.equalsIgnoreCase("Total")) {
				Double a = Double.parseDouble(frenchToIndian(wd.findElement(By.xpath("//tbody/tr[1]/td[7]")).getText()));
			//	System.out.println(a);
				Double b = Double.parseDouble(frenchToIndian(wd.findElement(By.xpath("//tbody/tr["+records.size()+"]/td[7]")).getText()));		    	
		//		System.out.println(b);
				assertEquals(true, asccomp(a, b));

			}
			if(arg1.equalsIgnoreCase("7-12 Months ")||arg1.equalsIgnoreCase("0-3 Months")||arg1.equalsIgnoreCase("24 Months and Above")||arg1.equalsIgnoreCase("13-24 Months")||arg1.equalsIgnoreCase("4-6 Months")) {
				Double a = Double.parseDouble(frenchToIndian(wd.findElement(By.xpath("//tbody/tr[1]/td[5]")).getText()));
			//	System.out.println(a);
				Double b = Double.parseDouble(frenchToIndian(wd.findElement(By.xpath("//tbody/tr["+records.size()+"]/td[5]")).getText()));	
			//	System.out.println(b);
				assertEquals(true, asccomp(a, b));

			}
			if(arg1.equalsIgnoreCase("City")) {
				String a = wd.findElement(By.xpath("//tbody/tr[1]/td[4]")).getText();
				String  b = wd.findElement(By.xpath("//tbody/tr["+records.size()+"]/td[4]")).getText();	    	
/*				System.out.println(a);
				System.out.println(b);*/
				if(a.compareToIgnoreCase(b)<=0) {
					 assertEquals(true, true);
				}else {
					 assertEquals(true, false,"Not in Ascending Order");
				}
			}
			if(arg1.equalsIgnoreCase("TaxPayer")) {
				String a = wd.findElement(By.xpath("//tbody/tr[1]/td[3]")).getText();
				String  b = wd.findElement(By.xpath("//tbody/tr["+records.size()+"]/td[3]")).getText();	    	
/*				System.out.println(a);
				System.out.println(b);*/
				if(a.compareToIgnoreCase(b)<=0) {
					assertEquals(true, true);
				}else {
					assertEquals(true, false,"Not in Ascending Order");
				}
			}

		}
		sleepWait(2000);

	}



	@Then("^\"([^\"]*)\" should be in descending order$")
	public void should_be_in_descending_order(String arg1) throws Throwable {
		List <WebElement> records = wd.findElements(By.xpath("//tbody/tr"));
		if(records.size()>1) {
			if(arg1.equalsIgnoreCase("NITVA")) {
				Long a =new Long(wd.findElement(By.xpath("//tbody/tr[1]/td[2]")).getText());
				Long b =new Long(wd.findElement(By.xpath("//tbody/tr["+records.size()+"]/td[2]")).getText());		    
/*				System.out.println(a);
				System.out.println(b);*/
				 assertEquals(true, desccomp(a, b));		    	
			}
			if(arg1.equalsIgnoreCase("Others")) {
				Double a = Double.parseDouble(frenchToIndian(wd.findElement(By.xpath("//tbody/tr[1]/td[6]")).getText()));
				Double b = Double.parseDouble(frenchToIndian(wd.findElement(By.xpath("//tbody/tr["+records.size()+"]/td[6]")).getText()));		    	
/*				System.out.println(a);
				System.out.println(b);*/
				 assertEquals(true, desccomp(a, b));		    	
			}
			if(arg1.equalsIgnoreCase("Total")) {
				Double a = Double.parseDouble(frenchToIndian(wd.findElement(By.xpath("//tbody/tr[1]/td[7]")).getText()));
				Double b = Double.parseDouble(frenchToIndian(wd.findElement(By.xpath("//tbody/tr["+records.size()+"]/td[7]")).getText()));		    	
/*				System.out.println(a);
				System.out.println(b);*/
				 assertEquals(true, desccomp(a, b));		    	
			}
			if(arg1.equalsIgnoreCase("TaxPayer")) {
				String a = wd.findElement(By.xpath("//tbody/tr[1]/td[3]")).getText();
				String  b = wd.findElement(By.xpath("//tbody/tr["+records.size()+"]/td[3]")).getText();	    	
/*				System.out.println(a);
				System.out.println(b);*/

				if(a.compareToIgnoreCase(b)>=0) {
					 assertEquals(true, true);
				}else{
					 assertEquals(true, false,"Not in Descending Order");
				}
			}
			if(arg1.equalsIgnoreCase("City")) {
				String a = wd.findElement(By.xpath("//tbody/tr[1]/td[4]")).getText();
				String  b = wd.findElement(By.xpath("//tbody/tr["+records.size()+"]/td[4]")).getText();	    
/*				System.out.println(a);
				System.out.println(b);*/

				if(a.compareToIgnoreCase(b)>=0) {
					 assertEquals(true, true);
				}else {
					 assertEquals(true, false,"Not in Descending Order");
				}
			}

			if(arg1.equalsIgnoreCase("7-12 Months ")||arg1.equalsIgnoreCase("0-3 Months")||arg1.equalsIgnoreCase("24 Months and Above")||arg1.equalsIgnoreCase("13-24 Months")||arg1.equalsIgnoreCase("4-6 Months")) {
				Double a = Double.parseDouble(wd.findElement(By.xpath("//tbody/tr[1]/td[5]")).getText());
				Double b = Double.parseDouble(wd.findElement(By.xpath("//tbody/tr["+records.size()+"]/td[5]")).getText());		   
/*				System.out.println(a);
				System.out.println(b);*/
				assertEquals(true, desccomp(a, b));		    	
			}			
		}

	}



	@Then("^Clicks on Filter dropdown button$")
	public void clicks_on_Filter_dropdown_button() throws Throwable {
		clickOn("btn_filter","");
	}

	@Then("^Search by TaxPayer Name \"([^\"]*)\" and Records should be displayed$")
	public void search_by_TaxPayer_Name_and_Records_should_be_displayed(String arg1) throws Throwable {
		clickOn("drpdwnfilterby_txpayer", "");
		clickOn("filterbytpayer", "");		
		type("input_search_tpprofile",arg1);
		clickOn("btn_searchage","");		
		
		sleepWait(5000);
		waitUntilElementFound("vchkbx_selectall", "");
		List <WebElement> records = wd.findElements(By.xpath("//tbody/tr"));
		//System.out.println(records.size());
		assertEquals(records.size(), 1);
		assertEquals(elementText("txt_tpname",""), arg1);
	

	}
	@Then("^user Clicks on View button on Debt Managemnt and is on Taxpayer profile$")
	public void user_Clicks_on_View_button_on_Debt_Managemnt_and_is_on_Taxpayer_profile() throws Throwable {
		List <WebElement> records = wd.findElements(By.xpath("//tbody/tr"));
		if(records.size()>0) {
			wd.findElement(By.xpath("//tbody/tr/td[8]//child::button")).click();
		}
		sleepWait(2000);
		assertEquals(elementText("txt_heading",""),"Taxpayer Details");
	}

	@Then("^Clicks previous Button on Taxpayer profile and is on Debt Management$")
	public void clicks_previous_Button_on_Taxpayer_profile_and_is_on_Debt_Management() throws Throwable {
		sleepWait(5000);
		clickOn("btn_prev","");
		sleepWait(5000);
		assertEquals(elementText("txt_heading",""),"Debt Management");
	}
	@Then("^user clicks on Previous Button on Debt Unassigned and is on Debt Management List$")
	public void user_clicks_on_Previous_Button_on_Debt_Unassigned_and_is_on_Debt_Management_List() throws Throwable {
		clickOn("btn_prev","");
		sleepWait(2000);
		 assertEquals(elementText("txt_heading",""),"Debt Management");
		//wd.findElement(By.xpath("//h6[text()='Upto Date:']/following::input")).isEnabled();

	}
	@Then("^Total amount for that particular\"([^\"]*)\" period  should  be displayed in  ageing bracket \\(FC\\) tile$")
	public void total_amount_for_that_particular_period_should_be_displayed_in_ageing_bracket_FC_tile(String arg1) throws Throwable {
		List <WebElement> records = wd.findElements(By.xpath("//tbody/tr"));
		String totalamt=elementText("div","[contains(text(),'"+arg1+"')]/preceding-sibling::div").replace(".", "").replace(",", ".");	  
		double amount = 0;		  
		//System.out.println(records.size());
		for(int i=0;i<records.size();i++) {
			Double l =new Double(wd.findElement(By.xpath("//tr["+i+"+1]/td[5]")).getText().replace(".", "").replace(",", "."));
			amount = amount + l;    		  
		}


		assertEquals(String.valueOf(amount), totalamt);

	}
	@Then("^Total amount of remaining age bracket should  be displayed in Others \\(FC\\) tile$")
	public void total_amount_of_remaining_age_bracket_should_be_displayed_in_Others_FC_tile() throws Throwable {
		List <WebElement> records = wd.findElements(By.xpath("//tbody/tr"));
		String totalamt=elementText("div","[contains(text(),'Others(FC)')]/preceding-sibling::div").replace(".", "").replace(",", ".");	  
		double amount = 0;		  
		for(int i=0;i<records.size();i++) {
			Double l =new Double(wd.findElement(By.xpath("//tr["+i+"+1]/td[6]")).getText().replace(".", "").replace(",", "."));
			amount = amount + l;    		  
		}

		assertEquals(String.valueOf(amount), totalamt);
	}
	@Then("^Total amount should  be displayed including respective \"([^\"]*)\"ageing bracket \\(FC\\)\\+ Other \\(FC\\)$")
	public void total_amount_should_be_displayed_including_respective_ageing_bracket_FC_Other_FC(String arg1)throws Throwable {
		Double agebkamt=Double.parseDouble(elementText("div","[contains(text(),'Others(FC)')]/preceding-sibling::div").replace(".", "").replace(",", "."));	  
		
		Double otheramt=Double.parseDouble(elementText("div","[contains(text(),'"+arg1+"')]/preceding-sibling::div").replace(".", "").replace(",", "."));	

		Double l = agebkamt+otheramt;
	assertEquals(elementText("div","[contains(text(),'Total')]/preceding-sibling::div"),String.valueOf(l));

	}
	@Then("^Selects \"([^\"]*)\" from debt age$")
	public void selects_from_debt_age(String arg1) throws Throwable {
		clickOn("slash","input[@type='search']/following::span");
		sleepWait(5000);
		clickOn("span","[text()='"+arg1+"']");

	}
	@Then("^Column should be \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
	public void column_should_be(String arg1, String arg2, String arg3, String arg4, String arg5, String arg6, String arg7) throws Throwable {
		assertEquals(elementText("slash","th[2]"),arg1);
		assertEquals(elementText("slash","th[3]"),arg2);
		assertEquals(elementText("slash","th[4]"),arg3);
		assertEquals(elementText("slash","th[5]"),arg4);
		assertEquals(elementText("slash","th[6]"),arg5);
		assertEquals(elementText("slash","th[7]"),arg6);
		assertEquals(elementText("slash","th[8]"),arg7);	

	}
	@Then("^Enter value \"([^\"]*)\"in the from value range$")
	public void enter_value_in_the_from_value_range(String arg1) throws Throwable {
		type("txtbx_from",arg1);	    
	}
	@Then("^click on search button Records should be displayed in \"([^\"]*)\" as per From \"([^\"]*)\" value$")
	public void click_on_search_button_Records_should_be_displayed_in_as_per_From_value(String agebkt, String from) throws Throwable {
		clickOn("btn_searchage","");
		sleepWait(2000);	  
		if(agebkt.contains("months")) {
			List <WebElement> months = wd.findElements(By.xpath("//tr/td[5]"));
			for(int i =0;i<months.size();i++) {

				if(Integer.parseInt(frenchToIndian(months.get(i).getText()))>=Integer.parseInt(from)) {
					 assertEquals(true, true);
				}else {
					 assertEquals(true, false);
				}

			}
		}
		if(agebkt.equalsIgnoreCase("Others")) {
			List <WebElement> months = wd.findElements(By.xpath("//tr/td[6]"));
			for(int i =0;i<months.size();i++) {

				if(Integer.parseInt(months.get(i).getText())>=Integer.parseInt(from)) {
					 assertEquals(true, true);
				}else {
					 assertEquals(true, false);
				}

			}
		}
		if(agebkt.equalsIgnoreCase("Total")) {
			List <WebElement> months = wd.findElements(By.xpath("//tr/td[7]"));
			for(int i =0;i<months.size();i++) {

				if(Integer.parseInt(months.get(i).getText())>=Integer.parseInt(from)) {
					 assertEquals(true, true);
				}else {
					 assertEquals(true, false);
				}

			}
		}

	}
	@Then("^Enter value \"([^\"]*)\"in the to value range$")
	public void enter_value_in_the_to_value_range(String arg1) throws Throwable {
		type("txtbx_to",arg1);	    
	}
	@Then("^click on search button Records should be displayed in \"([^\"]*)\" as per To\"([^\"]*)\" value$")
	public void click_on_search_button_Records_should_be_displayed_in_as_per_To_value(String agebkt, String to) throws Throwable {
		clickOn("btn_searchage","");
		sleepWait(8000);	  
		if(agebkt.contains("Months")) {
			List <WebElement> months = wd.findElements(By.xpath("//tr/td[5]"));
			for(int i =0;i<months.size();i++) {

				if(Double.parseDouble(frenchToIndian(months.get(i).getText()))<=Double.parseDouble(to)) {
					 assertEquals(true, true);
				}else {
					 assertEquals(true, false);
				}

			}
		}
		if(agebkt.equalsIgnoreCase("Others")) {
			List <WebElement> months = wd.findElements(By.xpath("//tr/td[6]"));
			for(int i =0;i<months.size();i++) {

				if(Double.parseDouble(frenchToIndian(months.get(i).getText()))<=Double.parseDouble(to)) {
					 assertEquals(true, true);
				}else {
					 assertEquals(true, false);
				}

			}
		}
		if(agebkt.equalsIgnoreCase("Total")) {
			List <WebElement> months = wd.findElements(By.xpath("//tr/td[7]"));
			for(int i =0;i<months.size();i++) {

				if(Double.parseDouble(frenchToIndian(months.get(i).getText()))<=Double.parseDouble(to)) {
					 assertEquals(true, true);
				}else {
					 assertEquals(true, false);
				}

			}
		}
	}


@Then("^if keeps blank in From and To value range, Search button should be disabled$")
public void if_keeps_blank_in_From_and_To_value_range_Search_button_should_be_disabled() throws Throwable {
  assertEquals(false, wd.findElement(By.xpath("//button[@title='search ']")).isEnabled());
}
@Then("^user enters uses first records in the to filter the records click again on filter option to reset the previously filtered records$")
public void user_enters_uses_first_records_in_the_to_filter_the_records_click_again_on_filter_option_to_reset_the_previously_filtered_records()  throws Throwable {
   List <WebElement> records = wd.findElements(By.xpath("//tr"));
   if(records.size()>0) {
	   
	   String nitva = elementText("slash","td[2]");
	   sleepWait(2000);
	  clickOn("btn_filter","");
	   sleepWait(2000);
	   type("input_search_tpprofile",nitva);
	   sleepWait(2000);
	   clickOn("btn_search","");
	   sleepWait(2000);
	   List <WebElement> recordF = wd.findElements(By.xpath("//tr")); 
	   if(recordF.size()==1) {
		 assertEquals(elementText("slash","td[2]"), nitva);		  
	   }
	   clickOn("btn_filter","");
	  
	   sleepWait(2000);
	   clickOn("btn_reset", "");
	   sleepWait(5000);
	   List <WebElement> ele = wd.findElements(By.xpath("//tr"));
assertEquals(ele.size(), records.size());
	   
   }
   
}
@Then("^Click on Last button on debt pending it should be on last page$")
public void click_on_Last_button_on_debt_pending_it_should_be_on_last_page() throws Throwable {
 if(wd.findElement(By.xpath("//a[contains(text(),'Last')]")).isEnabled()) {
	 wd.findElement(By.xpath("//a[contains(text(),'Last')]")).click();
		sleepWait(1500);
 }
}
@Then("^click on First button it should be on First page of pending debt$")
public void click_on_First_button_it_should_be_on_First_page_of_pending_debt() throws Throwable {
	 if(wd.findElement(By.xpath("//a[contains(text(),'First')]")).isEnabled()) {
		 wd.findElement(By.xpath("//a[contains(text(),'First')]")).click();
			sleepWait(1500);
	 }
}
@Then("^click on next button it should be second page of pendign debt$")
public void click_on_next_button_it_should_be_second_page_of_pendign_debt() throws Throwable {
	 if(wd.findElement(By.xpath("//span[@class='fa fa-caret-left']/parent::a")).isEnabled()) {
		 wd.findElement(By.xpath("//span[@class='fa fa-caret-right']/parent::a")).click();	
		sleepWait(1500);
		assertEquals(wd.findElement(By.xpath("//a[contains(text(),'2')]")).isEnabled(), true);
}
	 
}@Then("^Click on previous button it should be First page of pending Debt$")
public void click_on_previous_button_it_should_be_First_page_of_pending_Debt() throws Throwable {	
   
    if(wd.findElement(By.xpath("//span[@class='fa fa-caret-left']/parent::a")).isEnabled()) {
    	 clickOn("btn_prevpg_tprofile","");
    	 sleepWait(3000);
    	// WebElement celemnet= wd.findElement(By.xpath("//li[@class='page-item active ng-star-inserted']"));
    	// assertEquals(celemnet.getText(),"1");
    		//sleepWait(1500);
    }
    		}

@Then("^user selects all the records for assigning all the records should be selected$")
public void user_selects_all_the_records_for_assigning_all_the_records_should_be_selected()throws Throwable {
clickOn("chkbx_select_all","");
sleepWait(1500);
 List<WebElement> ele=wd.findElements(By.xpath("//td//input[@type='checkbox']"));
 for(int i=0;i<ele.size();i++) {
assertEquals(ele.get(i).isSelected(),true);
 }
}
@Then("^click on assign button$")
public void click_on_assign_button() throws Throwable {
   clickOn("btn_assignofficer", "");
   sleepWait(2000);
assertEquals(elementText("txt_collectionofficer",""), "Collection Officers");
}
@Then("^click on save button ,It should be disabled$")
public void click_on_save_button_It_should_be_disabled() throws Throwable {
	sleepWait(2000);
		assertEquals(wd.findElement(By.xpath("//button[contains(text(),'Save')]")).isEnabled(), false);
		clickOn("btn_close", "");
		}

@Then("^Search by TaxPayer Name \"([^\"]*)\" and assigns to officer and is on Case Management$")
public void search_by_TaxPayer_Name_and_assigns_to_officer_and_is_on_Case_Management(String arg1)throws Throwable {
	clickOn("btn_filter","");
	clickOn("drpdwnfilterby_txpayer", "");
	sleepWait(2000);
	clickOn("filterbytpayer", "");		
	sleepWait(2000);
	type("input_search_tpprofile",arg1);
	clickOn("btn_searchage","");	
	   sleepWait(2000);
	   clickOn("chkbx_selectfirst","");	 
	   sleepWait(2000);
	   totalDebtAmount=elementText("txt_int","");
	   sleepWait(2000);
	   clickOn("btn_assignofficer","");
	   
	   sleepWait(2000);
	 assertEquals(elementText("txt_collectionofficer", ""), "Collection Officers");
	   sleepWait(2000);
	   clickOn("select_officer","");
	   sleepWait(2000);
	  clickOn("btn_save","");
	  sleepWait(8000);
	  //assertEquals(elementText("txt_heading", ""), "Case Management");
}
private boolean desccomp(Double a, Double b) {
	// TODO Auto-generated method stub
	return a>=b;
}
private boolean desccomp(Long a, Long b) {
	// TODO Auto-generated method stub
	return a>=b;
}
private boolean asccomp(Double a, Double b) {
	// TODO Auto-generated method stub
	return a<=b;
}
private boolean asccomp(Long a, Long b) {
	// TODO Auto-generated method stub
	return a<=b;
}


}





