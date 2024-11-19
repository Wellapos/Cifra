const readline = require("readline");

// Configurar entrada e saída do terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function cifraDeCesar(texto, deslocamento, modo) {
  if (modo === "decodificar") {
    deslocamento = -deslocamento;
  }

  return texto
    .split("")
    .map((char) => {
      if (char.match(/[a-zA-Z]/)) {
        const base = char === char.toUpperCase() ? 65 : 97; // Base ASCII: A=65, a=97
        return String.fromCharCode(
          ((((char.charCodeAt(0) - base + deslocamento) % 26) + 26) % 26) +
            base,
        );
      }
      return char;
    })
    .join("");
}

console.log("=== Cifra de César ===");

rl.question("Escolha o modo (codificar/decodificar): ", (modo) => {
  rl.question("Digite o texto: ", (texto) => {
    rl.question(
      "Informe o deslocamento (número positivo): ",
      (deslocamento) => {
        const resultado = cifraDeCesar(
          texto,
          parseInt(deslocamento, 10),
          modo.toLowerCase(),
        );
        console.log(`Resultado: ${resultado}`);
        rl.close();
      },
    );
  });
});
