package org.drc.vat.StepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import static org.drc.vat.appmanager.HelperBase.clickOn;
import static org.drc.vat.appmanager.HelperBase.type;
import static org.drc.vat.appmanager.HelperBase.saveFile;
import static org.testng.Assert.assertEquals;

import java.awt.AWTException;
import java.io.IOException;
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
	
	//esum Edeclare sum 
	//asum Assessment Sum 
	//Edeclare ,Assess EDeclaration and assess column records fetch
/*	int esum=0,asum=0;
	int Edeclare,Assess,addL;*/
	String tpname=null;

	@Given("^The user has done the filing for the particular month$")
	public void the_user_has_done_the_filing_for_the_particular_month() throws Throwable {
	       
	     sleepWait(5000);
	}
	private void manualAssessmenthome(String period,String tpayer) throws InterruptedException {
		
		Calendar cal = Calendar.getInstance();
	    String month = monthName[cal.get(Calendar.MONTH)];
	    clickOn("nav_manualAssessment","") ;
	    sleepWait(2000);
	    if(!month.equalsIgnoreCase(period))
		{clickOn("drp_manualAssessmnetPeriod","");  		
	     clickOn("span","[contains(text(),'"+period+"')]");
	     sleepWait(2000);
		}
	     clickOn("drp_mafilterby","");
	     clickOn("span","[contains(text(),'Tax Payer')]");
	     type("input_masearch",tpayer);
	     sleepWait(2000);
	     clickOn("btn_Asearch","");
	     clickOn("AssesManage","");
	     sleepWait(2000);
	}

	@When("^the assessemnt officer does the assessment for that particular month with \"([^\"]*)\" Updation for period\"([^\"]*)\"year\"([^\"]*)\"tpayer\"([^\"]*)\"$")
	public void the_assessemnt_officer_does_the_assessment_for_that_particular_month_with_Updation_for_period_year_tpayer(String updation, String period, String year, String tpayer) throws Throwable {
		
		tpname=tpayer;		

	     manualAssessmenthome(period,tpayer);
	     clickOn("href_maassess","");
		 sleepWait(2000);		     
	    	 }

	     
	     
	     
	

	@Then("^the officer is on the Payment Summary page for Liabilty Calculation and Payment Due$")
	public void the_officer_is_on_the_Payment_Summary_page_for_Liabilty_Calculation_and_Payment_Due()  throws Throwable {
	    sleepWait(2000);   
	    assertEquals(elementText("h6",""),tpname);
		assertEquals(elementText("element_nontxable",""),"8. Non-taxable transactions" );
		 sleepWait(2000);   
		clickOn("btn_maassessNext","");		
		 sleepWait(3000);  
		 assertEquals(elementText("h6",""),tpname);
		 sleepWait(2000);  
		assertEquals(elementText("element_amtvatdeductible",""),"16. Amount of VAT Deductible" );
		 sleepWait(2000);   
		clickOn("btn_maassessNext","");		 sleepWait(3000);   
		 assertEquals(elementText("h6",""),tpname);
		assertEquals(elementText("element_recoveryofdeduc",""),"18. Supplementary deductions");
		sleepWait(2000);
		clickOn("btn_maassessNext","");	
		 sleepWait(3000);  
		 assertEquals(elementText("h6",""),tpname);
		 sleepWait(2000);
		clickOn("btn_maassessNext","");
		 sleepWait(4000);  
		 assertEquals(elementText("h6",""),tpname);
		 sleepWait(3000);   
		
	       
	     
	}

	@Then("^user clicks on Prev button and it should be on Assessement Summary Tab$")
	public void user_clicks_on_Prev_button_and_it_should_be_on_Assessement_Summary_Tab() throws Throwable {

		sleepWait(2000);
		clickOn("btn_maPrevioustab","");		
		sleepWait(4000);
		 assertEquals(elementText("h6",""),tpname);
		 sleepWait(2000);
	       
	     
	}

	@Then("^user click on Next button on Asssessmnet Summary Tab and it should be on Payment Summary tab$")
	public void user_click_on_Next_button_on_Asssessmnet_Summary_Tab_and_it_should_be_on_Payment_Summary_tab() throws Throwable {
		sleepWait(2000);
		clickOn("btn_maassessNext","");		
		sleepWait(3000);
		 assertEquals(elementText("h6",""),tpname);
		assertEquals(elementText("element_pymtsummary",""),"Liability Calculation");
		 assertEquals(elementText("h6",""),tpname);
		 sleepWait(2000);
	       
	     
	}

	@Then("^enter the penalty amount\"([^\"]*)\"$")
	public void enter_the_penalty_amount(String arg1) throws Throwable {
		sleepWait(2000);
		clickOn("btn_maassessNext","");		
		sleepWait(3000);
		 assertEquals(elementText("h6",""),tpname);
		 sleepWait(2000);
		assertEquals(elementText("element_pymtsummary",""),"Liability Calculation");
		sleepWait(2000);
	     type("txt_Aliabiltypenalty",arg1);  
	     
	}

/*	@Then("^Calculates the Additional Liability column$")
	public void calculates_the_Additional_Liability_column() throws Throwable {
		String EremovedDot,EremovedComma,AremovedDot,AremovedComma;
     for(int i=0;i<=8;i++) {
	    	 String edeclararion=wd.findElement(By.xpath("//tr["+i+"]/td[2]")).getText();
	    	 String assessment=wd.findElement(By.xpath("//tr["+i+"]/td[3")).getText();
	    	 
	    	 System.out.println(edeclararion);
	    	 System.out.println(assessment);
	    	 
    	 if(edeclararion.contains(".")||edeclararion.contains(".")||assessment.contains(",")||assessment.contains(",")) {
	    		  EremovedDot=edeclararion.replace(".", "");
	    		  EremovedComma=EremovedDot.replace(",", ".");
	    		  AremovedDot=assessment.replace(".", "");
	    		  AremovedComma=AremovedDot.replace(",", ".");
	    		 
	    		 
	    	 }else {
	    		 EremovedComma=edeclararion;
	    				 AremovedComma=assessment;
	    		 
	    		 
	    	 }
	    	 Edeclare=Integer.parseInt(edeclararion);
	    	 System.out.println(Edeclare);
	    	 Assess=Integer.parseInt(assessment);
	    	 System.out.println(Assess);
	    	 esum = esum+Edeclare;
System.out.println(esum);
	    	 asum=asum+Assess; 
	    	 System.out.println(asum);
	    	 //Additional Liability Calculation
	    	 String addlL=wd.findElement(By.xpath("//tr["+i+"]/td[4")).getText();
	    	 addL=Assess-Edeclare;
	    	 
	    	 elementText(Integer.toString(addL),addlL);
	    	 
	    	 
	    
	       }
	       String edeclararionpenalty=wd.findElement(By.xpath("//tr[9]/td[2]")).getText();
	    	 String assessmentpenalty=wd.findElement(By.xpath("//tr[9]/td[3")).getText();
	     
	}*/



	@Then("^Checks the amount to pay in Liability Calculation$")
	public void checks_the_amount_to_pay_in_Liability_Calculation() throws Throwable {
	       assertEquals(elementText("txt_Apymtdueint",""), elementText("txt_Aliabiltyint",""));
	       assertEquals(elementText("txt_Apymtdueltfee",""), elementText("txt_Aliabiltyltfee",""));	       
	       assertEquals(elementText("txt_Apymtduepenalty",""), elementText("txt_Aliabiltypenalty",""));
	       assertEquals(elementText("txt_Apymtdueamttopay",""), elementText("txt_Aliabiltyamttopay",""));
	       
	     
	}

	@Then("^Clicks on Save button on Payment Summary page and message is displayed\"([^\"]*)\"$")
	public void clicks_on_Save_button_on_Payment_Summary_page_and_message_is_displayed(String arg1) throws Throwable {
	       clickOn("btn_maSAve","");
	     sleepWait(2000);
	     assertEquals(validationMessage(),arg1);	}

	@Then("^click on Previous Button on Payment Summary page and user is on Manual Assessment Landing Screen$")
	public void click_on_Previous_Button_on_Payment_Summary_page_and_user_is_on_Manual_Assessment_Landing_Screen() throws Throwable {
	     clickOn("btn_maprev","");  
	     sleepWait(5000);
	     assertEquals( wd.findElement(By.xpath("//h6")).getText(),"Period :");
	     
	}

	



	@Then("^Calculates the Additional Liability column$")
	public void calculates_the_Additional_Liability_column() throws Throwable {
		//net vat to be paid
		String pen=null;
		  assertEquals(elementText("txt_ALliabiltynetvatpaid",""), "0,00");
	       assertEquals(elementText("txt_ALliabiltycredit",""), "0,00");	       
	       assertEquals(elementText("txt_ALliabiltycreditrefundreq",""), "0,00");
	       assertEquals(elementText("txt_ALliabiltyvcreditfwd",""), "0,00");
		
			  assertEquals(elementText("txt_ALliabiltyvpublicprocu",""), "0,00");
		       assertEquals(elementText("txt_ALliabiltyTpartyac",""), "0,00");	       
		       assertEquals(elementText("txt_Aliabiltyint",""), elementText("txt_ALliabiltyint",""));
		       assertEquals(elementText("txt_Aliabiltyltfee",""), elementText("txt_ALliabiltyltfee",""));
		       
		       if(!NumberFormat.getInstance(Locale.GERMAN).format(Double.parseDouble(wd.findElement(By.xpath("//tr[9]//div[contains(text(),'Penalty')]//following::input")).getAttribute("value"))).toString().contains(",")) {
		    	   pen=NumberFormat.getInstance(Locale.GERMAN).format(Double.parseDouble(wd.findElement(By.xpath("//tr[9]//div[contains(text(),'Penalty')]//following::input")).getAttribute("value")))+",00";
		       }else {
		    	   pen=NumberFormat.getInstance(Locale.GERMAN).format(Double.parseDouble(wd.findElement(By.xpath("//tr[9]//div[contains(text(),'Penalty')]//following::input")).getAttribute("value"))).toString();
		       }
		       assertEquals(elementText("txt_ALliabiltypenalty",""),pen);
		       
		     
		       
		       
		       assertEquals(elementText("txt_ALliabiltyamttopay",""), elementText("txt_ALliabiltyamttopay",""));
		       System.out.println("1");

	}

	@Then("^Calculates the Net Payable column of Paymnent Due table$")
	public void calculates_the_Net_Payable_column_of_Paymnent_Due_table() throws Throwable {

		//assertEquals(elementText("txt_ApymtdueVatLiab", ""), elementText("txt_NPpymtdueVatLiab", ""));
		assertEquals(elementText("txt_Apymtdueint", ""), elementText("txt_ALliabiltyint", ""));
		System.out.println("1");
		assertEquals(elementText("txt_Apymtdueltfee", ""), elementText("txt_ALliabiltyltfee", ""));
		System.out.println("2");
		assertEquals(elementText("txt_Apymtduepenalty", ""), elementText("txt_ALliabiltypenalty", ""));
		System.out.println("3");
		assertEquals(elementText("txt_Apymtdueamttopay", ""), elementText("txt_Aliabiltyamttopay", ""));
		System.out.println("4");
		
		
		assertEquals(elementText("txt_ApymtdueVatLiab", ""), elementText("txt_NPpymtdueVatLiab", ""));
		System.out.println("5");
		assertEquals(elementText("txt_Apymtdueint", ""), elementText("txt_NPpymtdueint", ""));
		System.out.println("6");
		assertEquals(elementText("txt_Apymtdueltfee", ""), elementText("txt_NPpymtdueltfee", ""));
		System.out.println("7");
		assertEquals(elementText("txt_Apymtduepenalty", ""), elementText("txt_NPpymtduepenalty", ""));
		System.out.println("8");
		assertEquals(elementText("txt_Apymtdueamttopay", ""), elementText("txt_NPpymtdueamttopay", ""));
	 
	}

@Then("^User click on download button message should be displayead as \"([^\"]*)\"$")
public void user_click_on_download_button_message_should_be_displayead_as(String arg1) throws Throwable {
	sleepWait(2000);
clickOn("btn_maEfilingSchedule","");
sleepWait(2000);
System.out.println(validationMessage());
assertEquals(validationMessage(), arg1);

sleepWait(2000);
}
@Then("^user clicks on Raise notice button and Notice is generated as per the Liability Calculation Table and Payment Due Table$")
public void user_clicks_on_Raise_notice_button_and_Notice_is_generated_as_per_the_Liability_Calculation_Table_and_Payment_Due_Table() throws Throwable {
	String per ="Period : "+getvalue("txt_Aperiod","").replace(",", "-");
System.out.println(per);
	String nitva="NITVA No:"+elementText("txt_Anitva","");
	System.out.println(nitva);
	String Lvat=elementText("txt_Lvat","");
	System.out.println(Lvat);
	
		String Lcred=elementText("txt_Lcredit","");
		System.out.println(Lcred);
			String Lref=elementText("txt_Lrefund","");		
			System.out.println(Lref);
			String Lcredfwd=elementText("txt_Lcreditfwd","");			System.out.println(Lcredfwd);
			String Lpubproc=elementText("txt_Lpublicproc","");System.out.println(Lpubproc);
			String Ltparty=elementText("txt_Ltpartyac","");		System.out.println(Ltparty);
			String Lint=elementText("txt_Lint","");System.out.println(Lint);
			String Lltfee=elementText("txt_Lltfee","");System.out.println(Lltfee);
			String Lpen=elementText("txt_ALliabiltypenalty","")+elementText("txt_Lpena","");System.out.println(Lpen);
			String Lamtpay=elementText("txt_Lamounttopay","");System.out.println(Lamtpay);
			String Pvat=elementText("txt_Pvat","");System.out.println(Pvat);
			String Pint=elementText("txt_Pint","");System.out.println(Pint);
			String Pltfee=elementText("txt_Pltfee","");System.out.println(Pltfee);
			String Ppen=elementText("txt_Ppena","");System.out.println(Ppen);
			String Pamt=elementText("txt_Pamounttopay","");System.out.println(Pamt);

clickOn("btn_maRaiseNotice","");
sleepWait(2000);
saveFile();
sleepWait(2000);
PDDocument doc = PDDocument.load(getLatestFilefromDir());   
PDFTextStripper pdfStripper = new PDFTextStripper();  
String text = pdfStripper.getText(doc);  
//Liability Calculation
assertEquals(text.contains(per), true,"Period Mismatch");
assertEquals(text.contains(nitva), true,"Nitva Mismatch");
assertEquals(text.contains(Lvat), true,"VAT Liability Calcaulation Mismatch");
assertEquals(text.contains(Lcred), true,"Liability Credit Mismatch");
assertEquals(text.contains(Lref), true,"Liability Calculation VAT Credit Refund Request Mismatch");
assertEquals(text.contains(Lcredfwd), true,"Liability Calculation VAT Credit carried forward Mismatch");
assertEquals(text.contains(Lpubproc), true,"Liabilty Calculation VAT on externally financed public procurement Mismatch");
assertEquals(text.contains(Ltparty), true,"Liabilty Calculation  VAT for third party account ");
assertEquals(text.contains(Lint), true,"Liabilty Calculation Interest");
assertEquals(text.contains(Lltfee), true,"Liabilty Calculation LateFees");
assertEquals(text.contains(Lpen), true,"Liabilty Calculation Penalty");
assertEquals(text.contains(Lamtpay), true,"Liabilty Calculation Amount to pay");
//Payment Due
assertEquals(text.contains(Pvat), true,"Payment Due VAT Mismatch");
assertEquals(text.contains(Pint), true,"Payment Due Interest Mismatch");
assertEquals(text.contains(Pltfee), true,"Payment Due Interest Mismatch");
assertEquals(text.contains(Ppen), true,"Payment Due Interest Mismatch");
assertEquals(text.contains(Pamt), true,"Paymnet Due Amount Mismatch");





sleepWait(5000);

}



@Then("^Total Additional Liability tile should be displayed as Total Assessed\\(FC\\) minus Total e-declaration\\(FC\\)\"([^\"]*)\"\"([^\"]*)\"$")
public void total_Additional_Liability_tile_should_be_displayed_as_Total_Assessed_FC_minus_Total_e_declaration_FC(String arg1, String arg2) throws Throwable {
	//NumberFormat nf= NumberFormat.getNumberInstance(Locale.ENGLISH);
	String TotaladdLiab=elementText("txt_totalAltile","");
	System.out.println(TotaladdLiab.substring(3));
	String Toatledeclared=elementText("txt_totalEtile","");System.out.println(Toatledeclared.substring(3));
	String TotalAssessed=elementText("txt_totalAtile","");System.out.println(TotalAssessed.substring(3));
	//double TA=nf.parse(TotalAssessed).doubleValue()-nf.parse(TotaladdLiab).doubleValue();
	//assertEquals(TotalAssessed,NumberFormat.getInstance(Locale.GERMAN).format(TA),"");
	assertEquals(Toatledeclared.substring(3), elementText("txt_Eliabiltyamttopay",""));
	assertEquals(TotalAssessed.substring(3), elementText("txt_Aliabiltyamttopay",""));
	assertEquals(TotaladdLiab.substring(3), elementText("txt_ALliabiltyamttopay",""));
	
	//String Linterest=elementText("txt_Aliabiltyint","");


/*	String TALremovedDot,TALremovedComma,TDremovedDot,TDremovedComma,TAremovedDot,TAremovedComma;
	if(TotaladdLiab.contains(".")||Toatledeclared.contains(".")||TotalAssessed.contains(".")||TotaladdLiab.contains(",")||Toatledeclared.contains(",")||TotalAssessed.contains(",")) {
		  TALremovedDot=TotaladdLiab.replace(".", "");
		  TALremovedComma=TALremovedDot.replace(",", ".");
		  TDremovedDot=Toatledeclared.replace(".", "");
		  TDremovedComma=TDremovedDot.replace(",", ".");
		  TAremovedDot=TotalAssessed.replace(".", "");
		  TAremovedComma=TAremovedDot.replace(",", ".");		 
	}else {
		TAremovedComma=TotalAssessed;
		TDremovedComma=Toatledeclared;
		TALremovedComma=TotaladdLiab;
		}*/
	
	
	//assertEquals(Toatledeclared, TotalAssessed,"Total Assessed and Total Ededeclared are not same");
	//assertEquals(TotaladdLiab, "0");
	
	

}
/*String coverse(String text) {	

	return text.replace(".", "").replace(",", ".");
	
}*/





}
