package org.drc.vat.StepDefinitions;

import static org.drc.vat.appmanager.HelperBase.*;
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
import java.util.concurrent.TimeUnit;

import org.drc.vat.appmanager.*;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.BrowserType;
import org.drc.vat.appmanager.*;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class VatRegistration {
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

	@Given("^Establish a connection and enter \"([^\"]*)\" in registration table$")
	public void establish_a_connection_and_enter_in_registration_table(String User) throws Throwable {
		ConnectDatabase CD = new ConnectDatabase();
		CD.opendb();
		String user = "DECLARE @i int = (select count(*)+1 from [1AuthoritySTS].dbo.aspnetusers where email like 'ATUSER%')"
				+ "declare @a int;" + "set @a= @i " + "WHILE @a <=  @i+2" + "BEGIN   "
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
				+ "         ,CONCAT('atuser',@a,'@mt2015.com')              "
				+ "         ,1                                                  "
				+ "         ,0                                                  "
				+ "         ,NULL                                               "
				+ "         ,CONCAT('ATUSER',@a,'@MAILINATOR.COM')              "
				+ "         ,CONCAT('ATUSER',@a,'@MAILINATOR.COM')              "
				+ "         ,'AQAAAAEAACcQAAAAEM/wSgVN/nG79PYxp2X4xCzrtdQcsTEYE911sxUm9sniuJtbzybplBD6TYP+BnxhDg=='  "
				+ "         ,'+919999999999'                                                                         "
				+ "         ,1                                                                                       "
				+ "          , NEWID()                                                                               "
				+ "          ,0                                                                                      "
				+ "          ,'TaxPortal'                                                                            "
				+ "          ,CONCAT('ATUSER',@a,'@MAILINATOR.COM')                                                  "
				+ "          ,CURRENT_TIMESTAMP                                                                      "
				+ "          ,CONCAT('ATUSER',@a))                                                                   "
				+ "	SET @a = @a +1;                                                                               "
				+ " END ";

		CD.sta.executeUpdate(user);
		System.out.println("1");
	}

	@When("^Update data in aspnetusers table$")
	public void update_data_in_aspnetusers_table() throws Throwable {

		ConnectDatabase CD = new ConnectDatabase();
		CD.opendb();

		String Reguser = "DECLARE @i int = (select count(*)-2 from [1AuthoritySTS].dbo.aspnetusers where email like 'ATUSER%')"
				+ "declare  @emailvalue Nvarchar(500) " + "declare @a int;" + "set @a= @i	" + "WHILE @a <=  @i+2"
				+ "BEGIN                                                                  "
				+ "Set @emailvalue = (select ID from  [1AuthoritySTS].[dbo].[AspNetUsers] "
				+ "where Email = CONCAT('ATUSER',@a,'@mt2015.com'))               "
				+ "insert into [DRC-QA].[Ref].[RegisteredUsers] values                             "
				+ "  (@emailvalue                                                          "
				+ "  ,1                                                                   "
				+ "  ,Concat ('atuser',@a)                                               "
				+ "  ,CONCAT('ATUSER',@a,'@mt2015.com')                              "
				+ "  ,CURRENT_TIMESTAMP                                                   "
				+ "  ,NULL                                                                "
				+ "  ,CURRENT_TIMESTAMP                                                   "
				+ "  ,NUll                                                                "
				+ "  ,null                                                                "
				+ "  )                                                                    "
				+ "Set @a=@a+1;                                                           " + "End";

		CD.sta.executeUpdate(Reguser);
		System.out.println("test");
	}

	@When("^Disply successfull insertion message\\.$")
	public void disply_successfull_insertion_message() throws Throwable {

	}

	@Given("^User is on VAT Registration Dashboard$")
	public void user_is_on_VAT_Registration_Dashboard() throws Throwable {
		/*
		 * for(int i=0;i<5;i++) { String Firstname = "bindi0"; String Lastname
		 * ="@mt2015.com"; String UName =
		 * Firstname.concat(Integer.toString(i)).concat(Lastname); }
		 * type("txtbox_username","demouser02@mt2015.com"); sleepWait(2000);
		 * type("txtbox_password","admin@123"); sleepWait(2000);
		 * clickOn("btn_login","");
		 */
	}

	@When("^User clicks on VAT Getting Started Guide CheckBox$")
	public void user_clicks_on_VAT_Getting_Started_Guide_CheckBox() throws Throwable {
		// clickOn("tab_VAT","");
		// sleepWait(2000);
		// clickOn("btn_sure","");
		sleepWait(2000);
		clickOn("chkbox_guide", "");
		sleepWait(3000);
	}

	@When("^User Click on SignIn for new user$")
	public void user_Click_on_SignIn_for_new_user() throws Throwable {
		clickOn("btn_login", "");
		sleepWait(2000);
		clickOn("tile_vat", "");
		sleepWait(1000);

	}

	@When("^Clicks on Register for Vat button$")
	public void clicks_on_Register_for_Vat_button() throws Throwable {
		// clickOn("chkbox_guide","");
		// sleepWait(1000);
		sleepWait(2000);
		clickOn("btn_registerforvat", "");
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
		type("txtbox_NIF", times.concat(NIF));
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
		JavascriptExecutor js = (JavascriptExecutor) wd;        
		WebElement Element = wd.findElement(By.xpath("//button[@title='Continue']"));
		js.executeScript("arguments[0].scrollIntoView();", Element);		
		clickOn("drp_compsize", "");
		clickOn("span", "[contains(text(),'" + CompanySize + "')]");
		clickOn("dt_bstartdate", "");
		sleepWait(2000);
		datePicker(BStartDate);
		// type("txtbox_lrevenue",LRevenue);
	}

	@Then("^Enters Address Details \"([^\"]*)\" , \"([^\"]*)\" , \"([^\"]*)\" ,\"([^\"]*)\" ,\"([^\"]*)\",\"([^\"]*)\"$")
	public void enters_Address_Details(String Address1, String Address2, String Province, String City, String ZipCode,
			String MobileNumber) throws Throwable {

		type("txtbox_add1", Address1);
		sleepWait(2000);
		type("txtbox_add2", Address2);
		clickOn("province", "");
		clickOn("span", "[contains(text(),'" + Province + "')]");
		sleepWait(2000);
		WebElement we;
		we = wd.findElement(By.xpath("(//*[@formcontrolname='cityId'])[1]"));
		if (we.isEnabled()) {
			clickOn("city", "");
			sleepWait(2000);
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

		type("txtbox_buspromadd2", BAddress2);
		clickOn("buspromprovince", "");
		sleepWait(2000);

		clickOn("drpdown_panel", "[contains(text(),'" + BProvince + "')]");
		sleepWait(2000);
		WebElement we;
		we = wd.findElement(By.xpath("(//*[@formcontrolname='cityId'])[2]"));
		if (we.isEnabled()) {
			clickOn("buspromcity", "");
			sleepWait(1000);
			clickOn("drpdown_panel", "[contains(text(),'" + BCity + "')]");
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
		// clickOn("btn_savedraft","");
		// String toast = toastMessage();
		// System.out.println(toast);
	}

	@Then("^Clicks on VAT Registration Page Continue Button$")
	public void clicks_on_VAT_Registration_Page_Continue_Button() throws Throwable {
		clickOn("btn_regcontinue", "");

	}

	@Then("^Enters Bank Details with Account Number \"([^\"]*)\" , Account Holder Name \"([^\"]*)\" ,Bank Name \"([^\"]*)\" ,Branch \"([^\"]*)\"$")
	public void enters_Bank_Details_with_Account_Number_Account_Holder_Name_Bank_Name_Branch(String AccountNumber, String AccountHolderName, String BankName, String BranchName) throws Throwable {

		sleepWait(2000);
		type("acct_no", AccountNumber);
		sleepWait(1000);
		type("acct_holder_name", AccountHolderName);
		clickOn("bank_name", "");
		sleepWait(1000);
		clickOn("span", "[contains(text(),'" + BankName + "')]");
		sleepWait(1000);
		clickOn("branch_name", "");
		sleepWait(1000);
		clickOn("span", "[contains(text(),'" + BranchName + "')]");
		
		/*sleepWait(2000);
		// System.out.println(acct + name + bank + branch);
		type("acct_no", AccountNumber);
		sleepWait(1000);
		type("acct_holder_name", AccountHolderName);
		sleepWait(2000);
		clickOn("bank_name", "");
		sleepWait(2000);
		clickOn("span", "[contains(text(),'" + BankName + "')]");		
		sleepWait(2000);
		clickOn("branch_name", "");
		sleepWait(2000);
		clickOn("span", "[contains(text(),'" + BranchName + "')]");		
		sleepWait(1000);
		clickOn("btn_continue", "");
		sleepWait(3000);*/
	}

	@Then("^Clicks on Bank details Continue Button$")
	public void clicks_on_Bank_details_Continue_Button() throws Throwable {
		clickOn("btn_bankcontinue", "");
	}

	@Then("^select Address Proof of Registered Place of Business for \"([^\"]*)\" , \"([^\"]*)\"$")
	public void select_Address_Proof_of_Registered_Place_of_Business_for(String Document1, String status1)
			throws Throwable {

		clickOn("drp_addressproof", "");
		Thread.sleep(2000);
		clickOn("span", "[contains(text(),'" + Document1 + "')]");
		// String Imagepath1 = cwd.concat("\\").concat(status1);
		// System.out.println(Imagepath1);
		clickOn("upload_file1", "");
		UploadImage("", status1);

	}

	@Then("^select Bank Account Proof for \"([^\"]*)\" , \"([^\"]*)\"$")
	public void select_Bank_Account_Proof_for(String Document2, String status2) throws Throwable {

		clickOn("dropdown_1", "");
		clickOn("span","[contains(text(),' " + Document2 + "') and contains(@class,'ng-option-label ng-star-inserted')]");
		// String Imagepath2 = cwd.concat("\\").concat(status2);
		clickOn("file1_upload", "");
		UploadImage("", status2);		
	}

	@Then("^Select Certificate of Incorporation for \"([^\"]*)\" , \"([^\"]*)\"$")
	public void select_Certificate_of_Incorporation_for(String Document3, String status3) throws Throwable {
		clickOn("dropdown_2", "");
		sleepWait(1000);
		clickOn("span", "[contains(text(),'" + Document3 + "') and contains(@class,'ng-option-label ng-star-inserted')]");
		// String Imagepath3 = cwd.concat("\\").concat(status3);
		clickOn("file2_upload", "");
		UploadImage("", status3);
	}

	@Then("^select Law or Degree of Establishment for \"([^\"]*)\" , \"([^\"]*)\"$")
	public void select_Law_or_Degree_of_Establishment_for(String Document4, String status4) throws Throwable {

		clickOn("dropdown_3", "");
		clickOn("span", "[contains(text(),'" + Document4 + "') and contains(@class,'ng-option-label ng-star-inserted')]");		
		clickOn("file1_upload", "");
		UploadImage("", status4);		
	}

	@Then("^select Letter of Authorization/Board Resolution for Authorized Signatory – Download Template for \"([^\"]*)\" , \"([^\"]*)\"$")
	public void select_Letter_of_Authorization_Board_Resolution_for_Authorized_Signatory_Download_Template_for(
			String Document5, String status5) throws Throwable {
		clickOn("dropdown_4", "");
		clickOn("span", "[contains(text(),'" + Document5 + "') and contains(@class,'ng-option-label ng-star-inserted')]");
		// String Imagepath5 = cwd.concat("\\").concat(status5);
		clickOn("file4_upload", "");
		UploadImage("", status5);
	}

	@Then("^select Proof of Last Year Revenue for \"([^\"]*)\" , \"([^\"]*)\"$")
	public void select_Proof_of_Last_Year_Revenue_for(String Document6, String status6) throws Throwable {
		clickOn("dropdown_5", "");
		clickOn("span", "[contains(text(),'" + Document6 + "') and contains(@class,'ng-option-label ng-star-inserted')]");		
		clickOn("file5_upload", "");
		UploadImage("", status6);
	}

	@Then("^Clicks on document required Continue Button$")
	public void clicks_on_document_required_Continue_Button() throws Throwable {
		sleepWait(2000);
		clickOn("btn_reqdoccontinue", "");
	}

	@Then("^clicks on Acknowledgement checkbox and continue button$")
	public void clicks_on_Acknowledgement_checkbox_and_continue_button() throws Throwable {
		sleepWait(5000);
		JavascriptExecutor js = (JavascriptExecutor) wd;
		js.executeScript("window.scrollTo(0, document.body.scrollHeight)");
		sleepWait(2000);
		clickOn("chkbox_agree", "");
		sleepWait(2000);
		clickOn("btn_fsubmit", "");
		sleepWait(7000);
	}

	@Then("^click on Ok button on alert page$")
	public void click_on_Ok_button_on_alert_page() throws Throwable {
		// Alert alert = wd.switchTo().alert();
		// alert.accept();
		sleepWait(3000);
		clickOn("btn_ok", "");
		sleepWait(7000);
	}

	@Then("^Click on Logout on Dashboard$")
	public void click_on_Logout_on_Dashboard() throws Throwable {
		logout();

		wd.close();
		Thread.sleep(1000);
		wd = new ChromeDriver();
		wd.manage().window().maximize();
		wd.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		wd.get("http://103.249.120.58:8042");
		Thread.sleep(1000);
		
		// clickOn("btn_logout","");
	}

	@Then("^User login in Internal portal$")
	public void user_login_in_Internal_portal() throws Throwable {

		clickOn("tab_VAT", "");
		Set<String> handles = wd.getWindowHandles();
		String currentHandle = wd.getWindowHandle();
		sleepWait(3000);
		for (String handle : handles) {

			if (!handle.equals(currentHandle)) {
				wd.switchTo().window(handle);
			}
		}

	}
 
	@Then("^click on Manage Vat Registartion$")
	public void click_on_Manage_Vat_Registartion() throws Throwable {
		clickOn("tab_manageregistartion", "");
		sleepWait(2000);
	}

	@Then("^select \"([^\"]*)\" option and \"([^\"]*)\"$")
	public void select_option_and(String Filter, String Searchelement) throws Throwable {
		clickOn("drp_FilterByMVT", "");
		sleepWait(500);
		clickOn("span", "[contains(text(),'" + Filter + "')]");
		type("txt_search", Searchelement);
		
	}

	@Then("^clicks on manage button and select \"([^\"]*)\"$")
	public void clicks_on_manage_button_and_select(String Manage) throws Throwable {
		clickOn("drp_manage", "");
		sleepWait(2000);
		// admin
		// 103.249.120.58:8068
		// ketan.prajapati
		clickOn("drp_review", "");
	}

	@Then("^Redirect to confirmation page and click on \"([^\"]*)\"$")
	public void redirect_to_confirmation_page_and_click_on(String Deoption) throws Throwable {

		if (Deoption.equalsIgnoreCase("Approve")) {
			clickOn("btn_approved", "");
			sleepWait(2000);

		}

	}

	@Then("^Clicks on Close Button$")
	public void clicks_on_Close_Button() throws Throwable {
		sleepWait(2000);
		clickOn("btn_closed", "");
	}

	@Then("^clicks on logout in internal portal$")
	public void clicks_on_logout_in_internal_portal() throws Throwable {
		logout();
	}

	@Given("^User is on Tax Payer Portal$")
	public void user_is_on_Tax_Payer_Portal() throws Throwable {
		type("txtbox_username", "automation12@patonce.com");
		sleepWait(2000);
		type("txtbox_password", "admin@123");
		sleepWait(2000);
		clickOn("btn_login", "");
		sleepWait(4000);
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
		String sql = "declare @month int" + "set @month =1" + "insert into vat.VfVateFile"
				+ "(VuUserId,FinancialYear,FinancialMonth,PaymentDueDate,TotalAmount,DueAmount,VfDueDate,CreatedDate)"
				+ "values ((select VuUserId from Vat.VuUsers"
				+ "where RegisteredUserId in (select RegisteredUserId from ref.RegisteredUsers"
				+ "where Email='bindi1005@mt2015.com')),(select YEAR(GETDATE())),@month,"
				+ "(select DATEADD(mm,@month,'2018/01/20')),0.00,0.00,"
				+ "(select DATEADD(mm,@month,'2018/01/15')),GETDATE())";

		CD.sta.executeUpdate(sql);

		String Sql1 = "declare @FY int" + "set @FY=1" + "insert into vat.VfVateFileActivity"
				+ "(VfVateFileId,VfActivityId,VfStatusId,CreatedDate)" + "values"
				+ "((select VfVateFileId from vat.VfVateFile where FinancialMonth=@FY and VuUserId in (select VuUserId from Vat.VuUsers"
				+ "where RegisteredUserId in (select RegisteredUserId from ref.RegisteredUsers"
				+ "where Email='bindi1005@mt2015.com'))),1,2,getdate()),"
				+ "((select VfVateFileId from vat.VfVateFile where FinancialMonth=@FY and VuUserId in (select VuUserId from Vat.VuUsers"
				+ "where RegisteredUserId in (select RegisteredUserId from ref.RegisteredUsers"
				+ "where Email='bindi1005@mt2015.com'))),2,2,getdate()),"
				+ "((select VfVateFileId from vat.VfVateFile where FinancialMonth=@FY and VuUserId in (select VuUserId from Vat.VuUsers"
				+ "where RegisteredUserId in (select RegisteredUserId from ref.RegisteredUsers"
				+ "where Email='bindi1005@mt2015.com'))),3,2,getdate())";

		CD.sta.executeUpdate(Sql1);

	}

	@Then("^clicks on Vat E-filling option on left panel$")
	public void clicks_on_Vat_E_filling_option_on_left_panel() throws Throwable {
		sleepWait(3000);
		clickOn("tab_vatefiling", "");
	}

	/*
	 * @Then("^clicks on e-filing to fill data$") public void
	 * clicks_on_e_filing_to_fill_data() throws Throwable {
	 * 
	 * for(int i =1;i<=12;i++) { String first_part =
	 * "(//div[@class='list-item-th text-left'])["; String second_part ="]";
	 * 
	 * String month = first_part+i+second_part;
	 * wd.findElement(By.xpath(month)).click(); sleepWait(2000);
	 * 
	 * String first_preview ="(//button[text()='Preview'])["; String
	 * second_preview="]";
	 * 
	 * String preview = first_preview+i+second_preview; sleepWait(2000);
	 * //wd.findElement(By.xpath("//button[text()='Preview']")).isDisplayed();
	 * Boolean B; try{ B =(wd.findElement(By.xpath(preview)).isDisplayed());
	 * }catch(NoSuchElementException ex){ B= false; } sleepWait(2000); if(B) //if
	 * (wd.findElement(By.xpath("//button[text()='Preview']")).isDisplayed()) {
	 * //return; continue; } else { clickOn("btn_file",""); break; } }
	 * 
	 * // clickOn("label_month",""); sleepWait(2000); // clickOn("btn_file",""); //
	 * sleepWait(2000); }
	 */

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

	/*
	 * @Then("^calculate tax calculations and enter \"([^\"]*)\"$") public void
	 * calculate_tax_calculations_and_enter(String VAT3Party) throws Throwable {
	 * type("txtbox_VFTPATAMT",VAT3Party);
	 * 
	 * NetVAT = Total_VC - TotalD + VRC -SDC -VDC -PCC-FPPS; Total_NetVAT =
	 * getValue("label_NetVAT"); sleepWait(2000); Total_VATcredit =
	 * getValue("label_VATcredit1"); Total_Refund = getValue("label_Refund");
	 * Total_Forward = getValue("label_Forward"); Total_Procurement =
	 * getValue("label_Peocurement"); Total_Pay=getValue("label_Payamount"); if
	 * (NetVAT > 0) { if (NetVAT==Float.parseFloat(Total_NetVAT)) {
	 * System.out.println("pass"); } } else {
	 * if(NetVAT==Float.parseFloat(Total_VATcredit)) { System.out.println("pass"); }
	 * } // Float a = Float.parseFloat("Total_VATcredit");
	 * if(Float.parseFloat(Total_VATcredit) < 0) { Float TotalForward =
	 * (Float.parseFloat(Total_VATcredit)) -
	 * (Float.parseFloat(Total_Refund))-(Float.parseFloat(Total_Procurement))-(Float
	 * .parseFloat(VAT3Party));
	 * 
	 * if (TotalForward==Float.parseFloat(Total_Forward)) {
	 * System.out.println("pass"); } } else {
	 * 
	 * if(Float.parseFloat(Total_Forward)==0) { System.out.println("pass"); }
	 * 
	 * }
	 * 
	 * if (Float.parseFloat(Total_Procurement)==FPPS) { System.out.println("pass");
	 * }
	 * 
	 * Float TotalPay = Float.parseFloat(Total_NetVAT)
	 * -Float.parseFloat(Total_VATcredit)+ Float.parseFloat(Total_Refund)+
	 * Float.parseFloat(Total_Procurement)+Float.parseFloat(VAT3Party); if
	 * (TotalPay==Float.parseFloat(Total_Pay)) { System.out.println("Pass"); } }
	 */

	@Then("^Upload Efile schedule \"([^\"]*)\"$")
	public void upload_Efile_schedule(String file) throws Throwable {
		// clickOn("btn_savedraft","");
		sleepWait(2000);
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
		clickOn("span", "[contains(text(),'" + Authorized + "')]");

		// clickOn("btn_esubmit","");
	}

	@Then("^clicks on submit button on E-filling page$")
	public void clicks_on_submit_button_on_E_filling_page() throws Throwable {
		clickOn("btn_esubmit", "");
		sleepWait(4000);
	}
	/*
	 * @Then("^Enter OTP and click on verify button and click on Ok button$") public
	 * void enter_OTP_and_click_on_verify_button_and_click_on_Ok_button() throws
	 * Throwable {
	 * 
	 * Read_OTP otp = new Read_OTP(); String OTP = otp.ReadOTP();
	 * wd.findElement(By.xpath("//*[@placeholder='Enter your OTP']")).sendKeys(OTP);
	 * wd.findElement(By.xpath("//*[text()='Verify']")).click();
	 * wd.findElement(By.xpath("//[@title='OK']")).click();
	 * 
	 * }
	 */

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
	}

	/*
	 * @Then("^cliccks on \"([^\"]*)\" and verify details$") public void
	 * cliccks_on_and_verify_details(String Paymentoption) throws Throwable {
	 * 
	 * if(Paymentoption.equalsIgnoreCase("Over the Counter")) {
	 * clickOn("chkbox_over",""); } else { clickOn("chkbox_netbanking",""); }
	 * 
	 * }
	 */

	/*
	 * @Then("^Execute query for payment$") public void execute_query_for_payment()
	 * throws Throwable {
	 * 
	 * 
	 * }
	 */
	@Given("^User login with tax-offcer's credentials$")
	public void user_login_with_tax_offcer_s_credentials() throws Throwable {
		sleepWait(5000);
		clickOn("tab_VAT", "");
		sleepWait(3000);
		// clickOn("btn_sure","");
		// sleepWait(2000);
		Set<String> handles = wd.getWindowHandles();
		String currentHandle = wd.getWindowHandle();
		sleepWait(3000);
		for (String handle : handles) {

			if (!handle.equals(currentHandle)) {
				wd.switchTo().window(handle);
			}
		}

	}

	@When("^click on \"([^\"]*)\" option$")
	public void click_on_option(String As) throws Throwable {
		clickOn("tab_assessment", "");
		sleepWait(3000);
		clickOn("tab_manualassessment", "");
		sleepWait(2000);

	}

	@When("^Tax-officer search for the records using \"([^\"]*)\" , \"([^\"]*)\" ,\"([^\"]*)\"$")
	public void tax_officer_search_for_the_records_using(String month, String year, String filter) throws Throwable {
		clickOn("drp_dwn_period", "");
		clickOn("span", "[contains(text(),'" + month + "')]");
		// clickOn("drp_dwn_year","");
		// clickOn("span","[contains(text(),'" + year +"')]");
		clickOn("drp_dwn_filter", "");
		clickOn("span", "[contains(text(),'" + filter + "')]");

	}

	@When("^serach for the records \"([^\"]*)\" and click on search button$")
	public void serach_for_the_records_and_click_on_search_button(String searchElement) throws Throwable {
		clickOn("txt_search", "");
		type("txt_search", searchElement);

	}

	@When("^click on the \"([^\"]*)\" option$")
	public void click_on_the_option(String filter) throws Throwable {
		// clickOn("","");
		clickOn("span", "[contains(text(),'" + filter + "')]");

	}

	@When("^Verify the details of e-filing operation performed$")
	public void verify_the_details_of_e_filing_operation_performed() throws Throwable {
		// VAT_Collected_DG

		String DGoods = getValue("label_DG");

		if (Float.parseFloat(DG) == Float.parseFloat(DGoods)) {
			System.out.println("pass");
		}

		String DServiceTR = getValue("lable_DSTT");
		String DServiceTT = getValue("lable_DSTR");
		String Export = getValue("label_Export");
		String Exempt = getValue("label_exempt");
		String Nontax = getValue("label_nontax");
		String DGVat = getValue("");
		String DSVat = getValue("");
		String DTR = getValue("");
		String DTT = getValue("");
		String DVC = getValue("");
		String DGIV = getValue("");
		String DSI = getValue("");
		String DSIV = getValue("");
		String OR = getValue("");
		String ORV = getValue("");
		String Total_FC = getValue("");
		String Total_VFC = getValue("");
		String Total_DFC = getValue("");
		String OP_Diff = getValue("label_D");
		String Asset1 = getValue("");
		String Asset2 = getValue("");
		String Asset3 = getValue("");
		String good1 = getValue("");
		String good2 = getValue("");
		String good3 = getValue("");
		String raw1 = getValue("");
		String raw2 = getValue("");
		String raw3 = getValue("");
		String othet1 = getValue("");
		String other2 = getValue("");
		String other3 = getValue("");
		String reportforward = getValue("");
		String amountded = getValue("");

		/*
		 * if(Float.parseFloat(DS)==Float.parseFloat(VAT_Collected_DS)) {
		 * 
		 * }
		 * 
		 * // String Export = getValue("");
		 */

	}

	@When("^Verify the detailds of Tax-deductible$")
	public void verify_the_detailds_of_Tax_deductible() throws Throwable {

	}

	@When("^Verify the details of Adjustmnet$")
	public void verify_the_details_of_Adjustmnet() throws Throwable {

		// String adj
	}

	@When("^Verify the details of Assessment Summary$")
	public void verify_the_details_of_Assessment_Summary() throws Throwable {

	}

	@When("^verify the details of Payment summary$")
	public void verify_the_details_of_Payment_summary() throws Throwable {

	}

	/*
	 * @Given("^Tax-officer is on given Page \"([^\"]*)\"$") public void
	 * tax_officer_is_on_given_Page(String Page) throws Throwable {
	 * 
	 * clickOn("tab_assessment", ""); sleepWait(2000);
	 * 
	 * }
	 * 
	 * @When("^Tax-officer Select \"([^\"]*)\" , \"([^\"]*)\" , \"([^\"]*)\"from drop-down$"
	 * ) public void tax_officer_Select_from_drop_down(String Period, String Year,
	 * String Filter) throws Throwable {
	 * 
	 * clickOn("drp_dwn_period",""); clickOn("span","[contains(text(),'" + Period
	 * +"')]"); // clickOn("drp_dwn_year",""); //
	 * clickOn("span","[contains(text(),'" + Year +"')]");
	 * clickOn("drp_dwn_filter",""); clickOn("span","[contains(text(),'" + Filter
	 * +"')]"); }
	 * 
	 * @When("^Tax-officer Search for  Record from \"([^\"]*)\"$") public void
	 * tax_officer_Search_for_Record_from(String SearchElement) throws Throwable {
	 * 
	 * clickOn("txt_search",""); type("txt_search",SearchElement); }
	 * 
	 * @When("^Clicks on Search Button$") public void clicks_on_Search_Button()
	 * throws Throwable {
	 * 
	 * clickOn("btn_search",""); }
	 * 
	 * @When("^Clicks For the status from \"([^\"]*)\"$") public void
	 * clicks_For_the_status_from(String status) throws Throwable { String Status =
	 * elementText("text_status"); // System.out.println(Status);
	 * 
	 * if(status.equals(Status)) { System.out.println("Pass"); }
	 * 
	 * }
	 * 
	 * @When("^Clicks on drp_select button$") public void
	 * clicks_on_drp_select_button() throws Throwable {
	 * 
	 * sleepWait(2000);
	 * 
	 * String Nitva =elementText("text_nitva"); System.out.println(Nitva);
	 * clickOn("drp_option",""); }
	 * 
	 * @When("^Clicks on  given \"([^\"]*)\"$") public void clicks_on_given(String
	 * Option) throws Throwable {
	 * 
	 * clickOn("span","[contains(text(),'" + Option +"')]");
	 * 
	 * }
	 * 
	 * @When("^Clicks on sales_domestic icon , redirect to sales page and click on previous button$"
	 * ) public void
	 * clicks_on_sales_domestic_icon_redirect_to_sales_page_and_click_on_previous_button
	 * () throws Throwable {
	 * 
	 * sleepWait(2000); String Value = elementText("text_domestic");
	 * if(Value.equals("Domestic Sales")) { System.out.println("Pass"); } }
	 * 
	 * @When("^Clicks on sales_export icon , redirect to sales page and click on previous button$"
	 * ) public void
	 * clicks_on_sales_export_icon_redirect_to_sales_page_and_click_on_previous_button
	 * () throws Throwable {
	 * 
	 * sleepWait(2000); String Value = elementText("text_domestic");
	 * if(Value.equals("Export Sales")) { System.out.println("Pass"); }
	 * 
	 * }
	 * 
	 * @When("^Clicks on sales_adjustment icon , redirect to sales page and click on previous button$"
	 * ) public void
	 * clicks_on_sales_adjustment_icon_redirect_to_sales_page_and_click_on_previous_button
	 * () throws Throwable {
	 * 
	 * 
	 * }
	 * 
	 * @When("^Clicks on purchase_domestic icon , redirect to sales page and click on previous button$"
	 * ) public void
	 * clicks_on_purchase_domestic_icon_redirect_to_sales_page_and_click_on_previous_button
	 * () throws Throwable {
	 * 
	 * 
	 * }
	 * 
	 * @When("^Clicks on purchase_export icon , redirect to sales page and click on previous button$"
	 * ) public void
	 * clicks_on_purchase_export_icon_redirect_to_sales_page_and_click_on_previous_button
	 * () throws Throwable {
	 * 
	 * 
	 * }
	 * 
	 * @When("^Clicks on purchase_adjustment icon , redirect to sales page and click on previous button$"
	 * ) public void
	 * clicks_on_purchase_adjustment_icon_redirect_to_sales_page_and_click_on_previous_button
	 * () throws Throwable {
	 * 
	 * 
	 * }
	 */

}
