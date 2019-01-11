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
//import static org.drc.vat.appmanager.HelperBase.countDays;
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
	@Given("^\"([^\"]*)\"\"([^\"]*)\"The officer has logged in with Uname\"([^\"]*)\"Password\"([^\"]*)\"$")
	public void the_officer_has_logged_in_with_Uname_Password(String arg1, String arg2, String arg3, String arg4)
			throws Throwable {

	}

	@When("^clicks on Account adjustment from TaxPayer Profile of user with taxpayer\"([^\"]*)\"$")
	public void clicks_on_Account_adjustment_from_TaxPayer_Profile_of_user_with_taxpayer(String arg1) throws Throwable {
		sleepWait(3000);
		clickOn("nav_tpprofile", "");
		sleepWait(4000);
		assertEquals(elementText("page_tpprofile", ""), "Taxpayer Details");
		clickOn("filterby_tpprofile", "");
		sleepWait(3000);
		clickOn("span", "[contains(text(),'TaxPayer')]");

		type("input_search_tpprofile", arg1);
		clickOn("btn_searchtprofile", "");

		clickOn("btn_viewtpprofile", "");
		sleepWait(5000);
		assertEquals(elementText("slash", "h4"), arg1);
		clickOn("btn_stmttrans", "");
		clickOn("btn_accAdjstmt", "");

	}

	@Then("^user is on account adustment page$")
	public void user_is_on_account_adustment_page() throws Throwable {

		sleepWait(5000);
		assertEquals(elementText("txt_acadjstmnt", ""), "Account Adjustment");
	}

	@Then("^selects action\"([^\"]*)\"$")
	public void selects_action(String arg1) throws Throwable {
		sleepWait(2000);
		clickOn("drpdwn_action", "");
		sleepWait(3000);	
		Acaction = arg1;
		clickOn("span", "[contains(@class,'ng-option') and contains(text(),'"+Acaction+"')]");
	}

	@Then("^validates created date Performed By\"([^\"]*)\"Source\"([^\"]*)\" and Source Id must be blank TaxPayer\"([^\"]*)\"$")
	public void validates_created_date_Performed_By_Source_and_Source_Id_must_be_blank_TaxPayer(String user, String src,
			String tpayer) throws Throwable {
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
		// assertEquals(getvalue("input_source", ""), src);//Source
		source = src;
		assertEquals(getvalue("input_sourceid", ""), "");
		assertEquals(getvalue("input_taxpayer", ""), tpayer);
		txpayer = tpayer;

	}

	@Then("^selects the Aprroved by officer\"([^\"]*)\"$")
	public void selects_the_Aprroved_by_officer(String Aofficer) throws Throwable {
		approvedOfficer = Aofficer;
		sleepWait(3000);
		clickOn("drpdwn_approve", "");
		sleepWait(3000);
		clickOn("span", "[contains(text(),'" + Aofficer + "')]");

	}

	/****
	 * Paraticular should have records of Assessment And ReAssessment from tax payer
	 * profile
	 * 
	 * @param arg1
	 * @param arg2
	 * @param arg3
	 * @throws Throwable
	 */
	@Then("^click on Add button and selects the transaction for adjustment\"([^\"]*)\"from\"([^\"]*)\"to\"([^\"]*)\"$")
	public void click_on_Add_button_and_selects_the_transaction_for_adjustment_from_to(String arg1, String arg2,
			String arg3) throws Throwable {
		sleepWait(2000);
		clickOn("btn_add", "");
		// wd.switchTo().frame(wd.findElement(By.xpath("//iframe[@id='myiFrameForSilentRenew']")));
		sleepWait(4000);
		// elementText("txt_stmttransPopup","Statement of Transaction");
		/*
		 * clickOn("",""); datePicker(arg2); datePicker(arg3);
		 */
		List<WebElement> particularRecordslist = wd.findElements(By.xpath("(//tbody)[2]//td[5]"));
		if (source.equalsIgnoreCase("")) {

		}
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
		sleepWait(2000);
		List<WebElement> adjustrec = wd.findElements(By.xpath("//tbody//tr"));
		assertEquals(adjustrec.size(), 3);

		assertEquals(buttonEnabled("btn_acadjstsubmit", ""), false, "Submit Button is Enabled");

	}

	@Then("^Select the reason\"([^\"]*)\"$")
	public void select_the_reason(String arg1) throws Throwable {

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
		clickOn("span", "[contains(text(),'" + arg1 + "')]");
		sleepWait(5000);
		reason = arg1;

	}

	@Then("^Enters comment in the Account Adjustment\"([^\"]*)\"$")
	public void enters_comment_in_the_Account_Adjustment(String arg1) throws Throwable {
		type("input_commnets", arg1);
		comment = arg1;

	}

	@Then("^clicks on Submit button$")
	public void clicks_on_Submit_button() throws Throwable {
	clickOn("btn_acadjstsubmit", "");
		System.out.println("submit button");
		sleepWait(15000);

	}

	@Then("^Source ID must be blank$")
	public void source_ID_must_be_blank() throws Throwable {

		assertEquals(getvalue("input_sourceid", ""), "");
	}

	@Then("^Performed by,Source id,TaxPayer,NItva must be disabled$")
	public void performed_by_Source_id_TaxPayer_NItva_must_be_disabled() throws Throwable {
		assertEquals(buttonEnabled("input_performedby", ""), false);
		assertEquals(buttonEnabled("input_taxpayer", ""), false);
		assertEquals(buttonEnabled("input_nitva", ""), false);

	}

	@Then("^Message should be shown \"([^\"]*)\"$")
	public void message_should_be_shown(String arg1) throws Throwable {
		sleepWait(1000);
		String error =wd.findElement(By.xpath("//*[contains(@class,'toast-message')]")).getText();
		assertEquals(error, arg1);

	}

	@Then("^click on cross button on Statemnent of Transaction pop Up$")
	public void click_on_cross_button_on_Statemnent_of_Transaction_pop_Up() throws Throwable {
		clickOn("btn_closeStmtTransPopUP", "");
		sleepWait(2000);
		assertEquals(elementText("txt_acadjstmnt", ""), "Account Adjustment");

	}

	@Then("^Removes the records for adjustment$")
	public void removes_the_records_for_adjustment() throws Throwable {
		sleepWait(2000);
		clickOn("btn_remove", "");
		sleepWait(2000);
		clickOn("btn_yes", "");

	}

	@Then("^clicks on cancel button$")
	public void clicks_on_cancel_button() throws Throwable {
		// clickOn("btn_removeRec","");
		sleepWait(2000);
		clickOn("btn_cancel", "");

	}

	@Then("^user should be on Tax Payer Profile page of \"([^\"]*)\"$")
	public void user_should_be_on_Tax_Payer_Profile_page_of(String arg1) throws Throwable {
		assertEquals(elementText("page_tpprofile", ""), "Taxpayer Details");

	}

	@Then("^user selects Charge\"([^\"]*)\" and Enter Amount to be adjusted VAT Liability\"([^\"]*)\"LateFee\"([^\"]*)\"Penalty\"([^\"]*)\"Interest should be non-editable$")
	public void user_selects_Charge_and_Enter_Amount_to_be_adjusted_VAT_Liability_LateFee_Penalty_Interest_should_be_non_editable(
			String charge, String arg2, String arg3, String arg4) throws Throwable {
		adjcharge = charge;
		adjvatliab = arg2;
		adjltfee = arg3;
		adjpenal = arg4;
		long diff = 0;

		clickOn("drpdwn_charge", "");
		sleepWait(2000);
		clickOn("option_charge", "[contains(text(),'" + charge + "')]");
		type("input_vat", arg2);
		type("input_ltfee", arg3);
		type("input_pen", arg4);
		/// DATE Format to Calcuate
		SimpleDateFormat myFormat = new SimpleDateFormat("dd MMM, yyyy");
		String inputString1 = elementText("slash", "tbody/tr[1]/td[2]");
		String inputString2 = elementText("slash", "tbody/tr[2]/td[2]");
		try {
			Date date1 = myFormat.parse(inputString1);
			Date date2 = myFormat.parse(inputString2);
			diff = TimeUnit.DAYS.convert(date1.getTime() - date2.getTime(),TimeUnit.MILLISECONDS);
			//System.out.println("Days: " + TimeUnit.DAYS.convert(diff, TimeUnit.MILLISECONDS));
		} catch (ParseException e) {
			e.printStackTrace();
		}
		double interestAdjust =  (Math.abs(diff) *(Double.parseDouble(adjvatliab) + Double.parseDouble(adjltfee)
		+ Double.parseDouble(adjpenal) ) * 0.16)   / 365;	


		
		
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

				vatT = String.format("%.2f", vat - Double.parseDouble(arg2));

				Tltfee = String.format("%.2f", ltfee - Double.parseDouble(arg3));

				Tpenalty = String.format("%.2f", penalty - Double.parseDouble(arg4));
			//}
				Tint=String.format("%.2f", Double.parseDouble(elementText("txt_oldintRec", ""))-interestAdjust);

			assertEquals(elementText("txt_Tvatliab", ""), vatT);
			assertEquals(elementText("txt_Tltfee", ""), Tltfee);
			assertEquals(elementText("txt_Tint", ""), Tint);
			assertEquals(elementText("txt_Tpen", ""), Tpenalty);

			Tvatliab = elementText("txt_Tvatliab", "");
			Ttfee = elementText("txt_Tltfee", "");
			Tpenal = elementText("txt_Tpen", "");



			// assertTrue(getvalue("", data));
	
			DecimalFormat d = new DecimalFormat("#.##");
		//	System.out.println(d.format(interestAdjust));
			// String.format("%.2f",interestAdjust);

		}
		if (Acaction.equalsIgnoreCase("general") && charge.equalsIgnoreCase("debit")) {
			assertEquals(elementText("txt_oldcharge", ""), "Debit");
			double vat = Double.parseDouble(elementText("txt_oldVatrec", ""));
			double ltfee = Double.parseDouble(elementText("txt_oldltfeeRec", ""));
			// int interest=Integer.parseInt(elementText("txt_oldintRec",""));
			double penalty = Double.parseDouble(elementText("txt_oldpenRec", ""));

			String vatT = null;
			String Tltfee = null;
			String Tpenalty = null;
			String Tint=null;

				vatT = String.format("%.2f", vat + Double.parseDouble(arg2));

				Tltfee = String.format("%.2f", ltfee + Double.parseDouble(arg3));


				Tpenalty = String.format("%.2f", penalty + Double.parseDouble(arg4));

			Tint=String.format("%.2f", Double.parseDouble(elementText("txt_oldintRec", ""))+interestAdjust);
			assertEquals(elementText("txt_Tvatliab", ""), vatT);
			assertEquals(elementText("txt_Tltfee", ""), Tltfee);
			assertEquals(elementText("txt_Tint", ""),Tint );
			assertEquals(elementText("txt_Tpen", ""), Tpenalty);

		}
	}

	@Then("^user Enter Amount to be adjusted VAT Liability\"([^\"]*)\"LateFee\"([^\"]*)\"Penalty\"([^\"]*)\"Interest should be non-editable for Reverse charge$")
	public void user_Enter_Amount_to_be_adjusted_VAT_Liability_LateFee_Penalty_Interest_should_be_non_editable_for_Reverse_charge(
			String arg1, String arg2, String arg3) throws Throwable {

		type("input_vat", arg1);
		type("input_ltfee", arg2);
		type("input_pen", arg3);
		System.out.println((!arg1.equals("0")));
		System.out.println((!arg1.equals(elementText("txt_oldVatrec", ""))));
		if ((!arg1.equals("0")) || (!arg1.equals(elementText("txt_oldVatrec", "")))) {
			assertEquals(elementText("txt_vatEmsg", ""), "Amount should be 0 or exact value");
		}
		System.out.println((!arg2.equals("0")));
		System.out.println(!arg1.equals(elementText("txt_oldltfeeRec", "")));
		if ((!arg2.equals("0")) || (!arg1.equals(elementText("txt_oldltfeeRec", "")))) {
			assertEquals(elementText("txt_ltfeeEmsg", ""), "Amount should be 0 or exact value");
		}
		System.out.println((!arg3.equals("0")));
		System.out.println((!arg1.equals(elementText("txt_oldpenRec", ""))));
		if ((!arg3.equals("0")) || (!arg1.equals(elementText("txt_oldpenRec", "")))) {
			assertEquals(elementText("txt_penEmsg", ""), "Amount should be 0 or exact value");
		}

	}

	@Then("^click on Account Adjustment$")
	public void click_on_Account_Adjustment() throws InterruptedException {
		sleepWait(5000);
		clickOn("nav_acAdjstmnt", "");
		sleepWait(5000);
		assertEquals(elementText("txt_acAdjstmnt", ""), "Account Adjustment");
		sleepWait(5000);
	}

	@Then("^selects the user \"([^\"]*)\" to Approve the Account Adjusted done through internal adjstment\"([^\"]*)\"$")
	public void selects_the_user_to_Approve_the_Account_Adjusted_done_through_internal_adjstment(String tpname,
			String intenalAdjstmt) throws Throwable {
		sleepWait(2000);
		System.out.println(records);
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
		for(int i=0;i<adjustmentRecords.size();i++) {
		if(wd.findElement(By.xpath("//tr["+i+"]//td[2]")).getText().equalsIgnoreCase("internal adjustmemnt")
				&&wd.findElement(By.xpath("//tr["+i+"]//td[9]")).getText().equalsIgnoreCase("pending")) {
			records=i;
			break;
		}
		}
		System.out.println(elementText("txt_acAdjst", "/tr[" + records + "]/td[2]"));
		System.out.println(elementText("txt_acAdjst", "/tr[" + records + "]/td[9]"));
		// assertEquals(elementText("txt_acAdjst", "/tr["+records+"]/td[2]"),
		// intenalAdjstmt);
		assertEquals(elementText("txt_acAdjst", "/tr[" + records + "]/td[5]"), tpname);
		// assertEquals(elementText("txt_acAdjst", "/tr["+records+"]/td[6]"),
		// createdDaterec);
		// assertEquals(elementText("txt_acAdjst", "/tr["+records+"]/td[7]"), 0);
		assertEquals(elementText("txt_acAdjst", "/tr[" + records + "]/td[8]").toLowerCase(),
				performOfficer.toLowerCase());
		assertEquals(elementText("txt_acAdjst", "/tr[" + records + "]/td[9]"), "Pending");

		System.out.println(elementText("txt_acAdjst", "/tr[" + records + "]/td[9]"));
		System.out.println(elementText("txt_acAdjst", "/tr[" + records + "]/td[5]"));

		clickOn("slash", "tr[" + records + "]/td[10]//button");
		sleepWait(8000);
		assertEquals(elementText("txt_acAdjstmnt", ""), "Account Adjustment");
		sleepWait(5000);

		// Validation the records filled during AccAdjst while Accepting the
		// accAdjstmnet
		assertEquals(getvalue("txt_action", "").toLowerCase(), Acaction);

		assertEquals(getvalue("txt_CreatedDate", ""), createdDaterec);
		assertEquals(getvalue("input_performedby", "").toLowerCase(), performOfficer);
		assertEquals(getvalue("input_source", ""), source);
		assertEquals(getvalue("txt_approvedBy", ""), performOfficer);
		// assertEquals(getvalue("input_sourceid", ""),"Internal adjustment" );
		assertEquals(getvalue("input_taxpayer", ""), txpayer);

		assertEquals(elementText("txt_ORefid", ""), "");
		assertEquals(elementText("txt_Odate", ""), olddate);
		assertEquals(elementText("txt_Operiod", ""), oldperiod);
		assertEquals(elementText("txt_Oparticular", ""), oldpartic);

		assertEquals(elementText("txt_Ocharge", ""), "Debit");
		assertEquals(elementText("txt_OvatLiabil", ""), ovatliab);
		assertEquals(elementText("txt_Oltfee", ""), oltfee);
		assertEquals(elementText("txt_Oint", ""), oint);
		assertEquals(elementText("txt_Openal", ""), openal);
		// Adjustemnet Records validate

		assertEquals(elementText("txt_AdjRefid", ""), "");
		assertEquals(elementText("txt_Adjdate", ""), cdate);
		assertEquals(elementText("txt_Adjperiod", ""), adjperiod);
		assertEquals(elementText("txt_Adjparticular", ""), "Account Adjustment");
		assertEquals(getvalue("txt_Adjcharge", ""), adjcharge);
		assertEquals(getvalue("txt_AdjvatLiabil", ""), adjvatliab);
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
		sleepWait(3000);

	}

	/*
	 * @Then("^selects the user \"([^\"]*)\" to validate the previous button for account adjustmentd done through internal adjstment\"([^\"]*)\"$"
	 * ) public void
	 * selects_the_user_to_validate_the_previous_button_for_account_adjustmentd_done_through_internal_adjstment
	 * (String tpname, String arg2) throws Throwable { records =2;
	 * System.out.println(records); clickOn("filterby_acAdjstmnt","");
	 * sleepWait(2000); clickOn("filerbyTPayer_acAjstmt",""); sleepWait(2000);
	 * type("input_searchAcadjst", tpname); clickOn("btn_searchAcadjst", "");
	 * assertEquals(elementText("txt_acAdjst", "/tr["+records+"]/td[9]"),
	 * "Pending"); clickOn("txt_acAdjst","/tr["+records+"]/td[10]//button");
	 * sleepWait(1500); clickOn("btn_accadjprev",""); sleepWait(3000);
	 * assertEquals(elementText("txt_acAdjstmnt", ""), arg2);
	 * 
	 * }
	 */
	/*
	 * @Then("^selects the user \"([^\"]*)\" to Reject the request for account adjustmentd done through internal adjstment\"([^\"]*)\"$"
	 * ) public void
	 * selects_the_user_to_Reject_the_request_for_account_adjustmentd_done_through_internal_adjstment
	 * (String tpname, String arg2) throws Throwable {
	 * clickOn("filterby_acAdjstmnt",""); sleepWait(2000);
	 * clickOn("filerbyTPayer_acAjstmt",""); type("input_searchAcadjst", tpname);
	 * clickOn("btn_searchAcadjst", "");
	 * clickOn("txt_acAdjst","/tr["+records+"]/td[10]/button"); sleepWait(1500);
	 * clickOn("btn_adjstReject",""); sleepWait(2000);
	 * assertEquals(elementText("txt_acAdjstmnt", ""), arg2);
	 * 
	 * 
	 * 
	 * 
	 * }
	 */
	@Then("^selects the user \"([^\"]*)\" to validate the \"([^\"]*)\" button for account adjustmentd done through internal adjstment\"([^\"]*)\"$")
	public void selects_the_user_to_validate_the_button_for_account_adjustmentd_done_through_internal_adjstment(
			String tpname, String arg2, String arg3) throws Throwable {

		if (arg2.equals("previous")) {
			System.out.println(records);
			clickOn("filterby_acAdjstmnt", "");
			sleepWait(2000);
			clickOn("filerbyTPayer_acAjstmt", "");
			sleepWait(2000);
			type("input_searchAcadjst", tpname);
			clickOn("btn_searchAcadjst", "");
			assertEquals(elementText("txt_acAdjst", "/tr[" + records + "]/td[9]"), "Pending");
			assertEquals(elementText("slash", "tr[2]/td[9]"), "Pending");
			clickOn("txt_acAdjst", "/tr[" + records + "]/td[10]//button");
			clickOn("slash", "tr[2]/td[10]//button");
			sleepWait(1500);
			clickOn("btn_accadjprev", "");
			sleepWait(3000);
			assertEquals(elementText("txt_acAdjstmnt", ""), arg3);

		}
		if (arg2.equals("Reject")) {
			System.out.println(records);
			clickOn("filterby_acAdjstmnt", "");
			sleepWait(2000);
			clickOn("filerbyTPayer_acAjstmt", "");
			sleepWait(2000);
			type("input_searchAcadjst", tpname);
			clickOn("btn_searchAcadjst", "");
			assertEquals(elementText("txt_acAdjst", "/tr[" + records + "]/td[9]"), "Pending");
			clickOn("txt_acAdjst", "/tr[" + records + "]/td[10]//button");
			clickOn("txt_acAdjst", "/tr[" + records + "]/td[10]//button");
			sleepWait(1500);
			clickOn("btn_accadjprev", "");
			sleepWait(3000);
			assertEquals(elementText("txt_acAdjstmnt", ""), arg3);

		}

	}

	@Then("^verifies the notice generated$")
	public void verifies_the_notice_generated()throws Throwable {

		saveFile();
		PDDocument doc = PDDocument.load(getLatestFilefromDir());
		PDFTextStripper pdfStripper = new PDFTextStripper();
		String text = pdfStripper.getText(doc);
		assertTrue(text.contains("Notice of Account Adjustment"));
		assertTrue(text.contains(txpayer));

	}

	@Then("^click on Add button and selects the transaction for adjustment\"([^\"]*)\"$")
	public void click_on_Add_button_and_selects_the_transaction_for_adjustment(String arg1) throws Throwable {

		sleepWait(2000);
		clickOn("btn_add", "");
		// wd.switchTo().frame(wd.findElement(By.xpath("//iframe[@id='myiFrameForSilentRenew']")));
		sleepWait(2000);
		// elementText("txt_stmttransPopup","Statement of Transaction");
		/*
		 * clickOn("",""); datePicker(arg2); datePicker(arg3);
		 */
		List<WebElement> particularRecordslist = wd.findElements(By.xpath("(//tbody)[2]//td[5]"));
		for (int i = 0; i < particularRecordslist.size(); i++) {

			String Rpartiulars = particularRecordslist.get(i).getText();
			assertEquals(Rpartiulars.equalsIgnoreCase("Assessment") || Rpartiulars.equalsIgnoreCase("ReAssessment"),
					true);
		}
		clickOn("radio_stmtrecords", "");


	}

	@When("^user click on Case Management$")
	public void user_click_on_Case_Management() throws Throwable {
		clickOn("nav_href_caseManagement", "");
		sleepWait(2000);
		assertEquals(elementText("txt_heading", ""), "Case Management");

	}

	@Then("^user performs the Account adjustment for taxpayer\"([^\"]*)\"CaseId\"([^\"]*)\"$")
	public void user_performs_the_Account_adjustment_for_taxpayer_CaseId(String tpname, String CaseId)
			throws Throwable {
		if (CaseMObjectionid!=null) {
			CaseMObjectionid = CaseId;
		}
	
		// sleepWait(2000);
		clickOn("filterby_acAdjstmnt", "");
		sleepWait(2000);
		clickOn("drpdwn_CaseId", "");
		type("input_searchAcadjst", CaseId);
		clickOn("btn_searchAcadjst", "");
		sleepWait(3000);
		System.out.println(elementText("txt_rec2", ""));

		//assertEquals(elementText("txt_rec2", ""), CaseId);

		clickOn("btn_caseManage", "");
		sleepWait(2000);
		clickOn("btn_CaseView", "");

	}

	@Then("^officer the performs the action \"([^\"]*)\"$")
	public void officer_the_performs_the_action(String arg1) throws Throwable {

		wd.switchTo().frame(wd.findElement(By.xpath("//iframe")));
		sleepWait(2000);
		assertEquals(getvalue("caseRefId", ""), CaseMObjectionid);
		drp_select("drpdwn_CAseaction", arg1);
		sleepWait(2000);

	}

	@Then("^click on submit button on Case Management$")
	public void click_on_submit_button_on_Case_Management() throws Throwable {
		sleepWait(2000);
		clickOn("btn_CaseSubmit", "");
		wd.switchTo().defaultContent();
	}

	@Then("^validates created date Performed By\"([^\"]*)\"Source\"([^\"]*)\" and Source Id must be CaseId\"([^\"]*)\"TaxPayer\"([^\"]*)\"$")
	public void validates_created_date_Performed_By_Source_and_Source_Id_must_be_CaseId_TaxPayer(String user,
			String src, String cid, String tpayer) throws Throwable {

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
		// assertEquals(getvalue("input_source", ""), src);
		System.out.println(src);
		source = src;
		//assertEquals(getvalue("input_sourceid", ""), cid);
		assertEquals(getvalue("input_taxpayer", ""), tpayer);
		txpayer = tpayer;
	}

	@Then("^click on Add button and selects the Assessment id\"([^\"]*)\" for adjustment$")
	public void click_on_Add_button_and_selects_the_Assessment_id_for_adjustment(String AssessmentId) throws Throwable {

		sleepWait(2000);
		clickOn("btn_add", "");
		sleepWait(3000);
		clickOn("filterby_acAdjstmnt", "");
		sleepWait(3000);
		clickOn("drpdwn_transid", "");
		sleepWait(2000);
		type("input_searchTrans", AssessmentId);
		sleepWait(2000);
		clickOn("btn_searchFiterTransac", "");
		sleepWait(3000);
		clickOn("radio_stmtrecords", "");
		clickOn("btn_selectRec", "");
		sleepWait(3000);
	}

	@Then("^user is Case Management with Status \"([^\"]*)\" and Case id\"([^\"]*)\"$")
	public void user_is_Case_Management_with_Status_and_Case_id(String Status, String CaseId) throws Throwable {
		wd.switchTo().frame(wd.findElement(By.xpath("//iframe")));
		assertEquals(getvalue("caseRefId", ""), CaseMObjectionid);
		sleepWait(2000);
		assertEquals(elementText("txt_CaseStatusAdjtmt", ""), Status);
		wd.switchTo().defaultContent();

	}

	@Then("^selects the user \"([^\"]*)\" with case id \"([^\"]*)\"Approve the Account Adjusted done through Obection and Appeal\"([^\"]*)\"$")
	public void selects_the_user_with_case_id_Approve_the_Account_Adjusted_done_through_Obection_and_Appeal(
			String tpname, String caseid, String type) throws Throwable {

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

		assertEquals(elementText("txt_rec1", ""), caseid);// CASE ID
		assertEquals(elementText("txt_rec2", ""), type);// ADJUSTMENT TYPE

		assertEquals(elementText("txt_rec5", ""), tpname);// TAX
		// String creationDate=elementText("txt_rec6","");
		// SimpleDateFormat d= new SimpleDateFormat("dd/MM/YYYY"); ///Days Count
		//
		// countDays("dd/MM/YYYY",creationDate,d.format(new Date()));
		// assertEquals(elementText("txt_rec7",""),caseid); Days count
		assertEquals(elementText("txt_rec8", ""), performOfficer);// Performing Officer
		assertEquals(elementText("txt_rec9", ""), "Pending");// Pending Status
		clickOn("txt_rec10", "");

		sleepWait(5000);

		assertEquals(elementText("txt_acAdjstmnt", ""), "Account Adjustment");
		sleepWait(5000);

		// Validation the records filled during AccAdjst while Accepting the
		// accAdjstmnet
		assertEquals(getvalue("txt_action", "").toLowerCase(), Acaction);

		assertEquals(getvalue("txt_CreatedDate", ""), createdDaterec);
		assertEquals(getvalue("input_performedby", "").toLowerCase(), performOfficer);
		assertEquals(getvalue("input_source", ""), source);
		assertEquals(getvalue("txt_approvedBy", ""), approvedOfficer);
		// assertEquals(getvalue("input_sourceid", ""),"Internal adjustment" );
		assertEquals(getvalue("input_taxpayer", ""), txpayer);

		assertEquals(elementText("txt_ORefid", ""), "");
		assertEquals(elementText("txt_Odate", ""), olddate);
		assertEquals(elementText("txt_Operiod", ""), oldperiod);
		assertEquals(elementText("txt_Oparticular", ""), oldpartic);

		assertEquals(elementText("txt_Ocharge", ""), "Debit");
		assertEquals(elementText("txt_OvatLiabil", ""), ovatliab);
		assertEquals(elementText("txt_Oltfee", ""), oltfee);
		assertEquals(elementText("txt_Oint", ""), oint);
		assertEquals(elementText("txt_Openal", ""), openal);
		// Adjustemnet Records validate

		assertEquals(elementText("txt_AdjRefid", ""), "");
		assertEquals(elementText("txt_Adjdate", ""), cdate);
		assertEquals(elementText("txt_Adjperiod", ""), adjperiod);
		assertEquals(elementText("txt_Adjparticular", ""), "Account Adjustment");
		assertEquals(getvalue("txt_Adjcharge", ""), adjcharge);
		assertEquals(getvalue("txt_AdjvatLiabil", ""), adjvatliab);
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
	public void status_should_be_changed_to_through_to_the_account_adjusted_done_through_internal_adjstment_TaxPayerName(
			String arg1, String arg2, String tpname) throws Throwable {

		assertEquals(elementText("txt_acAdjstmnt", ""), "Account Adjustment");
		clickOn("filterby_acAdjstmnt", "");
		sleepWait(2000);
		clickOn("filerbyTPayer_acAjstmt", "");
		type("input_searchAcadjst", tpname);
		clickOn("btn_searchAcadjst", "");

		assertEquals(elementText("txt_acAdjst", "/tr[" + records + "]/td[9]"), "Approve");
		records++;

	}

	@Then("^status should be changed to \"([^\"]*)\" through to the account adjusted done through Objection & Appeal\"([^\"]*)\" of CaseId\"([^\"]*)\"$")
	public void status_should_be_changed_to_through_to_the_account_adjusted_done_through_Objection_Appeal_of_CaseId(
			String status, String arg2, String caseId) throws Throwable {

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
	public void selects_the_user_with_case_id_Approve_the_Account_Adjusted_done_through_Obection_and_Appeal(
			String tpname, String cid, String objection, String action, String user, String ApproveO, String reason,
			String comments) throws Throwable {

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
		// assertEquals(getvalue("input_sourceid", ""),"Internal adjustment" );
		assertEquals(getvalue("input_taxpayer", ""), tpname);
		assertEquals(getvalue("input_commnets", ""), comments);
		assertEquals(getvalue("txt_reason", ""), reason);
		clickOn("btn_adjstApprove", "");
		txpayer = tpname;

	}

	@Then("^selects the user \"([^\"]*)\" with case id \"([^\"]*)\"Reject the Account Adjusted done through Obection and Appeal\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"$")
	public void selects_the_user_with_case_id_Reject_the_Account_Adjusted_done_through_Obection_and_Appeal(
			String tpname, String cid, String objection, String action, String user, String ApproveO, String reason,
			String comments) throws Throwable {

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
public void user_performs_the_Account_adjustment_for_taxpayer_with(String tpname, String status) throws Throwable {
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
public void validates_created_date_Performed_By_Source_and_TaxPayer(String user, String src, String tpayer) throws Throwable {
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
	System.out.println(src);
	source = src;

	assertEquals(getvalue("input_taxpayer", ""), tpayer);
	txpayer = tpayer;
}

@Then("^Source Id must be CaseId\"([^\"]*)\" from Objection$")
public void source_Id_must_be_CaseId_from_Objection(String arg1) throws Throwable {
	assertEquals(getvalue("input_sourceid", ""), CaseMObjectionid);
}

@Then("^Source Id must be CaseId from Debt Management$")
public void source_Id_must_be_CaseId_from_Debt_Management() throws Throwable {
	assertEquals(getvalue("input_sourceid", ""), CaseDebtId);
}

@Then("^validates created date Performed By\"([^\"]*)\"Source\"([^\"]*)\" and Source Id must be CaseId from Debt Management TaxPayer\"([^\"]*)\"$")
public void validates_created_date_Performed_By_Source_and_Source_Id_must_be_CaseId_from_Debt_Management_TaxPayer(String user, String src, String tpayer) throws Throwable {


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
	System.out.println(src);
	source = src;
	assertEquals(getvalue("input_sourceid", ""), CaseDebtId);
	assertEquals(getvalue("input_taxpayer", ""), tpayer);
	txpayer = tpayer;
}


@Then("^click on Add button$")
public void click_on_Add_button() throws Throwable {
	sleepWait(2000);
	clickOn("btn_add", "");
	sleepWait(3000);
}

@Then("^selects the transaction for DEBT Adjustment from records of \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
public void selects_the_transaction_for_DEBT_Adjustment_from_records_of(String arg1, String arg2, String arg3) throws Throwable {

	List<WebElement> records=wd.findElements(By.xpath("//*[@class='data-table-body ng-star-inserted']//tr"));
	clickOn("btn_closeStatement", "");
	sleepWait(5000);
	clickOn("btn_add", "");
	
	for(int i=1;i<=records.size();i++) {	
		sleepWait(2000);
			wd.findElement(By.xpath("//*[@class='data-table-body ng-star-inserted']//tr["+i+"]//td//input")).click();
			clickOn("btn_selectRec", "");
			sleepWait(5000);
			System.out.println("Records"+i+" Seletec");
			clickOn("btn_add", "");
	
		
	}
	clickOn("btn_closeStatement", "");
	sleepWait(5000);
	for(int j=1;j<=records.size();j++) {
		//tr[1]/9]
		
		wd.findElement(By.xpath("//tr["+(3*j-1)+"]//td[6]//input")).sendKeys(wd.findElement(By.xpath("//tr["+(3*j-2)+"]//td[6]")).getText());
		
		
		wd.findElement(By.xpath("//tr["+(3*j-1)+"]//td[7]//input")).sendKeys(wd.findElement(By.xpath("//tr["+(3*j-2)+"]//td[7]")).getText());
		
		
		wd.findElement(By.xpath("//tr["+(3*j-1)+"]//td[9]//input")).sendKeys(wd.findElement(By.xpath("//tr["+(3*j-2)+"]//td[9]")).getText());
		
	}
 
}

@Then("^selects user of TaxPayer \"([^\"]*)\" with Case Id to Approve the Account Adjustment Performed by\"([^\"]*)\" action\"([^\"]*)\" Approve Officer\"([^\"]*)\" Source\"([^\"]*)\" reason\"([^\"]*)\"Comments\"([^\"]*)\"$")
public void selects_user_of_TaxPayer_with_Case_Id_to_Approve_the_Account_Adjustment_Performed_by_action_Approve_Officer_Source_reason_Comments(String tpname,String performedby,String adjAction,String officer, String src, String reason, String comments) throws Throwable {

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
// assertEquals(getvalue("input_sourceid", ""),"Internal adjustment" );
assertEquals(getvalue("input_taxpayer", ""), tpname);
assertEquals(getvalue("input_commnets", ""), comments);
assertEquals(getvalue("txt_reason", ""), reason);
clickOn("btn_adjstApprove", "");
sleepWait(5000);
}

}
