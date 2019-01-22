Feature: SmokeSuite for Sprint6 Stories

  Scenario Outline: Fill E-filling data - TAX Payer Portal
    Given User is on given Page "<Page>"
    When User Select "<Period>" , "<Year>" , "<Filter>"from drop-down
    And Search for  Record from "<Search Element>"
    And Click on Search Button
    And Verify Record is Display or Not
    And Check For the status from "<Status>"
    And clicks on drp_select button
    And Click on  given "<Option>"
    And Click on sales_domestic icon , redirect to sales page and click on previous button
    And Click on sales_export icon , redirect to sales page and click on previous button
    And Click on sales_adjustment icon , redirect to sales page and click on previous button
    And Click on purchase_domestic icon , redirect to sales page and click on previous button
    And Click on purchase_export icon , redirect to sales page and click on previous button
    And Click on purchase_adjustment icon , redirect to sales page and click on previous button
    
    			
    Examples: 
      | Test Case Id | Description | Page              | Period  | Year | Filter    | Search Element | Status  |Option|
      | TC_Smoke_001 |             | Manual Assessment | January | 2018 | Tax Payer | bindi          | Pending |Assess|
