class Tabelas {
    constructor(valor, tabela) {
        this.valor = valor;
        this.tabela = tabela;
    }
    

    obterTaxa(bandeira, parcelas) {
        const taxas = {
            "Tabela 22": { 
                visamaster: [1.07527,1.08956,1.11000,1.13250,1.14666,1.17426,1.18071,1.18919,1.19794,1.20667,1.21552,1.22451],
                elohiper: [1.07527,1.09938,1.12020,1.14312,1.15754,1.18556,1.19200,1.20064,1.20956,1.21846,1.22749,1.23666],
                amex: [1.08389,1.08956,1.11000,1.13250,1.14666,1.17426,1.18071,1.18919,1.19794,1.20667,1.21552,1.22451],
                debito: [1.04548] 
            },
            "Tabela 24": { 
                visamaster: [1.07527,1.08956,1.11000,1.13314,1.15327,1.19411,1.20074,1.20947,1.21847,1.22746,1.23658,1.24593],
                elohiper: [1.09913,1.09938,1.12020,1.14377,1.16428,1.20573,1.21236,1.22125,1.23043,1.23043,1.24890,1.25834],
                amex: [1.08389,1.08956,1.11000,1.13314,1.15327,1.19411,1.20074,1.20947,1.21847,1.22746,1.23658,1.24593],
                debito: [1.04548] 
            },
            "Tabela 25": { 
                visamaster: [1.08184,1.10660,1.12496,1.14524,1.16492,1.19714,1.2038,1.21981,1.22894,1.23806,1.24733,1.25571],
                elohiper: [0.92436,1.11663,1.13533,1.15599,1.17604,1.2088,1.21544,1.22436,1.24108,1.25038,1.25982,1.26941],
                amex: [1.09052,1.10660,1.12496,1.14524,1.16492,1.19714,1.20380,1.21255,1.22894,1.23806,1.24732,1.25671],
                debito: [1.04712]
            },
            "Tabela 26": {
                visamaster: [1.08184, 1.11147, 1.12999, 1.14784, 1.17167, 1.20730, 1.21261, 1.22292, 1.23806, 1.25035, 1.25790, 1.26617],
                elohiper: [1.8184, 1.12159, 1.14046, 1.15864, 1.18293, 1.21913, 1.22439, 1.23491, 1.25035, 1.25976,1.26932, 1.27903],
                amex: [1.09052,1.11147,1.12999,1.14784,1.17167,1.20730,1.21261,1.22292,1.23806,1.24729,1.25666,1.26617],
                debito: [1.04712]
            },
            "Tabela 27": {
                visamaster: [1.09820,1.11221,1.13700,1.15367,1.17762,1.21974,1.22511,1.23405,1.24931,1.25861,1.26185,1.27134,1.28934,1.30734, 1.32534
                    ,1.34334,1.36134,1.37934],

                elohiper: [1.09820,1.12230,1.14754,1.16452,1.18893,1.23169,1.23701,1.24614,1.26169,1.27118,1.27448,1.28417,1.28934,1.30734, 1.32534
                    ,1.34334,1.36134,1.37934],

                amex: [1.09961,1.11147,1.12999,1.14784,1.17167,1.20730,1.21261,1.22292,1.23806,1.24729,1.25666,1.26617,1.28934,1.30734, 1.32534
                    ,1.34334,1.36134,1.37934],
                debito: [1.05570]
            },
            "Tabela 28": {
                visamaster: [1.09318,1.11466,1.13828,1.15498,1.17762,1.23245,1.23245,1.24840,1.26385,1.27172,1.27655,1.28617],
                elohiper: [1.09318,1.12478,1.14889,1.16586,1.18893,1.24452,1.24452,1.26064,1.27640,1.28442,1.28935,1.29916],
                amex: [1.10201,1.11466,1.13828,1.15498,1.17762,1.23245,1.23245,1.24840,1.26385,1.27172,1.27655,1.28617],
                debito: [1.05899]
            },
            "Tabela 30": {
                visamaster: [1.09674,1.11857,1.13828,1.16026,1.18311,1.25135,1.25838,1.26762,1.27716,1.28668,1.29634,1.30616,1.32416,
                    1.34216,1.36016,1.37816,1.39616,1.41416],

                elohiper: [1.09674,1.12979,1.14889,1.17124,1.19453,1.24452,1.27068,1.28011,1.28983,1.29955,1.30941,1.31942,1.32416,
                    1.34216,1.36016,1.37816,1.39616,1.41416],
                amex: [1.10563,1.11857,1.13828,1.16026,1.18311,1.25135,1.25838,1.26762,1.27716,1.28668,1.29634,1.30616,1.32416,
                    1.34216,1.36016,1.37816,1.39616,1.41416],
                debito: [1.06341]
            },
            "Tabela 32": {
                visamaster: [1.09913,1.12081,1.13955,1.16159,1.18449,1.26616,1.27329,1.28265,1.29231,1.30196,1.31175,1.32169],
                elohiper: [1.09913,1.31050,1.15014,1.17259,1.19593,1.27894,1.28575,1.29530,1.30515,1.31499,1.32498,1.33513],
                amex: [1.10805,1.12081,1.13955,1.16159,1.18449,1.26616,1.27329,1.28265,1.29231,1.30196,1.31175,1.32169],
                debito: [1.06673]
            },
            "Tabela 34": {
                visamaster: [1.12929,1.15196,1.16498,1.17967,1.20034,1.28744,1.29472,1.30430,1.31419,1.32406,1.33408,1.34425,1.36277,1.38130
                    ,1.39982,1.41835,1.43687,1.45540],

                elohiper: [1.12929,1.16273,1.17599,1.19095,1.21203,1.30020,1.30748,1.31725,1.32733,1.33740,1.34762,1.35801,1.36277,1.38130
                    ,1.39982,1.41835,1.43687,1.45540],

                amex: [1.13866,1.15196,1.16498,1.17966,1.20034,1.28744,1.29472,1.30430,1.31419,1.32406,1.33408,1.34425,1.36277,1.38130
                    ,1.39982,1.41835,1.43687,1.45540],
                debito: [1.09090]
        }
        };

        // Verifica se a tabela e bandeira existem, e retorna a taxa para o número da parcela
        if (taxas[this.tabela] && taxas[this.tabela][bandeira]) {
            return taxas[this.tabela][bandeira][parcelas - 1]; // Subtrai 1 porque o array é indexado a partir de 0
        } else {
            return 0; // Caso não encontre a taxa
        }
        
       
    }
}

class Pagamento {
    constructor(valor, parcelas, bandeira, tabela) {
        this.valor = valor;
        this.parcelas = parcelas;
        this.bandeira = bandeira;
        this.tabela = tabela;
        this.valorAPagar = 0;
        this.valorParcelas = 0;
    }

    calcular() {
        const tabela = new Tabelas(this.valor, this.tabela);

      

        let taxa = tabela.obterTaxa(this.bandeira, this.parcelas); // Aqui passamos o número de parcelas
        let acrescimo = this.valor * taxa;
        console.log(acrescimo)
        this.valorAPagar = acrescimo;
        this.valorParcelas = this.valorAPagar / this.parcelas;

    }
}

// Variável global para armazenar o último pagamento calculado
let ultimoPagamento = null;

  // Controle de parcelas para não passar de 18
  document.getElementById("parcelas").addEventListener("input", function () {
    let ApenasParcelas = parseInt(this.value, 10);
    let maxParcelas = 18;

    if (ApenasParcelas < 1) {
        this.value = 1;
    } else if (ApenasParcelas > maxParcelas) {
        this.value = maxParcelas;
    }
});

 
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
  

function calcularComissoes(valor, parcelas, tabela) {
    const t = tabela.toLowerCase();

    // Tabelas de comissões por condição
    const comissoes = {
        "tabela 22": { "1": 0, "até5": 0, "até18": 0.01 },
        "tabela 24": { "1": 0, "até5": 0, "até18": 0.015 },
        "tabela 25": { "1": 0, "até5": 0.01, "até18": 0.0175 },
        "tabela 26": { "1": 0, "até5": 0.01, "até18": 0.02 },
        "tabela 27": { "1": 0.05, "até5": 0.015, "até18": 0.03 },
        "tabela 28": { "1": 0.06, "até5": 0.02, "até18": 0.04 },
        "tabela 30": { "1": 0.07, "até5": 0.025, "até18": 0.05 },
        "tabela 32": { "1": 0.08, "até5": 0.03, "até18": 0.06 },
        "tabela 34": { "1": 0.09, "até5": 0.035, "até18": 0.07 }
    };

    let comissaoVendedor = 0;

    if (comissoes[t]) {
        if (parcelas === 1 && comissoes[t]["1"] !== undefined) {
            comissaoVendedor = valor * comissoes[t]["1"];
        } else if (parcelas <= 5 && comissoes[t]["até5"] !== undefined) {
            comissaoVendedor = valor * comissoes[t]["até5"];
        } else if (parcelas <= 18 && comissoes[t]["até18"] !== undefined) {
            comissaoVendedor = valor * comissoes[t]["até18"];
        }
        
    }

    return comissaoVendedor;
}



function calcularPagamento() {
    const valor = parseFloat(document.getElementById('valor').value);
    const tabela = document.getElementById('Tabela').value;
    const bandeira = document.getElementById('bandeira').value;
    const parcelas = parseInt(document.getElementById('parcelas').value);
    const resultadoDiv = document.getElementById('resultado');
  
    if (['Tabela 27', 'Tabela 30', 'Tabela 34'].includes(tabela)) {
        // Tabelas 27, 30 e 34 permitem até 18 parcelas
        if (parcelas > 18) {
            resultadoDiv.innerHTML = '<p style="color:red;">O número máximo de parcelas para esta tabela é 18.</p>';
            return;
        }
    } else {
        // Outras tabelas permitem até 12 parcelas
        if (parcelas > 12) {
            resultadoDiv.innerHTML = '<p style="color:red;">O número máximo de parcelas para esta tabela é 12.( 18 Parcelas apenas Tabelas 27,30 e 34)</p>';
            return;
        }
    }

    if (isNaN(valor) || valor <= 0) {
        resultadoDiv.innerHTML = '<p style="color:red;">Por favor, insira um valor válido.</p>';
        return;
    }


    try {
        const pagamento = new Pagamento(valor, parcelas, bandeira, tabela);
        pagamento.calcular();

        const comissaoVendedor = calcularComissoes(pagamento.valor, parcelas, tabela);


     // Salvar o pagamento para uso posterior no PDF
     ultimoPagamento = {
        valor: pagamento.valor,
        valorAPagar: pagamento.valorAPagar,
        parcelas: pagamento.parcelas,
        valorParcelas: pagamento.valorParcelas,
        bandeira: pagamento.bandeira,
        tabela: pagamento.tabela
   
    };


        resultadoDiv.innerHTML = `
            <h3>Resultado:</h3>
            <p><strong>Valor:</strong> R$${pagamento.valor.toFixed(2)}</p>
            <p><strong>Valor Final:</strong> R$${pagamento.valorAPagar.toFixed(2)}</p>
            <p><strong>Parcelas:</strong> ${pagamento.parcelas}x de R$${pagamento.valorParcelas.toFixed(2)}</p>
            <p><strong>Comissão:</strong> R$${comissaoVendedor.toFixed(2)}</p>
            <button onclick="gerarPDF()" style="background-color: #1976d2; color: white; border: none; padding: 10px 20px; border-radius: 5px;">Baixar Comprovante PDF</button>
            `;

        salvarTransacao(pagamento);
    } catch (error) {
        resultadoDiv.innerHTML = `<p style="color:red;">${error.message}</p>`;
    }




    async function salvarTransacao(pagamento) {
        const response = await fetch('https://simulador-royal.onrender.com/salvar-transacao', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(pagamento)
        });
        const data = await response.json();
        console.log("Transação salva:", data);
    }
    
}


// Função para gerar e baixar o PDF
function gerarPDF() {
    if (!ultimoPagamento) {
        alert("Nenhum pagamento calculado. Por favor, calcule um pagamento primeiro.");
        return;
    }
    
    // Obter data e hora atuais
    const dataAtual = new Date();
    const dataFormatada = `${dataAtual.getDate().toString().padStart(2, '0')}/${(dataAtual.getMonth() + 1).toString().padStart(2, '0')}/${dataAtual.getFullYear()}`;
    const horaFormatada = `${dataAtual.getHours().toString().padStart(2, '0')}:${dataAtual.getMinutes().toString().padStart(2, '0')}`;
    
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
    doc.text("Informações do Pagamento Acréscimo", 20, 35);
    
    doc.setFontSize(10);
    doc.text(`Data: ${dataFormatada}`, 20, 45);
    doc.text(`Hora: ${horaFormatada}`, 20, 52);
    doc.text(`Bandeira: ${formatarBandeira(ultimoPagamento.bandeira)}`, 20, 59);
    
    
    // Adicionar linha divisória
    doc.line(20, 73, 190, 73);
    
    // Adicionar detalhes do valor
    doc.setFontSize(12);
    doc.text("Detalhes do Valor", 20, 83);
    
    doc.setFontSize(10);
    doc.text(`Valor Original: R$ ${ultimoPagamento.valor.toFixed(2)}`, 20, 93);
    doc.text(`Valor Final: R$ ${ultimoPagamento.valorAPagar.toFixed(2)}`, 20, 100);
    doc.text(`Forma de Pagamento: ${ultimoPagamento.parcelas}x de R$ ${ultimoPagamento.valorParcelas.toFixed(2)}`, 20, 107);
    
    // Adicionar linha divisória
    doc.line(20, 114, 190, 114);
    
    // Adicionar informações adicionais
    doc.setFontSize(8);
    doc.text("Este documento é um comprovante de pagamento e não tem valor fiscal.", 105, 124, { align: "center" });
    
    
    // Adicionar rodapé com data e hora
    doc.setFontSize(6);
    doc.text(`Gerado em: ${dataFormatada} às ${horaFormatada}`, 105, 190, { align: "center" });
    
    // Salvar o PDF
    const nomeArquivo = `comprovante_${dataAtual.getDate()}${dataAtual.getMonth() + 1}${dataAtual.getFullYear()}_${dataAtual.getHours()}${dataAtual.getMinutes()}.pdf`;
    doc.save(nomeArquivo);
}

// Função para formatar o nome da bandeira para exibição
function formatarBandeira(bandeira) {
    const formatoBandeira = {
        "visamaster": "Visa / Mastercard",
        "elohiper": "Elo / Hipercard",
        "amex": "American Express",
        "debito": "Cartão de Débito"
    };
    
    return formatoBandeira[bandeira] || bandeira;
}


window.onload = verificarBandeira;