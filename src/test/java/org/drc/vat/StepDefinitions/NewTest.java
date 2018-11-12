package org.drc.vat.StepDefinitions;
import static org.drc.vat.appmanager.HelperBase.*;
import static org.testng.Assert.assertEquals;

import java.io.BufferedInputStream;
import java.io.IOException;
import java.net.URL;

import org.apache.pdfbox.io.RandomAccessRead;
import org.apache.pdfbox.pdfparser.PDFParser;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;
import org.testng.asserts.SoftAssert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.openqa.selenium.JavascriptExecutor;
import static org.drc.vat.appmanager.HelperBase.waitfor;
import static org.drc.vat.appmanager.HelperBase.wd;

public class NewTest {
	
	@Given("^user is on One Authority Login Page$")
	public void user_is_on_One_Authority_Login_Page() throws Throwable {
		wd.get("www.toolsqa.com");
		waitfor(2000);
		wd.findElement(By.xpath("//a[@href='http://toolsqa.com/category/blogs/']")).click();
	    // Write code here that turns the phrase above into concrete actions
		//Runtime.getRuntime().exec("C:\\Users\\srijo.vallianal\\Desktop\\HandleAuthentication.exe")
		/*
		wd.get("chrome://settings/content/pdfDocuments?search=pdf");

		System.out.println("Validate downloads page header text");
		WebElement root1 = wd.findElement(By.tagName("settings-ui"));

                //Get shadow root element
		WebElement shadowRoot1 = expandRootElement(root1);

		WebElement root2 = shadowRoot1.findElement(By.cssSelector("settings-main"));
		WebElement shadowRoot2 = expandRootElement(root2);

		WebElement root3 = shadowRoot2.findElement(By.cssSelector("settings-basic-page"));
		WebElement shadowRoot3 = expandRootElement(root3);
		
	//	settings-section
		//WebElement root4 = shadowRoot3.findElement(By.tagName("settings-section"));		
//		
//		WebElement root4 = shadowRoot3.findElement(By.cssSelector("settings-privacy-page"));
//		WebElement shadowRoot4 = expandRootElement(root4);
		
		//WebElement root5 = shadowRoot4.findElement(By.cssSelector("settings-animated-pages"));
		//WebElement shadowRoot5 = expandRootElement(root5);



		
		//WebElement root6 = shadowRoot5.findElement(By.cssSelector("settings-subpage[page-title=PDF documents]"));
		//WebElement shadowRoot8 = expandRootElement(root8);

		WebElement root7 = shadowRoot3.findElement(By.cssSelector("settings-pdf-documents"));
		WebElement shadowRoot7 = expandRootElement(root7);
		
		WebElement root8 = shadowRoot7.findElement(By.cssSelector("settings-toggle-button"));
		WebElement shadowRoot9 = expandRootElement(root8);
		

		
		String actualHeading = shadowRoot9.findElement(By.cssSelector("div[id=label]")).getText();
		// Verify header title
		System.out.println(actualHeading);*/
	//assertEquals("Downloads", actualHeading);
/*		
		//waitfor()
		clickOn("nav_manualAssessment","") ;
	    Thread.sleep(2000);
	   // clickOn("nav_AssessedList","");
	    Thread.sleep(18000);
	    wd.findElement(By.xpath("//a[@title='View Notice']")).click();
	    //System.out.println(wd.getCurrentUrl());
	    Thread.sleep(5000);
	  
	
	    PDDocument doc = PDDocument.load(getLatestFilefromDir());   
	    PDFTextStripper pdfStripper = new PDFTextStripper();  
	    String text = pdfStripper.getText(doc);  
	    System.out.println(text);
	    */
//wd.get("chrome://settings/content/pdfDocuments?search=pdf");
	   //wd.switchTo().window(wd.getWindowHandles().toArray()[1].toString());
/*	   String []url=wd.getCurrentUrl().split(":",2);
	   URL xyzUrl = new URL( wd.getCurrentUrl());
	   BufferedInputStream bis = new BufferedInputStream(xyzUrl.openStream());
	   PDDocument doc = PDDocument.load(bis);
	   String pdfText = new PDFTextStripper().getText(doc);
	   doc.close();
	   bis.close();
	   System.out.println(pdfText);	  */

	 //  System.out.println(wd.findElement(By.xpath("//body")).getText());
	    
		//System.out.println(buttonEnabled("btn_maassessNext",""));
	 //
	   
	  // System.out.println(TestText);
	  // xyzPDF.close();

		/*Thread.sleep(10000);*/
		
		
	}
/*	public WebElement expandRootElement(WebElement element) {
		WebElement ele = (WebElement) ((JavascriptExecutor) wd)
.executeScript("return arguments[0].shadowRoot",element);
		return ele;
	}*/

	@Then("^he needs to sign in with uname\"([^\"]*)\"pwd\"([^\"]*)\"$")
	public void he_needs_to_sign_in_with_uname_pwd(String arg1, String arg2) throws Throwable {
	    
Thread.sleep(10000);
		
}
/*	public static void main(String args[]) throws IOException {
		WebDriver d =new ChromeDriver();
	
		 d.manage().window().maximize();
			
		d.get("http://103.249.120.58:8068");
		Runtime.getRuntime().exec("C:\\Users\\srijo.vallianal\\Desktop\\HandleAuthentication.exe");
		
	}*/
}
