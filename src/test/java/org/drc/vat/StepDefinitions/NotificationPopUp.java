package org.drc.vat.StepDefinitions;

import cucumber.api.java.en.Then;
import static org.drc.vat.appmanager.HelperBase.clickOn;
import static org.drc.vat.appmanager.HelperBase.elementText;
import static org.drc.vat.appmanager.HelperBase.wd;
import static org.drc.vat.appmanager.HelperBase.minutespattern;
import static org.drc.vat.appmanager.HelperBase.waitfor;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import static org.drc.vat.appmanager.HelperBase.sleepWait;

import org.drc.vat.appmanager.ConnectDatabase;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.testng.asserts.SoftAssert;

public class NotificationPopUp {
	SoftAssert sassert = new SoftAssert();


	@Then("^click on previous button on Debt collection Case$")
	public void click_on_previous_button_on_Debt_collection_Case() throws Throwable {
		Thread.sleep(2000);
		clickOn("btn_previous_popup", "");
		Thread.sleep(4000);

	}

	@Then("^status should be \"([^\"]*)\"$")
	public void status_should_be(String arg1) throws Throwable {
		System.out.println(elementText("slash", "td[10]"));
		sassert.assertEquals(elementText("slash", "td[10]"), arg1);

	}

	@Then("^no of notification should be (\\d+) with \"([^\"]*)\" notification$")
	public void no_of_notification_should_be_with_notification(int arg1, String action) throws Throwable {
	//	sassert.assertEquals(elementText("btn_notify", ""), arg1);
		ConnectDatabase.opendb();
		clickOn("btn_notify", "");
		Thread.sleep(4000);
		sassert.assertEquals(elementText("txt_Notify_heading", ""), action);
		Thread.sleep(4000);
		clickOn("btn_close_Notification", "");
		sleepWait(5000);
		if(action.equals("Request Payment")) {
			Calendar cal2=Calendar.getInstance();
			cal2.add(Calendar.DATE, -15);
			String fifteendaysago=new SimpleDateFormat("YYYY-MM-dd").format(cal2.getTime());
			
			String paymentremindersent="update  vat.CaseManagement set CreationDate='"+fifteendaysago+"' where CaseId='"+elementText("txt_cseid", "")+"'";
			System.out.println(paymentremindersent);

			ConnectDatabase.sta.executeUpdate(paymentremindersent);
			sleepWait((5-Integer.parseInt(minutespattern.format(new Date()))%5)*60*1000);
		}
	
	}

	@Then("^Previous status must be\"([^\"]*)\"$")
	public void previous_status_must_be(String arg1) throws Throwable {
		WebElement dt = wd.findElement(By.xpath("//strong[contains(text(),'Status')]/following::input"));
		JavascriptExecutor jse = (JavascriptExecutor) wd;
		String status = jse.executeScript("return arguments[0].value", dt).toString();
		System.out.println(status);
		System.out.println(arg1);
		sassert.assertEquals(status, arg1);

	}

	@Then("^Selects Collection Agent\"([^\"]*)\"$")
	public void selects_Collection_Agent(String arg1) throws Throwable {
		clickOn("drpdwn_collectionofficer", "");
		Thread.sleep(3000);
		clickOn("drpdown_panel", "[contains(text(),'" + arg1 + "')]");
		Thread.sleep(3000);
		// span[contains(text(),'Jainik')]

	}

}
