function processData(input) {
  const correcaoCapsLock = (palavra) => {
    const capsOn = palavra === palavra.toUpperCase() ||
      (palavra[0] === palavra[0].toLowerCase() && palavra.slice(1) === palavra.slice(1).toUpperCase());

    if (capsOn) {
      const corrigePalavra = palavra.split("").map((letra) =>
        letra === letra.toUpperCase() ? letra.toLowerCase() : letra.toUpperCase()).join("");
      return corrigePalavra;
    }
    return palavra;
  }
  console.log(correcaoCapsLock(input));
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