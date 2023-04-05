const valueOne = Number(prompt("Digite um número: ")); 
const valueTwo = Number(prompt("Digite outro número: ")); 

function sum(valueOne, valueTwo) {
  return resultSum = valueOne + valueTwo; 
}

function sub(valueOne, valueTwo) {
  return resultSub = valueOne - valueTwo; 
}

function mult(valueOne, valueTwo) {
  return resultMult = valueOne * valueTwo; 
}

function div(valueOne, valueTwo) {
  return resultDiv = valueOne / valueTwo; 
}

function printResult(resultSum, resultSub, resultMult, resultDiv) {
  alert(`O resultado da soma é ${resultSum}`);
  alert(`O resultado da subtração é ${resultSub}`);
  alert(`O resultado da multiplicação é ${resultMult}`);
  alert(`O resultado da divisão é ${resultDiv}`);
}

function isPar(resultSum) {
  const par = resultSum % 2;
  if (par == 0) {
    alert("A soma dos dois números é Par")
  } else {
    alert("A soma dos dois números é Ímpar")
  }
   return par; 
}

function isEqual(valueOne, valueTwo) {
  if(valueOne == valueTwo) {
    alert("Os números digitados são iguais") 
  } else {
    alert("Os números digitados são diferentens") 
  }
}

sum(valueOne, valueTwo);
sub(valueOne, valueTwo);
mult(valueOne, valueTwo);
div(valueOne, valueTwo);
printResult(resultSum, resultSub, resultMult, resultDiv);
isPar(resultSum);
isEqual(valueOne, valueTwo)

