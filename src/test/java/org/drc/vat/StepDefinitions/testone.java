package org.drc.vat.StepDefinitions;

import static org.drc.vat.appmanager.HelperBase.elementText;
import static org.drc.vat.appmanager.HelperBase.sleepWait;
import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertFalse;
import static org.testng.Assert.assertTrue;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.joda.time.DateTime;
import org.joda.time.LocalDate;
import org.joda.time.format.DateTimeFormat;

import net.lightbody.bmp.filters.RewriteUrlFilter;

public class testone {
	
	public static String StoreRecoveryAmount = "112.08";

	/*public static void checkDate(String inDate) throws InterruptedException
	{
		SimpleDateFormat dateFormat = new SimpleDateFormat("dd-MMMM-YYYY");
		dateFormat.setLenient(false);
		try
		{
			dateFormat.parse(inDate.trim());
		}
		catch(ParseException pe)
		{
			//return false;
			assertFalse(false);
			
		}
		//return true;
		assertFalse(false);
		
		//System.out.println(checkDate("16-01-2019"));
		
	}*/
	
	/*public static void main (String[] args)
	{
		System.out.println(checkDate("16-01-2019"));
	}*/

	public static void main(String[] args) 
	{
	    /* Date now = new Date();
	     SimpleDateFormat mdyFormat = new SimpleDateFormat("dd MMMM, yyyy");
	     String mdy = mdyFormat.format(now);
	     System.out.println(mdy);
	     
	     Calendar cal = Calendar.getInstance();	   
	     cal.setTime(now);
	     cal.add(Calendar.DAY_OF_YEAR, 1); 
	     Date tomorrow = cal.getTime();
	     System.out.println(tomorrow);*/
	   
/*		Date now = new Date();
		 Calendar cal = Calendar.getInstance();	   
	     cal.setTime(now);
	     cal.add(Calendar.DAY_OF_YEAR, 1); 
	     Date tomorrow = cal.getTime();
	     System.out.println(tomorrow);*/
	
		/*
		DateFormat formatdate = new SimpleDateFormat("dd MMMM, yyyy");
		    Calendar calendar = Calendar.getInstance();
	    // get a date to represent "today"
	    Date today = calendar.getTime();
	    System.out.println("today:    " + today);
	   
	    calendar.add(Calendar.DAY_OF_YEAR, 7);
	    
	    // now get "tomorrow"
	    Date tomorrow = calendar.getTime();

	    // print out tomorrow's date
	    System.out.println("tomorrow: " + tomorrow);*/
	     
	   
	  /*  
	    Calendar cal = Calendar.getInstance();
	    cal.add(Calendar.DAY_OF_WEEK, 7);
	    Date date = cal.getTime();             
	    SimpleDateFormat format1 = new SimpleDateFormat("dd MMMM, yyyy");
	    String date1 = format1.format(date);    
	    System.out.println(date1);
*/	    
	    
		/*String value = "Agreement Id : PA19020700003";
		value = value.substring(15);
		System.out.println(value);*/
	    
	    
		
		/*Date Mydate = new Date();		
		SimpleDateFormat mdyFormat = new SimpleDateFormat("dd-MMM-yyyy");
		String mdy = mdyFormat.format(Mydate);
		System.out.println(mdy);
	
		String value = "Reference Id: H19011100000018";
		value = value.substring(14);
		System.out.println(value);
		
		String s = "Reference Id: H19011100000018";
		
		int indexOfLast = s.lastIndexOf(":");
		String newString = s;
		if(indexOfLast >= 0) newString = s.substring(-0, indexOfLast);
		System.out.println(newString);*/
		
		
		//String DateFormat  = elementText("txt_Date");			
		/*String value = "Date : 16-Jan-2019";
		value = value.substring(7);
		System.out.println(value);*/

		
		//------------------------------------------------------------------------------------------------//		
		/*Date Mydate = new Date();		
		SimpleDateFormat mdyFormat = new SimpleDateFormat("YYMMdd");
		String mdy = mdyFormat.format(Mydate);
		System.out.println(mdy);
		String s1 = "R19021300000006";
		String first1 = s1.substring(1, s1.length() / 2);  
		//String second = s.substring(s.length() / 2); 
		System.out.println(first1);
		
		if(mdy.startsWith(first1))
		{
			assertTrue(true);
		}
		else
		{
			assertTrue(false);
		}*/		
		//------------------------------------------------------------------------------------------------//
		
//		String value = "Case Id: R19021300000006";
//		value = value.substring(9);		
//		//System.out.println(value);
//		value = value.substring(1,7);
//		System.out.println(value);
//		
//		Date Mydate = new Date();		
//		SimpleDateFormat mdyFormat = new SimpleDateFormat("YYMMdd");
//		String mdy = mdyFormat.format(Mydate);		
//		System.out.println(value);
//		assertEquals(mdy, value);
		//------------------------------------------------------------------------------------------------//
 
		/*String value = "Agreement Id: R19021300000006";
		value = value.substring(14);		
		value = value.substring(1,7);
		System.out.println(value);
		
		Date Mydate = new Date();		
		SimpleDateFormat mdyFormat = new SimpleDateFormat("YYMMdd");
		String mdy = mdyFormat.format(Mydate);		
		System.out.println(value);
		assertEquals(mdy, value);
		*/
		//------------------------------------------------------------------------------------------------//
		
		/*String value = "Payment Amount Due: FC 112,08";
		value = value.substring(23);		
		System.out.println(value);
		
		String FC1 = value.replaceAll("[A-Z]", "");*/
		
		StoreRecoveryAmount SRA = 
		
		String FC2 = FC1.replace("," ,".");
		 //String FC2 = FC1.replace("." ,"");
		 System.out.println(FC2);		 
		
		
	/*	System.out.println(StoteNIA); 

		Date Mydate = new Date();		
		SimpleDateFormat mdyFormat = new SimpleDateFormat("dd-MM-yyyy");
		StoteNIA = mdyFormat.format(Mydate);		
		System.out.println(StoteNIA);*/
	//	assertEquals(mdy, value);
		
	}
	
	//------------------For date format ------------------------//
	
	/*public static void main(String[] args) 
	{
		List<String> dates = new ArrayList<String>();
		dates.add("16-Jan-2019");
		
		dates.add("2019-01-16");

		for(String date : dates)
		{
			if(isValidDate(date))
			{
				
				System.out.println(date + "  Valid");
			}
			else
			{
				System.out.println(date + "  In-Valid");
			}
		}
		
	}

	public static boolean isValidDate(String dateMatch) 
	{
		boolean validDate = true;			
		try
		{
			org.joda.time.format.DateTimeFormatter formatter = DateTimeFormat.forPattern("dd-MMM-yyyy");
			DateTime dob = formatter.parseDateTime(dateMatch);		
		}
		catch(Exception e)
		{
			validDate = false;
		}		
		return validDate;
		
	}*/
	
	
	

}
