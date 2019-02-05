@ManualReAssessment @RaiseNotice
Feature: Manual ReAssessment- Payment summary for Liability Calculation and Payment due and Raise notice

  @tc3419_555_AssessedList_2875_2877
  Scenario Outline: Validate the download functionality of e-filing schedule Button when e-file schedule file is not uploaded by from reassessment
    Given The user has done the filing for the particular month
    When the assessemnt officer does the Reassessment for that particular month with "no" Updation for period"<period>"year"<year>"tpayer"<tpayer>"
    Then the officer is on the Payment Summary page for Liabilty Calculation and Payment Due for ReAssessment for period"<period>"year"<year>"tpayer"<tpayer>"
    Then User click download button on Payment Summary page from ReAssessment message should be displayed as "No e-filing schedule has been uploaded"

    Examples: 
      | Test Case ID            | Description                                                                                                                                   | uname            | password | period  | year | msg                | penamt | efiledamount | NITVA             | nif       | nvat | tpayer             |
      | DRC_ATC_ReAssessment_01 | Validate the download functionality of  e-filing schedule Button when e-file schedule file is not uploaded by tax payer from tax payer portal | laxman.prajapati | admin    | January | 2019 | Saved Successfully | 500000 |          800 | 20181127030648745 | TestRefac | nvat | Automation User 10 |

  @345678212324_555_AssessedList_2875_2877
  Scenario Outline: Validate the Save,Previous button,Total Tiles,Additionality Liability column for No updation in manual assessment when efiling and pymt not done from reassessment
    Given The user has done the filing for the particular month
    When the assessemnt officer does the Reassessment for that particular month with "no" Updation for period"<period>"year"<year>"tpayer"<tpayer>"
    Then the officer is on the Payment Summary page for Liabilty Calculation and Payment Due for ReAssessment for period"<period>"year"<year>"tpayer"<tpayer>"
    Then user clicks on Prev button and it should be on ReAssessement Summary Tab
    Then Enter the penalty amount"<penamt>" in ReAssessment Liability
    Then Click on Save button on Payment Summary page and message is displayed"<msg>"
    Then click on Previous Button on Payment Summary page and user is on Manual ReAssessment Landing Screen
    When the assessemnt officer does the Reassessment for that particular month with "no" Updation for period"<period>"year"<year>"tpayer"<tpayer>"
    Then the officer is on the Payment Summary page for Liabilty Calculation and Payment Due for ReAssessment for period"<period>"year"<year>"tpayer"<tpayer>"
    Then Total Additional Liability tile should be displayed on ReAssessment as Total Assessed(FC) minus Total ReAssessed(FC)"<efiledamount>"
    Then Calculates the Additional Liability column for ReAssessment
    Then Calculates the Net Payable column of Paymnent Due table for ReAssessment

    Examples: 
      | Test Case ID            | Description                                                                                          | uname            | password | period   | year | msg                | penamt | efiledamount | NITVA             | nif       | msg                | tpayer             |
      | DRC_ATC_ReAssessment_03 | Validate the Save,Previous button,prev button,next button Total Tiles,Additionality Liability column | laxman.prajapati | admin    | February | 2019 | Saved Successfully | 500000 |       310,00 | 20181127030648745 | TestRefac | Saved Successfully | Automation User 10 |

  @tc342022_555_AssessedList_2875_2877
  Scenario Outline: Validate the prev button,next button for no updation in manual assessment when efiling and pymt not done from  reassessment
    Given The user has done the filing for the particular month
    When the assessemnt officer does the Reassessment for that particular month with "no" Updation for period"<period>"year"<year>"tpayer"<tpayer>"
    Then the officer is on the Payment Summary page for Liabilty Calculation and Payment Due for ReAssessment for period"<period>"year"<year>"tpayer"<tpayer>"
    Then user clicks on Prev button and it should be on ReAssessement Summary Tab
    Then user click on Next button on ReAsssessmnet Summary Tab and it should be on Payment Summary tab

    Examples: 
      | Test Case ID            | Description                                                                                              | uname            | password | period   | year | penamt | efiledamount | NITVA             | nif       | tpayer             |
      | DRC_ATC_ReAssessment_04 | Validate the prev button,next button for no updation in manual assessment when efiling and pymt not done | laxman.prajapati | admin    | February | 2019 | 500000 |       800,00 | 20181127030648745 | TestRefac | Automation User 10 |

  @ReAssessmentRaiseNotice_234525_AssessedList_2875_2877
  Scenario Outline: Validate the tax assessment officer is able to raise notice for a particular period for no updation in manual assessment when efiling and pymt not done
    Given The user has done the filing for the particular month
    When the assessemnt officer does the Reassessment for that particular month with "no" Updation for period"<period>"year"<year>"tpayer"<tpayer>"
    Then the officer is on the Payment Summary page for Liabilty Calculation and Payment Due for ReAssessment for period"<period>"year"<year>"tpayer"<tpayer>"
    Then user click Raise Notice button on Payment Summary page from ReAssessment module and Notice is generated as per the Liability Calculation Table and Payment Due Table
    Then After raise notice the records status is changed to "Re-Assessed" for period"<period>"year"<year>"tpayer"<tpayer>"

    Examples: 
      | Test Case ID            | Description                                                                                                                                             | uname            | password | period   | year | msg                | penamt | efiledamount | NITVA             | nif       | nvat | tpayer             |
      | DRC_ATC_ReAssessment_02 | Validate the tax assessment officer is able to raise notice for a particular period for no updation in manual assessment when efiling and pymt not done | ritesh.prajapati | admin    | January  | 2019 | Saved Successfully | 500000 |       800,00 | 20181127030648745 | TestRefac | nvat | Automation User 10 |
      | DRC_ATC_ReAssessment_02 | Validate the tax assessment officer is able to raise notice for a particular period for no updation in manual assessment when efiling and pymt not done | ritesh.prajapati | admin    | February | 2019 | Saved Successfully | 500000 |       800,00 | 20181127030648745 | TestRefac | nvat | Automation User 10 |
