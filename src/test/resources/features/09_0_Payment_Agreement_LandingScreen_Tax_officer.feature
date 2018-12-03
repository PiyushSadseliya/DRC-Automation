Feature: User is on Payment Agreement Landing Screen (Tax-officer)

  #@TC_02 at last
  #Payment_Agreement_Landing_Screen
  @TC_03_NITVA_Number
  Scenario Outline: Validate NITVA number
    Given User is on Payment Agreement Landing Screen "<TestcaseID>" "<Description>"
    And User click on case management
    And User click on filter by on case management and click on "<filter>"
    And User Type id "<id>"
    And User click on search button
    And User click on manage drop down and click on view
    And User clck on continue
    And User see NITVA number "<NITVA>" for Payment Agreement

    Examples: 
      | TestcaseID                      | Description     | filter           | id              | NITVA             |
      | Payment_Agrement_Tax_Officer_03 | Verify NITVA no | drp_CaseID_Click | R18092000000004 | 20180920122825615 |

  @TC_04_NIF_Number
  Scenario Outline: Validate NIF number
    Given User is on Payment Agreement Landing Screen "<TestcaseID>" "<Description>"
    And User click on case management
    And User click on filter by on case management and click on "<filter>"
    And User Type id "<id>"
    And User click on search button
    And User click on manage drop down and click on view
    And User clck on continue
    And User see NIF number "<NIF>" for Payment Agreement

    Examples: 
      | TestcaseID                      | Description   | filter           | id              | NIF                       |
      | Payment_Agrement_Tax_Officer_04 | Verify NIF no | drp_CaseID_Click | R18092000000004 | 1010101010101010101010107 |

  @TC_05_Validate_Address
  Scenario Outline: Validate Address
    Given User is on Payment Agreement Landing Screen "<TestcaseID>" "<Description>"
    And User click on case management
    And User click on filter by on case management and click on "<filter>"
    And User Type id "<id>"
    And User click on search button
    And User click on manage drop down and click on view
    And User clck on continue
    And User see Address "<Address>" for Payment Agreement

    Examples: 
      | TestcaseID                      | Description    | filter           | id              | Address |
      | Payment_Agrement_Tax_Officer_05 | Verify Address | drp_CaseID_Click | R18092000000004 | valsad  |

  @TC_06_Validate_business_type
  Scenario Outline: Validate business type
    Given User is on Payment Agreement Landing Screen "<TestcaseID>" "<Description>"
    And User click on case management
    And User click on filter by on case management and click on "<filter>"
    And User Type id "<id>"
    And User click on search button
    And User click on manage drop down and click on view
    And User clck on continue
    And User see Business Type "<business>" for Payment Agreement

    Examples: 
      | TestcaseID                      | Description          | filter           | id              | business |
      | Payment_Agrement_Tax_Officer_06 | Verify business name | drp_CaseID_Click | R18092000000004 | Trading  |

  @TC_07_Validate_no_of_notification
  Scenario Outline: Validate the no of notification.
    Given User is on Payment Agreement Landing Screen "<TestcaseID>" "<Description>"
    And User click on case management
    And User click on filter by on case management and click on "<filter>"
    And User Type id "<id>"
    And User click on search button
    And User click on manage drop down and click on view
    And User clck on continue
    And User click on notification on Payment Agreement
    And User see notification is open

    Examples: 
      | TestcaseID                      | Description               | filter           | id              |
      | Payment_Agrement_Tax_Officer_07 | Verify no of notification | drp_CaseID_Click | R18092000000004 |

  @TC_08_Validate_cases_ID
  Scenario Outline: Validate the cases ID
    Given User is on Payment Agreement Landing Screen "<TestcaseID>" "<Description>"
    And User click on case management
    And User click on filter by on case management and click on "<filter>"
    And User Type id "<id>"
    And User click on search button
    And User click on manage drop down and click on view
    And User clck on continue
    And User see Case Id "<caseId>"

    Examples: 
      | TestcaseID                      | Description    | filter           | id              | caseId          |
      | Payment_Agrement_Tax_Officer_08 | Verify case id | drp_CaseID_Click | R18092000000004 | R18092000000004 |

  @TC_09_Total_Amount
  Scenario Outline: validate the Total amount field.
    Given User is on Payment Agreement Landing Screen "<TestcaseID>" "<Description>"
    And User click on case management
    And User click on filter by on case management and click on "<filter>"
    And User Type id "<id>"
    And User click on search button
    And User click on manage drop down and click on view
    And User clck on continue
    And User see Total Amount "<Amount>"

    Examples: 
      | TestcaseID                      | Description         | filter           | id              | Amount  |
      | Payment_Agrement_Tax_Officer_09 | Verify Total Amount | drp_CaseID_Click | R18092000000004 | 8400160 |

  @TC_10_Initial_Amount
  Scenario Outline: Validate the initial amount.
    Given User is on Payment Agreement Landing Screen "<TestcaseID>" "<Description>"
    And User click on case management
    And User click on filter by on case management and click on "<filter>"
    And User Type id "<id>"
    And User click on search button
    And User click on manage drop down and click on view
    And User clck on continue
    And User type initial amount "<Amount>"
    And User again type initial amount "<Amount1>"
    And User see validation message "<message>" for Payment Agreement

    Examples: 
      | TestcaseID                      | Description           | filter           | id              | Amount | Amount1      | message                                                        |
      | Payment_Agrement_Tax_Officer_10 | Verify initial amount | drp_CaseID_Click | R18092000000004 |    700 | 100000000000 | Should not greater than difference of total AMT, discount AMT. |

  @TC_11_Discount_Amount
  Scenario Outline: Validate the Discount amount radio button.
    Given User is on Payment Agreement Landing Screen "<TestcaseID>" "<Description>"
    And User click on case management
    And User click on filter by on case management and click on "<filter>"
    And User Type id "<id>"
    And User click on search button
    And User click on manage drop down and click on view
    And User clck on continue
    And User click on discount radio button
    And User see percentage is deselected

    Examples: 
      | TestcaseID                      | Description            | filter           | id              |
      | Payment_Agrement_Tax_Officer_11 | Verify discount amount | drp_CaseID_Click | R18092000000004 |

  @TC_12_Discount_Percentage
  Scenario Outline: Validate the Discount percentage radio button.
    Given User is on Payment Agreement Landing Screen "<TestcaseID>" "<Description>"
    And User click on case management
    And User click on filter by on case management and click on "<filter>"
    And User Type id "<id>"
    And User click on search button
    And User click on manage drop down and click on view
    And User clck on continue
    And User click on percentage radio button
    And User see discount amount is deselected

    Examples: 
      | TestcaseID                      | Description                | filter           | id              |
      | Payment_Agrement_Tax_Officer_12 | Verify discount percentage | drp_CaseID_Click | R18092000000004 |

  @TC_13_discount_amount_textbox
  Scenario Outline: Validate the Discount amount textbox.
    Given User is on Payment Agreement Landing Screen "<TestcaseID>" "<Description>"
    And User click on case management
    And User click on filter by on case management and click on "<filter>"
    And User Type id "<id>"
    And User click on search button
    And User click on manage drop down and click on view
    And User clck on continue
    And User click on discount radio button
    And User type amount "<amount>" in discount textbox

    #   And User see percentage is calculated
    Examples: 
      | TestcaseID                      | Description            | filter           | id              | amount |
      | Payment_Agrement_Tax_Officer_13 | Verify dicount textbox | drp_CaseID_Click | R18092000000004 |    500 |

  @TC_14_discount_percentage_textbox
  Scenario Outline: Validate the discount percentage textbox.
    Given User is on Payment Agreement Landing Screen "<TestcaseID>" "<Description>"
    And User click on case management
    And User click on filter by on case management and click on "<filter>"
    And User Type id "<id>"
    And User click on search button
    And User click on manage drop down and click on view
    And User clck on continue
    And User click on percentage radio button
    And User type percentage "<per>" in percentage textbox

    #    And User see discount amount is calculated
    Examples: 
      | TestcaseID                      | Description              | filter           | id              | per |
      | Payment_Agrement_Tax_Officer_14 | Verify percentage texbox | drp_CaseID_Click | R18092000000004 |  50 |

  @TC_15_Installement_radio
  Scenario Outline: Validate the Install amount radio button.
    Given User is on Payment Agreement Landing Screen "<TestcaseID>" "<Description>"
    And User click on case management
    And User click on filter by on case management and click on "<filter>"
    And User Type id "<id>"
    And User click on search button
    And User click on manage drop down and click on view
    And User clck on continue
    And User click on Installement radio button
    And User see no of installement is deselected

    Examples: 
      | TestcaseID                      | Description               | filter           | id              |
      | Payment_Agrement_Tax_Officer_15 | Verify the UI of the Page | drp_CaseID_Click | R18092000000004 |

  @TC_16_No_Of_Installement_radio
  Scenario Outline: Validate the No of installment radio button.
    Given User is on Payment Agreement Landing Screen "<TestcaseID>" "<Description>"
    And User click on case management
    And User click on filter by on case management and click on "<filter>"
    And User Type id "<id>"
    And User click on search button
    And User click on manage drop down and click on view
    And User clck on continue
    And User click on No of Installement radio button
    And User see installement amount is deselected

    Examples: 
      | TestcaseID                      | Description               | filter           | id              |
      | Payment_Agrement_Tax_Officer_16 | Verify no of installement | drp_CaseID_Click | R18092000000004 |

  @TC_17_Installement_Amount_textbox
  Scenario Outline: Validate the Installment amount textbox.
    Given User is on Payment Agreement Landing Screen "<TestcaseID>" "<Description>"
    And User click on case management
    And User click on filter by on case management and click on "<filter>"
    And User Type id "<id>"
    And User click on search button
    And User click on manage drop down and click on view
    And User clck on continue
    And User click on Installement radio button
    And User type installment amount "<amount>"

    #  And User see no of installement is calculated
    Examples: 
      | TestcaseID                      | Description                        | filter           | id              | amount |
      | Payment_Agrement_Tax_Officer_17 | Verify installement amount textbox | drp_CaseID_Click | R18092000000004 |    500 |

  @TC_18_Installment_Frequency
  Scenario Outline: Validate Installment Frequency drop down.
    Given User is on Payment Agreement Landing Screen "<TestcaseID>" "<Description>"
    And User click on case management
    And User click on filter by on case management and click on "<filter>"
    And User Type id "<id>"
    And User click on search button
    And User click on manage drop down and click on view
    And User clck on continue
    And User click on Installement Frequency dropdown
    And User select from dropdown "<list>"
    And User see installement date "<date>"

    Examples: 
      | TestcaseID                      | Description                   | filter           | id              | list       | date             |
      | Payment_Agrement_Tax_Officer_18 | Verify installement frequency | drp_CaseID_Click | R18092000000004 | drp_Weelky | 01 October, 2018 |

  @TC_19_Authorized_Signatory
  Scenario Outline: Validate the Authorized Signatory.
    Given User is on Payment Agreement Landing Screen "<TestcaseID>" "<Description>"
    And User click on case management
    And User click on filter by on case management and click on "<filter>"
    And User Type id "<id>"
    And User click on search button
    And User click on manage drop down and click on view
    And User clck on continue
    And User click on Authorized Signatory
    And User select Authority "<autho>"
    And User see Authority  is selected "<selected>"

    Examples: 
      | TestcaseID                      | Description                  | filter           | id              | autho         | selected |
      | Payment_Agrement_Tax_Officer_19 | Verify authorized sigbatioty | drp_CaseID_Click | R18092000000004 | drp_click_One | franky   |

  @TC_20_comment_textbox
  Scenario Outline: Validate the comment textbox.
    Given User is on Payment Agreement Landing Screen "<TestcaseID>" "<Description>"
    And User click on case management
    And User click on filter by on case management and click on "<filter>"
    And User Type id "<id>"
    And User click on search button
    And User click on manage drop down and click on view
    And User clck on continue
    And User enter data in comment "<comment>" and check
    And User again enter data "<num>" and check

    Examples: 
      | TestcaseID                      | Description    | filter           | id              | comment | comment1 | num      | num1     |
      | Payment_Agrement_Tax_Officer_20 | Verify comment | drp_CaseID_Click | R18092000000004 | Testing | Testing  | 78945132 | 78945132 |

  @TC_21_browsew_button
  Scenario Outline: Validate the Browse button functionality
    Given User is on Payment Agreement Landing Screen "<TestcaseID>" "<Description>"
    And User click on case management
    And User click on filter by on case management and click on "<filter>"
    And User Type id "<id>"
    And User click on search button
    And User click on manage drop down and click on view
    And User clck on continue
    And User click on browse button on payment agreement
    And User select file to upload "<upload>"
    And User again click on browse and select file "<file>" and user see message "<message>"

    Examples: 
      | TestcaseID                      | Description               | filter           | id              | message                         | upload                                                            | file                                  |
      | Payment_Agrement_Tax_Officer_21 | Verify the UI of the Page | drp_CaseID_Click | R18092000000004 | Only 1 document can be uploaded | C:\\Users\\admin\\Downloads\\Sales-and-Purchase-Transactions.xlsx | C:\\Users\\admin\\Downloads\\text.txt |

  @TC_22_Cancel_button
  Scenario Outline: Validate the cancel button functionality.
    Given User is on Payment Agreement Landing Screen "<TestcaseID>" "<Description>"
    And User click on case management
    And User click on filter by on case management and click on "<filter>"
    And User Type id "<id>"
    And User click on search button
    And User click on manage drop down and click on view
    And User clck on continue
    And User click on cancel button on payment agreement
    And User is redirect to list

    Examples: 
      | TestcaseID                      | Description          | filter           | id              |
      | Payment_Agrement_Tax_Officer_22 | Verify cancel button | drp_CaseID_Click | R18092000000004 |

  @TC_23_installment_schedule
  Scenario Outline: Validate the installment schedule
    Given User is on Payment Agreement Landing Screen "<TestcaseID>" "<Description>"
    And User click on case management
    And User click on filter by on case management and click on "<filter>"
    And User Type id "<id>"
    And User click on search button
    And User click on manage drop down and click on view
    And User clck on continue
    And User type initial amount "<initial>"
    And User type discount amount "<discount>"
    And User type installment amount "<install>"
    And User click on Installement Frequency dropdown
    And User select from dropdown "<list>"
    And User click on installement Scledules button
    And User see pop up appear
    And User see installment amount "<entered>"

    Examples: 
      | TestcaseID                      | Description         | filter           | id              | initial | discount | install | entered | list       |
      | Payment_Agrement_Tax_Officer_23 | Verify installement | drp_CaseID_Click | R18092000000004 |     500 |      500 | 1679832 | 1679832 | drp_Weelky |

  @TC_02_payment_Agreement_Submit
  Scenario Outline: Validate the Tax officer able to do payment agreement
    Given User is on Payment Agreement Landing Screen "<TestcaseID>" "<Description>"
    And User click on case management
    And User click on filter by on case management and click on "<filter>"
    And User Type id "<id>"
    And User click on search button
    And User click on manage drop down and click on view
    And User clck on continue
    And User type initial amount "<Amount>"
    And User type amount "<amount>" in discount textbox
    And User type installment amount "<install>"
    And User click on Installement Frequency dropdown
    And User select from dropdown "<list>"
    And User click on Authorized Signatory
    And User select Authority "<auth>"
    And User click on submit button on payment agreement
    And User navigate to payment agreement notice page

    Examples: 
      | TestcaseID                      | Description               | filter           | id              | Amount | amount  | install | entered | list       | auth          |
      | Payment_Agrement_Tax_Officer_22 | Verify the UI of the Page | drp_CaseID_Click | R18092000000004 |    500 | 2100040 | 1259924 |     500 | drp_Weelky | drp_click_One |

  # from here have to use another user as
  # @TC_24 @UI_of_Payment_Agreement
  #Scenario Outline: Validate the UI of Payment Agreement – Installment Status
  #  Given User is on Payment Agreement Landing Screen "<TestcaseID>" "<Description>"
  #  And User click on case management
  #  And User click on filter by on case management and click on "<filter>"
  #  And User Type id "<id>"
  #  And User click on search button
  #  And User click on manage drop down and click on view
  #  And User see UI of Payment Agreement – Installment Status
  #  Examples:
  #    | TestcaseID                      | Description               |filter           |id                |
  #    | Payment_Agrement_Tax_Officer_24 | Verify the UI of the Page |drp_CaseID_Click |R18092400000001   |
  #TC_25 positive flow covered in tc 02
  @TC_26_Date
  Scenario Outline: Validate the Date
    Given User is on Payment Agreement Landing Screen "<TestcaseID>" "<Description>"
    And User click on case management
    And User click on filter by on case management and click on "<filter>"
    
    And User Type id "<newid>"
    And User click on search button
    And User click on manage drop down and click on view
    And User see date "<date>" on payment agreement

    Examples: 
      | TestcaseID                      | Description | filter           | newid           | date               |
      | Payment_Agrement_Tax_Officer_26 | Verify Date | drp_CaseID_Click | R18092400000001 | 29 September, 2018 |

  @TC_27_Agreement_ID
  Scenario Outline: Validate the Agreement ID
    Given User is on Payment Agreement Landing Screen "<TestcaseID>" "<Description>"
    And User click on case management
    And User click on filter by on case management and click on "<filter>"
    
    And User Type id "<id>"
    And User click on search button
    And User click on manage drop down and click on view
    #And User see new agrement id
    And User see new agrement id "<Aid>"

    #And User see data "<date>" on payment agreement
    Examples: 
      | TestcaseID                      | Description         | filter           | id              | Aid           |
      | Payment_Agrement_Tax_Officer_27 | Verify Agreement id | drp_CaseID_Click | R18092400000001 | PA18092400001 |

  @TC_28_Validate_cases_ID
  Scenario Outline: Validate the cases ID
    Given User is on Payment Agreement Landing Screen "<TestcaseID>" "<Description>"
    And User click on case management
    And User click on filter by on case management and click on "<filter>"
    
    And User Type id "<id>"
    And User click on search button
    And User click on manage drop down and click on view
    #And User see new case id
    And User see Case Id "<caseId>"

    Examples: 
      | TestcaseID                      | Description    | filter           | id              | caseId          |
      | Payment_Agrement_Tax_Officer_28 | Verify case id | drp_CaseID_Click | R18092400000001 | R18092400000001 |

  @TC_29_Validate_Total_Amount_disable
  Scenario Outline: Validate the Total amount field.
    Given User is on Payment Agreement Landing Screen "<TestcaseID>" "<Description>"
    And User click on case management
    And User click on filter by on case management and click on "<filter>"
    And User Type id "<id>"
    And User click on search button
    And User click on manage drop down and click on view
    And User see total amount is displayed and field is disable "<amount>"

    Examples: 
      | TestcaseID                      | Description                 | filter           | id              | amount  |
      | Payment_Agrement_Tax_Officer_29 | Verify total amount disable | drp_CaseID_Click | R18092400000001 | 8400160 |

  @TC_30_Initial_Amount_disable
  Scenario Outline: Validate the initial amount.
    Given User is on Payment Agreement Landing Screen "<TestcaseID>" "<Description>"
    And User click on case management
    And User click on filter by on case management and click on "<filter>"
    And User Type id "<id>"
    And User click on search button
    And User click on manage drop down and click on view
    And User see initial amount is displayed and field is disable "<Iamount>"

    Examples: 
      | TestcaseID                      | Description           | filter           | id              | Iamount |
      | Payment_Agrement_Tax_Officer_30 | Verify amount disable | drp_CaseID_Click | R18092400000001 |     500 |

  @TC_31_Discount_Amount_radio_disable
  Scenario Outline: Validate the Discount amount radio button.
    Given User is on Payment Agreement Landing Screen "<TestcaseID>" "<Description>"
    And User click on case management
    And User click on filter by on case management and click on "<filter>" 
    And User Type id "<id>"
    And User click on search button
    And User click on manage drop down and click on view
    And User see radio button is disable for discount

    Examples: 
      | TestcaseID                      | Description                 | filter           | id              |
      | Payment_Agrement_Tax_Officer_31 | Verify amount radio disable | drp_CaseID_Click | R18092400000001 |

  @TC_32_Discount_Percentage_radio_disable
  Scenario Outline: Validate the Discount percentage radio button.
    Given User is on Payment Agreement Landing Screen "<TestcaseID>" "<Description>"
    And User click on case management
    And User click on filter by on case management and click on "<filter>"  
    And User Type id "<id>"
    And User click on search button
    And User click on manage drop down and click on view
    And User see radio button is disable for percentage

    Examples: 
      | TestcaseID                      | Description                     | filter           | id              |
      | Payment_Agrement_Tax_Officer_32 | Verify percentage radio disable | drp_CaseID_Click | R18092400000001 |

  @TC_33_Discount_Amount_textbox_disable
  Scenario Outline: Validate the Discount amount textbox.
    Given User is on Payment Agreement Landing Screen "<TestcaseID>" "<Description>"
    And User click on case management
    And User click on filter by on case management and click on "<filter>"   
    And User Type id "<id>"
    And User click on search button
    And User click on manage drop down and click on view
    And User see textbox is disable for discount "<dis>"

    Examples: 
      | TestcaseID                      | Description                    | filter           | id              | dis     |
      | Payment_Agrement_Tax_Officer_33 | Verify discount amount textbox | drp_CaseID_Click | R18092400000001 | 2100040 |

  @TC_34_Discount_Percentage_textbox_disable
  Scenario Outline: Validate the discount percentage textbox.
    Given User is on Payment Agreement Landing Screen "<TestcaseID>" "<Description>"
    And User click on case management
    And User click on filter by on case management and click on "<filter>"
    And User Type id "<id>"
    And User click on search button
    And User click on manage drop down and click on view
    And User see radio button text box is disable for percentage "<per>"

    Examples: 
      | TestcaseID                      | Description                         | filter           | id              | per |
      | Payment_Agrement_Tax_Officer_34 | Verify discount per textbox disable | drp_CaseID_Click | R18092400000001 |   0 |

  @TC_35_Installement_radio_disable
  Scenario Outline: Validate the Install amount radio button.
    Given User is on Payment Agreement Landing Screen "<TestcaseID>" "<Description>"
    And User click on case management
    And User click on filter by on case management and click on "<filter>"
    And User Type id "<id>"
    And User click on search button
    And User click on manage drop down and click on view
    And User see installement radio button is disable

    Examples: 
      | TestcaseID                      | Description                  | filter           | id              |
      | Payment_Agrement_Tax_Officer_35 | Verify install radio disable | drp_CaseID_Click | R18092400000001 |

  @TC_36_No_of_Installement_radio_disable
  Scenario Outline: Validate the No of installment radio button.
    Given User is on Payment Agreement Landing Screen "<TestcaseID>" "<Description>"
    And User click on case management
    And User click on filter by on case management and click on "<filter>"
    And User Type id "<id>"
    And User click on search button
    And User click on manage drop down and click on view
    And User see no of installement radio button is disable

    Examples: 
      | TestcaseID                      | Description                        | filter           | id              |
      | Payment_Agrement_Tax_Officer_36 | Verify no of install radio disable | drp_CaseID_Click | R18092400000001 |

  @TC_37_Installement_amount_textbox
  Scenario Outline: Validate the Installement amount textbox.
    Given User is on Payment Agreement Landing Screen "<TestcaseID>" "<Description>"
    And User click on case management
    And User click on filter by on case management and click on "<filter>"
    And User Type id "<id>"
    And User click on search button
    And User click on manage drop down and click on view
    And User see installement amount textbox is disable "<insAmount>"

    Examples: 
      | TestcaseID                      | Description                 | filter           | id              | insAmount |
      | Payment_Agrement_Tax_Officer_37 | Verify installement textbox | drp_CaseID_Click | R18092400000001 |   1259924 |

  @TC_38_installment_frequency
  Scenario Outline: Validate the installment frequency.
    Given User is on Payment Agreement Landing Screen "<TestcaseID>" "<Description>"
    And User click on case management
    And User click on filter by on case management and click on "<filter>"
    And User Type id "<id>"
    And User click on search button
    And User click on manage drop down and click on view
    And User see installment frequency is disable "<frequency>"

    Examples: 
      | TestcaseID                      | Description                   | filter           | id              | frequency |
      | Payment_Agrement_Tax_Officer_38 | Verify installement frequency | drp_CaseID_Click | R18092400000001 | Weekly    |

  @TC_39_Next_installment_date
  Scenario Outline: Validate next installment Date.
    Given User is on Payment Agreement Landing Screen "<TestcaseID>" "<Description>"
    And User click on case management
    And User click on filter by on case management and click on "<filter>"   
    And User Type id "<id>"
    And User click on search button
    And User click on manage drop down and click on view
    And User see next installment data is disable "<date>"

    Examples: 
      | TestcaseID                      | Description                   | filter           | id              | date             |
      | Payment_Agrement_Tax_Officer_39 | Verify next installement date | drp_CaseID_Click | R18092400000001 | 01 October, 2018 |

  @TC_40_Authorized_signatory
  Scenario Outline: Validate Authorized signatory.
    Given User is on Payment Agreement Landing Screen "<TestcaseID>" "<Description>"
    And User click on case management
    And User click on filter by on case management and click on "<filter>"
    And User Type id "<id>"
    And User click on search button
    And User click on manage drop down and click on view
    And User see Authorized signatory is disable "<signatory>"

    Examples: 
      | TestcaseID                      | Description                 | filter           | id              | signator |
      | Payment_Agrement_Tax_Officer_40 | Verify authorized signatory | drp_CaseID_Click | R18092400000001 | franky   |


  @TC_41_Payment_Agreement_Document
  Scenario Outline: Validate Payment agreement Document.
    Given User is on Payment Agreement Landing Screen "<TestcaseID>" "<Description>"
    And User click on case management
    And User click on filter by on case management and click on "<filter>"
    And User Type id "<id>"
    And User click on search button
    And User click on manage drop down and click on view
    And User clcik on action and select pa executed
    And User click on browse button on payment agreement document browse
    And User select file and verify uploaded file

    Examples: 
      | TestcaseID                      | Description               | filter           | id              |
      | Payment_Agrement_Tax_Officer_41 | Verify agreement document | drp_CaseID_Click | R18092400000001 |

  @TC_42_installment_Status
  Scenario Outline: Validate the installment status.
    Given User is on Payment Agreement Landing Screen "<TestcaseID>" "<Description>"
    And User click on case management
    And User click on filter by on case management and click on "<filter>"
    And User Type id "<id>"
    And User click on search button
    And User click on manage drop down and click on view
    And User see paid installment "<paid>"
    And User see over due installment "<overdue>"
    And User see pending installement "<pending>"

    Examples: 
      | TestcaseID                      | Description               | filter           | id              | paid | overdue | pending |
      | Payment_Agrement_Tax_Officer_42 | Verify installment status | drp_CaseID_Click | R18092400000001 |    0 |       0 |       5 |

  @TC_43_view_Icon
  Scenario Outline: Validate view icon
    Given User is on Payment Agreement Landing Screen "<TestcaseID>" "<Description>"
    And User click on case management
    And User click on filter by on case management and click on "<filter>"
    And User Type id "<id>"
    And User click on search button
    And User click on manage drop down and click on view
    And User click on view icon on installement status
    And User see notification of installement details

    Examples: 
      | TestcaseID                      | Description      | filter           | id              |
      | Payment_Agrement_Tax_Officer_43 | Verify view icon | drp_CaseID_Click | R18092400000001 |

  @TC_44_Comment_Status
  Scenario Outline: Validate the comment textbox.
    Given User is on Payment Agreement Landing Screen "<TestcaseID>" "<Description>"
    And User click on case management
    And User click on filter by on case management and click on "<filter>"
    And User Type id "<id>"
    And User click on search button
    And User click on manage drop down and click on view
    And User enter data in comment "<comment>" and check
    And User again enter data "<data>" and check

    Examples: 
      | TestcaseID                      | Description           | filter           | id              | comment | data |
      | Payment_Agrement_Tax_Officer_44 | Verify comment status | drp_CaseID_Click | R18092400000001 | test    |  123 |


  @TC_45_browse_button
  Scenario Outline: Validate the Browse button functionality
    Given User is on Payment Agreement Landing Screen "<TestcaseID>" "<Description>"
    And User click on case management
    And User click on filter by on case management and click on "<filter>"
    And User Type id "<id>"
    And User click on search button
    And User click on manage drop down and click on view
    And User click on browse button on payment agreement
    And User select file to upload "<upload>"
    And User again click on browse and select file "<file>" and user see message "<message>"

    Examples: 
      | TestcaseID                      | Description          | filter           | id              | message                         | upload                                                            | file                                  |
      | Payment_Agrement_Tax_Officer_45 | Verify browse button | drp_CaseID_Click | R18092400000001 | Only 1 document can be uploaded | C:\\Users\\admin\\Downloads\\Sales-and-Purchase-Transactions.xlsx | C:\\Users\\admin\\Downloads\\text.txt |


  @TC_46_Cancel_button
  Scenario Outline: Validate the cancel button functionality.
    Given User is on Payment Agreement Landing Screen "<TestcaseID>" "<Description>"
    And User click on case management
    And User click on filter by on case management and click on "<filter>"
    And User Type id "<id>"
    And User click on search button
    And User click on manage drop down and click on view
    And User click on cancel button on payment agreement
    And User is redirect to list

    Examples: 
      | TestcaseID                      | Description          | filter           | id              |
      | Payment_Agrement_Tax_Officer_46 | Verify cancel button | drp_CaseID_Click | R18092400000001 |

  @TC_49_Under_review
  Scenario Outline: Validate the Under review status.
    Given User is on Payment Agreement Landing Screen "<TestcaseID>" "<Description>"
    And User click on case management
    And User click on filter by on case management and click on "<filter>"
    And User Type id "<id>"
    And User click on search button
    And User click on manage drop down and click on view
    And User click on action and select under review
    And User click on submit button and see message for under review

    Examples: 
      | TestcaseID                      | Description                | filter           | id              |
      | Payment_Agrement_Tax_Officer_58 | Verify cancel/close status | drp_CaseID_Click | R18092400000002 |

  @TC_55_Cancel_button
  Scenario Outline: Validate the Cancel/Closed status.
    Given User is on Payment Agreement Landing Screen "<TestcaseID>" "<Description>"
    And User click on case management
    And User click on filter by on case management and click on "<filter>"
    And User Type id "<id>"
    And User click on search button
    And User click on manage drop down and click on view
    And User click on action and select cancel
    And User click on submit button and see message for cancel status

    Examples: 
      | TestcaseID                      | Description                | filter           | id              |
      | Payment_Agrement_Tax_Officer_58 | Verify cancel/close status | drp_CaseID_Click | R18092000000017 |
