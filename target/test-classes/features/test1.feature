Feature:nirmal

  Scenario Outline: sdf
    Given User login with tax-offcer's credentialssssss
    When click on "<Assesment>" optionsssssss
    And Tax-officer search for the records using "<Month>" , "<Year>" ,"<Filter>"sssssssss
    And serach for the records "<SerachElement>" and click on search buttonssssssssssss
    And click on the "<Action>" optionsssssssssss
    And Verify the details of e-filing operation performedssssssssssss
    And Verify the detailds of Tax-deductiblesssssssssssssss
    And Verify the details of Adjustmnetsssssssssssss
    And Verify the details of Assessment Summaryssssssssssss
    And verify the details of Payment summarysssssssssss
    And check for "<Tost message>"

    Examples: 
      | TestCase_Id      | Description   | Assessment        | Month   | Year | Filter    | SerachElement | Action   | Tost message                        |
      | TC_Assessment_01 | assessment    | Manual Assessment | January | 2018 | Tax Payer | Trisha        | Assess   | Assessment Successfully Completed   |
      | TC_Assessment_02 | re-assessment | Assessed List     | January | 2018 | Tax Payer | Trisha        | Reassess | Reassessment Successfully Completed |
