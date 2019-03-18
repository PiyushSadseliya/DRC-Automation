package org.drc.vat.StepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import static org.drc.vat.appmanager.HelperBase.clickOn;
import static org.drc.vat.appmanager.HelperBase.elementText;
import static org.drc.vat.appmanager.HelperBase.getLatestFilefromDir;
import static org.drc.vat.appmanager.HelperBase.type;
import static org.drc.vat.appmanager.HelperBase.getvalue;
import static org.drc.vat.appmanager.HelperBase.saveFile;
import static org.drc.vat.appmanager.HelperBase.type;
import static org.drc.vat.appmanager.HelperBase.buttonEnabled;
import static org.drc.vat.appmanager.HelperBase.validationMessage;
import static org.drc.vat.appmanager.HelperBase.datePicker;
import static org.drc.vat.appmanager.HelperBase.getvalue;
import static org.drc.vat.appmanager.HelperBase.drp_select;
import static org.testng.Assert.assertEquals;
import static org.drc.vat.appmanager.HelperBase.buttonEnabled;
import static org.drc.vat.appmanager.HelperBase.sleepWait;
import java.text.DecimalFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.concurrent.TimeUnit;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import static org.drc.vat.appmanager.HelperBase.wd;
import static org.junit.Assert.assertTrue;

/*
 * 
 * To Perform Account Adjustment through :
 *  1.TaxPayerProfile for Records  Assessment & Re-Assessment
 *  2.Objection and Appeal for objection raised by taxpayer for Assessment and ReAssessment & 
 *  3.Debt Management- To Perform Adjustment of the records from Debt 
 * 
 * 
 */
public class AccountAdjustmentStmtofTransac {
	String Acaction = null;
	static int records = 1;
	String createdDaterec = null;
	String performOfficer = null;
	String approvedOfficer = null;
	String txpayer = null;
	String nitvano = null;
	String createdDate = null;
	String source = null;
	String reason = null;
	String comment = null;

	String olddate = null;
	String oldperiod = null;
	String oldpartic = null;
	String ovatliab = null;
	String oltfee = null;
	String oint = null;
	String openal = null;

	String adjperiod = null;
	String adjcharge = null;
	String adjvatliab = null;
	String adjltfee = null;
	String adjpenal = null;
	String cdate = null;

	String Tvatliab = null;
	String Ttfee = null;
	String Tpenal = null;

	// Objection and Appeal
	String CaseMObjectionid = null;
	String assessmentId = null;
	String CaseDebtId=null;
	int apendingtoapprorec=0;


	@Given("^\"([^\"]*)\"\"([^\"]*)\"The officer has logged in with Uname\"([^\"]*)\"Password\"([^\"]*)\"$")
	public void the_officer_has_logged_in_with_Uname_Password(String TestCaseId, String Description, String username, String password)
			throws Throwable {

	}

	@When("^clicks on Account adjustment from TaxPayer Profile of user with taxpayer\"([^\"]*)\"$")
	public void clicks_on_Account_adjustment_from_TaxPayer_Profile_of_user_with_taxpayer(String taxpayer ) throws InterruptedException {
		sleepWait(3000);
		clickOn("nav_tpprofile", "");
		sleepWait(8000);
		assertEquals(elementText("page_tpprofile", ""), "Taxpayer Details");
		clickOn("filterby_tpprofile", "");
		sleepWait(3000);
		clickOn("span", "[contains(text(),'TaxPayer')]");
		type("input_search_tpprofile", taxpayer);
		clickOn("btn_searchtprofile", "");
		clickOn("btn_viewtpprofile", "");
		sleepWait(5000);
		assertEquals(elementText("slash", "h4"), taxpayer);
		clickOn("btn_stmttrans", "");
		clickOn("btn_accAdjstmt", "");

	}

	@Then("^user is on account adustment page$")
	public void user_is_on_account_adustment_page() throws InterruptedException {
		sleepWait(5000);
		assertEquals(elementText("txt_acadjstmnt", ""), "Account Adjustment");
	}

	@Then("^selects action\"([^\"]*)\"$")
	public void selects_action(String action) throws InterruptedException {
		sleepWait(2000);
		clickOn("drpdwn_action", "");
		sleepWait(3000);	
		Acaction = action;
		clickOn("span", "[contains(@class,'ng-option') and contains(text(),'"+Acaction+"')]");
	}

	@Then("^validates created date Performed By\"([^\"]*)\"Source\"([^\"]*)\" and Source Id must be blank TaxPayer\"([^\"]*)\"$")
	public void validates_created_date_Performed_By_Source_and_Source_Id_must_be_blank_TaxPayer(String user, String src,String tpayer) {
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
		source = src;
		assertEquals(getvalue("input_sourceid", ""), "");
		assertEquals(getvalue("input_taxpayer", ""), tpayer);
		txpayer = tpayer;

	}

	@Then("^selects the Aprroved by officer\"([^\"]*)\"$")
	public void selects_the_Aprroved_by_officer(String Aofficer) throws InterruptedException {
		approvedOfficer = Aofficer;
		sleepWait(3000);
		clickOn("drpdwn_approve", "");
		sleepWait(3000);
		clickOn("span", "[contains(text(),'" + Aofficer + "')]");

	}

	/****
	 * verification for Particular  records of Assessment And ReAssessment from tax payer profile
	 * @throws InterruptedException 
	 * 
	 */
	@Then("^click on Add button and selects the transaction for adjustment\"([^\"]*)\"from\"([^\"]*)\"to\"([^\"]*)\"$")
	public void click_on_Add_button_and_selects_the_transaction_for_adjustment_from_to(String transactiodId, String from,String to) throws InterruptedException {
		sleepWait(2000);
		clickOn("btn_add", "");
		// wd.switchTo().frame(wd.findElement(By.xpath("//iframe[@id='myiFrameForSilentRenew']")));
		sleepWait(4000);
		// elementText("txt_stmttransPopup","Statement of Transaction");
		/*
		 * clickOn("",""); datePicker(arg2); datePicker(arg3);
		 */
		List<WebElement> particularRecordslist = wd.findElements(By.xpath("(//tbody)[2]//td[5]"));
		for (int i = 0; i < particularRecordslist.size(); i++) {
			String Rpartiulars = particularRecordslist.get(i).getText();
			//System.out.println(Rpartiulars);
			assertEquals(Rpartiulars.equalsIgnoreCase("Assessment") || Rpartiulars.equalsIgnoreCase("ReAssessment")|| Rpartiulars.equalsIgnoreCase("Adjustment"), true);
		}
		clickOn("radio_stmtrecords", "");
		clickOn("btn_selectRec", "");
	}

	@Then("^Three row must be displayed with Old Records,Adustment row and total row$")
	public void three_row_must_be_displayed_with_Old_Records_Adustment_row_and_total_row() throws InterruptedException {
		sleepWait(2000);
		List<WebElement> adjustrec = wd.findElements(By.xpath("//tbody//tr"));
		assertEquals(adjustrec.size(), 3);
		assertEquals(buttonEnabled("btn_acadjstsubmit", ""), false, "Submit Button is Enabled");
	}
	@Then("^Select the reason\"([^\"]*)\"$")
	public void select_the_reason(String reason) throws InterruptedException {

		clickOn("drpdwn_reason", "");
		sleepWait(2000);
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

	@Then("^Enters comment in the Account Adjustment\"([^\"]*)\"$")
	public void enters_comment_in_the_Account_Adjustment(String comments) {
		type("input_commnets", comments);
		comment = comments;
	}

	@Then("^clicks on Submit button$")
	public void clicks_on_Submit_button() throws InterruptedException {
		clickOn("btn_acadjstsubmit", "");
		//System.out.println("submit button");
		sleepWait(30000);
	}

	@Then("^Source ID must be blank$")
	public void source_ID_must_be_blank() {
		assertEquals(getvalue("input_sourceid", ""), "");
	}

	@Then("^Performed by,Source id,TaxPayer,NItva must be disabled$")
	public void performed_by_Source_id_TaxPayer_NItva_must_be_disabled() {
		assertEquals(buttonEnabled("input_performedby", ""), false);
		assertEquals(buttonEnabled("input_taxpayer", ""), false);
		assertEquals(buttonEnabled("input_nitva", ""), false);
	}

	@Then("^Message should be shown \"([^\"]*)\"$")
	public void message_should_be_shown(String message) throws InterruptedException {
		sleepWait(2000);
		String error =wd.findElement(By.xpath("//*[contains(@role,'alertdialog')]")).getText();
		assertEquals(error, message);
	}

	@Then("^click on cross button on Statemnent of Transaction pop Up$")
	public void click_on_cross_button_on_Statemnent_of_Transaction_pop_Up() throws InterruptedException {
		sleepWait(2000);
		clickOn("btn_closeStmtTransPopUP", "");
		sleepWait(2000);
		assertEquals(elementText("txt_acadjstmnt", ""), "Account Adjustment");
	}

	@Then("^Removes the records for adjustment$")
	public void removes_the_records_for_adjustment() throws InterruptedException {
		sleepWait(2000);
		clickOn("btn_remove", "");
		sleepWait(2000);
		clickOn("btn_yes", "");
	}

	@Then("^clicks on cancel button$")
	public void clicks_on_cancel_button() throws InterruptedException {
		sleepWait(2000);
		clickOn("btn_cancel", "");
	}

	@Then("^user should be on Tax Payer Profile page of \"([^\"]*)\"$")
	public void user_should_be_on_Tax_Payer_Profile_page_of(String tpayer) throws InterruptedException {
		sleepWait(8000);
		assertEquals(elementText("page_tpprofile", ""), "Taxpayer Details");		
	}

	@Then("^user selects Charge\"([^\"]*)\" and Enter Amount to be adjusted VAT Liability\"([^\"]*)\"LateFee\"([^\"]*)\"Penalty\"([^\"]*)\"Interest should be non-editable$")
	public void user_selects_Charge_and_Enter_Amount_to_be_adjusted_VAT_Liability_LateFee_Penalty_Interest_should_be_non_editable(String charge, String advatliabil, String adjstlatefee, String adjstpenalty) throws InterruptedException {
		adjcharge = charge;
		adjltfee = adjstlatefee;		
		adjpenal = adjstpenalty;
		long diff = 0;
		if(!source.equals("Objection")) {
			adjvatliab = advatliabil;
		}else {
			adjvatliab = "0";
		}
		clickOn("drpdwn_charge", "");
		sleepWait(2000);
		clickOn("option_charge", "[contains(text(),'" + charge + "')]");	
		if(!source.equals("Objection")) {
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
			diff = TimeUnit.DAYS.convert(date1.getTime() - date2.getTime(),TimeUnit.MILLISECONDS);
			//System.out.println("Days: " +diff);
		} catch (ParseException e) {
			e.printStackTrace();
		}
		// Formula as per the User story
		double interestAdjust =  (Math.abs(diff) *(Double.parseDouble(adjltfee)+Double.parseDouble(adjvatliab)
		+ Double.parseDouble(adjpenal) ) * 0.16)  / 365;	

		/*		if ((!(arg2.equals("0"))) || (!arg2.equals(elementText("txt_oldVatrec", " ")))) {
			assertEquals(elementText("txt_errorMsg", ""), "Amount should be 0 or exact value");
		}
		if ((!(arg2.equals("0"))) && (!arg2.equals(elementText("txt_oldintRec", " ")))) {
			assertEquals(elementText("txt_errorMsg", ""), "Amount should be 0 or exact value");
		}
		if ((!(arg2.equals("0"))) && (!arg2.equals(elementText("txt_oldpenRec", " ")))) {
			assertEquals(elementText("txt_errorMsg", ""), "Amount should be 0 or exact value");
		}*/

		if (Acaction.equalsIgnoreCase("general") && charge.equalsIgnoreCase("credit")) {
			olddate = elementText("txt_Odate", "");
			System.out.println(olddate);
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
			String Tint=null;
			if(!source.equals("Objection")) {
				vatT = String.format("%.2f", vat - Double.parseDouble(advatliabil));
			}else {
				vatT=String.format("%.0f", vat - vat);
			}

			Tltfee = String.format("%.2f", ltfee - Double.parseDouble(adjstlatefee));
			Tpenalty = String.format("%.2f", penalty - Double.parseDouble(adjstpenalty));
			Tint=String.format("%.2f", Double.parseDouble(elementText("txt_oldintRec", ""))-interestAdjust);

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
			olddate = elementText("txt_Odate", "");
			System.out.println(olddate);
			oldperiod = elementText("txt_Operiod", "");
			oldpartic = elementText("txt_Oparticular", "");
			ovatliab = elementText("txt_oldVatrec", "");
			oltfee = elementText("txt_oldltfeeRec", "");
			oint = elementText("txt_oldintRec", "");
			openal = elementText("txt_oldpenRec", "");
			assertEquals(elementText("txt_oldcharge", ""), "Debit");
			double vat = Double.parseDouble(elementText("txt_oldVatrec", ""));
			double ltfee = Double.parseDouble(elementText("txt_oldltfeeRec", ""));
			double penalty = Double.parseDouble(elementText("txt_oldpenRec", ""));

			String vatT = null;
			String Tltfee = null;
			String Tpenalty = null;
			String Tint=null;

			Tltfee = String.format("%.2f", ltfee + Double.parseDouble(adjstlatefee));
			Tpenalty = String.format("%.2f", penalty + Double.parseDouble(adjstpenalty));

			Tint=String.format("%.2f", Double.parseDouble(elementText("txt_oldintRec", ""))+interestAdjust);
		
			assertEquals(elementText("txt_Tltfee", ""), Tltfee);
			assertEquals(elementText("txt_Tint", ""),Tint );
			assertEquals(elementText("txt_Tpen", ""), Tpenalty);
			if(source.equalsIgnoreCase("objection")) {
				vatT = String.format("%.2f", vat);
				
			}else {
				vatT=String.format("%.0f", vat + Double.parseDouble(advatliabil));
			}
			assertEquals(toDouble(elementText("txt_Tvatliab", "")), toDouble(vatT));
		}
	}

	@Then("^user Enter Amount to be adjusted VAT Liability\"([^\"]*)\"LateFee\"([^\"]*)\"Penalty\"([^\"]*)\"Interest should be non-editable for Reverse charge$")
	public void user_Enter_Amount_to_be_adjusted_VAT_Liability_LateFee_Penalty_Interest_should_be_non_editable_for_Reverse_charge(String vatliability, String latefee, String penalty) {

		type("input_vat", vatliability);
		type("input_ltfee", latefee);
		type("input_pen", penalty);	
		System.out.println((!vatliability.equals("0")));
		System.out.println((!vatliability.equals(elementText("txt_oldVatrec", ""))));
		if ((!vatliability.equals("0")) ) {
			if((!vatliability.equals(elementText("txt_oldVatrec", "")))) {
				assertEquals(elementText("txt_vatEmsg", ""), "Amount should be 0 or exact value");
				type("input_vat", elementText("txt_oldVatrec", ""));
			}

		}
		if ((!latefee.equals("0")) ) {
			if((!latefee.equals(elementText("txt_oldltfeeRec", "")))) {
				assertEquals(elementText("txt_oldltfeeRec", ""), "Amount should be 0 or exact value");
				type("input_ltfee", elementText("txt_oldltfeeRec", ""));

			}	
		}
		if ((!penalty.equals("0"))) {
			if((!penalty.equals(elementText("txt_oldpenRec", "")))) {
				assertEquals(elementText("txt_penEmsg", ""), "Amount should be 0 or exact value");
				type("input_pen", elementText("txt_oldpenRec", ""));
			}
		}
	}

	@Then("^click on Account Adjustment$")
	public void click_on_Account_Adjustment() throws InterruptedException {
		sleepWait(18000);
		clickOn("nav_acAdjstmnt", "");
		sleepWait(5000);
		assertEquals(elementText("txt_acAdjstmnt", ""), "Account Adjustment");
		sleepWait(5000);
	}

	@Then("^selects the user \"([^\"]*)\" to Approve the Account Adjusted done through internal adjstment\"([^\"]*)\"$")
	public void selects_the_user_to_Approve_the_Account_Adjusted_done_through_internal_adjstment(String tpname,String intenalAdjstmt) throws InterruptedException {

		sleepWait(2000);	
		clickOn("filterby_acAdjstmnt", "");
		sleepWait(2000);
		clickOn("filerbyTPayer_acAjstmt", "");
		sleepWait(2000);
		type("input_searchAcadjst", tpname);
		sleepWait(2000);
		clickOn("btn_searchAcadjst", "");
		sleepWait(2000);
		// records of the Account adjusted
		List <WebElement>adjustmentRecords =wd.findElements(By.xpath("//tbody//tr"));
		for(int i=1;i<=adjustmentRecords.size();i++) {
			System.out.println(wd.findElement(By.xpath("//tr["+i+"]//td[2]")).getText());
			if(wd.findElement(By.xpath("//tr["+i+"]//td[2]")).getText().equalsIgnoreCase("internal adjustment")
					&& wd.findElement(By.xpath("//tr["+i+"]//td[9]")).getText().equalsIgnoreCase("pending")) {
				apendingtoapprorec=i;
				break;
				
			}
		}
		System.out.println(elementText("txt_acAdjst", "/tr[" + apendingtoapprorec + "]/td[2]"));
		System.out.println(elementText("txt_acAdjst", "/tr[" + apendingtoapprorec + "]/td[9]"));
		assertEquals(elementText("txt_acAdjst", "/tr[" + apendingtoapprorec + "]/td[5]"), tpname);
		assertEquals(elementText("txt_acAdjst", "/tr[" + apendingtoapprorec + "]/td[8]").toLowerCase(),performOfficer.toLowerCase());
		assertEquals(elementText("txt_acAdjst", "/tr[" + apendingtoapprorec + "]/td[9]"), "Pending");

		System.out.println(elementText("txt_acAdjst", "/tr[" + apendingtoapprorec + "]/td[9]"));
		System.out.println(elementText("txt_acAdjst", "/tr[" + apendingtoapprorec + "]/td[5]"));

		clickOn("slash", "tr[" + apendingtoapprorec + "]/td[10]//button");
		sleepWait(8000);
		assertEquals(elementText("txt_acAdjstmnt", ""), "Account Adjustment");
		sleepWait(5000);

		// Validation the records filled during AccAdjst while Accepting the
		// accAdjstmnet
		assertEquals(getvalue("txt_action", "").toLowerCase(), Acaction.toLowerCase());
		//	assertEquals(getvalue("txt_CreatedDate", ""), createdDaterec);
		assertEquals(getvalue("input_performedby", "").toLowerCase(), performOfficer.toLowerCase());
		assertEquals(getvalue("input_getsource", ""), source);
		assertEquals(getvalue("txt_approvedBy", ""), approvedOfficer);
		// assertEquals(getvalue("input_sourceid", ""),"Internal adjustment" );
		assertEquals(getvalue("input_taxpayer", ""), txpayer);
		//assertEquals(elementText("txt_ORefid", ""), "");
		assertEquals(elementText("txt_Odate", ""), olddate);
		assertEquals(elementText("txt_Operiod", ""), oldperiod);
		//assertEquals(elementText("txt_Oparticular", ""), oldpartic);
		assertEquals(elementText("txt_Ocharge", ""), "Debit");
		assertEquals(elementText("txt_OvatLiabil", ""), ovatliab);
		assertEquals(elementText("txt_Oltfee", ""), oltfee);
		assertEquals(elementText("txt_Oint", ""), oint);
		assertEquals(elementText("txt_Openal", ""), openal);

		// Adjustment Records validate

		//assertEquals(getvalue("txt_AdjvatLiabil", ""), adjvatliab);
		assertEquals(elementText("txt_AdjRefid", ""), "");
		assertEquals(elementText("txt_Adjdate", ""), cdate);
		//assertEquals(elementText("txt_Adjperiod", ""), adjperiod);
		assertEquals(elementText("txt_Adjparticular", ""), "Account Adjustment");
		//	assertEquals(getvalue("txt_Adjcharge", ""), adjcharge);
		assertEquals(getvalue("txt_Adjltfee", ""), adjltfee);
		//assertEquals(getvalue("txt_Adjint", ""), "");
		assertEquals(getvalue("txt_Adjpenal", ""), adjpenal);
		assertEquals(toDouble(Tvatliab)==toDouble(elementText("txt_TvatLiabil", "")),true );
		assertEquals(toDouble(Ttfee)==toDouble(elementText("txt_Tltfee", "")),true );
		assertEquals(toDouble(elementText("txt_Tint", ""))==toDouble(elementText("txt_Oint", "")),true );
		assertEquals(toDouble(elementText("txt_Tpenal", ""))==toDouble(Tpenal), true);
		assertEquals(getvalue("input_commnets", ""), comment);
		assertEquals(getvalue("txt_reason", ""), reason);
		clickOn("btn_adjstApprove", "");
		sleepWait(3000);

	}

	@Then("^selects the user \"([^\"]*)\" to validate the \"([^\"]*)\" button for account adjustmentd done through internal adjstment\"([^\"]*)\"$")
	public void selects_the_user_to_validate_the_button_for_account_adjustmentd_done_through_internal_adjstment(String tpname, String button, String internalAdjustment) throws InterruptedException {

		if (button.equals("previous")) {
			int internalprevrec=0;
			System.out.println(records);
			clickOn("filterby_acAdjstmnt", "");
			sleepWait(2000);
			clickOn("filerbyTPayer_acAjstmt", "");
			sleepWait(2000);
			type("input_searchAcadjst", tpname);
			clickOn("btn_searchAcadjst", "");
			sleepWait(5000);
			List <WebElement> adjstmentrec=wd.findElements(By.xpath("//tbody//tr"));
			for(int i=1;i<=adjstmentrec.size();i++) {
				System.out.println(elementText("txt_acAdjst", "/tr[" + i + "]/td[2]"));
				if(wd.findElement(By.xpath("//tbody/tr["+ i + "]/td[2]")).getText().equals("Internal adjustment") && wd.findElement(By.xpath("//tbody/tr[" + i + "]/td[9]" )).getText().equals("Pending")) {
					internalprevrec=i;
				}

			}
			clickOn("txt_acAdjst", "/tr[" + internalprevrec + "]/td[10]//button");		
			sleepWait(1500);
			clickOn("btn_accadjprev", "");
			sleepWait(5000);
			assertEquals(elementText("txt_acAdjstmnt", ""),"Account Adjustment");

		}
		if (button.equals("Reject")) {
			int internalprevrec=0;
			clickOn("filterby_acAdjstmnt", "");
			sleepWait(2000);
			clickOn("filerbyTPayer_acAjstmt", "");
			sleepWait(2000);
			type("input_searchAcadjst", tpname);
			clickOn("btn_searchAcadjst", "");
			sleepWait(5000);
			List <WebElement> adjstmentrec=wd.findElements(By.xpath("//tbody//tr"));
			for(int i=1;i<=adjstmentrec.size();i++) {
				System.out.println(elementText("txt_acAdjst", "/tr[" + i + "]/td[2]"));
				if(wd.findElement(By.xpath("//tbody/tr["+ i + "]/td[2]")).getText().equals("Internal adjustment") && wd.findElement(By.xpath("//tbody/tr[" + i + "]/td[9]" )).getText().equals("Pending")) {
					internalprevrec=i;
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
	public void verifies_the_notice_generated()throws Throwable {
		saveFile();
		sleepWait(8000);
		PDDocument doc = PDDocument.load(getLatestFilefromDir());
		PDFTextStripper pdfStripper = new PDFTextStripper();
		String text = pdfStripper.getText(doc);
		assertTrue(text.contains("Notice of Account Adjustment"));
		assertTrue(text.contains(txpayer));
	}

	@Then("^click on Add button and selects the transaction for adjustment\"([^\"]*)\"$")
	public void click_on_Add_button_and_selects_the_transaction_for_adjustment(String transactionid) throws InterruptedException {

		sleepWait(2000);
		clickOn("btn_add", "");
		sleepWait(2000);
		List<WebElement> particularRecordslist = wd.findElements(By.xpath("(//tbody)[2]//td[5]"));
		for (int i = 0; i < particularRecordslist.size(); i++) {
			String Rpartiulars = particularRecordslist.get(i).getText();
			assertEquals(Rpartiulars.equalsIgnoreCase("Assessment") || Rpartiulars.equalsIgnoreCase("ReAssessment"),true);
		}
		clickOn("radio_stmtrecords", "");

	}

	@When("^user click on Case Management$")
	public void user_click_on_Case_Management() throws InterruptedException {
		clickOn("nav_href_caseManagement", "");
		sleepWait(8000);
		assertEquals(elementText("txt_heading", ""), "Case Management");
	}

	@Then("^user performs the Account adjustment for taxpayer\"([^\"]*)\"CaseId\"([^\"]*)\"$")
	public void user_performs_the_Account_adjustment_for_taxpayer_CaseId(String tpname, String CaseId)
			throws Throwable {
		if (CaseMObjectionid==null) {
			CaseMObjectionid=CaseId;
		}

		clickOn("filterby_acAdjstmnt", "");
		sleepWait(2000);
		clickOn("drpdwn_CaseId", "");
		type("input_searchAcadjst", CaseId);
		clickOn("btn_searchAcadjst", "");
		sleepWait(3000);
		//System.out.println(elementText("txt_rec2", ""));
		clickOn("btn_caseManage", "");
		sleepWait(2000);
		clickOn("btn_CaseView", "");
		sleepWait(15000);
	}

	@Then("^officer the performs the action \"([^\"]*)\"$")
	public void officer_the_performs_the_action(String action) throws InterruptedException {

		wd.switchTo().frame(wd.findElement(By.xpath("//iframe")));
		sleepWait(13000);
		assertEquals(elementText("caseRefId", ""), CaseMObjectionid);
		drp_select("drpdwn_CAseaction", action);
		sleepWait(2000);
	}

	@Then("^click on submit button on Case Management$")
	public void click_on_submit_button_on_Case_Management() throws InterruptedException {
		sleepWait(2000);
	clickOn("btn_CaseSubmit", "");
		wd.switchTo().defaultContent();
		sleepWait(10000);
	}

	@Then("^validates created date Performed By\"([^\"]*)\"Source\"([^\"]*)\" and Source Id must be CaseId\"([^\"]*)\"TaxPayer\"([^\"]*)\"$")
	public void validates_created_date_Performed_By_Source_and_Source_Id_must_be_CaseId_TaxPayer(String user,String src, String cid, String tpayer) {

		Date d = new Date();
		SimpleDateFormat dateFormat = new SimpleDateFormat("dd MMM, yyyy");
		SimpleDateFormat dateFormat2 = new SimpleDateFormat("MM/dd/yyyy");
		SimpleDateFormat dateFormat3 = new SimpleDateFormat("MMM,yyyy");
		adjperiod = dateFormat3.format(d);
		createdDaterec = dateFormat2.format(d);
		cdate = dateFormat.format(d);
		assertEquals(getvalue("txt_CreatedDate", ""), cdate);
		assertEquals(getvalue("input_performedby", "").equalsIgnoreCase(user), true);
		performOfficer = user;
		source = src;
		assertEquals(getvalue("input_taxpayer", ""), tpayer);
		txpayer = tpayer;
	}

	@Then("^click on Add button and selects the Assessment id\"([^\"]*)\" for adjustment$")
	public void click_on_Add_button_and_selects_the_Assessment_id_for_adjustment(String AssessmentId) throws InterruptedException {
		if(source.equals("")) {
			List <WebElement>Objectioncaserecord=wd.findElements(By.xpath("//*[contains(text(),'Statement of Transaction')]//following::tbody//tr"));
			assertEquals(Objectioncaserecord.size(), 1);
		}	
		sleepWait(2000);
		clickOn("btn_add", "");
		sleepWait(3000);
		clickOn("filterby_acAdjstmnt", "");
		sleepWait(3000);
		clickOn("drpdwn_transid", "");
		sleepWait(2000);
		type("input_searchTrans", AssessmentId);
		sleepWait(2000);
		//clickOn("btn_searchFiterTransac", "");
		//sleepWait(3000);
		clickOn("radio_stmtrecords", "");
		clickOn("btn_selectRec", "");
		sleepWait(3000);
	
	}

	@Then("^user is Case Management with Status \"([^\"]*)\" and Case id\"([^\"]*)\"$")
	public void user_is_Case_Management_with_Status_and_Case_id(String Status, String CaseId) throws InterruptedException {
		wd.switchTo().frame(wd.findElement(By.xpath("//iframe")));
		assertEquals(elementText("caseRefId", ""), CaseMObjectionid);
		sleepWait(2000);
		assertEquals(elementText("txt_CaseStatusAdjtmt", "").toLowerCase(), Status.toLowerCase());
		wd.switchTo().defaultContent();
	}

	@Then("^selects the user \"([^\"]*)\" with case id \"([^\"]*)\"Approve the Account Adjusted done through Obection and Appeal\"([^\"]*)\"$")
	public void selects_the_user_with_case_id_Approve_the_Account_Adjusted_done_through_Obection_and_Appeal(String tpname, String caseid, String type) throws InterruptedException {

		sleepWait(2000);
		System.out.println(records);
		clickOn("filterby_acAdjstmnt", "");
		sleepWait(2000);
		clickOn("filterby_CaseId", "");
		sleepWait(2000);
		type("input_searchAcadjst", caseid);
		sleepWait(2000);
		clickOn("btn_searchAcadjst", "");
		sleepWait(2000);
		// CASE ID verification
		assertEquals(elementText("txt_rec1", ""), caseid);
		// ADJUSTMENT TYPE
		assertEquals(elementText("txt_rec2", ""), type);
		// TAX
		assertEquals(elementText("txt_rec5", "").toLowerCase(), tpname.toLowerCase());
		assertEquals(elementText("txt_rec8", "").toLowerCase(), performOfficer.toLowerCase());// Performing Officer
		assertEquals(elementText("txt_rec9", ""), "Pending");// Pending Status
		clickOn("txt_rec10", "");
		sleepWait(5000);
		assertEquals(elementText("txt_acAdjstmnt", ""), "Account Adjustment");
		sleepWait(5000);

		// Validation the records filled during AccAdjst while Accepting the
		// accAdjstmnet
		assertEquals(getvalue("txt_action", "").toLowerCase(), Acaction.toLowerCase());
	//	assertEquals(getvalue("txt_CreatedDate", ""), createdDaterec);
		assertEquals(getvalue("input_performedby", "").toLowerCase(), performOfficer.toLowerCase());
		assertEquals(getvalue("input_getsource", ""), source);
		assertEquals(getvalue("txt_approvedBy", "").toLowerCase(), approvedOfficer.toLowerCase());
		assertEquals(getvalue("input_taxpayer", "").toLowerCase(), txpayer.toLowerCase());
	//	assertEquals(elementText("txt_ORefid", ""),);
		assertEquals(elementText("txt_Odate", ""), olddate);
		assertEquals(elementText("txt_Operiod", ""), oldperiod);
		assertEquals(elementText("txt_Oparticular", ""), oldpartic);
		assertEquals(elementText("txt_Ocharge", ""), "Debit");
		assertEquals(elementText("txt_OvatLiabil", ""), ovatliab);
		assertEquals(elementText("txt_Oltfee", ""), oltfee);
		assertEquals(elementText("txt_Oint", ""), oint);
		assertEquals(elementText("txt_Openal", ""), openal);

		// Adjustment Records validate
		assertEquals(elementText("txt_AdjRefid", ""), "");
		assertEquals(elementText("txt_Adjdate", ""), cdate);
		assertEquals(elementText("txt_Adjperiod", ""), adjperiod);
		assertEquals(elementText("txt_Adjparticular", ""), "Account Adjustment");
		assertEquals(getvalue("txt_Adjcharge", ""), adjcharge);
		assertEquals(getvalue("txt_Adjltfee", ""), adjltfee);
		assertEquals(getvalue("txt_Adjint", ""), "");
		assertEquals(getvalue("txt_Adjpenal", ""), adjpenal);
		assertEquals(elementText("txt_TvatLiabil", ""), Tvatliab);
		assertEquals(elementText("txt_Tltfee", ""), Ttfee);
		assertEquals(elementText("txt_Tint", ""), elementText("txt_Oint", ""));
		assertEquals(elementText("txt_Tpenal", ""), Tpenal);
		assertEquals(getvalue("input_commnets", ""), comment);
		assertEquals(getvalue("txt_reason", ""), reason);
		clickOn("btn_adjstApprove", "");

	}

	@Then("^status should be changed to \"([^\"]*)\" through to the account adjusted done through internal adjstment\"([^\"]*)\"TaxPayerName\"([^\"]*)\"$")
	public void status_should_be_changed_to_through_to_the_account_adjusted_done_through_internal_adjstment_TaxPayerName(String status, String internaladjustment, String tpname) throws InterruptedException {

		assertEquals(elementText("txt_acAdjstmnt", ""), "Account Adjustment");
		clickOn("filterby_acAdjstmnt", "");
		sleepWait(2000);
		clickOn("filerbyTPayer_acAjstmt", "");
		type("input_searchAcadjst", tpname);
		clickOn("btn_searchAcadjst", "");
		sleepWait(8000);
		assertEquals(elementText("txt_acAdjst", "/tr[" + apendingtoapprorec + "]/td[9]"), "Approved");

	}

	@Then("^status should be changed to \"([^\"]*)\" through to the account adjusted done through Objection & Appeal\"([^\"]*)\" of CaseId\"([^\"]*)\"$")
	public void status_should_be_changed_to_through_to_the_account_adjusted_done_through_Objection_Appeal_of_CaseId(String status, String objection, String caseId) throws InterruptedException {

		sleepWait(3000);
		assertEquals(elementText("txt_acAdjstmnt", ""), "Account Adjustment");
		clickOn("filterby_acAdjstmnt", "");
		sleepWait(2000);
		clickOn("filterby_CaseId", "");
		sleepWait(2000);
		type("input_searchAcadjst", caseId);
		clickOn("btn_searchAcadjst", "");
		assertEquals(elementText("txt_rec9", ""), status);

	}

	@Then("^selects the user \"([^\"]*)\" with case id \"([^\"]*)\"Approve the Account Adjusted done through Obection and Appeal\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"$")
	public void selects_the_user_with_case_id_Approve_the_Account_Adjusted_done_through_Obection_and_Appeal(String tpname, String cid, String objection, String action, String user, String ApproveO, String reason,
			String comments) throws InterruptedException {

		clickOn("filterby_acAdjstmnt", "");
		sleepWait(2000);
		clickOn("drpdwnby_caseid", "");
		sleepWait(2000);
		type("input_searchAcadjst", cid);
		sleepWait(2000);
		clickOn("btn_searchAcadjst", "");
		sleepWait(6000);
		assertEquals(elementText("txt_rec1", ""), cid);// CASE ID
		assertEquals(elementText("txt_rec2", ""), objection);// ADJUSTMENT TYPE
		assertEquals(elementText("txt_rec5", ""), tpname);// TAX
		assertEquals(elementText("txt_rec8", ""), user);// Performing Officer
		assertEquals(elementText("txt_rec9", ""), "Pending");// Pending Status
		clickOn("txt_rec10", "");
		sleepWait(5000);
		assertEquals(elementText("txt_acAdjstmnt", ""), "Account Adjustment");
		sleepWait(5000);
		assertEquals(getvalue("txt_action", "").toLowerCase(), action.toLowerCase());
		assertEquals(getvalue("input_performedby", "").toLowerCase(), user.toLowerCase());
		assertEquals(getvalue("input_source", ""), objection);
		assertEquals(getvalue("txt_approvedBy", "").toLowerCase(), ApproveO.toLowerCase());
		assertEquals(getvalue("input_taxpayer", ""), tpname);
		assertEquals(getvalue("input_commnets", ""), comments);
		assertEquals(getvalue("txt_reason", ""), reason);
		clickOn("btn_adjstApprove", "");
		txpayer = tpname;

	}

	@Then("^selects the user \"([^\"]*)\" with case id \"([^\"]*)\"Reject the Account Adjusted done through Obection and Appeal\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"$")
	public void selects_the_user_with_case_id_Reject_the_Account_Adjusted_done_through_Obection_and_Appeal(
			String tpname, String cid, String objection, String action, String user, String ApproveO, String reason,
			String comments) throws InterruptedException {

		clickOn("filterby_acAdjstmnt", "");
		sleepWait(2000);
		clickOn("filterby_CaseId", "");
		sleepWait(2000);
		type("input_searchAcadjst", cid);
		sleepWait(2000);
		clickOn("btn_searchAcadjst", "");
		sleepWait(6000);
		assertEquals(elementText("txt_rec1", ""), cid);// CASE ID
		assertEquals(elementText("txt_rec2", ""), objection);// ADJUSTMENT TYPE
		assertEquals(elementText("txt_rec5", ""), tpname);// TAX
		assertEquals(elementText("txt_rec8", ""), user);// Performing Officer
		assertEquals(elementText("txt_rec9", ""), "Pending");// Pending Status
		clickOn("txt_rec10", "");
		sleepWait(5000);
		assertEquals(elementText("txt_acAdjstmnt", ""), "Account Adjustment");
		sleepWait(5000);
		assertEquals(getvalue("txt_action", "").toLowerCase(), action.toLowerCase());
		assertEquals(getvalue("input_performedby", "").toLowerCase(), user.toLowerCase());
		assertEquals(getvalue("input_source", ""), objection);
		assertEquals(getvalue("txt_approvedBy", "").toLowerCase(), ApproveO.toLowerCase());
		// assertEquals(getvalue("input_sourceid", ""),"Internal adjustment" );
		assertEquals(getvalue("input_taxpayer", ""), tpname);
		assertEquals(getvalue("input_commnets", ""), comments);
		assertEquals(getvalue("txt_reason", ""), reason);
		clickOn("btn_adjstReject", "");
		sleepWait(6000);
	}



	@Then("^user performs the Account adjustment for taxpayer\"([^\"]*)\"with \"([^\"]*)\"$")
	public void user_performs_the_Account_adjustment_for_taxpayer_with(String tpname, String status) throws InterruptedException {
		int recordNo=0;
		sleepWait(5000);
		clickOn("filterby_acAdjstmnt", "");
		sleepWait(2000);
		clickOn("filerbyTPayer_acAjstmt", "");
		type("input_searchAcadjst", tpname);
		clickOn("btn_searchAcadjst", "");
		sleepWait(3000);
		List <WebElement> records =wd.findElements(By.xpath("//tbody//tr"));
		for(int i=1;i<=records.size();i++) {
			System.out.println(wd.findElement(By.xpath("//tbody//tr["+i+"]//td[3]")).getText());
			if(wd.findElement(By.xpath("//tbody//tr["+i+"]//td[3]")).getText().equalsIgnoreCase("debt collection") && wd.findElement(By.xpath("//tbody//tr["+i+"]//td[10]")).getText().equalsIgnoreCase(status)) {
				recordNo=i;
				break;
			}
		}
		wd.findElement(By.xpath("//tbody//tr["+recordNo+"]//td[12]//button")).click();
		sleepWait(2000);
		wd.findElement(By.xpath("//tbody//tr["+recordNo+"]//td[12]//a")).click();
		sleepWait(8000);
		CaseDebtId=elementText("txt_Caseid","");
	}
	@Then("^validates created date Performed By\"([^\"]*)\" Source\"([^\"]*)\" and TaxPayer\"([^\"]*)\"$")
	public void validates_created_date_Performed_By_Source_and_TaxPayer(String user, String src, String tpayer) {
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
		assertEquals(getvalue("input_taxpayer", "").toLowerCase(), tpayer.toLowerCase());
		txpayer = tpayer;
	}

	@Then("^Source Id must be CaseId\"([^\"]*)\" from Objection$")
	public void source_Id_must_be_CaseId_from_Objection(String caseId) {
		assertEquals(getvalue("input_sourceid", ""), CaseMObjectionid);
	}

	@Then("^Source Id must be CaseId from Debt Management$")
	public void source_Id_must_be_CaseId_from_Debt_Management() {
		assertEquals(getvalue("input_sourceid", ""), CaseDebtId);
	}

	@Then("^validates created date Performed By\"([^\"]*)\"Source\"([^\"]*)\" and Source Id must be CaseId from Debt Management TaxPayer\"([^\"]*)\"$")
	public void validates_created_date_Performed_By_Source_and_Source_Id_must_be_CaseId_from_Debt_Management_TaxPayer(String user, String src, String tpayer)
	{
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
		assertEquals(getvalue("input_sourceid", ""), CaseDebtId);
		assertEquals(getvalue("input_taxpayer", ""), tpayer);
		txpayer = tpayer;
	}

	@Then("^click on Add button$")
	public void click_on_Add_button() throws InterruptedException {
		sleepWait(2000);
		clickOn("btn_add", "");
		sleepWait(3000);
	}
	@Then("^selects the transaction for DEBT Adjustment from records of \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
	public void selects_the_transaction_for_DEBT_Adjustment_from_records_of(String internalAdjustment, String assessment, String reassessment) throws InterruptedException {

		List<WebElement> debtrecords=wd.findElements(By.xpath("//*[@class='data-table-body ng-star-inserted']//tr"));
		clickOn("btn_closeStatement", "");
		sleepWait(5000);
		clickOn("btn_add", "");

		for(int i=1;i<=debtrecords.size();i++) {	
			sleepWait(2000);
			wd.findElement(By.xpath("//*[@class='data-table-body ng-star-inserted']//tr["+i+"]//td//input")).click();
			clickOn("btn_selectRec", "");
			sleepWait(5000);
			System.out.println("Records"+i+" Seletec");
			clickOn("btn_add", "");

		}
		clickOn("btn_closeStatement", "");
		sleepWait(5000);
		for(int j=1;j<=debtrecords.size();j++) {
			wd.findElement(By.xpath("//tr["+(3*j-1)+"]//td[6]//input")).sendKeys(wd.findElement(By.xpath("//tr["+(3*j-2)+"]//td[6]")).getText());
			wd.findElement(By.xpath("//tr["+(3*j-1)+"]//td[7]//input")).sendKeys(wd.findElement(By.xpath("//tr["+(3*j-2)+"]//td[7]")).getText());
			wd.findElement(By.xpath("//tr["+(3*j-1)+"]//td[9]//input")).sendKeys(wd.findElement(By.xpath("//tr["+(3*j-2)+"]//td[9]")).getText());

		}

	}

	@Then("^selects user of TaxPayer \"([^\"]*)\" with Case Id to Approve the Account Adjustment Performed by\"([^\"]*)\" action\"([^\"]*)\" Approve Officer\"([^\"]*)\" Source\"([^\"]*)\" reason\"([^\"]*)\"Comments\"([^\"]*)\"$")
	public void selects_user_of_TaxPayer_with_Case_Id_to_Approve_the_Account_Adjustment_Performed_by_action_Approve_Officer_Source_reason_Comments(String tpname,String performedby,String adjAction,String officer, String src, String reason, String comments) throws InterruptedException {

		System.out.println("Tax Payer Name"+txpayer);
		System.out.println(CaseDebtId);
		clickOn("drpdwn_accadjst", "");
		sleepWait(2000);
		clickOn("drpdwnby_caseid", "");
		sleepWait(2000);
		type("input_searchAcadjst", CaseDebtId);
		sleepWait(2000);
		clickOn("btn_searchAcadjst", "");
		sleepWait(8000);
		clickOn("btn_viewdebt", "");
		sleepWait(8000);
		assertEquals(getvalue("txt_action", "").toLowerCase(), adjAction.toLowerCase());
		assertEquals(getvalue("input_performedby", "").toLowerCase(), performedby.toLowerCase());
		assertEquals(getvalue("txt_accadjstmtSource", ""), src);
		assertEquals(getvalue("txt_approvedBy", "").toLowerCase(), officer.toLowerCase());
		assertEquals(getvalue("input_taxpayer", "").toLowerCase(), tpname.toLowerCase());
		assertEquals(getvalue("input_commnets", ""), comments);
		assertEquals(getvalue("txt_reason", ""), reason);
		clickOn("btn_adjstApprove", "");
		sleepWait(5000);
	}
	double toDouble(String text) {

		return Double.parseDouble(text);
	}

}
