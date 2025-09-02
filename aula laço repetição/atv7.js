
  const opcao = prompt(
    "Escolha uma opção:\n" +
    "a) SOMA\n" +
    "b) SUBTRAÇÃO\n" +
    "c) MULTIPLICAÇÃO\n" +
    "d) DIVISÃO\n" +
    "e) SAIR"
  );

let banana

  switch (opcao) {
    case 'a':
      banana = "realizarSoma";
      break;
    case 'b':
      banana = "realizarSubtracao";
      break;
    case 'c':
      banana = "realizarMultiplicacao";
      break;
    case 'd':
      banana = "realizarDivisao";
      break;

    default:
      alert("Opção inválida! Tente novamente.");
      
  }


if (banana == "realizarSoma") {
  let num1 = Number(prompt("Digite o primeiro número:"));
  let num2 = Number(prompt("Digite o segundo número:"));
  let resultado = num1 + num2;
  alert("Resultado da soma: " + resultado);
}

if (banana == "realizarSubtracao")  {
  let num1 = Number(prompt("Digite o primeiro número:"));
  let num2 = Number(prompt("Digite o segundo número:"));
  let resultado = num1 - num2;
  alert("Resultado da subtração: " + resultado);
}

if (banana == "realizarMultiplicacao") {
  let num1 = Number(prompt("Digite o primeiro número:"))
  let num2 = Number(prompt("Digite o segundo número:"))
  let resultado = num1 * num2
  alert("Resultado da multiplicação: " + resultado);
}

if (banana == "realizarDivisao") {
  let num1 = Number(prompt("Digite o primeiro número:"));
  let num2 = Number(prompt("Digite o segundo número:"));
  if (num2 = 0) {
    alert("Não é possível dividir por zero.");
  } else {
    let resultado = num1 / num2;
    alert("Resultado da divisão: " + resultado);

  }
}


