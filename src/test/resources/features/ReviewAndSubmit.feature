Feature: VAT Registration 

Scenario Outline: Fill VAT Registration form for Legal Entity
Given User is on Vat Registration Dashboard
When User click on VAT Getting Started Guide CheckBox
And Click on Register for Vat button
And Click on Continue button of Instructions Page
Then Select Taxpayer Category "<Category>"
And Select Taxpayer Sub Category "<Sub Category>"
And Select Partnership firm "<Firm>"
And Enter NIF number "<Nif>"
And Select NIF Registration Date "<Nif Registration Date>"
And User enter Full Name of Business "<Business Name>"
And User enter Number of COI "<Number of COI>"
And Select Date of Incorporation "<Date of Incorporation>"
And Select Type of business "<Type of Business>" 
And Select Business Start Date "<Business Start Date>"
And Select Company Size "<Company Size>" 
And Enter Last Years Revenue "<Revenue>"
And Enter Address of Registered place "<Addres1>" "<Address2>"
And Select Province of Registered place "<Province>"
And Select City of Registered place "<City>"
And Enter Zipcode "<Zipcode>"
And Enter Mobile Number of Registered place "<Mobile Number>"
And Enter name of Business Promoters "<Full name>"
And Enter Address of Business Promoters "<Promoters Address1>" "<Promoters Address2>"
And Enter Province of Business Promoters "<Promoters Province>"
And Enter City of Business Promoters "<Promoters City>"
And Enter Zipcode of Business Promoters "<Promoters Zipcode>"
And Enter Email of Business Promoters "<Promoters Email>"
And Enter Mobile No of Business Promoters "<Promoters Mobile No>"
And Select Authorized Signatory "<Authorized Signatory>"
And Enter Job Title of Authorized Signatory "<Authorized Job Title>"
And Enter Name of Authorized Signatory "<Authorized Name>"
And Enter Email of Authorized Signatory "<Authorized Email>"
And Enter Mobile Number of Authorized Signatory "<Authorized Mobile Number>"
And Click on Continue Button
And Enter Account Number "<Account Number>"
And Enter Account Holder Name "<Holder Name>"
And Enter Bank Name "<Bank Name>"
And Enter Branch of Bank "<Branch Name>"
And Click on Continue Button
And Upload Documents
And Click on Edit General Details icon
And Click on Continue Button
And Click on Continue Button
And Click on Continue Button
And Click on Edit Bank Details icon
And Click on Continue Button
And Click on Continue Button
And Click on Edit Documents Uploaded icon
And Click on Continue Button
And Click on I agree checkbox
And Click on Submit button

Examples:
|Category	 |Sub Category	   	 |Firm|Nif				   |Nif Registration Date|Business Name |Number of COI|Date of Incorporation  |Type of Business|Business Start Date|Company Size|Revenue|Addres1		  |Address2		 |Province|City |Zipcode|Mobile Number|Full name	|Promoters Address1|Promoters Address2|Promoters Province|Promoters City|Promoters Zipcode|Promoters Email|Promoters Mobile No|Authorized Signatory|Authorized Job Title   |Authorized Name|Authorized Email   |Authorized Mobile Number|Account Number  	 |Holder Name|Bank Name  |Branch Name|
|Legal Entity|Government Entity  |    |ABCD123456789EFGHIJK|30-05-2018		     |1Rivet Pvt Ltd|A349430590354|30-05-2018			  |Mining		   |01-06-2018		   |Large Scale |8000000|Dharamdas Chamber|Near Axis Bank|Bas-Uele|Aketi|444604 |1234567890   |Ricky Ponting|RM Park		   |Aum Bungalow      |Haut-Katanga		 |Dubie			|444604			  |ricky@gmail.com|7894856308		  |no				   |					   |			   |				   |						|78945869214566333333|Eric Thomas|Advans Bank|Branch4    |
|Legal Entity|Incorporated Bodies|Yes |ABCD123456789EFGHIJK|30-05-2018		     |1Rivet Pvt Ltd|A349430590354|30-05-2018			  |Mining		   |01-06-2018		   |Large Scale |8000000|Dharamdas Chamber|Near Axis Bank|Bas-Uele|Aketi|444604 |1234567890   |Ricky Ponting|RM Park		   |Aum Bungalow      |Haut-Katanga		 |Dubie			|444604			  |ricky@gmail.com|7894856308		  |yes				   |Chief Technical officer|Alexander Smith|alexander@gmail.com|9876543250				|78945869214566333333|Eric Thomas|Advans Bank|Branch4    |
|Legal Entity|Non-Corporates	 |Yes |ABCD123456789EFGHIJK|30-05-2018		     |1Rivet Pvt Ltd|A349430590354|30-05-2018			  |Mining		   |01-06-2018		   |Large Scale |8000000|Dharamdas Chamber|Near Axis Bank|Bas-Uele|Aketi|444604 |1234567890   |Ricky Ponting|RM Park		   |Aum Bungalow      |Haut-Katanga		 |Dubie			|444604			  |ricky@gmail.com|7894856308		  |yes				   |Chief Technical officer|Alexander Smith|alexander@gmail.com|9876543250				|78945869214566333333|Eric Thomas|Advans Bank|Branch4    |

Scenario Outline: Fill VAT Registration form for Individual Entity
Given User is on VAT Registration Dashboard
When User click on VAT Getting Started Guide CheckBox
And Click on Register for Vat button
And Click on Continue button of Instructions Page
Then Selects Taxpayer Category "<Category>"
And Selects Taxpayer Sub Category "<Sub Category>"
And Enter NIF number "<Nif>"
And Selects NIF Registration Date "<Nif Registration Date>"
And User Enter Full Name of Applicant "<Applicant Name>"
And User Enter Training Name "<Training Name>"
And Select Type of business "<Type of Business>" 
And Select Business Start Date "<Business Start Date>"
And Select Company Size "<Company Size>" 
And Enter Last Years Revenue "<Revenue>" 
And Enter Address of Registered place "<Addres1>" "<Address2>"
And Selects Province of Registered place "<Province>"
And Selects City of Registered place "<City>"
And Enter Zipcode "<Zipcode>"
And Enter Mobile Number of Registered place "<Mobile Number>"
And Select Authorized Signatory "<Authorized Signatory>"
And Enter Job Title of Authorized Signatory "<Authorized Job Title>"
And Enter Name of Authorized Signatory "<Authorized Name>"
And Enter Email of Authorized Signatory "<Authorized Email>"
And Enter Mobile Number of Authorized Signatory "<Authorized Mobile Number>"
And Click on Continue Button 
And Enter Account Number "<Account Number>"
And Enter Account Holder Name "<Holder Name>"
And Enter Bank Name "<Bank Name>"
And Enter Branch of Bank "<Branch Name>"
And Click on Continue Button
And Upload Documents
And Click on Edit General Details icon
And Click on Continue Button
And Click on Continue Button
And Click on Continue Button
And Click on Edit Bank Details icon
And Click on Continue Button
And Click on Continue Button
And Click on Edit Documents Uploaded icon
And Click on Continue Button
And Click on I agree checkbox
And Click on Submit button

Examples:
|Category	   |Sub Category|Nif				 |Nif Registration Date|Applicant Name   |Training Name|Type of Business|Business Start Date|Company Size|Revenue|Addres1		   |Address2		|Province|City |Zipcode|Mobile Number|Authorized Signatory|Authorized Job Title   |Authorized Name|Authorized Email   |Authorized Mobile Number|Account Number		|Holder Name|Bank Name	|Branch Name|
|Natural Person|Individual	|ABCD123456789EFGHIJK|2018-02-11		   |Alexander Johnson|			   |Mining		    |01-06-2018		    |Large Scale |8000000|Dharamdas Chamber|Near Axis Bank  |Bas-Uele|Aketi|444604 |1234567890   |yes				  |Chief Technical officer|Alexander Smith|alexander@gmail.com|9876543250			   |78945869214566333333|Eric Thomas|Advans Bank|Branch4    |



