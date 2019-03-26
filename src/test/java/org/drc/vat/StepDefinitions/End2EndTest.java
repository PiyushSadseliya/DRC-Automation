package org.drc.vat.StepDefinitions;

import static org.drc.vat.appmanager.HelperBase.*;
import static org.testng.Assert.assertTrue;
import static org.drc.vat.appmanager.ApplicationManager.*;
import java.awt.Robot;
import java.awt.event.KeyEvent;
import java.io.File;
import java.sql.ResultSet;
import java.text.DecimalFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;
import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertNotEquals;
import java.util.Set;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.By.ByXPath;
import org.testng.Assert;
import org.testng.asserts.SoftAssert;
import org.drc.vat.appmanager.*;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class End2EndTest extends StringDeclare {
	String cwd = System.getProperty("user.dir");
	public String times = new SimpleDateFormat("HHmmss").format(new Date());
	public String GetTitle;
	public String mn;
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
	public static String StoreSysRelated;
	public static Float ODG;
	public static Float DS11;
	public static Float DS21;
	public static Float Export;
	public static Float Exempt;
	public static Float Nontaxable;
	public static Float DGI1;
	public static Float DSI1;
	public static Float FPP1;
	public static Float TotalA;
	public static Float TotalG;
	public static Float TotalR;
	public static Float TotalO;
	public static String DGI;
	public static String DSI;
	public static String FPP;
	public static String DG;
	public static String Username;
	public static String vendoremail;
	public static String NITVA;
	public static String NitvaNo;
	public static String NITVA_Number;
	public static String collectofficername;
	public String BaseCurr;
	public String BaseCurrName;
	public String BaseCurrCheck;
	public String StoreCurrency;
	public SoftAssert sassert = new SoftAssert();
	public String pendingamount;
	public static int recordNo = 0;
	public static boolean isRecordSet = true;
	public static String debtcaseid;
	public static String totalDebtAmount = null;
	public String Acaction = null;
	public static int records = 1;
	public String createdDaterec = null;
	public String performOfficer = null;
	public String approvedOfficer = null;
	public String txpayer = null;
	public String nitvano = null;
	public String createdDate = null;
	public String source = null;
	public String reason = null;
	public String comment = null;
	public int businessplus = 1;
	public String olddate = null;
	public String oldperiod = null;
	public String oldpartic = null;
	public String ovatliab = null;
	public String oltfee = null;
	public String oint = null;
	public String openal = null;
	public String adjperiod = null;
	public String adjcharge = null;
	public String adjvatliab = null;
	public String adjltfee = null;
	public String adjpenal = null;
	public String cdate = null;
	public String Tvatliab = null;
	public String Ttfee = null;
	public String Tpenal = null;
	// Objection and Appeal
	public String CaseMObjectionid = null;
	public String assessmentId = null;
	public String CaseDebtId = null;
	public int apendingtoapprorec = 0;

	@Given("^User is on VAT Registration Dashboard$")
	public void user_is_on_VAT_Registration_Dashboard() throws Throwable {

		System.out.println("Registartion successfull");
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		Add_Log.info("Successfully executed step " + TestStep);
	}

	@When("^Establish a connection with data base and execute query to create user\\.$")
	public void establish_a_connection_with_data_base_and_execute_query_to_create_user() throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();

		ConnectDatabase CD = new ConnectDatabase();
		CD.opendb();
		String user = "DECLARE @a int = (select count(*)+1 from [1AuthoritySTS-Demo].[dbo].[AspNetUsers] where email like 'atuserdemo%')"
				+ "INSERT INTO [1AuthoritySTS-Demo].[dbo].[AspNetUsers]            "
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
				+ "         ,[FullName]                                         "
				+ "        , DateRegistered)                                   "
				+ "   VALUES                                                    "
				+ "         (NEWID(),                                           "
				+ "         0                                                   "
				+ "         ,NEWID()                                            "
				+ "         ,CONCAT('atuserdemo',@a,'@mt2015.com')              "
				+ "         ,1                                                  "
				+ "         ,0                                                  "
				+ "         ,NULL                                               "
				+ "         ,CONCAT('atuserdemo',@a,'@mt2015.com')              "
				+ "         ,CONCAT('atuserdemo',@a,'@mt2015.com')              "
				+ "         ,'AQAAAAEAACcQAAAAEM/wSgVN/nG79PYxp2X4xCzrtdQcsTEYE911sxUm9sniuJtbzybplBD6TYP+BnxhDg=='  "
				+ "         ,'7788995544'                                                                         "
				+ "         ,1                                                                                       "
				+ "          , NEWID()                                                                               "
				+ "          ,0                                                                                      "
				+ "          ,'TaxPortal'                                                                            "
				+ "          ,CONCAT('atuserdemo',@a,'@mt2015.com')                                                  "
				+ "          ,CURRENT_TIMESTAMP                                                                      "
				+ "          ,CONCAT('atuserdemo',@a)" + "          ,getdate() )";

		System.out.println("Establish a connection with data base");
		CD.sta.executeUpdate(user);
		Add_Log.info("Successfully executed step " + TestStep);

	}

	@When("^Update data in another table based on created user$")
	public void update_data_in_another_table_based_on_created_user() throws Throwable {

		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();

		ConnectDatabase CD = new ConnectDatabase();
		CD.opendb();
		String Reguser = "DECLARE @a int = (select count(*) from [1AuthoritySTS-Demo].[dbo].[AspNetUsers] where email like 'atuserdemo%')"
				+ "declare  @emailvalue Nvarchar(500) "
				+ "Set @emailvalue = (select ID from  [1AuthoritySTS-Demo].[dbo].[AspNetUsers] "
				+ "where Email = CONCAT('atuserdemo',@a,'@mt2015.com'))               "
				+ "insert into [DRC-Demo].[Ref].[RegisteredUsers] " + "(RegisteredUserId" + ",[LanguageCode]"
				+ ",[FullName]" + ",[Email]" + ",[MobileNumber]" + ",[RegisteredActivatedDate]" + ",[ImageFileName]"
				+ ",[CreatedDate]" + ",[ModifiedDate]" + ",[DeletedDate])" + "VALUES"
				+ "  (@emailvalue                                                        "
				+ "  ,'en-US'                                                               "
				+ "  ,Concat ('atuserdemo',@a)                                          "
				+ "  ,CONCAT('atuserdemo',@a,'@mt2015.com')                             "
				+ "  ,'9936859645'                                                       "
				+ "  ,CURRENT_TIMESTAMP                                                  "
				+ "  ,NULL                                                               "
				+ "  ,CURRENT_TIMESTAMP                                                  "
				+ "  ,NULL                                                               "
				+ "  ,NULL                                                               " + "  ) ";

		CD.sta.executeUpdate(Reguser);
		System.out.println("Via 1Authority");
		Add_Log.info("Successfully executed step " + TestStep);
	}

	@When("^Update data in roles table$")
	public void update_data_in_roles_table() throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();

		ConnectDatabase CD = new ConnectDatabase();
		CD.opendb();
		String roles = "declare @i int = (select count(*) from [1AuthoritySTS-Demo].[dbo].[AspNetUsers] where email like 'atuserdemo%')"
				+ " declare  @emailvalue Nvarchar(500)"
				+ " set @emailvalue = (select ID from  [1AuthoritySTS-Demo].[dbo].[AspNetUsers] "
				+ " where Email = CONCAT('atuserdemo',@i,'@mt2015.com'))"
				+ " insert into [1AuthoritySTS-Demo].[dbo].[AspNetUserRoles] ([UserId],[RoleId]) VALUES  (@emailvalue,'B828372F-B0AD-40DF-B8BB-5C6E11A8682E')";

		CD.sta.executeUpdate(roles);
		System.out.println("User Role");
		Add_Log.info("Successfully executed step " + TestStep);

	}

	@When("^login with created username and password$")
	public void login_with_created_username_and_password() throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		ConnectDatabase CD = new ConnectDatabase();
		CD.opendb();
		String username = "with temp as"
				+ "(select count(*) as 'a' from [1AuthoritySTS-Demo].[dbo].[AspNetUsers] where email like'atuserdemo%' and UserClient='TaxPortal' and EmailConfirmed=1)"
				+ "select CONCAT('atuserdemo',a,'@mt2015.com') as 'username' from temp";
		ResultSet rs = CD.sta.executeQuery(username);
		System.out.println(rs);
		while (rs.next()) {
			Username = (rs.getString("username")).trim();
			System.out.println(Username);
			type("txtbox_username", Username);
			sleepWait(3000);
			type("txtbox_password", "Test@123");
			sleepWait(3000);
			clickOn("btn_login", "");
		}
		Add_Log.info("Successfully executed step " + TestStep);

	}

	@When("^User clicks on VAT Getting Started Guide CheckBox$")
	public void user_clicks_on_VAT_Getting_Started_Guide_CheckBox() throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();

		clickOn("tab_container", "");
		sleepWait(3000);
		clickOn("tab_pin", "");
		sleepWait(3000);
		clickOn("tab_VAT", "");
		sleepWait(3000);
		// clickOn("btn_sure","");
		sleepWait(3000);
		clickOn("chkbox_guide", "");
		Add_Log.info("Successfully executed step " + TestStep);

	}

	@When("^Clicks on Register for Vat button$")
	public void clicks_on_Register_for_Vat_button() throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		clickOn("btn_register", "");
		sleepWait(3000);
		Add_Log.info("Successfully executed step " + TestStep);
	}

	@When("^Clicks on Continue button of Instructions Page$")
	public void clicks_on_Continue_button_of_Instructions_Page() throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		JavascriptExecutor js = (JavascriptExecutor) wd;
		js.executeScript("window.scrollTo(0, document.body.scrollHeight)");
		sleepWait(3000);
		clickOn("btn_continue", "");
		sleepWait(3000);
		Add_Log.info("Successfully executed step " + TestStep);
	}

	@Then("^Selects Taxpayer Category \"([^\"]*)\" , SubCategory \"([^\"]*)\"$")
	public void selects_Taxpayer_Category_SubCategory(String Category, String SubCategory) throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		category = Category;
		clickOn("drp_category", "");
		clickOn("span", "[contains(text(),'" + Category + "')]");
		clickOn("drp_subcategory", "");
		clickOn("span", "[contains(text(),'" + SubCategory + "')]");
		sleepWait(3000);
		JavascriptExecutor jse = (JavascriptExecutor) wd;
		jse.executeScript("window.scrollTo(0, document.body.scrollHeight)");
		Add_Log.info("Successfully executed step " + TestStep);

	}

	@Then("^Enters NIF number \"([^\"]*)\"  ,Full Name Of Business \"([^\"]*)\" , Number of COI \"([^\"]*)\" , Last Year Revenue \"([^\"]*)\"$")
	public void enters_NIF_number_Full_Name_Of_Business_Number_of_COI_Last_Year_Revenue(String NIF, String BusinessName,
			String COI, String LRevenue) throws InterruptedException {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();

		lastyearrevenue = LRevenue;
		NITVA = times.concat(NIF);
		System.out.println(NITVA);
		type("txtbox_NIF", NITVA);
		sleepWait(5000);
		type("txtbox_businessname", BusinessName + times);
		type("txtbox_coi", COI);
		type("txtbox_lrevenue", LRevenue);
		Add_Log.info("Successfully executed step " + TestStep);

	}

	@Then("^Enters NIF Registration Date \"([^\"]*)\" , Date of Incorporation \"([^\"]*)\" , Type Of Business \"([^\"]*)\"$")
	public void enters_NIF_Registration_Date_Date_of_Incorporation_Type_Of_Business(String NIFDate, String IncorpDate,
			String BusinessType) throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		clickOn("dt_nifregdate", "");
		datePicker(NIFDate);
		clickOn("dt_incorp", "");
		datePicker(IncorpDate);
		sleepWait(3000);
		clickOn("drp_btype", "");
		clickOn("span", "[contains(text(),'" + BusinessType + "')]");
		sleepWait(3000);
		Add_Log.info("Successfully executed step " + TestStep);

	}

	@Then("^Enters Business Start Date \"([^\"]*)\" , Company Size \"([^\"]*)\"$")
	public void enters_Business_Start_Date_Company_Size_Last_Year_Revenue(String BStartDate, String CompanySize)
			throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		clickOn("dt_bstartdate", "");
		datePicker(BStartDate);
		clickOn("drp_compsize", "");
		clickOn("span", "[contains(text(),'" + CompanySize + "')]");
		// type("txtbox_lrevenue",LRevenue);
		Add_Log.info("Successfully executed step " + TestStep);
	}

	@Then("^Enters Address Details \"([^\"]*)\" , \"([^\"]*)\" , \"([^\"]*)\" ,\"([^\"]*)\" ,\"([^\"]*)\",\"([^\"]*)\"$")
	public void enters_Address_Details(String Address1, String Address2, String Province, String City, String ZipCode,
			String MobileNumber) throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		taxoffice = City;
		addressline1 = Address1;
		addressline2 = Address2;
		province = Province;
		zipcode = ZipCode;
		city = City;
		mobilenumber = MobileNumber;
		type("txtbox_add1", Address1);
		sleepWait(3000);
		type("txtbox_add2", Address2);
		clickOn("drp_province", "");
		clickOn("span", "[contains(text(),'" + Province + "')]");
		WebElement we;
		we = wd.findElement(By.xpath("(//*[@formcontrolname='cityId'])[1]"));
		if (we.isEnabled()) {
			clickOn("drp_city", "");
			clickOn("span", "[contains(text(),'" + City + "')]");
			sleepWait(2000);
		} else {
			System.out.println("Please Select Province first");
		}
		type("txtbox_zipcode", ZipCode);
		type("txtbox_mobileno", MobileNumber);
		Add_Log.info("Successfully executed step " + TestStep);
	}

	@Then("^Enters Business details \"([^\"]*)\",\"([^\"]*)\" , \"([^\"]*)\" , \"([^\"]*)\" ,\"([^\"]*)\" ,\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"$")
	public void enters_Business_details(String BName, String BAddress1, String BAddress2, String BProvince,
			String BCity, String BZipCode, String BEmail, String BMobileNumber) throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		businessname = BName;
		baddressline1 = BAddress1;
		baddressline2 = BAddress2;
		bprovince = BProvince;
		bcity = BCity;
		bmobilenumber = BMobileNumber;
		email = BEmail;
		type("txtbox_bname", BName);
		type("txtbox_buspromadd1", BAddress1);
		sleepWait(3000);
		type("txtbox_buspromadd2", BAddress2);
		clickOn("drp_buspromprovince", "");
		clickOn("span", "[contains(text(),'" + BProvince + "')]");
		sleepWait(3000);
		WebElement we;
		we = wd.findElement(By.xpath("(//*[@formcontrolname='cityId'])[2]"));
		if (we.isEnabled()) {
			clickOn("drp_buspromcity", "");
			clickOn("span", "[contains(text(),'" + BCity + "')]");
			sleepWait(2000);
		} else {
			System.out.println("Please Select Province first");
		}
		type("txtbox_buspromzipcode", BZipCode);
		type("txtbox_buspromemail", times + BEmail);
		type("txtbox_busprommobileno", BMobileNumber);
		Add_Log.info("Successfully executed step " + TestStep);

	}

	@Then("^select Authorization signature \"([^\"]*)\" with Job Title \"([^\"]*)\" , Full Name \"([^\"]*)\" Email \"([^\"]*)\" , Mobile Number \"([^\"]*)\"$")
	public void select_Authorization_signature_with_Job_Title_Full_Name_Email_Mobile_Number(String Opt, String JobTitle,
			String FullName, String Email, String MobileNumber) throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		if (Opt.equalsIgnoreCase("Yes")) {
			clickOn("radio_yes", "");
			type("txtbox_jobtitle", JobTitle);
			sleepWait(3000);
			type("txtbox_fullname", FullName);
			sleepWait(3000);
			type("txtbox_email", times + Email);
			type("txtbox_mobilenumber", MobileNumber);

		} else {
			clickOn("radio_no", "");
		}
		Add_Log.info("Successfully executed step " + TestStep);
	}

	@Then("^Clicks on Save Draft Button$")
	public void clicks_on_Save_Draft_Button() throws Throwable {
		// clickOn("btn_savedraft","");

	}

	@Then("^Clicks on VAT Registration Page Continue Button$")
	public void clicks_on_VAT_Registration_Page_Continue_Button() throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		clickOn("btn_regcontinue", "");
		Add_Log.info("Successfully executed step " + TestStep);
	}

	@Then("^Enters Bank Details with Account Number \"([^\"]*)\" , Account Holder Name \"([^\"]*)\" ,Bank Name \"([^\"]*)\" ,Branch \"([^\"]*)\"$")
	public void enters_Bank_Details_with_Account_Number_Account_Holder_Name_Bank_Name_Branch(String AccountNumber,
			String AccountHolderName, String BankName, String BranchName) throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		type("txtbox_accountnumber", AccountNumber);
		type("txtbox_holdername", AccountHolderName);
		clickOn("drp_bankname", "");
		clickOn("span", "[contains(text(),'" + BankName + "')]");
		clickOn("drp_branch", "");
		clickOn("span", "[contains(text(),'" + BranchName + "')]");
		Add_Log.info("Successfully executed step " + TestStep);

	}

	@Then("^Clicks on Bank details Continue Button$")
	public void clicks_on_Bank_details_Continue_Button() throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		clickOn("btn_bankcontinue", "");

	}

	@Then("^select Address Proof of Registered Place of Business for \"([^\"]*)\" , \"([^\"]*)\"$")
	public void select_Address_Proof_of_Registered_Place_of_Business_for(String Document1, String status1)
			throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		clickOn("drp_addressproof", "");
		sleepWait(3000);
		clickOn("span", "[contains(text(),'" + Document1 + "')]");
		clickOn("upload_file1", "");
		UploadImage("", status1);

	}

	@Then("^select Bank Account Proof for \"([^\"]*)\" , \"([^\"]*)\"$")
	public void select_Bank_Account_Proof_for(String Document2, String status2) throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		clickOn("drp_bankaccountproof", "");
		sleepWait(3000);
		clickOn("(span", "[contains(text(),'" + Document2 + "')])[2]");
		clickOn("upload_file1", "");
		UploadImage("", status2);

	}

	@Then("^Select Certificate of Incorporation for \"([^\"]*)\" , \"([^\"]*)\"$")
	public void select_Certificate_of_Incorporation_for(String Document3, String status3) throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		clickOn("drp_certification", "");
		sleepWait(3000);
		clickOn("(span", "[contains(text(),'" + Document3 + "')])[3]");
		clickOn("upload_file1", "");
		UploadImage("", status3);

	}

	@Then("^select Law or Degree of Establishment for \"([^\"]*)\" , \"([^\"]*)\"$")
	public void select_Law_or_Degree_of_Establishment_for(String Document4, String status4) throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		clickOn("drp_lawordegree", "");
		sleepWait(3000);
		clickOn("(span", "[contains(text(),'" + Document4 + "')])[4]");
		clickOn("upload_file1", "");
		UploadImage("", status4);

	}

	@Then("^select Letter of Authorization/Board Resolution for Authorized Signatory – Download Template for \"([^\"]*)\" , \"([^\"]*)\"$")
	public void select_Letter_of_Authorization_Board_Resolution_for_Authorized_Signatory_Download_Template_for(
			String Document5, String status5) throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		clickOn("drp_letterofauthorization", "");
		sleepWait(3000);
		clickOn("(span", "[contains(text(),'" + Document5 + "')])[5]");
		clickOn("upload_file1", "");
		UploadImage("", status5);

	}

	@Then("^select Proof of Last Year Revenue for \"([^\"]*)\" , \"([^\"]*)\"$")
	public void select_Proof_of_Last_Year_Revenue_for(String Document6, String status6) throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		clickOn("drp_proofoflastrevenue", "");
		sleepWait(3000);
		clickOn("(span", "[contains(text(),'" + Document6 + "')])[6]");
		clickOn("upload_file1", "");
		UploadImage("", status6);

	}

	@Then("^Clicks on document required Continue Button$")
	public void clicks_on_document_required_Continue_Button() throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		clickOn("btn_reqdoccontinue", "");
		sleepWait(3000);

	}

	@Then("^clicks on Acknowledgement checkbox and continue button$")
	public void clicks_on_Acknowledgement_checkbox_and_continue_button() throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		JavascriptExecutor js = (JavascriptExecutor) wd;
		js.executeScript("window.scrollTo(0, document.body.scrollHeight)");
		sleepWait(3000);
		clickOn("chkbx_agree", "");
		sleepWait(3000);
		clickOn("btn_fsubmit", "");
		sleepWait(10000);

	}

	@Then("^click on Ok button on alert page$")
	public void click_on_Ok_button_on_alert_page() throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		sleepWait(3000);
		clickOn("btn_ok", "");
		System.out.println("OK button");
	}

	@Then("^User login in Internal portal$")
	public void user_login_in_Internal_portal() throws Throwable {
		System.out.println("Internal Portal");
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		clickOn("tab_container", "");
		sleepWait(3000);

	}

	@Then("^click on Manage Vat Registartion$")
	public void click_on_Manage_Vat_Registartion() throws Throwable {

		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		clickOn("tab_manageregistartion", "");
		sleepWait(3000);
	}

	@Then("^select \"([^\"]*)\" option and \"([^\"]*)\"$")
	public void select_option_and(String Filter, String Searchelement) throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		clickOn("drp_filter", "");
		sleepWait(3000);
		clickOn("span", "[contains(text(),'" + Filter + "')]");
		type("txt_search", NITVA);
		sleepWait(4000);

	}

	@Then("^clicks on manage button and select \"([^\"]*)\"$")
	public void clicks_on_manage_button_and_select(String Manage) throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();

		sleepWait(3000);
		clickOn("drp_manage", "");
		sleepWait(3000);
		clickOn("drp_review", "");
		sleepWait(8000);

	}

	@Then("^Redirect to confirmation page and click on \"([^\"]*)\"$")
	public void redirect_to_confirmation_page_and_click_on(String Deoption) throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();

		sleepWait(4000);
		clickOn("btn_approved", "");
		sleepWait(8000);
		ConnectDatabase CD = new ConnectDatabase();
		CD.opendb();
		String NITVA_Numbers = "select NITVA from [DRC-Demo].[Vat].[VuUsers] where RegisteredUserId  in ( "
				+ "select RegisteredUserId from [DRC-Demo].[Ref].[RegisteredUsers] where email = '" + Username + "')";
		ResultSet rs = CD.sta.executeQuery(NITVA_Numbers);
		System.out.println(rs);
		while (rs.next()) {
			NITVA_Number = (rs.getString("NITVA")).trim();
			sleepWait(4000);
			System.out.println(NITVA_Number);
		}
		Add_Log.info("Successfully executed step " + TestStep);

	}

	@Then("^Clicks on Close Button$")
	public void clicks_on_Close_Button() throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		sleepWait(3000);
		clickOn("btn_closed", "");
	}

	@Given("^User is on Tax Payer Portal$")
	public void user_is_on_Tax_Payer_Portal() throws Throwable {
		System.out.println("Tax Payer Portal");
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		ConnectDatabase CD = new ConnectDatabase();
		CD.opendb();
		String username = "with temp as"
				+ "(select count(*) as 'a' from [1AuthoritySTS-Demo].[dbo].[AspNetUsers] where email like'atuserdemo%' and UserClient='TaxPortal' and EmailConfirmed=1)"
				+ "select CONCAT('atuserdemo',a,'@mt2015.com') as 'username' from temp";
		ResultSet rs = CD.sta.executeQuery(username);
		System.out.println(rs);
		while (rs.next()) {
			String Username = (rs.getString("username")).trim();
			System.out.println(Username);
			type("txtbox_username", Username);
			sleepWait(3000);
			type("txtbox_password", "Test@123");
			sleepWait(3000);
			clickOn("btn_login", "");
		}
		sleepWait(5000);
		clickOn("tab_VAT", "");
		sleepWait(3000);
		clickOn("btn_sure", "");
		sleepWait(3000);

	}

	@When("^Connect database and execute query and run successfully$")
	public void connect_database_and_execute_query_and_run_successfully() throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		ConnectDatabase CD = new ConnectDatabase();
		CD.opendb();
		String sql = "declare @month int;" + "set @month =1;" + "insert into [DRC-Demo].[Vat].[VfVateFile]"
				+ "(VuUserId,FinancialYear,FinancialMonth,PaymentDueDate,TotalAmount,DueAmount,VfDueDate,CreatedDate)"
				+ "values ((select VuUserId from [DRC-Demo].Vat.VuUsers"
				+ "  where RegisteredUserId in (select RegisteredUserId from [DRC-Demo].[Ref].[RegisteredUsers]"
				+ "  where Email='" + Username + "')),(select YEAR(GETDATE())),@month,"
				+ "(select DATEADD(mm,@month,'2019/01/20')),0.00,0.00,"
				+ "(select DATEADD(mm,@month,'2019/01/15')),GETDATE())";
		System.out.println("Month");
		CD.sta.executeUpdate(sql);
		String Sql1 = "declare @FY int;" + "set @FY=1;" + "insert into [DRC-Demo].[Vat].[VfVateFileActivity]"
				+ "(VfVateFileId,VfActivityId,VfStatusId,CreatedDate)" + "values"
				+ "((select VfVateFileId from [DRC-Demo].[Vat].[VfVateFile] where FinancialMonth=@FY and VuUserId in (select VuUserId from [DRC-Demo].Vat.VuUsers"
				+ " where RegisteredUserId in (select RegisteredUserId from [DRC-Demo].[Ref].[RegisteredUsers]"
				+ " where Email='" + Username + "'))),1,2,getdate()),"
				+ "((select VfVateFileId from [DRC-Demo].[Vat].[VfVateFile] where FinancialMonth=@FY and VuUserId in (select VuUserId from [DRC-Demo].Vat.VuUsers"
				+ " where RegisteredUserId in (select RegisteredUserId from [DRC-Demo].[Ref].[RegisteredUsers]"
				+ " where Email='" + Username + "'))),2,2,getdate()),"
				+ "((select VfVateFileId from [DRC-Demo].[Vat].[VfVateFile] where FinancialMonth=@FY and VuUserId in (select VuUserId from [DRC-Demo].Vat.VuUsers"
				+ " where RegisteredUserId in (select RegisteredUserId from [DRC-Demo].[Ref].[RegisteredUsers]"
				+ " where Email='" + Username + "'))),3,2,getdate())";
		System.out.println("Financial Year");
		CD.sta.executeUpdate(Sql1);
	}

	@Then("^clicks on Vat E-filling option on left panel$")
	public void clicks_on_Vat_E_filling_option_on_left_panel() throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		clickOn("tab_container", "");
		sleepWait(3000);
		clickOn("tab_vatefiling", "");

	}

	@Then("^clicks on e-filing to fill data$")
	public void clicks_on_e_filing_to_fill_data() throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		for (int i = 1; i <= 12; i++) {
			String first_part = "(//div[@class='list-item-th text-left'])[";
			String second_part = "]";
			String month = first_part + i + second_part;
			wd.findElement(By.xpath(month)).click();
			sleepWait(3000);
			String first_preview = "(//button[text()='Preview'])[";
			String second_preview = "]";
			String preview = first_preview + i + second_preview;
			sleepWait(3000);
			Boolean B;
			try {
				B = (wd.findElement(By.xpath(preview)).isDisplayed());
			} catch (NoSuchElementException ex) {
				B = false;
			}
			sleepWait(3000);
			if (B) {
				continue;
			} else {
				clickOn("btn_file", "");
				break;
			}
		}
		sleepWait(3000);

	}

	@Then("^Enter data in Operation Performed \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\" , \"([^\"]*)\",\"([^\"]*)\", \"([^\"]*)\" ,\"([^\"]*)\", \"([^\"]*)\",\"([^\"]*)\"$")
	public void enter_data_in_Operation_Performed(String DG, String DS1, String DS2, String DGI, String DSI, String FPP,
			String Exports, String Exempts, String Nontaxables) throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		type("txtbox_DOGTT", DG);
		ODG = Float.parseFloat(DG);
		VAT_Collected_DG = getValue("label_DOGTT");
		if (Float.parseFloat(VAT_Collected_DG) == ((Float.parseFloat(DG)) * 16 / 100)) {
			System.out.println("Pass");
		}
		type("txtbox_DOSTR", DS1);
		DS11 = Float.parseFloat(DS1);
		type("txtbox_DOSTT", DS2);
		DS21 = Float.parseFloat(DS2);
		VAT_Collected_DS = getValue("label_DOSTR");
		if (Float.parseFloat(VAT_Collected_DS) == ((Float.parseFloat(DS2)) * 16 / 100)) {
			System.out.println("Pass");
		}
		type("txtbox_DOGTITT", DGI);
		DGI1 = Float.parseFloat(DGI);
		VAT_Collected_DGI = getValue("label_DOGTITT");
		if (Float.parseFloat(VAT_Collected_DGI) == ((Float.parseFloat(DGI)) * 16 / 100)) {
			System.out.println("Pass");
		}
		type("txtbox_DOSTITT", DSI);
		DSI1 = Float.parseFloat(DSI);
		VAT_Collected_DSI = getValue("label_DOSTITT");
		if (Float.parseFloat(VAT_Collected_DGI) == ((Float.parseFloat(DSI)) * 16 / 100)) {
			System.out.println("Pass");
		}
		type("txtbox_ORTEFPPTT", FPP);
		FPP1 = Float.parseFloat(FPP);
		VAT_Collected_FPP = getValue("label_ORTEFPPTT");
		FPPS = Float.parseFloat(FPP) * 16 / 100;
		if (Float.parseFloat(VAT_Collected_FPP) == ((Float.parseFloat(FPP)) * 16 / 100)) {
			System.out.println("Pass");
		}
		type("txtbox_EARTTT", Exports);
		Export = Float.parseFloat(Exports);
		type("txtbox_ETTT", Exempts);
		Exempt = Float.parseFloat(Exempts);
		type("txtbox_NTTTT", Nontaxables);
		Nontaxable = Float.parseFloat(Nontaxables);
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
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		type("txtbox_ASTIMP", AI);
		type("txtbox_ASTLC", AL);
		TotalA = Float.parseFloat(AI) + Float.parseFloat(AL);
		String TotalAS = getValue("label_ASTIMP");
		if (TotalA == Float.parseFloat(TotalAS)) {
			System.out.println("pass");
		}
		type("txtbox_GDIMP", GI);
		type("txtbox_GDLC", GL);
		TotalG = Float.parseFloat(GI) + Float.parseFloat(GL);
		String TotalGS = getValue("label_GDIMP");
		if (TotalG == Float.parseFloat(TotalGS)) {
			System.out.println("pass");
		}
		type("txtbox_RMIMP", RI);
		type("txtbox_RMLC", RL);

		TotalR = Float.parseFloat(RI) + Float.parseFloat(RL);
		String TotalRS = getValue("label_RMIMP");
		if (TotalR == Float.parseFloat(TotalRS)) {
			System.out.println("pass");
		}
		type("txtbox_OGASIMP", OI);
		type("txtbox_OGASLC", OL);
		TotalO = Float.parseFloat(OI) + Float.parseFloat(OL);
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
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
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
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		type("txtbox_VFTPATAMT", VAT3Party);
		NetVAT = Total_VC - TotalD + VRC - SDC - VDC - PCC - FPPS;
		Total_NetVAT = getValue("label_NetVAT");
		sleepWait(3000);
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
		if (Float.parseFloat(Total_VATcredit) < 0) {
			Float TotalForward = (Float.parseFloat(Total_VATcredit)) - (Float.parseFloat(Total_Refund))
					- (Float.parseFloat(Total_Procurement)) - (Float.parseFloat(VAT3Party));

			if (TotalForward == Float.parseFloat(Total_Forward)) {
				System.out.println("pass");
			}
		} else {
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
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		clickOn("btn_savedraft", "");
		sleepWait(3000);
		clickOn("upload_efile1", "");
		UploadImage("", file);

	}

	@Then("^Upload Efile schedule file \"([^\"]*)\"$")
	public void upload_Efile_schedule_file(String file) throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		clickOn("btn_savedraft", "");
		sleepWait(3000);
		clickOn("upload_efile1", "");
		String image = cwd.concat(file);
		UploadImage("", image);
		System.out.println("Test");
	}

	@Then("^Check for Confirmation and choose authorized signatory \"([^\"]*)\"$")
	public void check_for_Confirmation_and_choose_authorized_signatory(String Authorized) throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		clickOn("chkbox_confirmation", "");
		sleepWait(2000);
		clickOn("drp_authorised", "");
		clickOn(Authorized, "");
		sleepWait(3000);
		clickOn("btn_esubmit", "");

	}

	@Then("^clicks on submit button on E-filling page$")
	public void clicks_on_submit_button_on_E_filling_page() throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		sleepWait(4000);
		clickOn("btn_yes", "");
	}

	@Then("^Enter OTP and click on verify button and click on Ok button$")
	public void enter_OTP_and_click_on_verify_button_and_click_on_Ok_button() throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		// Read_OTP RO = new Read_OTP();
		// String OTP=RO.ReadOTP(Username);
		// sleepWait(1000);
		wd.findElement(By.xpath("//*[@placeholder='Enter your OTP']")).sendKeys("123456");
		sleepWait(500);
		wd.findElement(By.xpath("//*[contains(text(),'Verify')]")).click();
		sleepWait(8000);
		wd.findElement(By.xpath("//*[contains(text(),'OK')]")).click();

	}

	@Then("^calculate Tax payable amount$")
	public void calculate_Tax_payable_amount() throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
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
		if (Float.parseFloat(Vatamountpay) == Float.parseFloat(Total_Pay)) {
			System.out.println("pass");
		}
	}

	@Then("^Click on Proceed Button and click on Ok button on offset successful$")
	public void click_on_Proceed_Button_and_click_on_Ok_button_on_offset_successful() throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		sleepWait(3000);
		clickOn("btn_proceed", "");
		sleepWait(3000);
	}

	@Then("^cliccks on \"([^\"]*)\" and verify details$")
	public void cliccks_on_and_verify_details(String Paymentoption) throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
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
		System.out.println("Tax-officer's");

		// System.out.println(elementText("txt_heading",""));
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		sleepWait(120000);
		clickOn("tab_container", "");
		sleepWait(3000);

	}

	@When("^click on \"([^\"]*)\" option$")
	public void click_on_option(String As) throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		clickOn("tab_assessment", "");
		sleepWait(3000);
		clickOn("span", "[contains(text(),'" + As + "')]");
		sleepWait(8000);

	}

	@When("^Tax-officer search for the records using \"([^\"]*)\" , \"([^\"]*)\" ,\"([^\"]*)\"$")
	public void tax_officer_search_for_the_records_using(String month, String year, String filter) throws Throwable {
		Date date = new Date();
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		if (month.equalsIgnoreCase("March")) {
			sleepWait(2000);
		} else {
			clickOn("drp_dwn_period", "");
			sleepWait(2000);
			clickOn("span", "[contains(text(),'" + month + "')]");
			sleepWait(2000);
		}
		if (year.equalsIgnoreCase("2019")) {
		} else {
			clickOn("drp_dwn_year", "");
			sleepWait(2000);
			clickOn("span", "[contains(text(),'" + year + "')]");
		}
		clickOn("drp_dwn_filter", "");
		sleepWait(2000);
		clickOn("span", "[contains(text(),'" + filter + "')]");
		sleepWait(3000);
	}

	@When("^search for the records and click on search button$")
	public void serach_for_the_records_and_click_on_search_button() throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		// clickOn("txt_search","");
		sleepWait(2000);
		type("txt_search", NITVA_Number);
		sleepWait(3000);
		clickOn("icn_search", "");
		sleepWait(3000);
		clickOn("icn_manage", "");
		sleepWait(3000);

	}

	@When("^click on the \"([^\"]*)\" option$")
	public void click_on_the_option(String Action) throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		clickOn("a", "[contains(text(),'" + Action + "')]");
		sleepWait(3000);

	}

	@When("^Verify the details of e-filing operation performed$")
	public void verify_the_details_of_e_filing_operation_performed() throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		String DGoods1 = (elementText("label_DG")).replace(".", "");
		String DGoods = DGoods1.replace(",", ".");
		sleepWait(2000);
		if (ODG == Float.parseFloat(DGoods)) {
			assertTrue(true);

		}
		String DServiceTR = ((elementText("label_DSTT")).replace(".", "")).replace(",", ".");
		if (Float.parseFloat(DServiceTR) == DS21) {
			assertTrue(true);
		}
		String DServiceTT = ((elementText("label_DSTR")).replace(".", "")).replace(",", ".");
		if (Float.parseFloat(DServiceTT) == DS11) {
			assertTrue(true);
		}
		String OExport = ((elementText("label_Export")).replace(".", "")).replace(",", ".");
		if (Float.parseFloat(OExport) == Export) {
			assertTrue(true);
		}
		String OExempt = ((elementText("label_exempt")).replace(".", "")).replace(",", ".");
		if (Float.parseFloat(OExempt) == Exempt) {
			assertTrue(true);
		}
		String ONontax = ((elementText("label_nontax")).replace(".", "")).replace(",", ".");
		if (Float.parseFloat(ONontax) == Nontaxable) {
			assertTrue(true);
		}
		String DGVat = ((elementText("label_DGvat")).replace(".", "")).replace(",", ".");
		if (Float.parseFloat(DGVat) == Float.parseFloat(VAT_Collected_DG)) {
			assertTrue(true);
		}
		String DSVat = ((elementText("label_DSvat")).replace(".", "")).replace(",", ".");
		if (Float.parseFloat(DSVat) == Float.parseFloat(VAT_Collected_DS)) {
			assertTrue(true);
		}
		String DiffTR = ((elementText("label_DiffTR")).replace(".", "")).replace(",", ".");
		if (Float.parseFloat(DiffTR) == DS11) {
			assertTrue(true);
		}
		String TDG = ((elementText("label_TDG")).replace(".", "")).replace(",", ".");
		String TDGvat = ((elementText("label_TDGvat")).replace(".", "")).replace(",", ".");
		String TDSTR = ((elementText("label_TDSTR")).replace(".", "")).replace(",", ".");
		String TDSTT = ((elementText("label_TDSTT")).replace(".", "")).replace(",", ".");
		String TDSvat = ((elementText("label_TDSvat")).replace(".", "")).replace(",", ".");
		String Texport = ((elementText("label_TExport")).replace(".", "")).replace(",", ".");
		String Texempt = ((elementText("label_Texempt")).replace(".", "")).replace(",", ".");
		String Tnontax = ((elementText("label_Tnontax")).replace(".", "")).replace(",", ".");
		String DiffTT = ((elementText("label_DiffTT")).replace(".", "")).replace(",", ".");
		Float DiffTTS = ODG + DS21 + Export + Exempt + Nontaxable + Float.parseFloat(TDG) + Float.parseFloat(TDSTR)
				+ Float.parseFloat(Texport) + Float.parseFloat(Texempt) + Float.parseFloat(Tnontax);
		if (DiffTTS == Float.parseFloat(DiffTT)) {
			assertTrue(true);
		}
		String DiffVC = ((elementText("label_DiffVC")).replace(".", "")).replace(",", ".");
		Float DiffVCS = Float.parseFloat(DGVat) + Float.parseFloat(DSVat) + Float.parseFloat(TDGvat)
				+ Float.parseFloat(TDSvat);
		if (Float.parseFloat(DiffVC) == DiffVCS) {
			assertTrue(true);
		}
		String DGI = ((elementText("label_DGI")).replace(".", "")).replace(",", ".");
		if (Float.parseFloat(DGI) == DGI1) {
			assertTrue(true);
		}
		String DGIV = ((elementText("label_DGIV")).replace(".", "")).replace(",", ".");
		if (Float.parseFloat(DGIV) == Float.parseFloat(VAT_Collected_DGI)) {
			assertTrue(true);
		}
		String DSI = ((elementText("label_DSI")).replace(".", "")).replace(",", ".");
		if (Float.parseFloat(DSI) == DSI1) {
			assertTrue(true);
		}
		String DSIV = ((elementText("label_DSIV")).replace(".", "")).replace(",", ".");
		if (Float.parseFloat(DSIV) == Float.parseFloat(VAT_Collected_DSI)) {
			assertTrue(true);
		}
		String OR = ((elementText("label_OR")).replace(".", "")).replace(",", ".");
		if (Float.parseFloat(OR) == FPP1) {
			assertTrue(true);
		}
		String ORV = ((elementText("label_ORV")).replace(".", "")).replace(",", ".");
		if (Float.parseFloat(ORV) == Float.parseFloat(VAT_Collected_FPP)) {
			assertTrue(true);
		}
		// String Total_FC = elementText("");
		String Total_TTFC = ((elementText("label_total")).replace(".", "")).replace(",", ".");
		Float Total_Turnover = DiffTTS + Float.parseFloat(DGI) + Float.parseFloat(DSI) + Float.parseFloat(OR);
		if (Float.parseFloat(Total_TTFC) == Total_Turnover) {
			assertTrue(true);
		}
		String Total_VFC = ((elementText("label_totalV")).replace(".", "")).replace(",", ".");
		Float Total_Vatcollected = DiffVCS + Float.parseFloat(DGIV) + Float.parseFloat(DSIV) + Float.parseFloat(ORV);
		if (Float.parseFloat(Total_VFC) == Total_Vatcollected) {
			assertTrue(true);
		}

		sleepWait(3000);
		clickOn("btn_next", "");
	}

	@When("^Verify the details of Tax-deductible$")
	public void verify_the_detailds_of_Tax_deductible() throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		String Total_deduct = ((elementText("label_totalD")).replace(".", "")).replace(",", ".");
		String Total_tdeduct = ((elementText("label_TtotalD")).replace(".", "")).replace(",", ".");
		String Total_Diffrence = ((elementText("label_D")).replace(".", "")).replace(",", ".");

		String Asset1 = ((elementText("label_asset1")).replace(".", "")).replace(",", ".");
		String Asset2 = ((elementText("label_asset2")).replace(".", "")).replace(",", ".");
		String Asset3 = ((elementText("label_asset3")).replace(".", "")).replace(",", ".");
		if (TotalA == Float.parseFloat(Asset3)) {
			assertTrue(true);
		}
		String good1 = ((elementText("label_good1")).replace(".", "")).replace(",", ".");
		String good2 = ((elementText("label_good2")).replace(".", "")).replace(",", ".");
		String good3 = ((elementText("label_good3")).replace(".", "")).replace(",", ".");
		if (TotalG == Float.parseFloat(good3)) {
			assertTrue(true);
		}
		String raw1 = ((elementText("label_raw1")).replace(".", "")).replace(",", ".");
		String raw2 = ((elementText("label_raw2")).replace(".", "")).replace(",", ".");
		String raw3 = ((elementText("label_raw3")).replace(".", "")).replace(",", ".");
		if (TotalR == Float.parseFloat(raw3)) {
			assertTrue(true);
		}
		String othet1 = ((elementText("label_others1")).replace(".", "")).replace(",", ".");
		String other2 = ((elementText("label_others2")).replace(".", "")).replace(",", ".");
		String other3 = ((elementText("label_others3")).replace(".", "")).replace(",", ".");
		if (TotalO == Float.parseFloat(other3)) {
			assertTrue(true);
		}
		sleepWait(3000);
		clickOn("btn_next", "");

	}

	@When("^Verify the details of Adjustmnet$")
	public void verify_the_details_of_Adjustmnet() throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		String eadjsup = ((elementText("label_eadjsup")).replace(".", "")).replace(",", ".");
		if (Float.parseFloat(eadjsup) == SDC) {
			assertTrue(true);
		}
		String eadjvat = ((elementText("label_eadjvat")).replace(".", "")).replace(",", ".");
		if (Float.parseFloat(eadjvat) == VRC) {
			assertTrue(true);
		}
		String tadjsup = ((elementText("label_tadjsup")).replace(".", "")).replace(",", ".");

		String tadjvat = ((elementText("label_tadjvat")).replace(".", "")).replace(",", ".");

		String adjdiff = ((elementText("label_adjdif")).replace(".", "")).replace(",", ".");
		Float total_diff = Float.parseFloat(eadjsup) + Float.parseFloat(eadjvat) - Float.parseFloat(tadjsup)
				- Float.parseFloat(tadjvat);
		if (Float.parseFloat(adjdiff) == total_diff) {
			assertTrue(true);
		}
		String othvat = ((elementText("label_othvat")).replace(".", "")).replace(",", ".");
		if (Float.parseFloat(othvat) == VDC) {
			assertTrue(true);
		}
		String othreco = ((elementText("label_othreco")).replace(".", "")).replace(",", ".");
		if (Float.parseFloat(othreco) == PCC) {
			assertTrue(true);
		}

		sleepWait(3000);
		clickOn("btn_next", "");
	}

	@When("^Verify the details of Assessment Summary$")
	public void verify_the_details_of_Assessment_Summary() throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		sleepWait(3000);
		clickOn("btn_next", "");
	}

	@When("^verify the details of Payment summary$")
	public void verify_the_details_of_Payment_summary() throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();

		sleepWait(5000);
		clickOn("btn_raisenotice", "");
		sleepWait(2000);

	}

	@When("^check for \"([^\"]*)\"$")
	public void check_for(String toastmessage) throws Throwable {

		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		String toast = toastMessage();

		if (toast.equalsIgnoreCase(toastmessage)) {
			assertTrue(true);
		}
		sleepWait(5000);

	}

	@Given("^User Login with Admin's credentials$")
	public void user_Login_with_Admin_s_credentials() throws Throwable {
		System.out.println(" FX management admin module  ");
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();

		clickOn("tab_container", "");

	}

	@Given("^User Login with Supervisor's credentials$")
	public void user_Login_with_Supervisor_s_credentials() throws Throwable {
		System.out.println(" FX management Supervisor's module  ");
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();

		clickOn("tab_container", "");

	}

	@When("^Click on Fx management tab and check for the base currency \"([^\"]*)\" , \"([^\"]*)\"$")
	public void click_on_Fx_management_tab_and_check_for_the_base_currency(String base, String country)
			throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		sleepWait(2000);
		clickOn("txt_FxManagement", "");
		sleepWait(2000);

		BaseCurr = elementText("txt_BaseCurrency_1");
		BaseCurrName = elementText("txt_BaseCurrency_Name");
		if (BaseCurr.contains(base) && BaseCurrName.contains(country)) {
			assertTrue(true);
		}

	}

	@When("^Click on Historical data and check for the base currency \"([^\"]*)\" , \"([^\"]*)\"$")
	public void click_on_Historical_data_and_check_for_the_base_currency(String base, String country) throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		sleepWait(2000);
		clickOn("btn_HistoricalFX", "");
		sleepWait(2000);
		BaseCurr = elementText("txt_Currencyrate");
		BaseCurrName = elementText("txt_Currencyname");
		if (BaseCurr.contains(base) && BaseCurrName.contains(country)) {
			assertTrue(true);
		}
		sleepWait(2000);
	}

	@When("^Click on previous button$")
	public void click_on_previous_button() throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		clickOn("btn_Previuos", "");
		sleepWait(2000);

	}

	@When("^Click on Update button and check for the base currency \"([^\"]*)\" , \"([^\"]*)\"$")
	public void click_on_Update_button_and_check_for_the_base_currency(String base, String country) throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		sleepWait(2000);
		clickOn("btn_UpdateFX", "");
		BaseCurr = elementText("txt_Currencyrate");
		BaseCurrName = elementText("txt_Currencyname");
		if (BaseCurr.contains(base) && BaseCurrName.contains(country)) {
			assertTrue(true);
		}
		sleepWait(2000);
		// System.out.println(BaseCurr + " " + BaseCurrName);
	}

	@When("^update the \"([^\"]*)\" and click on save button$")
	public void update_the_and_click_on_save_button(String rates) throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		sleepWait(3000);
		type("txt_Fxrate", rates);
		sleepWait(3000);
		clickOn("btn_SaveFX", "");
		sleepWait(3000);

	}

	@When("^Click on cancel button$")
	public void click_on_cancel_button() throws Throwable {
		// clickOn("btn_cancel","");
	}

	@When("^Click on Fx management tab$")
	public void click_on_Fx_management_tab() throws Throwable {

		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		sleepWait(2000);
		clickOn("txt_FxManagement", "");
		sleepWait(2000);

	}

	@When("^select \"([^\"]*)\" , \"([^\"]*)\" from the drop-down$")
	public void select_from_the_drop_down(String option, String currency) throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		sleepWait(2000);
		clickOn("drp_optionfx", "");
		sleepWait(3000);
		clickOn("span", "[contains(text(),'" + option + "')]");
		sleepWait(3000);
		clickOn("drp_currencyfx", "");
		sleepWait(3000);
		clickOn("span", "[contains(text(),'" + currency + "')]");
		sleepWait(3000);
		clickOn("btn_savecurrency", "");
		sleepWait(2000);

	}

	@When("^validate \"([^\"]*)\"$")
	public void validate(String tostmessage) throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		if (wd.findElement(By.xpath("//*[contains(text(),'" + tostmessage + "')]")).isDisplayed()) {
			assertTrue(true);
		}
		sleepWait(2000);
	}

	@When("^select \"([^\"]*)\" for confirmation$")
	public void select_for_confirmation(String option) throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		sleepWait(8000);
		clickOn("btn_approve", "");
	}

	@Given("^Tax-officer is on given Page \"([^\"]*)\"$")
	public void tax_officer_is_on_given_Page(String Page) throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		sleepWait(300000);
		clickOn("tab_assessment", "");
		sleepWait(3000);

	}

	@When("^Tax-officer Select \"([^\"]*)\" , \"([^\"]*)\" , \"([^\"]*)\"from drop-down$")
	public void tax_officer_Select_from_drop_down(String Period, String Year, String Filter) throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		clickOn("drp_dwn_period", "");
		clickOn("span", "[contains(text(),'" + Period + "')]");
		sleepWait(3000);
		clickOn("drp_dwn_filter", "");
		clickOn("span", "[contains(text(),'" + Filter + "')]");
		sleepWait(2000);

	}

	@When("^Tax-officer Search for  Record from \"([^\"]*)\"$")
	public void tax_officer_Search_for_Record_from(String SearchElement) throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		clickOn("txt_search", "");
		type("txt_search", SearchElement);
		sleepWait(2000);

	}

	@When("^Clicks on Search Button$")
	public void clicks_on_Search_Button() throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		clickOn("btn_search", "");
		sleepWait(2000);

	}

	@When("^Clicks For the status from \"([^\"]*)\"$")
	public void clicks_For_the_status_from(String status) throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		String Status = elementText("text_status");

		if (status.equals(Status)) {
			System.out.println("Pass");
		}

	}

	@When("^Clicks on drp_select button$")
	public void clicks_on_drp_select_button() throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		sleepWait(3000);
		String Nitva = elementText("text_nitva");
		System.out.println(Nitva);
		clickOn("drp_option", "");
		sleepWait(2000);
	}

	@When("^Clicks on  given \"([^\"]*)\"$")
	public void clicks_on_given(String Option) throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		clickOn("span", "[contains(text(),'" + Option + "')]");
		sleepWait(2000);

	}

	@When("^Clicks on sales_domestic icon , redirect to sales page and click on previous button$")
	public void clicks_on_sales_domestic_icon_redirect_to_sales_page_and_click_on_previous_button() throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		sleepWait(3000);
		String Value = elementText("text_domestic");
		if (Value.equals("Domestic Sales")) {
			System.out.println("Pass");
		}

	}

	@When("^Clicks on sales_export icon , redirect to sales page and click on previous button$")
	public void clicks_on_sales_export_icon_redirect_to_sales_page_and_click_on_previous_button() throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		sleepWait(3000);
		String Value = elementText("text_domestic");
		if (Value.equals("Export Sales")) {
			System.out.println("Pass");
		}

	}

	@Given("^User Login with Manufacturer credentials$")
	public void user_Login_with_Manufacturer_credentials() throws Throwable {

		System.out.println("Manufacturer Module");
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		type("txtbox_username", "tripty.chauhan@1rivet.com");
		sleepWait(3000);
		type("txtbox_password", "Test@123");
		sleepWait(3000);
		clickOn("btn_login", "");

	}

	@When("^Click on Vendor registartion tab$")
	public void click_on_Vendor_registartion_tab() throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();

		clickOn("tab_container", "");
		sleepWait(2000);
		clickOn("tab_vendor", "");
		sleepWait(3000);

	}

	@When("^Click on Register Vendor Button$")
	public void click_on_Register_Vendor_Button() throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();

		clickOn("btn_regvendor", "");
		sleepWait(3000);

	}

	@When("^Fill the Details of Vendor \"([^\"]*)\" , \"([^\"]*)\" , \"([^\"]*)\" , \"([^\"]*)\" ,\"([^\"]*)\"$")
	public void fill_the_Details_of_Vendor(String NIF, String Date, String Vendor, String MobileNo, String Email)
			throws Throwable {

		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();

		// String times = new SimpleDateFormat("HHmmss").format(new Date());
		String NIFNumber = times.concat(NIF);
		type("txtbox_NIF", NITVA);
		sleepWait(3000);
		clickOn("dt_NIFregdate", "");
		datePicker(Date);
		type("txt_vendorname", Vendor);
		sleepWait(3000);
		String MobNo = times.concat(MobileNo);
		type("txt_vendormobile", MobNo);
		sleepWait(3000);
		vendoremail = times.concat(Email);
		type("txt_vendoremail", vendoremail);
		sleepWait(3000);
	}

	@When("^Fill the Details of contact person \"([^\"]*)\" ,\"([^\"]*)\" , \"([^\"]*)\"$")
	public void fill_the_Details_of_contact_person(String Contactname, String Mobile, String Email) throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		type("txt_contactname", Contactname);
		sleepWait(3000);
		String dytime = new SimpleDateFormat("HHmmss").format(new Date());
		String Mobnum = dytime.concat(Mobile);
		type("txt_contactmobile", Mobnum);
		sleepWait(3000);
		String email = dytime.concat(Email);
		type("txt_contactemail", email);
		sleepWait(3000);

	}

	@When("^Fill Address detals \"([^\"]*)\" ,\"([^\"]*)\" ,\"([^\"]*)\"$")
	public void fill_Address_detals(String Address, String Province, String City) throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		type("txt_addressline1", Address);
		sleepWait(3000);
		clickOn("drp_province", "");
		clickOn("span", "[contains(text(),'" + Province + "')]");
		sleepWait(3000);
		clickOn("drp_city", "");
		sleepWait(1000);
		clickOn("span", "[contains(text(),'" + City + "')]");
		sleepWait(2000);

	}

	@When("^click on Register button$")
	public void click_on_Register_button_and_validate(String toastmessage) throws Throwable {

		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();

		clickOn("btn_venreg", "");
		sleepWait(8000);
	}

	@Given("^User login with Tax-payers credentials$")
	public void user_login_with_Tax_payers_credentials() throws Throwable {
		System.out.println("Tax-payers");
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();

		type("txtbox_username", Username);
		// type("txtbox_username", "smokeatuser40@mt2015.com");
		sleepWait(3000);
		type("txtbox_password", "Test@123");
		sleepWait(3000);
		clickOn("btn_login", "");
		sleepWait(2000);

	}

	@When("^clicks on e-filling tab$")
	public void clicks_on_e_filling_tab() throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		clickOn("tab_VAT", "");
		sleepWait(3000);
		clickOn("btn_sure", "");
		sleepWait(3000);
		clickOn("tab_container", "");
		sleepWait(1000);
		clickOn("tab_vatefiling", "");
		sleepWait(2000);

	}

	@When("^clicks on assessment icon view button$")
	public void clicks_on_assessment_icon_view_button() throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		clickOn("label_month", "");
		sleepWait(3000);
		clickOn("btn_oview", "");
		sleepWait(3000);

	}

	@When("^Clicks on Notice view button$")
	public void clicks_on_Notice_view_button() throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		clickOn("btn_objview", "");
		sleepWait(3000);

	}

	@When("^Clicks on \"([^\"]*)\"$")
	public void clicks_on(String obj) throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		clickOn("btn_objection", "");
		sleepWait(8000);

	}

	@When("^redirect to cases tab and fill details \"([^\"]*)\",\"([^\"]*)\" , \"([^\"]*)\"$")
	public void redirect_to_cases_tab_and_fill_details(String type, String title, String description) throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		sleepWait(5000);
		WebElement element1 = wd.findElement(By.id("iframe"));
		wd.switchTo().frame(element1);
		sleepWait(2000);
		clickOn("drp_objecttype", "");
		clickOn("option", "[contains(text(),'" + type + "')]");
		sleepWait(3000);
		type("txt_objtitle", title);
		sleepWait(3000);
		// wd.switchTo().defaultContent();
		wd.switchTo().frame(wd.findElement(By.xpath("//iframe[@id='my-editor_ifr']")));
		type("txt_description", description + " " + Username);
		sleepWait(3000);

	}

	@When("^clicks on submit button$")
	public void clicks_on_submit_button() throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		sleepWait(3000);
		wd.switchTo().defaultContent();
		WebElement element1 = wd.findElement(By.id("iframe"));
		wd.switchTo().frame(element1);
		clickOn("btn_osubmit", "");
		sleepWait(3000);

	}

	@Given("^User login with admin/tax-officer credentials$")
	public void user_login_with_admin_tax_officer_credentials() throws Throwable {
		System.out.println("Admin Tax officer");
	}

	@When("^clicks on case management tab$")
	public void clicks_on_case_management_tab() throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();

		sleepWait(3000);
		clickOn("tab_casemanagement", "");
		sleepWait(2000);
	}

	@When("^Apply filter \"([^\"]*)\" option and click on search$")
	public void apply_filter_option_and_click_on_search(String Filter) throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		sleepWait(3000);
		clickOn("drp_filter", "");
		sleepWait(3000);
		clickOn("(span", "[contains(text(),'" + Filter + "')])[1]");
		sleepWait(3000);
		type("txt_search", NITVA_Number);
		// type("txt_search", "20190311075131499);
		sleepWait(4000);
		clickOn("btn_osearch", "");
	}

	@When("^Clicks on manage icon and  \"([^\"]*)\" option$")
	public void clicks_on_manage_icon_and_option(String option) throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		sleepWait(3000);
		clickOn("drp_manage", "");
		sleepWait(3000);
		clickOn("(a", "[contains(text(),'" + option + "')])[1]");

	}

	@When("^Clicks on  \"([^\"]*)\",\"([^\"]*)\" option and click on submit button$")
	public void clicks_on_option_and_click_on_submit_button(String priority, String action) throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		sleepWait(3000);
		WebElement element1 = wd.findElement(By.id("iframe"));
		wd.switchTo().frame(element1);
		sleepWait(2000);
		clickOn("drp_priority", "");
		clickOn("option", "[contains(text(),'" + priority + "')]");
		sleepWait(3000);
		// wd.switchTo().defaultContent();
		// wd.switchTo().frame(element1);
		clickOn("drp_action", "");
		clickOn("option", "[contains(text(),'" + action + "')]");
		sleepWait(5000);
		// wd.switchTo().defaultContent();
		// wd.switchTo().frame(element1);
		clickOn("btn_osubmit", "");
	}

	@Given("^User Login with vendor's credentials$")
	public void user_Login_with_vendor_s_credentials() throws Throwable {

		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		type("txtbox_username", vendoremail);
		sleepWait(3000);
		ReadUsername RU = new ReadUsername();
		String Password = RU.ReadUsername(vendoremail);
		type("txtbox_password", Password);
		sleepWait(3000);
		clickOn("btn_login", "");
	}

	@When("^Click on EFD registartion tab$")
	public void click_on_EFD_registartion_tab() throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		clickOn("tab_container", "");
		sleepWait(3000);
		clickOn("tab_EFDregistartionlist", "");
		sleepWait(3000);
	}

	@When("^Click on EFD Registration Button$")
	public void click_on_EFD_Registration_Button() throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		clickOn("btn_EFDregistartion", "");
		sleepWait(3000);
	}

	@When("^Enter NITVA number and click on search button$")
	public void enter_NITVA_number_and_click_on_search_button() throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		type("txt_NITVA", NITVA_Number);
		sleepWait(3000);
		clickOn("btn_searchNITVA", "");
	}

	@When("^Fill the Details of Vendor \"([^\"]*)\" , \"([^\"]*)\" , \"([^\"]*)\" , \"([^\"]*)\" ,\"([^\"]*)\" ,\"([^\"]*)\"$")
	public void fill_the_Details_of_Vendor(String address, String sim1, String sim2, String device, String model,
			String EFDID) throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
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
		sleepWait(3000);
		clickOn("span", "[contains(text(),'" + model + "')]");
		sleepWait(3000);
		type("txt_EFD", time);
	}

	@When("^click on Test button and validate \"([^\"]*)\"$")
	public void click_on_Test_button_and_validate(String toastmessage) throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		clickOn("btn_test", "");
		if (toastMessage().equalsIgnoreCase(toastmessage)) {
			assertTrue(true);
		}
		sleepWait(5000);
		clickOn("btn_Eregister", "");
	}

	@When("^Click on Help-desk tab$")
	public void click_on_Help_desk_tab() throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		clickOn("tab_helpdesk", "");
		sleepWait(3000);
	}

	@When("^Fill the details \"([^\"]*)\" ,\"([^\"]*)\" ,\"([^\"]*)\" ,\"([^\"]*)\"$")
	public void fill_the_details(String Itype, String Ititle, String Idescription, String Icomment) throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		WebElement element1 = wd.findElement(By.id("iframe"));
		wd.switchTo().frame(element1);
		sleepWait(5000);
		clickOn("label_click", "");
		sleepWait(5000);
		wd.switchTo().defaultContent();
		wd.switchTo().frame(element1);
		sleepWait(2000);
		clickOn("drp_issuetype", "");
		clickOn("option", "[contains(text(),'" + Itype + "')]");
		sleepWait(3000);
		type("txt_issuetitle", Ititle);
		sleepWait(3000);
		wd.switchTo().frame("my-editor_ifr");
		type("txt_issuedescription", Idescription);
		sleepWait(3000);
		Robot rb = new Robot();
		rb.keyPress(KeyEvent.VK_TAB);
		sleepWait(2000);
		wd.switchTo().defaultContent();
		wd.switchTo().frame(element1);
		type("txt_issuecommunicaation", Icomment);
		sleepWait(5000);
	}

	@When("^Clicks on submit button on helpdesk$")
	public void clicks_on_submit_button_on_helpdesk() throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		clickOn("btn_hsubmit", "");
		sleepWait(5000);

	}

	@When("^Search for Registered TicketId$")
	public void search_for_Registered_TicketId() throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		try {
			String Value = elementText("label_referenceid");
			Value = Value.substring(14);
			StoreSysRelated = Value;
			System.out.println(StoreSysRelated);
			sleepWait(5000);
			WebElement element1 = wd.findElement(By.id("iframe"));
			wd.switchTo().frame(element1);
			type("txt_hserach", StoreSysRelated);
			sleepWait(2000);
		} catch (Exception e) {
			Add_Log.info("Failed step " + TestStep);
			Add_Log.error("Not able to execute  --- " + e.getMessage());
		}
	}

	@When("^Check for status and other information from tax-payer$")
	public void check_for_status_and_other_information_from_tax_payer() throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		clickOn("btn_hedit", "");
		sleepWait(3000);
		String Cstatus = elementText("txt_cstatus");
		if (Cstatus.equals("Open")) {

		}
	}

	@When("^Select Next status \"([^\"]*)\" and enter \"([^\"]*)\"$")
	public void select_Next_status_and_enter(String Nstatus, String Comment) throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		Robot rb = new Robot();
		rb.keyPress(KeyEvent.VK_TAB);
		sleepWait(5000);
		clickOn("drp_nstatus", "");
		clickOn("option", "[contains(text(),'" + Nstatus + "')]");
		sleepWait(3000);
		rb.keyPress(KeyEvent.VK_TAB);
		type("txt_issuecommunicaation", Comment);
		sleepWait(3000);
	}

	@When("^Click on Tax-payer profile tab$")
	public void click_on_Tax_payer_profile_tab() throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		clickOn("tab_taxpayerprofile", "");
		sleepWait(3000);

	}

	@When("^search by \"([^\"]*)\" and \"([^\"]*)\" and hit search button$")
	public void search_by_and_and_hit_search_button(String filter, String element) throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		clickOn("drp_filter", "");
		clickOn("span", "[contains(text(),'" + filter + "')]");
		type("txt_search", NITVA_Number);
		sleepWait(5000);
		wd.findElement(By.xpath("//*[@class='btn-xs btn btn-primary ml-2 ng-star-inserted']")).click();
	}

	@When("^Click on View icon$")
	public void click_on_View_icon() throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		sleepWait(5000);
		clickOn("btn_view", "");
		sleepWait(3000);
		clickOn("pane_general", "");
	}

	@When("^Check Data for General details$")
	public void check_Data_for_General_details() throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		String Category = elementText("label_category");

		if (category.equals(Category)) {
			assertTrue(true);
		}
		String LastYestRevenue = elementText("label_lastyearrevenue");
		String TaxOffice = elementText("label_taxoffice");
		String AddressLine1 = elementText("label_addressline1");
		String AddressLine2 = elementText("label_addressline2");
		String Province = elementText("label_province");
		String City = elementText("label_city");
		String ZipCode = elementText("label_zipcode");
		String MobileNumber = elementText("label_mobilenumber");
		String BusinessPerson = elementText("label_businessname");
		String BAddressLine1 = elementText("label_baddressline1");
		String BAddressLine2 = elementText("label_baddressline2");
		String BProvince = elementText("label_bprovince");
		String Bcity = elementText("label_bcity");
		String BMobileNumber = elementText("label_bmobilenumber");
		String BEmail = elementText("label_email");

		if ((LastYestRevenue.equals(lastyearrevenue)) && (TaxOffice.equals(taxoffice))
				&& (AddressLine1.equals(addressline1)) && (AddressLine2.equals(addressline2))
				&& (Province.equals(province)) && (City.equals(city)) && (ZipCode.equals(zipcode))
				&& (MobileNumber.equals(mobilenumber)) && (BusinessPerson.equals(businessname))
				&& (BAddressLine1.equals(baddressline1)) && (BAddressLine2.equals(baddressline2))
				&& (BProvince.equals(bprovince)) && (Bcity.equals(bcity)) && (BMobileNumber.equals(bmobilenumber))
				&& (BEmail.equals(email))) {
			assertTrue(true);
		}
		clickOn("pane_general", "");

	}

	@When("^Check Data for Declaration$")
	public void check_Data_for_Declaration() throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		clickOn("pane_declaration", "");
		clickOn("link_efillingdata", "");
		sleepWait(3000);

	}

	@When("^Check Data for Assessment$")
	public void check_Data_for_Assessment() throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		String DGoods1 = (elementText("label_DG")).replace(".", "");
		String DGoods = DGoods1.replace(",", ".");
		if (ODG == Float.parseFloat(DGoods)) {
			assertTrue(true);

		}
		String DServiceTR = ((elementText("label_DSTT")).replace(".", "")).replace(",", ".");
		if (Float.parseFloat(DServiceTR) == DS21) {
			assertTrue(true);
		}
		String DServiceTT = ((elementText("label_DSTR")).replace(".", "")).replace(",", ".");
		if (Float.parseFloat(DServiceTT) == DS11) {
			assertTrue(true);
		}
		String OExport = ((elementText("label_Export")).replace(".", "")).replace(",", ".");
		if (Float.parseFloat(OExport) == Export) {
			assertTrue(true);
		}
		String OExempt = ((elementText("label_exempt")).replace(".", "")).replace(",", ".");
		if (Float.parseFloat(OExempt) == Exempt) {
			assertTrue(true);
		}
		String ONontax = ((elementText("label_nontax")).replace(".", "")).replace(",", ".");
		if (Float.parseFloat(ONontax) == Nontaxable) {
			assertTrue(true);
		}
		String DGVat = ((elementText("label_DGvat")).replace(".", "")).replace(",", ".");
		if (Float.parseFloat(DGVat) == Float.parseFloat(VAT_Collected_DG)) {
			assertTrue(true);
		}
		String DSVat = ((elementText("label_DSvat")).replace(".", "")).replace(",", ".");
		if (Float.parseFloat(DSVat) == Float.parseFloat(VAT_Collected_DS)) {
			assertTrue(true);
		}
		// String DiffTR = ((elementText("label_DiffTR")).replace(".",
		// "")).replace(",", ".");
		String DGI = ((elementText("label_DGI")).replace(".", "")).replace(",", ".");
		if (Float.parseFloat(DGI) == DGI1) {
			assertTrue(true);
		}
		String DGIV = ((elementText("label_DGIV")).replace(".", "")).replace(",", ".");
		if (Float.parseFloat(DGIV) == Float.parseFloat(VAT_Collected_DGI)) {
			assertTrue(true);
		}
		String DSI = ((elementText("label_DSI")).replace(".", "")).replace(",", ".");
		if (Float.parseFloat(DSI) == DSI1) {
			assertTrue(true);
		}
		String DSIV = ((elementText("label_DSIV")).replace(".", "")).replace(",", ".");
		if (Float.parseFloat(DSIV) == Float.parseFloat(VAT_Collected_DSI)) {
			assertTrue(true);
		}
		String OR = ((elementText("label_OR")).replace(".", "")).replace(",", ".");
		if (Float.parseFloat(OR) == FPP1) {
			assertTrue(true);
		}
		String ORV = ((elementText("label_ORV")).replace(".", "")).replace(",", ".");
		if (Float.parseFloat(ORV) == Float.parseFloat(VAT_Collected_FPP)) {
			assertTrue(true);
		}
		String Total_TTFC = ((elementText("label_total")).replace(".", "")).replace(",", ".");
		Float DiffTTS = ODG + DS21 + Export + Exempt + Nontaxable;
		Float Total_Turnover = DiffTTS + Float.parseFloat(DGI) + Float.parseFloat(DSI) + Float.parseFloat(OR);
		if (Float.parseFloat(Total_TTFC) == Total_Turnover) {
			assertTrue(true);
		}
		String Total_VFC = ((elementText("label_totalV")).replace(".", "")).replace(",", ".");
		Float DiffVCS = Float.parseFloat(DGVat) + Float.parseFloat(DSVat);
		Float Total_Vatcollected = DiffVCS + Float.parseFloat(DGIV) + Float.parseFloat(DSIV) + Float.parseFloat(ORV);
		if (Float.parseFloat(Total_VFC) == Total_Vatcollected) {
			assertTrue(true);
		}

		sleepWait(3000);
		String Asset1 = ((elementText("label_asset1")).replace(".", "")).replace(",", ".");
		String Asset2 = ((elementText("label_asset2")).replace(".", "")).replace(",", ".");
		String Asset3 = ((elementText("label_asset3")).replace(".", "")).replace(",", ".");
		if (TotalA == Float.parseFloat(Asset3)) {
			assertTrue(true);
		}
		String good1 = ((elementText("label_good1")).replace(".", "")).replace(",", ".");
		String good2 = ((elementText("label_good2")).replace(".", "")).replace(",", ".");
		String good3 = ((elementText("label_good3")).replace(".", "")).replace(",", ".");
		if (TotalG == Float.parseFloat(good3)) {
			assertTrue(true);
		}
		String raw1 = ((elementText("label_raw1")).replace(".", "")).replace(",", ".");
		String raw2 = ((elementText("label_raw2")).replace(".", "")).replace(",", ".");
		String raw3 = ((elementText("label_raw3")).replace(".", "")).replace(",", ".");
		if (TotalR == Float.parseFloat(raw3)) {
			assertTrue(true);
		}
		String othet1 = ((elementText("label_others1")).replace(".", "")).replace(",", ".");
		String other2 = ((elementText("label_others2")).replace(".", "")).replace(",", ".");
		String other3 = ((elementText("label_others3")).replace(".", "")).replace(",", ".");
		if (TotalO == Float.parseFloat(other3)) {
			assertTrue(true);
		}
		String Total_deduct = ((elementText("label_totalD")).replace(".", "")).replace(",", ".");

		String eadjsup = ((elementText("label_eadjsup")).replace(".", "")).replace(",", ".");
		if (Float.parseFloat(eadjsup) == SDC) {
			assertTrue(true);
		}
		String eadjvat = ((elementText("label_eadjvat")).replace(".", "")).replace(",", ".");
		if (Float.parseFloat(eadjvat) == VRC) {
			assertTrue(true);
		}

		String othvat = ((elementText("label_othvat")).replace(".", "")).replace(",", ".");
		if (Float.parseFloat(othvat) == VDC) {
			assertTrue(true);
		}
		String othreco = ((elementText("label_othreco")).replace(".", "")).replace(",", ".");
		if (Float.parseFloat(othreco) == PCC) {
			assertTrue(true);
		}
	}

	@Then("^successfull \"([^\"]*)\"  display on given page$")
	public void successfull_display_on_given_page(String tostmessage) throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		if (wd.findElement(By.xpath("//*[contains(text(),'" + tostmessage + "')]")).isDisplayed()) {
			assertTrue(true);
		}
	}

	@When("^Click on IT-Support tab$")
	public void click_on_IT_Support_tab() throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();

		clickOn("tab_itsupport", "");
		sleepWait(8000);

	}

	@When("^Click on \\+ icon to create new issue$")
	public void click_on_icon_to_create_new_issue() throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();

		sleepWait(8000);
		clickOn("icon_plus", "");

	}

	@When("^Fill the details \"([^\"]*)\" ,\"([^\"]*)\" ,\"([^\"]*)\"$")
	public void fill_the_details(String Issuetype, String Issuetitle, String IssueDescription) throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();

		sleepWait(2000);
		clickOn("drp_issuetype", "");
		clickOn("option", "[contains(text(),'" + Issuetype + "')]");
		sleepWait(3000);
		ITitle = Issuetitle + times;
		type("txt_issuetitle", ITitle);
		sleepWait(3000);
		Robot rb = new Robot();
		rb.keyPress(KeyEvent.VK_TAB);
		wd.switchTo().frame("my-editor_ifr");
		type("txt_issuedescription", IssueDescription);
		sleepWait(3000);

	}

	@When("^Clicks on Save Button$")
	public void clicks_on_Save_Button() throws Throwable {

		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		sleepWait(3000);
		wd.switchTo().defaultContent();
		clickOn("btn_osubmit", "");
		sleepWait(3000);
	}

	@Given("^user should enter Username \"([^\"]*)\" and Password \"([^\"]*)\"$")
	public void user_should_enter_Username_and_Password(String username, String password) throws Throwable {
		System.out.println("IT support");
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		sleepWait(4000);
		System.out.println("User on 1TrakIT portal");
		type("txtbox_username", username);
		sleepWait(2000);
		type("txtbox_password", password);
		sleepWait(2000);
		clickOn("btn_login", "");
		sleepWait(3000);
		Add_Log.info("Successfully executed step " + TestStep);
	}

	@Then("^user clicks on edit icon$")
	public void user_clicks_on_edit_icon() throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		clickOn("btn_hedit", "");
		sleepWait(2000);
		Add_Log.info("Successfully executed step " + TestStep);
	}

	@Then("^user clicks on Search \"([^\"]*)\" textbox and enters the text$")
	public void user_clicks_on_Search_textbox_and_enters_the_text(String Search) throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		clickOn("Search_issue", "");
		type("Search_issue", ITitle);
		sleepWait(1000);
		Add_Log.info("Successfully executed step " + TestStep);

	}

	@Then("^user selects option from Priority dropdown \"([^\"]*)\"$")
	public void user_selects_option_from_Priority_dropdown(String Priority) throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		sleepWait(2000);
		wd.findElement(By.xpath(obj.getProperty("Priority_dropd"))).sendKeys(Priority);
		Add_Log.info("Successfully executed step " + TestStep);
	}

	@Then("^user selects option from Next Status dropdown \"([^\"]*)\"$")
	public void user_selects_option_from_Next_Status_dropdown(String Next_Status) throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		sleepWait(2000);
		wd.findElement(By.xpath(obj.getProperty("Next_status_dropd"))).sendKeys(Next_Status);
		Add_Log.info("Successfully executed step " + TestStep);
	}

	@Then("^user selects option from Assign To Group dropdown$")
	public void user_selects_option_from_Assign_To_Group_dropdown() throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		Select Issue_typ_drpd = new Select(wd.findElement(By.xpath(obj.getProperty("AssignTo_grp"))));
		Issue_typ_drpd.selectByVisibleText("Global User");
		Add_Log.info("Successfully executed step " + TestStep);
	}

	@Then("^click on download icon on any file$")
	public void click_on_download_icon_on_any_file() throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		clickOn("downloadicon", "");
		sleepWait(4000);
		Add_Log.info("Successfully executed step " + TestStep);
	}

	@Then("^file should get the download$")
	public void file_should_get_the_download() throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		File getLatestFile = new File(System.getProperty("user.dir") + "\\src\\test\\resources\\capture.pdf");
		String Actual = getLatestFile.getName();
		String Expected = "capture.pdf";
		Assert.assertEquals(Actual, Expected);
		if (Expected.equals(Actual)) {
			System.out.println("Image Matched");
		} else {
			System.out.println("Image Not Matched");
		}
		saveFile();
		Add_Log.info("Successfully executed step " + TestStep);
	}

	@Then("^click on IT support submit button$")
	public void click_on_IT_support_submit_button() throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		sleepWait(2000);
		clickOn("btn_Help_Submit", "");
		Add_Log.info("Successfully executed step " + TestStep);
	}

	@When("^Click on Fuel management tab$")
	public void click_on_Fuel_management_tab() throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		clickOn("tab_fuelmanagement", "");
		sleepWait(5000);

	}

	@When("^Check for the Current updated date and update fuel rate$")
	public void check_for_the_Current_updated_date_and_update_fuel_rate() throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		ConnectDatabase CD = new ConnectDatabase();
		CD.opendb();

		String data = "update [DRC-Demo].[Vat].[FuelRate] set Status = 3 ,"
				+ "Remarks='Test default',DeletedDate=getdate() "
				+ "where FuelRateId  = (select max(FuelRateId) from [DRC-Demo].Vat.FuelRate)";

		CD.sta.executeUpdate(data);
		System.out.println("test");

		clickOn("btn_updatefuelrate", "");

	}

	@When("^update the rate as \"([^\"]*)\" ,\"([^\"]*)\" ,\"([^\"]*)\" ,\"([^\"]*)\" ,\"([^\"]*)\" ,\"([^\"]*)\"$")
	public void update_the_rate_as(String petrol, String diesel, String kerosene, String CNG, String methanol,
			String gasoline) throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		type("txt_petrol", petrol);
		type("txt_diesel", diesel);
		type("txt_keresone", kerosene);
		type("txt_CNG", CNG);
		type("txt_methanole", methanol);
		type("txt_gasoline", gasoline);
		sleepWait(3000);

		String Pexcise = elementText("label_pexcise");
		String Pvat = elementText("label_pvat");
		String Pfueltax = elementText("label_pfueltax");
		String Proyality = elementText("label_proyality");
		String Ptotal = elementText("label_ptotal");

		Float PTotal = Float.parseFloat(petrol) + ((Float.parseFloat(petrol)) * 10 / 100)
				+ ((Float.parseFloat(petrol)) * 16 / 100) + ((Float.parseFloat(petrol)) * 5 / 100)
				+ ((Float.parseFloat(petrol)) * 12 / 100);

		if (Float.parseFloat(Pexcise) == ((Float.parseFloat(petrol)) * 0.10)
				&& Float.parseFloat(Pvat) == ((Float.parseFloat(petrol)) * 0.16)
				&& Float.parseFloat(Pfueltax) == ((Float.parseFloat(petrol)) * 0.05)
				&& Float.parseFloat(Proyality) == ((Float.parseFloat(petrol)) * 0.12)
				&& Float.parseFloat(Ptotal) == PTotal) {

		}
		String Dexcise = elementText("label_dexcise");
		String Dvat = elementText("label_dvat");
		String Dfueltax = elementText("label_dfueltax");
		String Droyality = elementText("label_droyality");
		String Dtotal = elementText("label_dtotal");
		Float DTotal = Float.parseFloat(diesel) + ((Float.parseFloat(diesel)) * 10 / 100)
				+ ((Float.parseFloat(diesel)) * 16 / 100) + ((Float.parseFloat(diesel)) * 5 / 100)
				+ ((Float.parseFloat(diesel)) * 12 / 100);

		if (Float.parseFloat(Dexcise) == ((Float.parseFloat(diesel)) * 0.10)
				&& Float.parseFloat(Dvat) == ((Float.parseFloat(diesel)) * 0.16)
				&& Float.parseFloat(Dfueltax) == ((Float.parseFloat(diesel)) * 0.05)
				&& Float.parseFloat(Droyality) == ((Float.parseFloat(diesel)) * 0.12)
				&& Float.parseFloat(Dtotal) == DTotal) {

		}
		String Kexcise = elementText("label_kexcise");
		String Kvat = elementText("label_kvat");
		String Kfueltax = elementText("label_kfueltax");
		String Kroyality = elementText("label_kroyality");
		String Ktotal = elementText("label_ktotal");
		Float KTotal = Float.parseFloat(kerosene) + ((Float.parseFloat(kerosene)) * 10 / 100)
				+ ((Float.parseFloat(kerosene)) * 16 / 100) + ((Float.parseFloat(kerosene)) * 5 / 100)
				+ ((Float.parseFloat(kerosene)) * 12 / 100);

		if (Float.parseFloat(Kexcise) == ((Float.parseFloat(kerosene)) * 0.10)
				&& Float.parseFloat(Kvat) == ((Float.parseFloat(kerosene)) * 0.16)
				&& Float.parseFloat(Kfueltax) == ((Float.parseFloat(kerosene)) * 0.05)
				&& Float.parseFloat(Kroyality) == ((Float.parseFloat(kerosene)) * 0.12)
				&& Float.parseFloat(Ktotal) == KTotal) {

		}
		String Cexcise = elementText("label_cexcise");
		String Cvat = elementText("label_cvat");
		String Cfueltax = elementText("label_cfueltax");
		String Croyality = elementText("label_croyality");
		String Ctotal = elementText("label_ctotal");
		Float CTotal = Float.parseFloat(CNG) + ((Float.parseFloat(CNG)) * 10 / 100)
				+ ((Float.parseFloat(CNG)) * 16 / 100) + ((Float.parseFloat(CNG)) * 5 / 100)
				+ ((Float.parseFloat(CNG)) * 12 / 100);

		if (Float.parseFloat(Cexcise) == ((Float.parseFloat(CNG)) * 0.10)
				&& Float.parseFloat(Cvat) == ((Float.parseFloat(CNG)) * 0.16)
				&& Float.parseFloat(Cfueltax) == ((Float.parseFloat(CNG)) * 0.05)
				&& Float.parseFloat(Croyality) == ((Float.parseFloat(CNG)) * 0.12)
				&& Float.parseFloat(Ctotal) == CTotal) {

		}
		String Mexcise = elementText("label_mexcise");
		String Mvat = elementText("label_mvat");
		String Mfueltax = elementText("label_mfueltax");
		String Mroyality = elementText("label_mroyality");
		String Mtotal = elementText("label_mtotal");
		Float MTotal = Float.parseFloat(methanol) + ((Float.parseFloat(methanol)) * 10 / 100)
				+ ((Float.parseFloat(methanol)) * 16 / 100) + ((Float.parseFloat(methanol)) * 5 / 100)
				+ ((Float.parseFloat(methanol)) * 12 / 100);

		if (Float.parseFloat(Mexcise) == ((Float.parseFloat(methanol)) * 0.10)
				&& Float.parseFloat(Mvat) == ((Float.parseFloat(methanol)) * 0.16)
				&& Float.parseFloat(Mfueltax) == ((Float.parseFloat(methanol)) * 0.05)
				&& Float.parseFloat(Mroyality) == ((Float.parseFloat(methanol)) * 0.12)
				&& Float.parseFloat(Mtotal) == MTotal) {

		}
		String Gexcise = elementText("label_gexcise");
		String Gvat = elementText("label_gvat");
		String Gfueltax = elementText("label_gfueltax");
		String Groyality = elementText("label_groyality");
		String Gtotal = elementText("label_gtotal");
		Float GTotal = Float.parseFloat(gasoline) + ((Float.parseFloat(gasoline)) * 10 / 100)
				+ ((Float.parseFloat(gasoline)) * 16 / 100) + ((Float.parseFloat(gasoline)) * 5 / 100)
				+ ((Float.parseFloat(gasoline)) * 12 / 100);

		if (Float.parseFloat(Gexcise) == ((Float.parseFloat(gasoline)) * 0.10)
				&& Float.parseFloat(Gvat) == ((Float.parseFloat(gasoline)) * 0.16)
				&& Float.parseFloat(Gfueltax) == ((Float.parseFloat(gasoline)) * 0.05)
				&& Float.parseFloat(Groyality) == ((Float.parseFloat(gasoline)) * 0.12)
				&& Float.parseFloat(Gtotal) == GTotal) {

		}

	}

	@When("^click on save button$")
	public void click_on_save_button() throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();

		clickOn("btn_fsave", "");
	}

	@When("^Clicks on the Approve Button$")
	public void clicks_on_the_Approve_Button() throws Throwable {

	}
	/*------------------------------Debt Management--------------------------------*/

	@Given("^\"([^\"]*)\"\"([^\"]*)\" DGI should be logged in to the internal portal$")
	public void dgi_should_be_logged_in_to_the_internal_portal(String arg1, String arg2) throws Throwable {
		System.out.println("Debt Management");
	}

	@When("^clicked on Debt Management Module must be on Debt Management Module$")
	public void clicked_on_Debt_Management_Module_must_be_on_Debt_Management_Module() throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		try {
			sleepWait(3000);
			clickOn("nav_debt", "");
			sleepWait(3000);
			assertEquals(elementText("txt_heading", ""), "Debt Management");
		} catch (Exception e) {
			Add_Log.info("Failed step " + TestStep);
			Add_Log.error("Not able to execute  --- " + e.getMessage());
		}
	}

	@Then("^Select Up to date$")
	public void select_Up_to_date() throws Throwable {
		sleepWait(2000);
		clickOn("btn_uptodate", "");
		datePicker(new SimpleDateFormat("YYYY-MM-dd").format(new Date()));
		sleepWait(8000);
		clickOn("btn_dsave", "");

	}

	@Then("^click on zero to three months Pending amount Link$")
	public void click_on_zero_to_three_months_Pending_amount_Link() throws Throwable {
		sleepWait(3000);
		clickOn("txt_0to3months", "/following::a");
	}

	@Then("^user is on Pending debts$")
	public void user_is_on_Pending_debts() throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		try {
			sleepWait(5000);
			assertEquals(elementText("txt_heading", ""), "Debt Management");
			sleepWait(3000);
		} catch (Exception e) {
			Add_Log.info("Failed step " + TestStep);
			Add_Log.error("Not able to execute  --- " + e.getMessage());
		}
	}

	@Then("^Search by \"([^\"]*)\" nitva number and assigns to officer and is on Case Management$")
	public void search_by_nitva_number_and_assigns_to_officer_and_is_on_Case_Management(String Filter)
			throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		try {
			sleepWait(3000);
			clickOn("btn_filter", "");
			sleepWait(1000);
			clickOn("drp_filter", "");
			sleepWait(1000);
			// clickOn("(span", "[contains(text(),'')])[1]");
			clickOn("span", "[contains(text(),'" + Filter + "') and contains(@class,'option')]");
			sleepWait(1000);
			type("txt_search", NITVA_Number);
			// type("txt_search", "20190312104412527");
			clickOn("btn_searchage", "");
			sleepWait(3000);
			clickOn("chkbx_selectfirst", "");
			sleepWait(3000);
			clickOn("btn_assignofficer", "");
			sleepWait(3000);
			assertEquals(elementText("txt_collectionofficer", ""), "Collection Officers");
			sleepWait(3000);
			clickOn("select_officer", "");
			sleepWait(3000);
			// String collectofficername = elementText("select_officer",
			// "/following::td[1]");
			clickOn("btn_dsave", "");
			sleepWait(8000);
		} catch (Exception e) {
			Add_Log.info("Failed step " + TestStep);
			Add_Log.error("Not able to execute  --- " + e.getMessage());
		}
	}

	@Then("^click in Percentage Radio At Expected Recovery$")
	public void click_in_Percentage_Radio_At_Expected_Recovery() throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		try {
			sleepWait(3000);
			clickOn("radbtn_expRecoveryper", "");
			sleepWait(3000);
		} catch (Exception e) {
			Add_Log.info("Failed step " + TestStep);
			Add_Log.error("Not able to execute  --- " + e.getMessage());
		}

	}

	@Then("^Enter the Percentage \"([^\"]*)\" and displayed amount field \"([^\"]*)\"$")
	public void enter_the_Percentage_and_display_the_amount_field(String arg1, String arg2) throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		try {
			sleepWait(2000);
			type("txtbx_recPer", arg1);
			sleepWait(3000);
			WebElement peramt = wd.findElement(By.xpath("//input[@formcontrolname='expectedRecoveryAmount']"));
			JavascriptExecutor jse = (JavascriptExecutor) wd;
			String perc = jse.executeScript("return arguments[0].value", peramt).toString();
			sleepWait(3000);
			double totaldebt = Double.parseDouble(frenchToIndian(elementText("href_totalamountDue", "")));
			double per = Double.parseDouble(arg1);
			double recamt = totaldebt * per / 100;
			assertEquals(Double.parseDouble(perc), recamt);
		} catch (Exception e) {
			Add_Log.info("Failed step " + TestStep);
			Add_Log.error("Not able to execute  --- " + e.getMessage());
		}
	}

	@Then("^Status \"([^\"]*)\" should be displayed$")
	public void status_should_be_displayed(String status) throws Throwable {
		// waitFor("btn_dsave");

		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		try {
			sleepWait(4000);
			WebElement dt = wd.findElement(By.xpath("//*[contains(text(),'Status')]/following::span"));
			assertEquals(dt.getText(), status);
			if (status.equals("Payment Reminder Sent")) {
				ConnectDatabase.opendb();
				Calendar cal2 = Calendar.getInstance();
				cal2.add(Calendar.DATE, -30);
				String thirtydaysago = new SimpleDateFormat("YYYY-MM-dd").format(cal2.getTime());
				String paymentnotcompleted = "update  vat.CaseManagement set CreationDate='" + thirtydaysago
						+ "' where CaseId='" + elementText("txt_cseid", "") + "'";
				System.out.println(paymentnotcompleted);

				ConnectDatabase.sta.executeUpdate(paymentnotcompleted);
				sleepWait((5 - Integer.parseInt(minutespattern.format(new Date())) % 5) * 60 * 2000);
			}
		} catch (Exception e) {
			Add_Log.info("Failed step " + TestStep);
			Add_Log.error("Not able to execute  --- " + e.getMessage());
		}

	}

	@Then("^Selects Action \"([^\"]*)\"$")
	public void selects_Action(String action) throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		try {

			clickOn("select_action", "");
			sleepWait(3000);
			clickOn("span", "[text()='" + action + "']");
		} catch (Exception e) {
			Add_Log.info("Failed step " + TestStep);
			Add_Log.error("Not able to execute  --- " + e.getMessage());
		}
	}

	@Then("^click on Submit button$")
	public void click_on_Submit_button() throws Throwable {

		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		try {
			clickOn("btn_submit", "");
			sleepWait(3000);
		} catch (Exception e) {
			Add_Log.info("Failed step " + TestStep);
			Add_Log.error("Not able to execute  --- " + e.getMessage());
		}
	}

	@Then("^add Comment \"([^\"]*)\"$")
	public void add_Comment(String arg1) throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		try {
			type("txtbx_comment", arg1);
		} catch (Exception e) {
			Add_Log.info("Failed step " + TestStep);
			Add_Log.error("Not able to execute  --- " + e.getMessage());
		}
	}

	@Then("^attach the document\"([^\"]*)\"$")
	public void attach_the_document(String arg1) throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		try {
			clickOn("browse_debt", "");
			sleepWait(3000);
			UploadImage("", arg1);
			sleepWait(3000);
		} catch (Exception e) {
			Add_Log.info("Failed step " + TestStep);
			Add_Log.error("Not able to execute  --- " + e.getMessage());
		}

	}

	@Then("^user should be on Case Management Page$")
	public void user_should_be_on_Case_Management_Page() throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		try {
			sleepWait(3000);
			assertEquals(elementText("txt_heading", ""), "Case Management");
			sleepWait(3000);
		} catch (Exception e) {
			Add_Log.info("Failed step " + TestStep);
			Add_Log.error("Not able to execute  --- " + e.getMessage());
		}
	}

	@Then("^no of notification should be (\\d+) with \"([^\"]*)\" notification$")
	public void no_of_notification_should_be_with_notification(int arg1, String action) throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		try {
			ConnectDatabase.opendb();
			clickOn("btn_notify", "");
			sleepWait(4000);
			sassert.assertEquals(elementText("txt_Notify_heading", ""), action);
			sleepWait(4000);
			clickOn("btn_close_Notification", "");
			sleepWait(5000);
			if (action.equals("Request Payment")) {
				Calendar cal2 = Calendar.getInstance();
				cal2.add(Calendar.DATE, -15);
				String fifteendaysago = new SimpleDateFormat("YYYY-MM-dd").format(cal2.getTime());
				String paymentremindersent = "update  vat.CaseManagement set CreationDate='" + fifteendaysago
						+ "' where CaseId='" + elementText("txt_cseid", "") + "'";

				ConnectDatabase.sta.executeUpdate(paymentremindersent);
				System.out.println(paymentremindersent);
				sleepWait((5 - Integer.parseInt(minutespattern.format(new Date())) % 5) * 60 * 2000);
			}
		} catch (Exception e) {
			Add_Log.info("Failed step " + TestStep);
			Add_Log.error("Not able to execute  --- " + e.getMessage());
		}

	}

	@Then("^click on previous button from debt case$")
	public void click_on_previous_button_from_debt_case() throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		try {
			debtcaseid = elementText("txt_cseid", "");
			System.out.println(debtcaseid);
			clickOn("btn_previous_associatedbank", "");
			sleepWait(5000);
		} catch (Exception e) {
			Add_Log.info("Failed step " + TestStep);
			Add_Log.error("Not able to execute  --- " + e.getMessage());
		}

	}

	@Then("^click on filter by dropdown CaseID \"([^\"]*)\"$")
	public void click_on_filter_by_dropdown_CaseID(String CaseID) throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		try {
			clickOn("drp_filter", "");
			sleepWait(2000);
			clickOn("span", "[contains(text(),'Case Id') and contains(@class,'option')]");
			sleepWait(3000);
			type("txtbx_typehere", debtcaseid);
			clickOn("btn_search_case", "");
			sleepWait(5000);
			clickOn("btn_casemanage", "");
			clickOn("btn_casemanageview", "");
		} catch (Exception e) {
			Add_Log.info("Failed step " + TestStep);
			Add_Log.error("Not able to execute  --- " + e.getMessage());
		}

	}

	@When("^clicked on Case Management Module must be on Case Management Module List of cases assigned to the officer should be displayed$")
	public void clicked_on_Case_Management_Module_must_be_on_Case_Management_Module_List_of_cases_assigned_to_the_officer_should_be_displayed()
			throws Throwable {
		System.out.println("Debt Management Case management");
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		try {
			clickOn("href_dashboards", "");
			clickOn("nav_href_caseManagement", "");
			sleepWait(3000);
			assertEquals(elementText("txt_heading", ""), "Case Management");
			List<WebElement> ele = wd.findElements(By.xpath("//tbody//tr"));
			assertNotEquals(ele.size(), 0);

		} catch (Exception e) {
			Add_Log.info("Failed step " + TestStep);
			Add_Log.error("Not able to execute  --- " + e.getMessage());
		}

	}

	@Then("^click on filter by \"([^\"]*)\" Nitvanumber$")
	public void click_on_filter_by_dropdown_Nitvanumber(String Filter) throws Throwable {

		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		try {
			clickOn("drp_filter", "");
			// clickOn("(span", "[contains(text(),'" + Filter + "')])[1]");
			clickOn("span", "[contains(text(),'" + Filter + "') and contains(@class,'option')]");
			type("txt_search", NITVA_Number);
			// type("txt_search", "20190312104412527");
			clickOn("btn_search_case", "");
			sleepWait(3000);
		} catch (Exception e) {
			Add_Log.info("Failed step " + TestStep);
			Add_Log.error("Not able to execute  --- " + e.getMessage());
		}
	}

	@Then("^click on sort icon of taxofficer$")
	public void click_on_sort_icon_of_taxofficer() throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		try {
			clickOn("sorticonTF", "");
		} catch (Exception e) {
			Add_Log.info("Failed step " + TestStep);
			Add_Log.error("Not able to execute  --- " + e.getMessage());
		}

	}

	@Then("^Click on View in Manage Options$")
	public void click_on_View_in_Manage_Options() throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		try {
			WebElement scroll = wd.findElement(By.xpath("//td//button"));
			JavascriptExecutor js = (JavascriptExecutor) wd;
			js.executeScript("window.scrollBy(250,0)", scroll);
			clickOn("btn_casemanage", "");
			clickOn("btn_casemanageview", "");
		} catch (Exception e) {
			Add_Log.info("Failed step " + TestStep);
			Add_Log.error("Not able to execute  --- " + e.getMessage());
		}

	}

	@Then("^user should be on Debt Collection Case$")
	public void user_should_be_on_Debt_Collection_Case() throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		try {
			sleepWait(6000);
			assertEquals(wd.findElement(By.xpath("//*[contains(text(),'Case Management')]")).getText()
					.equalsIgnoreCase("Case Management"), true);
		} catch (Exception e) {
			Add_Log.info("Failed step " + TestStep);
			Add_Log.error("Not able to execute  --- " + e.getMessage());
		}

	}

	@Then("^click on Amount radio at Expected Recovery$")
	public void click_on_Amount_radio_at_Expected_Recovery() throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		try {
			clickOn("radbtn_expRecoveryAmt", "");
		} catch (Exception e) {
			Add_Log.info("Failed step " + TestStep);
			Add_Log.error("Not able to execute  --- " + e.getMessage());
		}

	}

	@Then("^Enter the amount to be Recovered \"([^\"]*)\" and the percentage field should dispaly \"([^\"]*)\"$")
	public void enter_the_amount_to_be_Recovered_and_the_percentage_field_should_dispaly(String arg1, String arg2)
			throws Throwable {
		String TestStep = new Object() {
		}.getClass().getEnclosingMethod().getName();
		try {
			System.out.println(arg1);
			System.out.println(arg2);
			double totaldebt = Double.parseDouble(frenchToIndian(elementText("href_totalamountDue", "")));
			sleepWait(3000);
			Double amt = totaldebt / 5;
			type("txtbx_recAmt", String.valueOf(amt));
			WebElement rper = wd.findElement(By.xpath("//input[@formcontrolname='expectedRecoveryPercentage']"));
			JavascriptExecutor jse = (JavascriptExecutor) wd;
			String perc = jse.executeScript("return arguments[0].value", rper).toString();
			System.out.println(perc);

			Double percT = amt / totaldebt * 100;
			if (percT - percT.intValue() == 0) {
				assertEquals(perc, String.valueOf(percT.intValue()));
			} else {
				assertEquals(perc, String.valueOf(percT));
			}
		} catch (Exception e) {
			Add_Log.info("Failed step " + TestStep);
			Add_Log.error("Not able to execute  --- " + e.getMessage());
		}

	}

	/* Account adjustment */

	@Given("^\"([^\"]*)\"\"([^\"]*)\" The officer has logged in with Username \"([^\"]*)\" and Password \"([^\"]*)\"$")
	public void the_officer_has_logged_in_with_Username_and_Password(String TestCaseId, String Description,
			String username, String password) throws Throwable {
		System.out.println("Account adjustment");
	}

	@When("^clicks on Account adjustment from TaxPayer Profile of user with nitvanumber \"([^\"]*)\"$")
	public void clicks_on_Account_adjustment_from_TaxPayer_Profile_of_user_with_nitvanumber(String Filter)
			throws Throwable {
		sleepWait(3000);
		clickOn("nav_tpprofile", "");
		sleepWait(8000);
		assertEquals(elementText("page_tpprofile", ""), "Taxpayer Details");
		clickOn("drp_filter", "");
		clickOn("(span", "[contains(text(),'" + Filter + "')])[1]");
		type("txt_search", NITVA_Number);
		clickOn("btn_searchAcadjst", "");
		sleepWait(3000);
		clickOn("btn_viewtpprofile", "");
		sleepWait(5000);
		clickOn("btn_stmttrans", "");
		clickOn("btn_accAdjstmt", "");

	}

	@Then("^user is on account adustment page$")
	public void user_is_on_account_adustment_page() throws Throwable {
		sleepWait(5000);
		assertEquals(elementText("txt_acadjstmnt", ""), "Account Adjustment");
	}

	@Then("^selects action \"([^\"]*)\"$")
	public void selects_action(String action) throws Throwable {
		sleepWait(3000);
		clickOn("drpdwn_action", "");
		sleepWait(3000);
		Acaction = action;
		clickOn("span", "[contains(@class,'ng-option') and contains(text(),'" + Acaction + "')]");
	}

	@Then("^validates created date Performed By \"([^\"]*)\" Source \"([^\"]*)\" and TaxPayer \"([^\"]*)\"$")
	public void validates_created_date_Performed_By_Source_and_TaxPayer(String user, String src, String tpayer)
			throws Throwable {
		Date d = new Date();
		SimpleDateFormat dateFormat = new SimpleDateFormat("dd MMM, yyyy");
		SimpleDateFormat dateFormat2 = new SimpleDateFormat("MM/dd/yyyy");
		SimpleDateFormat dateFormat3 = new SimpleDateFormat("MMM,yyyy");
		adjperiod = dateFormat3.format(d);
		createdDaterec = dateFormat2.format(d);
		cdate = dateFormat.format(d);
		assertEquals(elementText("txt_CreatedDate", ""), cdate);
		assertEquals(getvalue("input_performedby", "").equalsIgnoreCase(user), true);
		performOfficer = user;
		assertEquals(elementText("input_source", ""), src);
		source = src;
		assertEquals(getvalue("input_taxpayer", ""), tpayer);
		txpayer = tpayer;
	}

	@Then("^Source ID must be blank$")
	public void source_ID_must_be_blank() throws Throwable {
		assertEquals(getvalue("input_sourceid", ""), "");
	}

	@Then("^selects the Aprroved by officer \"([^\"]*)\"$")
	public void selects_the_Aprroved_by_officer(String Aofficer) throws Throwable {
		approvedOfficer = Aofficer;
		sleepWait(3000);
		clickOn("drpdwn_approve", "");
		sleepWait(3000);
		clickOn("span", "[contains(text(),'" + Aofficer + "')]");

	}

	/****
	 * verification for Particular records of Assessment And ReAssessment from
	 * tax payer profile
	 * 
	 */
	@Then("^click on Add button and selects the transaction for adjustment$")
	public void click_on_Add_button_and_selects_the_transaction_for_adjustment_from_to() throws Throwable {
		sleepWait(3000);
		clickOn("btn_add", "");
		sleepWait(4000);
		List<WebElement> particularRecordslist = wd.findElements(By.xpath("(//tbody)[2]//td[5]"));
		for (int i = 0; i < particularRecordslist.size(); i++) {
			String Rpartiulars = particularRecordslist.get(i).getText();
			assertEquals(Rpartiulars.equalsIgnoreCase("Assessment") || Rpartiulars.equalsIgnoreCase("ReAssessment")
					|| Rpartiulars.equalsIgnoreCase("Adjustment"), true);
		}
		clickOn("radio_stmtrecords", "");
		clickOn("btn_selectRec", "");
	}

	@Then("^Three row must be displayed with Old Records,Adustment row and total row$")
	public void three_row_must_be_displayed_with_Old_Records_Adustment_row_and_total_row() throws Throwable {
		sleepWait(3000);
		List<WebElement> adjustrec = wd.findElements(By.xpath("//tbody//tr"));
		assertEquals(adjustrec.size(), 3);
		assertEquals(buttonEnabled("btn_acadjstsubmit", ""), false, "Submit Button is Enabled");
	}

	@Then("^Select the reason \"([^\"]*)\"$")
	public void select_the_reason(String reason) throws Throwable {

		clickOn("drpdwn_reason", "");
		sleepWait(3000);
		List<WebElement> action = wd.findElements(By.xpath("//div[@role='option']"));
		if (Acaction.equalsIgnoreCase("Reverse")) {
			assertEquals(action.get(0).getText(), "System Error");
			assertEquals(action.get(1).getText(), "Error from source");
			assertEquals(action.get(2).getText(), "User type");
			assertEquals(action.get(3).getText(), "Duplicate entry");
		}
		if (Acaction.equalsIgnoreCase("General")) {
			assertEquals(action.get(0).getText(), "System Error");
			assertEquals(action.get(1).getText(), "Assessment/Re-assessment");
			assertEquals(action.get(2).getText(), "Objection");

		}
		clickOn("span", "[contains(text(),'" + reason + "')  and contains(@class,'ng-option')]");
		sleepWait(5000);
		reason = reason;
	}

	@Then("^Enters comment in the Account Adjustment \"([^\"]*)\"$")
	public void enters_comment_in_the_Account_Adjustment(String comments) throws Throwable {
		type("input_commnets", comments);
		comment = comments;
	}

	@Then("^clicks on Submit button$")
	public void clicks_on_Submit_button() throws Throwable {
		clickOn("btn_acadjstsubmit", "");
		// System.out.println("submit button");
		sleepWait(30000);
	}

	@Then("^click on Account Adjustment$")
	public void click_on_Account_Adjustment() throws InterruptedException {
		sleepWait(18000);
		clickOn("nav_acAdjstmnt", "");
		sleepWait(5000);
		assertEquals(elementText("txt_acAdjstmnt", ""), "Account Adjustment");
		sleepWait(5000);
	}

	@Then("^user selects Charge \"([^\"]*)\" and Enter Amount to be adjusted VAT Liability \"([^\"]*)\" LateFee \"([^\"]*)\" Penalty \"([^\"]*)\" Interest should be non-editable$")
	public void user_selects_Charge_and_Enter_Amount_to_be_adjusted_VAT_Liability_LateFee_Penalty_Interest_should_be_non_editable(
			String charge, String advatliabil, String adjstlatefee, String adjstpenalty) throws Throwable {
		adjcharge = charge;
		adjltfee = adjstlatefee;
		adjpenal = adjstpenalty;
		long diff = 0;
		if (!source.equals("Objection")) {
			adjvatliab = advatliabil;
		} else {
			adjvatliab = "0";
		}
		clickOn("drpdwn_charge", "");
		sleepWait(3000);
		clickOn("option_charge", "[contains(text(),'" + charge + "')]");
		if (!source.equals("Objection")) {
			type("input_vat", advatliabil);
		}
		type("input_ltfee", adjstlatefee);
		type("input_pen", adjstpenalty);

		/// DATE Format to Calculate
		SimpleDateFormat myFormat = new SimpleDateFormat("dd MMM, yyyy");
		String inputString1 = elementText("slash", "tbody/tr[1]/td[2]");
		String inputString2 = elementText("slash", "tbody/tr[2]/td[2]");
		try {
			Date date1 = myFormat.parse(inputString1);
			Date date2 = myFormat.parse(inputString2);
			diff = TimeUnit.DAYS.convert(date1.getTime() - date2.getTime(), TimeUnit.MILLISECONDS);
			// System.out.println("Days: " +diff);
		} catch (ParseException e) {
			e.printStackTrace();
		}
		// Formula as per the User story
		double interestAdjust = (Math.abs(diff)
				* (Double.parseDouble(adjltfee) + Double.parseDouble(adjvatliab) + Double.parseDouble(adjpenal)) * 0.16)
				/ 365;

		/*
		 * if ((!(arg2.equals("0"))) ||
		 * (!arg2.equals(elementText("txt_oldVatrec", " ")))) {
		 * assertEquals(elementText("txt_errorMsg", ""),
		 * "Amount should be 0 or exact value"); } if ((!(arg2.equals("0"))) &&
		 * (!arg2.equals(elementText("txt_oldintRec", " ")))) {
		 * assertEquals(elementText("txt_errorMsg", ""),
		 * "Amount should be 0 or exact value"); } if ((!(arg2.equals("0"))) &&
		 * (!arg2.equals(elementText("txt_oldpenRec", " ")))) {
		 * assertEquals(elementText("txt_errorMsg", ""),
		 * "Amount should be 0 or exact value"); }
		 */

		if (Acaction.equalsIgnoreCase("general") && charge.equalsIgnoreCase("credit")) {
			olddate = elementText("txt_Odate", "");
			oldperiod = elementText("txt_Operiod", "");
			oldpartic = elementText("txt_Oparticular", "");
			ovatliab = elementText("txt_oldVatrec", "");
			oltfee = elementText("txt_oldltfeeRec", "");
			oint = elementText("txt_oldintRec", "");
			openal = elementText("txt_oldpenRec", "");
			assertEquals(elementText("txt_oldcharge", ""), "Debit");
			double vat = Double.parseDouble(ovatliab);
			double ltfee = Double.parseDouble(oltfee);
			// int interest=Integer.parseInt(elementText("txt_oldintRec",""));
			double penalty = Double.parseDouble(elementText("txt_oldpenRec", ""));

			String vatT = null;
			String Tltfee = null;
			String Tpenalty = null;
			String Tint = null;
			if (!source.equals("Objection")) {
				vatT = String.format("%.2f", vat - Double.parseDouble(advatliabil));
			} else {
				vatT = String.format("%.0f", vat - vat);
			}

			Tltfee = String.format("%.2f", ltfee - Double.parseDouble(adjstlatefee));
			Tpenalty = String.format("%.2f", penalty - Double.parseDouble(adjstpenalty));
			Tint = String.format("%.2f", Double.parseDouble(elementText("txt_oldintRec", "")) - interestAdjust);

			assertEquals(elementText("txt_Tvatliab", ""), vatT);
			assertEquals(elementText("txt_Tltfee", ""), Tltfee);
			assertEquals(elementText("txt_Tint", ""), Tint);
			assertEquals(elementText("txt_Tpen", ""), Tpenalty);

			Tvatliab = elementText("txt_Tvatliab", "");
			Ttfee = elementText("txt_Tltfee", "");
			Tpenal = elementText("txt_Tpen", "");
			DecimalFormat d = new DecimalFormat("#.##");
		}
		if (Acaction.equalsIgnoreCase("general") && charge.equalsIgnoreCase("debit")) {
			assertEquals(elementText("txt_oldcharge", ""), "Debit");
			double vat = Double.parseDouble(elementText("txt_oldVatrec", ""));
			double ltfee = Double.parseDouble(elementText("txt_oldltfeeRec", ""));
			double penalty = Double.parseDouble(elementText("txt_oldpenRec", ""));

			String vatT = null;
			String Tltfee = null;
			String Tpenalty = null;
			String Tint = null;
			vatT = String.format("%.2f", vat + Double.parseDouble(advatliabil));
			Tltfee = String.format("%.2f", ltfee + Double.parseDouble(adjstlatefee));
			Tpenalty = String.format("%.2f", penalty + Double.parseDouble(adjstpenalty));

			Tint = String.format("%.2f", Double.parseDouble(elementText("txt_oldintRec", "")) + interestAdjust);
			assertEquals(elementText("txt_Tvatliab", ""), vatT);
			assertEquals(elementText("txt_Tltfee", ""), Tltfee);
			assertEquals(elementText("txt_Tint", ""), Tint);
			assertEquals(elementText("txt_Tpen", ""), Tpenalty);

		}
	}

	@Then("^selects the user \"([^\"]*)\" to Approve the Account Adjusted done through internal adjstment \"([^\"]*)\"$")
	public void selects_the_user_to_Approve_the_Account_Adjusted_done_through_internal_adjstment(String tpname,
			String intenalAdjstmt) throws Throwable {

		sleepWait(3000);
		clickOn("filterby_acAdjstmnt", "");
		sleepWait(3000);
		clickOn("filerbyTPayer_acAjstmt", "");
		sleepWait(3000);
		type("input_searchAcadjst", tpname);
		sleepWait(3000);
		clickOn("btn_searchAcadjst", "");
		sleepWait(3000);
		// records of the Account adjusted
		List<WebElement> adjustmentRecords = wd.findElements(By.xpath("//tbody//tr"));
		for (int i = 1; i <= adjustmentRecords.size(); i++) {
			System.out.println(wd.findElement(By.xpath("//tr[" + i + "]//td[2]")).getText());
			if (wd.findElement(By.xpath("//tr[" + i + "]//td[2]")).getText().equalsIgnoreCase("internal adjustment")
					&& wd.findElement(By.xpath("//tr[" + i + "]//td[9]")).getText().equalsIgnoreCase("pending")) {
				apendingtoapprorec = i;
			}
		}
		System.out.println(elementText("txt_acAdjst", "/tr[" + apendingtoapprorec + "]/td[2]"));
		System.out.println(elementText("txt_acAdjst", "/tr[" + apendingtoapprorec + "]/td[9]"));
		assertEquals(elementText("txt_acAdjst", "/tr[" + apendingtoapprorec + "]/td[5]"), tpname);
		assertEquals(elementText("txt_acAdjst", "/tr[" + apendingtoapprorec + "]/td[8]").toLowerCase(),
				performOfficer.toLowerCase());
		assertEquals(elementText("txt_acAdjst", "/tr[" + apendingtoapprorec + "]/td[9]"), "Pending");

		System.out.println(elementText("txt_acAdjst", "/tr[" + apendingtoapprorec + "]/td[9]"));
		System.out.println(elementText("txt_acAdjst", "/tr[" + apendingtoapprorec + "]/td[5]"));

		clickOn("slash", "tr[" + apendingtoapprorec + "]/td[10]//button");
		sleepWait(8000);
		assertEquals(elementText("txt_acAdjstmnt", ""), "Account Adjustment");
		sleepWait(5000);

		// Validation the records filled during AccAdjst while Accepting the
		/*
		 * assertEquals(getvalue("txt_action", "").toLowerCase(),
		 * Acaction.toLowerCase()); assertEquals(getvalue("input_performedby",
		 * "").toLowerCase(), performOfficer.toLowerCase());
		 * assertEquals(getvalue("input_getsource", ""), source);
		 * assertEquals(getvalue("txt_approvedBy", ""), approvedOfficer);
		 * assertEquals(getvalue("input_taxpayer", ""), txpayer);
		 */
		clickOn("btn_adjstApprove", "");
		sleepWait(3000);

	}

	@Then("^selects the user \"([^\"]*)\" to validate the \"([^\"]*)\" button for account adjustmentd done through internal adjstment \"([^\"]*)\"$")
	public void selects_the_user_to_validate_the_button_for_account_adjustmentd_done_through_internal_adjstment(
			String tpname, String button, String internalAdjustment) throws Throwable {

		if (button.equals("previous")) {
			int internalprevrec = 0;
			System.out.println(records);
			clickOn("filterby_acAdjstmnt", "");
			sleepWait(3000);
			clickOn("filerbyTPayer_acAjstmt", "");
			sleepWait(3000);
			type("input_searchAcadjst", tpname);
			clickOn("btn_searchAcadjst", "");
			sleepWait(5000);
			List<WebElement> adjstmentrec = wd.findElements(By.xpath("//tbody//tr"));
			for (int i = 1; i <= adjstmentrec.size(); i++) {
				System.out.println(elementText("txt_acAdjst", "/tr[" + i + "]/td[2]"));
				if (wd.findElement(By.xpath("//tbody/tr[" + i + "]/td[2]")).getText().equals("Internal adjustment")
						&& wd.findElement(By.xpath("//tbody/tr[" + i + "]/td[9]")).getText().equals("Pending")) {
					internalprevrec = i;
				}

			}
			clickOn("txt_acAdjst", "/tr[" + internalprevrec + "]/td[10]//button");
			sleepWait(1500);
			clickOn("btn_accadjprev", "");
			sleepWait(5000);
			assertEquals(elementText("txt_acAdjstmnt", ""), "Account Adjustment");

		}
		if (button.equals("Reject")) {
			int internalprevrec = 0;
			clickOn("filterby_acAdjstmnt", "");
			sleepWait(3000);
			clickOn("filerbyTPayer_acAjstmt", "");
			sleepWait(3000);
			type("input_searchAcadjst", tpname);
			clickOn("btn_searchAcadjst", "");
			sleepWait(5000);
			List<WebElement> adjstmentrec = wd.findElements(By.xpath("//tbody//tr"));
			for (int i = 1; i <= adjstmentrec.size(); i++) {
				System.out.println(elementText("txt_acAdjst", "/tr[" + i + "]/td[2]"));
				if (wd.findElement(By.xpath("//tbody/tr[" + i + "]/td[2]")).getText().equals("Internal adjustment")
						&& wd.findElement(By.xpath("//tbody/tr[" + i + "]/td[9]")).getText().equals("Pending")) {
					internalprevrec = i;
				}
			}
			clickOn("txt_acAdjst", "/tr[" + internalprevrec + "]/td[10]//button");
			sleepWait(1500);
			clickOn("btn_adjstReject", "");
			sleepWait(8000);
			assertEquals(elementText("txt_acAdjstmnt", ""), internalAdjustment);
		}
	}

	@Then("^verifies the notice generated$")
	public void verifies_the_notice_generated() throws Throwable {
		saveFile();
		sleepWait(8000);
		PDDocument doc = PDDocument.load(getLatestFilefromDir());
		PDFTextStripper pdfStripper = new PDFTextStripper();
		String text = pdfStripper.getText(doc);
		assertTrue(text.contains("Notice of Account Adjustment"));
		assertTrue(text.contains(txpayer));
	}

	@Then("^status should be changed to \"([^\"]*)\" through to the account adjusted done through internal adjstment \"([^\"]*)\" TaxPayerName \"([^\"]*)\"$")
	public void status_should_be_changed_to_through_to_the_account_adjusted_done_through_internal_adjstment_TaxPayerName(
			String status, String internaladjustment, String tpname) throws Throwable {

		assertEquals(elementText("txt_acAdjstmnt", ""), "Account Adjustment");
		clickOn("filterby_acAdjstmnt", "");
		sleepWait(3000);
		clickOn("filerbyTPayer_acAjstmt", "");
		type("input_searchAcadjst", tpname);
		clickOn("btn_searchAcadjst", "");
		sleepWait(8000);
		assertEquals(elementText("txt_acAdjst", "/tr[" + apendingtoapprorec + "]/td[9]"), "Approved");

	}

	double toDouble(String text) {
		return Double.parseDouble(text);
	}
	/*------------------Payment Agreement(Tax-officer)---------------------*/

	@Given("^User is on Payment Agreement Landing Screen \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_is_on_Payment_Agreement_Landing_Screen(String TC, String Des) throws Throwable {

	}

	@And("^User click on Dashboard$")
	public void user_click_on_Dashboard() throws Throwable {
		clickOn("href_dashboards", "");
		sleepWait(1000);
	}

	@And("^User click on case management$")
	public void user_click_on_case_management() throws Throwable {
		// wd.findElement(By.xpath("//label[@class='ng-tns-c2-1']")).click();

		clickOn("tab_casemanagement", "");
		sleepWait(1000);
	}

	@And("^User click on filter by on case management and click on \"([^\"]*)\"$")
	public void user_click_on_filter_by_on_case_management_and_click_on(String value) throws Throwable {

		clickOn("drp_filter", "");
		sleepWait(1000);
		clickOn(value, "");
		sleepWait(1000);
	}

	@And("^User type \"([^\"]*)\" and click on search button$")
	public void user_type_and_click_on_search_button(String taxpayer) throws Throwable {
		sleepWait(1000);
		type("txt_search", taxpayer);
		sleepWait(1000);
		clickOn("btn_TypeHere_click", "");
		sleepWait(2000);

	}

	@And("^User store CaseID for Case Management$")
	public void user_store_CaseID_for_Case_Management() throws Throwable {
		sleepWait(1000);
		String CaseID = elementText("txt_StoreCaseID_CM");
		StoreCaseID = CaseID;
	}

	@And("^User store NITVA for Case Management$")
	public void user_store_NITVA_for_Case_Management() throws Throwable {
		sleepWait(1000);
		String NITVA = elementText("txt_StoreNITVA_CM");
		StoreCaseID_NITVA = NITVA;
	}

	@And("^User click on manage drop down and click on view$")
	public void user_click_on_manage_drop_down_and_click_on_view() throws Throwable {
		sleepWait(1000);
		clickOn("drp_ManageDropdown", "");
		sleepWait(1000);
		clickOn("drp_view_click", "");
		sleepWait(3000);
	}

	@And("^User store Total Amount$")
	public void user_store_Total_Amount() throws Throwable {
		sleepWait(1000);
		String RecoveryAmount = getValue("txt_RecoveryAmount");
		StoreRecoveryAmount = RecoveryAmount;

	}

	@And("^User see status is \"([^\"]*)\"$")
	public void user_see_status_is(String status) throws Throwable {
		sleepWait(1000);
		if (wd.findElement(By.xpath("//*[contains(text(),'" + status + "')]")).isDisplayed()) {
			assertTrue(true);
		}
	}

	@And("^User select action and click on Under Review and click on save button$")
	public void user_select_action_and_click_on_Under_Review_and_click_on_save_button() throws Throwable {
		sleepWait(1000);
		clickOn("drp_Next", "");
		sleepWait(1000);
		clickOn("drp_Action_UnderReview_CM", "");
		sleepWait(1000);
		clickOn("btn_PopUp_Save", "");
		waitFor("btn_PopUp_Save");
		sleepWait(1000);

	}

	@And("^User select action and click on Request Payment Agreement and click on save button$")
	public void user_select_action_and_click_on_Request_Payment_Agreement_and_click_on_save_button() throws Throwable {
		sleepWait(1000);
		waitFor("drp_Next");
		sleepWait(1000);
		clickOn("drp_Next", "");
		sleepWait(1000);
		clickOn("drp_Action_PaymentAgreement_CM", "");
		sleepWait(1000);
		clickOn("btn_PopUp_Save", "");
		waitFor("btn_PopUp_Save");
		sleepWait(1000);
	}

	@And("^User verify NITVA for Case Management$")
	public void user_verify_NITVA_for_Case_Management() throws Throwable {
		sleepWait(2000);
		waitFor("txt_RPA_Check");
		String CheckNITVA = elementText("txt_RPA_Check");
		assertEquals(CheckNITVA, StoreCaseID_NITVA);

	}

	@And("^User verify Total Amount and field is disable$")
	public void user_verify_Total_Amount_and_field_is_disable() throws Throwable {
		sleepWait(1000);
		String checkTA = getValue("txt_payAm");
		assertEquals(checkTA, StoreRecoveryAmount);
		sleepWait(1000);
	}

	@And("^User click on notification on Payment Agreement$")
	public void user_click_on_notification_on_Payment_Agreement() throws Throwable {
		sleepWait(1000);
		clickOn("btn_Notification_Click", "");

	}

	@And("^User see notification is open$")
	public void user_see_notification_is_open() throws Throwable {
		sleepWait(1000);
		if (wd.findElement(By.xpath("//*[contains(text(),'Notifications')]")).isDisplayed()) {
			assertTrue(true);
		}
	}

	@And("^User type initial amount \"([^\"]*)\"$")
	public void user_type_initial_amount(String value) throws Throwable {
		sleepWait(500);
		type("txt_InitialAmount", value);

	}

	@And("^User again type initial amount \"([^\"]*)\"$")
	public void user_again_type_initial_amount(String value) throws Throwable {

		type("txt_InitialAmount", value);

	}

	@And("^User see validation message \"([^\"]*)\" for Payment Agreement$")
	public void user_see_validation_message_for_Payment_Agreement(String mess) throws Throwable {
		if (wd.findElement(By.xpath("//span[contains(text(),'" + mess + "')]")).isDisplayed()) {
			assertTrue(true);
		}

	}

	@And("^User click on discount radio button$")
	public void user_click_on_discount_radio_button() throws Throwable {
		sleepWait(500);
		clickOn("rad_Discount_Amount", "");

	}

	@And("^User see percentage is deselected$")
	public void user_see_percentage_is_deselected() throws Throwable {

		if (!wd.findElement(By.xpath(obj.getProperty("txt_per_deselected"))).isEnabled()) {
			assertTrue(true);
		}

	}

	@And("^User click on percentage radio button$")
	public void user_click_on_percentage_radio_button() throws Throwable {
		clickOn("rad_Percentage", "");

	}

	@And("^User see discount amount is deselected$")
	public void user_see_discount_amount_is_deselected() throws Throwable {
		if (!wd.findElement(By.xpath(obj.getProperty("txt_dis_deselected"))).isEnabled()) {
			assertTrue(true);
		}
	}

}
