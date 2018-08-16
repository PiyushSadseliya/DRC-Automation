Feature: VAT Registration Validation

Scenario Outline: Fill VAT Registration form and check validation message 
    Given User is on VAT Registration Dashboard for adding extra data
    When User clicks on VAT Getting Started Guide CheckBox from Dashboard
    And Clicks on Register for Vat button from Dashboard
    And Clicks on Continue button of Instructions Page redirected from dashboard
    Then Selects Taxpayer Category "<Category>" and Sub Category "<Sub Category>"
    And user click on continue button
    And Check Validation message for General details page.
    
    
