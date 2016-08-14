<?php 
// check if fields passed are empty 
 
 if(empty($_POST['name'])   ||    
    empty($_POST['email'])  ||
    empty($_POST['subject'])  ||
    empty($_POST['message'])||   
    !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))    
  {     
       echo "No arguments Provided!";   return false;    
  } 
     
  $name = $_POST['name']; 
  $email_address = $_POST['email'];
  $email_address = $_POST['subject'];  
  $message = $_POST['message'];      
 
 $to = 'imjamiecrosby@gmail.com'; 

 $email_subject = "Contact form submitted by:  $name"; $email_body = "You have received a new message. \n\n".                 
    " Here are the details:\n \nName: $name \n ".                  
    "Email: $email_address\n Subject \n $subject" Message \n $message"; 

 $headers = "From: contact@imjamiecrosby.com\n"; 
 $headers .= "Reply-To: $email_address";     
 
 mail($to,$email_subject,$email_body,$headers); return true;             
?>
