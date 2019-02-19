package org.drc.vat.StepDefinitions;

import java.util.Date;
import java.util.Locale;

class a {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
double a=755*.1;
StringBuilder digit=new StringBuilder(String.format("%4.3f", a).replaceAll("\\.0*$", ""));
System.out.println(digit);
System.out.println(digit.subSequence(0, digit.indexOf(".")+3));
System.out.println("63.5".replace(".", "").replace(",", "."));
System.out.println(new Date());
	}

}
