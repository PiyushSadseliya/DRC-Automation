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

  @tc3-4
  Scenario Outline: Validate the functionality of View button located on the statement of transaction section of e-filing landing page
    Given "<Test Case ID>""<Description>"The User has logged in the DRC Tax Payer Portal with "<uname>""<password>"
    When User Clicks on the efiling menu
    Then user should be on VAT e-filling Page
    Then Statement of Transaction should display "No records found!"
    Then View Button should be disabled on Efiling Landing Screen

    Examples: 
      | Test Case ID       | Description                                                                                                        | uname                   | password    |
      | DRC_ATC_Efiling_01 | Validate the functionality of View button located on the statement of transaction section of e-filing landing page | execute@sharklasers.com | abcde@12345 |

  @tc14-5
  Scenario Outline: Validate the effect on Statement of Transaction table columns data when the e-filing is done particular month and Payment is not done
    Given "<Test Case ID>""<Description>"The User has logged in the DRC Tax Payer Portal with "<uname>""<password>"
    When User Clicks on the efiling menu
    Then user should be on VAT e-filling Page
    Then user Declares for "<period1>""<year1>""<taxamount>"
    Then Click on View All button
    Then Statemnt of Transaction should show the details of Date"1""<date1>"Period"<period1>""<year>1"Particular"<particulars1>"OpeningBalance"<OpenBalance1>"Liability Amount"<vatamount1>"Late Fee"<ltfee1>"Interest "<interest1>"Penalty"<penalty1>"Total"<total1>"

    Examples: 
      | Test Case ID       | Description                                                                                                                      | uname                   | password    | date1       | period1 | taxamount | year1 | particulars1 | OpenBalance1 | vatamount1 | ltfee1 | interest1 | penalty1 | total1 |
      | DRC_ATC_Efiling_02 | Validate the effect on Statement of Transaction table columns data when the e-filing is particular month and Payment is not done | execute@sharklasers.com | abcde@12345 | 27-Sep-2018 | June    |      5000 |  2018 | e-Filing     |            0 |        800 |      0 |         0 |        0 |  3.520 |

  @tc6-13-14
  Scenario Outline: Validate the effect on Statement of Transaction table columns data when the e-filing is done and payment is pending
    Given "<Test Case ID>""<Description>"The User has logged in the DRC Tax Payer Portal with "<uname>""<password>"
    When User Clicks on the efiling menu
    Then user should be on VAT e-filling Page
    #Then user Declares for "<period2>""<year2>""<taxamount>"
    Then Click on View All button
    Then Statemnt of Transaction should show the details of Date"1""<date1>"Period"<period1>""<year1>"Particular"<particulars1>"OpeningBalance"<OpenBalance1>"Liability Amount"<vatamount1>"Late Fee"<ltfee1>"Interest "<interest1>"Penalty"<penalty1>"Total"<total1>"
    Then Statemnt of Transaction should show the details of Date"2""<date2>"Period"<period2>""<year2>"Particular"<particulars2>"OpeningBalance"<OpenBalance2>"Liability Amount"<vatamount2>"Late Fee"<ltfee2>"Interest "<interest2>"Penalty"<penalty2>"Total"<total2>"
    Then Total Liability should be"<total2>"

    Examples: 
      | Test Case ID       | Description                                                                                                         | uname                 | password    | period2  | year2 | taxamount | date1       | period1 | year1 | particulars1 | OpenBalance1 | vatamount1 | ltfee1 | interest1 | penalty1 | total1 | date2       | particulars2 | OpenBalance2 | vatamount2 | ltfee2 | interest2 | penalty2 | total2 |
      | DRC_ATC_Efiling_03 | Validate the effect on Statement of Transaction table columns data when the e-filing is done and payment is pending | 12345@sharklasers.com | abcde@12345 | February |  2018 |      5000 | 27-Sep-2018 | January |  2018 | e-Filing     |            0 |        800 |      0 |         0 |        0 |    800 | 27-Sep-2018 | e-Filing     |          800 |          0 |      0 |         0 |        0 |  1.120 |

  @tc8,12
  Scenario Outline: Validate the effect on Statement of Transaction table columns data when the e-filing  is done and payment is done more than the Liability amount
    Given "<Test Case ID>""<Description>"The User has logged in the DRC Tax Payer Portal with "<uname>""<password>"
    When User Clicks on the efiling menu
    Then user should be on VAT e-filling Page
    Then user Declares for "<period3>""<year3>""<vatamount>"
    Then Click on View All button
    Then Statemnt of Transaction should show the details of Date"1""<date1>"Period"<period1>""<year1>"Particular"<particulars1>"OpeningBalance"<OpenBalance1>"Liability Amount"<vatamount1>"Late Fee"<ltfee1>"Interest "<interest1>"Penalty"<penalty1>"Total"<total1>"
    Then Statemnt of Transaction should show the details of Date"2""<date2>"Period"<period2>""<year2>"Particular"<particulars2>"OpeningBalance"<OpenBalance2>"Liability Amount"<vatamount2>"Late Fee"<ltfee2>"Interest "<interest2>"Penalty"<penalty2>"Total"<total2>"
    Then Statemnt of Transaction should show the details of Date"3""<date3>"Period"<period3>""<year3>"Particular"<particulars3>"OpeningBalance"<OpenBalance3>"Liability Amount"<vatamount3>"Late Fee"<ltfee3>"Interest "<interest3>"Penalty"<penalty3>"Total"<total3>"

    Examples: 
      | Test Case ID       | Description                                                                                                                                      | uname                   | password    | period3 | year3 | taxamount | date1 | period1 | year1 | particulars1 | OpenBalance1 | vatamount1 | ltfee1 | interest1 | penalty1 | total1 | date2 | period2   | year2 | particulars2 | OpenBalance2 | vatamount2 | ltfee2 | interest2 | penalty1 | total2 | date3 | particulars3 | OpenBalance3 | ltfee3 | interest3 | penalty3 | total3 |
      | DRC_ATC_Efiling_04 | Validate the effect on Statement of Transaction table columns data when the e-filing  is done and payment is done more than the Liability amount | execute@sharklasers.com | abcde@12345 | March   |  2018 |         0 |       | January |  2018 | e-Filing     |            0 |        800 |      0 |         0 |        0 |    800 | date1 | Februrary |  2018 | e-Filing     |          800 |        320 |      0 |         0 |        0 |  1.120 | date3 | e-Filing     |        1.120 |      0 |         0 |        0 |  1.120 |
