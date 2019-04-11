package org.drc.vat.StepDefinitions;

import com.cucumber.listener.ExtentProperties;
import com.cucumber.listener.Reporter;
import com.relevantcodes.extentreports.ExtentReports;
import cucumber.api.CucumberOptions;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import org.apache.commons.io.FileUtils;
import org.drc.vat.appmanager.*;
import org.openqa.selenium.remote.BrowserType;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.BeforeSuite;
import static org.drc.vat.appmanager.HelperBase.sleepWait;
import java.awt.*;
import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

@CucumberOptions(features = {
		"src/test/resources/features/End2EndTest.feature" }, glue = "org.drc.vat.StepDefinitions", plugin = {
				"com.cucumber.listener.ExtentCucumberFormatter:",
				"html:test-output/cucumber-report" }, tags = { "@SP_03_Vat_Registartion,@SP_04_Manage_Vat_Registration,@SP_11_E-Filling" 
					//	+ "@SP_07.1_FX_Management_Admin,"
					//	+ "@SP_07.2_FX_Management_Admin_Currency," + "@SP_07.3_FX_Management_Supervisor,"
						//+ "@SP_12_Assessment_Reassessment," + "@SP_09.1_Objection&Appeal_Taxpayer,"
					//	+ "@SP_09.2_Objection&Appeal_admin," + "@SP_10.1_DebtMangement," + "@SP_10.2_DebtMangement,"
					//	+ "@SP_15_Account_Adjustment,"// + "  @SP_17.1_Manufacturer_Portal," + "@SP_17.2_Vendor_Portal,"
					//	+ "@SP_17_Helpdesk_Taxpayer," + "@SP_17_Helpdesk_Internal," 
					//	+ "@SP_17_TaxPayerProfile,"
					//	+ "@SP_18.1_IT_SupportAdmin," + "@SP_18.2_IT_SupportUser," 
					//	+"@SP_19.1_Fuel_Management_Admin, "
					//	+ "@SP_19.2_Fuel_Management_Supervisor, "
					//	+ " @SP_19.3_Fuel_Management_Taxofficer," + "@SP_20.1_VATRateManagement, "
					//	+ "@SP_20.2_VATRateManagementApprove" 
					}
)
//tags = { "@SP_03_Vat_Registartion," + "@SP_04_Manage_Vat_Registration" }
public class TestRunner extends AbstractTestNGCucumberTests {

	private Logger logger = LoggerFactory.getLogger(TestRunner.class);
	private String outputDir = "test-output/" + new Date().toString().substring(0, 10);
	private String timestamp = new SimpleDateFormat("_HHmmss").format(new Date());
	public static ExtentReports extent;
	public static final String projdir = System.getProperty("user.dir");
	private static ApplicationManager app = new ApplicationManager((System.getProperty("browser", BrowserType.CHROME)));

	@BeforeSuite
	public void setUP_Mobilenop() throws IOException, AWTException {
		// app.initUrl();
		ExtentProperties extentProperties = ExtentProperties.INSTANCE;
		extentProperties.setReportPath(outputDir + "/SmokeSuiteDevExtentReport" + timestamp + ".html");

	}

	@AfterSuite(alwaysRun = true)
	public void tearDown() throws Exception {
		// Reporter.loadXMLConfig("src/test/resources/extent-config.xml");
		// Reporter.setSystemInfo("user", System.getProperty("user.name"));
		// app.stop();

	}

	@Before
	public void startScenario(Scenario scenario) throws IOException, AWTException, InterruptedException {
		app.initUrl();
		if (scenario.getName().toLowerCase().contains("tax payer portal")) {
			app.callurl();
		} else if (scenario.getName().toLowerCase().contains("manufacturer portal")) {
			app.callmanufacturerportal();
		} else if (scenario.getName().toLowerCase().contains("vendor portal")) {
			app.callvendorportal();
		} else {
			if (scenario.getName().toLowerCase().contains("supervisor")) {
				app.callinternalportalsupervisor();
			} else if (scenario.getName().toLowerCase().contains("tax-officer")) {
				app.callinternalportaltaxofficer();
			} else if (scenario.getName().toLowerCase().contains("ituser")) {
				app.call1trackituser();
			} else {
				app.callinternalportaladmin();
			}
		}
		sleepWait(2000);
		logger.info("Start scenario: " + scenario.getName());
	}

	@After
	public void endScenario(Scenario scenario) throws Exception {

		String screenshot = scenario.getName();
		File src = app.takeScreenshotAsFile();
		File dest = new File(
				System.getProperty("user.dir") + "/" + outputDir + "/screenshots/" + screenshot + timestamp + ".png");
		FileUtils.copyFile(src, dest);
		Reporter.addScreenCaptureFromPath(dest.toString());
		scenario.embed(app.takeScreenshot(), "image/png");
		logger.info("Stop scenario: " + scenario.getName());
		Reporter.loadXMLConfig("src/test/resources/extent-config.xml");
		Reporter.setSystemInfo("user", System.getProperty("user.name"));
		sleepWait(2000);
		app.stop();

	}
}
