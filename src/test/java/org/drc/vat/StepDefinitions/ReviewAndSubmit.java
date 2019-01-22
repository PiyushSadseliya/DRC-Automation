package org.drc.vat.StepDefinitions;

import static org.drc.vat.appmanager.HelperBase.clickOn;
import static org.drc.vat.appmanager.HelperBase.type;
import static org.drc.vat.appmanager.HelperBase.wd;
import static org.drc.vat.appmanager.HelperBase.datePicker;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ReviewAndSubmit 
{
	@Given("^User is on Vat Registration Dashboard$")
	public void user_is_on_Vat_Registration_Dashboard() throws Throwable 
	{
		type("txtbox_username","franky07@mailinator.com");
		type("txtbox_password","Franky07*");
		clickOn("btn_login","");
		Thread.sleep(3000);
	}

	@When("^User click on VAT Getting Started Guide CheckBox$")
	public void user_click_on_VAT_Getting_Started_Guide_CheckBox() throws Throwable 
	{
		clickOn("checkbox_vat","");	    
	}

	@When("^Click on Register for Vat button$")
	public void click_on_Register_for_Vat_button() throws Throwable 
	{
		clickOn("register_button",""); 
		Thread.sleep(2000);
	}

	@When("^Click on Continue button of Instructions Page$")
	public void click_on_Continue_button_of_Instructions_Page() throws Throwable
	{
		clickOn("continue","");
		Thread.sleep(3000);
	}

	@Then("^Select Taxpayer Category \"([^\"]*)\"$")
	public void select_Taxpayer_Category(String Category) throws Throwable
	{
		clickOn("category","");
		clickOn("span","[contains(text(),'" + Category +"')]");
		Thread.sleep(2000);	    
	}

	@Then("^Select Taxpayer Sub Category \"([^\"]*)\"$")
	public void select_Taxpayer_Sub_Category(String SubCategory) throws Throwable
	{
		clickOn("sub_category","");
		clickOn("span","[contains(text(),'"+ SubCategory +"')] ");
		Thread.sleep(2000);
	    
	}

	@Then("^Select Partnership firm \"([^\"]*)\"$")
	public void select_Partnership_firm(String firm) throws Throwable 
	{
		if (firm.equals(""))
		{
			System.out.println("It is govt entity");
		}
		else
		{
			clickOn("partnership_firm","");
			if (firm.equals("Yes"))
			{
				clickOn("span","[contains(text(),'" +firm+"')]");
			}
			else
			{
				clickOn("no","");
				           
			}
		}	
	    
	}

	@Then("^Enter NIF number \"([^\"]*)\"$")
	public void enter_NIF_number(String nif) throws Throwable
	{
		type("NIF",nif);	    
	}

	@Then("^Select NIF Registration Date \"([^\"]*)\"$")
	public void select_NIF_Registration_Date(String date) throws Throwable
	{
		//clickOn("nif_reg_date","");
		//clickOn("NIFdate","");	 
		datePicker(date);
	}

	@Then("^User enter Full Name of Business \"([^\"]*)\"$")
	public void user_enter_Full_Name_of_Business(String businessname) throws Throwable
	{
		type("business_name",businessname);	    
	}

	@Then("^User enter Number of COI \"([^\"]*)\"$")
	public void user_enter_Number_of_COI(String noOfCOI) throws Throwable
	{
		type("numberofcoi",noOfCOI);	    
	}

	@Then("^Select Date of Incorporation \"([^\"]*)\"$")
	public void select_Date_of_Incorporation(String date) throws Throwable
	{
		//clickOn("dateofincorporation","");
		//clickOn("datein","");
		datePicker(date);
	}

	@Then("^Select Type of business \"([^\"]*)\"$")
	public void select_Type_of_business(String TypeofBusiness) throws Throwable
	{
		clickOn("type_0f_business","");
		clickOn("span","[contains(text(),'" +TypeofBusiness+"')]");	    
	}

	@Then("^Select Business Start Date \"([^\"]*)\"$")
	public void select_Business_Start_Date(String date) throws Throwable
	{
		//clickOn("Business_start_date","");
	//	clickOn("BUSdate","");	
		datePicker(date);
	}

	@Then("^Select Company Size \"([^\"]*)\"$")
	public void select_Company_Size(String CompanySize) throws Throwable
	{
		clickOn("company_size","");
		clickOn("span","[contains(text(),'" +CompanySize+"')]");	    
	}

	@Then("^Enter Last Years Revenue \"([^\"]*)\"$")
	public void enter_Last_Years_Revenue(String LastYearRevenue) throws Throwable 
	{
		type("last_revenue",LastYearRevenue);
	    
	}

	@Then("^Enter Address of Registered place \"([^\"]*)\" \"([^\"]*)\"$")
	public void enter_Address_of_Registered_place(String Address1, String Address2) throws Throwable 
	{
		type("address1",Address1);
		type("address2",Address2);	    
	}

	@Then("^Select Province of Registered place \"([^\"]*)\"$")
	public void select_Province_of_Registered_place(String Province) throws Throwable 
	{
		clickOn("province","");
		clickOn("span","[contains(text(),'" +Province+"')]");
	    
	}

	@Then("^Select City of Registered place \"([^\"]*)\"$")
	public void select_City_of_Registered_place(String City) throws Throwable
	{
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

	@Then("^Enter Zipcode \"([^\"]*)\"$")
	public void enter_Zipcode(String ZipCode) throws Throwable 
	{
		type("zipcode",ZipCode);	    
	}

	@Then("^Enter Mobile Number of Registered place \"([^\"]*)\"$")
	public void enter_Mobile_Number_of_Registered_place(String MobileNo) throws Throwable 
	{
		type("mobileno",MobileNo);
	}

	@Then("^Enter name of Business Promoters \"([^\"]*)\"$")
	public void enter_name_of_Business_Promoters(String NameOfPromoters) throws Throwable 
	{
		type("name",NameOfPromoters);
	}

	@Then("^Enter Address of Business Promoters \"([^\"]*)\" \"([^\"]*)\"$")
	public void enter_Address_of_Business_Promoters(String P_address1, String P_address2) throws Throwable 
	{
		type("buspromadd1",P_address1);
		  Thread.sleep(1000);
		type("buspromadd2",P_address2);
		  Thread.sleep(1000);	    
	}

	@Then("^Enter Province of Business Promoters \"([^\"]*)\"$")
	public void enter_Province_of_Business_Promoters(String P_province) throws Throwable
	{
		clickOn("buspromprovince","");
		clickOn("span","[contains(text(),'" +P_province+"')]");		    
	}

	@Then("^Enter City of Business Promoters \"([^\"]*)\"$")
	public void enter_City_of_Business_Promoters(String P_city) throws Throwable
	{
		Thread.sleep(1000);
		WebElement we;
		we=wd.findElement(By.xpath("(//*[@formcontrolname='cityId'])[1]"));
		if(we.isEnabled())
		{
		clickOn("buspromcity","");
		clickOn("span","[contains(text(),'" +P_city+"')]");
		Thread.sleep(1000);
		}
		else
		{
			System.out.println("Please Select Province first");
		}  
	}

	@Then("^Enter Zipcode of Business Promoters \"([^\"]*)\"$")
	public void enter_Zipcode_of_Business_Promoters(String P_zipcode) throws Throwable
	{
		type("buspromzipcode",P_zipcode);	    
	}

	@Then("^Enter Email of Business Promoters \"([^\"]*)\"$")
	public void enter_Email_of_Business_Promoters(String P_email) throws Throwable 
	{
		type("buspromemail",P_email);	    
	}

	@Then("^Enter Mobile No of Business Promoters \"([^\"]*)\"$")
	public void enter_Mobile_No_of_Business_Promoters(String P_Mobileno) throws Throwable
	{
		type("busprommobileno",P_Mobileno);	    
	}

	@Then("^Select Authorized Signatory \"([^\"]*)\"$")
	public void select_Authorized_Signatory(String value) throws Throwable
	{
		clickOn("input","[@id='"+ value +"']");	    
	}

	@Then("^Enter Job Title of Authorized Signatory \"([^\"]*)\"$")
	public void enter_Job_Title_of_Authorized_Signatory(String JobTitle) throws Throwable 
	{
		type("jobtitle",JobTitle);	    
	}

	@Then("^Enter Name of Authorized Signatory \"([^\"]*)\"$")
	public void enter_Name_of_Authorized_Signatory(String FullName) throws Throwable 
	{
		type("authfullname",FullName);	    
	}

	@Then("^Enter Email of Authorized Signatory \"([^\"]*)\"$")
	public void enter_Email_of_Authorized_Signatory(String A_email) throws Throwable 
	{
		type("authemail",A_email);	    
	}

	@Then("^Enter Mobile Number of Authorized Signatory \"([^\"]*)\"$")
	public void enter_Mobile_Number_of_Authorized_Signatory(String A_mobileNo) throws Throwable 
	{
		type("authmobileno",A_mobileNo);	    
	}

	@Then("^Click on Continue Button$")
	public void click_on_Continue_Button() throws Throwable
	{
		clickOn("continue",""); 
	}

	@Then("^Enter Account Number \"([^\"]*)\"$")
	public void enter_Account_Number(String acct) throws Throwable
	{
		type("acct_no",acct);	    
	}

	@Then("^Enter Account Holder Name \"([^\"]*)\"$")
	public void enter_Account_Holder_Name(String name) throws Throwable 
	{
		type("acct_holder_name",name);	    
	}

	@Then("^Enter Bank Name \"([^\"]*)\"$")
	public void enter_Bank_Name(String bank) throws Throwable 
	{
		clickOn("bank_name","");
		clickOn("span","[contains(text(),'"+ bank +"')]");
	}

	@Then("^Enter Branch of Bank \"([^\"]*)\"$")
	public void enter_Branch_of_Bank(String branch) throws Throwable 
	{
		Thread.sleep(1000);
		WebElement we;
		we=wd.findElement(By.xpath("//*[@formcontrolname='bankBranchId']"));
		if(we.isEnabled())
		{
			clickOn("branch_name","");
			clickOn("span","[contains(text(),'" + branch +"')]");
		}
		else
		{
			System.out.println("Please select Bank name");
		}
		Thread.sleep(1000);	    
	}

	@Then("^Upload Documents$")
	public void upload_Documents() throws Throwable 
	{
		System.out.println("Document is uploading manually");
	    Thread.sleep(50000);
	    System.out.println("Document uploaded manually");
	}

	@Then("^Click on Edit General Details icon$")
	public void click_on_Edit_General_Details_icon() throws Throwable 
	{
		clickOn("editGeneral","");	    
	}

	@Then("^Click on Edit Bank Details icon$")
	public void click_on_Edit_Bank_Details_icon() throws Throwable 
	{
		clickOn("editBank","");	    
	}

	@Then("^Click on Edit Documents Uploaded icon$")
	public void click_on_Edit_Documents_Uploaded_icon() throws Throwable
	{
		clickOn("editdoc","");	    
	}
	@Then("^Clicks on I agree checkbox$")
	public void clicks_on_I_agree_checkbox() throws Throwable 
	{
		clickOn("agree","");	
	}

	@Then("^clicks on Submit button$")
	public void clicks_on_Submit_button() throws Throwable
	{
		clickOn("Submit","");	
	}
	@Then("^User Enter Full Name of Applicant \"([^\"]*)\"$")
	public void user_Enter_Full_Name_of_Applicant(String name) throws Throwable 
	{
		type("fullname",name);
	}

	@Then("^User Enter Training Name \"([^\"]*)\"$")
	public void user_Enter_Training_Name(String trainingName) throws Throwable
	{
		type("training_name",trainingName);
	}
}
