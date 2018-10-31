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

@CucumberOptions(features = {"classpath:features/DV_2881_OP_TD_Ad_with_Ass_and_Reass.feature"},
       glue = "org.drc.vat.StepDefinitions",
        plugin = {"com.cucumber.listener.ExtentCucumberFormatter:",
                  "html:test-output/cucumber-report"},
        			tags={"@TC_01_Manual_2881,@TC_08_20_Manual_2881"}
                 )

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
    	//app.callurl();
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