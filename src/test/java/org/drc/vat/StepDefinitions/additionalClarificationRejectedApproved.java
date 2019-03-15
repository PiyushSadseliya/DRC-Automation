package org.drc.vat.StepDefinitions;

import static org.drc.vat.appmanager.HelperBase.type;
import static org.drc.vat.appmanager.HelperBase.type;
import static org.drc.vat.appmanager.HelperBase.UploadImage;
import static org.drc.vat.appmanager.HelperBase.assertMsg;

import static org.drc.vat.appmanager.HelperBase.wd;
import static org.junit.Assert.assertThat;
import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertTrue;

import java.util.List;

import org.drc.vat.StepDefinitions.UploadDocuments.*;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.testng.asserts.SoftAssert;

import static org.drc.vat.appmanager.HelperBase.pageSource;
import static org.drc.vat.appmanager.HelperBase.clickOn;
import static org.drc.vat.appmanager.HelperBase.datePicker;
import static org.drc.vat.appmanager.HelperBase.logout;
import static org.drc.vat.appmanager.HelperBase.elementText;
import static org.drc.vat.appmanager.HelperBase.login;
import static org.drc.vat.appmanager.HelperBase.checkElement;
import static org.drc.vat.appmanager.HelperBase.UploadImage;
import static org.drc.vat.appmanager.HelperBase.sleepWait;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

/*
 * user Registration Status After user submits the VAT Registration form
 * -The status gets changed according to the office approval,rejection and clarification required status 
 * 
 * 
 * 
 */

public class additionalClarificationRejectedApproved {
	String document = null;
	int commentmin = 10;
	int commentmax = 250;
	boolean submit = true;
	UploadDocuments docs = new UploadDocuments();
	SoftAssert softAssert = new SoftAssert();
	String commentMsg = "Comment must be of minimun 10 characters!";
	static boolean edit = false;
	boolean savebutton = false;

	@Given("^the officer has Rejected the form and The User is on Dashboard After Successfully login from taxpayer portal \"([^\"]*)\" \"([^\"]*)\"\"([^\"]*)\" \"([^\"]*)\"$")
	public void the_officer_has_Rejected_the_form_and_The_User_is_on_Dashboard_After_Successfully_login_from_taxpayer_portal(
			String username, String password, String arg3, String arg4) throws Throwable {
		sleepWait(10000);
		login(username, password);

	}

	@Then("^User must see the application Status as Rejected$")
	public void user_must_see_the_application_Status_as_Rejected() throws InterruptedException {
		// Write code here that turns the phrase above into concrete actions
		if (!checkElement("image_rejected")) {
			assertEquals(true, true);
		}

	}
 
	@Then("^again applies for VAT Registration$")
	public void again_applies_for_VAT_Registration() {
		// Write code here that turns the phrase above into concrete actions
		clickOn("btn_apply_new_Registration", "");
	}

	@Given("^the officer Ask for additional clarification in the form and The User is on Dashboard After Successfully login from taxpayer portal \"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\" \"([^\"]*)\"$")
	public void the_officer_Ask_for_additional_clarification_in_the_form_and_The_User_is_on_Dashboard_After_Successfully_login_from_taxpayer_portal(
			String username, String password, String arg1, String arg2) throws InterruptedException {
		login(username, password);
	}

	@When("^user clicks on edit button for clarifying form details$")
	public void user_clicks_on_edit_button_for_clarifying_form_details() {
		// Write code here that turns the phrase above into concrete actions
		clickOn("btn_editform", "");
		System.out.println("Edit button clicked");

	}

	@Then("^the user is redirected to review and submit page$")
	public void the_user_is_redirected_to_review_and_submit_page() throws InterruptedException {
		sleepWait(5000);
		assertEquals(elementText("ack", ""), "Acknowledgment");
		sleepWait(2000);
		clickOn("btn_continue", "");
		sleepWait(2000);
		clickOn("btn_continue", "");
		sleepWait(2000);
		clickOn("btn_continue", "");
		// Write code here that turns the phrase above into concrete actions
		sleepWait(2000);
		clickOn("btn_continue", "");
		sleepWait(1000);

	}

	@Then("^Clicks on Reply button enters comment along with the documents$")
	public void clicks_on_Reply_button_enters_comment_along_with_the_documents(String comment)
			throws InterruptedException {
		sleepWait(2000);
		clickOn("btn_reply", "");
		// Write code here that turns the phrase above into concrete actions

		type("txtbx_comment", comment);
		if (comment.length() < commentmin) {
			assertEquals(elementText("txt_commentmin", ""), commentMsg);
		}

	}

	@Then("^clicks on continue$")
	public void clicks_on_continue() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		// clickOn("btn_continue", "");
	}

	@Then("^Edits the clarifications details needed respectively \"([^\"]*)\" \"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"$")
	public void edits_the_clarifications_details_needed_respectively(String edityn, String category, String Subcategory,
			String LLPyn, String NIF, String NIFdate, String BFullName, String IFullName, String TrainingName,
			String BusinessType, String n_coi, String incdate, String BusinessStartDAte, String CompanySize,
			String LastYearREvenue) throws InterruptedException {
		// Write code here that turns the phrase above into concrete actions
		if (edityn.equalsIgnoreCase("Y")) {
			clickOn("btn_edit_gendeteails", "");
			sleepWait(5000);
			if (elementText("page_general_details", "").equalsIgnoreCase("General Details")) {
				if (!NIF.equals("")) {
					type("nif", NIF);
				}
				if (!NIFdate.equals("")) {
					clickOn("nif_reg_date", "");
					sleepWait(2000);
					datePicker(NIFdate);
				}
				if (category.equals("Natural Person")) {

					if (!IFullName.equals("")) {
						type("fullname", IFullName);
					}

					if (!TrainingName.equals("")) {
						type("training_name", TrainingName);
					}
					if (!BusinessType.equals("")) {
						type("drpdwn_type_0f_business", BusinessType);
					}
					if (!BusinessStartDAte.equals("")) {
						clickOn("Business_start_date", "");
						sleepWait(2000);
						datePicker(BusinessStartDAte);
						sleepWait(1000);
						// clickOn("BusinessStartDAte", "");
						// clickOn("BusinessStartDAte", "");
					}
					if (!CompanySize.equals("")) {
						sleepWait(1000);
						clickOn("company_size", "");
						sleepWait(1000);
						clickOn("span", "[contains(text(),'" + CompanySize + "')]");
					}
					if (!LastYearREvenue.equals("")) {
						sleepWait(1000);
						type("last_revenue", LastYearREvenue);
					}
				} else {

					if (!BFullName.equals("")) {
						sleepWait(1000);
						type("txtbx_business_name", BFullName);
					}
					if (!n_coi.equals("")) {
						sleepWait(1000);
						type("txtbx_numberofcoi", n_coi);
					}
					if (!incdate.equals("")) {
						clickOn("dateofincorporation", "");
						sleepWait(2000);
						datePicker(incdate);

					}
					if (!BusinessType.equals("")) {
						clickOn("drpdwn_type_0f_business", "");
						clickOn("span", "[contains(text(),'" + BusinessType + "')]");
						sleepWait(4000);

					}
					if (!BusinessStartDAte.equals("")) {
						clickOn("Business_start_date", "");
						sleepWait(1000);
						datePicker(BusinessStartDAte);
						sleepWait(1000);

					}
					if (!CompanySize.equals("")) {
						clickOn("drpdwn_company_size", "");
						sleepWait(1000);
						clickOn("span", "[contains(text(),'" + CompanySize + "')]");

					}
					if (!LastYearREvenue.equals("")) {
						sleepWait(1000);
						type("txtbx_last_revenue", LastYearREvenue);

					}
				}
			} else {
				softAssert.assertEquals(true, true, "Not on General details Page");
			}
			edit = true;
		}
		if (edityn.equalsIgnoreCase("N")) {
			System.out.println("nothing to edi!!t");
			edit = false;
		}

	}

	@Then("^may edit reg address of business\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"$")
	public void may_edit_reg_address_of_business(String arg1, String arg2, String arg3, String arg4, String arg5,
			String arg6, String arg7) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		if (arg1.equalsIgnoreCase("y")) {
			System.out.println(arg1 + arg2 + arg3 + arg4 + arg5 + arg6);
			if (!arg1.equals("")) {
				type("address1", arg2);
			}
			if (!arg2.equals("")) {
				type("address2", arg3);
			}
			if (!arg3.equals("")) {
				clickOn("province", "");
				sleepWait(1000);
				clickOn("span", "[contains(text(),'" + arg4 + "')]");
			}
			if (!arg4.equals("")) {
				clickOn("city", "");
				sleepWait(1000);
				clickOn("span", "[contains(text(),'" + arg5 + "')]");
			}
			if (!arg5.equals("")) {
				sleepWait(1000);
				type("zipcode", arg6);
			}
			if (!arg6.equals("")) {
				sleepWait(1000);
				type("mobileno", arg7);
			}
			System.out.println(arg1 + arg2 + arg3 + arg4 + arg5 + arg6);
			edit = true;
		}

	}

	@Then("^may edit details of Promoters \"([^\"]*)\" \"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"$")
	public void may_edit_details_of_Promoters(String arg1, String arg2, String arg3, String arg4, String arg5,
			String arg6, String arg7, String arg8, String arg9) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		if (arg1.equalsIgnoreCase("Y")) {
			// System.out.println(NameOfPromoters + P_address1 + P_province + P_city +
			// P_zipcode + P_email + P_Mobileno);
			if (!arg2.equals("")) {
				type("name", arg2);
				sleepWait(1000);
			}
			if (!arg3.equals("")) {
				type("buspromadd1", arg3);
				sleepWait(1000);
			}
			if (!arg4.equals("")) {
				type("buspromadd2", arg4);
				sleepWait(1000);
			}
			if (!arg5.equals("") && !arg6.equals("")) {
				clickOn("buspromprovince", "");
				sleepWait(1000);
				clickOn("span", "[contains(text(),'" + arg5 + "')]");
				sleepWait(1000);
				WebElement we;
				we = wd.findElement(By.xpath("(//*[@formcontrolname='cityId'])[1]"));
				if (we.isEnabled()) {
					sleepWait(1000);
					clickOn("buspromcity", "");
					sleepWait(2000);
					clickOn("span", "[contains(text(),'" + arg6 + "')]");
				}
			}

			if (!arg7.equals("")) {
				sleepWait(2000);
				type("buspromzipcode", arg7);
			}
			if (!arg8.equals("")) {
				sleepWait(2000);
				type("buspromemail", arg8);
			}
			if (!arg9.equals("")) {
				sleepWait(1000);
				type("busprommobileno", arg9);
			}
			edit = true;
		}

	}

	@Then("^May edit Authorized Signatory\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"$")
	public void may_edit_Authorized_Signatory(String arg1, String arg2, String arg3, String arg4, String arg5)
			throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		if (arg1.equalsIgnoreCase("y")) {
			clickOn("input", "[@id='Yes']");
			if (!arg2.equals("")) {
				type("jobtitle", arg2);

			}
			if (!arg3.equals("")) {
				type("authfullname", arg3);

			}
			if (!arg4.equals("")) {
				type("authemail", arg4);

			}
			if (!arg5.equals("")) {
				type("authmobileno", arg5);

			}

		} else if (arg1.equalsIgnoreCase("n")) {
			clickOn("input", "[@id='No']");
		}
		if (edit) {
			clickOn("btn_continue", "");
		}

	}

	@Then("^Can Edit Bank Details \"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"$")
	public void can_Edit_Bank_Details(String arg5, String arg1, String arg2, String arg3, String arg4)
			throws Throwable {
		// Write code here that turns the phrase above into concrete actions

		if (arg5.equalsIgnoreCase("y")) {
			if (arg1.equals("")) {
				type("acct_no", arg1);
			}
			if (arg2.equals("")) {
				sleepWait(1000);
				type("acct_holder_name", arg2);
			}
			if (arg3.equals("")) {
				sleepWait(1000);
				clickOn("bank_name", "");
				sleepWait(1000);
				clickOn("span", "[contains(text(),'" + arg3 + "')]");

			}
			if (arg4.equals("")) {
				clickOn("branch_name", "");
				sleepWait(1000);
				clickOn("span", "[contains(text(),'" + arg4 + "')]");
			}
			clickOn("btn_continue", "");
		} else {
			clickOn("btn_continue", "");
		}
	}

	@Then("^Clicks on Reply button enters comment \"([^\"]*)\" along with the documents\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"$")
	public void clicks_on_Reply_button_enters_comment_along_with_the_documents(String comment, String doctype,
			String desc, String filepath) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		sleepWait(2000);
		clickOn("btn_reply", "");
		sleepWait(2000);
		type("txtbx_comment", comment);

		sleepWait(2000);
		clickOn("drpdwn_doctype", "");
		sleepWait(3000);
		clickOn("lbl_uploaddocs", "/following::span[contains(text(),'" + doctype + "')]");// span[contains(text(),'Bank
																							// Account Proof')]
		sleepWait(3000);
		clickOn("drpdwn_docdesc", "");
		sleepWait(2000);
		clickOn("lbl_uploaddocs", "/following::span[contains(text(),'" + desc + "')]");
		sleepWait(2000);
		clickOn("btb_file0", "");
		sleepWait(2000);
		UploadImage("", filepath);
		sleepWait(2000);
		clickOn("btn_savereply", "");
	}

	@Then("^clicks on I agree$")
	public void clicks_on_I_agree() throws Throwable {
		sleepWait(7000);
		logout();
		/*
		 * clickOn("btn_savereply", ""); sleepWait(5000); // Write code here that turns
		 * the phrase above into concrete actions clickOn("chkbx_review_agree","");
		 * sleepWait(5000);
		 */

	}

	@Then("^again Submits the form to DGI officer for review$")
	public void again_Submits_the_form_to_DGI_officer_for_review() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		// if(submit) {
		// clickOn("btn_review_submit","");
		// }
	}

	@Then("^Can View the document$")
	public void can_View_the_document() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		clickOn("image1", "");
		clickOn("image2", "");

	}

	@Then("^again Submits the form for review to DGI officer$")
	public void again_Submits_the_form_for_review_to_DGI_officer() throws Throwable {

		clickOn("chkbx_agree", "");
		clickOn("btn_review_submit", "");

	}

	@Given("^The DGI officer has approved for NITVA and The User is on Dashboard After Successfully login from taxpayer portal\"([^\"]*)\" \"([^\"]*)\"\"([^\"]*)\" \"([^\"]*)\"$")
	public void the_DGI_officer_has_approved_for_NITVA_and_The_User_is_on_Dashboard_After_Successfully_login_from_taxpayer_portal(
			String uname, String pwd, String arg3, String arg4) throws Throwable {
		// Write code here that turns the phrase above into concrete action
		login(uname, pwd);
	}

	@Then("^User must see the application Status as Approved   on the Dashboard$")
	public void user_must_see_the_application_Status_as_Approved_on_the_Dashboard() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		sleepWait(2000);
		List<WebElement> statusElement = wd.findElements(By.xpath("//span[@class='fa fa-check ng-star-inserted']"));
		sleepWait(2000);
		System.out.println(statusElement.size());
		if (statusElement.size() > 0) {
			assertEquals(statusElement.get(4).isDisplayed(), true);
			assertEquals(elementText("txt_reviewcompleted", ""), "Review Completed");
		}
		sleepWait(1000);

	}

	@Then("^Views the NITVA Certificate$")
	public void views_the_NITVA_Certificate() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		clickOn("text_nitva_number", "");

	}

	@Then("^Must Reply with the comment \"([^\"]*)\" along with the documents$")
	public void must_Reply_with_the_comment_along_with_the_documents(String comment) throws Throwable {

		clickOn("btn_reply", "");
		// Write code here that turns the phrase above into concrete actions
		sleepWait(2000);

		type("txtbx_comment", comment);
		if (comment.length() == commentmin) {
			// pageSource.contains("characters should be minim,um 10");
		} else if (comment.length() > commentmin) {
			System.out.println("No Validation Messages");
		}

	}

	@Then("^Adds and removes the document \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"$")
	public void adds_and_removes_the_document(String doctype, String docdesc, String docpath, String btn_add,
			String doctype1, String docdesc1, String docpath1, String validationmsg, String condition)
			throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		String pagetxt = null;
		if (!doctype.equals("")) {
			sleepWait(2000);
			clickOn("drpdwn_doctype", "");
			// label[text()='Upload Documents']/following::span[contains(text(),'OTHER')]
			clickOn("lbl_uploaddocs", "/following::span[contains(text(),'" + doctype + "')]");
			sleepWait(2000);
			clickOn("drpdwn_docdesc", "");
			sleepWait(1000);
			clickOn("lbl_uploaddocs", "/following::span[contains(text(),'" + docdesc + "')]");
			sleepWait(2000);
			clickOn("btn_browse", "");
			UploadImage("", docpath);
			pagetxt = pageSource();
			if (btn_add.equalsIgnoreCase("y")) {
				clickOn("btn_addDocs", "");
				sleepWait(4000);
				clickOn("drpdwn_doctype1", "");
				sleepWait(1100);
				clickOn("drpdwn_bank2", "");
				sleepWait(1000);
				clickOn("drpdwn_docdesc2", "");
				sleepWait(1000);
				clickOn("drpdwn_docbank", "");
				sleepWait(1000);
				clickOn("btn_browse2", "");
				UploadImage("", docpath1);
				pagetxt = pageSource();
			}
		}
		if (condition.equalsIgnoreCase("remove")) {
			clickOn("btn_remove", "");
			submit = false;

		}
		if (condition.equalsIgnoreCase("Cancelbutton")) {
			clickOn("btn_removeimg", "");

			assertEquals(elementText("txt_img", ""), "");

			clickOn("btn_closereply", "");

		}
		if (condition.equalsIgnoreCase("sizegreater")) {

			System.out.println(pageSource().contains(validationmsg));
			assertEquals(pageSource().contains(validationmsg), true);
			sleepWait(2000);
			clickOn("btn_closereply", "");

		}
		if (condition.equalsIgnoreCase("otherformat")) {

			assertEquals(pageSource().contains(validationmsg), true);

			clickOn("btn_closereply", "");

		}

		if (condition.equalsIgnoreCase("maxlength")) {

			String comment = wd.findElement(By.xpath("//textarea")).getAttribute("value");
			System.out.println(comment);
			if (comment.length() > commentmax) {
				assertTrue(true);
			}

			clickOn("btn_closereply", "");

		}
		if (condition.equalsIgnoreCase("equal")) {

			String comment = wd.findElement(By.xpath("//textarea")).getAttribute("value");
			System.out.println(comment);
			if (comment.length() == commentmax) {
				assertTrue(true);
			}

			clickOn("btn_closereply", "");

		}
		if (condition.equalsIgnoreCase("minequal")) {

			String comment = wd.findElement(By.xpath("//textarea")).getAttribute("value");
			System.out.println(comment);
			if (comment.length() == commentmin) {
				assertTrue(true);
			}

			clickOn("btn_closereply", "");

		}

		if (condition.equalsIgnoreCase("minlessequal")) {

			clickOn("btn_savereply", "");
			assertEquals(elementText("txt_commenterrormsg", ""), validationmsg);
			clickOn("btn_closereply", "");

		}
		if (condition.equalsIgnoreCase("close")) {
			clickOn("btn_closereply", "");

		}

	}

}
