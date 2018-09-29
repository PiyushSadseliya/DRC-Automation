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

import static org.drc.vat.appmanager.HelperBase.logout;

@CucumberOptions(features = {"classpath:features/DV_2394_Total_Liability.feature"},
       glue = "org.drc.vat.StepDefinitions",
        plugin = {"com.cucumber.listener.ExtentCucumberFormatter:",
                  "html:test-output/cucumber-report"}
        		//VATeFiling
        		//tags={"@TC_10"}
        		//tags={"@TC_07,@TC_08,@TC_10"}
        		//tags={"@TC_01_Login,@TC_02,@TC_04,@TC_05"}
        		//tags={"@TC_49_Under_review,@TC_55_Cancel_button"}
        		//tags={"@TC_001,@TC_07,@TC_08,@TC_09,@TC_10,@TC_11,@TC_12,@TC_13"}
        		//tags={"@TC_001,@TC_02,@TC_03,@_TC_04,@TC_05"}
        	//	tags={"@TC_01,@TC_06_Name_of_Applicant_TAX_Payer,@TC_06_NITVA,@TC_06_Business_Type,@TC_06_company_Size,@TC_06_Assessment_Officer, @TC_06_Status"}
        	//	tags={"@TC_01,@TC_06_NITVA"}
//tags={"@TC_01,@TC_06_Name_of_Applicant_TAX_Payer,@TC_06_NITVA,@TC_06_Business_Type,@TC_06_company_Size,@TC_06_Assessment_Officer, @TC_06_Status,@TC_07,@TC_08,@TC_09,@TC_10"}
				//tags={"@Run_Valid_Login,@Run_InValid_Login"}
        		//tags={"@Run_InValid_Login"}
        		//tags={"@Forgot_Password_Email_Valid"}
        		//tags={"@Forgot_Password_Email_InValid"}
        		//tags={"@Run_Valid_Login"}
        		//tags={"@Forgot_Password_New_Confirm_Valid"}
				//tags={"@Forgot_Password_New_Confirm_InValid"}
                 )

	

	
//ManualAssessmentSalesAdjustement

public class TestRunner extends AbstractTestNGCucumberTests {


    private Logger logger = LoggerFactory.getLogger(TestRunner.class);
    private String outputDir = "test-output/" + new Date().toString().substring(0,10);
    private String timestamp = new SimpleDateFormat("_HHmmss").format(new Date());

    private static ApplicationManager app =
            new ApplicationManager((System.getProperty("browser", BrowserType.CHROME)));

    @BeforeSuite
    public void setUp() throws IOException, AWTException, InterruptedException
    {
        app.initUrl();
        //app.auth();        
        ExtentProperties extentProperties = ExtentProperties.INSTANCE;
        extentProperties.setReportPath(outputDir + "/ExtentReport" + timestamp + ".html");
    }

    @AfterSuite(alwaysRun = true)
    public void tearDown() throws IOException 
    {
        //logout();
        app.stop();
        Reporter.loadXMLConfig("src/test/resources/extent-config.xml");
        Reporter.setSystemInfo("user", System.getProperty("user.name"));
    }

    @Before
    public void startScenario(Scenario scenario) throws IOException, AWTException, InterruptedException 
    {
    	app.callurl();
    	//app.auth();   	
        logger.info("Start scenario: " + scenario.getName());
    }

	@After
    public void endScenario(Scenario scenario) throws Exception {
        String screenshot = scenario.getName();
        File src = app.takeScreenshotAsFile();
        File dest = new File(System.getProperty("user.dir") + "/" + outputDir + "/screenshots/" + screenshot + timestamp + ".png");
        FileUtils.copyFile(src, dest);
        Reporter.addScreenCaptureFromPath(dest.toString());
        scenario.embed(app.takeScreenshot(), "image/png");
       
        logger.info("Stop scenario: " + scenario.getName());
       
    }
}