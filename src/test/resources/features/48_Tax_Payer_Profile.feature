Feature: E-filing -> Filing -> Declaration with verification and confirmation of e-declaration

	Scenario Outline: Validate view Taxpayer details functionality internal portal
  	Given User is on Internal Portal "<TestcaseID>" "<Description>"
    When user selects Tax Payer Profile
    Then user selects value from filter drop down "<Filters>"
    And enters data in type here text box "<Value>"
    And user clicked on view button
    And user click on Associated risk button
    
     Examples: 
      | TestcaseID                          | Description     | Filters          | Value                |
      | Valid_TaxpayerProfile_Reg_Filter_01 | Filter Priority | NITVA            |    20181218065908288 |

	
  Scenario Outline: Validate Filter Functionality with valid data
    Given User is on Internal Portal "<TestcaseID>" "<Description>"
    When user selects Tax Payer Profile
    Then user selects value from filter drop down "<Filters>"
    And enters data in text box "<Value>" and clicked on search button
    And User see output "<Value>"

    Examples: 
      | TestcaseID                          | Description     | Filters          | Value                |
      | Valid_TaxpayerProfile_Reg_Filter_01 | Filter Priority | NITVA            |    20181218065908288 |
      | Valid_TaxpayerProfile_Reg_Filter_01 | Filter Priority | NIF              | 181218ABCDFE00100581 |
      | Valid_TaxpayerProfile_Reg_Filter_01 | Filter Priority | TaxPayer         | Arun111222           |
      | Valid_TaxpayerProfile_Reg_Filter_01 | Filter Priority | Business type    | Mining               |
      | Valid_TaxpayerProfile_Reg_Filter_01 | Filter Priority | TaxPayerCategory | Natural Person       |
      | Valid_TaxpayerProfile_Reg_Filter_01 | Filter Priority | Location         | Aketi                |

  @invalid_scenario
  Scenario Outline: Validate Filter Functionality with invalid data - internal portal
    Given User is on Internal Portal "<TestcaseID>" "<Description>"
    When user selects Tax Payer Profile
    Then user selects value from filter drop down "<Filters>"
    And enters data in text box "<Value>" and clicked on search button
    And User see mess "<mess>"

    Examples: 
      | TestcaseID                            | Description                | Filters  | Value       | mess             |
      | InValid_TaxpayerProfile_Reg_Filter_01 | Enter Special character    | NITVA    | !@!@$@@     | No records found |
      | InValid_TaxpayerProfile_Reg_Filter_02 | Enter alphanumeric         | NITVA    | Abd12345    | No records found |
    # | InValid_TaxpayerProfile_Reg_Filter_03 | Enter character with space | NITVA    | a b c d e f | No records found |
      | InValid_TaxpayerProfile_Reg_Filter_01 | Enter Special character    | NIF      | !@!@$@@     | No records found |
      | InValid_TaxpayerProfile_Reg_Filter_02 | Enter alphanumeric         | NIF      | Abd12345    | No records found |
      | InValid_TaxpayerProfile_Reg_Filter_03 | Enter character with space | NIF      | a b c d e f | No records found |
      | InValid_TaxpayerProfile_Reg_Filter_03 | Enter character with space | TaxPayer | unknown     | No records found |
      | InValid_TaxpayerProfile_Reg_Filter_03 | Enter character with space | Location | India       | No records found |