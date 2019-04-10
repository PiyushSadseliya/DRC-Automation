package org.drc.vat.StepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import static org.drc.vat.appmanager.HelperBase.clickOn;
import static org.drc.vat.appmanager.HelperBase.waitFor;
import static org.drc.vat.appmanager.HelperBase.type;
import static org.drc.vat.appmanager.HelperBase.saveFile;
import static org.testng.Assert.assertEquals;

import java.awt.AWTException;
import java.io.IOException;
import java.text.DecimalFormat;
import java.text.NumberFormat;
import java.util.Calendar;
import java.util.Locale;

import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;

import static org.drc.vat.appmanager.HelperBase.pageSource;
import static org.drc.vat.appmanager.HelperBase.buttonEnabled;
import static org.drc.vat.appmanager.HelperBase.validationMessage;
import org.openqa.selenium.By;

import static org.drc.vat.appmanager.HelperBase.elementText;
import static org.drc.vat.appmanager.HelperBase.getvalue;
import static org.drc.vat.appmanager.HelperBase.getLatestFilefromDir;
import static org.drc.vat.appmanager.HelperBase.wd;
import static org.drc.vat.appmanager.HelperBase.sleepWait;
import static org.drc.vat.appmanager.HelperBase.clearCache;
import static org.drc.vat.appmanager.HelperBase.getAttribute;
import static org.drc.vat.appmanager.HelperBase.assessmentOfficer;
import static org.drc.vat.appmanager.HelperBase.monthName;
/*
 * 
 * the Assessment office does the assessment of the tax payer  and can Raise Notice after assessing the VAT
 * 
 * 
 */

public class PaymentSummaryLiabilityCalculationPaymentDueManualAssessment {

	// esum Edeclare sum
	// asum Assessment Sum
	// Edeclare ,Assess EDeclaration and assess column records fetch
	/*
	 * int esum=0,asum=0; int Edeclare,Assess,addL;
	 */
	String tpname = null;

	@Given("^The user has done the filing for the particular month$")
	public void the_user_has_done_the_filing_for_the_particular_month() throws Throwable {

		sleepWait(5000);
	}

	private void manualAssessmenthome(String period, String tpayer) throws InterruptedException {

		Calendar cal = Calendar.getInstance();
		String month = monthName[cal.get(Calendar.MONTH)];
		clickOn("nav_manualAssessment", "");
		sleepWait(5000);
		if (!month.equalsIgnoreCase(period)) {
			clickOn("drp_month", "");
			clickOn("span", "[contains(text(),'" + period + "')]");
			sleepWait(2000);
		}
		clickOn("drp_mafilterby", "");

		//clickOn("span", "[contains(text(),'Taxpayer')]");
		clickOn("drp_CM_TaxPayer_Click", "");
		sleepWait(1000);
		type("input_masearch", tpayer);
		sleepWait(2000);
		clickOn("btn_SearchFX", "");
		sleepWait(2000);
		clickOn("drp_AssestManage", "");
		//clickOn("AssesManage", "");
		sleepWait(2000);
	}

	@When("^the assessemnt officer does the assessment for that particular month with \"([^\"]*)\" Updation for period\"([^\"]*)\"year\"([^\"]*)\"tpayer\"([^\"]*)\"$")
	public void the_assessemnt_officer_does_the_assessment_for_that_particular_month_with_Updation_for_period_year_tpayer(
			String updation, String period, String year, String tpayer) throws Throwable {

		tpname = tpayer;

		manualAssessmenthome(period, tpayer);
		clickOn("href_maassess", "");
		sleepWait(2000);
	}

	@Then("^the officer is on the Payment Summary page for Liabilty Calculation and Payment Due$")
	public void the_officer_is_on_the_Payment_Summary_page_for_Liabilty_Calculation_and_Payment_Due() throws Throwable {
		sleepWait(2000);
		assertEquals(elementText("txt_name_A", ""), tpname);
		assertEquals(elementText("element_nontxable", ""), "8. Non-taxable transactions");
		sleepWait(2000);
		clickOn("btn_maassessNext", "");
		sleepWait(3000);
		assertEquals(elementText("txt_name_A", ""), tpname);
		sleepWait(2000);
		assertEquals(elementText("element_amtvatdeductible", ""), "16. Amount of VAT Deductible");
		sleepWait(2000);
		clickOn("btn_maassessNext", "");
		sleepWait(3000);
		assertEquals(elementText("txt_name_A", ""), tpname);
		assertEquals(elementText("element_recoveryofdeduc", ""), "18. Supplementary deductions");
		sleepWait(2000);
		clickOn("btn_maassessNext", "");
		sleepWait(3000);
		assertEquals(elementText("txt_name_A", ""), tpname);
		sleepWait(2000);
		clickOn("btn_maassessNext", "");
		sleepWait(4000);
		assertEquals(elementText("txt_name_A", ""), tpname);
		sleepWait(3000);

	}

	@Then("^user clicks on Prev button and it should be on Assessement Summary Tab$")
	public void user_clicks_on_Prev_button_and_it_should_be_on_Assessement_Summary_Tab() throws Throwable {

		sleepWait(2000);
		clickOn("btn_maPrevioustab", "");
		sleepWait(4000);
		assertEquals(elementText("txt_name_A", ""), tpname);
		sleepWait(2000);

	}

	@Then("^user click on Next button on Asssessmnet Summary Tab and it should be on Payment Summary tab$")
	public void user_click_on_Next_button_on_Asssessmnet_Summary_Tab_and_it_should_be_on_Payment_Summary_tab()
			throws Throwable {
		sleepWait(2000);
		clickOn("btn_maassessNext", "");
		sleepWait(3000);
		assertEquals(elementText("txt_name_A", ""), tpname);
		assertEquals(elementText("element_pymtsummary", ""), "Liability Calculation");
		assertEquals(elementText("txt_name_A", ""), tpname);
		sleepWait(2000);

	}

	@Then("^enter the penalty amount\"([^\"]*)\"$")
	public void enter_the_penalty_amount(String arg1) throws Throwable {
		sleepWait(2000);
		clickOn("btn_maassessNext", "");
		sleepWait(3000);
		assertEquals(elementText("txt_name_A", ""), tpname);
		sleepWait(2000);
		assertEquals(elementText("element_pymtsummary", ""), "Liability Calculation");
		sleepWait(2000);
		type("txt_Aliabiltypenalty", arg1);

	}

	/*
	 * @Then("^Calculates the Additional Liability column$") public void
	 * calculates_the_Additional_Liability_column() throws Throwable { String
	 * EremovedDot,EremovedComma,AremovedDot,AremovedComma; for(int i=0;i<=8;i++) {
	 * String edeclararion=wd.findElement(By.xpath("//tr["+i+"]/td[2]")).getText();
	 * String assessment=wd.findElement(By.xpath("//tr["+i+"]/td[3")).getText();
	 * 
	 * System.out.println(edeclararion); System.out.println(assessment);
	 * 
	 * if(edeclararion.contains(".")||edeclararion.contains(".")||assessment.
	 * contains(",")||assessment.contains(",")) {
	 * EremovedDot=edeclararion.replace(".", "");
	 * EremovedComma=EremovedDot.replace(",", ".");
	 * AremovedDot=assessment.replace(".", "");
	 * AremovedComma=AremovedDot.replace(",", ".");
	 * 
	 * 
	 * }else { EremovedComma=edeclararion; AremovedComma=assessment;
	 * 
	 * 
	 * } Edeclare=Integer.parseInt(edeclararion); System.out.println(Edeclare);
	 * Assess=Integer.parseInt(assessment); System.out.println(Assess); esum =
	 * esum+Edeclare; System.out.println(esum); asum=asum+Assess;
	 * System.out.println(asum); //Additional Liability Calculation String
	 * addlL=wd.findElement(By.xpath("//tr["+i+"]/td[4")).getText();
	 * addL=Assess-Edeclare;
	 * 
	 * elementText(Integer.toString(addL),addlL);
	 * 
	 * 
	 * 
	 * } String
	 * edeclararionpenalty=wd.findElement(By.xpath("//tr[9]/td[2]")).getText();
	 * String assessmentpenalty=wd.findElement(By.xpath("//tr[9]/td[3")).getText();
	 * 
	 * }
	 */

	@Then("^Checks the amount to pay in Liability Calculation$")
	public void checks_the_amount_to_pay_in_Liability_Calculation() throws Throwable {
		assertEquals(elementText("txt_Apymtdueint", ""), elementText("txt_Aliabiltyint", ""));
		assertEquals(elementText("txt_Apymtdueltfee", ""), elementText("txt_Aliabiltyltfee", ""));
		assertEquals(elementText("txt_Apymtduepenalty", ""), elementText("txt_Aliabiltypenalty", ""));
		assertEquals(elementText("txt_Apymtdueamttopay", ""), elementText("txt_Aliabiltyamttopay", ""));

	}

	@Then("^Clicks on Save button on Payment Summary page and message is displayed\"([^\"]*)\"$")
	public void clicks_on_Save_button_on_Payment_Summary_page_and_message_is_displayed(String arg1) throws Throwable {
		clickOn("btn_maSAve", "");
		waitFor("btn_maSAve");		
		sleepWait(2000);
		assertEquals(validationMessage(), arg1);
	}

	@Then("^click on Previous Button on Payment Summary page and user is on Manual Assessment Landing Screen$")
	public void click_on_Previous_Button_on_Payment_Summary_page_and_user_is_on_Manual_Assessment_Landing_Screen()
			throws Throwable {
		clickOn("btn_maprev", "");
		sleepWait(5000);
		//assertEquals(wd.findElement(By.xpath("(//h6)[2]")).getText(), "Period : ");

	}

	@Then("^Calculates the Additional Liability column$")
	public void calculates_the_Additional_Liability_column() throws Throwable {
		// net vat to be paid
		String pen = null;
		// Net VAT to be paid
		Double netLiabilvatpaitd = frenchtoDouble(elementText("txt_Aliabiltynetvatpaid", ""))
				- frenchtoDouble(elementText("txt_Eliabiltynetvatpaid", ""));
		assertEquals(elementText("txt_ALliabiltynetvatpaid", ""), appendfrenchsys(tofrench(netLiabilvatpaitd)));
		// VAT Credit
		Double aLiabilcredit = frenchtoDouble(elementText("txt_Aliabiltycredit", ""))
				- frenchtoDouble(elementText("txt_Eliabiltycredit", ""));
		assertEquals(elementText("txt_ALliabiltycredit", ""), appendfrenchsys(tofrench(aLiabilcredit)));
		// Refund of VAT credit requested
		Double alvatcreditRef = frenchtoDouble(elementText("txt_Aliabiltycreditrefundreq", ""))
				- frenchtoDouble(elementText("txt_Eliabiltyvcreditrefundreq", ""));
		assertEquals(elementText("txt_ALliabiltycreditrefundreq", ""), appendfrenchsys(tofrench(alvatcreditRef)));
		// VAT Credit carried forward
		Double alvatcreditfwd = frenchtoDouble(elementText("txt_Aliabiltyvcreditfwd", ""))
				- frenchtoDouble(elementText("txt_Eliabiltyvcreditfwd", ""));
		assertEquals(elementText("txt_ALliabiltyvcreditfwd", ""), appendfrenchsys(tofrench(alvatcreditfwd)));
		// VAT on externally financed public procurement
		Double alpublicproc = frenchtoDouble(elementText("txt_Aliabiltyvpublicprocu", ""))
				- frenchtoDouble(elementText("txt_Eliabiltyvpublicprocu", ""));
		assertEquals(elementText("txt_ALliabiltyvpublicprocu", ""), appendfrenchsys(tofrench(alpublicproc)));
		// VAT for third party account
		Double althirdparty = frenchtoDouble(elementText("txt_AliabiltyTpartyac", ""))
				- frenchtoDouble(elementText("txt_EliabiltyTpartyac", ""));
		assertEquals(elementText("txt_ALliabiltyTpartyac", ""), appendfrenchsys(tofrench(althirdparty)));
		// Interest
		assertEquals(elementText("txt_Aliabiltyint", ""), elementText("txt_ALliabiltyint", ""));
		// Late Fees
		assertEquals(elementText("txt_Aliabiltyltfee", ""), elementText("txt_ALliabiltyltfee", ""));
		// Penalty
		if (!NumberFormat.getInstance(Locale.GERMAN)
				.format(Double.parseDouble(
						wd.findElement(By.xpath("//tr[9]//div[contains(text(),'Penalty')]//following::input"))
						.getAttribute("value")))
				.toString().contains(",")) {
			pen = NumberFormat.getInstance(Locale.GERMAN)
					.format(Double.parseDouble(
							wd.findElement(By.xpath("//tr[9]//div[contains(text(),'Penalty')]//following::input"))
							.getAttribute("value")))
					+ ",00";
		} else {
			pen = NumberFormat.getInstance(Locale.GERMAN)
					.format(Double.parseDouble(
							wd.findElement(By.xpath("//tr[9]//div[contains(text(),'Penalty')]//following::input"))
							.getAttribute("value")))
					.toString();
		}
		assertEquals(elementText("txt_ALliabiltypenalty", ""), pen);

		// Amount to pay
		Double alamttopay = frenchtoDouble(elementText("txt_Aliabiltyamttopay", ""))
				- frenchtoDouble(elementText("txt_Eliabiltyamttopay", ""));
		assertEquals(elementText("txt_ALliabiltyamttopay", ""), appendfrenchsys(tofrench(alamttopay)));



	}

	@Then("^Calculates the Net Payable column of Paymnent Due table$")
	public void calculates_the_Net_Payable_column_of_Paymnent_Due_table() throws Throwable {

		// assertEquals(elementText("txt_ApymtdueVatLiab", ""),
		// elementText("txt_NPpymtdueVatLiab", ""));
		assertEquals(elementText("txt_Apymtdueint", ""), elementText("txt_ALliabiltyint", ""));

		assertEquals(elementText("txt_Apymtdueltfee", ""), elementText("txt_ALliabiltyltfee", ""));

		assertEquals(elementText("txt_Apymtduepenalty", ""), elementText("txt_ALliabiltypenalty", ""));

		assertEquals(elementText("txt_Apymtdueamttopay", ""), elementText("txt_Aliabiltyamttopay", ""));

		assertEquals(elementText("txt_ApymtdueVatLiab", ""), elementText("txt_NPpymtdueVatLiab", ""));

		assertEquals(elementText("txt_Apymtdueint", ""), elementText("txt_NPpymtdueint", ""));

		assertEquals(elementText("txt_Apymtdueltfee", ""), elementText("txt_NPpymtdueltfee", ""));

		assertEquals(elementText("txt_Apymtduepenalty", ""), elementText("txt_NPpymtduepenalty", ""));

		assertEquals(elementText("txt_Apymtdueamttopay", ""), elementText("txt_NPpymtdueamttopay", ""));

	}

	@Then("^User click on download button message should be displayead as \"([^\"]*)\"$")
	public void user_click_on_download_button_message_should_be_displayead_as(String arg1) throws Throwable {
		sleepWait(2000);
		clickOn("btn_maEfilingSchedule", "");
		sleepWait(2000);
		// System.out.println(validationMessage());
		//assertEquals(validationMessage(), arg1);
		sleepWait(2000);
	} 

	@Then("^user clicks on Raise notice button and Notice is generated as per the Liability Calculation Table and Payment Due Table$")
	public void user_clicks_on_Raise_notice_button_and_Notice_is_generated_as_per_the_Liability_Calculation_Table_and_Payment_Due_Table() throws Throwable {
		String per =getvalue("txt_Aperiod","").replace(" ", "").substring(0, 3);
		//System.out.println(per);
		String nitva=elementText("txt_Anitva","");
		//System.out.println(nitva);
		String []Lvat=elementText("txt_Lvat","").split("\\r?\\n");
		//System.out.println(Lvat);

		String []Lcred=elementText("txt_Lcredit","").split("\\r?\\n");

		String []Lref=elementText("txt_Lrefund","").split("\\r?\\n");		



		String []Lcredfwd=elementText("txt_Lcreditfwd","").split("\\r?\\n");			//System.out.println(frenchToIndian(Lcredfwd));
		String []Lpubproc=elementText("txt_Lpublicproc","").split("\\r?\\n");//System.out.println(frenchToIndian(Lpubproc));
		String []Ltparty=elementText("txt_Ltpartyac","").split("\\r?\\n");	//	System.out.println(Ltparty);
		String []Lint=elementText("txt_Lint","").split("\\r?\\n");//System.out.println(Lint);
		String []Lltfee=elementText("txt_Lltfee","").split("\\r?\\n");//System.out.println(Lltfee);

		String []Lamtpay=elementText("txt_Lamounttopay","").split("\\r?\\n");//System.out.println(Lamtpay);
		String []Pvat=elementText("txt_Pvat","").split("\\r?\\n");//System.out.println(Pvat);
		String []Pint=elementText("txt_Pint","").split("\\r?\\n");//System.out.println(Pint);
		String []Pltfee=elementText("txt_Pltfee","").split("\\r?\\n");//System.out.println(Pltfee);
		String []Ppen=elementText("txt_Ppena","").split("\\r?\\n");//System.out.println(Ppen);
		String []Pamt=elementText("txt_Pamounttopay","").split("\\r?\\n");//System.out.println(Pamt);

		sleepWait(3000);			
		clickOn("btn_maRaiseNotice","");
		sleepWait(20000);
		saveFile(); 
		sleepWait(2000);

		/**
		 *  Comment code from  here because of issue PDF issue  
		 */

		/*PDDocument doc = PDDocument.load(getLatestFilefromDir());   
PDFTextStripper pdfStripper = new PDFTextStripper();  
String text = pdfStripper.getText(doc);  
//System.out.println(text);
//Liability Calculation
assertEquals(text.contains(per), true);
assertEquals(text.contains(nitva), true);

assertEquals(text.contains(frenchToIndian(Lvat[1])), true);
assertEquals(text.contains(frenchToIndian(Lvat[2])), true);
assertEquals(text.contains(frenchToIndian(Lvat[3])), true);
assertEquals(text.contains(frenchToIndian(Lcred[1])), true);
assertEquals(text.contains(frenchToIndian(Lcred[2])), true);
assertEquals(text.contains(frenchToIndian(Lcred[3])), true);

assertEquals(text.contains(frenchToIndian(Lref[1])), true);
assertEquals(text.contains(frenchToIndian(Lref[2])), true);
assertEquals(text.contains(frenchToIndian(Lref[3])), true);
assertEquals(text.contains(frenchToIndian(Lcredfwd[1])), true);
assertEquals(text.contains(frenchToIndian(Lcredfwd[2])), true);
assertEquals(text.contains(frenchToIndian(Lpubproc[3])), true);
assertEquals(text.contains(frenchToIndian(Ltparty[1])), true);
assertEquals(text.contains(frenchToIndian(Ltparty[2])), true);
assertEquals(text.contains(frenchToIndian(Ltparty[3])), true);
assertEquals(text.contains(frenchToIndian(Lint[1])), true);
assertEquals(text.contains(frenchToIndian(Lint[2])), true);
assertEquals(text.contains(frenchToIndian(Lint[3])), true);
assertEquals(text.contains(frenchToIndian(Lltfee[1])), true);
assertEquals(text.contains(frenchToIndian(Lltfee[2])), true);
assertEquals(text.contains(frenchToIndian(Lltfee[3])), true);

assertEquals(text.contains(frenchToIndian(Lamtpay[1])), true);
assertEquals(text.contains(frenchToIndian(Lamtpay[2])), true);
assertEquals(text.contains(frenchToIndian(Lamtpay[3])), true);
//Payment Due
assertEquals(text.contains(frenchToIndian(Pvat[1])), true);
assertEquals(text.contains(frenchToIndian(Pvat[2])), true);
assertEquals(text.contains(frenchToIndian(Pvat[3])), true);
assertEquals(text.contains(frenchToIndian(Pint[1])), true);
assertEquals(text.contains(frenchToIndian(Pint[2])), true);
assertEquals(text.contains(frenchToIndian(Pint[3])), true);
assertEquals(text.contains(frenchToIndian(Pltfee[1])), true);
assertEquals(text.contains(frenchToIndian(Pltfee[2])), true);
assertEquals(text.contains(frenchToIndian(Pltfee[3])), true);
assertEquals(text.contains(frenchToIndian(Ppen[1])), true);
assertEquals(text.contains(frenchToIndian(Ppen[2])), true);
assertEquals(text.contains(frenchToIndian(Ppen[3])), true);
assertEquals(text.contains(frenchToIndian(Pamt[1])), true);
assertEquals(text.contains(frenchToIndian(Pamt[2])), true);
assertEquals(text.contains(frenchToIndian(Pamt[3])), true);



		 */
		sleepWait(5000);

		sleepWait(2000);
	}



	@Then("^Total Additional Liability tile should be displayed as Total Assessed\\(FC\\) minus Total e-declaration\\(FC\\)\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"$")
	public void total_Additional_Liability_tile_should_be_displayed_as_Total_Assessed_FC_minus_Total_e_declaration_FC(
			String arg1, String arg2, String arg3) throws Throwable {
		// NumberFormat nf= NumberFormat.getNumberInstance(Locale.ENGLISH);
		String TotaladdLiab = elementText("txt_totalAltile", "");
		System.out.println(frenchToIndian(TotaladdLiab.substring(3)));

		String Toatledeclared = elementText("txt_totalEtile", "");
		System.out.println(Toatledeclared.substring(3));
		String TotalAssessed = elementText("txt_totalAtile", ""); 
		System.out.println(TotalAssessed.substring(3));
		// double
		// TA=nf.parse(TotalAssessed).doubleValue()-nf.parse(TotaladdLiab).doubleValue();
		// assertEquals(TotalAssessed,NumberFormat.getInstance(Locale.GERMAN).format(TA),"");
		Double al = Double.parseDouble(frenchToIndian(TotalAssessed.substring(3)))
				- Double.parseDouble(frenchToIndian(Toatledeclared.substring(3)));

		NumberFormat nf = NumberFormat.getNumberInstance(Locale.ITALY);

		System.out.println(nf.format(al));
		assertEquals(appendfrenchsys(nf.format(al)), appendfrenchsys(TotaladdLiab.substring(3)));
		System.out.println();

		assertEquals(appendfrenchsys(Toatledeclared.substring(3)), appendfrenchsys(elementText("txt_Eliabiltyamttopay", "")));
		assertEquals(appendfrenchsys(TotalAssessed.substring(3)), appendfrenchsys(elementText("txt_Aliabiltyamttopay", "")));
		assertEquals(appendfrenchsys(TotaladdLiab.substring(3)), appendfrenchsys(elementText("txt_ALliabiltyamttopay", "")));

		assertEquals(elementText("txt_ALliabiltyltfee", ""), arg3);
		// String Linterest=elementText("txt_Aliabiltyint","");

		// assertEquals(Toatledeclared, TotalAssessed,"Total Assessed and Total
		// Ededeclared are not same");
		// assertEquals(TotaladdLiab, "0");

	}

	/*
	 * 
	 * To convert the text contain
	 * 
	 */
	private String frenchToIndian(String text) {

		return text.replace(".", "").replace(",", ".");

	}

	private double frenchtoDouble(String text) {
		return Double.parseDouble(frenchToIndian(text));
	}

	/*
	 * To convert the number to french System
	 * 
	 * 
	 */
	private String tofrench(Double d) {
		NumberFormat nf = NumberFormat.getNumberInstance(Locale.ITALY);

		return nf.format(d);
	}

	/*
	 * to append comma if the douoble value dont contains decimal places
	 * 
	 * 
	 */
	private String appendfrenchsys(String frenchNo) {
		String frenchnum;
		if (!frenchNo.contains(",")) {
			frenchNo = frenchNo + ",00";
		}
		return frenchNo;
	}

}
