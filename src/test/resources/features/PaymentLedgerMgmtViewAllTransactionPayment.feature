#(DV-900)
@tag
Feature: Cash/Payment ledger management (View All - Statement of Transaction)

  @previous
  Scenario Outline: clicking on Previous button page in View all statement of transaction page redirects to VAT-efiling Dashboard.
    Given The user has logged in "<username>" "<password>"and has done the transaction before
    And clicks on View All - from Statement of Transaction table and can view all the transaction done in current financial Year
    When User Clicks on Previous button
    Then the user should be redirected to VAT e-Filing Dashboard page

    Examples: 
      | Test Case ID                | username             | password |
      | DRC_ATC_ViewAllStatement_01 | demo2@mailinator.com | demo1234 |

  @sorting
  Scenario Outline: Checking the Sorting functionality of each column
    Given The user has logged in "<username>" "<password>"and has done the transaction before
    And clicks on View All - from Statement of Transaction table and can view all the transaction done in current financial Year
    When user clicks on column "<colname>"
    Then results appear in ascending with date "<Adate>" period"<Aperiod>" particular"<Apart>" openbal"<Aopenbal>" vatliab"<Avatliab>" latefee"<Altfee>" interest"<Aint>" penalty"<Apen>" total"<Atotal>" should be displayed first row.
    And user clicks on Date column "<colname>"again
    Then results appear in descending with  with date "<Ddate>" period"<Dperiod>" particular"<Dpart>" openbal"<Dopenbal>" vatliab"<Dvatliab>" latefee"<Dltfee>" interest"<Dint>" penalty"<Dpen>" total"<Dtotal>" should be displayed first row.

    Examples: 
      | Test Case ID                | username             | password | colname         | Adate      | Aperiod        | Apart    | Aopenbal        | Avatliab        | Altfee | Aint | Apen | Atotal          | Ddate      | Dperiod        | Dpart    | Dopenbal        | Dvatliab        | Dltfee | Dint | Dpen | Dtotal          |
      | DRC_ATC_ViewAllStatement_02 | demo2@mailinator.com | demo1234 |                 | 16-07-2018 | February ,2018 | e-Filing |               0 |  -2131678577669 |      0 |    0 |    0 |  -2131678557669 | 1-08-2018  | January ,2018  | e-Filing | 207969641341797 |           20000 |      0 |    0 |    0 |           20000 |
      | DRC_ATC_ViewAllStatement_03 | demo2@mailinator.com | demo1234 | period          | 1-08-2018  | January ,2018  | e-Filing | 207969641341797 |           20000 |      0 |    0 |    0 |           20000 | 26-07-2018 | July ,2018     | e-Filing | 207969642654342 |        -1312545 |      0 |    0 |    0 | 207969642654342 |
      | DRC_ATC_ViewAllStatement_04 | demo2@mailinator.com | demo1234 | particulars     | 16-07-2018 | February ,2018 | e-Filing |               0 |  -2131678577669 |      0 |    0 |    0 |  -2131678557669 | 16-07-2018 | February ,2018 | e-Filing |               0 |  -2131678577669 |      0 |    0 |    0 |  -2131678577669 |
      | DRC_ATC_ViewAllStatement_05 | demo2@mailinator.com | demo1234 | opening balance | 17-07-2018 | May ,2018      | e-Filing | -92030357345657 | 299999999999997 |      0 |    0 |    0 | 207969642654340 | 26-07-2018 | July ,2018     | e-Filing | 207969642654342 |        -1312545 |      0 |    0 |    0 | 207969641341797 |
      | DRC_ATC_ViewAllStatement_06 | demo2@mailinator.com | demo1234 | vatliability    | 16-07-2018 | April ,2018    | e-Filing |  -2131578557670 | -89898778787987 |      0 |    0 |    0 | -92030357345657 | 17-07-2018 | May ,2018      | e-Filing | -92030357345657 | 299999999999997 |      0 |    0 |    0 | 207969642654340 |
      | DRC_ATC_ViewAllStatement_07 | demo2@mailinator.com | demo1234 | latefee         | 16-07-2018 | February ,2018 | e-Filing |               0 |  -2131678577669 |      0 |    0 |    0 |  -2131678557669 | 16-07-2018 | February ,2018 | e-Filing |               0 |  -2131678577669 |      0 |    0 |    0 |  -2131678557669 |
      | DRC_ATC_ViewAllStatement_08 | demo2@mailinator.com | demo1234 | interest        | 16-07-2018 | February ,2018 | e-Filing |               0 |  -2131678577669 |      0 |    0 |    0 |  -2131678557669 | 16-07-2018 | February ,2018 | e-Filing |               0 |  -2131678577669 |      0 |    0 |    0 |  -2131678557669 |
      | DRC_ATC_ViewAllStatement_09 | demo2@mailinator.com | demo1234 | penalty         | 16-07-2018 | February ,2018 | e-Filing |               0 |  -2131678577669 |      0 |    0 |    0 |  -2131678557669 | 16-07-2018 | February ,2018 | e-Filing |               0 |  -2131678577669 |      0 |    0 |    0 |  -2131678557669 |
      | DRC_ATC_ViewAllStatement_10 | demo2@mailinator.com | demo1234 | total           | 16-07-2018 | April ,2018    | e-Filing |  -2131578557670 | -89898778787987 |      0 |    0 |    0 | -92030357345657 | 23-07-2018 | June ,2018     | e-Filing | 207969642654340 |               2 |      0 |    0 |    0 | 207969642654342 |
