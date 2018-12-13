package org.drc.vat.StepDefinitions;

import cucumber.api.java.en.Given;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import static org.drc.vat.appmanager.HelperBase.login;
import static org.drc.vat.appmanager.HelperBase.clickOn;
import static org.drc.vat.appmanager.HelperBase.type;
import static org.drc.vat.appmanager.HelperBase.getCurrentWindow;
import static org.drc.vat.appmanager.HelperBase.switchPreviousWindow;
import static org.drc.vat.appmanager.HelperBase.wd;
import static org.drc.vat.appmanager.HelperBase.closeCurrentWindow;
import static org.drc.vat.appmanager.HelperBase.no_window;
import static org.drc.vat.appmanager.HelperBase.key;
import static org.drc.vat.appmanager.HelperBase.sleepWait;

import org.testng.asserts.SoftAssert;
import static org.drc.vat.appmanager.HelperBase.elementText;
//import static org.drc.vat.appmanager.HelperBase.TaxpayerURL;
import static org.drc.vat.appmanager.HelperBase.assertMsg;
import static org.drc.vat.appmanager.HelperBase.logout;

public class EFilingGenerateTaxBill {
String currentWindow=null;
String newWindow=null;
SoftAssert softAssert = new SoftAssert();
int barCodeLength=15;

@Given("^The User has logged-in Using Valid Credentials and has already filed the transactions \"([^\"]*)\"\"([^\"]*)\"$")
public void the_User_has_logged_in_Using_Valid_Credentials_and_has_already_filed_the_transactions(String username, String password) throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	login(username,password);
	clickOn("nav_vat_efiling","");
	if(!elementText("efiling_text_vatefiling","").equals("VAT e-Filing")) {
		assertMsg("NOT on Efiling page");
	}
	clickOn("efiling_btn_circleplus","");
}

@Given("^Clicks on Pay button and is on the Payment of Tax$")
public void clicks_on_Pay_button_and_is_on_the_Payment_of_Tax() throws InterruptedException    {
    // Write code here that turns the phrase above into concrete actions
	clickOn("efiling_btn_pay","");
	sleepWait(10000);
     
}

@When("^Clicks On Proceed to Pay$")
public void clicks_On_Proceed_to_Pay()    {
	if(!elementText("check_page_payment_of_tax","").equals("Payment of Tax")){
		assertMsg("NOT on Paymet of Tax Page");
	}
	clickOn("efiling_btn_paymentproceed","");
    // Write code here that turns the phrase above into concrete actions
    // clickOn("","");
}

@Then("^User is on Payment Method$")
public void user_is_on_Payment_Method()    {
    // Write code here that turns the phrase above into concrete actions
	if(!elementText("check_page_payment_of_tax","").equalsIgnoreCase("Payment of Tax") ) {		
		assertMsg("Not On Payment Page");
	}
     
}

@Then("^Selects Over the Counter Paymnet Method$")
public void selects_Over_the_Counter_Paymnet_Method()    {
    // Write code here that turns the phrase above into concrete actions
	clickOn("radio_btn_over_The_counter","");
	if(!elementText("check_page_Generate_Tax_Payment_Bill","").equalsIgnoreCase("Bill for deposit of VAT") ) {
		assertMsg("Not On Bill for deposit of VAT page");
		//softAssert.assertTrue(true, "On Bill for deposit of VAT page");
	}	
     
}

@Then("^Checks whether Tax Bill No \"([^\"]*)\",generated time \"([^\"]*)\",duedate \"([^\"]*)\" is displayed$")
public void checks_whether_Tax_Bill_No_generated_time_duedate_is_displayed(String taxbillno, String gentime, String duedate)    {
    // Write code here that turns the phrase above into concrete actions
     if(!elementText("efiling_text_taxbill_no","").equals("") || !elementText("efiling_text_barcode","").equals(elementText("efiling_text_taxbill_no",""))) {
    	 System.out.println("tax bill no is not empty");
    	 softAssert.assertEquals(true, true,"tax bill no is not empty");
    	 //softAssert.assertTrue(true, "tax bill no is not empty");
     }else {
    	 System.out.println("Tax bill no is empty");    	
    	 assertMsg( "Tax bill no is empty");
     }
     if(!elementText("efiling_text_gen_date","").equals("")) {
    	 softAssert.assertTrue(true, "Generated date is not empty");
    	 System.out.println("Generated date is not  Empty");
     }else {
    	 System.out.println("Generated date is Empty");
    	 assertMsg("Generated date is empty");
     }
     if(!elementText("efiling_text_gen_time","").equals("")) {
    	 System.out.println("Generated Time is not  Empty");
    	 softAssert.assertTrue(true, "Generated Time is not empty");
     }else {
    	 System.out.println("Generated Time is Empty");
    	 assertMsg( "Generated Time is empty");
     }
     if(!elementText("efiling_text_due_date","").equals("")) {
    	 System.out.println("Due Date is not empty");
    	 softAssert.assertTrue(true, "Due Date is not empty");
     }else {
    	 System.out.println("Due date is Empty");
    	 assertMsg("Due Date is not empty");
     }
}

@Then("^also nitva\"([^\"]*)\"email\"([^\"]*)\"Mobile\"([^\"]*)\"name\"([^\"]*)\"address\"([^\"]*)\"vatamt\"([^\"]*)\"intrestamt\"([^\"]*)\"penaltyamt\"([^\"]*)\"latefeeamt\"([^\"]*)\"totalamt\"([^\"]*)\"amt in words\"([^\"]*)\"$")
public void also_nitva_email_Mobile_name_address_vatamt_intrestamt_penaltyamt_latefeeamt_totalamt_amt_in_words(String arg1, String arg2, String arg3, String arg4, String arg5, String arg6, String arg7, String arg8, String arg9, String arg10, String arg11)    {
    // Write code here that turns the phrase above into concrete actions
    if(!elementText("efiling_text_nitva_no","").equals("")) {
   	 System.out.println("Nitva no is not empty");
   	softAssert.assertTrue(true, "Nitva is not empty");
    }else {
   	 System.out.println("Nitva no is empty");
   	assertMsg( "Nitva no is  not empty");
    }
    if(!elementText("efiling_text_email","").equals("")) {
   	 System.out.println("email is not empty Empty");
 	softAssert.assertTrue(true, "Email is not empty");
    }else {
   	 System.out.println("email is Empty");
   	assertMsg( "email is  empty");
    }
    if(!elementText("efiling_text_mobileno","").equals("")) {
   	 System.out.println("mobile number is not empty");
 	softAssert.assertTrue(true, "Mobile is not empty");
    }else {
   	 System.out.println("Mobile no is Empty");
   	assertMsg("Mobile no is  empty");
    }
    if(!elementText("efiling_text_name","").equals("")) {
      	 System.out.println("name is not empty");
      	softAssert.assertTrue(true, "Name is not empty");
       }else {
      	 System.out.println("Name is empty");
      	assertMsg( "Name is  empty");
       }
    if(!elementText("efiling_text_add","").equals("")) {
      	 System.out.println("Address is not empty Empty");
      	softAssert.assertTrue(true, "Address is not empty");
       }else {
      	 System.out.println("Address is Empty");
      	assertMsg("Address is  empty");
       }
    if(!elementText("efiling_text_vat_amt","").equals("")) {
      	 System.out.println("VAT amount is not empty");
      	softAssert.assertTrue(true, "VAT amount is not empty");
       }else {
      	 System.out.println("VAT amount is Empty");
      	assertMsg( "VAT amount is  empty");
       }
    if(!elementText("efiling_text_int_amt","").equals("")) {
      	 System.out.println("interest amount is not empty");
      	softAssert.assertTrue(true, "interest amount is not empty");
       }else {
      	 System.out.println("Interest Amount is empty");
      	assertMsg( "Interest Amount is  empty");
       }
       if(!elementText("efiling_text_penalty_amt","").equals("")) {
      	 System.out.println("Penalty amount not empty Empty");
      	softAssert.assertTrue(true, "Penalty amount is not empty");
       }else {
      	 System.out.println("Penalty Amount is Empty");
      	assertMsg( "Penalty Amount is  empty");
       }
       if(!elementText("efiling_text_latefee_amt","").equals("")) {
      	 System.out.println("Late Fee amount is not empty");
      	softAssert.assertTrue(true, "Late Fee Amount is not empty");
       }else {
      	 System.out.println("late Fee is Empty");
      	assertMsg("Late Fee Amount is  empty");
       }
       if(!elementText("efiling_text_total_amt","").equals("")) {
         	 System.out.println("Total amount is not empty");
         	softAssert.assertTrue(true, "Total Amount is not empty");
          }else {
         	 System.out.println("Total amount is empty");
         	assertMsg( "Total Amount is  empty");
          }
       if(!elementText("efiling_text_total_amt_words","").equals("")) {
         	 System.out.println("Amount Words is not empty Empty");
         	softAssert.assertTrue(true, "Amount words is not empty");
          }else {
         	 System.out.println("Amount Words  is Empty");
         	assertMsg( "Amount Words is  empty");
          }

   
     
}

@Then("^Also selects mode of Payment as OTC \"([^\"]*)\" or NEFT_RTGS\"([^\"]*)\"$")
public void also_selects_mode_of_Payment_as_OTC_or_NEFT_RTGS(String arg1, String arg2)    {
    // Write code here that turns the phrase above into concrete actions
	//if(elementText(""))
     
}

@Then("^Checks benficname\"([^\"]*)\"benficac\"([^\"]*)\"benficbrname\"([^\"]*)\"benficbrcode\"([^\"]*)\"$")
public void checks_benficname_benficac_benficbrname_benficbrcode(String arg1, String arg2, String arg3, String arg4)    {
    // Write code here that turns the phrase above into concrete actions
	 if(!elementText("efiling_text_benef_name","").equals("")) {
      	 System.out.println("Beneficiary Should not be Empty");
      	softAssert.assertTrue(true, "Beneficiary Name is not empty");
       }else {
      	 System.out.println("Beneficiary Name is Empty");
      	assertMsg("Beneficiary Name is empty");
       }
       if(!elementText("efiling_text_benef_acno","").equals("")) {
      	 System.out.println("Beneficiary account no is not empty");
      	softAssert.assertTrue(true, "Beneficiary account is not empty");
       }else {
      	 System.out.println("Beneficiary account is Empty");
      	assertMsg("Beneficiary account is empty");
       }
       if(!elementText("efiling_text_benef_bank_name","").equals("")) {
         	 System.out.println("Beneficiary branch name is not empty");
         	softAssert.assertTrue(true, "Beneficiary branch name  is not empty");
          }else {
         	 System.out.println("Beneficiary branch name is empty");
         	assertMsg("Beneficiary branch name  is empty");
          }
       if(!elementText("efiling_text_benef_branch_code","").equals("")) {
         	 System.out.println("Beneficiary Branch code is not empty ");
         	softAssert.assertTrue(true, "Beneficiary Branch code is not empty");
          }else {
         	 System.out.println("Beneficiary Branch code is Empty");
         	assertMsg( "Beneficiary Branch code is empty");
          }
}

@Then("^Depositor details dname\"([^\"]*)\"ddesignation\"([^\"]*)\"dsign\"([^\"]*)\"ddate\"([^\"]*)\"$")
public void depositor_details_dname_ddesignation_dsign_ddate(String arg1, String arg2, String arg3, String arg4)    {
    // Write code here that turns the phrase above into concrete actions
	 if(elementText("efiling_text_depositor_name","").equals("")) {
      	 System.out.println("depositor name not empty Empty");
      	softAssert.assertTrue(true, "depositor name  is empty");
       }else {
      	 System.out.println("depositor Name is Empty");
      	assertMsg( "depositor name is not empty");
       }
       if(elementText("efiling_text_depositor_designation","").equals("")) {
      	 System.out.println("depositor designation  is empty");
      	softAssert.assertTrue(true, "depositor designation is empty");
       }else {
      	 System.out.println("depositor designation is Empty");
      	assertMsg( "depositor designation is not empty");
       }
       if(elementText("efiling_text_depositor_signature","").equals("")) {
         	 System.out.println("depositor signatory is  empty");
         	softAssert.assertTrue(true, "depositor signatory is  empty");
          }else {
         	 System.out.println("depositor signatory  is not empty");
         	assertMsg("depositor designation is not empty");
          }
       if(elementText("efiling_text_depositor_deposit_date","").equals("")) {
         	 System.out.println("depositing date is empty ");
         	softAssert.assertTrue(true, "depositor designation is empty");
          }else {
         	 System.out.println("depositing date is not Empty");
         	assertMsg( "depositor designation is not empty");
          }
}

@Then("^Verifes Paid Tax Information content nitva\"([^\"]*)\"taxpayername\"([^\"]*)\"paymentmode\"([^\"]*)\"nameofbank_office\"([^\"]*)\"acno\"([^\"]*)\"pbcode\"([^\"]*)\"amt\"([^\"]*)\"pdate\"([^\"]*)\"ackchq\"([^\"]*)\"$")
public void verifes_Paid_Tax_Information_content_nitva_taxpayername_paymentmode_nameofbank_office_acno_pbcode_amt_pdate_ackchq(String arg1, String arg2, String arg3, String arg4, String arg5, String arg6, String arg7, String arg8, String arg9){
    // Write code here that turns the phrase above into concrete actions
	if(!elementText("efiling_text_paid_tax_NITVA","").equals("")) {
     	 System.out.println("Nitva no not  Empty");
     	softAssert.assertTrue(true, "Nitva no not  Empty");
      }else {
     	 System.out.println("Nitva no  is Empty");
     	assertMsg( "Nitva no  is Empty");
      }
      if(!elementText("efiling_text_paid_tax_payername","").equals("")) {
     	 System.out.println("taxpayername is not empty");
     	
      }else {
     	 System.out.println("taxpayername is Empty");
     	assertMsg( "taxpayername is empty");
      }
      if(elementText("efiling_text_cash_mode","").equals("Cash")) {
        	 System.out.println("Payment Mode Cash present");
        	 softAssert.assertTrue(true, "Payment Mode Cash present");
        	 
         }else {
        	 System.out.println("Payment Mode Cash not present");
        	 assertMsg("Payment Mode Cash not present");
         }
      if(elementText("efiling_text_neft_mode","").equals("NEFT/RTGS")) {
     	 System.out.println("Payment Mode NEFT/RTGS present");
     	softAssert.assertTrue(true, "Payment Mode NEFT/RTGS present");
      }else {
     	 System.out.println("Payment Mode NEFT/RTGS not  present");
     	assertMsg( "Payment Mode NEFT/RTGS not  present");
      }      
      if(elementText("efiling_text_bank_or_office_name","").equals("")) {
        	 System.out.println("Bank Office should be empty ");
        	 softAssert.assertTrue(true, "Bank Office is empty");
         }else {
        	 System.out.println("Bank Office is not empty");
        	 assertMsg("Bank Office is not empty");
         }
      if(elementText("efiling_text_acno","").equals("")) {
       	 System.out.println("Account number should be Empty");
       	softAssert.assertTrue(true, "Account number is empty");
        }else {
       	 System.out.println("Account number is not empty");
       	assertMsg( "Account number is not empty");
        }
        if(elementText("efiling_text_paid_branch_code","").equals("")) {
        	softAssert.assertTrue(true, "Branch code should be empty");
       	 System.out.println("Branch code should be empty");
        }else {
       	 System.out.println("Branch Code is not Empty");
       	assertMsg( "Branch Code is not Empty");
        }
        if(!elementText("efiling_text_paid_amt","").equals("")) {
          	 System.out.println("Amount Should not be empty");
          	softAssert.assertTrue(true, "Amount Should not be empty");
           }else {
          	 System.out.println("Amount is  empty");
          	assertMsg("Amount is  empty");
           }
        if(elementText("efiling_text_paid_date","").equals("")) {
          	 System.out.println("Payment Date should be empty ");
          	softAssert.assertTrue(true, "Payment Date should be empty");
           }else {
          	 System.out.println("Payment Date is Empty");
          	assertMsg( "Payment Date is Empty");
           }  
        if(elementText("efiling_text_ack_no","").equals("")) {
            	 System.out.println("Acknowledgement should be empty");
            	 softAssert.assertTrue(true, "Acknowledgement should be empty");
             }else {
            	 System.out.println("Acknowledgement should not be empty");
            	 assertMsg( "Acknowledgement should not be empty");
             }

        
   
}

@Then("^Applicant Details rname\"([^\"]*)\"racno\"([^\"]*)\"rchqno\"([^\"]*)\"rdate\"([^\"]*)\"rcno\"([^\"]*)\"$")
public void applicant_Details_rname_racno_rchqno_rdate_rcno(String arg1, String arg2, String arg3, String arg4, String arg5)    {
    // Write code here that turns the phrase above into concrete actions
    if(elementText("efiling_text_remitter_name","").equals("")) {
      	 System.out.println("Remitter Name should be empty");
      	softAssert.assertTrue(true, "Remitter Name should be empty");
       }else {
      	 System.out.println("Remitter Name is not Empty");
      	assertMsg( "Remitter Name is not Empty");
       }
       if(elementText("efiling_text_remitter_acno","").equals("")) {
         	 System.out.println("Remitter Account NO. should be empty");
         	softAssert.assertTrue(true, "Remitter Account NO. should be empty");
          }else {
         	 System.out.println("Remitter Account NO. is not empty");
         	assertMsg( "Payment Date is Empty");
          }
       if(elementText("efiling_text_remitter_chqno","").equals("")) {
         	 System.out.println("Remitter Cheque NO. should be empty ");
         	softAssert.assertTrue(true, "Remitter Cheque NO. should be empty");
          }else {
         	 System.out.println("Remitter Cheque NO be Empty");
         	assertMsg( "Payment Date is Empty");
          }  
       if(elementText("efiling_text_remitter_date","").equals("")) {
           	 System.out.println("Remitter date should be empty");
           	softAssert.assertTrue(true, "Remitter date should be empty");
            }else {
           	 System.out.println("Remitter Contact NO. is not empty");
           	assertMsg("Remitter Contact NO. is not empty");
            }
       if(elementText("efiling_text_remitter_contact_no","").equals("")) {
         	 System.out.println("Remitter Contact NO should be empty");
         	softAssert.assertTrue(true, "Remitter Contact NO should be empty");
          }else {
         	 System.out.println("Remitter Contact NO. is not empty");
         	assertMsg( "Remitter Contact NO. is not empty");
          }
}

@Then("^Beneficary Details \"([^\"]*)\"benficac\"([^\"]*)\"benficbrname\"([^\"]*)\"benficbrcode\"([^\"]*)\"$")
public void beneficary_Details_benficac_benficbrname_benficbrcode(String arg1, String arg2, String arg3, String arg4)    {
	if(!elementText("efiling_text_benef_name","").equals("")) {
     	 System.out.println("Beneficiary Name should not be empty");
     	softAssert.assertTrue(true, "Beneficiary Name should not be empty");
      }else {
     	 System.out.println("Beneficaiary Name is Empty");
     	assertMsg( "Beneficaiary Name is Empty");
      }
      if(!elementText("efiling_text_benef_acno","").equals("")) {
        	 System.out.println("Beneficaiary Account NO. should be empty");
        	 softAssert.assertTrue(true, "Beneficaiary Account NO. should not be empty");
         }else {
        	 System.out.println("Beneficaiary Account NO. is not empty");
        	 assertMsg( "Beneficaiary Account NO. is not empty");
         }
      if(!elementText("efiling_text_benef_bank_name","").equals("")) {
        	 System.out.println("Beneficaiary Bank Name should not be empty ");
        	 softAssert.assertTrue(true, "Beneficaiary Bank Name should not be empty ");
         }else {
        	 System.out.println("Beneficaiary Bank Name is Empty");
        	 assertMsg( "Beneficaiary Bank Name is Empty");
         }  
      if(!elementText("efiling_text_benef_branch_code","").equals("")) {
          	 System.out.println("BeneficaiarBranch Code should not be empty");
          	softAssert.assertTrue(true, "BeneficaiarBranch Code should not be empty");
           }else {
          	 System.out.println("Beneficaiary Branch Code is empty");
          	assertMsg("Beneficaiary Branch Code is empty");
           }
      if(!elementText("efiling_text_benef_amount_receive","").equals("")) {
       	 System.out.println("Beneficaiary Amount should not be empty");
       	softAssert.assertTrue(true, "Beneficaiary Amount should not be empty");
        }else {
       	 System.out.println("Beneficaiary Amount is empty");
       	assertMsg("Beneficaiary Amount is empty");
        }
}


@Then("^clicks Print\"([^\"]*)\"$")
public void clicks_Print(String print) throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	
	System.out.println(wd.getTitle());
	clickOn("efiling_btn_print","");	
	sleepWait(2000);
	switchPreviousWindow(2);
	if(print.equalsIgnoreCase("y")) {
	key("enter");
	key("enter");
	if(no_window!=1) {
		assertMsg("Not on first window");
	closeCurrentWindow();
		
	}}
	if(print.equalsIgnoreCase("n")) {
		key("tab");
		key("enter");
				if(no_window!=1) {
			assertMsg("Not on first window");
		}
		switchPreviousWindow(0);
	}	
	



	logout();
}

@Then("^Click Cancel$")
public void click_Cancel() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	clickOn("efiling_btn_cancel","");
	sleepWait(2000);
		if(!elementText("Efiling_directed_page","").equals("VAT e-Filing")) {
			assertMsg("The User is not on E-filing View Page!!!");
		}
	logout();
   
}

@Then("^Checks barcode$")
public void checks_barcode() throws Throwable {
	if(elementText("efiling_text_barcode","").length()!=barCodeLength) {		
		assertMsg("The Barcode is not of 15 digit..");
	}
}


}
