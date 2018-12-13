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
import static org.drc.vat.appmanager.HelperBase.sleepWait;
import static org.drc.vat.appmanager.HelperBase.login;
import static org.drc.vat.appmanager.HelperBase.datePicker;
import static org.drc.vat.appmanager.HelperBase.filedoc;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.testng.asserts.SoftAssert;

import static org.drc.vat.appmanager.HelperBase.findelements;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import static org.drc.vat.appmanager.HelperBase.wd;
import static org.testng.Assert.assertEquals;

import java.io.File;
import java.util.List;


/*
 * UploadDocuments Class upload documnets based on the Tax Payer Category & Tax Payer SubCategory 
 * it checks the type of document uploaded size 
 */
public class UploadDocuments {
	String Upload_Msg = "File Uploaded!";
	String Upload_msgError_size="File size must be less than 2MB.";
	String delete_msg="Document file deleted Successfully";
	String doctype_errormsg="Allow only Image and pdf file only!";
	String pageSource=null;
	File file =null;
	double maxMB=2048.00;
	boolean requiredDocsPage=false;

	int upload_doc=0;
	public String cat = null;
	public String subcat = null;
	public String llpyn = null;
	SoftAssert softAssert = new SoftAssert();


	@Given("^The users has logged in \"([^\"]*)\"\"([^\"]*)\" and proceeds for VAT Registration \"([^\"]*)\" \"([^\"]*)\"$")
	public void the_users_has_logged_in_and_proceeds_for_VAT_Registration( String uname, String pwd, String arg3, String arg4) throws InterruptedException {
		// Write code here that turns the phrase above into concrete actions
		
		login(uname,pwd);


		sleepWait(1000);
	//	clickOn("btn_login", "");
		// clickOn("send_code","");
		sleepWait(1000);

		clickOn("chkbox_guide", "");
		sleepWait(2000); 
		clickOn("btn_registerforvat", "");
		sleepWait(3000);
		clickOn("btn_continue", "");
		sleepWait(3000);
	}

	@When("^Selects taxpayer \"([^\"]*)\" and sub category \"([^\"]*)\" and llp \"([^\"]*)\"$")
	public void selects_taxpayer_and_sub_category_and_llp(String category, String subcategory, String llp)
			throws InterruptedException {
		// Write code here that turns the phrase above into concrete actions
		cat = category;
		subcat = subcategory;
		llpyn = llp;			
	//	System.out.println(cat);
	///	System.out.println(subcat);
	//	System.out.println(llp);

		clickOn("category", "");
		sleepWait(1000);
		clickOn("span", "[contains(text(),'" + category + "')]");
		sleepWait(1000);
		clickOn("sub_category", "");
		sleepWait(2000);
		clickOn("span", "[contains(text(),'" + subcategory + "')]");
		sleepWait(2000);
		if (!llp.equals("")) {			

			clickOn("partnership_firm", "");
			sleepWait(5000);
			if(llp.equalsIgnoreCase("yes")) {
				clickOn("llpYes", "");
				
			}else {
				clickOn("llpno", "");
			}
			
	
			sleepWait(3000);
		}
	}

	@When("^Fills General details \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
	public void fills_General_details(String arg1, String arg2, String arg3, String arg4, String arg5, String arg6,
			String arg7, String arg8, String arg9) throws InterruptedException {
		// Write code here that turns the phrase above into concrete actions
	//	System.out.println(arg1+arg2+arg3+arg4+arg5+arg6+arg7+arg8+arg9);
		sleepWait(3000);
		type("nif", arg1);
		sleepWait(2000);
		clickOn("nif_reg_date", "");
		sleepWait(2000);
		datePicker(arg2);

	
		
		sleepWait(1000);
		// System.out.println(cat);
		if (cat.equals("Natural Person")) {
			type("fullname", arg3);
			sleepWait(1500);
			clickOn("drpdwn_type_0f_business", "");
			sleepWait(1500);
			clickOn("span", "[contains(text(),'" + arg4 + "')]");	
			sleepWait(4000);
			clickOn("Business_start_date", "");		
			sleepWait(2000);
			datePicker(arg2);
			sleepWait(1000);

			clickOn("drpdwn_company_size", "");
			sleepWait(1000);
			clickOn("span", "[contains(text(),'" + arg6 + "')]");

			type("txtbx_last_revenue", arg7);
		} else {
			type("txtbx_business_name", arg3);
			type("txtbx_numberofcoi", arg4);
			sleepWait(3000);
			clickOn("dateofincorporation", "");
			sleepWait(2000);
			datePicker(arg5);
			sleepWait(1000);
			clickOn("drpdwn_type_0f_business", "");
			clickOn("span", "[contains(text(),'" + arg6 + "')]");		
			sleepWait(4000);
			clickOn("Business_start_date", "");
			sleepWait(1000);
			datePicker(arg7);
			sleepWait(1000);
			clickOn("drpdwn_company_size", "");
			sleepWait(1000);
			clickOn("span", "[contains(text(),'" + arg8 + "')]");
			sleepWait(1000);
			type("txtbx_last_revenue", arg9);
			sleepWait(1000);
		}


	}

	@When("^Fills Business address \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
	public void fills_Business_address(String Address1, String Province, String City, String ZipCode, String MobileNo) throws InterruptedException {
		// Write code here that turns the phrase above into concrete actions
		type("address1", Address1);
		clickOn("province", "");
		sleepWait(3000);
		clickOn("span", "[contains(text(),'" + Province + "')]");
		sleepWait(2000);
		clickOn("city", "");
		sleepWait(3000);
		clickOn("span", "[contains(text(),'" + City + "')]");
		sleepWait(2000);
		type("zipcode", ZipCode);
		sleepWait(1000);
		type("mobileno", MobileNo);

		sleepWait(1000);	}

	@When("^fills Details of Business Promoters \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
	public void fills_Details_of_Business_Promoters(String NameOfPromoters, String P_address1, String P_province,
			String P_city, String P_zipcode, String P_email, String P_Mobileno) throws InterruptedException {
		if(!cat.equals("Natural Person")) {
		//	System.out.println(NameOfPromoters + P_address1 + P_province + P_city + P_zipcode + P_email + P_Mobileno);
			type("name", NameOfPromoters);
			sleepWait(1000);
			type("buspromadd1", P_address1);
			sleepWait(3000);
			clickOn("buspromprovince", "");
			sleepWait(3000);
			clickOn("drpdown_panel", "[contains(text(),'" + P_province + "')]");
			sleepWait(3000);
			WebElement we;
			we = wd.findElement(By.xpath("(//*[@formcontrolname='cityId'])[1]"));
			if (we.isEnabled()) {
				sleepWait(3000);
				clickOn("buspromcity", "");
				sleepWait(3000);
				clickOn("drpdown_panel", "[contains(text(),'" + P_city + "')]");
			}
			sleepWait(3000);
			type("buspromzipcode", P_zipcode);
			sleepWait(3000);
			type("buspromemail", P_email);
			sleepWait(1000);
			type("busprommobileno", P_Mobileno);
		}
	}

	@When("^Selects Authorized signatory no and clicks continue$")
	public void selects_Authorized_signatory_no_and_clicks_continue() throws InterruptedException {
		clickOn("input", "[@id='no']");
		clickOn("btn_continue", "");
		
		sleepWait(2000);

	}

	@When("^Fills Bank Details \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" and clicks continue$")
	public void fills_Bank_Details_and_clicks_continue(String acct, String name, String bank, String branch)
			throws InterruptedException {
		// Write code here that turns the phrase above into concrete actions
		sleepWait(2000);
	//	System.out.println(acct + name + bank + branch);
		type("acct_no", acct);
		sleepWait(1000);
		type("acct_holder_name", name);
		sleepWait(2000);
		clickOn("bank_name", "");
		sleepWait(2000);
		clickOn("span", "[contains(text(),'" + bank + "')]");	
	//	System.out.println(bank);
		sleepWait(2000);
		clickOn("branch_name", "");
		sleepWait(2000);
		clickOn("span", "[contains(text(),'" + branch + "')]");
		//System.out.println(branch);
		sleepWait(1000);
		clickOn("btn_continue", "");
		sleepWait(3000);
	}

	@When("^The user is on the upload the page with Proofs of Add \"([^\"]*)\"\"([^\"]*)\"$")
	public void the_user_is_on_the_upload_the_page_with_Proofs_of_Add(String add, String addpath) throws Exception {
		// Write code here that turns the phrase above into concrete action
		//System.out.println(add + addpath);
		clickOn("dropdown_0", "");
		sleepWait(2000);
		clickOn("span", "[contains(text(),'" + add + "')]");
		sleepWait(1000);
		clickOn("file0_upload", "");
		UploadImage("", addpath);
		fileUploadMessage(addpath);

		upload_doc++;

		//System.out.println("uploaded add");

	}

	@When("^Acc \"([^\"]*)\" \"([^\"]*)\"$")
	public void acc(String ac, String acpath) throws Throwable {
		clickOn("dropdown_1", "");
		clickOn("span", "[contains(text(),'" + ac + "')]");
		clickOn("file1_upload", "");
		UploadImage("", acpath);
		fileUploadMessage(acpath);
		upload_doc++;
	//	System.out.println("uploaded ac");
	}

	@When("^LOAuth\"([^\"]*)\" \"([^\"]*)\"$")
	public void loauth(String lauth, String lauthpath) throws Exception {
		// Write code here that turns the phrase above into concrete actions
	//	System.out.println(lauth);
		if (cat.equals("Natural Person")) {		
			clickOn("dropdown_2", "");
			clickOn("span", "[contains(text(),'" + lauth + "')]");
			clickOn("file2_upload", "");
		} else if (subcat.equals("Government Entity")
				|| subcat.equals("Other Non-Corporates") && llpyn.equals("Yes")|| subcat.equals("Other Non-Corporates") && llpyn.equals("No")) {
			clickOn("dropdown_4", "");
			sleepWait(2000);
			clickOn("span", "[contains(text(),'" + lauth + "')]");
			clickOn("file4_upload", "");
			sleepWait(1000);
		} else if (subcat.equals("Incorporated Bodies") && llpyn.equals("No") || subcat.equals("Incorporated Bodies") && llpyn.equals("Yes")) {
			clickOn("dropdown_3", "");
			sleepWait(2000);
			clickOn("span", "[contains(text(),'" + lauth + "')]");
			clickOn("file3_upload", "");
			sleepWait(2000);
		}
		UploadImage("", lauthpath);
		fileUploadMessage(lauthpath);
		upload_doc++;
		sleepWait(2000);
//		System.out.println("uploaded author");
	}

	@When("^INC \"([^\"]*)\" \"([^\"]*)\"$")
	public void inc(String inc, String incpath) throws Exception {
	//	System.out.println(inc);
		clickOn("dropdown_2", "");
		sleepWait(1000);
		clickOn("span", "[contains(text(),'" + inc + "')]");
		clickOn("file2_upload", "");
		sleepWait(1000);
		UploadImage("", incpath);
		fileUploadMessage(incpath);
		upload_doc++;
	//	System.out.println("uploaded Inc");
	}

	@When("^establish \"([^\"]*)\" \"([^\"]*)\"$")
	public void establish(String establish, String establishpath) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		//System.out.println(establish);
		clickOn("dropdown_3", "");
		sleepWait(1000);
		clickOn("span", "[contains(text(),'" + establish + "')]");
		clickOn("file3_upload", "");
		sleepWait(1000);
		UploadImage("", establishpath);
		fileUploadMessage(establishpath);
		upload_doc++;
		//System.out.println("uploaded establish");
	}

	@When("^rev\"([^\"]*)\"\"([^\"]*)\"$")
	public void rev(String lyr, String lyrpath) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
	//	System.out.println(lyr);
		if (cat.equals("Natural Person") & lyr != "") {
			clickOn("dropdown_3", "");
			sleepWait(2000);
			clickOn("span", "[contains(text(),'" + lyr + "')]");
			clickOn("file3_upload", "");

		} else if (subcat.equals("Incorporated Bodies") && llpyn.equals("No")) {
			clickOn("dropdown_4", "");
			sleepWait(2000);
			clickOn("span", "[contains(text(),'" + lyr + "')]");
			clickOn("file4_upload", "");

		} else if (subcat.equals("Government Entity")
				|| subcat.equals("Incorporated Bodies") && llpyn.equals("Yes")
				|| subcat.equals("Other Non-Corporates") && llpyn.equals("No")) {
			clickOn("dropdown_5", "");
			sleepWait(2000);
			clickOn("span", "[contains(text(),'" + lyr + "')]");
			clickOn("file5_upload", "");

		} else if (subcat.equals("Other Non-Corporates") && llpyn.equals("Yes")) {
			clickOn("dropdown_6", "");
			sleepWait(2000);
			clickOn("span", "[contains(text(),'" + lyr + "')]");
			clickOn("file6_upload", "");

		}
		UploadImage("", lyrpath);

		fileUploadMessage(lyrpath);
		upload_doc++;		

		sleepWait(2000);
	//	System.out.println("uploaded rev");

	}

	void fileUploadMessage(String lyrpath){
		String errormessge=null;;
		//System.out.println("File upload Message");
		List<WebElement> txt_toastMessage=wd.findElements(By.xpath("//div[@id='toast-container']"));
		pageSource=pageSource();
		if(txt_toastMessage.size()>0) {
			errormessge=txt_toastMessage.get(0).getText();
		}
		
		
		
		try{
			file =new File(filedoc.concat(lyrpath));
	//		System.out.println(file.exists());	
	//		System.out.println(lyrpath.endsWith(".pdf"));


			if(lyrpath.toLowerCase().endsWith(".pdf")||lyrpath.toLowerCase().endsWith(".jpg")||lyrpath.toLowerCase().endsWith(".jpeg")||lyrpath.toLowerCase().endsWith(".png")) {
				double filesize=getFileSizeInMb(file);
				if(filesize<=maxMB && filesize>0) {
				assertEquals(elementText("txt_fileUploaded0", ""), "Uploaded");					
				}else {
					assertEquals(errormessge.contains(Upload_msgError_size), true,"Only Document type Matched & Size  is greater than maximum size\"");	
					requiredDocsPage=true;
					
					
				}
			}else {
				
				assertEquals(pageSource.contains(doctype_errormsg), true,"Document Type donot match");		
				requiredDocsPage=true;
		}}
		catch(Exception e)
		{
			e.printStackTrace();
		}
			
	}



		double getFileSizeInMb(File file) {
		//	System.out.println((double) file.length() );
		//	System.out.println((double) file.length() /1024);
			return (double) file.length() /  1024;

		}


		@When("^Views the files$")
		public void views_the_files() throws InterruptedException   {
			// Write code here that turns the phrase above into concrete actions
			//System.out.println("viewed Documents");
			if(!requiredDocsPage) {
			viewDoc("btn_view",upload_doc);
			}
		}


		@Then("^Clicks on Continue\\.$")
		public void clicks_on_Continue() throws Throwable {
			clickOn("btn_continue", "");
			sleepWait(4000);
			if(requiredDocsPage) {
				 assertEquals(elementText("h5", ""), "Required Documents");
			}else {
			assertEquals(elementText("ack_h3", ""), "Acknowledgment");
			sleepWait(6000);}
			// Write code here that turns the phrase above into concrete actions
			logout();
		}

		@When("^Asssoc \"([^\"]*)\" \"([^\"]*)\"$")
		public void asssoc(String assoc, String assocpath) throws Exception {
			// Write code here that turns the phrase above into concrete actions
			//System.out.println(assoc);
			clickOn("dropdown_3", "");
			sleepWait(1000);
			clickOn("span", "[contains(text(),'" + assoc + "')]");
			clickOn("file3_upload", "");
			sleepWait(1000);
			UploadImage("", assocpath);
			fileUploadMessage(assocpath);
			upload_doc++;
		//	System.out.println("uploaded assoc");

		}

		@When("^llp\"([^\"]*)\"\"([^\"]*)\"$")
		public void llp(String llp, String llppath) throws Exception {
			// Write code here that turns the phrase above into concrete actions
		//	System.out.println(llp);
			if(subcat.equals("Incorporated Bodies") && llpyn.equals("Yes")) {
				clickOn("dropdown_4", "");
				sleepWait(1000);
				clickOn("span", "[contains(text(),'" + llp + "')]");
				clickOn("file4_upload", "");
				sleepWait(1000);
			}
			else {
				clickOn("dropdown_5", "");
				sleepWait(1000);
				clickOn("span", "[contains(text(),'" + llp + "')]");
				clickOn("file5_upload", "");
				sleepWait(1000);
			}
			UploadImage("", llppath);
			fileUploadMessage(llppath);	
			upload_doc++;		
		//	System.out.println("uploaded LLP");
		}

		@Then("^Removes the document$")
		public void removes_the_document() throws InterruptedException{
			// Write code here that turns the phrase above into concrete actions

			
				clickOn("doc_remove","");
				sleepWait(2000);
				clickOn("btn_cancel","");
				sleepWait(2000);
				clickOn("doc_remove","");
				sleepWait(2000);
				clickOn("btn_delete","");
				sleepWait(1500);
				assertEquals(elementText("txt_fileUploaded0", ""), "");	

		


		}
		@Then("^clicks on previous button and goes to Bank details page$")
		public void clicks_on_previous_button_and_goes_to_Bank_details_page() throws InterruptedException {
			// Write code here that turns the phrase above into concrete actions
			clickOn("btn_prev","");
			sleepWait(5000);	
			elementText("page_bank","");

		}
		@Then("^Logouts$")
		public void logouts() throws Throwable {
		sleepWait(1000);
			logout();
		}
		@Then("^Clicks on Continue and user is on Upload Documents$")
		public void clicks_on_Continue_and_user_is_on_Upload_Documents() throws Throwable {
		 sleepWait(3000);
		 clickOn("btn_continue", "");
		 sleepWait(3000);
		 assertEquals(elementText("h5", ""), "Required Documents");
		 


	}

}
