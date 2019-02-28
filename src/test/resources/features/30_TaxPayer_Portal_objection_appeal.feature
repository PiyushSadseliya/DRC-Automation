Feature: User is on Tax Payer portal Objection and Appeal

  # 8 will cover in end to end
  #@DV_2253_TaxPayer_Portal_objection_appeal_TC_04_06_07_08_11_12_13
  #Scenario Outline: Verify view preview download navigation name and barcode
  #Given User Enter email "<email>" and  password "<password>"
  #And User click on Dashboard and click on VAT e-filling button
  #And User is on Tax Payer portal Objection and Appeal and click on VAT e-Filing Tab "<TestcaseID>" "<Description>"
  #And User click on collapse for the month "<month>"
  #And User click on view for month "<click>"
  #And User see pop up appear for Notice
  #And User see document type "<document>"
  #And User click on view on notice popup
  #And User see name on notice
  #And User see barcode and ref id is same
  #And User click on download button on notice page
  #And User click on previous button and navigate to VAT e-Filing
  #And User click on collapse for the month "<month>"
  #And User click on view for month "<click>"
  #And User click on view on notice popup
  #And User click on pay button and navigate to Payment Method
  #
  #Examples:
  #| TestcaseID                                      | Description                       | email                     | password | month | click        | document   |
  #| Objection_Appeal_Tax_Payer_04_06_07_08_11_12_13 | Verify raise notice for objection | arunkumar1@mailinator.com | Arun123  | eJan  | btn_Jan_View | Assessment |
  #16 bug 2968
  @DV_2253_TaxPayer_Portal_objection_appeal_TC_16_18_19
  Scenario Outline: Validate title ,period and object type
    Given User Enter email "<email>" and  password "<password>"
    Given User is on Tax Payer portal Objection and Appeal and click on VAT e-Filing Tab "<TestcaseID>" "<Description>"
    #Given User click on Dashboard and click on VAT e-filling button
    And User click on collapse for the month "<month>"
    And User click on view for month "<click>"
    And User click on view on notice popup
    And User see period on notice
    And User click on Object on notice page
    # And User verify the period field on objection page
    And User click on Objection Type and select "<list>"
    And User verify selected objection type "<verify>"
    And User enter data "<data>" in title for objection page
    And User enter description "<description>"
    And user return back to original frame from description
    And User click on submit button on notice page and see message "<message>"

    #And User again enter data "<data1>" in title for objection page
    Examples: 
      | TestcaseID                          | Description                       | email                      | password | month | click        | list                    | description   | verify     | message                  | data | data1                  |
      | Objection_Appeal_Tax_Payer_16_18_19 | Verify raise notice for objection | AutomationFIftysix@mt2015.com| Test@123 | eJan  | btn_Jan_View | drp_Objection_Assesment | Notice raised | Assessment | Title field is required. | abc  | objection is incorrect |

  @DV_2253_TaxPayer_Portal_objection_appeal_TC_20_21_22
  Scenario Outline: Validate the Description field FileUpload
    Given user click on VAT menu
    And User is on Tax Payer portal Objection and Appeal and click on VAT e-Filing Tab "<TestcaseID>" "<Description>"
    And User click on collapse for the month "<month>"
    And User click on view for month "<click>"
    And User click on view on notice popup
    And User click on Object on notice page
    # And User click on description field
    And User enter number "<number>" and check
    And User enter alphabets "<alphabets>" and check
    And User enter special character "<special>" aned checks
    And User select file format zip "<zip>" and see message "<zipMess>" on objection page
    And User click on browse button and upload file more than two mp "<BigFile>" and validate mess "<BigMess>" on objection page
    And User click on browser and upload file "<uploadFile>" on objection page
    And User click on Cancel and navigate to notice page

    Examples: 
      | TestcaseID                          | Description        | month | click        | number            | alphabets                        | special     | zip     | zipMess               | BigFile       | BigMess                         | uploadFile                         |
      | Objection_Appeal_Tax_Payer_20_21_22 | Verify Description | eJan  | btn_Jan_View | 25375123761547615 | Notice raise by you is incorrect | -$%^%$^@$^% | src.zip | File format not found | Big File.xlsx | File size must be less than 2MB | Officers List With Tax Center.xlsx |

  @DV_2253_TaxPayer_Portal_objection_appeal_TC_02_14_23_24
  Scenario Outline: validate submit
    #Given user click on VAT menu
    And User is on Tax Payer portal Objection and Appeal and click on VAT e-Filing Tab "<TestcaseID>" "<Description>"
    And User click on collapse for the month "<month>"
    And User click on view for month "<click>"
    And User click on view on notice popup
    And User see period on notice
    And User click on Object on notice page
    And User click on Objection Type and select "<list>"
    And User enter description "<description>"
    And user return back to original frame from description
    And User click on submit button on notice page

    Examples: 
      | TestcaseID                             | Description                       | month | click        | list                    | description   |
      | Objection_Appeal_Tax_Payer_02_14_23_24 | Verify raise notice for objection | eJan  | btn_Jan_View | drp_Objection_Assesment | Notice raised |
