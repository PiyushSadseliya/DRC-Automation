package org.drc.vat.StepDefinitions;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import java.awt.*;

import static org.drc.vat.appmanager.HelperBase.*;
import static org.drc.vat.appmanager.HelperBase.verifyDownload;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.containsString;

public class AuditingAuditStepDef
{
    @Given("^The user is on the Auditing Audit page$")
    public void navigateToAuditingAuditPage() {
        clickOn("report_menu", "");
        clickOn("acct_audit_menu", "");
    }

    @When("^User selects report period: \"([^\"]*)\"$")
    public void selectReportPeriod(String reportPeriod) {
        clickOn("label", "[contains(.,\"" + reportPeriod + "\")]");
    }

    @And("^User selects report type: \"([^\"]*)\"$")
    public void selectReportType(String reportType) {
        clickOn("label", "[contains(.,\"" + reportType + "\")]");
    }

    @And("^User selects COB: \"([^\"]*)\"$")
    public void selectsCOB(String COB) {
        clickOn("dd_btn", "");
        clickOn("check_mark", "");
        clickOn("span", "[contains(.,\"" + COB + "\")]");
    }

    @And("^User search for customer: \"([^\"]*)\"$")
    public void searchCustomer(String customer) {
        clickOn("search_menu", "");
        type("search_menu", customer);
    }

    @And("^User select customer$")
    public void selectCustomer() {
        clickOn("table_row", "");
    }

    @And("^User clicks on View Report$")
    public void viewReports() {
        clickOn("view_report_btn", "");
    }

    @And("^User selects report bundle: \"([^\"]*)\"$")
    public void selectsReportBundle(String reportBundle) {
        clickOn("label", "[contains(.,\"" + reportBundle + "\")]");
    }

    @And("^User selects report format: \"([^\"]*)\"$")
    public void selectsReportFormat(String reportFormat) {
        if (reportFormat.equals("View Report Data")) {
            clickOn("label", "[contains(.,\"" + reportFormat + "\")]");
        }
    }

    @When("^User exports an auditing audit report$")
    public void user_exports_an_auditing_audit_report() {
        clickOn("export_report_btn", "");
    }

    @Then("^Toast message: \"([^\"]*)\" equals expected result$")
    public void toast_message_equals_expected_result(String toastMessage) {
        assertThat(toastMessage(), containsString(toastMessage));
    }





    @When("^User selects multiples customers$")
    public void user_selects_multiples_customers() throws Throwable
    {
        int numbofcust = 5;

        // WebDriverWait driverWaitnew WebDriverWait(wd,60);;
        for(int i = 0;i<numbofcust;i++)
        {
            clickOn("","//div[contains(@class,'table-data-item')])[\" + i + 2 + \"]");
            //driverWait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[contains(@class,'table-data-item')])["+i+2+"]"))).click();
        }
    }

    @And("^saved report equals report name: \"([^\"]*)\" for AuditingAudit$")
    public void savedReportEqualsReportNameForAuditingAudit(String reportname) throws Throwable
    {
        saveFile();
        verifyDownload(reportname);
    }
}
