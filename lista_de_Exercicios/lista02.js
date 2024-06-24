/* Exerc. 01 - 1. Faça um algoritmo que leia o espaço percorrido por um automóvel (em metros), o
tempo gasto para percorrê-lo (em segundos), e escreva a velocidade utilizada
(V=S/T). */

function disci(){

    var s = parseInt(prompt(""))
    var t = parseInt(prompt(""))
    
    var v = s/t
    alert(v+ "m/s")
}

/* Exerc. 02 -Calcule o peso ideal de uma pessoa, baseado em sua altura (h). Sabendo:
a. Para homens: peso ideal = (72.7 * h) - 58
b. Para mulheres: peso ideal = (62.1 * h) – 44.7 */


function calculoIMC(){
    var altura = parseFloat(prompt("Informe sua altura: \r utilize o ponto ( . ) para separar Centimetros de metros. \r EX: 1.64 (1 metro e 64 centimetros)"))

    var genero = parseInt(prompt("Escolha Opção a seguir: \r Homem = 1 \r Mulher = 2"))

    if (genero == 1 ){
       var homem =  ( 72.7 *altura) - 58
       alert("Seu peso ideal é " + homem + "Kg")
    }
    else if (genero == 2 ){
       var mulher = (62.1*altura) - 44.7
       alert("Seu peso ideal é " + mulher +"Kg")
    }
    else {
        alert( "O número escolhido não correspode as opções.")
    }
}


/* Exerc. 03 - Faça um algoritmo que leia o nome e a idade de uma nadador e escreva a categoria
a qual pertence de acordo com a tabela abaixo: */






