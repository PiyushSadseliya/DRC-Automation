Feature: Login Module
 
@Run_Valid_Login
  Scenario Outline: DRC Tax Portal with Valid Data
    Given User is on DRC Tax Portal
    When User Enter Data: "<email>" "<password>"
    And User Clicks on "SignIn"
    Then User see "Dashboard"
   # And User Clicks on SendCode
   # And User Clicks on Verify
   # Then User see "Dashboard"
    
   

    Examples: 
      | TestcaseID                        | email               | password  |
     	|	Valid_DRC_ATC_LoginTaxPortal_01	  | franky@o3enzyme.com | Franky07* |
     
       
@Run_InValid_Login
  Scenario Outline: DRC Tax Portal with InValid Data
    Given User is on DRC Tax Portal 
    When User Enter Data: "<email>" "<password>"	
		And User Clicks on "SignIn" and checks Validation message "<message>"
     
    Examples: 
		 | TestcaseID                        | email            | password  | message |

     | Invalid_DRC_ATC_LoginTaxPortal_01 | 								  | Franky07* | Email is required.|
     | Invalid_DRC_ATC_LoginTaxPortal_02 | Wiopasdfklzxcvbnmqwertqwertyuiopasdfcsdfsdfdfsdfsdfsdfsdfsfkjhdfionjkjnjbikuhuhoijhojiuhasknjsdanskdaoilasdjksadijasdoiasdioasdoiiialiidghjklzxcvbnmqwertyuiopasdasasd@gmail.com | Franky07* | Email is not valid.|             
		 | Invalid_DRC_ATC_LoginTaxPortal_03 | Invalidsiopasdfklzxcvbnm qwertqwertyuiopasdf ghjklzxcvbasdasjkd lnlknasd lnasdnal lsdlnmalds asdasd lnmlnlasd lasdln lasmasd dl alsad maasd sdlasd msamd n mqwertyui opasdyu ioasasd@gmail.com | Franky07* | Email is not valid.|
		 | Invalid_DRC_ATC_LoginTaxPortal_04 | ranky@storiqax.com | Franky07* |Email is not verified.|
		 | Invalid_DRC_ATC_LoginTaxPortal_05 | frankystoriqax     | Franky07* |Email is not valid.|
		 | Invalid_DRC_ATC_LoginTaxPortal_06 | #@%^%#$@#$@#.com | Franky07* |Email is not valid.|
		 | Invalid_DRC_ATC_LoginTaxPortal_07 | @dstoriqax.com | Franky07 |Email is not valid.|
		 | Invalid_DRC_ATC_LoginTaxPortal_08 | Franky Mehta<franky@storiqax.com> | Franky07* |Email is not valid.|
		 | Invalid_DRC_ATC_LoginTaxPortal_09 | franky.storiqax.com | Franky07* |Email is not valid.|
		 | Invalid_DRC_ATC_LoginTaxPortal_10 | franky@storiqax@storiqax.com | Franky07* |Email is not valid.|
		 | Invalid_DRC_ATC_LoginTaxPortal_11 | .franky@storiqax.com | Franky07* |Email is not valid.|
		 | Invalid_DRC_ATC_LoginTaxPortal_12 | franky.@storiqax.com | Franky07* |Email is not valid.|
		 | Invalid_DRC_ATC_LoginTaxPortal_13 | franky..@storiqax.com | Franky07* |Email is not verified.|
		 | Invalid_DRC_ATC_LoginTaxPortal_14 | franky@storiqax.com(Franky Mehta) | Franky07* |Email is not valid.|
		 | Invalid_DRC_ATC_LoginTaxPortal_15 | franky@storiqax | Franky07* |Email is not valid.|
		 | Invalid_DRC_ATC_LoginTaxPortal_16 | franky@-storiqax.com | Franky07* |Email is not valid.|
		 | Invalid_DRC_ATC_LoginTaxPortal_17| franky@-storiqax.web| Franky07* |Email is not valid.|
		 | Invalid_DRC_ATC_LoginTaxPortal_18| franky@111.222.333.4444 | Franky07* |Email is not valid.|
		 | Invalid_DRC_ATC_LoginTaxPortal_19| franky@storiqax..com | Franky07* |Email is not valid.|
		 | Invalid_DRC_ATC_LoginTaxPortal_20| Q@.in | Franky07* |Email is not valid.|
		 | Invalid_DRC_ATC_LoginTaxPortal_21| a@s.in | Franky07* |Email is not verified.|
		 | Invalid_DRC_ATC_LoginTaxPortal_22| sdfklzxcvbnmqwertqwertyuiopasdfcsdfsdfdfsdfsdfsdfsdfsfkjhdfionjkjnjbikuhuhoijhojiuhasknjsdanskdaoilasdjksadijasdoiasdioaspasdasadsfssfwwerwwewerasdssd@gmail.com | Franky07* |Email is not valid.|
		 | Invalid_DRC_ATC_LoginTaxPortal_23| franky@o3enzyme.com |   | Password is required.|
	   | Invalid_DRC_ATC_LoginTaxPortal_24| franky@o3enzyme.com | AsaartGovernmentanitiativtowardovernanceDRCgovernmenthasbroughtdigitaltransformationbusirocessetoasignificantxtenthroughthexortalrojecthichrovidesntegratedlatformconductariousaxroceedingselectronicallythrough |Invalid login attempt.|
		 | Invalid_DRC_ATC_LoginTaxPortal_25| franky@o3enzyme.com | A sa art Go vernmentaniti ativtoward overna nceDRCg overnmen thasbroughtdi gitaltransfor mationb usirocesse toasig nific antxtenthroug hthexortal rojecthic hrovide snt eg |Invalid login attempt.|
		 | Invalid_DRC_ATC_LoginTaxPortal_26| franky@o3enzyme.com | frankyqw |Invalid login attempt.|
		 | Invalid_DRC_ATC_LoginTaxPortal_27| franky@o3enzyme.com |  frankyq |Invalid login attempt.|
		 | Invalid_DRC_ATC_LoginTaxPortal_28| franky@o3enzyme.com | franky12345678912345 |Invalid login attempt.|
		 | Invalid_DRC_ATC_LoginTaxPortal_29| franky@o3enzyme.com| franky12345678912345q |Invalid login attempt.|
		 | Invalid_DRC_ATC_LoginTaxPortal_30| franky@o3enzyme.com | franky@07^!a |Invalid login attempt.|
		 | Invalid_DRC_ATC_LoginTaxPortal_31| franky@o3enzyme.com | Franky78945812 |Invalid login attempt.|
		 | Invalid_DRC_ATC_LoginTaxPortal_32| franky@o3enzyme.com | FRANKY07 |Invalid login attempt.|
		 | Invalid_DRC_ATC_LoginTaxPortal_33|                  |          | |
     	
