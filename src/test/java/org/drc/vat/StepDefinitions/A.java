package org.drc.vat.StepDefinitions;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

public class A {

	public static void main(String[] args) throws IOException, ParseException, java.text.ParseException {
		// TODO Auto-generated method stub
		System.out.println(new SimpleDateFormat("YYYY-MM-dd").format(new Date()));
		String a="010jsdkfljsdfj";
		a.replaceFirst ("^0*", "");
		System.out.println(a.replaceFirst ("^0*", ""));
		Date date1=new SimpleDateFormat("dd-MMM-YYYY").parse("31-Jan-2019"); 
		Calendar cal2=Calendar.getInstance();
		cal2.add(Calendar.DATE, -30);
		System.out.println(cal2.getTime());
		String fifteendaysago=new SimpleDateFormat("dd-MM-YYYY").format(cal2.getTime());
		System.out.println(fifteendaysago);
		cal2.add(Calendar.DATE, -15);
		System.out.println(new SimpleDateFormat("dd-MM-YYYY").format(cal2.getTime()));
		System.out.println(Calendar.MONTH);
		Calendar cal = Calendar.getInstance();	
		cal.add(Calendar.YEAR, -45);
		Date result = new Date();
	
		result=cal.getTime();	
		System.out.println(result);
		result = cal.getTime();
		SimpleDateFormat dateformatter=new SimpleDateFormat("MM");
		SimpleDateFormat sqldate=new SimpleDateFormat("YYYY-MM-dd");
		System.out.println(dateformatter.format(result));	
		cal = Calendar.getInstance();	
		cal.add(Calendar.MONTH, -1);
		result=cal.getTime();	
		System.out.println(dateformatter.format(result));
	
		FileReader reader = new FileReader("debtdata.json");
		JSONParser jsonParser = new JSONParser();
		JSONObject jsondecode = (JSONObject)jsonParser.parse(reader);
		System.out.println((String) jsondecode.get("email"));

		System.out.println((String) jsondecode.get("debtamt"));


	}

	
}
