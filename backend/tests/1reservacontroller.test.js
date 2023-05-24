const reservaController = require('../controllers/reservas');
const reservaModel = require('../models/reservas');

test('getReservas retorna todas as reservas', async () => {
  const reservaMock = [{
    "_id": {
      "$oid": "642c812288e063ee2c0503bb"
    },
    "numero": 8,
    "sala": "640a3cf5122bfccdba2c163d",
    "cliente": "Internet - WWW",
    "data": {
      "$date": {
        "$numberLong": "1681689600000"
      }
    },
    "inicio": 22,
    "fim": 23,
    "valor": 2300,
    "valortotal": 2,
    "observacao": "outro teste",
    "status": "R",
    "funcionario": "WEB - Internet"
  },{
    "_id": {
      "$oid": "642d1f82cb9c81a92be051d1"
    },
    "numero": 324,
    "sala": "640a3ecf122bfccdba2c163f",
    "cliente": "Internet - WWW",
    "data": {
      "$date": {
        "$numberLong": "977270400000"
      }
    },
    "inicio": 19,
    "fim": 20,
    "valor": 500,
    "valortotal": 12000,
    "observacao": "sala com ar-condicionado ligado",
    "status": "R",
    "funcionario": "WEB - Internet"
  },{
    "_id": {
      "$oid": "642d1faacb9c81a92be051d2"
    },
    "numero": 496,
    "sala": "64192278e00009fd9fb2bddb",
    "cliente": "Internet - WWW",
    "data": {
      "$date": {
        "$numberLong": "1497312000000"
      }
    },
    "inicio": 14,
    "fim": 22,
    "valor": "4",
    "valortotal": 12000,
    "observacao": "adoro queijo",
    "status": "C",
    "funcionario": "WEB - Internet"
  },{
    "_id": {
      "$oid": "642d225ae0c26d4d6f561453"
    },
    "numero": 5,
    "sala": "6427c92d92248b73121a4438",
    "cliente": "Internet - WWW",
    "data": {
      "$date": {
        "$numberLong": "983415600000"
      }
    },
    "inicio": 4,
    "fim": 5,
    "valor": 5,
    "valortotal": 5,
    "observacao": "acabei de fazer esse teste",
    "status": "R",
    "__v": 0,
    "funcionario": "WEB - Internet"
  },{
    "_id": {
      "$oid": "6437a689499351ad6109ecfe"
    },
    "numero": 2,
    "sala": "640a3cf5122bfccdba2c163d",
    "cliente": "susie",
    "data": {
      "$date": {
        "$numberLong": "1681776000000"
      }
    },
    "inicio": 3,
    "fim": 6,
    "valor": 500000,
    "valortotal": 36000000,
    "observacao": "a gente n pode ter tudo",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64385aeb303201af2b402502"
    },
    "numero": 14,
    "sala": "640a3ecf122bfccdba2c163f",
    "cliente": "Internet - WWW",
    "data": {
      "$date": {
        "$numberLong": "1682380800000"
      }
    },
    "inicio": 2,
    "fim": 3,
    "valor": 458000,
    "observacao": "a gente n pode ter tudo",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64386182303201af2b462857"
    },
    "numero": 5,
    "sala": "64192278e00009fd9fb2bddb",
    "cliente": "Internet - WWW",
    "data": {
      "$date": {
        "$numberLong": "1681862400000"
      }
    },
    "inicio": 3,
    "fim": 4,
    "valor": 832000,
    "observacao": "sei la porra",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "6438622bdf0b0e3489920a3e"
    },
    "numero": 7,
    "sala": "64192bc99be30bb5f34b5e68",
    "funcionario": "WEB - Internet",
    "cliente": "Internet - WWW",
    "data": {
      "$date": {
        "$numberLong": "1682294400000"
      }
    },
    "inicio": 5,
    "fim": 7,
    "valor": 670000,
    "observacao": "fugiro namoto",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "643890784fdb4e72284d5754"
    },
    "numero": 800,
    "sala": "6427c27892248b73121a40de",
    "funcionario": "WEB - Internet",
    "cliente": "Internet - WWW",
    "data": {
      "$date": {
        "$numberLong": "1682208000000"
      }
    },
    "inicio": 21,
    "fim": 22,
    "valor": 458087,
    "observacao": "sai fora",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64389e084fdb4e722851090f"
    },
    "numero": 56,
    "sala": "640a3a03122bfccdba2c163b",
    "funcionario": "WEB - Internet",
    "cliente": "Internet - WWW",
    "data": {
      "$date": {
        "$numberLong": "1681862400000"
      }
    },
    "inicio": 8,
    "fim": 9,
    "valor": 231000000,
    "observacao": "taporra",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64389f844fdb4e722851091a"
    },
    "numero": 1501,
    "sala": "642952fb576c65e400864da5",
    "funcionario": "WEB - Internet",
    "cliente": "Internet - WWW",
    "data": {
      "$date": {
        "$numberLong": "1681862400000"
      }
    },
    "inicio": 12,
    "fim": 14,
    "valor": 500000,
    "observacao": "a gente n pode ter tudo",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "6438ccb2560dc8b4aff62a09"
    },
    "numero": 4,
    "sala": "640a3cf5122bfccdba2c163d",
    "funcionario": "WEB - Internet",
    "cliente": "Internet - WWW",
    "data": {
      "$date": {
        "$numberLong": "1682553600000"
      }
    },
    "inicio": 6,
    "fim": 8,
    "valor": 500600,
    "observacao": "sala com ar-condicionado desligado",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "6438d6b2560dc8b4aff63d08"
    },
    "numero": 43,
    "sala": "640a3f36122bfccdba2c1640",
    "funcionario": "WEB - Internet",
    "cliente": "Internet - WWW",
    "data": {
      "$date": {
        "$numberLong": "1682467200000"
      }
    },
    "inicio": 4,
    "fim": 8,
    "valor": 3210000,
    "observacao": "jooj",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "6438d851560dc8b4aff6544a"
    },
    "numero": 1,
    "sala": "6438d819560dc8b4aff6523f",
    "funcionario": "WEB - Internet",
    "cliente": "Internet - WWW",
    "data": {
      "$date": {
        "$numberLong": "1682467200000"
      }
    },
    "inicio": 15,
    "fim": 17,
    "valor": 3000000,
    "observacao": "ai que diliça",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "6439ab086ce2b51755f72dc9"
    },
    "numero": 344,
    "sala": "640a3ecf122bfccdba2c163f",
    "funcionario": "WEB - Internet",
    "cliente": "Internet - WWW",
    "data": {
      "$date": {
        "$numberLong": "1681776000000"
      }
    },
    "inicio": 23,
    "fim": 24,
    "valor": 832500,
    "valortotal": 12000,
    "observacao": "sala com ar-condicionado ligado",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "6439b43b56acb5323bc0b22a"
    },
    "numero": 16,
    "sala": "640a3ecf122bfccdba2c163f",
    "funcionario": "WEB - Internet",
    "cliente": "Internet - WWW",
    "data": {
      "$date": {
        "$numberLong": "1681862400000"
      }
    },
    "inicio": 19,
    "fim": 20,
    "valor": 458000,
    "valortotal": 12000,
    "observacao": "sahelanthropussy",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "6439b6cc56acb5323bc0b22e"
    },
    "numero": 12,
    "sala": "64192278e00009fd9fb2bddb",
    "funcionario": "WEB - Internet",
    "cliente": "Internet - WWW",
    "data": {
      "$date": {
        "$numberLong": "1682380800000"
      }
    },
    "inicio": 12,
    "fim": 13,
    "valor": 670000,
    "valortotal": 12000,
    "observacao": "sai fora",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "6439b7337832c5556917dea2"
    },
    "numero": 2,
    "sala": "640a3cf5122bfccdba2c163d",
    "funcionario": "WEB - Internet",
    "cliente": "Internet - WWW",
    "data": {
      "$date": {
        "$numberLong": "1681257600000"
      }
    },
    "valortotal": 12000,
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "6439b9147832c5556917dea8"
    },
    "numero": 7,
    "sala": "640a3ecf122bfccdba2c163f",
    "funcionario": "WEB - Internet",
    "cliente": "Internet - WWW",
    "data": {
      "$date": {
        "$numberLong": "1681862400000"
      }
    },
    "inicio": 8,
    "fim": 9,
    "valortotal": 12000,
    "observacao": "chuchu",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "6439ba0abe11c01bfb980c01"
    },
    "numero": 4,
    "sala": "640a3ecf122bfccdba2c163f",
    "funcionario": "WEB - Internet",
    "cliente": "Internet - WWW",
    "data": {
      "$date": {
        "$numberLong": "1015891200000"
      }
    },
    "inicio": 14,
    "fim": 15,
    "valortotal": 12000,
    "observacao": "xerebenevia",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "643ce05a1930566d63b7d7c3"
    },
    "numero": 13,
    "sala": "643cc0ee1930566d63b7d667",
    "funcionario": "WEB - Internet",
    "cliente": "Internet - WWW",
    "data": {
      "$date": {
        "$numberLong": "1681084800000"
      }
    },
    "inicio": 15,
    "fim": 23,
    "valortotal": 12000,
    "observacao": "ueidagaraio",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "643ce7138629b34c34667139"
    },
    "sala": "643ca1ba8694fea9ad90b5c4",
    "funcionario": "WEB - Internet",
    "cliente": "Internet - WWW",
    "data": {
      "$date": {
        "$numberLong": "1682467200000"
      }
    },
    "inicio": 14,
    "fim": 16,
    "valortotal": 12000,
    "observacao": "nois trupica mas n cai",
    "status": "R",
    "__v": 0,
    "numero": 124
  },{
    "_id": {
      "$oid": "6449850289499028bc074d5a"
    },
    "numero": 98,
    "sala": "6438d819560dc8b4aff6523f",
    "funcionario": "WEB - Internet",
    "cliente": "Internet - WWW",
    "data": {
      "$date": {
        "$numberLong": "1681948800000"
      }
    },
    "inicio": 4,
    "fim": 9,
    "valortotal": 12000,
    "observacao": "sei la",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "6449b870b477fce95f23b8c6"
    },
    "numero": 5488,
    "sala": "640a3ecf122bfccdba2c163f",
    "funcionario": "WEB - Internet",
    "cliente": "Internet - WWW",
    "data": {
      "$date": {
        "$numberLong": "1681171200000"
      }
    },
    "inicio": 11,
    "fim": 12,
    "valortotal": 12000,
    "observacao": "eitacaraaalho",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "644a17a4a4180d63660d0aab"
    },
    "numero": 758,
    "sala": "641923dde00009fd9fb2bddc",
    "funcionario": "WEB - Internet",
    "cliente": "Internet - WWW",
    "data": {
      "$date": {
        "$numberLong": "1681776000000"
      }
    },
    "inicio": 8,
    "fim": 12,
    "valortotal": 3328000,
    "observacao": "ablublubé",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "644a1942a4180d63660d70f9"
    },
    "numero": 487,
    "sala": "64192278e00009fd9fb2bddb",
    "funcionario": "WEB - Internet",
    "cliente": "Internet - WWW",
    "data": {
      "$date": {
        "$numberLong": "1681257600000"
      }
    },
    "inicio": 6,
    "fim": 18,
    "valortotal": 6300000,
    "observacao": "tapooooraaaaaaaaaaaaaa",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "6450498ee3e7261294edbcb4"
    },
    "numero": 56,
    "sala": "641923dde00009fd9fb2bddc",
    "funcionario": "WEB - Internet",
    "cliente": "Internet - WWW",
    "data": {
      "$date": {
        "$numberLong": "1684886400000"
      }
    },
    "inicio": 5,
    "fim": 11,
    "valortotal": 4992000,
    "observacao": "rai toma no cool",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64504e667c5f3dca2109ba19"
    },
    "numero": 445,
    "sala": "64192278e00009fd9fb2bddb",
    "funcionario": "WEB - Internet",
    "cliente": "Internet - WWW",
    "data": {
      "$date": {
        "$numberLong": "1685404800000"
      }
    },
    "inicio": 5,
    "fim": 17,
    "valortotal": 6300000,
    "observacao": "chuchuuch",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "6453306f68d65dfc7b4e505d"
    },
    "numero": 54,
    "sala": "643cc0ee1930566d63b7d667",
    "funcionario": "WEB - Internet",
    "cliente": "Internet - WWW",
    "data": {
      "$date": {
        "$numberLong": "1249430400000"
      }
    },
    "inicio": 5,
    "fim": 6,
    "valortotal": 150,
    "observacao": "sei la porra",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "6453352368d65dfc7b4f1356"
    },
    "numero": 698,
    "sala": "643cc0ee1930566d63b7d667",
    "funcionario": "WEB - Internet",
    "cliente": "Internet - WWW",
    "data": {
      "$date": {
        "$numberLong": "253495969200000"
      }
    },
    "inicio": 5,
    "fim": 22,
    "valortotal": 2550,
    "observacao": "suruba de gato",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "645338ca88b225387d5be846"
    },
    "numero": 5488,
    "sala": "640a3ecf122bfccdba2c163f",
    "funcionario": "WEB - Internet",
    "cliente": "Internet - WWW",
    "cpf": 54877,
    "data": {
      "$date": {
        "$numberLong": "1684800000000"
      }
    },
    "inicio": 5,
    "fim": 18,
    "valortotal": 2730,
    "observacao": "chuchu",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "645341b55733556e6aa6fae2"
    },
    "numero": 544,
    "sala": "6427c92d92248b73121a4438",
    "funcionario": "WEB - Internet",
    "cliente": "Internet - WWW",
    "cpf": 56222,
    "data": {
      "$date": {
        "$numberLong": "1684886400000"
      }
    },
    "inicio": 4,
    "fim": 20,
    "valortotal": 2160000,
    "observacao": "zulu alfa tango",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "645342215733556e6aa701fa"
    },
    "numero": 5988,
    "sala": "643ca1ba8694fea9ad90b5c4",
    "funcionario": "WEB - Internet",
    "cliente": "Internet - WWW",
    "nomeFuncionario": "xaramanducia",
    "cpf": 7000,
    "data": {
      "$date": {
        "$numberLong": "1683936000000"
      }
    },
    "inicio": 7,
    "fim": 23,
    "valortotal": 3872000,
    "observacao": "agr vai",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "6462a30eb0499238875051f5"
    },
    "numero": 4588,
    "sala": "6427c92d92248b73121a4438",
    "funcionario": "WEB - Internet",
    "cliente": "Internet - WWW",
    "nomeFuncionario": "rossalinda",
    "nomeCliente": "samantha",
    "cpf": null,
    "data": {
      "$date": {
        "$numberLong": "1684886400000"
      }
    },
    "inicio": 12,
    "fim": 22,
    "valortotal": 1350000,
    "observacao": "eita nos",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "6466d5c50360386d0f7b0b8a"
    },
    "numero": 2113,
    "sala": "641923dde00009fd9fb2bddc",
    "funcionario": "WEB - Internet",
    "cliente": "Internet - WWW",
    "cpf": 54877,
    "data": {
      "$date": {
        "$numberLong": "7978694400000"
      }
    },
    "inicio": 14,
    "fim": 22,
    "valortotal": 6656000,
    "observacao": "birls",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "6466d63d0360386d0f7b1b6e"
    },
    "numero": 6588,
    "sala": "641923dde00009fd9fb2bddc",
    "funcionario": "WEB - Internet",
    "cliente": "Internet - WWW",
    "nomeFuncionario": "xaramanducia",
    "nomeCliente": "cornellia",
    "cpf": 54877,
    "data": {
      "$date": {
        "$numberLong": "1684195200000"
      }
    },
    "inicio": 8,
    "fim": 23,
    "valortotal": 12480000,
    "observacao": "carai borracha mano",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b26"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 83",
    "funcionario": "Funcionário 9",
    "data": {
      "$date": {
        "$numberLong": "1684611019366"
      }
    },
    "inicio": 11,
    "fim": 19,
    "valortotal": 377,
    "observacao": "Observação 1",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b27"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 2",
    "funcionario": "Funcionário 23",
    "data": {
      "$date": {
        "$numberLong": "1684611019370"
      }
    },
    "inicio": 12,
    "fim": 22,
    "valortotal": 442,
    "observacao": "Observação 2",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b28"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 28",
    "funcionario": "Funcionário 11",
    "data": {
      "$date": {
        "$numberLong": "1684611019371"
      }
    },
    "inicio": 11,
    "fim": 19,
    "valortotal": 415,
    "observacao": "Observação 3",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b29"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 90",
    "funcionario": "Funcionário 34",
    "data": {
      "$date": {
        "$numberLong": "1684611019371"
      }
    },
    "inicio": 13,
    "fim": 21,
    "valortotal": 445,
    "observacao": "Observação 4",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b2a"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 26",
    "funcionario": "Funcionário 41",
    "data": {
      "$date": {
        "$numberLong": "1684611019372"
      }
    },
    "inicio": 18,
    "fim": 22,
    "valortotal": 55,
    "observacao": "Observação 5",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b2b"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 30",
    "funcionario": "Funcionário 44",
    "data": {
      "$date": {
        "$numberLong": "1684611019372"
      }
    },
    "inicio": 11,
    "fim": 20,
    "valortotal": 312,
    "observacao": "Observação 6",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b2c"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 29",
    "funcionario": "Funcionário 31",
    "data": {
      "$date": {
        "$numberLong": "1684611019373"
      }
    },
    "inicio": 11,
    "fim": 21,
    "valortotal": 222,
    "observacao": "Observação 7",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b2d"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 49",
    "funcionario": "Funcionário 27",
    "data": {
      "$date": {
        "$numberLong": "1684611019373"
      }
    },
    "inicio": 12,
    "fim": 19,
    "valortotal": 155,
    "observacao": "Observação 8",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b2e"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 4",
    "funcionario": "Funcionário 14",
    "data": {
      "$date": {
        "$numberLong": "1684611019374"
      }
    },
    "inicio": 8,
    "fim": 22,
    "valortotal": 291,
    "observacao": "Observação 9",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b2f"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 41",
    "funcionario": "Funcionário 43",
    "data": {
      "$date": {
        "$numberLong": "1684611019377"
      }
    },
    "inicio": 15,
    "fim": 20,
    "valortotal": 306,
    "observacao": "Observação 10",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b30"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 42",
    "funcionario": "Funcionário 41",
    "data": {
      "$date": {
        "$numberLong": "1684611019377"
      }
    },
    "inicio": 18,
    "fim": 22,
    "valortotal": 414,
    "observacao": "Observação 11",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b31"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 69",
    "funcionario": "Funcionário 27",
    "data": {
      "$date": {
        "$numberLong": "1684611019378"
      }
    },
    "inicio": 14,
    "fim": 22,
    "valortotal": 141,
    "observacao": "Observação 12",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b32"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 61",
    "funcionario": "Funcionário 40",
    "data": {
      "$date": {
        "$numberLong": "1684611019378"
      }
    },
    "inicio": 9,
    "fim": 19,
    "valortotal": 74,
    "observacao": "Observação 13",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b33"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 65",
    "funcionario": "Funcionário 5",
    "data": {
      "$date": {
        "$numberLong": "1684611019378"
      }
    },
    "inicio": 12,
    "fim": 20,
    "valortotal": 461,
    "observacao": "Observação 14",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b34"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 23",
    "funcionario": "Funcionário 27",
    "data": {
      "$date": {
        "$numberLong": "1684611019378"
      }
    },
    "inicio": 11,
    "fim": 22,
    "valortotal": 58,
    "observacao": "Observação 15",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b35"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 74",
    "funcionario": "Funcionário 13",
    "data": {
      "$date": {
        "$numberLong": "1684611019379"
      }
    },
    "inicio": 18,
    "fim": 21,
    "valortotal": 453,
    "observacao": "Observação 16",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b36"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 59",
    "funcionario": "Funcionário 47",
    "data": {
      "$date": {
        "$numberLong": "1684611019379"
      }
    },
    "inicio": 10,
    "fim": 22,
    "valortotal": 226,
    "observacao": "Observação 17",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b37"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 85",
    "funcionario": "Funcionário 4",
    "data": {
      "$date": {
        "$numberLong": "1684611019379"
      }
    },
    "inicio": 16,
    "fim": 22,
    "valortotal": 98,
    "observacao": "Observação 18",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b38"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 67",
    "funcionario": "Funcionário 34",
    "data": {
      "$date": {
        "$numberLong": "1684611019379"
      }
    },
    "inicio": 9,
    "fim": 19,
    "valortotal": 234,
    "observacao": "Observação 19",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b39"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 34",
    "funcionario": "Funcionário 41",
    "data": {
      "$date": {
        "$numberLong": "1684611019379"
      }
    },
    "inicio": 17,
    "fim": 19,
    "valortotal": 80,
    "observacao": "Observação 20",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b3a"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 69",
    "funcionario": "Funcionário 35",
    "data": {
      "$date": {
        "$numberLong": "1684611019380"
      }
    },
    "inicio": 11,
    "fim": 19,
    "valortotal": 288,
    "observacao": "Observação 21",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b3b"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 27",
    "funcionario": "Funcionário 37",
    "data": {
      "$date": {
        "$numberLong": "1684611019380"
      }
    },
    "inicio": 15,
    "fim": 20,
    "valortotal": 98,
    "observacao": "Observação 22",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b3c"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 27",
    "funcionario": "Funcionário 49",
    "data": {
      "$date": {
        "$numberLong": "1684611019380"
      }
    },
    "inicio": 9,
    "fim": 22,
    "valortotal": 69,
    "observacao": "Observação 23",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b3d"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 30",
    "funcionario": "Funcionário 33",
    "data": {
      "$date": {
        "$numberLong": "1684611019380"
      }
    },
    "inicio": 11,
    "fim": 19,
    "valortotal": 426,
    "observacao": "Observação 24",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b3e"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 43",
    "funcionario": "Funcionário 7",
    "data": {
      "$date": {
        "$numberLong": "1684611019380"
      }
    },
    "inicio": 17,
    "fim": 20,
    "valortotal": 478,
    "observacao": "Observação 25",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b3f"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 21",
    "funcionario": "Funcionário 13",
    "data": {
      "$date": {
        "$numberLong": "1684611019380"
      }
    },
    "inicio": 10,
    "fim": 19,
    "valortotal": 64,
    "observacao": "Observação 26",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b40"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 36",
    "funcionario": "Funcionário 35",
    "data": {
      "$date": {
        "$numberLong": "1684611019380"
      }
    },
    "inicio": 10,
    "fim": 21,
    "valortotal": 109,
    "observacao": "Observação 27",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b41"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 55",
    "funcionario": "Funcionário 7",
    "data": {
      "$date": {
        "$numberLong": "1684611019380"
      }
    },
    "inicio": 16,
    "fim": 22,
    "valortotal": 468,
    "observacao": "Observação 28",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b42"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 88",
    "funcionario": "Funcionário 19",
    "data": {
      "$date": {
        "$numberLong": "1684611019380"
      }
    },
    "inicio": 16,
    "fim": 21,
    "valortotal": 69,
    "observacao": "Observação 29",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b43"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 39",
    "funcionario": "Funcionário 32",
    "data": {
      "$date": {
        "$numberLong": "1684611019380"
      }
    },
    "inicio": 18,
    "fim": 19,
    "valortotal": 470,
    "observacao": "Observação 30",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b44"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 31",
    "funcionario": "Funcionário 40",
    "data": {
      "$date": {
        "$numberLong": "1684611019381"
      }
    },
    "inicio": 16,
    "fim": 22,
    "valortotal": 98,
    "observacao": "Observação 31",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b45"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 8",
    "funcionario": "Funcionário 31",
    "data": {
      "$date": {
        "$numberLong": "1684611019381"
      }
    },
    "inicio": 13,
    "fim": 22,
    "valortotal": 131,
    "observacao": "Observação 32",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b46"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 88",
    "funcionario": "Funcionário 38",
    "data": {
      "$date": {
        "$numberLong": "1684611019381"
      }
    },
    "inicio": 13,
    "fim": 21,
    "valortotal": 172,
    "observacao": "Observação 33",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b47"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 26",
    "funcionario": "Funcionário 20",
    "data": {
      "$date": {
        "$numberLong": "1684611019381"
      }
    },
    "inicio": 11,
    "fim": 19,
    "valortotal": 211,
    "observacao": "Observação 34",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b48"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 77",
    "funcionario": "Funcionário 47",
    "data": {
      "$date": {
        "$numberLong": "1684611019381"
      }
    },
    "inicio": 10,
    "fim": 19,
    "valortotal": 483,
    "observacao": "Observação 35",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b49"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 15",
    "funcionario": "Funcionário 17",
    "data": {
      "$date": {
        "$numberLong": "1684611019381"
      }
    },
    "inicio": 18,
    "fim": 21,
    "valortotal": 403,
    "observacao": "Observação 36",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b4a"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 50",
    "funcionario": "Funcionário 44",
    "data": {
      "$date": {
        "$numberLong": "1684611019381"
      }
    },
    "inicio": 17,
    "fim": 21,
    "valortotal": 269,
    "observacao": "Observação 37",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b4b"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 11",
    "funcionario": "Funcionário 26",
    "data": {
      "$date": {
        "$numberLong": "1684611019381"
      }
    },
    "inicio": 10,
    "fim": 21,
    "valortotal": 494,
    "observacao": "Observação 38",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b4c"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 66",
    "funcionario": "Funcionário 35",
    "data": {
      "$date": {
        "$numberLong": "1684611019381"
      }
    },
    "inicio": 11,
    "fim": 20,
    "valortotal": 54,
    "observacao": "Observação 39",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b4d"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 70",
    "funcionario": "Funcionário 5",
    "data": {
      "$date": {
        "$numberLong": "1684611019381"
      }
    },
    "inicio": 10,
    "fim": 19,
    "valortotal": 276,
    "observacao": "Observação 40",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b4e"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 45",
    "funcionario": "Funcionário 3",
    "data": {
      "$date": {
        "$numberLong": "1684611019381"
      }
    },
    "inicio": 16,
    "fim": 21,
    "valortotal": 447,
    "observacao": "Observação 41",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b4f"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 16",
    "funcionario": "Funcionário 4",
    "data": {
      "$date": {
        "$numberLong": "1684611019381"
      }
    },
    "inicio": 15,
    "fim": 20,
    "valortotal": 131,
    "observacao": "Observação 42",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b50"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 21",
    "funcionario": "Funcionário 37",
    "data": {
      "$date": {
        "$numberLong": "1684611019382"
      }
    },
    "inicio": 9,
    "fim": 22,
    "valortotal": 267,
    "observacao": "Observação 43",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b51"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 85",
    "funcionario": "Funcionário 19",
    "data": {
      "$date": {
        "$numberLong": "1684611019382"
      }
    },
    "inicio": 8,
    "fim": 22,
    "valortotal": 336,
    "observacao": "Observação 44",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b52"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 16",
    "funcionario": "Funcionário 32",
    "data": {
      "$date": {
        "$numberLong": "1684611019382"
      }
    },
    "inicio": 12,
    "fim": 20,
    "valortotal": 192,
    "observacao": "Observação 45",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b53"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 94",
    "funcionario": "Funcionário 38",
    "data": {
      "$date": {
        "$numberLong": "1684611019382"
      }
    },
    "inicio": 11,
    "fim": 21,
    "valortotal": 165,
    "observacao": "Observação 46",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b54"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 8",
    "funcionario": "Funcionário 39",
    "data": {
      "$date": {
        "$numberLong": "1684611019382"
      }
    },
    "inicio": 15,
    "fim": 20,
    "valortotal": 422,
    "observacao": "Observação 47",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b55"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 56",
    "funcionario": "Funcionário 19",
    "data": {
      "$date": {
        "$numberLong": "1684611019382"
      }
    },
    "inicio": 14,
    "fim": 20,
    "valortotal": 154,
    "observacao": "Observação 48",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b56"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 14",
    "funcionario": "Funcionário 47",
    "data": {
      "$date": {
        "$numberLong": "1684611019382"
      }
    },
    "inicio": 14,
    "fim": 20,
    "valortotal": 313,
    "observacao": "Observação 49",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b57"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 71",
    "funcionario": "Funcionário 29",
    "data": {
      "$date": {
        "$numberLong": "1684611019382"
      }
    },
    "inicio": 11,
    "fim": 20,
    "valortotal": 443,
    "observacao": "Observação 50",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b58"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 23",
    "funcionario": "Funcionário 3",
    "data": {
      "$date": {
        "$numberLong": "1684611019382"
      }
    },
    "inicio": 15,
    "fim": 21,
    "valortotal": 247,
    "observacao": "Observação 51",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b59"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 96",
    "funcionario": "Funcionário 42",
    "data": {
      "$date": {
        "$numberLong": "1684611019382"
      }
    },
    "inicio": 10,
    "fim": 19,
    "valortotal": 411,
    "observacao": "Observação 52",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b5a"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 25",
    "funcionario": "Funcionário 48",
    "data": {
      "$date": {
        "$numberLong": "1684611019382"
      }
    },
    "inicio": 8,
    "fim": 22,
    "valortotal": 415,
    "observacao": "Observação 53",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b5b"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 60",
    "funcionario": "Funcionário 34",
    "data": {
      "$date": {
        "$numberLong": "1684611019382"
      }
    },
    "inicio": 14,
    "fim": 19,
    "valortotal": 212,
    "observacao": "Observação 54",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b5c"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 36",
    "funcionario": "Funcionário 18",
    "data": {
      "$date": {
        "$numberLong": "1684611019382"
      }
    },
    "inicio": 10,
    "fim": 19,
    "valortotal": 64,
    "observacao": "Observação 55",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b5d"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 27",
    "funcionario": "Funcionário 41",
    "data": {
      "$date": {
        "$numberLong": "1684611019382"
      }
    },
    "inicio": 9,
    "fim": 20,
    "valortotal": 447,
    "observacao": "Observação 56",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b5e"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 45",
    "funcionario": "Funcionário 26",
    "data": {
      "$date": {
        "$numberLong": "1684611019382"
      }
    },
    "inicio": 15,
    "fim": 20,
    "valortotal": 253,
    "observacao": "Observação 57",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b5f"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 62",
    "funcionario": "Funcionário 18",
    "data": {
      "$date": {
        "$numberLong": "1684611019383"
      }
    },
    "inicio": 16,
    "fim": 21,
    "valortotal": 232,
    "observacao": "Observação 58",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b60"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 7",
    "funcionario": "Funcionário 24",
    "data": {
      "$date": {
        "$numberLong": "1684611019383"
      }
    },
    "inicio": 14,
    "fim": 19,
    "valortotal": 371,
    "observacao": "Observação 59",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b61"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 9",
    "funcionario": "Funcionário 43",
    "data": {
      "$date": {
        "$numberLong": "1684611019383"
      }
    },
    "inicio": 12,
    "fim": 19,
    "valortotal": 161,
    "observacao": "Observação 60",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b62"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 51",
    "funcionario": "Funcionário 17",
    "data": {
      "$date": {
        "$numberLong": "1684611019383"
      }
    },
    "inicio": 12,
    "fim": 19,
    "valortotal": 389,
    "observacao": "Observação 61",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b63"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 97",
    "funcionario": "Funcionário 5",
    "data": {
      "$date": {
        "$numberLong": "1684611019383"
      }
    },
    "inicio": 8,
    "fim": 19,
    "valortotal": 196,
    "observacao": "Observação 62",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b64"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 19",
    "funcionario": "Funcionário 23",
    "data": {
      "$date": {
        "$numberLong": "1684611019383"
      }
    },
    "inicio": 9,
    "fim": 19,
    "valortotal": 105,
    "observacao": "Observação 63",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b65"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 29",
    "funcionario": "Funcionário 14",
    "data": {
      "$date": {
        "$numberLong": "1684611019383"
      }
    },
    "inicio": 18,
    "fim": 22,
    "valortotal": 212,
    "observacao": "Observação 64",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b66"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 25",
    "funcionario": "Funcionário 13",
    "data": {
      "$date": {
        "$numberLong": "1684611019383"
      }
    },
    "inicio": 8,
    "fim": 22,
    "valortotal": 137,
    "observacao": "Observação 65",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b67"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 85",
    "funcionario": "Funcionário 50",
    "data": {
      "$date": {
        "$numberLong": "1684611019383"
      }
    },
    "inicio": 15,
    "fim": 22,
    "valortotal": 130,
    "observacao": "Observação 66",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b68"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 77",
    "funcionario": "Funcionário 5",
    "data": {
      "$date": {
        "$numberLong": "1684611019383"
      }
    },
    "inicio": 9,
    "fim": 22,
    "valortotal": 87,
    "observacao": "Observação 67",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b69"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 20",
    "funcionario": "Funcionário 4",
    "data": {
      "$date": {
        "$numberLong": "1684611019384"
      }
    },
    "inicio": 8,
    "fim": 22,
    "valortotal": 229,
    "observacao": "Observação 68",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b6a"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 80",
    "funcionario": "Funcionário 48",
    "data": {
      "$date": {
        "$numberLong": "1684611019384"
      }
    },
    "inicio": 18,
    "fim": 19,
    "valortotal": 348,
    "observacao": "Observação 69",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b6b"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 37",
    "funcionario": "Funcionário 22",
    "data": {
      "$date": {
        "$numberLong": "1684611019384"
      }
    },
    "inicio": 12,
    "fim": 21,
    "valortotal": 77,
    "observacao": "Observação 70",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b6c"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 5",
    "funcionario": "Funcionário 35",
    "data": {
      "$date": {
        "$numberLong": "1684611019384"
      }
    },
    "inicio": 9,
    "fim": 19,
    "valortotal": 249,
    "observacao": "Observação 71",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b6d"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 73",
    "funcionario": "Funcionário 50",
    "data": {
      "$date": {
        "$numberLong": "1684611019384"
      }
    },
    "inicio": 14,
    "fim": 20,
    "valortotal": 121,
    "observacao": "Observação 72",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b6e"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 88",
    "funcionario": "Funcionário 48",
    "data": {
      "$date": {
        "$numberLong": "1684611019384"
      }
    },
    "inicio": 13,
    "fim": 20,
    "valortotal": 189,
    "observacao": "Observação 73",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b6f"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 65",
    "funcionario": "Funcionário 19",
    "data": {
      "$date": {
        "$numberLong": "1684611019384"
      }
    },
    "inicio": 15,
    "fim": 20,
    "valortotal": 209,
    "observacao": "Observação 74",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b70"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 34",
    "funcionario": "Funcionário 23",
    "data": {
      "$date": {
        "$numberLong": "1684611019384"
      }
    },
    "inicio": 10,
    "fim": 22,
    "valortotal": 381,
    "observacao": "Observação 75",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b71"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 44",
    "funcionario": "Funcionário 32",
    "data": {
      "$date": {
        "$numberLong": "1684611019384"
      }
    },
    "inicio": 15,
    "fim": 21,
    "valortotal": 246,
    "observacao": "Observação 76",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b72"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 57",
    "funcionario": "Funcionário 1",
    "data": {
      "$date": {
        "$numberLong": "1684611019384"
      }
    },
    "inicio": 13,
    "fim": 21,
    "valortotal": 229,
    "observacao": "Observação 77",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b73"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 68",
    "funcionario": "Funcionário 38",
    "data": {
      "$date": {
        "$numberLong": "1684611019384"
      }
    },
    "inicio": 14,
    "fim": 22,
    "valortotal": 213,
    "observacao": "Observação 78",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b74"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 86",
    "funcionario": "Funcionário 12",
    "data": {
      "$date": {
        "$numberLong": "1684611019384"
      }
    },
    "inicio": 11,
    "fim": 20,
    "valortotal": 456,
    "observacao": "Observação 79",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b75"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 37",
    "funcionario": "Funcionário 7",
    "data": {
      "$date": {
        "$numberLong": "1684611019384"
      }
    },
    "inicio": 12,
    "fim": 19,
    "valortotal": 83,
    "observacao": "Observação 80",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b76"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 1",
    "funcionario": "Funcionário 25",
    "data": {
      "$date": {
        "$numberLong": "1684611019384"
      }
    },
    "inicio": 13,
    "fim": 19,
    "valortotal": 219,
    "observacao": "Observação 81",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b77"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 55",
    "funcionario": "Funcionário 18",
    "data": {
      "$date": {
        "$numberLong": "1684611019385"
      }
    },
    "inicio": 17,
    "fim": 19,
    "valortotal": 209,
    "observacao": "Observação 82",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b78"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 22",
    "funcionario": "Funcionário 8",
    "data": {
      "$date": {
        "$numberLong": "1684611019385"
      }
    },
    "inicio": 15,
    "fim": 19,
    "valortotal": 259,
    "observacao": "Observação 83",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b79"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 6",
    "funcionario": "Funcionário 45",
    "data": {
      "$date": {
        "$numberLong": "1684611019385"
      }
    },
    "inicio": 15,
    "fim": 19,
    "valortotal": 86,
    "observacao": "Observação 84",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b7a"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 85",
    "funcionario": "Funcionário 10",
    "data": {
      "$date": {
        "$numberLong": "1684611019385"
      }
    },
    "inicio": 17,
    "fim": 20,
    "valortotal": 470,
    "observacao": "Observação 85",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b7b"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 52",
    "funcionario": "Funcionário 40",
    "data": {
      "$date": {
        "$numberLong": "1684611019385"
      }
    },
    "inicio": 18,
    "fim": 20,
    "valortotal": 59,
    "observacao": "Observação 86",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b7c"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 78",
    "funcionario": "Funcionário 12",
    "data": {
      "$date": {
        "$numberLong": "1684611019385"
      }
    },
    "inicio": 13,
    "fim": 22,
    "valortotal": 103,
    "observacao": "Observação 87",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b7d"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 46",
    "funcionario": "Funcionário 44",
    "data": {
      "$date": {
        "$numberLong": "1684611019385"
      }
    },
    "inicio": 14,
    "fim": 22,
    "valortotal": 466,
    "observacao": "Observação 88",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b7e"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 72",
    "funcionario": "Funcionário 3",
    "data": {
      "$date": {
        "$numberLong": "1684611019385"
      }
    },
    "inicio": 12,
    "fim": 20,
    "valortotal": 299,
    "observacao": "Observação 89",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b7f"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 96",
    "funcionario": "Funcionário 12",
    "data": {
      "$date": {
        "$numberLong": "1684611019385"
      }
    },
    "inicio": 10,
    "fim": 21,
    "valortotal": 325,
    "observacao": "Observação 90",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b80"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 45",
    "funcionario": "Funcionário 33",
    "data": {
      "$date": {
        "$numberLong": "1684611019385"
      }
    },
    "inicio": 16,
    "fim": 22,
    "valortotal": 353,
    "observacao": "Observação 91",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b81"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 85",
    "funcionario": "Funcionário 19",
    "data": {
      "$date": {
        "$numberLong": "1684611019385"
      }
    },
    "inicio": 11,
    "fim": 19,
    "valortotal": 403,
    "observacao": "Observação 92",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b82"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 1",
    "funcionario": "Funcionário 16",
    "data": {
      "$date": {
        "$numberLong": "1684611019385"
      }
    },
    "inicio": 12,
    "fim": 22,
    "valortotal": 110,
    "observacao": "Observação 93",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b83"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 55",
    "funcionario": "Funcionário 42",
    "data": {
      "$date": {
        "$numberLong": "1684611019385"
      }
    },
    "inicio": 10,
    "fim": 22,
    "valortotal": 396,
    "observacao": "Observação 94",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b84"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 10",
    "funcionario": "Funcionário 6",
    "data": {
      "$date": {
        "$numberLong": "1684611019385"
      }
    },
    "inicio": 10,
    "fim": 20,
    "valortotal": 380,
    "observacao": "Observação 95",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b85"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 43",
    "funcionario": "Funcionário 29",
    "data": {
      "$date": {
        "$numberLong": "1684611019385"
      }
    },
    "inicio": 17,
    "fim": 20,
    "valortotal": 399,
    "observacao": "Observação 96",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b86"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 73",
    "funcionario": "Funcionário 9",
    "data": {
      "$date": {
        "$numberLong": "1684611019385"
      }
    },
    "inicio": 15,
    "fim": 21,
    "valortotal": 462,
    "observacao": "Observação 97",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b87"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 9",
    "funcionario": "Funcionário 36",
    "data": {
      "$date": {
        "$numberLong": "1684611019386"
      }
    },
    "inicio": 16,
    "fim": 19,
    "valortotal": 203,
    "observacao": "Observação 98",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b88"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 39",
    "funcionario": "Funcionário 5",
    "data": {
      "$date": {
        "$numberLong": "1684611019386"
      }
    },
    "inicio": 12,
    "fim": 22,
    "valortotal": 163,
    "observacao": "Observação 99",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b89"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 61",
    "funcionario": "Funcionário 1",
    "data": {
      "$date": {
        "$numberLong": "1684611019386"
      }
    },
    "inicio": 16,
    "fim": 21,
    "valortotal": 199,
    "observacao": "Observação 100",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b8a"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 36",
    "funcionario": "Funcionário 25",
    "data": {
      "$date": {
        "$numberLong": "1684611019386"
      }
    },
    "inicio": 12,
    "fim": 22,
    "valortotal": 469,
    "observacao": "Observação 101",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b8b"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 48",
    "funcionario": "Funcionário 41",
    "data": {
      "$date": {
        "$numberLong": "1684611019386"
      }
    },
    "inicio": 17,
    "fim": 22,
    "valortotal": 282,
    "observacao": "Observação 102",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b8c"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 64",
    "funcionario": "Funcionário 49",
    "data": {
      "$date": {
        "$numberLong": "1684611019386"
      }
    },
    "inicio": 15,
    "fim": 19,
    "valortotal": 414,
    "observacao": "Observação 103",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b8d"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 69",
    "funcionario": "Funcionário 30",
    "data": {
      "$date": {
        "$numberLong": "1684611019386"
      }
    },
    "inicio": 10,
    "fim": 21,
    "valortotal": 162,
    "observacao": "Observação 104",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b8e"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 44",
    "funcionario": "Funcionário 2",
    "data": {
      "$date": {
        "$numberLong": "1684611019386"
      }
    },
    "inicio": 13,
    "fim": 22,
    "valortotal": 475,
    "observacao": "Observação 105",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b8f"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 9",
    "funcionario": "Funcionário 41",
    "data": {
      "$date": {
        "$numberLong": "1684611019386"
      }
    },
    "inicio": 10,
    "fim": 21,
    "valortotal": 295,
    "observacao": "Observação 106",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b90"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 53",
    "funcionario": "Funcionário 42",
    "data": {
      "$date": {
        "$numberLong": "1684611019386"
      }
    },
    "inicio": 18,
    "fim": 21,
    "valortotal": 301,
    "observacao": "Observação 107",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b91"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 53",
    "funcionario": "Funcionário 17",
    "data": {
      "$date": {
        "$numberLong": "1684611019386"
      }
    },
    "inicio": 15,
    "fim": 20,
    "valortotal": 142,
    "observacao": "Observação 108",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b92"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 96",
    "funcionario": "Funcionário 46",
    "data": {
      "$date": {
        "$numberLong": "1684611019386"
      }
    },
    "inicio": 13,
    "fim": 21,
    "valortotal": 160,
    "observacao": "Observação 109",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b93"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 68",
    "funcionario": "Funcionário 2",
    "data": {
      "$date": {
        "$numberLong": "1684611019386"
      }
    },
    "inicio": 8,
    "fim": 19,
    "valortotal": 293,
    "observacao": "Observação 110",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b94"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 48",
    "funcionario": "Funcionário 45",
    "data": {
      "$date": {
        "$numberLong": "1684611019386"
      }
    },
    "inicio": 15,
    "fim": 20,
    "valortotal": 314,
    "observacao": "Observação 111",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b95"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 92",
    "funcionario": "Funcionário 28",
    "data": {
      "$date": {
        "$numberLong": "1684611019387"
      }
    },
    "inicio": 12,
    "fim": 21,
    "valortotal": 404,
    "observacao": "Observação 112",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b96"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 93",
    "funcionario": "Funcionário 18",
    "data": {
      "$date": {
        "$numberLong": "1684611019387"
      }
    },
    "inicio": 17,
    "fim": 22,
    "valortotal": 483,
    "observacao": "Observação 113",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b97"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 90",
    "funcionario": "Funcionário 14",
    "data": {
      "$date": {
        "$numberLong": "1684611019387"
      }
    },
    "inicio": 12,
    "fim": 20,
    "valortotal": 62,
    "observacao": "Observação 114",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b98"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 45",
    "funcionario": "Funcionário 16",
    "data": {
      "$date": {
        "$numberLong": "1684611019387"
      }
    },
    "inicio": 18,
    "fim": 20,
    "valortotal": 76,
    "observacao": "Observação 115",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b99"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 67",
    "funcionario": "Funcionário 11",
    "data": {
      "$date": {
        "$numberLong": "1684611019387"
      }
    },
    "inicio": 12,
    "fim": 19,
    "valortotal": 326,
    "observacao": "Observação 116",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b9a"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 3",
    "funcionario": "Funcionário 16",
    "data": {
      "$date": {
        "$numberLong": "1684611019387"
      }
    },
    "inicio": 13,
    "fim": 20,
    "valortotal": 409,
    "observacao": "Observação 117",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b9b"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 7",
    "funcionario": "Funcionário 24",
    "data": {
      "$date": {
        "$numberLong": "1684611019387"
      }
    },
    "inicio": 10,
    "fim": 19,
    "valortotal": 142,
    "observacao": "Observação 118",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b9c"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 75",
    "funcionario": "Funcionário 38",
    "data": {
      "$date": {
        "$numberLong": "1684611019387"
      }
    },
    "inicio": 8,
    "fim": 20,
    "valortotal": 319,
    "observacao": "Observação 119",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b9d"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 66",
    "funcionario": "Funcionário 46",
    "data": {
      "$date": {
        "$numberLong": "1684611019387"
      }
    },
    "inicio": 15,
    "fim": 21,
    "valortotal": 187,
    "observacao": "Observação 120",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b9e"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 81",
    "funcionario": "Funcionário 46",
    "data": {
      "$date": {
        "$numberLong": "1684611019387"
      }
    },
    "inicio": 13,
    "fim": 21,
    "valortotal": 147,
    "observacao": "Observação 121",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854b9f"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 65",
    "funcionario": "Funcionário 31",
    "data": {
      "$date": {
        "$numberLong": "1684611019387"
      }
    },
    "inicio": 16,
    "fim": 19,
    "valortotal": 225,
    "observacao": "Observação 122",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ba0"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 72",
    "funcionario": "Funcionário 29",
    "data": {
      "$date": {
        "$numberLong": "1684611019387"
      }
    },
    "inicio": 15,
    "fim": 22,
    "valortotal": 278,
    "observacao": "Observação 123",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ba1"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 30",
    "funcionario": "Funcionário 35",
    "data": {
      "$date": {
        "$numberLong": "1684611019387"
      }
    },
    "inicio": 18,
    "fim": 21,
    "valortotal": 194,
    "observacao": "Observação 124",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ba2"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 89",
    "funcionario": "Funcionário 47",
    "data": {
      "$date": {
        "$numberLong": "1684611019387"
      }
    },
    "inicio": 10,
    "fim": 20,
    "valortotal": 150,
    "observacao": "Observação 125",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ba3"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 50",
    "funcionario": "Funcionário 20",
    "data": {
      "$date": {
        "$numberLong": "1684611019387"
      }
    },
    "inicio": 16,
    "fim": 20,
    "valortotal": 444,
    "observacao": "Observação 126",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ba4"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 12",
    "funcionario": "Funcionário 3",
    "data": {
      "$date": {
        "$numberLong": "1684611019388"
      }
    },
    "inicio": 13,
    "fim": 19,
    "valortotal": 148,
    "observacao": "Observação 127",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ba5"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 42",
    "funcionario": "Funcionário 16",
    "data": {
      "$date": {
        "$numberLong": "1684611019388"
      }
    },
    "inicio": 13,
    "fim": 22,
    "valortotal": 113,
    "observacao": "Observação 128",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ba6"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 3",
    "funcionario": "Funcionário 46",
    "data": {
      "$date": {
        "$numberLong": "1684611019388"
      }
    },
    "inicio": 10,
    "fim": 21,
    "valortotal": 75,
    "observacao": "Observação 129",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ba7"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 94",
    "funcionario": "Funcionário 45",
    "data": {
      "$date": {
        "$numberLong": "1684611019388"
      }
    },
    "inicio": 12,
    "fim": 19,
    "valortotal": 79,
    "observacao": "Observação 130",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ba8"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 75",
    "funcionario": "Funcionário 27",
    "data": {
      "$date": {
        "$numberLong": "1684611019388"
      }
    },
    "inicio": 13,
    "fim": 20,
    "valortotal": 303,
    "observacao": "Observação 131",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ba9"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 41",
    "funcionario": "Funcionário 36",
    "data": {
      "$date": {
        "$numberLong": "1684611019388"
      }
    },
    "inicio": 10,
    "fim": 19,
    "valortotal": 436,
    "observacao": "Observação 132",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854baa"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 22",
    "funcionario": "Funcionário 6",
    "data": {
      "$date": {
        "$numberLong": "1684611019388"
      }
    },
    "inicio": 15,
    "fim": 21,
    "valortotal": 327,
    "observacao": "Observação 133",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854bab"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 47",
    "funcionario": "Funcionário 17",
    "data": {
      "$date": {
        "$numberLong": "1684611019388"
      }
    },
    "inicio": 15,
    "fim": 21,
    "valortotal": 212,
    "observacao": "Observação 134",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854bac"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 45",
    "funcionario": "Funcionário 8",
    "data": {
      "$date": {
        "$numberLong": "1684611019388"
      }
    },
    "inicio": 16,
    "fim": 22,
    "valortotal": 127,
    "observacao": "Observação 135",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854bad"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 25",
    "funcionario": "Funcionário 48",
    "data": {
      "$date": {
        "$numberLong": "1684611019388"
      }
    },
    "inicio": 9,
    "fim": 22,
    "valortotal": 382,
    "observacao": "Observação 136",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854bae"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 47",
    "funcionario": "Funcionário 14",
    "data": {
      "$date": {
        "$numberLong": "1684611019388"
      }
    },
    "inicio": 8,
    "fim": 22,
    "valortotal": 118,
    "observacao": "Observação 137",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854baf"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 32",
    "funcionario": "Funcionário 14",
    "data": {
      "$date": {
        "$numberLong": "1684611019388"
      }
    },
    "inicio": 13,
    "fim": 20,
    "valortotal": 347,
    "observacao": "Observação 138",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854bb0"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 60",
    "funcionario": "Funcionário 16",
    "data": {
      "$date": {
        "$numberLong": "1684611019388"
      }
    },
    "inicio": 15,
    "fim": 22,
    "valortotal": 227,
    "observacao": "Observação 139",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854bb1"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 59",
    "funcionario": "Funcionário 12",
    "data": {
      "$date": {
        "$numberLong": "1684611019388"
      }
    },
    "inicio": 8,
    "fim": 19,
    "valortotal": 258,
    "observacao": "Observação 140",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854bb2"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 59",
    "funcionario": "Funcionário 30",
    "data": {
      "$date": {
        "$numberLong": "1684611019388"
      }
    },
    "inicio": 17,
    "fim": 19,
    "valortotal": 104,
    "observacao": "Observação 141",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854bb3"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 51",
    "funcionario": "Funcionário 27",
    "data": {
      "$date": {
        "$numberLong": "1684611019389"
      }
    },
    "inicio": 10,
    "fim": 22,
    "valortotal": 176,
    "observacao": "Observação 142",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854bb4"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 74",
    "funcionario": "Funcionário 49",
    "data": {
      "$date": {
        "$numberLong": "1684611019389"
      }
    },
    "inicio": 12,
    "fim": 20,
    "valortotal": 169,
    "observacao": "Observação 143",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854bb5"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 64",
    "funcionario": "Funcionário 13",
    "data": {
      "$date": {
        "$numberLong": "1684611019389"
      }
    },
    "inicio": 13,
    "fim": 19,
    "valortotal": 50,
    "observacao": "Observação 144",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854bb6"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 65",
    "funcionario": "Funcionário 17",
    "data": {
      "$date": {
        "$numberLong": "1684611019389"
      }
    },
    "inicio": 16,
    "fim": 22,
    "valortotal": 182,
    "observacao": "Observação 145",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854bb7"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 64",
    "funcionario": "Funcionário 48",
    "data": {
      "$date": {
        "$numberLong": "1684611019389"
      }
    },
    "inicio": 15,
    "fim": 19,
    "valortotal": 158,
    "observacao": "Observação 146",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854bb8"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 33",
    "funcionario": "Funcionário 22",
    "data": {
      "$date": {
        "$numberLong": "1684611019389"
      }
    },
    "inicio": 10,
    "fim": 21,
    "valortotal": 173,
    "observacao": "Observação 147",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854bb9"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 40",
    "funcionario": "Funcionário 7",
    "data": {
      "$date": {
        "$numberLong": "1684611019389"
      }
    },
    "inicio": 14,
    "fim": 21,
    "valortotal": 185,
    "observacao": "Observação 148",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854bba"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 16",
    "funcionario": "Funcionário 23",
    "data": {
      "$date": {
        "$numberLong": "1684611019389"
      }
    },
    "inicio": 15,
    "fim": 19,
    "valortotal": 225,
    "observacao": "Observação 149",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854bbb"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 62",
    "funcionario": "Funcionário 34",
    "data": {
      "$date": {
        "$numberLong": "1684611019389"
      }
    },
    "inicio": 14,
    "fim": 22,
    "valortotal": 79,
    "observacao": "Observação 150",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854bbc"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 42",
    "funcionario": "Funcionário 9",
    "data": {
      "$date": {
        "$numberLong": "1684611019389"
      }
    },
    "inicio": 14,
    "fim": 19,
    "valortotal": 319,
    "observacao": "Observação 151",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854bbd"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 14",
    "funcionario": "Funcionário 30",
    "data": {
      "$date": {
        "$numberLong": "1684611019389"
      }
    },
    "inicio": 8,
    "fim": 22,
    "valortotal": 486,
    "observacao": "Observação 152",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854bbe"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 19",
    "funcionario": "Funcionário 26",
    "data": {
      "$date": {
        "$numberLong": "1684611019389"
      }
    },
    "inicio": 15,
    "fim": 22,
    "valortotal": 96,
    "observacao": "Observação 153",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854bbf"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 52",
    "funcionario": "Funcionário 1",
    "data": {
      "$date": {
        "$numberLong": "1684611019389"
      }
    },
    "inicio": 15,
    "fim": 21,
    "valortotal": 274,
    "observacao": "Observação 154",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854bc0"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 43",
    "funcionario": "Funcionário 26",
    "data": {
      "$date": {
        "$numberLong": "1684611019390"
      }
    },
    "inicio": 18,
    "fim": 19,
    "valortotal": 246,
    "observacao": "Observação 155",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854bc1"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 64",
    "funcionario": "Funcionário 43",
    "data": {
      "$date": {
        "$numberLong": "1684611019390"
      }
    },
    "inicio": 15,
    "fim": 22,
    "valortotal": 365,
    "observacao": "Observação 156",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854bc2"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 88",
    "funcionario": "Funcionário 7",
    "data": {
      "$date": {
        "$numberLong": "1684611019390"
      }
    },
    "inicio": 16,
    "fim": 21,
    "valortotal": 370,
    "observacao": "Observação 157",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854bc3"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 96",
    "funcionario": "Funcionário 49",
    "data": {
      "$date": {
        "$numberLong": "1684611019390"
      }
    },
    "inicio": 16,
    "fim": 21,
    "valortotal": 400,
    "observacao": "Observação 158",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854bc4"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 37",
    "funcionario": "Funcionário 13",
    "data": {
      "$date": {
        "$numberLong": "1684611019390"
      }
    },
    "inicio": 8,
    "fim": 20,
    "valortotal": 455,
    "observacao": "Observação 159",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854bc5"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 53",
    "funcionario": "Funcionário 43",
    "data": {
      "$date": {
        "$numberLong": "1684611019390"
      }
    },
    "inicio": 14,
    "fim": 22,
    "valortotal": 407,
    "observacao": "Observação 160",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854bc6"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 73",
    "funcionario": "Funcionário 11",
    "data": {
      "$date": {
        "$numberLong": "1684611019390"
      }
    },
    "inicio": 16,
    "fim": 19,
    "valortotal": 388,
    "observacao": "Observação 161",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854bc7"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 94",
    "funcionario": "Funcionário 31",
    "data": {
      "$date": {
        "$numberLong": "1684611019391"
      }
    },
    "inicio": 13,
    "fim": 20,
    "valortotal": 357,
    "observacao": "Observação 162",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854bc8"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 53",
    "funcionario": "Funcionário 33",
    "data": {
      "$date": {
        "$numberLong": "1684611019391"
      }
    },
    "inicio": 14,
    "fim": 19,
    "valortotal": 456,
    "observacao": "Observação 163",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854bc9"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 71",
    "funcionario": "Funcionário 37",
    "data": {
      "$date": {
        "$numberLong": "1684611019391"
      }
    },
    "inicio": 11,
    "fim": 19,
    "valortotal": 482,
    "observacao": "Observação 164",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854bca"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 15",
    "funcionario": "Funcionário 18",
    "data": {
      "$date": {
        "$numberLong": "1684611019394"
      }
    },
    "inicio": 14,
    "fim": 19,
    "valortotal": 177,
    "observacao": "Observação 165",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854bcb"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 54",
    "funcionario": "Funcionário 37",
    "data": {
      "$date": {
        "$numberLong": "1684611019394"
      }
    },
    "inicio": 11,
    "fim": 19,
    "valortotal": 436,
    "observacao": "Observação 166",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854bcc"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 55",
    "funcionario": "Funcionário 23",
    "data": {
      "$date": {
        "$numberLong": "1684611019394"
      }
    },
    "inicio": 13,
    "fim": 21,
    "valortotal": 168,
    "observacao": "Observação 167",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854bcd"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 52",
    "funcionario": "Funcionário 46",
    "data": {
      "$date": {
        "$numberLong": "1684611019394"
      }
    },
    "inicio": 12,
    "fim": 21,
    "valortotal": 92,
    "observacao": "Observação 168",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854bce"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 12",
    "funcionario": "Funcionário 19",
    "data": {
      "$date": {
        "$numberLong": "1684611019394"
      }
    },
    "inicio": 10,
    "fim": 21,
    "valortotal": 421,
    "observacao": "Observação 169",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854bcf"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 34",
    "funcionario": "Funcionário 49",
    "data": {
      "$date": {
        "$numberLong": "1684611019394"
      }
    },
    "inicio": 16,
    "fim": 22,
    "valortotal": 374,
    "observacao": "Observação 170",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854bd0"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 52",
    "funcionario": "Funcionário 17",
    "data": {
      "$date": {
        "$numberLong": "1684611019394"
      }
    },
    "inicio": 10,
    "fim": 20,
    "valortotal": 176,
    "observacao": "Observação 171",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854bd1"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 15",
    "funcionario": "Funcionário 17",
    "data": {
      "$date": {
        "$numberLong": "1684611019395"
      }
    },
    "inicio": 8,
    "fim": 19,
    "valortotal": 74,
    "observacao": "Observação 172",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854bd2"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 29",
    "funcionario": "Funcionário 7",
    "data": {
      "$date": {
        "$numberLong": "1684611019395"
      }
    },
    "inicio": 15,
    "fim": 22,
    "valortotal": 497,
    "observacao": "Observação 173",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854bd3"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 15",
    "funcionario": "Funcionário 27",
    "data": {
      "$date": {
        "$numberLong": "1684611019395"
      }
    },
    "inicio": 8,
    "fim": 21,
    "valortotal": 306,
    "observacao": "Observação 174",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854bd4"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 21",
    "funcionario": "Funcionário 9",
    "data": {
      "$date": {
        "$numberLong": "1684611019395"
      }
    },
    "inicio": 12,
    "fim": 19,
    "valortotal": 443,
    "observacao": "Observação 175",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854bd5"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 64",
    "funcionario": "Funcionário 33",
    "data": {
      "$date": {
        "$numberLong": "1684611019395"
      }
    },
    "inicio": 12,
    "fim": 21,
    "valortotal": 386,
    "observacao": "Observação 176",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854bd6"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 48",
    "funcionario": "Funcionário 25",
    "data": {
      "$date": {
        "$numberLong": "1684611019395"
      }
    },
    "inicio": 11,
    "fim": 21,
    "valortotal": 192,
    "observacao": "Observação 177",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854bd7"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 95",
    "funcionario": "Funcionário 23",
    "data": {
      "$date": {
        "$numberLong": "1684611019395"
      }
    },
    "inicio": 8,
    "fim": 21,
    "valortotal": 420,
    "observacao": "Observação 178",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854bd8"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 38",
    "funcionario": "Funcionário 8",
    "data": {
      "$date": {
        "$numberLong": "1684611019396"
      }
    },
    "inicio": 12,
    "fim": 21,
    "valortotal": 269,
    "observacao": "Observação 179",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854bd9"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 100",
    "funcionario": "Funcionário 29",
    "data": {
      "$date": {
        "$numberLong": "1684611019396"
      }
    },
    "inicio": 17,
    "fim": 19,
    "valortotal": 276,
    "observacao": "Observação 180",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854bda"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 53",
    "funcionario": "Funcionário 43",
    "data": {
      "$date": {
        "$numberLong": "1684611019396"
      }
    },
    "inicio": 18,
    "fim": 22,
    "valortotal": 230,
    "observacao": "Observação 181",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854bdb"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 74",
    "funcionario": "Funcionário 34",
    "data": {
      "$date": {
        "$numberLong": "1684611019396"
      }
    },
    "inicio": 17,
    "fim": 20,
    "valortotal": 175,
    "observacao": "Observação 182",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854bdc"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 30",
    "funcionario": "Funcionário 12",
    "data": {
      "$date": {
        "$numberLong": "1684611019396"
      }
    },
    "inicio": 8,
    "fim": 19,
    "valortotal": 340,
    "observacao": "Observação 183",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854bdd"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 12",
    "funcionario": "Funcionário 22",
    "data": {
      "$date": {
        "$numberLong": "1684611019397"
      }
    },
    "inicio": 11,
    "fim": 20,
    "valortotal": 152,
    "observacao": "Observação 184",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854bde"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 57",
    "funcionario": "Funcionário 42",
    "data": {
      "$date": {
        "$numberLong": "1684611019399"
      }
    },
    "inicio": 9,
    "fim": 19,
    "valortotal": 192,
    "observacao": "Observação 185",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854bdf"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 75",
    "funcionario": "Funcionário 1",
    "data": {
      "$date": {
        "$numberLong": "1684611019400"
      }
    },
    "inicio": 11,
    "fim": 22,
    "valortotal": 88,
    "observacao": "Observação 186",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854be0"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 25",
    "funcionario": "Funcionário 30",
    "data": {
      "$date": {
        "$numberLong": "1684611019400"
      }
    },
    "inicio": 9,
    "fim": 19,
    "valortotal": 303,
    "observacao": "Observação 187",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854be1"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 26",
    "funcionario": "Funcionário 49",
    "data": {
      "$date": {
        "$numberLong": "1684611019400"
      }
    },
    "inicio": 13,
    "fim": 22,
    "valortotal": 105,
    "observacao": "Observação 188",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854be2"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 91",
    "funcionario": "Funcionário 16",
    "data": {
      "$date": {
        "$numberLong": "1684611019400"
      }
    },
    "inicio": 10,
    "fim": 20,
    "valortotal": 218,
    "observacao": "Observação 189",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854be3"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 48",
    "funcionario": "Funcionário 44",
    "data": {
      "$date": {
        "$numberLong": "1684611019401"
      }
    },
    "inicio": 15,
    "fim": 20,
    "valortotal": 283,
    "observacao": "Observação 190",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854be4"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 89",
    "funcionario": "Funcionário 14",
    "data": {
      "$date": {
        "$numberLong": "1684611019401"
      }
    },
    "inicio": 18,
    "fim": 19,
    "valortotal": 283,
    "observacao": "Observação 191",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854be5"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 78",
    "funcionario": "Funcionário 11",
    "data": {
      "$date": {
        "$numberLong": "1684611019401"
      }
    },
    "inicio": 13,
    "fim": 22,
    "valortotal": 315,
    "observacao": "Observação 192",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854be6"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 28",
    "funcionario": "Funcionário 48",
    "data": {
      "$date": {
        "$numberLong": "1684611019401"
      }
    },
    "inicio": 16,
    "fim": 20,
    "valortotal": 144,
    "observacao": "Observação 193",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854be7"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 61",
    "funcionario": "Funcionário 15",
    "data": {
      "$date": {
        "$numberLong": "1684611019401"
      }
    },
    "inicio": 12,
    "fim": 21,
    "valortotal": 254,
    "observacao": "Observação 194",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854be8"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 50",
    "funcionario": "Funcionário 2",
    "data": {
      "$date": {
        "$numberLong": "1684611019401"
      }
    },
    "inicio": 8,
    "fim": 20,
    "valortotal": 95,
    "observacao": "Observação 195",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854be9"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 17",
    "funcionario": "Funcionário 19",
    "data": {
      "$date": {
        "$numberLong": "1684611019401"
      }
    },
    "inicio": 10,
    "fim": 19,
    "valortotal": 325,
    "observacao": "Observação 196",
    "status": "R",
    "__v": 0
  }];
  reservaModel.reservaModel = {
    find: jest.fn().mockResolvedValue(reservaMock),
  };

  const req = {};
  const res = {
    json: jest.fn(),
    status: jest.fn().mockReturnThis(),
  };

  await reservaController.getReservas(req, res);

  expect(res.status).toHaveBeenCalledWith(200);
  expect(res.json).toHaveBeenCalledWith(reservaMock);
});
