package org.drc.vat.StepDefinitions;

import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;

import org.apache.pdfbox.cos.COSDocument;
import org.apache.pdfbox.pdfparser.PDFParser;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.util.PDFTextStripper;
import org.testng.Assert;

public class PdfCompare
{

	public static void main (String[] args) throws IOException
	{
		/*File file = new File("C:\\Users\\admin\\Downloads\\ManageVatRegistration.pdf");
		FileInputStream fis = new FileInputStream(file);
		
		PDFParser parser = new PDFParser(fis);
		
		parser.parse();
		COSDocument cosDoc=parser.getDocument();
		PDDocument pdDoc =new PDDocument(cosDoc);
		PDFTextStripper strip = new PDFTextStripper();
		String data = strip.getText(pdDoc);
		
		System.out.println(data);
		
		cosDoc.close();
		pdDoc.close();
		Assert.assertTrue(data.contains("Test 222"));
		
		System.out.println("Text Found");*/
				
		File file = new File("C:\\Users\\admin\\Downloads\\ManageVatRegistration.pdf");
		FileInputStream fis = new FileInputStream(file);
		
		PDFParser parser = new PDFParser(fis);
		
		parser.parse();
		COSDocument cosDoc=parser.getDocument();
		PDDocument pdDoc =new PDDocument(cosDoc);
		PDFTextStripper strip = new PDFTextStripper();
		String data = strip.getText(pdDoc);
		
		System.out.println(data);
		
		//cosDoc.close();
	//	pdDoc.close();
		//Assert.assertTrue(data.contains("Test"));
	//	Assert.assertEquals(data,"Test 222");
		//System.out.println("Text Found");
		
		Assert.assertTrue(data.contains("Test"));
		
		/*File file = new File("C:\\Users\\admin\\Downloads\\ManageVatRegistration.pdf");
		FileInputStream fis = new FileInputStream(file);
		
		PDFParser parser = new PDFParser(fis);
		
		parser.parse();
		COSDocument cosDoc=parser.getDocument();
		PDDocument pdDoc =new PDDocument(cosDoc);
		PDFTextStripper strip = new PDFTextStripper();
		String data = strip.getText(pdDoc);
		
		System.out.println(data);
		
		cosDoc.close();
		pdDoc.close();*/
		//Assert.assertTrue(data.contains("Test"));
		//Assert.assertEquals(data,"Test 222");
		//System.out.println("Text Found");		
		//Assert.assertTrue(data.contains("Test 222"));
	}
}
