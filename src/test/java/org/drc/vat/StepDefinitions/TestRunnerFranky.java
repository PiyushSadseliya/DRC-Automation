package org.drc.vat.StepDefinitions;
/*package org.drc.vat.StepDefinitions;   

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

@CucumberOptions(features = {"classpath:features/7_0_FX_Management_TaxOfficer.feature","classpath:features/7_1_FX_Management_Supervisor.feature","classpath:features/7_2_TaxOfficer_Admin.feature"},
       glue = "org.drc.vat.StepDefinitions",
        plugin = {"com.cucumber.listener.ExtentCucumberFormatter:",
                  "html:test-output/cucumber-report"}
        		//tags={"@TC_01_Login_e-filing_landing_screen,@TC_02,@TC_002_ImportantDates"}
                 )

@CucumberOptions(features = {"classpath:features/8_1_Internal_Portal_objection_appeal.feature"},
glue = "org.drc.vat.StepDefinitions",
 plugin = {"com.cucumber.listener.ExtentCucumberFormatter:",
           "html:test-output/cucumber-report"},	
 		tags={"@TC_03_Priority"}
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
   
    
    *  For Auto it 
           
   @Before
    public void startScenario(Scenario scenario) throws IOException, AWTException, InterruptedException 
    {	
	   *//** 
	    *  Login with Ketan.prajapati
	    *//*
	 	if (scenario.getName().toLowerCase().contains("internal portal"))    	
	 	{	    	
    		app.callinternalportal();   
	 	}
	 	*//** 
		  *  Login with rohit.patil
		*//*
	 	else if(scenario.getName().toLowerCase().contains("fx taxofficer"))
	 	{
	 		app.callinternalportal_TaxOfficer();
	 	}
	 	*//** 
		  *  Login with pooja.parmar
	    *//*
	 	else if(scenario.getName().toLowerCase().contains("supervisor"))
	 	{
	 		app.callinternalportal_Supervisor();
	 	}
	 	else if(scenario.getName().toLowerCase().contains("laxman"))
	 	{
	 		app.callinternalportal_Assessment_Officer();
	 	}
	 	
	 	*//** 
		  *  Login Tax Payer Portal
	    *//*
	 	else
    	{
    		app.callurl();
    		
    	}
    	Thread.sleep(5000);
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
}*/