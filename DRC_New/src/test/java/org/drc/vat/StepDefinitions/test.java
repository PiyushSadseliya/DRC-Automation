package org.drc.vat.StepDefinitions;

import java.text.DecimalFormat;
import java.text.NumberFormat;
import java.util.Locale;

import static org.drc.vat.appmanager.HelperBase.*;
public class test 
{
	public static void main()
	{
		NumberFormat numberFormat  = new DecimalFormat("##");
	String str = numberFormat.format(-01234.567);         // -1235

	System.out.print(str + "\n");
	
	str = numberFormat.format(00);                 // 0
	System.out.print(str + "\n");

	numberFormat = new DecimalFormat("##00");
	str = numberFormat.format(0);                 // 00
	System.out.print(str + "\n");

	numberFormat = new DecimalFormat(".00");
	str = numberFormat.format(-.4567);             // -.46
	System.out.print(str + "\n");

	numberFormat = new DecimalFormat("0.000");
	str = numberFormat.format(-.34567);             // -0.346
	System.out.print(str + "\n");

	numberFormat = new DecimalFormat("#.######");
	str = numberFormat.format(-012.34567);         // -12.34567
	System.out.print(str + "\n");

	numberFormat = new DecimalFormat("#.000000");
	str = numberFormat.format(-1234.567);         // -1234.567000
	System.out.print(str + "\n");

	numberFormat = new DecimalFormat("#,###,###");
	str = numberFormat.format(-01234567.890);      // -1 234 568
	System.out.print(str + "\n");

	numberFormat = new DecimalFormat("'text'#");
	str = numberFormat.format(+1234.567);         // text1235		
	System.out.print(str + "\n");

//Exponential notation
	numberFormat = new DecimalFormat("00.00E0");
	str = numberFormat.format(-012345.67);         // -12.35E2		
	System.out.print(str + "\n");
//set locale format
	// FRANCE  locale
	Locale locale = Locale.FRANCE;
	str = NumberFormat.getNumberInstance(locale).format(-123456.789);  // -123 456,789
	System.out.print(str + "\n");
	}
}
