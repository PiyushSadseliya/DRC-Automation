Feature: Reset Module

#@Forgot_Password_Email_Valid
Scenario Outline: DRC Tax Portal Forgot Password with Valid Data
    Given User is on DRC Tax Portal 
    When User Clicks on Forget Password	
		And User Enter Same Email: "<email>" 
		And Clicks on SendOTP
	  And User wait for OTP to come on Email and Enter OTP 
	  And User Enter new Password "<newPassword>"
	  And User Enter Confirm Password "<confirm>" 
	  And User Clicks on Reset Password
	  And User Clicks on Go to Sign In 
	  And User Enter new "<oldEmail>" "<NewPassword>"
	  And User Clicks on "SignIn" 
	  Then User see "Dashboard"
	  
		
		
		  Examples: 
      | TestcaseID                              | | email               | confirm   | newPassword | oldEmail            | NewPassword |
     	|	Valid_DRC_ATC_LoginTaxPortal_Forgot_01	| | franky@o3enzyme.com | Franky007* | Franky007* | franky@o3enzyme.com | Franky007*  |

#@Forgot_Password_Email_InValid
Scenario Outline: DRC Tax Portal Forgot Password with Invalid Data

    Given User is on DRC Tax Portal page
    And   User Clicks on Forget Password? Reset
		And   User Enter Email: "<emailinvalid>" page
		And   Clicks on SendOTP button and checks Validation message "<message>"
		
		
			  
	   Examples: 
     | TestcaseID                        | emailinvalid | message |               
     | Invalid_DRC_ATC_LoginTaxPortal_01 | 						  |  Please enter valid email/mobile number|
     | Invalid_DRC_ATC_LoginTaxPortal_02 | Wiopasdfklzxcvbnmqwertqwertyuiopasdfcsdfsdfdfsdfsdfsdfsdfsfkjhdfionjkjnjbikuhuhoijhojiuhasknjsdanskdaoilasdjksadijasdoiasdioasdoiiialiidghjklzxcvbnmqwertyuiopasdasasd@gmail.com | Email is not valid.|             
		 | Invalid_DRC_ATC_LoginTaxPortal_03 | Invalidsiopasdfklzxcvbnm qwertqwertyuiopasdf ghjklzxcvbasdasjkd lnlknasd lnasdnal lsdlnmalds asdasd lnmlnlasd lasdln lasmasd dl alsad maasd sdlasd msamd n mqwertyui opasdyu ioasasd@gmail.com  | Email is not valid.|
		 | Invalid_DRC_ATC_LoginTaxPortal_04 | ranky@storiqax.com |Email is not verified.|
		 | Invalid_DRC_ATC_LoginTaxPortal_05 | frankystoriqax     |Email is not valid.|
		 | Invalid_DRC_ATC_LoginTaxPortal_06 | #@%^%#$@#$@#.com |Email is not valid.|
		 | Invalid_DRC_ATC_LoginTaxPortal_07 | @dstoriqax.com  |Email is not valid.|
		 | Invalid_DRC_ATC_LoginTaxPortal_08 | Franky Mehta<franky@storiqax.com> |Email is not valid.|
		 | Invalid_DRC_ATC_LoginTaxPortal_09 | franky.storiqax.com  |Email is not valid.|
		 | Invalid_DRC_ATC_LoginTaxPortal_10 | franky@storiqax@storiqax.com  |Email is not valid.|
		 | Invalid_DRC_ATC_LoginTaxPortal_11 | .franky@storiqax.com  |Email is not valid.|
		 | Invalid_DRC_ATC_LoginTaxPortal_12 | franky.@storiqax.com  |Email is not valid.|
		 | Invalid_DRC_ATC_LoginTaxPortal_13 | franky..@storiqax.com  |Email is not verified.|
		 | Invalid_DRC_ATC_LoginTaxPortal_14 | franky@storiqax.com(Franky Mehta)  |Email is not valid.|
		 | Invalid_DRC_ATC_LoginTaxPortal_15 | franky@storiqax  |Email is not valid.|
		 | Invalid_DRC_ATC_LoginTaxPortal_16 | franky@-storiqax.com  |Email is not valid.|
		 | Invalid_DRC_ATC_LoginTaxPortal_17| franky@-storiqax.web |Email is not valid.|
		 | Invalid_DRC_ATC_LoginTaxPortal_18| franky@111.222.333.4444  |Email is not valid.|
		 | Invalid_DRC_ATC_LoginTaxPortal_19| franky@storiqax..com  |Email is not valid.|
		 | Invalid_DRC_ATC_LoginTaxPortal_20| Q@.in  |Email is not valid.|
		 | Invalid_DRC_ATC_LoginTaxPortal_21| a@s.in  |Email is not verified.|
		 | Invalid_DRC_ATC_LoginTaxPortal_22| sdfklzxcvbnmqwertqwertyuiopasdfcsdfsdfdfsdfsdfsdfsdfsfkjhdfionjkjnjbikuhuhoijhojiuhasknjsdanskdaoilasdjksadijasdoiasdioaspasdasadsfssfwwerwwewerasdssd@gmail.com  |Email is not valid.|
		 
#@Forgot_Password_New_Confirm_Valid
Scenario Outline: Validate New Password and Confirm password fields with Valid data.
    Given User is on DRC Tax Portal 
    When User Clicks on Forget Password	
		And User Enter Same Email: "<email>" 
		And Clicks on SendOTP
	  And User wait for OTP to come on Email and Enter OTP 
	  And User Enter new Password "<newPassword>"
	  And User Enter Confirm Password "<confirm>" 
	  And User Clicks on Reset Password
	  And User Clicks on Go to Sign In 
	  And User Enter new "<oldEmail>" "<NewPassword>"
	  And User Clicks on "SignIn" 
	  Then User see "Dashboard"
	  			
		  Examples: 
      | TestcaseID                              | | email               | newPassword | confirm       | oldEmail            | NewPassword |
     	|	Valid_DRC_ATC_LoginTaxPortal_Forgot_01	| | franky@o3enzyme.com | Franky0007* | Franky0007*   | franky@o3enzyme.com | Franky0007* |
     	
     
@Forgot_Password_New_Confirm_InValid
Scenario Outline: Validate New Password and Confirm password fields with InValid data.
   Given User is on DRC Tax Portal 
    When User Clicks on Forget Password	
		And User Enter Same Email: "<email>" 
		And Clicks on SendOTP
	  And User wait for OTP to come on Email and Enter OTP 
	  And User Enter new Password "<newPassword>"
	  And User Enter Confirm Password "<confirm>" 
	 #  And User Clicks on Reset Password
	 And User Clicks on Reset Password "<validationMessage>"
	  #And User Clicks on Go to Sign In 
	  #And User Enter new "<oldEmail>" "<NewPassword>"
	  #And User Clicks on "SignIn" 
	  #Then User see "Dashboard"
	  		
		  Examples: 
      | TestcaseID                              | email               | newPassword  | confirm        | validationMessage                                    | oldEmail             | NewPassword |
     |	Valid_DRC_ATC_LoginTaxPortal_Forgot_01	| franky@o3enzyme.com |              | Franky0007*    | Password is required.                                | franky@o3enzyme.com  | Franky0007* |
     |	Valid_DRC_ATC_LoginTaxPortal_Forgot_02	| franky@o3enzyme.com | Franky0007*  |                | Confirm password is required.                        | franky@o3enzyme.com  | Franky0007* |
     |	Valid_DRC_ATC_LoginTaxPortal_Forgot_03	| franky@o3enzyme.com | Franky321    | Frankey123     | Password and confirm password do not match.          |  franky@o3enzyme.com | Franky0007* |
     |	Valid_DRC_ATC_LoginTaxPortal_Forgot_04	| franky@o3enzyme.com | ABCDEFGHIJKL | ABCDEFGHIJKL   | Password must have atleast one lowercase character.  | franky@o3enzyme.com | Franky0007*  |
     |	Valid_DRC_ATC_LoginTaxPortal_Forgot_05	| franky@o3enzyme.com | abcdefghijkl | abcdefghijkl   | Password must have atleast one uppercase character.  | franky@o3enzyme.com | Franky0007*  |
     |	Valid_DRC_ATC_LoginTaxPortal_Forgot_06	| franky@o3enzyme.com | @@#$%^&()_+  | @@#$%^&()_+    | Password must have atleast one lowercase character.  | franky@o3enzyme.com | Franky0007* |         
     |	Valid_DRC_ATC_LoginTaxPortal_Forgot_07	| franky@o3enzyme.com | Franky7      | Franky7        | Password must have atleast one special character.    | franky@o3enzyme.com | Franky0007* |
    
    
 #    |	Valid_DRC_ATC_LoginTaxPortal_Forgot_08	| | franky@o3enzyme.com | Qwert                | Qwert          |Minimum Password Length Required is 6 | franky@o3enzyme.com | Franky0007* |
 #    |	Valid_DRC_ATC_LoginTaxPortal_Forgot_09  | franky@o3enzyme.com | Frankeymehta199307**frankymehta1993qwertyuioasdfgh | Frankeymehta199307**frankymehta1993qwertyuioasdfgh | Max Password Length Required is 20 | | | 
    	