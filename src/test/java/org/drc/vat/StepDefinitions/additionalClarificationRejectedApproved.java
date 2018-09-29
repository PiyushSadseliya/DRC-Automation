package org.drc.vat.StepDefinitions;

import static org.drc.vat.appmanager.HelperBase.type;
import static org.drc.vat.appmanager.HelperBase.assertMsg;

import static org.drc.vat.appmanager.HelperBase.wd;

import org.drc.vat.StepDefinitions.UploadDocuments.*;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.testng.asserts.SoftAssert;

import static org.drc.vat.appmanager.HelperBase.pageSource;
import static org.drc.vat.appmanager.HelperBase.clickOn;
import static org.drc.vat.appmanager.HelperBase.logout;
import static org.drc.vat.appmanager.HelperBase.elementText;
import static org.drc.vat.appmanager.HelperBase.login;
import static org.drc.vat.appmanager.HelperBase.checkElement;
import  org.drc.vat.StepDefinitions.GeneralDetails.*;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class additionalClarificationRejectedApproved {
	String document =null;
	int commentmin=10;
	int commentmax=250;
	boolean submit=true;
	UploadDocuments docs = new UploadDocuments();
	SoftAssert softAssert = new SoftAssert();
	@Given("^the officer has Rejected the form and The User is on Dashboard After Successfully login from taxpayer portal \"([^\"]*)\" \"([^\"]*)\"$")
	public void the_officer_has_Rejected_the_form_and_The_User_is_on_Dashboard_After_Successfully_login_from_taxpayer_portal(String username, String password)throws Throwable {	
		Thread.sleep(10000);
		login(username,password);

	}

	@Then("^User must see the application Status as Rejected$")
	public void user_must_see_the_application_Status_as_Rejected() throws InterruptedException  {
		// Write code here that turns the phrase above into concrete actions
		if(!checkElement("image_rejected")) {
		assertMsg("NOT rejected");	
		}
		
	}

	@Then("^again applies for VAT Registration$")
	public void again_applies_for_VAT_Registration() {
		// Write code here that turns the phrase above into concrete actions
		clickOn("btn_apply_new_Registration","");

	}

	@Given("^the officer Ask for additional clarification in the form and The User is on Dashboard After Successfully login from taxpayer portal\"([^\"]*)\"\"([^\"]*)\"$")
	public void the_officer_Ask_for_additional_clarification_in_the_form_and_The_User_is_on_Dashboard_After_Successfully_login_from_taxpayer_portal(String username,String password) throws InterruptedException {
		// Write code here that turns the phrase above into concrete actions
		login(username,password);
	}


	@When("^user clicks on edit button for clarifying form details$")
	public void user_clicks_on_edit_button_for_clarifying_form_details()  {
		// Write code here that turns the phrase above into concrete actions
		clickOn("btn_editform","");
		System.out.println("Edit button clicked");

	}

	@Then("^the user is redirected to review and submit page$")
	public void the_user_is_redirected_to_review_and_submit_page() throws InterruptedException  {
		// Write code here that turns the phrase above into concrete actions
		Thread.sleep(1000);
		clickOn("","btn_reply");
			assertMsg("NOT On Review And Submit Page");
		
		Thread.sleep(5000);

	}



	@Then("^Clicks on Reply button enters comment along with the documents$")
	public void clicks_on_Reply_button_enters_comment_along_with_the_documents(String comment) {
		clickOn("btn_reply","");
		// Write code here that turns the phrase above into concrete actions

		type("txtbx_comment",comment);
		if(comment.length()==commentmin) {
			//pageSource.contains("characters should be minim,um 10");
		}
		else if(comment.length()>commentmin) {
			System.out.println("No Validation Messages");
		}

	}
	@Then("^clicks on continue$")
	public void clicks_on_continue() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		clickOn("btn_continue", "");

	}
	@Then("^Edits the clarifications details needed respectively \"([^\"]*)\" \"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"$")
	public void edits_the_clarifications_details_needed_respectively(String edityn, String category, String Subcategory, String LLPyn, String NIF, String NIFdate, String BFullName, String IFullName, String TrainingName, String BusinessType, String n_coi, String incdate, String BusinessStartDAte, String CompanySize, String LastYearREvenue) throws InterruptedException{
		// Write code here that turns the phrase above into concrete actions
		if(edityn.equalsIgnoreCase("Y")) {
			clickOn("btn_edit_gendeteails","");
			if(elementText("page_general_details","").equalsIgnoreCase("General Details")) {
				if(!NIF.equals("")) {
					type("", NIF);			
				} if(!NIFdate.equals("")) {
					type("", NIFdate);			
				} 
				if (category.equals("Natural Person")) {

					if(!IFullName.equals(""))
					{
						type("fullname", IFullName);
					}

					if(!TrainingName.equals("")) {
						type("training_name", TrainingName);
					} if(!BusinessType.equals("")) {				  
						type("type_0f_business", BusinessType);			
					} if(!BusinessStartDAte.equals("")) {
						//clickOn("BusinessStartDAte", "");			
						//clickOn("BusinessStartDAte", "");
					}if(!CompanySize.equals("")) {
						Thread.sleep(1000);
						clickOn("company_size", "");
						Thread.sleep(1000);
						clickOn("span", "[contains(text(),'" + CompanySize + "')]");
					}if(!LastYearREvenue.equals("")) {
						Thread.sleep(1000);
						type("last_revenue", LastYearREvenue);
					}	
				} else {

					if(!BFullName.equals("")) {				   
						Thread.sleep(1000);
						type("", BFullName);
					}if(!n_coi.equals("")) {
						Thread.sleep(1000);
						type("", n_coi);
					}if(!incdate.equals("")) {
						Thread.sleep(1000);
						type("", incdate);
					}if(!BusinessType.equals("")) {				  
						type("", BusinessType);			
					}if(!BusinessStartDAte.equals("")) {
						Thread.sleep(1000);
						type("", BusinessStartDAte);
					}if(!CompanySize.equals("")) {
						Thread.sleep(1000);
						type("", CompanySize);
					}if(!LastYearREvenue.equals("")) {
						Thread.sleep(1000);
						type("", LastYearREvenue);
					}		
				}}else {
					softAssert.assertEquals(true, true,"Not on General details Page");
				}
		}
		if(edityn.equalsIgnoreCase("N")) {
			System.out.println("nothing to edi!!t");
		}


	}




	@Then("^may edit reg address of business\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"$")
	public void may_edit_reg_address_of_business(String arg1, String arg2, String arg3, String arg4, String arg5, String arg6) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		if(!arg1.equals("")) {
			type("address1", arg1);			
		} if(!arg2.equals("")) {
			type("address2", arg2);			
		} if(!arg3.equals("")) {
			clickOn("province", "");
			Thread.sleep(1000);
			clickOn("span", "[contains(text(),'" + arg3 + "')]");
		}if(!arg4.equals("")) {
			clickOn("city", "");
			Thread.sleep(1000);
			clickOn("span", "[contains(text(),'" + arg4 + "')]");
		} if(!arg5.equals("")) {
			Thread.sleep(1000);
			type("zipcode", arg5);			
		} if(!arg6.equals("")) {
			Thread.sleep(1000);
			type("mobileno", arg6);
		}


	}

	@Then("^may edit details of Promoters \"([^\"]*)\" \"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"$")
	public void may_edit_details_of_Promoters(String arg1, String arg2, String arg3, String arg4, String arg5, String arg6, String arg7, String arg8, String arg9) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		if(arg1.equalsIgnoreCase("Y")) {
			//System.out.println(NameOfPromoters + P_address1 + P_province + P_city + P_zipcode + P_email + P_Mobileno);
			if(!arg2.equals("")) {
				type("name", arg2);
				Thread.sleep(1000);
			}if(!arg3.equals("")) {
				type("buspromadd1", arg3);
				Thread.sleep(1000);
			}if(!arg4.equals("")) {
				type("buspromadd2", arg4);
				Thread.sleep(1000);
			}if(!arg5.equals("") &&!arg6.equals("")) {
				clickOn("buspromprovince", "");
				Thread.sleep(1000);
				clickOn("span", "[contains(text(),'" + arg5 + "')]");
				Thread.sleep(1000);
				WebElement we;
				we = wd.findElement(By.xpath("(//*[@formcontrolname='cityId'])[1]"));
				if (we.isEnabled()) {
					Thread.sleep(1000);
					clickOn("buspromcity", "");
					Thread.sleep(2000);
					clickOn("span", "[contains(text(),'" + arg6 + "')]");
				}}
		}if(!arg7.equals("")) {
			Thread.sleep(2000);
			type("buspromzipcode", arg7);
		}if(!arg8.equals("")) {
			Thread.sleep(2000);
			type("buspromemail", arg8);
		}if(!arg9.equals("")) {
			Thread.sleep(1000);
			type("busprommobileno", arg9);}

	}

	@Then("^May edit Authorized Signatory\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"$")
	public void may_edit_Authorized_Signatory(String arg1, String arg2, String arg3, String arg4, String arg5) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		if(arg1.equalsIgnoreCase("y")) {
			clickOn("input","[@id='Yes']");
			if(!arg2.equals("")) {
				type("jobtitle",arg2);

			}if(!arg3.equals("")) {
				type("authfullname",arg3);

			}if(!arg4.equals("")) {
				type("authemail",arg4);

			}if(!arg5.equals("")) {
				type("authmobileno",arg5);

			}

		}else if(arg1.equalsIgnoreCase("n")) {
			clickOn("input","[@id='No']");
		}
		clickOn("btn_continue", "");
	}

	@Then("^Can Edit Bank Details \"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"$")
	public void can_Edit_Bank_Details(String arg5,String arg1, String arg2, String arg3, String arg4) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		if(arg5.equalsIgnoreCase("yes")) {
			if(arg1.equals("")){
				type("acct_no", arg1);
			}if(arg2.equals("")){
				Thread.sleep(1000);
				type("acct_holder_name", arg2);
			}if(arg3.equals("")){
				Thread.sleep(1000);
				clickOn("bank_name", "");
				Thread.sleep(1000);
				clickOn("span", "[contains(text(),'" + arg3 + "')]");

			}		if(arg4.equals("")){
				clickOn("branch_name", "");
				Thread.sleep(1000);
				clickOn("span", "[contains(text(),'" + arg4 + "')]");
			}
			clickOn("btn_continue", "");
		}
	}

	@Then("^Clicks on Reply button enters comment \"([^\"]*)\" along with the documents\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"$")
	public void clicks_on_Reply_button_enters_comment_along_with_the_documents(String comment, String doctype, String desc, String filepath) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		clickOn("btn_reply","");
	}

	@Then("^clicks on I agree$")
	public void clicks_on_I_agree() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		clickOn("chkbx_review_agree","");

	}

	@Then("^again Submits the form to DGI officer for review$")
	public void again_Submits_the_form_to_DGI_officer_for_review() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		if(submit) {
			clickOn("btn_review_submit","");
	}}

	@Then("^Can View the document$")
	public void can_View_the_document() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		clickOn("image1","");
		clickOn("image2","");

	}

	@Then("^again Submits the form for review to DGI officer$")
	public void again_Submits_the_form_for_review_to_DGI_officer() throws Throwable {
	
		clickOn("chkbx_agree","");
		clickOn("btn_review_submit","");
		
	}

	@Given("^The DGI officer has approved for NITVA and The User is on Dashboard After Successfully login from taxpayer portal$")
	public void the_DGI_officer_has_approved_for_NITVA_and_The_User_is_on_Dashboard_After_Successfully_login_from_taxpayer_portal() throws Throwable {
		// Write code here that turns the phrase above into concrete action
		login("demo2@mailinator.com","demo1234");
	}

	@Then("^User must see the application Status as Approved   on the Dashboard$")
	public void user_must_see_the_application_Status_as_Approved_on_the_Dashboard() throws Throwable {
		// Write code here that turns the phrase above into concrete actions

	}

	@Then("^Views the NITVA Certificate$")
	public void views_the_NITVA_Certificate() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
	clickOn("text_nitva_number","");
		
	
			
		

	}



	@Then("^Must Reply with the comment \"([^\"]*)\" along with the documents$")
	public void must_Reply_with_the_comment_along_with_the_documents(String comment) throws Throwable {
	   
		clickOn("btn_reply","");
		// Write code here that turns the phrase above into concrete actions

		type("txtbx_comment",comment);
		if(comment.length()==commentmin) {
			//pageSource.contains("characters should be minim,um 10");
		}
		else if(comment.length()>commentmin) {
			System.out.println("No Validation Messages");
		}
	   
	}

	@Then("^Adds and removes the document \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"$")
	public void adds_and_removes_the_document(String doctype, String docdesc, String docpath,String btn_add,String doctype1, String docdesc1, String docpath1, String validationmsg,String condition) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		clickOn("drp_popup_doctype","");
		clickOn("span", "[contains(text(),'" + doctype + "')]");
		clickOn("drp_popup_docdesc","");
		clickOn("span", "[contains(text(),'" + docdesc + "')]");		
		clickOn("btn_browse","");
	//	UploadImage("",docpath);
		if(btn_add.equalsIgnoreCase("y")) {
			clickOn("drp_popup_doctype", "");
			Thread.sleep(4000);
			clickOn("","");
			clickOn("span", "[contains(text(),'" + doctype1 + "')]");
			clickOn("","");
			clickOn("span", "[contains(text(),'" + docdesc1 + "')]");		
			clickOn("btn_browse","");
		//	UploadImage("",docpath1);			
		}
		if(condition.equalsIgnoreCase("remove")) {
			clickOn("btn_remove","");			
			submit=false;
			
		}
	

	    
	}
	


}
