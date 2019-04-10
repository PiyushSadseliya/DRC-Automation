package org.drc.vat.StepDefinitions;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

import static com.jayway.restassured.RestAssured.given;

import java.io.IOException;
import java.sql.SQLException;
import java.util.Calendar;
import java.util.Date;
import java.util.Timer;
import java.util.concurrent.TimeUnit;
import org.apache.commons.collections.functors.SwitchClosure;
import org.drc.vat.appmanager.ConnectDatabase;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.html5.WebStorage;

import com.jayway.restassured.http.ContentType;
import static org.drc.vat.appmanager.HelperBase.wd;
import static org.drc.vat.appmanager.HelperBase.clickOn;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

public class Misc {
	@Given("^The User has obtained the NITVA$")
	public void the_User_has_obtained_the_NITVA() throws Throwable {

	}


	@Then("^For efiling Records user hits API\"([^\"]*)\"$")
	public void for_efiling_Records_user_hits_API(String Username)throws IOException, InterruptedException, ClassNotFoundException, SQLException {
	
/*	wd = new ChromeDriver();
	wd.manage().window().maximize();
	wd.get("http://103.249.120.58:8044");
	Runtime.getRuntime().exec(System.getProperty("user.dir") + "\\QA_Internal_Portal_Login\\autoitsample.exe");
	clickOn("btn_windowsClick", "");
	WebStorage webstorage=(WebStorage)wd;
	Thread.sleep(5000);
	String authorizationResult=webstorage.getSessionStorage().getItem("authorizationResult").toString();
	System.out.println(webstorage.getSessionStorage().getItem("authorizationResult"));
//	String authorizationResult=new String("{"id_token":"eyJhbGciOiJSUzI1NiIsImtpZCI6IjZCN0FDQzUyMDMwNUJGREI0RjcyNTJEQUVCMjE3N0NDMDkxRkFBRTEiLCJ0eXAiOiJKV1QiLCJ4NXQiOiJhM3JNVWdNRnY5dFBjbExhNnlGM3pBa2ZxdUUifQ.eyJuYmYiOjE1NTA2NTcxNTksImV4cCI6MTU1MDY1NzQ1OSwiaXNzIjoiaHR0cDovLzEwMy4yNDkuMTIwLjU4OjkwIiwiYXVkIjoiSW50ZXJuYWxQb3J0YWxRQSIsIm5vbmNlIjoiTjAuMjIzODYwMjM2MjE3MDg3NjIxNTUwNjU3MTU5Njg0IiwiaWF0IjoxNTUwNjU3MTU5LCJhdF9oYXNoIjoiR0EtWUx3czlSTWZRd0k0WHVoX2pSZyIsInNpZCI6ImVmMGE0YjQxZmY2YjJhZWZjZDRkNzhkNWZkZTIwNTM0Iiwic3ViIjoiOTA5OTQzMjEtM0E2MC00RjM1LTk2NzktMDhGNTYyMEY1QUYxIiwiYXV0aF90aW1lIjoxNTUwNjU3MTUwLCJpZHAiOiJEUkMiLCJhbXIiOlsiZXh0ZXJuYWwiXX0.C8uqR0f5Wjh-mVdRT2EFULhmGCMkY7FFj-U4Yu4_qkUz-hOZshLnMPh_0rG0UXLN0HnM5pxLn8RWF5cEvp6eHjn_iE12MV9H07HsWl02O-Db-6ZhsNBHxjYXYunB5QTU3KC_hT4CoBMDORzgGlXWtzTfpZ2hjBo87f6Y_ZSlawCsKkNmt8mlgSqL2CPMsArh3F5kyGoojpHsoBWtZDU3SptnoMhjIAdU6J9Q6xR93lvScvEAvSYUh7XUwr6wF9r0AMSj7KCN0TGwg3h-3YO7lCwbHptRz4oAGDYx4G4vP0ZYzivgwiuGq52m9O7ZNEC2xsrwEyqDuTCUoqjaM9dbBA","access_token":"eyJhbGciOiJSUzI1NiIsImtpZCI6IjZCN0FDQzUyMDMwNUJGREI0RjcyNTJEQUVCMjE3N0NDMDkxRkFBRTEiLCJ0eXAiOiJKV1QiLCJ4NXQiOiJhM3JNVWdNRnY5dFBjbExhNnlGM3pBa2ZxdUUifQ.eyJuYmYiOjE1NTA2NTcxNTksImV4cCI6MTU1MDY2MDc1OSwiaXNzIjoiaHR0cDovLzEwMy4yNDkuMTIwLjU4OjkwIiwiYXVkIjpbImh0dHA6Ly8xMDMuMjQ5LjEyMC41ODo5MC9yZXNvdXJjZXMiLCJJbnRlcm5hbFBvcnRhbEFwaSIsIjFBdXRob3JpdHlBcGkiLCIxVHJha0l0QXBpIl0sImNsaWVudF9pZCI6IkludGVybmFsUG9ydGFsUUEiLCJzdWIiOiI5MDk5NDMyMS0zQTYwLTRGMzUtOTY3OS0wOEY1NjIwRjVBRjEiLCJhdXRoX3RpbWUiOjE1NTA2NTcxNTAsImlkcCI6IkRSQyIsIkZ1bGxOYW1lIjoiS2V0YW4iLCJuYW1lIjoia2V0YW4ucHJhamFwYXRpQGRyYy5sb2NhbCIsImVtYWlsIjoia2V0YW4ucHJhamFwYXRpQDFyaXZldC5jb20iLCJyb2xlIjoiQWRtaW4iLCJjaXR5IjoiQWtldGkiLCJzdGF0ZSI6IkJhcy1VZWxlIiwidGF4Y2VudGVyIjoiQWtldGkgU3VydmV5LTEiLCJzY29wZSI6WyJvcGVuaWQiLCJwcm9maWxlIiwiSW50ZXJuYWxQb3J0YWxBcGkiLCIxQXV0aG9yaXR5QXBpIiwiMVRyYWtJdEFwaSJdLCJhbXIiOlsiZXh0ZXJuYWwiXX0.alQUf8w1dxNqP4mphzS8SGh_ei7eEwly-Bw6SpU_0_SVwWjbuVR1QNBAaoJZ4073Eh9CLDQAvQmlSw8Ymxwa9GWXWpYVTSQJuM2cDkUVAhr_8fCgyCuh-7DOkgDwSCbC4tuuUh1pztL6IUuwBySd460NFNXhll_0E_u8bgSIDexnQ9FoLhUUCVQvSGyesvzIlap5wfgWIK_QouHbRkNPyU2HX-JRuqQOIVEkb9sfrhdaoz0qm9vLg_0OX48Bd7kH8sGWF9d7NG9esI1u_GcoTnYibydpcu9DeqU8IctjcXOON9MaibLZjiq9nCJDYGHgGfuTL-WK-Jlp0nT-lmIaQw","token_type":"Bearer","expires_in":"3600","scope":"openid%20profile%20InternalPortalApi%201AuthorityApi%201TrakItApi","state":"15506571596830.305575416670667","session_state":"pR53NfGxZyzYika2DTa9z4yQpb4u8w2Iq02fR36HXFE.324d9e8741b57c8246433399b8af5ce5"}

	//authorizationResult.indexOf("access_token");
	
	System.out.println(authorizationResult.indexOf("access_token"));
	String tokenPart[]=authorizationResult.split("access_token\":\"",2);

String accessToken[]=tokenPart[1].split("\"");
System.out.println(accessToken[0]);


	
	
	
	for(int i=1;i<=12;i++) {
		String month="103.249.120.58:8067/api/VatForms/EfileProcess?month="+i+"&year="+	Calendar.getInstance().get(Calendar.YEAR);;
		System.out.println(month);
		given()
		.auth().oauth2(accessToken[0])
		.contentType(ContentType.JSON)
		.accept(ContentType.JSON)
		.when().post(month).then().log().everything();	
		//ResponseAPI("103.249.120.58:8067/api/VatForms/EfileProcess?month="+i+"&year="+	d.getYear());
	}*/
	
	ConnectDatabase CD = new ConnectDatabase();
	CD.opendb();
for(int i=1;i<=12;i++) {
	String sql = "declare @month int;" + "set @month ="+i+";" + "insert into [DRC-QA].vat.VfVateFile"
			+ "(VuUserId,FinancialYear,FinancialMonth,PaymentDueDate,TotalAmount,DueAmount,VfDueDate,CreatedDate)"
			+ "values ((select VuUserId from [DRC-QA].Vat.VuUsers"
			+ "  where RegisteredUserId in (select RegisteredUserId from [DRC-QA].ref.RegisteredUsers"
			+ "  where Email='" + Username + "')),(select YEAR(GETDATE())),@month,"
			+ "(select DATEADD(mm,@month,'2019/01/20')),0.00,0.00,"
			+ "(select DATEADD(mm,@month,'2019/01/15')),GETDATE())";
	System.out.println("a");
	CD.sta.executeUpdate(sql);

	String Sql1 = "declare @FY int;" + "set @FY="+i+";" + "insert into [DRC-QA].vat.VfVateFileActivity"
			+ "(VfVateFileId,VfActivityId,VfStatusId,CreatedDate)" + "values"
			+ "((select VfVateFileId from [DRC-QA].vat.VfVateFile where FinancialMonth=@FY and VuUserId in (select VuUserId from [DRC-QA].Vat.VuUsers"
			+ " where RegisteredUserId in (select RegisteredUserId from [DRC-QA].ref.RegisteredUsers"
			+ " where Email='" + Username + "'))),1,2,getdate()),"
			+ "((select VfVateFileId from [DRC-QA].vat.VfVateFile where FinancialMonth=@FY and VuUserId in (select VuUserId from [DRC-QA].Vat.VuUsers"
			+ " where RegisteredUserId in (select RegisteredUserId from [DRC-QA].ref.RegisteredUsers"
			+ " where Email='" + Username + "'))),2,2,getdate()),"
			+ "((select VfVateFileId from [DRC-QA].vat.VfVateFile where FinancialMonth=@FY and VuUserId in (select VuUserId from [DRC-QA].Vat.VuUsers"
			+ " where RegisteredUserId in (select RegisteredUserId from [DRC-QA].ref.RegisteredUsers"
			+ " where Email='" + Username + "'))),3,2,getdate())";
	System.out.println("a");
	CD.sta.executeUpdate(Sql1);
}

}
@Given("^After Efiling Wait for Five Minutes$")
public void after_Efiling_Wait_for_Five_Minutes() throws Throwable {
   Thread.sleep(360000);
}

@Then("^Records should be in Assessment Records$")
public void records_should_be_in_Assessment_Records() throws Throwable {
	   Thread.sleep(150000);
}

}
