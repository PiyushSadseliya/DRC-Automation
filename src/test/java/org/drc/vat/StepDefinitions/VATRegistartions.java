package org.drc.vat.StepDefinitions;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import static org.drc.vat.appmanager.HelperBase.clickOn;
import static org.drc.vat.appmanager.HelperBase.bodymessage;
import static org.drc.vat.appmanager.HelperBase.datePicker;
import static org.drc.vat.appmanager.HelperBase.UploadImage;
import static org.drc.vat.appmanager.HelperBase.type;
import static org.drc.vat.appmanager.HelperBase.wd;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;

public class VATRegistartions {
	@Given("^User is on VAT Registration Dashboard for adding extra data$")
	public void user_is_on_VAT_Registration_Dashboard_for_adding_extra_data() throws Throwable {
	    
		Thread.sleep(5000);
		type("txtbox_username","bindi.desai@loketa.com");
		Thread.sleep(3000);
		type("txtbox_password","Bindi123@");
		clickOn("btn_login","");
		Thread.sleep(5000);

	}

	@When("^User clicks on VAT Getting Started Guide CheckBox from Dashboard$")
	public void user_clicks_on_VAT_Getting_Started_Guide_CheckBox_from_Dashboard() throws Throwable {
	    
		clickOn("checkbox_vat","");	
	  
	}

	@When("^Clicks on Register for Vat button from Dashboard$")
	public void clicks_on_Register_for_Vat_button_from_Dashboard() throws Throwable {
		JavascriptExecutor js = (JavascriptExecutor) wd;
		js.executeScript("window.scrollTo(0, document.body.scrollHeight)");
		clickOn("register_button","");
		Thread.sleep(3000);
	}

	@When("^Clicks on Continue button of Instructions Page redirected from dashboard$")
	public void clicks_on_Continue_button_of_Instructions_Page_redirected_from_dashboard() throws Throwable {
		JavascriptExecutor js = (JavascriptExecutor) wd;
		js.executeScript("window.scrollTo(0, document.body.scrollHeight)");
		Thread.sleep(2000);
		wd.findElement(By.xpath("//*[contains(text(),'Continue')]")).click();
	//	clickOn("btn_continue","");
		Thread.sleep(3000);

	}

	@Then("^Selects Taxpayer Category \"([^\"]*)\" and Sub Category \"([^\"]*)\"$")
	public void selects_Taxpayer_Category_and_Sub_Category(String Category, String SubCategory) throws Throwable {
	    
		clickOn("category","");
		clickOn("span","[contains(text(),'" + Category +"')]");
		Thread.sleep(2000);
		clickOn("sub_category","");
		clickOn("span","[contains(text(),'"+ SubCategory +"')] ");
		Thread.sleep(2000); 
	}

	@Then("^Click on continue button$")
	public void click_on_continue_button() throws Throwable {
	    
	//	wd.findElement(By.xpath("//*[contains(text(),'Continue')]")).click();
	}

	@Then("^check Validation message for General Detail page$")
	public void check_Validation_message_for_General_Detail_page() throws Throwable {
		
		bodymessage("nif");
		
		
	}
	@Then("^Enters NIF number \"([^\"]*)\" and Selects NIF Registration Date \"([^\"]*)\"$")
	public void enters_NIF_number_and_Selects_NIF_Registration_Date(String nif, String date) throws Throwable {
		Thread.sleep(1000);
		type("NIF",nif);
		clickOn("nif_reg_date","");
		Thread.sleep(1000);
		datePicker(date);
		Thread.sleep(2000);

	}

	@Then("^User enters Full Name of Applicant \"([^\"]*)\" and Training Name \"([^\"]*)\"$")
	public void user_enters_Full_Name_of_Applicant_and_Training_Name(String name, String trainingName) throws Throwable {
		Thread.sleep(1000);
		type("fullname",name);
		Thread.sleep(1000);
		type("training_name",trainingName);

	}

	@Then("^Selects Type of business \"([^\"]*)\" , Business Start Date \"([^\"]*)\" , Company Size \"([^\"]*)\"$")
	public void selects_Type_of_business_Business_Start_Date_Company_Size(String TypeofBusiness, String date, String CompanySize) throws Throwable {
		clickOn("type_0f_business","");
		clickOn("span","[contains(text(),'" +TypeofBusiness+"')]");
		Thread.sleep(1000);
		clickOn("Business_start_date","");
		//clickOn("BUSdate","");
		datePicker(date);
		Thread.sleep(1000);
		clickOn("company_size","");
		clickOn("span","[contains(text(),'" +CompanySize+"')]");
		Thread.sleep(1000);
	}

	@Then("^Enters Last Years Revenue \"([^\"]*)\" from general details$")
	public void enters_Last_Years_Revenue_from_general_details(String LastYearRevenue) throws Throwable {
	    
		type("last_revenue",LastYearRevenue);
		Thread.sleep(1000);

	}

	@Then("^Enters Address of Registered place \"([^\"]*)\" \"([^\"]*)\" of details$")
	public void enters_Address_of_Registered_place_of_details(String Address1, String Address2) throws Throwable {
	    
		type("address1",Address1);
		type("address2",Address2);
		Thread.sleep(1000);
	}

	@Then("^Selects Province of Registered place \"([^\"]*)\" , City of Registered place \"([^\"]*)\"$")
	public void selects_Province_of_Registered_place_City_of_Registered_place(String Province, String City) throws Throwable {
		clickOn("province","");
		clickOn("span","[contains(text(),'" +Province+"')]");
		Thread.sleep(1000);

		WebElement we;
		we=wd.findElement(By.xpath("(//*[@formcontrolname='cityId'])[1]"));
		if(we.isEnabled())
		{
			clickOn("city","");
			clickOn("span","[contains(text(),'" +City+"')]");
			Thread.sleep(1000);
		}
		else
		{
			System.out.println("Please Select Province first");
		}

	  
	}

	@Then("^Enters Zipcode \"([^\"]*)\" , Mobile Number of Registered place \"([^\"]*)\"$")
	public void enters_Zipcode_Mobile_Number_of_Registered_place(String ZipCode, String MobileNo) throws Throwable {
	    
		type("zipcode",ZipCode);
		Thread.sleep(1000);
		type("mobileno",MobileNo);
		Thread.sleep(1000);

	}

	@Then("^Clicks on Add New Place button$")
	public void clicks_on_Add_New_Place_button() throws Throwable {
	    
	//	clickOn("addplace",""); 
	}

	@Then("^Enters Address of New Registered place \"([^\"]*)\" \"([^\"]*)\"$")
	public void enters_Address_of_New_Registered_place(String add1, String add2) throws Throwable {
	    
	//	type("eadd1",add1);
	//	type("eadd2",add2);
		Thread.sleep(1000);

	}

	@Then("^Selects Province of New Registered place \"([^\"]*)\" , City of New Registered place \"([^\"]*)\"$")
	public void selects_Province_of_New_Registered_place_City_of_New_Registered_place(String Province, String City) throws Throwable {
	    
	/*	clickOn("epro","");
		clickOn("span1","[contains(text(),'" +Province+"')])[2]");
		Thread.sleep(1000);
		
		clickOn("ecity","");
		clickOn("span1","[contains(text(),'" +City+"')])[2]");*/
		Thread.sleep(1000);

	}

	@Then("^Enters Zipcode of New Registered Place  \"([^\"]*)\" , Mobile Number of New Registered place \"([^\"]*)\"$")
	public void enters_Zipcode_of_New_Registered_Place_Mobile_Number_of_New_Registered_place(String ZipCode, String MobileNo) throws Throwable {
	    
	/*	type("zip2",ZipCode);
		Thread.sleep(1000);
		type("mobno2",MobileNo);
		Thread.sleep(1000);*/

	}

	@Then("^Delete the record$")
	public void delete_the_record() throws Throwable {
	    
	//	clickOn("deleteextra",""); 

	}

	@Then("^Verify record is deleted or not with \"([^\"]*)\"$")
	public void verify_record_is_deleted_or_not_with(String arg1) throws Throwable {
	    
	  
	}

@Then("^Enters details Of Business Promoters with Name of the Person \"([^\"]*)\"$")
public void enters_details_Of_Business_Promoters_with_Name_of_the_Person(String BName) throws Throwable {
    
	/*type("bname",BName);
	Thread.sleep(3000);*/
	
}
@Then("^Enter BusinessAdsress \"([^\"]*)\" \"([^\"]*)\"$")
public void enter_BusinessAdsress(String BAddress1, String BAddress2) throws Throwable {
  /*  type("buspromadd1",BAddress1);
    Thread.sleep(1000);
    type("buspromadd2",BAddress2);
    Thread.sleep(1000);*/
}


@Then("^Enter Business Province \"([^\"]*)\" , Business City \"([^\"]*)\" , Business Zip Code \"([^\"]*)\"$")
public void enter_Business_Province_Business_City_Business_Zip_Code(String BProvince, String BCity, String BZipcode) throws Throwable {
  
/*	clickOn("buspromprovince","");
	clickOn("span","[contains(text(),'" +BProvince+"')]");
	Thread.sleep(1000);

	WebElement we;
	we=wd.findElement(By.xpath("(//*[@formcontrolname='cityId'])[1]"));
	if(we.isEnabled())
	{
		clickOn("buspromcity","");
		clickOn("span","[contains(text(),'" +BCity+"')]");
		Thread.sleep(1000);
	}
	else
	{
		System.out.println("Please Select Province first");
	}
	type("buspromzipcode",BZipcode);*/

	
}

@Then("^Enter Business Email \"([^\"]*)\" , Business Mobile Number \"([^\"]*)\"$")
public void enter_Business_Email_Business_Mobile_Number(String BEmail, String BMobile) throws Throwable {
  /* type("buspromemail",BEmail);
   Thread.sleep(1000);
   type("busprommobileno",BMobile);
   Thread.sleep(1000);*/
}


	@Then("^Selects Authorized Signatory \"([^\"]*)\"$")
	public void selects_Authorized_Signatory(String Option) throws Throwable {
	    
		if (Option.equals("yes"))
		{
			clickOn("radiobtn_yes", "");
		}
		else
		{
			clickOn("radiobtn_no", "");
		}
	  Thread.sleep(2000);
		
	//	wd.findElement(By.xpath("//*[contains(text(),'"+Option+"')]")).click();
	}
	

	@Then("^Enters Job Title of Authorized Signatory \"([^\"]*)\"$")
	public void enters_Job_Title_of_Authorized_Signatory(String JobTitle) throws Throwable {
	    
		 type("txtbox_jobtitle",JobTitle);
		    Thread.sleep(2000);

	}

	@Then("^Enters Name of Authorized Signatory \"([^\"]*)\"$")
	public void enters_Name_of_Authorized_Signatory(String FullName) throws Throwable {
	    
		type("authfullname",FullName);

	}

	@Then("^Enters Email of Authorized Signatory \"([^\"]*)\"$")
	public void enters_Email_of_Authorized_Signatory(String Email) throws Throwable {
	    
		type("authemail",Email);

	}

	@Then("^Enters Mobile Number of Authorized Signatory \"([^\"]*)\"$")
	public void enters_Mobile_Number_of_Authorized_Signatory(String MobileNumber) throws Throwable {
	    
		type("authmobileno",MobileNumber);

	}
	

	@Then("^Clicks on Continue Button$")
	public void clicks_on_Continue_Button() throws Throwable {
	    
		 //  clickOn("btn_continue", "");
		wd.findElement(By.xpath("//*[contains(text(),'Continue')]")).click();
		
		Thread.sleep(5000);

	}

	@Then("^Enters Account Number \"([^\"]*)\"$")
	public void enters_Account_Number(String acct) throws Throwable {
	    
		System.out.println("test");
		Thread.sleep(2000);
		
		type("acct_no",acct);
		
		/* if(acct.equals(""))
		    {
		    }
		    else
		    {
		    	type("acct_no",acct);
		    }*/
	    

	}

	@Then("^Enters Account Holder Name \"([^\"]*)\"$")
	public void enters_Account_Holder_Name(String name) throws Throwable {
	    
		if(name.equals(""))
		{
		}
		else
		{
			type("acct_holder_name",name);
			Thread.sleep(1000);
		}

	}

	@Then("^Enters Bank Name \"([^\"]*)\"$")
	public void enters_Bank_Name(String bank) throws Throwable {
	    
		if(bank.equals(""))
		{
		}
		else
		{
			Thread.sleep(2000);
			clickOn("bank_name","");
			clickOn("span","[contains(text(),'"+ bank +"')]");
			Thread.sleep(1000);
		}

	}
	@Then("^Enters Branch of Bank \"([^\"]*)\"$")
	public void enters_Branch_of_Bank(String Branch) throws Throwable {
	    
		if(Branch.equals(""))
		{
		}
		else
		{
			clickOn("branch_name","");
			clickOn("span","[contains(text(),'"+ Branch +"')]");
			Thread.sleep(1000);
		}
	}

	@Then("^Select Address Proof \"([^\"]*)\" ,Address Proof File \"([^\"]*)\"$")
	public void select_Address_Proof_Address_Proof_File(String Document1, String File1) throws Throwable {
		String cwd = System. getProperty("user.dir");
		String imagePath=cwd;
		imagePath=imagePath.concat("\\");
		imagePath=imagePath.concat(File1);
	   Thread.sleep(5000);
	   clickOn("selectbx_address_proof_doc", "");
	   Thread.sleep(1000);
	   clickOn("span", "[contains(text(),'"+ Document1 +"')]");
	   Thread.sleep(1000);
	   clickOn("file1_upload","");
	//   imagePath=imagePath.concat(File1);
	   UploadImage("",imagePath);
	   Thread.sleep(5000);
	}

	@Then("^Select Bank Account Proof \"([^\"]*)\" , Bank Account Proof File \"([^\"]*)\"$")
	public void select_Bank_Account_Proof_Bank_Account_Proof_File(String Document2, String File2) throws Throwable {
	    
		String cwd1 = System. getProperty("user.dir");
		String imagePath1=cwd1;
		imagePath1=imagePath1.concat("\\");
		imagePath1=imagePath1.concat(File2);
		Thread.sleep(5000);
		   clickOn("selectbx_bank_ac_proof", "");
		   Thread.sleep(1000);
		   clickOn("span", "[contains(text(),'"+ Document2 +"')]");
		   Thread.sleep(1000);
		   clickOn("file2_upload","");
		   UploadImage("",imagePath1);
		   Thread.sleep(5000);
	}
	@Then("^Select Certification Of Incorporation \"([^\"]*)\" , File \"([^\"]*)\"$")
	public void select_Certification_Of_Incorporation_File(String arg1, String arg2) throws Throwable {
	   
	}

	@Then("^Select Degree of Establishmentn \"([^\"]*)\" , File \"([^\"]*)\"$")
	public void select_Degree_of_Establishmentn_File(String arg1, String arg2) throws Throwable {
	    
	}
	

	@Then("^Select Letter of Authorization \"([^\"]*)\" , Letter of Authorization File \"([^\"]*)\"$")
	public void select_Letter_of_Authorization_Letter_of_Authorization_File(String Document3, String File3) throws Throwable {
	    
		String cwd2 = System. getProperty("user.dir");
		String imagePath2=cwd2;
		imagePath2=imagePath2.concat("\\");
		imagePath2=imagePath2.concat(File3);
		Thread.sleep(5000);
		   clickOn("selectbx_auth_letter", "");
		   Thread.sleep(1000);
		   clickOn("span", "[contains(text(),'"+ Document3 +"')]");
		   Thread.sleep(1000);
		   clickOn("file3_upload","");
		   UploadImage("",imagePath2);
		   Thread.sleep(5000);
	}

	@Then("^Select Proof of Last Year \"([^\"]*)\" , Proof File \"([^\"]*)\"$")
	public void select_Proof_of_Last_Year_Proof_File(String Document4, String File4) throws Throwable {
	   
		String cwd3 = System. getProperty("user.dir");
		String imagePath3=cwd3;
		imagePath3=imagePath3.concat("\\");
		imagePath3=imagePath3.concat(File4);
		Thread.sleep(5000);
		   clickOn("selectbx_revenue", "");
		   Thread.sleep(1000);
		   clickOn("span", "[contains(text(),'"+ Document4 +"')]");
		   Thread.sleep(1000);
		   clickOn("file4_upload","");
		   UploadImage("",imagePath3);
		   Thread.sleep(5000);
		   wd.findElement(By.xpath("//*[contains(text(),'Continue')]")).click();
		   //Thread.sleep(3000);
		   System.out.println("test2");
		   System.out.println("test1");
			Thread.sleep(5000);
			JavascriptExecutor js = (JavascriptExecutor) wd;
			js.executeScript("window.scrollTo(0, document.body.scrollHeight)");
			clickOn("chkbx_agree", "");
			clickOn("btn_submit", "");
	}
	@Then("^select Acknowledgemnet check box and Submit Button$")
	public void select_Acknowledgemnet_check_box_and_Submit_Button() throws Throwable {
	    
		
	}
	
}

