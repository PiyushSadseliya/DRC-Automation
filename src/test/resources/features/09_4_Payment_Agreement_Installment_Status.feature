Feature: Payment Agreement Installment Status 

  @TC_02_Combine
  Scenario Outline: Validating agreement id, status,EMI start and END date ,Installement amount
    Given User is on Payment Agreement Installment Status "<TestcaseID>" "<Description>"
    And User click on case management
    And User click on filter by on case management and click on "<filter>"
    And User Type id "<id>"
    And User click on search button
    And User click on manage drop down and click on view
    And User click on eye button on installement page
    And User see installement pop up appear 
    And User see date "<seedate>"
    And User see agreement id "<aid>"
    And User see status column "<status>"
    And User validate date field "<date>"
    And User see installment Amount "<amount>"
    And User see emi start date "<start>" and end date "<endDate>"
    And User see close button  

    Examples: 
      | TestcaseID                        | Description                                                                 | filter           | id              |aid          | status  |seedate |date        | amount   | start       | endDate     |
      | Payment_Agreement_Installement_02 | Validating agreement id, status,EMI start and END date ,Installement amount | drp_CaseID_Click | R18092000000018 |PA18092000005| Pending |20-Sep-2018 |27-Sep-2018 | 18619.95 | 27-Sep-2018 | 25-Oct-2018 |
