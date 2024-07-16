// Lista de franqueados com seus detalhes
const franqueados = [
    {
        codigo: 1100,
        nome: "DANIEL VILLAR CHAIM",
        cpf: "290.211.128-25",
        cidade: "São Paulo",
        estado: "SP",
        info: `
    <br>✅Contato: Liciane/Gésio 
    <br>✅Plano Mensal - R$391,30 SEMANAL (55,90 diária) 
    <br>✅Plano Anual - R$ 349,30 SEMANAL (49,90 diária) 
    <br>✅Plano Fidelidade 28 meses- R$ 363,30 SEMANAL (51,90 diária) 
    <br>✳️CAUÇÃO R$700,00 
    <br>✳️PARA RETIRADA = CAUÇÃO + SEMANA DO PLANO`

    },

    {
        codigo: 1101,
        nome: "RICKY TA WEI WU",
        cpf: "338.843.198-17",
        cidade: "São Paulo",
        estado: "SP",
    },
    {
        codigo: 1102,
        nome: "ALDENY TIAGO DOS REIS",
        cpf: "349.786.378-56",
        cidade: "São Paulo",
        estado: "SP"
    },
    {
        codigo: 1103,
        nome: "GUSTAVO DE PAULA CAMARGOS LOPES",
        cpf: "271.703.478-14",
        cidade: "São Paulo",
        estado: "SP"
    },
    {
        codigo: 1104,
        nome: "ROGERIO BRIGATI SELLERI",
        cpf: "173.052.468-08",
        cidade: "Bragança Paulista",
        estado: "SP"
    },
    {
        codigo: 1107,
        nome: "ANTONIO ANGELO MASSAROLI",
        cpf: "150.785.108-18",
        cidade: "Sertãozinho",
        estado: "SP"
    },
    {
        codigo: 1108,
        nome: "ADRIANO ZANUTTO FERRARESI",
        cpf: "289.295.308-18",
        cidade: "São Paulo",
        estado: "SP"
    },
    {
        codigo: 1109,
        nome: "FERNANDA DE MORAES SILVA",
        cpf: "289.330.998-40",
        cidade: "Limeira",
        estado: "SP"
    },
    {
        codigo: 1110,
        nome: "ARI ROGERIO MONTOYA LOPES",
        cpf: "188.038.638-00",
        cidade: "São Paulo",
        estado: "SP"
    },
    {
        codigo: 1111,
        nome: "CARLA EMANUELLA BARBOSA DE MATOS LEAL",
        cpf: "302.726.258-09",
        cidade: "São José dos Campos",
        estado: "SP"
    },
    {
        codigo: 1112,
        nome: "JOSÉ BOANERGES INÁCIO",
        cpf: "098.795.448-20",
        cidade: "São Paulo",
        estado: "SP"
    },
    {
        codigo: 1113,
        nome: "EDUARDO TEIXEIRA CUNHA",
        cpf: "119.085.658-10",
        cidade: "São Paulo",
        estado: "SP"
    },
    {
        codigo: 1114,
        nome: "DEIVIDE RODRIGUES DA FRANÇA",
        cpf: "835.362.565-20",
        cidade: "São Paulo",
        estado: "SP"
    },
    {
        codigo: 1115,
        nome: "RODRIGO CARVALHO DIEGUES",
        cpf: "281.372.088-79",
        cidade: "Bragança Paulista",
        estado: "SP"
    },
    {
        codigo: 1116,
        nome: "EDUARDO LEITE SILVA PINTO",
        cpf: "215.720.508-02",
        cidade: "Araraquara",
        estado: "SP"
    },
    {
        codigo: 1117,
        nome: "EDUARDO ALVES FERREIRA",
        cpf: "192.607.048-80",
        cidade: "Mauá",
        estado: "SP"
    },
    {
        codigo: 1118,
        nome: "EDUARDO EMERSON MADUREIRA",
        cpf: "286.936.968-90",
        cidade: "São Paulo",
        estado: "SP"
    },
    {
        codigo: 1119,
        nome: "ELIANA MARIA CAMPOS DE OLIVEIRA",
        cpf: "171.413.088-65",
        cidade: "Sorocaba",
        estado: "SP"
    },
    {
        codigo: 1120,
        nome: "FÁBIO LUIZ BUDIB",
        cpf: "870.583.081-87",
        cidade: "São Paulo",
        estado: "SP"
    },
    {
        codigo: 1121,
        nome: "MARIA ANGÉLICA NUNES SILVA MACEDO",
        cpf: "281.837.205-44",
        cidade: "Suzano",
        estado: "SP"
    },
    {
        codigo: 1122,
        nome: "GABRIEL DIAS GOMES",
        cpf: "426.498.588-93",
        cidade: "São Paulo",
        estado: "SP"
    },
    {
        codigo: 1123,
        nome: "FELIPE AGUILAR AMARAL",
        cpf: "348.709.148-83",
        cidade: "São Bernardo do Campo",
        estado: "SP"
    },
    {
        codigo: 1124,
        nome: "IVAN GOMES DE NASCIMENTO",
        cpf: "293.567.248-81",
        cidade: "São Paulo",
        estado: "SP"
    },
    {
        codigo: 1125,
        nome: "VIPCAR TRANSPORT GLOBAL SERVICE LTDA / TEDDY MARCELO",
        cpf: "126.633.008-96",
        cidade: "São Paulo",
        estado: "SP"
    },
    {
        codigo: 1126,
        nome: "JORGE CAETANO ALVES DA SILVA",
        cpf: "600.823.309-30",
        cidade: "São José dos Campos",
        estado: "SP"
    },
    {
        codigo: 1127,
        nome: "LUCIANO CARMO DE AZEVEDO",
        cpf: "077.512.858-93",
        cidade: "Praia Grande",
        estado: "SP"
    },
    {
        codigo: 1128,
        nome: "MARCELO GIANNELLI LOBATO",
        cpf: "150.904.648-80",
        cidade: "São José dos Campos",
        estado: "SP"
    },
    {
        codigo: 1129,
        nome: "PATRÍCIA MÁRCIA CORTEZE AMEIXEIRO",
        cpf: "077.640.998-05",
        cidade: "Santos",
        estado: "SP"
    },
    {
        codigo: 1130,
        nome: "MARCELO OLIVEIRA SECCO",
        cpf: "104.320.028-20",
        cidade: "São Paulo",
        estado: "SP"
    },
    {
        codigo: 1131,
        nome: "MARCOS ALCANTARA LIMA JUNIOR",
        cpf: "299.523.078-37",
        cidade: "São Paulo",
        estado: "SP"
    },
    {
        codigo: 1132,
        nome: "CRISTIANA OLIVEIRA MARIANO SILVA",
        cpf: "176.811.408-08",
        cidade: "São Paulo",
        estado: "SP"
    },
    {
        codigo: 1133,
        nome: "MAURO LIARTE DE MEO",
        cpf: "337.995.598-17",
        cidade: "São Paulo",
        estado: "SP"
    },
    {
        codigo: 1134,
        nome: "ENGRACIA FERNANDES FERREIRA / MARCIO",
        cpf: "755.781.318-91",
        cidade: "São Paulo",
        estado: "SP"
    },
    {
        codigo: 1135,
        nome: "WAGNER MORILHA FALCONI",
        cpf: "338.776.348-42",
        cidade: "Ribeirão Preto",
        estado: "SP"
    },
    {
        codigo: 1136,
        nome: "MARCOS THEUER",
        cpf: "124.357.588-39",
        cidade: "São Paulo",
        estado: "SP"
    },
    {
        codigo: 1137,
        nome: "MARIA VALDENICE SOUSA CRUZ PROENÇA",
        cpf: "260.324.298-90",
        cidade: "São Vicente",
        estado: "SP"
    },
    {
        codigo: 1138,
        nome: "UDERVAN CESAR",
        cpf: "156.575.088-82",
        cidade: "Sorocaba",
        estado: "SP"
    },
    {
        codigo: 1139,
        nome: "ANDRÉS FELIPE GIL ECHEVERRI / ALEJANDRA MARIA URREA MEJIA",
        cpf: "703.760.881-50",
        cidade: "Ribeirão Preto",
        estado: "SP"
    },
    {
        codigo: 1140,
        nome: "RAFAEL FURLAN PEDRONI",
        cpf: "352.433.238-29",
        cidade: "São Paulo",
        estado: "SP"
    },
    {
        codigo: 1141,
        nome: "RENATO DOS SANTOS SIMÕES",
        cpf: "269.081.508-79",
        cidade: "Santo André",
        estado: "SP"
    },
    {
        codigo: 1142,
        nome: "ROMILDO RAMOS DA SILVA",
        cpf: "086.528.658-25",
        cidade: "Taboão da Serra",
        estado: "SP"
    },
    {
        codigo: 1143,
        nome: "BIGUZZI & BIGUZZI SERVIÇOS ADMINISTRATIVOS LTDA",
        cpf: "381.793.018-69",
        cidade: "São Paulo",
        estado: "SP"
    },
    {
        codigo: 1144,
        nome: "LUIS FERNANDO CERQUEIRA",
        cpf: "277.488.438-13",
        cidade: "Campinas",
        estado: "SP"
    },
    {
        codigo: 2100,
        nome: "NATHALIA MARTINS GONÇALVES PINHEIRO",
        cpf: "150.635.917-52",
        cidade: "Rio das Ostras",
        estado: "RJ"
    },
    {
        codigo: 2101,
        nome: "ROQUE NEWTON DE JESUS FONTES VALENÇA",
        cpf: "955.568.425-15",
        cidade: "Rio de Janeiro",
        estado: "RJ"
    },
    {
        codigo: 2104,
        nome: "OSMAR FRANCISCO DE PAULA",
        cpf: "755.327.277-91",
        cidade: "Rio de Janeiro",
        estado: "RJ"
    },
    {
        codigo: 2105,
        nome: "HUMBERTO HITONARU IIZUKA",
        cpf: "042.685.059-97",
        cidade: "Rio de Janeiro",
        estado: "RJ"
    },
    {
        codigo: 2106,
        nome: "ADRIANO DEGENARO DE ARAÚJO",
        cpf: "080.659.767-43",
        cidade: "São Pedro da Aldeia",
        estado: "RJ"
    },
    {
        codigo: 2107,
        nome: "ANDRÉ AUGUSTO DE CARVALHO // ROBERTA CALHEIROS ALVES",
        cpf: "055.675.597-98",
        cidade: "Rio de Janeiro 2",
        estado: "RJ"
    },
    {
        codigo: 2108,
        nome: "CLÁUDIO FABIANO MARQUES DE VELASCO",
        cpf: "678.267.927-20",
        cidade: "Niterói",
        estado: "RJ"
    },
    {
        codigo: 2109,
        nome: "DANILO CALDAS LORIA",
        cpf: "031.869.467-00",
        cidade: "Niterói e São Gonçalo",
        estado: "RJ"
    },
    {
        codigo: 2110,
        nome: "ELTON AZEVEDO",
        cpf: "105.608.607-65",
        cidade: "Rio de Janeiro",
        estado: "RJ"
    },
    {
        codigo: 2111,
        nome: "RAFAEL FIGUEIRA NASCIMENTO",
        cpf: "128.015.827-19",
        cidade: "Nova Iguaçu",
        estado: "RJ"
    },
    {
        codigo: 2112,
        nome: "FABIO FRANCISCO LIMA OLIVEIRA",
        cpf: "104.443.347-77",
        cidade: "Itaguaí",
        estado: "RJ"
    },
    {
        codigo: 2113,
        nome: "FRANCISCO DA SILVA NEGREIROS FILHO",
        cpf: "914.136.307-82",
        cidade: "Nova Iguaçu",
        estado: "RJ"
    },
    {
        codigo: 2114,
        nome: "ERICK SILVA DE AZEVEDO",
        cpf: "048.880.167-54",
        cidade: "Rio de Janeiro",
        estado: "RJ"
    },
    {
        codigo: 2115,
        nome: "LEONARDO DOS REIS BUENO",
        cpf: "082.887.247-36",
        cidade: "Volta Redonda",
        estado: "RJ"
    },
    {
        codigo: 2116,
        nome: "LUCIANO ALVES LIMA",
        cpf: "036.044.347-85",
        cidade: "Rio de Janeiro 1",
        estado: "RJ"
    },
    {
        codigo: 2117,
        nome: "RAFAEL JOSÉ VIDAL DE OLIVEIRA",
        cpf: "065.675.968-21",
        cidade: "Buzios",
        estado: "RJ"
    },
    {
        codigo: 2118,
        nome: "WANDERLEY SILVA FABRICANTE MOREIRA",
        cpf: "174.304.157-84",
        cidade: "Duque de Caxias",
        estado: "RJ"
    },
    {
        codigo: 2119,
        nome: "WILSON JOSE FRANÇA",
        cpf: "626.059.177-20",
        cidade: "Rio de Janeiro",
        estado: "RJ"
    },
    {
        codigo: 2120,
        nome: "WAGNER LUIZ COUTO DE ALMEIDA",
        cpf: "078.258.277-08",
        cidade: "Rio de Janeiro",
        estado: "RJ"
    },
    {
        codigo: 2700,
        nome: "LUIZ PAULO SIMAN BASTOS",
        cpf: "084.439.037-24",
        cidade: "Serra",
        estado: "ES"
    },
    {
        codigo: 3100,
        nome: "ROBERTO SILVA DE OLIVEIRA",
        cpf: "103.935.938-86",
        cidade: "Belo Horizonte",
        estado: "MG"
    },
    {
        codigo: 3101,
        nome: "MARCELO DE ARAGÃO PEREIRA E SILVA",
        cpf: "050.942.096-63",
        cidade: "Belo Horizonte",
        estado: "MG"
    },
    {
        codigo: 3103,
        nome: "MARCO TÚLIO SILVA ALVES",
        cpf: "094.663.516-13",
        cidade: "Belo Horizonte",
        estado: "MG"
    },
    {
        codigo: 3104,
        nome: "FERNANDA ZAICOVSKI DE CARVALHO",
        cpf: "549.161.510-20",
        cidade: "Belo Horizonte",
        estado: "MG"
    },
    {
        codigo: 3105,
        nome: "BERNARDO PIO // LUCAS MARQUES VALENTIM",
        cpf: "037.193.566-04",
        cidade: "Belo Horizonte",
        estado: "MG"
    },
    {
        codigo: 3106,
        nome: "WARLEY FERNANDO BARBOSA",
        cpf: "515.410.766-72",
        cidade: "Belo Horizonte",
        estado: "MG"
    },
    {
        codigo: 3107,
        nome: "ANDRÉ AMARAL DE CASTRO",
        cpf: "074.927.426-30",
        cidade: "Belo Horizonte",
        estado: "MG"
    },
    {
        codigo: 3108,
        nome: "BARONCIO PAULO DE OLIVEIRA CABRAL",
        cpf: "031.164.406-62",
        cidade: "Governador Valadares",
        estado: "MG"
    },
    {
        codigo: 3109,
        nome: "BRÁULIO DE SOUZA GOMES",
        cpf: "908.210.506-30",
        cidade: "Belo Horizonte",
        estado: "MG"
    },
    {
        codigo: 3110,
        nome: "GABRIEL COUTO CARVALHO//CARLOS SÓCIO",
        cpf: "121.134.496-76",
        cidade: "Passos",
        estado: "MG"
    },
    {
        codigo: 3111,
        nome: "ALINE FERREIRA BATISTA",
        cpf: "082.963.066-03",
        cidade: "Lagoa da Prata",
        estado: "MG"
    },
    {
        codigo: 3112,
        nome: "GIANLUCCA FLORES BELLONIA",
        cpf: "143.760.136-76",
        cidade: "Belo Horizonte",
        estado: "MG"
    },
    {
        codigo: 3113,
        nome: "DANIEL PINHEIRO MACHADO",
        cpf: "623.310.193-04",
        cidade: "Belo Horizonte",
        estado: "MG"
    },
    {
        codigo: 3114,
        nome: "HENRIQUE BARBOSA LEITE",
        cpf: "311.241.861-15",
        cidade: "Uberlandia",
        estado: "MG"
    },
    {
        codigo: 3115,
        nome: "LEANDRO AUGUSTO GINO FRANÇA // JOÃO VICTOR MOURA GUIMARÃES",
        cpf: "035.912.266-37",
        cidade: "Lagoa Santa",
        estado: "MG"
    },
    {
        codigo: 3116,
        nome: "TELMA DE FÁTIMA OTONI AZEVEDO",
        cpf: "360.298.580-68",
        cidade: "Santa Luiza",
        estado: "MG"
    },
    {
        codigo: 3117,
        nome: "LUCCAS ADSO VIEIRA",
        cpf: "105.653.736-17",
        cidade: "Patos de Minas",
        estado: "MG"
    },
    {
        codigo: 3118,
        nome: "FERNANDA DE SOUZA PASSOS BATISTA",
        cpf: "688.961.401-10",
        cidade: "Belo Horizonte",
        estado: "MG"
    },
    {
        codigo: 3119,
        nome: "JOÃO PAULO FRANÇA DE OLIVEIRA",
        cpf: "109.344.876-85",
        cidade: "Sete Lagoas",
        estado: "MG"
    },
    {
        codigo: 3120,
        nome: "ROGÉRIO PIERRY VIEIRA",
        cpf: "054.932.686-39",
        cidade: "Itabira",
        estado: "MG"
    },
    {
        codigo: 3121,
        nome: "SARAH CRISTIANE MENDES CALDEIRA DO Ó",
        cpf: "014.820.716-22",
        cidade: "Montes Claros",
        estado: "MG"
    },
    {
        codigo: 3122,
        nome: "MESSIAS EDUARDO DE FARIA",
        cpf: "910.832.306-20",
        cidade: "Uberlândia",
        estado: "MG"
    },
    {
        codigo: 3123,
        nome: "KARINA DA SILVEIRA",
        cpf: "085.732.416-08",
        cidade: "Poços de Caldas",
        estado: "MG"
    },
    {
        codigo: 3124,
        nome: "MARCIA SANCHES GIMENES CASSIMIRO",
        cpf: "042.445.488-23",
        cidade: "Montes Claros",
        estado: "MG"
    },
    {
        codigo: 3125,
        nome: "WILLIAM PEREIRA BRAGA",
        cpf: "765.831.126-04",
        cidade: "Belo Horizonte",
        estado: "MG"
    },
    {
        codigo: 3126,
        nome: "ISADORA LIMA SANTOS/WANDER",
        cpf: "019.007.386-19",
        cidade: "Belo Horizonte",
        estado: "MG"
    },
    {
        codigo: 4100,
        nome: "PAULO SERGIO DA SILVA",
        cpf: "645.785.859-72",
        cidade: "Curitiba",
        estado: "PR"
    },
    {
        codigo: 4101,
        nome: "ALCENIO SIEPMANN JUNIOR",
        cpf: "032.911.559-63",
        cidade: "Curitiba",
        estado: "PR"
    },
    {
        codigo: 4102,
        nome: "JOÃO RICARDO CORDEIRO CAMARGO",
        cpf: "917.886.339-20",
        cidade: "Londrina",
        estado: "PR"
    },
    {
        codigo: 4700,
        nome: "FLÁVIA TALITA ALVES DOS SANTOS",
        cpf: "075.586.559-60",
        cidade: "Itajaí",
        estado: "SC"
    },
    {
        codigo: 4701,
        nome: "GRACILIANO POPPE DE ARAUJO",
        cpf: "535.952.380-87",
        cidade: "Porto Alegre",
        estado: "SC"
    },
    {
        codigo: 4702,
        nome: "RAFAEL LAZARETTI",
        cpf: "021.013.990-08",
        cidade: "Jaraguá do Sul",
        estado: "SC"
    },
    {
        codigo: 4703,
        nome: "JACLE ROCHELL GARBRECHT",
        cpf: "000.000.000-00",
        cidade: "Sao José",
        estado: "SC"
    },
    {
        codigo: 4704,
        nome: "RODRIGO DE ALBUQUERQUE LIMA CYGLER/ JOSÉ LUIZ BORGES LORINI",
        cpf: "110.873.337-92",
        cidade: "Santa Catarina",
        estado: "SC"
    },
    {
        codigo: 5100,
        nome: "ROBERTO REBELATTO",
        cpf: "699.366.170-53",
        cidade: "Porto Alegre",
        estado: "RS"
    },
    {
        codigo: 5101,
        nome: "PAULO CESAR SERENA",
        cpf: "360.298.580-68",
        cidade: "Passo Fundo",
        estado: "RS"
    },
    {
        codigo: 6100,
        nome: "AGRICIO BRAGA NETO",
        cpf: "034.761.611-96",
        cidade: "Brasilia",
        estado: "DF"
    },
    {
        codigo: 6101,
        nome: "DANIEL CARINHANHA ALVES SILVA SCHEFFER",
        cpf: "702.665.811-53",
        cidade: "Brasilia",
        estado: "DF"
    },
    {
        codigo: 6102,
        nome: "SAMUEL VIANA FIGUEIRÔA",
        cpf: "696.748.501-63",
        cidade: "Brasilia",
        estado: "DF"
    },
    {
        codigo: 6300,
        nome: "ALEXSANDRO DE JESUS DE MIRANDA",
        cpf: "014.200.665-36",
        cidade: "Palmas",
        estado: "TO"
    },
    {
        codigo: 6301,
        nome: "MATHEUS GOMES BEZERRA NOLETO / JOÃO LUCCA",
        cpf: "002.391.681-86",
        cidade: "Palmas",
        estado: "TO"
    },
    {
        codigo: 6500,
        nome: "FABIO MORITA TOMO DE LIMA",
        cpf: "895.536.751-15",
        cidade: "Rondonopolis",
        estado: "MT"
    },
    {
        codigo: 6501,
        nome: "CASSIO PAULO DOS SANTOS",
        cpf: "017.278.479-46",
        cidade: "Lucas do Rio Verde",
        estado: "MT"
    },
    {
        codigo: 6502,
        nome: "GUILHERME RONDINA",
        cpf: "014.234.111-88",
        cidade: "Campo Grande",
        estado: "MS"
    },
    {
        codigo: 6900,
        nome: "VINICIUS GONZATO HERMES",
        cpf: "527.232.242-87",
        cidade: "Porto Velho",
        estado: "RO"
    },
    {
        codigo: 7100,
        nome: "MEIRE PEREIRA DA SILVA",
        cpf: "939.510.195-49",
        cidade: "Salvador",
        estado: "BA"
    },
    {
        codigo: 7101,
        nome: "MARCOS ANTÔNIO SILVA DÓRIA",
        cpf: "669.307.235-68",
        cidade: "Alagoinhas",
        estado: "BA"
    },
    {
        codigo: 7102,
        nome: "LUÍS CLÁUDIO CABRAL CRUZ GONÇALVES",
        cpf: "925.171.705-25",
        cidade: "Salvador",
        estado: "BA"
    },
    {
        codigo: 7103,
        nome: "RAPHAEL DAMÁSIO CERQUEIRA",
        cpf: "013.558.515-56",
        cidade: "Ilhéus",
        estado: "BA"
    },
    {
        codigo: 7104,
        nome: "UALLACE CATUREBA DE ALMEIDA",
        cpf: "037.292.055-10",
        cidade: "Feira de Santana",
        estado: "BA"
    },
    {
        codigo: 7105,
        nome: "VALNEIR PEREIRA DA SILVA",
        cpf: "917.966.525-04",
        cidade: "Irecê",
        estado: "BA"
    },
    {
        codigo: 7106,
        nome: "WILIAQUISON VALENTIM DE JESUS",
        cpf: "032.018.675-00",
        cidade: "Salvador",
        estado: "BA"
    },
    {
        codigo: 7900,
        nome: "ANTÔNIO ASLAN",
        cpf: "048.227.445-07",
        cidade: "Aracaju",
        estado: "SE"
    },
    {
        codigo: 7901,
        nome: "GINALDO DO NASCIMENTO BISPO",
        cpf: "004.876.175-33",
        cidade: "Itabaiana",
        estado: "SE"
    },
    {
        codigo: 7902,
        nome: "GERSON MANGELA CAETANO",
        cpf: "854.201.746-34",
        cidade: "Aracaju",
        estado: "SE"
    },
    {
        codigo: 8100,
        nome: "EDSON NASCIMENTO DA SILVA",
        cpf: "835.203.094-91",
        cidade: "Jaboatão dos Guararapes",
        estado: "PE"
    },
    {
        codigo: 8101,
        nome: "EDSON FERREIRA DA SILVA JUNIOR",
        cpf: "008.741.704-94",
        cidade: "Paulista",
        estado: "PE"
    },
    {
        codigo: 8102,
        nome: "ALISON JOSÉ SILVA",
        cpf: "122.683.784-03",
        cidade: "Recife 1",
        estado: "PE"
    },
    {
        codigo: 8103,
        nome: "LOCADORA DE VEÍCULOS CONFIANÇA LTDA",
        cpf: "000.000.000-00",
        cidade: "Recife",
        estado: "PE"
    },
    {
        codigo: 8104,
        nome: "RAFAEL LINS MARQUES DOS REIS",
        cpf: "052.937.804-33",
        cidade: "Recife 2",
        estado: "PE"
    },
    {
        codigo: 8105,
        nome: "RILSON JOSÉ DE SENA",
        cpf: "009.282.414-59",
        cidade: "Caruaru",
        estado: "PE"
    },
    {
        codigo: 8200,
        nome: "JOSÉ FLAVIO ALBUQUERQUE LINS JUNIOR",
        cpf: "036.176.234-84",
        cidade: "Maceió",
        estado: "AL"
    },
    {
        codigo: 8300,
        nome: "LAIZA GOUVEIA DAS CHAGAS",
        cpf: "106.257.434-66",
        cidade: "Campina Grande",
        estado: "PB"
    },
    {
        codigo: 8301,
        nome: "JAIRO ENIO DA SILVA",
        cpf: "580.160.580-00",
        cidade: "João Pessoa",
        estado: "PB"
    },
    {
        codigo: 8302,
        nome: "MAGNALDO SANTOS BARBOSA",
        cpf: "767.652.295-15",
        cidade: "João Pessoa",
        estado: "PB"
    },
    {
        codigo: 8400,
        nome: "RAMON LÚCIO LINHARES DE ARAÚJO",
        cpf: "085.597.134-76",
        cidade: "Natal",
        estado: "RN"
    },
    {
        codigo: 8500,
        nome: "IRANILDO CAVALCANTE NICOLAU",
        cpf: "981.311.843-15",
        cidade: "Juazeiro do Norte",
        estado: "CE"
    },
    {
        codigo: 8501,
        nome: "RODNEY PACHECO MONTEIRO",
        cpf: "478.690.543-72",
        cidade: "Fortaleza 2",
        estado: "CE"
    },
    {
        codigo: 8600,
        nome: "JOSÉ CARLOS DE SOUZA JÚNIOR",
        cpf: "698.651.751-34",
        cidade: "Teresina",
        estado: "PI"
    },
    {
        codigo: 9800,
        nome: "CARLOS EDUARDO FÉLIX FERREIRA",
        cpf: "626.428.986-87",
        cidade: "São Luis",
        estado: "MA"
    },
    {
        codigo: 9801,
        nome: "SHEILA DA SILVA MAIA TENÓRIO DA BRITTO",
        cpf: "492.865.523-00",
        cidade: "São Luiz",
        estado: "MA"
    },
    {
        codigo: 9802,
        nome: "TESTE DE VALIDAÇÃO SISTEMA RENATA CURTY",
        cpf: "167.707.670-40",
        cidade: "Belo Horizonte",
        estado: "MG"
    },
    {
        codigo: 9803,
        nome: "LOCAGORA BELO HORIZONTE",
        cpf: "000.000.000-00",
        cidade: "Belo Horizonte",
        estado: "MG"
    },
    {
        codigo: 9804,
        nome: "Teste base",
        cpf: "009.54.162-34",
        cidade: "Belo Horizonte",
        estado: "MG"
    },
    {
        codigo: 9805,
        nome: "Franquia São Paulo ZN",
        cpf: "299.523.078-37",
        cidade: "São Paulo",
        estado: "SP"
    }
];


// Elementos do DOM
const franqueadoList = document.getElementById('franqueadoList');
const searchInput = document.getElementById('searchInput');
const infoPanel = document.getElementById('infoPanel');
const filterRJButton = document.getElementById('filterRJ');
const filterSPButton = document.getElementById('filterSP');
const filterMGButton = document.getElementById('filterMG');
const todasButton = document.getElementById('todas');


// Lista filtrada de franqueados (inicialmente contém todos os franqueados)
let filteredFranqueados = franqueados;


// Função para preencher a lista de franqueados no elemento HTML
function populateList(franqueadosToDisplay) {
    franqueadoList.innerHTML = '';
    franqueadosToDisplay.forEach(franqueado => {
        const option = document.createElement('option');
        option.value = franqueado.codigo;
        option.textContent = `${franqueado.nome}`;
        franqueadoList.appendChild(option);
    });
}

// Função para normalizar strings para facilitar a busca (remove acentos e converte para minúsculas)
function normalizeString(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

// Função para buscar franqueados com base na entrada do usuário
function searchFranqueados() {
    const query = normalizeString(searchInput.value);
    const filtered = filteredFranqueados.filter(franqueado => {
        return normalizeString(franqueado.nome).includes(query) ||
            franqueado.cpf.includes(query) ||
            normalizeString(franqueado.cidade).includes(query);
    });
    populateList(filtered);
}

// Função para filtrar franqueados por estado
function filterByState(state) {
    filteredFranqueados = franqueados.filter(franqueado => franqueado.estado === state);
    searchFranqueados();
}


// Função para remover o filtro de estado
function clearFilter() {
    filteredFranqueados = franqueados;
    searchFranqueados();
}


// Função para mostrar os detalhes do franqueado selecionado
function showFranqueadoDetails(codigo) {
    const franqueado = franqueados.find(f => f.codigo == codigo);
    if (franqueado) {
        infoPanel.innerHTML = `
            <h2>${franqueado.nome}</h2>
            <p><strong>CPF/CNPJ:</strong> ${franqueado.cpf}</p>
            <p><strong>Cidade:</strong> ${franqueado.cidade}</p>
            <p><strong>Estado:</strong> ${franqueado.estado}</p>
             <p><strong>Informações:</strong> ${franqueado.info}</p>
        `
    }
}

// Adiciona event listeners para interação do usuário
searchInput.addEventListener('input', searchFranqueados);
franqueadoList.addEventListener('change', (e) => {
    showFranqueadoDetails(e.target.value);
});
filterRJButton.addEventListener('click', () => filterByState('RJ'));
filterSPButton.addEventListener('click', () => filterByState('SP'));
filterMGButton.addEventListener('click', () => filterByState('MG'));
todasButton.addEventListener('click', clearFilter);

// Popula a lista inicial de franqueados
populateList(franqueados);