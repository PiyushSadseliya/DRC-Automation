Feature: User is on Manage VAT Registration 

Scenario Outline: Sorting for Dummy Value

Given user is in current page
And user click on Sorting "<sort>"
Then user see the result 

Examples:

|sort|
|asc|
