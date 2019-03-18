package org.drc.vat.StepDefinitions;

import com.cucumber.listener.ExtentProperties;
import com.cucumber.listener.Reporter;
import cucumber.api.CucumberOptions;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import org.apache.commons.io.FileUtils;
import org.drc.vat.appmanager.ApplicationManager;
import org.openqa.selenium.remote.BrowserType;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.BeforeSuite;
import java.awt.*;
import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import static org.drc.vat.appmanager.HelperBase.softAssert;


@CucumberOptions(features = {
		//"classpath:features/01_userRegistration.feature",
		//"classpath:features/02_01_Login.feature",
		//"classpath:features/03_02VATRegistration.feature",
		//"classpath:features/FuelManagement_Supervisor.feature",
		//"classpath:features/04_DV_1377_ManageVatRegistration.feature",
		//"classpath:features/05_DV_1376_AcceptRejectAdditionalClarification.feature",
		
//		"classpath:features/09_DV_2389_calculation_with_offset.feature",
//		"classpath:features/10_DV_2390_e_filing.feature",
//		"classpath:features/11_DV_2391_eFile_Preview.feature",
		
//		"classpath:features/12_1_DV_2394_Landing_Screen.feature",
//		"classpath:features/13_3DV_2394_Total_Liability.feature",
//		"classpath:features/14_ViewAllStatementofTransaction.feature",
//		"classpath:features/15_01_TaxBillPayment.feature",
		
		//"classpath:features/30_TaxPayer_Portal_objection_appeal.feature",
		//"classpath:features/31_Internal_Portal_objection_appeal.feature",
		//"classpath:features/38_Payment_Agreement.feature",
		//"classpath:features/45_FX_Management_TaxOfficer.feature",
		//"classpath:features/46_FX_Management_Supervisor.feature",
		//"classpath:features/47_FX_Management_Admin.feature",
		//"classpath:features/48_Tax_Payer_Profile.feature",
		//"classpath:features/49_DV_3893_TaxPayer_Help_Desk.feature",
		//"classpath:features/50_DV_3893_TaxOfficer_Help_Desk_Internal.feature",
		//"classpath:features/30_TaxPayer_Portal_objection_appeal.feature",
		"classpath:features/DV_4316_Reconciliation.feature",
		//"classpath:features/48_Tax_Payer_Profile.feature",
		
		//"classpath:features/DV_4007_IT_Support_Admin.feature",
		//"classpath:features/DV_4007_IT_Support_User1.feature",
		
		
},
glue = "org.drc.vat.StepDefinitions",
plugin = {"com.cucumber.listener.ExtentCucumberFormatter:","html:test-output/cucumber-report"}
,tags= {"@e-filing_payment"}		

)

public class TestRunner extends AbstractTestNGCucumberTests {
	private Logger logger = LoggerFactory.getLogger(TestRunner.class);
	private String outputDir = "test-output/" + new Date().toString().substring(0, 10);
	private static boolean clearbrowsedata = false;
	private String timestamp = new SimpleDateFormat("_HHmmss").format(new Date());
	private static ApplicationManager app = new ApplicationManager((System.getProperty("browser", BrowserType.CHROME)));

	@BeforeSuite
	public void setUP_Mobilenop() throws IOException, AWTException {
		app.initUrl();
		ExtentProperties extentProperties = ExtentProperties.INSTANCE;
		extentProperties.setReportPath(outputDir + "/ExtentReport" + timestamp + ".html");
	}

	@AfterSuite(alwaysRun = true)
	public void tearDown() throws IOException {
		app.stop();
		Reporter.loadXMLConfig("src/test/resources/extent-config.xml");
		Reporter.setSystemInfo("user", System.getProperty("user.name"));
	}

	@Before
	public void startScenario(Scenario scenario) throws IOException, AWTException, InterruptedException {
		/**
		 * Login with Ketan.prajapati
		 */
		if (scenario.getName().toLowerCase().contains("internal portal")) {
			app.callinternalportal();

		}
		/**
		 * taxpayer portal
		 */
		else if (scenario.getName().toLowerCase().contains("taxpayer portal")) 
		{
			app.calltaxpayerportal();
		} else if (scenario.getName().contains("EFDinternalportal")) {
			app.EFDinternalportal();
		} else if (scenario.getName().toLowerCase().contains("efd-manufacturerportal")) {
			app.callmanufacturerportal();
		} else if (scenario.getName().toLowerCase().contains("vendor portal")) { 
			app.callvendorportal();
		}
		/**
		 * Login with rohit.patil
		 */
		else if (scenario.getName().toLowerCase().contains("fx taxofficer")) {
			app.callinternalportal_TaxOfficer();
		}
		/**
		 * Login with pooja.parmar
		 */
		else if (scenario.getName().toLowerCase().contains("supervisor")) {
			app.callinternalportal_Supervisor();
		} else if (scenario.getName().toLowerCase().contains("laxman")) {
			app.callinternalportal_Assessment_Officer();
		}

		/**
		 * Login with manufacture and vendor module
		 */
		else if (scenario.getName().toLowerCase().contains("vendor portal")) {
			app.callvendorportal();
		}

		/**
		 * For Demo login
		 */
		/**
		 * Login with Ketan.prajapati demo
		 */
		else if (scenario.getName().toLowerCase().contains("admin demo")) {
			app.callinternalportal_ketan_demo();
		}
		/**
		 * Login with rohit.patil demo
		 */
		else if (scenario.getName().toLowerCase().contains("taxofficer demo")) {
			app.callinternalportal_TaxOfficer_demo();
		}
		/**
		 * Login with rohit.patil
		 */
		else if (scenario.getName().toLowerCase().contains("fx taxofficer")) {
			app.callinternalportal_TaxOfficer();
		}
		/**
		 * Login with pooja.parmar
		 */
		else if (scenario.getName().toLowerCase().contains("supervisor")) {
			app.callinternalportal_Supervisor();
		} else if (scenario.getName().toLowerCase().contains("laxman")) {
			app.callinternalportal_Assessment_Officer();
		}
		/**
		 * 
		 * For Demo login
		 */
		/**
		 * Login with Ketan.prajapati demo
		 */
		else if (scenario.getName().toLowerCase().contains("admin demo")) {
			app.callinternalportal_ketan_demo();
		}
		/**
		 * Login with rohit.patil demo
		 */
		else if (scenario.getName().toLowerCase().contains("taxofficer demo")) {
			app.callinternalportal_TaxOfficer_demo();
		}

		else if (scenario.getName().toLowerCase().contains("itadminuser")) {
			app.call1trackitadminUser();
		} else if (scenario.getName().toLowerCase().contains("ituser")) {
			app.call1trackituser();
		}

		/**
		 * Login with pooja.parmar demo
		 */
		else if (scenario.getName().toLowerCase().contains("supervisor demo")) {
			app.callinternalportal_Supervisor_demo();
		} else if (scenario.getName().toLowerCase().contains("laxman demo")) {
			app.callinternalportal_Assessment_Officer_laxman_demo();
		} else {
			app.callurl();
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
		softAssert.assertAll();
		// logout();

		logger.info("Stop scenario: " + scenario.getName());
	}
}