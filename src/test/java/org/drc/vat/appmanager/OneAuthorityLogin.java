package org.drc.vat.appmanager;

import java.awt.Robot;
import java.awt.Toolkit;
import java.awt.datatransfer.StringSelection;
import java.awt.event.KeyEvent;
import static org.drc.vat.appmanager.HelperBase.internalPortal;

public class OneAuthorityLogin {
	public void user_Enter_Valid(String username, String password) throws Throwable 
	 {
		
	  System.out.println("User Enter UN & Pass");
	 
	 // internalPortal();

	  Robot rb = new Robot();

	    // Enter user name in username field 
	   StringSelection un = new StringSelection(username);
	          Toolkit.getDefaultToolkit().getSystemClipboard().setContents(un, null);            
	          Thread.sleep(2000);
	          rb.keyPress(KeyEvent.VK_CONTROL);
	          rb.keyPress(KeyEvent.VK_V);
	          rb.keyRelease(KeyEvent.VK_V);
	          rb.keyRelease(KeyEvent.VK_CONTROL);

	    // press tab to move to password field
	         rb.keyPress(KeyEvent.VK_TAB);
	         rb.keyRelease(KeyEvent.VK_TAB);
	         Thread.sleep(2000);    
	         System.out.println(username);
	   	  System.out.println(password);

	    //Enter password in password field
	         StringSelection pwd = new StringSelection(password);
	         Toolkit.getDefaultToolkit().getSystemClipboard().setContents(pwd, null);
	         rb.keyPress(KeyEvent.VK_CONTROL);
	         rb.keyPress(KeyEvent.VK_V);
	         rb.keyRelease(KeyEvent.VK_V);
	         rb.keyRelease(KeyEvent.VK_CONTROL);
	         Thread.sleep(5000);
	               
	    //press enter
	   rb.keyPress(KeyEvent.VK_ENTER);
	   rb.keyRelease(KeyEvent.VK_ENTER);
	   
	   System.out.println("pass");
}
}
