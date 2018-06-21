Feature: User Registration
  @Valid_Registration
 Scenario Outline: New User should be allowed to Register in DRC TAX Portal with valid details.
   Given User is on Welcome to DRC Tax Portal page
   When User Clicks on Register
   Then User should be Navigated to Register With Us page
   And User Enters Data "<Name>" "<Email>" "<Password>" "<Confirm Password>" "<Mobile Number>" in the respective fields
   And Accepts Terms and condition
   And Clicks On Register Button
   Then User should be navigated to ThankYou for Registering Page after successful Registration.

    Examples: 
     |Test Case ID 									| Name   			 | Email 						 | Password  | Confirm Password  | Mobile Number |
      |DRC_ATC_Valid_Registration_01 	| Abi 				 | abhi@o3enzyme.com | abq@12345 | abq@12345				 | 8989898989898 |
      
  
@Invalid_Registration
     Scenario Outline: User Should not be allowed to Register in DRC TAX Portal with InValid details.
    Given User is on Welcome to DRC Tax Portal page
    When User Clicks on Register
    Then User should be Navigated to Register With Us page
    And User Enters Data "<Name>" "<Email>" "<Password>" "<Confirm Password>" "<Mobile Number>" in the respective fields
    And Accepts/Rejects Terms and conditions
    And Clicks On Register Button
    Then Error messages should be shown to user as"<Validation Messages>"

    Examples: 
      |Test Case ID 							 			| Name   			 | Email 						 | Password  | Confirm Password  | Mobile Number |Validation Messages|
    |DRC_ATC_Invalid_Registration_01	| 						 |abhi@o3enzyme.com  | abq@12345 | abq@12345				 | 8989898989898 |Full Name is required!|
     |DRC_ATC_Invalid_Registration_02	|GaVEkuggQyLviyqmHBwSxFRMvcCyCnxeYzsVrkrXVDblcoJVlnRyjxnEaanGJuKIDVmGbmQllVNgmExbvkcwPwJGuqvJZJARfsJPNWLzHMudpfJChTSfKZiHjwzbkbuMuzfWgjWstKOWeEAqXzLwdIwzBYjYxnefAddkIxsNNmPZaxNKMxvEmhPMPrHHexwdSpzLoYuidVlPJhxTffNnhMygANBdorDgUBTARfzbWnhFKSaVbYunnrvRmuhYkIHm|abhi@o3enzyme.com |abq@12345|abq@12345|8989898989898||     
     |DRC_ATC_Invalid_Registration_03	|            sdfhsdhfh@34343545dsfsdfsdfsdfsdfsdfsdfuzfWgjWstKOWeEAqXzLwdIwz                                            BYjYxnefAddkIxsNNmPZaxNKMxvEmhPMPrHHexwdSpzLoYuidVlPJhxTffNnh 						 |abhi@o3enzyme.com  |abq@12345|abq@12345| 8989898989898 |Enter valid Full Name!|
      |DRC_ATC_Invalid_Registration_04	|A 						 |abhi@o3enzyme.com  | abq@12345 | abq@12345				 | 8989898989898 |Enter valid Full Name! |
      |DRC_ATC_Invalid_Registration_05	|Abhi					 | | abq@12345 | abq@12345				 | 8989898989898 |Email is required!|
     | DRC_ATC_Invalid_Registration_06	|Abhi					|abhi| abq@12345 |abq@12345| 8989898989898 |Please enter valid Email! |    
     |DRC_ATC_Invalid_Registration_07	|Abhi						 | @gmail.com| abq@12345 | abq@12345				 | 8989898989898| Please enter valid Email! |
      |DRC_ATC_Invalid_Registration_08	|Abhi						 |Srijo <srijo@1rivet.com>  | abq@12345 | abq@12345				 | 8989898989898 | Please enter valid Email! |
      |DRC_ATC_Invalid_Registration_09	|Abhi						 | srijo.1rivet.com | abq@12345 | abq@12345				 | 8989898989898 | Please enter valid Email! |
     |DRC_ATC_Invalid_Registration_10	|Abhi| srijo@1rivet@1rivet.com | abq@12345 | abq@12345				 | 8989898989898 | Please enter valid Email! |
      |DRC_ATC_Invalid_Registration_11	|Abhi						 |.srijo@1rivet.com | abq@12345 | abq@12345				 | 8989898989898 | Please enter valid Email! |
      |DRC_ATC_Invalid_Registration_12	|Abhi						 |srijo..srijo@1rivet.com  | abq@12345 | abq@12345				 | 8989898989898 | Please enter valid Email! |
    |DRC_ATC_Invalid_Registration_13|Abhi						 |ÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞ@gmail.com | abq@12345 | abq@12345				 | 8989898989898 | Please enter valid Email! |
     |DRC_ATC_Invalid_Registration_14	|Abhi						 |srijo@1rivet.com testing | abq@12345 | abq@12345				 | 8989898989898 | Please enter valid Email!|
      |DRC_ATC_Invalid_Registration_15	|Abhi					 |srijo@1rivet | abq@12345 | abq@12345				 | 8989898989898 | Please enter valid Email! |
     |DRC_ATC_Invalid_Registration_16	|Abhi|srijo@-1rivet.com  | abq@12345 | abq@12345				 | 8989898989898 |Please enter valid Email! |
      |DRC_ATC_Invalid_Registration_17	|Abhi |srijo@1rivet.web | abq@12345 | abq@12345				 | 8989898989898 |Please enter valid Email!|
      |DRC_ATC_Invalid_Registration_18	| Abhi						 |srijo@177.162.124.2555  | abq@12345 | abq@12345				 | 8989898989898 |Please enter valid Email! |
      |DRC_ATC_Invalid_Registration_19	|Abhi				 |srijo@1rivet..com  | abq@12345 | abq@12345				 | 8989898989898 |Please enter valid Email! |
     |DRC_ATC_Invalid_Registration_20	|Abhi				 |sdhfklshdfhsdfkhsdklfhskdfhkasdhf@hdkhkldhkhgflkhsflkhdfklhsdflkshdfdsfjdsklfjsdlkjfksdjflkjflsdjfskdjflksdjfkjflkjdsflksjdflksjdflkjflkjdslkklsdhf.com  | abq@12345 | abq@12345				 | 8989898989898 |Please enter valid Email! |      
      |DRC_ATC_Invalid_Registration_21	|Abhi				 |srijo@1rivet..com  | abq@12345 | abq@12345				 | 8989898989898 |Please enter valid Email! |
     |DRC_ATC_Invalid_Registration_22	|Abhi				 |srijo@1rivet..com  | abq@12345 | abq@12345				 | 8989898989898 |Please enter valid Email! |
     |DRC_ATC_Invalid_Registration_23	|Abhi						 |abhi@o3enzyme.com  |  | abq@12345				 | 8989898989898 |Password is required!|
      |DRC_ATC_Invalid_Registration_24	|Abhi						 |abhi@o3enzyme.com  | abq@12345 | 			 | 8989898989898 |Confirm Password is required!|
    |DRC_ATC_Invalid_Registration_25	|Abhi						 |abhi@o3enzyme.com  | abq@123 | abq			 | 8989898989898 |Password should at least be 8 characters long!|
     |DRC_ATC_Invalid_Registration_26	|Abhi					 |abhi@o3enzyme.com  | abq@12354512345678912 | abq@12354512345678912 | 8989898989898 ||
      |DRC_ATC_Invalid_Registration_27	|Abhi					 |abhi@o3enzyme.com  | abq@12345 | abq@12345				 |  |Mobile Number is required! |
      |DRC_ATC_Invalid_Registration_28	|Abhi					 |abhi@o3enzyme.com  | abq@12345 | abq@12345				 | srij_o@1][!$%sdfdfAbnbmFSDF&23 |Enter valid Mobile Number! |
      |DRC_ATC_Invalid_Registration_29	|Abhi					 |abhi@o3enzyme.com  | abq@12345 | abq@12345				 | 954547220   |Enter valid Mobile Number! |
      |DRC_ATC_Invalid_Registration_30	| Abhi						 |abhi@o3enzyme.com  | abq@12345 | abq@12345				 | 0000000000 |Enter valid Mobile Number! |
      |DRC_ATC_Invalid_Registration_31	| Abhi						 |abhi@o3enzyme.com  | abq@12345 | abq@12345				 | 11111111 |Enter valid Mobile Number! |
       |DRC_ATC_Invalid_Registration_32	| Abhi						 |abhi@o3enzyme.com  | abq@12345 | abq@12345				 | 888888888 |Enter valid Mobile Number! |
     |DRC_ATC_Invalid_Registration_33	| Abhi						 |abhi@o3enzyme.com  | abq@12345 | abq@12345				 | 9856645632145698 | |
     
     
     