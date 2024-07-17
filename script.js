// Lista de franquias com seus detalhes
const franquias = [
    {
        codigo: 1,
        modelo: "WORKER 125",
        gerenciavel: true,
        cidade: "Belo Horizonte (SEDE)",
        estado: "MG",
        info: `
        <br>✅Plano Mensal - R$230,30 SEMANAL (diária R$32,90)
        <br>✅Plano Anual - R$209,30 SEMANAL (diária R$29,90)
        <br>✅Plano Fidelidade - 24 MESES - R$265,30 SEMANAL (diária R$37,90)
        <br>✅Caução - R$400,00 POR R$150,00`
    },

    {
        codigo: 2,
        modelo: "WORKER 150",
        gerenciavel: true,
        cidade: "Belo Horizonte (SEDE)",
        estado: "MG",
        info: `
        <br>✅Plano Mensal - R$251,30 SEMANAL (diária 35,90)
        <br>✅Plano Anual - R$ 237,30 SEMANAL (diária 33,90)
        <br>✅Plano Fidelidade 24 MESES-R$300,30 SEMANAL (diária 42,90)
        <br>✳️CAUÇÃO R$400,00 POR 150
        <br>✳️Locação sem burocracias e com preço justo ⚖️
        <br>✳️Todos os veículos São do ano 2023/23 0 km
        <br>✳️PARA RETIRADA = CAUÇÃO + SEMANA DO PLANO`
    },

    {
        codigo: 3,
        modelo: "SHI 175",
        gerenciavel: false,
        cidade: "Rio de Janeiro",
        estado: "RJ",
        info: `
        <br>✅Plano Mensal - R$419,30 SEMANAL (diária 59,90)
        <br>✅Plano Anual -  R$384,30 SEMANAL (diária 54,90)
        <br>✅Plano Fidelidade -24 meses  R$454,30 SEMANAL (diária 64,90)
        <br>✅CAUÇÃO -R$500,00
        <br>✳️PARA RETIRADA = CAUÇÃO + SEMANA DO PLANO
        <br>✳️Locação sem burocracias e com preço justo ⚖️`
    },

    {
        codigo: 4,
        modelo: "WORKER CROSS 150",
        gerenciavel: false,
        cidade: "Ipatinga",
        estado: "MG",
        info: `
        <br>✅Mensal - R$ 230,30 Semanal (diária 32,90)
        <br>✅Anual - R$ 216,30 Semanal (diária 30,90)
        <br>✅Plano Fidelidade - (24 meses) R$ 279,30 Semanal (diária 39,90)
        <br>✅ CAUÇÃO=500,00
        <br>✳️PARA RETIRADA = CAUÇÃO + SEMANA DO PLANO`
    },

    {
        codigo: 5,
        modelo: "WORKER 125",
        gerenciavel: false,
        cidade: "Lagoa Santa / Venda Nova / Belo Horizonte (Caiçara)",
        estado: "MG",
        info: `
        <br>✅Plano Mensal - R$230,30 SEMANAL (diária 32,90)
        <br>✅Plano Anual - R$ 209,30 SEMANAL (diária 29,90)
        <br>✅Plano Fidelidade 24 MESES-R$293,30 SEMANAL (diária 41,90)
        <br>✳️CAUÇÃO R$500,00
        <br>✳️PARA RETIRADA = CAUÇÃO + SEMANA DO PLANO`
    },

    {
        codigo: 6,
        modelo: "HONDA CG 160 START",
        gerenciavel: false,
        cidade: "Belo Horizonte (BERNARDO)",
        estado: "MG",
        info: `
        <br>✅SEMESTRAL - R$ 244,30 a semana  (diária 34,90)
        <br>✳️Manutencão preventiva e do dia a dia por nossa conta (exceto mau uso e quebra, batida, multa, gasolina, lâmpadas e troca de pneu)
        <br>✅ANUAL - R$ 244,30 a semana  (diária 34,90)
        <br>✳️Manutencão preventiva e do dia a dia por nossa conta (exceto mau uso e quebra, batida, multa, gasolina, lâmpadas e troca de pneu)
        <br>✅Plano FIDELIDADE (Onde a Moto é sua no final de 28 meses)- R$ 384,30 a semana (diária 54,90)
        <br>✳️Manutencão preventiva e do dia a dia por nossa conta (exceto mau uso e quebra, batida, multa, gasolina, lâmpada e troca de pneu)
        <br>✅Caução = R$ 600,00`
    },

    {
        codigo: 7,
        modelo: "SUZUKI DK 150",
        gerenciavel: false,
        cidade: "Poços de Caldas",
        estado: "MG",
        info: `
        <br>✅Mensal - R$ 300,30 Semanal (diária 42,90)
        <br>✅Anual - R$ 279,30 Semanal (diária 39,90)
        <br>✅Plano Fidelidade - R$ 398,30(diária 56,90)
        <br>CAUÇÃO = 700,00`
    },

    {
        codigo: 8,
        modelo: "SUZUKI DK 150",
        gerenciavel: false,
        cidade: "Montes Claros",
        estado: "MG",
        info: `
        <br>Planos de locação (FELIPE/SARA)
        <br>PLANO SUZUKI DK 150🏍️
        <br>✅Plano Mensal - R$251,30 SEMANAL (diária 35,90) VALOR PROMOCIONAL
        <br>✅Plano Anual - R$ 251,30 SEMANAL (diária 35,90) VALOR PROMOCIONAL
        <br>✅Plano Fidelidade 28 MESES - R$349,30 SEMANAL (diária 49,90)
        <br>CAUÇÃO R$500,00.`
    },

    {
        codigo: 9,
        modelo: "SHI 175",
        gerenciavel: false,
        cidade: "Santa Luzia",
        estado: "MG",
        info: `
        <br>✅Trimestral 03 MESES-  R$ 391,30 SEMANAL (DIÁRIA 55,90)
        <br>✅Semestral- 370,30 SEMANAL ( DIÁRIA 52,90)
        <br>✅Plano Anual -  R$363,30 SEMANAL (diária 51,90)
        <br>✅Plano Fidelidade -24 meses RODADA  R$419,30 SEMANAL (diária 59,90)
        <br>✅Plano Fidelidade -24 meses 0 KM  R$468,30 SEMANAL (diária 66,90)
        <br>✅CAUÇÃO -R$800,00
        <br>✳️Locação sem burocracias e com preço justo ⚖️`
    },

    {
        codigo: 10,
        modelo: "SUZUKI DK 150",
        gerenciavel: false,
        cidade: "Belo Horizonte (BRAULIO)",
        estado: "MG",
        info: `
        <br>✅Plano Mensal - R$272,30 Semanal (diária 38,90)
        <br>✅Plano Anual - R$ 251,30 Semanal (diária 35,90)
        <br>✅Plano Fidelidade - (24 meses) R$ 349,30 Semanal (diária 49,90)
        <br>✅ CAUÇÃO=700,00
        <br>PARA RETIRADA = CAUÇÃO + SEMANA DO PLANO`
    },

    {
        codigo: 11,
        modelo: "SUZUKI DK 150",
        gerenciavel: false,
        cidade: "Belo Horizonte (CARLOS)",
        estado: "MG",
        info: `
        <br>✅Plano Mensal - R$302,30 SEMANAL (diária 41,90)
        <br>✅Plano Anual - R$ 272,30 SEMANAL(diária 38,90)
        <br>✅Plano Fidelidade 28 MESES 363,30 - SEMANAL  (diária 51,90)
        <br>CAUÇÃO R$700,00
        <br>CAUÇÃO FIDELIDADE R$600,00`
    },

    {
        codigo: 12,
        modelo: "CHOPPER 150",
        gerenciavel: false,
        cidade: "Coronel Fabriciano",
        estado: "MG",
        info: `
        <br>✅Plano Mensal - R$ 272,3 SEMANAL (diária 38,90)
        <br>✅Plano Anual - R$ 237,3 SEMANAL(diária 33,90)
        <br>✅Plano Fidelidade 24 MESES - R$ 342,3SEMANAL (48,90 diária)
        <br>CAUÇÃO R$600,00 (Pode ser divido em 2x nas Semanas)
        <br>✳️PARA RETIRADA = CAUÇÃO + SEMANA DO PLANO`
    },

    {
        codigo: 13,
        modelo: "SUZUKI DK 150",
        gerenciavel: false,
        cidade: "Sete Lagoas (MARCOS OLIVEIRA)",
        estado: "MG",
        info: `
        <br>- Plano semestral
        <br>Diária de 52,90 (370,30 por semana) - Caução R$700  podendo ser paga em até 12 parcelas no cartão;  

        <br>- Plano anual
        <br>Diária de 48,90 (342,30 por semana) - Caução R$600  podendo ser paga em até 12 parcelas no cartão;

        <br>- Plano Fidelidade
        <br>Diária de 59,90 (419,30 por semana) - Caução de R$500  podendo ser paga em até 12 parcelas no cartão.

        <br>*Pagamentos no cartão, com juros da bandeira.

        <br>Promoção valida até 20 de julho ou enquanto durar o estoque (6 motos)`
    },
];

// Ordenar as franquias por cidade
franquias.sort((a, b) => a.cidade.localeCompare(b.cidade));

// Elementos do DOM
const listaFranquias = document.getElementById('listaFranquias');
const entradaPesquisa = document.getElementById('entradaPesquisa');
const painelInformacoes = document.getElementById('painelInformacoes');
const botoesFiltroEstado = document.querySelectorAll('.estados-filtro .botao-filtro');
const botoesFiltroGerenciavel = document.querySelectorAll('.gerenciaveis-filtro .botao-filtro');

// Lista filtrada de franquias (inicialmente contém todas as franquias)
let franquiasFiltradas = franquias;
let filtroEstado = 'TODAS';
let filtroGerenciavel = 'gerenciavelTodas';

// Função para preencher a lista de franquias no elemento HTML
function preencherLista(franquiasParaExibir) {
    listaFranquias.innerHTML = ''; // Limpa o conteúdo anterior
    franquiasParaExibir.forEach(franquia => {
        const option = document.createElement('option');
        option.value = franquia.codigo;
        option.textContent = `${ franquia.cidade } - ${ franquia.modelo }`;
        listaFranquias.appendChild(option);
    });
}

// Função para normalizar strings para facilitar a busca (remove acentos e converte para minúsculas)
function normalizarString(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

// Função para buscar franquias com base na entrada do usuário
function buscarFranquias() {
    const query = normalizarString(entradaPesquisa.value);
    const filtradas = franquiasFiltradas.filter(franquia => {
        return normalizarString(franquia.cidade).includes(query);
    });
    preencherLista(filtradas);
}

// Função para aplicar filtros de estado e gerenciabilidade
function aplicarFiltros() {
    let resultado = franquias;

    if (filtroEstado !== 'TODAS') {
        resultado = resultado.filter(franquia => franquia.estado === filtroEstado);
    }

    if (filtroGerenciavel === 'gerenciavelSim') {
        resultado = resultado.filter(franquia => franquia.gerenciavel);
    } else if (filtroGerenciavel === 'gerenciavelNao') {
        resultado = resultado.filter(franquia => !franquia.gerenciavel);
    }

    franquiasFiltradas = resultado;
    buscarFranquias();
}

// Função para filtrar franquias por estado
function filtrarPorEstado(estado) {
    filtroEstado = estado;
    aplicarFiltros();
    destacarBotao(botoesFiltroEstado, `filtro${estado}`);
}

// Função para filtrar franquias por gerenciabilidade
function filtrarPorGerenciavel(filtro) {
    filtroGerenciavel = filtro;
    aplicarFiltros();
    destacarBotao(botoesFiltroGerenciavel, filtro);
}

// Função para remover o filtro de estado
function limparFiltro() {
    filtroEstado = 'TODAS';
    aplicarFiltros();
    destacarBotao(botoesFiltroEstado, 'todas');
}

// Função para destacar o botão selecionado
function destacarBotao(botoes, idSelecionado) {
    botoes.forEach(botao => {
        if (botao.id === idSelecionado) {
            botao.classList.add('ativo');
        } else {
            botao.classList.remove('ativo');
        }
    });
}

// Função para mostrar os detalhes da franquia selecionada
function mostrarDetalhesFranquia(codigo) {
    const franquia = franquias.find(f => f.codigo == codigo);
    if (franquia) {
        painelInformacoes.innerHTML = `
            <h2>${franquia.cidade}</h2>
            <p><strong>${franquia.modelo}</strong></p>
            <p><strong>Estado:</strong> ${franquia.estado}</p>
            <p><strong>Informações:</strong> ${franquia.info}</p>
        `;
    }
}

// Adiciona event listeners para interação do usuário
entradaPesquisa.addEventListener('input', buscarFranquias);
listaFranquias.addEventListener('change', (e) => {
    mostrarDetalhesFranquia(e.target.value);
});
botoesFiltroEstado.forEach(botao => {
    botao.addEventListener('click', () => {
        if (botao.id === 'todas') {
            limparFiltro();
        } else {
            filtrarPorEstado(botao.id.replace('filtro', ''));
        }
    });
});
botoesFiltroGerenciavel.forEach(botao => {
    botao.addEventListener('click', () => {
        filtrarPorGerenciavel(botao.id);
    });
});

// Exibe a lista inicial de franquias
preencherLista(franquias);
