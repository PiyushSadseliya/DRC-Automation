Feature: User is on Sales Adjustement Page

  Scenario Outline: Sales Adjustement Page
	Given User is on DRC Internal Portal
	When  User Enter Valid : "<Username>" "<Password>"
  And   User Clicks on "SignIn" Button	
  Then  User Redirect to  "Dashboard" 
  					
  Examples: 
  | TestcaseID                           | Username         | Password |
  | Valid_DRC_ATC_LoginInternalPortal_01 | laxman.prajapati |admin    |


Scenario Outline: Validate the value displayed in Total Quantity above the sales adjustment table

Given User is on Assessment Page
And   User click on Assessment Tab
And   User click on drop down "<Period>"
And   User type "<Data>"
And   User click on type here
And   User click on manage setting drop down and click on Assess
And   User click on Adjustement icon in sales
And   User check quantity list 
And   User calculate quantity from list and check Total Quantity 
 
Examples:
|TestcaseID          |Period   |Data             |
|Manual_Assessment_01|PeriodJan|20180705073851634|

