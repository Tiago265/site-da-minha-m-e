function executar1008(){
    let id, horas, valorHora, salario
    //   let id
    //   let horas
    //   let valoHora
    //   let salario
    id = Number(prompt("digite seu id:"))
    // id = Number (prompt('45'))
    // id = 45
    horas = Number(prompt("quantas horas você trabalhou?"))
    valorHora = Number (prompt("quanto você ganha por hora?"))

    salario = horas * valorHora

    alert("ID:" + id + "\nsalário: R$" + salario.toFixed(2))
}
    
function executar1009(){
    let nome,salariofixo,total, comissao;
    nome = prompt("qual seu nome?");
    salariofixo = Number(prompt("qual o seu salario fixo?"));
    comissao = salariofixo * 15/100
    total = salariofixo + comissao;
    alert("você recebera no final do mês: "+ total.toFixed(2) );
}

function executar1038(){
 let cod,qtd,preco,calConta,valor
 cod = Number(prompt("digite o código"))
 qtd = Number(prompt("digite o valor da unidade:"))
 
 if(cod == 1){
    preco = 4
 }else if(cod == 2){
    preco = 4.50
 }else if(cod == 3){
    preco = 5
 }else if(cod == 4){
    preco = 2
 }else if(cod == 5){
    preco = 1.50
 }
 calConta = preco * qtd
 alert("deu exatamente R$"+calConta,"obrigado por comprar com a gente!!")
}