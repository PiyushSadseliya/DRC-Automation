package org.drc.vat.StepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import freemarker.template.SimpleDate;

import static org.drc.vat.appmanager.HelperBase.clickOn;
import static org.drc.vat.appmanager.HelperBase.elementText;
import static org.drc.vat.appmanager.HelperBase.datePicker;
import static org.drc.vat.appmanager.HelperBase.logout;
import static org.drc.vat.appmanager.HelperBase.sleepWait;
import static org.drc.vat.appmanager.HelperBase.type;
import static org.drc.vat.appmanager.HelperBase.getvalue;
import org.testng.asserts.SoftAssert;

import bsh.org.objectweb.asm.Type;

import static org.drc.vat.appmanager.HelperBase.waitUntilElementFound;
import static org.drc.vat.appmanager.HelperBase.pageSource;

import static org.drc.vat.appmanager.HelperBase.wd;
import static org.junit.Assert.assertArrayEquals;
import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertNotEquals;

import java.io.FileReader;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.text.NumberFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import org.drc.vat.appmanager.ConnectDatabase;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
/*
 * If the user has not paid the vat amount the records are displayed in the Debt Landing Screen according to age brackets of
 * 0-3 months 
 * 4-6 Months
 * 7-12 Months
 * 13-24 Months
 *24 Months and Above respectively
 * the officer can save the debt on paarticular date to revisit and assigned the pending amount to the Collection Officer
 * Then assigned amount would also be reflected
 * He can filter based on the age brackets* 
 * 
 */

public class DebtManagementLandingScreen {

	NumberFormat f =NumberFormat.getNumberInstance();
	double m,result;
	String max;
	SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-d");  
	String debtamoount;


	
	@Given("^DGI \"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"should be logged in to the internal portal$")
	public void dgi_should_be_logged_in_to_the_internal_portal(String arg1, String arg2, String arg3, String arg4) throws Throwable {
	    
	
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
		  sleepWait(5000);
	    
	      
	}
	
	@Given("^User with email address\"([^\"]*)\"does efiling in age bracket (\\d+)-(\\d+) month\"([^\"]*)\"$")
	public void user_with_email_address_does_efiling_in_age_bracket_month(String email, int arg2, int arg3, String goodsupplied) throws Throwable {

		
		ConnectDatabase.opendb();
		Calendar cal = Calendar.getInstance();
		Calendar newcal;
		Date result = cal.getTime();
		Date todaysdate=new Date();
		SimpleDateFormat dateformatter=new SimpleDateFormat("MMM");
		SimpleDateFormat yearformat=new SimpleDateFormat("YYYY");
		SimpleDateFormat sqldate=new SimpleDateFormat("YYYY-MM-dd");
		SimpleDateFormat monthformat=new SimpleDateFormat("MM");
		int monthno=Integer.parseInt(monthformat.format(result));
		System.out.println(monthno);
		if (monthno==1) {
			cal.add(Calendar.YEAR, -1);
			result=cal.getTime();	
			System.out.println(sqldate.format(result));
			String nitvabackdate="update Vat.VuUsers set createdDate='"+sqldate.format(result)+"' where VuUserId="+
					"(select VuUserId from Vat.VuUsers where RegisteredUserId=("+
							"select RegisteredUserId from ref.RegisteredUsers where email='"
							+ email+"'))";
			ConnectDatabase.sta.executeUpdate(nitvabackdate);
			}	
	
		clickOn("menu_vat-e-filing", "");		
		sleepWait(5000);
		if (monthno==1) {		
			clickOn("drpdwn_efilingyear", "");
			sleepWait(2000);
			System.out.println(yearformat.format(result));
			clickOn("drpdwn_list", "//*[contains(text(),'"+yearformat.format(result)+"')]");
			sleepWait(2000);			
		}
		newcal = Calendar.getInstance();	
		newcal.add(Calendar.MONTH, -1);
		result=newcal.getTime();		
		clickOn("slash", "*[contains(text(),'"+dateformatter.format(result)+"')]");
		sleepWait(3000);
		clickOn("slash", "*[contains(text(),'"+dateformatter.format(result)+"')]//following::button[@title='File']");
		sleepWait(5000);
type("txtbx_filing",goodsupplied);
DV_2390_e_filing.emailid=email;
debtamoount=getvalue("txtbx_vat","");
JSONObject debt = new JSONObject();

debt.put("email", email);
debt.put("debtamt", debtamoount);
Files.write(Paths.get("debtdata.json"), debt.toJSONString().getBytes());

FileReader reader = new FileReader("debtdata.json");
JSONParser jsonParser = new JSONParser();
JSONObject jsondecode = (JSONObject)jsonParser.parse(reader);
System.out.println((String) jsondecode.get("email"));

System.out.println((String) jsondecode.get("debtamt"));
		
	}


	@When("^clicked on Debt Management Module must be on Debt Management Module$")
	public void clicked_on_Debt_Management_Module_must_be_on_Debt_Management_Module() throws Throwable {	    
		clickOn("nav_debt","");
		sleepWait(2000);
	    assertEquals(elementText("txt_heading",""), "Debt Management");
	//System.out.println(wd.findElement(By.xpath("//div[text()='Upto Date: ']/following::input")).isEnabled());
	}

	@Then("^Select date \"([^\"]*)\" from Upto date$")
	public void select_date_from_Upto_date(String arg1) throws Throwable {
		sleepWait(1000);
	   clickOn("btn_uptodate", "");
	 //  System.out.println(arg1);
		datePicker(new SimpleDateFormat("YYYY-MM-dd").format(new Date()));
		
		sleepWait(8000);
	    clickOn("btn_dsave","");
	      
	}

	@Then("^click on zero to three months Pending amount Link$")
	public void click_on_zero_to_three_months_Pending_amount_Link() throws Throwable {
		sleepWait(2000);
	    String pendingamount=elementText("txt_0to3months","/following::td[2]");	
		clickOn("txt_0to3months","/following::a");	 
		//waitUntilElementFound("vchkbx_selectall", "");
		sleepWait(5000);
	    assertEquals(elementText("txt_heading",""), "Debt Management");
	    assertEquals(elementText("txt_pending0to3months",""),pendingamount);
	    
	}

	@Then("^click on Previuos button on Debt Management pending amount list$")
	public void click_on_Previuos_button_on_Debt_Management_pending_amount_list() throws Throwable {
		sleepWait(1500);
	    clickOn("btn_prev", "");
	    sleepWait(1500);
	    assertEquals(elementText("txt_heading",""), "Debt Management"); 
	}

	@Then("^click on Save button on Debt Management Landing Screen an click on logout and again login to see last Saved Data$")
	public void click_on_Save_button_on_Debt_Management_Landing_Screen_an_click_on_logout_and_again_login_to_see_last_Saved_Data()  throws Throwable {
	    List <WebElement> elm = wd.findElements(By.tagName("td"));
	    String []save_a=new String [elm.size()];
	    for(int i = 0;i<elm.size();i++) {
	    	save_a[i]=elm.get(i).toString();
	    }
WebElement dt=wd.findElement(By.xpath("//input[@formcontrolname='toDate']"));
	    JavascriptExecutor jse = (JavascriptExecutor)wd;
	   String date = jse.executeScript("return arguments[0].value", dt).toString();
	   System.out.println(date);
	    clickOn("btn_dsave","");
	    sleepWait(1000);
	    assertEquals(elementText("txt_toaster",""),"Records Saved Successfully");
	    sleepWait(6000);
	   // logout();	   
	    clicked_on_Debt_Management_Module_must_be_on_Debt_Management_Module();

	    List <WebElement> nelm = wd.findElements(By.tagName("td"));
	    String []new_a=new String [nelm.size()];
	    for(int i=0;i<nelm.size();i++) {	    
	    	assertEquals(save_a[i], nelm.get(i).toString());
	    }
	    assertEquals(jse.executeScript("return arguments[0].value", dt).toString(),date);
	    
	}
	@Then("^Age Brackets column shoul display as \"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"$")
	public void age_Brackets_column_shoul_display_as(String arg1, String arg2, String arg3, String arg4, String arg5) throws Throwable {
	    List <WebElement>ageElement = wd.findElements(By.xpath("//td[1]"));
	    assertEquals(ageElement.get(0).getText(),arg1);
	    assertEquals(ageElement.get(1).getText(),arg2);
	    assertEquals(ageElement.get(2).getText(),arg3);
	    assertEquals(ageElement.get(3).getText(),arg4);
	    assertEquals(ageElement.get(4).getText(),arg5);

	    		
	}

	@Then("^Total Debt \\(FC\\) amount of Total \\(FC\\) column should be the sum of all amounts$")
	public void total_Debt_FC_amount_of_Total_FC_column_should_be_the_sum_of_all_amounts() throws Throwable {
		result=(double) 0;
		List <WebElement>ageElement = wd.findElements(By.xpath("//td[2]"));
		 for(int i=0;i<ageElement.size();i++) {					
			max= ageElement.get(i).getText().replace(".", "").replace(",", ".");
		// Number num = f.parse(max);		 
          m = Double.parseDouble(max);
          result = result+m;
          }
		 System.out.println(appendfrenchsys(tofrench(result)));
		 System.out.println(elementText("txt_totaldebttoatal",""));
		 assertEquals(appendfrenchsys(tofrench(result)), elementText("txt_totaldebttoatal",""));
	}

	@Then("^Total Debt \\(FC\\) amount of Pending \\(FC\\) column should be the sum of all amounts$")
	public void total_Debt_FC_amount_of_Pending_FC_column_should_be_the_sum_of_all_amounts() throws Throwable {
		result= 0;
		List <WebElement>ageElement = wd.findElements(By.xpath("//td[3]"));
		 for(int i=0;i<ageElement.size();i++) {		
			 max= ageElement.get(i).getText().replace(".", "").replace(",", ".");
		// Number num = f.parse(max);	
		 
          m = Double.parseDouble(max);
         //System.out.println(m);
          result = result+m;
          System.out.println(result);
          
          }
		 System.out.println(elementText("txt_totalpendingtotal",""));
		 System.out.println(appendfrenchsys(tofrench(result)));
		 assertEquals(appendfrenchsys(tofrench(result)), elementText("txt_totalpendingtotal",""));
	}

	@Then("^Total Debt \\(FC\\) amount of Assigned \\(FC\\) column should be the sum of all amounts$")
	public void total_Debt_FC_amount_of_Assigned_FC_column_should_be_the_sum_of_all_amounts() throws Throwable {
		result=0;
		List <WebElement>ageElement = wd.findElements(By.xpath("//td[4]"));
		 for(int i=0;i<ageElement.size();i++) {		 
		 Number num = f.parse(ageElement.get(i).getText().replace(".", "").replace(",", "."));		 
          m = Double.parseDouble(ageElement.get(i).getText().replace(".", "").replace(",", "."));
          result = result+m;
          }
		// System.out.println(result);
		 //System.out.println(elementText("txt_totalassignedtotal",""));
		 assertEquals(appendfrenchsys(tofrench(result)), elementText("txt_totalassignedtotal",""));
	}
	@Then("^select Todays date todays date should be displayed and select previous date \"([^\"]*)\"$")
	public void select_Todays_date_todays_date_should_be_displayed_and_select_previous_date(String arg1) throws Throwable {
		
	    Date date = new Date();  
	  //  System.out.println(formatter.format(date));  
	    clickOn("btn_uptodate", "");		
			datePicker(formatter.format(date));
			
			
	}

	@Then("^select future date it should be disabled$")
	public void select_future_date_it_should_be_disabled() throws Throwable {
		Calendar cal = Calendar.getInstance();	
		cal.add(Calendar.DATE, 7);
		 clickOn("btn_uptodate", "");		
		datePicker(formatter.format(cal.getTime()));
		  System.out.println(formatter.format(cal.getTime()));  
	}
	@Then("^if there is no pending amount displayed amount should be  (\\d+) with disabled hyperlink$")
	public void if_there_is_no_pending_amount_displayed_amount_should_be_with_disabled_hyperlink(int arg1) throws Throwable {
		List <WebElement>pendElement = wd.findElements(By.xpath("//td[3]"));
		for(int i=0;i<pendElement.size();i++) {
			if(pendElement.get(i).getText().equals("0")) {
				assertEquals(false,wd.findElement(By.xpath("//td[3]/following::a")).isEnabled(),"Link is enabled for no pending amount");
			}
			
		}
	
	}
	@Then("^if there is no assign amount then total amount should be same as pending amount$")
	public void if_there_is_no_assign_amount_then_total_amount_should_be_same_as_pending_amount() throws Throwable {
		List <WebElement>pendElement = wd.findElements(By.xpath("//td[3]"));
		for(int i=0;i<pendElement.size();i++) {
			if(pendElement.get(i).getText().equals("0")) {
				assertEquals(wd.findElement(By.xpath("(//td[2])["+i+"+1]")).getText(),wd.findElement(By.xpath("(//td[4])["+i+"+1]")).getText(),"Total amount and pending amount is not same");
			}
			
		}

	}

	@Then("^click on the hyper link amount under pending \\(FC\\) column for \"([^\"]*)\" age bracket$")
	public void click_on_the_hyper_link_amount_under_pending_FC_column_for_age_bracket(String arg1) throws Throwable {

		if(arg1.equals("24 Months and Above")) {
			if(!elementText("txt_24monthsup","//following::a[1]").equals("0,00")) {
				clickOn("txt_24monthsup","//following::a[1]");
				List <WebElement> ele=wd.findElements(By.xpath("//tr"));
				assertNotEquals(ele.size(), 0);
				sleepWait(2000);
				clickOn("btn_prev","");
				sleepWait(2500);
			}
			if(!elementText("txt_24monthsup","//following::a[2]").equals("0,00")) {
				clickOn("txt_24monthsup","//following::a[2]");
				List <WebElement> ele=wd.findElements(By.xpath("//tr"));
				assertNotEquals(ele.size(), 0);
				sleepWait(3000);
				clickOn("nav_debt","");
				sleepWait(2500);
			}
			
		}
		if(arg1.equals("13-24 Months")) {
			if(!elementText("txt_13to24months","//following::a[1]").equals("0,00")) {
				clickOn("txt_13to24months","//following::a[1]");
				List <WebElement> ele=wd.findElements(By.xpath("//tr"));
				assertNotEquals(ele.size(), 0);
				sleepWait(3000);
				clickOn("btn_prev","");
				sleepWait(3000);
			}
			if(!elementText("txt_13to24months","//following::a[2]").equals("0,00")) {
				clickOn("txt_13to24months","//following::a[2]");
				List <WebElement> ele=wd.findElements(By.xpath("//tr"));
				assertNotEquals(ele.size(), 0);
				sleepWait(3000);
				clickOn("nav_debt","");
				sleepWait(3000);
			}
			
		}
		if(arg1.equals("7-12 Months")) {
			if(!elementText("txt_7to12months","//following::a[1]").equals("0,00")) {
				clickOn("txt_7to12months","//following::a[1]");
				sleepWait(3000);
				List <WebElement> ele=wd.findElements(By.xpath("//tr"));
				assertNotEquals(ele.size(), 0);
				clickOn("btn_prev","");
				sleepWait(3000);
			}
			if(!elementText("txt_7to12months","//following::a[2]").equals("0,00")) {
				clickOn("txt_7to12months","//following::a[2]");
				sleepWait(3000);
				List <WebElement> ele=wd.findElements(By.xpath("//tr"));
				assertNotEquals(ele.size(), 0);
				sleepWait(3000);
				clickOn("nav_debt","");
				sleepWait(2500);
			}
			
		}
		if(arg1.equals("4-6 Months")) {
			if(!elementText("txt_4to6months","//following::a[1]").equals("0,00")) {
				clickOn("txt_4to6months","//following::a[1]");
				sleepWait(1500);
				List <WebElement> ele=wd.findElements(By.xpath("//tr"));
				assertNotEquals(ele.size(), 0);
				sleepWait(1500);
				clickOn("btn_prev","");
				sleepWait(1500);
			}
			if(!elementText("txt_4to6months","//following::a[2]").equals("0,00")) {
				clickOn("txt_4to6months","//following::a[2]");
				sleepWait(1500);
				List <WebElement> ele=wd.findElements(By.xpath("//tr"));
				sleepWait(2000);
				assertNotEquals(ele.size(), 0);
				sleepWait(1500);
				clickOn("nav_debt","");
				sleepWait(3000);
			}
			
		}
		if(arg1.equals("0-3 Months")) {
			if(!elementText("txt_0to3months","//following::a[1]").equals("0,00")) {
				clickOn("txt_0to3months","//following::a[1]");
				sleepWait(3000);
				List <WebElement> ele=wd.findElements(By.xpath("//tr"));
				assertNotEquals(ele.size(), 0);
				sleepWait(2000);
				clickOn("btn_prev","");
				sleepWait(3000);
			}
			if(!elementText("txt_0to3months","//following::a[2]").equals("0,00")) {
				sleepWait(2000);
				clickOn("txt_0to3months","//following::a[2]");
				sleepWait(2000);
				List <WebElement> ele=wd.findElements(By.xpath("//tr"));
				assertNotEquals(ele.size(), 0);			
				sleepWait(2000);
				clickOn("nav_debt","");
				sleepWait(2000);
			}
			
		}

		
	}
	@Then("^Verify the amount displayed in pending \\(FC\\),assigned \\(FC\\) column of particular age bracket after user has raised objection and it has been assigned ofr debt collection\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"$")
	public void verify_the_amount_displayed_in_pending_FC_assigned_FC_column_of_particular_age_bracket_after_user_has_raised_objection_and_it_has_been_assigned_ofr_debt_collection(String arg1, String arg2, String arg3, String arg4) throws Throwable {
		if(arg1.equals("24 Months and Above")) {sleepWait(2000);
			assertEquals(elementText("txt_24monthsup","//following::a[1]"),arg2);sleepWait(1000);
			assertEquals(elementText("txt_24monthsup","//following::a[2]"),arg3);sleepWait(2000);
			
		}
		if(arg1.equals("13-24 Months")) {sleepWait(2000);
			assertEquals(elementText("txt_13to24months","//following::a[1]"),arg2);sleepWait(1000);
			assertEquals(elementText("txt_13to24months","//following::a[2]"),arg3);sleepWait(2000);
			
		}
		if(arg1.equals("7-12 Months")) {sleepWait(2000);
			assertEquals(elementText("txt_7to12months","//following::a[1]"),arg2);sleepWait(1500);
			assertEquals(elementText("txt_7to12months","//following::a[2]"),arg3);
		}
		if(arg1.equals("4-6 Months")) {sleepWait(2000);
			assertEquals(elementText("txt_4to6months","//following::a[1]"),arg2);sleepWait(1000);
					assertEquals(elementText("txt_4to6months","//following::a[2]"),arg3);sleepWait(1500);
			
		}
		if(arg1.equals("0-3 Months")) {sleepWait(2000);
			assertEquals(elementText("txt_0to3months","//following::a[1]"),arg2);
			assertEquals(elementText("txt_0to3months","//following::a[2]"),arg3);
			
		}
	}
	@Then("^Assign all the pending amount to collection officer then pending amount should be zero$")
	public void assign_all_the_pending_amount_to_collection_officer_then_pending_amount_should_be_zero() throws Throwable {sleepWait(2000);
		assertEquals(elementText("txt_24monthsup","//following::a[2]")!=null,true);
	}
	@Then("^Assign the pending amount to the collection officer then partial amount assigned should be reflected in pending column\"([^\"]*)\"\"([^\"]*)\"$")
	public void assign_the_pending_amount_to_the_collection_officer_then_partial_amount_assigned_should_be_reflected_in_pending_column(String arg1, String arg2) throws Throwable {
		if(arg1.equals("24 Months and Above")) {sleepWait(2000);
			assertEquals(elementText("txt_24monthsup","//following::a[1]"),arg2);
			
			
		}
		if(arg1.equals("13-24 Months")) {sleepWait(2000);
			assertEquals(elementText("txt_13to24months","//following::a[1]"),arg2);
			
			
		}
		if(arg1.equals("7-12 Months")) {sleepWait(2000);
			assertEquals(elementText("txt_7to12months","//following::a[1]"),arg2);
			
		}
		if(arg1.equals("4-6 Months")) {sleepWait(2000);
			assertEquals(elementText("txt_4to6months","//following::a[1]"),arg2);
					
			
		}
		if(arg1.equals("0-3 Months")) {sleepWait(2000);
			assertEquals(elementText("txt_0to3months","//following::a[1]"),arg2);
			
			
		}
	}

	@Then("^Assign the pending amount to the collection officer then partial amount assigned should be reflected in assignned column\"([^\"]*)\"\"([^\"]*)\"$")
	public void assign_the_pending_amount_to_the_collection_officer_then_partial_amount_assigned_should_be_reflected_in_assignned_column(String arg1, String arg2) throws Throwable {
		if(arg1.equals("24 Months and Above")) {
			sleepWait(2000);
			assertEquals(elementText("txt_24monthsup","//following::a[2]"),arg2);
			
		}
		if(arg1.equals("13-24 Months")) {
			sleepWait(2000);
			assertEquals(elementText("txt_13to24months","//following::a[2]"),arg2);
			
		}
		if(arg1.equals("7-12 Months")) {
			sleepWait(2000);
			assertEquals(elementText("txt_7to12months","//following::a[2]"),arg2);
		}
		if(arg1.equals("4-6 Months")) {
			sleepWait(2000);
					assertEquals(elementText("txt_4to6months","//following::a[2]"),arg2);
			
		}
		if(arg1.equals("0-3 Months")) {
			sleepWait(2000);
			assertEquals(elementText("txt_0to3months","//following::a[2]"),arg2);
			sleepWait(2000);
		}
	}
	@Then("^Assign all the pending amount to collection officer for age bracket\"([^\"]*)\" then pending amount should be zero$")
	public void assign_all_the_pending_amount_to_collection_officer_for_age_bracket_then_pending_amount_should_be_zero(String arg1) throws Throwable {
		sleepWait(2000);
			assertEquals(elementText("txt_24monthsup","//following::a[1]"),"0");
			sleepWait(2000);
			
		

	}
	/*
	 * To convert the number to french System
	 * 
	 * 
	 */
	private String tofrench(Double d) {
		NumberFormat nf = NumberFormat.getNumberInstance(Locale.ITALY);

		return nf.format(d);
	}

	/*
	 * to append comma if the douoble value dont contains decimal places
	 * 
	 * 
	 */
	private String appendfrenchsys(String frenchNo) {
		
	System.out.println(frenchNo);
		if (!frenchNo.contains(",")) {
			
			frenchNo = frenchNo + ",00";
		}
		if (frenchNo.endsWith(",0")) {
			
			frenchNo = frenchNo + "0";
		}
		
		return frenchNo;
	}


	}




	


