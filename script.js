const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

// Boton para encriptar el texto capturado
function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

// Boton para desencriptar el texto encriptado
function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";    
}

// Boton para copiar texto encriptado
function btnCopiar(){
    const textoCopiado = mensaje.value;
    textArea.value = textoCopiado;    
}

// Funcion para validar si un caracter capturado es mayuscula o minuscula
function validaCaracter() {
    let miPalabra = textArea.value;
    var letraActual = miPalabra.charAt(miPalabra.length-1);
    if(esMayuscula(letraActual)&&letraActual!=" ")
    {
            alert("La letra " + letraActual + " es mayúscula");
    }
    
}

// Revisa si el parametro letra es mayuscula o minuscula
function esMayuscula(letra)
{
    return letra === letra.toUpperCase();
}


// Funcion para encriptar
function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0;i<matrizCodigo.length;i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
}

// Funcion para desencriptar
function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i=0;i<matrizCodigo.length;i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }

    return stringDesencriptada;
}