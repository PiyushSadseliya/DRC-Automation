Feature: Payment of Tax


#@TC_01
Scenario Outline:  To Verify that VAT on Sales is Calculated Properly.
Given User is on E Declaration Page
And User click on VAT e-Filing Tab
And User click on collapse for the month "<month>" 
And User click on Pay "<pay>" for Payment Status
And User Validate VAT on sales is auto populated 
And User Logout


Examples:
| TestcaseID               | month |pay   |
| Vat Pay Functionality_01 | Feb   |JanPay|

#@TC_02
Scenario Outline: To Verify that VAT on Purchase is Calculated Properly
Given User is on E Declaration Page
And User click on VAT e-Filing Tab
And User click on collapse for the month "<month>" 
And User click on Pay "<pay>" for Payment Status
And User Validate VAT on Purchase is auto populated 
And User Logout


Examples:
| TestcaseID               | month |pay   |
| Vat Pay Functionality_02 | Feb   |JanPay|


#@TC_03
Scenario Outline: To verify that Net Tax Liabillity/Reimbursement is calculated properly.
Given User is on E Declaration Page
And User click on VAT e-Filing Tab
And User click on collapse for the month "<month>" 
And User click on Pay "<pay>" for Payment Status
And User Validate Net Tax Liabillity is auto populated 
And User Logout


Examples:
| TestcaseID               | month |pay   |
| Vat Pay Functionality_03 | Feb   |JanPay|


#@TC_04
Scenario Outline: To Verify that Net Amount Payable in Cash is calculated Properly
Given User is on E Declaration Page
And User click on VAT e-Filing Tab
And User click on collapse for the month "<month>" 
And User click on Pay "<pay>" for Payment Status
And User Validate Net amount payable in cash is auto populated 
And User Logout


Examples:
| TestcaseID               | month  |pay   |
| Vat Pay Functionality_04 | Feb    |JanPay|



#@TC_05
Scenario Outline: To Verify Net Reimbursement Carryforward is calculated properly
Given User is on E Declaration Page
And User click on VAT e-Filing Tab
And User click on collapse for the month "<month>" 
And User click on Pay "<pay>" for Payment Status
And User Validate Net Reimbursement Carryforward is auto populated 
And User Logout


Examples:
| TestcaseID               | month  |pay   |
| Vat Pay Functionality_05 | Feb    |JanPay|



#@TC_06
Scenario Outline: To verify that Interest on VAT Amount is calculated  properly
Given User is on E Declaration Page
And User click on VAT e-Filing Tab
And User click on collapse for the month "<month>" 
And User click on Pay "<pay>" for Payment Status
And User Validate Interest is auto populated 
And User Logout


Examples:
| TestcaseID               | month  |pay   |
| Vat Pay Functionality_06 | Feb    |JanPay|


#@TC_07
Scenario Outline: To verify that Late fees on VAT Amount is Calculated Properly.
Given User is on E Declaration Page
And User click on VAT e-Filing Tab
And User click on collapse for the month "<month>" 
And User click on Pay "<pay>" for Payment Status
And User Validate Late fees is auto populated 
And User Logout


Examples:
| TestcaseID               | month  |pay   |
| Vat Pay Functionality_07 | Feb    |JanPay|

#@TC_08
Scenario Outline: To verify that Penalty on VAT Amount is calculated properly.
Given User is on E Declaration Page
And User click on VAT e-Filing Tab
And User click on collapse for the month "<month>" 
And User click on Pay "<pay>" for Payment Status
And User Validate Penalty is auto populated 
And User Logout


Examples:
| TestcaseID               | month  |pay   |
| Vat Pay Functionality_08 | Feb    |JanPay|




#@TC_09
Scenario Outline:  Verify the Proceed button Functionality

Given User is on E Declaration Page
And User click on VAT e-Filing Tab
And User click on collapse for the month "<month>" for VAT amount
And User click on File button "<button>" and navigate to Payment of Tax page
And User click on Proceed to pay button 
And User see Payment Method page
And User Logout
 
 Examples:
| TestcaseID               | month | button |
| Vat Pay Functionality_09 | Feb   | JanPay |
 
# @TC_10
 Scenario Outline: Verify the Previous button Functionality

Given User is on E Declaration Page
And User click on VAT e-Filing Tab
And User click on collapse for the month "<month>" for VAT amount
And User click on File button "<button>" and navigate to Payment of Tax page
And User click on previous button and it navigate to dashboard
And User Logout  

 
 Examples:
| TestcaseID               | month | button |
| Vat Pay Functionality_10 | Feb   | JanPay |
 
 
 #Reimbursement of Previous need to tell manual team to update 
 #@TC_11
Scenario Outline: To verify that Reimbursement of Previous period is calculated properly.
Given User is on E Declaration Page
And User click on VAT e-Filing Tab
And User click on collapse for the month "<month>" 
And User click on Pay "<pay>" for Payment Status
And User Validate Reimbursement of Previous period is auto populated
And User Logout 


Examples:
| TestcaseID               | month  |pay   |
| Vat Pay Functionality_11 | Feb    |JanPay|
 
 # alread in e declaration
  #TC_12 Period Label
 # @TC_12
  Scenario Outline: Validate Period label 
    Given User is on E Declaration Page
    And User click on VAT e-Filing Tab
    And User click on collapse for the month "<month>"
    And User click on File button "<File>" and navigate to E-Declaration page
    And User check the period label for month
    And User Logout
  
  Examples: 
  | TestcaseID                         | month | File   | 
  | Vat E-Declaration Functionality_12 | Feb   | JanPay |
  
  
      
 
 ##################################################
 
 
 
 

 
 
  
 
 
 
 ######
  
 
 
 
 		
   