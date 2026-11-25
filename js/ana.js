// ATIVIDADE 1: CALCULADORA DE DESCONTO PROGRESSIVO
const valorCompra = 250.00;
let porcentagemDesconto = 0;

if (valorCompra <= 100.00) {
  porcentagemDesconto = 0;
} else if (valorCompra <= 300.00) {
  porcentagemDesconto = 0.10;
} else {
  porcentagemDesconto = 0.15;
}

const valorDesconto = valorCompra * porcentagemDesconto;
const valorFinal = valorCompra - valorDesconto;

console.log(
  `Compra: R$ ${valorCompra.toFixed(2)} | Desconto: R$ ${valorDesconto.toFixed(2)} (${porcentagemDesconto * 100}%) | Total a Pagar: R$ ${valorFinal.toFixed(2)}`
);




// ATIVIDADE 2: VALIDADOR DE ACESSO AO PAINEL
const usuarioLogado = true;
const idadeUsuario = 20;
const perfilUsuario = "ADMIN";

const temPermissao = perfilUsuario === "ADMIN" || perfilUsuario === "GERENTE";

if (usuarioLogado === true && idadeUsuario >= 18 && temPermissao) {
  console.log("Acesso Autorizado ao Painel Administrativo!");
} else {
  console.log("Acesso Negado: Credenciais ou idade insuficientes.");
}


// Teste de Segurança (igualdade estrita vs. frouxa)
const tokenDigitado = "123"; // string
const tokenValido = 123;     // number

console.log("Comparação estrita (===):", tokenDigitado === tokenValido); // false (tipos diferentes)
console.log("Comparação frouxa (==):", tokenDigitado == tokenValido);   // true (faz coerção de tipo)
// ATIVIDADE 3: RASTREADOR DE STATUS DE PEDIDO
const statusPedido = "ENVIADO";

switch (statusPedido) {
  case "CRIADO":
    console.log("Pedido recebido! Aguardando confirmação de pagamento.");
    break;
  case "PAGO":
    console.log("Pagamento confirmado! Produto sendo embalado.");
    break;
  case "ENVIADO":
    console.log("Pedido em transporte! A caminho do seu endereço.");
    break;
  case "ENTREGUE":
    console.log("Pedido entregue com sucesso! Aproveite sua compra.");
    break;
  default:
    console.log("Status desconhecido. Por favor, contate o suporte.");
    break;
}


// ATIVIDADE 4: PAR/ÍMPAR E ESTOQUE COM OPERADOR TERNÁRIO
// Parte A (Par ou Ímpar)
const numero = 18;
const tipoNumero = numero % 2 === 0 ? "PAR" : "ÍMPAR";
console.log(`O número ${numero} é classificado como ${tipoNumero}.`);

// Parte B (Disponibilidade de Estoque)
const quantidadeEstoque = 0;
const avisoEstoque = quantidadeEstoque > 0 ? "Em Estoque" : "Esgotado";
console.log(`Disponibilidade do Produto: ${avisoEstoque}`);



