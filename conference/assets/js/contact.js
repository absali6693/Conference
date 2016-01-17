function validateForm()
{
	 var ss=0;
         if( document.contactForm.name.value == "" )
         {
            document.getElementById("name").style.borderColor = "red";
            $("[data-toggle='tooltip']").tooltip('show');
            document.contactForm.name.focus() ;
            //return false;
  	    ss=1;        
         }
	else
	{
		document.getElementById("name").style.borderColor = "";
            	$("[data-toggle='tooltip']").tooltip('hide');
	}
	if( document.contactForm.email.value == "" )
         {
            	document.getElementById("email").style.borderColor = "red";
            	$("[data-toggle='tooltip']").tooltip('show');
 		if(ss==0)
   		{
			document.contactForm.email.focus() ;
			ss=2;
		}
           	//return false;
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
			if(ss==0)
			{ 
            			document.contactForm.email.focus() ;
				ss=2;		
			}
            
         	}
		else
		{
	 		if( lc-dotpos-1 < 2)
	 		{
            			document.getElementById("email").style.borderColor = "red";
				$("[data-toggle='tooltip']").tooltip('hide');
            			document.getElementById("email").title="Enter correct email address.";
				$("[data-toggle='tooltip']").tooltip('show');
				if(ss==0)
				{ 
           				 document.contactForm.email.focus() ;
					ss=2;
				}
            			//return false;
         		}
			else
			{

				document.getElementById("email").style.borderColor = "";
            			$("[data-toggle='tooltip']").tooltip('hide');
			}

		}
	}
	if( document.contactForm.message.value == "" )
         {

       		document.getElementById("message").style.borderColor = "red";
            
       		$("[data-toggle='tooltip']").tooltip('show');  
		if(ss==0) 
		{  

     		  document.contactForm.message.focus() ;
		ss=3;
		}
            //return false;
         }
	else
	{
		document.getElementById("message").style.borderColor = "";
            	$("[data-toggle='tooltip']").tooltip('hide');
	}

if(ss==1 || ss==2 || ss==3)
{
return false;
}
return true;
}