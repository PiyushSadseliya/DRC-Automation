Feature: User is on Manage VAT Registration 

Scenario Outline: Sorting for Dummy Value for dropdown and count 

#Given user is in current page
#And user click on Dropdown "<dropdown>"

Given User is on Internal Portal
And User Click Dropdown "<Value>"
Then user see the page result 

Examples:
|Value|
|20|
|15|
|25|
|50|
|100|
