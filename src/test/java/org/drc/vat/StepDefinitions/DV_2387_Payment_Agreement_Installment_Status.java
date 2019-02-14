package org.drc.vat.StepDefinitions;
import static org.drc.vat.appmanager.HelperBase.*;
import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertTrue;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;

public class DV_2387_Payment_Agreement_Installment_Status 
{
	static  String agreeemntID;
	static  String dateInstallment;
	static  String nextdateInstallment;
	static  String casedate;
	SimpleDateFormat sdfDMonth =new SimpleDateFormat("dd MMM,yyyy");
	SimpleDateFormat sdfdateslash =new SimpleDateFormat("dd-MMM-yyyy");
	static String installmentfrequency ;
	int noOfInstallment=0;
	Date nextInstallmentDate ;
	long frequencydays=0;
	@Given("^User is on Payment Agreement Installment Status \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_is_on_Payment_Agreement_Installment_Status(String arg1, String arg2) throws Throwable 
	{
		System.out.println(arg1);
		System.out.println(arg2);
	}
	
	@And("^User click on eye button on installement page$")
	public void user_click_on_eye_button_on_installement_page() throws Throwable 
	{
			sleepWait(2000);
			WebElement rper = wd.findElement(By.xpath("//*[contains(text(),'Frequency')]/following::span[2]"));
			JavascriptExecutor jse = (JavascriptExecutor) wd;
			installmentfrequency = jse.executeScript("return arguments[0].innerText", rper).toString();
			if (installmentfrequency.equals("Weekly")) {
				frequencydays=7;
			}
			if (installmentfrequency.equals("Monthly")) {
				frequencydays=31;
			}
			if (installmentfrequency.equalsIgnoreCase("quarterly")) {
				frequencydays=92;
			}
			if (installmentfrequency.equals("fortnightly")) {
				frequencydays=14;
			}
			agreeemntID=elementText("txt_agreementID", "");
			dateInstallment=elementText("txt_dateinstallment1","");
			nextdateInstallment=getvalue("txt_nextinstallment", "");
			nextInstallmentDate=sdfDMonth.parse(nextdateInstallment);
			casedate=elementText("txt_dateinstallment1","");
			noOfInstallment=Integer.parseInt(getvalue("txt_noOfInstallment", ""));
			
			clickOn("btn_viewinstallment", "");
			sleepWait(2000); 
	}

	

	@And("^User see installement pop up appear$")
	public void user_see_installement_pop_up_appear() throws Throwable 
	{
		sleepWait(1000);
		if(wd.findElement(By.xpath("//*[contains(text(),'Installment Details')]")).isDisplayed() )
		{					
			assertTrue(true);
		}     
	}

	
	@Given("^User see date$")
	public void user_see_date() throws Throwable 
	{
			if(dateInstallment.equals(elementText("txt_dateinstallment2","")))
			{
				assertTrue(true);
			}
	}
	
	

	@Given("^User see agreement id$")
	public void user_see_agreement_id()throws Throwable
	{
		if(wd.findElement(By.xpath("(//span[contains(text(),'"+agreeemntID+"')])[2]")).isDisplayed() )
		{					
			assertTrue(true);
		} 

	}

	@And("^User see status column \"([^\"]*)\"$")
	public void user_see_status_column(String status) throws Throwable 
	{
		if(wd.findElement(By.xpath("(//div[contains(text(),'" + status + "')])[1]")).isDisplayed() )
		{					
			assertTrue(true);
		} 
		
	}

	@And("^User validate date field \"([^\"]*)\"$")
	public void user_validate_date_field(String date) throws Throwable 
	{
		if(wd.findElement(By.xpath("(//label[contains(text(),'" + casedate + "')])[2]")).isDisplayed() )
		{					
			assertTrue(true);
		}    
		 
	}

	@And("^User see installment Amount \"([^\"]*)\"$")
	public void user_see_installment_Amount(String amount) throws Throwable
	{
		if(wd.findElement(By.xpath("(//div[contains(text(),'" + amount + "')])[1]")).isDisplayed() )
		{					
			assertTrue(true);
		}    
	    
	}

	@Given("^User see emi start date$")
	public void user_see_emi_start_date() throws Throwable 
	{
		List<WebElement> noOfInstallmentRecords=wd.findElements(By.xpath("//*[contains(text(),'Details')]/following::tbody//tr"));
				assertEquals(noOfInstallmentRecords.size(), noOfInstallment);
				sdfdateslash.format(nextInstallmentDate);
				List<WebElement> installmentDateon=wd.findElements(By.xpath("//*[contains(text(),'Details')]/following::tbody//tr/td[1]"));		
				assertEquals(installmentDateon.get(0).getText(), sdfdateslash.format(nextInstallmentDate));
				for (int i = 1; i < installmentDateon.size(); i++) {	

					assertEquals(	countDays("dd-MMM-yyyy",installmentDateon.get(i-1).getText(),installmentDateon.get(i).getText()), frequencydays);
				}
				List<WebElement> instalmentpendingStatus=wd.findElements(By.xpath("//*[contains(text(),'Details')]/following::tbody//tr/td[4]"));
				for(WebElement pending:instalmentpendingStatus) {
					assertEquals(pending.getText(), "Pending");
				}
/*		
		if(wd.findElement(By.xpath("(//div[contains(text(),'" + start + "')])[1]")).isDisplayed() && wd.findElement(By.xpath("(//div[contains(text(),'" + end + "')])[1]")).isDisplayed())
		{					
			assertTrue(true);
		} 
*/
	}

	@Given("^User click close button$")
	public void user_click_close_button()  throws Throwable 
	{
		if(wd.findElement(By.xpath("//*[contains(@class,'close')]")).isDisplayed() )
		{					
			assertTrue(true);
		}    
		sleepWait(1000);
		clickOn("btn_closeagreementpopup", "");
	}

}
