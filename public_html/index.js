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
	   /*$("#radPaciente").click(checkBox);*/	
           
 if( $("#radMedico").prop('checked',true)) {  
      $("#radPaciente").prop('checked',false);
      
      }
     }
function checkBoxPaciente1 (){/*Paciente*/	
           
 if( $("#radPaciente").prop('checked',true)) {  
      
      $("#radMedico").prop('checked',false);
 
      }
 }
 

function ingresarLogin (){
    usuario =$("#txtUsuario").val();//Defino estas dos variables in "var" para que sean globales.
    clave =$("#txtClave").val();
    
    if (verificoLoginPaciente(usuario,clave)){
        alert("Bienvenido!!!");  
        $("#inicioborrar").hide();
        $("#tbLogin").hide();
        $("#tbGeneralmedico").hide();
        $("#tbGeneralpaciente").show();   
       
   
    
    }
    
    else if (verificoLoginMedico(usuario,clave)){
        alert("Bienvenido!!!");  
        $("#inicioborrar").hide();
        $("#tbLogin").hide();
        $("#tbGeneralpaciente").hide();
        $("#tbGeneralmedico").show();  
        
        
    }
    else{
         alert("Verifique los datos ingresados");  
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
    if (claveActual!== clave){
       $("#err_txtClaveActual").html("La clave actual no coincide.")
    }
    else {
        $("#err_txtClaveActual").html("");
        cambiar=true;
    }
    if(claveNueva!==repetirClave){
        $("#err_txtClaveNuevaRep").html("La claves no coinciden")
        
    }
    else {
        $("#err_txtClaveNuevaRep").html("");
        nueva=true;
    }
    if(cambiar && nueva && $("#radPaciente").prop('checked')){
       var pos=0,esta=false;
        while(pos<=pacientes.length-1 && !esta){
        var tmpPersona = pacientes[pos];
        if(tmpPersona['clave'] == clave && tmpPersona['numero'] == usuario){
            esta=true;
            tmpPersona['clave']=claveNueva;
            
        }
        pos++
    }
        $("#txtClaveNuevaRep").val("");
        $("#txtClaveActual").val("");
        $("#txtClaveNueva").val("");
        alert("Cambiaste la clave exitosamente.")
        
    }
    else if (cambiar && nueva && $("#radMedico").prop('checked')){
        var pos=0,esta=false;
        while(pos<=medicos.length-1 && !esta){
        var tmpPersona = medicos[pos];
        if(tmpPersona['clave'] == clave && tmpPersona['numero'] == usuario){
            esta=true;
            tmpPersona['clave']=claveNueva;
            
        }
        pos++
    }
        $("#txtClaveNuevaRep").val("");
        $("#txtClaveActual").val("");
        $("#txtClaveNueva").val("");
        alert("Cambiaste la clave exitosamente.")
        
    }
    else{
        alert("Verifique los datos ingresados")
        
    }
    
}
 