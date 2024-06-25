/* Exerc. 01 - 1. Faça um algoritmo que leia o espaço percorrido por um automóvel (em metros), o
tempo gasto para percorrê-lo (em segundos), e escreva a velocidade utilizada
(V=S/T). */

function disci(){

    var s = parseInt(prompt("Metros: "))
    var t = parseInt(prompt("Tempo: "))
    
    var v = s/t
    alert(v + "m/s")
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

function nadador(){
    var name = prompt("Qual o seu nome, nadador?")
    var age = parseInt(prompt("Qual a sua idade?"))


    if (age >= 5 && age <= 7){
        alert(`Nadador: ${name} \r Idade: ${age} \r Categoria: Infantil A`)
    }
    else if (age >= 8 && age <= 10){
        alert(`Nadador: ${name} \r Idade: ${age} \r Categoria: Infantil B`)
    }
    else if (age >= 11 && age <= 13){
        alert(`Nadador: ${name} \r Idade: ${age} \r Categoria: Juvenil A`)
    }  
    else if (age >= 14 && age <= 17){
        alert(`Nadador: ${name} \r Idade: ${age} \r Categoria: Juvenil B`)
    }
    else if (age >= 18){
        alert(`Nadador: ${name} \r Idade: ${age} \r Categoria: Sênior`)
    }   
    else {
        alert("Infelizmente você ainda não se encaixa em uma de nossas caterogias.")
    }
}



/* Exerc. 04 -Faça um algoritmo que calcule a soma dos 10 primeiros números inteiros e escreva
o valor da soma. */



/* Exerc. 05 - Faça um algoritmo que leia um conjunto de números até que seja digitado o valor
999. No final escreva a soma e a média dos números lidos. */



/* Exerc. 06 - Faça um algoritmo que leia um conjunto A de 8 números inteiros e gere em um
conjunto B com o mesmo tamanho, com todos os elementos do conjunto A
multiplicados por 4. Apresente o conjunto B. */



/* Exerc. 07 - Faça um algoritmo que leia dois conjuntos com 20 números reais cada (A e B) e
monte um conjunto C, onde cada elemento de C é a subtração do elemento
correspondente de A com B. */



/* Exerc. 08 - Escreva um algoritmo para ler o nome e a idade de uma pessoa, e exibir quantos
dias de vida ela possui. Considere sempre anos completos, e que um ano possui 365
dias. */


/* Exerc. 09 - Um motorista deseja colocar no seu tanque X litros de gasolina. Escreva um
algoritmo para ler o preço do litro da gasolina e o valor do pagamento, e exibir
quantos litros ele conseguiu colocar no tanque. */

function gaso(){
    var tanque = parseInt(prompt("Informe quantos litros de gasolina deseja: "))
    var money = 7.48
    alert( `Valor por Litro: ${money} \r Quantidade de litros desejada: ${tanque} \r Total a pagar: ` + (tanque * money))
}


/* Exerc. 10 - Crie um programa que o usuário digite dois números inteiros e positivos. Em
seguida calcule Z, onde Z é:
Z = X² + Y² */

function calculo() {
    var inteiro = parseInt(prompt("Informe o primeiro número "))
    var inteiro2 = parseInt(prompt("Informe o segundo número "))

    var z = (inteiro**2) + (inteiro2**2)

    alert(`Z = X² + Y² \r Z = ${inteiro}² + ${inteiro2}² \r Z = ${z}`)

}


/* Exerc. 11 - Escreva um programa que leia 3 números inteiros distintos e os imprima em ordem
crescente. */


/* Exerc. 12 - Escreva um programa que lê 10 números e em seguida imprime quantos deles são iguais.  */


/* Exerc. 13 Escreva uma função que solicita o usuário digitar um número de 1 à 7. Em seguida
a função imprime uma mensagem com o dia da semana de acordo o número
digitado: (use Switch case). */

function dias(){ 
    var dias = parseInt(prompt("Informe um número de 1 à 7: "))

    switch (dias){
        case 1:
            alert("Segunda-Feira")
            break
    
        case 2:
            alert("Terça-Feira")
            break
    
        case 3:
            alert("Quarta-Feira")
            break
    
        case 4:
            alert("Quinta-Feira")
            break
    
        case 5:
            alert("Sexta-Feira")
            break
     
        case 6:
            alert("Sábado")
            break
        case 7:
            alert("Domingo")
            break
        default:
            alert( "O número escolhido não corresponde aos dias da semana.")
    }

}

/* Exerc. 14 - Como ficaria o algoritmo para calcular a media dos 50 alunos usando
repetição fixa? */


/* Exerc. 15 - Escreva um algoritmo que lê 50 números inteiros e em seguida mostra a
soma de todos os ímpares lidos. */

/* Exerc. 16 - Altere o algoritmo anterior para que ele considere apenas a soma dos
ímpares que estejam entre 100 e 200. */


/* Exerc. 17 - Construa um algoritmo que leia um conjunto de 20 numeros inteiros e
mostre qual foi o maior e o menor valor fornecido. */


/* Exerc. 18 - Como seria um programa para calcular a média de 50 alunos de uma
turma? */


/* Exerc. 19 -  Escreva um programa que calcula o produto de dois números lidos sem
usar o operador de multiplicação (‘*’). */



/* Exerc. 20 - Construa um algoritmo que fica lendo indefinidamente números positivos.
Caso o numero lido seja igual a 0 o algoritmo para de ler números e
imprime a média dos números pares lidos anteriormente. */



/* Exerc. 21 - Como ficaria o algoritmo para calcular a média dos 50 alunos com teste no
final usando o comando do-while? 
Na questão é obrigatório o uso do Do .. While*/