function solucao(precos) {
  let valor = 0;
  let desconto = precos[0];

  for (let i = 0; i < precos.length; i++) {
    valor += precos[i];
    if (precos[i] < desconto) {
      desconto = precos[i];
    }
  }
  if (precos.length >= 3) {
    valor -= desconto / 2;
  }
  console.log(valor);
}

function processData(input) {
  const lista = input.split(" ");
  lista.forEach((x, i, a) => a[i] = parseInt(x, 10));
  solucao(lista);
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