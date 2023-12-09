function solucao(min, km) {
  const precoEmMin = min * 50;
  const precoEmKm = km * 70;
  let precoTotal = precoEmMin + precoEmKm;

  const precoMinAdicional = min > 20 ? (min - 20) * 20 : 0;
  const precoKmAdicional = km > 10 ? (km - 10) * 20 : 0;
  precoTotal -= precoMinAdicional;
  precoTotal -= precoKmAdicional;

  console.log(Math.floor(precoTotal));
}

function processData(input) {
  const x = input.split(" ");
  const min = parseFloat(x[0], 10);
  const km = parseFloat(x[1], 10);
  solucao(min, km);
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