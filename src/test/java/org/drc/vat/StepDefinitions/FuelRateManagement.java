package org.drc.vat.StepDefinitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import static org.drc.vat.appmanager.HelperBase.clickOn;
import static org.drc.vat.appmanager.HelperBase.elementText;
import static org.drc.vat.appmanager.HelperBase.buttonEnabled;
import static org.drc.vat.appmanager.HelperBase.datePicker;
import static org.testng.Assert.assertEquals;
import static org.drc.vat.appmanager.HelperBase.type;
import static org.drc.vat.appmanager.HelperBase.getvalue;
import static org.drc.vat.appmanager.HelperBase.wd;
import static org.drc.vat.appmanager.HelperBase.frenchtoDouble;
import static org.drc.vat.appmanager.HelperBase.tofrench;
import static org.drc.vat.appmanager.HelperBase.waitFor;
import static org.drc.vat.appmanager.HelperBase.waitTillElementLocated;
import static org.drc.vat.appmanager.HelperBase.sleepWait;
import static org.drc.vat.appmanager.HelperBase.softAssert;
import static org.testng.Assert.assertTrue;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Sleeper;

import java.util.List;



import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
public class FuelRateManagement {
	SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd");
	SimpleDateFormat drcformat=new SimpleDateFormat("dd-MMM-yyyy");
	private static List <String>previousrate;
	private static List <String>currentrate;
	private static List <String>beforeupdatechangeinrate;
	private static List <String>afterupdaterate;
	private static List <String>afterUpdateChangedrate;
	private static Date futureDateSelected;
	private int fuelType=6;
	@Given("^The officer has logged in \"([^\"]*)\"\"([^\"]*)\"$")
	public void the_officer_has_logged_in(String arg1, String arg2) throws Throwable {
	    
	 
	}

	@When("^the user click on Fuel Rate Management$")
	public void the_user_click_on_Fuel_Rate_Management() throws Throwable {
	    
	 clickOn("nav_fuelmanagement", "");
	}

	@Then("^user is on \"([^\"]*)\"$")
	public void user_is_on(String page) throws Throwable {
		waitFor("btn_historicalRate");
		waitTillElementLocated("labelwait_petrol");
	    assertEquals(elementText("txt_heading",""), page); 
	 
	}

	@Then("^Contains Header Previous Rate$")
	public void contains_Header_Previous_Rate() throws Throwable {
	    previousrate=new ArrayList<String>();
	  List <WebElement>previosraterecords=wd.findElements(By.xpath("//td[3]"));
for(int i=0;i<fuelType;i++) {
	System.out.println("Previous rate"+previosraterecords.get(i).getText());
	if(previosraterecords.get(i).getText().equalsIgnoreCase("nil")) {
	previousrate.add("0");
	}else {
	previousrate.add(previosraterecords.get(i).getText());
	}
	}

	 
	}

	@Then("^The Change in Rate \\(CDF\\) column should be Previous Rate-Current Rate$")
	public void the_Change_in_Rate_CDF_column_should_be_Previous_Rate_Current_Rate() throws Throwable {
		beforeupdatechangeinrate=changedrate(currentrate,previousrate);
		  List <WebElement>chageninraterecords=wd.findElements(By.xpath("//td[4]"));
	  for(int i=0;i<fuelType;i++) {
		  System.out.println("Changed before rates screen"+chageninraterecords.get(i).getText());
		  System.out.println("Changed before rates calculated"+beforeupdatechangeinrate.get(i));
			assertEquals(chageninraterecords.get(i).getText(), beforeupdatechangeinrate.get(i));
			}
		
	 
	}

	@Then("^Contains header Current Rates$")
	public void contains_header_Current_Rates() throws Throwable {
		currentrate=new ArrayList<String>();
	  List <WebElement>currentraterecords=wd.findElements(By.xpath("//td[5]"));
	  for(int i=0;i<fuelType;i++) {
		  System.out.println("Current rate"+currentraterecords.get(i).getText());
	  		currentrate.add(currentraterecords.get(i).getText());	 
	}
}

	@Then("^Click on Historical Fuel rate button$")
	public void click_on_Historical_Fuel_rate_button() throws Throwable {
	    clickOn("btn_historicalRate", "");
	 
	}

	@Then("^user should be on Historical fuel rate and records should be in newest to oldest and of six months only\"([^\"]*)\"of rejection should be displayed\\.$")
	public void user_should_be_on_Historical_fuel_rate_and_records_should_be_in_newest_to_oldest_and_of_six_months_only_of_rejection_should_be_displayed(String rejectionmsg) throws Throwable {	    
		int recordsno=0; 
		waitTillElementLocated("waithistoricalpage");
		 List<WebElement> updatedOn=wd.findElements(By.xpath("//td[4]"));
		 if(updatedOn.size()>0) {
			 for(int i=0;i<=updatedOn.size();i++) {
				 System.out.println(updatedOn.get(i).getText());
				 if(updatedOn.get(i).getText().equals(drcformat.format(futureDateSelected))) {
					 recordsno=i+1;
					 break;
				 }
				 
			 }
		 }	
		 clickOn("select_rejected",recordsno+"]");
		 sleepWait(5000);
		 assertEquals(elementText("txt_fuelRejectionmsg",""), rejectionmsg);
		 clickOn("btn_close", "");
		 sleepWait(5000);
		 
		 
	}

	@Then("^click on previous button on historical page$")
	public void click_on_previous_button_on_historical_page() throws Throwable {
	    clickOn("btn_previousfuel", "");
	    waitTillElementLocated("waitfuelpage");
	}

	@Then("^user is on Fuel Rate List$")
	public void user_is_on_Fuel_Rate_List() throws Throwable {
	    
	 
	}

	@Then("^Click on Update button to update the fuel rate$")
	public void click_on_Update_button_to_update_the_fuel_rate() throws Throwable {
	    clickOn("btn_updatefuelrate", "");
	 
	}

	@Then("^Today should be selected$")
	public void today_should_be_selected() throws Throwable {
		clickOn("date_effective", "");
		Date todaysdate=new Date();
		datePicker(sdf.format(todaysdate));
		System.out.println(getvalue("txt_effectivedate",""));
		if (getvalue("txt_effectivedate","").equals(drcformat.format(todaysdate))) {
			assertEquals(false, true,"Today's date can be selected");
		}	 clickOn("btn_close", "");   
			 waitTillElementLocated("waitfuelpage");
			 clickOn("btn_updatefuelrate", "");
	 
	}

	@Then("^Selects previous date$")
	public void selects_previous_date() throws Throwable {
		clickOn("date_effective", "");
	   Calendar yesterday = Calendar.getInstance();
	   yesterday.add(Calendar.DATE, -1);
	   Date previousdate=yesterday.getTime();
	   datePicker(sdf.format(previousdate));	  
		if (getvalue("txt_effectivedate","").equals(drcformat.format(previousdate))) {
			assertEquals(false, true,"previous date can be selected");
		}
		 clickOn("btn_close", "");   
		 waitTillElementLocated("waitfuelpage");
		 clickOn("btn_updatefuelrate", "");
	 
	}

	@Then("^close the pop up$")
	public void close_the_pop_up() throws Throwable {
	 clickOn("btn_close", "");   
	 waitTillElementLocated("waitfuelpage");
	 
	}

	@Then("^Selects effective date of future date$")
	public void selects_effective_date_of_future_date() throws Throwable {
		waitTillElementLocated("waiteffectivedate");
		clickOn("date_effective", "");
		 Calendar futuredate = Calendar.getInstance();
		 futuredate.add(Calendar.DATE, 30);	 
		 futureDateSelected=futuredate.getTime();
		 datePicker(sdf.format(futureDateSelected));	   
	}
	@Then("^enter Fuel Rates of Petrol in basic\"([^\"]*)\" Rates are Excise\"([^\"]*)\" ,VAT\"([^\"]*)\",Fuel Tax\"([^\"]*)\",Royalty\"([^\"]*)\" and does Total$")
	public void enter_Fuel_Rates_of_Petrol_in_basic_Rates_are_Excise_VAT_Fuel_Tax_Royalty_and_does_Total(String petrolbasicrate, String excise, String VAT, String fuelTax, String Royalty) throws Throwable {
		waitFor("btn_savefuelmgmt");
		type("txtbx_basicfuelpetrol",petrolbasicrate);
		    double petrolrate=todouble(petrolbasicrate);
			double petrolExcise=petrolrate*todouble(excise)/100;
			double petrolVAT=petrolrate*todouble(VAT)/100;
			double petrolFuelTax =petrolrate*todouble(fuelTax)/100;
			double petrolRoyalty  =petrolrate*todouble(Royalty)/100;
			double petrolTotal =petrolrate+petrolExcise+petrolVAT+petrolFuelTax+petrolRoyalty;		
			List <WebElement>petroltype=wd.findElements(By.xpath("(//table)[2]//tr[1]//input[@disabled='true']"));			
			assertEquals(todouble(petroltype.get(0).getAttribute("value"))==todouble(convertToFourDotSeven(petrolExcise)),true);
			 assertEquals(todouble(petroltype.get(1).getAttribute("value"))==todouble(convertToFourDotSeven(petrolVAT)),true);			 
			 assertEquals(todouble(petroltype.get(2).getAttribute("value")),todouble(convertToFourDotSeven(petrolFuelTax)));
			 assertEquals(todouble(petroltype.get(3).getAttribute("value")),todouble(convertToFourDotSeven(petrolRoyalty)));
			 assertEquals(todouble(petroltype.get(4).getAttribute("value")),todouble(convertToFourDotSeven(petrolTotal)));
	}

	@Then("^enter Fuel Rates of Diesel in basic\"([^\"]*)\" Rates are Excise\"([^\"]*)\" ,VAT\"([^\"]*)\",Fuel Tax\"([^\"]*)\",Royalty\"([^\"]*)\" and does Total$")
	public void enter_Fuel_Rates_of_Diesel_in_basic_Rates_are_Excise_VAT_Fuel_Tax_Royalty_and_does_Total(String dieselbasicrate, String excise, String VAT, String fuelTax, String Royalty) throws Throwable {
		 type("txtbx_basicfueldiesel",dieselbasicrate);
		 double dieselrate=todouble(dieselbasicrate);
			double dieselExcise=dieselrate*todouble(excise)/100;
			double dieselVAT=dieselrate*todouble(VAT)/100;
			double dieselFuelTax =dieselrate*todouble(fuelTax)/100;
			double dieselRoyalty  =dieselrate*todouble(Royalty)/100;
			double dieselTotal =dieselrate+dieselExcise+dieselVAT+dieselFuelTax+dieselRoyalty;
			List <WebElement>dieseltype=wd.findElements(By.xpath("(//table)[2]//tr[2]//input[@disabled='true']"));			
			 assertEquals(todouble(dieseltype.get(0).getAttribute("value"))==todouble(convertToFourDotSeven(dieselExcise)),true);
			 assertEquals(todouble(dieseltype.get(1).getAttribute("value"))==todouble(convertToFourDotSeven(dieselVAT)),true);			 
			 assertEquals(todouble(dieseltype.get(2).getAttribute("value"))==todouble(convertToFourDotSeven(dieselFuelTax)),true);
			 assertEquals(todouble(dieseltype.get(3).getAttribute("value"))==todouble(convertToFourDotSeven(dieselRoyalty)),true);
			 assertEquals(todouble(dieseltype.get(4).getAttribute("value"))==todouble(convertToFourDotSeven(dieselTotal)),true);
	}

	@Then("^enter Fuel Rates of Kerosene in basic\"([^\"]*)\" Rates are Excise\"([^\"]*)\" ,VAT\"([^\"]*)\",Fuel Tax\"([^\"]*)\",Royalty\"([^\"]*)\" and does Total$")
	public void enter_Fuel_Rates_of_Kerosene_in_basic_Rates_are_Excise_VAT_Fuel_Tax_Royalty_and_does_Total(String kerosenebasicrate, String excise, String VAT, String fuelTax, String Royalty) throws Throwable {
		 type("txtbx_basicfuelkerosene",kerosenebasicrate);
		double kerosenerate=Double.parseDouble(kerosenebasicrate);
		double keroseneExcise=kerosenerate*todouble(excise)/100;
		double keroseneVAT=kerosenerate*todouble(VAT)/100;
		double keroseneFuelTax =kerosenerate*todouble(fuelTax)/100;
		double keroseneRoyalty  =kerosenerate*todouble(Royalty)/100;
		double keroseneTotal =kerosenerate+keroseneExcise+keroseneVAT+keroseneFuelTax+keroseneRoyalty;
		List <WebElement>kerosenetype=wd.findElements(By.xpath("(//table)[2]//tr[3]//input[@disabled='true']"));			
	assertEquals(todouble(kerosenetype.get(0).getAttribute("value"))==todouble(convertToFourDotSeven(keroseneExcise)),true);
		 assertEquals(todouble(kerosenetype.get(1).getAttribute("value"))==todouble(convertToFourDotSeven(keroseneVAT)),true);			 
		 assertEquals(todouble(kerosenetype.get(2).getAttribute("value"))==todouble(convertToFourDotSeven(keroseneFuelTax)),true);
		 assertEquals(todouble(kerosenetype.get(3).getAttribute("value"))==todouble(convertToFourDotSeven(keroseneRoyalty)),true);
		assertEquals(todouble(kerosenetype.get(4).getAttribute("value"))==todouble(convertToFourDotSeven(keroseneTotal)),true);
	}




	@Then("^click on Save button on update fuel rate popup\\.$")
	public void click_on_Save_button_on_update_fuel_rate_popup() throws Throwable {
		List<WebElement> totalfuelrate=wd.findElements(By.xpath("(//table)[2]//td[7]//input"));
		afterupdaterate=new ArrayList<String>();
		for(int i=0;i<fuelType;i++) {
			afterupdaterate.add(tofrench(todouble(totalfuelrate.get(i).getAttribute("value"))));
			System.out.println(afterupdaterate.get(i));
		}
	 clickOn("btn_savefuelmgmt","");   
	 
	}

	@Then("^Fuel Rates List the page should get displayed with caption \"([^\"]*)\"$")
	public void fuel_Rates_List_the_page_should_get_displayed_with_caption(String fuelpage) throws Throwable {
	    waitFor("btn_historicalRate");
	    sleepWait(5000);
	  assertEquals(elementText("txt_approval",""),fuelpage);
	 
	}

	@Then("^Current Rate should be dispayed$")
	public void current_Rate_should_be_dispayed() throws Throwable {
	    List<WebElement> newcurrentrate=wd.findElements(By.xpath("//td[3]"));
	    for(int i=0;i<fuelType;i++) {
	    	assertEquals(newcurrentrate.get(i).getAttribute("value"),currentrate.get(i));
	    }
	 
	}

	@Then("^New Rate with the effective date as well should be displayed$")
	public void new_Rate_with_the_effective_date_as_well_should_be_displayed() throws Throwable {
		
		List <WebElement>neweffectiveraterecords=wd.findElements(By.xpath("//td[5]"));
		  for(int i=0;i<fuelType;i++) {
			  assertEquals(neweffectiveraterecords.get(i).getText(),afterupdaterate.get(i));
		}
	 
	}

	@Then("^The Change in Rate \\(CDF\\) column should be New Rate -Current Rate$")
	public void the_Change_in_Rate_CDF_column_should_be_New_Rate_Current_Rate() throws Throwable {
		afterUpdateChangedrate=changedrate(afterupdaterate,currentrate);
		
	 
	}

	@Then("^Admin should not approve or reject the self-updated rates$")
	public void admin_should_not_approve_or_reject_the_self_updated_rates() throws Throwable {
		
		assertEquals(buttonEnabled("btn_rejectrate",""), false);
		assertEquals(buttonEnabled("btn_approverate",""),false);
	 
	}
	@Then("^Message of \"([^\"]*)\" should be displayed$")
	public void message_of_should_be_displayed(String toastmessage) throws Throwable {
		clickOn("txt_toastmessage", "");
		assertEquals(elementText("txt_toastmessage",""),toastmessage);

	}
	private double todouble(String rate) {
		return Double.parseDouble(rate);
	}
	private ArrayList<String> changedrate(List<String> currentrate2,List<String> previousrate2){
		ArrayList<String> change=new ArrayList<String>();
		for(int i=0;i<currentrate2.size();i++) {			
			double current=frenchtoDouble(currentrate2.get(i));
			double previous=frenchtoDouble(previousrate2.get(i));
			System.out.println("Current Rate"+current+"-"+"Previous Rate"+previous);
			double ratechanged=frenchtoDouble(currentrate2.get(i))-frenchtoDouble(previousrate2.get(i));
			System.out.println(current+"-"+previous+"+"+ratechanged);
			change.add(String.valueOf(ratechanged));
		}
		return change;
	}
private String convertToFourDotSeven(double number) {
	StringBuilder digitWithDecimal=new StringBuilder(String.format("%4.3f", number));

	System.out.println(digitWithDecimal.subSequence(0, digitWithDecimal.indexOf(".")+3));
	return digitWithDecimal.toString();
	

}

Actions action = new Actions(wd);

@Given("^User click on Fuel Management tab$")
public void user_click_on_Fuel_Management_tab() throws Throwable {
	clickOn("txt_FuelManagement", "");
}

@When("^click on Reject button$")
public void click_on_Reject_button() throws Throwable {
	Thread.sleep(1000);
	clickOn("btn_Reject_AA", "");
	 waitTillElementLocated("waitfuelpage");
}

@When("^user click on cancel button$")
public void user_click_on_cancel_button() throws Throwable {
	clickOn("btn_closebutton", "");
	Thread.sleep(1000);
}

@And("^enter the reason for the comment \"([^\"]*)\"$")
public void enter_the_reason_for_the_comment(String data) throws Throwable {
	type("txtbx_ReasonforRejection", data);
	Thread.sleep(1000);
}

@And("^user check the informative message \"([^\"]*)\"$")
public void user_check_the_informative_message(String message) throws Throwable {
	//Actions action = new Actions(wd);
	action.sendKeys(Keys.TAB).build().perform();
	if(wd.findElement(By.xpath("//*[contains(text(),'" + message + "')]")).isDisplayed() )
	{		
		assertTrue(true);
	}	
}

@And("^user clicked on update button \"([^\"]*)\"$")
public void user_clicked_on_update_button(String message) throws Throwable {
	clickOn("btn_Obj_Submit", "");
sleepWait(6000);
	if(wd.findElement(By.xpath("(//*[contains(text(),'" + message + "')])")).isDisplayed())
	{
		assertTrue(true);
	}	
}

@And("^click on Approve button and check the message \"([^\"]*)\"$")
public void click_on_Approve_button_and_check_the_message(String message) throws Throwable {
	sleepWait(3000);
	clickOn("btn_Approve_AA", "");
	sleepWait(5000);
	if(wd.findElement(By.xpath("(//*[contains(text(),'" + message + "')])")).isDisplayed() )
	{					
		assertTrue(true);
	}
}

@And("^user check the validation message \"([^\"]*)\"$")
public void user_check_the_validation_message(String arg1) throws Throwable {
	String message = elementText("text_domestic","");
}
@Then("^enter Fuel Rates of CNG in basic\"([^\"]*)\" Rates are Excise\"([^\"]*)\" ,VAT\"([^\"]*)\",Fuel Tax\"([^\"]*)\",Royalty\"([^\"]*)\" and does Total$")
public void enter_Fuel_Rates_of_CNG_in_basic_Rates_are_Excise_VAT_Fuel_Tax_Royalty_and_does_Total(String cngbasicrate, String excise, String VAT, String fuelTax, String Royalty) throws Throwable {
	 type("txtbx_basicfuelcng",cngbasicrate);
		double cngrate=Double.parseDouble(cngbasicrate);
		double cngExcise=cngrate*todouble(excise)/100;
		double cngVAT=cngrate*todouble(VAT)/100;
		double cngFuelTax =cngrate*todouble(fuelTax)/100;
		double cngRoyalty  =cngrate*todouble(Royalty)/100;
		double cngTotal =cngrate+cngExcise+cngVAT+cngFuelTax+cngRoyalty;
		List <WebElement>cngtype=wd.findElements(By.xpath("(//table)[2]//tr[4]//input[@disabled='true']"));			
	assertEquals(todouble(cngtype.get(0).getAttribute("value"))==todouble(convertToFourDotSeven(cngExcise)),true);
		 assertEquals(todouble(cngtype.get(1).getAttribute("value"))==todouble(convertToFourDotSeven(cngVAT)),true);			 
		 assertEquals(todouble(cngtype.get(2).getAttribute("value"))==todouble(convertToFourDotSeven(cngFuelTax)),true);
		 assertEquals(todouble(cngtype.get(3).getAttribute("value"))==todouble(convertToFourDotSeven(cngRoyalty)),true);
		assertEquals(todouble(cngtype.get(4).getAttribute("value"))==todouble(convertToFourDotSeven(cngTotal)),true);
}

@Then("^enter Fuel Rates of Methanol in basic\"([^\"]*)\" Rates are Excise\"([^\"]*)\" ,VAT\"([^\"]*)\",Fuel Tax\"([^\"]*)\",Royalty\"([^\"]*)\" and does Total$")
public void enter_Fuel_Rates_of_Methanol_in_basic_Rates_are_Excise_VAT_Fuel_Tax_Royalty_and_does_Total(String methanolbasicrate, String excise, String VAT, String fuelTax, String Royalty) throws Throwable {
	 type("txtbx_basicfuelmethanol",methanolbasicrate);
		double methanolrate=Double.parseDouble(methanolbasicrate);
		double methanolExcise=methanolrate*todouble(excise)/100;
		double methanolVAT=methanolrate*todouble(VAT)/100;
		double methanolFuelTax =methanolrate*todouble(fuelTax)/100;
		double methanolRoyalty  =methanolrate*todouble(Royalty)/100;
		double methanolTotal =methanolrate+methanolExcise+methanolVAT+methanolFuelTax+methanolRoyalty;
		List <WebElement>methanoltype=wd.findElements(By.xpath("(//table)[2]//tr[5]//input[@disabled='true']"));			
	assertEquals(todouble(methanoltype.get(0).getAttribute("value"))==todouble(convertToFourDotSeven(methanolExcise)),true);
		 assertEquals(todouble(methanoltype.get(1).getAttribute("value"))==todouble(convertToFourDotSeven(methanolVAT)),true);			 
		 assertEquals(todouble(methanoltype.get(2).getAttribute("value"))==todouble(convertToFourDotSeven(methanolFuelTax)),true);
		 assertEquals(todouble(methanoltype.get(3).getAttribute("value"))==todouble(convertToFourDotSeven(methanolRoyalty)),true);
		assertEquals(todouble(methanoltype.get(4).getAttribute("value"))==todouble(convertToFourDotSeven(methanolTotal)),true);
}

@Then("^enter Fuel Rates of Gasoline in basic\"([^\"]*)\" Rates are Excise\"([^\"]*)\" ,VAT\"([^\"]*)\",Fuel Tax\"([^\"]*)\",Royalty\"([^\"]*)\" and does Total$")
public void enter_Fuel_Rates_of_Gasoline_in_basic_Rates_are_Excise_VAT_Fuel_Tax_Royalty_and_does_Total(String gasolinebasicrate, String excise, String VAT, String fuelTax, String Royalty) throws Throwable {
	 type("txtbx_basicfuelgasoline",gasolinebasicrate);
		double gasolinerate=Double.parseDouble(gasolinebasicrate);
		double gasolineExcise=gasolinerate*todouble(excise)/100;
		double gasolineVAT=gasolinerate*todouble(VAT)/100;
		double gasolineFuelTax =gasolinerate*todouble(fuelTax)/100;
		double gasolineRoyalty  =gasolinerate*todouble(Royalty)/100;
		double gasolineTotal =gasolinerate+gasolineExcise+gasolineVAT+gasolineFuelTax+gasolineRoyalty;
		List <WebElement>gasolinetype=wd.findElements(By.xpath("(//table)[2]//tr[6]//input[@disabled='true']"));			
	assertEquals(todouble(gasolinetype.get(0).getAttribute("value"))==todouble(convertToFourDotSeven(gasolineExcise)),true);
		 assertEquals(todouble(gasolinetype.get(1).getAttribute("value"))==todouble(convertToFourDotSeven(gasolineVAT)),true);			 
		 assertEquals(todouble(gasolinetype.get(2).getAttribute("value"))==todouble(convertToFourDotSeven(gasolineFuelTax)),true);
		 assertEquals(todouble(gasolinetype.get(3).getAttribute("value"))==todouble(convertToFourDotSeven(gasolineRoyalty)),true);
		assertEquals(todouble(gasolinetype.get(4).getAttribute("value"))==todouble(convertToFourDotSeven(gasolineTotal)),true);
}
}
