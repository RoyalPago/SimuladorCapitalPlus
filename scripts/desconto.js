class Tabelas {
  constructor(valor, tabela) {
    this.valor = valor;
    this.tabela = tabela;
  }

  obterTaxa(bandeira, parcelas) {
    const taxas = {
      "Tabela 22": {
        visamaster: [
          0.93, 0.9178, 0.9009, 0.883, 0.8721, 0.8516, 0.84685, 0.84091,
          0.83477, 0.82873, 0.82269, 0.81665,
        ],
        elohiper: [
          0.93, 0.9096, 0.8927, 0.8748, 0.8639, 0.84348, 0.83893, 0.83289,
          0.82675, 0.82071, 0.81467, 0.80863,
        ],
        amex: [
          0.9226, 0.9178, 0.9009, 0.883, 0.8721, 0.8516, 0.84685, 0.84091,
          0.83477, 0.82873, 0.82873, 0.81665,
        ],
        debito: [0.9565],
      },

      "Tabela 24": {
        visamaster: [
          0.93, 0.9178, 0.9009, 0.8825, 0.8671, 0.83745, 0.83282, 0.82681,
          0.8207, 0.81469, 0.80869, 0.80268,
        ],
        elohiper: [
          0.90981, 0.9096, 0.8927, 0.8743, 0.8589, 0.82937, 0.82484, 0.81883,
          0.81272, 0.80672, 0.80071, 0.7947,
        ],
        amex: [
          0.9226, 0.9178, 0.9009, 0.8825, 0.8671, 0.83745, 0.83282, 0.82681,
          0.8207, 0.81469, 0.80869, 0.80268,
        ],
        debito: [0.9565],
      },

      "Tabela 25": {
        visamaster: [
          0.92436, 0.90367, 0.88892, 0.87318, 0.85843, 0.83532, 0.8307, 0.8198,
          0.81371, 0.80771, 0.80172, 0.79573,
        ],
        elohiper: [
          0.92436, 0.89555, 0.8808, 0.86506, 0.85031, 0.82727, 0.82275, 0.81675,
          0.80575, 0.79976, 0.79376, 0.78777,
        ],
        amex: [
          0.91699, 0.90367, 0.88892, 0.87318, 0.85843, 0.83532, 0.8307, 0.82471,
          0.81371, 0.80771, 0.80172, 0.79573,
        ],
        debito: [0.955],
      },

      "Tabela 26": {
        visamaster: [
          0.92436, 0.89971, 0.88496, 0.8712, 0.85348, 0.8283, 0.82467, 0.81777,
          0.80772, 0.80174, 0.79576, 0.78978,
        ],
        elohiper: [
          0.92436, 0.89159, 0.87684, 0.86308, 0.84536, 0.82026, 0.81673,
          0.80977, 0.79978, 0.7938, 0.78782, 0.78184,
        ],
        amex: [
          0.91699, 0.89971, 0.88496, 0.8712, 0.85348, 0.8283, 0.82467, 0.81771,
          0.80772, 0.80174, 0.79576, 0.78978,
        ],
        debito: [0.955],
      },

      "Tabela 27": {
        visamaster: [
          0.91674, 0.89911, 0.87951, 0.8668, 0.84917, 0.81985, 0.81625, 0.81034,
          0.80044, 0.79453, 0.79249, 0.78657, 0.77559, 0.76491, 0.75452,
          0.74441, 0.73457, 0.72498,
        ],

        elohiper: [
          0.91674, 0.89103, 0.87143, 0.85872, 0.84109, 0.81189, 0.8084, 0.80248,
          0.79259, 0.78667, 0.78463, 0.77872, 0.77559, 0.76491, 0.75452,
          0.74441, 0.73457, 0.72498,
        ],

        amex: [
          0.90941, 0.89911, 0.87851, 0.8668, 0.84917, 0.81984, 0.81626, 0.81034,
          0.80044, 0.79453, 0.79249, 0.78657, 0.77559, 0.76491, 0.75452,
          0.74441, 0.73457, 0.72498,
        ],
        debito: [0.94724],
      },

      "Tabela 28": {
        visamaster: [
          0.91476, 0.89852, 0.87852, 0.86582, 0.84917, 0.81139, 0.80688,
          0.80102, 0.79123, 0.78634, 0.78336, 0.7775,
        ],
        elohiper: [
          0.91476, 0.88906, 0.87044, 0.85774, 0.84109, 0.80352, 0.7991, 0.79325,
          0.78346, 0.77856, 0.77558, 0.76973,
        ],
        amex: [
          0.90743, 0.90743, 0.87852, 0.86582, 0.84917, 0.81139, 0.80688,
          0.80102, 0.79123, 0.78634, 0.78336, 0.7775,
        ],
        debito: [0.96443],
      },

      "Tabela 30": {
        visamaster: [
          0.91179, 0.8932, 0.87852, 0.86188, 0.84523, 0.79914, 0.79467, 0.78888,
          0.78299, 0.77719, 0.7714, 0.7656, 0.7552, 0.74507, 0.73521, 0.72561,
          0.71625, 0.70713,
        ],

        elohiper: [
          0.91179, 0.88512, 0.87044, 0.8538, 0.83715, 0.79135, 0.78698, 0.78119,
          0.7753, 0.7695, 0.76371, 0.75791, 0.7552, 0.74507, 0.73521, 0.72561,
          0.71625, 0.70713,
        ],

        amex: [
          0.90446, 0.8932, 0.87852, 0.86188, 0.84523, 0.79914, 0.79468, 0.78888,
          0.78299, 0.7772, 0.7714, 0.76561, 0.7552, 0.74507, 0.73521, 0.72561,
          0.71625, 0.70713,
        ],
        debito: [0.94037],
      },

      "Tabela 32": {
        visamaster: [
          0.90981, 0.89221, 0.87754, 0.86089, 0.84424, 0.78979, 0.78537,
          0.77964, 0.77381, 0.76807, 0.76234, 0.75661,
        ],
        elohiper: [
          0.90981, 0.88414, 0.86946, 0.85281, 0.83617, 0.78208, 0.77776,
          0.77202, 0.76619, 0.76046, 0.75475, 0.74899,
        ],
        amex: [
          0.90248, 0.89221, 0.87754, 0.86089, 0.84424, 0.78979, 0.78537,
          0.77964, 0.77381, 0.76807, 0.76234, 0.75661,
        ],
        debito: [0.93744],
      },

      "Tabela 34": {
        visamaster: [
          0.88551, 0.86809, 0.85838, 0.84769, 0.8331, 0.77674, 0.77237, 0.76669,
          0.76092, 0.76092, 0.75525, 0.74958, 0.74391, 0.72396, 0.71438,
          0.70504, 0.69595, 0.6871,
        ],

        elohiper: [
          0.88552, 0.86005, 0.85035, 0.83966, 0.82506, 0.76911, 0.76483,
          0.75916, 0.75339, 0.74772, 0.74205, 0.73637, 0.7338, 0.72396, 0.71438,
          0.70504, 0.69595, 0.6871,
        ],

        amex: [
          0.87823, 0.86808, 0.85838, 0.8477, 0.8331, 0.77674, 0.77237, 0.76669,
          0.76093, 0.75525, 0.74958, 0.74391, 0.7338, 0.72396, 0.71438, 0.70504,
          0.69595, 0.6871,
        ],
        debito: [0.91667],
      },
    };

    // Verifica se a tabela e bandeira existem, e retorna a taxa para o número da parcela
    if (taxas[this.tabela] && taxas[this.tabela][bandeira]) {
      return taxas[this.tabela][bandeira][parcelas - 1]; // Subtrai 1 porque o array é indexado a partir de 0
    } else {
      return 0; // Caso não encontre a taxa
    }
  }
}

class Desconto {
  constructor(valor, parcelas, bandeira, tabela) {
    this.valor = valor;
    this.parcelas = parcelas;
    this.bandeira = bandeira;
    this.tabela = tabela;
    this.valorcomdesconto = 0;
    this.valorParcelas = 0;
  }

  calcular() {
    const tabela = new Tabelas(this.valor, this.tabela);

    let taxa = tabela.obterTaxa(this.bandeira, this.parcelas); // Aqui passamos o número de parcelas
    let acrescimo = this.valor * taxa;
    console.log(acrescimo);
    this.valorcomdesconto = acrescimo;
    this.valorParcelas = this.valor / this.parcelas;
  }
}

// Variável global para armazenar o último desconto calculado
let ultimodesconto = null;

function verificarBandeira() {
  const bandeira = document.getElementById("bandeira").value;
  const selectParcelas = document.getElementById("parcelas");

  selectParcelas.innerHTML = ""; // Limpa as opções anteriores

  if (bandeira === "debito") {
    const option = document.createElement("option");
    option.text = "--";
    option.value = "1";
    selectParcelas.add(option);
  } else {
    for (let i = 4; i <= 18; i++) {
      const option = document.createElement("option");
      option.text = `${i}x`;
      option.value = i;
      selectParcelas.add(option);
    }
  }
}

function calcularComissoes(valorcomdesconto, parcelas, tabela) {
  const t = tabela.toLowerCase();

  // Tabelas de comissões por condição
  const comissoes = {
    "tabela 22": { 1: 0, até5: 0, até18: 0.01 },
    "tabela 24": { 1: 0, até5: 0, até18: 0.015 },
    "tabela 25": { 1: 0, até5: 0.01, até18: 0.0175 },
    "tabela 26": { 1: 0, até5: 0.01, até18: 0.02 },
    "tabela 27": { 1: 0.05, até5: 0.015, até18: 0.03 },
    "tabela 28": { 1: 0.06, até5: 0.02, até18: 0.04 }, // usando 0 como padrão se não tiver comissão
    "tabela 30": { 1: 0.07, até5: 0.025, até18: 0.05 },
    "tabela 32": { 1: 0.08, até5: 0.03, até18: 0.06 },
    "tabela 34": { 1: 0.09, até5: 0.035, até18: 0.07 },
  };

  let comissaoVendedor = 0;

  if (comissoes[t]) {
    if (parcelas === 1 && comissoes[t]["1"] !== undefined) {
      comissaoVendedor = valorcomdesconto * comissoes[t]["1"];
    } else if (parcelas <= 5 && comissoes[t]["até5"] !== undefined) {
      comissaoVendedor = valorcomdesconto * comissoes[t]["até5"];
    } else if (parcelas <= 18 && comissoes[t]["até18"] !== undefined) {
      comissaoVendedor = valorcomdesconto * comissoes[t]["até18"];
    }
  }

  return comissaoVendedor;
}

function calcularDesconto() {
  const valor = parseFloat(document.getElementById("valor").value);
  const tabela = document.getElementById("Tabela").value;
  const bandeira = document.getElementById("bandeira").value;
  const parcelas = parseInt(document.getElementById("parcelas").value);
  const resultadoDiv = document.getElementById("resultado");

  if (["Tabela 27", "Tabela 30", "Tabela 34"].includes(tabela)) {
    // Tabelas 27, 30 e 34 permitem até 18 parcelas
    if (parcelas > 18) {
      resultadoDiv.innerHTML =
        '<p style="color:red;">O número máximo de parcelas para esta tabela é 18.</p>';
      return;
    }
  } else {
    // Outras tabelas permitem até 12 parcelas
    if (parcelas > 12) {
      resultadoDiv.innerHTML =
        '<p style="color:red;">O número máximo de parcelas para esta tabela é 12.</p>';
      return;
    }
  }

  if (isNaN(valor) || valor <= 0) {
    resultadoDiv.innerHTML =
      '<p style="color:red;">Por favor, insira um valor válido.</p>';
    return;
  }

  const desconto = new Desconto(valor, parcelas, bandeira, tabela);
  desconto.calcular();

  try {
    const desconto = new Desconto(valor, parcelas, bandeira, tabela);
    desconto.calcular();

    const comissaoVendedor = calcularComissoes(
      desconto.valorcomdesconto,
      parcelas,
      tabela
    );

    // Salvar o desconto para uso posterior no PDF
    ultimodesconto = {
      valor: desconto.valor,
      valorcomdesconto: desconto.valorcomdesconto,
      parcelas: desconto.parcelas,
      valorParcelas: desconto.valorParcelas,
      bandeira: desconto.bandeira,
      tabela: desconto.tabela,
    };

    resultadoDiv.innerHTML = `
            <h3>Resultado:</h3>
            <p><strong>Valor de entrada:</strong> R$${desconto.valor.toFixed(
              2
            )}</p>
            <p><strong>Valor com o Desconto:</strong> R$${desconto.valorcomdesconto.toFixed(
              2
            )}</p>
            <p><strong>Parcelas:</strong> ${
              desconto.parcelas
            }x de R$${desconto.valorParcelas.toFixed(2)}</p>
            <p><strong>Comissão:</strong> R$${comissaoVendedor.toFixed(2)}</p>
            <button id="downloadPDF" style="background-color: #1976d2; color: white; border: none; padding: 10px 20px; border-radius: 5px;"  class="btn btn-primary mt-3" onclick="gerarPDF()">Baixar Comprovante PDF</button>
  
        `;

    //salvarDescontos(desconto);
  } catch (error) {
    resultadoDiv.innerHTML = `<p style="color:red;">${error.message}</p>`;
  }
  /*
  async function salvarDescontos(desconto) {
    const response = await fetch(
      "https://simulador-royal.onrender.com//salvar-desconto",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(desconto),
      }
    );
    const data = await response.json();
    console.log("desconto salvo:", data);
  }
    */
}

function gerarPDF() {
  if (!ultimodesconto) {
    alert(
      "Nenhum pagamento calculado. Por favor, calcule um pagamento primeiro."
    );
    return;
  }

  // Obter data e hora atuais
  const dataAtual = new Date();
  const dataFormatada = `${dataAtual.getDate().toString().padStart(2, "0")}/${(
    dataAtual.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}/${dataAtual.getFullYear()}`;
  const horaFormatada = `${dataAtual
    .getHours()
    .toString()
    .padStart(2, "0")}:${dataAtual.getMinutes().toString().padStart(2, "0")}`;

  // Criar o PDF usando jsPDF
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  // Adicionar cabeçalho
  doc.setFontSize(16);
  doc.text("SIMULAÇÂO", 105, 20, { align: "center" });

  // Adicionar linha divisória
  doc.setLineWidth(0.5);
  doc.line(20, 25, 190, 25);

  // Adicionar informações do pagamento
  doc.setFontSize(12);
  doc.text("Informações do Pagamento Desconto ", 20, 35);

  doc.setFontSize(10);
  doc.text(`Data: ${dataFormatada}`, 20, 45);
  doc.text(`Hora: ${horaFormatada}`, 20, 52);
  doc.text(`Bandeira: ${formatarBandeira(ultimodesconto.bandeira)}`, 20, 59);

  // Adicionar linha divisória
  doc.line(20, 73, 190, 73);

  // Adicionar detalhes do valor
  doc.setFontSize(12);
  doc.text("Detalhes do Valor", 20, 83);

  doc.setFontSize(10);
  doc.text(`Valor de Entrada: R$ ${ultimodesconto.valor.toFixed(2)}`, 20, 93);
  doc.text(
    `Valor com desconto: R$ ${ultimodesconto.valorcomdesconto.toFixed(2)}`,
    20,
    100
  );
  doc.text(
    `Forma de Pagamento: ${
      ultimodesconto.parcelas
    }x de R$ ${ultimodesconto.valorParcelas.toFixed(2)}`,
    20,
    107
  );

  // Adicionar linha divisória
  doc.line(20, 114, 190, 114);

  // Adicionar informações adicionais
  doc.setFontSize(8);
  doc.text(
    "Este documento é um comprovante de pagamento e não tem valor fiscal.",
    105,
    124,
    { align: "center" }
  );

  // Adicionar rodapé com data e hora
  doc.setFontSize(6);
  doc.text(`Gerado em: ${dataFormatada} às ${horaFormatada}`, 105, 190, {
    align: "center",
  });

  // Salvar o PDF
  const nomeArquivo = `comprovante_${dataAtual.getDate()}${
    dataAtual.getMonth() + 1
  }${dataAtual.getFullYear()}_${dataAtual.getHours()}${dataAtual.getMinutes()}.pdf`;
  doc.save(nomeArquivo);
}

// Função para formatar o nome da bandeira para exibição
function formatarBandeira(bandeira) {
  const formatoBandeira = {
    visamaster: "Visa / Mastercard",
    elohiper: "Elo / Hipercard",
    amex: "American Express",
    debito: "Cartão de Débito",
  };

  return formatoBandeira[bandeira] || bandeira;
}

window.onload = verificarBandeira;
