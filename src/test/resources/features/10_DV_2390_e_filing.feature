
Feature: E-filing -> Filing -> Declaration with verification and confirmation of e-declaration


  @TC_02_DV_2390_Declaration_with_verification
  Scenario Outline: Validate whether the tax payer is able to e-file
    Given User is on Vat e-Filing Page "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Tab
    And clicks on e-filing to fill data
    And User entered value "<1>" "<2>" "<2.1>" "<3>" "<4>" "<5>" "<6>" "<7>" "<8>" for Operation Performed
    And User entered value "<10>" "<10.1>" "<11>" "<11.1>" "<12>" "<12.1>" "<13>" "<13.1>" for Tax Deductible On
    And User entered value "<17>" "<18>" "<19>" "<20>" for Adjustment
    And User entered value "<26>" for Tax Calculation
    And User click on browser and upload file "<uploadFile>"
    And User see uploaded file name in field
    And User click on check box and click on submit button
    And User click on Yes button
    And Enter OTP and click on verify button and click on Ok button

    #    And User is navigate to Tax Calculation page
    Examples: 
      | TestcaseID                  | Description                                           |     1 |    2 |  2.1 |   3 |   4 |   5 |   6 |   7 |   8 |  10 | 10.1 |  11 | 11.1 |  12 | 12.1 |  13 | 13.1 |  17 |  18 |  19 |  20 |    26 | uploadFile         |
      | Declaration_Verification_02 | validate tax payer is able to e-file and period field | 10000 | 7000 | 5000 | 500 | 500 | 500 | 500 | 500 | 500 | 500 |  500 | 500 |  500 | 500 |  500 | 500 |  500 | 500 | 500 | 500 | 500 | 10000 | DRC Test Data.xlsx |


  @TC_03_DV_2390_Declaration_with_verification
  Scenario Outline: Validate the text fields on e-filing declaration page.
    Given User is on Vat e-Filing Page "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Tab
    And clicks on e-filing to fill data
    And User check value "<1>" "<2>" "<2.1>" "<3>" "<4>" "<5>" "<6>" "<7>" "<8>" for Operation Performed
    And User check value "<10>" "<10.1>" "<11>" "<11.1>" "<12>" "<12.1>" "<13>" "<13.1>" for Tax Deductible On
    And User check value "<17>" "<18>" "<19>" "<20>" for Adjustment
    And User check value "<26>" for Tax Calculation

    Examples: 
      | TestcaseID                    | Description              |      1 |     2 |   2.1 |    3 |    4 |    5 |    6 |    7 |    8 |   10 | 10.1 |   11 | 11.1 |   12 | 12.1 |   13 | 13.1 |   17 |   18 |  19 |  20 |    26 | Period      | uploadFile         |
      | Declaration_Verification_03_1 | Validate the text fields | -10000 | -7000 | -5000 | -500 | -500 | -500 | -500 | -500 | -500 | -500 | -500 | -500 | -500 | -500 | -500 | -500 | -500 | -500 | -500 | 500 | 500 | 10000 | March, 2018 | DRC Test Data.xlsx |
      | Declaration_Verification_03_2 | Validate the text fields | A0b00  | b000  | c000  | d00  | e00  | s00  | h00  | a00  | sd0  | j00  | f00  | h00  | h00  | a00  | h00  | h00  | h00  | gh00 | h00  | g00 | f00 | h000  | March, 2018 | DRC Test Data.xlsx |

 #@TC_04_DV_2390_Declaration_with_verification
  #Scenario Outline: Validate the Period field.
   # Given User is on Vat e-Filing Page "<TestcaseID>" "<Description>"
   # And User click on Dashboard
   # And User click on Tab
    #And User click on collpase icon for filing "<month>"
    #And User click on file button "<file>" and navigate to e-declaration page
    #And User verify period "<period>" for Tax Calculation

#    Examples: 
 #     | TestcaseID                  | Description               | month | file  | period         |
 #     | Declaration_Verification_04 | Validate the Period field | eDec  | eDecC | December, 2018 |

  @TC_05_06_DV_2390_Declaration_with_verification
  Scenario Outline: Validate the delivery of services field under Turnover realized column
    Given User is on Vat e-Filing Page "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Tab
    And clicks on e-filing to fill data
    And User entered value "<2>" "<2.1>" for Delivery of services
    And User check entered value for Delivery of services
    And User entered value "<A2>" "<A2.1>" for Delivery of services
    And User see message "<mes>"

    Examples: 
      | TestcaseID                     | Description                         |    2 |  2.1 | A2   | A2.1 | mes                                                     |
      | Declaration_Verification_05_06 | validate delivery of services field | 5000 | 2000 | 2000 | 5000 | Turnover realized can not be less than taxable turnover |

  @TC_07_08_09_14_15_17_18_19_20_DV_2390_Declaration_with_verification
  Scenario Outline: Validate the amounts under VAT collected column (16%) , Total FC taxble turnover , total vat collected (16%) , Net VAT to be paid ,VAT Credit,Amount to Pay,VAT credit carried forward,  Vat on externally financed public procurement
    Given User is on Vat e-Filing Page "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Tab
    And clicks on e-filing to fill data
    And Enter data in Operation Performed "<DG>","<DS1>","<DS2>" , "<DGI>","<DSI>", "<FPP>" ,"<Export>", "<Exempt>","<Non-taxable>" for amount under vat collected
    And Enter data in Deduction "<AssetsI>" ,"<AssetsL>", "<GoodsI>" ,"<GoodsL>","<Raw MaterialI>","<Raw MaterialL>" ,"<OthersI>" ,"<OthersL>" and validate total value for Amount of VAT Deductible
    And User entered value "<17>" "<18>" "<19>" "<20>" for Adjustment calculation
    And calculate tax calculations and enter "<VAT3Party>"

    Examples: 
      | TestCase_Id                                         | Description                  | DG  | DS1 | DS2 | DGI | DSI | FPP | Export | Exempt | Non-taxable | VAT3Party | AssetsI | AssetsL | GoodsI | GoodsL | Raw MaterialI | Raw MaterialL | OthersI | OthersL | 17 | 18 | 19 | 20 |
      | Declaration_Verification_07_08_09_14_15_17_18_19_20 | Enter data in E-filling form | 500 | 500 | 500 | 500 | 500 | 500 |    500 |    500 |         500 |        10 |      10 |      10 |     10 |     10 |            10 |            10 |      10 |      10 | 10 | 10 | 10 | 10 |

  # submit + and -
  @TC_16_DV_2390_Declaration_with_verification
  Scenario Outline: Validate result of the formula  in Net VAT to be paid field under Tax Calculation section
    Given User is on Vat e-Filing Page "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Tab
    And clicks on e-filing to fill data
    And Enter data in Operation Performed "<DG>","<DS1>","<DS2>" , "<DGI>","<DSI>", "<FPP>" ,"<Export>", "<Exempt>","<Non-taxable>" for amount under vat collected
    And Enter data in Deduction "<AssetsI>" ,"<AssetsL>", "<GoodsI>" ,"<GoodsL>","<Raw MaterialI>","<Raw MaterialL>" ,"<OthersI>" ,"<OthersL>" and validate total value for Amount of VAT Deductible
    And User entered value "<17>" "<18>" "<19>" "<20>" for Adjustment calculation
    And calculate tax calculations and enter "<VAT3Party>"
    And User click on check box and click on submit button
     And User click on Yes button
    And Enter OTP and click on verify button and click on Ok button

    # need to add submit
    Examples: 
      | TestcaseID                    | Description                                                  | DG  | DS1 | DS2 | DGI | DSI | FPP | Export | Exempt | Non-taxable | VAT3Party | AssetsI | AssetsL | GoodsI | GoodsL | Raw MaterialI | Raw MaterialL | OthersI | OthersL | 17 | 18 | 19 | 20 |
      | Declaration_Verification_16_1 | Enter data in E-filling form  Net VAT to be paid is Negative |   0 |   0 |   0 |   0 |   0 |   0 |      0 |      0 |           0 |         0 |     500 |     500 |    500 |    500 |           500 |           500 |     500 |     500 |  0 |  0 |  0 |  0 |
      | Declaration_Verification_16_2 | Enter data in E-filling form Net VAT to be paid is Zero      | 500 | 500 | 500 | 500 | 500 | 500 |    500 |    500 |         500 |         0 |    2000 |     200 |   2000 |    200 |          2000 |           200 |    2000 |     200 |  0 |  0 |  0 |  0 |

  @TC_10_11_13_DV_2390_Declaration_with_verification
  Scenario Outline: Validate the amount in Total(FC) field of Assets,Goods,Raw Materials, and Other goods and services under Deductions
    Given User is on Vat e-Filing Page "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Tab
    And clicks on e-filing to fill data
    And Enter data in Deduction "<AssetsI>" ,"<AssetsL>", "<GoodsI>" ,"<GoodsL>","<Raw MaterialI>","<Raw MaterialL>" ,"<OthersI>" ,"<OthersL>" and validate total value for Amount of VAT Deductible
    And User validate Amount of VAT Deductible

    Examples: 
      | TestcaseID                        | Description                  | AssetsI | AssetsL | GoodsI | GoodsL | Raw MaterialI | Raw MaterialL | OthersI | OthersL |
      | Declaration_Verification_10_11_13 | Enter data in E-filling form |     120 |     200 |     10 |     10 |            10 |            10 |      20 |      20 |

  @TC_21_DV_2390_Declaration_with_verification
  Scenario Outline: Validate the e-filing schedule Upload functionality
    Given User is on Vat e-Filing Page "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Tab
    And clicks on e-filing to fill data
    And User click on browse button
    And User select file format pdf "<pdf>" and see message "<Mess>"
    And User click on browse button
    And User select file format image "<imj>" and see message "<Mess>"
    And User click on browse button
    And User select file format word "<word>" and see message "<Mess>"
    And User click on browse button and upload file more than two mp "<mb>" and validate mess "<mbMess>"
    And User click on browse button and upload file less than two mp "<lessMB>" and user see file name "<name>"
    And User click on cancel button and excel file gets removed and user see "<removed>"

    Examples: 
      | TestcaseID                  | Description                   | Mess                                  | mbMess                          | name               | removed          | pdf             | imj          | word           | mb                | lessMB             |
      | Declaration_Verification_21 | validate Upload functionality | Selected file format is not supported | File size must be less than 2MB | DRC Test Data.xlsx | No file selected | certificate.pdf | test img.PNG | test word.docx | SampleXLSFile.xls | DRC Test Data.xlsx |

  # submit file
  @TC_24_DV_2390_Declaration_with_verification
  Scenario Outline: Validate the Save Draft button functionality.
    Given User is on Vat e-Filing Page "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Tab
    And clicks on e-filing to fill data
    And User click on Save draft button and check message "<saveDraft>"
    And User entered value "<1>" "<2>" "<2.1>" "<3>" "<4>" "<5>" "<6>" "<7>" "<8>" for Operation Performed
    And User click on Save draft button and check message "<saveDraft>"
    And User entered value "<10>" "<10.1>" "<11>" "<11.1>" "<12>" "<12.1>" "<13>" "<13.1>" for Tax Deductible On
    And User click on Save draft button and check message "<saveDraft>"
    And User entered value "<17>" "<18>" "<19>" "<20>" for Adjustment
    And User click on Save draft button and check message "<saveDraft>"
    And User entered value "<26>" for Tax Calculation
    And User click on Save draft button and check message "<saveDraft>"
    And User click on browser and upload file "<uploadFile>"
    And User click on Save draft button and check message "<saveDraft>"

    Examples: 
      | TestcaseID                  | Description                        | saveDraft                                 |  1 |  2 | 2.1 |  3 |  4 |  5 |  6 |  7 |  8 | 10 | 10.1 | 11 | 11.1 | 12 | 12.1 | 13 | 13.1 | 17 | 18 | 19 | 20 | 26 | uploadFile         |
      | Declaration_Verification_24 | validate Save Draft  functionality | e-Filing declaration drafted successfully | 10 | 10 |  10 | 10 | 10 | 10 | 10 | 10 | 10 | 10 |   10 | 10 |   10 | 10 |   10 | 10 |   10 | 10 | 10 | 10 | 10 | 10 | DRC Test Data.xlsx |

  @TC_22_23_25_26_27_DV_2390_Declaration_with_verification
  Scenario Outline: Validate the check box functionality , authorized Signatory ,Previous button , Submit button functionality
    Given User is on Vat e-Filing Page "<TestcaseID>" "<Description>"
    And User click on Dashboard
    And User click on Tab
    And clicks on e-filing to fill data
    And User click on checkbox
    And User see Authorized Signatory field is activated
    And User again click on checkbox and validate field is deactivated
    And User again click on checkbox and click on Authorized Signatory field
    And User see Authorized Signatory name
    And User validate submit button is disable
    And User click on Authorized Signatory
    And User validate submit button is activate
    And User click on previous button and navigate to Vat e-filing page
    And clicks on e-filing to fill data
    And User click on previous button
    And User validate page is navigated to vat e-filing landing screen
    And clicks on e-filing to fill data
    And User entered value "<1>" "<2>" "<2.1>" "<3>" "<4>" "<5>" "<6>" "<7>" "<8>" for Operation Performed
    And User entered value "<10>" "<10.1>" "<11>" "<11.1>" "<12>" "<12.1>" "<13>" "<13.1>" for Tax Deductible On
    And User entered value "<17>" "<18>" "<19>" "<20>" for Adjustment
    And User entered value "<26>" for Tax Calculation
    And User click on check box and click on submit button
    And User click on Yes button
    And User validate Otp pop up window should appear
    And User click on verify button and validate message "<mess>"
    And User enter invalid data numbers "<numeric>" and click on verify and see mess "<InvalidMess>"
    And User enter invalid data special character "<special>" and click on verify and see mess "<InvalidMess>"
    And User enter Alpha numeric "<Alphanumeric>" and click on verify and see mess "<InvalidMess>"
    And User click on close icon
    And User again click on submit button
    And User click on Yes button
    And User waits for more than two min and click on verify button and see message "<mess>"    
    And User click on close icon on pop up 

    Examples: 
      | TestcaseID                              | Description           |     1 |    2 |  2.1 |   3 |   4 |   5 |   6 |   7 |   8 |  10 | 10.1 |  11 | 11.1 |  12 | 12.1 |  13 | 13.1 |  17 |  18 |  19 |  20 |    26 | mess                    | InvalidMess            | numeric | special | Alphanumeric | ExiMess                |
      | Declaration_Verification_22_23_25_26_27 | validate period field | 10000 | 7000 | 5000 | 500 | 500 | 500 | 500 | 500 | 500 | 500 |  500 | 500 |  500 | 500 |  500 | 500 |  500 | 500 | 500 | 500 | 500 | 10000 | Enter Verification Code | Please enter valid OTP |  123456 | !@$@$3^ | asd1123      | Please enter valid OTP |
