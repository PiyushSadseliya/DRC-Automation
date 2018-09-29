package org.drc.vat.StepDefinitions;

import cucumber.api.java.en.Then;
import static org.drc.vat.appmanager.HelperBase.clickOn;
import static org.drc.vat.appmanager.HelperBase.elementText;
import static org.drc.vat.appmanager.HelperBase.wd;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.testng.asserts.SoftAssert;
public class NotificationPopUp {
	SoftAssert sassert = new SoftAssert();
	@Then("^click on previous button on Debt collection Case$")
	public void click_on_previous_button_on_Debt_collection_Case() throws Throwable {
		  Thread.sleep(2000);
	     clickOn("btn_previous_popup","");
	     Thread.sleep(4000);
	       
	}

	@Then("^status should be \"([^\"]*)\"$")
	public void status_should_be(String arg1) throws Throwable {
		System.out.println(elementText("slash", "td[8]"));
		sassert.assertEquals(elementText("slash", "td[8]"),arg1);
	       
	}

	@Then("^no of notification should be (\\d+) with \"([^\"]*)\" notification$")
	public void no_of_notification_should_be_with_notification(int arg1, String arg2) throws Throwable {
		sassert.assertEquals(elementText("btn_notify", ""),arg1);
		clickOn("btn_notify","");
		Thread.sleep(4000);		
		sassert.assertEquals(elementText("txt_Notify_heading", ""),arg2);		
		Thread.sleep(4000);
		clickOn("btn_close_Notification","");
		
		
	       
	}

	@Then("^Previous status must be\"([^\"]*)\"$")
	public void previous_status_must_be(String arg1) throws Throwable {
		WebElement dt=wd.findElement(By.xpath("//label[text()='Status : ']/following::input"));
	    JavascriptExecutor jse = (JavascriptExecutor)wd;
	   String status = jse.executeScript("return arguments[0].value", dt).toString();
	   System.out.println(status);
	   System.out.println(arg1);
	   sassert.assertEquals(status,arg1);
	       
	}

	@Then("^Selects Collection Agent\"([^\"]*)\"$")
	public void selects_Collection_Agent(String arg1) throws Throwable {
		clickOn("slash","label[text()='Collection Agent']//following::span[@class='ng-arrow']");
		Thread.sleep(3000);
		clickOn("span","[contains(text(),'"+arg1+"')]");
		Thread.sleep(3000);
		//span[contains(text(),'Jainik')]
	     
	       
	}


}
