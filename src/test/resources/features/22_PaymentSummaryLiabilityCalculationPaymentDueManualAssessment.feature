#DV_2877
@LiablityCalculation
Feature: Manual Assessment- Payment summary for Liability Calculation and Payment due and Raise notice

  @tc1920 @555

  Scenario Outline: Validate the prev button for no updation in manual assessment when efiling and pymt not done 

    Given The user has done the filing for the particular month
    When the assessemnt officer does the assessment for that particular month with "yes" Updation for period"<period>"year"<year>"tpayer"<tpayer>"
    Then the officer is on the Payment Summary page for Liabilty Calculation and Payment Due
    Then user clicks on Prev button and it should be on Assessement Summary Tab
    Then user click on Next button on Asssessmnet Summary Tab and it should be on Payment Summary tab

    Examples: 
      | Test Case ID          | Description                                                                                              | uname            | password | period  | year | msg                | penamt | efiledamount | NITVA | tpayer     |
      | DRC_ATC_Assessment_01 | Validate the prev button,next button for no updation in manual assessment when efiling and pymt not done | laxman.prajapati | admin    | January | 2018 | Saved Successfully | 500000 |       800,00 |       | Arun111223 |

  @567 @555
  Scenario Outline: Validate the Save,Previous button,Total Tiles,Additionality Liability column for No updation in manual assessment when efiling and pymt not done
    Given The user has done the filing for the particular month
    When the assessemnt officer does the assessment for that particular month with "yes" Updation for period"<period>"year"<year>"tpayer"<tpayer>"
    Then the officer is on the Payment Summary page for Liabilty Calculation and Payment Due
    Then user clicks on Prev button and it should be on Assessement Summary Tab
    Then enter the penalty amount"<penamt>"
    Then Clicks on Save button on Payment Summary page and message is displayed"<msg>"
    Then click on Previous Button on Payment Summary page and user is on Manual Assessment Landing Screen
    When the assessemnt officer does the assessment for that particular month with "yes" Updation for period"<period>"year"<year>"tpayer"<tpayer>"
    Then the officer is on the Payment Summary page for Liabilty Calculation and Payment Due
    Then Total Additional Liability tile should be displayed as Total Assessed(FC) minus Total e-declaration(FC)"<efiledamount>""<penamt>""<ltfee>"
    Then Calculates the Additional Liability column
    Then Calculates the Net Payable column of Paymnent Due table

    Examples: 
      | Test Case ID          | Description                                                                                          | uname            | password | period  | year | msg                | penamt | efiledamount | NITVA | tpayer     | ltfee      |
      | DRC_ATC_Assessment_02 | Validate the Save,Previous button,prev button,next button Total Tiles,Additionality Liability column | laxman.prajapati | admin    | January | 2018 | Saved Successfully |  50000 |            0 |       | Arun111223 | 500.000,00 |

  @tc17
  Scenario Outline: Validate the download functionality of  e-filing schedule Button when e-file schedule file is not uploaded by tax paye
    Given The user has done the filing for the particular month
    When the assessemnt officer does the assessment for that particular month with "no" Updation for period"<period>"year"<year>"tpayer"<tpayer>"
    Then the officer is on the Payment Summary page for Liabilty Calculation and Payment Due
    Then User click on download button message should be displayead as "No e-filing schedule has been uploaded"
  

    Examples: 
      | Test Case ID          | Description                                                                                                                                   | uname            | password | period | year | msg                | penamt | efiledamount | NITVA             | tpayer     |
      | DRC_ATC_Assessment_03 | Validate the download functionality of  e-filing schedule Button when e-file schedule file is not uploaded by tax payer from tax payer portal | laxman.prajapati | admin    | March  | 2018 | Saved Successfully | 50000 |       800,00 | 20181127030648745 | Arun111223 |

  @RaiseNotice
  Scenario Outline: Validate the tax assessment officer is able to raise notice for a particular period for no updation in manual assessment when efiling and pymt not done
    Given The user has done the filing for the particular month
    When the assessemnt officer does the assessment for that particular month with "yes" Updation for period"<period>"year"<year>"tpayer"<tpayer>"
    Then the officer is on the Payment Summary page for Liabilty Calculation and Payment Due
    Then user clicks on Raise notice button and Notice is generated as per the Liability Calculation Table and Payment Due Table

    Examples: 
      | Test Case ID          | Description                                                                                                                                             | uname            | password | period   | year | penamt | efiledamount | NITVA | tpayer     |
      | DRC_ATC_Assessment_04 | Validate the tax assessment officer is able to raise notice for a particular period for no updation in manual assessment when efiling and pymt not done | laxman.prajapati | admin    | January  | 2018 | 500000 |         0,00 |       | Arun111223 |
			| DRC_ATC_Assessment_05 | Validate the tax assessment officer is able to raise notice for a particular period for no updation in manual assessment when efiling and pymt not done | laxman.prajapati | admin    | March    | 2018 | 500000 |         0,00 |       | Arun111223 |
