package org.drc.vat.StepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import static org.drc.vat.appmanager.HelperBase.login;
import static org.drc.vat.appmanager.HelperBase.clickOn;
import static org.drc.vat.appmanager.HelperBase.type;
import static org.drc.vat.appmanager.HelperBase.pageSource;
import static org.drc.vat.appmanager.HelperBase.elementText;
import static org.drc.vat.appmanager.HelperBase.assertMsg;
import static org.drc.vat.appmanager.HelperBase.getvalue;

public class AuthorityRoles {
	String name=null;
	String desc=null;
	
	@Given("^The DGI admin has logged into the Authority Console Management portal with \"([^\"]*)\"\"([^\"]*)\"$")
	public void the_DGI_admin_has_logged_into_the_Authority_Console_Management_portal_with(String username, String password) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    login(username,password);
	}
	@Given("^Click on Role Module$")
	public void click_on_Role_Module() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    clickOn("auth_link_role","");
	}
	@When("^Clicks Add Roles$")
	public void clicks_Add_Roles() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		 clickOn("auth_roles_btn_addnewrole","");
	    
	}

	@When("^Enters Name \"([^\"]*)\"and description \"([^\"]*)\"$")
	public void enters_Name_and_description(String name, String desc) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    type("auth_roles_text_newname",name);
	    type("auth_roles_text_newdesc",desc);
	}

	@Then("^Click on button\"([^\"]*)\"$")
	public void click_on_button(String btn) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		if(btn.equals("add")) {
			clickOn("auth_roles_btn_add","");
		}
		if(btn.equals("remove")) {
			clickOn("auth_roles_btn_remove","");
		}
		if(btn.equals("cancel")) {
			clickOn("auth_roles_btn_cancel","");
		}
		if(btn.equals("delete")) {
			clickOn("auth_role_btn_editdelete","");			
		}
		if(btn.equals("update")) {
			clickOn("auth_role_btn_editsave","");
		}
		if(btn.equals("yes")) {			
			clickOn("auth_role_btn_yes","");
		}
		if(btn.equals("no")) {			
			clickOn("auth_role_btn_no","");
		}
	    
	}

	@Then("^Message \"([^\"]*)\" should be displayed$")
	public void message_should_be_displayed(String msg) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    if(!pageSource().contains(msg)) {
	    	assertMsg(msg+"Not Displayed");
	    }
	}

	@Then("^listed below searchbbox$")
	public void listed_below_searchbbox() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		String rolelist="<div title='"+name+">"+name+"</div>";
	    if(!pageSource().contains(rolelist.toLowerCase())) {
	    	assertMsg("Not found in the list");
	    }	}

	@When("^Enters name\"([^\"]*)\" in search box$")
	public void enters_name_in_search_box(String data) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    type("auth_role_txtbx_search",data);
	    name=data;
	    
	}

	@Then("^searched name should be visible as the result\\.$")
	public void searched_name_should_be_visible_as_the_result() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		String rolelist="<div title='"+name+">"+name+"</div>";
			    if(!pageSource().contains(rolelist)) {
			    	assertMsg("Searched name not found");
			    }
	}
	@Then("^Message \"([^\"]*)\" should be displayed below the table$")
	public void message_should_be_displayed_below_the_table(String msg) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		String record="<div>"+msg+"</div>";
		if(!pageSource().contains(record)) {
		    	assertMsg("Records not found");
		    }
	}

	@When("^Enters name\"([^\"]*)\" Starting letter in search box$")
	public void enters_name_Starting_letter_in_search_box(String data) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		type("auth_role_txtbx_search",data);
	    
	}
	@Then("^Records containing Starting letter should be displayed$")
	public void records_containing_Starting_letter_should_be_displayed() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	  
	}



	@When("^Clicks roles name \"([^\"]*)\" from the search list$")
	public void clicks_roles_name_from_the_search_list(String roleName) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    type("auth_role_txtbx_search",roleName);
	    clickOn("div","[@title='"+roleName+"']");
	    
	}

	@When("^Change to role name to\"([^\"]*)\" and description to\"([^\"]*)\"$")
	public void change_to_role_name_to_and_description_to(String newname, String newdesc) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		type("auth_role_txtbx_editname",newname);
		type("auth_role_txtbx_editdesc",newdesc);
	    
	}

	@Then("^clicks on other anyother role$")
	public void clicks_on_other_anyother_role() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		clickOn("div","[@title='test']");
	    
	}

	@Then("^again Clicks previous changed roles\"([^\"]*)\" from the search list$")
	public void again_Clicks_previous_changed_roles_from_the_search_list(String name) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    clickOn("div","[@title='"+name+"']");
	}

	@Then("^New name\"([^\"]*)\" and description \"([^\"]*)\"must be shown\\.$")
	public void new_name_and_description_must_be_shown(String name, String desc) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		if(!getvalue("auth_role_txtbx_editname","").equals(name)) {
			assertMsg("Name don't match");
		}
		if(!getvalue("auth_role_txtbx_editdesc","").equals(desc)) {
			assertMsg("Description don't match");		}
	}

	@Given("^Clicks on any roles \"([^\"]*)\"$")
	public void clicks_on_any_roles(String name) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		clickOn("div","[@title='"+name+"']");
	}



	@When("^Check in search box \"([^\"]*)\"$")
	public void check_in_search_box(String name) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    type("auth_role_txtbx_search",name);
	    name=name;
	}

	@Then("^after (\\d+)TH character (\\d+) dots should be displayed\\.$")
	public void after_TH_character_dots_should_be_displayed(int arg1, int arg2) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    String extra_character=elementText("div","[@title='"+name+"']");
	    if(!extra_character.substring(25, 27).contains("...")){
	    	assertMsg("text overflows");
	    }
	    
	    
	}

	@When("^Clicks Roles$")
	public void clicks_Roles() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		clickOn("auth_roles_btn_addnewrole","");
	    
	}

	@Then("^after deletion of all records msg should be displayed and Delete button should be disabled$")
	public void after_deletion_of_all_records_msg_should_be_displayed_and_Delete_button_should_be_disabled() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    //For Deleting all the Records
	}

	@Then("^Clicks Add Roles again$")
	public void clicks_Add_Roles_again() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		clickOn("auth_roles_btn_addnewrole","");
	}

	@Then("^Enters Name \"([^\"]*)\"$")
	public void enters_Name(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		 type("auth_roles_text_newname",name);
	}

	@Then("^edits the \"([^\"]*)\" and desc\"([^\"]*)\"$")
	public void edits_the_and_desc(String role, String desc) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		type("auth_role_txtbx_editname",role);
		type("auth_role_txtbx_editdesc",desc);
	    
	}
	@Then("^records are not deleted$")
	public void records_are_not_deleted() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		if(getvalue("auth_role_txtbx_editname","").equals("")) {
			assertMsg("Records got deleted");
		}
	}
	
	
}
