function verificoLoginPaciente(pUsu,pPass){
    var esta=false, tmpPersona;
    var pos=0;
    while(pos<=pacientes.length-1 && !esta){
        tmpPersona = pacientes[pos];
        if(tmpPersona['documento'] == pUsu && tmpPersona['clave'] == pPass && $("#radPaciente").prop('checked')){
            esta = true;
        }
        pos++
    }
    return esta;
}

function verificoLoginMedico(pUsu,pPass){
    var esta=false, tmpPersona;
    var pos=0;
    while(pos<=medicos.length-1 && !esta){
        tmpPersona = medicos[pos];
        if(tmpPersona['numero'] == pUsu && tmpPersona['clave'] == pPass && $("#radMedico").prop('checked')){
            esta = true;
        }
        pos++
    }
    return esta;
}