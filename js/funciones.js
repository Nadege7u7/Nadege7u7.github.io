function advertir(){
    alert("¡No te vayas!")
}

function saludopersonalizado(){
    var name;
    var edad;
    name-prompt ("Escribe tu nombre:")
    name-prompt ("Escribe tu edad")

    alert("¡Hola! "+name+", yo tambien tengo "+edad+" años")

}

function adivinar1(){
    var res=0;
    res=prompt("¿Cuanto es 12 x 12?")

    //Sí la respuesta es 144 (correcto)
    if(res==144){
        alert("FELICIDADES, ¡RESPUESTA CORRECTA!")
    }
    //Sino
    else{
        alert("¡ERROR!")
    }
}
function adivinar2(){
    var res;
    res=prompt("En alto vivo, en alto mora, en alto teje, la tejedora. ¿Qién es?")

    //Sí la respuesta es la araña (correcto)
    if(res==144){
        alert("FELICIDADES, ¡RESPUESTA CORRECTA!")
    }
    //Sino
    else{
        alert("¡ERROR!")
    }
}
function adivinar3(){
    var res;
    res=prompt("Lana sube, lana baja. ¿Qué es?")

    //Sí la respuesta es La navaja (correcto)
    if(res=="La navaja"){
        alert("FELICIDADES, ¡RESPUESTA CORRECTA!")
    }
    //Sino
    else{
        alert("¡ERROR!")
    }
}