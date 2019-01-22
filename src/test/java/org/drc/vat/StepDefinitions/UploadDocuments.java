package org.drc.vat.StepDefinitions;
import static  org.drc.vat.appmanager.HelperBase.clickOn;
import static  org.drc.vat.appmanager.HelperBase.type;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class UploadDocuments {
	String Upload_Msg="File Uploaded!";
	
int upload_doc;
@Given("^The user is on the upload the page with Proofs of Address \"([^\"]*)\"\"([^\"]*)\", A\\c \"([^\"]*)\" \"([^\"]*)\",INC\"([^\"]*)\" \"([^\"]*)\",LOAuth\"([^\"]*)\" \"([^\"]*)\"$")
public void the_user_is_on_the_upload_the_page_with_Proofs_of_Address_A_c_INC_LOAuth(String add, String addpath, String ac, String acpath, String inc, String incpath, String lauth, String lauthpath) throws Throwable {
    if(add!="" && ac!="" && inc!="" && lauth!="" ) {
    	upload_doc=4;
    }
    else if(add!="" && ac!="" && inc!="" && lauth!="") {
    	upload_doc=5;
    }
    else if(add!="" && ac!="" && inc!="" && lauth!="") {
    	upload_doc=6;
    }
    
}

@When("^the user uploads document the message should be shown$")
public void the_user_uploads_document_the_message_should_be_shown()  throws Throwable {
   
try {
	for(int i=0;i<upload_doc;i++)   {

    	type("file"+i+"_upload","fileName");
    	Thread.sleep(2000);
    	if(Upload_Msg=="ToastMessage") {
    		
    	}else {
    		System.out.println("file Not Uploaded");
    	}
    	
    }
}catch(Exception e) {
	System.out.println("File UPloading Failed"+e);
}
   
}

@When("^Views the files$")
public void views_the_files() throws Throwable {
 //List <WebElement> View = findelements("btn_view");
	//for(int i=0;i<list.count();i++){
	//view.
	//}
    
}

@Then("^Clicks on Continue\\.$")
public void clicks_on_Continue() throws Throwable {
	clickOn("btn_continue","");
   
}

}
