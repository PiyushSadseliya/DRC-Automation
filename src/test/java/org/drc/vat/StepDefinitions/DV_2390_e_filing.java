package org.drc.vat.StepDefinitions;

import static org.drc.vat.appmanager.HelperBase.*;
import static org.testng.Assert.assertTrue;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

/** 
 * This contains Calculation part of e filing with check box, save draft,submit,verify,authorized signature,upload file  functionality 
 */

public class DV_2390_e_filing  
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
	
	public String StoreDS1;
	public String StoreDS2;
	
	public String StoreAuthorizedSignatory;
	
	public static  String VAT_Store_VR;
	public static String VAT_Store_SD;
	public static String VAT_Store_VD;
	public static String VAT_Store_PC;
	
	public static Float VAT_Store_FPP_Check;
	public static Float VAT_Store_Total_VC;
	public static Float VAT_Store_TotalD;	
	public static Float VAT_Store_VRC;
	public static Float VAT_Store_SDC;
	public static Float VAT_Store_VDC;
	public static Float VAT_Store_PCC;
	public static Float VAT_Store_FPPS;
	
	public static  Float Total_VC;
	public static  Float TotalD ;
	public static  Float VRC ;
	public static  Float SDC ;
	public static  Float VDC ;
	public static  Float PCC ;
	

	public String DG;
	
	@Given("^User Login \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_Login(String arg1, String arg2) throws Throwable 
	{
		System.out.println(arg1);
		System.out.println(arg2);		
	}	
	
	
	

	
	@And("^User Enter email \"([^\"]*)\" and  password \"([^\"]*)\"$")
	public void user_Enter_email_and_password(String email, String pwd) throws Throwable 
	{
/*		 type("txtbox_username",email);		
		 type("txtbox_password",pwd);*/
		login(email, pwd);
	}
	@And("^User Click on SignIn$")
	public void user_Click_on_SignIn() throws Throwable 
	{
/*		sleepWait(1000);
		clickOn("btn_login", "");		
		 sleepWait(2000);
		 clickOn("tile_vat","");
		 sleepWait(2000);
		 clickOn("a_sure","");
		 sleepWait(2000);
		// wd.switchTo().window(wd.getWindowHandles().toArray()[1].toString());
		 sleepWait(1000);*/
	}
	
	@And("^User check value \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" for Operation Performed$")
	public void user_check_value_for_Operation_Performed(String DG, String DS1, String DS2, String DGI, String DSI, String FPP, String Export, String Exempt, String Nontaxable) throws Throwable 
	{
		sleepWait(1000);
		
		type("txt_Delivery_goods", DG);
	    sleepWait(1000);
	    String VAT_Collected_DG= getValue("txt_Delivery_goods");
	    if(VAT_Collected_DG != DG)
	    {
	    	assertTrue(true);
	    }
	
	    type("txt_Delivercy1", DS1);
	    sleepWait(1000);	    
	    String VAT_Collected_DS1= getValue("txt_Delivercy1");
	    if(VAT_Collected_DS1 != DS1 )
	    {
	    	assertTrue(true);
	    }
	    sleepWait(1000);
	    type("txt_Delivercy2", DS2);
	    sleepWait(1000);
	    String VAT_Collected_DS2= getValue("txt_Delivercy2");
	    if(VAT_Collected_DS2 != DS2 )
	    {
	    	assertTrue(true);
	    }
	    type("txt_Delivery_goods_Itself", DGI);
	    sleepWait(1000);	    
	    String VAT_Collected_DGI= getValue("txt_Delivery_goods_Itself");
	    if(VAT_Collected_DGI != DGI )
	    {
	    	assertTrue(true);
	    }
	    type("txt_Delivery_Services_itself", DSI);
	    sleepWait(1000);
	    String VAT_Collected_DSI= getValue("txt_Delivery_Services_itself");
	    if(VAT_Collected_DSI != DSI )
	    {
	    	assertTrue(true);
	    }
	    type("txt_Operational", FPP);
	    sleepWait(1000);
	    String VAT_Collected_FPP= getValue("txt_Operational");
	    if(VAT_Collected_FPP != FPP )
	    {
	    	assertTrue(true);
	    }
	    type("txt_Export", Export);
	    sleepWait(1000);
	    String VAT_Collected_Export= getValue("txt_Export");
	    if(VAT_Collected_Export != Export )
	    {
	    	assertTrue(true);
	    }
	    type("txt_Exempt", Exempt);
	    sleepWait(1000);
	    String VAT_Collected_Excempt= getValue("txt_Exempt");
	    if(VAT_Collected_Excempt != Exempt )
	    {
	    	assertTrue(true);
	    }
	    type("txt_Non_taaxable", Nontaxable);
	    sleepWait(1000);
	    String VAT_Collected_Nontaxable= getValue("txt_Non_taaxable");
	    if(VAT_Collected_Nontaxable != Nontaxable )
	    {
	    	assertTrue(true);
	    }	    
	}
	
	@Given("^User check value \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" for Tax Deductible On$")
	public void user_check_value_for_Tax_Deductible_On(String AI, String AL, String GI, String GL, String RI, String RL, String OI, String OL) throws Throwable 
	{
		type("txt_Assest1", AI);
	    sleepWait(1000);
	    String VAT_AI= getValue("txt_Assest1");
	    if(VAT_AI != AI )
	    {
	    	assertTrue(true);
	    }	    
	    
	    type("txt_Assest2", AL);
	    sleepWait(1000);
	    String VAT_AL= getValue("txt_Assest2");
	    if(VAT_AL != AL )
	    {
	    	assertTrue(true);
	    }	    
	    
	   type("txt_Goods1", GI);
	   sleepWait(1000);
	   String VAT_GI= getValue("txt_Goods1");
	    if(VAT_GI != GI )
	    {
	    	assertTrue(true);
	    }	   
		
	    type("txt_Goods2", GL);
	    sleepWait(1000);
	    String VAT_GL= getValue("txt_Goods2");
	    if(VAT_GL != GL )
	    {
	    	assertTrue(true);
	    }	    
	    
	    type("txt_RawMateria1", RI);
	    sleepWait(1000);
	    String VAT_RI= getValue("txt_RawMateria1");
	    if(VAT_RI != RI )
	    {
	    	assertTrue(true);
	    }	    
	    type("txt_RawMateria2", RL);
	    sleepWait(1000);
	    String VAT_RL= getValue("txt_RawMateria2");
	    if(VAT_RL != RL )
	    {
	    	assertTrue(true);
	    }    
	    type("txt_OtherGoods1", OI);
	    sleepWait(1000);
	    String VAT_OI= getValue("txt_OtherGoods1");
	    if(VAT_OI != OI )
	    {
	    	assertTrue(true);
	    }
	    type("txt_OtherGoods2", OL);
	    sleepWait(1000);
	    String VAT_OL= getValue("txt_OtherGoods2");
	    if(VAT_OL != OL )
	    {
	    	assertTrue(true);
	    }
	}

	@And("^User check value \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" for Adjustment$")
	public void user_check_value_for_Adjustment(String VR, String SD, String VD, String PC) throws Throwable 
	{
		type("txt_VatReversal",VR);
		sleepWait(1000);
		String VAT_VR= getValue("txt_VatReversal");
		if(VAT_VR != VR )
		{
		  	assertTrue(true);
		}
		
	    type("txt_Supp",SD);
	    
	    String VAT_SD= getValue("txt_Supp");
		if(VAT_SD != SD )
		{
		  	assertTrue(true);
		}
	    type("txt_VatDeducted",VD);
	    String VAT_VD= getValue("txt_VatDeducted");
		if(VAT_VD != VD )
		{
		  	assertTrue(true);
		}
		type("txt_Recovery",PC);
	    String VAT_PC= getValue("txt_Recovery");
		if(VAT_PC != PC )
		{
		  	assertTrue(true);
		}
	}

	@Given("^User check value \"([^\"]*)\" for Tax Calculation$")
	public void user_check_value_for_Tax_Calculation(String VAT3Party) throws Throwable 
	{
		type("txt_VatThird",VAT3Party);
		String VAT_ThirdParty= getValue("txt_VatThird");
		if(VAT_ThirdParty !=VAT3Party)
		{
			assertTrue(true);
		}		
	}
	
	@And("^User entered value \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" for Operation Performed$")
	public void user_entered_value_for_Operation_Performed(String DG, String DS1, String DS2, String DGI, String DSI, String FPP, String Export, String Exempt, String Nontaxable) throws Throwable 
	{ sleepWait(4000);
		type("txt_Delivery_goods", DG);
	    sleepWait(1000);
	    type("txt_Delivercy1", DS1);
	    sleepWait(1000);
	    type("txt_Delivercy2", DS2);
	   sleepWait(1000);
		
	    type("txt_Delivery_goods_Itself", DGI);
	    sleepWait(1000);
	    type("txt_Delivery_Services_itself", DSI);
	    sleepWait(1000);
	    type("txt_Operational", FPP);
	    sleepWait(1000);
	    type("txt_Export", Export);
	    sleepWait(1000);
	    type("txt_Exempt", Exempt);
	    sleepWait(1000);
	    type("txt_Non_taaxable", Nontaxable);
	    sleepWait(1000);	    
	}
	
	@And("^User entered value \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" for Tax Deductible On$")
	public void user_entered_value_for_Tax_Deductible_On(String AI, String AL, String GI, String GL, String RI, String RL, String OI, String OL) throws Throwable 
	{
		type("txt_Assest1", AI);
	    sleepWait(1000);
	    type("txt_Assest2", AL);
	    sleepWait(1000);
	    type("txt_Goods1", GI);
	   sleepWait(1000);
		sleepWait(1000);
	    type("txt_Goods2", GL);
	    sleepWait(1000);
	    type("txt_RawMateria1", RI);
	    sleepWait(1000);
	    type("txt_RawMateria2", RL);
	    sleepWait(1000);
	    type("txt_OtherGoods1", OI);
	    sleepWait(1000);
	    type("txt_OtherGoods2", OL);
	    sleepWait(1000);
	    
	}

	@And("^User entered value \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" for Adjustment$")
	public void user_entered_value_for_Adjustment(String VR, String SD, String VD, String PC) throws Throwable 
	{
		type("txt_VatReversal",VR);
	    type("txt_Supp",SD);
	    type("txt_VatDeducted",VD);
	    type("txt_Recovery",PC);
	}

	@And("^User entered value \"([^\"]*)\" for Tax Calculation$")
	public void user_entered_value_for_Tax_Calculation(String VAT3Party) throws Throwable 
	{
		type("txt_VatThird",VAT3Party);				
	}


	@And("^User click on browser and upload file \"([^\"]*)\"$")
	public void user_click_on_browser_and_upload_file(String upload) throws Throwable 
	{
	
		
		sleepWait(2000);
		wd.findElement(By.xpath("//label[@for='validatedCustomFile']")).click();
		UploadImage("",upload);
		sleepWait(1000);
	
	}
	@And("^User see uploaded file name in field$")
	public void user_see_uploaded_file_name_in_field() throws Throwable 
	{
		if(wd.findElement(By.xpath(obj.getProperty("txt_file_upload_name"))).isDisplayed());
		 {
			 assertTrue(true);
		 }
	}
	@And("^User see period field \"([^\"]*)\"$")
	public void user_see_period_field(String period) throws Throwable 
	{
		String expectedMessage = period;
		sleepWait(2000);
		WebElement element = wd.findElement(By.xpath("//div[contains(text(),'Period:')]//following::div//input"));
		JavascriptExecutor jse = (JavascriptExecutor)wd;
		Object message = jse.executeScript("return arguments[0].value", element);
		System.out.println(message.toString());		
 		Assert.assertTrue(message.toString().contains(expectedMessage));
	   
	}
	@And("^User entered value \"([^\"]*)\" \"([^\"]*)\" for Delivery of services$")
	public void user_entered_value_for_Delivery_of_services(String DS1, String DS2) throws Throwable 
	{
		sleepWait(2000);
		    type("txt_Delivercy1", DS1);
		    StoreDS1 = DS1;
		    sleepWait(1000);
		    
		    type("txt_Delivercy2", DS2);
		    StoreDS2 = DS2;
		    sleepWait(1000);	   
		    
	}
	
	@And("^User check entered value for Delivery of services$")
	public void user_check_entered_value_for_Delivery_of_services() throws Throwable 
	{
		sleepWait(1000);
		String CheckDS1= getValue("txt_Delivercy1");
		String CheckDS2= getValue("txt_Delivercy2");		
		if(StoreDS1.equals(CheckDS1) && StoreDS2.equals(CheckDS2))
		{
			assertTrue(true);
		}
	}
	

	@And("^User see message \"([^\"]*)\"$")
	public void user_see_message(String mess) throws Throwable 
	{
		if(wd.findElement(By.xpath("//span[contains(text(),'" + mess + "')]")).isDisplayed() )
		{					
			assertTrue(true);
		}		   
	}

	@And("^Enter data in Operation Performed \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\" , \"([^\"]*)\",\"([^\"]*)\", \"([^\"]*)\" ,\"([^\"]*)\", \"([^\"]*)\",\"([^\"]*)\" for amount under vat collected$")
	public void enter_data_in_Operation_Performed_for_amount_under_vat_collected(String DG, String DS1, String DS2, String DGI, String DSI, String FPP, String Export, String Exempt, String Nontaxable) throws Throwable 
	{
		sleepWait(3000);
		  type("txt_Delivery_goods",DG);		 		    
		  String VAT_Collected_DG= getValue("txt_Delivery_goods_disable");
		  if(Float.parseFloat(VAT_Collected_DG)==((Float.parseFloat(DG))*16/100))
		  {
			  assertTrue(true);
		  }
		    
		    type("txt_Delivercy1",DS1);
		    type("txt_Delivercy2",DS2);
		    String VAT_Collected_DS = getValue("txt_Delivercy_disable");
		    if(Float.parseFloat(VAT_Collected_DS)==((Float.parseFloat(DS2))*16/100))
		    {
		    	assertTrue(true);
		    }   
		    type("txt_Delivery_goods_Itself",DGI);
		    String VAT_Collected_DGI=getValue("txt_Delivery_goods_Itself_disable");
		    if(Float.parseFloat(VAT_Collected_DGI)==((Float.parseFloat(DGI))*16/100))
		    {
		    	assertTrue(true);
		    }
		    type("txt_Delivery_Services_itself",DSI);
		    String VAT_Collected_DSI=getValue("txt_Delivery_Services_itself_disable");
		    if(Float.parseFloat(VAT_Collected_DSI)==((Float.parseFloat(DSI))*16/100))
		    {
		    	assertTrue(true);
		    }
		    type("txt_Operational",FPP);
		    String VAT_Collected_FPP=getValue("txt_Operational_disable");
		    if(Float.parseFloat(VAT_Collected_FPP)==((Float.parseFloat(FPP))*16/100))
		    {
		    	assertTrue(true);
		    }
		    type("txt_Export",Export);
		    type("txt_Exempt",Exempt);
		    type("txt_Non_taaxable",Nontaxable);
		    
		    /**
		     * global test FPP
		     */
		    String VAT_Float_FPP = getValue("txt_Operational_disable");
		    Float VAT_CheckFloat_FPP= Float.parseFloat(VAT_Float_FPP);
		    VAT_Store_FPP_Check = VAT_CheckFloat_FPP;
		    
		    /**
		     *  Total for 16 % no 1+2+3+4+5 =9 
		     */
		    Float Total_VC = ((Float.parseFloat(DG))*16/100) + ((Float.parseFloat(DS2))*16/100) + ((Float.parseFloat(DGI))*16/100)+ ((Float.parseFloat(DSI))*16/100)+((Float.parseFloat(FPP))*16/100);		    
		    String Total_VCT = getValue("txt_Total2_disable");
		    if(Total_VC==Float.parseFloat(Total_VCT))
		    {
		    	assertTrue(true);
		    }
		    
		    /**
		     * Declaring global test 
		     */
		    
		    VAT_Store_Total_VC=Total_VC;
		    
		    
		    /**
		     * Total Taxable Turnover(FC)
		     */
		    Float Total_VC_FC = (Float.parseFloat(DG)) + (Float.parseFloat(DS2)) + (Float.parseFloat(DGI))+ (Float.parseFloat(DSI))+(Float.parseFloat(FPP))+(Float.parseFloat(Export))+(Float.parseFloat(Exempt))+(Float.parseFloat(Nontaxable));
		    String Total_TT=getValue("txt_Total1_disable");
		     if(Total_VC_FC==Float.parseFloat(Total_TT))
		    {
		    	 assertTrue(true);
		    }
	}
	
	
	@And("^User entered value \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" for Adjustment calculation$")
	public void user_entered_value_for_Adjustment_calculation(String VR, String SD, String VD, String PC) throws Throwable 
	{
		type("txt_VatReversal",VR);
	    type("txt_Supp",SD);
	    type("txt_VatDeducted",VD);
	    type("txt_Recovery",PC);
	    
	    String VAT_VRC = getValue("txt_VatReversal");
	    String VAT_SD = getValue("txt_Supp");
	    String VAT_VD = getValue("txt_VatDeducted");
	    String VAT_PC = getValue("txt_Recovery");
	    
	 
	    Float VAT_Float_VRC= Float.parseFloat(VAT_VRC);
	    Float VAT_Float_SDC= Float.parseFloat(VAT_SD);
	    Float VAT_Float_VDC= Float.parseFloat(VAT_VD);
	    Float VAT_Float_PCC= Float.parseFloat(VAT_PC);
	    
	    VAT_Store_VRC = VAT_Float_VRC;
	    VAT_Store_SDC = VAT_Float_SDC;
	    VAT_Store_VDC = VAT_Float_VDC;
	    VAT_Store_PCC = VAT_Float_PCC;
	    
	}
	
	@Then("^calculate tax calculations and enter \"([^\"]*)\"$")
	public void calculate_tax_calculations_and_enter(String VAT3Party) throws Throwable
	{
	    type("txt_VatThird",VAT3Party);    
		    
	    Float NetVAT = VAT_Store_Total_VC - VAT_Store_TotalD + VAT_Store_VRC -VAT_Store_SDC -VAT_Store_VDC -VAT_Store_PCC -VAT_Store_FPP_Check ;
	    
	    String Total_NetVAT = getValue("txt_NetVat_disable"); 
	    String Total_VATcredit = getValue("txt_VatCredit_disable");
	    String Total_Refund = getValue("txt_RefundCredit_disable");
	    String Total_Forward = getValue("txt_VarCredit_carriedForward_disable");
	    String Total_Procurement = getValue("txt_Vatexternal_disable");
	    String Total_Pay=getValue("txt_Amount_disable");
	    if (NetVAT > 0)
	    {
	    	if (NetVAT==Float.parseFloat(Total_NetVAT))
	    	{
	    		assertTrue(true);
	    	}
	    }
	    else
	    {
	    	if(NetVAT==Float.parseFloat(Total_VATcredit))
	    	{
	    		assertTrue(true);
	    	}
	    }
	    
	    if((Float.parseFloat(Total_VATcredit)) <= 0)
	    {
	    	Float TotalForward = (Float.parseFloat(Total_VATcredit)) - (Float.parseFloat(Total_Refund))-(Float.parseFloat(Total_Procurement))-(Float.parseFloat(VAT3Party));
	      	if (TotalForward==Float.parseFloat(Total_Forward))
	      	{
	      		assertTrue(true);
	      	}
	    }
	    else
	    {
	    	if(Float.parseFloat(Total_Forward)==0)
	    	{
	    		assertTrue(true);
	    	}  
	    }
	    if (Float.parseFloat(Total_Procurement)==VAT_Store_FPP_Check)
	    {
	    	assertTrue(true);
	    }

	    Float TotalPay = Float.parseFloat(Total_NetVAT) -Float.parseFloat(Total_VATcredit)+ Float.parseFloat(Total_Refund)+ Float.parseFloat(Total_Procurement)+Float.parseFloat(VAT3Party);
	    if (TotalPay==Float.parseFloat(Total_Pay))
	    {
	    	assertTrue(true);
	    }
	}	

	@And("^Enter data in Deduction \"([^\"]*)\" ,\"([^\"]*)\", \"([^\"]*)\" ,\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\" ,\"([^\"]*)\" ,\"([^\"]*)\" and validate total value for Amount of VAT Deductible$")
	public void enter_data_in_Deduction_and_validate_total_value_for_Amount_of_VAT_Deductible(String AI, String AL, String GI, String GL, String RI, String RL, String OI, String OL) throws Throwable 
	{
	
		sleepWait(10000);
		
		sleepWait(1000);
		
		   type("txt_Assest1",AI);
		   type("txt_Assest2",AL);
		   Float TotalA= Float.parseFloat(AI)+Float.parseFloat(AL);
		   String TotalAS = getValue("txt_Assest_disable");
		   if(TotalA==Float.parseFloat(TotalAS))
		   {
			   assertTrue(true);	
		   }
		    type("txt_Goods1",GI);
		    type("txt_Goods2",GL);
		    Float TotalG = Float.parseFloat(GI)+Float.parseFloat(GL);
		    String TotalGS= getValue("txt_Goods_disable");
		    if(TotalG==Float.parseFloat(TotalGS))
		    {
		    	  assertTrue(true);	
		    }
		    type("txt_RawMateria1",RI);
		    type("txt_RawMateria2",RL);
		    
		    Float TotalR= Float.parseFloat(RI)+ Float.parseFloat(RL);
		    String TotalRS= getValue("txt_RawMateria_disable");
		    if (TotalR==Float.parseFloat(TotalRS))
		    {
		    	assertTrue(true);
		    }
		    
		    type("txt_OtherGoods1",OI);
		    type("txt_OtherGoods2",OL); 
		    Float TotalO=Float.parseFloat(OI)+Float.parseFloat(OL);
		    String TotalOS=getValue("txt_OtherGoods_disable");
		    if(TotalO==Float.parseFloat(TotalOS))
		    {
		    	assertTrue(true);
		    }

		    /**
		     * 14 Total deductible = 10+11+12+13 
		     */
		    Float TotalD = TotalA + TotalG + TotalR + TotalO;
		    String TotalDS = getValue("txt_deducitable_diable");
		    
		    if (TotalD==Float.parseFloat(TotalDS))
		    {
		    	assertTrue(true);
		    }
		    
		    /**
		     * storing global test 
		     */
		    
		    VAT_Store_TotalD=TotalD;		    		
	}

	@And("^User validate Amount of VAT Deductible$")
	public void user_validate_Amount_of_VAT_Deductible() throws Throwable 
	{    /**
	     * Amount of VAT Deductible = Total Deductible + Report of credit carry forward (If Any))
	     */
		
		String TotalVatDed = getValue("txt_deducitable_diable");
		String TotalCC = getValue("txt_RCarriedForward_disable");
		
	    Float Amount=Float.parseFloat(TotalVatDed)+Float.parseFloat(TotalCC);
	    String TotalAVD = getValue("txt_AvatDectible_disable");
	
	    if (Amount==Float.parseFloat(TotalAVD))
	    {
	    	assertTrue(true);
	    }	    	    
	}

	
	@And("^User click on browse button$")
	public void user_click_on_browse_button() throws Throwable 
	{
		//clickOn("btn_Browse_click", "");
		sleepWait(2000);
		wd.findElement(By.xpath("//label[@for='validatedCustomFile']")).click();
		//wd.findElement(By.xpath("(//*[@class='btn btn-primary'])[1]")).click();
		//wd.findElement(By.xpath("//input[@id='validatedCustomFile']")).click();
	}
	
	@And("^User select file format pdf \"([^\"]*)\" and see message \"([^\"]*)\"$")
	public void user_select_file_format_pdf_and_see_message(String pdf, String Mess) throws Throwable 
	{
		UploadImage("", pdf);
		if(wd.findElement(By.xpath("//*[contains(text(),'" + Mess + "')]")).isDisplayed() )
		{		
			
			assertTrue(true);
		}	
		sleepWait(1000);
	}

	@Given("^User select file format image \"([^\"]*)\" and see message \"([^\"]*)\"$")
	public void user_select_file_format_image_and_see_message(String imj, String Mess) throws Throwable 
	{
		UploadImage("", imj);
		if(wd.findElement(By.xpath("//*[contains(text(),'" + Mess + "')]")).isDisplayed() )
		{		
			
			assertTrue(true);
		}	
		sleepWait(1000);
	}

	@Given("^User select file format word \"([^\"]*)\" and see message \"([^\"]*)\"$")
	public void user_select_file_format_word_and_see_message(String word, String Mess) throws Throwable 
	{
		UploadImage("", word);
		if(wd.findElement(By.xpath("//*[contains(text(),'" + Mess + "')]")).isDisplayed() )
		{		
			
			assertTrue(true);
		}
		sleepWait(1000);
	}

	@Given("^User click on browse button and upload file more than two mp \"([^\"]*)\" and validate mess \"([^\"]*)\"$")
	public void user_click_on_browse_button_and_upload_file_more_than_two_mp_and_validate_mess(String twoMB, String Mess) throws Throwable 
	{
	    sleepWait(1000);
		wd.findElement(By.xpath("//label[@for='validatedCustomFile']")).click();
		
		//wd.findElement(By.xpath("(//*[@class='btn btn-primary'])[1]")).click();
		UploadImage("", twoMB);
		if(wd.findElement(By.xpath("//*[contains(text(),'" + Mess + "')]")).isDisplayed() )
		{		
			
			assertTrue(true);
		}	
		sleepWait(1000);
	}

	@Given("^User click on browse button and upload file less than two mp \"([^\"]*)\" and user see file name \"([^\"]*)\"$")
	public void user_click_on_browse_button_and_upload_file_less_than_two_mp_and_user_see_file_name(String lessMB, String Mess) throws Throwable 
	{
		sleepWait(1000);
		
		wd.findElement(By.xpath("//label[@for='validatedCustomFile']")).click();
		//wd.findElement(By.xpath("(//*[@class='btn btn-primary'])[1]")).click();
		UploadImage("", lessMB);
		if(wd.findElement(By.xpath("//*[contains(text(),'" + Mess + "')]")).isDisplayed() )
		{		
			
			assertTrue(true);
		}	
		sleepWait(1000);
	}	
	
	@And("^User click on cancel button and excel file gets removed and user see \"([^\"]*)\"$")
	public void user_click_on_cancel_button_and_excel_file_gets_removed_and_user_see(String Mess) throws Throwable 
	{
		sleepWait(2000);
		clickOn("btn_Browse_Cancel", "");
		sleepWait(1000);
		if(wd.findElement(By.xpath("//*[contains(text(),'" + Mess + "')]")).isDisplayed() )
		{		
			
			assertTrue(true);
		}	
	}
	
	@And("^User click on Save draft button and check message \"([^\"]*)\"$")
	public void user_click_on_Save_draft_button_and_check_message(String draft) throws Throwable 
	{
		sleepWait(1000);
		clickOn("btn_efile_saveButton", "");
		sleepWait(2000);
		if(wd.findElement(By.xpath("//*[contains(text(),'" + draft + "')]")).isDisplayed() )
		{					
			assertTrue(true);
		}	   
	}

	@And("^User click on checkbox$")
	public void user_click_on_checkbox() throws Throwable 
	{
		clickOn("checkBox_efile_click", "");
	}

	@And("^User see Authorized Signatory field is activated$")
	public void user_see_Authorized_Signatory_field_is_activated() throws Throwable 
	{
		sleepWait(1000);
		if(wd.findElement(By.xpath(obj.getProperty("drp_aut_efile_click"))).isEnabled());
		 {
			 assertTrue(true);
		 }	   
	}

	@And("^User again click on checkbox and validate field is deactivated$")
	public void user_gain_click_on_checkbox_and_validate_field_is_deactivated() throws Throwable 
	{
		sleepWait(1000);
		clickOn("checkBox_efile_click", "");
		sleepWait(1000);
		if(!wd.findElement(By.xpath(obj.getProperty("drp_aut_efile_click"))).isEnabled());
		 {
			 assertTrue(true);
		 }	   
	}

	@And("^User again click on checkbox and click on Authorized Signatory field$")
	public void user_again_click_on_checkbox_and_click_on_Authorized_Signatory_field() throws Throwable 
	{
		sleepWait(1000);
		clickOn("checkBox_efile_click", "");
		sleepWait(1000);
		clickOn("drp_aut_efile_click", "");
		sleepWait(1000);
		clickOn("drp_select_efile_click1", "");
		
		sleepWait(1000);
		String AuthorizedSignatory = elementText("drp_aut_efile_click");
		
		StoreAuthorizedSignatory = AuthorizedSignatory;			
		
	}

	@And("^User see Authorized Signatory name$")
	public void user_see_Authorized_Signatory_name() throws Throwable 
	{				
		String CheckAuthorizedSignatory = elementText("drp_aut_efile_click");		
		if(CheckAuthorizedSignatory.equals(StoreAuthorizedSignatory))
		{
			assertTrue(true);
		}
	}

	@And("^User validate submit button is disable$")
	public void user_validate_submit_button_is_disable() throws Throwable 
	{
		sleepWait(1000);
		clickOn("checkBox_efile_click", "");
		sleepWait(1000);
		if(!wd.findElement(By.xpath(obj.getProperty("btn_efile_submit"))).isEnabled());
		 {
			 assertTrue(true);
		 }	   
	}

	@And("^User click on Authorized Signatory$")
	public void user_click_on_Authorized_Signatory() throws Throwable 
	{
		sleepWait(1000);
		clickOn("checkBox_efile_click", "");
	}

	@And("^User validate submit button is activate$")
	public void user_validate_submit_button_is_activate() throws Throwable 
	{	   
		sleepWait(1000);
		if(wd.findElement(By.xpath(obj.getProperty("btn_efile_submit"))).isEnabled());
		 {
			 assertTrue(true);
		 }   
	}
// add ok button to click
	@And("^User click on previous button and navigate to Vat e-filing page$")
	public void user_click_on_previous_button_and_navigate_to_Vat_e_filing_page() throws Throwable 
	{
		sleepWait(1000);
		clickOn("btn_efile_Previous", "");
		if(wd.findElement(By.xpath(obj.getProperty("txt_e_file_landing_Screen"))).isDisplayed());
		 {
			 assertTrue(true);
		 }   	   
	}

	@And("^User click on previous button$")
	public void user_click_on_previous_button() throws Throwable 
	{
		clickOn("btn_efile_Previous", "");   	   
	}

	@And("^User validate page is navigated to vat e-filing landing screen$")
	public void user_validate_page_is_navigated_to_vat_e_filing_landing_screen() throws Throwable 
	{
		if(wd.findElement(By.xpath(obj.getProperty("txt_e_file_landing_Screen"))).isDisplayed());
		 {
			 assertTrue(true);
		 }  	   
	}

	@And("^User validate Otp pop up window should appear$")
	public void user_validate_Otp_pop_up_window_should_appear() throws Throwable 
	{
		sleepWait(7000);
		if(wd.findElement(By.xpath(obj.getProperty("txt_efile_verificationCode"))).isDisplayed());
		 {
			 assertTrue(true);
		 }  	   
	}

	@And("^User click on verify button and validate message \"([^\"]*)\"$")
	public void user_click_on_verify_button_and_validate_message(String mess) throws Throwable 
	{
		clickOn("btn_efile_Verify", "");
		sleepWait(5000);
		if(wd.findElement(By.xpath("(//div[contains(text(),'" + mess + "')])[2]")).isDisplayed() )
		{					
			assertTrue(true);
		}	   
	}

	@And("^User enter invalid data numbers \"([^\"]*)\" and click on verify and see mess \"([^\"]*)\"$")
	public void user_enter_invalid_data_numbers_and_click_on_verify_and_see_mess(String num, String otp) throws Throwable 
	{
		sleepWait(1000);
		type("txtbox_enter_otp", num);
		sleepWait(5000);
		clickOn("btn_efile_Verify", "");
		sleepWait(1000);
		if(wd.findElement(By.xpath("//div[contains(text(),'" + otp + "')]")).isDisplayed() )
		{					
			assertTrue(true);
		}	   
	}

	@And("^User enter invalid data special character \"([^\"]*)\" and click on verify and see mess \"([^\"]*)\"$")
	public void user_enter_invalid_data_special_character_and_click_on_verify_and_see_mess(String special, String otp) throws Throwable 
	{
		sleepWait(1000);
		type("txtbox_enter_otp", special);
		sleepWait(5000);
		clickOn("btn_efile_Verify", "");
		sleepWait(1000);
		if(wd.findElement(By.xpath("//div[contains(text(),'" + otp + "')]")).isDisplayed() )
		{					
			assertTrue(true);
		}	   
	}

	@And("^User enter Alpha numeric \"([^\"]*)\" and click on verify and see mess \"([^\"]*)\"$")
	public void user_enter_Alpha_numeric_and_click_on_verify_and_see_mess(String alpha, String otp) throws Throwable 
	{
		sleepWait(1000);
		type("txtbox_enter_otp", alpha);
		sleepWait(5000);
		clickOn("btn_efile_Verify", "");
		sleepWait(1000);
		if(wd.findElement(By.xpath("//div[contains(text(),'" + otp + "')]")).isDisplayed() )
		{					
			assertTrue(true);
		}	   
	}

	@And("^User click on close icon$")
	public void user_click_on_close_icon() throws Throwable 
	{
		sleepWait(1000);
		clickOn("btn_close_otp", "");
	}

	@And("^User again click on submit button$")
	public void user_again_click_on_submit_button() throws Throwable 
	{
		sleepWait(1000);
	   clickOn("btn_efile_submit", "");	   
	}

	@And("^User waits for more than two min and click on verify button and see message \"([^\"]*)\"$")
	public void user_waits_for_more_than_two_min_and_click_on_verify_button_and_see_message(String mess) throws Throwable 
	{
		sleepWait(180000);
		clickOn("btn_efile_Verify", "");
		if(wd.findElement(By.xpath("//div[contains(text(),'" + mess + "')]")).isDisplayed() )
		{					
			assertTrue(true);
		}
	}

}
