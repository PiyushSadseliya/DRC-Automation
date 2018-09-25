Feature: Installment Schedule Pop up to show the dates of the installments and the amount payable in each installment

  #after generating notice of payment agreement
  @TC_01_UI_Installment_Schedule_Screen
  Scenario Outline: Validate the UI of Installment Schedule Screen
    Given User is on Installment Schedule Screen "<TestcaseID>" "<Description>"
    And User click on Case Management
    And User click on filter by on case management and click on "<filter>"
    And User Type id "<id>"
    And User click on search button
    And User click on manage drop down and click on view
    And User click on continue button on case management
    And User type initial amount "<Amount>"
    And User type amount "<dis>" in discount textbox
    And User type installment amount "<install>"
    And User click on Installement Frequency dropdown
    And User select from dropdown "<list>"
    And User click on installement scedule button
    And User see ui of installement scedule pop up

    #And User click on dropdown action and click on request payment agreement
    #And User click on submit button on case management
    Examples: 
      | TestcaseID                    | Description                                 | filter           | id              | Amount | dis   | install | list       |
      | Installment_Schedule_PopUp_01 | Verifing UI of Installement Schedule screen | drp_CaseID_Click | R18092000000013 |  10000 | 10000 |   30000 | drp_Weelky |

  @mix
  Scenario Outline: Validate installment amount ,date ,number are in acending order, difference of date ,same installement amount,toolti for close button
    Given User is on Installment Schedule Screen "<TestcaseID>" "<Description>"
    And User click on Case Management
    And User click on filter by on case management and click on "<filter>"
    And User Type id "<id>"
    And User click on search button
    And User click on manage drop down and click on view
    #  And User click on dropdown action and click on request payment agreement
    #And User click on submit button on case management
    And User click on continue button on case management
    # 03 will come in previous screen
    And User see installement scedule button is disable
    And User type initial amount "<Amount>"
    And User type amount "<dis>" in discount textbox
    And User type installment amount "<install>"
    And User click on Installement Frequency dropdown
    And User select from dropdown "<list>"
    And User click on installement scedule button
    # tc 07
    And Use validate number are in acending order
    And User validate same date as it on installement date "<Samedate>"
    And User see difference of two date "<date1>" and "<date2>"
    And User validate installment amount "<calculated>" same for secound install also "<secound>"
    # tc 11
    And User Validate the tooltip for Close icon
    # tc 09
    And User Validate date format "<dateFormat>"

    # tc 06
    #  And User click on close icon buttton
    Examples: 
      | TestcaseID                    | Description                                                                                                                           | filter           | id              | Amount | dis   | install | list       | dateFormat  | Samedate    | date1       | date2       | calculated | secound |
      | Installment_Schedule_PopUp_02 | Validate installment amount ,date ,number are in acending order, difference of date ,same installement amount,toolti for close button | drp_CaseID_Click | R18092000000013 |  10000 | 10000 |   30000 | drp_Weelky | 28-Sep-2018 | 28-Sep-2018 | 28-Sep-2018 | 05-Oct-2018 |      30000 |   30000 |
