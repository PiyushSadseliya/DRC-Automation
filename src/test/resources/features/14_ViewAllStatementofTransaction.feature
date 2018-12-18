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
      | Test Case ID       | Description                                                                                                        | uname                       | password |
      | DRC_ATC_Efiling_01 | Validate the functionality of View button located on the statement of transaction section of e-filing landing page | approveduser@mailinator.com | Test@123 |

  ###Total Pay need to b changed for january Efiing
  @tc14-5
  Scenario Outline: Validate the effect on Statement of Transaction table columns data when the e-filing is done particular month and Payment is not done
    Given "<Test Case ID>""<Description>"The User has logged in the DRC Tax Payer Portal with "<uname>""<password>"
    When User Clicks on the efiling menu
    Then user should be on VAT e-filling Page
    #Then user Declares for "<period1>""<year1>""<taxamount>"
    Then Click on View All button
    Then Statemnt of Transaction should show the details of Date"1""<date1>"Period"<period1>""<year1>"Particular"<particulars1>"OpeningBalance"<OpenBalance1>"Liability Amount"<vatamount1>"Late Fee"<ltfee1>"Interest "<interest1>"Penalty"<penalty1>"Total"<total1>"

    Examples: 
      | Test Case ID       | Description                                                                                                                      | uname                       | password | date1       | period1 | taxamount | year1 | particulars1 | OpenBalance1 | vatamount1 | ltfee1 | interest1 | penalty1 | total1 |
      | DRC_ATC_Efiling_02 | Validate the effect on Statement of Transaction table columns data when the e-filing is particular month and Payment is not done | approveduser@mailinator.com | Test@123 | 27-Nov-2018 | January |   5000,00 |  2018 | e-Filing     |         0,00 |     800,00 |   0,00 |      0,00 |     0,00 | 800,00 |

  #pymt not done  FEb too
  @tc6-13-14
  Scenario Outline: Validate the effect on Statement of Transaction table columns data when the e-filing is done and payment not done
    Given "<Test Case ID>""<Description>"The User has logged in the DRC Tax Payer Portal with "<uname>""<password>"
    When User Clicks on the efiling menu
    Then user should be on VAT e-filling Page
    #Then user Declares for "<period2>""<year2>""<taxamount>"
    # Then Payment of previous month Edeclaration is done"<period1>""<year1>""<vatamount1>"
    Then Click on View All button
    Then Statemnt of Transaction should show the details of Date"1""<date1>"Period"<period1>""<year1>"Particular"<particulars1>"OpeningBalance"<OpenBalance1>"Liability Amount"<vatamount1>"Late Fee"<ltfee1>"Interest "<interest1>"Penalty"<penalty1>"Total"<total1>"
    Then Statemnt of Transaction should show the details of Date"2""<date2>"Period"<period2>""<year2>"Particular"<particulars2>"OpeningBalance"<OpenBalance2>"Liability Amount"<vatamount2>"Late Fee"<ltfee2>"Interest "<interest2>"Penalty"<penalty2>"Total"<total2>"

    #Then Total Liability should be"<total2>"
    Examples: 
      | Test Case ID       | Description                                                                                                                      | uname                       | password | period2  | year2 | taxamount | date1       | period1 | year1 | particulars1 | OpenBalance1 | vatamount1 | ltfee1 | interest1 | penalty1 | total1 | date2       | particulars2 | OpenBalance2 | vatamount2 | ltfee2 | interest2 | penalty2 | total2 |
      | DRC_ATC_Efiling_03 | Validate the effect on Statement of Transaction table columns data when the e-filing is done and payment is done(Offset Efiling) | approveduser@mailinator.com | Test@123 | February |  2018 |      0,00 | 27-Nov-2018 | January |  2018 | e-Filing     |         0,00 |     800,00 |   0,00 |      0,00 |     0,00 | 800,00 | 27-Nov-2018 | e-Filing     |       800,00 |       0,00 |   0,00 |      0,00 |     0,00 | 800,00 |

  ##march Efiling done pymt of jan,March ###Pymt Receipt for Jan And March should be generated
  @tc8,12
  Scenario Outline: Validate the effect on Statement of Transaction table columns data when the e-filing  is done and Payment is done more than the vat liability of previous months
    Given "<Test Case ID>""<Description>"The User has logged in the DRC Tax Payer Portal with "<uname>""<password>"
    When User Clicks on the efiling menu
    Then user should be on VAT e-filling Page
    #Then user Declares for "<period3>""<year3>""<taxamount>"
    # Then click on total Liability Pay button to Pay the vat amount"<total3>"
    Then Click on View All button
    Then Statemnt of Transaction should show the details of Date"1""<date1>"Period"<period1>""<year1>"Particular"<particulars1>"OpeningBalance"<OpenBalance1>"Liability Amount"<vatamount1>"Late Fee"<ltfee1>"Interest "<interest1>"Penalty"<penalty1>"Total"<total1>"
    Then Statemnt of Transaction should show the details of Date"2""<date2>"Period"<period2>""<year2>"Particular"<particulars2>"OpeningBalance"<OpenBalance2>"Liability Amount"<vatamount2>"Late Fee"<ltfee2>"Interest "<interest2>"Penalty"<penalty2>"Total"<total2>"
    Then Statemnt of Transaction should show the details of Date"3""<date3>"Period"<period3>""<year3>"Particular"<particulars3>"OpeningBalance"<OpenBalance3>"Liability Amount"<vatamount3>"Late Fee"<ltfee3>"Interest "<interest3>"Penalty"<penalty3>"Total"<total3>"
    Then Statemnt of Transaction should show the details of Date"4""<date4>"Period"<period4>""<year4>"Particular"<particulars4>"OpeningBalance"<OpenBalance4>"Liability Amount"<vatamount4>"Late Fee"<ltfee4>"Interest "<interest4>"Penalty"<penalty4>"Total"<total4>"

    Examples: 
      | Test Case ID       | Description                                                                                                                                                      | uname                       | password | period3 | year3 | taxamount | date1       | period1 | year1 | particulars1 | OpenBalance1 | vatamount1 | ltfee1 | interest1 | penalty1 | total1 | date2       | period2  | year2 | particulars2 | OpenBalance2 | vatamount2 | ltfee2 | interest2 | penalty2 | total2 | date3       | particulars3 | OpenBalance3 | vatamount3 | ltfee3 | interest3 | penalty3 | total3 | date2       | period2 | year2 | particulars2 | OpenBalance2 | vatamount2 | ltfee2 | interest2 | penalty1 | total2  |
      | DRC_ATC_Efiling_04 | Validate the effect on Statement of Transaction table columns data when the e-filing  is done and Payment is done more than the vat liability of previous months | approveduser@mailinator.com | Test@123 | March   |  2018 |   5000,00 | 27-Nov-2018 | January |  2018 | e-Filing     |         0,00 |     800,00 |   0,00 |      0,00 |     0,00 | 800,00 | 27-Nov-2018 | February |  2018 | e-Filing     |       800,00 |       0,00 |   0,00 |      0,00 |     0,00 | 800,00 | 27-Nov-2018 | e-Filing     |       800,00 |     800,00 |   0,00 |      0,00 |     0,00 |  1.600 | 27-Nov-2018 | -       |       | Payment      |        1.600 |     -1.700 |   0,00 |      0,00 |     0,00 | -100,00 |

  ### Efiling  April & pymt April of particular month
  Scenario Outline: Validate the effect on Statement of Transaction table columns data when the e-filing is done particular month and Payment is done
    Given "<Test Case ID>""<Description>"The User has logged in the DRC Tax Payer Portal with "<uname>""<password>"
    When User Clicks on the efiling menu
    Then user should be on VAT e-filling Page
    # Then user Declares for "<period4>""<year4>""<taxamount>"
    ##Then user pays for particvular month pymt script to be added
    Then Click on View All button
    Then Statemnt of Transaction should show the details of Date"1""<date1>"Period"<period1>""<year1>"Particular"<particulars1>"OpeningBalance"<OpenBalance1>"Liability Amount"<vatamount1>"Late Fee"<ltfee1>"Interest "<interest1>"Penalty"<penalty1>"Total"<total1>"
    Then Statemnt of Transaction should show the details of Date"2""<date2>"Period"<period2>""<year2>"Particular"<particulars2>"OpeningBalance"<OpenBalance2>"Liability Amount"<vatamount2>"Late Fee"<ltfee2>"Interest "<interest2>"Penalty"<penalty2>"Total"<total2>"
    Then Statemnt of Transaction should show the details of Date"3""<date3>"Period"<period3>""<year3>"Particular"<particulars3>"OpeningBalance"<OpenBalance3>"Liability Amount"<vatamount3>"Late Fee"<ltfee3>"Interest "<interest3>"Penalty"<penalty3>"Total"<total3>"
    Then Statemnt of Transaction should show the details of Date"4""<date4>"Period"<period4>""<year4>"Particular"<particulars4>"OpeningBalance"<OpenBalance4>"Liability Amount"<vatamount4>"Late Fee"<ltfee4>"Interest "<interest4>"Penalty"<penalty4>"Total"<total4>"

    Examples: 
      | Test Case ID       | Description                                                                                                       | uname                       | password | period4 | year4 | taxamount | date1 | period1 | year1 | particulars1 | OpenBalance1 | vatamount1 | ltfee1 | interest1 | penalty1 | total1 | date2 | period2  | year2 | particulars2 | OpenBalance2 | vatamount2 | ltfee2 | interest2 | penalty2 | total2 | date3       | period3 | year3 | particulars3 | OpenBalance3 | vatamount3 | ltfee3 | interest3 | penalty3 | total3 | date4       | particulars4 | OpenBalance4 | vatamount4 | ltfee4 | interest4 | penalty4 | total4 |
      | DRC_ATC_Efiling_05 | Validate the effect on Statement of Transaction table columns data when the e-filing  is done and Payment is done | approveduser@mailinator.com | Test@123 | April   |  2018 |      5000 |       | January |  2018 | e-Filing     |         0,00 |     800,00 |   0,00 |      0,00 |     0,00 | 800,00 | date1 | February |  2018 | e-Filing     |          800 |    0,00,00 |   0,00 |      0,00 |     0,00 |    800 | 27-Nov-2018 | March   |  2018 | e-filing     |       800,00 |     800,00 |   0,00 |      0,00 |     0,00 | 800,00 | 27-Nov-2018 | e-Filing     |       800,00 |     800,00 |   0,00 |      0,00 |     0,00 |  1.600 |

  ####For Generate Taxbill Scenarios particular month May
  @tc0
  Scenario Outline: Validate the effect on Statement of Transaction table columns data when the e-filing is done particular month and Payment is not done
    Given "<Test Case ID>""<Description>"The User has logged in the DRC Tax Payer Portal with "<uname>""<password>"
    When User Clicks on the efiling menu
    Then user should be on VAT e-filling Page
    # Then user Declares for "<period4>""<year4>""<taxamount>"
    Then Click on View All button
    Then Statemnt of Transaction should show the details of Date"1""<date1>"Period"<period1>""<year1>"Particular"<particulars1>"OpeningBalance"<OpenBalance1>"Liability Amount"<vatamount1>"Late Fee"<ltfee1>"Interest "<interest1>"Penalty"<penalty1>"Total"<total1>"
    Then Statemnt of Transaction should show the details of Date"2""<date2>"Period"<period2>""<year2>"Particular"<particulars2>"OpeningBalance"<OpenBalance2>"Liability Amount"<vatamount2>"Late Fee"<ltfee2>"Interest "<interest2>"Penalty"<penalty2>"Total"<total2>"
    Then Statemnt of Transaction should show the details of Date"3""<date3>"Period"<period3>""<year3>"Particular"<particulars3>"OpeningBalance"<OpenBalance3>"Liability Amount"<vatamount3>"Late Fee"<ltfee3>"Interest "<interest3>"Penalty"<penalty3>"Total"<total3>"
    Then Statemnt of Transaction should show the details of Date"4""<date4>"Period"<period4>""<year4>"Particular"<particulars4>"OpeningBalance"<OpenBalance4>"Liability Amount"<vatamount4>"Late Fee"<ltfee4>"Interest "<interest4>"Penalty"<penalty4>"Total"<total4>"
    Then Statemnt of Transaction should show the details of Date"5""<date5>"Period"<period5>""<year5>"Particular"<particulars5>"OpeningBalance"<OpenBalance5>"Liability Amount"<vatamount5>"Late Fee"<ltfee5>"Interest "<interest5>"Penalty"<penalty5>"Total"<total5>"

    Examples: 
      | Test Case ID       | Description                                                                                                                      | uname                       | password | period5 | year5 | taxamount | date1       | period1 | year1 | particulars1 | OpenBalance1 | vatamount1 | ltfee1 | interest1 | penalty1 | total1 | date2       | period2  | year2 | particulars2 | OpenBalance2 | vatamount2 | ltfee2 | interest2 | penalty2 | total2 | date3       | particulars3 | OpenBalance3 | vatamount3 | ltfee3 | interest3 | penalty3 | total3 | date4       | particulars4 | period4 | year4 | OpenBalance4 | vatamount4 | ltfee4 | interest4 | penalty4 | total4 | date5       | particulars5 | OpenBalance5 | vatamount5 | ltfee5 | interest5 | penalty5 | total5 |
      | DRC_ATC_Efiling_06 | Validate the effect on Statement of Transaction table columns data when the e-filing is particular month and Payment is not done | approveduser@mailinator.com | Test@123 | May     |  2018 |      5000 | 27-Nov-2018 | January |  2018 | e-Filing     |         0,00 |     800,00 |   0,00 |      0,00 |     0,00 | 800,00 | 27-Nov-2018 | February |  2018 | e-Filing     |       800,00 |       0,00 |   0,00 |      0,00 |     0,00 | 800,00 | 27-Nov-2018 | e-Filing     |       800,00 |        800 |   0,00 |      0,00 |     0,00 |  1.600 | 27-Nov-2018 | e-Filing     | April   |  2018 |        1.600 |        800 |   0,00 |      0,00 |     0,00 |  2.400 | 27-Nov-2018 | e-filing     |        2.400 |        800 |   0,00 |      0,00 |     0,00 |  3.200 |

  ##June Efiling and Total Liability pay button Scenario
  @tc
  Scenario Outline: Validate the effect on Statement of Transaction table columns data when the e-filing is done and Payment is not done
    Given "<Test Case ID>""<Description>"The User has logged in the DRC Tax Payer Portal with "<uname>""<password>"
    When User Clicks on the efiling menu
    Then user should be on VAT e-filling Page
    # Then user Declares for "<period4>""<year4>""<taxamount>"
    Then Click on View All button
    Then Statemnt of Transaction should show the details of Date"1""<date1>"Period"<period1>""<year1>"Particular"<particulars1>"OpeningBalance"<OpenBalance1>"Liability Amount"<vatamount1>"Late Fee"<ltfee1>"Interest "<interest1>"Penalty"<penalty1>"Total"<total1>"
    Then Statemnt of Transaction should show the details of Date"2""<date2>"Period"<period2>""<year2>"Particular"<particulars2>"OpeningBalance"<OpenBalance2>"Liability Amount"<vatamount2>"Late Fee"<ltfee2>"Interest "<interest2>"Penalty"<penalty2>"Total"<total2>"
    Then Statemnt of Transaction should show the details of Date"3""<date3>"Period"<period3>""<year3>"Particular"<particulars3>"OpeningBalance"<OpenBalance3>"Liability Amount"<vatamount3>"Late Fee"<ltfee3>"Interest "<interest3>"Penalty"<penalty3>"Total"<total3>"
    Then Statemnt of Transaction should show the details of Date"4""<date4>"Period"<period4>""<year4>"Particular"<particulars4>"OpeningBalance"<OpenBalance4>"Liability Amount"<vatamount4>"Late Fee"<ltfee4>"Interest "<interest4>"Penalty"<penalty4>"Total"<total4>"
    Then Statemnt of Transaction should show the details of Date"5""<date5>"Period"<period5>""<year5>"Particular"<particulars5>"OpeningBalance"<OpenBalance5>"Liability Amount"<vatamount5>"Late Fee"<ltfee5>"Interest "<interest5>"Penalty"<penalty5>"Total"<total5>"
    Then Statemnt of Transaction should show the details of Date"6""<date6>"Period"<period6>""<year6>"Particular"<particulars6>"OpeningBalance"<OpenBalance6>"Liability Amount"<vatamount6>"Late Fee"<ltfe6>"Interest "<interest6>"Penalty"<penalty6>"Total"<total6>"

    Examples: 
      | Test Case ID       | Description                                                                                                                      | uname                       | password | date6       | period6 | taxamount | year6 | date1       | period1  | particulars1 | OpenBalance1 | vatamount1 | ltfee1 | interest1 | penalty1 | total1 | date2       | period2  | year2 | particulars2 | OpenBalance2 | vatamount2 | ltfee2 | interest2 | penalty2 | total2 | date3       | period3 | year3 | particulars3 | OpenBalance3 | vatamount3 | ltfee3 | interest3 | penalty3 | total3 | date4       | period4 | year4 | particulars4 | OpenBalance4 | vatamount4 | ltfee4 | interest4 | penalty4 | total4 | date5       | period5 | year5 | particulars5 | OpenBalance5 | vatamount5 | ltfee5 | interest5 | penalty5 | total5 | date6       | particulars16 | OpenBalance6 | vatamount6 | ltfee6 | interest6 | penalty6 | total6 |
      | DRC_ATC_Efiling_07 | Validate the effect on Statement of Transaction table columns data when the e-filing is particular month and Payment is not done | approveduser@mailinator.com | Test@123 | 27-Nov-2018 | June    |      5000 |  2018 | 27-Nov-2018 | e-Filing |         0,00 |         0,00 |        800 |   0,00 |      0,00 |     0,00 |    800 | 27-Nov-2018 | February |  2018 | e-filing     |          800 |       0,00 |   0,00 |      0,00 |     0,00 |    800 | 27-Nov-2018 | March   |  2018 | e-Filing     |          800 |        800 |   0,00 |      0,00 |     0,00 |  1.600 | 27-Nov-2018 | April   |  2018 | e-Filing     |        1.600 |        800 |   0,00 |      0,00 |     0,00 |  2.400 | 27-Nov-2018 | May     |  2018 | E-filing     |        2.400 |        800 |   0,00 |      0,00 |     0,00 |  3.200 | 27-Nov-2018 | E-filing      |        3.200 |        800 |   0,00 |      0,00 |     0,00 |  4.000 |
