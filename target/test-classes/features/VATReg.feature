Feature: VAT Registration

Scenario Outline: Fill VAT Registration form for Individual Entity with adding new place and deleting it
Given User is on VAT Registration Dashboard
When User clicks on VAT Getting Started Guide CheckBox
And Clicks on Register for Vat button
And Clicks on Continue button of Instructions Page
Then Selects Taxpayer Category "<Category>"
And Selects Taxpayer Sub Category "<Sub Category>"
And Enters NIF number "<Nif>"
And Selects NIF Registration Date "<Nif Registration Date>"
And User enters Full Name of Applicant "<Applicant Name>"
And User enters Training Name "<Training Name>"
And Selects Type of business "<Type of Business>" 
And Selects Business Start Date "<Business Start Date>"
And Selects Company Size "<Company Size>" 
And Enters Last Years Revenue "<Revenue>" 
And Enters Address of Registered place "<Addres1>" "<Address2>"
And Selects Province of Registered place "<Province>"
And Selects City of Registered place "<City>"
And Enters Zipcode "<Zipcode>"
And Enters Mobile Number of Registered place "<Mobile Number>"
And Clicks on Add New Place button
And Enters Address of Registered place "<EAddres1>" "<EAddress2>"
And Selects Province of Registered place "<EProvince>"
And Selects City of Registered place "<ECity>"
And Enters Zipcode "<EZipcode>"
And Enters Mobile Number of Registered place "<EMobile Number>"
And Delete the record
And Selects Authorized Signatory "<Authorized Signatory>"
And Enters Job Title of Authorized Signatory "<Authorized Job Title>"
And Enters Name of Authorized Signatory "<Authorized Name>"
And Enters Email of Authorized Signatory "<Authorized Email>"
And Enters Mobile Number of Authorized Signatory "<Authorized Mobile Number>"
And Clicks on Continue Button
And Enters Account Number "<Account Number>"
And Enters Account Holder Name "<Holder Name>"
And Enters Bank Name "<Bank Name>"
And Enters Branch of Bank "<Branch Name>"
And Clicks on Continue Button

Examples:
|Category	   |Sub Category|Nif				 |Nif Registration Date|Applicant Name   |Training Name|Type of Business|Business Start Date|Company Size|Revenue|Addres1		   |Address2		|Province|City |Zipcode|Mobile Number|EAddres1		   |EAddress2		|EProvince|ECity|EZipcode|EMobile Number|Authorized Signatory|Authorized Job Title   |Authorized Name|Authorized Email   |Authorized Mobile Number|Account Number		|Holder Name|Bank Name	|Branch Name|
|Natural Person|Individual	|ABCD123456789EFGHIJK|30-05-2018		   |Alexander Johnson|			   |Mining		    |01-06-2018		    |Large Scale |8000000|Dharamdas Chamber|Near Axis Bank  |Bas-Uele|Aketi|444604 |1234567890   |Dharamdas Chamber|Near Axis Bank  |Bas-Uele |Aketi|444604  |1234567890    |yes				 |Chief Technical officer|Alexander Smith|alexander@gmail.com|9876543250			  |78945869214566333333 |Eric Thomas|Advans Bank|Branch4    |
|Natural Person|Individual	|ABCD123456789EFGHIJK|30-05-2018		   |Alexander Johnson|			   |Mining		    |01-06-2018		    |Large Scale |8000000|Dharamdas Chamber|Near Axis Bank  |Bas-Uele|Aketi|444604 |1234567890   |Dharamdas Chamber|Near Axis Bank  |Bas-Uele |Aketi|444604  |1234567890    |no				 	 |						 |				 |					 |				   		  |78945869214566333333 |Eric Thomas|Advans Bank|Branch4    |

Scenario Outline: Fill VAT Registration form for Legal Entity
Given User is on VAT Registration Dashboard
When User clicks on VAT Getting Started Guide CheckBox
And Clicks on Register for Vat button
And Clicks on Continue button of Instructions Page
Then Selects Taxpayer Category "<Category>"
And Selects Taxpayer Sub Category "<Sub Category>"
And Selects Partnership firm "<Firm>"
And Enters NIF number "<Nif>"
And Selects NIF Registration Date "<Nif Registration Date>"
And User enters Full Name of Business "<Business Name>"
And User enters Number of COI "<Number of COI>"
And Selects Date of Incorporation "<Date of Incorporation>"
And Selects Type of business "<Type of Business>" 
And Selects Business Start Date "<Business Start Date>"
And Selects Company Size "<Company Size>" 
And Enters Last Years Revenue "<Revenue>"
And Enters Address of Registered place "<Addres1>" "<Address2>"
And Selects Province of Registered place "<Province>"
And Selects City of Registered place "<City>"
And Enters Zipcode "<Zipcode>"
And Enters Mobile Number of Registered place "<Mobile Number>"
And Clicks on Add New Place button
And Enters Address of Registered place "<EAddres1>" "<EAddress2>"
And Selects Province of Registered place "<EProvince>"
And Selects City of Registered place "<ECity>"
And Enters Zipcode "<EZipcode>"
And Enters Mobile Number of Registered place "<EMobile Number>"
And Delete the record
And Enters name of Business Promoters "<Full name>"
And Enters Address of Business Promoters "<Promoters Address1>" "<Promoters Address2>"
And Enters Province of Business Promoters "<Promoters Province>"
And Enters City of Business Promoters "<Promoters City>"
And Enters Zipcode of Business Promoters "<Promoters Zipcode>"
And Enters Email of Business Promoters "<Promoters Email>"
And Enters Mobile No of Business Promoters "<Promoters Mobile No>"
And Clicks on Add Promoter button
And Enters name of Business Promoters "<EFull name>"
And Enters Address of Business Promoters "<EPromoters Address1>" "<EPromoters Address2>"
And Enters Province of Business Promoters "<EPromoters Province>"
And Enters City of Business Promoters "<EPromoters City>"
And Enters Zipcode of Business Promoters "<EPromoters Zipcode>"
And Enters Email of Business Promoters "<EPromoters Email>"
And Enters Mobile No of Business Promoters "<EPromoters Mobile No>"
And Delete the record
And Selects Authorized Signatory "<Authorized Signatory>"
And Enters Job Title of Authorized Signatory "<Authorized Job Title>"
And Enters Name of Authorized Signatory "<Authorized Name>"
And Enters Email of Authorized Signatory "<Authorized Email>"
And Enters Mobile Number of Authorized Signatory "<Authorized Mobile Number>"
And Clicks on Continue Button
And Enters Account Number "<Account Number>"
And Enters Account Holder Name "<Holder Name>"
And Enters Bank Name "<Bank Name>"
And Enters Branch of Bank "<Branch Name>"
And Clicks on Continue Button

Examples:
|Category	 |Sub Category	   	 |Firm|Nif				   |Nif Registration Date|Business Name |Number of COI|Date of Incorporation  |Type of Business|Business Start Date|Company Size|Revenue|Addres1		  |Address2		 |Province|City |Zipcode|Mobile Number|EAddres1		 	|EAddress2	   |EProvince|City |EZipcode|EMobile Number|Full name	 |Promoters Address1|Promoters Address2|Promoters Province|Promoters City|Promoters Zipcode|Promoters Email|Promoters Mobile No|EFull name	 |EPromoters Address1|EPromoters Address2|EPromoters Province|EPromoters City|EPromoters Zipcode|EPromoters Email|EPromoters Mobile No|Authorized Signatory|Authorized Job Title   |Authorized Name|Authorized Email   |Authorized Mobile Number|Account Number  	   |Holder Name|Bank Name  |Branch Name|
|Legal Entity|Government Entity  |    |ABCD123456789EFGHIJK|30-05-2018		     |1Rivet Pvt Ltd|A349430590354|30-05-2018			  |Mining		   |01-06-2018		   |Large Scale |8000000|Dharamdas Chamber|Near Axis Bank|Bas-Uele|Aketi|444604 |1234567890   |Dharamdas Chamber|Near Axis Bank|Bas-Uele |Aketi|444604  |1234567890    |Ricky Ponting|RM Park		    |Aum Bungalow      |Haut-Katanga	  |Dubie	  	 |444604		   |ricky@gmail.com|7894856308		   |Ricky Ponting|RM Park		     |Aum Bungalow       |Haut-Katanga	     |Dubie	  	     |444604		    |ricky@gmail.com |7894856308		  |yes				   |Chief Technical officer|Alexander Smith|alexander@gmail.com|9876543250				|78945869214566333333  |Eric Thomas|Advans Bank|Branch4    |
|Legal Entity|Government Entity  |    |ABCD123456789EFGHIJK|30-05-2018		     |1Rivet Pvt Ltd|A349430590354|30-05-2018			  |Mining		   |01-06-2018		   |Large Scale |8000000|Dharamdas Chamber|Near Axis Bank|Bas-Uele|Aketi|444604 |1234567890   |Dharamdas Chamber|Near Axis Bank|Bas-Uele |Aketi|444604  |1234567890    |Ricky Ponting|RM Park		    |Aum Bungalow      |Haut-Katanga	  |Dubie		 |444604		   |ricky@gmail.com|7894856308		   |Ricky Ponting|RM Park		     |Aum Bungalow       |Haut-Katanga	     |Dubie	  	     |444604		    |ricky@gmail.com |7894856308		  |no				   |					   |			   |				   |						|78945869214566333333  |Eric Thomas|Advans Bank|Branch4    |
|Legal Entity|Incorporated Bodies|Yes |ABCD123456789EFGHIJK|30-05-2018		     |1Rivet Pvt Ltd|A349430590354|30-05-2018			  |Mining		   |01-06-2018		   |Large Scale |8000000|Dharamdas Chamber|Near Axis Bank|Bas-Uele|Aketi|444604 |1234567890   |Dharamdas Chamber|Near Axis Bank|Bas-Uele |Aketi|444604  |1234567890    |Ricky Ponting|RM Park		    |Aum Bungalow      |Haut-Katanga	  |Dubie		 |444604		   |ricky@gmail.com|7894856308		   |Ricky Ponting|RM Park		     |Aum Bungalow       |Haut-Katanga	     |Dubie	  	     |444604		    |ricky@gmail.com |7894856308		  |no				   |					   |			   |				   |						|78945869214566333333  |Eric Thomas|Advans Bank|Branch4    |
|Legal Entity|Incorporated Bodies|No  |ABCD123456789EFGHIJK|30-05-2018		     |1Rivet Pvt Ltd|A349430590354|30-05-2018			  |Mining		   |01-06-2018		   |Large Scale |8000000|Dharamdas Chamber|Near Axis Bank|Bas-Uele|Aketi|444604 |1234567890   |Dharamdas Chamber|Near Axis Bank|Bas-Uele |Aketi|444604  |1234567890    |Ricky Ponting|RM Park		    |Aum Bungalow      |Haut-Katanga	  |Dubie		 |444604		   |ricky@gmail.com|7894856308		   |Ricky Ponting|RM Park		     |Aum Bungalow       |Haut-Katanga	     |Dubie	  	     |444604		    |ricky@gmail.com |7894856308		  |yes				   |Chief Technical officer|Alexander Smith|alexander@gmail.com|9876543250				|78945869214566333333  |Eric Thomas|Advans Bank|Branch4    |
|Legal Entity|Incorporated Bodies|No  |ABCD123456789EFGHIJK|30-05-2018		     |1Rivet Pvt Ltd|A349430590354|30-05-2018			  |Mining		   |01-06-2018		   |Large Scale |8000000|Dharamdas Chamber|Near Axis Bank|Bas-Uele|Aketi|444604 |1234567890   |Dharamdas Chamber|Near Axis Bank|Bas-Uele |Aketi|444604  |1234567890    |Ricky Ponting|RM Park		    |Aum Bungalow      |Haut-Katanga	  |Dubie		 |444604		   |ricky@gmail.com|7894856308		   |Ricky Ponting|RM Park		     |Aum Bungalow       |Haut-Katanga	     |Dubie	  	     |444604		    |ricky@gmail.com |7894856308		  |no				   |					   |			   |				   |						|78945869214566333333  |Eric Thomas|Advans Bank|Branch4    |
|Legal Entity|Incorporated Bodies|Yes |ABCD123456789EFGHIJK|30-05-2018		     |1Rivet Pvt Ltd|A349430590354|30-05-2018			  |Mining		   |01-06-2018		   |Large Scale |8000000|Dharamdas Chamber|Near Axis Bank|Bas-Uele|Aketi|444604 |1234567890   |Dharamdas Chamber|Near Axis Bank|Bas-Uele |Aketi|444604  |1234567890    |Ricky Ponting|RM Park		    |Aum Bungalow      |Haut-Katanga	  |Dubie		 |444604		   |ricky@gmail.com|7894856308		   |Ricky Ponting|RM Park		     |Aum Bungalow       |Haut-Katanga	     |Dubie	  	     |444604		    |ricky@gmail.com |7894856308		  |yes				   |Chief Technical officer|Alexander Smith|alexander@gmail.com|9876543250				|78945869214566333333  |Eric Thomas|Advans Bank|Branch4    |
|Legal Entity|Non-Corporates	 |Yes |ABCD123456789EFGHIJK|30-05-2018		     |1Rivet Pvt Ltd|A349430590354|30-05-2018			  |Mining		   |01-06-2018		   |Large Scale |8000000|Dharamdas Chamber|Near Axis Bank|Bas-Uele|Aketi|444604 |1234567890   |Dharamdas Chamber|Near Axis Bank|Bas-Uele |Aketi|444604  |1234567890    |Ricky Ponting|RM Park		    |Aum Bungalow      |Haut-Katanga	  |Dubie		 |444604		   |ricky@gmail.com|7894856308		   |Ricky Ponting|RM Park		     |Aum Bungalow       |Haut-Katanga	     |Dubie	  	     |444604		    |ricky@gmail.com |7894856308		  |yes				   |Chief Technical officer|Alexander Smith|alexander@gmail.com|9876543250				|78945869214566333333  |Eric Thomas|Advans Bank|Branch4    |
|Legal Entity|Non-Corporates	 |Yes |ABCD123456789EFGHIJK|30-05-2018		     |1Rivet Pvt Ltd|A349430590354|30-05-2018			  |Mining		   |01-06-2018		   |Large Scale |8000000|Dharamdas Chamber|Near Axis Bank|Bas-Uele|Aketi|444604 |1234567890   |Dharamdas Chamber|Near Axis Bank|Bas-Uele |Aketi|444604  |1234567890    |Ricky Ponting|RM Park		    |Aum Bungalow      |Haut-Katanga	  |Dubie		 |444604		   |ricky@gmail.com|7894856308		   |Ricky Ponting|RM Park		     |Aum Bungalow       |Haut-Katanga	     |Dubie	  	     |444604		    |ricky@gmail.com |7894856308		  |no				   |					   |			   |				   |						|78945869214566333333  |Eric Thomas|Advans Bank|Branch4    |
|Legal Entity|Non-Corporates	 |No  |ABCD123456789EFGHIJK|30-05-2018		     |1Rivet Pvt Ltd|A349430590354|30-05-2018			  |Mining		   |01-06-2018		   |Large Scale |8000000|Dharamdas Chamber|Near Axis Bank|Bas-Uele|Aketi|444604 |1234567890   |Dharamdas Chamber|Near Axis Bank|Bas-Uele |Aketi|444604  |1234567890    |Ricky Ponting|RM Park		    |Aum Bungalow      |Haut-Katanga 	  |Dubie		 |444604		   |ricky@gmail.com|7894856308		   |Ricky Ponting|RM Park		     |Aum Bungalow       |Haut-Katanga	     |Dubie	  	     |444604		    |ricky@gmail.com |7894856308		  |yes				   |Chief Technical officer|Alexander Smith|alexander@gmail.com|9876543250				|78945869214566333333  |Eric Thomas|Advans Bank|Branch4    |
|Legal Entity|Non-Corporates	 |No  |ABCD123456789EFGHIJK|30-05-2018		     |1Rivet Pvt Ltd|A349430590354|30-05-2018			  |Mining		   |01-06-2018		   |Large Scale |8000000|Dharamdas Chamber|Near Axis Bank|Bas-Uele|Aketi|444604 |1234567890   |Dharamdas Chamber|Near Axis Bank|Bas-Uele |Aketi|444604  |1234567890    |Ricky Ponting|RM Park		    |Aum Bungalow      |Haut-Katanga 	  |Dubie		 |444604		   |ricky@gmail.com|7894856308		   |Ricky Ponting|RM Park		     |Aum Bungalow       |Haut-Katanga	     |Dubie	  	     |444604		    |ricky@gmail.com |7894856308		  |yes				   |Chief Technical officer|Alexander Smith|alexander@gmail.com|9876543250				|78945869214566333333  |Eric Thomas|Advans Bank|Branch4    |
