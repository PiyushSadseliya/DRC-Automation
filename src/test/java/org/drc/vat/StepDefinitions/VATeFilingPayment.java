package org.drc.vat.StepDefinitions;

import cucumber.api.java.en.And;
import static org.drc.vat.appmanager.HelperBase.*;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

public class VATeFilingPayment 
{
	//TC_01
	@And("^User click on Pay \"([^\"]*)\" for Payment Status$")
	public void user_click_on_Pay_for_Payment_Status(String value) throws Throwable 
	{
		System.out.println("use click on Pay button ");
		clickOn(value, "");
	}
	//TC_01
	@And("^User Validate VAT on sales is auto populated$")
	public void user_Validate_VAT_on_sales_is_auto_populated() throws Throwable 
	{
		String expectedMessage = "30";
		Thread.sleep(2000);
		WebElement element = wd.findElement(By.xpath("(//*[@class='form-control disabled font-medium ng-untouched ng-pristine ng-valid'])[1]"));
		JavascriptExecutor jse = (JavascriptExecutor)wd;
		Object message = jse.executeScript("return arguments[0].value", element);
		System.out.println(message.toString());		
 		Assert.assertTrue(message.toString().contains(expectedMessage));
	}

	//TC_02
	@And("^User Validate VAT on Purchase is auto populated$")
	public void user_Validate_VAT_on_Purchase_is_auto_populated() throws Throwable 
	{
		String expectedMessage = "30";
		Thread.sleep(2000);
		WebElement element = wd.findElement(By.xpath("(//*[@class='form-control disabled font-medium ng-untouched ng-pristine ng-valid'])[2]"));
		JavascriptExecutor jse = (JavascriptExecutor)wd;
		Object message = jse.executeScript("return arguments[0].value", element);
		System.out.println(message.toString());		
 		Assert.assertTrue(message.toString().contains(expectedMessage));
	}

	
	//TC_03
	@And("^User Validate Net Tax Liabillity is auto populated$")
	public void user_Validate_Net_Tax_Liabillity_is_auto_populated() throws Throwable 
	{
		String expectedMessage = "0";
		Thread.sleep(2000);
		WebElement element = wd.findElement(By.xpath("(//*[@class='form-control disabled font-medium ng-untouched ng-pristine ng-valid'])[3]"));
		JavascriptExecutor jse = (JavascriptExecutor)wd;
		Object message = jse.executeScript("return arguments[0].value", element);
		System.out.println(message.toString());		
 		Assert.assertTrue(message.toString().contains(expectedMessage));
	}
	//TC_04
	@And("^User Validate Net amount payable in cash is auto populated$")
	public void user_Validate_Net_amount_payable_in_cash_is_auto_populated() throws Throwable 
	{
		String expectedMessage = "0";
		Thread.sleep(2000);
		WebElement element = wd.findElement(By.xpath("(//*[@class='form-control disabled font-semibold ng-untouched ng-pristine ng-valid'])[1]"));
		JavascriptExecutor jse = (JavascriptExecutor)wd;
		Object message = jse.executeScript("return arguments[0].value", element);
		System.out.println(message.toString());		
 		Assert.assertTrue(message.toString().contains(expectedMessage));

	}
	//TC_05
	@And("^User Validate Net Reimbursement Carryforward is auto populated$")
	public void user_Validate_Net_Reimbursement_Carryforward_is_auto_populated() throws Throwable 
	{
		String expectedMessage = "0";
		Thread.sleep(2000);
		WebElement element = wd.findElement(By.xpath("(//*[@class='form-control disabled font-semibold ng-untouched ng-pristine ng-valid'])[2]"));
		JavascriptExecutor jse = (JavascriptExecutor)wd;
		Object message = jse.executeScript("return arguments[0].value", element);
		System.out.println(message.toString());		
 		Assert.assertTrue(message.toString().contains(expectedMessage));
	}
		
	//TC_06
	@And("^User Validate Interest is auto populated$")
	public void user_Validate_Interest_is_auto_populated() throws Throwable 
	{
		String expectedMessage = "0";
		Thread.sleep(2000);
		WebElement element = wd.findElement(By.xpath("(//*[@class='form-control disabled font-medium ng-untouched ng-pristine ng-valid'])[5]"));
		JavascriptExecutor jse = (JavascriptExecutor)wd;
		Object message = jse.executeScript("return arguments[0].value", element);
		System.out.println(message.toString());		
 		Assert.assertTrue(message.toString().contains(expectedMessage));

	}

	//TC_07
	@And("^User Validate Late fees is auto populated$")
	public void user_Validate_Late_fees_is_auto_populated() throws Throwable 
	{
		String expectedMessage = "0";
		Thread.sleep(2000);
		WebElement element = wd.findElement(By.xpath("(//*[@class='form-control disabled font-medium ng-untouched ng-pristine ng-valid'])[4]"));
		JavascriptExecutor jse = (JavascriptExecutor)wd;
		Object message = jse.executeScript("return arguments[0].value", element);
		System.out.println(message.toString());		
 		Assert.assertTrue(message.toString().contains(expectedMessage));
	}
	
	//TC_08	
	@And("^User Validate Penalty is auto populated$")
	public void user_Validate_Penalty_is_auto_populated() throws Throwable 
	{
		String expectedMessage = "0";
		Thread.sleep(2000);
		WebElement element = wd.findElement(By.xpath("(//*[@class='form-control disabled font-medium ng-untouched ng-pristine ng-valid'])[6]"));
		JavascriptExecutor jse = (JavascriptExecutor)wd;
		Object message = jse.executeScript("return arguments[0].value", element);
		System.out.println(message.toString());		
 		Assert.assertTrue(message.toString().contains(expectedMessage));
	}	
	
	//TC_09
	@And("^User click on File button \"([^\"]*)\" and navigate to Payment of Tax page$")
	public void user_click_on_File_button_and_navigate_to_Payment_of_Tax_page(String value) throws Throwable 
	{
		System.out.println("use click on month");
		clickOn(value, "");
	}
	//TC_09
	@And("^User click on Proceed to pay button$")
	public void user_click_on_Proceed_to_pay_button() throws Throwable 
	{
		clickOn("paymentProceedtoPay","");
	}
	//TC_09
	@And("^User see Payment Method page$")
	public void user_see_Payment_Method_page() throws Throwable 
	{
		System.out.println("User see Payment of TAx Page");
		String expectedMessage = "Payment of Tax";
		String message = wd.findElement(By.xpath("//*[contains(text(),'Payment of Tax')]")).getText();
		Assert.assertTrue(message.contains(expectedMessage));
	}
	
	//TC_10
	@And("^User click on previous button and it navigate to dashboard$")
	public void user_click_on_previous_button_and_it_navigate_to_dashboard() throws Throwable 
	{
	    clickOn("paymentPrevious","");
	    Thread.sleep(1000);
	    String expectedMessage = "VAT e-Filing";
		String message = wd.findElement(By.xpath("(//*[contains(text(),'VAT e-Filing')])[2]")).getText();
		Assert.assertTrue(message.contains(expectedMessage));
		Thread.sleep(1000);
	}
	
	//TC_11 
	@And("^User Validate Reimbursement of Previous period is auto populated$")
	public void user_Validate_Reimbursement_of_Previous_period_is_auto_populated() throws Throwable 
	{
		String expectedMessage = "0";
		Thread.sleep(2000);
		WebElement element = wd.findElement(By.xpath("(//*[@class='form-control disabled font-medium ng-untouched ng-pristine ng-valid'])[7]"));
		JavascriptExecutor jse = (JavascriptExecutor)wd;
		Object message = jse.executeScript("return arguments[0].value", element);
		System.out.println(message.toString());		
 		Assert.assertTrue(message.toString().contains(expectedMessage));
		
	}

	//TC_12
	@And("^User check the period label for month$")
	public void user_check_the_period_label_for_month() throws Throwable 
	{
		String expectedMessage = "February, 2018";
		Thread.sleep(2000);
		WebElement element = wd.findElement(By.xpath("(//*[@class='rounded form-control'])"));
		JavascriptExecutor jse = (JavascriptExecutor)wd;
		Object message = jse.executeScript("return arguments[0].value", element);
		System.out.println(message.toString());		
 		Assert.assertTrue(message.toString().contains(expectedMessage));
	}
	

}
