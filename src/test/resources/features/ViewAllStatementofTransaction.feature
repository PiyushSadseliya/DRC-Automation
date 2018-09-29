#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
@tag
Feature: To view all the Transaction done by the VAT User

  @tc3,4
  Scenario Outline: Validate the functionality of View button located on the statement of transaction section of e-filing landing page
    Given "<Test Case ID>""<Description>"The User has logged in the DRC Tax Payer Portal
    When User Clicks on the efiling menu
    Then user should be on VAT e-filling Page
    Then Statement of Transaction should display "No records Found"
    Then View Button should be disabled on Efiling Landing Screen

    Examples: 
      | Test Case ID       | Description                                                                                                        | uname | password |
      | DRC_ATC_Efiling_01 | Validate the functionality of View button located on the statement of transaction section of e-filing landing page |       |          |

  @tc
  Scenario Outline: Validate the effect on Statement of Transaction table columns data when the e-filing is done particular month and Payment is not done
    Given "<Test Case ID>""<Description>"The User has logged in the DRC Tax Payer Portal
    When User Clicks on the efiling menu
    Then user should be on VAT e-filling Page
    Then user Declares for "<period>""<year>""<vatamount>"
    Then Click on View All button
    Then Statemnt of Transaction should show the details of Date"<date1>"Period"<period>""<year>"Particular"<particulars>"OpeningBalance"<OpenBalance>"Liability Amount"<vatamount>"Late Fee"<ltfee>"Interest "<interest>"Penalty"<penalty>"Total"<total>"

    Examples: 
      | Test Case ID       | Description                                                                                                                      | uname | password | date1 | period  | year | particulars | OpenBalance | vatamount | ltfee | interest | penalty | total |
      | DRC_ATC_Efiling_02 | Validate the effect on Statement of Transaction table columns data when the e-filing is particular month and Payment is not done |       |          |       | January | 2018 | e-Filing    |           0 |      5000 |     0 |        0 |       0 |  5000 |

  @tc
  Scenario Outline: Validate the effect on Statement of Transaction table columns data when the e-filing is done and payment is pending
    Given "<Test Case ID>""<Description>"The User has logged in the DRC Tax Payer Portal
    When User Clicks on the efiling menu
    Then user should be on VAT e-filling Page
    Then user Declares for "<period>""<year>""<vatamount>"
    Then Click on View All button
    Then Statemnt of Transaction should show the details of Date"<date1>"Period"<period>""<year>"Particular"<particulars>"OpeningBalance"<OpenBalance>"Liability Amount"<vatamount>"Late Fee"<ltfee>"Interest "<interest>"Penalty"<penalty>"Total"<total>"
    Then Statemnt of Transaction should show the details of Date"<date2>"Period"<period2>""<year2>"Particular"<particulars2>"OpeningBalance"<OpenBalance2>"Liability Amount"<vatamount2>"Late Fee"<ltfee2>"Interest "<interest2>"Penalty"<penalty2>"Total"<total2>"
    Then Total Liability should be"<total2>"

    Examples: 
      | Test Case ID       | Description                                                                                                         | uname | password | date1 | period   | year | particulars | OpenBalance | vatamount | ltfee | interest | penalty | total | date2 | period2 | year2 | particulars2 | OpenBalance2 | vatamount2 | ltfee2 | interest2 | penalty2 | total2 |
      | DRC_ATC_Efiling_03 | Validate the effect on Statement of Transaction table columns data when the e-filing is done and payment is pending |       |          |       | February |      | e-Filing    |           0 |      5000 |     0 |        0 |       0 |     0 |       | Feb     |  2018 | e-Filing     |         5000 |       2000 |      0 |         0 |        0 |   7000 |

  @tc
  Scenario Outline: Validate the effect on Statement of Transaction table columns data when the e-filing  is done and payment is done more than the Liability amount
    Given "<Test Case ID>""<Description>"The User has logged in the DRC Tax Payer Portal
    When User Clicks on the efiling menu
    Then user should be on VAT e-filling Page
    Then user Declares for "<period>""<year>""<vatamount>"
    Then Click on View All button
    Then Statemnt of Transaction should show the details of Date"<date1>"Period"<period>""<year>"Particular"<particulars>"OpeningBalance"<OpenBalance>"Liability Amount"<vatamount>"Late Fee"<ltfee>"Interest "<interest>"Penalty"<penalty>"Total"<total>"
    Then Statemnt of Transaction should show the details of Date"<date2>"Period"<period2>""<year2>"Particular"<particulars2>"OpeningBalance"<OpenBalance2>"Liability Amount"<vatamount2>"Late Fee"<ltfee2>"Interest "<interest2>"Penalty"<penalty2>"Total"<total2>"

    Examples: 
      | Test Case ID       | Description                                                                                                                                      | uname | password | date1 | period | year | particulars | OpenBalance | vatamount | ltfee | interest | penalty | total | date2 | period2 | year2 | particulars2 | OpenBalance2 | vatamount2 | ltfee2 | interest2 | penalty2 | total2 |
      | DRC_ATC_Efiling_04 | Validate the effect on Statement of Transaction table columns data when the e-filing  is done and payment is done more than the Liability amount |       |          |       | March  |      | e-Filing    |           0 |      5000 |     0 |        0 |       0 |     0 |       | Feb     |  2018 | e-Filing     |         5000 |          0 |      0 |         0 |        0 |   5000 |
