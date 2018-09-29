Feature: Automate VAT Registration

Scenario Outline: Fill General Details Page of VAT Registration
Given User is on VAT Registration Dashboard
When User clicks on VAT Getting Started Guide CheckBox
And Clicks on Register for Vat button
And Clicks on Continue button of Instructions Page
Then User selects Taxpayer Category "<Category>"


Examples:
|Category|
|Government Entity|