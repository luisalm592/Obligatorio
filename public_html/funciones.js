

function verificoLoginPaciente(pUsu,pPass){
    var esta1=false, tmpPersonapaciente;
    var pos1=0;
    while(pos1<=pacientes.length-1 && !esta1){
        tmpPersonapaciente = pacientes[pos1];
        if(tmpPersonapaciente['documento'] == pUsu && tmpPersonapaciente['clave'] == pPass && $("#radPaciente").prop('checked')){
            esta1 = true;
        }
        pos1++;
    }
    return esta1;
}

function verificoLoginMedico(pUsu,pPass){
    var esta=false, tmpPersonamedico;
    var pos=0;
    while(pos<=medicos.length-1 && !esta){
        tmpPersonamedico = medicos[pos];
        if(tmpPersonamedico['numero'] == pUsu && tmpPersonamedico['clave'] == pPass && $("#radMedico").prop('checked')){
            esta = true;
        }
        pos++;
    }
    return esta;
}