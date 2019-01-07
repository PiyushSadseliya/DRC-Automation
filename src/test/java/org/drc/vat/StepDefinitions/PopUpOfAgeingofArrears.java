package org.drc.vat.StepDefinitions;

import cucumber.api.java.en.Then;
import static org.drc.vat.appmanager.HelperBase.clickOn;
import static org.drc.vat.appmanager.HelperBase.elementText;
import static org.drc.vat.appmanager.HelperBase.sleepWait;
import static org.drc.vat.appmanager.HelperBase.wd;
import static org.drc.vat.appmanager.HelperBase.frenchtoDouble;
import static org.drc.vat.appmanager.HelperBase.tofrench;
import static org.drc.vat.appmanager.HelperBase.elementText;
import static org.testng.Assert.assertEquals;

import java.util.List;

import static org.drc.vat.appmanager.HelperBase.frenchToIndian;
import static org.drc.vat.StepDefinitions.DebtManagementAssignedDebtList.recordNo;
import static org.drc.vat.StepDefinitions.DebtManagementUnassignedDebt.totalDebtAmount;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.testng.asserts.SoftAssert;

public class PopUpOfAgeingofArrears {
		//static double totaldebt=Double.parseDouble(frenchToIndian(totalDebtAmount));
	static String totoalArrears;

	@Then("^Click on View in Manage Options$")
	public void click_on_View_in_Manage_Options() throws Throwable {

		wd.findElement(By.xpath("//tr["+recordNo+"]//td[12]//button")).click();
		//clickOn("btn_managecase", "");
		//clickOn("href_viewCase", "");
		wd.findElement(By.xpath("//tr["+recordNo+"]//td[12]//button//following::a[1]")).click();
		sleepWait(3000);

	}

	@Then("^Click on Total Due hyperlink$")
	public void click_on_Total_Due_hyperlink() throws Throwable {
		totoalArrears=elementText("href_totalamountDue","");
		clickOn("href_totalamountDue", "");
		sleepWait(3000);

	}

/*	@Then("^Amount in ageing of arrears in twentyfour months and Above is amount \"([^\"]*)\" thirteen to twentyfour months \"([^\"]*)\" seven to twelve months\"([^\"]*)\" four to six months\"([^\"]*)\" zero to three months\"([^\"]*)\" Total Debt\\(FC\\)\"([^\"]*)\"$")
	public void amount_in_ageing_of_arrears_in_twentyfour_months_and_Above_is_amount_thirteen_to_twentyfour_months_seven_to_twelve_months_four_to_six_months_zero_to_three_months_Total_Debt_FC(
			String arg1, String arg2, String arg3, String arg4, String arg5, String arg6) throws Throwable {
		sleepWait(2000);
		assertEquals(elementText("general", "h5)[1]"), "Ageing of Arrears");
		assertEquals(elementText("txt_agearrear24monthsup", ""), arg1);
		assertEquals(elementText("txt_agearrear13to24months", ""), arg2);
	assertEquals(elementText("txt_agearrear7to12months", ""), arg3);
		assertEquals(elementText("txt_agearrear4to6months", ""), arg4);
assertEquals(elementText("txt_agearrear0to3months", ""), arg5);
		assertEquals(elementText("txt_agearrearTotalDebt", ""), arg6);
	}*/
	@Then("^Amount in ageing of arrears in twentyfour months and Above is amount \"([^\"]*)\" thirteen to twentyfour months \"([^\"]*)\" seven to twelve months\"([^\"]*)\" four to six months\"([^\"]*)\" zero to three months Total Debt\\(FC\\)$")
	public void amount_in_ageing_of_arrears_in_twentyfour_months_and_Above_is_amount_thirteen_to_twentyfour_months_seven_to_twelve_months_four_to_six_months_zero_to_three_months_Total_Debt_FC(String arg1, String arg2, String arg3, String arg4) throws Throwable {
		assertEquals(elementText("h5", ""), "Ageing of Arrears");
		assertEquals(elementText("txt_agearrear24monthsup", ""), arg1);
		assertEquals(elementText("txt_agearrear13to24months", ""), arg2);
	//assertEquals(elementText("txt_agearrear7to12months", ""), arg3);
		//assertEquals(elementText("txt_agearrear4to6months", ""), arg4);
//assertEquals(elementText("txt_agearrear0to3months", ""), totoalArrears);


//assertEquals(elementText("txt_agearrearTotalDebt", ""),totoalArrears);
		clickOn("btn_closepopup", "");
		
	
	}
	

}
