$(document).ready(inicializo);
seguir=false;
function inicializo (){
   
}

function ftLogin(){
    $("#tbLogin").show();   
    $("#inicioborrar").show();
    $("#tbCambioclave").hide(); 
    $("#tbCambioMedico").hide(); 
    $("#tbGeneralmedico").hide(); 
    $("#tbhistorialmedico").hide(); 
    $("#tbconsultahistorial").hide(); 
       $("#tbhistorial").hide(); 
     $("#tbagendamedico").hide(); 
    
    
}
function ftCambioclave(){
    
    $("#tbLogin").hide();  
    $("#tbCambioMedico").hide();
    $("#tbconsultahistorial").hide(); 
    $("#tbCambioclave").show();
      $("#tbhistorial").hide(); 
      $("#tbagendamedico").hide(); 
}

function ftCambiarmedico(){
  $("#tbCambioMedico").show();
  $("#tbLogin").hide(); 
  $("#tbCambioclave").hide(); 
  $("#tbconsultahistorial").hide(); 
    $("#tbhistorial").hide(); 
    $("#tbagendamedico").hide(); 
    
    
   }
 
 function fthistorialmedico(){
     
     
  $("#menumedico").show(); 
  $("#tbhistorial").show(); 
$("#tbagendamedico").hide(); 
  $("#tbCambioMedico").hide();
  $("#tbLogin").hide(); 
  $("#tbCambioclave").hide(); 
  $("#tbconsultahistorial").hide(); 
  
   }
 
 function ftconsultahistorial(){
  $("#tbCambioMedico").hide();
  $("#tbLogin").hide(); 
  $("#tbCambioclave").hide(); 
  $("#tbconsultahistorial").hide();  
  $("#tbCambioMedico").hide();
  $("#tbconsultahistorial").show(); 
   $("#tbCambioMedico").show();
    $("#tbhistorial").hide(); 
    $("#tbagendamedico").hide(); 
     $("#tbCambioMedico").hide();
  
 }

function ftagendamedico(){
  $("#tbCambioMedico").hide();
  $("#tbLogin").hide(); 
  $("#tbCambioclave").hide(); 
  $("#tbconsultahistorial").hide();  
  $("#tbCambioMedico").hide();
  $("#tbconsultahistorial").hide(); 
   $("#tbCambioMedico").show();
    $("#tbhistorial").hide(); 
    $("#tbagendamedico").show(); 
   
  
 }

       
        
        
     