package org.drc.vat.appmanager;

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

import static org.drc.vat.appmanager.HelperBase.elementText;
import static org.drc.vat.appmanager.HelperBase.filedoc;

public class xls_file {
	public static WebDriver wd;
	public static void xls(String acno,String branchname,String edate,String periodDate) throws IOException, InterruptedException 
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
		String Doc_no = elementText("txt_billno","");
		Thread.sleep(2000);
		String Nitva_no = elementText("txt_nitva","");
		Thread.sleep(2000);

		Thread.sleep(2000);
		String Taxpayer_name = elementText("txt_name","");
		Thread.sleep(2000);
		String Amount =elementText("txt_ltotal","");



		String newamount = Amount.trim().replace(".", "").replace(",", ".");
		System.out.println(newamount);


		FileInputStream filelocation = new FileInputStream(filedoc+"BankFile.xlsx");
		XSSFWorkbook workbook = new XSSFWorkbook(filelocation);
		XSSFSheet sheet = workbook.getSheetAt(0);


		// Date
		Row row;

		sheet.getRow(0).createCell(3).setCellValue(edate);
		// Doc No.
		row=sheet.getRow(4);
		row.createCell(1).setCellValue(Doc_no);
		// Nitva
		row.createCell(2).setCellValue(Nitva_no);
		//Cell cell4 = row.createCell(3); // Tran No.
		//cell4.setCellValue(strText2);
		// A/c No.
		row.createCell(4).setCellValue(acno);
		// Amount
		row.createCell(6).setCellValue(Taxpayer_name);	
		// Amount
		row.createCell(8).setCellValue(newamount);		 

		FileOutputStream fos = new FileOutputStream(filedoc+"BankFile.xlsx");
		workbook.write(fos);
		fos.close();		 
		System.out.println("END OF WRITING DATA IN EXCEL");		 
	}
}
