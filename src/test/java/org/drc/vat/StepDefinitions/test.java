package org.drc.vat.StepDefinitions;

import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertTrue;

import java.io.File;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

import static org.drc.vat.appmanager.HelperBase.*;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.encryption.InvalidPasswordException;
import org.apache.pdfbox.text.PDFTextStripper;
import org.apache.poi.xwpf.usermodel.IBodyElement;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class test 
{
	/*static WebDriver driver;
	
	public static WebElement expandRootElement(WebElement element) {
		WebElement ele = (WebElement) ((JavascriptExecutor)driver).executeScript("return arguments[0].shadowRoot", element);
		return ele;
	}*/	

	
	public static void main(String args []) throws InvalidPasswordException, IOException
	{
		//String No = null;
		/*String No = "FT19030700003";		
		String inc = No.substring(0,12).concat("A"); //No.concat("0");
		System.out.println(inc);
		
		String Two = inc.substring(0,12).concat("B");
		System.out.println(Two);
		
		String Three = inc.substring(0,12).concat("C");
		System.out.println(Three);
		*/
		
		String Nit = "20190311070746381"; 
						
		String inc = Nit.substring(0,16).concat("A"); //No.concat("0");
		System.out.println(inc);
		
		/*wd = new ChromeDriver();
		wd.manage().window().maximize();
		wd.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		wd.get("chrome://settings/content/pdfDocuments");
	*/
		
		
        //Get shadow root element
		//WebElement shadowRoot1 = expandRo	otElement(root1);
		
	//	WebElement root2 = driver.findElement(driver..findelements(object)findElement(By.xpath("//*[@id='toolbar']")).getText());
        //Get shadow root element
	//	WebElement shadowRoot2 = expandRootElement(root2);
		
		

	/*	WebElement step2loginControl = driver.findElement(By.cssSelector("cr-toolbar"));
		//get shadow root element - the second shadow root
		WebElement shadowRoot2 = expandRootElement(step2loginControl);

		WebElement inputelement = driver.findElement(By.cssSelector("cr-toolbar-search-field"));
		WebElement test1 = expandRootElement(inputelement);

		WebElement inputelement1 = driver.findElement(By.xpath("//*[@id='searchTerm']"));
		WebElement test2 = expandRootElement(inputelement);
		test2.sendKeys("hello");*/
/*
		WebElement paper = driver.FindElement(By.TagName("paper-material"));
		//get shadow root - the third shadow root
		WebElement shadowRoot3= expandRootElement(paper);
		WebElement username = shadowRoot3.FindElement(By.Id("input"));*/
	
		/*String Total_Amount_Reconciled= "11.200,00";		
	    String Remove_Dot1 = Total_Amount_Reconciled.replace("." ,"");	
	    Remove_Dot1 = Remove_Dot1.replace("," ,".");		    		    	 	
	    Double result11 = Double.parseDouble(Remove_Dot1);
	    String Res11 = String.format ("%.2f", result11);
	    
		double Re = Double.parseDouble(Res11);				
		System.out.println(Re);
		
		String Total_Amount_UnReconciled= "0.00";		
	    String Remove_Dot12 = Total_Amount_UnReconciled.replace("." ,"");	
	    Remove_Dot12 = Remove_Dot12.replace("," ,".");		    		    	 
		Double  result12 = Double.parseDouble(Remove_Dot12);
		String Res12 = String.format ("%.2f", result12);
		
		double Un_Re = Double.parseDouble(Res12);				
		System.out.println(Un_Re);				
		
		double Validate =  Re + Un_Re;			
		System.out.println(Validate);		
		
		 String Total_Amount_Re= "11.200,00";		
		 String Remove_Dot = Total_Amount_Re.replace("." ,"");	
		 Remove_Dot = Remove_Dot.replace("," ,".");		    		    	 
		 Double  result1 = Double.parseDouble(Remove_Dot);
		 System.out.println(result1);		
		 assertEquals(Validate, result1);*/

		
		
		/*PDDocument doc = PDDocument.load(getLatestFilefromDir1());   
		PDFTextStripper pdfStripper = new PDFTextStripper();  
		String text = pdfStripper.getText(doc);  
		System.out.println(text);
		
		String text_Name = "Automation User Test";	
		String text_NITVA ="20190218033131548";
		String text_TransactionNo ="FT19021800014";
		String text_InstitutionName_BankName="Advans Bank";

		assertEquals(text.contains(text_Name), true);
		assertEquals(text.contains(text_NITVA), true);
		assertEquals(text.contains(text_TransactionNo), true);
		assertEquals(text.contains(text_InstitutionName_BankName), true);*/
	

	}
}
