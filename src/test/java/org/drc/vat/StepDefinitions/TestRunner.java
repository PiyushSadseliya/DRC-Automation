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
import java.awt.datatransfer.StringSelection;
import java.awt.*;
import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

import static org.drc.vat.appmanager.HelperBase.logout;

@CucumberOptions(features = {"src/test/resources/features"},
       glue = "org.drc.vat.StepDefinitions",
        plugin = {"com.cucumber.listener.ExtentCucumberFormatter:",
                  "html:test-output/cucumber-report"}
        //tags={"@Run"}
      )

public class TestRunner extends AbstractTestNGCucumberTests {


    private Logger logger = LoggerFactory.getLogger(TestRunner.class);
    private String outputDir = "test-output/" + new Date().toString().substring(0,10);
    private String timestamp = new SimpleDateFormat("_HHmmss").format(new Date());	

    private static ApplicationManager app =
            new ApplicationManager((System.getProperty("browser", BrowserType.CHROME)));

    @BeforeSuite
    public void setUP_Mobilenop() throws IOException, AWTException
    {
        app.initUrl();
        ExtentProperties extentProperties = ExtentProperties.INSTANCE;
        extentProperties.setReportPath(outputDir + "/ExtentReport" + timestamp + ".html");
     
    }

    @AfterSuite(alwaysRun = true)
    public void tearDown() throws Exception {
    	  // logout();
        //app.stop(); 
       //		http://103.249.120.58:8068
    	Reporter.loadXMLConfig("src/test/resources/extent-config.xml");
        Reporter.setSystemInfo("user", System.getProperty("user.name"));
 app.stop();
        
     
    }					

    @Before
    public void startScenario(Scenario scenario) throws IOException, AWTException, InterruptedException 
    {	
    
    		app.callurl();	
    	Thread.sleep(5000);
    	logger.info("Start scenario: " + scenario.getName());
    }

    @After
    public void endScenario(Scenario scenario) throws Exception {
    	//logout();
        String screenshot = scenario.getName();
        File src = app.takeScreenshotAsFile();
        File dest = new File(System.getProperty("user.dir") + "/" + outputDir + "/screenshots/" + screenshot + timestamp + ".png");
        FileUtils.copyFile(src, dest);
        Reporter.addScreenCaptureFromPath(dest.toString());

        scenario.embed(app.takeScreenshot(), "image/png");
        logger.info("Stop scenario: " + scenario.getName());
        
    }
}


