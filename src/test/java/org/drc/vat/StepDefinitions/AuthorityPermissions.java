package org.drc.vat.StepDefinitions;

import static org.drc.vat.appmanager.HelperBase.assertMsg;
import static org.drc.vat.appmanager.HelperBase.clickOn;
import static org.drc.vat.appmanager.HelperBase.login;
import static org.drc.vat.appmanager.HelperBase.pageSource;
import static org.drc.vat.appmanager.HelperBase.type;
import static org.drc.vat.appmanager.HelperBase.assertMsg;
import static org.drc.vat.appmanager.HelperBase.pageSource;
import static org.drc.vat.appmanager.HelperBase.elementText;
import static org.drc.vat.appmanager.HelperBase.searchonelist;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AuthorityPermissions {
	String permissionName=null;
	@Given("^The DGI admin has logged in the Authority Console Management portal with \"([^\"]*)\"\"([^\"]*)\"$")
	public void the_DGI_admin_has_logged_in_the_Authority_Console_Management_portal_with(String username, String password) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		login(username,password);
	}

	@When("^Click on Permission Module$")
	public void click_on_Permission_Module() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		clickOn("auth_perm_link","");
	}

	@Then("^Click on Add Permission$")
	public void click_on_Add_Permission() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		clickOn("auth_perm_btn_addperm","");
	}

	@Then("^Enters Permission Name \"([^\"]*)\"$")
	public void enters_Permission_Name(String name) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		permissionName=name;
		type("auth_perm_txtbx_add_perm",name);
	}

	@Then("^Click on Permbutton\"([^\"]*)\"$")
	public void click_on_Permbutton(String btn) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		if(btn.equals("add")) {
			clickOn("auth_perm_btn_add","");
		}
		if(btn.equals("remove")) {
			clickOn("auth_perm_btn_remove","");
		}
		if(btn.equals("cancel")) {
			clickOn("auth_perm_btn_cancel","");
		}
		if(btn.equals("delete")) {
			clickOn("auth_perm_btn_editdelete","");			
		}
		if(btn.equals("update")) {
			clickOn("auth_perm_btn_editsave","");
		}
		if(btn.equals("yes")) {			
			clickOn("auth_perm_btn_yes","");
		}
		if(btn.equals("no")) {			
			clickOn("auth_perm_btn_no","");
		}
	}

	@Then("^Message \"([^\"]*)\" should be displayed in permissions module$")
	public void message_should_be_displayed_in_permissions_module(String msg) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		  if(!pageSource().contains(msg)) {
		    	assertMsg(msg+"Not Displayed");
		    }
	}


	@When("^Selects the permission\"([^\"]*)\"$")
	public void selects_the_permission(String permname) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		clickOn("div","[@title="+permname+"]");
	}

	@When("^edits the name\"([^\"]*)\"$")
	public void edits_the_name(String name) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   type("auth_role_txtbx_editname",name);
	}
	@Then("^should be displayed in permission list below search box$")
	public void should_be_displayed_in_permission_list_below_search_box() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		String permlist="<div title='"+permissionName+">"+permissionName+"</div>";
	    if(!pageSource().contains(permlist.toLowerCase())) {
	    	assertMsg("Not found in the list");
	    }
	}

@Then("^Check in permission list search box \"([^\"]*)\"$")
public void check_in_permission_list_search_box(String name) throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	type("auth_role_txtbx_search",name);
	
}
@Then("^Message should be displayed below the permission list searchbox\"([^\"]*)\"$")
public void message_should_be_displayed_below_the_permission_list_searchbox(String msg) throws Throwable {
  
	if(!elementText("auth_role_search_not_found","").equalsIgnoreCase(msg)){
		assertMsg(msg+"Not Found");		
	}
}
@Then("^the list of all the permission with name containing \"([^\"]*)\" should be listed$")
public void the_list_of_all_the_permission_with_name_containing_should_be_listed(String permname) throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	
	searchonelist("auth_role_search_list",permname);
    
}


}
