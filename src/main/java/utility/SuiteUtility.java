package utility;

/**
 * This class is used to perform read and write operations in test data file
 */
public class SuiteUtility {
	/**
	 * This method will check Run flag for Test Case sheet in excel file
	 * @param xls
	 * @param sheetName
	 * @param ToRun
	 * @param testSuite
	 * @return
	 */
	public static boolean checkToRunUtility(Read_XLS xls, String sheetName, String toRun, String testCase) {
		boolean runFlag = false;
		if (xls.retrieveToRunFlag(sheetName, toRun, testCase).equalsIgnoreCase("y")) {
			runFlag = true;
		} else {
			runFlag = false;
		} return runFlag;
	}

	/**
	 * This method will check Run flag for Test Case sheet in excel file 
	 * @param xls
	 * @param sheetName
	 * @param ColName
	 * @return
	 */
	public static String[] checkToRunUtilityOfData(Read_XLS xls, String sheetName, String colName) {
		return xls.retrieveToRunFlagTestData(sheetName, colName);
	}

	/**
	 * This method will get Test Data from excel file
	 * @param xls
	 * @param sheetName
	 * @return
	 */
	public static Object[][] GetTestDataUtility(Read_XLS xls, String sheetName) {
		return xls.retrieveTestData(sheetName);
	}

	/**
	 * This method will write test result in Test Data sheet of excel file
	 * @param xls
	 * @param sheetName
	 * @param colName
	 * @param rowNum
	 * @param result
	 * @return
	 */
	public static boolean WriteResultUtility(Read_XLS xls, String sheetName, String colName, int rowNum, String result)	{
		return xls.writeResult(sheetName, colName, rowNum, result);
	}

	/**
	 * This method will write test result in Test Case list of excel file
	 * @param xls
	 * @param sheetName
	 * @param colName
	 * @param rowName
	 * @param result
	 * @return
	 */
	public static boolean WriteResultUtility(Read_XLS xls, String sheetName, String colName, String rowName, String result)	{
		return xls.writeResult(sheetName, colName, rowName, result);
	}
}