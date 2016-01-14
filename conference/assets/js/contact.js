function validateForm()
{

         if( document.contactForm.name.value == "" )
         {
	    //document.getElementById('nameLabel').innerHTML='Enter name!';
            alert( "Please provide your name!" );
            document.contactForm.name.focus() ;
            return false;
         }
	if( document.contactForm.email.value == "" )
         {
            //document.getElementsByName('email')[0].placeholder='Please provide your email!';
           alert( "Please provide your email!" );
		//document.getElementById("email").placeholder = "Type name here..";
            //email.style.borderColor = "#FF0000";
	    //email.setAttribute('placeholder',"Please provide your email!!");
	    //document.getElementById("email").className += " formInvalid";
	    //document.getElementById("email").placeholder = "Type name here..";
 	   document.contactForm.email.focus() ;
           return false;
         }
	if( document.contactForm.message.value == "" )
         {
            alert( "Please provide your message!" );
            document.contactForm.message.focus() ;
            return false;
         }

	var emailID = document.contactForm.email.value;
         atpos = emailID.indexOf("@");
         dotpos = emailID.lastIndexOf(".");
         lc=emailID.length;

         if (atpos < 1 || ( dotpos - atpos < 2 )) 
         {
            alert("Please enter correct email ID")
            document.contactForm.email.focus() ;
            return false;
         }
	 if( lc-dotpos-1 < 2)
	 {
            alert("Please enter correct email ID")
            document.contactForm.email.focus() ;
            return false;
         }

         return true;

}