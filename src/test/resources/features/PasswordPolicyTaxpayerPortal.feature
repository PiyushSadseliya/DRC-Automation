#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
@TaxPayerPortal @PasswordPolicy @Password @ConfirmPassword
Feature: Password Policy for TaxPayer Portal

  @PWP_TC_01
  Scenario Outline: Verify the password hint display on create password screen
    Given The user is on TaxPayer portal Registeration page for registration"<Test Case Id>"|"<Description>"
    When user Enters valid details in fields FullName"Goe Gerrick"Email"goe@fmail.com"MobileNumber"6959874523"
    When user enters password"<password>"confirm"<cpassword>"
    Then Message should be displayed "<msg1>" for Password field"<msg2>" for Confirm Password field

    Examples: 
      | Test Case Id                            | Description                                                | password | cpassword | msg1                                           | msg2                                    |
      | DRC_ATC_TaxPayerPortalPasswordPolicy_01 | Verify the password hint display on create password screen | abcde    | Abcdef    | Password should at least be 6 characters long! | Mismatch Password and Confirm Password! |

  @PWP_TC_02
  Scenario Outline: Validate the Register button with all combination 
    Given The user is on TaxPayer portal Registeration page for registration"<Test Case Id>"|"<Description>"
    When user Enters valid details in fields FullName"Goe Gerrick"Email"goe@fmail.com"MobileNumber"6959874523"
    And Password"abcdefgh"Confirm Password"abcdefgh"    
    Then Message should be displayed "Password must between 6 to 20 alpha numerical values with one capital and special characters." 
    Then click on Register Button
   When user Enters valid details in fields FullName"Goe Gerrick"Email"goe@fmail.com"MobileNumber"6959874523"
    And Password"/*-+()*&"Confirm Password"/*-+()*&"    
    Then Message should be displayed "Password must between 6 to 20 alpha numerical values with one capital and special characters." 
    Then click on Register Button
     When user Enters valid details in fields FullName"Goe Gerrick"Email"goe@fmail.com"MobileNumber"6959874523"
    And Password"12345678"Confirm Password"12345678"    
    Then Message should be displayed "Password must between 6 to 20 alpha numerical values with one capital and special characters." 
    Then click on Register Button
     When user Enters valid details in fields FullName"Goe Gerrick"Email"goe@fmail.com"MobileNumber"6959874523"
     And Password"        "Confirm Password"           "    
     Then Message should be displayed "Please enter valid password." 
    Then click on Register Button
     When user Enters valid details in fields FullName"Goe Gerrick"Email"goe@fmail.com"MobileNumber"6959874523"
     And Password"LoremIpsumissimplydummytexSDGGGtoftheprf@intin43534534&5345345345gandypesettingindustryLoremIpsumasbeenthndustrytand"Confirm Password"LoremIpsumissimplydummytexSDGGGtoftheprf@intin43534534&5345345345gandypesettingindustryLoremIpsumasbeenthndustrytand"    
     Then password and confirm password should accept field length of upto twenty
     Then click on Register Button
     When user Enters valid details in fields FullName"Goe Gerrick"Email"goe@fmail.com"MobileNumber"6959874523"
    And Password"Abcde@123"Confirm Password"abcd@123"    
    Then Message should be displayed "Mismatch Password and Confirm Password!." 
    Then click on Register Button
      When user Enters valid details in fields FullName"Goe Gerrick"Email"goe@fmail.com"MobileNumber"6959874523"
    And Password"Abcd@1234"Confirm Password"Abcd@1234"
    And Accepts privacy policy    
     Then click on Register Button to register user
     Then user is on "Registration Success" Screen
    Examples: 
      | Test Case Id                            | Description |
      | DRC_ATC_TaxPayerPortalPasswordPolicy_02 | Validate the Register button with all combination in password field          |

  @PWP_TC_03 @ForgotPassort @Link
  Scenario Outline: Verify that for forgot password link
    Given The user is on TaxPayer portal "<Test Case Id>"|"<Description>"
    When user clicks on Forgot Password Link
    Then User is on Reset Password
    
    

    Examples: 
      | Test Case Id                            | Description                          |
      | DRC_ATC_TaxPayerPortalPasswordPolicy_03 | Verify that for forgot password link |
 
  @PWP_TC_04 @ResetPassword @Email-ID
  Scenario Outline: Validate the Reset password/forgot password functionality using email id
    Given The user is on TaxPayer portal "<Test Case Id>"|"<Description>"
    When user clicks on Forgot Password Link
    Then User is on Reset Your Password
    And Enters UnRegistered "fhshhsfdks@fdgfdg.com"
    And Clicks button Send OTP
    And Message"Email is not verified." Should be displayed
    And Enters blank spaces in email"fsf sdf @sdf sdf.c om"
    And Clicks button Send OTP
    And Message"Email is not valid." Should be displayed
    And Enter Registered Email"abc@mailinator.com"
    And Clicks button Send OTP
    And Enter OTP After Three minutes
    And Message"OTP Expired." Should be displayed
    And Enter Registered Email"abc@mailinator.com"
    And Clicks button Send OTP
    And Enter OTP Received in the mail
    And Click on verify button
    And user should be on Reset Password Screen
    And Enters new password"abcdefgh" in password field
    And Enter new password in "abcdefgh" in confirm password field
    And Click on Reset Password button
    And Message"Password must between 6 to 20 alpha numerical values with one capital and special characters" Should be displayed
    And Enters new password"12345678" in password field
    And Enter new password in "12345678" in confirm password field
    And Click on Reset Password button
    And Enters new password"abcd@123" in password field
    And Enter new password in "abcd@1234" in confirm password field
    And Click on Reset Password button
    And Enter blank in password field
    And Enter blank in confirm password field
    And Click on Reset Password button
    And Message"Password must between 6 to 20 alpha numerical values with one capital and special characters" Should be displayed
    And Enters new password"Abcde@123" in password field
    And Enter new password in "abcde@123" in confirm password field
    And Click on Reset Password button
    And Message"Mismatch Password and Confirm Password!" Should be displayed
    And Enters new password"Abcde@123" in password field
    And Enter new password in "Abcde@123" in confirm password field
    And Click on Reset Password button
    And Enters new password"LoremIpsumissimplydummytexSDGGGtoftheprf@intin43534534&5345345345gandypesettingindustryLoremIpsumasbeenthndustrytand" in password field
    And Enter new password in "LoremIpsumissimplydummytexSDGGGtoftheprf@intin43534534&5345345345gandypesettingindustryLoremIpsumasbeenthndustrytand" in confirm password field
    And Click on Reset Password button
    And Message"Password must between 6 to 20 alpha numerical values with one capital and special characters" Should be displayed
    And Enters new password"Abc @1234" in password field
    And Enter new password in "Abc @1234" in confirm password field
    And Click on Reset Password button
    And user should be on "Password has been changed successfully" page

    Examples: 
      | Test Case Id                            | Description                                                              |
      | DRC_ATC_TaxPayerPortalPasswordPolicy_04 | Validate the Reset password/forgot password functionality using email id |
      
@PWP_TC_05 @ResetPassword @MobileNumber @Hold
Scenario Outline: Validate the Reset password/forgot password functionality using Mobile Number
Given The user is on TaxPayer portal "<Test Case Id>"|"<Description>"
    When user clicks on Forgot Password Link
    Then User is on Reset Your Password
    And Enter Code"000"
    And Enter Mobile Number"000000"
    And Clicks button Send OTP
    And Message"Mobile number is not verified." Should be displayed
    And Enter Code"Ab"
    And Enter Mobile Number"abcdefgh"
    And user should not be able to enter the Alphabets
    And Enter Code""
    And Enter Mobile Number"8457458952"
    And Clicks button Send OTP
    And Message"Mobile number is not verified." Should be displayed
    And Enter Code"91"
    And Enter Mobile Number""
    And Clicks button Send OTP
    And Message"Mobile number is not verified." Should be displayed
    And Enter Code""
    And Enter Mobile Number"933114596"
    And Clicks button Send OTP
    And Message"Mobile number is not verified." Should be displayed
    And Enter Code"91"
    And Enter UnRegistered Mobile Number"933114596"
    And Clicks button Send OTP
    And Message"Mobile number is not verified." Should be displayed
     And Enter Code"91"
    And Enter Registered Mobile Number""
    And Clicks button Send OTP
    And Message"Mobile number is not verified." Should be displayed
    ###REgistered Mobile number
     Examples: 
      | Test Case Id                            | Description                                                              |
      | DRC_ATC_TaxPayerPortalPasswordPolicy_05 |  Validate the Reset password/forgot password functionality using Mobile Number |
    
    
         
@PWP_TC_06 
Scenario Outline: Verify the password hint display on change password screen
Given User should be on Change Password screen"<Test Case Id>"|"<Description>" 
When user dont Enter any password
Then Messages dhould be displayed"Existing password is required!.""Password must between 6 to 20 alpha numerical values with one capital and special characters.""Mismatch Password and Confirm Password!."
Examples: 
      | Test Case Id                            | Description                                                              |
| DRC_ATC_TaxPayerPortalPasswordPolicy_06 | Verify the password hint display on change password screen|

         
@PWP_TC_07 
Scenario Outline: Validate the Change password on submit button functionality with all combination 
Given User should be on Change Password screen"<Test Case Id>"|"<Description>" 
When Enters invalid Old Password"abcd" invalid New Password"abcd"  invalid confirm password"abcd"
Then click on submit button
And Message should display "* Old password is invalid.""* Password must between 6 to 20 alpha numerical values with one capital and special characters."
When Enter Valid Old password"12345678"
And Enter New password without capital letters"abcd@123"
And Enter Confirm New password without capital letters"abcd@123"
Then click on submit button
And Message should display "New password is required"" Confirm password is required"
And Enter Confirm password"sdfs#Adsff"
Then click on submit button
And Message should display "* Existing password is required!""* New password is required!"
And Enter Old Password"shfhfh"
And Enter new password"sadff"
Then click on submit button
And Message should display "Confirm password is required!"
And Enter new password"sadff"
And Enter Confirm password"sdfs#Adsff"
Then click on submit button
And Message should display "Existing password is required!"
And Enter Old Password"shfdsfdhfh"
And Enter new password"   "
And Enter Confirm password"          "
Then click on submit button
And Message should display "Password must between 6 to 20 alpha numerical values with one capital and special characters"
And Enter Old Password"shfdretertert43535345345345345345YU345345gfgdfgdgdgf@W323435345345345kjhdkjfkjy534h53h45kh34k5h34jk5hiy345783478345783475hejkhtsfdhfh"
And Enter new password"shfdretertert4353534534534SF5345345345345gfgdfgdgdgf@W323435345345345kjhdkjfkjy534h53h45kh34k5h34jk5hiy345783478345783475hejkhtsfdhfh"
And Enter Confirm password"shfdretertert43535345345345345WF345345345gfgdfgdgdgf@W323435345345345kjhdkjfkjy534h53h45kh34k5h34jk5hiy345783478345783475hejkhtsfdhfh"
Then user should not be able to enter more than 20 characters
And Enter Old Password"testreject123"
And Enter new password"testReject@123"
And Enter Confirm password"testReject@123"
Then Validation Message should be displayed "Password Updated Successfully."
Examples: 
      | Test Case Id                            | Description                                                              |

   | DRC_ATC_TaxPayerPortalPasswordPolicy_07 |  Validate the Change password on submit button functionality with all combination  | 
   
   
    
    @PWP_TC_08 @Hold 
Scenario Outline: Validate the user enter wrong password more than three or more time 
Given User should be on Login screen"<Test Case Id>"|"<Description>" 
When Enter Email Id "abc@gmail.com"
And Enters wrong password "sfsdffsd@dfgdg"
And Click on sign in button
Then Message"Invalid login attempt." Should be displayed
When Enters wrong password "sfsdffsd@dfgdg"
And Click on sign in button
Then Message"Invalid login attempt." Should be displayed
When Enters wrong password "sfsdffsd@dfgdg"
And Click on sign in button
Then Message"Your Account has been locked please contact your support." Should be displayed



Examples: 
      | Test Case Id                            | Description                                                              |

   | DRC_ATC_TaxPayerPortalPasswordPolicy_08 |  Validate the user enter wrong password more than three or more time   | 
    
  
    
        @PWP_TC_09
Scenario Outline: Validate the user enter wrong email and right password
Given User should be on Login screen"<Test Case Id>"|"<Description>" 
When Enter wrong Email Id "sfsd@sf.com"
And Enter valid password"Abcde@12345"
And Click on sign in button
Then Message"Email is not verified." Should be displayed
When Enter valid Email id "abc@mailinator.com"
And Enter Invalid password"sdhsjdfh@3453"
And Click on sign in button
 Then Message"Invalid login attempt." Should be displayed
 When Click on Reset link
 Then user should be redirected to Forgot password Screen
 Then Enter registerd email id"abc@mailinator.com"
 Then Click on Send OTP and Enters the OTP pin
 When Enter valid password"Abcd@1324"
  And Enter valid in confirm password"Abcd@1324"
  Then Click on Reset button password reset
  And user should be on Reset Password Screen
  And user is on sign in page
  And Enter email"abc@mailinator.com"
  And Enters Old password"sadf@fsdf"
 When Click on sign in button
 Then Message"Invalid login attempt." Should be displayed
 And enter valid email"abc@mailinator.com"
 And Enter more than fifty character in password field"dshfkhfkshfklshdfklsdhflkhdsf@jjsdfl;js;fljsf;ljsfd@djgjdgljdfgljdgjdgl;jdgljjjdljgdlfjgfld;jgl;ljljljfdhdjfshgjdfhsgdhfgAGFERERTERT"
 And user is not able to enter more than fifty character
 
 
 


Examples: 
      | Test Case Id                            | Description                                                              |
   | DRC_ATC_TaxPayerPortalPasswordPolicy_09 |  Validate the user enter wrong password more than three or more time   | 
   
   
   
@PWP_TC_10
Scenario Outline: Validate the user enter valid user name and password with blank space between two words
Given User should be on Login screen"<Test Case Id>"|"<Description>"
When Enter valid Email id "demo1@mailinator.com"
And Enter password"demo 1234" 
And Click on sign in button
Then user should not be logged in to the application
When Enter valid Email id "demo1@mailinator.com"
And Enter password"demo1234" 
And Click on sign in button
Then user should be logged in to the application
Examples: 
      | Test Case Id                            | Description                                                              |
   | DRC_ATC_TaxPayerPortalPasswordPolicy_10|  Validate the user enter valid user name and password with blank space between two words   | 
   

    

