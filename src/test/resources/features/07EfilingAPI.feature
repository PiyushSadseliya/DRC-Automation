@E_FilingAPI
Feature: API Filing Records

  @E_filingAPI
  Scenario Outline: Filing POST API temp logout
    Given The User has obtained the NITVA
    Then For efiling Records user hits API"<email>"

    Examples: 
      | email                       |
      | RegressionMarchde@mt2015.com  |
