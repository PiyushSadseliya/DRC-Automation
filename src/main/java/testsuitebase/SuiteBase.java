package testsuitebase;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Date;
import java.util.Properties;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.SkipException;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.BeforeSuite;
import org.testng.asserts.SoftAssert;
import com.relevantcodes.extentreports.ExtentReports;
import com.relevantcodes.extentreports.ExtentTest;
import com.relevantcodes.extentreports.LogStatus;
import utility.Read_XLS;
import utility.SeleniumFunctions;
import utility.SuiteUtility;

/**
 * This class is used Suite Initiliazation
 */
public class SuiteBase {
	public static Read_XLS testCaseListExcel = null;
	public static Logger addLog = null;
	public static String className;
	public static Properties objectRepository,commonLocator;
	public static SoftAssert s_assert = null;
	public static ExtentTest testReport,testEmailReport;
	public static Read_XLS filePath = null;
	public static String testCaseName = null;
	public String sheetName = null;
	public String toRunColumnNameTestCase = null;
	public String toRunColumnNameTestData = null;
	public String testDataToRun[] = null;
	public static ExtentReports extent;
	public static ExtentReports extentEmailReport;
	public static String path_OR,path_CL;
	public static String toastMessage = " ";
	public static String testCaseNamePrevious = " ";
	public static String baseURL;
	protected static WebDriver driver = null;
	public static WebDriverWait Wait; 
	public static Date d = new Date();
	public static String dateWithoutTime = d.toString().substring(0, 10);
	public static String dateWithTime = d.toString();
	public static final String DIR = System.getProperty("user.dir");
	public static final String DOWNLOADPATH = "C:\\Users\\"+System.getProperty("user.name")+"\\Downloads";
	public static int dataSet = -1;
	public static int failureCount;
	public static int testCaseCount;
	public static int failureAllowed = 3, failureCount_SeleniumFun;
	public static boolean testSkip = false;
	public static boolean testFail = false;
	public static boolean testMethodFail = false;
	public static boolean testCasePass = true;
	public static boolean actualResult;

	/**
	 * This method will be executed only once. Here we will do initialization related to report generation, common locator and browser invoke . 
	 * @throws IOException
	 * @throws InterruptedException
	 */
	@BeforeSuite
	public void suiteInitialization() throws IOException, InterruptedException {
		try {
			dateWithTime = dateWithTime.replace(' ', '_');
			dateWithTime = dateWithTime.replace(':', '_');
			/**
			 * Create folder to save the test result report according to the date and report generated
			 */
			addLog = Logger.getLogger("rootLogger");
			createfolder_currentdate();
			createfolder_emailreport();
			File dirPath = new File(DIR + "//reports//EmailReport//");
			for (File f : dirPath.listFiles()) {
				if (!f.isDirectory())
					f.delete();
			}
			/**
			 * Generates the report from the execution of script through selenium with the details data
			 */
			String reportPath = DIR + "//reports//DRC//" + dateWithoutTime + "//DRC_" + dateWithTime+ "_.html";

			/**
			 * Generates the mailable report which is compressed in size to email
			 */
			String emailableReportPath = DIR + "//reports//EmailReport//DRCtestReport.html";

			
			path_CL = DIR + "//src//test//resources//elementlocator//CommonLocator.txt";
			FileInputStream fs = new FileInputStream(path_CL);
			commonLocator = new Properties();
			commonLocator.load(fs);
			baseURL = commonLocator.getProperty("URL");

			extent = new ExtentReports(reportPath, true);
			extent.loadConfig(new File(DIR + "//config.xml"));

			extentEmailReport = new ExtentReports(emailableReportPath, true);
			extentEmailReport.loadConfig(new File(DIR + "//config.xml"));

			addLog.info("Execution started:");

			/**
			 *  Specify browser to Run the script
			 */
			if(commonLocator.getProperty("browser").equals("Remote"))
			{
			
		
			SeleniumFunctions.openBrowser("", commonLocator.getProperty("Browser"));
			SeleniumFunctions.navigate("", baseURL);
			//SeleniumFunctions.login();
		}else
		{
			SeleniumFunctions.openBrowser("", commonLocator.getProperty("Browser"));
			SeleniumFunctions.navigate("", baseURL);
		}
		}
		catch(Exception e)
		{
			addLog.error("Error occured in suite initialization: "+e);
		}
	}

	/**
	 * This method is used to check Test Case and Test Data to run
	 * @param TestCaseName
	 * @throws IOException
	 * @throws InterruptedException
	 */
	public void checkTestToRun(String TestCaseName) throws IOException, InterruptedException {
		dataSet++;
		fileInitialization();
		FileInputStream fs = new FileInputStream(path_OR);
		objectRepository = new Properties(System.getProperties());
		objectRepository.load(fs);
		s_assert = new SoftAssert();

		filePath = testCaseListExcel;
		sheetName = "TestCasesList";
		toRunColumnNameTestCase = "CaseToRun";
		toRunColumnNameTestData = "DataToRun";
		addLog.info(TestCaseName + " : Execution started.");

		/**
		 *  Check Test Case Run flag
		 */
		if (!SuiteUtility.checkToRunUtility(filePath, sheetName, toRunColumnNameTestCase, TestCaseName)) {
			addLog.info(TestCaseName + " : CaseToRun = N for So Skipping Execution.");
			testSkip = true;
			SuiteUtility.WriteResultUtility(filePath, sheetName, "Pass/Fail/Skip", TestCaseName, "SKIPPED");
			throw new SkipException(TestCaseName + "'s CaseToRun Flag Is 'N' Or Blank. So Skipping Execution Of " + TestCaseName);
		}
		testDataToRun = SuiteUtility.checkToRunUtilityOfData(filePath, TestCaseName, toRunColumnNameTestData);

		/**
		 *  Check Test Data Run flag
		 */
		if (!testDataToRun[dataSet].equalsIgnoreCase("Y")) {
			addLog.info(TestCaseName + " : DataToRun = N for data set line " + (dataSet + 1)+ " So skipping Its execution.");
			testSkip = true;
			throw new SkipException("DataToRun for row number " + dataSet + " Is No Or Blank. So Skipping Its Execution.");
		}
		Wait = new WebDriverWait(driver,60);
	}

	/**
	 * This method is used for Data and Locator file initialization
	 * @throws IOException
	 */
	public void fileInitialization() throws IOException 
	{
		/**
		 *  Constructor Of Read_XLS Utility Class.
		 */
		testCaseListExcel = new Read_XLS(DIR + "//src//test//resources//excelfiles//" + className + ".xls");

		/**
		 * Set path of Locator file
		 */
		path_OR = DIR + "//src//test//resources//elementlocator//" + className + "Locator.txt";

		/**
		 * Bellow given syntax will Insert log In applog.log file.
		 */
		addLog = Logger.getLogger("rootLogger");
		addLog.info("All Excel Files Initialised successfully.");
		testSkip = false;
		testFail = false;
		failureCount_SeleniumFun = 0;
		dataSet = -1;
		filePath = testCaseListExcel;
		
	}

	/**
	 * This is method is used to save test result in data file
	 * @param actualResult
	 * @param ExpectedResult
	 * @param TestCaseName
	 * @throws IOException
	 * @throws InterruptedException
	 */
	public static void testResult(Boolean actualResult, String ExpectedResult, String TestCaseName)
			throws IOException, InterruptedException
	{
		CommonMethods cm = new CommonMethods();
		if (!(actualResult))
		{
			addLog.info(TestCaseName + " : Actual Value " + actualResult + " and expected value " + ExpectedResult+ " Not match. Test data set failed.");
			s_assert.assertEquals(actualResult, ExpectedResult, actualResult + " And " + ExpectedResult + " Not Match");
			testReport.log(LogStatus.FAIL, "Test Failed for:- " + TestCaseName);
			testFail = true;
			testCasePass = false;
			cm.captureScreenshot(TestCaseName);
		} 
		else 
		{
			cm.captureScreenshot(TestCaseName);
			testReport.log(LogStatus.PASS, "Test Passed for:- " + TestCaseName);
		}
		if (testFail)
		{
			testReport.log(LogStatus.ERROR, "Test Failed for:- " + TestCaseName);
			s_assert.assertAll();

		}

	}

	/**
	 * This method is used to create current date folder under reports -> DRC  
	 */
	public static void createfolder_currentdate() {
		File newDIR = new File(DIR + "//reports//DRC//" + dateWithoutTime);
		boolean result = false;
		if (!newDIR.exists()) {
			try{
				newDIR.mkdir();
				result = true;
			} 
			catch (SecurityException se){
				addLog.error("Failed to create folder: "+se);
			}
			if (result){
				addLog.info("Current date folder created");
			}
		}
	}

	/**
	 * This method is used to create current email report folder under reports   
	 */
	public static void createfolder_emailreport(){
		File newDIR = new File(DIR + "//reports//EmailReport");
		boolean result = false;
		if (!newDIR.exists()) {
			try	{
				newDIR.mkdir();
				result = true;
			} 
			catch (SecurityException se) {
				addLog.error("Failed to create folder: "+se);
			}
			if (result){
				addLog.info("Current date folder created");
			}
		}
	}

	/**
	 * This method is used to log error occurred during test case execution. It will also mark test case as failed
	 * @param e
	 * @throws IOException
	 * @throws InterruptedException
	 */
	public static void exceptionHandle(Exception e) throws IOException, InterruptedException {
		addLog.error("Error occured during test execution: " + e);
		testCasePass = false;
		testFail = true;
		testReport.log(LogStatus.FAIL, testCaseName + " Fails");
		actualResult = false;
		testResult(actualResult, "", testCaseName);
	}

	/**
	 * This is method is used to write Test Case and Test Data result 
	 * @param testCasePass
	 * @param testMethodFail
	 * @param testSkip
	 * @param testFail
	 * @param filePath
	 * @param sheetName
	 * @param testCaseName
	 * @param dataSet
	 */
	public void writeResult(Boolean testCasePass, Boolean testMethodFail, Boolean testSkip, Boolean testFail,
			Read_XLS filePath, String sheetName, String testCaseName, int dataSet) {
		if (!testCaseNamePrevious.equals(testCaseName)){
			failureCount = 0;
			testCaseCount = 0;
		}
		testCaseNamePrevious = testCaseName;
		if (testSkip) {
			addLog.info(testCaseName + " : Reporting test data set line " + (dataSet + 1) + " as SKIPPED In excel.");
			SuiteUtility.WriteResultUtility(filePath, testCaseName, "Pass/Fail/Skip", dataSet + 1, "SKIPPED");
		} else if (testFail) {
			failureCount++;
			addLog.info(testCaseName + " : Reporting test data set line " + (dataSet + 1) + " as FAILED In excel.");
			s_assert = null;
			testCasePass = false;
			SuiteUtility.WriteResultUtility(filePath, testCaseName, "Pass/Fail/Skip", dataSet + 1, "FAILED");
		} else {
			addLog.info(testCaseName + " : Reporting test data set line " + (dataSet + 1) + " as PASSED In excel.");
			testCasePass = true;
			SuiteUtility.WriteResultUtility(filePath, testCaseName, "Pass/Fail/Skip", dataSet + 1, "PASSED");
			testCaseCount++;
		}
		if (failureCount >= 1) {
			testMethodFail = true;
			addLog.info(testCaseName + " : Reporting test case as FAILED In excel.");
			SuiteUtility.WriteResultUtility(filePath, sheetName, "Pass/Fail/Skip", testCaseName, "FAILED");
		} else if (testCaseCount < 1 && testSkip) {
			addLog.info(testCaseName + " : Reporting test case as SKIPPED In excel.");
			SuiteUtility.WriteResultUtility(filePath, sheetName, "Pass/Fail/Skip", testCaseName, "SKIPPED");
		} else {
			addLog.info(testCaseName + " : Reporting test case as PASSED In excel.");
			SuiteUtility.WriteResultUtility(filePath, sheetName, "Pass/Fail/Skip", testCaseName, "PASSED");
		}
		testSkip = false;
		testFail = false;
	}

	/**
	 * This is method is used to close web driver and extent report instances after test execution  
	 */
	@AfterSuite
	public void stopExecution()
	{
		driver.close();
		driver.quit();
		extent.flush();
	}
}
