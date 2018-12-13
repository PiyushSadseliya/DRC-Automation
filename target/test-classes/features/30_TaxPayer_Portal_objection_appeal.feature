Feature: User is on Tax Payer portal Objection and Appeal

  @DV_2253_TaxPayer_Portal_objection_appeal_TC_01_Login_VAT_e-Filing
  Scenario Outline: DRC Tax Portal Login
    Given User Login "<TestcaseID>" "<Description>"
    And User Enter email "<email>" and  password "<password>"
    And User Click on SignIn

    Examples: 
      | TestcaseID               | Description          | email                     | password   |
      | e-file_Preview_Login_001 | Login into tax payer | atfranky01@mailinator.com | franky@123 |

  # 8 will cover in end to end
  @DV_2253_TaxPayer_Portal_objection_appeal_TC_04_06_07_08_11_12_13
  Scenario Outline: Verify view preview download navigation name and barcode
    Given User is on Tax Payer portal Objection and Appeal and click on VAT e-Filing Tab "<TestcaseID>" "<Description>"
    And User click on collapse for the month "<month>"
    And User click on view for month "<click>"
    And User see pop up appear for Notice
    And User see document type "<document>"
    And User click on view on notice popup
    And User see name on notice
    And User see barcode and ref id is same
    And User click on download button on notice page
    And User click on previous button and navigate to VAT e-Filing
    And User click on collapse for the month "<month>"
    And User click on view for month "<click>"
    And User click on view on notice popup
    And User click on pay button and navigate to Payment Method

    Examples: 
      | TestcaseID                                      | Description                       | month | click        | document   |
      | Objection_Appeal_Tax_Payer_04_06_07_08_11_12_13 | Verify raise notice for objection | eJan  | btn_Jan_View | Assessment |

  #16 bug 2968
  @DV_2253_TaxPayer_Portal_objection_appeal_TC_16_18_19
  Scenario Outline: Validate title ,period and object type
    Given User is on Tax Payer portal Objection and Appeal and click on VAT e-Filing Tab "<TestcaseID>" "<Description>"
    And User click on collapse for the month "<month>"
    And User click on view for month "<click>"
    And User click on view on notice popup
    And User see period on notice
    And User click on Object on notice page
  # And User verify the period field on objection page
    And User click on Objection Type and select "<list>"
    And User verify selected objection type "<verify>"
    And User enter data "<data>" in title for objection page
    And User click on submit button on notice page and see message "<message>"
    And User again enter data "<data1>" in title for objection page

    Examples: 
      | TestcaseID                          | Description                       | month | click        | list                    | verify     | message                  | data | data1                  |
      | Objection_Appeal_Tax_Payer_16_18_19 | Verify raise notice for objection | eMar  | btn_Mar_View | drp_Objection_Assesment | Assessment | Title field is required. | abc     | objection is incorrect |

  @DV_2253_TaxPayer_Portal_objection_appeal_TC_20_21_22
  Scenario Outline: Validate the Description field FileUpload
    Given User is on Tax Payer portal Objection and Appeal and click on VAT e-Filing Tab "<TestcaseID>" "<Description>"
    And User click on collapse for the month "<month>"
    And User click on view for month "<click>"
    And User click on view on notice popup
    And User click on Object on notice page
#    And User click on description field
    And User enter number "<number>" and check
    And User enter alphabets "<alphabets>" and check
    And User enter special character "<special>" aned checks
    And User select file format zip "<zip>" and see message "<zipMess>" on objection page
    And User click on browse button and upload file more than two mp "<BigFile>" and validate mess "<BigMess>" on objection page
    And User click on browser and upload file "<uploadFile>" on objection page
    And User click on Cancel and navigate to notice page

    Examples: 
      | TestcaseID                          | Description        | month | click        | number            | alphabets                        | special     | zip                                        | zipMess               | BigFile                                              | BigMess                         | uploadFile                                                            |
      | Objection_Appeal_Tax_Payer_20_21_22 | Verify Description | eMar  | btn_Mar_View | 25375123761547615 | Notice raise by you is incorrect | -$%^%$^@$^% | C:\\Users\\frankey.mehta\\Desktop\\src.zip | File format not found | C:\\Users\\frankey.mehta\\Desktop\\SampleXLSFile.xls | File size must be less than 2MB | C:\\Users\\frankey.mehta\\Desktop\\Officers List With Tax Center.xlsx |

  @DV_2253_TaxPayer_Portal_objection_appeal_TC_02_14_23_24
  Scenario Outline: validate submit
    Given User is on Tax Payer portal Objection and Appeal and click on VAT e-Filing Tab "<TestcaseID>" "<Description>"
    And User click on collapse for the month "<month>"
    And User click on view for month "<click>"
    And User click on view on notice popup
    And User click on Objection Type and select "<list>"
    And User enter description "<description>"
#    And User click on submit button on notice page

    Examples: 
      | TestcaseID                             | Description                       | month | click        | ObjectionType           | description                      |
      | Objection_Appeal_Tax_Payer_02_14_23_24 | Verify raise notice for objection | eMar  | btn_Mar_View | drp_Objection_Assesment | Notice raise by you is incorrect |
