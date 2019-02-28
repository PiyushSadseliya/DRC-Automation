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
	public static void xls() throws IOException, InterruptedException 
	{	
		//String exePath = "E:\\Amitworkspace\\DRC_REG\\chromedriver.exe";
		//System.setProperty("webdriver.chrome.driver", exePath);		
		//  WebDriver driver = new ChromeDriver();        		
		//  driver.get("http://www.wikipedia.com/");
		//  driver.manage().window().maximize();

		DateFormat dateFormat = new SimpleDateFormat("MM-dd-yyyy HH:mm:ss");        
		Date date = new Date();
		String currentDate = dateFormat.format(date);	        

		Thread.sleep(2000);	        	      
		String Doc_no = wd.findElement(By.xpath("//span[contains(text(),'Tax Bill No')]//following::span")).getText();
		System.out.println(Doc_no);
		Thread.sleep(2000);
		String Nitva_no = wd.findElement(By.xpath("//strong[contains(text(),'NITVA:')]//following::span")).getText();
		Thread.sleep(2000);
		String Account_No = wd.findElement(By.xpath("//div[contains(text(),'Beneficiary Account Number (CPIN)')]//following::td/div")).getText();
		Thread.sleep(2000);
		String Taxpayer_name = wd.findElement(By.xpath("//span[contains(text(),'Taxpayer Name:')]//following::td/div")).getText();
		Thread.sleep(2000);
		String Amount = wd.findElement(By.xpath("(//tbody)[2]//tr[2]//td[6]")).getText();	        

		String amount = "7.848,00 "; // store gettext value for amount in string via getText method
		String newamount = amount.trim().replace(',', '.');
		System.out.println(newamount);	        

		FileInputStream filelocation = new FileInputStream(filedoc+"BankFile.xlsx");
		XSSFWorkbook workbook = new XSSFWorkbook(filelocation);
		XSSFSheet sheet = workbook.getSheetAt(0);

		Row row = sheet.createRow(6);
		Cell cell = row.createCell(0);  // Date

		cell.setCellType(cell.CELL_TYPE_STRING);
		cell.setCellValue(currentDate);

		Cell cell2 = row.createCell(1); // Doc No.
		cell2.setCellValue(Doc_no);

		Cell cell3 = row.createCell(2); // Nitva
		cell3.setCellValue(Nitva_no);

		//Cell cell4 = row.createCell(3); // Tran No.
		//cell4.setCellValue(strText2);

		Cell cell5 = row.createCell(4); // A/c No.
		cell5.setCellValue(Account_No);

		Cell cell6 = row.createCell(6); // Amount
		cell6.setCellValue(Taxpayer_name);	

		Cell cell8 = row.createCell(8); // Amount
		cell8.setCellValue(newamount);		 

		FileOutputStream fos = new FileOutputStream(filedoc+"BankFile.xlsx");
		workbook.write(fos);
		fos.close();		 
		System.out.println("END OF WRITING DATA IN EXCEL");		 
	}
}
