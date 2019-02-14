Feature: Payment Agreement document detailing the terms of the PA

  @TC_01_Payment_Agreement
  Scenario Outline: Validate Payment Agreement Page
    Given User is on Payment Agreement document "<TestcaseID>" "<Description>"
    
    And User see Date field above barcode "<date>"
    And User validate barcode "<barcode>" format
    And User validate taxpayer name "<name>"
    And User validate taxpayer address "<address>"
#   And User validate subject field "<paymentAgreement>"
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
 #   And User click on previous button and navigate to payment agrement landing screen

    Examples: 
      | TestcaseID                   | Description                           | filter           | id              | Amount | amount | install | list       | auth          | date        | barcode | name    | address | paymentAgreement  | caseid  | payment  | officer      |
      | Payment_Agrement_document_01 | Verify PAyment Agreeemnet Notice Page | drp_CaseID_Click | R18092000000018 |  10000 |  10000 | 33439.9 | drp_Weelky | drp_click_One | 20-Sep-2018 |  180920 | bmp pay | asd, a  | Payment Agreement | R180920 | PA180920 | Urvish Patel |
