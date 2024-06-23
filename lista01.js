/* Exerc. 01 - Faça um algoritmo que solicite do usuário três valores e calcule a média das notas de um
aluno; */


function fu(){
    var valor = parseInt(prompt("Informe a primeira nota: "))
    var valor2 = parseInt(prompt("Informe a segunda nota: "))
    var valor3 = parseInt(prompt("Informe a terceira nota: "))

    var media = (valor + valor2 + valor3)/3 
    alert(`A media do aluno é: ${media}`)

}



/* Exerc. 02 - Faça um algoritmo que solicite do usuário três valores e calcule a média das notas de um
aluno:
Imprima as três notas (Ex. A primeira nota foi 8, a segunda foi ....)
Imprima a média (Ex. A média do aluno é 7) */
function fun( ){

    var nota = parseInt(prompt("Informe a primeira nota: "))
    var nota2 = parseInt(prompt("Informe a segunda nota: "))
    var nota3 = parseInt(prompt("Informe a terceira nota: "))

    var calculo = (nota + nota2 + nota3)/ 3

    alert(`A primeira nota foi: ${nota} \r A segunda nota foi: ${nota2} \r A terceira nota foi: ${nota3}`)
    alert("A média do aluno é: " + calculo)

}

/* Exerc. 03 - Faça um algoritmo para que solicite o nome do usuário, a nota dele em duas avaliações e
imprima o nome dele junto com a média de suas notas; */


function func( ){
    var nome = prompt("Qual o seu nome? ")
    var val = parseInt(prompt("Informe sua primeira nota de avaliação: "))
    var val1 = parseInt(prompt("Informe sua segunda nota de avaliação: "))

    alert(`Nome: ${nome} \r Média: `+ (val + val1) / 2 )
}




/* Exerc. 04 - Uma empresa vai dar um aumento de salário ao seu funcionário. Faça um programa para ler o
salário do funcionário e o percentual de reajuste. Calcular e escrever o valor do novo salário. */

function funca(){
    var cargo = toFix(prompt("Informe o seu cargo de acordo com a legenda abaixo: \r Estagiário = 1 \r Dev. Jr. = 2 \r Dev. Pl. = 3 \r Dev. Sr. = 4 "))

    var porcen = 0.15 /* Reajsute de 15% */

    if ( cargo == 1 ){
        alert(`Salário Inicial: 1.533 \r Reajuste de ${porcen} \r Novo salário: ` + (1.533*0.15 + 1.533 ))
    }
    else if ( cargo == 2 ){
        alert(`Salário Inicial: 3.725 \r Reajuste de 0.15 \r Novo salário: ` + (3.725*0.15 + 3.725 ))
    }
    else if ( cargo == 3 ){
        alert(`Salário Inicial: 6.500 \r Reajuste de 0.15 \r Novo salário: ` + (6.500*0.15 + 6.500 ))
    }
    else if ( cargo == 4 ){
        alert(`Salário Inicial: 7.000 \r Reajuste de 0.15 \r Novo salário: ` + (7.000*0.15 + 7.000 ))
    }
    else{
        alert("Número escolhido não corresponde a nenhum cargo")
    }

}


/* Exerc. 05 - Dada as seguintes entradas: quilometragem inicial, quilometragem final, litros consumidos,
preço do litro de combustível. Faça um programa que imprima o seguinte Relatório: distância
percorrida, Valor total gasto e o consumo do carro (quantos quilômetros percorre com 1 litro
de combustível). */

function funcao(){

} 
  /* Valor do litro */
 




/* Exerc. 06 - Faça um programa que leia o nome do usuário, a idade do usuário, o nome da mãe do usuário,
a idade da mãe do usuário, o nome do pai do usuário e a idade do pai do usuário. O programa
devera imprimir na tela quantos anos a mãe e o pai do usuário tinha quando ele nasceu. A
resposta deve ter o formato deste exemplo:
“Carlos, quando você nasceu, Dona Cecilia tinha 27 anos e Seu Paulo tinha 32 anos”. */

function ao(){

    var nome = prompt("Qual o seu nome? ")
    var idade = parseInt(prompt("Qual a sua idade? "))
    var nomeMae = prompt("Qual o nome da sua mãe? ")
    var idadeMae = parseInt(prompt("Qual a idade da sua mãe? "))
    var nomePai = prompt("Qual o nome do seu pai? ")
    var idadePai = parseInt(prompt("Qual a idade do seu pai? "))

    alert(nome + ", quando você nasceu, Dona " + nomeMae + " tinha " + ( idadeMae - idade) + " anos e o Seu " + nomePai + " tinha " + ( idadePai - idade) + " anos.")


}

/* Exerc. 07 - Faça um programa que leia as três notas do aluno e calcula a sua média e a sua situação
(aprovado por média, prova final ou reprovado direto). A média é calculada da seguinte
forma: descarta a menor nota e a média é calculada usando as duas maiores notas. A situação
do aluno depende da sua média e é apresentada na tabela abaixo: */

function cao() {
    
}

