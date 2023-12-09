function solucao(jogadores) {
  const jogadas = jogadores.reduce((contador, jogador) => {
    if (jogador.jogada === 0) {
      contador.zero++;
    } else if (jogador.jogada === 1) {
      contador.um++;
    }
    return contador;
  }, {
    zero: 0,
    um: 0
  });

  if (jogadas.um === 1) {
    const ganhador = jogadores.find(jogador => jogador.jogada === 1);
    console.log(ganhador.nome);
  } else if (jogadas.zero === 1) {
    const ganhador = jogadores.find(jogador => jogador.jogada === 0);
    console.log(ganhador.nome);
  } else {
    console.log("NINGUEM");
  }
}

function processData(input) {
  solucao(JSON.parse(input));
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