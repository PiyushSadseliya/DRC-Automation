Feature: Payment Agreement document detailing the terms of the PA

  # status should be under review
  Scenario Outline: Validate the UI of Installment Schedule Screen
    Given User is on Payment Agreement document "<TestcaseID>" "<Description>"
    And User click on case management
    And User click on filter by on case management and click on "<filter>"
    And User Type id "<id>"
    And User click on search button
    And User click on manage drop down and click on view
    And User click on dropdown and click on request payment agreement
    And User click on submit button
    And User type initial amount "<Amount>"
    And User type amount "<amount>" in discount textbox
    And User type installment amount "<install>"
    And User click on Installement Frequency dropdown
    And User select from dropdown "<list>"
    And User click on Authorized Signatory
    And User select Authority "<autho>"
    And User click on submit button on payment agreement
    And User navigate to payment agreement notice page
    And User see UI of Payment Agreement page - Document
    # new case id generated
    And User see new case id for payment agreement
    And User see new agreement id

    Examples: 
      | TestcaseID                      | Description               | filter           | id              | Amount |
      | Payment_Agrement_Tax_Officer_01 | Verify the UI of the Page | drp_CaseID_Click | R18091900000002 |        |

  @TC_01_Payment_Agreement
  Scenario Outline: Validate Payment Agreement Page
    Given User is on Payment Agreement document "<TestcaseID>" "<Description>"
    And User click on case management
    And User click on filter by on case management and click on "<filter>"
    And User Type id "<id>"
    And User click on search button
    And User click on manage drop down and click on view
    And User click on continue button on case management
    And User click on dropdown and click on request payment agreement
    And User click on submit button
    And User type initial amount "<Amount>"
    And User type amount "<amount>" in discount textbox
    And User type installment amount "<install>"
    And User click on Installement Frequency dropdown
    And User select from dropdown "<list>"
    And User click on Authorized Signatory
    And User select Authority "<auth>"
    And User click on submit button on payment agreement
    And User Click on Action and click on PA Amended
    And User clcik on Submit button on payment agreement
    And User navigate to payment agreement notice page
    And User see Date field above barcode "<date>"
    And User validate barcode "<barcode>" format
    And User validate taxpayer name "<name>"
    And User validate taxpayer address "<address>"
    And User validate subject field "<paymentAgreement>"
    And User validate case id field format "<caseid>"
    And User validate payment agreement format "<payment>"
    And User validate payment period date
    And User Validate the Payment Amount Due
    And User validate Regards field officer name "<officer>"
    And User Validate the Payment Schedule field
    #And User verify Annexure A Page no date and installement amount
    And User verify Annexure A Page no
    And User verify Annexure A date
    And Use Verify Annexure A installement amount
    And User click on print button and new window is open
    # navigation issue dv-2349
    And User click on previous button and navigate to payment agrement landing screen

    Examples: 
      | TestcaseID                   | Description                           | filter           | id              | Amount | amount | install | list       | auth          | date        | barcode | name    | address | paymentAgreement  | caseid  | payment  | officer      |
      | Payment_Agrement_document_01 | Verify PAyment Agreeemnet Notice Page | drp_CaseID_Click | R18092000000018 |  10000 |  10000 | 33439.9 | drp_Weelky | drp_click_One | 20-Sep-2018 |  180920 | bmp pay | asd, a  | Payment Agreement | R180920 | PA180920 | Urvish Patel |
