$(document).ready(inicializo);
seguir=false;
function inicializo (){
   
}

function ftLogin(){
    $("#tbLogin").show();   
    $("#inicioborrar").show();
    $("#tbCambioclave").hide(); 
    $("#tbCambioMedico").hide(); 
    $("#tbGeneralpaciente").hide(); 
    $("#tbGeneralmedico").hide(); 
    
    
}
function ftCambioclave(){
    $("#tbCambioclave").show();
    
    $("#tbLogin").hide();  
    $("#tbCambioMedico").hide();
}

function ftCambiarmedico(){
  $("#tbCambioMedico").show();
  $("#tbLogin").hide(); 
  $("#tbCambioclave").hide(); 
  
   }
 


       
        
        
     