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
			//	"classpath:features/02_01_Login.feature",
				//"classpath:features/07EfilingAPI.feature.feature",	
		/*		"classpath:features/04_DV_1377_ManageVatRegistration.feature",
				

				"classpath:features/05_DV_1376_AcceptRejectAdditionalClarification.feature",
				"classpath:features/07EfilingAPI.feature",
				"classpath:features/09_DV_2389_calculation_with_offset.feature",		
				"classpath:features/10_DV_2390_e_filing.feature",
				"classpath:features/11_DV_2391_eFile_Preview.feature",
				"classpath:features/12_1_DV_2394_Landing_Screen.feature",
				"classpath:features/13_3DV_2394_Total_Liability.feature",
				"classpath:features/14_ViewAllStatementofTransaction.feature",
				//"classpath:features/15_01_TaxBillPayment.feature",		
				"classpath:features/16_00AssessmentWait.feature",
				
				"classpath:features/16_01_DV_2882_Manual_Assessed_LandingScreen.feature",
				"classpath:features/17_03_DV_2881_OP_TD_Ad_with_Ass_and_Reass.feature",
				"classpath:features/18_05_DV_2880_Tax_Deductable_Ass_and_Reass_Adjustement.feature",
				"classpath:features/19_07_DV_2879_ManAssess_AsseList_Adjustement.feature",
				"classpath:features/20_09_DV_2878_Assessment_Summary_Manual.feature",
			//	"classpath:features/21_11_DV_2876_manual_EFD_All.feature",
				"classpath:features/22_PaymentSummaryLiabilityCalculationPaymentDueManualAssessment.feature",
				"classpath:features/23_02_DV_2882_Assessed_List.feature",
				"classpath:features/24_04_DV_2881_OP_TD_Ad_with_Ass_and_Reass_AssessedList.feature",
				"classpath:features/25_06_DV_2880_Tax_Deductable_Ass_and_Reass_Adjustement_Assessed_List.feature",
				"classpath:features/26_08_DV_2879_Assessed.feature",
				
				"classpath:features/27_10_DV_2878_Assessment_Summary_Assessed.feature",
			//"classpath:features/28_12_DV_2876_AssessedList_EFD_All.feature",
				"classpath:features/29_PaymentSummaryLiabilityCalculationPaymentDueManualReAssessment.feature"*/
				//"classpath:features/30_TaxPayer_Portal_objection_appeal.feature"
		/*	"classpath:features/32_0DebtRecord.feature",
			"classpath:features/32_DebtManagementLandingScreen.feature",
			"classpath:features/33_DebtManagementUnassignedDebt.feature",
			"classpath:features/34_DebtManagementAssignedDebtList.feature",
			"classpath:features/35_DebtCollectionCaseScreen.feature",
			"classpath:features/36_popupofAgeingofArrears.feature",
			"classpath:features/37_NotificationPopUp.feature"*/
				
				//"classpath:features/42_AccountAdjustmentStmtofTransac.feature"
				
				
				"classpath:features/51EFDManufacture.feature",
				"classpath:features/52EFDVendor.feature"
				
				
			
				
				




		},
		glue = "org.drc.vat.StepDefinitions",
		plugin = {"com.cucumber.listener.ExtentCucumberFormatter:","html:test-output/cucumber-report", 
				  "pretty","html:target/site/cucumber-pretty","json:target/cucumber/cucumber.json"}
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
		}		else if(scenario.getName().toLowerCase().contains("temp logout")){
			app.templogout();
		} 
		else {
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