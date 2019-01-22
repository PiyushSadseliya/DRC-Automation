package org.drc.vat.StepDefinitions;

import java.sql.ResultSet;

import org.drc.vat.appmanager.ConnectDatabase;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class databaseconnection {
	@Given("^user is on homepage$")
	public void user_is_on_homepage() throws Throwable {
	    System.out.println("Test");
	}
	@When("^connect to given database$")
	public void connect_to_given_database() throws Throwable {
		ConnectDatabase CD = new ConnectDatabase();
		CD.opendb();
		String sql= "insert into vat.VfVateFile"
	+"(VuUserId,FinancialYear,FinancialMonth,ReimbursementCurrentAmount,PaymentDueDate,TotalAmount,DueAmount,VfDueDate,CreatedDate)"
	+"values ((select VuUserId from Vat.VuUsers where RegisteredUserId in (select RegisteredUserId from ref.RegisteredUsers"
	+" where Email='bindi04@mailinator.com')),(select YEAR(GETDATE())),1,0.00,"
	+"(select DATEADD(mm,1,'2018/01/20')),0.00,0.00,"
	+"(select DATEADD(mm,1,'2018/01/15')),GETDATE())";
		
		ResultSet rs= CD.sta.executeQuery(sql);
		System.out.println(rs);
	}

	@Then("^database connected successfully$")
	public void database_connected_successfully() throws Throwable {
	  
	}

}
