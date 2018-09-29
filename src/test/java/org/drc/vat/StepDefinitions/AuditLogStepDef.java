package org.drc.vat.StepDefinitions;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import static org.drc.vat.appmanager.HelperBase.*;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.StringContains.containsString;

public class AuditLogStepDef {

    @Given("^The user is on Audit Log page$")
    public void the_user_is_on_Audit_Log_page() throws Throwable
    {
        clickOn("report_menu", "");
        clickOn("audit_log_menu", "");
    }

    @When("^User select date: \"([^\"]*)\"$")
    public void user_select_date(String date) throws Throwable
    {
        clickOn("table_col","[contains(.,\'" + date + "')]");
    }

    @When("^User click Query$")
    public void user_click_Query() throws Throwable
    {
        clickOn("query", "");
    }

    @Then("^User should select report format: \"([^\"]*)\"$")
    public void user_should_select_report_format(String format) throws Throwable
    {
        clickOn("label" , "[contains(.,\"" + format + "\")]");
    }

    @Then("^User click on Export Report$")
    public void user_click_on_Export_Report() throws Throwable
    {
        clickOn("export_report_btn", "");
    }



    @Then("^verify toast messages \"([^\"]*)\"$")
    public void verify_toast_messages(String toastMessage) throws Throwable
    {
        assertThat(toastMessage(), containsString(toastMessage));
    }

    @When("^User select all$")
    public void user_select_all() throws Throwable
    {
        clickOn("btn_selectall","");
    }


    @When("^User Deselect all$")
    public void user_Deselect_all() throws Throwable
    {
        clickOn("btn_deselectall","");
    }


    @When("^User click on first value under input date-time$")
    public void user_click_on_first_value_under_input_date_time() throws Throwable
    {
        clickOn("first-select","");
    }



   /* @When("^User select date: \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
    public void user_select_date(String date, String date1, String date2) throws Throwable
    {
        clickOn("table_col","[contains(.,\'" + date + "')]");
        clickOn("table_col","[contains(.,\'" + date1 + "')]");
        clickOn("table_col","[contains(.,\'" + date2 + "')]");
    }*/
   @When("^User selects multiple dates$")
   public void user_selects_multiple_dates() throws Throwable
   {
       int numbofcust = 5;

      // WebDriverWait driverWaitnew WebDriverWait(wd,60);;
       for(int i = 0;i<numbofcust;i++)
       {
           clickOn("","//div[contains(@class,'table-data-item')])["+i+2+"]");
           //driverWait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[contains(@class,'table-data-item')])["+i+2+"]"))).click();
       }


   }

    @And("^saved report equals report name: \"([^\"]*)\" for audit log$")
    public void savedReportEqualsReportNameForAuditLog(String reports) throws Throwable
    {
        saveFile();
        verifyDownload(reports);
    }
}
