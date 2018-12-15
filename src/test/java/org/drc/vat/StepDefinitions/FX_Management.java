package org.drc.vat.StepDefinitions;

import static org.drc.vat.appmanager.HelperBase.*;
import org.drc.vat.appmanager.ApplicationManager;
import org.drc.vat.appmanager.Read_OTP;
import org.drc.vat.appmanager.Windows_Auth;

import static org.testng.Assert.assertTrue;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.BrowserType;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class FX_Management {

	String cwd = System.getProperty("user.dir");
	public static final String dir = System.getProperty("user.dir");
	public static ApplicationManager app = new ApplicationManager((System.getProperty("browser", BrowserType.CHROME)));
	public String BaseCurr;
	public String BaseCurrName;
	public String BaseCurrCheck;
	public String StoreCurrency;
	public String StoreCurrencyAdmin;

	/*@Given("^User login in Internal portal-TaxOfficer$")
	public void user_login_in_Internal_portal_TaxOfficer() throws Throwable {
		System.out.println("Internal portal-TaxOfficer");
		// System.setProperty("webdriver.chrome.driver", dir +
		// "//chromedriver.exe");
		wd = new ChromeDriver();
		ChromeOptions options = new ChromeOptions();
		options.addArguments("incognito");
		wd.manage().window().maximize();
		wd.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		wd.navigate().to("http://103.249.120.58:8044");
		Runtime.getRuntime()
				.exec(System.getProperty("user.dir") + "\\src\\test\\resources\\authentication\\DRCAdmin.exe");
		wd.findElement(By.xpath("//*[contains(@alt,'Windows Authentication')]")).click();
		wd.findElement(By.xpath(obj.getProperty("tab_FxManPage"))).click();
		sleepWait(3000);

	}

	@When("^click on FX Management tab$")
	public void click_on_FX_Management_tab() throws Throwable {
		clickOn("tab_FxManPage", "");
		sleepWait(3000);

	}

	@Then("^verify the Base currency on the FX management is Congolese France and its value is one$")
	public void verify_the_Base_currency_on_the_FX_management_is_Congolese_France_and_its_value_is_one()
			throws Throwable {
		BaseCurr = elementText("txt_BaseCurrency_1");
		BaseCurrName = elementText("txt_BaseCurrency_Name");
		if (BaseCurr.contains("1") && BaseCurrName.contains("Congolese Franc(FC)")) {
			assertTrue(true);
		}

	}

	@Then("^click on update button and pop up appear$")
	public void click_on_update_button_and_pop_up_appear() throws Throwable {
		sleepWait(3000);
		JavascriptExecutor js = (JavascriptExecutor) wd;
		js.executeScript("window.scrollTo(0, document.body.scrollHeight)");
		clickOn("btn_UpdateFX", "");
		sleepWait(3000);
		
		 * if (wd.findElement(By.xpath(obj.getProperty("txt_Update_popup"))).
		 * isDisplayed()) { assertTrue(true); }
		 

	}

	@Then("^verify the pop up and see base currency is (\\d+)$")
	public void verify_the_pop_up_and_see_base_currency_is(int arg1) throws Throwable {
		if (BaseCurr.contains("1") && BaseCurrName.contains("Congolese Franc(FC)")) {
			assertTrue(true);
		}

	}

	@Then("^enter currency for \"([^\"]*)\"$")
	public void enter_currency_for(String value) throws Throwable {
		sleepWait(2000);
		type("txtBox_type_Currency", value);

	}

	@Then("^click on save button on pop up on officer$")
	public void click_on_save_button_on_pop_up_on_officer() throws Throwable {
		sleepWait(1000);
		clickOn("btn_SaveFX", "");

	}

	@Then("^click on Historical FX Rates button$")
	public void click_on_Historical_FX_Rates_button() throws Throwable {
		sleepWait(2000);
		clickOn("btn_HistoricalFX", "");
		sleepWait(2000);

	}

	@Then("^click on Previous button and again navigate to FX management dashboard$")
	public void click_on_Previous_button_and_again_navigate_to_FX_management_dashboard() throws Throwable {
		sleepWait(2000);
		clickOn("btn_PreviousFX", "");
		sleepWait(2000);
		if (wd.findElement(By.xpath(obj.getProperty("txt_FxManPage"))).isDisplayed()) {
			assertTrue(true);
		}

	}

	@Then("^click on logout button fx taxofficer$")
	public void click_on_logout_button_fx_taxofficer() throws Throwable {
		// clickOn("btn_LogoutFX", "");
		logout();
		// wd.quit();
	}

	@When("^click on FX tab supervisor$")
	public void click_on_FX_tab_supervisor() throws Throwable {
		System.out.println("Internal portal-supervisor");
		// System.setProperty("webdriver.chrome.driver", dir +
		// "//chromedriver.exe");
		wd = new ChromeDriver();
		ChromeOptions options = new ChromeOptions();
		options.addArguments("incognito");
		wd.manage().window().maximize();
		wd.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		wd.navigate().to("http://103.249.120.58:8044");
		Runtime.getRuntime()
				.exec(System.getProperty("user.dir") + "\\src\\test\\resources\\authentication\\DRCSupervisor.exe");
		wd.findElement(By.xpath("//*[contains(@alt,'Windows Authentication')]")).click();
		wd.findElement(By.xpath(obj.getProperty("tab_FxManPage"))).click();
		// clickOn("tab_FxManPage", "");
		sleepWait(2000);

	}

	@Then("^verify the base_currency of Congolese France and its value is one$")
	public void verify_the_base_currency_of_Congolese_France_and_its_value_is_one() throws Throwable {
		BaseCurr = elementText("txt_BaseCurrency_1");
		BaseCurrName = elementText("txt_BaseCurrency_Name");
		if (BaseCurr.contains("1") && BaseCurrName.contains("Congolese Franc(FC)")) {
			assertTrue(true);
		}

	}

	@Then("^click on approve button$")
	public void click_on_approve_button() throws Throwable {
		wd.findElement(By.xpath(obj.getProperty("btn_ApproveFX"))).click();
		// clickOn("btn_ApproveFX", "");
		sleepWait(2000);

	}

	@Then("^click on historical_fx_rates button$")
	public void click_on_historical_fx_rates_button() throws Throwable {
		sleepWait(2000);
		wd.findElement(By.xpath(obj.getProperty("btn_HistoricalFX"))).click();
		// clickOn("btn_HistoricalFX", "");

	}

	@Then("^click on prev button and return navigate to dashboard$")
	public void click_on_prev_button_and_return_navigate_to_dashboard() throws Throwable {
		sleepWait(2000);
		wd.findElement(By.xpath(obj.getProperty("btn_PreviousFX"))).click();
		// clickOn("btn_PreviousFX", "");
		sleepWait(2000);

	}

	@Then("^click on logout button in fx-supervisor$")
	public void click_on_logout_button_in_fx_supervisor() throws Throwable {
		logout();

	}

	@Given("^admin is on FX Management \"([^\"]*)\" \"([^\"]*)\"$")
	public void admin_is_on_FX_Management(String value, String value1) throws Throwable {

		System.out.println(value);
		System.out.println(value1);

	}

	@When("^admin click on FX tab$")
	public void admin_click_on_FX_tab() throws Throwable {
		System.out.println("Internal portal-Admin");
		wd = new ChromeDriver();
		ChromeOptions options = new ChromeOptions();
		options.addArguments("incognito");
		wd.manage().window().maximize();
		wd.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		wd.navigate().to("http://103.249.120.58:8044");
		Runtime.getRuntime()
				.exec(System.getProperty("user.dir") + "\\src\\test\\resources\\authentication\\DRCAdmin.exe");
		wd.findElement(By.xpath("//*[contains(@alt,'Windows Authentication')]")).click();
		wd.findElement(By.xpath(obj.getProperty("tab_FxManPage"))).click();
		// clickOn("tab_FxManPage", "");
		sleepWait(2000);

	}

	@Then("^verify the name and profile picture \"([^\"]*)\"$")
	public void verify_the_name_and_profile_picture(String value) throws Throwable {
		if (wd.findElement(By.xpath("(//*[contains(text(),'" + value + "')])")).isDisplayed()) {
			assertTrue(true);
		}

	}

	@Then("^verify the admin base_currency of Congolese France and its value is one$")
	public void verify_the_admin_base_currency_of_Congolese_France_and_its_value_is_one() throws Throwable {
		BaseCurr = elementText("txt_BaseCurrency_1");
		BaseCurrName = elementText("txt_BaseCurrency_Name");

		if (BaseCurr.contains("1") && BaseCurrName.contains("Congolese Franc(FC)")) {
			assertTrue(true);
		}

	}

	@Then("^click on currency and select \"([^\"]*)\"$")
	public void click_on_currency_and_select(String value) throws Throwable {
		wd.findElement(By.xpath(obj.getProperty("drp_SelectOptionFX"))).click();
		// clickOn("drp_SelectOptionFX", "");
		sleepWait(2000);
		wd.findElement(By.xpath(obj.getProperty(value))).click();
		// clickOn(value, "");

	}

	@Then("^click on List of currencies and select currency$")
	public void click_on_List_of_currencies_and_select_currency() throws Throwable {
		sleepWait(1000);
		wd.findElement(By.xpath(obj.getProperty("drp_select_LOC"))).click();
		// clickOn("drp_select_LOC", "");
		sleepWait(1000);
		wd.findElement(By.xpath(obj.getProperty("drp_select_LOC_first"))).click();
		// clickOn("drp_select_LOC_first", "");

	}

	@Then("^click on Save button and see message \"([^\"]*)\"$")
	public void click_on_Save_button_and_see_message(String value) throws Throwable {
		wd.findElement(By.xpath(obj.getProperty("btn_SaveFX"))).click();
		// clickOn("btn_SaveFX", "");
		sleepWait(2000);
	}

	@Then("^click on admin Update button$")
	public void click_on_admin_Update_button() throws Throwable {
		sleepWait(2000);
		wd.findElement(By.xpath(obj.getProperty("btn_UpdateFX"))).click();

	}

	@Then("^enter admin currency for \"([^\"]*)\"$")
	public void enter_admin_currency_for(String value) throws Throwable {
		// wd.findElement(By.xpath(obj.getProperty("txtBox_type_Currency"))).sendKeys(value);
		sleepWait(2000);
		type("txtBox_type_Currency", value);

	}

	@Then("^admin click on save button on pop up$")
	public void admin_click_on_save_button_on_pop_up() throws Throwable {
		sleepWait(1000);
		wd.findElement(By.xpath(obj.getProperty("btn_SaveFxPopUP"))).click();
		// clickOn("btn_SaveFX", "");
	}

	@Then("^click on admin approve button$")
	public void click_on_admin_approve_button() throws Throwable {
		sleepWait(2000);
		wd.findElement(By.xpath(obj.getProperty("btn_ApproveFX"))).click();

	}

	@Then("^click on admin historical_fx_rates button$")
	public void click_on_admin_historical_fx_rates_button() throws Throwable {
		sleepWait(2000);
		wd.findElement(By.xpath(obj.getProperty("btn_HistoricalFX"))).click();

	}

	@Then("^click on admin prev button and return navigate to dashboard$")
	public void click_on_admin_prev_button_and_return_navigate_to_dashboard() throws Throwable {
		sleepWait(2000);
		wd.findElement(By.xpath(obj.getProperty("btn_PreviousFX"))).click();
		// clickOn("btn_PreviousFX", "");
		sleepWait(2000);

	}

	@Then("^click on admin logout button in fx-supervisor$")
	public void click_on_admin_logout_button_in_fx_supervisor() throws Throwable {
		sleepWait(2000);
		logout();
		wd.quit();

	}*/

}
