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


@CucumberOptions(features = {"classpath:features/16_01_DV_2882_Manual_Assessed_LandingScreen.feature"},
glue = "org.drc.vat.StepDefinitions",
plugin = {"com.cucumber.listener.ExtentCucumberFormatter:",
"html:test-output/cucumber-report"}
		)

public class TestRunner extends AbstractTestNGCucumberTests {
	private Logger logger = LoggerFactory.getLogger(TestRunner.class);
	private String outputDir = "test-output/" + new Date().toString().substring(0,10);
	private static boolean clearbrowsedata=false;
	private String timestamp = new SimpleDateFormat("_HHmmss").format(new Date());
	private static ApplicationManager app =
			new ApplicationManager((System.getProperty("browser", BrowserType.CHROME)));
	/*private static String scenarioOne;
	private static int scenariono=1;
	private static String scenarionext;*/
	@BeforeSuite
	public void setUP_Mobilenop() throws IOException, AWTException
	{
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


	
	/*    @Before
>>>>>>> 0386ed11181368c9560741a152e2132a38c8a71d
    public void startScenario(Scenario scenario) throws IOException 
    {
    	//app.callurl();
    	logger.info("Start scenario: " + scenario.getName());
    	//wd.get("http://103.249.120.58:8042");

    }*/
	/*@Before
	public void startScenario(Scenario scenario) throws IOException, AWTException, InterruptedException 
	{	
		if (scenario.getName().toLowerCase().contains("internal portal"))
		{	
			System.out.println(scenario.getName());
			if (scenario.getName().toLowerCase().contains("assessment")) 
			{
				System.out.println(scenario.getId().split(";")[0].toLowerCase().contains("reassessment"));    					
				if(scenariono==1&&scenario.getId().split(";")[0].toLowerCase().contains("reassessment"))
				{
					assessmentOfficer();   //first scenario will call the assessment officer
				}				
				if(scenariono==1) 
				{
					scenarioOne=scenario.getId().split(";")[0];	
					System.out.println(scenario.getId());
					System.out.println(scenario.getId().split(";")[0]);
					System.out.println("--------");
					System.out.println(scenarioOne);
					System.out.println("--------");
					scenariono++;
				}else{
					System.out.println(scenariono); 
					scenarionext= scenario.getId().split(";")[0];	
					System.out.println(scenario.getId());
					System.out.println("--------");
					System.out.println(scenario.getId().split(";")[0]);
					System.out.println("--------");
					System.out.println( scenarionext);
					if (scenarionext.equals(scenarioOne)) {
					}else {
						scenariono=1;
					}    	    			 
				}
			}    			 
			app.callinternalportal();
		}		
		else
		{
			app.callurl();
		}
		Thread.sleep(5000);
		logger.info("Start scenario: " + scenario.getName());

	}*/



	@Before
	public void startScenario(Scenario scenario) throws IOException, AWTException, InterruptedException 
	{	
		/** 
		 *  Login with Ketan.prajapati
		 */
		if (scenario.getName().toLowerCase().contains("internal portal"))    	
		{	    	
			app.callinternalportal();   
		}
		/** 
			    Login with rohit.patil
		 */
		else if(scenario.getName().toLowerCase().contains("fx taxofficer"))
		{
			app.callinternalportal_TaxOfficer();
		}
		/** 
			    Login with pooja.parmar
		 */
		else if(scenario.getName().toLowerCase().contains("supervisor"))
		{
			app.callinternalportal_Supervisor();
		}
		else if(scenario.getName().toLowerCase().contains("laxman"))
		{
			app.callinternalportal_Assessment_Officer();
		}		 
		
		/**
		 *  For Demo login 
		 */
		/** 
		 *  Login with Ketan.prajapati demo
		 */
		else if (scenario.getName().toLowerCase().contains("admin demo"))    	
		{	    	
			 app.callinternalportal_ketan_demo();
		}
		/** 
			    Login with rohit.patil demo
		 */
		else if(scenario.getName().toLowerCase().contains("taxofficer demo"))
		{
			app.callinternalportal_TaxOfficer_demo();
		}
		/** 
			    Login with pooja.parmar demo
		 */
		else if(scenario.getName().toLowerCase().contains("supervisor demo"))
		{
			app.callinternalportal_Supervisor_demo();
		}
		else if(scenario.getName().toLowerCase().contains("laxman demo"))
		{
			app.callinternalportal_Assessment_Officer_laxman_demo();
		}		 			
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
		//  logout();  
		// assertEnding();
		logger.info("Stop scenario: " + scenario.getName());
	}
}