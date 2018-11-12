package org.drc.vat.StepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import static org.drc.vat.appmanager.HelperBase.login;
import static org.drc.vat.appmanager.HelperBase.wd;
import static org.testng.Assert.assertEquals;
import static org.drc.vat.appmanager.HelperBase.softAssert;
import static org.drc.vat.appmanager.HelperBase.logout;
import static org.drc.vat.appmanager.HelperBase.sleepWait;
import java.util.Set;

import org.openqa.selenium.By;
import org.testng.asserts.SoftAssert;

import static org.drc.vat.appmanager.HelperBase.clickOn;
import static org.drc.vat.appmanager.HelperBase.elementText;
import static org.drc.vat.appmanager.HelperBase.type;
public class ViewAllStatementofTransaction {
	//SoftAssert sassert = new SoftAssert();
	static Boolean login =true;
	@Given("^\"([^\"]*)\"\"([^\"]*)\"The User has logged in the DRC Tax Payer Portal with \"([^\"]*)\"\"([^\"]*)\"$")
	public void the_User_has_logged_in_the_DRC_Tax_Payer_Portal_with(String arg1, String arg2, String arg3, String arg4) throws Throwable {
		if(login) {
		login(arg3,arg4);
		login=false;
		}

   
	}

	@When("^User Clicks on the efiling menu$")
	public void user_Clicks_on_the_efiling_menu() throws Throwable {
		
		sleepWait(2000);
	     clickOn("nav_efiling","");	 
	     sleepWait(2000);
	     
	}
	/*
	 * Efiling 
	 */

	@Then("^user should be on VAT e-filling Page$")
	public void user_should_be_on_VAT_e_filling_Page() throws Throwable {
		softAssert.assertEquals(  elementText("txt_heading",""), "VAT e-Filing");   
   
	}

	@Then("^Statement of Transaction should display \"([^\"]*)\"$")
	public void statement_of_Transaction_should_display(String arg1) throws Throwable {
		softAssert.assertEquals(  elementText("txt_norecfound",""), arg1);   
   
	}
	
	/*
	 * View button should be disabled
	 */

	@Then("^View Button should be disabled on Efiling Landing Screen$")
	public void view_Button_should_be_disabled_on_Efiling_Landing_Screen() throws Throwable {
		softAssert.assertEquals(wd.findElement(By.xpath("//button[@title='View All']")).isEnabled(), false);
	//	logout();
		
		
   
	}
	/*
	 * For Efiling And otp ent tp email
	 */

	@Then("^user Declares for \"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"$")
	public void user_Declares_for(String arg1, String arg2, String arg3) throws Throwable {
	     clickOn("h6","//div[contains(text(),'"+arg1+"')]");
	     if(arg1.equals("January")) {
	    	 clickOn("div","[@id='collapseOne0']//button[@title='File']");
	     }
	     if(arg1.equals("February")) {
	    	 clickOn("div","[@id='collapseOne1']//button[@title='File']");
	     }
	     if(arg1.equals("March")) {
	    	 clickOn("div","[@id='collapseOne2']//button[@title='File']");
	     }
	     if(arg1.equals("April")) {
	    	 clickOn("div","[@id='collapseOne3']//button[@title='File']");
	     }
	     if(arg1.equals("May")) {
	    	 clickOn("div","[@id='collapseOne4']//button[@title='File']");
	     }
	     if(arg1.equals("June")) {
	    	 clickOn("div","[@id='collapseOne5']//button[@title='File']");
	     }
	     sleepWait(2000);
	     softAssert.assertEquals(elementText("h6","")," I. Operation Performed " );

	     type("txtbx_Taxable_goods",arg3);
	     clickOn("chkbx_efilingagree","");
	    // clickOn("btn_browse")
	     clickOn("drpdown","");
	     //clickOn("span","[contains(text(),'Test')]");
	     //clickOn("btn_csubmit","");
	     sleepWait(50000);
	     
	     //clickOn("btn_prev","");
	    // sleepWait(1000);
	    //clickOn("btn_prev","");
   
	}

	@Then("^Click on View All button$")
	public void click_on_View_All_button() throws Throwable {
		sleepWait(1000);
	     clickOn("btn_viewall","");
	     sleepWait(2000);
   
	}

	@Then("^Statemnt of Transaction should show the details of Date\"([^\"]*)\"\"([^\"]*)\"Period\"([^\"]*)\"\"([^\"]*)\"Particular\"([^\"]*)\"OpeningBalance\"([^\"]*)\"Liability Amount\"([^\"]*)\"Late Fee\"([^\"]*)\"Interest \"([^\"]*)\"Penalty\"([^\"]*)\"Total\"([^\"]*)\"$")
	public void statemnt_of_Transaction_should_show_the_details_of_Date_Period_Particular_OpeningBalance_Liability_Amount_Late_Fee_Interest_Penalty_Total(String arg1, String date, String period, String year, String particular, String OpeningBal, String vamount, String ltfee, String interest, String penalty, String total) throws Throwable {
	 
		assertEquals(wd.findElement(By.xpath("//tbody/tr["+arg1+"]/td[1]")).getText(),date);
	assertEquals(wd.findElement(By.xpath("//tbody/tr["+arg1+"]/td[2]")).getText(),period+", "+year);
	 assertEquals(wd.findElement(By.xpath("//tbody/tr["+arg1+"]/td[3]")).getText(),particular);
	 assertEquals(wd.findElement(By.xpath("//tbody/tr["+arg1+"]/td[4]")).getText(),OpeningBal);
	 assertEquals(wd.findElement(By.xpath("//tbody/tr["+arg1+"]/td[5]")).getText(),vamount);
	assertEquals(wd.findElement(By.xpath("//tbody/tr["+arg1+"]/td[6]")).getText(),ltfee);
	 assertEquals(wd.findElement(By.xpath("//tbody/tr["+arg1+"]/td[7]")).getText(),interest);
	assertEquals(wd.findElement(By.xpath("//tbody/tr["+arg1+"]/td[8]")).getText(),penalty);
assertEquals(wd.findElement(By.xpath("//tbody/tr["+arg1+"]/td[9]")).getText(),total);
   System.out.println(wd.findElement(By.xpath("//tbody/tr["+arg1+"]/td[1]")).getText());
   System.out.println(date);
   System.out.println(wd.findElement(By.xpath("//tbody/tr["+arg1+"]/td[2]")).getText());
   System.out.println(period+","+year);
   System.out.println(wd.findElement(By.xpath("//tbody/tr["+arg1+"]/td[3]")).getText());
   System.out.println(particular);
   System.out.println(wd.findElement(By.xpath("//tbody/tr["+arg1+"]/td[4]")).getText());
   System.out.println(OpeningBal);
   System.out.println(wd.findElement(By.xpath("//tbody/tr["+arg1+"]/td[5]")).getText());
   System.out.println(vamount);
   System.out.println(wd.findElement(By.xpath("//tbody/tr["+arg1+"]/td[6]")).getText());
   System.out.println(ltfee);
   System.out.println(wd.findElement(By.xpath("//tbody/tr["+arg1+"]/td[7]")).getText());
   System.out.println(interest);
   System.out.println(wd.findElement(By.xpath("//tbody/tr["+arg1+"]/td[8]")).getText());
   System.out.println(penalty);
   System.out.println(wd.findElement(By.xpath("//tbody/tr["+arg1+"]/td[9]")).getText());
   System.out.println(total);
   //logout();
	}

	@Then("^Total Liability should be\"([^\"]*)\"$")
	public void total_Liability_should_be(String arg1) throws Throwable {
		sleepWait(2000);
		clickOn("btn_prev","");
		softAssert.assertEquals(elementText("txt_totalpay",""),arg1);
		System.out.println(elementText("txt_totalpay",""));
		System.out.println(arg1);
		

	}



}
