$(document).ready(inicializo);
var seguir=false;
var pacientes =[];
var medicos =[];

function inicializo (){
    $("#txtUsuario").blur(validoUsuario);
    $("#txtClave").blur(validoClave);
    $("#radMedico").click(checkBoxMedico);
    $("#radPaciente").click(checkBoxPaciente1);
    $("#btIngresar").click(ingresarLogin);
    $("#btCambiarClave").click(cambiarClave);
 
    
}

function validoUsuario(){
    var validoUsuario = $(this).val();
    $("#err_" + $(this).attr("id")).html("");
    seguir = true;
    if(isNaN(validoUsuario)){
        $("#err_" + $(this).attr("id")).html("Error, el usuario debe ser numerico.");
        seguir = false;
    }
}
function validoClave(){
    var valorclave = $(this).val();
    $("#err_" + $(this).attr("id")).html("");
      seguir = true;
    if(valorclave.length==0){
    $("#err_" + $(this).attr("id")).html("Error, la clave esta vacia.");
        seguir = false;
    }
}

function checkBoxMedico (){/*Medico*/
         
 if( $("#radMedico").prop('checked',true)) {  
      $("#radPaciente").prop('checked',false);
      
      }
     }
function checkBoxPaciente1 (){/*Paciente*/	
           
 if( $("#radPaciente").prop('checked',true)) {  
      
      $("#radMedico").prop('checked',false);
 
      }
 }
 
var usuariog =$("#txtUsuario").val();//Defino estas dos variables in "var" para que sean globales.
var claveg =$("#txtClave").val();

function ingresarLogin (){

    
var usuario =$("#txtUsuario").val();//Defino estas dos variables in "var" para que sean globales.
var clave =$("#txtClave").val();


    if (verificoLoginPaciente(usuario,clave)){
        
         $("#radPaciente").prop('checked',true);
        
        alert("Bienvenido!!!");  
        $("#inicioborrar").hide();
        $("#tbLogin").hide();
        $("#tbGeneralmedico").show();
        $("#menupaciente").show();  
        $("#menulistarmedico").show(); 
        $("#menulistarimagenes").show(); 
        $("#menumedico").hide(); 
        $("#menulistarpacientes").hide(); 
        $("#menulistarhistorial").hide(); 

        usuariog=usuario;
        claveg=clave;
        
       
        
    }
     
    else if (verificoLoginMedico(usuario,clave)){
        alert("Bienvenido!!!");  
        $("#inicioborrar").hide();
        $("#tbLogin").hide();
        $("#tbGeneralmedico").show(); 
        $("#menupaciente").hide(); 
        $("#menumedico").show(); 
        $("#menulistarmedico").hide(); 
        $("#menulistarimagenes").hide(); 
        $("#menulistarpacientes").show(); 
        $("#menulistarhistorial").show(); 
    
        
        
        usuariog=usuario;
        claveg=clave;
        
        
    }
    else{
         alert("Verifique usuario o contraseña"); 
          
    }
    $("#txtUsuario").val("");
    $("#txtClave").val("");
}



function cambiarClave (){//Cambiar calve usuario
    
    var claveActual= $("#txtClaveActual").val();
    var claveNueva = $("#txtClaveNueva").val();
    var repetirClave=$("#txtClaveNuevaRep").val();
    var cambiar=false;
    var nueva=false;
    if (claveActual!== claveg){
       $("#err_txtClaveActual").html("La clave original no coincide..");
    }
    else {
        $("#err_txtClaveActual").html("");
        cambiar=true;
    }
    
    
    if(claveNueva!==repetirClave || claveNueva==claveActual || claveNueva=="" ){
        
        
        $("#err_txtClaveNuevaRep").html("La claves no coinciden y no pueden estar vacios....")
        $("#err_txtMalClave").html("Recuerde la clave nueva no puede ser la actual..");
        
    }
    else {
        
        $("#err_txtClaveNuevaRep").html("");
        $("#err_txtMalClave").html("");
        
        nueva=true;
    }
  

    
    if(cambiar && nueva && $("#radPaciente").prop('checked')){
        
       var pos=0,esta=false;
        while(pos<=pacientes.length-1 && !esta){
        var tmpPersonapaciente = pacientes[pos];
        if(tmpPersonapaciente['clave'] == claveg && tmpPersonapaciente['documento'] == usuariog){
            esta=true;
            tmpPersonapaciente['clave']=claveNueva;
            
        }
        pos++;
    }
        $("#txtClaveNuevaRep").val("");
        $("#txtClaveActual").val("");
        $("#txtClaveNueva").val("");
        alert("Cambiaste la clave exitosamente.");
          $("#tbCambioclave").hide();
         
    }

    else if (cambiar && nueva && $("#radMedico").prop('checked')){
        var pos=0,esta=false;
        while(pos<=medicos.length-1 && !esta){
        var tmpPersonamedico = medicos[pos];
        if(tmpPersonamedico['clave'] == claveg && tmpPersonamedico['numero'] == usuariog){
            esta=true;
            tmpPersonamedico['clave']=claveNueva;
            
        }
        pos++;
    }
        $("#txtClaveNuevaRep").val("");
        $("#txtClaveActual").val("");
        $("#txtClaveNueva").val("");
        alert("Cambiaste la clave exitosamente.")
   $("#tbCambioclave").hide();
     
    }
    
    
    else{
        alert("Verifique que todos los campos esten completos");
        
    }
    }
