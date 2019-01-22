package org.drc.vat.StepDefinitions;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import java.awt.Robot;
import java.awt.Toolkit;
import java.awt.datatransfer.StringSelection;
import java.awt.event.KeyEvent;

public class OneAuth 
{
	@Given("^User is on DRC Internal Portal$")
	public void user_is_on_DRC_Internal_Portal() throws Throwable {
		
		System.out.println("passbeforetest");
		
	}

	@When("^User Enter Valid : \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_Enter_Valid(String username, String password) throws Throwable {
		
		
		
		System.out.println("pass1");
		
		Robot rb = new Robot();

		  // Enter user name in username field 
		 StringSelection un = new StringSelection(username);
		        Toolkit.getDefaultToolkit().getSystemClipboard().setContents(un, null);            
		        rb.keyPress(KeyEvent.VK_CONTROL);
		        rb.keyPress(KeyEvent.VK_V);
		        rb.keyRelease(KeyEvent.VK_V);
		        rb.keyRelease(KeyEvent.VK_CONTROL);

		  // press tab to move to password field
		       rb.keyPress(KeyEvent.VK_TAB);
		       rb.keyRelease(KeyEvent.VK_TAB);
		       Thread.sleep(2000);
		     

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

	@When("^User Clicks on \"([^\"]*)\" Button$")
	public void user_Clicks_on_Button(String arg1) throws Throwable {
		 System.out.println("pass1");
	}

	@Then("^User Redirect to  \"([^\"]*)\"$")
	public void user_Redirect_to(String arg1) throws Throwable {
		 System.out.println("pass2");
	}

}
