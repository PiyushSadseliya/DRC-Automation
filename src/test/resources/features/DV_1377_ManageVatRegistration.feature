Feature: User is on Manage VAT Registration

  @ManageVATRegistration_DV-1377
    Scenario: Validate the Manual Assessment dashboard page All clicking compoment
      Given User is on Assessment Page
     And User click on windows icon
     And User enter username and password and click on login and see dashboard
  
  @FilterByDropdown_Piority
  Scenario Outline: Validate Filter Functionality for Dropdown 
    Given User is on Internal Portal "<TestcaseID>" "<Description>"
    When user selects Manage Vat Registraion
    Then user selects value from filter drop down "<Filters>"
    And enters data in type here text box "<Value>"
    And User see piority "<Value>"  
   
    Examples: 
      | TestcaseID                     | Description     | Filters  | Value |
      | Valid_Manage_VAT_Reg_Filter_01 | Filter Priority | Priority |    1  |

  @FilterByDropdown_Piority_invalid_data_DV-1377
  Scenario Outline: Validate Filter Functionality for Dropdown
    Given User is on Internal Portal "<TestcaseID>" "<Description>"
    When user selects Manage Vat Registraion
    Then user selects value from filter drop down "<Filters>" for piority
    And enters data in type here text box "<Value>" 
    And User see mess "<mess>"

    Examples: 
      | TestcaseID                         | Description                | Filters  | Value       | mess             |
      | InValid_Manage_VAT_Reg_Filter_P_01 | Enter Special character    | Priority | !@!@$@@     | No records found |
      | InValid_Manage_VAT_Reg_Filter_P_02 | Enter alphanumeric         | Priority | Abd12345    | No records found |
      | InValid_Manage_VAT_Reg_Filter_P_03 | Enter character with space | Priority | a b c d e f | No records found |

  #TC_02,TC_03 Name of business, Taxpayer sub Category,Location,Last Updated Date, Tax officer, Status are all common
  @FilterByDropdown_DV-1377
  Scenario Outline: Validate Filter Functionality for Dropdown
    Given User is on Internal Portal "<TestcaseID>" "<Description>"
    When user selects Manage Vat Registraion
    Then user selects value from filter drop down "<Filters>"
    And enters data in type here text box "<Value>"

    Examples: 
      | TestcaseID                     | Description              | Filters           | Value       |
      | Valid_Manage_VAT_Reg_Filter_01 | Filter NIF               | NIF               |   123456789 |
      | Valid_Manage_VAT_Reg_Filter_02 | Filter Applicant Name    | Applicant Name    | gfdgfdgdfgd |
      | Valid_Manage_VAT_Reg_Filter_03 | Filter Taxpayer Category | Taxpayer Category | Individual  |
      | Valid_Manage_VAT_Reg_Filter_04 | Filter Location          | Location          | Gbadolite   |
      | Valid_Manage_VAT_Reg_Filter_05 | Filter Updated Date      | Updated Date      | 10/17/2018  |
      | Valid_Manage_VAT_Reg_Filter_06 | Filter Tax Officer       | Tax Officer       | Jitesh      |
      | Valid_Manage_VAT_Reg_Filter_07 | Filter Status Assigned   | Status            | Assigned    |


  @FilterByDropdown_NIF_invalid_data_DV-1377
  Scenario Outline: Validate Filter Functionality for Dropdown
    Given User is on Internal Portal "<TestcaseID>" "<Description>"
    When user selects Manage Vat Registraion
    Then user selects value from filter drop down "<Filters>" for nif
    And enters data in type here text box "<Value>"
    And User see mess "<mess>"

    Examples: 
      | TestcaseID                         | Description                | Filters | Value       | mess             |
      | InValid_Manage_VAT_Reg_Filter_N_01 | Enter Special character    | NIF     | !@!@$@@     | No records found |
      | InValid_Manage_VAT_Reg_Filter_N_02 | Enter character with space | NIF     | a b c d e f | No records found |

  @FilterByDropdown_ApplicantName_invalid_data_DV-1377
  Scenario Outline: Validate Filter Functionality for Dropdown
    Given User is on Internal Portal "<TestcaseID>" "<Description>"
    When user selects Manage Vat Registraion
    Then user selects value from filter drop down "<Filters>" for Applicant Name
    And enters data in type here text box "<Value>"
    And User see mess "<mess>"

    Examples: 
      | TestcaseID                          | Description                | Filters        | Value       | mess             |
      | InValid_Manage_VAT_Reg_Filter_AN_01 | Enter Special character    | Applicant Name | !@!@$@@     | No records found |
      | InValid_Manage_VAT_Reg_Filter_AN_02 | Enter character with space | Applicant Name | a b c d e f | No records found |
      | InValid_Manage_VAT_Reg_Filter_AN_03 | Enter alphanumeric         | Applicant Name | Abd123454561  | No records found |

  @FilterByDropdown_TaxpayerCategory_invalid_data_DV-1377
  Scenario Outline: Validate Filter Functionality for Dropdown
    Given User is on Internal Portal "<TestcaseID>" "<Description>"
    When user selects Manage Vat Registraion
    Then user selects value from filter drop down "<Filters>" for Taxpayer Category
    And enters data in type here text box "<Value>"
    And User see mess "<mess>"

    Examples: 
      | TestcaseID                          | Description                | Filters           | Value       | mess             |
      | InValid_Manage_VAT_Reg_Filter_TC_01 | Enter Special character    | Taxpayer Category | !@!@$@@     | No records found |
      | InValid_Manage_VAT_Reg_Filter_TC_02 | Enter character with space | Taxpayer Category | a b c d e f | No records found |
      | InValid_Manage_VAT_Reg_Filter_TC_03 | Enter alphanumeric         | Taxpayer Category | Abd123454561  | No records found |

  @FilterByDropdown_Location_invalid_data_DV-1377
  Scenario Outline: Validate Filter Functionality for Dropdown
    Given User is on Internal Portal "<TestcaseID>" "<Description>"
    When user selects Manage Vat Registraion
    Then user selects value from filter drop down "<Filters>" for Location
    And enters data in type here text box "<Value>"
    And User see mess "<mess>"

    Examples: 
      | TestcaseID                         | Description                | Filters  | Value       | mess             |
      | InValid_Manage_VAT_Reg_Filter_L_01 | Enter Special character    | Location | !@!@$@@     | No records found |
      | InValid_Manage_VAT_Reg_Filter_L_02 | Enter character with space | Location | a b c d e f | No records found |
      | InValid_Manage_VAT_Reg_Filter_L_03 | Enter alphanumeric         | Location | Abd123454561  | No records found |

  @FilterByDropdown_UpdatedDate_invalid_data_DV-1377
  Scenario Outline: Validate Filter Functionality for Dropdown
    Given User is on Internal Portal "<TestcaseID>" "<Description>"
    When user selects Manage Vat Registraion
    Then user selects value from filter drop down "<Filters>" for Updated Date
    And enters data in type here text box "<Value>"
    And User see mess "<mess>"

    Examples: 
      | TestcaseID                          | Description                | Filters      | Value       | mess             |
      | InValid_Manage_VAT_Reg_Filter_UD_01 | Enter Special character    | Updated Date | !@!@$@@     | No records found |
      | InValid_Manage_VAT_Reg_Filter_UD_02 | Enter character with space | Updated Date | a b c d e f | No records found |
      | InValid_Manage_VAT_Reg_Filter_UD_03 | Enter alphanumeric         | Updated Date | Abd12345      | No records found |

  @FilterByDropdown_TaxOfficer_invalid_data_DV-1377
  Scenario Outline: Validate Filter Functionality for Dropdown
    Given User is on Internal Portal "<TestcaseID>" "<Description>"
    When user selects Manage Vat Registraion
    Then user selects value from filter drop down "<Filters>" for Tax Officer
    And enters data in type here text box "<Value>"
    And User see mess "<mess>"

    Examples: 
      | TestcaseID                          | Description                | Filters     | Value       | mess             |
      | InValid_Manage_VAT_Reg_Filter_TO_01 | Enter Special character    | Tax Officer | !@!@$@@     | No records found |
      | InValid_Manage_VAT_Reg_Filter_TO_02 | Enter character with space | Tax Officer | a b c d e f | No records found |
      | InValid_Manage_VAT_Reg_Filter_TO_03 | Enter alphanumeric         | Tax Officer | Abd123454561  | No records found |

  @FilterByDropdown_Status_invalid_data_DV-1377
  Scenario Outline: Validate Filter Functionality for Dropdown
    Given User is on Internal Portal "<TestcaseID>" "<Description>"
    When user selects Manage Vat Registraion
    Then user selects value from filter drop down "<Filters>" for Status
    And enters data in type here text box "<Value>"
    And User see mess "<mess>"

    Examples: 
      | TestcaseID                         | Description                | Filters | Value       | mess             |
      | InValid_Manage_VAT_Reg_Filter_S_01 | Enter Special character    | Status  | !@!@$@@     | No records found |
      | InValid_Manage_VAT_Reg_Filter_S_02 | Enter character with space | Status  | a b c d e f | No records found |
      | InValid_Manage_VAT_Reg_Filter_S_03 | Enter alphanumeric         | Status  | Abd12345      | No records found |

  # filter will removed from all the screen 
  #TC_04
  #  @FilterByAll
  #  Scenario Outline: Validate Filter Functionality for All
  #    Given User is on Internal Portal "<TestcaseID>" "<Description>"
  #    When user selects Manage Vat Registraion
  #    Then user selects All from filter dropdown
  #    And enters data in type here text box "<Value>"
  #    And User see value "<Value>"
  #    Examples:
  #      | TestcaseID                         | Description    | Value    |
  #      | Valid_Manage_VAT_Reg_Filter_All_01 | enter Rejected | Rejected |
  
 #  @FilterByAll_invalid_DV-1377
 # Scenario Outline: Validate Filter Functionality for All
 #   Given User is on Internal Portal "<TestcaseID>" "<Description>"
 #   When user selects Manage Vat Registraion
 #   Then user selects All from filter dropdown select
 #   And enters data in type here text box "<Value>"
 #   And User see mess "<mess>"

 #   Examples: 
 #     | TestcaseID                           | Description                | Value       | mess             |
 #     | InValid_Manage_VAT_Reg_Filter_All_01 | Enter Special character    | !@!@$@@     | No records found |
 #     | InValid_Manage_VAT_Reg_Filter_All_02 | Enter character with space | a b c d e f | No records found |
 #     | InValid_Manage_VAT_Reg_Filter_All_03 | Enter alphanumeric         | Abd12345    | No records found |

  @TC_06_TC_05_ManageVATRegistration_DV-1377
  Scenario Outline: Validate Admin/Supervisor is able to filter data and then download the pdf/excel file
    Given User is on Internal Portal "<TestcaseID>" "<Description>"
    When user selects Manage Vat Registraion
    Then user selects value from filter drop down "<Filters>"
    And enters data in type here text box "<Value>"
    Then clicks on download pdf button
    And user clicks on download and click on Excel button

    Examples: 
      | TestcaseID                        | Description                        | Filters  | Value |
      | Valid_Manage_VAT_Reg_DonPDF_05_06 | Filter with download PDF and Excel | Priority |    10 |
    
  
  @TC_07_ManageVATRegistration_DV-1377
  Scenario Outline: User Navigate to particular page
    Given User is on Internal Portal "<TestcaseID>" "<Description>"
    When user selects Manage Vat Registraion
    And User click on page "<ClickPage>" and check page"<CheckPage>" "<option>"
    And User click on Dashboard

    Examples: 
      | TestcaseID                       | Description                | Period        | ClickPage       | CheckPage       | option          |
      | Valid_Manage_VAT_Reg_Navigate_01 | validating last and right  | txt_PeriodJan | lbl_AssLast     | lbl_AssestRight | last and right  |
      | Valid_Manage_VAT_Reg_Navigate_02 | validating last and left   | txt_PeriodJan | lbl_AssLast     | lbl_AssestLeft  | last and left   |
      | Valid_Manage_VAT_Reg_Navigate_03 | validating right and left  | txt_PeriodJan | lbl_AssestRight | lbl_AssestLeft  | right and left  |
      | Valid_Manage_VAT_Reg_Navigate_04 | validating right and first | txt_PeriodJan | lbl_AssestRight | lbl_AssFirst    | right and first |
      | Valid_Manage_VAT_Reg_Navigate_05 | validating first and left  | txt_PeriodJan | lbl_AssFirst    | lbl_AssestLeft  | first and left  |
      | Valid_Manage_VAT_Reg_Navigate_06 | validating first and first | txt_PeriodJan | lbl_AssFirst    | lbl_AssFirst    | first and first |

  #TC_08
  @ShowEnteries_ManageVATRegistration_DV-1377
  Scenario Outline: Validate User Click on Show Enteries
    Given User is on Internal Portal "<TestcaseID>" "<Description>"
    When user selects Manage Vat Registraion
    And User Click Dropdown "<Value>"
    Then user see the page result

    Examples: 
      | TestcaseID                   | Description      | Value |
      | Valid_Manage_VAT_Reg_Show_01 | Show 20 Entries  |    20 |
      | Valid_Manage_VAT_Reg_show_02 | Show 15 Entries  |    15 |
      | Valid_Manage_VAT_Reg_Show_03 | Show 25 Entries  |    25 |
      | Valid_Manage_VAT_Reg_Show_04 | Show 50 Entries  |    50 |
      | Valid_Manage_VAT_Reg_Show_05 | Show 100 Entries |   100 |

  #TC_09
  @StatusChangePriority_ManageVATRegistration_DV-1377
  Scenario Outline: Validate Review in Progress from Filter status and user select Change Priority
    Given User is on Internal Portal "<TestcaseID>" "<Description>"
    When user selects Manage Vat Registraion
    Then user selects value from filter drop down "<Filters>"
    And enters data in type here text box "<Value>"
    And user click on Change Priority
    And user selects priority from priority list "<ChangePriority>"
    And click on right tick
    Then Priority is Changed and toast message display

    Examples: 
      | TestcaseID                             | Description          | Filters | Value    | ChangePriority |
      | Valid_Manage_VAT_Reg_ChangePriority_01 | user change priority | Status  | assigned | Ten            |

  #TC_10
  @StatusReassign_ManageVATRegistration_DV-1377
  Scenario Outline: Validate Review in Progress from Filter status and user select Reassign
    Given User is on Internal Portal "<TestcaseID>" "<Description>"
    And enters data in type here text box "<Value>"
    And user click on Reassign
    And select another Tax Officier fron the list "<ChangeOfficer>"
    And click on right tick for reassign
    Then Tax Officier Changed and toast message display

    Examples: 
      | TestcaseID                       | Description         |  Value              | ChangeOfficer           |
      | Valid_Manage_VAT_Reg_Reassign_01 | user change officer |  Review in Progress | drp_SelectTaxOfficerOne |

  #TC_11 need to change
  @RejectedPopup_ManageVATRegistration_DV-1377
  Scenario Outline: Validate Pop up when user Click on Rejected
    Given User is on Internal Portal "<TestcaseID>" "<Description>"
    When user selects Manage Vat Registraion
    Then user selects value from filter drop down "<Filters>"
    And enters data in type here text box "<Value>"
    And User click on Rejected
    Then User See pop up Reason for Rejected

    Examples: 
      | TestcaseID                       | Description            | Filters | Value      |
      | Valid_Manage_VAT_Reg_RejPopUp_01 | user click on rejected | NIF     | LOKI123456 |

  #TC_12
  @OnHold_ManageVATRegistration_DV-1377
  Scenario Outline: Validate Pop up when user Click on OnHold
    Given User is on Internal Portal "<TestcaseID>" "<Description>"
    When user selects Manage Vat Registraion
    Then user selects value from filter drop down "<Filters>"
    And enters data in type here text box "<Value>"
    And User click on OnHold
    Then User See pop up Reason for OnHold

    Examples: 
      | TestcaseID                       | Description           | Filters | Value  |
      | Valid_Manage_VAT_Reg_RejPopUp_01 | user click on on hold | Status  | OnHold |

  #TC_13
  @StatusReviewInProgress_ManageVATRegistration_DV-1377
  Scenario Outline: Validate Review in Progress from Filter status and user select Review
    Given User is on Internal Portal "<TestcaseID>" "<Description>"
    When user selects Manage Vat Registraion
    And select filter
    Then user selects value from filter drop down "<Filters>"
    And enters data in type here text box "<Value>"
    And user click on manage setting and select Review
    Then it Navigate to Tax Payer Details

    Examples: 
      | TestcaseID                     | Description                        | Filters | Value              |
      | Valid_Manage_VAT_Reg_Review_01 | user navigate to tax payer details | Status  | Review in Progress |
  
  
  @TC_14_ManageVATRegistration_Sort_DV-1377
  Scenario Outline: Validate User is able to do sorting
    Given User is on Internal Portal "<TestcaseID>" "<Description>"
    When user selects Manage Vat Registraion
    And user click on the sorting "<sort>"
    Then User see sorting result

    Examples: 
      | TestcaseID                   | Description                     | sort |
      | Valid_Manage_VAT_Reg_Sort_01 | user validate ascending order   | asc  |
      | Valid_Manage_VAT_Reg_Sort_02 | user validate descending  order | desc |

  @TC_15_ManageVATRegistration_DV-1377
  Scenario Outline: Validate whether all filter working properly when used simultaneously.
    Given User is on Internal Portal "<TestcaseID>" "<Description>"
    When user selects Manage Vat Registraion
    And user select from filter "<Filters>"
    And enter valid data in Type Here "<Value1>"
    And user click on NIF sorting "<sorting>"
    And user select from filter "<Filters1>"
    And enter valid filter data "<Value3>" and verify

    Examples: 
      | TestcaseID                                    | Description                                  | Value1 | Filters  | sorting | Value3   | Filters1 |
      | Valid_Manage_VAT_Reg_Filter_Simultaneously_01 | user check multuiple possibility with filter |     7  | Priority | asc     | Rejected | Status   |

  #TC_16
  @FilterCombinationInvalid_ManageVATRegistration_DV-1377
  Scenario Outline: Validate filter fucntionality and Type here with different combination Invalid
    Given User is on Internal Portal "<TestcaseID>" "<Description>"
    When user selects Manage Vat Registraion
    Then user selects value from filter drop down "<Filters>"
    And enters data in type here text box "<Value>"
    Then user checks its result "<check>"

    Examples: 
      | TestcaseID                          | Filters           | Value         | check            |
      | Valid_Manage_VAT_Reg_Combination_01 | Priority          |  A10          | No records found |
      | Valid_Manage_VAT_Reg_Combination_02 | NIF               | Arun          | No records found |
      | Valid_Manage_VAT_Reg_Combination_03 | Applicant Name    | Individual    | No records found |
      | Valid_Manage_VAT_Reg_Combination_04 | Taxpayer Category | Banana        | No records found |
      | Valid_Manage_VAT_Reg_Combination_05 | Location          | 06/19/2018    | No records found |
      | Valid_Manage_VAT_Reg_Combination_06 | Updated Date      | officer       | No records found |
      | Valid_Manage_VAT_Reg_Combination_07 | Tax Officer       | Rejected      | No records found |
      | Valid_Manage_VAT_Reg_Combination_08 | Status            | JUIJIBI121213 | No records found |
