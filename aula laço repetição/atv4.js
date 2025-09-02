// Usando for
let maiorFor = null;
let menorFor = null;
for (let i = 0; i < 10; i++) {
  let valor = Number(prompt(`[FOR] Digite o valor ${i + 1}: `));
  if (i === 0) {
    maiorFor = menorFor = valor;
  } else {
    if (valor > maiorFor) maiorFor = valor;
    if (valor < menorFor) menorFor = valor;
  }
}
console.log(`[FOR] Maior valor: ${maiorFor}, Menor valor: ${menorFor}`);

// Usando while
let maiorWhile = null;
let menorWhile = null;
let countWhile = 0;
while (countWhile < 10) {
  let valor = Number(prompt(`[WHILE] Digite o valor ${countWhile + 1}: `));
  if (countWhile === 0) {
    maiorWhile = menorWhile = valor;
  } else {
    if (valor > maiorWhile) maiorWhile = valor;
    if (valor < menorWhile) menorWhile = valor;
  }
  countWhile++;
}
console.log(`[WHILE] Maior valor: ${maiorWhile}, Menor valor: ${menorWhile}`);

// Usando do...while
let maiorDo = null;
let menorDo = null;
let countDo = 0;
do {
  let valor = Number(prompt(`[DO...WHILE] Digite o valor ${countDo + 1}: `));
  if (countDo === 0) {
    maiorDo = menorDo = valor;
  } else {
    if (valor > maiorDo) maiorDo = valor;
    if (valor < menorDo) menorDo = valor;
  }
  countDo++;
} while (countDo < 10);
console.log('[DO...WHILE] Maior valor')