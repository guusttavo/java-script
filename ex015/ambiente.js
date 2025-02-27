// Função para calcular o IMC
function calcularIMC(peso, altura) {
    // Verifica se os parâmetros são válidos
    if (peso <= 0 || altura <= 0) {
      return 'Peso e altura devem ser valores positivos.';
    }
  
    // Calcula o IMC
    let imc = peso / (altura * altura);
  
    // Retorna o valor do IMC com 2 casas decimais
    return imc.toFixed(2);
  }
  
  // Exemplo de uso da função
  let peso = 70; // Peso em kg
  let altura = 1.75; // Altura em metros
  
  let resultadoIMC = calcularIMC(peso, altura);
  console.log('IMC:', resultadoIMC);
  