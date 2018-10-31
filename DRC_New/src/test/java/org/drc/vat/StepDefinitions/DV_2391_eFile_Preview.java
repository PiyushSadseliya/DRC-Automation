package org.drc.vat.StepDefinitions;
import static org.drc.vat.appmanager.HelperBase.*;
import static org.testng.Assert.assertTrue;

import org.drc.vat.StepDefinitions.DV_2390_e_filing;

import cucumber.api.java.en.And;
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
	
	
			@And("^User click on file button \"([^\"]*)\" and navigate to vat e-filing page$")
			public void user_click_on_file_button_and_navigate_to_vat_e_filing_page(String preview) throws Throwable 
			{
			   clickOn(preview, "");
			   Thread.sleep(500);
			}

			@And("^User click on download button and user validate file should get downloaded$")
			public void user_click_on_download_button_and_user_validate_file_should_get_downloaded() throws Throwable 
			{
				clickOn("btnDownloadEfile", "");
				Thread.sleep(1000);
				verifyDownload("EfilingDetails");
   			}
			@And("^User entered value \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" for Operation Performed on preview$")
			public void user_entered_value_for_Operation_Performed_on_preview(String DG, String DS1, String DS2, String DGI, String DSI, String FPP, String Export, String Exempt, String Nontaxable) throws Throwable 
			{
				type("txt_Delivery_goods", DG);
			    Thread.sleep(500);
			    type("txt_Delivercy1", DS1);	    
			    Thread.sleep(500);
			    type("txt_Delivercy2", DS2);
			    Thread.sleep(500);
			    type("txt_Delivery_goods_Itself", DGI);
			    Thread.sleep(500);
			    type("txt_Delivery_Services_itself", DSI);
			    Thread.sleep(500);
			    type("txt_Operational", FPP);
			    Thread.sleep(500);
			    type("txt_Export", Export);
			    Thread.sleep(500);
			    type("txt_Exempt", Exempt);
			    Thread.sleep(500);
			    type("txt_Non_taaxable", Nontaxable);
			    Thread.sleep(500);

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
			    Thread.sleep(500);
			    			    
			    type("txt_Assest2", AL);
			    Thread.sleep(500);
			    
			   type("txt_Goods1", GI);
			   Thread.sleep(500);
				
			    type("txt_Goods2", GL);
			    Thread.sleep(500);
			    
			    type("txt_RawMateria1", RI);
			    Thread.sleep(500);
			    
			    type("txt_RawMateria2", RL);
			    Thread.sleep(500);
			    
			    type("txt_OtherGoods1", OI);
			    Thread.sleep(500);
			    
			    type("txt_OtherGoods2", OL);
			    Thread.sleep(500);
			    
			    
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
				Thread.sleep(500);
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
				
				if(VAT_Store_DG.equals("lbl_Delivery_goods"))
			    {
			    	System.out.println("Pass");
			    }
				if(VAT_Store_DS1.equals("lbl_Delivercy1"))
			    {
			    	System.out.println("Pass");
			    }
				
				if(VAT_Store_DS2.equals("lbl_Delivercy2"))
			    {
			    	System.out.println("Pass");
			    }
			    
				if(VAT_Store_DGI.equals("lbl_Delivery_goods_Itself"))
			    {
			    	System.out.println("Pass");
			    }
				
				if(VAT_Store_DSI.equals("lbl_Delivery_Services_itself"))
			    {
			    	System.out.println("Pass");
			    }
				
				if(VAT_Store_FPP.equals("lbl_Operational"))
			    {
			    	System.out.println("Pass");
			    }
				
				if(VAT_Store_Export.equals("lbl_Export"))
			    {
			    	System.out.println("Pass");
			    }
				
				if(VAT_Store_Exempt.equals("lbl_Exempt"))
			    {
			    	System.out.println("Pass");
			    }
				
				if(VAT_Store_Nontaxable.equals("lbl_Non_taaxable"))
			    {
			    	System.out.println("Pass");
			    }
			}
			@And("^User validate Tax Deductible On$")
			public void user_validate_Tax_Deductible_On() throws Throwable 
			{
				if(VAT_Store_AI.equals("lbl_Assest1"))
			    {
			    	System.out.println("Pass");
			    }
				
				if(VAT_Store_AL.equals("lbl_Assest2"))
			    {
			    	System.out.println("Pass");
			    }
				
				if(VAT_Store_GI.equals("lbl_Goods1"))
			    {
			    	System.out.println("Pass");
			    }
				
				if(VAT_Store_GL.equals("lbl_Goods2"))
			    {
			    	System.out.println("Pass");
			    }
				
				if(VAT_Store_RI.equals("lbl_RawMateria1"))
			    {
			    	System.out.println("Pass");
			    }
				
				if(VAT_Store_RL.equals("lbl_RawMateria2"))
			    {
			    	System.out.println("Pass");
			    }
				
				if(VAT_Store_OI.equals("lbl_OtherGoods1"))
			    {
			    	System.out.println("Pass");
			    }
				
				if(VAT_Store_OL.equals("lbl_OtherGoods2"))
			    {
			    	System.out.println("Pass");
			    }
			}
			@And("^User validate Adjustment$")
			public void user_validate_Adjustment() throws Throwable 
			{				
				if(VAT_Store_VR.equals("lbl_VatReversal"))
			    {
					 assertTrue(true);
			    }			
				if(VAT_Store_SD.equals("lbl_Supp"))
			    {
					 assertTrue(true);
			    }				
				if(VAT_Store_VD.equals("lbl_VatDeducted"))
			    {
					 assertTrue(true);
			    }				
				if(VAT_Store_PC.equals("lbl_Recovery"))
			    {
					 assertTrue(true);
			    }
			}
			
			/*@And("^User validate value \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" for Adjustment$")
			public void user_validate_value_for_Adjustment(String VR, String SD, String VDM, String PC) throws Throwable 
			{
				if(elementText("lbl_VatReversal").equalsIgnoreCase(VR))
				{
					System.out.println("Pass");
				}			    
			    if(elementText("lbl_Supp").equalsIgnoreCase(SD))
				{
					System.out.println("Pass");
				}
			    if(elementText("lbl_VatDeducted").equalsIgnoreCase(VDM))
				{
					System.out.println("Pass");
				}	
			    if(elementText("lbl_Recovery").equalsIgnoreCase(PC))
				{
					System.out.println("Pass");
				}	
			}*/
			
			/*			@And("^User validate Operations Performed Section \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
			public void user_validate_Operations_Performed_Section(String DG, String DS1, String DS2, String DGI, String DSI, String FPP, String Export, String Exempt, String Nontaxable) throws Throwable 
			{
				    if(elementText("lbl_Delivery_goods").equalsIgnoreCase(DG))
					{
						System.out.println("Pass");
					}
				    if(elementText("lbl_Delivery_goods_disable").equalsIgnoreCase(DG))
					{
						System.out.println("Pass");
					}
			}
	*/		
			
		/*	
			@And("^User validate Operations Performed Section \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
			public void user_validate_Operations_Performed_Section(String DG, String DGV, String DS1, String DS2, String DSM, String DGI, String DGIV, String DSI, String DSIV, String FPP, String FPPV, String Export, String Exempt, String Nontaxable, String TOT, String TOTV) throws Throwable 
			{
				if(elementText("lbl_Delivery_goods").equals(DG))
				{
					System.out.println("Pass");
				}
				
				if(elementText("lbl_Delivery_goods").equalsIgnoreCase(DG))
				{
					System.out.println("Pass");
				}
			    if(elementText("lbl_Delivery_goods_disable").equalsIgnoreCase(DGV))
				{
					System.out.println("Pass");
				}
			    if(elementText("lbl_Delivercy1").equalsIgnoreCase(DS1))
				{
					System.out.println("Pass");
				}
			    if(elementText("lbl_Delivercy2").equalsIgnoreCase(DS2))
				{
					System.out.println("Pass");
				}
			    if(elementText("lbl_Delivercy_disable").equalsIgnoreCase(DSM))
				{
					System.out.println("Pass");
				}		    
			    if(elementText("lbl_Delivery_goods_Itself").equalsIgnoreCase(DGI))
				{
					System.out.println("Pass");
				}
			    if(elementText("lbl_Delivery_goods_Itself_disable").equalsIgnoreCase(DGIV))
				{
					System.out.println("Pass");
				}
			    if(elementText("lbl_Delivery_Services_itself").equalsIgnoreCase(DSI))
				{
					System.out.println("Pass");
				}
			    if(elementText("lbl_Delivery_Services_itself_disable").equalsIgnoreCase(DSIV))
				{
					System.out.println("Pass");
				}
			    if(elementText("lbl_Operational").equalsIgnoreCase(FPP))
				{
					System.out.println("Pass");
				}			    
			    if(elementText("lbl_Operational_disable").equalsIgnoreCase(FPPV))
				{
					System.out.println("Pass");
				}			    
			    if(elementText("lbl_Export").equalsIgnoreCase(Export))
				{
					System.out.println("Pass");
				}			    
			    if(elementText("lbl_Exempt").equalsIgnoreCase(Exempt))
				{
					System.out.println("Pass");
				}
			    if(elementText("lbl_Non_taaxable").equalsIgnoreCase(Nontaxable))
				{
					System.out.println("Pass");
				}
				    if(elementText("lbl_Total1_disable").equalsIgnoreCase(TOT))
				{
					System.out.println("Pass");
				}
			    if(elementText("lbl_Total2_disable").equalsIgnoreCase(TOTV))
				{
					System.out.println("Pass");
				}
			}*/
			
			/*@And("^User validate \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" for Tax Deductible On$")
			public void user_validate_for_Tax_Deductible_On(String AI, String AL, String AILV, String GI, String GL, String GILV, String RI, String RL, String RILV, String OI, String OL, String OILV, String TD, String RCC, String AVD) throws Throwable 
			{
			
				if(elementText("lbl_Assest1").equalsIgnoreCase(AI))
				{
					System.out.println("Pass");
				}
			    if(elementText("lbl_Assest2").equalsIgnoreCase(AL))
				{
					System.out.println("Pass");
				}
			    if(elementText("lbl_Assest_disable").equalsIgnoreCase(AILV))
				{
					System.out.println("Pass");
				}
			    if(elementText("lbl_Goods1").equalsIgnoreCase(GI))
				{
					System.out.println("Pass");
				}
			    if(elementText("lbl_Goods2").equalsIgnoreCase(GL))
				{
					System.out.println("Pass");
				}		    
			    if(elementText("lbl_Goods_disable").equalsIgnoreCase(GILV))
				{
					System.out.println("Pass");
				}
			    if(elementText("lbl_RawMateria1").equalsIgnoreCase(RI))
				{
					System.out.println("Pass");
				}
			    if(elementText("lbl_RawMateria2").equalsIgnoreCase(RL))
				{
					System.out.println("Pass");
				}
			    if(elementText("lbl_RawMateria_disable").equalsIgnoreCase(RILV))
				{
					System.out.println("Pass");
				}
			    if(elementText("lbl_OtherGoods1").equalsIgnoreCase(OI))
				{
					System.out.println("Pass");
				}			    
			    if(elementText("lbl_OtherGoods2").equalsIgnoreCase(OL))
				{
					System.out.println("Pass");
				}			    
			    if(elementText("lbl_OtherGoods_disable").equalsIgnoreCase(OILV))
				{
					System.out.println("Pass");
				}			    
			    if(elementText("lbl_deducitable_diable").equalsIgnoreCase(TD))
				{
					System.out.println("Pass");
				}
			    if(elementText("lbl_RCarriedForward_disable").equalsIgnoreCase(RCC))
				{
					System.out.println("Pass");
				}	
			    if(elementText("lbl_AvatDectible_disable").equalsIgnoreCase(AVD))
				{
					System.out.println("Pass");
				}	
			}*/
			
			
			
			

			
}
