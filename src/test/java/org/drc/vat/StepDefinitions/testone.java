package org.drc.vat.StepDefinitions;

import static org.drc.vat.appmanager.HelperBase.elementText;
import static org.drc.vat.appmanager.HelperBase.sleepWait;
import static org.testng.Assert.assertFalse;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.joda.time.DateTime;
import org.joda.time.LocalDate;
import org.joda.time.format.DateTimeFormat;

import net.lightbody.bmp.filters.RewriteUrlFilter;

public class testone {

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
		String value = "Date : 16-Jan-2019";
		value = value.substring(7);
		System.out.println(value);
		
		/*Date Mydate = new Date();		
		SimpleDateFormat mdyFormat = new SimpleDateFormat("dd-MMM-yyyy");
		String mdy = mdyFormat.format(Mydate);
		System.out.println(mdy);*/
		
		
		//String DateFormat  = elementText("txt_Date");
		String DateFormat1  = "16-Jan-2019";		
		//System.out.println(DateFormat1);
		
	/*	org.joda.time.format.DateTimeFormatter formatter = DateTimeFormat.forPattern("dd-MMMM-yyyy");		 		
		LocalDate DateFor = formatter.parseLocalDate(DateFormat1);
		System.out.println(DateFor);*/
		
		

	}
	
	
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
