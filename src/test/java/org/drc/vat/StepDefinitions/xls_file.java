package org.drc.vat.StepDefinitions;

import static org.drc.vat.appmanager.HelperBase.*;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class xls_file {
	//	public static WebDriver wd;
	
	public static String Document_No;
	public static String NITVA;
	public static String Tax_Payer;
	
	public static void xls() throws IOException, InterruptedException 
	{	
		
		DateFormat dateFormat = new SimpleDateFormat("dd-MM-yyyy HH:mm:ss");
		Date date = new Date();
		String currentDate = dateFormat.format(date);	        

		Thread.sleep(2000);	        	      
		String Doc_no = wd.findElement(By.xpath("//span[contains(text(),'Tax Bill No')]//following::span")).getText();
		System.out.println(Doc_no);
		Thread.sleep(2000);
		String Nitva_no = wd.findElement(By.xpath("//strong[contains(text(),'NITVA:')]//following::span")).getText();
		Thread.sleep(2000);
		
		/*String Account_No = wd.findElement(By.xpath("//div[contains(text(),'Beneficiary Account Number (CPIN)')]//following::td/div")).getText();
		Thread.sleep(2000);*/
		/**
		 *  Account Number Static
		 */
		
		String Account_No = "00112233440037";
		
		String Taxpayer_name = wd.findElement(By.xpath("//span[contains(text(),'Taxpayer Name:')]//following::td/div")).getText();
		Thread.sleep(2000);
		String Amount = wd.findElement(By.xpath("(//tbody)[2]//tr[2]//td[6]")).getText();	        

		//String amount = "7.848,00 "; // store gettext value for amount in string via getText method
		String amount = Amount;
		 String	FC2 = amount.replace("." ,"");		
		 String newamount = FC2.replace("," ,".");
		//String newamount = amount.trim().replace(',', '.');
		System.out.println(newamount);	        

		String BankName = "Bank Name:";
		String AdvansBank = "Advans Bank";	
		String ReceivedDate = "Received Date:";
		
		FileInputStream filelocation = new FileInputStream(filedoc+"BankFileTest.xlsx");
		XSSFWorkbook workbook = new XSSFWorkbook(filelocation);
		XSSFSheet sheet = workbook.getSheetAt(0);

		Row row1 = sheet.createRow(0);
		Cell cell11 = row1.createCell(0);  // Bank Name:
		cell11.setCellType(cell11.CELL_TYPE_STRING);
		cell11.setCellValue(BankName);
		
		Cell cell12 = row1.createCell(1); // Advans Bank
		cell12.setCellValue(AdvansBank);
		
		Cell cell13 = row1.createCell(2); // Received Date
		cell13.setCellValue(ReceivedDate);
		
		//Row row = sheet.createRow(0);
		Cell cell = row1.createCell(3);  // Date
		cell.setCellType(cell.CELL_TYPE_STRING);
		cell.setCellValue(currentDate);

		Row row = sheet.createRow(4);
		Cell cell1 = row.createCell(0); 
		cell1.setCellType(cell1.CELL_TYPE_STRING);
		cell1.setCellValue(currentDate);
		
		Cell cell2 = row.createCell(1); // Doc No.
		cell2.setCellValue(Doc_no);
		
		Document_No = Doc_no;		
		
		Cell cell3 = row.createCell(2); // Nitva
		cell3.setCellValue(Nitva_no);

		NITVA = Nitva_no;
		
		Cell cell4 = row.createCell(3); // Tran No.
		cell4.setCellValue(Doc_no);

		/**
		 *  Account Number Static
		 */
		Cell cell5 = row.createCell(4); // A/c No.
		cell5.setCellValue(Account_No);

		Cell cell6 = row.createCell(6); // Tax Payer Name
		cell6.setCellValue(Taxpayer_name);
		
		
		Tax_Payer = Taxpayer_name;

		Cell cell7 = row.createCell(7); // Tax Payer Name
		cell7.setCellValue(AdvansBank);	
		
		
		Cell cell8 = row.createCell(8); // Amount
		cell8.setCellValue(newamount);		 
		
	//------------------------------------ For Invalid Doc No----------------------------------------------------------------------	

		Row row01 = sheet.createRow(5);
		Cell cell01 = row01.createCell(0); 
		cell01.setCellType(cell1.CELL_TYPE_STRING);
		cell01.setCellValue(currentDate);
		
		Cell cell02 = row01.createCell(1); // Doc No.
		cell02.setCellValue(Doc_no.substring(0,12).concat("A"));
		
		Cell cell03 = row01.createCell(2); // Nitva
		cell03.setCellValue(Nitva_no);
		//NITVA = Nitva_no;
		
		Cell cell04 = row01.createCell(3); // Tran No.
		cell04.setCellValue(Doc_no.substring(0,12).concat("A"));

		/**
		 *  Account Number Static
		 */
		Cell cell05 = row01.createCell(4); // A/c No.
		cell05.setCellValue(Account_No);

		Cell cell06 = row01.createCell(6); // Tax Payer Name
		cell06.setCellValue(Taxpayer_name);
		//Tax_Payer = Taxpayer_name;

		Cell cell07 = row01.createCell(7); // Tax Payer Name
		cell07.setCellValue(AdvansBank);	
		
		
		Cell cell08 = row01.createCell(8); // Amount
		cell08.setCellValue(newamount);		 				
		
		
		
		
		//------------------------------------ For Invalid NITVA----------------------------------------------------------------------	
		Row row02 = sheet.createRow(6);
		Cell cell_01 = row02.createCell(0); 
		cell_01.setCellType(cell_01.CELL_TYPE_STRING);
		cell_01.setCellValue(currentDate);
		
		Cell cell_02 = row02.createCell(1); // Doc No.
		cell_02.setCellValue(Doc_no);
		
		Cell cell_03 = row02.createCell(2); // Nitva
		cell_03.setCellValue(Nitva_no.substring(0,16).concat("A"));
		//NITVA = Nitva_no;
		
		Cell cell_04 = row02.createCell(3); // Tran No.
		cell_04.setCellValue(Doc_no.substring(0,12).concat("B"));

		/**
		 *  Account Number Static
		 */
		Cell cell_05 = row02.createCell(4); // A/c No.
		cell_05.setCellValue(Account_No);

		Cell cell_06 = row02.createCell(6); // Tax Payer Name
		cell_06.setCellValue(Taxpayer_name);
		//Tax_Payer = Taxpayer_name;

		Cell cell_07 = row02.createCell(7); // Advans Bank
		cell_07.setCellValue(AdvansBank);	
		
		
		Cell cell_08 = row02.createCell(8); // Amount
		cell_08.setCellValue(newamount);		 				
		
		//--------------------------------------------------------------------------------------------------
		
		
		FileOutputStream fos = new FileOutputStream(filedoc+"BankFileTest.xlsx");
		workbook.write(fos);
		fos.close();		 
		System.out.println("END OF WRITING DATA IN EXCEL");		 
	}
}
