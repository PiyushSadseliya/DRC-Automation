##DV_2877
@tag
Feature: Manual Assessment- Payment summary for Liability Calculation and Payment due and Raise notice

  
  @tc1820
  Scenario Outline: Validate the prev button,next button for no updation in manual assessment when efiling and pymt not done
    Given The user has done the filing for the particular month
    When the assessemnt officer does the assessment for that particular month with "no" Updation for period"<period>"year"<year>"nitva"<NITVA>"
    Then the officer is on the Payment Summary page for Liabilty Calculation and Payment Due
    Then the next button on manual assessemnt page should be disabled
    Then user clicks on Prev button and it should be on Assessement Summary Tab
    Then user click on Next button on Asssessmnet Summary Tab and it should be on Payment Summary tab
    Then the next button on manual assessemnt page should be disabled

    Examples: 
      | Test Case ID              | Description                                                                                          | uname            | password | period  | year | msg                | penamt | efiledamount | NITVA             | nif       | nvat | vatcredit | refundcredit | vatcarryfwd | vatonexternalyproc | vattparty | inter | ltfee | penamt | amounttopay | avatlaiab | aint | altfee> | apenalty | Aamount | Pliability | pint | pltfee | ppenalty | pamount | Nliability | Nint | Nltfee | Npenalty> | Namount | msg                |
      | DRC_ATC_TaxBillPayment_02 | Validate the Save,Previous button,prev button,next button Total Tiles,Additionality Liability column | ritesh.prajapati | admin    | January | 2018 | Saved Successfully | 500000 |          800 | 20181011030459642 | power1234 | nvat | vatcredit | refundcredit | vatcarryfwd | vatonexternalyproc | vattparty | inter | ltfee | penamt | amounttopay | avatlaiab | aint | altfee> | apenalty | Aamount | Pliability | pint | pltfee | ppenalty | pamount | Nliability | Nint | Nltfee | Npenalty> | Namount | Saved Successfully |

  @567
  Scenario Outline: Validate the Save,Previous button,Total Tiles,Additionality Liability column for No updation in manual assessment when efiling and pymt not done
    Given The user has done the filing for the particular month
    When the assessemnt officer does the assessment for that particular month with "no" Updation for period"<period>"year"<year>"nitva"<NITVA>"
    Then the officer is on the Payment Summary page for Liabilty Calculation and Payment Due
    Then user clicks on Prev button and it should be on Assessement Summary Tab
    Then enter the penalty amount"<penamt>"
    Then Clicks on Save button on Payment Summary page and message is displayed"<msg>"
    Then click on Previous Button on Payment Summary page and user is on Manual Assessment Landing Screen
    When the assessemnt officer does the assessment for that particular month with "no" Updation for period"<period>"year"<year>"nitva"<NITVA>"
    Then the officer is on the Payment Summary page for Liabilty Calculation and Payment Due
    Then Total Additional Liability tile should be displayed as Total Assessed(FC) minus Total e-declaration(FC)"<efiledamount>"
    Then Calculates the Additional Liability column
    Then Calculates the Net Payable column of Paymnent Due table

    Examples: 
      | Test Case ID              | Description                                                                                          | uname            | password | period  | year | msg                | penamt | efiledamount | NITVA             | nif       | nvat | vatcredit | refundcredit | vatcarryfwd | vatonexternalyproc | vattparty | inter | ltfee | penamt | amounttopay | avatlaiab | aint | altfee> | apenalty | Aamount | Pliability | pint | pltfee | ppenalty | pamount | Nliability | Nint | Nltfee | Npenalty> | Namount | msg                |
      | DRC_ATC_TaxBillPayment_02 | Validate the Save,Previous button,prev button,next button Total Tiles,Additionality Liability column | ritesh.prajapati | admin    | January | 2018 | Saved Successfully | 500000 |          800 | 20181011030459642 | power1234 | nvat | vatcredit | refundcredit | vatcarryfwd | vatonexternalyproc | vattparty | inter | ltfee | penamt | amounttopay | avatlaiab | aint | altfee> | apenalty | Aamount | Pliability | pint | pltfee | ppenalty | pamount | Nliability | Nint | Nltfee | Npenalty> | Namount | Saved Successfully |

  @tc17
  Scenario Outline: Validate the download functionality of  e-filing schedule Button when e-file schedule file is not uploaded by tax payer from tax payer portal
    Given The user has done the filing for the particular month
    When the assessemnt officer does the assessment for that particular month with "no" Updation for period"<period>"year"<year>"nitva"<NITVA>"
    Then the officer is on the Payment Summary page for Liabilty Calculation and Payment Due
    Then User click on download button message should be displayead as "No e-filing schedule has been uploaded"

    Examples: 
      | Test Case ID              | Description                                                                                                                                   | uname            | password | period  | year | msg                | penamt | efiledamount | NITVA             | nif       | nvat | vatcredit | refundcredit | vatcarryfwd | vatonexternalyproc | vattparty | inter | ltfee | penamt | amounttopay | avatlaiab | aint | altfee> | apenalty | Aamount | Pliability | pint | pltfee | ppenalty | pamount | Nliability | Nint | Nltfee | Npenalty> | Namount | msg                |
      | DRC_ATC_TaxBillPayment_02 | Validate the download functionality of  e-filing schedule Button when e-file schedule file is not uploaded by tax payer from tax payer portal | ritesh.prajapati | admin    | January | 2018 | Saved Successfully | 500000 |          800 | 20181011030459642 | power1234 | nvat | vatcredit | refundcredit | vatcarryfwd | vatonexternalyproc | vattparty | inter | ltfee | penamt | amounttopay | avatlaiab | aint | altfee> | apenalty | Aamount | Pliability | pint | pltfee | ppenalty | pamount | Nliability | Nint | Nltfee | Npenalty> | Namount | Saved Successfully |

  @RaiseNotice
  Scenario Outline: Validate the tax assessment officer is able to raise notice for a particular period for no updation in manual assessment when efiling and pymt not done
    Given The user has done the filing for the particular month
    When the assessemnt officer does the assessment for that particular month with "no" Updation for period"<period>"year"<year>"nitva"<NITVA>"
    Then the officer is on the Payment Summary page for Liabilty Calculation and Payment Due
    Then user clicks on Raise notice button and Notice is generated as per the Liability Calculation Table and Payment Due Table

    Examples: 
      | Test Case ID          | Description                                                                                                                                             | uname            | password | period  | year | msg                | penamt | efiledamount | NITVA             | nif       | nvat | vatcredit | refundcredit | vatcarryfwd | vatonexternalyproc | vattparty | inter | ltfee | penamt | amounttopay | avatlaiab | aint | altfee> | apenalty | Aamount | Pliability | pint | pltfee | ppenalty | pamount | Nliability | Nint | Nltfee | Npenalty> | Namount | msg                |
      | DRC_ATC_Assessment_02 | Validate the tax assessment officer is able to raise notice for a particular period for no updation in manual assessment when efiling and pymt not done | ritesh.prajapati | admin    | January | 2018 | Saved Successfully | 500000 |          800 | 20181011030459642 | power1234 | nvat | vatcredit | refundcredit | vatcarryfwd | vatonexternalyproc | vattparty | inter | ltfee | penamt | amounttopay | avatlaiab | aint | altfee> | apenalty | Aamount | Pliability | pint | pltfee | ppenalty | pamount | Nliability | Nint | Nltfee | Npenalty> | Namount | Saved Successfully |
