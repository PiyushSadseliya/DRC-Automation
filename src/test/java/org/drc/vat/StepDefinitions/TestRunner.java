package org.drc.vat.StepDefinitions;

import com.cucumber.listener.ExtentProperties;
import com.cucumber.listener.Reporter;
import com.relevantcodes.extentreports.ExtentReports;
import com.relevantcodes.extentreports.ExtentTest;

import cucumber.api.CucumberOptions;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import org.apache.commons.io.FileUtils;
import org.drc.vat.appmanager.ApplicationManager;
import org.openqa.selenium.remote.BrowserType;
import org.openqa.selenium.support.ui.Sleeper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.BeforeSuite;
import java.awt.datatransfer.StringSelection;
import java.awt.*;
import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

import static org.drc.vat.appmanager.HelperBase.logout;

@CucumberOptions(features = {
		"src/test/resources/features/End2EndTest.feature" }, glue = "org.drc.vat.StepDefinitions", plugin = {
				"com.cucumber.listener.ExtentCucumberFormatter:",
				"html:test-output/cucumber-report" }, tags = { "@SP_03_Vat_Registartion,"
						+ "@SP_04_Manage_Vat_Registration," + "@SP_11_E-Filling," + "@SP_07.1_FX_Management_Admin,"
						+ "@SP_07.2_FX_Management_Admin_Currency," + "@SP_07.3_FX_Management_Supervisor,"
						+ "@SP_12_Assessment_Reassessment," + "@SP_09.1_Objection&Appeal_Taxpayer,"
						+ "@SP_09.2_Objection&Appeal_admin," + "@SP_10.1_DebtMangement," + "@SP_10.2_DebtMangement"
						+ "@SP_15_Account_Adjustment," + "@SP_17_Manufactorer_Portal," + "@SP_17_Helpdesk_Taxpayer,"
						+ "@SP_17_Helpdesk_Internal," + "@SP_17_TaxPayerProfile,"
						+ "@SP_18.1_IT_Support,@SP_18.2_IT_Support" })
// tags = { "@SP_03_Vat_Registartion" })
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
		extentProperties.setReportPath(outputDir + "/SmokeSuiteExtentReport" + timestamp + ".html");

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

		} else if (scenario.getName().toLowerCase().contains("manufactorer portal")) {
			app.callmanufactoreportal();
		} else if (scenario.getName().toLowerCase().contains("vendor portal")) {
			app.callvendorportal();
		} else {
			if (scenario.getName().toLowerCase().contains("supervisor")) {
				app.callinternalportalsuper();
			} else if (scenario.getName().toLowerCase().contains("tax-officer")) {
				app.callinternalportaltaxofficer();
			} else if (scenario.getName().toLowerCase().contains("ituser")) {
				app.call1trackituser();
			}
			else {
				app.callinternalportaladmin();
			}
		}
		Thread.sleep(5000);
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
		Thread.sleep(5000);
		app.stop();

	}
}
