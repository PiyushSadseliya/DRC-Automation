Feature: User is on VAT e-Filing Page

#TC_01 Ui Part


@TC_02
Scenario: Validate Total Liability amount displayed is reflected Zero when user completes the payment process which is displayed at Total liability section at dash board

Given User is on Vat e-Filing Page
And   User click on Pay button on Total Liability dashboard
And   User click on Net Banking Ratio and select bank from Other Bank
And   User click on Pay Now button 
And   User navigate to another page for payment 
And   User check at totol liability after the payment 

|TestcaseID                |Filters |liability      |
|E-File CurrentLiability_01|Year2018|207969642654342|

@TC_03
Scenario: Validate whether user can pay more amount than the current amount displayed at Total liability section and the amount is displayed as negative after payment
Given User is on Vat e-Filing Page
And   User click on Pay button on Total Liability dashboard
And   User click on Net Banking Ratio and select bank from Other Bank
And   User click on Pay Now button 

|TestcaseID                |Filters |liability      |
|E-File CurrentLiability_02|Year2018|207969642654342|

@TC_04
Scenario Outline: Validate if user changes the Financial year from drop down the total liability amount does not change

Given User is on Vat e-Filing Page
And   User click on Finicial year dropdown "<Filters>"
And   User see all month record from that year 
And   User check current liability "<liability>" 

Examples:
|TestcaseID                |Filters |liability      |
|E-File CurrentLiability_03|Year2018|207969642654342|

@TC_05
Scenario: Validate the Help Icon button on the Total Liability on e-Filing Landing Screen

Given User is on Vat e-Filing Page
And User click on help button
And User see pop up for help button

|TestcaseID                |
|E-File CurrentLiability_04|

# not able to understand 
@TC_06
Scenario: Validate the amount displayed in Total liability is calculated based on all the pending months amount late fee interest and penalty

Given User is on Vat e-Filing Page


|TestcaseID                |
|E-File CurrentLiability_05|



 


@TC_07
Scenario: Validate after payment through net banking and if server issue or network issue occurs and the date is not reflected in system
Given User is on Vat e-Filing Page
And   User click on Pay button on Total Liability dashboard
And   User click on Over the Counter radio button
And   User click on Net Banking Ratio and select bank from Other Bank
And   User click on Pay Now button 
And   User check the messasge for payment

|TestcaseID                |
|E-File CurrentLiability_06|


@TC_08
Scenario: Validate after payment through over the counter the bank authority missed to update the date payment date in system

Given User is on Vat e-Filing Page
And   User click on Pay button on Total Liability dashboard
And   User click on Over the Counter radio button 
And   User click on Print button 
And   User enter the details in downloaded challan form
And   User Visit the relavent bank and proceed for payment at the counter

|TestcaseID                |
|E-File CurrentLiability_07|
