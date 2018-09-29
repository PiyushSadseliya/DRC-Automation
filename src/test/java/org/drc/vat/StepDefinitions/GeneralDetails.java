package org.drc.vat.StepDefinitions;

import static org.drc.vat.appmanager.HelperBase.bodymessage;
import static org.drc.vat.appmanager.HelperBase.flag;
import static org.drc.vat.appmanager.HelperBase.clickOn;
import static org.drc.vat.appmanager.HelperBase.type;
import static org.drc.vat.appmanager.HelperBase.wd;

import java.util.Properties;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class GeneralDetails
{
String valmsg1,valmsg2,valmsg3,sub;
public static Properties locate;


@Given("^User is on VAT Registration Dashboard$")
public void user_is_on_VAT_Registration_Dashboard() throws Throwable
{
	Thread.sleep(5000);
   type("txtbox_username","franky07@mailinator.com");
   type("txtbox_password","Franky07*");
   clickOn("btn_login","");
   //clickOn("send_code","");
   Thread.sleep(3000);
}

@When("^User clicks on VAT Getting Started Guide CheckBox$")
public void user_clicks_on_VAT_Getting_Started_Guide_CheckBox() throws Throwable 
{
	clickOn("checkbox_vat","");
}

@When("^Clicks on Register for Vat button$")
public void clicks_on_Register_for_Vat_button() throws Throwable
{
	clickOn("register_button","");
}

@When("^Clicks on Continue button of Instructions Page$")
public void clicks_on_Continue_button_of_Instructions_Page() throws Throwable
{
	Thread.sleep(2000);
	clickOn("continue","");
	Thread.sleep(3000);
}

@Then("^Selects Taxpayer Category \"([^\"]*)\"$")
public void selects_Taxpayer_Category(String Category) throws Throwable 
{
	clickOn("category","");
	clickOn("span","[contains(text(),'" + Category +"')]");
	Thread.sleep(2000);
}

@Then("^Selects Taxpayer Sub Category \"([^\"]*)\"$")
public void selects_Taxpayer_Sub_Category(String SubCategory) throws Throwable 
{
	sub=SubCategory;
	clickOn("sub_category","");
	clickOn("span","[contains(text(),'"+ SubCategory +"')] ");
	Thread.sleep(2000);
}

@Then("^Selects Partnership firm \"([^\"]*)\"$")
public void selects_Partnership_firm(String firm) throws Throwable 
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

@Then("^Enters NIF number \"([^\"]*)\"$")
public void enters_NIF_number(String nif) throws Throwable 
{
	if (nif.equals(""))
	{
		
	}
	else
	{
		type("NIF",nif);
		Thread.sleep(1000);
	}
}

@Then("^Selects NIF Registration Date \"([^\"]*)\"$")
public void selects_NIF_Registration_Date(String date) throws Throwable 
{
	if (date.equals(""))
	{	
	}
	else
	{
		clickOn("nif_reg_date","");
		clickOn("NIFdate","");
		Thread.sleep(1000);
	}
	
}

@Then("^User enters Full Name of Business \"([^\"]*)\"$")
public void user_enters_Full_Name_of_Business(String businessname) throws Throwable 
{
	if (businessname.equals(""))
	{
	}
	else
	{
		type("business_name",businessname);
		Thread.sleep(1000);
	}
	
}

@Then("^User enters Number of COI \"([^\"]*)\"$")
public void user_enters_Number_of_COI(String noOfCOI) throws Throwable 
{
	if (noOfCOI.equals(""))
	{
	}
	else
	{
		type("numberofcoi",noOfCOI);
		 Thread.sleep(1000);
	} 
	
}

@Then("^Selects Date of Incorporation \"([^\"]*)\"$")
public void selects_Date_of_Incorporation(String date) throws Throwable 
{
	if (date.equals(""))
	{	
	}
	else
	{
		clickOn("dateofincorporation","");
		clickOn("datein","");
		  Thread.sleep(1000);
	}
	
}

@Then("^Selects Type of business \"([^\"]*)\"$")
public void selects_Type_of_business(String TypeofBusiness) throws Throwable 
{
	if (TypeofBusiness.equals(""))
	{
	}
	else
	{
		clickOn("type_0f_business","");
		clickOn("span","[contains(text(),'" +TypeofBusiness+"')]");
		  Thread.sleep(1000);
	}
	
}

@Then("^Selects Business Start Date \"([^\"]*)\"$")
public void selects_Business_Start_Date(String date) throws Throwable 
{
	if (date.equals(""))
	{
	}
	else
	{
		clickOn("Business_start_date","");
		clickOn("BUSdate","");
		  Thread.sleep(1000);
	}
	
}

@Then("^Selects Company Size \"([^\"]*)\"$")
public void selects_Company_Size(String CompanySize) throws Throwable 
{
	if (CompanySize.equals(""))
	{	
	}
	else
	{
		clickOn("company_size","");
		clickOn("span","[contains(text(),'" +CompanySize+"')]");
		  Thread.sleep(1000);
	}
}

@Then("^Enters Last Years Revenue \"([^\"]*)\"$")
public void enters_Last_Years_Revenue(String LastYearRevenue) throws Throwable 
{
	if (LastYearRevenue.equals(""))
	{
	}
	else
	{
		type("last_revenue",LastYearRevenue);
		  Thread.sleep(1000);
	}
}

@Then("^Enters Address of Registered place \"([^\"]*)\" \"([^\"]*)\"$")
public void enters_Address_of_Registered_place(String Address1, String Address2) throws Throwable 
{
	if (Address1.equals("") && Address2.equals(""))
	{
	}
	else
	{
		type("address1",Address1);
		type("address2",Address2);
		  Thread.sleep(1000);
	}
}

@Then("^Selects Province of Registered place \"([^\"]*)\"$")
public void selects_Province_of_Registered_place(String Province) throws Throwable 
{
	if (Province.equals(""))
	{	
	}
	else
	{
		clickOn("province","");
		clickOn("span","[contains(text(),'" +Province+"')]");
		  Thread.sleep(1000);
	}
}

@Then("^Selects City of Registered place \"([^\"]*)\"$")
public void selects_City_of_Registered_place(String City) throws Throwable
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

@Then("^Enters Zipcode \"([^\"]*)\"$")
public void enters_Zipcode(String ZipCode) throws Throwable
{
	if (ZipCode.equals(""))
	{	
	}
	else
	{
		type("zipcode",ZipCode);
		  Thread.sleep(1000);
	}
	
}

@Then("^Enters Mobile Number of Registered place \"([^\"]*)\"$")
public void enters_Mobile_Number_of_Registered_place(String MobileNo) throws Throwable
{
	if (MobileNo.equals(""))
	{	
	}
	else
	{
		type("mobileno",MobileNo);
		Thread.sleep(1000);
	}
	
}

@Then("^Enters name of Business Promoters \"([^\"]*)\"$")
public void enters_name_of_Business_Promoters(String NameOfPromoters) throws Throwable 
{
	if (NameOfPromoters.equals(""))
	{
	}
	else
	{
		type("name",NameOfPromoters);
		Thread.sleep(1000);
	}
	
}

@Then("^Enters Address of Business Promoters \"([^\"]*)\" \"([^\"]*)\"$")
public void enters_Address_of_Business_Promoters(String P_address1, String P_address2) throws Throwable
{
	if (P_address1.equals("") && P_address2.equals(""))
	{	
	}
	else
	{
		type("buspromadd1",P_address1);
		  Thread.sleep(1000);
		type("buspromadd2",P_address2);
		  Thread.sleep(1000);
	}
}

@Then("^Enters Province of Business Promoters \"([^\"]*)\"$")
public void enters_Province_of_Business_Promoters(String P_province) throws Throwable 
{
	if (P_province.equals(""))
	{	
	}
	else
	{
		clickOn("buspromprovince","");
		clickOn("span","[contains(text(),'" +P_province+"')]");	
		Thread.sleep(1000);
	}
}

@Then("^Enters City of Business Promoters \"([^\"]*)\"$")
public void enters_City_of_Business_Promoters(String P_city) throws Throwable
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

@Then("^Enters Zipcode of Business Promoters \"([^\"]*)\"$")
public void enters_Zipcode_of_Business_Promoters(String P_zipcode) throws Throwable 
{
	if (P_zipcode.equals(""))
	{
	}
	else
	{
		type("buspromzipcode",P_zipcode);
		Thread.sleep(1000);
	}
}

@Then("^Enters Email of Business Promoters \"([^\"]*)\"$")
public void enters_Email_of_Business_Promoters(String P_email) throws Throwable 
{
	if (P_email.equals(""))
	{
	}
	else
	{
		type("buspromemail",P_email);
		 Thread.sleep(1000);
	}
}

@Then("^Enters Mobile No of Business Promoters \"([^\"]*)\"$")
public void enters_Mobile_No_of_Business_Promoters(String P_Mobileno) throws Throwable
{
	if (P_Mobileno.equals(""))
	{	
	}
	else
	{
		type("busprommobileno",P_Mobileno);
		  Thread.sleep(1000);
	}
}

@Then("^Selects Authorized Signatory \"([^\"]*)\"$")
public void selects_Authorized_Signatory(String value) throws Throwable
{
	clickOn("input","[@id='"+ value +"']");
		  Thread.sleep(1000);
}

@Then("^Enters Job Title of Authorized Signatory \"([^\"]*)\"$")
public void enters_Job_Title_of_Authorized_Signatory(String JobTitle) throws Throwable
{
	if (JobTitle.equals(""))
	{
	}
	else
	{
		type("jobtitle",JobTitle);
		  Thread.sleep(1000);
	}
}

@Then("^Enters Name of Authorized Signatory \"([^\"]*)\"$")
public void enters_Name_of_Authorized_Signatory(String FullName) throws Throwable 
{
	if (FullName.equals(""))
	{
	}
	else
	{
		type("authfullname",FullName);
		  Thread.sleep(1000);
	}
}

@Then("^Enters Email of Authorized Signatory \"([^\"]*)\"$")
public void enters_Email_of_Authorized_Signatory(String A_email) throws Throwable 
{
	if (A_email.equals(""))
	{	
	}
	else
	{
		type("authemail",A_email);
		  Thread.sleep(1000);
	}
}

@Then("^Enters Mobile Number of Authorized Signatory \"([^\"]*)\"$")
public void enters_Mobile_Number_of_Authorized_Signatory(String A_mobileNo) throws Throwable 
{
	if (A_mobileNo.equals(""))
	{
	}
	else
	{
		type("authmobileno",A_mobileNo);
		  Thread.sleep(1000);
	}
}

@Then("^Clicks on Continue Button and checks validation messages \"([^\"]*)\"$")
public void clicks_on_Continue_Button_and_checks_validation_messages(String msg) throws Throwable
{
	clickOn("continue","");
	boolean flag1;
	if(sub.equals("Government Entity") && msg.equals(""))
	{
		bodymessage("nif");
		flag1=flag;
		bodymessage("nifdate");
		flag1 = flag && flag1;
		bodymessage("busname");
		flag1 = flag && flag1;
		bodymessage("coiNo");
		flag1 = flag && flag1;
		bodymessage("incopdate");
		flag1 = flag && flag1;
		bodymessage("bustype");
		flag1 = flag && flag1;
		bodymessage("busdate");
		flag1 = flag && flag1;
		bodymessage("companysize");
		flag1 = flag && flag1;
		bodymessage("rev");
		flag1 = flag && flag1;
		bodymessage("add1");
		flag1 = flag && flag1;
		bodymessage("prov");
		flag1 = flag && flag1;
		bodymessage("zip");
		flag1 = flag && flag1;
		bodymessage("mobno");
		flag1 = flag && flag1;
		bodymessage("personname");
		flag1 = flag && flag1;
		bodymessage("add");
		flag1 = flag && flag1;
		bodymessage("prov");
		flag1 = flag && flag1;
		bodymessage("zip");
		flag1 = flag && flag1;
		bodymessage("email");
		flag1 = flag && flag1;
		bodymessage("mobno");
		flag1 = flag && flag1;
		bodymessage("job");
		flag1 = flag && flag1;
		bodymessage("fulname");
		flag1 = flag && flag1;
		bodymessage("email");
		flag1 = flag && flag1;
		bodymessage("mobno");
		flag1 = flag && flag1;
		if(flag1==true)
		{
			System.out.println("Validation Messages verified");
		}
		else
		{
			System.out.println("Validation Messages not verified");
		}
		sub="";
	}
	else if(sub.equals("Incorporated Bodies") && msg.equals(""))
	{
		bodymessage("firm");
		flag1=flag;
		bodymessage("nif");
		flag1 = flag && flag1;
		bodymessage("nifdate");
		flag1 = flag && flag1;
		bodymessage("busname");
		flag1 = flag && flag1;
		bodymessage("coiNo");
		flag1 = flag && flag1;
		bodymessage("incopdate");
		flag1 = flag && flag1;
		bodymessage("bustype");
		flag1 = flag && flag1;
		bodymessage("busdate");
		flag1 = flag && flag1;
		bodymessage("companysize");
		flag1 = flag && flag1;
		bodymessage("rev");
		flag1 = flag && flag1;
		bodymessage("add1");
		flag1 = flag && flag1;
		bodymessage("prov");
		flag1 = flag && flag1;
		bodymessage("zip");
		flag1 = flag && flag1;
		bodymessage("mobno");
		flag1 = flag && flag1;
		bodymessage("personname");
		flag1 = flag && flag1;
		bodymessage("add");
		flag1 = flag && flag1;
		bodymessage("prov");
		flag1 = flag && flag1;
		bodymessage("zip");
		flag1 = flag && flag1;
		bodymessage("email");
		flag1 = flag && flag1;
		bodymessage("mobno");
		flag1 = flag && flag1;
		bodymessage("job");
		flag1 = flag && flag1;
		bodymessage("fulname");
		flag1 = flag && flag1;
		bodymessage("email");
		flag1 = flag && flag1;
		bodymessage("mobno");
		flag1 = flag && flag1;
		if(flag1==true)
		{
			System.out.println("Validation Messages verified");
		}
		else
		{
			System.out.println("Validation Messages not verified");
		}
		sub="";
	}
	else if(sub.equals("Non-Corporates") && msg.equals(""))
	{
		bodymessage("firm");
		flag1=flag;
		bodymessage("nif");
		flag1 = flag && flag1;
		bodymessage("nifdate");
		flag1 = flag && flag1;
		bodymessage("busname");
		flag1 = flag && flag1;
		bodymessage("coiNo");
		flag1 = flag && flag1;
		bodymessage("incopdate");
		flag1 = flag && flag1;
		bodymessage("bustype");
		flag1 = flag && flag1;
		bodymessage("busdate");
		flag1 = flag && flag1;
		bodymessage("companysize");
		flag1 = flag && flag1;
		bodymessage("rev");
		flag1 = flag && flag1;
		bodymessage("add1");
		flag1 = flag && flag1;
		bodymessage("prov");
		flag1 = flag && flag1;
		bodymessage("zip");
		flag1 = flag && flag1;
		bodymessage("mobno");
		flag1 = flag && flag1;
		bodymessage("personname");
		flag1 = flag && flag1;
		bodymessage("add");
		flag1 = flag && flag1;
		bodymessage("prov");
		flag1 = flag && flag1;
		bodymessage("zip");
		flag1 = flag && flag1;
		bodymessage("email");
		flag1 = flag && flag1;
		bodymessage("mobno");
		flag1 = flag && flag1;
		bodymessage("job");
		flag1 = flag && flag1;
		bodymessage("fulname");
		flag1 = flag && flag1;
		bodymessage("email");
		flag1 = flag && flag1;
		bodymessage("mobno");
		flag1 = flag && flag1;
		if(flag1==true)
		{
			System.out.println("Validation Messages verified");
		}
		else
		{
			System.out.println("Validation Messages not verified");
		}
		sub="";
	}
	else if(sub.equals("Individual") && msg.equals(""))
	{
		
		bodymessage("nif");
		flag1=flag;
		bodymessage("nifdate");
		flag1 = flag && flag1;
		bodymessage("applicantname");
		flag1 = flag && flag1;
		bodymessage("bustype");
		flag1 = flag && flag1;
		bodymessage("busdate");
		flag1 = flag && flag1;
		bodymessage("companysize");
		flag1 = flag && flag1;
		bodymessage("rev");
		flag1 = flag && flag1;
		bodymessage("add1");
		flag1 = flag && flag1;
		bodymessage("prov");
		flag1 = flag && flag1;
		bodymessage("zip");
		flag1 = flag && flag1;
		bodymessage("mobno");
		flag1 = flag && flag1;
		bodymessage("job");
		flag1 = flag && flag1;
		bodymessage("fulname");
		flag1 = flag && flag1;
		bodymessage("email");
		flag1 = flag && flag1;
		bodymessage("mobno");
		flag1 = flag && flag1;
		if(flag1==true)
		{
			System.out.println("Validation Messages verified");
		}
		else
		{
			System.out.println("Validation Messages not verified");
		}
		sub="";
	}
	else if(msg.equals(""))
	{
		System.out.println("Successful");
	}
	else
	{
		bodymessage(msg);
	}
	Thread.sleep(10000);
}

@Then("^User enters Full Name of Applicant \"([^\"]*)\"$")
public void user_enters_Full_Name_of_Applicant(String name) throws Throwable 
{
	if (name.equals(""))
	{
	}
	else
	{
		type("fullname",name);
		 Thread.sleep(1000);
	}
}

@Then("^User enters Training Name \"([^\"]*)\"$")
public void user_enters_Training_Name(String trainingName) throws Throwable
{
	if (trainingName.equals(""))
	{
	}
	else
	{
		type("training_name",trainingName);
	}
}

@Then("^Enters Account Number \"([^\"]*)\"$")
public void enters_Account_Number(String acct) throws Throwable
{
    if(acct.equals(""))
    {
    }
    else
    {
    	type("acct_no",acct);
    }
}

@Then("^Enters Account Holder Name \"([^\"]*)\"$")
public void enters_Account_Holder_Name(String name) throws Throwable
{
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
public void enters_Bank_Name(String bank) throws Throwable 
{
	if(bank.equals(""))
	{
	}
	else
	{
		clickOn("bank_name","");
		clickOn("span","[contains(text(),'"+ bank +"')]");
		Thread.sleep(1000);
	}
}

@Then("^Enters Branch of Bank \"([^\"]*)\"$")
public void enters_Branch_of_Bank(String branch) throws Throwable 
{
	if(branch.equals(""))
	{
	}
	else
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
}

@Then("^Clicks on Continue Button$")
public void clicks_on_Continue_Button() throws Throwable
{
	clickOn("continue","");
}

@Then("^Clicks on Add New Place button$")
public void clicks_on_Add_New_Place_button() throws Throwable
{
    clickOn("addplace","");
}

@Then("^Clicks on Add Promoter button$")
public void clicks_on_Add_Promoter_button() throws Throwable
{
	clickOn("addpromoter","");
}
@Then("^Delete the record$")
public void delete_the_record() throws Throwable
{
   clickOn("deleteextra","");
}
}