package org.drc.vat.StepDefinitions;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import static org.drc.vat.appmanager.HelperBase.clickOn;
import static org.drc.vat.appmanager.HelperBase.type;
import static org.drc.vat.appmanager.HelperBase.elementText;
import static org.drc.vat.appmanager.HelperBase.drp_select;
import static org.drc.vat.appmanager.HelperBase.text;
public class SmokeSuiteSprint6 {

	@Given("^User is on given Page \"([^\"]*)\"$")
	public void user_is_on_given_Page(String Page) throws Throwable {
	    
	    
	    	clickOn("tab_assessment", "");
		    Thread.sleep(2000);
	/*	  String txt = elementText("label_manual_assessment");
		  System.out.println(txt);
		 if(elementText("label_manual_assessment").equals(Page))
		 {
		    Thread.sleep(5000);
		    System.out.println("Test");
		 }
		 else
		 {
			  System.out.println("Fail");
		 }*/
	}
	@When("^User Select \"([^\"]*)\" , \"([^\"]*)\" , \"([^\"]*)\"from drop-down$")
	public void user_Select_from_drop_down(String Period, String Year, String Filter) throws Throwable {
	    
       clickOn("drp_dwn_period","");
		clickOn("span","[contains(text(),'" + Period +"')]");
	//	clickOn("drp_dwn_year","");
	//	clickOn("span","[contains(text(),'" + Year +"')]");
		 clickOn("drp_dwn_filter","");
		   clickOn("span","[contains(text(),'" + Filter +"')]");
	    
	}

	@When("^Search for  Record from \"([^\"]*)\"$")
	public void search_for_Record_from(String SearchElement) throws Throwable {
	   clickOn("txt_search","");
	   type("txt_search",SearchElement);
	  // clickOn("span","[contains(text(),'" + SearchElement +"')]");
	    
	}

	@When("^Click on Search Button$")
	public void click_on_Search_Button() throws Throwable {
	    clickOn("btn_search","");    
	}

	@When("^Verify Record is Display or Not$")
	public void verify_Record_is_Display_or_Not() throws Throwable {
	    
	    
	}

	@When("^Check For the status from \"([^\"]*)\"$")
	public void check_For_the_status_from(String status) throws Throwable {
	    
	  String Status = elementText("text_status");
	  //  System.out.println(Status);
	    
	    if(status.equals(Status))
	    {
	    	System.out.println("Pass");
	    }
	    
}
	@When("^click on drp_select button$")
	public void click_on_drp_select_button() throws Throwable {
		Thread.sleep(2000);	
		
		String Nitva =elementText("text_nitva");
		System.out.println(Nitva);
		clickOn("drp_option","");
	}
	@When("^Click on  given \"([^\"]*)\"$")
	public void click_on_given(String Option) throws Throwable {
	   
	//	clickOn("drp_assess","");
		clickOn("span","[contains(text(),'" + Option +"')]");
	//	Thread.sleep(2000);
		
		
	}
	@When("^Click on sales_domestic icon , redirect to sales page and click on previous button$")
	public void click_on_sales_domestic_icon_redirect_to_sales_page_and_click_on_previous_button() throws Throwable {
	
	  //  clickOn("icon_sales_domestic","");
	    Thread.sleep(2000);
	    String Value = elementText("text_domestic");
	    if(Value.equals("Domestic Sales"))
	    {
	    	System.out.println("Pass");
	    }
	}

	@When("^Click on sales_export icon , redirect to sales page and click on previous button$")
	public void click_on_sales_export_icon_redirect_to_sales_page_and_click_on_previous_button() throws Throwable {
	  
	    
	}

	@When("^Click on sales_adjustment icon , redirect to sales page and click on previous button$")
	public void click_on_sales_adjustment_icon_redirect_to_sales_page_and_click_on_previous_button() throws Throwable {
	    
	    
	}

	@When("^Click on purchase_domestic icon , redirect to sales page and click on previous button$")
	public void click_on_purchase_domestic_icon_redirect_to_sales_page_and_click_on_previous_button() throws Throwable {
	    
	    
	}

	@When("^Click on purchase_export icon , redirect to sales page and click on previous button$")
	public void click_on_purchase_export_icon_redirect_to_sales_page_and_click_on_previous_button() throws Throwable {
	    
	    
	}

	@When("^Click on purchase_adjustment icon , redirect to sales page and click on previous button$")
	public void click_on_purchase_adjustment_icon_redirect_to_sales_page_and_click_on_previous_button() throws Throwable {
	    
	    
	}
}
