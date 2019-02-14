package org.drc.vat.StepDefinitions;

import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertTrue;

import java.io.IOException;
import java.math.BigDecimal;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.Period;
import java.time.temporal.ChronoUnit;
import java.util.Calendar;
import java.util.Date;
import java.util.Locale;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.GeckoDriverService;
import static org.drc.vat.appmanager.HelperBase.*;
public class CopyPaste {

	/*public static String Weekly= null;
	public static String Fortnightly =null;
	public static String Monthly = null;
	public static String Quarterly =null; */
	
	/*static int Weekly_1 =7;
	static int Fortnightly_1 =14 ;
	static int Monthly_1 = 31;
	static int Quarterly_1 =92 ;*/		
	
	
	public static void main(String[] args) throws Exception
	{
		/*WebDriver wd = new ChromeDriver();
		
		wd.get("http://103.249.120.58:8042/user-registration");
		String value = wd.findElement(By.xpath("//*[@class='text-white']")).getText();
		System.out.println(value);				
		wd.findElement(By.xpath("//*[@formcontrolname='fullName']")).sendKeys(value);
		Thread.sleep(1000);*/
		
		        
	       /* BigDecimal a = new BigDecimal("0.2642475570894692");
	        BigDecimal roundOff = a.setScale(2, BigDecimal.ROUND_HALF_EVEN);
	        System.out.println(roundOff);*/
		
	       /* Calendar cal = Calendar.getInstance();
		    cal.add(Calendar.DAY_OF_WEEK, 7);
		    Date date = cal.getTime();             
		    SimpleDateFormat format1 = new SimpleDateFormat("dd MMMM, yyyy");
		    String date1 = format1.format(date);
		    System.out.println(date1);*/
		
		//Double Check = (1892165.08-0.0-0.0)/2.0;
		/*Double Check = (2237552.7/100)*100;
		String Cal = String.format ("%.3f", Check);
		System.out.println(Cal);*/
		
		Calendar cal = Calendar.getInstance();
	    cal.add(Calendar.DATE,0);
	    Date date = cal.getTime();             
	    SimpleDateFormat format1 = new SimpleDateFormat("YYMMdd");
	    String date1 = format1.format(date);    
	    System.out.println(date1);
		
	    
	  /*  cal.add(Calendar.DAY_OF_WEEK, 7*3);
	    Date date01 = cal.getTime();             
	    SimpleDateFormat format2 = new SimpleDateFormat("dd-MMM-yyyy");
	    String date2 = format2.format(date01);    	     
	    System.out.println(date2);*/
	    //NextInstallementDate = date1;
	    
	/*
		LocalDateTime now = LocalDateTime.now();
		System.out.println(now);
	    LocalDateTime tenSecondsLater = now.plusSeconds(10);
	    System.out.println(tenSecondsLater);
	    long diff = now.until(tenSecondsLater, ChronoUnit.SECONDS);
	 System.out.println(diff);
	   // assertEquals(diff, 10);
*/		
		/*SimpleDateFormat myFormat = new SimpleDateFormat("dd-MMM-yyyy");
		String inputString1 = "12-Feb-2019";
		String inputString2 = "19-Feb-2019";
		try 
		{
		    Date date1 = myFormat.parse(inputString1);
		    Date date2 = myFormat.parse(inputString2);
		    long diff = date2.getTime() - date1.getTime();
		    System.out.println ("Days: " + TimeUnit.DAYS.convert(diff, TimeUnit.MILLISECONDS));
		} catch (ParseException e) 
		{
		    e.printStackTrace();
		}*/
	
		
		/* Date date1 = myFormat.parse(inputString1);
		 Date date2 = myFormat.parse(inputString2);
		 long diff = date2.getTime() - date1.getTime();*/
		 //System.out.println(TimeUnit.DAYS.convert(diff, TimeUnit.MILLISECONDS));
		 //System.out.println ("Days: " + TimeUnit.DAYS.convert(diff, TimeUnit.MILLISECONDS));
		
		
		/*
	
		SimpleDateFormat myFormat = new SimpleDateFormat("dd-MMM-yyyy");
		String inputString1 = "13-Aug-2019";
		String inputString2 = "13-Nov-2019";
		int diff1 =0;
		try 
		{
		    Date date1 = myFormat.parse(inputString1);
		    Date date2 = myFormat.parse(inputString2);
		    long diff = date2.getTime() - date1.getTime();		    
		    diff1 = (int) TimeUnit.DAYS.convert(diff, TimeUnit.MILLISECONDS);
		    System.out.println(diff1);		     
		    //System.out.println ("Days: " + TimeUnit.DAYS.convert(diff, TimeUnit.MILLISECONDS));
		} catch (ParseException e) 
		{
		    e.printStackTrace();
		}				
		String InstallementFrequency = elementText("drp_InstallmentFrequency");		
		if(InstallementFrequency.equals("Weekly"))
		{
			assertEquals(diff1, Weekly_1);
		}
		else if(InstallementFrequency.equals("Fortnightly"))
		{
			assertEquals(diff1, Fortnightly_1);
		}
		else if(InstallementFrequency.equals("Monthly"))
		{
			assertEquals(diff1, Monthly_1);
		}
		else if(InstallementFrequency.equals("Quarterly"))
		{
			assertEquals(diff1, Quarterly_1);
		}
		else
		{
			assertTrue(false);
		}*/
		
		
		
		//assertEquals(diff1, 7);
		/*
		 Calendar cal1 = Calendar.getInstance();
	     Calendar cal2 = Calendar.getInstance();
		
	     cal1.set(Calendar.YEAR, Calendar.MONTH, 19);
	     cal2.set(Calendar.YEAR, Calendar.MONTH, 26);
	     
	      
	     // Get the represented date in milliseconds
	        long millis1 = cal1.getTimeInMillis();
	        long millis2 = cal2.getTimeInMillis();

	        // Calculate difference in milliseconds
	        long diff = millis2 - millis1;
	        long diffDays = diff / (24 * 60 * 60 * 1000);
	        System.out.println(diffDays);
	        //System.out.println("Days: " + diffDays);
*/	  
	        
	}

	

	
	
}
