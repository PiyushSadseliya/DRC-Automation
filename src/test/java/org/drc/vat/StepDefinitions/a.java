package org.drc.vat.StepDefinitions;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;
import java.util.concurrent.TimeUnit;

class a {

	public static void main(String[] args) throws ParseException {
		// TODO Auto-generated method stub
double a=755*.1;
StringBuilder digit=new StringBuilder(String.format("%4.3f", a).replaceAll("\\.0*$", ""));
System.out.println(digit);
System.out.println(digit.subSequence(0, digit.indexOf(".")+3));
System.out.println("63.5".replace(".", "").replace(",", "."));
System.out.println(new Date());
SimpleDateFormat sdf =new SimpleDateFormat("dd MMM,yyyy");
SimpleDateFormat sdf1 =new SimpleDateFormat("dd-MMM-yyyy");
Date d =sdf.parse("15 February, 2019");

System.out.println(sdf1.format(d));
SimpleDateFormat myFormat = new SimpleDateFormat("dd-MMM-yyyy");
Date date1 = myFormat.parse("13-Feb-2019");
Date date2 = myFormat.parse("20-Feb-2019");

System.out.println("Days: " + TimeUnit.DAYS.convert(date2.getTime() - date1.getTime(), TimeUnit.MILLISECONDS));
	}

}
