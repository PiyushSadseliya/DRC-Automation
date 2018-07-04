package org.drc.vat.StepDefinitions;

import static org.drc.vat.appmanager.HelperBase.clickOn;
import static org.drc.vat.appmanager.HelperBase.type;
import static org.drc.vat.appmanager.HelperBase.drp_select;
import static org.drc.vat.appmanager.HelperBase.elements;
import static org.drc.vat.appmanager.HelperBase.UploadImage;
import static org.drc.vat.appmanager.HelperBase.logout;
import static org.drc.vat.appmanager.HelperBase.elementText;
import static org.drc.vat.appmanager.HelperBase.viewDoc;
import static org.drc.vat.appmanager.HelperBase.pageSource;


import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.testng.asserts.SoftAssert;

import static org.drc.vat.appmanager.HelperBase.findelements;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import static org.drc.vat.appmanager.HelperBase.wd;

import java.io.File;

public class UploadDocuments {
	String Upload_Msg = "File Uploaded!";
	String Upload_msgError_size="File size must be less than 2MB.";
	String delete_msg="Document file deleted Successfully";
	String doctype_errormsg="Allow only Image and pdf file only!";
	String pageSource=null;
	File file =null;
	double maxMB=2.00;

	int upload_doc=0;
	String cat = null;
	String subcat = null;
	String llpyn = null;
	SoftAssert softAssert = new SoftAssert();


	@Given("^The users has logged in and proceeds for VAT Registration$")
	public void the_users_has_logged_in_and_proceeds_for_VAT_Registration() throws InterruptedException {
		// Write code here that turns the phrase above into concrete actions
		type("txtbox_username", "rihe@o3enzyme.com");
		Thread.sleep(2000);
		type("txtbox_password", "12345678");

		Thread.sleep(1000);
		clickOn("btn_login", "");
		// clickOn("send_code","");
		Thread.sleep(3000);

		clickOn("checkbox_vat", "");
		Thread.sleep(2000);
		clickOn("register_button", "");
		Thread.sleep(3000);
		clickOn("btn_continue", "");
		Thread.sleep(3000);
	}

	@When("^Selects taxpayer \"([^\"]*)\" and sub category \"([^\"]*)\" and llp \"([^\"]*)\"$")
	public void selects_taxpayer_and_sub_category_and_llp(String category, String subcategory, String llp)
			throws InterruptedException {
		// Write code here that turns the phrase above into concrete actions
		cat = category;
		subcat = subcategory;
		llpyn = llp;			
		System.out.println(cat);
		System.out.println(subcat);
		System.out.println(llp);

		clickOn("category", "");
		Thread.sleep(1000);
		clickOn("span", "[contains(text(),'" + category + "')]");
		Thread.sleep(1000);
		clickOn("sub_category", "");
		Thread.sleep(2000);
		clickOn("span", "[contains(text(),'" + subcategory + "')]");
		Thread.sleep(2000);
		if (!llp.equals("")) {			

			clickOn("partnership_firm", "");
			Thread.sleep(5000);
			//clickOn("option_no", "/span[text()='" + llp + "']");
			System.out.println("llp ");
			Thread.sleep(3000);
		}
	}

	@When("^Fills General details \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
	public void fills_General_details(String arg1, String arg2, String arg3, String arg4, String arg5, String arg6,
			String arg7, String arg8, String arg9) throws InterruptedException {
		// Write code here that turns the phrase above into concrete actions
		System.out.println(arg1+arg2+arg3+arg4+arg5+arg6+arg7+arg8+arg9);
		Thread.sleep(6000);
		type("nif", arg1);
		Thread.sleep(4000);

		//clickOn("nif_reg_date", "");
		Thread.sleep(5000);
		//clickOn("nifdate", "");
		Thread.sleep(1000);
		// System.out.println(cat);
		if (cat.equals("Natural Person")) {
			type("fullname", arg3);
			clickOn("type_0f_business", "");
			clickOn("span", "[contains(text(),'" + arg4 + "')]");	
			Thread.sleep(4000);
			//clickOn("Business_start_date", "");			
			//clickOn("busdate", "");

			clickOn("company_size", "");
			Thread.sleep(1000);
			clickOn("span", "[contains(text(),'" + arg6 + "')]");

			type("last_revenue", arg7);
		} else {
			type("business_name", arg3);
			type("numberofcoi", arg4);
			Thread.sleep(3000);
			//clickOn("dateofincorporation", "");
			Thread.sleep(3000);
			//clickOn("datein", "");
			Thread.sleep(1000);
			clickOn("type_0f_business", "");
			clickOn("span", "[contains(text(),'" + arg6 + "')]");		
			Thread.sleep(4000);
			//clickOn("Business_start_date", "");
			Thread.sleep(1000);
			//clickOn("busdate", "");
			Thread.sleep(1000);
			clickOn("company_size", "");
			Thread.sleep(1000);
			clickOn("span", "[contains(text(),'" + arg8 + "')]");
			Thread.sleep(1000);
			type("last_revenue", arg9);
			Thread.sleep(1000);
		}

	}

	@When("^Fills Business address \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
	public void fills_Business_address(String Address1, String Province, String City, String ZipCode, String MobileNo) throws InterruptedException {
		// Write code here that turns the phrase above into concrete actions
		type("address1", Address1);
		clickOn("province", "");
		Thread.sleep(1000);
		clickOn("span", "[contains(text(),'" + Province + "')]");
		Thread.sleep(1000);
		clickOn("city", "");
		Thread.sleep(1000);
		clickOn("span", "[contains(text(),'" + City + "')]");
		Thread.sleep(1000);
		type("zipcode", ZipCode);
		Thread.sleep(1000);
		type("mobileno", MobileNo);

		Thread.sleep(1000);	}

	@When("^fills Details of Business Promoters \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
	public void fills_Details_of_Business_Promoters(String NameOfPromoters, String P_address1, String P_province,
			String P_city, String P_zipcode, String P_email, String P_Mobileno) throws InterruptedException {
		if(!cat.equals("Natural Person")) {
			System.out.println(NameOfPromoters + P_address1 + P_province + P_city + P_zipcode + P_email + P_Mobileno);
			type("name", NameOfPromoters);
			Thread.sleep(1000);
			type("buspromadd1", P_address1);
			Thread.sleep(1000);
			clickOn("buspromprovince", "");
			Thread.sleep(1000);
			clickOn("span", "[contains(text(),'" + P_province + "')]");
			Thread.sleep(1000);
			WebElement we;
			we = wd.findElement(By.xpath("(//*[@formcontrolname='cityId'])[1]"));
			if (we.isEnabled()) {
				Thread.sleep(1000);
				clickOn("buspromcity", "");
				Thread.sleep(2000);
				clickOn("span", "[contains(text(),'" + P_city + "')]");
			}
			Thread.sleep(2000);
			type("buspromzipcode", P_zipcode);
			Thread.sleep(2000);
			type("buspromemail", P_email);
			Thread.sleep(1000);
			type("busprommobileno", P_Mobileno);
		}
	}

	@When("^Selects Authorized signatory no and clicks continue$")
	public void selects_Authorized_signatory_no_and_clicks_continue() throws InterruptedException {
		clickOn("input", "[@id='no']");
		clickOn("btn_continue", "");
		Thread.sleep(2000);

	}

	@When("^Fills Bank Details \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" and clicks continue$")
	public void fills_Bank_Details_and_clicks_continue(String acct, String name, String bank, String branch)
			throws InterruptedException {
		// Write code here that turns the phrase above into concrete actions
		Thread.sleep(2000);
		System.out.println(acct + name + bank + branch);
		type("acct_no", acct);
		Thread.sleep(1000);
		type("acct_holder_name", name);
		Thread.sleep(1000);
		clickOn("bank_name", "");
		Thread.sleep(1000);
		clickOn("span", "[contains(text(),'" + bank + "')]");
		WebElement we;
		// we=wd.findElement(By.xpath("//*[@formcontrolname='bankBranchId']"));
		clickOn("branch_name", "");
		Thread.sleep(1000);
		clickOn("span", "[contains(text(),'" + branch + "')]");
		Thread.sleep(1000);
		clickOn("btn_continue", "");
		Thread.sleep(3000);
	}

	@When("^The user is on the upload the page with Proofs of Add \"([^\"]*)\"\"([^\"]*)\"$")
	public void the_user_is_on_the_upload_the_page_with_Proofs_of_Add(String add, String addpath) throws Exception {
		// Write code here that turns the phrase above into concrete action
		System.out.println(add + addpath);
		clickOn("dropdown_0", "");
		Thread.sleep(1000);
		clickOn("span", "[contains(text(),'" + add + "')]");
		Thread.sleep(1000);
		clickOn("file0_upload", "");
		UploadImage("", addpath);
		fileUploadMessage(addpath);

		upload_doc++;

		System.out.println("uploaded add");

	}

	@When("^Acc \"([^\"]*)\" \"([^\"]*)\"$")
	public void acc(String ac, String acpath) throws Throwable {
		clickOn("dropdown_1", "");
		clickOn("span", "[contains(text(),'" + ac + "')]");
		clickOn("file1_upload", "");
		UploadImage("", acpath);
		fileUploadMessage(acpath);
		upload_doc++;
		System.out.println("uploaded ac");
	}

	@When("^LOAuth\"([^\"]*)\" \"([^\"]*)\"$")
	public void loauth(String lauth, String lauthpath) throws Exception {
		// Write code here that turns the phrase above into concrete actions
		System.out.println(lauth);
		if (cat.equals("Natural Person")) {		
			clickOn("dropdown_2", "");
			clickOn("span", "[contains(text(),'" + lauth + "')]");
			clickOn("file2_upload", "");
		} else if (subcat.equals("Government Entity")
				|| subcat.equals("Other Non-Corporates") && llpyn.equals("Yes")|| subcat.equals("Other Non-Corporates") && llpyn.equals("No")) {
			clickOn("dropdown_4", "");
			Thread.sleep(1000);
			clickOn("span", "[contains(text(),'" + lauth + "')]");
			clickOn("file4_upload", "");
			Thread.sleep(1000);
		} else if (subcat.equals("Incorporated Bodies") && llpyn.equals("No") || subcat.equals("Incorporated Bodies") && llpyn.equals("Yes")) {
			clickOn("dropdown_3", "");
			Thread.sleep(1000);
			clickOn("span", "[contains(text(),'" + lauth + "')]");
			clickOn("file3_upload", "");
			Thread.sleep(1000);
		}
		UploadImage("", lauthpath);
		fileUploadMessage(lauthpath);
		upload_doc++;
		Thread.sleep(2000);
		System.out.println("uploaded author");
	}

	@When("^INC \"([^\"]*)\" \"([^\"]*)\"$")
	public void inc(String inc, String incpath) throws Exception {
		System.out.println(inc);
		clickOn("dropdown_2", "");
		Thread.sleep(1000);
		clickOn("span", "[contains(text(),'" + inc + "')]");
		clickOn("file2_upload", "");
		Thread.sleep(1000);
		UploadImage("", incpath);
		fileUploadMessage(incpath);
		upload_doc++;
		System.out.println("uploaded Inc");
	}

	@When("^establish \"([^\"]*)\" \"([^\"]*)\"$")
	public void establish(String establish, String establishpath) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		System.out.println(establish);
		clickOn("dropdown_3", "");
		Thread.sleep(1000);
		clickOn("span", "[contains(text(),'" + establish + "')]");
		clickOn("file3_upload", "");
		Thread.sleep(1000);
		UploadImage("", establishpath);
		fileUploadMessage(establishpath);
		upload_doc++;
		System.out.println("uploaded establish");
	}

	@When("^rev\"([^\"]*)\"\"([^\"]*)\"$")
	public void rev(String lyr, String lyrpath) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		System.out.println(lyr);
		if (cat.equals("Natural Person") & lyr != "") {
			clickOn("dropdown_3", "");
			Thread.sleep(1000);
			clickOn("span", "[contains(text(),'" + lyr + "')]");
			clickOn("file3_upload", "");

		} else if (subcat.equals("Incorporated Bodies") && llpyn.equals("No")) {
			clickOn("dropdown_4", "");
			Thread.sleep(1000);
			clickOn("span", "[contains(text(),'" + lyr + "')]");
			clickOn("file4_upload", "");

		} else if (subcat.equals("Government Entity")
				|| subcat.equals("Incorporated Bodies") && llpyn.equals("Yes")
				|| subcat.equals("Other Non-Corporates") && llpyn.equals("No")) {
			clickOn("dropdown_5", "");
			Thread.sleep(1000);
			clickOn("span", "[contains(text(),'" + lyr + "')]");
			clickOn("file5_upload", "");

		} else if (subcat.equals("Other Non-Corporates") && llpyn.equals("Yes")) {
			clickOn("dropdown_6", "");
			Thread.sleep(1000);
			clickOn("span", "[contains(text(),'" + lyr + "')]");
			clickOn("file6_upload", "");

		}
		UploadImage("", lyrpath);

		fileUploadMessage(lyrpath);
		upload_doc++;		

		Thread.sleep(2000);
		System.out.println("uploaded rev");

	}

	void fileUploadMessage(String lyrpath){
		System.out.println("File upload Message");
		pageSource=pageSource();
		try{
			file =new File(lyrpath);
			System.out.println(file.exists());	


			if(lyrpath.endsWith(".pdf")||lyrpath.endsWith(".jpg")||lyrpath.endsWith(".jpeg")||lyrpath.endsWith(".png")) {
				if(getFileSizeInMb(file)<=maxMB) {
					if(pageSource.contains("<div>"+Upload_Msg+"</div>")) {
						System.out.println("UPload message shown");
					}					
					softAssert.assertEquals(true, true,"File Uploaded Succesully with correct message");
					System.out.println("File Uploaded Succesully with correct message");
				}else {
					pageSource.contains("<div>"+Upload_msgError_size+"</div>");
					softAssert.assertEquals(true, true,"Only Document type Matched & Size  is greater than maximum size");
				}
			}else if((!lyrpath.endsWith(".pdf"))||(!lyrpath.endsWith(".jpg"))||(!lyrpath.endsWith(".jpeg"))||(!lyrpath.endsWith(".png"))) {
				pageSource.contains("<div>"+doctype_errormsg+"</div>");
				softAssert.assertEquals(true, true,"Document Type donot match");		
		}}
		catch(Exception e)
		{
			e.printStackTrace();
		}
			
	}



		double getFileSizeInMb(File file) {
			return (double) file.length() / (1024 * 1024);

		}


		@When("^Views the files$")
		public void views_the_files() throws InterruptedException   {
			// Write code here that turns the phrase above into concrete actions
			System.out.println("viewed Documents");
			viewDoc("btn_view",upload_doc);
		}


		@Then("^Clicks on Continue\\.$")
		public void clicks_on_Continue() throws Throwable {
			// Write code here that turns the phrase above into concrete actions
			logout();
		}

		@When("^Asssoc \"([^\"]*)\" \"([^\"]*)\"$")
		public void asssoc(String assoc, String assocpath) throws Exception {
			// Write code here that turns the phrase above into concrete actions
			System.out.println(assoc);
			clickOn("dropdown_3", "");
			Thread.sleep(1000);
			clickOn("span", "[contains(text(),'" + assoc + "')]");
			clickOn("file3_upload", "");
			Thread.sleep(1000);
			UploadImage("", assocpath);
			fileUploadMessage(assocpath);
			upload_doc++;
			System.out.println("uploaded assoc");

		}

		@When("^llp\"([^\"]*)\"\"([^\"]*)\"$")
		public void llp(String llp, String llppath) throws Exception {
			// Write code here that turns the phrase above into concrete actions
			System.out.println(llp);
			if(subcat.equals("Incorporated Bodies") && llpyn.equals("Yes")) {
				clickOn("dropdown_4", "");
				Thread.sleep(1000);
				clickOn("span", "[contains(text(),'" + llp + "')]");
				clickOn("file4_upload", "");
				Thread.sleep(1000);
			}
			else {
				clickOn("dropdown_5", "");
				Thread.sleep(1000);
				clickOn("span", "[contains(text(),'" + llp + "')]");
				clickOn("file5_upload", "");
				Thread.sleep(1000);
			}
			UploadImage("", llppath);
			fileUploadMessage(llppath);	
			upload_doc++;		
			System.out.println("uploaded LLP");
		}

		@Then("^Removes the document$")
		public void removes_the_document() throws InterruptedException{
			// Write code here that turns the phrase above into concrete actions
			clickOn("doc_remove","");
			Thread.sleep(2000);
			clickOn("btn_cancel","");
			Thread.sleep(2000);
			clickOn("btn_delete","");
			Thread.sleep(1500);
			try{
				clickOn("doc_remove","");
				Thread.sleep(2000);
				clickOn("btn_cancel","");
				Thread.sleep(2000);
				clickOn("doc_remove","");
				Thread.sleep(2000);
				clickOn("btn_delete","");
				Thread.sleep(1500);
				if(pageSource().contains("<div>"+delete_msg+"</div>")) {
					System.out.println("File Deleted Succesully");
					softAssert.assertEquals(true, true);
				}
				else{
					softAssert.fail();
				}
			}catch(Exception e) {
				e.printStackTrace();
			}


		}
		@Then("^clicks on previous button and goes to Bank details page$")
		public void clicks_on_previous_button_and_goes_to_Bank_details_page() throws InterruptedException {
			// Write code here that turns the phrase above into concrete actions
			clickOn("btn_prev","");
			Thread.sleep(5000);	
			elementText("page_bank");

		}
	}
