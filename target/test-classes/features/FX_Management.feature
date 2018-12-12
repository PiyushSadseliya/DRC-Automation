Feature: User is on FX Management Page Tax Officer

  @TC_01
  Scenario Outline: Validate the Base currency on all the pages of FX management module -fx taxofficer
    Given User is on FX Management "<TestcaseID>" "<Description>"
    And User see FX Management
    And User click on FX Management tab
    And User verify the Base currency on the FX management is Congolese France and its value is one
    And User click on update button
    And User see pop up and see base currency is 1
    And User click on cancel button on pop up
    And User click on Historical FX Rates button and verify the base currency

    Examples: 
      | TestcaseID               | Description          |
      | FX_Management_Officer_03 | Verify Base Currency |