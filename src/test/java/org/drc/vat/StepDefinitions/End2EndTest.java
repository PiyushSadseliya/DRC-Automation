package org.drc.vat.StepDefinitions;

import static org.drc.vat.appmanager.HelperBase.*;
import static org.testng.Assert.assertTrue;
import static org.drc.vat.appmanager.ApplicationManager.*;

import java.awt.Robot;
import java.awt.Toolkit;
import java.awt.datatransfer.StringSelection;
import java.awt.event.KeyEvent;
import java.sql.ResultSet;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Properties;
import java.util.Set;

import org.drc.vat.appmanager.ApplicationManager;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.BrowserType;
import org.drc.vat.appmanager.*;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class End2EndTest {
	String cwd = System.getProperty("user.dir");
	public static Float Total_VC;
	public static Float TotalD;
	public static Float VDC;
	public static Float VRC;
	public static Float SDC;
	public static Float PCC;
	public static Float FPPS;
	public static Float NetVAT;
	public static String Total_NetVAT;
	public static String Total_VATcredit;
	public static String Total_Refund;
	public static String Total_Forward;
	public static String Total_Procurement;
	public static String VAT3Party;
	public static String Total_Pay;
	public static String VAT_Collected_DG;
	public static String VAT_Collected_DS;
	public static String VAT_Collected_DSI;
	public static String VAT_Collected_DGI;
	public static String VAT_Collected_FPP;
	public static String DG;
	public static String Username;
	public static String vendoremail;
	public static String NITVA;
	public static String NitvaNo;
	public String BaseCurr;
	public String BaseCurrName;
	public String BaseCurrCheck;
	public String StoreCurrency;

	@Given("^User is on VAT Registration Dashboard$")
	public void user_is_on_VAT_Registration_Dashboard() throws Throwable {
		System.out.println("Registartion successfull");

	}

	@When("^Establish a connection with data base and execute query to create user\\.$")
	public void establish_a_connection_with_data_base_and_execute_query_to_create_user() throws Throwable {
		ConnectDatabase CD = new ConnectDatabase();
		CD.opendb();
		String user = "DECLARE @a int = (select count(*)+1 from [1AuthoritySTS].dbo.aspnetusers where email like 'SmokeSuiteUser%')"
				+ "INSERT INTO [1AuthoritySTS].[dbo].[AspNetUsers]            "
				+ "         (Id,                                                "
				+ "         [AccessFailedCount]                                 "
				+ "         ,[ConcurrencyStamp]                                 "
				+ "         ,[Email]                                            "
				+ "         ,[EmailConfirmed]                                   "
				+ "         ,[LockoutEnabled]                                   "
				+ "         ,[LockoutEnd]                                       "
				+ "         ,[NormalizedEmail]                                  "
				+ "         ,[NormalizedUserName]                               "
				+ "         ,[PasswordHash]                                     "
				+ "         ,[PhoneNumber]                                      "
				+ "         ,[PhoneNumberConfirmed]                             "
				+ "         ,[SecurityStamp]                                    "
				+ "         ,[TwoFactorEnabled]                                 "
				+ "         ,[UserClient]                                       "
				+ "         ,[UserName]                                         "
				+ "         ,[TokenExpiration]                                  "
				+ "         ,[FullName])                                        "
				+ "   VALUES                                                    "
				+ "         (NEWID(),                                           "
				+ "         0                                                   "
				+ "         ,NEWID()                                            "
				+ "         ,CONCAT('SmokeSuiteUser',@a,'@mailinator.com')              "
				+ "         ,1                                                  "
				+ "         ,0                                                  "
				+ "         ,NULL                                               "
				+ "         ,CONCAT('SmokeSuiteUser',@a,'@MAILINATOR.COM')              "
				+ "         ,CONCAT('SmokeSuiteUser',@a,'@MAILINATOR.COM')              "
				+ "         ,'AQAAAAEAACcQAAAAEM/wSgVN/nG79PYxp2X4xCzrtdQcsTEYE911sxUm9sniuJtbzybplBD6TYP+BnxhDg=='  "
				+ "         ,'+919999999999'                                                                         "
				+ "         ,1                                                                                       "
				+ "          , NEWID()                                                                               "
				+ "          ,0                                                                                      "
				+ "          ,'TaxPortal'                                                                            "
				+ "          ,CONCAT('SmokeSuiteUser',@a,'@MAILINATOR.COM')                                                  "
				+ "          ,CURRENT_TIMESTAMP                                                                      "
				+ "          ,CONCAT('SmokeSuiteUser',@a)) ";

		CD.sta.executeUpdate(user);
	}

	@When("^Update data in another table based on created user$")
	public void update_data_in_another_table_based_on_created_user() throws Throwable {
		ConnectDatabase CD = new ConnectDatabase();
		CD.opendb();

		String Reguser = "DECLARE @a int = (select count(*) from [1AuthoritySTS].dbo.aspnetusers where email like 'SmokeSuiteUser%')"
				+ "declare  @emailvalue Nvarchar(500) "
				+ "Set @emailvalue = (select ID from  [1AuthoritySTS].[dbo].[AspNetUsers] "
				+ "where Email = CONCAT('SmokeSuiteUser',@a,'@mailinator.com'))               "
				+ "insert into [DRC-QA].[Ref].[RegisteredUsers] values                             "
				+ "  (@emailvalue                                                          "
				+ "  ,1                                                                   "
				+ "  ,Concat ('SmokeSuiteUser',@a)                                               "
				+ "  ,CONCAT('SmokeSuiteUser',@a,'@mailinator.com')                              "
				+ "  ,CURRENT_TIMESTAMP                                                   "
				+ "  ,NULL                                                                "
				+ "  ,CURRENT_TIMESTAMP                                                   "
				+ "  ,NUll                                                                "
				+ "  ,null                                                                " + "  ) ";

		CD.sta.executeUpdate(Reguser);
		System.out.println("test");
	}

	@When("^Update data in roles table$")
	public void update_data_in_roles_table() throws Throwable {
		ConnectDatabase CD = new ConnectDatabase();
		CD.opendb();

		String roles = "declare @i int = (select count(*) from [1AuthoritySTS].dbo.aspnetusers where email like 'SmokeSuiteUser%')"
				+ " declare  @emailvalue Nvarchar(500)"
				+ " set @emailvalue = (select ID from  [1AuthoritySTS].[dbo].[AspNetUsers] "
				+ " where Email = CONCAT('SmokeSuiteUser',@i,'@mailinator.com'))"
				+ " insert into [1AuthoritySTS].[dbo].[AspNetUserRoles] ([UserId],[RoleId]) VALUES  (@emailvalue,'B828372F-B0AD-40DF-B8BB-5C6E11A8682E')";

		System.out.println("test");
		CD.sta.executeUpdate(roles);

	}

	@When("^login with created username and password$")
	public void login_with_created_username_and_password() throws Throwable {

		ConnectDatabase CD = new ConnectDatabase();
		CD.opendb();

		String username = "with temp as"
				+ "(select count(*) as 'a' from [1AuthoritySTS].dbo.aspnetusers where email like'SmokeSuiteUser%' and UserClient='TaxPortal' and EmailConfirmed=1)"
				+ "select CONCAT('SmokeSuiteUser',a,'@mailinator.com') as 'username' from temp";

		ResultSet rs = CD.sta.executeQuery(username);
		System.out.println(rs);
		while (rs.next()) {
			Username = (rs.getString("username")).trim();

			System.out.println(Username);
			type("txtbox_username", Username);
			sleepWait(2000);
			type("txtbox_password", "Test@123");
			sleepWait(2000);
			clickOn("btn_login", "");
		}

	}

	@When("^User clicks on VAT Getting Started Guide CheckBox$")
	public void user_clicks_on_VAT_Getting_Started_Guide_CheckBox() throws Throwable {

		clickOn("tab_container", "");
		sleepWait(2000);
		clickOn("tab_pin", "");
		sleepWait(2000);
		clickOn("tab_VAT", "");
		sleepWait(2000);
		// clickOn("btn_sure","");
		sleepWait(2000);
		clickOn("chkbox_guide", "");
	}

	@When("^Clicks on Register for Vat button$")
	public void clicks_on_Register_for_Vat_button() throws Throwable {
		clickOn("btn_register", "");
		sleepWait(3000);
	}

	@When("^Clicks on Continue button of Instructions Page$")
	public void clicks_on_Continue_button_of_Instructions_Page() throws Throwable {
		JavascriptExecutor js = (JavascriptExecutor) wd;
		js.executeScript("window.scrollTo(0, document.body.scrollHeight)");
		sleepWait(3000);
		clickOn("btn_continue", "");
		sleepWait(3000);

	}

	@Then("^Selects Taxpayer Category \"([^\"]*)\" , SubCategory \"([^\"]*)\"$")
	public void selects_Taxpayer_Category_SubCategory(String Category, String SubCategory) throws Throwable {

		clickOn("drp_category", "");
		clickOn("span", "[contains(text(),'" + Category + "')]");
		clickOn("drp_subcategory", "");
		clickOn("span", "[contains(text(),'" + SubCategory + "')]");
		sleepWait(2000);
		JavascriptExecutor jse = (JavascriptExecutor) wd;
		jse.executeScript("window.scrollTo(0, document.body.scrollHeight)");

	}

	@Then("^Enters NIF number \"([^\"]*)\"  ,Full Name Of Business \"([^\"]*)\" , Number of COI \"([^\"]*)\" , Last Year Revenue \"([^\"]*)\"$")
	public void enters_NIF_number_Full_Name_Of_Business_Number_of_COI_Last_Year_Revenue(String NIF, String BusinessName,
			String COI, String LRevenue) throws InterruptedException {
		String times = new SimpleDateFormat("HHmmss").format(new Date());
		NITVA = times.concat(NIF);
		type("txtbox_NIF", NITVA);
		System.out.println(NITVA);
		sleepWait(5000);
		type("txtbox_businessname", BusinessName);
		type("txtbox_coi", COI);
		type("txtbox_lrevenue", LRevenue);
	}

	@Then("^Enters NIF Registration Date \"([^\"]*)\" , Date of Incorporation \"([^\"]*)\" , Type Of Business \"([^\"]*)\"$")
	public void enters_NIF_Registration_Date_Date_of_Incorporation_Type_Of_Business(String NIFDate, String IncorpDate,
			String BusinessType) throws Throwable {

		clickOn("dt_nifregdate", "");
		datePicker(NIFDate);
		clickOn("dt_incorp", "");
		datePicker(IncorpDate);
		sleepWait(2000);
		clickOn("drp_btype", "");
		clickOn("span", "[contains(text(),'" + BusinessType + "')]");
		sleepWait(2000);
	}

	@Then("^Enters Business Start Date \"([^\"]*)\" , Company Size \"([^\"]*)\"$")
	public void enters_Business_Start_Date_Company_Size_Last_Year_Revenue(String BStartDate, String CompanySize)
			throws Throwable {
		clickOn("dt_bstartdate", "");
		datePicker(BStartDate);
		clickOn("drp_compsize", "");
		clickOn("span", "[contains(text(),'" + CompanySize + "')]");
		// type("txtbox_lrevenue",LRevenue);

	}

	@Then("^Enters Address Details \"([^\"]*)\" , \"([^\"]*)\" , \"([^\"]*)\" ,\"([^\"]*)\" ,\"([^\"]*)\",\"([^\"]*)\"$")
	public void enters_Address_Details(String Address1, String Address2, String Province, String City, String ZipCode,
			String MobileNumber) throws Throwable {

		type("txtbox_add1", Address1);
		sleepWait(2000);
		type("txtbox_add2", Address2);
		clickOn("drp_province", "");
		clickOn("span", "[contains(text(),'" + Province + "')]");
		WebElement we;
		we = wd.findElement(By.xpath("(//*[@formcontrolname='cityId'])[1]"));
		if (we.isEnabled()) {
			clickOn("drp_city", "");
			clickOn("span", "[contains(text(),'" + City + "')]");
			sleepWait(1000);
		} else {
			System.out.println("Please Select Province first");
		}
		type("txtbox_zipcode", ZipCode);
		type("txtbox_mobileno", MobileNumber);

	}

	@Then("^Enters Business details \"([^\"]*)\",\"([^\"]*)\" , \"([^\"]*)\" , \"([^\"]*)\" ,\"([^\"]*)\" ,\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"$")
	public void enters_Business_details(String BName, String BAddress1, String BAddress2, String BProvince,
			String BCity, String BZipCode, String BEmail, String BMobileNumber) throws Throwable {
		type("txtbox_bname", BName);
		type("txtbox_buspromadd1", BAddress1);
		sleepWait(2000);
		type("txtbox_buspromadd2", BAddress2);
		clickOn("drp_buspromprovince", "");

		clickOn("span", "[contains(text(),'" + BProvince + "')]");
		sleepWait(3000);
		WebElement we;
		we = wd.findElement(By.xpath("(//*[@formcontrolname='cityId'])[2]"));
		if (we.isEnabled()) {
			clickOn("drp_buspromcity", "");
			clickOn("span", "[contains(text(),'" + BCity + "')]");
			sleepWait(1000);
		} else {
			System.out.println("Please Select Province first");
		}
		type("txtbox_buspromzipcode", BZipCode);
		type("txtbox_buspromemail", BEmail);
		type("txtbox_busprommobileno", BMobileNumber);

	}

	@Then("^select Authorization signature \"([^\"]*)\" with Job Title \"([^\"]*)\" , Full Name \"([^\"]*)\" Email \"([^\"]*)\" , Mobile Number \"([^\"]*)\"$")
	public void select_Authorization_signature_with_Job_Title_Full_Name_Email_Mobile_Number(String Opt, String JobTitle,
			String FullName, String Email, String MobileNumber) throws Throwable {

		if (Opt.equalsIgnoreCase("Yes")) {
			clickOn("radio_yes", "");
			type("txtbox_jobtitle", JobTitle);
			sleepWait(2000);
			type("txtbox_fullname", FullName);
			sleepWait(2000);
			type("txtbox_email", Email);
			type("txtbox_mobilenumber", MobileNumber);

		} else {
			clickOn("radio_no", "");
		}
	}

	@Then("^Clicks on Save Draft Button$")
	public void clicks_on_Save_Draft_Button() throws Throwable {
		clickOn("btn_savedraft","");
		// String toast = toastMessage();
		// System.out.println(toast);
	}

	@Then("^Clicks on VAT Registration Page Continue Button$")
	public void clicks_on_VAT_Registration_Page_Continue_Button() throws Throwable {
		clickOn("btn_regcontinue", "");

	}

	@Then("^Enters Bank Details with Account Number \"([^\"]*)\" , Account Holder Name \"([^\"]*)\" ,Bank Name \"([^\"]*)\" ,Branch \"([^\"]*)\"$")
	public void enters_Bank_Details_with_Account_Number_Account_Holder_Name_Bank_Name_Branch(String AccountNumber,
			String AccountHolderName, String BankName, String BranchName) throws Throwable {

		type("txtbox_accountnumber", AccountNumber);
		type("txtbox_holdername", AccountHolderName);
		clickOn("drp_bankname", "");
		clickOn("span", "[contains(text(),'" + BankName + "')]");
		clickOn("drp_branch", "");
		clickOn("span", "[contains(text(),'" + BranchName + "')]");
	}

	@Then("^Clicks on Bank details Continue Button$")
	public void clicks_on_Bank_details_Continue_Button() throws Throwable {
		clickOn("btn_bankcontinue", "");
	}

	@Then("^select Address Proof of Registered Place of Business for \"([^\"]*)\" , \"([^\"]*)\"$")
	public void select_Address_Proof_of_Registered_Place_of_Business_for(String Document1, String status1)
			throws Throwable {

		clickOn("drp_addressproof", "");
		sleepWait(2000);
		clickOn("span", "[contains(text(),'" + Document1 + "')]");
		String Imagepath1 = cwd.concat("\\").concat(status1);
		System.out.println(Imagepath1);
		clickOn("upload_file1", "");
		UploadImage("", Imagepath1);

	}

	@Then("^select Bank Account Proof for \"([^\"]*)\" , \"([^\"]*)\"$")
	public void select_Bank_Account_Proof_for(String Document2, String status2) throws Throwable {

		clickOn("drp_bankaccountproof", "");
		sleepWait(2000);
		clickOn("(span", "[contains(text(),'" + Document2 + "')])[2]");
		String Imagepath2 = cwd.concat("\\").concat(status2);
		System.out.println(Imagepath2);
		clickOn("upload_file1", "");
		UploadImage("", Imagepath2);
	}

	@Then("^Select Certificate of Incorporation for \"([^\"]*)\" , \"([^\"]*)\"$")
	public void select_Certificate_of_Incorporation_for(String Document3, String status3) throws Throwable {
		clickOn("drp_certification", "");
		sleepWait(2000);
		clickOn("(span", "[contains(text(),'" + Document3 + "')])[3]");
		String Imagepath3 = cwd.concat("\\").concat(status3);
		clickOn("upload_file1", "");
		UploadImage("", Imagepath3);
	}

	@Then("^select Law or Degree of Establishment for \"([^\"]*)\" , \"([^\"]*)\"$")
	public void select_Law_or_Degree_of_Establishment_for(String Document4, String status4) throws Throwable {

		clickOn("drp_lawordegree", "");
		sleepWait(2000);
		clickOn("(span", "[contains(text(),'" + Document4 + "')])[4]");
		String Imagepath4 = cwd.concat("\\").concat(status4);
		clickOn("upload_file1", "");
		UploadImage("", Imagepath4);
	}

	@Then("^select Letter of Authorization/Board Resolution for Authorized Signatory – Download Template for \"([^\"]*)\" , \"([^\"]*)\"$")
	public void select_Letter_of_Authorization_Board_Resolution_for_Authorized_Signatory_Download_Template_for(
			String Document5, String status5) throws Throwable {
		clickOn("drp_letterofauthorization", "");
		sleepWait(2000);
		clickOn("(span", "[contains(text(),'" + Document5 + "')])[5]");
		String Imagepath5 = cwd.concat("\\").concat(status5);
		clickOn("upload_file1", "");
		UploadImage("", Imagepath5);
	}

	@Then("^select Proof of Last Year Revenue for \"([^\"]*)\" , \"([^\"]*)\"$")
	public void select_Proof_of_Last_Year_Revenue_for(String Document6, String status6) throws Throwable {
		clickOn("drp_proofoflastrevenue", "");
		sleepWait(2000);
		clickOn("(span", "[contains(text(),'" + Document6 + "')])[6]");
		String Imagepath6 = cwd.concat("\\").concat(status6);
		clickOn("upload_file1", "");
		UploadImage("", Imagepath6);
	}

	@Then("^Clicks on document required Continue Button$")
	public void clicks_on_document_required_Continue_Button() throws Throwable {
		clickOn("btn_reqdoccontinue", "");
	}

	@Then("^clicks on Acknowledgement checkbox and continue button$")
	public void clicks_on_Acknowledgement_checkbox_and_continue_button() throws Throwable {
		JavascriptExecutor js = (JavascriptExecutor) wd;
		js.executeScript("window.scrollTo(0, document.body.scrollHeight)");
		clickOn("chkbx_agree", "");
		sleepWait(2000);
		clickOn("btn_fsubmit", "");
		sleepWait(7000);
	}

	@Then("^click on Ok button on alert page$")
	public void click_on_Ok_button_on_alert_page() throws Throwable {
		// Alert alert = wd.switchTo().alert();
		// alert.accept();
		sleepWait(7000);
		clickOn("btn_ok", "");
	}

	@Then("^Click on Logout on Dashboard$")
	public void click_on_Logout_on_Dashboard() throws Throwable {
		// logout();
		sleepWait(5000);
		// clickOn("btn_logout","");
	}

	@Then("^User login in Internal portal$")
	public void user_login_in_Internal_portal() throws Throwable {
		sleepWait(9000);
		clickOn("tab_container", "");
		sleepWait(2000);
		// clickOn("tab_pin","");
		sleepWait(2000);
		// clickOn("tab_VAT","");
		sleepWait(2000);
		/*
		 * Set<String> handles = wd.getWindowHandles(); String currentHandle =
		 * wd.getWindowHandle(); sleepWait(3000); for (String handle :
		 * handles) {
		 * 
		 * if (!handle .equals(currentHandle)) { wd.switchTo().window(handle); }
		 * }
		 */

	}

	@Then("^click on Manage Vat Registartion$")
	public void click_on_Manage_Vat_Registartion() throws Throwable {

		clickOn("tab_manageregistartion", "");
		sleepWait(2000);
	}

	@Then("^select \"([^\"]*)\" option and \"([^\"]*)\"$")
	public void select_option_and(String Filter, String Searchelement) throws Throwable {
		clickOn("drp_filter", "");
		clickOn("span", "[contains(text(),'" + Filter + "')]");
		type("txt_search", NITVA);
		sleepWait(5000);
	}

	@Then("^clicks on manage button and select \"([^\"]*)\"$")
	public void clicks_on_manage_button_and_select(String Manage) throws Throwable {
		clickOn("drp_manage", "");
		sleepWait(2000);
		// admin
		// 103.249.120.58:8068
		// ketan.prajapati
		clickOn("drp_review", "");
		sleepWait(8000);
	}

	@Then("^Redirect to confirmation page and click on \"([^\"]*)\"$")
	public void redirect_to_confirmation_page_and_click_on(String Deoption) throws Throwable {
		sleepWait(3000);
		if (Deoption.equalsIgnoreCase("Approve")) {
			clickOn("btn_approved", "");
			sleepWait(2000);
		}

	}

	@Then("^Clicks on Close Button$")
	public void clicks_on_Close_Button() throws Throwable {
		sleepWait(2000);
		NitvaNo = elementText("textNITVA");
		System.out.println(NitvaNo);
		sleepWait(20000);
		clickOn("btn_closed", "");
	}

	@Then("^clicks on logout in internal portal$")
	public void clicks_on_logout_in_internal_portal() throws Throwable {
		// logout();
	}

	@Given("^User is on Tax Payer Portal$")
	public void user_is_on_Tax_Payer_Portal() throws Throwable {
		ConnectDatabase CD = new ConnectDatabase();
		CD.opendb();

		String username = "with temp as"
				+ "(select count(*) as 'a' from [1AuthoritySTS].dbo.aspnetusers where email like'SmokeSuiteUser%' and UserClient='TaxPortal' and EmailConfirmed=1)"
				+ "select CONCAT('SmokeSuiteUser',a,'@mailinator.com') as 'username' from temp";

		ResultSet rs = CD.sta.executeQuery(username);
		System.out.println(rs);
		while (rs.next()) {
			String Username = (rs.getString("username")).trim();
			System.out.println(Username);

			type("txtbox_username", Username);
			sleepWait(2000);
			type("txtbox_password", "Test@123");
			sleepWait(2000);
			clickOn("btn_login", "");
		}

		// clickOn("btn_login","");
		/*
		 * type("txtbox_username",Username); sleepWait(2000);
		 * type("txtbox_password","Test@123"); sleepWait(2000);
		 */
		// clickOn("btn_login","");
		sleepWait(5000);
		clickOn("tab_VAT", "");
		sleepWait(3000);
		clickOn("btn_sure", "");
		sleepWait(2000);
		Set<String> handles = wd.getWindowHandles();
		String currentHandle = wd.getWindowHandle();
		sleepWait(3000);
		for (String handle : handles) {

			if (!handle.equals(currentHandle)) {
				wd.switchTo().window(handle);
			}
		}
	}

	@When("^Connect database and execute query and run successfully$")
	public void connect_database_and_execute_query_and_run_successfully() throws Throwable {
		ConnectDatabase CD = new ConnectDatabase();
		CD.opendb();

		String sql = "declare @month int;" + "set @month =1;" + "insert into [DRC-QA].vat.VfVateFile"
				+ "(VuUserId,FinancialYear,FinancialMonth,PaymentDueDate,TotalAmount,DueAmount,VfDueDate,CreatedDate)"
				+ "values ((select VuUserId from [DRC-QA].Vat.VuUsers"
				+ "  where RegisteredUserId in (select RegisteredUserId from [DRC-QA].ref.RegisteredUsers"
				+ "  where Email='" + Username + "')),(select YEAR(GETDATE())),@month,"
				+ "(select DATEADD(mm,@month,'2019/01/20')),0.00,0.00,"
				+ "(select DATEADD(mm,@month,'2019/01/15')),GETDATE())";
		System.out.println("a");
		CD.sta.executeUpdate(sql);

		String Sql1 = "declare @FY int;" + "set @FY=1;" + "insert into [DRC-QA].vat.VfVateFileActivity"
				+ "(VfVateFileId,VfActivityId,VfStatusId,CreatedDate)" + "values"
				+ "((select VfVateFileId from [DRC-QA].vat.VfVateFile where FinancialMonth=@FY and VuUserId in (select VuUserId from [DRC-QA].Vat.VuUsers"
				+ " where RegisteredUserId in (select RegisteredUserId from [DRC-QA].ref.RegisteredUsers"
				+ " where Email='" + Username + "'))),1,2,getdate()),"
				+ "((select VfVateFileId from [DRC-QA].vat.VfVateFile where FinancialMonth=@FY and VuUserId in (select VuUserId from [DRC-QA].Vat.VuUsers"
				+ " where RegisteredUserId in (select RegisteredUserId from [DRC-QA].ref.RegisteredUsers"
				+ " where Email='" + Username + "'))),2,2,getdate()),"
				+ "((select VfVateFileId from [DRC-QA].vat.VfVateFile where FinancialMonth=@FY and VuUserId in (select VuUserId from [DRC-QA].Vat.VuUsers"
				+ " where RegisteredUserId in (select RegisteredUserId from [DRC-QA].ref.RegisteredUsers"
				+ " where Email='" + Username + "'))),3,2,getdate())";
		System.out.println("a");
		CD.sta.executeUpdate(Sql1);

	}

	@Then("^clicks on Vat E-filling option on left panel$")
	public void clicks_on_Vat_E_filling_option_on_left_panel() throws Throwable {

		clickOn("tab_container", "");
		sleepWait(2000);
		// clickOn("tab_pin","");
		sleepWait(1000);
		clickOn("tab_vatefiling", "");
	}

	@Then("^clicks on e-filing to fill data$")
	public void clicks_on_e_filing_to_fill_data() throws Throwable {

		for (int i = 1; i <= 12; i++) {
			String first_part = "(//div[@class='list-item-th text-left'])[";
			String second_part = "]";

			String month = first_part + i + second_part;
			wd.findElement(By.xpath(month)).click();
			sleepWait(2000);// D:\DRC_Automation\DRC-Automation-git\DRC-Automation-develop-5e7fa7cde7bb4b3537a4b2c6dc3cf11a41792c36\src\test\resources\test.png

			String first_preview = "(//button[text()='Preview'])[";
			String second_preview = "]";

			String preview = first_preview + i + second_preview;
			sleepWait(2000);
			// wd.findElement(By.xpath("//button[text()='Preview']")).isDisplayed();
			Boolean B;
			try {
				B = (wd.findElement(By.xpath(preview)).isDisplayed());
			} catch (NoSuchElementException ex) {
				B = false;
			}
			sleepWait(2000);
			if (B)
			// if
			// (wd.findElement(By.xpath("//button[text()='Preview']")).isDisplayed())
			{
				// return;
				continue;
			} else {
				clickOn("btn_file", "");
				break;
			}
		} // D:\DRC_Automation\DRC-Automation-git\DRC-Automation-develop-5e7fa7cde7bb4b3537a4b2c6dc3cf11a41792c36\src\test\resources\Scenario.xlsx

		// clickOn("label_month","");
		sleepWait(2000);
		// clickOn("btn_file","");
		// sleepWait(2000);
	}

	@Then("^Enter data in Operation Performed \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\" , \"([^\"]*)\",\"([^\"]*)\", \"([^\"]*)\" ,\"([^\"]*)\", \"([^\"]*)\",\"([^\"]*)\"$")
	public void enter_data_in_Operation_Performed(String DG, String DS1, String DS2, String DGI, String DSI, String FPP,
			String Export, String Exempt, String Nontaxable) throws Throwable {
		type("txtbox_DOGTT", DG);
		// String VAT_Collected_DG =
		// wd.findElement(By.xpath("//*[@ng-reflect-name='Delivery of
		// goodsDOGVC']")).getAttribute("value");

		VAT_Collected_DG = getValue("label_DOGTT");
		// elementText("label_DOGTT");

		// if(VAT_collected == DgVat)
		if (Float.parseFloat(VAT_Collected_DG) == ((Float.parseFloat(DG)) * 16 / 100)) {
			System.out.println("Pass");
		}
		type("txtbox_DOSTR", DS1);
		type("txtbox_DOSTT", DS2);
		VAT_Collected_DS = getValue("label_DOSTR");
		if (Float.parseFloat(VAT_Collected_DS) == ((Float.parseFloat(DS2)) * 16 / 100)) {
			System.out.println("Pass");
		}
		type("txtbox_DOGTITT", DGI);
		VAT_Collected_DGI = getValue("label_DOGTITT");
		if (Float.parseFloat(VAT_Collected_DGI) == ((Float.parseFloat(DGI)) * 16 / 100)) {
			System.out.println("Pass");
		}
		type("txtbox_DOSTITT", DSI);
		VAT_Collected_DSI = getValue("label_DOSTITT");
		if (Float.parseFloat(VAT_Collected_DGI) == ((Float.parseFloat(DSI)) * 16 / 100)) {
			System.out.println("Pass");
		}
		type("txtbox_ORTEFPPTT", FPP);
		VAT_Collected_FPP = getValue("label_ORTEFPPTT");
		FPPS = Float.parseFloat(FPP) * 16 / 100;
		if (Float.parseFloat(VAT_Collected_FPP) == ((Float.parseFloat(FPP)) * 16 / 100)) {
			System.out.println("Pass");
		}
		type("txtbox_EARTTT", Export);
		type("txtbox_ETTT", Exempt);
		type("txtbox_NTTTT", Nontaxable);

		Float Total_TTFC = (Float.parseFloat(DG)) + (Float.parseFloat(DS2)) + (Float.parseFloat(DGI))
				+ (Float.parseFloat(DSI)) + (Float.parseFloat(FPP));
		String Total_TT = getValue("label_TOTTT");

		if (Total_TTFC == Float.parseFloat(Total_TT)) {
			System.out.println("pass");
		}

		Total_VC = ((Float.parseFloat(DG)) * 16 / 100) + ((Float.parseFloat(DS2)) * 16 / 100)
				+ ((Float.parseFloat(DGI)) * 16 / 100) + ((Float.parseFloat(DSI)) * 16 / 100)
				+ ((Float.parseFloat(FPP)) * 16 / 100);

		String Total_VCT = getValue("label_TOTVC");

		if (Total_VC == Float.parseFloat(Total_VCT)) {
			System.out.println("pass");
		}

	}

	@Then("^Enter data in Deduction \"([^\"]*)\" ,\"([^\"]*)\", \"([^\"]*)\" ,\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\" ,\"([^\"]*)\" ,\"([^\"]*)\"$")
	public void enter_data_in_Deduction(String AI, String AL, String GI, String GL, String RI, String RL, String OI,
			String OL) throws Throwable {
		type("txtbox_ASTIMP", AI);
		type("txtbox_ASTLC", AL);
		Float TotalA = Float.parseFloat(AI) + Float.parseFloat(AL);
		String TotalAS = getValue("label_ASTIMP");
		if (TotalA == Float.parseFloat(TotalAS)) {
			System.out.println("pass");
		}
		type("txtbox_GDIMP", GI);
		type("txtbox_GDLC", GL);
		Float TotalG = Float.parseFloat(GI) + Float.parseFloat(GL);
		String TotalGS = getValue("label_GDIMP");
		if (TotalG == Float.parseFloat(TotalGS)) {
			System.out.println("pass");
		}
		type("txtbox_RMIMP", RI);
		type("txtbox_RMLC", RL);

		Float TotalR = Float.parseFloat(RI) + Float.parseFloat(RL);
		String TotalRS = getValue("label_RMIMP");
		if (TotalR == Float.parseFloat(TotalRS)) {
			System.out.println("pass");
		}

		type("txtbox_OGASIMP", OI);
		type("txtbox_OGASLC", OL);
		Float TotalO = Float.parseFloat(OI) + Float.parseFloat(OL);
		String TotalOS = getValue("label_OGASIMP");
		if (TotalO == Float.parseFloat(TotalOS)) {
			System.out.println("pass");
		}

		TotalD = TotalA + TotalG + TotalR + TotalO;
		String TotalDS = getValue("label_TDTL");

		if (TotalD == Float.parseFloat(TotalDS)) {
			System.out.println("pass");
		}
	}

	@Then("^Enter data in Adjustment \"([^\"]*)\" , \"([^\"]*)\" , \"([^\"]*)\" ,\"([^\"]*)\"$")
	public void enter_data_in_Adjustment(String VR, String SD, String VD, String PC) throws Throwable {
		type("txtbox_VRAAMT", VR);
		VRC = Float.parseFloat(VR);
		type("txtbox_SDAAMT", SD);
		SDC = Float.parseFloat(SD);
		type("txtbox_VDBMCASAAMT", VD);
		VDC = Float.parseFloat(VD);
		type("txtbox_RODVOEFPCAAMT", PC);
		PCC = Float.parseFloat(PC);
	}

	@Then("^calculate tax calculations and enter \"([^\"]*)\"$")
	public void calculate_tax_calculations_and_enter(String VAT3Party) throws Throwable {
		type("txtbox_VFTPATAMT", VAT3Party);

		NetVAT = Total_VC - TotalD + VRC - SDC - VDC - PCC - FPPS;
		Total_NetVAT = getValue("label_NetVAT");
		sleepWait(2000);
		Total_VATcredit = getValue("label_VATcredit1");
		Total_Refund = getValue("label_Refund");
		Total_Forward = getValue("label_Forward");
		Total_Procurement = getValue("label_Peocurement");
		Total_Pay = getValue("label_Payamount");
		if (NetVAT > 0) {
			if (NetVAT == Float.parseFloat(Total_NetVAT)) {
				System.out.println("pass");
			}
		} else {
			if (NetVAT == Float.parseFloat(Total_VATcredit)) {
				System.out.println("pass");
			}
		}
		// Float a = Float.parseFloat("Total_VATcredit");
		if (Float.parseFloat(Total_VATcredit) < 0) {
			Float TotalForward = (Float.parseFloat(Total_VATcredit)) - (Float.parseFloat(Total_Refund))
					- (Float.parseFloat(Total_Procurement)) - (Float.parseFloat(VAT3Party));

			if (TotalForward == Float.parseFloat(Total_Forward)) {
				System.out.println("pass");
			}
		} else {
			// D:\DRC_Automation\DRC-Automation-git\DRC-Automation-develop-5e7fa7cde7bb4b3537a4b2c6dc3cf11a41792c36\src\test\resources\Scenario.xlsx
			if (Float.parseFloat(Total_Forward) == 0) {
				System.out.println("pass");
			}

		}

		if (Float.parseFloat(Total_Procurement) == FPPS) {
			System.out.println("pass");
		}

		Float TotalPay = Float.parseFloat(Total_NetVAT) - Float.parseFloat(Total_VATcredit)
				+ Float.parseFloat(Total_Refund) + Float.parseFloat(Total_Procurement) + Float.parseFloat(VAT3Party);
		if (TotalPay == Float.parseFloat(Total_Pay)) {
			System.out.println("Pass");
		}
	}

	@Then("^Upload Efile schedule \"([^\"]*)\"$")
	public void upload_Efile_schedule(String file) throws Throwable {
		clickOn("btn_savedraft","");
		sleepWait(3000);
		clickOn("upload_efile1", "");
		String image = cwd.concat(file);
		UploadImage("", image);
		// System.out.println("Test");

	}

	/*
	 * @Then("^Enter sales data in E-filling \"([^\"]*)\" ,\"([^\"]*)\" , \"([^\"]*)\" ,\"([^\"]*)\" ,\"([^\"]*)\" , \"([^\"]*)\"$"
	 * ) public void enter_sales_data_in_E_filling(String SalesDomestic1, String
	 * SalesExport1, String SalesAdjustment1, String SalesDomestic2, String
	 * SalesExport2, String SalesAdjustment2) throws Throwable {
	 * 
	 * type("txtbox_salesgdomestic",SalesDomestic1);
	 * type("txtbox_salesgexport",SalesExport1);
	 * type("txtbox_salesgadjustment",SalesAdjustment1);
	 * type("txtbox_salesvdomestic",SalesDomestic2);
	 * type("txtbox_salesvexport",SalesExport2);
	 * type("txtbox_salesvadjustment",SalesAdjustment2); }
	 * 
	 * @Then("^Enter Purchase data in E-filling \"([^\"]*)\" ,\"([^\"]*)\" , \"([^\"]*)\" ,\"([^\"]*)\" ,\"([^\"]*)\" , \"([^\"]*)\"$"
	 * ) public void enter_Purchase_data_in_E_filling(String PDomestic1, String
	 * PImport1, String PAdjustment1, String PDomestic2, String PImport2, String
	 * PAdjustment2) throws Throwable {
	 * 
	 * type("txtbox_purchasegdomestic",PDomestic1);
	 * type("txtbox_purchasegimport",PImport1);
	 * type("txtbox_purchasegadjustment",PAdjustment1);
	 * type("txtbox_purchasevdomestic",PDomestic2);
	 * type("txtbox_purchasevimport",PImport2);
	 * type("txtbox_purchasevadjustment",PAdjustment2); }
	 * 
	 * @Then("^Enter Adjustment data in E-filing \"([^\"]*)\" ,\"([^\"]*)\" ,\"([^\"]*)\" ,\"([^\"]*)\" ,\"([^\"]*)\" ,\"([^\"]*)\"$"
	 * ) public void enter_Adjustment_data_in_E_filing(String invoice1, String
	 * credit1, String debit1, String invoice2, String credit2, String debit2)
	 * throws Throwable { type("txtbox_invoicetotal",invoice1);
	 * type("txtbox_credittotal",credit1); type("txtbox_debittotal",debit1);
	 * type("txtbox_invoice",invoice2);
	 * 
	 * 
	 * type("txtbox_debit",debit2); }
	 */
	@Then("^Upload Efile schedule file \"([^\"]*)\"$")
	public void upload_Efile_schedule_file(String file) throws Throwable {

		clickOn("btn_savedraft", "");
		sleepWait(2000);
		clickOn("upload_efile1", "");
		String image = cwd.concat(file);
		UploadImage("", image);
		System.out.println("Test");
	}

	@Then("^Check for Confirmation and choose authorized signatory \"([^\"]*)\"$")
	public void check_for_Confirmation_and_choose_authorized_signatory(String Authorized) throws Throwable {
		clickOn("chkbox_confirmation", "");
		sleepWait(1000);
		clickOn("drp_authorised", "");
		String auth = (Username.substring(0, Username.indexOf('@'))).toLowerCase();
		clickOn("span", "[contains(text(),'" + auth + "')]");
		sleepWait(3000);
		clickOn("btn_esubmit", "");

	}

	@Then("^clicks on submit button on E-filling page$")
	public void clicks_on_submit_button_on_E_filling_page() throws Throwable {
		// clickOn("btn_esubmit","");
		sleepWait(4000);
		clickOn("btn_yes", "");
		sleepWait(4000);
	}

	@Then("^Enter OTP and click on verify button and click on Ok button$")
	public void enter_OTP_and_click_on_verify_button_and_click_on_Ok_button() throws Throwable {

		Read_OTP RO = new Read_OTP();
		String OTP = RO.ReadOTP(Username);
		wd.findElement(By.xpath("//*[@placeholder='Enter your OTP']")).sendKeys(OTP);
		wd.findElement(By.xpath("//*[text()='Verify']")).click();
		sleepWait(3000);
		wd.findElement(By.xpath("//*[@title='OK']")).click();
	}

	@Then("^calculate Tax payable amount$")
	public void calculate_Tax_payable_amount() throws Throwable {
		sleepWait(8000);
		String Netvat = getValue("label_VATpaid");
		String Vatcredit = getValue("label_VATcredit");
		String Vatforward = getValue("label_VATforward");
		String Vatrefund = getValue("label_VATrefund");
		String Vatprocurement = getValue("label_VATprocurement");
		String Vat3rdparty = getValue("label_VAT3rd");
		String Vatamountpay = getValue("label_VATamtpay");

		if (Float.parseFloat(Netvat) == Float.parseFloat(Total_NetVAT)) {
			System.out.println("pass");
		}
		if (Float.parseFloat(Vatcredit) == Float.parseFloat(Total_VATcredit)) {
			System.out.println("pass");
		}
		if (Float.parseFloat(Vatforward) == Float.parseFloat(Total_Forward)) {
			System.out.println("pass");
		}
		if (Float.parseFloat(Vatrefund) == Float.parseFloat(Total_Refund)) {
			System.out.println("pass");
		}
		if (Float.parseFloat(Vatprocurement) == Float.parseFloat(Total_Procurement)) {
			System.out.println("pass");
		}
		/*
		 * if(Float.parseFloat(Vat3rdparty)==Float.parseFloat(VAT3Party)) {
		 * System.out.println("pass"); }
		 */
		if (Float.parseFloat(Vatamountpay) == Float.parseFloat(Total_Pay)) {
			System.out.println("pass");
		}
	}

	@Then("^Click on Proceed Button and click on Ok button on offset successful$")
	public void click_on_Proceed_Button_and_click_on_Ok_button_on_offset_successful() throws Throwable {

		clickOn("btn_proceed", "");
		sleepWait(2000);
		// wd.findElement(By.xpath("//*[@title='OK']")).click();
	}

	@Then("^cliccks on \"([^\"]*)\" and verify details$")
	public void cliccks_on_and_verify_details(String Paymentoption) throws Throwable {

		if (Paymentoption.equalsIgnoreCase("Over the Counter")) {
			clickOn("chkbox_over", "");
		} else {
			clickOn("chkbox_netbanking", "");
		}

	}

	@Then("^Execute query for payment$")
	public void execute_query_for_payment() throws Throwable {

	}

	@Given("^User login with tax-offcer's credentials$")
	public void user_login_with_tax_offcer_s_credentials() throws Throwable {
		sleepWait(5000);

		/*
		 * clickOn("tab_VAT",""); sleepWait(3000); // clickOn("btn_sure","");
		 * // sleepWait(2000); Set<String> handles = wd.getWindowHandles();
		 * String currentHandle = wd.getWindowHandle(); sleepWait(3000); for
		 * (String handle : handles) {
		 * 
		 * if (!handle .equals(currentHandle)) { wd.switchTo().window(handle); }
		 * }
		 */
		clickOn("tab_container", "");
		sleepWait(2000);
		// clickOn("tab_pin","");
		sleepWait(2000);
	}

	@When("^click on \"([^\"]*)\" option$")
	public void click_on_option(String As) throws Throwable {
		clickOn("tab_assessment", "");
		sleepWait(3000);
		clickOn("span", "[contains(text(),'" + As + "')]");
		// clickOn("tab_manualassessment", "");
		sleepWait(8000);

	}

	@When("^Tax-officer search for the records using \"([^\"]*)\" , \"([^\"]*)\" ,\"([^\"]*)\"$")
	public void tax_officer_search_for_the_records_using(String month, String year, String filter) throws Throwable {
		if (month.equalsIgnoreCase("January")) {

		} else {
			clickOn("drp_dwn_period", "");
			clickOn("span", "[contains(text(),'" + month + "')]");
		}
		if (year.equalsIgnoreCase("2019")) {
		} else {
			clickOn("drp_dwn_year", "");
			clickOn("span", "[contains(text(),'" + year + "')]");
		}
		clickOn("drp_dwn_filter", "");
		clickOn("span", "[contains(text(),'" + filter + "')]");
	}

	@When("^serach for the records \"([^\"]*)\" and click on search button$")
	public void serach_for_the_records_and_click_on_search_button(String searchElement) throws Throwable {
		clickOn("txt_search", "");
		type("txt_search", searchElement);
		clickOn("icn_search", "");
		sleepWait(2000);
		clickOn("icn_manage", "");
		sleepWait(3000);
	}

	@When("^click on the \"([^\"]*)\" option$")
	public void click_on_the_option(String filter) throws Throwable {
		// clickOn("","");
		clickOn("a", "[contains(text(),'" + filter + "')]");
		sleepWait(2000);

	}

	@When("^Verify the details of e-filing operation performed$")
	public void verify_the_details_of_e_filing_operation_performed() throws Throwable {
		// VAT_Collected_DG

		/*
		 * String DGoods=elementText("label_DG");
		 * 
		 * //String DGoods = wd.findElement(By.
		 * xpath("(//*[contains(text(),'1. Delivery of goods')]/following::div)[2]"
		 * )).getText(); if(Float.parseFloat(DG)==Float.parseFloat(DGoods)) {
		 * System.out.println("pass"); } String DServiceTR =
		 * elementText("lable_DSTT"); {
		 * 
		 * } String DServiceTT = elementText("lable_DSTR"); {
		 * 
		 * } String Export = elementText("label_Export"); {
		 * 
		 * } String Exempt = elementText("label_exempt"); {
		 * 
		 * } String Nontax = elementText("label_nontax"); {
		 * 
		 * } String DGVat= elementText("label_DGvat"); { } String DSVat=
		 * elementText("Label_DSvat"); {
		 * 
		 * } String DiffTR = elementText("label_DiffTR"); {
		 * 
		 * } String DiffTT = elementText("label_DiffTT"); {
		 * 
		 * } String DiffVC =elementText("label_DiffVC"); {
		 * 
		 * } String DGIV = elementText("label_DGI"); {
		 * 
		 * } String DSI = elementText("label_DSI"); {
		 * 
		 * } String DSIV = elementText("label_DGIV"); {
		 * 
		 * } String OR = elementText("label_OR"); {
		 * 
		 * } String ORV = elementText("label_ORV"); {
		 * 
		 * } //String Total_FC = elementText(""); String Total_TTFC=
		 * elementText(""); {
		 * 
		 * } String Total_VFC= elementText(""); {
		 * 
		 * } String TDG = elementText("label_TDG"); {
		 * 
		 * } String TDGvat = elementText("label_TDGvat"); {
		 * 
		 * } String TDSTR = elementText("label_TDSTR"); {
		 * 
		 * } String TDSTT = elementText("label_TDSTT"); {
		 * 
		 * } String TDSvat = elementText("label_TDSvat"); {
		 * 
		 * } String TExport = elementText("label_TExport"); {
		 * 
		 * } String Texempt = elementText("label_Texempt"); {
		 * 
		 * } String Tnontax = elementText("label_Tnontax"); {
		 * 
		 * }
		 */
		sleepWait(2000);
		clickOn("btn_next", "");
	}

	@When("^Verify the detailds of Tax-deductible$")
	public void verify_the_detailds_of_Tax_deductible() throws Throwable {
		/*
		 * String Asset1= elementText("label_asset1"); String Asset2 =
		 * elementText("label_asset2"); String Asset3 =
		 * elementText("label_asset3"); String good1 =
		 * elementText("label_good1"); String good2 =
		 * elementText("label_good2"); String good3 =
		 * elementText("label_good3"); String raw1= elementText("label_raw1");
		 * String raw2 = elementText("label_raw2"); String raw3 =
		 * elementText("label_raw3"); String othet1
		 * =elementText("label_others1"); String
		 * other2=elementText("label_others2"); String other3 =
		 * elementText("label_others3"); String reportforward =
		 * elementText("label_reportforward"); String
		 * amountded=elementText("label_amountded");
		 */
		sleepWait(2000);
		clickOn("btn_next", "");
	}

	@When("^Verify the details of Adjustmnet$")
	public void verify_the_details_of_Adjustmnet() throws Throwable {

		/*
		 * String eadjsup=elementText("label_eadjsup"); String
		 * eadjvat=elementText("label_eadjvat"); String tadjsup =
		 * elementText("label_tadjsup"); String tadjvat =
		 * elementText("label_tadjvat"); String adjdiff =
		 * elementText("label_adjdif"); String othvat=
		 * elementText("label_othvat"); String othreco=
		 * elementText("label_othreco");
		 */
		sleepWait(2000);
		clickOn("btn_next", "");
	}

	@When("^Verify the details of Assessment Summary$")
	public void verify_the_details_of_Assessment_Summary() throws Throwable {

		sleepWait(2000);
		clickOn("btn_next", "");
	}

	@When("^verify the details of Payment summary$")
	public void verify_the_details_of_Payment_summary() throws Throwable {

		/*
		 * String netvat1 = elementText("label_netvat1"); String netvat2 =
		 * elementText("label_netvat2"); String netvat3 =
		 * elementText("label_netvat3"); String vatc1
		 * =elementText("label_vatc1"); String vatc2
		 * =elementText("label_vatc2"); String vatc3
		 * =elementText("label_vatc3"); String refund1 =
		 * elementText("label_refund1"); String refund2 =
		 * elementText("label_refund2"); String refund3 =
		 * elementText("label_refund3"); String vatcr1 =
		 * elementText("label_vatcr1"); String vatcr2 =
		 * elementText("label_vatcr2"); String vetcr3 =
		 * elementText("label_vatcr3"); String prc1 = elementText("label_prc1");
		 * String prc2 = elementText("label_prc2"); String prc3 =
		 * elementText("label_prc3"); String third1 = elementText("label_3rd1");
		 * String third2 = elementText("label_3rd2"); String third3 =
		 * elementText("label_3rd3"); String int1 = elementText("label_int1");
		 * String int2 = elementText("label_int2"); String int3 =
		 * elementText("label_int3"); String late1 = elementText("label_late1");
		 * String late2 = elementText("label_late2"); String late3 =
		 * elementText("label_late3"); String penalty =
		 * elementText("label_penalty1"); String amtp1 =
		 * elementText("label_amtp1"); String amtp2 =
		 * elementText("label_amtp2"); String amtp3 =
		 * elementText("label_amtp3"); String lia1 = elementText("label_lia1");
		 * String lia2 = elementText("label_lia2"); String lia3 =
		 * elementText("label_lia3"); String pinterest1 =
		 * elementText("label_pinterest1"); String pinterest2 =
		 * elementText("label_pinterest2"); String pinterest3 =
		 * elementText("label_pinterest3"); String plate1 =
		 * elementText("label_plate1"); String plate2 =
		 * elementText("label_plate2"); String plate3 =
		 * elementText("label_plate3"); String ppenalty1 =
		 * elementText("label_ppenalty1"); String ppenalty2 =
		 * elementText("label_ppenalty2"); String ppenalty3 =
		 * elementText("label_ppenalty3"); String amtpaid1 =
		 * elementText("label_amtpaid1"); String amtpaid2 =
		 * elementText("label_amtpaid2"); String amtpaid3 =
		 * elementText("label_amtpaid3");
		 * 
		 * }
		 * 
		 * @Given("^User Login with Admin's credentials$") public void
		 * user_Login_with_Admin_s_credentials() throws Throwable {
		 * 
		 * //sleepWait(1000);
		 * /*if(wd.findElement(By.xpath(obj.getProperty("txt_FxManagement"))).
		 * isDisplayed()) { assertTrue(true); } sleepWait(1000);
		 */
		sleepWait(5000);
		clickOn("btn_raisenotice", "");
		sleepWait(1000);

	}

	@When("^check for \"([^\"]*)\"$")
	public void check_for(String toastmessage) throws Throwable {
		String toast = toastMessage();

		if (toast.equalsIgnoreCase(toastmessage)) {
			assertTrue(true);
		}
		sleepWait(5000);
	}

	@Given("^User Login with Admin's credentials$")
	public void user_Login_with_Admin_s_credentials() throws Throwable {
		System.out.println("Execution started");
		clickOn("tab_container", "");
		sleepWait(2000);
		// clickOn("tab_pin","");
		sleepWait(2000);
	}

	@When("^Click on Fx management tab and check for the base currency \"([^\"]*)\" , \"([^\"]*)\"$")
	public void click_on_Fx_management_tab_and_check_for_the_base_currency(String base, String country)
			throws Throwable {
		sleepWait(1000);
		clickOn("txt_FxManagement", "");
		sleepWait(1000);

		BaseCurr = elementText("txt_BaseCurrency_1");
		BaseCurrName = elementText("txt_BaseCurrency_Name");
		if (BaseCurr.contains(base) && BaseCurrName.contains(country)) {
			assertTrue(true);
		}

	}

	@When("^Click on Historical data and check for the base currency \"([^\"]*)\" , \"([^\"]*)\"$")
	public void click_on_Historical_data_and_check_for_the_base_currency(String base, String country) throws Throwable {

		sleepWait(1000);
		clickOn("btn_HistoricalFX", "");

		sleepWait(1000);

		BaseCurr = elementText("txt_Currencyrate");
		BaseCurrName = elementText("txt_Currencyname");
		if (BaseCurr.contains(base) && BaseCurrName.contains(country)) {
			assertTrue(true);
		}

	}

	@When("^Click on previous button$")
	public void click_on_previous_button() throws Throwable {
		clickOn("btn_Previuos", "");

	}

	@When("^Click on Update button and check for the base currency \"([^\"]*)\" , \"([^\"]*)\"$")
	public void click_on_Update_button_and_check_for_the_base_currency(String base, String country) throws Throwable {
		sleepWait(1000);
		clickOn("btn_UpdateFX", "");
		sleepWait(1000);
		BaseCurr = elementText("txt_Currencyrate");
		BaseCurrName = elementText("txt_Currencyname");
		if (BaseCurr.contains(base) && BaseCurrName.contains(country)) {
			assertTrue(true);
		}
	}

	@When("^update the \"([^\"]*)\" and click on save button and check \"([^\"]*)\"$")
	public void update_the_and_click_on_save_button_and_check(String rates, String tostmessage) throws Throwable {

		// clickOn("btn_UpdateFX","");
		// sleepWait(2000);
		type("txt_Fxrate", rates);
		sleepWait(1000);
		clickOn("btn_SaveFX", "");

	}

	@When("^Click on cancel button$")
	public void click_on_cancel_button() throws Throwable {
		// clickOn("btn_cancel","");
	}

	@When("^Click on Fx management tab$")
	public void click_on_Fx_management_tab() throws Throwable {
		sleepWait(1000);
		clickOn("txt_FxManagement", "");
	}

	@When("^select \"([^\"]*)\" , \"([^\"]*)\" from the drop-down$")
	public void select_from_the_drop_down(String option, String currency) throws Throwable {

		clickOn("drp_option", "");
		clickOn("span", "[contains(text(),'" + option + "')]");
		sleepWait(2000);
		clickOn("drp_currency", "");
		clickOn("span", "[contains(text(),'" + currency + "')]");
		sleepWait(1000);
		clickOn("btn_savecurrency", "");
	}

	@When("^validate \"([^\"]*)\"$")
	public void validate(String tostmessage) throws Throwable {

		if (wd.findElement(By.xpath("//*[contains(text(),'" + tostmessage + "')]")).isDisplayed()) {
			assertTrue(true);
		}
	}

	@When("^select \"([^\"]*)\" for confirmation$")
	public void select_for_confirmation(String option) throws Throwable {

		clickOn("btn_approve", "");
	}
	/*
	 * @When("^close the browser$") public void close_the_browser() throws
	 * Throwable { wd.quit(); }
	 */

	@Given("^Tax-officer is on given Page \"([^\"]*)\"$")
	public void tax_officer_is_on_given_Page(String Page) throws Throwable {

		clickOn("tab_assessment", "");
		sleepWait(2000);

	}

	@When("^Tax-officer Select \"([^\"]*)\" , \"([^\"]*)\" , \"([^\"]*)\"from drop-down$")
	public void tax_officer_Select_from_drop_down(String Period, String Year, String Filter) throws Throwable {

		clickOn("drp_dwn_period", "");
		clickOn("span", "[contains(text(),'" + Period + "')]");
		// clickOn("drp_dwn_year","");
		// clickOn("span","[contains(text(),'" + Year +"')]");
		clickOn("drp_dwn_filter", "");
		clickOn("span", "[contains(text(),'" + Filter + "')]");
	}

	@When("^Tax-officer Search for  Record from \"([^\"]*)\"$")
	public void tax_officer_Search_for_Record_from(String SearchElement) throws Throwable {

		clickOn("txt_search", "");
		type("txt_search", SearchElement);
	}

	@When("^Clicks on Search Button$")
	public void clicks_on_Search_Button() throws Throwable {

		clickOn("btn_search", "");
	}

	@When("^Clicks For the status from \"([^\"]*)\"$")
	public void clicks_For_the_status_from(String status) throws Throwable {
		String Status = elementText("text_status");
		// System.out.println(Status);

		if (status.equals(Status)) {
			System.out.println("Pass");
		}

	}

	@When("^Clicks on drp_select button$")
	public void clicks_on_drp_select_button() throws Throwable {

		sleepWait(2000);

		String Nitva = elementText("text_nitva");
		System.out.println(Nitva);
		clickOn("drp_option", "");
	}

	@When("^Clicks on  given \"([^\"]*)\"$")
	public void clicks_on_given(String Option) throws Throwable {

		clickOn("span", "[contains(text(),'" + Option + "')]");

	}

	@When("^Clicks on sales_domestic icon , redirect to sales page and click on previous button$")
	public void clicks_on_sales_domestic_icon_redirect_to_sales_page_and_click_on_previous_button() throws Throwable {

		sleepWait(2000);
		String Value = elementText("text_domestic");
		if (Value.equals("Domestic Sales")) {
			System.out.println("Pass");
		}
	}

	@When("^Clicks on sales_export icon , redirect to sales page and click on previous button$")
	public void clicks_on_sales_export_icon_redirect_to_sales_page_and_click_on_previous_button() throws Throwable {

		sleepWait(2000);
		String Value = elementText("text_domestic");
		if (Value.equals("Export Sales")) {
			System.out.println("Pass");
		}

	}

	@When("^Clicks on sales_adjustment icon , redirect to sales page and click on previous button$")
	public void clicks_on_sales_adjustment_icon_redirect_to_sales_page_and_click_on_previous_button() throws Throwable {

	}

	@When("^Clicks on purchase_domestic icon , redirect to sales page and click on previous button$")
	public void clicks_on_purchase_domestic_icon_redirect_to_sales_page_and_click_on_previous_button()
			throws Throwable {

	}

	@When("^Clicks on purchase_export icon , redirect to sales page and click on previous button$")
	public void clicks_on_purchase_export_icon_redirect_to_sales_page_and_click_on_previous_button() throws Throwable {

	}

	@When("^Clicks on purchase_adjustment icon , redirect to sales page and click on previous button$")
	public void clicks_on_purchase_adjustment_icon_redirect_to_sales_page_and_click_on_previous_button()
			throws Throwable {

	}

	@Given("^User Login with Manufacturer credentials$")
	public void user_Login_with_Manufacturer_credentials() throws Throwable {
		type("txtbox_username", "tripty.chauhan@1rivet.com");
		sleepWait(2000);
		type("txtbox_password", "Test@123");
		sleepWait(2000);
		clickOn("btn_login", "");

	}

	@When("^Click on Vendor registartion tab$")
	public void click_on_Vendor_registartion_tab() throws Throwable {

		clickOn("tab_container", "");
		sleepWait(2000);
		clickOn("tab_pin", "");
		sleepWait(2000);
		clickOn("tab_vendor", "");
		sleepWait(2000);
	}

	@When("^Click on Register Vendor Button$")
	public void click_on_Register_Vendor_Button() throws Throwable {

		clickOn("btn_regvendor", "");
		// wd.findElement(By.xpath("(//*[contains(text(),'Register
		// Vendor')])[1]")).click();
		sleepWait(2000);
	}

	@When("^Fill the Details of Vendor \"([^\"]*)\" , \"([^\"]*)\" , \"([^\"]*)\" , \"([^\"]*)\" ,\"([^\"]*)\"$")
	public void fill_the_Details_of_Vendor(String NIF, String Date, String Vendor, String MobileNo, String Email)
			throws Throwable {

		String times = new SimpleDateFormat("HHmmss").format(new Date());
		String NIFNumber = times.concat(NIF);
		type("txtbox_NIF", NIFNumber);
		// type("txt_NIF",NIF);
		sleepWait(2000);
		clickOn("dt_NIFregdate", "");
		datePicker(Date);
		type("txt_vendorname", Vendor);
		sleepWait(2000);
		String MobNo = times.concat(MobileNo);
		type("txt_vendormobile", MobNo);
		sleepWait(2000);
		vendoremail = times.concat(Email);
		type("txt_vendoremail", vendoremail);
		sleepWait(2000);

	}

	@When("^Fill the Details of contact person \"([^\"]*)\" ,\"([^\"]*)\" , \"([^\"]*)\"$")
	public void fill_the_Details_of_contact_person(String Contactname, String Mobile, String Email) throws Throwable {
		type("txt_contactname", Contactname);
		sleepWait(2000);
		String dytime = new SimpleDateFormat("HHmmss").format(new Date());
		String Mobnum = dytime.concat(Mobile);
		type("txt_contactmobile", Mobnum);
		sleepWait(2000);
		String email = dytime.concat(Email);
		type("txt_contactemail", email);
		sleepWait(2000);

	}

	@When("^Fill Address detals \"([^\"]*)\" ,\"([^\"]*)\" ,\"([^\"]*)\"$")
	public void fill_Address_detals(String Address, String Province, String City) throws Throwable {
		type("txt_addressline1", Address);
		sleepWait(2000);
		clickOn("drp_province", "");
		clickOn("span", "[contains(text(),'" + Province + "')]");
		sleepWait(2000);
		// wd.findElement(By.xpath("(//*[@formcontrolname='cityId'])[1]"));
		clickOn("drp_city", "");
		clickOn("span", "[contains(text(),'" + City + "')]");
		sleepWait(1000);

	}

	@When("^click on Register button and validate \"([^\"]*)\"$")
	public void click_on_Register_button_and_validate(String toastmessage) throws Throwable {
		clickOn("btn_reg", "");
		sleepWait(8000);
		String toast = toastMessage();

		if (toast.equalsIgnoreCase(toastmessage)) {
			assertTrue(true);
		}

	}

	@Given("^User login with Tax-payers credentials$")
	public void user_login_with_Tax_payers_credentials() throws Throwable {

		type("txtbox_username", Username);
		sleepWait(2000);
		type("txtbox_password", "Test@123");
		sleepWait(2000);
		clickOn("btn_login", "");
	}

	@When("^clicks on e-filling tab$")
	public void clicks_on_e_filling_tab() throws Throwable {

		clickOn("tab_VAT", "");
		sleepWait(3000);
		clickOn("btn_sure", "");
		sleepWait(3000);
		clickOn("tab_container", "");
		sleepWait(2000);
		// clickOn("tab_pin","");
		sleepWait(1000);
		clickOn("tab_vatefiling", "");
		sleepWait(1000);
	}

	@When("^clicks on assessment icon view button$")
	public void clicks_on_assessment_icon_view_button() throws Throwable {
		sleepWait(1000);
		clickOn("label_month", "");
		sleepWait(1000);
		clickOn("btn_oview", "");
		sleepWait(2000);

	}

	@When("^Clicks on Notice view button$")
	public void clicks_on_Notice_view_button() throws Throwable {

		clickOn("btn_objview", "");
		sleepWait(2000);
	}

	@When("^Clicks on \"([^\"]*)\"$")
	public void clicks_on(String obj) throws Throwable {

		clickOn("btn_objection", "");
		sleepWait(4000);
	}

	@When("^redirect to cases tab and fill details \"([^\"]*)\",\"([^\"]*)\" , \"([^\"]*)\"$")
	public void redirect_to_cases_tab_and_fill_details(String type, String title, String description) throws Throwable {
		sleepWait(5000);
		WebElement element1 = wd.findElement(By.id("iframe"));
		wd.switchTo().frame(element1);
		sleepWait(1000);
		clickOn("drp_objecttype", "");
		clickOn("option", "[contains(text(),'" + type + "')]");
		sleepWait(2000);
		type("txt_objtitle", title);
		sleepWait(2000);
		wd.switchTo().frame("my-editor_ifr");
		type("txt_description", description);
		sleepWait(2000);

	}

	@When("^click on upload file \"([^\"]*)\"$")
	public void click_on_upload_file(String file) throws Throwable {

		/*
		 * wd.switchTo().defaultContent(); WebElement element1 =
		 * wd.findElement(By.id("iframe")); wd.switchTo().frame(element1);
		 * 
		 * clickOn("upload_objectfile",""); String image11 =cwd.concat(file);
		 * UploadImage("", image11);
		 */
	}

	@When("^clicks on submit button$")
	public void clicks_on_submit_button() throws Throwable {
		sleepWait(2000);

		wd.switchTo().defaultContent();
		WebElement element1 = wd.findElement(By.id("iframe"));
		wd.switchTo().frame(element1);

		clickOn("btn_osubmit", "");
	}

	@Given("^User login with admin/tax-officer credentials$")
	public void user_login_with_admin_tax_officer_credentials() throws Throwable {

		/*
		 * type("txtbox_username",Username); sleepWait(2000);
		 * type("txtbox_password","Test@123"); sleepWait(2000);
		 * clickOn("btn_login","");
		 */
	}

	@When("^clicks on case management tab$")
	public void clicks_on_case_management_tab() throws Throwable {

		sleepWait(2000);
		clickOn("tab_casemanagement", "");
	}

	@When("^Apply filter \"([^\"]*)\" option , \"([^\"]*)\" and click on search ;$")
	public void apply_filter_option_and_click_on_search(String Filter, String SearchElement) throws Throwable {

		clickOn("drp_filter", "");
		clickOn("(span", "[contains(text(),'" + Filter + "')])[1]");
		type("txt_search", NITVA);
		sleepWait(5000);
		clickOn("btn_osearch", "");
		sleepWait(2000);
	}

	@When("^Clicks on manage icon and  \"([^\"]*)\" option$")
	public void clicks_on_manage_icon_and_option(String option) throws Throwable {
		clickOn("drp_manage", "");
		clickOn("(a", "[contains(text(),'" + option + "')])[1]");
		sleepWait(8000);
	}

	@When("^Clicks on  \"([^\"]*)\",\"([^\"]*)\" option and click on submit button$")
	public void clicks_on_option_and_click_on_submit_button(String priority, String action) throws Throwable {

		WebElement element1 = wd.findElement(By.id("iframe"));
		wd.switchTo().frame(element1);
		sleepWait(1000);
		clickOn("drp_priority", "");
		clickOn("option", "[contains(text(),'" + priority + "')]");
		sleepWait(3000);
		wd.switchTo().defaultContent();
		wd.switchTo().frame(element1);
		clickOn("drp_action", "");
		clickOn("option", "[contains(text(),'" + action + "')]");

	}

	@When("^Clicks on \"([^\"]*)\" option and click on submit button$")
	public void clicks_on_option_and_click_on_submit_button(String arg1) throws Throwable {
		// clickOn("drp_review","");
		wd.switchTo().defaultContent();
		WebElement element1 = wd.findElement(By.id("iframe"));
		wd.switchTo().frame(element1);
		sleepWait(2000);
		clickOn("btn_osubmit", "");
	}

	@Given("^User Login with vendor's credentials$")
	public void user_Login_with_vendor_s_credentials() throws Throwable {

		type("txtbox_username", vendoremail);
		sleepWait(2000);
		ReadUsername RU = new ReadUsername();
		String Password = RU.ReadUsername(vendoremail);
		type("txtbox_password", Password);
		sleepWait(2000);
		clickOn("btn_login", "");
	}

	@When("^Click on EFD registartion tab$")
	public void click_on_EFD_registartion_tab() throws Throwable {

		clickOn("tab_container", "");
		sleepWait(2000);
		// clickOn("tab_pin","");
		// sleepWait(2000);
		clickOn("tab_EFDregistartionlist", "");
		sleepWait(2000);
	}

	@When("^Click on EFD Registration Button$")
	public void click_on_EFD_Registration_Button() throws Throwable {
		clickOn("btn_EFDregistartion", "");
		sleepWait(2000);
	}

	@When("^Enter NITVA number and click on search button$")
	public void enter_NITVA_number_and_click_on_search_button() throws Throwable {
		ConnectDatabase CD = new ConnectDatabase();
		CD.opendb();

		String NITVANumber = "select NITVA from vat.VuUsers where RegisteredUserId in("
				+ "select RegisteredUserId from ref.RegisteredUsers where " + "Email ='" + vendoremail + "')";

		ResultSet rs = CD.sta.executeQuery(NITVANumber);
		System.out.println(rs);
		while (rs.next()) {
			String NITVA1 = (rs.getString("NITVANumber")).trim();

			type("txt_NITVA", NITVA1);

		}
		sleepWait(2000);
		clickOn("btn_searchNITVA", "");
	}

	@When("^Fill the Details of Vendor \"([^\"]*)\" , \"([^\"]*)\" , \"([^\"]*)\" , \"([^\"]*)\" ,\"([^\"]*)\" ,\"([^\"]*)\"$")
	public void fill_the_Details_of_Vendor(String address, String sim1, String sim2, String device, String model,
			String EFDID) throws Throwable {

		clickOn("drp_address", "");
		// wd.sendkeys
		String time = new SimpleDateFormat("HHmmss").format(new Date());
		String SIM1 = time.concat(sim1);
		type("txt_sim1", SIM1);
		String SIM2 = time.concat(sim2);
		type("txt_sim2", SIM2);
		clickOn("drp_device", "");
		clickOn("span", "[contains(text(),'" + device + "')]");
		clickOn("drp_model", "");
		sleepWait(2000);
		clickOn("span", "[contains(text(),'" + model + "')]");
		sleepWait(2000);
		// clickOn("drp_EFD",EFDID);

		type("drp_EFD", EFDID);
	}

	@When("^click on Test button and validate \"([^\"]*)\"$")
	public void click_on_Test_button_and_validate(String toastmessage) throws Throwable {

		clickOn("btn_test", "");
		if (toastMessage().equalsIgnoreCase(toastmessage)) {
			assertTrue(true);
		}
	}
}
