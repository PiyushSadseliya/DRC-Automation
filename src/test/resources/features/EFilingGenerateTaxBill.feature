Feature: US943 E-Filing Generate Tax Bill
  I want to use this template for my feature file

  @TaxPaymentPrint
  Scenario Outline: The User has logged-in Using Valid Credentials and has already declared the transaction and is ready to Pay the tax Over the Counter can Print the form or cancel it
    Given The User has logged-in Using Valid Credentials and has already filed the transactions "<username>""<password>"
    And Clicks on Pay button and is on the Payment of Tax
    When Clicks On Proceed to Pay
    Then User is on Payment Method
    And Selects Over the Counter Paymnet Method
    And Checks whether Tax Bill No "<billno>",generated time "<time>",duedate "<duedate>" is displayed
    And also nitva"<nitva>"email"<email>"Mobile"<mobileno>"name"<name>"address"<add>"vatamt"<vatamt>"intrestamt"<intamt>"penaltyamt"<pamt>"latefeeamt"<ltfeeamt>"totalamt"<totamt>"amt in words"<words>"
    And Also selects mode of Payment as OTC "<otc>" or NEFT_RTGS"<neftrtgs>"
    And Checks benficname"<bename>"benficac"<beac>"benficbrname"<bebrname>"benficbrcode"<bebrcode>"
    And Depositor details dname"<dname>"ddesignation"<ddgn>"dsign"<dsign>"ddate"<ddate>"
    And Verifes Paid Tax Information content nitva"<nitva>"taxpayername"<name>"paymentmode"<pmode>"nameofbank_office"<b_o_name>"acno"<acno>"pbcode"<pbcode>"amt"<amt>"pdate"<pdate>"ackchq"<ackchq>"
    And Applicant Details rname"<rname>"racno"<racno>"rchqno"<rchqno>"rdate"<rdate>"rcno"<rcno>"
    And Beneficary Details "<bename>"benficac"<beac>"benficbrname"<bebrname>"benficbrcode"<bebrcode>"
    And clicks Print"<print>"

    Examples: 
      | Test Case ID                      | username             | password | billno | time | duedate | nitva | email | mobileno | name | add | vatamt | intamt | pamt | ltfeeamt | totamt | words | otc | neftrtgs | bename | beac | bebrname | bebrcode | dname | ddgn | dsign | ddate | pmode | b_o_name | acno | pbcode | amt | pdate | ackchq | rname | racno | rchqno | rdate | rcno | print |
      | DRC_ATC_EFilingGenerateTaxBill_01 | demo2@mailinator.com | demo1234 |        |      |         |       |       |          |      |     |        |        |      |          |        |       |     |          |        |      |          |          |       |      |       |       |       |          |      |        |     |       |        |       |       |        |       |      | n     |
      | DRC_ATC_EFilingGenerateTaxBill_01 | demo2@mailinator.com | demo1234 |        |      |         |       |       |          |      |     |        |        |      |          |        |       |     |          |        |      |          |          |       |      |       |       |       |          |      |        |     |       |        |       |       |        |       |      | y     |

  @TaxpaymentCancel
  Scenario Outline: The User has logged-in Using Valid Credentials and has already declared the transaction and is ready to Pay the tax Over the Counter can Print the form or cancel it
    Given The User has logged-in Using Valid Credentials and has already filed the transactions "<username>""<password>"
    And Clicks on Pay button and is on the Payment of Tax
    When Clicks On Proceed to Pay
    Then User is on Payment Method
    And Selects Over the Counter Paymnet Method
    And Click Cancel

    Examples: 
      | Test Case ID                      | username             | password |
      | DRC_ATC_EFilingGenerateTaxBill_02 | demo2@mailinator.com | demo1234 |
      @TaxpaymentBarcode
  Scenario Outline: The User has logged-in Using Valid Credentials and has already declared the transaction and is ready to Pay the tax Over the Counter can Print the form or cancel it
    Given The User has logged-in Using Valid Credentials and has already filed the transactions "<username>""<password>"
    And Clicks on Pay button and is on the Payment of Tax
    When Clicks On Proceed to Pay
    Then User is on Payment Method
    And Selects Over the Counter Paymnet Method
    And Checks barcode

    Examples: 
      | Test Case ID                      | username             | password |
      | DRC_ATC_EFilingGenerateTaxBill_03 | demo2@mailinator.com | demo1234 |
      
