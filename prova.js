function verificaMaior() {
    var idade= parseInt(document.getElementById ('nota1').value);
    if (idade > 18){
        alert("voce tem mais de 18 anos, então voce é maior de idade");
    }
    else if (idade< 18){ 
        alert ("voce tem menos de 18 anos, então voce é menor de idade!");
    }
    else{
        alert("voce tem 18 anos, entao voce é maior de idade!")
    }
}