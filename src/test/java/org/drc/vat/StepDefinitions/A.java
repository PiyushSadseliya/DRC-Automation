package org.drc.vat.StepDefinitions;

import java.text.SimpleDateFormat;
import java.util.Calendar;

public class A {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Calendar cal=Calendar.getInstance();
		cal.add(Calendar.YEAR, -1);
		cal.set(Calendar.MONTH, 0);
		cal.set(Calendar.DATE, 01);
		cal.getTime();
		System.out.println(	new SimpleDateFormat("YYYY-MM-dd").format(	cal.getTime()));
	}

}
