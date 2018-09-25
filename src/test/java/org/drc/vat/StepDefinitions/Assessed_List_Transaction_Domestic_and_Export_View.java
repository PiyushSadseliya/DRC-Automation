package org.drc.vat.StepDefinitions;

import static org.drc.vat.appmanager.HelperBase.clickOn;

import cucumber.api.java.en.And;

public class Assessed_List_Transaction_Domestic_and_Export_View 
{

	@And("^User click on manage setting drop down and click on Reassess from list$")
	public void user_click_on_manage_setting_drop_down_and_click_on_Reassess_from_list() throws Throwable 
	{
		clickOn("AssestManage", "");
	}
	
}
