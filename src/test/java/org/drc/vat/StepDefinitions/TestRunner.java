package org.drc.vat.StepDefinitions;

import com.cucumber.listener.ExtentProperties;
import com.cucumber.listener.Reporter;
import cucumber.api.CucumberOptions;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import gherkin.formatter.model.Feature;

import org.apache.commons.io.FileUtils;
import org.drc.vat.appmanager.ApplicationManager;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
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
import static org.drc.vat.appmanager.HelperBase.logout;
import static org.drc.vat.appmanager.HelperBase.wd;
import static org.drc.vat.appmanager.HelperBase.assertEnding;
import static org.drc.vat.appmanager.HelperBase.clearCache;
import static org.drc.vat.appmanager.HelperBase.assessmentOfficer;
import static org.drc.vat.appmanager.HelperBase.sleepWait;

<<<<<<< HEAD
@CucumberOptions(features = { "classpath:features/16_01_DV_2882_Manual_Assessed_LandingScreen.feature",
		"classpath:features/17_03_DV_2881_OP_TD_Ad_with_Ass_and_Reass.feature",
		"classpath:features/18_05_DV_2880_Tax_Deductable_Ass_and_Reass_Adjustement.feature",
		"classpath:features/19_07_DV_2879_ManAssess_AsseList_Adjustement.feature",
		"classpath:features/20_09_DV_2878_Assessment_Summary_Manual.feature",
		"classpath:features/22_PaymentSummaryLiabilityCalculationPaymentDueManualAssessment.feature",
		"classpath:features/23_02_DV_2882_Assessed_List.feature",
		"classpath:features/24_04_DV_2881_OP_TD_Ad_with_Ass_and_Reass_AssessedList.feature",
		"classpath:features/25_06_DV_2880_Tax_Deductable_Ass_and_Reass_Adjustement_Assessed_List.feature",
		"classpath:features/26_08_DV_2879_Assessed.feature",
		"classpath:features/27_10_DV_2878_Assessment_Summary_Assessed.feature",
		"classpath:features/29_PaymentSummaryLiabilityCalculationPaymentDueManualReAssessment.feature",
		"classpath:features/DV_4007_IT_Support_Admin.feature", "classpath:features/DV_4007_IT_Support_User1.feature" },

		/*
		 * @CucumberOptions(features =
		 * {"classpath:features/20_09_DV_2878_Assessment_Summary_Manual.feature"
		 * },
		 */

		glue = "org.drc.vat.StepDefinitions", plugin = { "com.cucumber.listener.ExtentCucumberFormatter:",
				"html:test-output/cucumber-report" }, tags = { "@TC_ITSA_01_04 " }
// ,tags={"@TC_Extra_user_created_System,@TC_Extra_user_created_Payment_Related"}
)

=======
@CucumberOptions(features = {
		//		"classpath:features/01_userRegistration.feature",
		//		"classpath:features/02_01_Login.feature",
		//		"classpath:features/03_01uploadDocuments.feature",
		//"classpath:features/03_02VATRegistration.feature",
		//		"classpath:features/04_DV_1377_ManageVatRegistration.feature",
		//		"classpath:features/05_DV_1376_AcceptRejectAdditionalClarification.feature",
		//"classpath:features/30_TaxPayer_Portal_objection_appeal.feature",
		"classpath:features/EFDVendor.feature"
},
glue = "org.drc.vat.StepDefinitions",
plugin = {"com.cucumber.listener.ExtentCucumberFormatter:","html:test-output/cucumber-report"}
//,tags= {"@TC_01,@TC_02,@TC_Search"}
		)
>>>>>>> 2c77e680d63dc4ac8a6bfaf84d5487025d193069
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
<<<<<<< HEAD
		} else if (scenario.getName().toLowerCase().contains("taxpayer portal")) {
=======
		}
		/**
		 *  taxpayer portal 
		 */

		else if (scenario.getName().toLowerCase().contains("taxpayer portal")) 
		{
>>>>>>> 2c77e680d63dc4ac8a6bfaf84d5487025d193069
			app.calltaxpayerportal();
		}
		else if (scenario.getName().contains("EFDinternalportal")) {
			app.EFDinternalportal();
		}		
		else if (scenario.getName().toLowerCase().contains("efd-manufacturerportal")) {
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
<<<<<<< HEAD
		/**
		 * Login with manufacture and vendor module
		 */
		else if (scenario.getName().toLowerCase().contains("manufactorer portal")) {
			app.callmanufactoreportal();
		} else if (scenario.getName().toLowerCase().contains("vendor portal")) {
			app.callvendorportal();
		}
=======

>>>>>>> 2c77e680d63dc4ac8a6bfaf84d5487025d193069
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
		// logout();

		logger.info("Stop scenario: " + scenario.getName());
	}
}