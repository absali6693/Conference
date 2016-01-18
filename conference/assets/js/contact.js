function resetForm()
{
//alert("reset");
document.getElementById("name").style.borderColor = "";
            	$("[data-toggle='tooltip']").tooltip('hide');
document.getElementById("email").style.borderColor = "";
            	$("[data-toggle='tooltip']").tooltip('hide');
document.getElementById("message").style.borderColor = "";
            	$("[data-toggle='tooltip']").tooltip('hide');
document.getElementById("subject").style.borderColor = "";
            	$("[data-toggle='tooltip']").tooltip('hide');
return true;
}
function validateForm()
{
	 var nm=0;
var em=0;
var sb=0;
var msg=0;
 	 
         if( document.contactForm.name.value == "" )
         {
            document.getElementById("name").style.borderColor = "red";
            $("[data-toggle='tooltip']").tooltip('show');
	   
            	document.contactForm.name.focus() ;
		
            
  	    nm=1;        
         }
	else
	{
		document.getElementById("name").style.borderColor = "green";
            	$("[data-toggle='tooltip']").tooltip('hide');
	
	}

	if( document.contactForm.email.value == "" )
         {
            	document.getElementById("email").style.borderColor = "red";
            	$("[data-toggle='tooltip']").tooltip('show');
 		if(nm==0)
			{
			document.contactForm.email.focus() ;
			}
			em=1;
		
           	
         }
	else
	{


		var emailID = document.contactForm.email.value;
         	atpos = emailID.indexOf("@");
         	dotpos = emailID.lastIndexOf(".");
         	lc=emailID.length;

         	if (atpos < 1 || ( dotpos - atpos < 2 )) 
         	{
       			document.getElementById("email").style.borderColor = "red";
			$("[data-toggle='tooltip']").tooltip('hide');
			document.getElementById("email").title="Enter correct email address.";
            		$("[data-toggle='tooltip']").tooltip('show');
			if(nm==0 )
			{ 
            			document.contactForm.email.focus() ;
						
			}
			em=1;
            
         	}
		else
		{
	 		if( lc-dotpos-1 < 2)
	 		{
            			document.getElementById("email").style.borderColor = "red";
				$("[data-toggle='tooltip']").tooltip('hide');
            			document.getElementById("email").title="Enter correct email address.";
				$("[data-toggle='tooltip']").tooltip('show');
				if(nm==0)
				{ 
           				 document.contactForm.email.focus() ;
					
				}
				em=1;
            			
         		}
			else
			{

				document.getElementById("email").style.borderColor = "green";
            			$("[data-toggle='tooltip']").tooltip('hide');
			}

		}
	}

	 if(document.getElementById("subject").value=="null")
   	 {
	 document.getElementById("subject").style.borderColor = "red";
   	 $("[data-toggle='tooltip']").tooltip('show');
	 if(nm==0 && em==0) 
 	 {  
	 document.contactForm.subject.focus();
	 }
   	 sb=1;
   	 }
	 else
	 {
 	 document.getElementById("subject").style.borderColor = "green";
	 $("[data-toggle='tooltip']").tooltip('hide');
	 }

	if( document.contactForm.message.value == "" )
         {

       		document.getElementById("message").style.borderColor = "red";                
       		$("[data-toggle='tooltip']").tooltip('show');  
		if(nm==0 && em==0 && sb==0) 
		{  

     		  document.contactForm.message.focus() ;
		}
		msg=1;
           
         }
	else
	{
		document.getElementById("message").style.borderColor = "green";
            	$("[data-toggle='tooltip']").tooltip('hide');
	}



if(nm==1 || em==1 || sb==1 || msg==1 )
{
return false;
}
return true;
}