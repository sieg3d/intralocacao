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
        <br>✳️️CAUÇÃO R$400,00 POR 150
        <br>✳️️Locação sem burocracias e com preço justo ⚖️
        <br>✳️️Todos os veículos São do ano 2023/23 0 km
        <br>✳️️PARA RETIRADA = CAUÇÃO + SEMANA DO PLANO`
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
        <br>✳️️PARA RETIRADA = CAUÇÃO + SEMANA DO PLANO
        <br>✳️️Locação sem burocracias e com preço justo ⚖️`
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
        <br>✳️️PARA RETIRADA = CAUÇÃO + SEMANA DO PLANO`
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
        <br>✳️️CAUÇÃO R$500,00
        <br>✳️️PARA RETIRADA = CAUÇÃO + SEMANA DO PLANO`
    },

    {
        codigo: 6,
        modelo: "HONDA CG 160 START",
        gerenciavel: false,
        cidade: "Belo Horizonte (BERNARDO)",
        estado: "MG",
        info: `
        <br>✅SEMESTRAL - R$ 244,30 a semana  (diária 34,90)
        <br>✳️️Manutencão preventiva e do dia a dia por nossa conta (exceto mau uso e quebra, batida, multa, gasolina, lâmpadas e troca de pneu)
        <br>✅ANUAL - R$ 244,30 a semana  (diária 34,90)
        <br>✳️️Manutencão preventiva e do dia a dia por nossa conta (exceto mau uso e quebra, batida, multa, gasolina, lâmpadas e troca de pneu)
        <br>✅Plano FIDELIDADE (Onde a Moto é sua no final de 28 meses)- R$ 384,30 a semana (diária 54,90)
        <br>✳️️Manutencão preventiva e do dia a dia por nossa conta (exceto mau uso e quebra, batida, multa, gasolina, lâmpada e troca de pneu)
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
        <br>✳️️Locação sem burocracias e com preço justo ⚖️`
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
        <br>✳️️PARA RETIRADA = CAUÇÃO + SEMANA DO PLANO`
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

    {
        codigo: 14,
        modelo: "Honda CG 160 Start",
        gerenciavel: false,
        cidade: "Belo Horizonte (WILLIAM)",
        estado: "MG",
        info: `
        <br>✅Plano FIDELIDADE (Onde a Moto é sua no final de 28 meses)- R$419,30 a semana (diária 59,90) 
        <br>✳️Manutencão preventiva e do dia a dia por nossa conta (exceto mau uso e quebra, batida, multa, gasolina, lâmpada)
        <br>✅ ANUAL - R$ 279,30 a semana  (diária 39,90) 
        <br>✳️Manutencão preventiva e do dia a dia por nossa conta (exceto mau uso e quebra, batida, multa, gasolina, lâmpada)
        <br>✅Caução = R$ 700,00
        <br>✳️Locação sem burocracias e com preço justo ⚖
        <br>✳️IPVA por nossa conta
        <br>✳️Seguro por nossa conta
        <br>Quilometragem máxima mês 6000km.
        <br>✳️PAGAMENTOS SEMANAIS`
    },

    {
        codigo: 15,
        modelo: "SUZUKI DK 150",
        gerenciavel: false,
        cidade: "Belo Horizonte (WANDER)",
        estado: "MG",
        info: `
        <br>1️⃣ Plano Anual Smart
        <br>Para aqueles que estão iniciando no ramo com ambição de alcançar novos horizontes, utilizando uma ferramenta segura e confiável.
        <br>* 📆 Diária: R$35,90
        <br>* 💰 Valor Semanal: R$251,30
        <br>* 💳 Caução: R$700,00 à vista
        <br>* Limite de 3500 Km por mês
        <br>
        <br>2️⃣ Plano Anual
        <br>Pensado para quem irá trabalhar com a moto por mais tempo, pagando um valor mais em conta na diária do aluguel.
        <br>* 📆 Diária: R$39,90
        <br>* 💰 Valor Semanal: R$279,30
        <br>* 💳 Caução: R$700,00 à vista
        <br>* Limite de 5000 Km por mês
        <br>
        <br>3️⃣ Plano Fidelidade - 30 Meses
        <br>Após 30 meses a moto é sua‼️
        <br>Feito para quem almeja trabalhar e ao mesmo tempo conquistar o bem para si (mesmo com o nome sujo ou outras restrições), pois, ao final do contrato, A MOTO É SUA!
        <br>* 📆 Diária: R$49,90
        <br>* 💰 Valor Semanal: R$349,30
        <br>* 💳 Caução: R$700,00 à vista
        <br>* Limite de 6000 Km por mês
        <br>
        <br>⚠️ EM QUALQUER PLANO É COBRADO A TAXA DE R$0,39 POR KM EXCEDENTE!
        <br>
        <br>🔹 O pagamento é realizado semanalmente!`
    },

    {
        codigo: 16,
        modelo: "WORKER 125",
        gerenciavel: false,
        cidade: "Santos",
        estado: "SP",
        info: `
        <br>✅Plano Mensal - R$251,30 SEMANAL (diária 35,90)
        <br>✅Plano Anual - R$ 237,30 SEMANAL(diária 33,90)
        <br>✅Plano Fidelidade 24 MESES-R$293,30 SEMANAL (diária 41,90)
        <br>CAUÇÃO R$400,00
        <br>PARA RETIRADA = CAUÇÃO + SEMANA DO PLANO
        <br>✳️Locação sem burocracias e com preço justo ⚖️`
    },

    {
        codigo: 17,
        modelo: "WORKER 125 (SEM MANUTENÇÃO INCLUSO)",
        gerenciavel: false,
        cidade: "Santos",
        estado: "SP",
        info: `
        <br>✅Plano Mensal - R$199,00 SEMANAL (diária 28,42)
        <br>✅Plano Anual - R$ 237,30 SEMANAL(diária 25,57)
        <br>✅Plano Fidelidade 12 MESES-R$300,30 SEMANAL (diária 42,90)
        <br>CAUÇÃO R$400,00
        <br>PARA RETIRADA = CAUÇÃO + SEMANA DO PLANO
        <br>✳️Locação sem burocracias e com preço justo ⚖️
        <br>PARA RETIRADA = CAUÇÃO + SEMANA DO PLANO`
    },

    {
        codigo: 18,
        modelo: "WORKER 125 / WORKER 150",
        gerenciavel: false,
        cidade: "Zona Oeste (RAFAEL E DANI)",
        estado: "SP",
        info: `
        <br>✅Plano Mensal - R$258,30 SEMANAL (diária 36,90)
        <br>✅Plano Anual - R$ 251,30 SEMANAL(diária 35,90)
        <br>✅Plano Fidelidade 24 MESES-R$335,30 SEMANAL  (diária 47,90)
        <br>✳️ Após os 24 meses a moto é sua.
        <br>✅Caução = 700,00`
    },

    {
        codigo: 19,
        modelo: "SUZUKI DK 150",
        gerenciavel: false,
        cidade: "Jundiaí (LICIANE E GÉSIO)",
        estado: "SP",
        info: `
        <br>✅Plano Mensal - R$ 300,30 SEMANAL (diária 42,90)
        <br>✅Plano Anual - R$ 349,30  SEMANAL(diária 49,90)
        <br>✅Plano Fidelidade- R$ 419,30 SEMANAL (59,90 diária)
        <br>CAUÇÃO R$700,00
        <br>✳️PARA RETIRADA = CAUÇÃO + SEMANA DO PLANO`
    },

    {
        codigo: 20,
        modelo: "JEF 150cc",
        gerenciavel: false,
        cidade: "Sorocaba",
        estado: "SP",
        info: `
        <br>✅ Mensal - R$ 279,30 Semanal (diária 39,90)
        <br>✅ Anual - R$ 258,30 Semanal (diária 36,90)
        <br>✅ Plano Fidelidade - R$ 377,30 Semanal (diária 53,90)
        <br>✅ Caução =700,00
        <br>✅ PARA RETIRADA : CAUÇÃO + A PRIMEIRA SEMANA`
    },

    {
        codigo: 21,
        modelo: "SUZUKI DK 150",
        gerenciavel: false,
        cidade: "Limeira",
        estado: "SP",
        info: `
        <br>✅ Mensal - R$ 279,30 Semanal (diária 39,90)
        <br>✅ Anual - R$ 258,30 Semanal (diária 36,90)
        <br>✅ Plano Fidelidade - R$ 377,30 Semanal (diária 53,90)
        <br>✅ Caução =700,00
        <br>✅ PARA RETIRADA : CAUÇÃO + A PRIMEIRA SEMANA`
    },

    {
        codigo: 22,
        modelo: "SHI 175",
        gerenciavel: false,
        cidade: "Piracicaba",
        estado: "SP",
        info: `
        <br>✅Plano Mensal - R$ 286,30 SEMANAL (40,90 diária)
        <br>✅Plano Anual - R$ 265,30 SEMANAL (37,90 diária)
        <br>✅Plano Fidelidade- 24 meses R$ 370,30 SEMANAL (52,90 diária)
        <br>✅Plano Fidelidade- 28 meses R$ 317,40 SEMANAL (45,40 diária)
        <br>CAUÇÃO R$700,00
        <br>✳️PARA RETIRADA = CAUÇÃO + SEMANA DO PLANO`
    },

    {
        codigo: 23,
        modelo: "SUZUKI DK 150",
        gerenciavel: false,
        cidade: "Piracicaba",
        estado: "SP",
        info: `
        <br>✅Plano Mensal - R$ 272,30 SEMANAL (38,90 diária)
        <br>✅Plano Anual - R$ 251,30 SEMANAL (35,90 diária)
        <br>✅Plano Fidelidade- 24 meses R$ 363,30 SEMANAL (51,90 diária)
        <br>✅Plano Fidelidade- 28 meses R$ 311,40 SEMANAL (44,50 diária)
        <br>CAUÇÃO R$700,00
        <br>✳️PARA RETIRADA = CAUÇÃO + SEMANA DO PLANO`
    },

    {
        codigo: 24,
        modelo: "CHOPPER 150",
        gerenciavel: false,
        cidade: "Piracicaba",
        estado: "SP",
        info: `
        <br>✅Plano Mensal - R$ 251,30 SEMANAL (35,90 diária)
        <br>✅Plano Anual - R$ 237,30 SEMANAL (33,90 diária)
        <br>✅Plano Fidelidade- 24 meses R$ 342,30 SEMANAL (48,90 diária)
        <br>✅Plano Fidelidade- 28 meses R$ 293,40 SEMANAL (41,90 diária)
        <br>CAUÇÃO R$700,00
        <br>✳️PARA RETIRADA = CAUÇÃO + SEMANA DO PLANO`
    },

    {
        codigo: 25,
        modelo: "SUZUKI DK 150",
        gerenciavel: false,
        cidade: "Guarulhos",
        estado: "SP",
        info: `
        <br>✅Plano Mensal - R$ 272,30 SEMANAL (38,90 diárias)
        <br>✅Plano Anual - R$ 251,30 SEMANAL (35,90 diárias)
        <br>✅Plano Fidelidade- 24 meses R$ 363,30 SEMANAL (51,90 diária)
        <br>CAUÇÃO R$700,00
        <br>✳️PARA RETIRADA = CAUÇÃO + SEMANA DO PLANO`
    },

    {
        codigo: 26,
        modelo: "WORKER 125",
        gerenciavel: false,
        cidade: "Praia Grande (LUCIANO)",
        estado: "SP",
        info: `
        <br>✅Plano Mensal - R$209,30 SEMANAL (diária 29,90)
        <br>✅Plano Anual - R$ 181,30 SEMANAL (diária 25,90)
        <br>✅Plano Fidelidade 24 MESES - R$230,30 SEMANAL  (diária 32,90)
        <br>CAUÇÃO R$ 500,00
        <BR>PARA RETIRADA = CAUÇÃO + SEMANA DO PLANO`
    },

    {
        codigo: 27,
        modelo: "WORKER 125",
        gerenciavel: false,
        cidade: "Sertãozinho (ANTONIO ANGELO)",
        estado: "SP",
        info: `
        <br>✅Plano Mensal - R$279,30 SEMANAL (diária 39,90)
        <br>✅Plano Anual - R$ 244,30 SEMANAL(diária 34,90)
        <br>✅Plano Fidelidade 24 MESES - R$314,30 SEMANAL (diária 44,90)`
    },

    {
        codigo: 28,
        modelo: "WORKER 150",
        gerenciavel: false,
        cidade: "Sertãozinho (ANTONIO ANGELO)",
        estado: "SP",
        info: `
        <br>✅Plano Mensal - R$279,30 SEMANAL (diária 39,90)
        <br>✅Plano Anual - R$ 314,30 SEMANAL(diária 44,90)
        <br>✅Plano Fidelidade 24 MESES - R$349,30 SEMANAL (diária 49,90)`
    },

    {
        codigo: 29,
        modelo: "JEF 150cc",
        gerenciavel: false,
        cidade: "Araraquara (EDUARDO LEITE)",
        estado: "SP",
        info: `
        <br>✅Plano Mensal - R$286,30 SEMANAL (diária 40,90)
        <br>✅Plano Anual - R$ 265,30 SEMANAL(diária 37,90)
        <br>✅Plano Fidelidade 24 MESES - R$321,30 SEMANAL (diária 45,90)
        <br>CAUÇÃO R$500,00`
    },

    {
        codigo: 30,
        modelo: "SHI 175",
        gerenciavel: false,
        cidade: "Araraquara (EDUARDO LEITE)",
        estado: "SP",
        info: `
        <br>✅Plano Mensal - R$300,30 SEMANAL (diária 42,90)
        <br>✅Plano Anual - R$ 279,30 SEMANAL(diária 39,90)
        <br>✅Plano Fidelidade 24 MESES - R$384,30 SEMANAL (diária 54,90)
        <br>CAUÇÃO R$500,00
        <br>PARA RETIRADA = CAUÇÃO + SEMANA DO PLANO`
    },

    {
        codigo: 31,
        modelo: "JEF 150cc",
        gerenciavel: false,
        cidade: "Suzano",
        estado: "SP",
        info: `
        <br>✅Mensal - R$ 279,30 Semanal (diária 39,90)
        <br>✅Anual - R$ 258,30 Semanal (diária 36,90)
        <br>✅Plano Fidelidade - R$ 377,30 Semanal (diária 53,90)
        <br>✅Caução=700,00
        <br>✅PARA RETIRADA: CAUÇÃO + A PRIMEIRA SEMANA`
    },

    {
        codigo: 32,
        modelo: "SUZUKI DK 150",
        gerenciavel: false,
        cidade: "São José dos Campos (CARLA)",
        estado: "SP",
        info: `
        <br>✅ Plano Mensal
        <br>Com pagamento R$272,30 SEMANAL
        <br>(diária 38,90)
        <br>Para retirar a moto precisa para o caução de R$700,00 + o valor semanal
        <br>
        <br>✅ Plano Anual
        <br>Com pagamento R$ 251,30 SEMANAL
        <br>(diária 35,90)
        <br>Para retirar a moto precisa para o caução de R$700,00 + o valor semanal
        <br>
        <br>✅ Plano Fidelidade 24 MESES
        <br>Com pagamento R$363,30 SEMANAL
        <br>ao final deste plano * a Moto é SUA * !!
        <br>Para retirar a moto precisa para o caução de R$700,00 + o valor semanal
        <br>(diária 51,90)`
    },

    {
        codigo: 33,
        modelo: "SUZUKI DK 150",
        gerenciavel: false,
        cidade: "Mauá (EDUARDO)",
        estado: "SP",
        info: `
        <br>✅Plano Mensal - R$272,30 SEMANAL (diária 38,90)
        <br>✅Plano Anual - R$ 251,30 SEMANAL(diária 35,90)
        <br>✅Plano Fidelidade 24 MESES-R$363,30 SEMANAL (diária 51,90)
        <br>CAUÇÃO R$700,00`
    },

    {
        codigo: 34,
        modelo: "SUZUKI DK 150",
        gerenciavel: false,
        cidade: "Santo André (RENATO)",
        estado: "SP",
        info: `
        <br>✅Plano Mensal - R$272,30 SEMANAL (diária 38,90)
        <br>✅Plano Anual - R$ 251,30 SEMANAL(diária 35,90)
        <br>✅Plano Fidelidade 24 MESES-R$363,30 SEMANAL (diária 51,90)
        <br>CAUÇÃO R$700,00`
    },

    {
        codigo: 35,
        modelo: "FACTOR / SUZUKI DK 160 / SHI 175",
        gerenciavel: false,
        cidade: "São Paulo (SEDE)",
        estado: "SP",
        info: `
        <br>✔ Anual - R$ 300,30 por semana (diária 42,90)
        <br>✔ Plano Fidelidade - R$ 412,30 por semana (diária 58,90)
        <br>✔ Caução - R$800,00 FACTOR
        <br>✔ Caução - R$500`
    },

    {
        codigo: 36,
        modelo: "CHOPPER 150",
        gerenciavel: false,
        cidade: "São Paulo (SEDE)",
        estado: "SP",
        info: `
        <br>✅Mensal - R$ 300,30 por semana (diária 42,90)
        <br>✅Anual - R$ 279,30 por semana (diária 39,90)
        <br>✅Plano Fidelidade - R$ 398,30 por semana (diária 56,90)
        <br>✅Caução=  700,00
        <br>PARA RETIRADA = CAUÇÃO + SEMANA DO PLANO`
    },

    {
        codigo: 37,
        modelo: "JEF 150 / SUZUKI DK 150",
        gerenciavel: false,
        cidade: "São Paulo (SEDE)",
        estado: "SP",
        info: `
        <br>Anual - R$ 279,30 SEMANAL (diária 39,90)
        <br>Plano Fidelidade - R$ 398,30 SEMANAL (diária 56,90)
        <br>✅ Caução = R$500,00
        <br>PARA RETIRADA = CAUÇÃO + SEMANA DO PLANO`
    },

    {
        codigo: 38,
        modelo: "WORKER 125",
        gerenciavel: false,
        cidade: "São Paulo (SEDE)",
        estado: "SP",
        info: `
        <br>✅Mensal - R$258,30 SEMANAL (diária 36,90)
        <br>✅Anual - R$209,30 SEMANAL (diária 29,90)
        <br>✅Plano Fidelidade 28 MESES- R$244,30 SEMANAL (diária 34,90)
        <br>✅Caução=300,00
        <br>PARA RETIRADA = CAUÇÃO + SEMANA DO PLANO`
    },

    {
        codigo: 39,
        modelo: "SUZUKI DK 150 / JEF 150",
        gerenciavel: false,
        cidade: "São Paulo (EMMANUEL)",
        estado: "SP",
        info: `
        <br>Mensal - R$300,30 SEMANAL (diária 42,90)
        <br>Anual - R$ 279,30 SEMANAL (diária 39,90)
        <br>Plano Fidelidade - R$ 398,30 SEMANAL (diária 56,90)
        <br>✅ Caução = R$700,00
        <br>PARA RETIRADA = CAUÇÃO + SEMANA DO PLANO`
    },

    {
        codigo: 40,
        modelo: "SUZUKI DK 160 / FACTOR 150",
        gerenciavel: false,
        cidade: "São Paulo (EMMANUEL)",
        estado: "SP",
        info: `
        <br>Mensal - R$321,30 SEMANAL (diária 45,90)
        <br>Anual - R$ 300,30 SEMANAL (diária 42,90)
        <br>Plano Fidelidade - R$ 412,30 SEMANAL (diária 58,90)
        <br>✅ Caução = R$700,00
        <br>PARA RETIRADA = CAUÇÃO + SEMANA DO PLANO`
    },

    {
        codigo: 41,
        modelo: "SHI 175",
        gerenciavel: false,
        cidade: "Belo Horizonte (BRAULIO)",
        estado: "MG",
        info: `
        <br>✅Plano Mensal - R$314,30 Semanal (diária 44,90)
        <br>✅Plano Anual - R$ 293,30 Semanal (41,90)
        <br>✅Plano Fidelidade - (24 meses) R$ 405,30 Semanal (diária 57,90)
        <br>
        <br>✅ CAUÇÃO=700,00
        <br>PARA RETIRADA = CAUÇÃO + SEMANA DO PLANO`
    },

    {
        codigo: 42,
        modelo: "JEF 150",
        gerenciavel: false,
        cidade: "Maceió (JOSE FLAVIO)",
        estado: "AL",
        info: `
        <br>Temos 2 opções de planos com manutenção preventiva e proteção com rastreador inclusa e 6000 kms livres por mês
        <br>
        <br>✅trimestral - R$ 265,30 Semanal (diária 37,90)
        <br>✅mensal - R$ 279,30 Semanal (diária 39,90)
        <br>✅fidelidade- R$ 377,30 semanal
        <br>(diária 53,90)
        <br>✅ CAUÇÃO=700,00
        <br>✳️Locação sem burocracias e com preço justo ⚖️
        <br>Todas as motos são novas ano modelo 2023/2024
        <br>✅ Não consultamos Serasa ou SPC.
        <br>✳️PARA RETIRADA = CAUÇÃO + SEMANA DO PLANO`
    },

    {
        codigo: 43,
        modelo: "FACTOR 150",
        gerenciavel: false,
        cidade: "Maceió",
        estado: "AL",
        info: `
        <br>✅ Mensal - R$314,30 SEMANAL (diária 44,90)
        <br>✅ Anual - R$ 258,30 SEMANAL (diária 39,90)
        <br>✅ Fidelidade- R$ 391,30 SEMANAL (diária 55,90)
        <br>✅Caução=700,00
        <br>✳️Locação sem burocracias e com preço justo ⚖️
        <br>✳️PARA RETIRADA = CAUÇÃO + SEMANA DO PLANO`
    },

    {
        codigo: 44,
        modelo: "WORKER 125",
        gerenciavel: false,
        cidade: "Juazeiro do Norte",
        estado: "CE",
        info: `
        <br>✅PLANO 7 dias R$230,30 (diária R$ 32,90)
        <br>✅Plano Quinzenal R$523,50 (diária R$ 34,90)
        <br>✅PLano Mensal - R$ 195,30 Semanal (diária 27,90)
        <br>✅PLano Anual - R$ 153,30 Semanal (diária 21,90)
        <br>✅Plano Fidelidade - (24 meses) R$ 209,30 Semanal (diária 29,90)
        <br>✅ CAUÇÃO= 400 diluindo o caução nas 2 primeiras semanas .
        <br>✳️PARA RETIRADA = CAUÇÃO + SEMANA DO PLANO`
    },

    {
        codigo: 45,
        modelo: "",
        gerenciavel: false,
        cidade: "Ilheus (RAPHAEL)",
        estado: "BA",
        info: `
        <br>✅Mensal - R$ 314,30 por semana (diária 44,90)
        <br>✅Anual - R$ 293,30 por semana (diária 41,90)
        <br>✅Plano Fidelidade - R$ 398,30 por semana (diária 56,90)
        <br>
        <br>CAUÇÃO:  R$ 700,00
        <br>PARA RETIRADA: CAUÇÃO + SEMANA DO PLANO*`
    },

    {
        codigo: 46,
        modelo: "WORKER 125",
        gerenciavel: false,
        cidade: "Alagoinhas",
        estado: "BA",
        info: `
        <br>✅Plano Mensal - R$209,30 Semanal (diária 29,90)
        <br>✅Plano Anual - R$ 195,30 Semanal (diária 27,90)
        <br>✅Plano Fidelidade 24 MESES - R$265,30 Semanal (diária 37,90)
        <br>✅Caução= R$ 400,00
        <br>✳️PARA RETIRADA = CAUÇÃO + SEMANA DO PLANO
        <br>✳️Locação sem burocracias e com preço justo ⚖️`
    },

    {
        codigo: 47,
        modelo: "WORKER 125",
        gerenciavel: false,
        cidade: "Feira de Santana",
        estado: "BA",
        info: `
        <br>✅Mensal - R$ 230,30 Semanal (diária 32,90)
        <br>✅Anual - R$ 209,30 Semanal (diária 29,90)
        <br>✅Plano Fidelidade - (24 meses) R$ 265,30 Semanal (diária 37,90)
        <br>✅ CAUÇÃO=500,00
        <br>FORMA DE PAGAMENTO: PIX E DINHEIRO (CARTÃO CRÉDITO COM ACRESCIMO)
        <br>✳️PARA RETIRADA = CAUÇÃO + SEMANA DO PLANO`
    },

    {
        codigo: 49,
        modelo: "JEF 150",
        gerenciavel: false,
        cidade: "Aracaju (ASLAN E GERSON)",
        estado: "SE",
        info: `
        <br>✅Plano Fidelidade - R$377,30 SEMANAL (diária 53,90)
        <br>✅Caução=R$600,00
        <br>✳️PARA RETIRADA = CAUÇÃO + SEMANA DO PLANO
        <br>
        <br>*Toda manutenção , troca de óleo, IPVA , seguro é por nossa conta. (Exceto a troca de pneus).`
    },

    {
        codigo: 50,
        modelo: "SHI 175",
        gerenciavel: false,
        cidade: "João Pessoa (JAIRO)",
        estado: "PB",
        info: `
        <br>✅Plano Fidelidade - R$: 398,30 Semanal (diária 56,90)
        <br>✅Caução de R$ 700,00
        <br>✳️PARA RETIRADA = CAUÇÃO + SEMANA DO PLANO`
    },

    {
        codigo: 51,
        modelo: "JEF 150",
        gerenciavel: false,
        cidade: "João Pessoa (JAIRO)",
        estado: "PB",
        info: `
        <br>✅Plano Fidelidade - R$: 370,30 Semanal (diária 52,90)
        <br>✅Caução de R$ 700,00
        <br>✳️PARA RETIRADA = CAUÇÃO + SEMANA DO PLANO`
    },

    {
        codigo: 52,
        modelo: "JEF 150",
        gerenciavel: false,
        cidade: "João Pessoa (JAIRO)",
        estado: "PB",
        info: `
        <br>✅Plano Fidelidade - R$: 370,30 Semanal (diária 52,90)
        <br>✅Caução de R$ 700,00
        <br>✳️PARA RETIRADA = CAUÇÃO + SEMANA DO PLANO`
    },

    {
        codigo: 53,
        modelo: "Suzuki DK 160",
        gerenciavel: false,
        cidade: "Recife (MADSON)",
        estado: "PE",
        info: `
        <br>✅Plano Mensal - R$272,30SEMANAL (diária 38,90)
        <br>✅Plano Anual - R$ 251,30 SEMANAL(diária 35,90)
        <br>✅Plano Fidelidade 24 MESES R$363,30 -SEMANAL  (diária 51,90)
        <br>CAUÇÃO R$600,00
        <br>PARA RETIRADA = CAUÇÃO + SEMANA DO PLANO
        <br>✳️Locação sem burocracias e com preço justo ⚖️`
    },

    {
        codigo: 54,
        modelo: "FACTOR 150",
        gerenciavel: false,
        cidade: "Recife (ALISON)",
        estado: "PE",
        info: `
        <br>✅Mensal - R$ 279,30 Semanal (diária 39,90) **
        <br>✅Anual - R$ 258,30 (diária 36,90) **
        <br>✅Plano Fidelidade - R$ 384,30 (diária 54,90) **
        <br>✅Caução = 600,00`
    },

    {
        codigo: 55,
        modelo: "JEF 150 / SUZUKI DK 150",
        gerenciavel: false,
        cidade: "Teresina",
        estado: "PI",
        info: `
        <br>💲 Taí os preços de nossas locações da JEF 150 e DK 150, com valor da diária em:
        <br>
        <br>👉🏻Para o Plano Anual, a semana será R$ 272,30
        <br>👉🏻Para o Plano Fidelidade, a semana será R$ 363,30 (a moto é sua no final de 28 meses)
        <br>
        <br>CAUÇÃO R$750,00 (Pode ser divido em 3x de 250,00 nas semanas primeiras 3 semanas)
        <br>
        <br>PARA RETIRADA = CAUÇÃO + SEMANA DO PLANO
        <br>
        <br>O que está incluso? IPVA, trocas de óleo, seguro, rastreamento, bloqueio e todas as manutenções preventivas (revisões).
        <br>
        <br>⚠️⚠️⚠️ Preços válidos para os meses de JUNHO e JULHO`
    },

    {
        codigo: 56,
        modelo: "JEF 150",
        gerenciavel: false,
        cidade: "São Caetano do Sul (FELIPE AGUILLAR AMARAL)",
        estado: "SP",
        info: `
        <br>✅Mensal - R$ 279,30 Semanal (diária 39,90)
        <br>✅Anual - R$ 258,30 Semanal (diária 36,90)
        <br>✅Plano Fidelidade - R$ 377,30 Semanal (diária 53,90) – 24 Meses
        <br>✅Caução - R$ 700,00 Pix`
    },

    {
        codigo: 57,
        modelo: "WORKER 125",
        gerenciavel: false,
        cidade: "São José / Florianópolis (DANIEL SEVERO)",
        estado: "SC",
        info: `
        <br>✅Mensal - 251,30 Semanal (diária 35,90)
        <br>✅Anual - R$ 237,30 Semanal (diária 33,90)
        <br>✅Plano Fidelidade - R$ 293,30 Semanal (diária 41,90)
        <br>✅Caução=500,00
        <br>✳️PARA RETIRADA = CAUÇÃO + SEMANA DO PLANO`
    },

    {
        codigo: 58,
        modelo: "WORKER 125 / 150",
        gerenciavel: false,
        cidade: "Itajaí (DANILO)",
        estado: "SC",
        info: `
        <br><b>SOMENTE A 150 DISPONIVEL</b>
        <br>✅Plano Mensal - R$251,30 SEMANAL (diária 35,90)
        <br>✅Plano Anual - R$ 230,30 SEMANAL(diária 32,90)
        <br>✅Plano Anual SEM MANUTENÇÃO - R$ 188,30 SEMANAL(diária 26,90) -  limite de 2.000 km/mês
        <br>✅Plano Fidelidade 24 MESES - R$279,30 SEMANAL  (diária 39,90)`
    },

    {
        codigo: 59,
        modelo: "SUZUKI DK 150",
        gerenciavel: false,
        cidade: "Jaraguá do SUl (DANILO)",
        estado: "SC",
        info: `
        <br>✅Plano Mensal - R$307,30 SEMANAL (diária 43,90)
        <br>✅Plano Anual - R$ 279,30 SEMANAL(diária 39,90)
        <br>✅Plano Fidelidade 24 MESES-R$384,30 SEMANAL (diária 54,90)
        <br>CAUÇÃO R$700,00
        <br>✳️Locação sem burocracias e com preço justo ⚖️
        <br>Todos os veículos São do ano 2024/25 0 km
        <br>✳️PARA RETIRADA = CAUÇÃO + SEMANA DO PLANO`
    },

    {
        codigo: 60,
        modelo: "WORKER 125",
        gerenciavel: false,
        cidade: "Curitiba (PAULO)",
        estado: "PR",
        info: `
        <br>✅Plano Mensal - R$ 230,30 SEMANAL (diária 32,90)
        <br>✅Plano Anual - R$ 181,30 SEMANAL(diária 25,90)
        <br>✅Plano Fidelidade 24 MESES - R$ 293,30 SEMANAL  (diária 41,90)
        <br>
        <br>CAUÇÃO:  R$500,00
        <br>
        <br>PARA RETIRADA: CAUÇÃO + SEMANA DO PLANO`
    },

    {
        codigo: 61,
        modelo: "SUZUKI DK",
        gerenciavel: false,
        cidade: "Londrina (JOÃO RICARDO)",
        estado: "PR",
        info: `
        <br>✅Plano Mensal - R$272,30 SEMANAL (diária 38,90)
        <br>✅Plano Anual - R$ 251,30 SEMANAL(diária 35,90)
        <br>✅Plano Fidelidade 30 MESES - R$349,30 SEMANAL  (diária 49,90)
        <br>
        <br>CAUÇÃO R$700,00.`
    },

    {
        codigo: 62,
        modelo: "WORKER 125",
        gerenciavel: false,
        cidade: "Passo Fundo",
        estado: "RS",
        info: `
        <br>✅Mensal - R$258,30 valor semanal (diária 36,90)
        <br>✅Anual - R$230,30 valor semanal (diária 32,90)
        <br>✅Plano Fidelidade - R$328,30 valor semanal (diária 46,90)
        <br>✅CAUÇÃO -R$600,00
        <br>PARA RETIRADA = CAUÇÃO + SEMANA DO PLANO QUE VOCÊ ESCOLHER`
    },

    {
        codigo: 63,
        modelo: "SHI 175",
        gerenciavel: false,
        cidade: "Passo Fundo",
        estado: "RS",
        info: `
        <br>✅ Mensal- R$ 328,30 valor semanal (diária 46,90)
        <br>✅Anual-R$314,30 valor semanal (diária 44,90 )
        <br>✅Plano Fidelidade -28 meses R$419,30 valor semanal (diária 59,90)
        <br>✅CAUÇÃO -R$600,00
        <br>PARA RETIRADA = CAUÇÃO + SEMANA DO PLANO QUE VOCÊ ESCOLHER`
    },

    {
        codigo: 64,
        modelo: "WORKER 125",
        gerenciavel: false,
        cidade: "Belém (BRENO NAVARRO)",
        estado: "PA",
        info: `
        <br>✅Mensal - R$ 258,30 Semanal (diária 36,90)
        <br>✅Anual - R$ 244,30 Semanal (diária 34,90)
        <br>✅Plano Fidelidade - (24 meses) R$ 300,30 Semanal (diária 42,90)
        <br>✅ CAUÇÃO=600,00
        <br>
        <br>✳️PARA RETIRADA = CAUÇÃO + SEMANA DO PLANO`
    },

    {
        codigo: 65,
        modelo: "WORKER 125",
        gerenciavel: false,
        cidade: "Natal",
        estado: "RN",
        info: `
        <br>✅Mensal - R$ 230,30 Semanal (diária 32,90)
        <br>✅Anual - R$ 209,30 Semanal (diária 29,90)
        <br>✅Plano Fidelidade - (24 meses) R$ 265,30 Semanal (diária 37,90)
        <br>✅ CAUÇÃO=500,00
        <br>FORMA DE PAGAMENTO: PIX E DINHEIRO (CARTÃO CRÉDITO COM ACRESCIMO)
        <br>✳️PARA RETIRADA = CAUÇÃO + SEMANA DO PLANO`
    },

    {
        codigo: 66,
        modelo: "SUZUKI DK 150",
        gerenciavel: false,
        cidade: "Porto Velho",
        estado: "RO",
        info: `
        <br>✅Plano Mensal - R$300,30 SEMANAL (diária 42,90)
        <br>✅Plano Anual - R$ 279,90 SEMANAL(diária 39,90)
        <br>✅Plano Fidelidade 28 MESES 398,30 -SEMANAL  (diária 56,90)
        <br>✅CAUÇÃO R$700,00 POR R$:450,00`
    },

    {
        codigo: 67,
        modelo: "SUZUKI DK 150",
        gerenciavel: false,
        cidade: "Brasília (DANIEL)",
        estado: "RO",
        info: `
        <br>✅ Mensal - R$ 300,30 Semanal (diária 42,90)
        <br>✅ Anual - R$ 279,30 semanal (diária 39,90)
        <br>✅ Plano Fidelidade - R$ 398,30 Semanal (diária 56,90)
        <br>✅Caução = 700,00`
    },

    {
        codigo: 68,
        modelo: "JEF 150",
        gerenciavel: false,
        cidade: "Brasília (SAMUEL)",
        estado: "RO",
        info: `
        <br>✅ Anual - R$ 258,30 semanal (diária 36,90)
        <br>✅ Plano Fidelidade - R$ 377,30 Semanal (diária 53,90)
        <br>
        <br>✅Caução 700,00`
    },

    {
        codigo: 69,
        modelo: "JEF 150",
        gerenciavel: false,
        cidade: "Luziania",
        estado: "GO",
        info: `
        <br>✅Plano ANUAL- R$258,30 SEMANAL (diária 36,90)
        <br>✅Plano Fidelidade (28 meses)- R$350,00 SEMANAL (diária 50,00)
        <br>✅Caução = 700,00
        <br>✳️Locação sem burocracias e com preço justo ⚖️`
    },

    {
        codigo: 70,
        modelo: "CG START 160",
        gerenciavel: false,
        cidade: "Luziania",
        estado: "GO",
        info: `
        <br>✅Plano Fidelidade (28 meses)- R$385,00 SEMANAL (diária 55,00)
        <br>✅Caução = 700,00
        <br>✳️Locação sem burocracias e com preço justo ⚖️
        <br>Todos os veículos São do ano 2023/24 É 0 km`
    },

    {
        codigo: 71,
        modelo: "JEF 150",
        gerenciavel: false,
        cidade: "Lucas do Rio Verde",
        estado: "MT",
        info: `
        <br>✅Mensal - R$ 1.197,00 (diária 39,90)
        <br>✅Anual - R$ 1.107,00 (diária 36,90)
        <br>✅Plano Fidelidade - R$ 1.557,00(diária 51,90)
        <br>✅Caução=700,00`
    },

    {
        codigo: 72,
        modelo: "SUZUKI DK 150",
        gerenciavel: false,
        cidade: "Rondonópolis",
        estado: "MT",
        info: `
        <br>✅Plano Mensal – R$300,30 SEMANAL (diária 42,90)
        <br>✅Plano Anual - R$ 279,30 SEMANAL (diária 39,90)
        <br>✅Plano Fidelidade 24 MESES - R$ 363,30 SEMANAL (diária 51,90)
        <br>✅CAUÇÃO R$500,00
        <br>✳️Locação sem burocracias e com preço justo ⚖️
        <br>Todos os veículos São do ano 2024/25 0 km`
    },

    {
        codigo: 73,
        modelo: "JEF 150",
        gerenciavel: false,
        cidade: "Campo Grande",
        estado: "MS",
        info: `
        <br>✅ Mensal - R$ 42.71
        <br>Pagamento Retirada
        <br>7 diárias R$ 299,00
        <br>Caução R$ 450,00
        <br>Total R$ 750,30
        <br>
        <br>✅Anual - Diária R$ 36,43
        <br>Pagamento Retirada
        <br>7 diárias R$ 255,00
        <br>Caução R$ 450,00
        <br>Total R$ 708,30
        <br>
        <br>✅ Fidelidade 36 meses - Diária R$ 48,43
        <br>Pagamento Retirada
        <br>7 diárias R$ 342,30
        <br>Caução R$ 450,00
        <br>Total R$ 792,30
        <br>
        <br>✅ Fidelidade 24 meses - Diária R$ 57,00
        <br>Pagamento Retirada
        <br>7 diárias R$ 399,00
        <br>Caução R$ 450,00
        <br>Total R$ 849,00`
    },

    {
        codigo: 74,
        modelo: "SUZUKI DK 150",
        gerenciavel: false,
        cidade: "Campo Grande",
        estado: "MS",
        info: `
        <br>✅ Mensal - R$ 349,00(semanal)
        <br>Pagamento Retirada
        <br>7 diárias R$ 349
        <br>Caução R$ 450,00
        <br>Total R$ 799,00
        <br>
        <br>✅Anual - R$ 299,00 (semanal)
        <br>Pagamento Retirada
        <br>7 diárias R$ 299,00
        <br>Caução R$ 450,00
        <br>Total R$ 749,00
        <br>
        <br>✅ Fidelidade 36 meses - R$ 399,00 (semanal)
        <br>JÁ INCLUSO A MOTO ZERO KM
        <br>Pagamento Retirada
        <br>7 diárias R$ 399,00
        <br>Caução R$ 450,00
        <br>Total R$ 849,00
        <br>
        <br>✅ Fidelidade 24 meses - R$ 449,00 (semanal)
        <br>Duração 24 meses
        <br>7 diárias
        <br>Semana 449,00
        <br>Caução 450
        <br>Total 899,00`
    },

    {
        codigo: 75,
        modelo: "HONDA CG START 160",
        gerenciavel: false,
        cidade: "Campo Grande",
        estado: "MS",
        info: `
        <br>✅ Mensal -  R$ 349,00(semanal)
        <br>Pagamento Retirada
        <br>7 diárias R$  349
        <br>Caução R$  450,00
        <br>Total R$ 799,00
        <br>
        <br>✅Anual - R$ 299,00 (semanal)
        <br>Pagamento Retirada
        <br>7 diárias R$  299,00
        <br>Caução R$  450,00
        <br>Total R$  749,00
        <br>
        <br>✅ Fidelidade - R$ 399,00 (semanal)
        <br>JÁ INCLUSO A MOTO ZERO KM

        <br>Pagamento Retirada
        <br>Duração 36 meses
        <br>7 diárias R$  399
        <br>Caução R$  450,00
        <br>Total R$  849,00
        <br>
        <br>Pagamento Retirada
        <br>Duração 24 meses
        <br>7 diárias
        <br>Semana 449,00
        <br>Caução 450
        <br>Total 899,00`
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
    const filtradas = franquiasFiltradas.filter(franquia => normalizarString(franquia.cidade).includes(query));
    preencherLista(filtradas);
}

// Função para aplicar filtros de estado e gerenciabilidade
function aplicarFiltros() {
    franquiasFiltradas = franquias.filter(franquia => 
        (filtroEstado === 'TODAS' || franquia.estado === filtroEstado) &&
        (filtroGerenciavel === 'gerenciavelTodas' || (filtroGerenciavel === 'gerenciavelSim' ? franquia.gerenciavel : !franquia.gerenciavel))
    );
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
        botao.classList.toggle('ativo', botao.id === idSelecionado);
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