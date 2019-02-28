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
@ViewAllStatementofTransc
Feature: To view all the Transaction done by the VAT User  

  @tc1
  Scenario Outline: Validate the effect on Statement of Transaction table columns data when the e-filing is done and Payment is not done
    Given "<Test Case ID>""<Description>"The User has logged in the DRC Tax Payer Portal with "<uname>""<password>"
    When User Clicks on the efiling menu
    Then user should be on VAT e-filling Page
    Then Click on View All button
    Then Statemnt of Transaction should show the details of Date"1""<date1>"Period"<period1>""<year1>"Particular"<particulars1>"OpeningBalance"<OpenBalance1>"Liability Amount"<vatamount1>"Late Fee"<ltfee1>"Interest "<interest1>"Penalty"<penalty1>"Total"<total1>"
    Then Statemnt of Transaction should show the details of Date"2""<date2>"Period"<period2>""<year2>"Particular"<particulars2>"OpeningBalance"<OpenBalance2>"Liability Amount"<vatamount2>"Late Fee"<ltfee2>"Interest "<interest2>"Penalty"<penalty2>"Total"<total2>"
    Then Statemnt of Transaction should show the details of Date"3""<date3>"Period"<period3>""<year3>"Particular"<particulars3>"OpeningBalance"<OpenBalance3>"Liability Amount"<vatamount3>"Late Fee"<ltfee3>"Interest "<interest3>"Penalty"<penalty3>"Total"<total3>"
    Then Statemnt of Transaction should show the details of Date"4""<date4>"Period"<period4>""<year4>"Particular"<particulars4>"OpeningBalance"<OpenBalance4>"Liability Amount"<vatamount4>"Late Fee"<ltfee4>"Interest "<interest4>"Penalty"<penalty4>"Total"<total4>"
    Then Statemnt of Transaction should show the details of Date"5""<date5>"Period"<period5>""<year5>"Particular"<particulars5>"OpeningBalance"<OpenBalance5>"Liability Amount"<vatamount5>"Late Fee"<ltfee5>"Interest "<interest5>"Penalty"<penalty5>"Total"<total5>"
    Then Statemnt of Transaction should show the details of Date"6""<date6>"Period"<period6>""<year6>"Particular"<particulars6>"OpeningBalance"<OpenBalance6>"Liability Amount"<vatamount6>"Late Fee"<ltfee6>"Interest "<interest6>"Penalty"<penalty6>"Total"<total6>"
    Then Statemnt of Transaction should show the details of Date"7""<date7>"Period"<period7>""<year7>"Particular"<particulars7>"OpeningBalance"<OpenBalance7>"Liability Amount"<vatamount7>"Late Fee"<ltfee7>"Interest "<interest7>"Penalty"<penalty7>"Total"<total7>"

    Examples: 
      | Test Case ID       | Description                                                                                                                      | uname                              | password | period7 | taxamount | year7 | date1       | period1 | year1 | particulars1 | OpenBalance1 | vatamount1 | ltfee1 | interest1 | penalty1 | total1 | date2       | period2  | year2 | particulars2 | OpenBalance2 | vatamount2 | ltfee2 | interest2 | penalty2 | total2 | date3       | period3 | year3 | particulars3 | OpenBalance3 | vatamount3 | ltfee3 | interest3 | penalty3 | total3   | date4       | period4 | year4 | particulars4 | OpenBalance4 | vatamount4 | ltfee4 | interest4 | penalty4 | total4   | date5       | period5 | year5 | particulars5 | OpenBalance5 | vatamount5 | ltfee5 | interest5 | penalty5 | total5    | date6       | period6 | year6 | particulars6 | OpenBalance6 | vatamount6 | ltfee6 | interest6 | penalty6 | total6     | date7       | particulars7 | OpenBalance7 | vatamount7 | ltfee7 | interest7 | penalty7 | total7     |
      | DRC_ATC_Efiling_07 | Validate the effect on Statement of Transaction table columns data when the e-filing is particular month and Payment is not done | regressiondaydaysix@mailinator.com | Test@123 | July    | 2.640,00  |  2019 | 21-Jan-2019 | January |  2019 | e-Filing     |         0,00 |       0,00 |   0,00 |      0,00 |     0,00 |   0,00 | 21-Jan-2019 | February |  2019 | e-Filing     |         0,00 |     310,00 |   0,00 |      0,00 |     0,00 | 310,00 | 21-Jan-2019 | March   |  2019 | e-Filing     |       310,00 | 7.640,00   |   0,00 |      0,00 |     0,00 | 7.950,00 | 21-Jan-2019 | April   |  2019 | e-Filing     | 7.950,00     | -4.000,00  |   0,00 |      0,00 |     0,00 | 3.950,00 | 21-Jan-2019 | May     |  2019 | e-Filing     | 3.950,00     | -8.400,00  |   0,00 |      0,00 |     0,00 | -4.450,00 | 21-Jan-2019 | June    |  2019 | e-Filing     | -4.450,00    | 112.040,00 |   0,00 |      0,00 |     0,00 | 107.590,00 | 21-Jan-2019 | e-Filing     | 107.590,00   | 2.640,00   |   0,00 |      0,00 |     0,00 | 110.230,00 |
