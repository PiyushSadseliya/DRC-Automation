package org.drc.vat.appmanager;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

public class ConnectDatabase {
	public static Statement sta;
	public static final String dir = System.getProperty("user.dir");
	public static final String projdir = System.getProperty("user.dir");
	public static String excelFile = projdir + "//result.xls";
	public static String filename;
	public static String DealId;

	public static void opendb() throws SQLException, ClassNotFoundException {
		Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
		// Class.forName("com.mysql.jdbc.Driver");
		Connection conn = DriverManager
				.getConnection("jdbc:sqlserver://103.249.120.58;user=Tripty;password=Tripty789@@@");
		sta = conn.createStatement();
	}

	public static void closedb() throws SQLException {
		sta.close();
	}

}
