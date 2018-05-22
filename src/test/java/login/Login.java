package login;

import java.io.IOException;

import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import testsuitebase.CommonMethods;
import testsuitebase.SuiteBase;
import utility.SeleniumFunctions;
import utility.SuiteUtility;

/**
 * This class is used for verifying the login functionality
 *
 */
public class Login extends SuiteBase {

	CommonMethods cm = new CommonMethods();

	@BeforeTest
	public void resetFlag() throws IOException {
		className = this.getClass().getSimpleName();
	}

	/**
	 * Verify the Login functionality
	 * @param testCaseID
	 * @param testDataDescription
	 * @param testSteps
	 * @param username
	 * @param password
	 * @param toastMessage
	 * @param expectedResult
	 * @throws InterruptedException
	 * @throws IOException
	 */
	@Test(dataProvider = "Login_Data", priority = 1)
	public Login(String testCaseID, String testDataDescription, String testSteps, String username, String password,
			String toastMessage, String expectedResult) throws InterruptedException, IOException {

		testCaseName = new Object() {}.getClass().getEnclosingMethod().getName();
		checkTestToRun(testCaseName);
		try {
			testReport = extent.startTest(testCaseID + " | " + testDataDescription);
		    testReport.assignCategory(className);		    
		    testEmailReport = extentEmailReport.startTest(testCaseID + " | " + testDataDescription);
		    testEmailReport.assignCategory(className);		
		    
			SeleniumFunctions.navigate("", baseURL + "#/login");
			SeleniumFunctions.input("txtbox_username", username);
			SeleniumFunctions.input("txtbox_password", password);
		    Wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("btn_login"))).click();
			Thread.sleep(2000);

			cm.toastMessage(toastMessage);
			testResult(actualResult, expectedResult, testCaseName);

			Thread.sleep(2000);
		} catch (Exception e) {
			exceptionHandle(e);
		}
	}

	/**
	 * Data provider for Login Test Case 
	 * @return
	 * @throws IOException
	 */
	@DataProvider
	public Object[][] Login_Data() throws IOException {
		className = this.getClass().getSimpleName();
		return SuiteUtility.GetTestDataUtility(filePath, "Login");
	}
	
	/**
	 * This method is used to write results in report after execution of methods
	 */
	@AfterMethod
	public void reporterDataResults()
	{
		extent.endTest(testReport);
		extent.flush();
		extentEmailReport.endTest(testEmailReport);
		extentEmailReport.flush();
		writeResult(testCasePass,testMethodFail,testSkip,testFail,filePath,sheetName,testCaseName,dataSet);
	}
}