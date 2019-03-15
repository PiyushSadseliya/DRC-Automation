package org.drc.vat.StepDefinitions;

import cucumber.api.java.en.Then;
import static org.drc.vat.appmanager.HelperBase.clickOn;
import static org.drc.vat.appmanager.HelperBase.elementText;

import org.testng.Assert;

public class ReAssessManualAssessPaymentDue {

	@Then("^officer is on Reassessment Liability Calculation Payment Due$")
	public void officer_is_on_Reassessment_Liability_Calculation_Payment_Due() throws Throwable {
	      
	       
	}

	@Then("^Observe the VAT Liability field in Reassessed Column Vat Liability = Vat on sales \"([^\"]*)\" - Vat on purchase\"([^\"]*)\"\\.$")
	public void observe_the_VAT_Liability_field_in_Reassessed_Column_Vat_Liability_Vat_on_sales_Vat_on_purchase(String vsales, String vpurchase) throws Throwable {
		 clickOn("btn_next","");
		 Assert.assertEquals(elementText("text_pagePaymentDue",""), "PaymentDuepage");
		 Assert.assertEquals(elementText("text_",""),vsales );
		 Assert.assertEquals(elementText("text_",""),vpurchase );
		int sales= Integer.parseInt(elementText("text_",""));
		int purchase = Integer.parseInt(elementText("text_",""));
		int vliability= sales-purchase;
		Assert.assertEquals(elementText("text_",""),vliability );
		 
		 
	       
	}

	@Then("^Utilised credit\"([^\"]*)\" should be re-imbursement amount utilised  and same as that calculated while vat liability calculation on Reassessed list page\\.$")
	public void utilised_credit_should_be_re_imbursement_amount_utilised_and_same_as_that_calculated_while_vat_liability_calculation_on_Reassessed_list_page(String utilcredit) throws Throwable {
		//text from Liabilty Calculation utilised Credit
		String liutilcredit=elementText("text_","");
		clickOn("btn_next","");
		Assert.assertEquals(elementText("text_pagePaymentDue",""), "PaymentDuepage");
		Assert.assertEquals(liutilcredit,utilcredit);
		//paymentDue utilised Credit
		Assert.assertEquals(elementText("",""),liutilcredit);
	       
	}

	@Then("^Late fees \"([^\"]*)\"should be calculated on Late e-filing  and same as that calculated while vat liability calculation for \"([^\"]*)\"$")
	public void late_fees_should_be_calculated_on_Late_e_filing_and_same_as_that_calculated_while_vat_liability_calculation_for(String ltfee, String category) throws Throwable {
		//liability latefee
		String lilatefee=elementText("text_","");
		
		clickOn("btn_next","");
		Assert.assertEquals(elementText("text_pagePaymentDue",""), "PaymentDuepage");
		if(category.equals("Natural")) {
		Assert.assertEquals(lilatefee,ltfee);
		//liability latefee
		Assert.assertEquals(elementText("",""),lilatefee); 
		}
		
		if(category.equals("Legal")) {
		Assert.assertEquals(lilatefee,ltfee);
		//paymentDue latefee
		Assert.assertEquals(elementText("",""),lilatefee); 
		}
	}

	@Then("^Interest\"([^\"]*)\" should be calculated on Late Payment and same as that calculated on vat liability calculation page  on Reassessed list page\\.$")
	public void interest_should_be_calculated_on_Late_Payment_and_same_as_that_calculated_on_vat_liability_calculation_page_on_Reassessed_list_page(String interest) throws Throwable {
		//Liabilty Interest
		String liinterest=elementText("text_","");
		clickOn("btn_next","");
		Assert.assertEquals(elementText("text_pagePaymentDue",""), "PaymentDuepage");
		Assert.assertEquals(liinterest,interest);
		//paymentDue utilised Credit
		Assert.assertEquals(elementText("",""),liinterest);
	       
	}

	@Then("^Penalty \"([^\"]*)\"should be calculated on if difference found while Reassessment in  assessed amount and Reassessment and should be  same as that calculated on vat  liability calculation page on Reassessed list page\\.$")
	public void penalty_should_be_calculated_on_if_difference_found_while_Reassessment_in_assessed_amount_and_Reassessment_and_should_be_same_as_that_calculated_on_vat_liability_calculation_page_on_Reassessed_list_page(String penalty) throws Throwable {
	   //Liability Penalty
		String lipenalty=elementText("text_","");
	   clickOn("btn_next","");
	   Assert.assertEquals(elementText("text_pagePaymentDue",""), "PaymentDuepage");	 
	   Assert.assertEquals(lipenalty,penalty);
		//paymentDue Penaly
		Assert.assertEquals(elementText("",""),lipenalty);
	}

	@Then("^Total Amount \"([^\"]*)\"for Reassessed should be calculated as Vat liability \\+ utilised credit \\+ late fees \\+ Interest \\+ Penalty\\.$")
	public void total_Amount_for_Reassessed_should_be_calculated_as_Vat_liability_utilised_credit_late_fees_Interest_Penalty(String arg1) throws Throwable {
	       clickOn("btn_next","");
	       Assert.assertEquals(elementText("text_pagePaymentDue",""), "PaymentDuepage");
	       int vatliabilty =Integer.parseInt(elementText("text_",""));
	       int utilcredit =Integer.parseInt(elementText("text_",""));
	       int latefees =Integer.parseInt(elementText("text_",""));
	       int interest =Integer.parseInt(elementText("text_",""));
	       int penalty =Integer.parseInt(elementText("text_",""));
	       int total =vatliabilty+utilcredit+latefees+interest+penalty;
	       //Payment Due REAssessed Total
	       Assert.assertEquals(elementText("text_",""),total);
	}

	@Then("^Paid amount \"([^\"]*)\"should be the amount paid by user after e-filing is done for the particular period$")
	public void paid_amount_should_be_the_amount_paid_by_user_after_e_filing_is_done_for_the_particular_period(String liabilitypaid) throws Throwable {
		clickOn("btn_next","");
	       Assert.assertEquals(elementText("text_pagePaymentDue",""), "PaymentDuepage");
	      //Vat Liability paid
	       Assert.assertEquals(elementText("text_",""),liabilitypaid);
	}

	@Then("^Utilised credit \"([^\"]*)\"should be same as in Reassessed amount  as these amount is the reimbursement amount used by the tax payer and  it should not change for the particular period\\.$")
	public void utilised_credit_should_be_same_as_in_Reassessed_amount_as_these_amount_is_the_reimbursement_amount_used_by_the_tax_payer_and_it_should_not_change_for_the_particular_period(String utilcredit) throws Throwable {
		clickOn("btn_next","");
		Assert.assertEquals(elementText("text_pagePaymentDue",""), "PaymentDuepage");  
		//Vat Liability paid
	       Assert.assertEquals(elementText("text_",""),utilcredit);
	       
	}

	@Then("^Amount of the Late fees for current period should be zero\"([^\"]*)\" as the amount can only be paid after raising notice for the current period\\.$")
	public void amount_of_the_Late_fees_for_current_period_should_be_zero_as_the_amount_can_only_be_paid_after_raising_notice_for_the_current_period(String latefee) throws Throwable {
		clickOn("btn_next","");
		Assert.assertEquals(elementText("text_pagePaymentDue",""), "PaymentDuepage");  
		//Vat Liability paid
	       Assert.assertEquals(elementText("text_",""),latefee);  
	       
	}

	@Then("^Paid amount \"([^\"]*)\"should get displayed in Paid column for late fee field$")
	public void paid_amount_should_get_displayed_in_Paid_column_for_late_fee_field(String ltfee) throws Throwable {
	       
		clickOn("btn_next","");
		Assert.assertEquals(elementText("text_pagePaymentDue",""), "PaymentDuepage");  
		// paid
	       Assert.assertEquals(elementText("text_",""),ltfee);  
	}

	@Then("^Paid amount \"([^\"]*)\"should get displayed in Paid column for Interest field$")
	public void paid_amount_should_get_displayed_in_Paid_column_for_Interest_field(String interest) throws Throwable {
		clickOn("btn_next","");
		Assert.assertEquals(elementText("text_pagePaymentDue",""), "PaymentDuepage");  
		// paid interest
	       Assert.assertEquals(elementText("text_",""),interest);  
	       
	}

	@Then("^Paid amount\"([^\"]*)\" should get displayed in Paid column for Penalty field$")
	public void paid_amount_should_get_displayed_in_Paid_column_for_Penalty_field(String penalty) throws Throwable {
		clickOn("btn_next","");
		Assert.assertEquals(elementText("text_pagePaymentDue",""), "PaymentDuepage");  
		// paid penlaty
	       Assert.assertEquals(elementText("text_",""),penalty);  
	       
	       
	}

	@Then("^observe the net payable amount for :Vat liability\"([^\"]*)\", UtilisedCredit\"([^\"]*)\", Latefees\"([^\"]*)\", Interest\"([^\"]*)\", Penalty\"([^\"]*)\" and should be calculated :net payable = reassessed amount  - paid amount$")
	public void observe_the_net_payable_amount_for_Vat_liability_UtilisedCredit_Latefees_Interest_Penalty_and_should_be_calculated_net_payable_reassessed_amount_paid_amount(String arg1, String arg2, String arg3, String arg4, String arg5) throws Throwable {
		clickOn("btn_next","");
		String a[]= {arg1,arg2,arg3,arg4,arg5};
		Assert.assertEquals(elementText("text_pagePaymentDue",""), "PaymentDuepage");  
		for(int i=0;i<5;i++) {
			Double additionalL=Double.parseDouble(elementText("",""))-Double.parseDouble(elementText("",""));
			Assert.assertEquals(String.format("%.2f", additionalL),a[i]);
		}
	}

	@Then("^observe the total amount of Paid Column & Total Amount\"([^\"]*)\" for Paid should be calculated as Vat liability \\+ utilised credit \\+ late fees \\+ Interest \\+ Penalty\\.$")
	public void observe_the_total_amount_of_Paid_Column_Total_Amount_for_Paid_should_be_calculated_as_Vat_liability_utilised_credit_late_fees_Interest_Penalty(String arg1) throws Throwable {
	       
		clickOn("btn_next","");	
		Assert.assertEquals(elementText("text_pagePaymentDue",""), "PaymentDuepage");  
		Double Total=0.00;
		for(int i=0;i<5;i++) {
			 Total=Total+Double.parseDouble(elementText("",""));		
		}
		if((Total-Total.intValue())!=0) {
		Assert.assertEquals(String.format("%.2f", Total),arg1);
		}
		else {
			Assert.assertEquals(Total.intValue(),arg1);
		}
   
	}

	@Then("^Observe the net payable amount\"([^\"]*)\" should be calculated as total Reassessed - total paid\\.$")
	public void observe_the_net_payable_amount_should_be_calculated_as_total_Reassessed_total_paid(String arg1) throws Throwable {
		clickOn("btn_next","");	
		Assert.assertEquals(elementText("text_pagePaymentDue",""), "PaymentDuepage");  
		//Total Reasessed -Total Paid
		Double Ntotal=Double.parseDouble(elementText("",""))-Double.parseDouble(elementText("",""));
		if((Ntotal-Ntotal.intValue())!=0) {
			Assert.assertEquals(String.format("%.2f", Ntotal),arg1);
			}
			else {
				Assert.assertEquals(Ntotal.intValue(),arg1);
			}
		
	}

	@Then("^Click on Previous Button e-Declaration Reconciliation page should get displayed for\"([^\"]*)\"\"([^\"]*)\" that particular period\\.$")
	public void click_on_Previous_Button_e_Declaration_Reconciliation_page_should_get_displayed_for_that_particular_period(String arg1, String arg2) throws Throwable {
		clickOn("btn_next","");	
		Assert.assertEquals(elementText("text_pagePaymentDue",""), "PaymentDuepage");  
		
		clickOn("btn_prev","");	
		Assert.assertEquals(elementText("text_pagePaymentDue",""), "PaymentDuepage");  
	       
	}

	@Then("^Click on Next button on Liability calculation page Payment Due page should get displayed\\.$")
	public void click_on_Next_button_on_Liability_calculation_page_Payment_Due_page_should_get_displayed() throws Throwable {
		clickOn("btn_next","");	
		Assert.assertEquals(elementText("text_pagePaymentDue",""), "PaymentDuepage");  
		
		
		
	       
	}

	@Then("^Click on Raise Notice Button And Notice of Reassessment should be generated for the Tax Payer for that particular period The Reassessment should be communicated to the taxpayer via e-services portal and email\\.$")
	public void click_on_Raise_Notice_Button_And_Notice_of_Reassessment_should_be_generated_for_the_Tax_Payer_for_that_particular_period_The_Reassessment_should_be_communicated_to_the_taxpayer_via_e_services_portal_and_email() throws Throwable {
		clickOn("btn_next","");	
		Assert.assertEquals(elementText("text_pagePaymentDue",""), "PaymentDuepage"); 
		Assert.assertEquals(false, true);
		
	       
	}
}
