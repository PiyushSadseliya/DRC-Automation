package org.drc.vat.StepDefinitions;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import java.awt.*;

import static org.drc.vat.appmanager.HelperBase.*;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.containsString;

public class AccountingAuditStepDef {

    @Given("^The user is on the Accounting Audit page$")
    public void navigateToAcctAuditPage() {
        clickOn("report_menu", "");
        clickOn("acct_audit_menu", "");
    }

    @When("^User select report period: \"([^\"]*)\"$")
    public void selectReportPeriod(String reportPeriod) {
        clickOn("label", "[contains(.,\"" + reportPeriod + "\")]");
    }

    @And("^User select report type: \"([^\"]*)\"$")
    public void selectReportType(String reportType) {
        clickOn("label", "[contains(.,\"" + reportType + "\")]");
    }

    @And("^User select COB: \"([^\"]*)\"$")
    public void selectCOB(String COB) {
        clickOn("dd_btn", "");
        clickOn("check_mark", "");
        clickOn("span", "[contains(.,\"" + COB + "\")]");
    }

    @And("^User searches for customer: \"([^\"]*)\"$")
    public void searchCustomers(String customer) {
        clickOn("search_menu", "");
        type("search_menu", customer);
    }

    @And("^User selects customer$")
    public void selectsCustomer() {
        clickOn("table_row", "");
    }

    @And("^User click on View Report$")
    public void viewReport() {
        clickOn("view_report_btn", "");
    }

    @And("^User select report bundle: \"([^\"]*)\"$")
    public void selectReportBundle(String reportBundle) {
        clickOn("label", "[contains(.,\"" + reportBundle + "\")]");
    }

    @And("^User select report format: \"([^\"]*)\"$")
    public void selectReportFormat(String reportFormat) {
        if (reportFormat.equals("View Report Data")) {
            clickOn("label", "[contains(.,\"" + reportFormat + "\")]");
        }
    }

    @When("^User export an accounting audit report$")
    public void exportReport() {
        clickOn("export_report_btn", "");
    }






    @When("^User selects multiple customers$")
    public void user_selects_multiple_customers() throws Throwable
    {
        int numbofcust = 5;

        // WebDriverWait driverWaitnew WebDriverWait(wd,60);;
        for(int i = 0;i<numbofcust;i++)
        {
            clickOn("","//div[contains(@class,'table-data-item')])[\" + i + 2 + \"]");
            //driverWait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[contains(@class,'table-data-item')])["+i+2+"]"))).click();
        }


    }

    @Then("^Verify Toast message: \"([^\"]*)\" equals expected result$")
    public void verifyToastMessageEqualsExpectedResult(String toastMessage) throws Throwable {
        assertThat(toastMessage(), containsString(toastMessage));
    }

    @And("^User selects multiples Close of Business$")
    public void userSelectsMultipleCloseOfBusiness() throws Throwable {
        int numbofdates = 5;

        // WebDriverWait driverWaitnew WebDriverWait(wd,60);;
        for(int i = 0;i<=numbofdates;i++)
        {
            clickOn("","//li[contains(@class,'dropdown-item')][\" + i + \"]");
            //driverWait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[contains(@class,'table-data-item')])["+i+2+"]"))).click();
        }

    }

    @And("^saved report equals report name: \"([^\"]*)\" for Accounting Audit$")
    public void savedReportEqualsReportNameForAccountingAudit(String report) throws Throwable {
        saveFile();
        verifyDownload(report);
    }
}
