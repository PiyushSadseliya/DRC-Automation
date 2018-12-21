package org.drc.vat.StepDefinitions;
import static org.drc.vat.appmanager.HelperBase.*;
import static org.testng.Assert.assertTrue;

import org.drc.vat.StepDefinitions.DV_2390_e_filing;
import org.drc.vat.appmanager.Read_OTP;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

/** 
 *  This file contains Download,Previous functionality and user is able to preview the e-filing  
 */


public class DV_2391_eFile_Preview 	
{
	public String VAT_Store_DG;
	public String VAT_Store_DS1;
	public String VAT_Store_DS2;	
	public String VAT_Store_DGI;
	public String VAT_Store_DSI;
	public String VAT_Store_FPP;
	public String VAT_Store_Export;
	public String VAT_Store_Exempt;
	public String VAT_Store_Nontaxable;	
	public String VAT_Store_AI;		
	public String VAT_Store_AL;		
	public String VAT_Store_GI;
	public String VAT_Store_GL;
	public String VAT_Store_RI;
	public String VAT_Store_RL;
	public String VAT_Store_OI;
	public String VAT_Store_OL;	
	public String VAT_Store_VR;		
	public String VAT_Store_SD;		
	public String VAT_Store_VD;
	public String VAT_Store_PC;	
	public String VAT_Store_VAT3Party;	
	public String StoreMonth;

			@And("^User click on download button and user validate file should get downloaded$")
			public void user_click_on_download_button_and_user_validate_file_should_get_downloaded() throws Throwable 
			{
				sleepWait(1000);							
				
				clickOn("btnDownloadEfile", "");
				sleepWait(3000);				
				verifyDownload("EfilingDetails.pdf");
				sleepWait(1000);
			}
			
			@Then("^clicks on e-filing to fill data$")
			public void clicks_on_e_filing_to_fill_data() throws Throwable 
			{
				
				
				sleepWait(10000);
				
				
				for(int i =1;i<=12;i++)
				{
					String first_part = "(//div[@class='list-item-th text-left'])[";
					String second_part ="]";
				
					String month = first_part+i+second_part;
					wd.findElement(By.xpath(month)).click();
					sleepWait(500);
					
					String first_preview ="(//button[text()='Preview'])[";
					String second_preview="]";
					
					String preview = first_preview+i+second_preview;
					sleepWait(500);
					Boolean B;
					try{
					 B =(wd.findElement(By.xpath(preview)).isDisplayed());
					}catch(NoSuchElementException ex){
						B= false;
					}
					sleepWait(500);
					if(B)
					{
							continue;
					}
						else
						{
							 StoreMonth = month;															
							clickOn("btn_file","");							
							break;
						}
				}
				//sleepWait(500);
			}			
			@And("^User click on Preview$")
			public void user_click_on_Preview() throws Throwable 
			{
								 		
				sleepWait(1000);							
				wd.findElement(By.xpath(StoreMonth)).click();			
				sleepWait(1000);			
				String first_part = StoreMonth;
				String second_part ="//following::button//following::button";				
				String month = first_part+second_part;
				sleepWait(1000);				
				wd.findElement(By.xpath(month)).click();								
				sleepWait(1000);
				if(wd.findElement(By.xpath(obj.getProperty("txt_Check_Pre"))).isDisplayed());
				 {
					 assertTrue(true);
				 }
				 sleepWait(1000);
			}
			
			@Then("^Enter OTP and click on verify button and click on Ok button$")
			public void enter_OTP_and_click_on_verify_button_and_click_on_Ok_button() throws Throwable {
			    
			   Read_OTP RO = new Read_OTP();
			   String OTP=RO.ReadOTP();
			   sleepWait(1000);
			   wd.findElement(By.xpath("//*[@placeholder='Enter your OTP']")).sendKeys(OTP);
			   sleepWait(1000);
			   wd.findElement(By.xpath("//*[text()='Verify']")).click();
			   sleepWait(5000);
			   wd.findElement(By.xpath("//*[@title='OK']")).click();
			   sleepWait(2000);
			   
			}
			
			@And("^User entered value \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" for Operation Performed on preview$")
			public void user_entered_value_for_Operation_Performed_on_preview(String DG, String DS1, String DS2, String DGI, String DSI, String FPP, String Export, String Exempt, String Nontaxable) throws Throwable 
			{
				
				sleepWait(10000);
				
				sleepWait(200);
				type("txt_Delivery_goods", DG);
			    sleepWait(500);
			    type("txt_Delivercy1", DS1);	    
			    sleepWait(500);
			    type("txt_Delivercy2", DS2);
			    sleepWait(500);
			    type("txt_Delivery_goods_Itself", DGI);
			    sleepWait(500);
			    type("txt_Delivery_Services_itself", DSI);
			    sleepWait(500);
			    type("txt_Operational", FPP);
			    sleepWait(500);
			    type("txt_Export", Export);
			    sleepWait(500);
			    type("txt_Exempt", Exempt);
			    sleepWait(500);
			    type("txt_Non_taaxable", Nontaxable);
			    sleepWait(500);

			    VAT_Store_DG=DG;		
				VAT_Store_DS1=DS1;		
				VAT_Store_DS2 =DS2	;
				VAT_Store_DGI =DGI;
				VAT_Store_DSI =DSI;
				VAT_Store_FPP =FPP;
				VAT_Store_Export =Export;
				VAT_Store_Exempt =Exempt;
				VAT_Store_Nontaxable =Nontaxable;
				
			}

			@And("^User entered value \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" for Tax Deductible On preview$")
			public void user_entered_value_for_Tax_Deductible_On_preview(String AI, String AL, String GI, String GL, String RI, String RL, String OI, String OL) throws Throwable 
			{
				type("txt_Assest1", AI);
			    sleepWait(500);
			    			    
			    type("txt_Assest2", AL);
			    sleepWait(500);
			    
			   type("txt_Goods1", GI);
			   sleepWait(500);
				
			    type("txt_Goods2", GL);
			    sleepWait(500);
			    
			    type("txt_RawMateria1", RI);
			    sleepWait(500);
			    
			    type("txt_RawMateria2", RL);
			    sleepWait(500);
			    
			    type("txt_OtherGoods1", OI);
			    sleepWait(500);
			    
			    type("txt_OtherGoods2", OL);
			    sleepWait(500);			    
			    
			    VAT_Store_AI=AI;		
				VAT_Store_AL=AL;		
				VAT_Store_GI =GI;
				VAT_Store_GL =GL;
				VAT_Store_RI =RI;
				VAT_Store_RL =RL;
				VAT_Store_OI =OI;
				VAT_Store_OL =OL;
			}

			@And("^User entered value \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" for Adjustment on preview$")
			public void user_entered_value_for_Adjustment_on_preview(String VR, String SD, String VD, String PC) throws Throwable 
			{
				type("txt_VatReversal",VR);
				sleepWait(500);
			    type("txt_Supp",SD);
			    type("txt_VatDeducted",VD);
				type("txt_Recovery",PC);			   
				VAT_Store_VR=VR;		
				VAT_Store_SD=SD;		
				VAT_Store_VD =VD;
				VAT_Store_PC =PC;
			}
			
			@And("^User entered value \"([^\"]*)\" for Tax Calculation on preview$")
			public void user_entered_value_for_Tax_Calculation_on_preview(String VAT3Party) throws Throwable 
			{
				type("txt_VatThird",VAT3Party);			
				VAT_Store_VAT3Party =VAT3Party;
			}
			
			@And("^User validate Operations Performed Section$")
			public void user_validate_Operations_Performed_Section() throws Throwable 
			{
				sleepWait(1000);
				
				String VAT_DG= getValue("lbl_Delivery_goods");				
				if(VAT_Store_DG.equals(VAT_DG))
				{
					assertTrue(true);
				}				
			
				
				String VAT_De1= getValue("lbl_Delivercy1");				
				if(VAT_Store_DS1.equals(VAT_De1))
				{
					assertTrue(true);
				}	
							
				String VAT_De= getValue("lbl_Delivercy2");				
				if(VAT_Store_DS2.equals(VAT_De))
				{
					assertTrue(true);
				}	
						    
			    String VAT_DGI= getValue("lbl_Delivery_goods_Itself");				
				if(VAT_Store_DGI.equals(VAT_DGI))
				{
					assertTrue(true);
				}	
						
				String VAT_DSI= getValue("lbl_Delivery_Services_itself");				
				if(VAT_Store_DSI.equals(VAT_DSI))
				{
					assertTrue(true);
				}	
							
				String VAT_Oper= getValue("lbl_Operational");				
				if(VAT_Store_FPP.equals(VAT_Oper))
				{
					assertTrue(true);
				}	
							String VAT_Exp= getValue("lbl_Export");				
				if(VAT_Store_Export.equals(VAT_Exp))
				{
					assertTrue(true);
				}	
							
				String VAT_Exe= getValue("lbl_Exempt");				
				if(VAT_Store_DG.equals(VAT_Exe))
				{
					assertTrue(true);
				}	
						
				String VAT_NT= getValue("lbl_Non_taaxable");				
				if(VAT_Store_Nontaxable.equals(VAT_NT))
				{
					assertTrue(true);
				}	
					}
			@And("^User validate Tax Deductible On$")
			public void user_validate_Tax_Deductible_On() throws Throwable 
			{
				sleepWait(2000);
				String VAT_Ass1= getValue("lbl_Assest1");								
				if(VAT_Store_AI.equals(VAT_Ass1))
				{
					assertTrue(true);
				}	
									
				String VAT_Ass2= getValue("lbl_Assest2");	
				if(VAT_Store_AL.equals(VAT_Ass2))
				{
					assertTrue(true);
				}					
				
				String VAT_Go1= getValue("lbl_Goods1");	
				if(VAT_Store_GI.equals(VAT_Go1))
				{
					assertTrue(true);
				}								
				
				String VAT_Go2= getValue("lbl_Goods2");	
				if(VAT_Store_GL.equals(VAT_Go2))
				{
					assertTrue(true);
				}								
				
				String VAT_Raw= getValue("lbl_RawMateria1");	
				if(VAT_Store_RI.equals(VAT_Raw))
				{
					assertTrue(true);
				}				
				
				String VAT_Raw2= getValue("lbl_RawMateria2");	
				if(VAT_Store_RL.equals(VAT_Raw2))
				{
					assertTrue(true);
				}								
				
				String VAT_OG1= getValue("lbl_OtherGoods1");	
				if(VAT_Store_OI.equals(VAT_OG1))
				{
					assertTrue(true);
				}				
				
				String VAT_OG2= getValue("lbl_OtherGoods2");	
				if(VAT_Store_OL.equals(VAT_OG2))
				{
					assertTrue(true);
				}
				
			}
			@And("^User validate Adjustment$")
			public void user_validate_Adjustment() throws Throwable 
			{				
				sleepWait(1000);
				String VAT_Revercal= getValue("lbl_VatReversal");				
				if(VAT_Store_VR.equals(VAT_Revercal))
				{
					assertTrue(true);
				}				
				String VAT_Supp= getValue("lbl_Supp");				
				if(VAT_Store_VR.equals(VAT_Supp))
				{
					assertTrue(true);
				}				
				String VAT_Ded= getValue("lbl_VatDeducted");				
				if(VAT_Store_VD.equals(VAT_Ded))
				{
					assertTrue(true);
				}				
				String VAT_Rec= getValue("lbl_Recovery");				
				if(VAT_Store_PC.equals(VAT_Rec))
				{
					assertTrue(true);
				}				
			}			
}
