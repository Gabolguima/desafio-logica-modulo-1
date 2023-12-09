function solucao(texto) {
  const palavras = texto.split(" ");
  const palavrasValidas = palavras.filter(palavra => palavra !== "");
  console.log(palavrasValidas.length);
}

function processData(input) {
  solucao(input)
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