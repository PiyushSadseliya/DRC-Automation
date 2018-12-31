package org.drc.vat.StepDefinitions;

import cucumber.api.java.en.Then;
import static org.drc.vat.appmanager.HelperBase.clickOn;
import static org.drc.vat.appmanager.HelperBase.elementText;
import static org.drc.vat.appmanager.HelperBase.sleepWait;
import org.testng.asserts.SoftAssert;

public class PopUpOfAgeingofArrears {
	SoftAssert sassert = new SoftAssert();

	@Then("^Click on View in Manage Options$")
	public void click_on_View_in_Manage_Options() throws Throwable {

		clickOn("btn_managecase", "");
		clickOn("href_viewCase", "");
		sleepWait(2000);

	}

	@Then("^Click on Total Due hyperlink$")
	public void click_on_Total_Due_hyperlink() throws Throwable {
		clickOn("href_totalamountDue", "");
		sleepWait(3000);

	}

	@Then("^Amount in ageing of arrears in twentyfour months and Above is amount \"([^\"]*)\" thirteen to twentyfour months \"([^\"]*)\" seven to twelve months\"([^\"]*)\" four to six months\"([^\"]*)\" zero to three months\"([^\"]*)\" Total Debt\\(FC\\)\"([^\"]*)\"$")
	public void amount_in_ageing_of_arrears_in_twentyfour_months_and_Above_is_amount_thirteen_to_twentyfour_months_seven_to_twelve_months_four_to_six_months_zero_to_three_months_Total_Debt_FC(
			String arg1, String arg2, String arg3, String arg4, String arg5, String arg6) throws Throwable {
		sleepWait(2000);
		sassert.assertEquals(elementText("general", "h5)[2]"), "Ageing of Arrears");
		sassert.assertEquals(elementText("txt_agearrear24monthsup", ""), arg1);
		sassert.assertEquals(elementText("txt_agearrear13to24months", ""), arg2);
		sassert.assertEquals(elementText("txt_agearrear7to12months", ""), arg3);
		sassert.assertEquals(elementText("txt_agearrear4to6months", ""), arg4);
		sassert.assertEquals(elementText("txt_agearrear0to3months", ""), arg5);
		sassert.assertEquals(elementText("txt_agearrearTotalDebt", ""), arg6);
	}

}
