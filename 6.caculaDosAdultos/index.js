function solucao(lista) {
  let maiorIdade = Infinity;

  for (let i = 0; i < lista.length; i++) {
    const idade = lista[i];
    if (idade >= 18 && idade < maiorIdade) {
      maiorIdade = idade;
    }
  }

  if (maiorIdade === Infinity) {
    console.log("CRESCA E APARECA");
  } else {
    console.log(maiorIdade);
  }
}

function processData(input) {
  //Enter your code here
  const strings = input.split(" ");
  const numeros = [];
  for (let i = 0; i < strings.length; i++) {
    numeros.push(parseInt(strings[i], 10));
  }
  solucao(numeros);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});