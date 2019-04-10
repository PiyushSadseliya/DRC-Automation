@UserRegistration
Feature: User Registration for the steps involved in creating a user account for logging into DRC e-services portal that would be used by the taxpayer to perform tax activities

  @Valid_Registration
  Scenario Outline: New User should be allowed to Register in DRC TAX Portal with valid details.
    Given User is on VAT Registration Dashboard
    When Establish a connection with data base and execute query to create user"<username>".
    And Update data in another table based on created user
    And Update data in roles table

    Examples: 
      | Test Case ID                  | Description              | username               |
      | DRC_ATC_Valid_Registration_01 | Register with valid data | Regression AprilTOne   |
      | DRC_ATC_Valid_Registration_02 | Register with valid data | Regression AprilTTwo   |
      | DRC_ATC_Valid_Registration_03 | Register with valid data | Regression AprilTThree |

  @Invalid_Registration @mtc3 @mtc4 @mtc5 @mtc6 @mtc8 @mtc9 @Sprint3
  Scenario Outline: User Should not be allowed to Register in DRC TAX Portal with InValid details.
    Given User is on Welcome to DRC Tax Portal page"<Test Case ID>" "<Description>"
    When User Clicks on Register
    Then User should be Navigated to Register With Us page
    And User Enters Data "<Name>" "<Email>" "<Password>" "<Confirm Password>" "<Mobile Number>" in the respective fields
    And Accepts/Rejects Terms and conditions
    And Clicks On Register Button
    Then Error messages should be shown to user as"<Validation Messages>"

    Examples: 
      | Test Case ID                    | Description                                                        | Name                                                                                                                                                                                                              | Email                                                                                                                                                   | Password  | Confirm Password | Mobile Number | Validation Messages      |
      | DRC_ATC_Invalid_Registration_01 | Full name field is blank                                           |                                                                                                                                                                                                                   | abhi@o3enzyme.com                                                                                                                                       | abq@12345 | abq@12345        | 8989898989898 | Full Name is required    |
      | DRC_ATC_Invalid_Registration_02 | Full Name field length greater than size limit(fileds is trimmied) | GaVEkuggQyLviyqmHBwSxFRMvcCyCnxeYzsVrkrXVDblclicks o oJVlnRyjxnEaanGJuKIDVmGbmQllVNgmExbvkcwPwJGuqvJZJARfsJPNWLzHMudpfJChTSfKZiHjwzbkbuMuzfWgjWstKOWeEAqXzLwdIwzBYjYxnefAddkIxsNNmPZaxNKMxvEmhPMPrHHexwdSpzLoYuid | abhi@o3enzyme.com                                                                                                                                       | abq@12345 | abq@12345        | 8989898989898 |                          |
      | DRC_ATC_Invalid_Registration_03 | Full Name field with special characters and spaces                 | sdfhsdhfh@34343545dsfsdfsdfsdfsdfsdfsdfuzfWgjWstKOWeEAqXzLwdIwz                                            BYjYxnefAddkIxsNNmPZaxNKMxvEmhPMPrHHexwdSpzLoYuidVlPJhxTffNnh                                          | abhi@o3enzyme.com                                                                                                                                       | abq@12345 | abq@12345        | 8989898989898 | Enter valid Full Name    |
      | DRC_ATC_Invalid_Registration_04 | Full name field with minimum characters                            | A a                                                                                                                                                                                                               | abhi@o3enzyme.com                                                                                                                                       | abq@12345 | abq@12345        | 8989898989898 | Enter valid Full Name    |
      | DRC_ATC_Invalid_Registration_05 | Email field is empty                                               | Abhi Jo                                                                                                                                                                                                           |                                                                                                                                                         | abq@12345 | abq@12345        | 8989898989898 | Email is required        |
      | DRC_ATC_Invalid_Registration_06 | Email id is blank                                                  | Abhi Jo                                                                                                                                                                                                           | abhi                                                                                                                                                    | abq@12345 | abq@12345        | 8989898989898 | Please enter valid Email |
      | DRC_ATC_Invalid_Registration_07 | Email id without username                                          | Abhi Jo                                                                                                                                                                                                           | @gmail.com                                                                                                                                              | abq@12345 | abq@12345        | 8989898989898 | Please enter valid Email |
      | DRC_ATC_Invalid_Registration_08 | Invalid Email id                                                   | Abhi Jo                                                                                                                                                                                                           | Ravii <Ravii@1rivet.com>                                                                                                                                | abq@12345 | abq@12345        | 8989898989898 | Please enter valid Email |
      | DRC_ATC_Invalid_Registration_09 | Email id with dots                                                 | Abhi Jo                                                                                                                                                                                                           | Ravii.1rivet.com                                                                                                                                        | abq@12345 | abq@12345        | 8989898989898 | Please enter valid Email |
      | DRC_ATC_Invalid_Registration_10 | Invalid Email id  (@)                                              | Abhi Jo                                                                                                                                                                                                           | Ravii@1rivet@1rivet.com                                                                                                                                 | abq@12345 | abq@12345        | 8989898989898 | Please enter valid Email |
      | DRC_ATC_Invalid_Registration_11 | Invalid Email id  dot in the begining                              | Abhi Jo                                                                                                                                                                                                           | .Ravii@1rivet.com                                                                                                                                       | abq@12345 | abq@12345        | 8989898989898 | Please enter valid Email |
      | DRC_ATC_Invalid_Registration_12 | Invalid Email id  (Multiple Dots)                                  | Abhi Jo                                                                                                                                                                                                           | Ravii..Ravii@1rivet.com                                                                                                                                 | abq@12345 | abq@12345        | 8989898989898 | Please enter valid Email |
      | DRC_ATC_Invalid_Registration_13 | Invalid Email id  (Special Characters)                             | Abhi Jo                                                                                                                                                                                                           | ÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞ@gmail.com                                                                                                                               | abq@12345 | abq@12345        | 8989898989898 | Please enter valid Email |
      | DRC_ATC_Invalid_Registration_14 | Invalid Email id                                                   | Abhi Jo                                                                                                                                                                                                           | Ravii@1rivet.com testing                                                                                                                                | abq@12345 | abq@12345        | 8989898989898 | Please enter valid Email |
      #| DRC_ATC_Invalid_Registration_15 | Invalid Email id  (no domain)                       | Abhi Jo                                                                                                                                                                  | Ravi@1rivet                                                                                                                                            | abq@12345  | abq@12345        |               8989898989898 | Please enter valid Email                      |
      | DRC_ATC_Invalid_Registration_16 | Invalid Email id   with hypen                                      | Abhi Jo                                                                                                                                                                                                           | Ravi@-1rivet.com                                                                                                                                        | abq@12345 | abq@12345        | 8989898989898 | Please enter valid Email |
      | DRC_ATC_Invalid_Registration_17 | Invalid Email id  multiple dots   before domain                    | Abhi Jo                                                                                                                                                                                                           | Ravii@1rivet..com                                                                                                                                       | abq@12345 | abq@12345        | 8989898989898 | Please enter valid Email |
      | DRC_ATC_Invalid_Registration_18 | Invalid Email id  invalid domain                                   | Abhi Jo                                                                                                                                                                                                           | sdhfklshdfhsdfkhsdklfhskdfhkasdhf@hdkhkldhkhgflkhsflkhdfklhsdflkshdfdsfjdsklfjsdlkjfksdjflkjflsdjfskdjflksdjfkjflkjdsflksjdflksjdflkjflkjdslkklsdhf.com | abq@12345 | abq@12345        | 8989898989898 | Please enter valid Email |
      | DRC_ATC_Invalid_Registration_19 | Invalid Email id  multiple dots   after username                   | Abhi Jo                                                                                                                                                                                                           | Ravii@1rivet..com                                                                                                                                       | abq@12345 | abq@12345        | 8989898989898 | Please enter valid Email |
