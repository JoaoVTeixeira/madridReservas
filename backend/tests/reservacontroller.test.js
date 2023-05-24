const reservaController = require('../controllers/reservas');
const reservaModel = require('../models/reservas');
jest.mock('../models/reservas.js');

test('Create Salas cria um sala', async () => {
  const reservaMock = [
    {
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
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854bea"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 79",
    "funcionario": "Funcionário 3",
    "data": {
      "$date": {
        "$numberLong": "1684611019401"
      }
    },
    "inicio": 8,
    "fim": 21,
    "valortotal": 493,
    "observacao": "Observação 197",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854beb"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 85",
    "funcionario": "Funcionário 23",
    "data": {
      "$date": {
        "$numberLong": "1684611019402"
      }
    },
    "inicio": 10,
    "fim": 19,
    "valortotal": 273,
    "observacao": "Observação 198",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854bec"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 50",
    "funcionario": "Funcionário 20",
    "data": {
      "$date": {
        "$numberLong": "1684611019402"
      }
    },
    "inicio": 18,
    "fim": 20,
    "valortotal": 77,
    "observacao": "Observação 199",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854bed"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 96",
    "funcionario": "Funcionário 5",
    "data": {
      "$date": {
        "$numberLong": "1684611019402"
      }
    },
    "inicio": 16,
    "fim": 20,
    "valortotal": 168,
    "observacao": "Observação 200",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854bee"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 14",
    "funcionario": "Funcionário 1",
    "data": {
      "$date": {
        "$numberLong": "1684611019402"
      }
    },
    "inicio": 14,
    "fim": 20,
    "valortotal": 252,
    "observacao": "Observação 201",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854bef"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 38",
    "funcionario": "Funcionário 10",
    "data": {
      "$date": {
        "$numberLong": "1684611019402"
      }
    },
    "inicio": 14,
    "fim": 22,
    "valortotal": 214,
    "observacao": "Observação 202",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854bf0"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 40",
    "funcionario": "Funcionário 34",
    "data": {
      "$date": {
        "$numberLong": "1684611019402"
      }
    },
    "inicio": 15,
    "fim": 19,
    "valortotal": 424,
    "observacao": "Observação 203",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854bf1"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 100",
    "funcionario": "Funcionário 11",
    "data": {
      "$date": {
        "$numberLong": "1684611019402"
      }
    },
    "inicio": 11,
    "fim": 22,
    "valortotal": 478,
    "observacao": "Observação 204",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854bf2"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 98",
    "funcionario": "Funcionário 1",
    "data": {
      "$date": {
        "$numberLong": "1684611019402"
      }
    },
    "inicio": 14,
    "fim": 21,
    "valortotal": 50,
    "observacao": "Observação 205",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854bf3"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 3",
    "funcionario": "Funcionário 46",
    "data": {
      "$date": {
        "$numberLong": "1684611019402"
      }
    },
    "inicio": 10,
    "fim": 20,
    "valortotal": 310,
    "observacao": "Observação 206",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854bf4"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 79",
    "funcionario": "Funcionário 41",
    "data": {
      "$date": {
        "$numberLong": "1684611019403"
      }
    },
    "inicio": 12,
    "fim": 20,
    "valortotal": 340,
    "observacao": "Observação 207",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854bf5"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 19",
    "funcionario": "Funcionário 32",
    "data": {
      "$date": {
        "$numberLong": "1684611019403"
      }
    },
    "inicio": 17,
    "fim": 20,
    "valortotal": 355,
    "observacao": "Observação 208",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854bf6"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 19",
    "funcionario": "Funcionário 27",
    "data": {
      "$date": {
        "$numberLong": "1684611019403"
      }
    },
    "inicio": 8,
    "fim": 22,
    "valortotal": 225,
    "observacao": "Observação 209",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854bf7"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 73",
    "funcionario": "Funcionário 27",
    "data": {
      "$date": {
        "$numberLong": "1684611019403"
      }
    },
    "inicio": 17,
    "fim": 21,
    "valortotal": 310,
    "observacao": "Observação 210",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854bf8"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 66",
    "funcionario": "Funcionário 13",
    "data": {
      "$date": {
        "$numberLong": "1684611019403"
      }
    },
    "inicio": 16,
    "fim": 21,
    "valortotal": 175,
    "observacao": "Observação 211",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854bf9"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 95",
    "funcionario": "Funcionário 43",
    "data": {
      "$date": {
        "$numberLong": "1684611019403"
      }
    },
    "inicio": 11,
    "fim": 19,
    "valortotal": 426,
    "observacao": "Observação 212",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854bfa"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 2",
    "funcionario": "Funcionário 41",
    "data": {
      "$date": {
        "$numberLong": "1684611019404"
      }
    },
    "inicio": 15,
    "fim": 21,
    "valortotal": 345,
    "observacao": "Observação 213",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854bfb"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 67",
    "funcionario": "Funcionário 28",
    "data": {
      "$date": {
        "$numberLong": "1684611019404"
      }
    },
    "inicio": 15,
    "fim": 21,
    "valortotal": 496,
    "observacao": "Observação 214",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854bfc"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 41",
    "funcionario": "Funcionário 33",
    "data": {
      "$date": {
        "$numberLong": "1684611019404"
      }
    },
    "inicio": 10,
    "fim": 21,
    "valortotal": 302,
    "observacao": "Observação 215",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854bfd"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 23",
    "funcionario": "Funcionário 2",
    "data": {
      "$date": {
        "$numberLong": "1684611019404"
      }
    },
    "inicio": 14,
    "fim": 22,
    "valortotal": 196,
    "observacao": "Observação 216",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854bfe"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 13",
    "funcionario": "Funcionário 10",
    "data": {
      "$date": {
        "$numberLong": "1684611019404"
      }
    },
    "inicio": 10,
    "fim": 19,
    "valortotal": 450,
    "observacao": "Observação 217",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854bff"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 30",
    "funcionario": "Funcionário 26",
    "data": {
      "$date": {
        "$numberLong": "1684611019404"
      }
    },
    "inicio": 15,
    "fim": 22,
    "valortotal": 351,
    "observacao": "Observação 218",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c00"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 51",
    "funcionario": "Funcionário 27",
    "data": {
      "$date": {
        "$numberLong": "1684611019404"
      }
    },
    "inicio": 9,
    "fim": 22,
    "valortotal": 118,
    "observacao": "Observação 219",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c01"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 24",
    "funcionario": "Funcionário 17",
    "data": {
      "$date": {
        "$numberLong": "1684611019404"
      }
    },
    "inicio": 14,
    "fim": 20,
    "valortotal": 133,
    "observacao": "Observação 220",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c02"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 10",
    "funcionario": "Funcionário 35",
    "data": {
      "$date": {
        "$numberLong": "1684611019405"
      }
    },
    "inicio": 11,
    "fim": 20,
    "valortotal": 460,
    "observacao": "Observação 221",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c03"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 82",
    "funcionario": "Funcionário 32",
    "data": {
      "$date": {
        "$numberLong": "1684611019405"
      }
    },
    "inicio": 15,
    "fim": 21,
    "valortotal": 370,
    "observacao": "Observação 222",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c04"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 20",
    "funcionario": "Funcionário 2",
    "data": {
      "$date": {
        "$numberLong": "1684611019405"
      }
    },
    "inicio": 14,
    "fim": 20,
    "valortotal": 497,
    "observacao": "Observação 223",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c05"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 88",
    "funcionario": "Funcionário 16",
    "data": {
      "$date": {
        "$numberLong": "1684611019405"
      }
    },
    "inicio": 15,
    "fim": 22,
    "valortotal": 94,
    "observacao": "Observação 224",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c06"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 68",
    "funcionario": "Funcionário 26",
    "data": {
      "$date": {
        "$numberLong": "1684611019405"
      }
    },
    "inicio": 13,
    "fim": 20,
    "valortotal": 233,
    "observacao": "Observação 225",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c07"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 87",
    "funcionario": "Funcionário 10",
    "data": {
      "$date": {
        "$numberLong": "1684611019405"
      }
    },
    "inicio": 18,
    "fim": 20,
    "valortotal": 331,
    "observacao": "Observação 226",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c08"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 56",
    "funcionario": "Funcionário 4",
    "data": {
      "$date": {
        "$numberLong": "1684611019405"
      }
    },
    "inicio": 15,
    "fim": 20,
    "valortotal": 180,
    "observacao": "Observação 227",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c09"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 81",
    "funcionario": "Funcionário 4",
    "data": {
      "$date": {
        "$numberLong": "1684611019406"
      }
    },
    "inicio": 14,
    "fim": 21,
    "valortotal": 185,
    "observacao": "Observação 228",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c0a"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 19",
    "funcionario": "Funcionário 19",
    "data": {
      "$date": {
        "$numberLong": "1684611019406"
      }
    },
    "inicio": 8,
    "fim": 22,
    "valortotal": 467,
    "observacao": "Observação 229",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c0b"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 96",
    "funcionario": "Funcionário 27",
    "data": {
      "$date": {
        "$numberLong": "1684611019406"
      }
    },
    "inicio": 11,
    "fim": 21,
    "valortotal": 471,
    "observacao": "Observação 230",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c0c"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 25",
    "funcionario": "Funcionário 38",
    "data": {
      "$date": {
        "$numberLong": "1684611019406"
      }
    },
    "inicio": 17,
    "fim": 22,
    "valortotal": 135,
    "observacao": "Observação 231",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c0d"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 51",
    "funcionario": "Funcionário 42",
    "data": {
      "$date": {
        "$numberLong": "1684611019406"
      }
    },
    "inicio": 15,
    "fim": 21,
    "valortotal": 488,
    "observacao": "Observação 232",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c0e"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 30",
    "funcionario": "Funcionário 19",
    "data": {
      "$date": {
        "$numberLong": "1684611019406"
      }
    },
    "inicio": 11,
    "fim": 19,
    "valortotal": 259,
    "observacao": "Observação 233",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c0f"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 14",
    "funcionario": "Funcionário 33",
    "data": {
      "$date": {
        "$numberLong": "1684611019406"
      }
    },
    "inicio": 17,
    "fim": 19,
    "valortotal": 248,
    "observacao": "Observação 234",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c10"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 1",
    "funcionario": "Funcionário 4",
    "data": {
      "$date": {
        "$numberLong": "1684611019406"
      }
    },
    "inicio": 8,
    "fim": 20,
    "valortotal": 246,
    "observacao": "Observação 235",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c11"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 97",
    "funcionario": "Funcionário 46",
    "data": {
      "$date": {
        "$numberLong": "1684611019406"
      }
    },
    "inicio": 14,
    "fim": 19,
    "valortotal": 434,
    "observacao": "Observação 236",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c12"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 50",
    "funcionario": "Funcionário 27",
    "data": {
      "$date": {
        "$numberLong": "1684611019407"
      }
    },
    "inicio": 17,
    "fim": 22,
    "valortotal": 498,
    "observacao": "Observação 237",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c13"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 32",
    "funcionario": "Funcionário 34",
    "data": {
      "$date": {
        "$numberLong": "1684611019407"
      }
    },
    "inicio": 11,
    "fim": 22,
    "valortotal": 344,
    "observacao": "Observação 238",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c14"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 17",
    "funcionario": "Funcionário 36",
    "data": {
      "$date": {
        "$numberLong": "1684611019407"
      }
    },
    "inicio": 11,
    "fim": 22,
    "valortotal": 57,
    "observacao": "Observação 239",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c15"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 61",
    "funcionario": "Funcionário 18",
    "data": {
      "$date": {
        "$numberLong": "1684611019407"
      }
    },
    "inicio": 13,
    "fim": 19,
    "valortotal": 231,
    "observacao": "Observação 240",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c16"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 40",
    "funcionario": "Funcionário 17",
    "data": {
      "$date": {
        "$numberLong": "1684611019407"
      }
    },
    "inicio": 10,
    "fim": 22,
    "valortotal": 148,
    "observacao": "Observação 241",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c17"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 4",
    "funcionario": "Funcionário 50",
    "data": {
      "$date": {
        "$numberLong": "1684611019407"
      }
    },
    "inicio": 18,
    "fim": 21,
    "valortotal": 266,
    "observacao": "Observação 242",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c18"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 86",
    "funcionario": "Funcionário 7",
    "data": {
      "$date": {
        "$numberLong": "1684611019407"
      }
    },
    "inicio": 8,
    "fim": 21,
    "valortotal": 197,
    "observacao": "Observação 243",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c19"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 16",
    "funcionario": "Funcionário 13",
    "data": {
      "$date": {
        "$numberLong": "1684611019407"
      }
    },
    "inicio": 16,
    "fim": 21,
    "valortotal": 156,
    "observacao": "Observação 244",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c1a"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 48",
    "funcionario": "Funcionário 23",
    "data": {
      "$date": {
        "$numberLong": "1684611019407"
      }
    },
    "inicio": 8,
    "fim": 20,
    "valortotal": 273,
    "observacao": "Observação 245",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c1b"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 39",
    "funcionario": "Funcionário 13",
    "data": {
      "$date": {
        "$numberLong": "1684611019411"
      }
    },
    "inicio": 16,
    "fim": 19,
    "valortotal": 482,
    "observacao": "Observação 246",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c1c"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 69",
    "funcionario": "Funcionário 41",
    "data": {
      "$date": {
        "$numberLong": "1684611019411"
      }
    },
    "inicio": 17,
    "fim": 21,
    "valortotal": 288,
    "observacao": "Observação 247",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c1d"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 84",
    "funcionario": "Funcionário 9",
    "data": {
      "$date": {
        "$numberLong": "1684611019411"
      }
    },
    "inicio": 13,
    "fim": 19,
    "valortotal": 201,
    "observacao": "Observação 248",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c1e"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 100",
    "funcionario": "Funcionário 12",
    "data": {
      "$date": {
        "$numberLong": "1684611019412"
      }
    },
    "inicio": 16,
    "fim": 20,
    "valortotal": 393,
    "observacao": "Observação 249",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c1f"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 95",
    "funcionario": "Funcionário 34",
    "data": {
      "$date": {
        "$numberLong": "1684611019412"
      }
    },
    "inicio": 17,
    "fim": 21,
    "valortotal": 101,
    "observacao": "Observação 250",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c20"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 75",
    "funcionario": "Funcionário 27",
    "data": {
      "$date": {
        "$numberLong": "1684611019413"
      }
    },
    "inicio": 18,
    "fim": 20,
    "valortotal": 192,
    "observacao": "Observação 251",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c21"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 64",
    "funcionario": "Funcionário 39",
    "data": {
      "$date": {
        "$numberLong": "1684611019414"
      }
    },
    "inicio": 17,
    "fim": 22,
    "valortotal": 272,
    "observacao": "Observação 252",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c22"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 83",
    "funcionario": "Funcionário 12",
    "data": {
      "$date": {
        "$numberLong": "1684611019414"
      }
    },
    "inicio": 16,
    "fim": 19,
    "valortotal": 369,
    "observacao": "Observação 253",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c23"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 38",
    "funcionario": "Funcionário 11",
    "data": {
      "$date": {
        "$numberLong": "1684611019414"
      }
    },
    "inicio": 8,
    "fim": 20,
    "valortotal": 238,
    "observacao": "Observação 254",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c24"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 82",
    "funcionario": "Funcionário 43",
    "data": {
      "$date": {
        "$numberLong": "1684611019414"
      }
    },
    "inicio": 15,
    "fim": 19,
    "valortotal": 178,
    "observacao": "Observação 255",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c25"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 34",
    "funcionario": "Funcionário 36",
    "data": {
      "$date": {
        "$numberLong": "1684611019414"
      }
    },
    "inicio": 10,
    "fim": 19,
    "valortotal": 400,
    "observacao": "Observação 256",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c26"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 95",
    "funcionario": "Funcionário 24",
    "data": {
      "$date": {
        "$numberLong": "1684611019414"
      }
    },
    "inicio": 8,
    "fim": 19,
    "valortotal": 457,
    "observacao": "Observação 257",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c27"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 18",
    "funcionario": "Funcionário 17",
    "data": {
      "$date": {
        "$numberLong": "1684611019415"
      }
    },
    "inicio": 15,
    "fim": 20,
    "valortotal": 207,
    "observacao": "Observação 258",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c28"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 13",
    "funcionario": "Funcionário 48",
    "data": {
      "$date": {
        "$numberLong": "1684611019415"
      }
    },
    "inicio": 16,
    "fim": 19,
    "valortotal": 443,
    "observacao": "Observação 259",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c29"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 40",
    "funcionario": "Funcionário 2",
    "data": {
      "$date": {
        "$numberLong": "1684611019415"
      }
    },
    "inicio": 10,
    "fim": 19,
    "valortotal": 356,
    "observacao": "Observação 260",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c2a"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 1",
    "funcionario": "Funcionário 1",
    "data": {
      "$date": {
        "$numberLong": "1684611019415"
      }
    },
    "inicio": 17,
    "fim": 19,
    "valortotal": 90,
    "observacao": "Observação 261",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c2b"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 71",
    "funcionario": "Funcionário 39",
    "data": {
      "$date": {
        "$numberLong": "1684611019415"
      }
    },
    "inicio": 17,
    "fim": 21,
    "valortotal": 204,
    "observacao": "Observação 262",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c2c"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 38",
    "funcionario": "Funcionário 21",
    "data": {
      "$date": {
        "$numberLong": "1684611019415"
      }
    },
    "inicio": 13,
    "fim": 19,
    "valortotal": 437,
    "observacao": "Observação 263",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c2d"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 58",
    "funcionario": "Funcionário 2",
    "data": {
      "$date": {
        "$numberLong": "1684611019415"
      }
    },
    "inicio": 11,
    "fim": 22,
    "valortotal": 141,
    "observacao": "Observação 264",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c2e"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 81",
    "funcionario": "Funcionário 49",
    "data": {
      "$date": {
        "$numberLong": "1684611019415"
      }
    },
    "inicio": 14,
    "fim": 20,
    "valortotal": 484,
    "observacao": "Observação 265",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c2f"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 34",
    "funcionario": "Funcionário 10",
    "data": {
      "$date": {
        "$numberLong": "1684611019415"
      }
    },
    "inicio": 13,
    "fim": 21,
    "valortotal": 328,
    "observacao": "Observação 266",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c30"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 86",
    "funcionario": "Funcionário 33",
    "data": {
      "$date": {
        "$numberLong": "1684611019415"
      }
    },
    "inicio": 16,
    "fim": 22,
    "valortotal": 285,
    "observacao": "Observação 267",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c31"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 47",
    "funcionario": "Funcionário 15",
    "data": {
      "$date": {
        "$numberLong": "1684611019415"
      }
    },
    "inicio": 9,
    "fim": 21,
    "valortotal": 88,
    "observacao": "Observação 268",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c32"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 96",
    "funcionario": "Funcionário 15",
    "data": {
      "$date": {
        "$numberLong": "1684611019415"
      }
    },
    "inicio": 8,
    "fim": 22,
    "valortotal": 311,
    "observacao": "Observação 269",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c33"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 4",
    "funcionario": "Funcionário 26",
    "data": {
      "$date": {
        "$numberLong": "1684611019415"
      }
    },
    "inicio": 14,
    "fim": 20,
    "valortotal": 369,
    "observacao": "Observação 270",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c34"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 41",
    "funcionario": "Funcionário 4",
    "data": {
      "$date": {
        "$numberLong": "1684611019416"
      }
    },
    "inicio": 15,
    "fim": 21,
    "valortotal": 120,
    "observacao": "Observação 271",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c35"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 52",
    "funcionario": "Funcionário 16",
    "data": {
      "$date": {
        "$numberLong": "1684611019416"
      }
    },
    "inicio": 13,
    "fim": 19,
    "valortotal": 342,
    "observacao": "Observação 272",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c36"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 10",
    "funcionario": "Funcionário 38",
    "data": {
      "$date": {
        "$numberLong": "1684611019416"
      }
    },
    "inicio": 17,
    "fim": 20,
    "valortotal": 314,
    "observacao": "Observação 273",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c37"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 100",
    "funcionario": "Funcionário 29",
    "data": {
      "$date": {
        "$numberLong": "1684611019416"
      }
    },
    "inicio": 13,
    "fim": 19,
    "valortotal": 62,
    "observacao": "Observação 274",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c38"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 100",
    "funcionario": "Funcionário 49",
    "data": {
      "$date": {
        "$numberLong": "1684611019416"
      }
    },
    "inicio": 14,
    "fim": 21,
    "valortotal": 117,
    "observacao": "Observação 275",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c39"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 56",
    "funcionario": "Funcionário 23",
    "data": {
      "$date": {
        "$numberLong": "1684611019416"
      }
    },
    "inicio": 14,
    "fim": 20,
    "valortotal": 272,
    "observacao": "Observação 276",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c3a"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 63",
    "funcionario": "Funcionário 2",
    "data": {
      "$date": {
        "$numberLong": "1684611019416"
      }
    },
    "inicio": 9,
    "fim": 21,
    "valortotal": 294,
    "observacao": "Observação 277",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c3b"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 70",
    "funcionario": "Funcionário 7",
    "data": {
      "$date": {
        "$numberLong": "1684611019416"
      }
    },
    "inicio": 16,
    "fim": 22,
    "valortotal": 487,
    "observacao": "Observação 278",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c3c"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 45",
    "funcionario": "Funcionário 22",
    "data": {
      "$date": {
        "$numberLong": "1684611019416"
      }
    },
    "inicio": 15,
    "fim": 22,
    "valortotal": 374,
    "observacao": "Observação 279",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c3d"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 16",
    "funcionario": "Funcionário 5",
    "data": {
      "$date": {
        "$numberLong": "1684611019416"
      }
    },
    "inicio": 13,
    "fim": 19,
    "valortotal": 256,
    "observacao": "Observação 280",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c3e"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 40",
    "funcionario": "Funcionário 19",
    "data": {
      "$date": {
        "$numberLong": "1684611019416"
      }
    },
    "inicio": 8,
    "fim": 20,
    "valortotal": 204,
    "observacao": "Observação 281",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c3f"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 58",
    "funcionario": "Funcionário 30",
    "data": {
      "$date": {
        "$numberLong": "1684611019417"
      }
    },
    "inicio": 9,
    "fim": 19,
    "valortotal": 395,
    "observacao": "Observação 282",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c40"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 43",
    "funcionario": "Funcionário 8",
    "data": {
      "$date": {
        "$numberLong": "1684611019417"
      }
    },
    "inicio": 18,
    "fim": 21,
    "valortotal": 161,
    "observacao": "Observação 283",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c41"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 58",
    "funcionario": "Funcionário 50",
    "data": {
      "$date": {
        "$numberLong": "1684611019417"
      }
    },
    "inicio": 9,
    "fim": 22,
    "valortotal": 486,
    "observacao": "Observação 284",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c42"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 48",
    "funcionario": "Funcionário 49",
    "data": {
      "$date": {
        "$numberLong": "1684611019417"
      }
    },
    "inicio": 10,
    "fim": 19,
    "valortotal": 488,
    "observacao": "Observação 285",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c43"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 29",
    "funcionario": "Funcionário 41",
    "data": {
      "$date": {
        "$numberLong": "1684611019417"
      }
    },
    "inicio": 8,
    "fim": 20,
    "valortotal": 321,
    "observacao": "Observação 286",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c44"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 22",
    "funcionario": "Funcionário 49",
    "data": {
      "$date": {
        "$numberLong": "1684611019417"
      }
    },
    "inicio": 10,
    "fim": 22,
    "valortotal": 199,
    "observacao": "Observação 287",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c45"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 69",
    "funcionario": "Funcionário 47",
    "data": {
      "$date": {
        "$numberLong": "1684611019417"
      }
    },
    "inicio": 15,
    "fim": 21,
    "valortotal": 409,
    "observacao": "Observação 288",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c46"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 40",
    "funcionario": "Funcionário 25",
    "data": {
      "$date": {
        "$numberLong": "1684611019417"
      }
    },
    "inicio": 14,
    "fim": 21,
    "valortotal": 285,
    "observacao": "Observação 289",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c47"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 27",
    "funcionario": "Funcionário 43",
    "data": {
      "$date": {
        "$numberLong": "1684611019418"
      }
    },
    "inicio": 15,
    "fim": 21,
    "valortotal": 62,
    "observacao": "Observação 290",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c48"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 31",
    "funcionario": "Funcionário 3",
    "data": {
      "$date": {
        "$numberLong": "1684611019418"
      }
    },
    "inicio": 13,
    "fim": 19,
    "valortotal": 289,
    "observacao": "Observação 291",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c49"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 8",
    "funcionario": "Funcionário 44",
    "data": {
      "$date": {
        "$numberLong": "1684611019418"
      }
    },
    "inicio": 18,
    "fim": 20,
    "valortotal": 205,
    "observacao": "Observação 292",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c4a"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 60",
    "funcionario": "Funcionário 34",
    "data": {
      "$date": {
        "$numberLong": "1684611019418"
      }
    },
    "inicio": 14,
    "fim": 20,
    "valortotal": 356,
    "observacao": "Observação 293",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c4b"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 21",
    "funcionario": "Funcionário 33",
    "data": {
      "$date": {
        "$numberLong": "1684611019418"
      }
    },
    "inicio": 16,
    "fim": 21,
    "valortotal": 261,
    "observacao": "Observação 294",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c4c"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 38",
    "funcionario": "Funcionário 36",
    "data": {
      "$date": {
        "$numberLong": "1684611019418"
      }
    },
    "inicio": 16,
    "fim": 21,
    "valortotal": 227,
    "observacao": "Observação 295",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c4d"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 19",
    "funcionario": "Funcionário 9",
    "data": {
      "$date": {
        "$numberLong": "1684611019418"
      }
    },
    "inicio": 17,
    "fim": 19,
    "valortotal": 395,
    "observacao": "Observação 296",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c4e"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 16",
    "funcionario": "Funcionário 13",
    "data": {
      "$date": {
        "$numberLong": "1684611019420"
      }
    },
    "inicio": 12,
    "fim": 21,
    "valortotal": 345,
    "observacao": "Observação 297",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c4f"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 44",
    "funcionario": "Funcionário 15",
    "data": {
      "$date": {
        "$numberLong": "1684611019421"
      }
    },
    "inicio": 15,
    "fim": 20,
    "valortotal": 361,
    "observacao": "Observação 298",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c50"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 65",
    "funcionario": "Funcionário 43",
    "data": {
      "$date": {
        "$numberLong": "1684611019421"
      }
    },
    "inicio": 10,
    "fim": 21,
    "valortotal": 93,
    "observacao": "Observação 299",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c51"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 21",
    "funcionario": "Funcionário 21",
    "data": {
      "$date": {
        "$numberLong": "1684611019421"
      }
    },
    "inicio": 17,
    "fim": 19,
    "valortotal": 104,
    "observacao": "Observação 300",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c52"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 58",
    "funcionario": "Funcionário 18",
    "data": {
      "$date": {
        "$numberLong": "1684611019421"
      }
    },
    "inicio": 14,
    "fim": 19,
    "valortotal": 357,
    "observacao": "Observação 301",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c53"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 30",
    "funcionario": "Funcionário 5",
    "data": {
      "$date": {
        "$numberLong": "1684611019421"
      }
    },
    "inicio": 16,
    "fim": 21,
    "valortotal": 79,
    "observacao": "Observação 302",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c54"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 35",
    "funcionario": "Funcionário 29",
    "data": {
      "$date": {
        "$numberLong": "1684611019421"
      }
    },
    "inicio": 10,
    "fim": 22,
    "valortotal": 157,
    "observacao": "Observação 303",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c55"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 72",
    "funcionario": "Funcionário 46",
    "data": {
      "$date": {
        "$numberLong": "1684611019421"
      }
    },
    "inicio": 8,
    "fim": 22,
    "valortotal": 240,
    "observacao": "Observação 304",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c56"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 100",
    "funcionario": "Funcionário 12",
    "data": {
      "$date": {
        "$numberLong": "1684611019421"
      }
    },
    "inicio": 10,
    "fim": 20,
    "valortotal": 115,
    "observacao": "Observação 305",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c57"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 75",
    "funcionario": "Funcionário 21",
    "data": {
      "$date": {
        "$numberLong": "1684611019421"
      }
    },
    "inicio": 9,
    "fim": 19,
    "valortotal": 410,
    "observacao": "Observação 306",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c58"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 13",
    "funcionario": "Funcionário 40",
    "data": {
      "$date": {
        "$numberLong": "1684611019421"
      }
    },
    "inicio": 12,
    "fim": 22,
    "valortotal": 224,
    "observacao": "Observação 307",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c59"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 36",
    "funcionario": "Funcionário 27",
    "data": {
      "$date": {
        "$numberLong": "1684611019421"
      }
    },
    "inicio": 17,
    "fim": 20,
    "valortotal": 294,
    "observacao": "Observação 308",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c5a"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 71",
    "funcionario": "Funcionário 29",
    "data": {
      "$date": {
        "$numberLong": "1684611019421"
      }
    },
    "inicio": 12,
    "fim": 19,
    "valortotal": 331,
    "observacao": "Observação 309",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c5b"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 26",
    "funcionario": "Funcionário 6",
    "data": {
      "$date": {
        "$numberLong": "1684611019421"
      }
    },
    "inicio": 11,
    "fim": 20,
    "valortotal": 378,
    "observacao": "Observação 310",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c5c"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 47",
    "funcionario": "Funcionário 9",
    "data": {
      "$date": {
        "$numberLong": "1684611019421"
      }
    },
    "inicio": 14,
    "fim": 20,
    "valortotal": 418,
    "observacao": "Observação 311",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c5d"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 2",
    "funcionario": "Funcionário 28",
    "data": {
      "$date": {
        "$numberLong": "1684611019421"
      }
    },
    "inicio": 16,
    "fim": 20,
    "valortotal": 193,
    "observacao": "Observação 312",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c5e"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 88",
    "funcionario": "Funcionário 9",
    "data": {
      "$date": {
        "$numberLong": "1684611019422"
      }
    },
    "inicio": 10,
    "fim": 19,
    "valortotal": 72,
    "observacao": "Observação 313",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c5f"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 63",
    "funcionario": "Funcionário 5",
    "data": {
      "$date": {
        "$numberLong": "1684611019422"
      }
    },
    "inicio": 18,
    "fim": 22,
    "valortotal": 425,
    "observacao": "Observação 314",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c60"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 29",
    "funcionario": "Funcionário 26",
    "data": {
      "$date": {
        "$numberLong": "1684611019422"
      }
    },
    "inicio": 17,
    "fim": 20,
    "valortotal": 125,
    "observacao": "Observação 315",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c61"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 54",
    "funcionario": "Funcionário 29",
    "data": {
      "$date": {
        "$numberLong": "1684611019422"
      }
    },
    "inicio": 11,
    "fim": 20,
    "valortotal": 62,
    "observacao": "Observação 316",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c62"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 79",
    "funcionario": "Funcionário 11",
    "data": {
      "$date": {
        "$numberLong": "1684611019422"
      }
    },
    "inicio": 15,
    "fim": 20,
    "valortotal": 132,
    "observacao": "Observação 317",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c63"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 15",
    "funcionario": "Funcionário 37",
    "data": {
      "$date": {
        "$numberLong": "1684611019422"
      }
    },
    "inicio": 14,
    "fim": 20,
    "valortotal": 97,
    "observacao": "Observação 318",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c64"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 50",
    "funcionario": "Funcionário 10",
    "data": {
      "$date": {
        "$numberLong": "1684611019422"
      }
    },
    "inicio": 10,
    "fim": 20,
    "valortotal": 365,
    "observacao": "Observação 319",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c65"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 69",
    "funcionario": "Funcionário 31",
    "data": {
      "$date": {
        "$numberLong": "1684611019422"
      }
    },
    "inicio": 18,
    "fim": 21,
    "valortotal": 125,
    "observacao": "Observação 320",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c66"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 46",
    "funcionario": "Funcionário 44",
    "data": {
      "$date": {
        "$numberLong": "1684611019422"
      }
    },
    "inicio": 9,
    "fim": 22,
    "valortotal": 131,
    "observacao": "Observação 321",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c67"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 44",
    "funcionario": "Funcionário 40",
    "data": {
      "$date": {
        "$numberLong": "1684611019422"
      }
    },
    "inicio": 9,
    "fim": 20,
    "valortotal": 77,
    "observacao": "Observação 322",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c68"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 15",
    "funcionario": "Funcionário 41",
    "data": {
      "$date": {
        "$numberLong": "1684611019422"
      }
    },
    "inicio": 10,
    "fim": 21,
    "valortotal": 173,
    "observacao": "Observação 323",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c69"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 36",
    "funcionario": "Funcionário 1",
    "data": {
      "$date": {
        "$numberLong": "1684611019422"
      }
    },
    "inicio": 15,
    "fim": 19,
    "valortotal": 381,
    "observacao": "Observação 324",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c6a"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 69",
    "funcionario": "Funcionário 47",
    "data": {
      "$date": {
        "$numberLong": "1684611019422"
      }
    },
    "inicio": 15,
    "fim": 21,
    "valortotal": 88,
    "observacao": "Observação 325",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c6b"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 85",
    "funcionario": "Funcionário 25",
    "data": {
      "$date": {
        "$numberLong": "1684611019422"
      }
    },
    "inicio": 10,
    "fim": 22,
    "valortotal": 391,
    "observacao": "Observação 326",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c6c"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 92",
    "funcionario": "Funcionário 45",
    "data": {
      "$date": {
        "$numberLong": "1684611019422"
      }
    },
    "inicio": 16,
    "fim": 19,
    "valortotal": 119,
    "observacao": "Observação 327",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c6d"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 84",
    "funcionario": "Funcionário 29",
    "data": {
      "$date": {
        "$numberLong": "1684611019422"
      }
    },
    "inicio": 8,
    "fim": 21,
    "valortotal": 172,
    "observacao": "Observação 328",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c6e"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 100",
    "funcionario": "Funcionário 37",
    "data": {
      "$date": {
        "$numberLong": "1684611019422"
      }
    },
    "inicio": 12,
    "fim": 20,
    "valortotal": 383,
    "observacao": "Observação 329",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c6f"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 61",
    "funcionario": "Funcionário 25",
    "data": {
      "$date": {
        "$numberLong": "1684611019423"
      }
    },
    "inicio": 11,
    "fim": 22,
    "valortotal": 293,
    "observacao": "Observação 330",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c70"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 72",
    "funcionario": "Funcionário 15",
    "data": {
      "$date": {
        "$numberLong": "1684611019423"
      }
    },
    "inicio": 18,
    "fim": 22,
    "valortotal": 276,
    "observacao": "Observação 331",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c71"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 23",
    "funcionario": "Funcionário 10",
    "data": {
      "$date": {
        "$numberLong": "1684611019423"
      }
    },
    "inicio": 12,
    "fim": 22,
    "valortotal": 493,
    "observacao": "Observação 332",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c72"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 76",
    "funcionario": "Funcionário 18",
    "data": {
      "$date": {
        "$numberLong": "1684611019423"
      }
    },
    "inicio": 15,
    "fim": 19,
    "valortotal": 374,
    "observacao": "Observação 333",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c73"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 62",
    "funcionario": "Funcionário 17",
    "data": {
      "$date": {
        "$numberLong": "1684611019423"
      }
    },
    "inicio": 14,
    "fim": 22,
    "valortotal": 100,
    "observacao": "Observação 334",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c74"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 63",
    "funcionario": "Funcionário 23",
    "data": {
      "$date": {
        "$numberLong": "1684611019423"
      }
    },
    "inicio": 10,
    "fim": 19,
    "valortotal": 479,
    "observacao": "Observação 335",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c75"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 79",
    "funcionario": "Funcionário 9",
    "data": {
      "$date": {
        "$numberLong": "1684611019423"
      }
    },
    "inicio": 18,
    "fim": 22,
    "valortotal": 118,
    "observacao": "Observação 336",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c76"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 92",
    "funcionario": "Funcionário 45",
    "data": {
      "$date": {
        "$numberLong": "1684611019423"
      }
    },
    "inicio": 16,
    "fim": 19,
    "valortotal": 286,
    "observacao": "Observação 337",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c77"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 40",
    "funcionario": "Funcionário 24",
    "data": {
      "$date": {
        "$numberLong": "1684611019423"
      }
    },
    "inicio": 11,
    "fim": 22,
    "valortotal": 374,
    "observacao": "Observação 338",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c78"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 35",
    "funcionario": "Funcionário 32",
    "data": {
      "$date": {
        "$numberLong": "1684611019423"
      }
    },
    "inicio": 16,
    "fim": 20,
    "valortotal": 299,
    "observacao": "Observação 339",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c79"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 39",
    "funcionario": "Funcionário 2",
    "data": {
      "$date": {
        "$numberLong": "1684611019423"
      }
    },
    "inicio": 14,
    "fim": 22,
    "valortotal": 496,
    "observacao": "Observação 340",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c7a"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 89",
    "funcionario": "Funcionário 45",
    "data": {
      "$date": {
        "$numberLong": "1684611019423"
      }
    },
    "inicio": 9,
    "fim": 22,
    "valortotal": 305,
    "observacao": "Observação 341",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c7b"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 73",
    "funcionario": "Funcionário 22",
    "data": {
      "$date": {
        "$numberLong": "1684611019423"
      }
    },
    "inicio": 14,
    "fim": 21,
    "valortotal": 353,
    "observacao": "Observação 342",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c7c"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 77",
    "funcionario": "Funcionário 33",
    "data": {
      "$date": {
        "$numberLong": "1684611019423"
      }
    },
    "inicio": 15,
    "fim": 22,
    "valortotal": 177,
    "observacao": "Observação 343",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c7d"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 84",
    "funcionario": "Funcionário 45",
    "data": {
      "$date": {
        "$numberLong": "1684611019423"
      }
    },
    "inicio": 10,
    "fim": 20,
    "valortotal": 309,
    "observacao": "Observação 344",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c7e"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 29",
    "funcionario": "Funcionário 30",
    "data": {
      "$date": {
        "$numberLong": "1684611019423"
      }
    },
    "inicio": 15,
    "fim": 21,
    "valortotal": 248,
    "observacao": "Observação 345",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c7f"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 30",
    "funcionario": "Funcionário 27",
    "data": {
      "$date": {
        "$numberLong": "1684611019423"
      }
    },
    "inicio": 17,
    "fim": 20,
    "valortotal": 213,
    "observacao": "Observação 346",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c80"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 69",
    "funcionario": "Funcionário 4",
    "data": {
      "$date": {
        "$numberLong": "1684611019424"
      }
    },
    "inicio": 10,
    "fim": 21,
    "valortotal": 288,
    "observacao": "Observação 347",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c81"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 90",
    "funcionario": "Funcionário 19",
    "data": {
      "$date": {
        "$numberLong": "1684611019424"
      }
    },
    "inicio": 16,
    "fim": 20,
    "valortotal": 264,
    "observacao": "Observação 348",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c82"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 97",
    "funcionario": "Funcionário 29",
    "data": {
      "$date": {
        "$numberLong": "1684611019424"
      }
    },
    "inicio": 12,
    "fim": 22,
    "valortotal": 108,
    "observacao": "Observação 349",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c83"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 27",
    "funcionario": "Funcionário 49",
    "data": {
      "$date": {
        "$numberLong": "1684611019424"
      }
    },
    "inicio": 16,
    "fim": 21,
    "valortotal": 450,
    "observacao": "Observação 350",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c84"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 11",
    "funcionario": "Funcionário 25",
    "data": {
      "$date": {
        "$numberLong": "1684611019424"
      }
    },
    "inicio": 17,
    "fim": 21,
    "valortotal": 143,
    "observacao": "Observação 351",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c85"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 95",
    "funcionario": "Funcionário 17",
    "data": {
      "$date": {
        "$numberLong": "1684611019424"
      }
    },
    "inicio": 14,
    "fim": 21,
    "valortotal": 311,
    "observacao": "Observação 352",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c86"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 91",
    "funcionario": "Funcionário 40",
    "data": {
      "$date": {
        "$numberLong": "1684611019424"
      }
    },
    "inicio": 13,
    "fim": 21,
    "valortotal": 77,
    "observacao": "Observação 353",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c87"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 56",
    "funcionario": "Funcionário 45",
    "data": {
      "$date": {
        "$numberLong": "1684611019424"
      }
    },
    "inicio": 13,
    "fim": 21,
    "valortotal": 268,
    "observacao": "Observação 354",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c88"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 58",
    "funcionario": "Funcionário 11",
    "data": {
      "$date": {
        "$numberLong": "1684611019424"
      }
    },
    "inicio": 16,
    "fim": 19,
    "valortotal": 210,
    "observacao": "Observação 355",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c89"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 77",
    "funcionario": "Funcionário 29",
    "data": {
      "$date": {
        "$numberLong": "1684611019424"
      }
    },
    "inicio": 11,
    "fim": 21,
    "valortotal": 186,
    "observacao": "Observação 356",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c8a"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 43",
    "funcionario": "Funcionário 26",
    "data": {
      "$date": {
        "$numberLong": "1684611019427"
      }
    },
    "inicio": 12,
    "fim": 20,
    "valortotal": 292,
    "observacao": "Observação 357",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c8b"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 47",
    "funcionario": "Funcionário 11",
    "data": {
      "$date": {
        "$numberLong": "1684611019427"
      }
    },
    "inicio": 16,
    "fim": 20,
    "valortotal": 55,
    "observacao": "Observação 358",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c8c"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 5",
    "funcionario": "Funcionário 4",
    "data": {
      "$date": {
        "$numberLong": "1684611019427"
      }
    },
    "inicio": 10,
    "fim": 21,
    "valortotal": 107,
    "observacao": "Observação 359",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c8d"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 15",
    "funcionario": "Funcionário 23",
    "data": {
      "$date": {
        "$numberLong": "1684611019427"
      }
    },
    "inicio": 9,
    "fim": 19,
    "valortotal": 61,
    "observacao": "Observação 360",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c8e"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 1",
    "funcionario": "Funcionário 2",
    "data": {
      "$date": {
        "$numberLong": "1684611019427"
      }
    },
    "inicio": 9,
    "fim": 21,
    "valortotal": 69,
    "observacao": "Observação 361",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c8f"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 91",
    "funcionario": "Funcionário 36",
    "data": {
      "$date": {
        "$numberLong": "1684611019427"
      }
    },
    "inicio": 9,
    "fim": 22,
    "valortotal": 314,
    "observacao": "Observação 362",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c90"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 64",
    "funcionario": "Funcionário 32",
    "data": {
      "$date": {
        "$numberLong": "1684611019428"
      }
    },
    "inicio": 13,
    "fim": 19,
    "valortotal": 174,
    "observacao": "Observação 363",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c91"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 14",
    "funcionario": "Funcionário 37",
    "data": {
      "$date": {
        "$numberLong": "1684611019428"
      }
    },
    "inicio": 18,
    "fim": 19,
    "valortotal": 222,
    "observacao": "Observação 364",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c92"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 22",
    "funcionario": "Funcionário 11",
    "data": {
      "$date": {
        "$numberLong": "1684611019428"
      }
    },
    "inicio": 14,
    "fim": 21,
    "valortotal": 319,
    "observacao": "Observação 365",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c93"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 59",
    "funcionario": "Funcionário 40",
    "data": {
      "$date": {
        "$numberLong": "1684611019428"
      }
    },
    "inicio": 10,
    "fim": 22,
    "valortotal": 199,
    "observacao": "Observação 366",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c94"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 96",
    "funcionario": "Funcionário 46",
    "data": {
      "$date": {
        "$numberLong": "1684611019428"
      }
    },
    "inicio": 17,
    "fim": 22,
    "valortotal": 485,
    "observacao": "Observação 367",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c95"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 27",
    "funcionario": "Funcionário 17",
    "data": {
      "$date": {
        "$numberLong": "1684611019428"
      }
    },
    "inicio": 17,
    "fim": 21,
    "valortotal": 377,
    "observacao": "Observação 368",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c96"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 78",
    "funcionario": "Funcionário 3",
    "data": {
      "$date": {
        "$numberLong": "1684611019428"
      }
    },
    "inicio": 17,
    "fim": 22,
    "valortotal": 350,
    "observacao": "Observação 369",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c97"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 59",
    "funcionario": "Funcionário 25",
    "data": {
      "$date": {
        "$numberLong": "1684611019428"
      }
    },
    "inicio": 12,
    "fim": 22,
    "valortotal": 486,
    "observacao": "Observação 370",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c98"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 53",
    "funcionario": "Funcionário 8",
    "data": {
      "$date": {
        "$numberLong": "1684611019428"
      }
    },
    "inicio": 18,
    "fim": 20,
    "valortotal": 238,
    "observacao": "Observação 371",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c99"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 24",
    "funcionario": "Funcionário 18",
    "data": {
      "$date": {
        "$numberLong": "1684611019428"
      }
    },
    "inicio": 12,
    "fim": 20,
    "valortotal": 61,
    "observacao": "Observação 372",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c9a"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 46",
    "funcionario": "Funcionário 9",
    "data": {
      "$date": {
        "$numberLong": "1684611019428"
      }
    },
    "inicio": 8,
    "fim": 21,
    "valortotal": 413,
    "observacao": "Observação 373",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c9b"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 89",
    "funcionario": "Funcionário 25",
    "data": {
      "$date": {
        "$numberLong": "1684611019428"
      }
    },
    "inicio": 15,
    "fim": 19,
    "valortotal": 236,
    "observacao": "Observação 374",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c9c"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 69",
    "funcionario": "Funcionário 10",
    "data": {
      "$date": {
        "$numberLong": "1684611019428"
      }
    },
    "inicio": 10,
    "fim": 19,
    "valortotal": 243,
    "observacao": "Observação 375",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c9d"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 76",
    "funcionario": "Funcionário 38",
    "data": {
      "$date": {
        "$numberLong": "1684611019428"
      }
    },
    "inicio": 11,
    "fim": 20,
    "valortotal": 343,
    "observacao": "Observação 376",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c9e"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 20",
    "funcionario": "Funcionário 8",
    "data": {
      "$date": {
        "$numberLong": "1684611019428"
      }
    },
    "inicio": 18,
    "fim": 20,
    "valortotal": 356,
    "observacao": "Observação 377",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854c9f"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 51",
    "funcionario": "Funcionário 48",
    "data": {
      "$date": {
        "$numberLong": "1684611019428"
      }
    },
    "inicio": 10,
    "fim": 20,
    "valortotal": 252,
    "observacao": "Observação 378",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ca0"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 33",
    "funcionario": "Funcionário 20",
    "data": {
      "$date": {
        "$numberLong": "1684611019429"
      }
    },
    "inicio": 14,
    "fim": 19,
    "valortotal": 475,
    "observacao": "Observação 379",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ca1"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 51",
    "funcionario": "Funcionário 16",
    "data": {
      "$date": {
        "$numberLong": "1684611019429"
      }
    },
    "inicio": 13,
    "fim": 19,
    "valortotal": 103,
    "observacao": "Observação 380",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ca2"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 5",
    "funcionario": "Funcionário 31",
    "data": {
      "$date": {
        "$numberLong": "1684611019429"
      }
    },
    "inicio": 16,
    "fim": 19,
    "valortotal": 254,
    "observacao": "Observação 381",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ca3"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 79",
    "funcionario": "Funcionário 16",
    "data": {
      "$date": {
        "$numberLong": "1684611019429"
      }
    },
    "inicio": 10,
    "fim": 21,
    "valortotal": 354,
    "observacao": "Observação 382",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ca4"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 42",
    "funcionario": "Funcionário 24",
    "data": {
      "$date": {
        "$numberLong": "1684611019429"
      }
    },
    "inicio": 10,
    "fim": 22,
    "valortotal": 479,
    "observacao": "Observação 383",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ca5"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 2",
    "funcionario": "Funcionário 45",
    "data": {
      "$date": {
        "$numberLong": "1684611019429"
      }
    },
    "inicio": 15,
    "fim": 22,
    "valortotal": 217,
    "observacao": "Observação 384",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ca6"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 13",
    "funcionario": "Funcionário 16",
    "data": {
      "$date": {
        "$numberLong": "1684611019429"
      }
    },
    "inicio": 16,
    "fim": 19,
    "valortotal": 356,
    "observacao": "Observação 385",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ca7"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 28",
    "funcionario": "Funcionário 15",
    "data": {
      "$date": {
        "$numberLong": "1684611019429"
      }
    },
    "inicio": 13,
    "fim": 19,
    "valortotal": 252,
    "observacao": "Observação 386",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ca8"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 55",
    "funcionario": "Funcionário 45",
    "data": {
      "$date": {
        "$numberLong": "1684611019429"
      }
    },
    "inicio": 11,
    "fim": 21,
    "valortotal": 489,
    "observacao": "Observação 387",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ca9"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 17",
    "funcionario": "Funcionário 21",
    "data": {
      "$date": {
        "$numberLong": "1684611019429"
      }
    },
    "inicio": 15,
    "fim": 21,
    "valortotal": 158,
    "observacao": "Observação 388",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854caa"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 65",
    "funcionario": "Funcionário 42",
    "data": {
      "$date": {
        "$numberLong": "1684611019429"
      }
    },
    "inicio": 10,
    "fim": 21,
    "valortotal": 52,
    "observacao": "Observação 389",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854cab"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 50",
    "funcionario": "Funcionário 49",
    "data": {
      "$date": {
        "$numberLong": "1684611019429"
      }
    },
    "inicio": 10,
    "fim": 22,
    "valortotal": 400,
    "observacao": "Observação 390",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854cac"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 8",
    "funcionario": "Funcionário 4",
    "data": {
      "$date": {
        "$numberLong": "1684611019429"
      }
    },
    "inicio": 11,
    "fim": 22,
    "valortotal": 54,
    "observacao": "Observação 391",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854cad"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 33",
    "funcionario": "Funcionário 6",
    "data": {
      "$date": {
        "$numberLong": "1684611019429"
      }
    },
    "inicio": 16,
    "fim": 22,
    "valortotal": 91,
    "observacao": "Observação 392",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854cae"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 88",
    "funcionario": "Funcionário 50",
    "data": {
      "$date": {
        "$numberLong": "1684611019429"
      }
    },
    "inicio": 18,
    "fim": 20,
    "valortotal": 354,
    "observacao": "Observação 393",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854caf"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 52",
    "funcionario": "Funcionário 8",
    "data": {
      "$date": {
        "$numberLong": "1684611019429"
      }
    },
    "inicio": 11,
    "fim": 20,
    "valortotal": 364,
    "observacao": "Observação 394",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854cb0"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 41",
    "funcionario": "Funcionário 21",
    "data": {
      "$date": {
        "$numberLong": "1684611019429"
      }
    },
    "inicio": 17,
    "fim": 20,
    "valortotal": 198,
    "observacao": "Observação 395",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854cb1"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 37",
    "funcionario": "Funcionário 23",
    "data": {
      "$date": {
        "$numberLong": "1684611019430"
      }
    },
    "inicio": 18,
    "fim": 19,
    "valortotal": 421,
    "observacao": "Observação 396",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854cb2"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 5",
    "funcionario": "Funcionário 50",
    "data": {
      "$date": {
        "$numberLong": "1684611019430"
      }
    },
    "inicio": 13,
    "fim": 22,
    "valortotal": 214,
    "observacao": "Observação 397",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854cb3"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 75",
    "funcionario": "Funcionário 17",
    "data": {
      "$date": {
        "$numberLong": "1684611019430"
      }
    },
    "inicio": 15,
    "fim": 22,
    "valortotal": 211,
    "observacao": "Observação 398",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854cb4"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 55",
    "funcionario": "Funcionário 34",
    "data": {
      "$date": {
        "$numberLong": "1684611019430"
      }
    },
    "inicio": 15,
    "fim": 21,
    "valortotal": 334,
    "observacao": "Observação 399",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854cb5"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 86",
    "funcionario": "Funcionário 40",
    "data": {
      "$date": {
        "$numberLong": "1684611019430"
      }
    },
    "inicio": 13,
    "fim": 22,
    "valortotal": 452,
    "observacao": "Observação 400",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854cb6"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 29",
    "funcionario": "Funcionário 6",
    "data": {
      "$date": {
        "$numberLong": "1684611019430"
      }
    },
    "inicio": 18,
    "fim": 22,
    "valortotal": 326,
    "observacao": "Observação 401",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854cb7"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 64",
    "funcionario": "Funcionário 35",
    "data": {
      "$date": {
        "$numberLong": "1684611019430"
      }
    },
    "inicio": 12,
    "fim": 22,
    "valortotal": 120,
    "observacao": "Observação 402",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854cb8"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 64",
    "funcionario": "Funcionário 10",
    "data": {
      "$date": {
        "$numberLong": "1684611019430"
      }
    },
    "inicio": 11,
    "fim": 19,
    "valortotal": 328,
    "observacao": "Observação 403",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854cb9"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 34",
    "funcionario": "Funcionário 15",
    "data": {
      "$date": {
        "$numberLong": "1684611019430"
      }
    },
    "inicio": 16,
    "fim": 20,
    "valortotal": 387,
    "observacao": "Observação 404",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854cba"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 10",
    "funcionario": "Funcionário 11",
    "data": {
      "$date": {
        "$numberLong": "1684611019430"
      }
    },
    "inicio": 18,
    "fim": 19,
    "valortotal": 311,
    "observacao": "Observação 405",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854cbb"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 93",
    "funcionario": "Funcionário 22",
    "data": {
      "$date": {
        "$numberLong": "1684611019430"
      }
    },
    "inicio": 16,
    "fim": 20,
    "valortotal": 346,
    "observacao": "Observação 406",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854cbc"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 65",
    "funcionario": "Funcionário 13",
    "data": {
      "$date": {
        "$numberLong": "1684611019430"
      }
    },
    "inicio": 17,
    "fim": 19,
    "valortotal": 376,
    "observacao": "Observação 407",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854cbd"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 78",
    "funcionario": "Funcionário 16",
    "data": {
      "$date": {
        "$numberLong": "1684611019430"
      }
    },
    "inicio": 17,
    "fim": 21,
    "valortotal": 141,
    "observacao": "Observação 408",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854cbe"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 22",
    "funcionario": "Funcionário 10",
    "data": {
      "$date": {
        "$numberLong": "1684611019430"
      }
    },
    "inicio": 11,
    "fim": 20,
    "valortotal": 318,
    "observacao": "Observação 409",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854cbf"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 75",
    "funcionario": "Funcionário 29",
    "data": {
      "$date": {
        "$numberLong": "1684611019430"
      }
    },
    "inicio": 10,
    "fim": 19,
    "valortotal": 490,
    "observacao": "Observação 410",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854cc0"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 17",
    "funcionario": "Funcionário 5",
    "data": {
      "$date": {
        "$numberLong": "1684611019430"
      }
    },
    "inicio": 14,
    "fim": 22,
    "valortotal": 496,
    "observacao": "Observação 411",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854cc1"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 89",
    "funcionario": "Funcionário 41",
    "data": {
      "$date": {
        "$numberLong": "1684611019431"
      }
    },
    "inicio": 8,
    "fim": 22,
    "valortotal": 459,
    "observacao": "Observação 412",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854cc2"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 48",
    "funcionario": "Funcionário 11",
    "data": {
      "$date": {
        "$numberLong": "1684611019431"
      }
    },
    "inicio": 14,
    "fim": 19,
    "valortotal": 373,
    "observacao": "Observação 413",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854cc3"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 12",
    "funcionario": "Funcionário 25",
    "data": {
      "$date": {
        "$numberLong": "1684611019431"
      }
    },
    "inicio": 18,
    "fim": 21,
    "valortotal": 60,
    "observacao": "Observação 414",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854cc4"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 28",
    "funcionario": "Funcionário 33",
    "data": {
      "$date": {
        "$numberLong": "1684611019431"
      }
    },
    "inicio": 8,
    "fim": 20,
    "valortotal": 434,
    "observacao": "Observação 415",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854cc5"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 35",
    "funcionario": "Funcionário 3",
    "data": {
      "$date": {
        "$numberLong": "1684611019431"
      }
    },
    "inicio": 11,
    "fim": 19,
    "valortotal": 212,
    "observacao": "Observação 416",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854cc6"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 49",
    "funcionario": "Funcionário 48",
    "data": {
      "$date": {
        "$numberLong": "1684611019431"
      }
    },
    "inicio": 9,
    "fim": 22,
    "valortotal": 299,
    "observacao": "Observação 417",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854cc7"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 71",
    "funcionario": "Funcionário 39",
    "data": {
      "$date": {
        "$numberLong": "1684611019431"
      }
    },
    "inicio": 8,
    "fim": 22,
    "valortotal": 108,
    "observacao": "Observação 418",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854cc8"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 69",
    "funcionario": "Funcionário 37",
    "data": {
      "$date": {
        "$numberLong": "1684611019431"
      }
    },
    "inicio": 12,
    "fim": 21,
    "valortotal": 287,
    "observacao": "Observação 419",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854cc9"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 67",
    "funcionario": "Funcionário 39",
    "data": {
      "$date": {
        "$numberLong": "1684611019431"
      }
    },
    "inicio": 12,
    "fim": 22,
    "valortotal": 385,
    "observacao": "Observação 420",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854cca"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 25",
    "funcionario": "Funcionário 34",
    "data": {
      "$date": {
        "$numberLong": "1684611019431"
      }
    },
    "inicio": 18,
    "fim": 21,
    "valortotal": 261,
    "observacao": "Observação 421",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ccb"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 57",
    "funcionario": "Funcionário 38",
    "data": {
      "$date": {
        "$numberLong": "1684611019431"
      }
    },
    "inicio": 14,
    "fim": 21,
    "valortotal": 383,
    "observacao": "Observação 422",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ccc"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 78",
    "funcionario": "Funcionário 20",
    "data": {
      "$date": {
        "$numberLong": "1684611019431"
      }
    },
    "inicio": 18,
    "fim": 21,
    "valortotal": 107,
    "observacao": "Observação 423",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ccd"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 49",
    "funcionario": "Funcionário 2",
    "data": {
      "$date": {
        "$numberLong": "1684611019431"
      }
    },
    "inicio": 16,
    "fim": 19,
    "valortotal": 114,
    "observacao": "Observação 424",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854cce"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 68",
    "funcionario": "Funcionário 24",
    "data": {
      "$date": {
        "$numberLong": "1684611019431"
      }
    },
    "inicio": 11,
    "fim": 20,
    "valortotal": 500,
    "observacao": "Observação 425",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ccf"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 60",
    "funcionario": "Funcionário 6",
    "data": {
      "$date": {
        "$numberLong": "1684611019431"
      }
    },
    "inicio": 12,
    "fim": 22,
    "valortotal": 215,
    "observacao": "Observação 426",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854cd0"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 94",
    "funcionario": "Funcionário 28",
    "data": {
      "$date": {
        "$numberLong": "1684611019431"
      }
    },
    "inicio": 15,
    "fim": 22,
    "valortotal": 319,
    "observacao": "Observação 427",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854cd1"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 36",
    "funcionario": "Funcionário 34",
    "data": {
      "$date": {
        "$numberLong": "1684611019431"
      }
    },
    "inicio": 12,
    "fim": 21,
    "valortotal": 257,
    "observacao": "Observação 428",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854cd2"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 26",
    "funcionario": "Funcionário 29",
    "data": {
      "$date": {
        "$numberLong": "1684611019431"
      }
    },
    "inicio": 18,
    "fim": 19,
    "valortotal": 488,
    "observacao": "Observação 429",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854cd3"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 23",
    "funcionario": "Funcionário 34",
    "data": {
      "$date": {
        "$numberLong": "1684611019431"
      }
    },
    "inicio": 11,
    "fim": 22,
    "valortotal": 340,
    "observacao": "Observação 430",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854cd4"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 8",
    "funcionario": "Funcionário 8",
    "data": {
      "$date": {
        "$numberLong": "1684611019431"
      }
    },
    "inicio": 18,
    "fim": 21,
    "valortotal": 125,
    "observacao": "Observação 431",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854cd5"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 88",
    "funcionario": "Funcionário 10",
    "data": {
      "$date": {
        "$numberLong": "1684611019431"
      }
    },
    "inicio": 18,
    "fim": 20,
    "valortotal": 261,
    "observacao": "Observação 432",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854cd6"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 58",
    "funcionario": "Funcionário 12",
    "data": {
      "$date": {
        "$numberLong": "1684611019431"
      }
    },
    "inicio": 10,
    "fim": 19,
    "valortotal": 248,
    "observacao": "Observação 433",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854cd7"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 87",
    "funcionario": "Funcionário 27",
    "data": {
      "$date": {
        "$numberLong": "1684611019431"
      }
    },
    "inicio": 9,
    "fim": 21,
    "valortotal": 373,
    "observacao": "Observação 434",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854cd8"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 20",
    "funcionario": "Funcionário 6",
    "data": {
      "$date": {
        "$numberLong": "1684611019431"
      }
    },
    "inicio": 10,
    "fim": 22,
    "valortotal": 326,
    "observacao": "Observação 435",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854cd9"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 62",
    "funcionario": "Funcionário 9",
    "data": {
      "$date": {
        "$numberLong": "1684611019431"
      }
    },
    "inicio": 11,
    "fim": 19,
    "valortotal": 340,
    "observacao": "Observação 436",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854cda"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 47",
    "funcionario": "Funcionário 21",
    "data": {
      "$date": {
        "$numberLong": "1684611019431"
      }
    },
    "inicio": 15,
    "fim": 22,
    "valortotal": 423,
    "observacao": "Observação 437",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854cdb"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 30",
    "funcionario": "Funcionário 5",
    "data": {
      "$date": {
        "$numberLong": "1684611019431"
      }
    },
    "inicio": 17,
    "fim": 19,
    "valortotal": 280,
    "observacao": "Observação 438",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854cdc"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 71",
    "funcionario": "Funcionário 14",
    "data": {
      "$date": {
        "$numberLong": "1684611019431"
      }
    },
    "inicio": 11,
    "fim": 21,
    "valortotal": 274,
    "observacao": "Observação 439",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854cdd"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 22",
    "funcionario": "Funcionário 6",
    "data": {
      "$date": {
        "$numberLong": "1684611019431"
      }
    },
    "inicio": 12,
    "fim": 22,
    "valortotal": 297,
    "observacao": "Observação 440",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854cde"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 78",
    "funcionario": "Funcionário 26",
    "data": {
      "$date": {
        "$numberLong": "1684611019431"
      }
    },
    "inicio": 11,
    "fim": 20,
    "valortotal": 282,
    "observacao": "Observação 441",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854cdf"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 27",
    "funcionario": "Funcionário 42",
    "data": {
      "$date": {
        "$numberLong": "1684611019431"
      }
    },
    "inicio": 13,
    "fim": 22,
    "valortotal": 206,
    "observacao": "Observação 442",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ce0"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 5",
    "funcionario": "Funcionário 7",
    "data": {
      "$date": {
        "$numberLong": "1684611019431"
      }
    },
    "inicio": 8,
    "fim": 21,
    "valortotal": 150,
    "observacao": "Observação 443",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ce1"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 89",
    "funcionario": "Funcionário 4",
    "data": {
      "$date": {
        "$numberLong": "1684611019432"
      }
    },
    "inicio": 15,
    "fim": 19,
    "valortotal": 419,
    "observacao": "Observação 444",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ce2"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 29",
    "funcionario": "Funcionário 25",
    "data": {
      "$date": {
        "$numberLong": "1684611019432"
      }
    },
    "inicio": 15,
    "fim": 19,
    "valortotal": 406,
    "observacao": "Observação 445",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ce3"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 8",
    "funcionario": "Funcionário 11",
    "data": {
      "$date": {
        "$numberLong": "1684611019432"
      }
    },
    "inicio": 12,
    "fim": 21,
    "valortotal": 169,
    "observacao": "Observação 446",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ce4"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 70",
    "funcionario": "Funcionário 44",
    "data": {
      "$date": {
        "$numberLong": "1684611019432"
      }
    },
    "inicio": 16,
    "fim": 21,
    "valortotal": 116,
    "observacao": "Observação 447",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ce5"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 81",
    "funcionario": "Funcionário 5",
    "data": {
      "$date": {
        "$numberLong": "1684611019432"
      }
    },
    "inicio": 15,
    "fim": 20,
    "valortotal": 265,
    "observacao": "Observação 448",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ce6"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 100",
    "funcionario": "Funcionário 23",
    "data": {
      "$date": {
        "$numberLong": "1684611019432"
      }
    },
    "inicio": 12,
    "fim": 19,
    "valortotal": 66,
    "observacao": "Observação 449",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ce7"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 31",
    "funcionario": "Funcionário 10",
    "data": {
      "$date": {
        "$numberLong": "1684611019432"
      }
    },
    "inicio": 17,
    "fim": 21,
    "valortotal": 108,
    "observacao": "Observação 450",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ce8"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 75",
    "funcionario": "Funcionário 45",
    "data": {
      "$date": {
        "$numberLong": "1684611019432"
      }
    },
    "inicio": 12,
    "fim": 20,
    "valortotal": 276,
    "observacao": "Observação 451",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ce9"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 97",
    "funcionario": "Funcionário 46",
    "data": {
      "$date": {
        "$numberLong": "1684611019432"
      }
    },
    "inicio": 18,
    "fim": 20,
    "valortotal": 307,
    "observacao": "Observação 452",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854cea"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 84",
    "funcionario": "Funcionário 42",
    "data": {
      "$date": {
        "$numberLong": "1684611019432"
      }
    },
    "inicio": 17,
    "fim": 22,
    "valortotal": 263,
    "observacao": "Observação 453",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ceb"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 4",
    "funcionario": "Funcionário 48",
    "data": {
      "$date": {
        "$numberLong": "1684611019432"
      }
    },
    "inicio": 9,
    "fim": 22,
    "valortotal": 426,
    "observacao": "Observação 454",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854cec"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 12",
    "funcionario": "Funcionário 45",
    "data": {
      "$date": {
        "$numberLong": "1684611019432"
      }
    },
    "inicio": 8,
    "fim": 22,
    "valortotal": 461,
    "observacao": "Observação 455",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ced"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 64",
    "funcionario": "Funcionário 11",
    "data": {
      "$date": {
        "$numberLong": "1684611019432"
      }
    },
    "inicio": 17,
    "fim": 22,
    "valortotal": 236,
    "observacao": "Observação 456",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854cee"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 47",
    "funcionario": "Funcionário 49",
    "data": {
      "$date": {
        "$numberLong": "1684611019432"
      }
    },
    "inicio": 11,
    "fim": 19,
    "valortotal": 294,
    "observacao": "Observação 457",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854cef"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 56",
    "funcionario": "Funcionário 20",
    "data": {
      "$date": {
        "$numberLong": "1684611019432"
      }
    },
    "inicio": 10,
    "fim": 20,
    "valortotal": 108,
    "observacao": "Observação 458",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854cf0"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 39",
    "funcionario": "Funcionário 17",
    "data": {
      "$date": {
        "$numberLong": "1684611019432"
      }
    },
    "inicio": 13,
    "fim": 21,
    "valortotal": 454,
    "observacao": "Observação 459",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854cf1"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 36",
    "funcionario": "Funcionário 15",
    "data": {
      "$date": {
        "$numberLong": "1684611019432"
      }
    },
    "inicio": 9,
    "fim": 20,
    "valortotal": 296,
    "observacao": "Observação 460",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854cf2"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 6",
    "funcionario": "Funcionário 20",
    "data": {
      "$date": {
        "$numberLong": "1684611019432"
      }
    },
    "inicio": 11,
    "fim": 20,
    "valortotal": 440,
    "observacao": "Observação 461",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854cf3"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 49",
    "funcionario": "Funcionário 23",
    "data": {
      "$date": {
        "$numberLong": "1684611019432"
      }
    },
    "inicio": 8,
    "fim": 21,
    "valortotal": 238,
    "observacao": "Observação 462",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854cf4"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 82",
    "funcionario": "Funcionário 17",
    "data": {
      "$date": {
        "$numberLong": "1684611019432"
      }
    },
    "inicio": 14,
    "fim": 20,
    "valortotal": 264,
    "observacao": "Observação 463",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854cf5"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 55",
    "funcionario": "Funcionário 44",
    "data": {
      "$date": {
        "$numberLong": "1684611019432"
      }
    },
    "inicio": 11,
    "fim": 22,
    "valortotal": 131,
    "observacao": "Observação 464",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854cf6"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 71",
    "funcionario": "Funcionário 25",
    "data": {
      "$date": {
        "$numberLong": "1684611019432"
      }
    },
    "inicio": 10,
    "fim": 21,
    "valortotal": 398,
    "observacao": "Observação 465",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854cf7"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 40",
    "funcionario": "Funcionário 16",
    "data": {
      "$date": {
        "$numberLong": "1684611019432"
      }
    },
    "inicio": 18,
    "fim": 22,
    "valortotal": 388,
    "observacao": "Observação 466",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854cf8"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 48",
    "funcionario": "Funcionário 28",
    "data": {
      "$date": {
        "$numberLong": "1684611019432"
      }
    },
    "inicio": 12,
    "fim": 20,
    "valortotal": 405,
    "observacao": "Observação 467",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854cf9"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 41",
    "funcionario": "Funcionário 43",
    "data": {
      "$date": {
        "$numberLong": "1684611019432"
      }
    },
    "inicio": 11,
    "fim": 22,
    "valortotal": 385,
    "observacao": "Observação 468",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854cfa"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 90",
    "funcionario": "Funcionário 23",
    "data": {
      "$date": {
        "$numberLong": "1684611019432"
      }
    },
    "inicio": 12,
    "fim": 20,
    "valortotal": 339,
    "observacao": "Observação 469",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854cfb"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 58",
    "funcionario": "Funcionário 21",
    "data": {
      "$date": {
        "$numberLong": "1684611019432"
      }
    },
    "inicio": 8,
    "fim": 21,
    "valortotal": 158,
    "observacao": "Observação 470",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854cfc"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 93",
    "funcionario": "Funcionário 5",
    "data": {
      "$date": {
        "$numberLong": "1684611019432"
      }
    },
    "inicio": 12,
    "fim": 22,
    "valortotal": 219,
    "observacao": "Observação 471",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854cfd"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 99",
    "funcionario": "Funcionário 23",
    "data": {
      "$date": {
        "$numberLong": "1684611019432"
      }
    },
    "inicio": 13,
    "fim": 20,
    "valortotal": 115,
    "observacao": "Observação 472",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854cfe"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 77",
    "funcionario": "Funcionário 3",
    "data": {
      "$date": {
        "$numberLong": "1684611019432"
      }
    },
    "inicio": 13,
    "fim": 22,
    "valortotal": 301,
    "observacao": "Observação 473",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854cff"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 42",
    "funcionario": "Funcionário 30",
    "data": {
      "$date": {
        "$numberLong": "1684611019432"
      }
    },
    "inicio": 16,
    "fim": 21,
    "valortotal": 242,
    "observacao": "Observação 474",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d00"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 35",
    "funcionario": "Funcionário 23",
    "data": {
      "$date": {
        "$numberLong": "1684611019433"
      }
    },
    "inicio": 17,
    "fim": 21,
    "valortotal": 349,
    "observacao": "Observação 475",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d01"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 39",
    "funcionario": "Funcionário 42",
    "data": {
      "$date": {
        "$numberLong": "1684611019433"
      }
    },
    "inicio": 14,
    "fim": 19,
    "valortotal": 126,
    "observacao": "Observação 476",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d02"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 83",
    "funcionario": "Funcionário 31",
    "data": {
      "$date": {
        "$numberLong": "1684611019433"
      }
    },
    "inicio": 15,
    "fim": 22,
    "valortotal": 109,
    "observacao": "Observação 477",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d03"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 44",
    "funcionario": "Funcionário 36",
    "data": {
      "$date": {
        "$numberLong": "1684611019433"
      }
    },
    "inicio": 11,
    "fim": 21,
    "valortotal": 130,
    "observacao": "Observação 478",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d04"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 39",
    "funcionario": "Funcionário 44",
    "data": {
      "$date": {
        "$numberLong": "1684611019433"
      }
    },
    "inicio": 13,
    "fim": 20,
    "valortotal": 224,
    "observacao": "Observação 479",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d05"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 72",
    "funcionario": "Funcionário 28",
    "data": {
      "$date": {
        "$numberLong": "1684611019433"
      }
    },
    "inicio": 8,
    "fim": 20,
    "valortotal": 411,
    "observacao": "Observação 480",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d06"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 86",
    "funcionario": "Funcionário 32",
    "data": {
      "$date": {
        "$numberLong": "1684611019433"
      }
    },
    "inicio": 18,
    "fim": 22,
    "valortotal": 323,
    "observacao": "Observação 481",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d07"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 5",
    "funcionario": "Funcionário 30",
    "data": {
      "$date": {
        "$numberLong": "1684611019433"
      }
    },
    "inicio": 8,
    "fim": 19,
    "valortotal": 371,
    "observacao": "Observação 482",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d08"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 29",
    "funcionario": "Funcionário 19",
    "data": {
      "$date": {
        "$numberLong": "1684611019433"
      }
    },
    "inicio": 13,
    "fim": 20,
    "valortotal": 442,
    "observacao": "Observação 483",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d09"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 54",
    "funcionario": "Funcionário 46",
    "data": {
      "$date": {
        "$numberLong": "1684611019433"
      }
    },
    "inicio": 11,
    "fim": 21,
    "valortotal": 60,
    "observacao": "Observação 484",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d0a"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 60",
    "funcionario": "Funcionário 18",
    "data": {
      "$date": {
        "$numberLong": "1684611019433"
      }
    },
    "inicio": 11,
    "fim": 20,
    "valortotal": 169,
    "observacao": "Observação 485",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d0b"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 2",
    "funcionario": "Funcionário 38",
    "data": {
      "$date": {
        "$numberLong": "1684611019433"
      }
    },
    "inicio": 10,
    "fim": 22,
    "valortotal": 89,
    "observacao": "Observação 486",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d0c"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 75",
    "funcionario": "Funcionário 27",
    "data": {
      "$date": {
        "$numberLong": "1684611019433"
      }
    },
    "inicio": 14,
    "fim": 20,
    "valortotal": 112,
    "observacao": "Observação 487",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d0d"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 99",
    "funcionario": "Funcionário 15",
    "data": {
      "$date": {
        "$numberLong": "1684611019433"
      }
    },
    "inicio": 13,
    "fim": 22,
    "valortotal": 431,
    "observacao": "Observação 488",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d0e"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 88",
    "funcionario": "Funcionário 9",
    "data": {
      "$date": {
        "$numberLong": "1684611019433"
      }
    },
    "inicio": 17,
    "fim": 22,
    "valortotal": 287,
    "observacao": "Observação 489",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d0f"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 27",
    "funcionario": "Funcionário 25",
    "data": {
      "$date": {
        "$numberLong": "1684611019433"
      }
    },
    "inicio": 11,
    "fim": 20,
    "valortotal": 283,
    "observacao": "Observação 490",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d10"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 33",
    "funcionario": "Funcionário 22",
    "data": {
      "$date": {
        "$numberLong": "1684611019433"
      }
    },
    "inicio": 9,
    "fim": 22,
    "valortotal": 471,
    "observacao": "Observação 491",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d11"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 74",
    "funcionario": "Funcionário 26",
    "data": {
      "$date": {
        "$numberLong": "1684611019433"
      }
    },
    "inicio": 8,
    "fim": 21,
    "valortotal": 155,
    "observacao": "Observação 492",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d12"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 89",
    "funcionario": "Funcionário 31",
    "data": {
      "$date": {
        "$numberLong": "1684611019433"
      }
    },
    "inicio": 9,
    "fim": 20,
    "valortotal": 435,
    "observacao": "Observação 493",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d13"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 69",
    "funcionario": "Funcionário 23",
    "data": {
      "$date": {
        "$numberLong": "1684611019433"
      }
    },
    "inicio": 16,
    "fim": 22,
    "valortotal": 225,
    "observacao": "Observação 494",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d14"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 9",
    "funcionario": "Funcionário 17",
    "data": {
      "$date": {
        "$numberLong": "1684611019433"
      }
    },
    "inicio": 12,
    "fim": 22,
    "valortotal": 215,
    "observacao": "Observação 495",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d15"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 91",
    "funcionario": "Funcionário 7",
    "data": {
      "$date": {
        "$numberLong": "1684611019433"
      }
    },
    "inicio": 14,
    "fim": 19,
    "valortotal": 480,
    "observacao": "Observação 496",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d16"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 75",
    "funcionario": "Funcionário 38",
    "data": {
      "$date": {
        "$numberLong": "1684611019433"
      }
    },
    "inicio": 9,
    "fim": 21,
    "valortotal": 153,
    "observacao": "Observação 497",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d17"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 94",
    "funcionario": "Funcionário 3",
    "data": {
      "$date": {
        "$numberLong": "1684611019433"
      }
    },
    "inicio": 11,
    "fim": 22,
    "valortotal": 65,
    "observacao": "Observação 498",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d18"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 39",
    "funcionario": "Funcionário 18",
    "data": {
      "$date": {
        "$numberLong": "1684611019433"
      }
    },
    "inicio": 15,
    "fim": 22,
    "valortotal": 92,
    "observacao": "Observação 499",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d19"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 69",
    "funcionario": "Funcionário 15",
    "data": {
      "$date": {
        "$numberLong": "1684611019433"
      }
    },
    "inicio": 10,
    "fim": 21,
    "valortotal": 220,
    "observacao": "Observação 500",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d1a"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 32",
    "funcionario": "Funcionário 24",
    "data": {
      "$date": {
        "$numberLong": "1684611019433"
      }
    },
    "inicio": 16,
    "fim": 21,
    "valortotal": 150,
    "observacao": "Observação 501",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d1b"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 27",
    "funcionario": "Funcionário 50",
    "data": {
      "$date": {
        "$numberLong": "1684611019433"
      }
    },
    "inicio": 16,
    "fim": 20,
    "valortotal": 236,
    "observacao": "Observação 502",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d1c"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 63",
    "funcionario": "Funcionário 38",
    "data": {
      "$date": {
        "$numberLong": "1684611019433"
      }
    },
    "inicio": 14,
    "fim": 19,
    "valortotal": 376,
    "observacao": "Observação 503",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d1d"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 63",
    "funcionario": "Funcionário 31",
    "data": {
      "$date": {
        "$numberLong": "1684611019433"
      }
    },
    "inicio": 13,
    "fim": 22,
    "valortotal": 476,
    "observacao": "Observação 504",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d1e"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 81",
    "funcionario": "Funcionário 5",
    "data": {
      "$date": {
        "$numberLong": "1684611019433"
      }
    },
    "inicio": 18,
    "fim": 20,
    "valortotal": 390,
    "observacao": "Observação 505",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d1f"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 4",
    "funcionario": "Funcionário 31",
    "data": {
      "$date": {
        "$numberLong": "1684611019433"
      }
    },
    "inicio": 13,
    "fim": 20,
    "valortotal": 376,
    "observacao": "Observação 506",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d20"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 41",
    "funcionario": "Funcionário 50",
    "data": {
      "$date": {
        "$numberLong": "1684611019434"
      }
    },
    "inicio": 12,
    "fim": 20,
    "valortotal": 217,
    "observacao": "Observação 507",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d21"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 16",
    "funcionario": "Funcionário 16",
    "data": {
      "$date": {
        "$numberLong": "1684611019434"
      }
    },
    "inicio": 18,
    "fim": 22,
    "valortotal": 284,
    "observacao": "Observação 508",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d22"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 90",
    "funcionario": "Funcionário 47",
    "data": {
      "$date": {
        "$numberLong": "1684611019434"
      }
    },
    "inicio": 11,
    "fim": 20,
    "valortotal": 470,
    "observacao": "Observação 509",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d23"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 5",
    "funcionario": "Funcionário 45",
    "data": {
      "$date": {
        "$numberLong": "1684611019434"
      }
    },
    "inicio": 14,
    "fim": 22,
    "valortotal": 397,
    "observacao": "Observação 510",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d24"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 54",
    "funcionario": "Funcionário 42",
    "data": {
      "$date": {
        "$numberLong": "1684611019434"
      }
    },
    "inicio": 17,
    "fim": 19,
    "valortotal": 435,
    "observacao": "Observação 511",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d25"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 37",
    "funcionario": "Funcionário 11",
    "data": {
      "$date": {
        "$numberLong": "1684611019434"
      }
    },
    "inicio": 14,
    "fim": 19,
    "valortotal": 428,
    "observacao": "Observação 512",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d26"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 15",
    "funcionario": "Funcionário 9",
    "data": {
      "$date": {
        "$numberLong": "1684611019434"
      }
    },
    "inicio": 17,
    "fim": 21,
    "valortotal": 483,
    "observacao": "Observação 513",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d27"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 12",
    "funcionario": "Funcionário 45",
    "data": {
      "$date": {
        "$numberLong": "1684611019434"
      }
    },
    "inicio": 16,
    "fim": 21,
    "valortotal": 55,
    "observacao": "Observação 514",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d28"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 47",
    "funcionario": "Funcionário 46",
    "data": {
      "$date": {
        "$numberLong": "1684611019434"
      }
    },
    "inicio": 9,
    "fim": 19,
    "valortotal": 234,
    "observacao": "Observação 515",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d29"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 90",
    "funcionario": "Funcionário 3",
    "data": {
      "$date": {
        "$numberLong": "1684611019434"
      }
    },
    "inicio": 13,
    "fim": 19,
    "valortotal": 431,
    "observacao": "Observação 516",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d2a"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 11",
    "funcionario": "Funcionário 1",
    "data": {
      "$date": {
        "$numberLong": "1684611019434"
      }
    },
    "inicio": 18,
    "fim": 21,
    "valortotal": 304,
    "observacao": "Observação 517",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d2b"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 67",
    "funcionario": "Funcionário 36",
    "data": {
      "$date": {
        "$numberLong": "1684611019434"
      }
    },
    "inicio": 16,
    "fim": 20,
    "valortotal": 461,
    "observacao": "Observação 518",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d2c"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 57",
    "funcionario": "Funcionário 12",
    "data": {
      "$date": {
        "$numberLong": "1684611019434"
      }
    },
    "inicio": 12,
    "fim": 19,
    "valortotal": 454,
    "observacao": "Observação 519",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d2d"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 87",
    "funcionario": "Funcionário 36",
    "data": {
      "$date": {
        "$numberLong": "1684611019434"
      }
    },
    "inicio": 14,
    "fim": 20,
    "valortotal": 465,
    "observacao": "Observação 520",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d2e"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 45",
    "funcionario": "Funcionário 13",
    "data": {
      "$date": {
        "$numberLong": "1684611019434"
      }
    },
    "inicio": 8,
    "fim": 22,
    "valortotal": 94,
    "observacao": "Observação 521",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d2f"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 86",
    "funcionario": "Funcionário 30",
    "data": {
      "$date": {
        "$numberLong": "1684611019434"
      }
    },
    "inicio": 9,
    "fim": 19,
    "valortotal": 60,
    "observacao": "Observação 522",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d30"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 74",
    "funcionario": "Funcionário 33",
    "data": {
      "$date": {
        "$numberLong": "1684611019434"
      }
    },
    "inicio": 11,
    "fim": 20,
    "valortotal": 290,
    "observacao": "Observação 523",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d31"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 65",
    "funcionario": "Funcionário 27",
    "data": {
      "$date": {
        "$numberLong": "1684611019434"
      }
    },
    "inicio": 10,
    "fim": 20,
    "valortotal": 256,
    "observacao": "Observação 524",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d32"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 28",
    "funcionario": "Funcionário 24",
    "data": {
      "$date": {
        "$numberLong": "1684611019434"
      }
    },
    "inicio": 18,
    "fim": 22,
    "valortotal": 249,
    "observacao": "Observação 525",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d33"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 48",
    "funcionario": "Funcionário 4",
    "data": {
      "$date": {
        "$numberLong": "1684611019434"
      }
    },
    "inicio": 8,
    "fim": 20,
    "valortotal": 58,
    "observacao": "Observação 526",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d34"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 65",
    "funcionario": "Funcionário 30",
    "data": {
      "$date": {
        "$numberLong": "1684611019434"
      }
    },
    "inicio": 9,
    "fim": 19,
    "valortotal": 443,
    "observacao": "Observação 527",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d35"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 6",
    "funcionario": "Funcionário 8",
    "data": {
      "$date": {
        "$numberLong": "1684611019434"
      }
    },
    "inicio": 10,
    "fim": 20,
    "valortotal": 495,
    "observacao": "Observação 528",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d36"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 30",
    "funcionario": "Funcionário 45",
    "data": {
      "$date": {
        "$numberLong": "1684611019434"
      }
    },
    "inicio": 18,
    "fim": 19,
    "valortotal": 388,
    "observacao": "Observação 529",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d37"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 92",
    "funcionario": "Funcionário 1",
    "data": {
      "$date": {
        "$numberLong": "1684611019434"
      }
    },
    "inicio": 9,
    "fim": 20,
    "valortotal": 77,
    "observacao": "Observação 530",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d38"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 13",
    "funcionario": "Funcionário 41",
    "data": {
      "$date": {
        "$numberLong": "1684611019434"
      }
    },
    "inicio": 15,
    "fim": 20,
    "valortotal": 333,
    "observacao": "Observação 531",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d39"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 6",
    "funcionario": "Funcionário 39",
    "data": {
      "$date": {
        "$numberLong": "1684611019434"
      }
    },
    "inicio": 8,
    "fim": 19,
    "valortotal": 259,
    "observacao": "Observação 532",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d3a"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 53",
    "funcionario": "Funcionário 44",
    "data": {
      "$date": {
        "$numberLong": "1684611019434"
      }
    },
    "inicio": 9,
    "fim": 21,
    "valortotal": 232,
    "observacao": "Observação 533",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d3b"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 99",
    "funcionario": "Funcionário 41",
    "data": {
      "$date": {
        "$numberLong": "1684611019434"
      }
    },
    "inicio": 17,
    "fim": 22,
    "valortotal": 237,
    "observacao": "Observação 534",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d3c"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 14",
    "funcionario": "Funcionário 46",
    "data": {
      "$date": {
        "$numberLong": "1684611019434"
      }
    },
    "inicio": 17,
    "fim": 19,
    "valortotal": 279,
    "observacao": "Observação 535",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d3d"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 33",
    "funcionario": "Funcionário 43",
    "data": {
      "$date": {
        "$numberLong": "1684611019434"
      }
    },
    "inicio": 17,
    "fim": 21,
    "valortotal": 319,
    "observacao": "Observação 536",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d3e"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 27",
    "funcionario": "Funcionário 48",
    "data": {
      "$date": {
        "$numberLong": "1684611019434"
      }
    },
    "inicio": 13,
    "fim": 21,
    "valortotal": 241,
    "observacao": "Observação 537",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d3f"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 15",
    "funcionario": "Funcionário 33",
    "data": {
      "$date": {
        "$numberLong": "1684611019434"
      }
    },
    "inicio": 16,
    "fim": 20,
    "valortotal": 143,
    "observacao": "Observação 538",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d40"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 20",
    "funcionario": "Funcionário 1",
    "data": {
      "$date": {
        "$numberLong": "1684611019434"
      }
    },
    "inicio": 15,
    "fim": 22,
    "valortotal": 439,
    "observacao": "Observação 539",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d41"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 61",
    "funcionario": "Funcionário 49",
    "data": {
      "$date": {
        "$numberLong": "1684611019434"
      }
    },
    "inicio": 14,
    "fim": 19,
    "valortotal": 363,
    "observacao": "Observação 540",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d42"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 82",
    "funcionario": "Funcionário 20",
    "data": {
      "$date": {
        "$numberLong": "1684611019435"
      }
    },
    "inicio": 12,
    "fim": 20,
    "valortotal": 136,
    "observacao": "Observação 541",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d43"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 79",
    "funcionario": "Funcionário 10",
    "data": {
      "$date": {
        "$numberLong": "1684611019435"
      }
    },
    "inicio": 13,
    "fim": 21,
    "valortotal": 256,
    "observacao": "Observação 542",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d44"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 59",
    "funcionario": "Funcionário 3",
    "data": {
      "$date": {
        "$numberLong": "1684611019435"
      }
    },
    "inicio": 17,
    "fim": 19,
    "valortotal": 131,
    "observacao": "Observação 543",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d45"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 56",
    "funcionario": "Funcionário 5",
    "data": {
      "$date": {
        "$numberLong": "1684611019435"
      }
    },
    "inicio": 14,
    "fim": 20,
    "valortotal": 339,
    "observacao": "Observação 544",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d46"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 41",
    "funcionario": "Funcionário 27",
    "data": {
      "$date": {
        "$numberLong": "1684611019435"
      }
    },
    "inicio": 8,
    "fim": 20,
    "valortotal": 188,
    "observacao": "Observação 545",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d47"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 16",
    "funcionario": "Funcionário 31",
    "data": {
      "$date": {
        "$numberLong": "1684611019435"
      }
    },
    "inicio": 17,
    "fim": 20,
    "valortotal": 400,
    "observacao": "Observação 546",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d48"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 28",
    "funcionario": "Funcionário 5",
    "data": {
      "$date": {
        "$numberLong": "1684611019435"
      }
    },
    "inicio": 11,
    "fim": 22,
    "valortotal": 436,
    "observacao": "Observação 547",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d49"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 57",
    "funcionario": "Funcionário 9",
    "data": {
      "$date": {
        "$numberLong": "1684611019435"
      }
    },
    "inicio": 17,
    "fim": 19,
    "valortotal": 305,
    "observacao": "Observação 548",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d4a"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 90",
    "funcionario": "Funcionário 20",
    "data": {
      "$date": {
        "$numberLong": "1684611019435"
      }
    },
    "inicio": 8,
    "fim": 21,
    "valortotal": 198,
    "observacao": "Observação 549",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d4b"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 14",
    "funcionario": "Funcionário 28",
    "data": {
      "$date": {
        "$numberLong": "1684611019435"
      }
    },
    "inicio": 9,
    "fim": 21,
    "valortotal": 174,
    "observacao": "Observação 550",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d4c"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 86",
    "funcionario": "Funcionário 8",
    "data": {
      "$date": {
        "$numberLong": "1684611019435"
      }
    },
    "inicio": 18,
    "fim": 21,
    "valortotal": 314,
    "observacao": "Observação 551",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d4d"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 60",
    "funcionario": "Funcionário 34",
    "data": {
      "$date": {
        "$numberLong": "1684611019435"
      }
    },
    "inicio": 12,
    "fim": 19,
    "valortotal": 426,
    "observacao": "Observação 552",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d4e"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 72",
    "funcionario": "Funcionário 35",
    "data": {
      "$date": {
        "$numberLong": "1684611019435"
      }
    },
    "inicio": 15,
    "fim": 20,
    "valortotal": 291,
    "observacao": "Observação 553",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d4f"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 92",
    "funcionario": "Funcionário 31",
    "data": {
      "$date": {
        "$numberLong": "1684611019435"
      }
    },
    "inicio": 9,
    "fim": 19,
    "valortotal": 111,
    "observacao": "Observação 554",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d50"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 20",
    "funcionario": "Funcionário 4",
    "data": {
      "$date": {
        "$numberLong": "1684611019435"
      }
    },
    "inicio": 17,
    "fim": 21,
    "valortotal": 327,
    "observacao": "Observação 555",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d51"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 9",
    "funcionario": "Funcionário 50",
    "data": {
      "$date": {
        "$numberLong": "1684611019435"
      }
    },
    "inicio": 9,
    "fim": 22,
    "valortotal": 240,
    "observacao": "Observação 556",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d52"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 78",
    "funcionario": "Funcionário 32",
    "data": {
      "$date": {
        "$numberLong": "1684611019435"
      }
    },
    "inicio": 8,
    "fim": 19,
    "valortotal": 227,
    "observacao": "Observação 557",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d53"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 44",
    "funcionario": "Funcionário 42",
    "data": {
      "$date": {
        "$numberLong": "1684611019435"
      }
    },
    "inicio": 9,
    "fim": 21,
    "valortotal": 431,
    "observacao": "Observação 558",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d54"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 78",
    "funcionario": "Funcionário 50",
    "data": {
      "$date": {
        "$numberLong": "1684611019435"
      }
    },
    "inicio": 11,
    "fim": 22,
    "valortotal": 161,
    "observacao": "Observação 559",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d55"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 5",
    "funcionario": "Funcionário 27",
    "data": {
      "$date": {
        "$numberLong": "1684611019435"
      }
    },
    "inicio": 11,
    "fim": 21,
    "valortotal": 290,
    "observacao": "Observação 560",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d56"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 15",
    "funcionario": "Funcionário 12",
    "data": {
      "$date": {
        "$numberLong": "1684611019435"
      }
    },
    "inicio": 13,
    "fim": 21,
    "valortotal": 181,
    "observacao": "Observação 561",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d57"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 4",
    "funcionario": "Funcionário 33",
    "data": {
      "$date": {
        "$numberLong": "1684611019435"
      }
    },
    "inicio": 15,
    "fim": 19,
    "valortotal": 112,
    "observacao": "Observação 562",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d58"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 77",
    "funcionario": "Funcionário 48",
    "data": {
      "$date": {
        "$numberLong": "1684611019435"
      }
    },
    "inicio": 18,
    "fim": 22,
    "valortotal": 291,
    "observacao": "Observação 563",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d59"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 31",
    "funcionario": "Funcionário 17",
    "data": {
      "$date": {
        "$numberLong": "1684611019435"
      }
    },
    "inicio": 9,
    "fim": 21,
    "valortotal": 484,
    "observacao": "Observação 564",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d5a"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 19",
    "funcionario": "Funcionário 24",
    "data": {
      "$date": {
        "$numberLong": "1684611019435"
      }
    },
    "inicio": 9,
    "fim": 20,
    "valortotal": 107,
    "observacao": "Observação 565",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d5b"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 37",
    "funcionario": "Funcionário 5",
    "data": {
      "$date": {
        "$numberLong": "1684611019435"
      }
    },
    "inicio": 10,
    "fim": 19,
    "valortotal": 452,
    "observacao": "Observação 566",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d5c"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 67",
    "funcionario": "Funcionário 39",
    "data": {
      "$date": {
        "$numberLong": "1684611019435"
      }
    },
    "inicio": 8,
    "fim": 20,
    "valortotal": 130,
    "observacao": "Observação 567",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d5d"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 24",
    "funcionario": "Funcionário 30",
    "data": {
      "$date": {
        "$numberLong": "1684611019435"
      }
    },
    "inicio": 17,
    "fim": 21,
    "valortotal": 103,
    "observacao": "Observação 568",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d5e"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 32",
    "funcionario": "Funcionário 42",
    "data": {
      "$date": {
        "$numberLong": "1684611019435"
      }
    },
    "inicio": 10,
    "fim": 20,
    "valortotal": 104,
    "observacao": "Observação 569",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d5f"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 44",
    "funcionario": "Funcionário 45",
    "data": {
      "$date": {
        "$numberLong": "1684611019435"
      }
    },
    "inicio": 17,
    "fim": 22,
    "valortotal": 141,
    "observacao": "Observação 570",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d60"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 68",
    "funcionario": "Funcionário 5",
    "data": {
      "$date": {
        "$numberLong": "1684611019435"
      }
    },
    "inicio": 15,
    "fim": 22,
    "valortotal": 259,
    "observacao": "Observação 571",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d61"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 61",
    "funcionario": "Funcionário 34",
    "data": {
      "$date": {
        "$numberLong": "1684611019435"
      }
    },
    "inicio": 17,
    "fim": 20,
    "valortotal": 96,
    "observacao": "Observação 572",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d62"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 21",
    "funcionario": "Funcionário 42",
    "data": {
      "$date": {
        "$numberLong": "1684611019435"
      }
    },
    "inicio": 18,
    "fim": 20,
    "valortotal": 328,
    "observacao": "Observação 573",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d63"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 38",
    "funcionario": "Funcionário 44",
    "data": {
      "$date": {
        "$numberLong": "1684611019435"
      }
    },
    "inicio": 8,
    "fim": 19,
    "valortotal": 218,
    "observacao": "Observação 574",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d64"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 33",
    "funcionario": "Funcionário 24",
    "data": {
      "$date": {
        "$numberLong": "1684611019435"
      }
    },
    "inicio": 18,
    "fim": 22,
    "valortotal": 94,
    "observacao": "Observação 575",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d65"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 81",
    "funcionario": "Funcionário 33",
    "data": {
      "$date": {
        "$numberLong": "1684611019435"
      }
    },
    "inicio": 18,
    "fim": 19,
    "valortotal": 485,
    "observacao": "Observação 576",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d66"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 32",
    "funcionario": "Funcionário 38",
    "data": {
      "$date": {
        "$numberLong": "1684611019436"
      }
    },
    "inicio": 14,
    "fim": 21,
    "valortotal": 80,
    "observacao": "Observação 577",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d67"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 67",
    "funcionario": "Funcionário 5",
    "data": {
      "$date": {
        "$numberLong": "1684611019436"
      }
    },
    "inicio": 16,
    "fim": 22,
    "valortotal": 242,
    "observacao": "Observação 578",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d68"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 43",
    "funcionario": "Funcionário 8",
    "data": {
      "$date": {
        "$numberLong": "1684611019436"
      }
    },
    "inicio": 8,
    "fim": 20,
    "valortotal": 260,
    "observacao": "Observação 579",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d69"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 74",
    "funcionario": "Funcionário 31",
    "data": {
      "$date": {
        "$numberLong": "1684611019436"
      }
    },
    "inicio": 12,
    "fim": 19,
    "valortotal": 390,
    "observacao": "Observação 580",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d6a"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 61",
    "funcionario": "Funcionário 40",
    "data": {
      "$date": {
        "$numberLong": "1684611019436"
      }
    },
    "inicio": 9,
    "fim": 19,
    "valortotal": 160,
    "observacao": "Observação 581",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d6b"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 41",
    "funcionario": "Funcionário 1",
    "data": {
      "$date": {
        "$numberLong": "1684611019436"
      }
    },
    "inicio": 11,
    "fim": 22,
    "valortotal": 355,
    "observacao": "Observação 582",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d6c"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 14",
    "funcionario": "Funcionário 49",
    "data": {
      "$date": {
        "$numberLong": "1684611019436"
      }
    },
    "inicio": 12,
    "fim": 20,
    "valortotal": 393,
    "observacao": "Observação 583",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d6d"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 49",
    "funcionario": "Funcionário 47",
    "data": {
      "$date": {
        "$numberLong": "1684611019436"
      }
    },
    "inicio": 12,
    "fim": 19,
    "valortotal": 294,
    "observacao": "Observação 584",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d6e"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 61",
    "funcionario": "Funcionário 1",
    "data": {
      "$date": {
        "$numberLong": "1684611019436"
      }
    },
    "inicio": 18,
    "fim": 19,
    "valortotal": 126,
    "observacao": "Observação 585",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d6f"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 37",
    "funcionario": "Funcionário 10",
    "data": {
      "$date": {
        "$numberLong": "1684611019436"
      }
    },
    "inicio": 15,
    "fim": 22,
    "valortotal": 307,
    "observacao": "Observação 586",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d70"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 2",
    "funcionario": "Funcionário 36",
    "data": {
      "$date": {
        "$numberLong": "1684611019436"
      }
    },
    "inicio": 17,
    "fim": 20,
    "valortotal": 425,
    "observacao": "Observação 587",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d71"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 71",
    "funcionario": "Funcionário 46",
    "data": {
      "$date": {
        "$numberLong": "1684611019436"
      }
    },
    "inicio": 14,
    "fim": 19,
    "valortotal": 60,
    "observacao": "Observação 588",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d72"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 9",
    "funcionario": "Funcionário 4",
    "data": {
      "$date": {
        "$numberLong": "1684611019436"
      }
    },
    "inicio": 9,
    "fim": 19,
    "valortotal": 267,
    "observacao": "Observação 589",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d73"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 56",
    "funcionario": "Funcionário 20",
    "data": {
      "$date": {
        "$numberLong": "1684611019436"
      }
    },
    "inicio": 13,
    "fim": 19,
    "valortotal": 206,
    "observacao": "Observação 590",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d74"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 90",
    "funcionario": "Funcionário 32",
    "data": {
      "$date": {
        "$numberLong": "1684611019436"
      }
    },
    "inicio": 13,
    "fim": 21,
    "valortotal": 362,
    "observacao": "Observação 591",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d75"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 68",
    "funcionario": "Funcionário 18",
    "data": {
      "$date": {
        "$numberLong": "1684611019436"
      }
    },
    "inicio": 11,
    "fim": 19,
    "valortotal": 351,
    "observacao": "Observação 592",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d76"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 20",
    "funcionario": "Funcionário 35",
    "data": {
      "$date": {
        "$numberLong": "1684611019436"
      }
    },
    "inicio": 17,
    "fim": 21,
    "valortotal": 299,
    "observacao": "Observação 593",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d77"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 7",
    "funcionario": "Funcionário 17",
    "data": {
      "$date": {
        "$numberLong": "1684611019436"
      }
    },
    "inicio": 13,
    "fim": 21,
    "valortotal": 98,
    "observacao": "Observação 594",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d78"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 91",
    "funcionario": "Funcionário 41",
    "data": {
      "$date": {
        "$numberLong": "1684611019436"
      }
    },
    "inicio": 8,
    "fim": 19,
    "valortotal": 257,
    "observacao": "Observação 595",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d79"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 96",
    "funcionario": "Funcionário 14",
    "data": {
      "$date": {
        "$numberLong": "1684611019436"
      }
    },
    "inicio": 10,
    "fim": 19,
    "valortotal": 396,
    "observacao": "Observação 596",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d7a"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 39",
    "funcionario": "Funcionário 32",
    "data": {
      "$date": {
        "$numberLong": "1684611019436"
      }
    },
    "inicio": 12,
    "fim": 21,
    "valortotal": 429,
    "observacao": "Observação 597",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d7b"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 55",
    "funcionario": "Funcionário 41",
    "data": {
      "$date": {
        "$numberLong": "1684611019436"
      }
    },
    "inicio": 11,
    "fim": 19,
    "valortotal": 498,
    "observacao": "Observação 598",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d7c"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 66",
    "funcionario": "Funcionário 15",
    "data": {
      "$date": {
        "$numberLong": "1684611019436"
      }
    },
    "inicio": 15,
    "fim": 19,
    "valortotal": 199,
    "observacao": "Observação 599",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d7d"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 81",
    "funcionario": "Funcionário 22",
    "data": {
      "$date": {
        "$numberLong": "1684611019436"
      }
    },
    "inicio": 8,
    "fim": 19,
    "valortotal": 93,
    "observacao": "Observação 600",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d7e"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 43",
    "funcionario": "Funcionário 33",
    "data": {
      "$date": {
        "$numberLong": "1684611019436"
      }
    },
    "inicio": 14,
    "fim": 20,
    "valortotal": 227,
    "observacao": "Observação 601",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d7f"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 43",
    "funcionario": "Funcionário 26",
    "data": {
      "$date": {
        "$numberLong": "1684611019436"
      }
    },
    "inicio": 11,
    "fim": 19,
    "valortotal": 432,
    "observacao": "Observação 602",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d80"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 17",
    "funcionario": "Funcionário 41",
    "data": {
      "$date": {
        "$numberLong": "1684611019436"
      }
    },
    "inicio": 16,
    "fim": 22,
    "valortotal": 87,
    "observacao": "Observação 603",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d81"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 77",
    "funcionario": "Funcionário 44",
    "data": {
      "$date": {
        "$numberLong": "1684611019436"
      }
    },
    "inicio": 14,
    "fim": 22,
    "valortotal": 201,
    "observacao": "Observação 604",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d82"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 95",
    "funcionario": "Funcionário 17",
    "data": {
      "$date": {
        "$numberLong": "1684611019436"
      }
    },
    "inicio": 17,
    "fim": 20,
    "valortotal": 254,
    "observacao": "Observação 605",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d83"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 36",
    "funcionario": "Funcionário 29",
    "data": {
      "$date": {
        "$numberLong": "1684611019436"
      }
    },
    "inicio": 10,
    "fim": 20,
    "valortotal": 268,
    "observacao": "Observação 606",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d84"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 42",
    "funcionario": "Funcionário 42",
    "data": {
      "$date": {
        "$numberLong": "1684611019436"
      }
    },
    "inicio": 16,
    "fim": 20,
    "valortotal": 291,
    "observacao": "Observação 607",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d85"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 85",
    "funcionario": "Funcionário 38",
    "data": {
      "$date": {
        "$numberLong": "1684611019436"
      }
    },
    "inicio": 11,
    "fim": 19,
    "valortotal": 193,
    "observacao": "Observação 608",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d86"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 83",
    "funcionario": "Funcionário 50",
    "data": {
      "$date": {
        "$numberLong": "1684611019436"
      }
    },
    "inicio": 14,
    "fim": 20,
    "valortotal": 90,
    "observacao": "Observação 609",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d87"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 87",
    "funcionario": "Funcionário 38",
    "data": {
      "$date": {
        "$numberLong": "1684611019437"
      }
    },
    "inicio": 9,
    "fim": 20,
    "valortotal": 449,
    "observacao": "Observação 610",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d88"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 54",
    "funcionario": "Funcionário 37",
    "data": {
      "$date": {
        "$numberLong": "1684611019437"
      }
    },
    "inicio": 9,
    "fim": 22,
    "valortotal": 335,
    "observacao": "Observação 611",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d89"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 14",
    "funcionario": "Funcionário 42",
    "data": {
      "$date": {
        "$numberLong": "1684611019437"
      }
    },
    "inicio": 14,
    "fim": 20,
    "valortotal": 344,
    "observacao": "Observação 612",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d8a"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 42",
    "funcionario": "Funcionário 39",
    "data": {
      "$date": {
        "$numberLong": "1684611019437"
      }
    },
    "inicio": 12,
    "fim": 21,
    "valortotal": 236,
    "observacao": "Observação 613",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d8b"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 73",
    "funcionario": "Funcionário 49",
    "data": {
      "$date": {
        "$numberLong": "1684611019437"
      }
    },
    "inicio": 8,
    "fim": 22,
    "valortotal": 241,
    "observacao": "Observação 614",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d8c"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 23",
    "funcionario": "Funcionário 45",
    "data": {
      "$date": {
        "$numberLong": "1684611019437"
      }
    },
    "inicio": 16,
    "fim": 22,
    "valortotal": 170,
    "observacao": "Observação 615",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d8d"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 10",
    "funcionario": "Funcionário 32",
    "data": {
      "$date": {
        "$numberLong": "1684611019437"
      }
    },
    "inicio": 15,
    "fim": 20,
    "valortotal": 392,
    "observacao": "Observação 616",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d8e"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 98",
    "funcionario": "Funcionário 34",
    "data": {
      "$date": {
        "$numberLong": "1684611019437"
      }
    },
    "inicio": 10,
    "fim": 21,
    "valortotal": 239,
    "observacao": "Observação 617",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d8f"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 49",
    "funcionario": "Funcionário 17",
    "data": {
      "$date": {
        "$numberLong": "1684611019437"
      }
    },
    "inicio": 10,
    "fim": 19,
    "valortotal": 497,
    "observacao": "Observação 618",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d90"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 9",
    "funcionario": "Funcionário 1",
    "data": {
      "$date": {
        "$numberLong": "1684611019437"
      }
    },
    "inicio": 8,
    "fim": 19,
    "valortotal": 130,
    "observacao": "Observação 619",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d91"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 37",
    "funcionario": "Funcionário 37",
    "data": {
      "$date": {
        "$numberLong": "1684611019437"
      }
    },
    "inicio": 13,
    "fim": 22,
    "valortotal": 197,
    "observacao": "Observação 620",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d92"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 53",
    "funcionario": "Funcionário 48",
    "data": {
      "$date": {
        "$numberLong": "1684611019437"
      }
    },
    "inicio": 18,
    "fim": 19,
    "valortotal": 387,
    "observacao": "Observação 621",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d93"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 14",
    "funcionario": "Funcionário 16",
    "data": {
      "$date": {
        "$numberLong": "1684611019437"
      }
    },
    "inicio": 13,
    "fim": 22,
    "valortotal": 453,
    "observacao": "Observação 622",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d94"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 6",
    "funcionario": "Funcionário 23",
    "data": {
      "$date": {
        "$numberLong": "1684611019437"
      }
    },
    "inicio": 15,
    "fim": 22,
    "valortotal": 85,
    "observacao": "Observação 623",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d95"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 39",
    "funcionario": "Funcionário 22",
    "data": {
      "$date": {
        "$numberLong": "1684611019437"
      }
    },
    "inicio": 8,
    "fim": 22,
    "valortotal": 500,
    "observacao": "Observação 624",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d96"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 69",
    "funcionario": "Funcionário 16",
    "data": {
      "$date": {
        "$numberLong": "1684611019437"
      }
    },
    "inicio": 11,
    "fim": 21,
    "valortotal": 309,
    "observacao": "Observação 625",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d97"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 73",
    "funcionario": "Funcionário 23",
    "data": {
      "$date": {
        "$numberLong": "1684611019437"
      }
    },
    "inicio": 9,
    "fim": 19,
    "valortotal": 500,
    "observacao": "Observação 626",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d98"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 38",
    "funcionario": "Funcionário 49",
    "data": {
      "$date": {
        "$numberLong": "1684611019437"
      }
    },
    "inicio": 11,
    "fim": 19,
    "valortotal": 444,
    "observacao": "Observação 627",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d99"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 90",
    "funcionario": "Funcionário 18",
    "data": {
      "$date": {
        "$numberLong": "1684611019437"
      }
    },
    "inicio": 16,
    "fim": 22,
    "valortotal": 182,
    "observacao": "Observação 628",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d9a"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 84",
    "funcionario": "Funcionário 20",
    "data": {
      "$date": {
        "$numberLong": "1684611019437"
      }
    },
    "inicio": 13,
    "fim": 20,
    "valortotal": 408,
    "observacao": "Observação 629",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d9b"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 4",
    "funcionario": "Funcionário 41",
    "data": {
      "$date": {
        "$numberLong": "1684611019437"
      }
    },
    "inicio": 13,
    "fim": 22,
    "valortotal": 71,
    "observacao": "Observação 630",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d9c"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 16",
    "funcionario": "Funcionário 37",
    "data": {
      "$date": {
        "$numberLong": "1684611019437"
      }
    },
    "inicio": 16,
    "fim": 19,
    "valortotal": 229,
    "observacao": "Observação 631",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d9d"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 68",
    "funcionario": "Funcionário 34",
    "data": {
      "$date": {
        "$numberLong": "1684611019437"
      }
    },
    "inicio": 16,
    "fim": 20,
    "valortotal": 157,
    "observacao": "Observação 632",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d9e"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 72",
    "funcionario": "Funcionário 8",
    "data": {
      "$date": {
        "$numberLong": "1684611019437"
      }
    },
    "inicio": 12,
    "fim": 19,
    "valortotal": 154,
    "observacao": "Observação 633",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854d9f"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 91",
    "funcionario": "Funcionário 46",
    "data": {
      "$date": {
        "$numberLong": "1684611019437"
      }
    },
    "inicio": 18,
    "fim": 21,
    "valortotal": 162,
    "observacao": "Observação 634",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854da0"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 84",
    "funcionario": "Funcionário 34",
    "data": {
      "$date": {
        "$numberLong": "1684611019437"
      }
    },
    "inicio": 15,
    "fim": 22,
    "valortotal": 480,
    "observacao": "Observação 635",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854da1"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 55",
    "funcionario": "Funcionário 30",
    "data": {
      "$date": {
        "$numberLong": "1684611019437"
      }
    },
    "inicio": 12,
    "fim": 21,
    "valortotal": 447,
    "observacao": "Observação 636",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854da2"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 51",
    "funcionario": "Funcionário 13",
    "data": {
      "$date": {
        "$numberLong": "1684611019437"
      }
    },
    "inicio": 8,
    "fim": 20,
    "valortotal": 189,
    "observacao": "Observação 637",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854da3"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 21",
    "funcionario": "Funcionário 9",
    "data": {
      "$date": {
        "$numberLong": "1684611019437"
      }
    },
    "inicio": 9,
    "fim": 19,
    "valortotal": 112,
    "observacao": "Observação 638",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854da4"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 82",
    "funcionario": "Funcionário 12",
    "data": {
      "$date": {
        "$numberLong": "1684611019437"
      }
    },
    "inicio": 11,
    "fim": 22,
    "valortotal": 426,
    "observacao": "Observação 639",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854da5"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 7",
    "funcionario": "Funcionário 47",
    "data": {
      "$date": {
        "$numberLong": "1684611019437"
      }
    },
    "inicio": 10,
    "fim": 19,
    "valortotal": 384,
    "observacao": "Observação 640",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854da6"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 70",
    "funcionario": "Funcionário 6",
    "data": {
      "$date": {
        "$numberLong": "1684611019437"
      }
    },
    "inicio": 9,
    "fim": 20,
    "valortotal": 456,
    "observacao": "Observação 641",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854da7"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 18",
    "funcionario": "Funcionário 17",
    "data": {
      "$date": {
        "$numberLong": "1684611019437"
      }
    },
    "inicio": 18,
    "fim": 21,
    "valortotal": 324,
    "observacao": "Observação 642",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854da8"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 85",
    "funcionario": "Funcionário 39",
    "data": {
      "$date": {
        "$numberLong": "1684611019437"
      }
    },
    "inicio": 12,
    "fim": 22,
    "valortotal": 139,
    "observacao": "Observação 643",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854da9"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 24",
    "funcionario": "Funcionário 34",
    "data": {
      "$date": {
        "$numberLong": "1684611019438"
      }
    },
    "inicio": 10,
    "fim": 20,
    "valortotal": 200,
    "observacao": "Observação 644",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854daa"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 60",
    "funcionario": "Funcionário 37",
    "data": {
      "$date": {
        "$numberLong": "1684611019438"
      }
    },
    "inicio": 12,
    "fim": 21,
    "valortotal": 112,
    "observacao": "Observação 645",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854dab"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 89",
    "funcionario": "Funcionário 47",
    "data": {
      "$date": {
        "$numberLong": "1684611019438"
      }
    },
    "inicio": 11,
    "fim": 20,
    "valortotal": 247,
    "observacao": "Observação 646",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854dac"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 5",
    "funcionario": "Funcionário 17",
    "data": {
      "$date": {
        "$numberLong": "1684611019438"
      }
    },
    "inicio": 13,
    "fim": 19,
    "valortotal": 489,
    "observacao": "Observação 647",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854dad"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 59",
    "funcionario": "Funcionário 48",
    "data": {
      "$date": {
        "$numberLong": "1684611019438"
      }
    },
    "inicio": 12,
    "fim": 19,
    "valortotal": 209,
    "observacao": "Observação 648",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854dae"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 75",
    "funcionario": "Funcionário 47",
    "data": {
      "$date": {
        "$numberLong": "1684611019438"
      }
    },
    "inicio": 18,
    "fim": 19,
    "valortotal": 185,
    "observacao": "Observação 649",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854daf"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 53",
    "funcionario": "Funcionário 12",
    "data": {
      "$date": {
        "$numberLong": "1684611019438"
      }
    },
    "inicio": 17,
    "fim": 19,
    "valortotal": 64,
    "observacao": "Observação 650",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854db0"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 82",
    "funcionario": "Funcionário 36",
    "data": {
      "$date": {
        "$numberLong": "1684611019438"
      }
    },
    "inicio": 9,
    "fim": 19,
    "valortotal": 474,
    "observacao": "Observação 651",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854db1"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 76",
    "funcionario": "Funcionário 44",
    "data": {
      "$date": {
        "$numberLong": "1684611019438"
      }
    },
    "inicio": 13,
    "fim": 22,
    "valortotal": 223,
    "observacao": "Observação 652",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854db2"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 87",
    "funcionario": "Funcionário 46",
    "data": {
      "$date": {
        "$numberLong": "1684611019438"
      }
    },
    "inicio": 10,
    "fim": 20,
    "valortotal": 409,
    "observacao": "Observação 653",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854db3"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 99",
    "funcionario": "Funcionário 17",
    "data": {
      "$date": {
        "$numberLong": "1684611019438"
      }
    },
    "inicio": 12,
    "fim": 20,
    "valortotal": 413,
    "observacao": "Observação 654",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854db4"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 44",
    "funcionario": "Funcionário 38",
    "data": {
      "$date": {
        "$numberLong": "1684611019438"
      }
    },
    "inicio": 9,
    "fim": 22,
    "valortotal": 402,
    "observacao": "Observação 655",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854db5"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 59",
    "funcionario": "Funcionário 10",
    "data": {
      "$date": {
        "$numberLong": "1684611019438"
      }
    },
    "inicio": 18,
    "fim": 22,
    "valortotal": 342,
    "observacao": "Observação 656",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854db6"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 76",
    "funcionario": "Funcionário 44",
    "data": {
      "$date": {
        "$numberLong": "1684611019438"
      }
    },
    "inicio": 13,
    "fim": 22,
    "valortotal": 413,
    "observacao": "Observação 657",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854db7"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 60",
    "funcionario": "Funcionário 23",
    "data": {
      "$date": {
        "$numberLong": "1684611019438"
      }
    },
    "inicio": 9,
    "fim": 20,
    "valortotal": 406,
    "observacao": "Observação 658",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854db8"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 12",
    "funcionario": "Funcionário 9",
    "data": {
      "$date": {
        "$numberLong": "1684611019438"
      }
    },
    "inicio": 18,
    "fim": 20,
    "valortotal": 247,
    "observacao": "Observação 659",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854db9"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 91",
    "funcionario": "Funcionário 14",
    "data": {
      "$date": {
        "$numberLong": "1684611019438"
      }
    },
    "inicio": 10,
    "fim": 19,
    "valortotal": 433,
    "observacao": "Observação 660",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854dba"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 3",
    "funcionario": "Funcionário 49",
    "data": {
      "$date": {
        "$numberLong": "1684611019438"
      }
    },
    "inicio": 18,
    "fim": 21,
    "valortotal": 240,
    "observacao": "Observação 661",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854dbb"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 37",
    "funcionario": "Funcionário 48",
    "data": {
      "$date": {
        "$numberLong": "1684611019438"
      }
    },
    "inicio": 17,
    "fim": 21,
    "valortotal": 294,
    "observacao": "Observação 662",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854dbc"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 13",
    "funcionario": "Funcionário 16",
    "data": {
      "$date": {
        "$numberLong": "1684611019438"
      }
    },
    "inicio": 8,
    "fim": 21,
    "valortotal": 199,
    "observacao": "Observação 663",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854dbd"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 1",
    "funcionario": "Funcionário 33",
    "data": {
      "$date": {
        "$numberLong": "1684611019438"
      }
    },
    "inicio": 17,
    "fim": 22,
    "valortotal": 350,
    "observacao": "Observação 664",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854dbe"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 79",
    "funcionario": "Funcionário 16",
    "data": {
      "$date": {
        "$numberLong": "1684611019438"
      }
    },
    "inicio": 11,
    "fim": 21,
    "valortotal": 237,
    "observacao": "Observação 665",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854dbf"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 38",
    "funcionario": "Funcionário 45",
    "data": {
      "$date": {
        "$numberLong": "1684611019438"
      }
    },
    "inicio": 10,
    "fim": 21,
    "valortotal": 184,
    "observacao": "Observação 666",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854dc0"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 99",
    "funcionario": "Funcionário 45",
    "data": {
      "$date": {
        "$numberLong": "1684611019438"
      }
    },
    "inicio": 9,
    "fim": 19,
    "valortotal": 136,
    "observacao": "Observação 667",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854dc1"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 77",
    "funcionario": "Funcionário 33",
    "data": {
      "$date": {
        "$numberLong": "1684611019438"
      }
    },
    "inicio": 18,
    "fim": 22,
    "valortotal": 488,
    "observacao": "Observação 668",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854dc2"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 4",
    "funcionario": "Funcionário 19",
    "data": {
      "$date": {
        "$numberLong": "1684611019438"
      }
    },
    "inicio": 16,
    "fim": 19,
    "valortotal": 254,
    "observacao": "Observação 669",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854dc3"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 57",
    "funcionario": "Funcionário 13",
    "data": {
      "$date": {
        "$numberLong": "1684611019438"
      }
    },
    "inicio": 15,
    "fim": 22,
    "valortotal": 67,
    "observacao": "Observação 670",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854dc4"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 60",
    "funcionario": "Funcionário 10",
    "data": {
      "$date": {
        "$numberLong": "1684611019438"
      }
    },
    "inicio": 12,
    "fim": 21,
    "valortotal": 327,
    "observacao": "Observação 671",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854dc5"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 65",
    "funcionario": "Funcionário 46",
    "data": {
      "$date": {
        "$numberLong": "1684611019438"
      }
    },
    "inicio": 13,
    "fim": 21,
    "valortotal": 87,
    "observacao": "Observação 672",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854dc6"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 16",
    "funcionario": "Funcionário 11",
    "data": {
      "$date": {
        "$numberLong": "1684611019438"
      }
    },
    "inicio": 10,
    "fim": 21,
    "valortotal": 480,
    "observacao": "Observação 673",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854dc7"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 47",
    "funcionario": "Funcionário 17",
    "data": {
      "$date": {
        "$numberLong": "1684611019438"
      }
    },
    "inicio": 17,
    "fim": 19,
    "valortotal": 167,
    "observacao": "Observação 674",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854dc8"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 2",
    "funcionario": "Funcionário 8",
    "data": {
      "$date": {
        "$numberLong": "1684611019438"
      }
    },
    "inicio": 14,
    "fim": 20,
    "valortotal": 218,
    "observacao": "Observação 675",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854dc9"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 64",
    "funcionario": "Funcionário 46",
    "data": {
      "$date": {
        "$numberLong": "1684611019438"
      }
    },
    "inicio": 10,
    "fim": 22,
    "valortotal": 217,
    "observacao": "Observação 676",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854dca"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 93",
    "funcionario": "Funcionário 32",
    "data": {
      "$date": {
        "$numberLong": "1684611019438"
      }
    },
    "inicio": 13,
    "fim": 21,
    "valortotal": 53,
    "observacao": "Observação 677",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854dcb"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 94",
    "funcionario": "Funcionário 50",
    "data": {
      "$date": {
        "$numberLong": "1684611019438"
      }
    },
    "inicio": 9,
    "fim": 19,
    "valortotal": 226,
    "observacao": "Observação 678",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854dcc"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 67",
    "funcionario": "Funcionário 44",
    "data": {
      "$date": {
        "$numberLong": "1684611019439"
      }
    },
    "inicio": 13,
    "fim": 19,
    "valortotal": 236,
    "observacao": "Observação 679",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854dcd"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 82",
    "funcionario": "Funcionário 13",
    "data": {
      "$date": {
        "$numberLong": "1684611019439"
      }
    },
    "inicio": 14,
    "fim": 21,
    "valortotal": 182,
    "observacao": "Observação 680",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854dce"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 39",
    "funcionario": "Funcionário 46",
    "data": {
      "$date": {
        "$numberLong": "1684611019439"
      }
    },
    "inicio": 15,
    "fim": 22,
    "valortotal": 378,
    "observacao": "Observação 681",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854dcf"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 16",
    "funcionario": "Funcionário 24",
    "data": {
      "$date": {
        "$numberLong": "1684611019439"
      }
    },
    "inicio": 10,
    "fim": 20,
    "valortotal": 390,
    "observacao": "Observação 682",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854dd0"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 84",
    "funcionario": "Funcionário 21",
    "data": {
      "$date": {
        "$numberLong": "1684611019439"
      }
    },
    "inicio": 13,
    "fim": 21,
    "valortotal": 283,
    "observacao": "Observação 683",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854dd1"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 2",
    "funcionario": "Funcionário 2",
    "data": {
      "$date": {
        "$numberLong": "1684611019439"
      }
    },
    "inicio": 13,
    "fim": 20,
    "valortotal": 250,
    "observacao": "Observação 684",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854dd2"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 13",
    "funcionario": "Funcionário 46",
    "data": {
      "$date": {
        "$numberLong": "1684611019439"
      }
    },
    "inicio": 17,
    "fim": 20,
    "valortotal": 374,
    "observacao": "Observação 685",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854dd3"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 33",
    "funcionario": "Funcionário 2",
    "data": {
      "$date": {
        "$numberLong": "1684611019439"
      }
    },
    "inicio": 15,
    "fim": 21,
    "valortotal": 368,
    "observacao": "Observação 686",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854dd4"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 35",
    "funcionario": "Funcionário 33",
    "data": {
      "$date": {
        "$numberLong": "1684611019439"
      }
    },
    "inicio": 17,
    "fim": 22,
    "valortotal": 324,
    "observacao": "Observação 687",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854dd5"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 76",
    "funcionario": "Funcionário 48",
    "data": {
      "$date": {
        "$numberLong": "1684611019439"
      }
    },
    "inicio": 16,
    "fim": 20,
    "valortotal": 224,
    "observacao": "Observação 688",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854dd6"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 32",
    "funcionario": "Funcionário 8",
    "data": {
      "$date": {
        "$numberLong": "1684611019439"
      }
    },
    "inicio": 14,
    "fim": 20,
    "valortotal": 234,
    "observacao": "Observação 689",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854dd7"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 84",
    "funcionario": "Funcionário 47",
    "data": {
      "$date": {
        "$numberLong": "1684611019439"
      }
    },
    "inicio": 10,
    "fim": 22,
    "valortotal": 268,
    "observacao": "Observação 690",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854dd8"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 56",
    "funcionario": "Funcionário 11",
    "data": {
      "$date": {
        "$numberLong": "1684611019439"
      }
    },
    "inicio": 14,
    "fim": 22,
    "valortotal": 497,
    "observacao": "Observação 691",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854dd9"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 51",
    "funcionario": "Funcionário 28",
    "data": {
      "$date": {
        "$numberLong": "1684611019439"
      }
    },
    "inicio": 13,
    "fim": 20,
    "valortotal": 464,
    "observacao": "Observação 692",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854dda"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 82",
    "funcionario": "Funcionário 20",
    "data": {
      "$date": {
        "$numberLong": "1684611019439"
      }
    },
    "inicio": 17,
    "fim": 21,
    "valortotal": 323,
    "observacao": "Observação 693",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ddb"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 95",
    "funcionario": "Funcionário 5",
    "data": {
      "$date": {
        "$numberLong": "1684611019439"
      }
    },
    "inicio": 8,
    "fim": 19,
    "valortotal": 441,
    "observacao": "Observação 694",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ddc"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 56",
    "funcionario": "Funcionário 3",
    "data": {
      "$date": {
        "$numberLong": "1684611019439"
      }
    },
    "inicio": 18,
    "fim": 21,
    "valortotal": 155,
    "observacao": "Observação 695",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ddd"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 24",
    "funcionario": "Funcionário 5",
    "data": {
      "$date": {
        "$numberLong": "1684611019439"
      }
    },
    "inicio": 9,
    "fim": 20,
    "valortotal": 352,
    "observacao": "Observação 696",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854dde"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 50",
    "funcionario": "Funcionário 25",
    "data": {
      "$date": {
        "$numberLong": "1684611019439"
      }
    },
    "inicio": 15,
    "fim": 21,
    "valortotal": 117,
    "observacao": "Observação 697",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ddf"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 1",
    "funcionario": "Funcionário 6",
    "data": {
      "$date": {
        "$numberLong": "1684611019439"
      }
    },
    "inicio": 16,
    "fim": 19,
    "valortotal": 340,
    "observacao": "Observação 698",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854de0"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 87",
    "funcionario": "Funcionário 44",
    "data": {
      "$date": {
        "$numberLong": "1684611019439"
      }
    },
    "inicio": 8,
    "fim": 21,
    "valortotal": 305,
    "observacao": "Observação 699",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854de1"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 85",
    "funcionario": "Funcionário 15",
    "data": {
      "$date": {
        "$numberLong": "1684611019439"
      }
    },
    "inicio": 18,
    "fim": 22,
    "valortotal": 335,
    "observacao": "Observação 700",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854de2"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 20",
    "funcionario": "Funcionário 29",
    "data": {
      "$date": {
        "$numberLong": "1684611019439"
      }
    },
    "inicio": 18,
    "fim": 21,
    "valortotal": 229,
    "observacao": "Observação 701",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854de3"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 35",
    "funcionario": "Funcionário 20",
    "data": {
      "$date": {
        "$numberLong": "1684611019439"
      }
    },
    "inicio": 15,
    "fim": 19,
    "valortotal": 279,
    "observacao": "Observação 702",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854de4"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 76",
    "funcionario": "Funcionário 10",
    "data": {
      "$date": {
        "$numberLong": "1684611019439"
      }
    },
    "inicio": 17,
    "fim": 20,
    "valortotal": 91,
    "observacao": "Observação 703",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854de5"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 82",
    "funcionario": "Funcionário 38",
    "data": {
      "$date": {
        "$numberLong": "1684611019439"
      }
    },
    "inicio": 16,
    "fim": 21,
    "valortotal": 156,
    "observacao": "Observação 704",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854de6"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 42",
    "funcionario": "Funcionário 22",
    "data": {
      "$date": {
        "$numberLong": "1684611019439"
      }
    },
    "inicio": 16,
    "fim": 22,
    "valortotal": 342,
    "observacao": "Observação 705",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854de7"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 100",
    "funcionario": "Funcionário 43",
    "data": {
      "$date": {
        "$numberLong": "1684611019439"
      }
    },
    "inicio": 18,
    "fim": 22,
    "valortotal": 279,
    "observacao": "Observação 706",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854de8"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 25",
    "funcionario": "Funcionário 47",
    "data": {
      "$date": {
        "$numberLong": "1684611019439"
      }
    },
    "inicio": 16,
    "fim": 20,
    "valortotal": 308,
    "observacao": "Observação 707",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854de9"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 84",
    "funcionario": "Funcionário 19",
    "data": {
      "$date": {
        "$numberLong": "1684611019439"
      }
    },
    "inicio": 11,
    "fim": 22,
    "valortotal": 114,
    "observacao": "Observação 708",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854dea"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 97",
    "funcionario": "Funcionário 17",
    "data": {
      "$date": {
        "$numberLong": "1684611019439"
      }
    },
    "inicio": 9,
    "fim": 20,
    "valortotal": 387,
    "observacao": "Observação 709",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854deb"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 39",
    "funcionario": "Funcionário 21",
    "data": {
      "$date": {
        "$numberLong": "1684611019440"
      }
    },
    "inicio": 11,
    "fim": 19,
    "valortotal": 188,
    "observacao": "Observação 710",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854dec"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 33",
    "funcionario": "Funcionário 48",
    "data": {
      "$date": {
        "$numberLong": "1684611019440"
      }
    },
    "inicio": 14,
    "fim": 19,
    "valortotal": 111,
    "observacao": "Observação 711",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ded"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 90",
    "funcionario": "Funcionário 49",
    "data": {
      "$date": {
        "$numberLong": "1684611019440"
      }
    },
    "inicio": 16,
    "fim": 21,
    "valortotal": 415,
    "observacao": "Observação 712",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854dee"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 95",
    "funcionario": "Funcionário 21",
    "data": {
      "$date": {
        "$numberLong": "1684611019440"
      }
    },
    "inicio": 10,
    "fim": 19,
    "valortotal": 87,
    "observacao": "Observação 713",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854def"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 90",
    "funcionario": "Funcionário 33",
    "data": {
      "$date": {
        "$numberLong": "1684611019440"
      }
    },
    "inicio": 18,
    "fim": 19,
    "valortotal": 228,
    "observacao": "Observação 714",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854df0"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 99",
    "funcionario": "Funcionário 14",
    "data": {
      "$date": {
        "$numberLong": "1684611019440"
      }
    },
    "inicio": 8,
    "fim": 21,
    "valortotal": 59,
    "observacao": "Observação 715",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854df1"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 59",
    "funcionario": "Funcionário 49",
    "data": {
      "$date": {
        "$numberLong": "1684611019440"
      }
    },
    "inicio": 17,
    "fim": 22,
    "valortotal": 492,
    "observacao": "Observação 716",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854df2"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 26",
    "funcionario": "Funcionário 7",
    "data": {
      "$date": {
        "$numberLong": "1684611019440"
      }
    },
    "inicio": 16,
    "fim": 20,
    "valortotal": 135,
    "observacao": "Observação 717",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854df3"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 46",
    "funcionario": "Funcionário 44",
    "data": {
      "$date": {
        "$numberLong": "1684611019440"
      }
    },
    "inicio": 8,
    "fim": 19,
    "valortotal": 343,
    "observacao": "Observação 718",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854df4"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 89",
    "funcionario": "Funcionário 25",
    "data": {
      "$date": {
        "$numberLong": "1684611019440"
      }
    },
    "inicio": 17,
    "fim": 21,
    "valortotal": 241,
    "observacao": "Observação 719",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854df5"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 93",
    "funcionario": "Funcionário 50",
    "data": {
      "$date": {
        "$numberLong": "1684611019440"
      }
    },
    "inicio": 12,
    "fim": 19,
    "valortotal": 452,
    "observacao": "Observação 720",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854df6"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 88",
    "funcionario": "Funcionário 25",
    "data": {
      "$date": {
        "$numberLong": "1684611019440"
      }
    },
    "inicio": 13,
    "fim": 19,
    "valortotal": 301,
    "observacao": "Observação 721",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854df7"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 85",
    "funcionario": "Funcionário 17",
    "data": {
      "$date": {
        "$numberLong": "1684611019440"
      }
    },
    "inicio": 8,
    "fim": 21,
    "valortotal": 197,
    "observacao": "Observação 722",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854df8"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 22",
    "funcionario": "Funcionário 20",
    "data": {
      "$date": {
        "$numberLong": "1684611019440"
      }
    },
    "inicio": 8,
    "fim": 20,
    "valortotal": 96,
    "observacao": "Observação 723",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854df9"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 24",
    "funcionario": "Funcionário 4",
    "data": {
      "$date": {
        "$numberLong": "1684611019440"
      }
    },
    "inicio": 8,
    "fim": 19,
    "valortotal": 133,
    "observacao": "Observação 724",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854dfa"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 97",
    "funcionario": "Funcionário 40",
    "data": {
      "$date": {
        "$numberLong": "1684611019440"
      }
    },
    "inicio": 13,
    "fim": 20,
    "valortotal": 340,
    "observacao": "Observação 725",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854dfb"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 73",
    "funcionario": "Funcionário 50",
    "data": {
      "$date": {
        "$numberLong": "1684611019440"
      }
    },
    "inicio": 9,
    "fim": 19,
    "valortotal": 158,
    "observacao": "Observação 726",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854dfc"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 74",
    "funcionario": "Funcionário 29",
    "data": {
      "$date": {
        "$numberLong": "1684611019440"
      }
    },
    "inicio": 15,
    "fim": 22,
    "valortotal": 238,
    "observacao": "Observação 727",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854dfd"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 34",
    "funcionario": "Funcionário 41",
    "data": {
      "$date": {
        "$numberLong": "1684611019440"
      }
    },
    "inicio": 10,
    "fim": 20,
    "valortotal": 252,
    "observacao": "Observação 728",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854dfe"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 72",
    "funcionario": "Funcionário 42",
    "data": {
      "$date": {
        "$numberLong": "1684611019440"
      }
    },
    "inicio": 9,
    "fim": 22,
    "valortotal": 456,
    "observacao": "Observação 729",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854dff"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 86",
    "funcionario": "Funcionário 37",
    "data": {
      "$date": {
        "$numberLong": "1684611019440"
      }
    },
    "inicio": 15,
    "fim": 21,
    "valortotal": 235,
    "observacao": "Observação 730",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e00"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 89",
    "funcionario": "Funcionário 30",
    "data": {
      "$date": {
        "$numberLong": "1684611019440"
      }
    },
    "inicio": 8,
    "fim": 19,
    "valortotal": 50,
    "observacao": "Observação 731",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e01"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 98",
    "funcionario": "Funcionário 1",
    "data": {
      "$date": {
        "$numberLong": "1684611019440"
      }
    },
    "inicio": 18,
    "fim": 19,
    "valortotal": 472,
    "observacao": "Observação 732",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e02"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 91",
    "funcionario": "Funcionário 48",
    "data": {
      "$date": {
        "$numberLong": "1684611019440"
      }
    },
    "inicio": 18,
    "fim": 19,
    "valortotal": 444,
    "observacao": "Observação 733",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e03"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 92",
    "funcionario": "Funcionário 31",
    "data": {
      "$date": {
        "$numberLong": "1684611019440"
      }
    },
    "inicio": 8,
    "fim": 19,
    "valortotal": 493,
    "observacao": "Observação 734",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e04"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 73",
    "funcionario": "Funcionário 27",
    "data": {
      "$date": {
        "$numberLong": "1684611019440"
      }
    },
    "inicio": 12,
    "fim": 20,
    "valortotal": 154,
    "observacao": "Observação 735",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e05"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 39",
    "funcionario": "Funcionário 27",
    "data": {
      "$date": {
        "$numberLong": "1684611019440"
      }
    },
    "inicio": 10,
    "fim": 20,
    "valortotal": 273,
    "observacao": "Observação 736",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e06"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 31",
    "funcionario": "Funcionário 23",
    "data": {
      "$date": {
        "$numberLong": "1684611019440"
      }
    },
    "inicio": 15,
    "fim": 20,
    "valortotal": 147,
    "observacao": "Observação 737",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e07"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 46",
    "funcionario": "Funcionário 39",
    "data": {
      "$date": {
        "$numberLong": "1684611019440"
      }
    },
    "inicio": 10,
    "fim": 19,
    "valortotal": 309,
    "observacao": "Observação 738",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e08"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 79",
    "funcionario": "Funcionário 50",
    "data": {
      "$date": {
        "$numberLong": "1684611019440"
      }
    },
    "inicio": 17,
    "fim": 21,
    "valortotal": 199,
    "observacao": "Observação 739",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e09"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 48",
    "funcionario": "Funcionário 9",
    "data": {
      "$date": {
        "$numberLong": "1684611019440"
      }
    },
    "inicio": 14,
    "fim": 20,
    "valortotal": 52,
    "observacao": "Observação 740",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e0a"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 70",
    "funcionario": "Funcionário 17",
    "data": {
      "$date": {
        "$numberLong": "1684611019440"
      }
    },
    "inicio": 13,
    "fim": 22,
    "valortotal": 149,
    "observacao": "Observação 741",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e0b"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 41",
    "funcionario": "Funcionário 26",
    "data": {
      "$date": {
        "$numberLong": "1684611019440"
      }
    },
    "inicio": 15,
    "fim": 21,
    "valortotal": 376,
    "observacao": "Observação 742",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e0c"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 89",
    "funcionario": "Funcionário 40",
    "data": {
      "$date": {
        "$numberLong": "1684611019440"
      }
    },
    "inicio": 18,
    "fim": 22,
    "valortotal": 450,
    "observacao": "Observação 743",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e0d"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 69",
    "funcionario": "Funcionário 9",
    "data": {
      "$date": {
        "$numberLong": "1684611019441"
      }
    },
    "inicio": 13,
    "fim": 20,
    "valortotal": 490,
    "observacao": "Observação 744",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e0e"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 24",
    "funcionario": "Funcionário 41",
    "data": {
      "$date": {
        "$numberLong": "1684611019441"
      }
    },
    "inicio": 14,
    "fim": 19,
    "valortotal": 200,
    "observacao": "Observação 745",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e0f"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 92",
    "funcionario": "Funcionário 22",
    "data": {
      "$date": {
        "$numberLong": "1684611019441"
      }
    },
    "inicio": 10,
    "fim": 19,
    "valortotal": 224,
    "observacao": "Observação 746",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e10"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 74",
    "funcionario": "Funcionário 32",
    "data": {
      "$date": {
        "$numberLong": "1684611019441"
      }
    },
    "inicio": 9,
    "fim": 21,
    "valortotal": 249,
    "observacao": "Observação 747",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e11"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 47",
    "funcionario": "Funcionário 4",
    "data": {
      "$date": {
        "$numberLong": "1684611019441"
      }
    },
    "inicio": 15,
    "fim": 19,
    "valortotal": 367,
    "observacao": "Observação 748",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e12"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 21",
    "funcionario": "Funcionário 32",
    "data": {
      "$date": {
        "$numberLong": "1684611019441"
      }
    },
    "inicio": 12,
    "fim": 20,
    "valortotal": 115,
    "observacao": "Observação 749",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e13"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 85",
    "funcionario": "Funcionário 39",
    "data": {
      "$date": {
        "$numberLong": "1684611019441"
      }
    },
    "inicio": 16,
    "fim": 22,
    "valortotal": 370,
    "observacao": "Observação 750",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e14"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 23",
    "funcionario": "Funcionário 16",
    "data": {
      "$date": {
        "$numberLong": "1684611019441"
      }
    },
    "inicio": 13,
    "fim": 21,
    "valortotal": 432,
    "observacao": "Observação 751",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e15"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 19",
    "funcionario": "Funcionário 25",
    "data": {
      "$date": {
        "$numberLong": "1684611019441"
      }
    },
    "inicio": 12,
    "fim": 20,
    "valortotal": 488,
    "observacao": "Observação 752",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e16"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 4",
    "funcionario": "Funcionário 17",
    "data": {
      "$date": {
        "$numberLong": "1684611019442"
      }
    },
    "inicio": 13,
    "fim": 19,
    "valortotal": 454,
    "observacao": "Observação 753",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e17"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 97",
    "funcionario": "Funcionário 42",
    "data": {
      "$date": {
        "$numberLong": "1684611019442"
      }
    },
    "inicio": 13,
    "fim": 21,
    "valortotal": 224,
    "observacao": "Observação 754",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e18"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 51",
    "funcionario": "Funcionário 32",
    "data": {
      "$date": {
        "$numberLong": "1684611019442"
      }
    },
    "inicio": 12,
    "fim": 21,
    "valortotal": 57,
    "observacao": "Observação 755",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e19"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 18",
    "funcionario": "Funcionário 34",
    "data": {
      "$date": {
        "$numberLong": "1684611019442"
      }
    },
    "inicio": 10,
    "fim": 20,
    "valortotal": 233,
    "observacao": "Observação 756",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e1a"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 86",
    "funcionario": "Funcionário 14",
    "data": {
      "$date": {
        "$numberLong": "1684611019443"
      }
    },
    "inicio": 10,
    "fim": 20,
    "valortotal": 357,
    "observacao": "Observação 757",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e1b"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 84",
    "funcionario": "Funcionário 1",
    "data": {
      "$date": {
        "$numberLong": "1684611019443"
      }
    },
    "inicio": 9,
    "fim": 20,
    "valortotal": 313,
    "observacao": "Observação 758",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e1c"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 100",
    "funcionario": "Funcionário 19",
    "data": {
      "$date": {
        "$numberLong": "1684611019443"
      }
    },
    "inicio": 18,
    "fim": 20,
    "valortotal": 198,
    "observacao": "Observação 759",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e1d"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 8",
    "funcionario": "Funcionário 3",
    "data": {
      "$date": {
        "$numberLong": "1684611019443"
      }
    },
    "inicio": 10,
    "fim": 21,
    "valortotal": 421,
    "observacao": "Observação 760",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e1e"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 27",
    "funcionario": "Funcionário 36",
    "data": {
      "$date": {
        "$numberLong": "1684611019443"
      }
    },
    "inicio": 16,
    "fim": 19,
    "valortotal": 299,
    "observacao": "Observação 761",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e1f"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 77",
    "funcionario": "Funcionário 42",
    "data": {
      "$date": {
        "$numberLong": "1684611019443"
      }
    },
    "inicio": 14,
    "fim": 20,
    "valortotal": 240,
    "observacao": "Observação 762",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e20"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 7",
    "funcionario": "Funcionário 47",
    "data": {
      "$date": {
        "$numberLong": "1684611019443"
      }
    },
    "inicio": 8,
    "fim": 19,
    "valortotal": 305,
    "observacao": "Observação 763",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e21"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 56",
    "funcionario": "Funcionário 33",
    "data": {
      "$date": {
        "$numberLong": "1684611019443"
      }
    },
    "inicio": 10,
    "fim": 19,
    "valortotal": 460,
    "observacao": "Observação 764",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e22"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 44",
    "funcionario": "Funcionário 18",
    "data": {
      "$date": {
        "$numberLong": "1684611019443"
      }
    },
    "inicio": 18,
    "fim": 22,
    "valortotal": 347,
    "observacao": "Observação 765",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e23"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 95",
    "funcionario": "Funcionário 36",
    "data": {
      "$date": {
        "$numberLong": "1684611019443"
      }
    },
    "inicio": 8,
    "fim": 19,
    "valortotal": 110,
    "observacao": "Observação 766",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e24"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 41",
    "funcionario": "Funcionário 45",
    "data": {
      "$date": {
        "$numberLong": "1684611019443"
      }
    },
    "inicio": 16,
    "fim": 20,
    "valortotal": 151,
    "observacao": "Observação 767",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e25"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 66",
    "funcionario": "Funcionário 29",
    "data": {
      "$date": {
        "$numberLong": "1684611019443"
      }
    },
    "inicio": 12,
    "fim": 19,
    "valortotal": 316,
    "observacao": "Observação 768",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e26"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 69",
    "funcionario": "Funcionário 2",
    "data": {
      "$date": {
        "$numberLong": "1684611019443"
      }
    },
    "inicio": 9,
    "fim": 20,
    "valortotal": 177,
    "observacao": "Observação 769",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e27"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 71",
    "funcionario": "Funcionário 40",
    "data": {
      "$date": {
        "$numberLong": "1684611019443"
      }
    },
    "inicio": 17,
    "fim": 22,
    "valortotal": 117,
    "observacao": "Observação 770",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e28"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 30",
    "funcionario": "Funcionário 23",
    "data": {
      "$date": {
        "$numberLong": "1684611019443"
      }
    },
    "inicio": 12,
    "fim": 21,
    "valortotal": 257,
    "observacao": "Observação 771",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e29"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 3",
    "funcionario": "Funcionário 8",
    "data": {
      "$date": {
        "$numberLong": "1684611019443"
      }
    },
    "inicio": 14,
    "fim": 20,
    "valortotal": 190,
    "observacao": "Observação 772",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e2a"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 68",
    "funcionario": "Funcionário 17",
    "data": {
      "$date": {
        "$numberLong": "1684611019443"
      }
    },
    "inicio": 16,
    "fim": 19,
    "valortotal": 136,
    "observacao": "Observação 773",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e2b"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 73",
    "funcionario": "Funcionário 3",
    "data": {
      "$date": {
        "$numberLong": "1684611019443"
      }
    },
    "inicio": 16,
    "fim": 22,
    "valortotal": 262,
    "observacao": "Observação 774",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e2c"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 81",
    "funcionario": "Funcionário 43",
    "data": {
      "$date": {
        "$numberLong": "1684611019443"
      }
    },
    "inicio": 11,
    "fim": 22,
    "valortotal": 124,
    "observacao": "Observação 775",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e2d"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 28",
    "funcionario": "Funcionário 30",
    "data": {
      "$date": {
        "$numberLong": "1684611019443"
      }
    },
    "inicio": 15,
    "fim": 21,
    "valortotal": 183,
    "observacao": "Observação 776",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e2e"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 21",
    "funcionario": "Funcionário 33",
    "data": {
      "$date": {
        "$numberLong": "1684611019444"
      }
    },
    "inicio": 10,
    "fim": 19,
    "valortotal": 472,
    "observacao": "Observação 777",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e2f"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 87",
    "funcionario": "Funcionário 47",
    "data": {
      "$date": {
        "$numberLong": "1684611019444"
      }
    },
    "inicio": 10,
    "fim": 20,
    "valortotal": 58,
    "observacao": "Observação 778",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e30"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 48",
    "funcionario": "Funcionário 41",
    "data": {
      "$date": {
        "$numberLong": "1684611019444"
      }
    },
    "inicio": 17,
    "fim": 19,
    "valortotal": 356,
    "observacao": "Observação 779",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e31"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 61",
    "funcionario": "Funcionário 20",
    "data": {
      "$date": {
        "$numberLong": "1684611019444"
      }
    },
    "inicio": 11,
    "fim": 20,
    "valortotal": 450,
    "observacao": "Observação 780",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e32"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 16",
    "funcionario": "Funcionário 30",
    "data": {
      "$date": {
        "$numberLong": "1684611019444"
      }
    },
    "inicio": 10,
    "fim": 21,
    "valortotal": 256,
    "observacao": "Observação 781",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e33"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 69",
    "funcionario": "Funcionário 11",
    "data": {
      "$date": {
        "$numberLong": "1684611019444"
      }
    },
    "inicio": 11,
    "fim": 19,
    "valortotal": 393,
    "observacao": "Observação 782",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e34"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 8",
    "funcionario": "Funcionário 37",
    "data": {
      "$date": {
        "$numberLong": "1684611019444"
      }
    },
    "inicio": 14,
    "fim": 19,
    "valortotal": 94,
    "observacao": "Observação 783",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e35"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 84",
    "funcionario": "Funcionário 25",
    "data": {
      "$date": {
        "$numberLong": "1684611019444"
      }
    },
    "inicio": 10,
    "fim": 19,
    "valortotal": 371,
    "observacao": "Observação 784",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e36"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 55",
    "funcionario": "Funcionário 46",
    "data": {
      "$date": {
        "$numberLong": "1684611019444"
      }
    },
    "inicio": 9,
    "fim": 20,
    "valortotal": 322,
    "observacao": "Observação 785",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e37"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 14",
    "funcionario": "Funcionário 38",
    "data": {
      "$date": {
        "$numberLong": "1684611019444"
      }
    },
    "inicio": 16,
    "fim": 19,
    "valortotal": 146,
    "observacao": "Observação 786",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e38"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 87",
    "funcionario": "Funcionário 23",
    "data": {
      "$date": {
        "$numberLong": "1684611019444"
      }
    },
    "inicio": 10,
    "fim": 19,
    "valortotal": 326,
    "observacao": "Observação 787",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e39"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 70",
    "funcionario": "Funcionário 39",
    "data": {
      "$date": {
        "$numberLong": "1684611019444"
      }
    },
    "inicio": 9,
    "fim": 21,
    "valortotal": 250,
    "observacao": "Observação 788",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e3a"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 68",
    "funcionario": "Funcionário 27",
    "data": {
      "$date": {
        "$numberLong": "1684611019444"
      }
    },
    "inicio": 10,
    "fim": 19,
    "valortotal": 484,
    "observacao": "Observação 789",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e3b"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 59",
    "funcionario": "Funcionário 35",
    "data": {
      "$date": {
        "$numberLong": "1684611019444"
      }
    },
    "inicio": 9,
    "fim": 19,
    "valortotal": 261,
    "observacao": "Observação 790",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e3c"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 26",
    "funcionario": "Funcionário 41",
    "data": {
      "$date": {
        "$numberLong": "1684611019444"
      }
    },
    "inicio": 15,
    "fim": 20,
    "valortotal": 253,
    "observacao": "Observação 791",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e3d"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 5",
    "funcionario": "Funcionário 5",
    "data": {
      "$date": {
        "$numberLong": "1684611019444"
      }
    },
    "inicio": 17,
    "fim": 19,
    "valortotal": 248,
    "observacao": "Observação 792",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e3e"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 48",
    "funcionario": "Funcionário 11",
    "data": {
      "$date": {
        "$numberLong": "1684611019444"
      }
    },
    "inicio": 14,
    "fim": 20,
    "valortotal": 321,
    "observacao": "Observação 793",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e3f"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 3",
    "funcionario": "Funcionário 3",
    "data": {
      "$date": {
        "$numberLong": "1684611019444"
      }
    },
    "inicio": 11,
    "fim": 22,
    "valortotal": 206,
    "observacao": "Observação 794",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e40"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 98",
    "funcionario": "Funcionário 43",
    "data": {
      "$date": {
        "$numberLong": "1684611019444"
      }
    },
    "inicio": 10,
    "fim": 19,
    "valortotal": 94,
    "observacao": "Observação 795",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e41"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 96",
    "funcionario": "Funcionário 15",
    "data": {
      "$date": {
        "$numberLong": "1684611019444"
      }
    },
    "inicio": 13,
    "fim": 19,
    "valortotal": 277,
    "observacao": "Observação 796",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e42"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 29",
    "funcionario": "Funcionário 5",
    "data": {
      "$date": {
        "$numberLong": "1684611019444"
      }
    },
    "inicio": 17,
    "fim": 20,
    "valortotal": 324,
    "observacao": "Observação 797",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e43"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 60",
    "funcionario": "Funcionário 39",
    "data": {
      "$date": {
        "$numberLong": "1684611019444"
      }
    },
    "inicio": 12,
    "fim": 19,
    "valortotal": 499,
    "observacao": "Observação 798",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e44"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 79",
    "funcionario": "Funcionário 3",
    "data": {
      "$date": {
        "$numberLong": "1684611019444"
      }
    },
    "inicio": 8,
    "fim": 19,
    "valortotal": 217,
    "observacao": "Observação 799",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e45"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 69",
    "funcionario": "Funcionário 44",
    "data": {
      "$date": {
        "$numberLong": "1684611019444"
      }
    },
    "inicio": 14,
    "fim": 19,
    "valortotal": 135,
    "observacao": "Observação 800",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e46"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 77",
    "funcionario": "Funcionário 24",
    "data": {
      "$date": {
        "$numberLong": "1684611019444"
      }
    },
    "inicio": 14,
    "fim": 20,
    "valortotal": 135,
    "observacao": "Observação 801",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e47"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 96",
    "funcionario": "Funcionário 9",
    "data": {
      "$date": {
        "$numberLong": "1684611019444"
      }
    },
    "inicio": 16,
    "fim": 20,
    "valortotal": 319,
    "observacao": "Observação 802",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e48"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 63",
    "funcionario": "Funcionário 20",
    "data": {
      "$date": {
        "$numberLong": "1684611019444"
      }
    },
    "inicio": 9,
    "fim": 22,
    "valortotal": 352,
    "observacao": "Observação 803",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e49"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 33",
    "funcionario": "Funcionário 11",
    "data": {
      "$date": {
        "$numberLong": "1684611019444"
      }
    },
    "inicio": 9,
    "fim": 20,
    "valortotal": 351,
    "observacao": "Observação 804",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e4a"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 87",
    "funcionario": "Funcionário 35",
    "data": {
      "$date": {
        "$numberLong": "1684611019444"
      }
    },
    "inicio": 10,
    "fim": 20,
    "valortotal": 446,
    "observacao": "Observação 805",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e4b"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 98",
    "funcionario": "Funcionário 19",
    "data": {
      "$date": {
        "$numberLong": "1684611019444"
      }
    },
    "inicio": 12,
    "fim": 20,
    "valortotal": 212,
    "observacao": "Observação 806",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e4c"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 97",
    "funcionario": "Funcionário 11",
    "data": {
      "$date": {
        "$numberLong": "1684611019444"
      }
    },
    "inicio": 9,
    "fim": 19,
    "valortotal": 83,
    "observacao": "Observação 807",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e4d"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 50",
    "funcionario": "Funcionário 26",
    "data": {
      "$date": {
        "$numberLong": "1684611019444"
      }
    },
    "inicio": 18,
    "fim": 21,
    "valortotal": 104,
    "observacao": "Observação 808",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e4e"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 96",
    "funcionario": "Funcionário 9",
    "data": {
      "$date": {
        "$numberLong": "1684611019444"
      }
    },
    "inicio": 11,
    "fim": 21,
    "valortotal": 68,
    "observacao": "Observação 809",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e4f"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 73",
    "funcionario": "Funcionário 28",
    "data": {
      "$date": {
        "$numberLong": "1684611019444"
      }
    },
    "inicio": 15,
    "fim": 21,
    "valortotal": 93,
    "observacao": "Observação 810",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e50"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 59",
    "funcionario": "Funcionário 29",
    "data": {
      "$date": {
        "$numberLong": "1684611019444"
      }
    },
    "inicio": 16,
    "fim": 22,
    "valortotal": 175,
    "observacao": "Observação 811",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e51"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 79",
    "funcionario": "Funcionário 26",
    "data": {
      "$date": {
        "$numberLong": "1684611019445"
      }
    },
    "inicio": 11,
    "fim": 20,
    "valortotal": 214,
    "observacao": "Observação 812",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e52"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 74",
    "funcionario": "Funcionário 30",
    "data": {
      "$date": {
        "$numberLong": "1684611019445"
      }
    },
    "inicio": 8,
    "fim": 22,
    "valortotal": 167,
    "observacao": "Observação 813",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e53"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 35",
    "funcionario": "Funcionário 28",
    "data": {
      "$date": {
        "$numberLong": "1684611019445"
      }
    },
    "inicio": 16,
    "fim": 21,
    "valortotal": 399,
    "observacao": "Observação 814",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e54"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 98",
    "funcionario": "Funcionário 26",
    "data": {
      "$date": {
        "$numberLong": "1684611019445"
      }
    },
    "inicio": 8,
    "fim": 20,
    "valortotal": 397,
    "observacao": "Observação 815",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e55"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 45",
    "funcionario": "Funcionário 17",
    "data": {
      "$date": {
        "$numberLong": "1684611019445"
      }
    },
    "inicio": 15,
    "fim": 19,
    "valortotal": 293,
    "observacao": "Observação 816",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e56"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 36",
    "funcionario": "Funcionário 5",
    "data": {
      "$date": {
        "$numberLong": "1684611019445"
      }
    },
    "inicio": 12,
    "fim": 21,
    "valortotal": 451,
    "observacao": "Observação 817",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e57"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 31",
    "funcionario": "Funcionário 32",
    "data": {
      "$date": {
        "$numberLong": "1684611019445"
      }
    },
    "inicio": 18,
    "fim": 20,
    "valortotal": 171,
    "observacao": "Observação 818",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e58"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 74",
    "funcionario": "Funcionário 2",
    "data": {
      "$date": {
        "$numberLong": "1684611019445"
      }
    },
    "inicio": 10,
    "fim": 20,
    "valortotal": 189,
    "observacao": "Observação 819",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e59"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 21",
    "funcionario": "Funcionário 1",
    "data": {
      "$date": {
        "$numberLong": "1684611019445"
      }
    },
    "inicio": 11,
    "fim": 21,
    "valortotal": 115,
    "observacao": "Observação 820",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e5a"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 21",
    "funcionario": "Funcionário 22",
    "data": {
      "$date": {
        "$numberLong": "1684611019445"
      }
    },
    "inicio": 8,
    "fim": 21,
    "valortotal": 244,
    "observacao": "Observação 821",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e5b"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 8",
    "funcionario": "Funcionário 26",
    "data": {
      "$date": {
        "$numberLong": "1684611019445"
      }
    },
    "inicio": 18,
    "fim": 21,
    "valortotal": 280,
    "observacao": "Observação 822",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e5c"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 46",
    "funcionario": "Funcionário 46",
    "data": {
      "$date": {
        "$numberLong": "1684611019445"
      }
    },
    "inicio": 14,
    "fim": 20,
    "valortotal": 207,
    "observacao": "Observação 823",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e5d"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 51",
    "funcionario": "Funcionário 29",
    "data": {
      "$date": {
        "$numberLong": "1684611019445"
      }
    },
    "inicio": 18,
    "fim": 22,
    "valortotal": 396,
    "observacao": "Observação 824",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e5e"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 51",
    "funcionario": "Funcionário 6",
    "data": {
      "$date": {
        "$numberLong": "1684611019445"
      }
    },
    "inicio": 9,
    "fim": 22,
    "valortotal": 76,
    "observacao": "Observação 825",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e5f"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 8",
    "funcionario": "Funcionário 2",
    "data": {
      "$date": {
        "$numberLong": "1684611019445"
      }
    },
    "inicio": 17,
    "fim": 19,
    "valortotal": 285,
    "observacao": "Observação 826",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e60"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 57",
    "funcionario": "Funcionário 39",
    "data": {
      "$date": {
        "$numberLong": "1684611019445"
      }
    },
    "inicio": 9,
    "fim": 20,
    "valortotal": 85,
    "observacao": "Observação 827",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e61"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 63",
    "funcionario": "Funcionário 24",
    "data": {
      "$date": {
        "$numberLong": "1684611019445"
      }
    },
    "inicio": 9,
    "fim": 19,
    "valortotal": 136,
    "observacao": "Observação 828",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e62"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 32",
    "funcionario": "Funcionário 30",
    "data": {
      "$date": {
        "$numberLong": "1684611019445"
      }
    },
    "inicio": 10,
    "fim": 19,
    "valortotal": 487,
    "observacao": "Observação 829",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e63"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 42",
    "funcionario": "Funcionário 14",
    "data": {
      "$date": {
        "$numberLong": "1684611019445"
      }
    },
    "inicio": 9,
    "fim": 22,
    "valortotal": 163,
    "observacao": "Observação 830",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e64"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 64",
    "funcionario": "Funcionário 2",
    "data": {
      "$date": {
        "$numberLong": "1684611019445"
      }
    },
    "inicio": 8,
    "fim": 19,
    "valortotal": 100,
    "observacao": "Observação 831",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e65"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 85",
    "funcionario": "Funcionário 41",
    "data": {
      "$date": {
        "$numberLong": "1684611019445"
      }
    },
    "inicio": 9,
    "fim": 21,
    "valortotal": 339,
    "observacao": "Observação 832",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e66"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 78",
    "funcionario": "Funcionário 25",
    "data": {
      "$date": {
        "$numberLong": "1684611019445"
      }
    },
    "inicio": 9,
    "fim": 21,
    "valortotal": 445,
    "observacao": "Observação 833",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e67"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 88",
    "funcionario": "Funcionário 45",
    "data": {
      "$date": {
        "$numberLong": "1684611019445"
      }
    },
    "inicio": 8,
    "fim": 20,
    "valortotal": 281,
    "observacao": "Observação 834",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e68"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 91",
    "funcionario": "Funcionário 6",
    "data": {
      "$date": {
        "$numberLong": "1684611019445"
      }
    },
    "inicio": 17,
    "fim": 22,
    "valortotal": 193,
    "observacao": "Observação 835",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e69"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 63",
    "funcionario": "Funcionário 11",
    "data": {
      "$date": {
        "$numberLong": "1684611019445"
      }
    },
    "inicio": 10,
    "fim": 19,
    "valortotal": 151,
    "observacao": "Observação 836",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e6a"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 59",
    "funcionario": "Funcionário 30",
    "data": {
      "$date": {
        "$numberLong": "1684611019445"
      }
    },
    "inicio": 11,
    "fim": 21,
    "valortotal": 135,
    "observacao": "Observação 837",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e6b"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 1",
    "funcionario": "Funcionário 30",
    "data": {
      "$date": {
        "$numberLong": "1684611019445"
      }
    },
    "inicio": 14,
    "fim": 19,
    "valortotal": 142,
    "observacao": "Observação 838",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e6c"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 41",
    "funcionario": "Funcionário 16",
    "data": {
      "$date": {
        "$numberLong": "1684611019445"
      }
    },
    "inicio": 14,
    "fim": 22,
    "valortotal": 315,
    "observacao": "Observação 839",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e6d"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 18",
    "funcionario": "Funcionário 2",
    "data": {
      "$date": {
        "$numberLong": "1684611019445"
      }
    },
    "inicio": 13,
    "fim": 19,
    "valortotal": 425,
    "observacao": "Observação 840",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e6e"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 58",
    "funcionario": "Funcionário 30",
    "data": {
      "$date": {
        "$numberLong": "1684611019445"
      }
    },
    "inicio": 12,
    "fim": 19,
    "valortotal": 54,
    "observacao": "Observação 841",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e6f"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 6",
    "funcionario": "Funcionário 5",
    "data": {
      "$date": {
        "$numberLong": "1684611019445"
      }
    },
    "inicio": 8,
    "fim": 22,
    "valortotal": 473,
    "observacao": "Observação 842",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e70"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 30",
    "funcionario": "Funcionário 41",
    "data": {
      "$date": {
        "$numberLong": "1684611019445"
      }
    },
    "inicio": 11,
    "fim": 19,
    "valortotal": 404,
    "observacao": "Observação 843",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e71"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 13",
    "funcionario": "Funcionário 13",
    "data": {
      "$date": {
        "$numberLong": "1684611019445"
      }
    },
    "inicio": 12,
    "fim": 19,
    "valortotal": 239,
    "observacao": "Observação 844",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e72"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 77",
    "funcionario": "Funcionário 20",
    "data": {
      "$date": {
        "$numberLong": "1684611019445"
      }
    },
    "inicio": 9,
    "fim": 19,
    "valortotal": 309,
    "observacao": "Observação 845",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e73"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 43",
    "funcionario": "Funcionário 3",
    "data": {
      "$date": {
        "$numberLong": "1684611019445"
      }
    },
    "inicio": 10,
    "fim": 21,
    "valortotal": 90,
    "observacao": "Observação 846",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e74"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 97",
    "funcionario": "Funcionário 46",
    "data": {
      "$date": {
        "$numberLong": "1684611019445"
      }
    },
    "inicio": 14,
    "fim": 19,
    "valortotal": 142,
    "observacao": "Observação 847",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e75"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 16",
    "funcionario": "Funcionário 49",
    "data": {
      "$date": {
        "$numberLong": "1684611019445"
      }
    },
    "inicio": 15,
    "fim": 19,
    "valortotal": 266,
    "observacao": "Observação 848",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e76"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 76",
    "funcionario": "Funcionário 50",
    "data": {
      "$date": {
        "$numberLong": "1684611019445"
      }
    },
    "inicio": 17,
    "fim": 21,
    "valortotal": 487,
    "observacao": "Observação 849",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e77"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 85",
    "funcionario": "Funcionário 47",
    "data": {
      "$date": {
        "$numberLong": "1684611019446"
      }
    },
    "inicio": 9,
    "fim": 20,
    "valortotal": 78,
    "observacao": "Observação 850",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e78"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 27",
    "funcionario": "Funcionário 13",
    "data": {
      "$date": {
        "$numberLong": "1684611019446"
      }
    },
    "inicio": 10,
    "fim": 19,
    "valortotal": 356,
    "observacao": "Observação 851",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e79"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 99",
    "funcionario": "Funcionário 10",
    "data": {
      "$date": {
        "$numberLong": "1684611019446"
      }
    },
    "inicio": 16,
    "fim": 19,
    "valortotal": 288,
    "observacao": "Observação 852",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e7a"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 22",
    "funcionario": "Funcionário 20",
    "data": {
      "$date": {
        "$numberLong": "1684611019446"
      }
    },
    "inicio": 17,
    "fim": 21,
    "valortotal": 75,
    "observacao": "Observação 853",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e7b"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 34",
    "funcionario": "Funcionário 23",
    "data": {
      "$date": {
        "$numberLong": "1684611019446"
      }
    },
    "inicio": 9,
    "fim": 22,
    "valortotal": 128,
    "observacao": "Observação 854",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e7c"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 28",
    "funcionario": "Funcionário 26",
    "data": {
      "$date": {
        "$numberLong": "1684611019446"
      }
    },
    "inicio": 11,
    "fim": 19,
    "valortotal": 371,
    "observacao": "Observação 855",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e7d"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 55",
    "funcionario": "Funcionário 12",
    "data": {
      "$date": {
        "$numberLong": "1684611019446"
      }
    },
    "inicio": 16,
    "fim": 22,
    "valortotal": 188,
    "observacao": "Observação 856",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e7e"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 62",
    "funcionario": "Funcionário 2",
    "data": {
      "$date": {
        "$numberLong": "1684611019446"
      }
    },
    "inicio": 14,
    "fim": 22,
    "valortotal": 265,
    "observacao": "Observação 857",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e7f"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 86",
    "funcionario": "Funcionário 33",
    "data": {
      "$date": {
        "$numberLong": "1684611019446"
      }
    },
    "inicio": 12,
    "fim": 20,
    "valortotal": 72,
    "observacao": "Observação 858",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e80"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 92",
    "funcionario": "Funcionário 30",
    "data": {
      "$date": {
        "$numberLong": "1684611019446"
      }
    },
    "inicio": 16,
    "fim": 19,
    "valortotal": 359,
    "observacao": "Observação 859",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e81"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 24",
    "funcionario": "Funcionário 16",
    "data": {
      "$date": {
        "$numberLong": "1684611019446"
      }
    },
    "inicio": 8,
    "fim": 21,
    "valortotal": 404,
    "observacao": "Observação 860",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e82"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 56",
    "funcionario": "Funcionário 8",
    "data": {
      "$date": {
        "$numberLong": "1684611019446"
      }
    },
    "inicio": 18,
    "fim": 20,
    "valortotal": 422,
    "observacao": "Observação 861",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e83"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 91",
    "funcionario": "Funcionário 45",
    "data": {
      "$date": {
        "$numberLong": "1684611019446"
      }
    },
    "inicio": 14,
    "fim": 22,
    "valortotal": 120,
    "observacao": "Observação 862",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e84"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 59",
    "funcionario": "Funcionário 8",
    "data": {
      "$date": {
        "$numberLong": "1684611019446"
      }
    },
    "inicio": 11,
    "fim": 20,
    "valortotal": 328,
    "observacao": "Observação 863",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e85"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 28",
    "funcionario": "Funcionário 31",
    "data": {
      "$date": {
        "$numberLong": "1684611019446"
      }
    },
    "inicio": 14,
    "fim": 22,
    "valortotal": 250,
    "observacao": "Observação 864",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e86"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 17",
    "funcionario": "Funcionário 41",
    "data": {
      "$date": {
        "$numberLong": "1684611019446"
      }
    },
    "inicio": 11,
    "fim": 20,
    "valortotal": 356,
    "observacao": "Observação 865",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e87"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 59",
    "funcionario": "Funcionário 50",
    "data": {
      "$date": {
        "$numberLong": "1684611019446"
      }
    },
    "inicio": 18,
    "fim": 19,
    "valortotal": 204,
    "observacao": "Observação 866",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e88"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 29",
    "funcionario": "Funcionário 46",
    "data": {
      "$date": {
        "$numberLong": "1684611019446"
      }
    },
    "inicio": 13,
    "fim": 19,
    "valortotal": 135,
    "observacao": "Observação 867",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e89"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 2",
    "funcionario": "Funcionário 37",
    "data": {
      "$date": {
        "$numberLong": "1684611019446"
      }
    },
    "inicio": 14,
    "fim": 21,
    "valortotal": 424,
    "observacao": "Observação 868",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e8a"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 19",
    "funcionario": "Funcionário 5",
    "data": {
      "$date": {
        "$numberLong": "1684611019447"
      }
    },
    "inicio": 12,
    "fim": 20,
    "valortotal": 376,
    "observacao": "Observação 869",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e8b"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 92",
    "funcionario": "Funcionário 34",
    "data": {
      "$date": {
        "$numberLong": "1684611019447"
      }
    },
    "inicio": 16,
    "fim": 21,
    "valortotal": 330,
    "observacao": "Observação 870",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e8c"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 71",
    "funcionario": "Funcionário 14",
    "data": {
      "$date": {
        "$numberLong": "1684611019447"
      }
    },
    "inicio": 8,
    "fim": 19,
    "valortotal": 155,
    "observacao": "Observação 871",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e8d"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 83",
    "funcionario": "Funcionário 9",
    "data": {
      "$date": {
        "$numberLong": "1684611019447"
      }
    },
    "inicio": 10,
    "fim": 19,
    "valortotal": 357,
    "observacao": "Observação 872",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e8e"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 65",
    "funcionario": "Funcionário 39",
    "data": {
      "$date": {
        "$numberLong": "1684611019447"
      }
    },
    "inicio": 8,
    "fim": 22,
    "valortotal": 417,
    "observacao": "Observação 873",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e8f"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 10",
    "funcionario": "Funcionário 41",
    "data": {
      "$date": {
        "$numberLong": "1684611019447"
      }
    },
    "inicio": 16,
    "fim": 22,
    "valortotal": 370,
    "observacao": "Observação 874",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e90"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 94",
    "funcionario": "Funcionário 2",
    "data": {
      "$date": {
        "$numberLong": "1684611019447"
      }
    },
    "inicio": 15,
    "fim": 20,
    "valortotal": 477,
    "observacao": "Observação 875",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e91"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 52",
    "funcionario": "Funcionário 15",
    "data": {
      "$date": {
        "$numberLong": "1684611019447"
      }
    },
    "inicio": 9,
    "fim": 19,
    "valortotal": 438,
    "observacao": "Observação 876",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e92"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 97",
    "funcionario": "Funcionário 35",
    "data": {
      "$date": {
        "$numberLong": "1684611019447"
      }
    },
    "inicio": 9,
    "fim": 22,
    "valortotal": 463,
    "observacao": "Observação 877",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e93"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 38",
    "funcionario": "Funcionário 24",
    "data": {
      "$date": {
        "$numberLong": "1684611019447"
      }
    },
    "inicio": 11,
    "fim": 19,
    "valortotal": 89,
    "observacao": "Observação 878",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e94"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 48",
    "funcionario": "Funcionário 14",
    "data": {
      "$date": {
        "$numberLong": "1684611019447"
      }
    },
    "inicio": 9,
    "fim": 21,
    "valortotal": 80,
    "observacao": "Observação 879",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e95"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 14",
    "funcionario": "Funcionário 43",
    "data": {
      "$date": {
        "$numberLong": "1684611019447"
      }
    },
    "inicio": 17,
    "fim": 20,
    "valortotal": 482,
    "observacao": "Observação 880",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e96"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 55",
    "funcionario": "Funcionário 15",
    "data": {
      "$date": {
        "$numberLong": "1684611019447"
      }
    },
    "inicio": 14,
    "fim": 22,
    "valortotal": 314,
    "observacao": "Observação 881",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e97"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 22",
    "funcionario": "Funcionário 5",
    "data": {
      "$date": {
        "$numberLong": "1684611019447"
      }
    },
    "inicio": 15,
    "fim": 21,
    "valortotal": 79,
    "observacao": "Observação 882",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e98"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 18",
    "funcionario": "Funcionário 6",
    "data": {
      "$date": {
        "$numberLong": "1684611019447"
      }
    },
    "inicio": 13,
    "fim": 20,
    "valortotal": 50,
    "observacao": "Observação 883",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e99"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 22",
    "funcionario": "Funcionário 42",
    "data": {
      "$date": {
        "$numberLong": "1684611019447"
      }
    },
    "inicio": 13,
    "fim": 19,
    "valortotal": 138,
    "observacao": "Observação 884",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e9a"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 28",
    "funcionario": "Funcionário 25",
    "data": {
      "$date": {
        "$numberLong": "1684611019447"
      }
    },
    "inicio": 8,
    "fim": 19,
    "valortotal": 73,
    "observacao": "Observação 885",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e9b"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 25",
    "funcionario": "Funcionário 31",
    "data": {
      "$date": {
        "$numberLong": "1684611019447"
      }
    },
    "inicio": 15,
    "fim": 19,
    "valortotal": 439,
    "observacao": "Observação 886",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e9c"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 38",
    "funcionario": "Funcionário 16",
    "data": {
      "$date": {
        "$numberLong": "1684611019447"
      }
    },
    "inicio": 11,
    "fim": 22,
    "valortotal": 163,
    "observacao": "Observação 887",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e9d"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 90",
    "funcionario": "Funcionário 25",
    "data": {
      "$date": {
        "$numberLong": "1684611019447"
      }
    },
    "inicio": 16,
    "fim": 22,
    "valortotal": 387,
    "observacao": "Observação 888",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e9e"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 84",
    "funcionario": "Funcionário 3",
    "data": {
      "$date": {
        "$numberLong": "1684611019447"
      }
    },
    "inicio": 8,
    "fim": 22,
    "valortotal": 272,
    "observacao": "Observação 889",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854e9f"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 100",
    "funcionario": "Funcionário 37",
    "data": {
      "$date": {
        "$numberLong": "1684611019447"
      }
    },
    "inicio": 13,
    "fim": 22,
    "valortotal": 161,
    "observacao": "Observação 890",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ea0"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 86",
    "funcionario": "Funcionário 41",
    "data": {
      "$date": {
        "$numberLong": "1684611019448"
      }
    },
    "inicio": 15,
    "fim": 20,
    "valortotal": 494,
    "observacao": "Observação 891",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ea1"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 35",
    "funcionario": "Funcionário 32",
    "data": {
      "$date": {
        "$numberLong": "1684611019448"
      }
    },
    "inicio": 17,
    "fim": 21,
    "valortotal": 50,
    "observacao": "Observação 892",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ea2"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 7",
    "funcionario": "Funcionário 13",
    "data": {
      "$date": {
        "$numberLong": "1684611019448"
      }
    },
    "inicio": 10,
    "fim": 21,
    "valortotal": 385,
    "observacao": "Observação 893",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ea3"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 97",
    "funcionario": "Funcionário 8",
    "data": {
      "$date": {
        "$numberLong": "1684611019448"
      }
    },
    "inicio": 10,
    "fim": 20,
    "valortotal": 118,
    "observacao": "Observação 894",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ea4"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 88",
    "funcionario": "Funcionário 40",
    "data": {
      "$date": {
        "$numberLong": "1684611019448"
      }
    },
    "inicio": 10,
    "fim": 19,
    "valortotal": 107,
    "observacao": "Observação 895",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ea5"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 79",
    "funcionario": "Funcionário 22",
    "data": {
      "$date": {
        "$numberLong": "1684611019448"
      }
    },
    "inicio": 12,
    "fim": 19,
    "valortotal": 489,
    "observacao": "Observação 896",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ea6"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 23",
    "funcionario": "Funcionário 39",
    "data": {
      "$date": {
        "$numberLong": "1684611019448"
      }
    },
    "inicio": 13,
    "fim": 19,
    "valortotal": 94,
    "observacao": "Observação 897",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ea7"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 61",
    "funcionario": "Funcionário 40",
    "data": {
      "$date": {
        "$numberLong": "1684611019448"
      }
    },
    "inicio": 11,
    "fim": 22,
    "valortotal": 305,
    "observacao": "Observação 898",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ea8"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 13",
    "funcionario": "Funcionário 28",
    "data": {
      "$date": {
        "$numberLong": "1684611019448"
      }
    },
    "inicio": 16,
    "fim": 19,
    "valortotal": 448,
    "observacao": "Observação 899",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ea9"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 75",
    "funcionario": "Funcionário 5",
    "data": {
      "$date": {
        "$numberLong": "1684611019448"
      }
    },
    "inicio": 13,
    "fim": 21,
    "valortotal": 470,
    "observacao": "Observação 900",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854eaa"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 72",
    "funcionario": "Funcionário 17",
    "data": {
      "$date": {
        "$numberLong": "1684611019448"
      }
    },
    "inicio": 15,
    "fim": 21,
    "valortotal": 66,
    "observacao": "Observação 901",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854eab"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 65",
    "funcionario": "Funcionário 24",
    "data": {
      "$date": {
        "$numberLong": "1684611019448"
      }
    },
    "inicio": 12,
    "fim": 20,
    "valortotal": 413,
    "observacao": "Observação 902",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854eac"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 86",
    "funcionario": "Funcionário 12",
    "data": {
      "$date": {
        "$numberLong": "1684611019448"
      }
    },
    "inicio": 9,
    "fim": 22,
    "valortotal": 73,
    "observacao": "Observação 903",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ead"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 75",
    "funcionario": "Funcionário 44",
    "data": {
      "$date": {
        "$numberLong": "1684611019448"
      }
    },
    "inicio": 10,
    "fim": 21,
    "valortotal": 333,
    "observacao": "Observação 904",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854eae"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 93",
    "funcionario": "Funcionário 23",
    "data": {
      "$date": {
        "$numberLong": "1684611019448"
      }
    },
    "inicio": 9,
    "fim": 20,
    "valortotal": 69,
    "observacao": "Observação 905",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854eaf"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 2",
    "funcionario": "Funcionário 14",
    "data": {
      "$date": {
        "$numberLong": "1684611019448"
      }
    },
    "inicio": 18,
    "fim": 21,
    "valortotal": 163,
    "observacao": "Observação 906",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854eb0"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 36",
    "funcionario": "Funcionário 12",
    "data": {
      "$date": {
        "$numberLong": "1684611019448"
      }
    },
    "inicio": 12,
    "fim": 22,
    "valortotal": 291,
    "observacao": "Observação 907",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854eb1"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 11",
    "funcionario": "Funcionário 30",
    "data": {
      "$date": {
        "$numberLong": "1684611019448"
      }
    },
    "inicio": 14,
    "fim": 22,
    "valortotal": 436,
    "observacao": "Observação 908",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854eb2"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 67",
    "funcionario": "Funcionário 28",
    "data": {
      "$date": {
        "$numberLong": "1684611019449"
      }
    },
    "inicio": 8,
    "fim": 19,
    "valortotal": 244,
    "observacao": "Observação 909",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854eb3"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 74",
    "funcionario": "Funcionário 23",
    "data": {
      "$date": {
        "$numberLong": "1684611019449"
      }
    },
    "inicio": 8,
    "fim": 19,
    "valortotal": 160,
    "observacao": "Observação 910",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854eb4"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 93",
    "funcionario": "Funcionário 24",
    "data": {
      "$date": {
        "$numberLong": "1684611019449"
      }
    },
    "inicio": 10,
    "fim": 20,
    "valortotal": 369,
    "observacao": "Observação 911",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854eb5"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 21",
    "funcionario": "Funcionário 41",
    "data": {
      "$date": {
        "$numberLong": "1684611019449"
      }
    },
    "inicio": 10,
    "fim": 21,
    "valortotal": 283,
    "observacao": "Observação 912",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854eb6"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 23",
    "funcionario": "Funcionário 2",
    "data": {
      "$date": {
        "$numberLong": "1684611019449"
      }
    },
    "inicio": 8,
    "fim": 21,
    "valortotal": 266,
    "observacao": "Observação 913",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854eb7"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 90",
    "funcionario": "Funcionário 25",
    "data": {
      "$date": {
        "$numberLong": "1684611019449"
      }
    },
    "inicio": 14,
    "fim": 19,
    "valortotal": 157,
    "observacao": "Observação 914",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854eb8"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 26",
    "funcionario": "Funcionário 41",
    "data": {
      "$date": {
        "$numberLong": "1684611019449"
      }
    },
    "inicio": 9,
    "fim": 21,
    "valortotal": 363,
    "observacao": "Observação 915",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854eb9"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 15",
    "funcionario": "Funcionário 39",
    "data": {
      "$date": {
        "$numberLong": "1684611019449"
      }
    },
    "inicio": 11,
    "fim": 21,
    "valortotal": 120,
    "observacao": "Observação 916",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854eba"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 90",
    "funcionario": "Funcionário 48",
    "data": {
      "$date": {
        "$numberLong": "1684611019449"
      }
    },
    "inicio": 8,
    "fim": 22,
    "valortotal": 134,
    "observacao": "Observação 917",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ebb"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 47",
    "funcionario": "Funcionário 10",
    "data": {
      "$date": {
        "$numberLong": "1684611019449"
      }
    },
    "inicio": 18,
    "fim": 21,
    "valortotal": 160,
    "observacao": "Observação 918",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ebc"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 37",
    "funcionario": "Funcionário 18",
    "data": {
      "$date": {
        "$numberLong": "1684611019449"
      }
    },
    "inicio": 9,
    "fim": 21,
    "valortotal": 457,
    "observacao": "Observação 919",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ebd"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 41",
    "funcionario": "Funcionário 38",
    "data": {
      "$date": {
        "$numberLong": "1684611019449"
      }
    },
    "inicio": 15,
    "fim": 21,
    "valortotal": 392,
    "observacao": "Observação 920",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ebe"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 71",
    "funcionario": "Funcionário 41",
    "data": {
      "$date": {
        "$numberLong": "1684611019449"
      }
    },
    "inicio": 10,
    "fim": 21,
    "valortotal": 216,
    "observacao": "Observação 921",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ebf"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 41",
    "funcionario": "Funcionário 43",
    "data": {
      "$date": {
        "$numberLong": "1684611019449"
      }
    },
    "inicio": 18,
    "fim": 22,
    "valortotal": 97,
    "observacao": "Observação 922",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ec0"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 72",
    "funcionario": "Funcionário 4",
    "data": {
      "$date": {
        "$numberLong": "1684611019449"
      }
    },
    "inicio": 14,
    "fim": 19,
    "valortotal": 185,
    "observacao": "Observação 923",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ec1"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 61",
    "funcionario": "Funcionário 3",
    "data": {
      "$date": {
        "$numberLong": "1684611019449"
      }
    },
    "inicio": 16,
    "fim": 21,
    "valortotal": 167,
    "observacao": "Observação 924",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ec2"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 1",
    "funcionario": "Funcionário 43",
    "data": {
      "$date": {
        "$numberLong": "1684611019449"
      }
    },
    "inicio": 13,
    "fim": 21,
    "valortotal": 345,
    "observacao": "Observação 925",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ec3"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 86",
    "funcionario": "Funcionário 29",
    "data": {
      "$date": {
        "$numberLong": "1684611019449"
      }
    },
    "inicio": 12,
    "fim": 19,
    "valortotal": 190,
    "observacao": "Observação 926",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ec4"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 69",
    "funcionario": "Funcionário 22",
    "data": {
      "$date": {
        "$numberLong": "1684611019449"
      }
    },
    "inicio": 12,
    "fim": 19,
    "valortotal": 388,
    "observacao": "Observação 927",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ec5"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 64",
    "funcionario": "Funcionário 47",
    "data": {
      "$date": {
        "$numberLong": "1684611019449"
      }
    },
    "inicio": 17,
    "fim": 22,
    "valortotal": 235,
    "observacao": "Observação 928",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ec6"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 26",
    "funcionario": "Funcionário 41",
    "data": {
      "$date": {
        "$numberLong": "1684611019449"
      }
    },
    "inicio": 16,
    "fim": 19,
    "valortotal": 427,
    "observacao": "Observação 929",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ec7"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 3",
    "funcionario": "Funcionário 10",
    "data": {
      "$date": {
        "$numberLong": "1684611019449"
      }
    },
    "inicio": 12,
    "fim": 19,
    "valortotal": 488,
    "observacao": "Observação 930",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ec8"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 26",
    "funcionario": "Funcionário 14",
    "data": {
      "$date": {
        "$numberLong": "1684611019449"
      }
    },
    "inicio": 13,
    "fim": 19,
    "valortotal": 191,
    "observacao": "Observação 931",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ec9"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 45",
    "funcionario": "Funcionário 39",
    "data": {
      "$date": {
        "$numberLong": "1684611019449"
      }
    },
    "inicio": 8,
    "fim": 19,
    "valortotal": 141,
    "observacao": "Observação 932",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854eca"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 53",
    "funcionario": "Funcionário 26",
    "data": {
      "$date": {
        "$numberLong": "1684611019449"
      }
    },
    "inicio": 16,
    "fim": 20,
    "valortotal": 449,
    "observacao": "Observação 933",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ecb"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 9",
    "funcionario": "Funcionário 29",
    "data": {
      "$date": {
        "$numberLong": "1684611019449"
      }
    },
    "inicio": 18,
    "fim": 21,
    "valortotal": 132,
    "observacao": "Observação 934",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ecc"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 72",
    "funcionario": "Funcionário 32",
    "data": {
      "$date": {
        "$numberLong": "1684611019449"
      }
    },
    "inicio": 8,
    "fim": 19,
    "valortotal": 114,
    "observacao": "Observação 935",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ecd"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 98",
    "funcionario": "Funcionário 33",
    "data": {
      "$date": {
        "$numberLong": "1684611019449"
      }
    },
    "inicio": 16,
    "fim": 22,
    "valortotal": 63,
    "observacao": "Observação 936",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ece"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 53",
    "funcionario": "Funcionário 9",
    "data": {
      "$date": {
        "$numberLong": "1684611019449"
      }
    },
    "inicio": 9,
    "fim": 20,
    "valortotal": 364,
    "observacao": "Observação 937",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ecf"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 46",
    "funcionario": "Funcionário 11",
    "data": {
      "$date": {
        "$numberLong": "1684611019449"
      }
    },
    "inicio": 18,
    "fim": 21,
    "valortotal": 286,
    "observacao": "Observação 938",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ed0"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 39",
    "funcionario": "Funcionário 35",
    "data": {
      "$date": {
        "$numberLong": "1684611019449"
      }
    },
    "inicio": 15,
    "fim": 19,
    "valortotal": 466,
    "observacao": "Observação 939",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ed1"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 40",
    "funcionario": "Funcionário 12",
    "data": {
      "$date": {
        "$numberLong": "1684611019449"
      }
    },
    "inicio": 12,
    "fim": 19,
    "valortotal": 79,
    "observacao": "Observação 940",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ed2"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 85",
    "funcionario": "Funcionário 19",
    "data": {
      "$date": {
        "$numberLong": "1684611019449"
      }
    },
    "inicio": 16,
    "fim": 22,
    "valortotal": 140,
    "observacao": "Observação 941",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ed3"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 25",
    "funcionario": "Funcionário 20",
    "data": {
      "$date": {
        "$numberLong": "1684611019449"
      }
    },
    "inicio": 9,
    "fim": 20,
    "valortotal": 288,
    "observacao": "Observação 942",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ed4"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 89",
    "funcionario": "Funcionário 28",
    "data": {
      "$date": {
        "$numberLong": "1684611019449"
      }
    },
    "inicio": 9,
    "fim": 20,
    "valortotal": 222,
    "observacao": "Observação 943",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ed5"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 86",
    "funcionario": "Funcionário 26",
    "data": {
      "$date": {
        "$numberLong": "1684611019449"
      }
    },
    "inicio": 15,
    "fim": 19,
    "valortotal": 228,
    "observacao": "Observação 944",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ed6"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 35",
    "funcionario": "Funcionário 49",
    "data": {
      "$date": {
        "$numberLong": "1684611019450"
      }
    },
    "inicio": 10,
    "fim": 21,
    "valortotal": 257,
    "observacao": "Observação 945",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ed7"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 80",
    "funcionario": "Funcionário 49",
    "data": {
      "$date": {
        "$numberLong": "1684611019450"
      }
    },
    "inicio": 14,
    "fim": 20,
    "valortotal": 244,
    "observacao": "Observação 946",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ed8"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 69",
    "funcionario": "Funcionário 41",
    "data": {
      "$date": {
        "$numberLong": "1684611019450"
      }
    },
    "inicio": 10,
    "fim": 19,
    "valortotal": 69,
    "observacao": "Observação 947",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ed9"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 22",
    "funcionario": "Funcionário 30",
    "data": {
      "$date": {
        "$numberLong": "1684611019450"
      }
    },
    "inicio": 14,
    "fim": 21,
    "valortotal": 474,
    "observacao": "Observação 948",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854eda"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 32",
    "funcionario": "Funcionário 22",
    "data": {
      "$date": {
        "$numberLong": "1684611019450"
      }
    },
    "inicio": 8,
    "fim": 19,
    "valortotal": 243,
    "observacao": "Observação 949",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854edb"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 29",
    "funcionario": "Funcionário 17",
    "data": {
      "$date": {
        "$numberLong": "1684611019450"
      }
    },
    "inicio": 17,
    "fim": 22,
    "valortotal": 427,
    "observacao": "Observação 950",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854edc"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 58",
    "funcionario": "Funcionário 25",
    "data": {
      "$date": {
        "$numberLong": "1684611019450"
      }
    },
    "inicio": 11,
    "fim": 21,
    "valortotal": 62,
    "observacao": "Observação 951",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854edd"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 4",
    "funcionario": "Funcionário 45",
    "data": {
      "$date": {
        "$numberLong": "1684611019450"
      }
    },
    "inicio": 15,
    "fim": 19,
    "valortotal": 455,
    "observacao": "Observação 952",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ede"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 40",
    "funcionario": "Funcionário 7",
    "data": {
      "$date": {
        "$numberLong": "1684611019450"
      }
    },
    "inicio": 10,
    "fim": 21,
    "valortotal": 315,
    "observacao": "Observação 953",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854edf"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 35",
    "funcionario": "Funcionário 35",
    "data": {
      "$date": {
        "$numberLong": "1684611019450"
      }
    },
    "inicio": 14,
    "fim": 19,
    "valortotal": 433,
    "observacao": "Observação 954",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ee0"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 84",
    "funcionario": "Funcionário 32",
    "data": {
      "$date": {
        "$numberLong": "1684611019450"
      }
    },
    "inicio": 16,
    "fim": 22,
    "valortotal": 383,
    "observacao": "Observação 955",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ee1"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 16",
    "funcionario": "Funcionário 14",
    "data": {
      "$date": {
        "$numberLong": "1684611019450"
      }
    },
    "inicio": 10,
    "fim": 19,
    "valortotal": 445,
    "observacao": "Observação 956",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ee2"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 57",
    "funcionario": "Funcionário 30",
    "data": {
      "$date": {
        "$numberLong": "1684611019450"
      }
    },
    "inicio": 17,
    "fim": 22,
    "valortotal": 104,
    "observacao": "Observação 957",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ee3"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 92",
    "funcionario": "Funcionário 5",
    "data": {
      "$date": {
        "$numberLong": "1684611019450"
      }
    },
    "inicio": 9,
    "fim": 20,
    "valortotal": 371,
    "observacao": "Observação 958",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ee4"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 92",
    "funcionario": "Funcionário 17",
    "data": {
      "$date": {
        "$numberLong": "1684611019450"
      }
    },
    "inicio": 15,
    "fim": 20,
    "valortotal": 478,
    "observacao": "Observação 959",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ee5"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 39",
    "funcionario": "Funcionário 12",
    "data": {
      "$date": {
        "$numberLong": "1684611019450"
      }
    },
    "inicio": 18,
    "fim": 21,
    "valortotal": 402,
    "observacao": "Observação 960",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ee6"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 52",
    "funcionario": "Funcionário 39",
    "data": {
      "$date": {
        "$numberLong": "1684611019450"
      }
    },
    "inicio": 13,
    "fim": 21,
    "valortotal": 87,
    "observacao": "Observação 961",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ee7"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 8",
    "funcionario": "Funcionário 22",
    "data": {
      "$date": {
        "$numberLong": "1684611019450"
      }
    },
    "inicio": 17,
    "fim": 21,
    "valortotal": 227,
    "observacao": "Observação 962",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ee8"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 18",
    "funcionario": "Funcionário 33",
    "data": {
      "$date": {
        "$numberLong": "1684611019450"
      }
    },
    "inicio": 14,
    "fim": 22,
    "valortotal": 416,
    "observacao": "Observação 963",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ee9"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 72",
    "funcionario": "Funcionário 45",
    "data": {
      "$date": {
        "$numberLong": "1684611019450"
      }
    },
    "inicio": 17,
    "fim": 22,
    "valortotal": 206,
    "observacao": "Observação 964",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854eea"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 100",
    "funcionario": "Funcionário 9",
    "data": {
      "$date": {
        "$numberLong": "1684611019450"
      }
    },
    "inicio": 9,
    "fim": 19,
    "valortotal": 264,
    "observacao": "Observação 965",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854eeb"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 59",
    "funcionario": "Funcionário 19",
    "data": {
      "$date": {
        "$numberLong": "1684611019450"
      }
    },
    "inicio": 8,
    "fim": 20,
    "valortotal": 209,
    "observacao": "Observação 966",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854eec"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 84",
    "funcionario": "Funcionário 50",
    "data": {
      "$date": {
        "$numberLong": "1684611019450"
      }
    },
    "inicio": 13,
    "fim": 20,
    "valortotal": 254,
    "observacao": "Observação 967",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854eed"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 7",
    "funcionario": "Funcionário 4",
    "data": {
      "$date": {
        "$numberLong": "1684611019450"
      }
    },
    "inicio": 16,
    "fim": 21,
    "valortotal": 287,
    "observacao": "Observação 968",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854eee"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 82",
    "funcionario": "Funcionário 48",
    "data": {
      "$date": {
        "$numberLong": "1684611019450"
      }
    },
    "inicio": 13,
    "fim": 21,
    "valortotal": 168,
    "observacao": "Observação 969",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854eef"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 98",
    "funcionario": "Funcionário 15",
    "data": {
      "$date": {
        "$numberLong": "1684611019450"
      }
    },
    "inicio": 12,
    "fim": 21,
    "valortotal": 399,
    "observacao": "Observação 970",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ef0"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 29",
    "funcionario": "Funcionário 20",
    "data": {
      "$date": {
        "$numberLong": "1684611019450"
      }
    },
    "inicio": 18,
    "fim": 20,
    "valortotal": 423,
    "observacao": "Observação 971",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ef1"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 34",
    "funcionario": "Funcionário 39",
    "data": {
      "$date": {
        "$numberLong": "1684611019450"
      }
    },
    "inicio": 12,
    "fim": 22,
    "valortotal": 135,
    "observacao": "Observação 972",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ef2"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 73",
    "funcionario": "Funcionário 45",
    "data": {
      "$date": {
        "$numberLong": "1684611019450"
      }
    },
    "inicio": 10,
    "fim": 20,
    "valortotal": 242,
    "observacao": "Observação 973",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ef3"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 20",
    "funcionario": "Funcionário 24",
    "data": {
      "$date": {
        "$numberLong": "1684611019450"
      }
    },
    "inicio": 12,
    "fim": 22,
    "valortotal": 367,
    "observacao": "Observação 974",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ef4"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 90",
    "funcionario": "Funcionário 6",
    "data": {
      "$date": {
        "$numberLong": "1684611019450"
      }
    },
    "inicio": 13,
    "fim": 22,
    "valortotal": 208,
    "observacao": "Observação 975",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ef5"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 100",
    "funcionario": "Funcionário 16",
    "data": {
      "$date": {
        "$numberLong": "1684611019450"
      }
    },
    "inicio": 17,
    "fim": 19,
    "valortotal": 154,
    "observacao": "Observação 976",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ef6"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 7",
    "funcionario": "Funcionário 15",
    "data": {
      "$date": {
        "$numberLong": "1684611019450"
      }
    },
    "inicio": 16,
    "fim": 22,
    "valortotal": 488,
    "observacao": "Observação 977",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ef7"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 20",
    "funcionario": "Funcionário 19",
    "data": {
      "$date": {
        "$numberLong": "1684611019450"
      }
    },
    "inicio": 13,
    "fim": 19,
    "valortotal": 153,
    "observacao": "Observação 978",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ef8"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 3",
    "funcionario": "Funcionário 36",
    "data": {
      "$date": {
        "$numberLong": "1684611019450"
      }
    },
    "inicio": 9,
    "fim": 19,
    "valortotal": 438,
    "observacao": "Observação 979",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854ef9"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 33",
    "funcionario": "Funcionário 1",
    "data": {
      "$date": {
        "$numberLong": "1684611019450"
      }
    },
    "inicio": 9,
    "fim": 22,
    "valortotal": 189,
    "observacao": "Observação 980",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854efa"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 98",
    "funcionario": "Funcionário 45",
    "data": {
      "$date": {
        "$numberLong": "1684611019450"
      }
    },
    "inicio": 14,
    "fim": 21,
    "valortotal": 466,
    "observacao": "Observação 981",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854efb"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 38",
    "funcionario": "Funcionário 40",
    "data": {
      "$date": {
        "$numberLong": "1684611019450"
      }
    },
    "inicio": 12,
    "fim": 20,
    "valortotal": 479,
    "observacao": "Observação 982",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854efc"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 34",
    "funcionario": "Funcionário 2",
    "data": {
      "$date": {
        "$numberLong": "1684611019451"
      }
    },
    "inicio": 10,
    "fim": 21,
    "valortotal": 187,
    "observacao": "Observação 983",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854efd"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 59",
    "funcionario": "Funcionário 40",
    "data": {
      "$date": {
        "$numberLong": "1684611019451"
      }
    },
    "inicio": 11,
    "fim": 21,
    "valortotal": 256,
    "observacao": "Observação 984",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854efe"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 54",
    "funcionario": "Funcionário 42",
    "data": {
      "$date": {
        "$numberLong": "1684611019451"
      }
    },
    "inicio": 14,
    "fim": 22,
    "valortotal": 342,
    "observacao": "Observação 985",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854eff"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 7",
    "funcionario": "Funcionário 26",
    "data": {
      "$date": {
        "$numberLong": "1684611019451"
      }
    },
    "inicio": 9,
    "fim": 19,
    "valortotal": 343,
    "observacao": "Observação 986",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854f00"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 53",
    "funcionario": "Funcionário 45",
    "data": {
      "$date": {
        "$numberLong": "1684611019451"
      }
    },
    "inicio": 11,
    "fim": 22,
    "valortotal": 494,
    "observacao": "Observação 987",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854f01"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 100",
    "funcionario": "Funcionário 24",
    "data": {
      "$date": {
        "$numberLong": "1684611019451"
      }
    },
    "inicio": 17,
    "fim": 19,
    "valortotal": 159,
    "observacao": "Observação 988",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854f02"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 65",
    "funcionario": "Funcionário 15",
    "data": {
      "$date": {
        "$numberLong": "1684611019451"
      }
    },
    "inicio": 16,
    "fim": 20,
    "valortotal": 234,
    "observacao": "Observação 989",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854f03"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 82",
    "funcionario": "Funcionário 6",
    "data": {
      "$date": {
        "$numberLong": "1684611019451"
      }
    },
    "inicio": 15,
    "fim": 22,
    "valortotal": 441,
    "observacao": "Observação 990",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854f04"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 68",
    "funcionario": "Funcionário 45",
    "data": {
      "$date": {
        "$numberLong": "1684611019451"
      }
    },
    "inicio": 11,
    "fim": 20,
    "valortotal": 180,
    "observacao": "Observação 991",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854f05"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 89",
    "funcionario": "Funcionário 28",
    "data": {
      "$date": {
        "$numberLong": "1684611019451"
      }
    },
    "inicio": 18,
    "fim": 19,
    "valortotal": 126,
    "observacao": "Observação 992",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854f06"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 58",
    "funcionario": "Funcionário 39",
    "data": {
      "$date": {
        "$numberLong": "1684611019452"
      }
    },
    "inicio": 15,
    "fim": 19,
    "valortotal": 291,
    "observacao": "Observação 993",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854f07"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 76",
    "funcionario": "Funcionário 46",
    "data": {
      "$date": {
        "$numberLong": "1684611019453"
      }
    },
    "inicio": 9,
    "fim": 20,
    "valortotal": 102,
    "observacao": "Observação 994",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854f08"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 51",
    "funcionario": "Funcionário 38",
    "data": {
      "$date": {
        "$numberLong": "1684611019453"
      }
    },
    "inicio": 12,
    "fim": 20,
    "valortotal": 226,
    "observacao": "Observação 995",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854f09"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 81",
    "funcionario": "Funcionário 19",
    "data": {
      "$date": {
        "$numberLong": "1684611019453"
      }
    },
    "inicio": 9,
    "fim": 20,
    "valortotal": 379,
    "observacao": "Observação 996",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854f0a"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 90",
    "funcionario": "Funcionário 1",
    "data": {
      "$date": {
        "$numberLong": "1684611019453"
      }
    },
    "inicio": 9,
    "fim": 22,
    "valortotal": 450,
    "observacao": "Observação 997",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854f0b"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 49",
    "funcionario": "Funcionário 6",
    "data": {
      "$date": {
        "$numberLong": "1684611019453"
      }
    },
    "inicio": 8,
    "fim": 21,
    "valortotal": 163,
    "observacao": "Observação 998",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854f0c"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 80",
    "funcionario": "Funcionário 20",
    "data": {
      "$date": {
        "$numberLong": "1684611019453"
      }
    },
    "inicio": 18,
    "fim": 19,
    "valortotal": 109,
    "observacao": "Observação 999",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64691fcbebaff92000854f0d"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 50",
    "funcionario": "Funcionário 25",
    "data": {
      "$date": {
        "$numberLong": "1684611019453"
      }
    },
    "inicio": 18,
    "fim": 19,
    "valortotal": 262,
    "observacao": "Observação 1000",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833cb1"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 50",
    "funcionario": "Funcionário 12",
    "data": {
      "$date": {
        "$numberLong": "1684611636473"
      }
    },
    "inicio": 11,
    "fim": 20,
    "valortotal": 229,
    "observacao": "Observação 1",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833cb2"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 15",
    "funcionario": "Funcionário 26",
    "data": {
      "$date": {
        "$numberLong": "1684611636478"
      }
    },
    "inicio": 17,
    "fim": 20,
    "valortotal": 331,
    "observacao": "Observação 2",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833cb3"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 50",
    "funcionario": "Funcionário 39",
    "data": {
      "$date": {
        "$numberLong": "1684611636479"
      }
    },
    "inicio": 17,
    "fim": 22,
    "valortotal": 442,
    "observacao": "Observação 3",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833cb4"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 10",
    "funcionario": "Funcionário 31",
    "data": {
      "$date": {
        "$numberLong": "1684611636480"
      }
    },
    "inicio": 8,
    "fim": 20,
    "valortotal": 440,
    "observacao": "Observação 4",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833cb5"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 71",
    "funcionario": "Funcionário 34",
    "data": {
      "$date": {
        "$numberLong": "1684611636480"
      }
    },
    "inicio": 9,
    "fim": 21,
    "valortotal": 293,
    "observacao": "Observação 5",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833cb6"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 37",
    "funcionario": "Funcionário 40",
    "data": {
      "$date": {
        "$numberLong": "1684611636481"
      }
    },
    "inicio": 11,
    "fim": 22,
    "valortotal": 173,
    "observacao": "Observação 6",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833cb7"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 77",
    "funcionario": "Funcionário 30",
    "data": {
      "$date": {
        "$numberLong": "1684611636482"
      }
    },
    "inicio": 8,
    "fim": 21,
    "valortotal": 361,
    "observacao": "Observação 7",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833cb8"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 95",
    "funcionario": "Funcionário 29",
    "data": {
      "$date": {
        "$numberLong": "1684611636482"
      }
    },
    "inicio": 12,
    "fim": 21,
    "valortotal": 107,
    "observacao": "Observação 8",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833cb9"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 71",
    "funcionario": "Funcionário 43",
    "data": {
      "$date": {
        "$numberLong": "1684611636483"
      }
    },
    "inicio": 16,
    "fim": 20,
    "valortotal": 62,
    "observacao": "Observação 9",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833cba"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 93",
    "funcionario": "Funcionário 50",
    "data": {
      "$date": {
        "$numberLong": "1684611636483"
      }
    },
    "inicio": 18,
    "fim": 19,
    "valortotal": 447,
    "observacao": "Observação 10",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833cbb"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 10",
    "funcionario": "Funcionário 5",
    "data": {
      "$date": {
        "$numberLong": "1684611636483"
      }
    },
    "inicio": 13,
    "fim": 19,
    "valortotal": 86,
    "observacao": "Observação 11",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833cbc"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 2",
    "funcionario": "Funcionário 28",
    "data": {
      "$date": {
        "$numberLong": "1684611636483"
      }
    },
    "inicio": 14,
    "fim": 19,
    "valortotal": 342,
    "observacao": "Observação 12",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833cbd"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 59",
    "funcionario": "Funcionário 50",
    "data": {
      "$date": {
        "$numberLong": "1684611636484"
      }
    },
    "inicio": 11,
    "fim": 21,
    "valortotal": 356,
    "observacao": "Observação 13",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833cbe"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 48",
    "funcionario": "Funcionário 10",
    "data": {
      "$date": {
        "$numberLong": "1684611636484"
      }
    },
    "inicio": 14,
    "fim": 20,
    "valortotal": 494,
    "observacao": "Observação 14",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833cbf"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 73",
    "funcionario": "Funcionário 17",
    "data": {
      "$date": {
        "$numberLong": "1684611636484"
      }
    },
    "inicio": 12,
    "fim": 22,
    "valortotal": 274,
    "observacao": "Observação 15",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833cc0"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 80",
    "funcionario": "Funcionário 18",
    "data": {
      "$date": {
        "$numberLong": "1684611636484"
      }
    },
    "inicio": 11,
    "fim": 21,
    "valortotal": 273,
    "observacao": "Observação 16",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833cc1"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 65",
    "funcionario": "Funcionário 41",
    "data": {
      "$date": {
        "$numberLong": "1684611636485"
      }
    },
    "inicio": 10,
    "fim": 19,
    "valortotal": 196,
    "observacao": "Observação 17",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833cc2"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 96",
    "funcionario": "Funcionário 27",
    "data": {
      "$date": {
        "$numberLong": "1684611636485"
      }
    },
    "inicio": 16,
    "fim": 20,
    "valortotal": 444,
    "observacao": "Observação 18",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833cc3"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 38",
    "funcionario": "Funcionário 40",
    "data": {
      "$date": {
        "$numberLong": "1684611636486"
      }
    },
    "inicio": 18,
    "fim": 21,
    "valortotal": 264,
    "observacao": "Observação 19",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833cc4"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 32",
    "funcionario": "Funcionário 30",
    "data": {
      "$date": {
        "$numberLong": "1684611636486"
      }
    },
    "inicio": 18,
    "fim": 21,
    "valortotal": 231,
    "observacao": "Observação 20",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833cc5"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 78",
    "funcionario": "Funcionário 17",
    "data": {
      "$date": {
        "$numberLong": "1684611636486"
      }
    },
    "inicio": 16,
    "fim": 22,
    "valortotal": 69,
    "observacao": "Observação 21",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833cc6"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 58",
    "funcionario": "Funcionário 13",
    "data": {
      "$date": {
        "$numberLong": "1684611636486"
      }
    },
    "inicio": 11,
    "fim": 22,
    "valortotal": 419,
    "observacao": "Observação 22",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833cc7"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 51",
    "funcionario": "Funcionário 38",
    "data": {
      "$date": {
        "$numberLong": "1684611636486"
      }
    },
    "inicio": 11,
    "fim": 19,
    "valortotal": 155,
    "observacao": "Observação 23",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833cc8"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 81",
    "funcionario": "Funcionário 48",
    "data": {
      "$date": {
        "$numberLong": "1684611636487"
      }
    },
    "inicio": 17,
    "fim": 21,
    "valortotal": 163,
    "observacao": "Observação 24",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833cc9"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 3",
    "funcionario": "Funcionário 5",
    "data": {
      "$date": {
        "$numberLong": "1684611636487"
      }
    },
    "inicio": 17,
    "fim": 20,
    "valortotal": 242,
    "observacao": "Observação 25",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833cca"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 67",
    "funcionario": "Funcionário 47",
    "data": {
      "$date": {
        "$numberLong": "1684611636487"
      }
    },
    "inicio": 10,
    "fim": 21,
    "valortotal": 419,
    "observacao": "Observação 26",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ccb"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 45",
    "funcionario": "Funcionário 13",
    "data": {
      "$date": {
        "$numberLong": "1684611636487"
      }
    },
    "inicio": 9,
    "fim": 19,
    "valortotal": 443,
    "observacao": "Observação 27",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ccc"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 39",
    "funcionario": "Funcionário 39",
    "data": {
      "$date": {
        "$numberLong": "1684611636487"
      }
    },
    "inicio": 11,
    "fim": 22,
    "valortotal": 159,
    "observacao": "Observação 28",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ccd"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 66",
    "funcionario": "Funcionário 20",
    "data": {
      "$date": {
        "$numberLong": "1684611636487"
      }
    },
    "inicio": 18,
    "fim": 22,
    "valortotal": 463,
    "observacao": "Observação 29",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833cce"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 74",
    "funcionario": "Funcionário 38",
    "data": {
      "$date": {
        "$numberLong": "1684611636488"
      }
    },
    "inicio": 16,
    "fim": 22,
    "valortotal": 263,
    "observacao": "Observação 30",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ccf"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 13",
    "funcionario": "Funcionário 9",
    "data": {
      "$date": {
        "$numberLong": "1684611636488"
      }
    },
    "inicio": 12,
    "fim": 21,
    "valortotal": 142,
    "observacao": "Observação 31",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833cd0"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 99",
    "funcionario": "Funcionário 18",
    "data": {
      "$date": {
        "$numberLong": "1684611636488"
      }
    },
    "inicio": 12,
    "fim": 19,
    "valortotal": 317,
    "observacao": "Observação 32",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833cd1"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 44",
    "funcionario": "Funcionário 28",
    "data": {
      "$date": {
        "$numberLong": "1684611636488"
      }
    },
    "inicio": 17,
    "fim": 21,
    "valortotal": 312,
    "observacao": "Observação 33",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833cd2"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 59",
    "funcionario": "Funcionário 40",
    "data": {
      "$date": {
        "$numberLong": "1684611636488"
      }
    },
    "inicio": 12,
    "fim": 22,
    "valortotal": 392,
    "observacao": "Observação 34",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833cd3"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 50",
    "funcionario": "Funcionário 41",
    "data": {
      "$date": {
        "$numberLong": "1684611636488"
      }
    },
    "inicio": 9,
    "fim": 22,
    "valortotal": 215,
    "observacao": "Observação 35",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833cd4"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 70",
    "funcionario": "Funcionário 38",
    "data": {
      "$date": {
        "$numberLong": "1684611636489"
      }
    },
    "inicio": 16,
    "fim": 22,
    "valortotal": 406,
    "observacao": "Observação 36",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833cd5"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 99",
    "funcionario": "Funcionário 20",
    "data": {
      "$date": {
        "$numberLong": "1684611636489"
      }
    },
    "inicio": 13,
    "fim": 22,
    "valortotal": 335,
    "observacao": "Observação 37",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833cd6"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 67",
    "funcionario": "Funcionário 37",
    "data": {
      "$date": {
        "$numberLong": "1684611636489"
      }
    },
    "inicio": 14,
    "fim": 21,
    "valortotal": 486,
    "observacao": "Observação 38",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833cd7"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 40",
    "funcionario": "Funcionário 9",
    "data": {
      "$date": {
        "$numberLong": "1684611636489"
      }
    },
    "inicio": 16,
    "fim": 21,
    "valortotal": 426,
    "observacao": "Observação 39",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833cd8"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 69",
    "funcionario": "Funcionário 49",
    "data": {
      "$date": {
        "$numberLong": "1684611636489"
      }
    },
    "inicio": 16,
    "fim": 22,
    "valortotal": 162,
    "observacao": "Observação 40",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833cd9"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 45",
    "funcionario": "Funcionário 2",
    "data": {
      "$date": {
        "$numberLong": "1684611636489"
      }
    },
    "inicio": 13,
    "fim": 19,
    "valortotal": 231,
    "observacao": "Observação 41",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833cda"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 10",
    "funcionario": "Funcionário 24",
    "data": {
      "$date": {
        "$numberLong": "1684611636490"
      }
    },
    "inicio": 16,
    "fim": 21,
    "valortotal": 240,
    "observacao": "Observação 42",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833cdb"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 100",
    "funcionario": "Funcionário 47",
    "data": {
      "$date": {
        "$numberLong": "1684611636490"
      }
    },
    "inicio": 11,
    "fim": 22,
    "valortotal": 428,
    "observacao": "Observação 43",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833cdc"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 72",
    "funcionario": "Funcionário 31",
    "data": {
      "$date": {
        "$numberLong": "1684611636490"
      }
    },
    "inicio": 15,
    "fim": 22,
    "valortotal": 375,
    "observacao": "Observação 44",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833cdd"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 99",
    "funcionario": "Funcionário 10",
    "data": {
      "$date": {
        "$numberLong": "1684611636490"
      }
    },
    "inicio": 11,
    "fim": 20,
    "valortotal": 355,
    "observacao": "Observação 45",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833cde"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 32",
    "funcionario": "Funcionário 18",
    "data": {
      "$date": {
        "$numberLong": "1684611636490"
      }
    },
    "inicio": 12,
    "fim": 21,
    "valortotal": 56,
    "observacao": "Observação 46",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833cdf"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 79",
    "funcionario": "Funcionário 21",
    "data": {
      "$date": {
        "$numberLong": "1684611636490"
      }
    },
    "inicio": 18,
    "fim": 22,
    "valortotal": 295,
    "observacao": "Observação 47",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ce0"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 54",
    "funcionario": "Funcionário 15",
    "data": {
      "$date": {
        "$numberLong": "1684611636491"
      }
    },
    "inicio": 13,
    "fim": 22,
    "valortotal": 414,
    "observacao": "Observação 48",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ce1"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 74",
    "funcionario": "Funcionário 50",
    "data": {
      "$date": {
        "$numberLong": "1684611636491"
      }
    },
    "inicio": 16,
    "fim": 19,
    "valortotal": 235,
    "observacao": "Observação 49",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ce2"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 86",
    "funcionario": "Funcionário 16",
    "data": {
      "$date": {
        "$numberLong": "1684611636491"
      }
    },
    "inicio": 13,
    "fim": 19,
    "valortotal": 288,
    "observacao": "Observação 50",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ce3"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 48",
    "funcionario": "Funcionário 4",
    "data": {
      "$date": {
        "$numberLong": "1684611636491"
      }
    },
    "inicio": 10,
    "fim": 20,
    "valortotal": 208,
    "observacao": "Observação 51",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ce4"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 83",
    "funcionario": "Funcionário 18",
    "data": {
      "$date": {
        "$numberLong": "1684611636491"
      }
    },
    "inicio": 18,
    "fim": 20,
    "valortotal": 171,
    "observacao": "Observação 52",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ce5"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 31",
    "funcionario": "Funcionário 12",
    "data": {
      "$date": {
        "$numberLong": "1684611636491"
      }
    },
    "inicio": 17,
    "fim": 19,
    "valortotal": 283,
    "observacao": "Observação 53",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ce6"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 2",
    "funcionario": "Funcionário 35",
    "data": {
      "$date": {
        "$numberLong": "1684611636491"
      }
    },
    "inicio": 11,
    "fim": 22,
    "valortotal": 350,
    "observacao": "Observação 54",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ce7"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 40",
    "funcionario": "Funcionário 44",
    "data": {
      "$date": {
        "$numberLong": "1684611636492"
      }
    },
    "inicio": 11,
    "fim": 22,
    "valortotal": 199,
    "observacao": "Observação 55",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ce8"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 93",
    "funcionario": "Funcionário 14",
    "data": {
      "$date": {
        "$numberLong": "1684611636492"
      }
    },
    "inicio": 17,
    "fim": 21,
    "valortotal": 62,
    "observacao": "Observação 56",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ce9"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 4",
    "funcionario": "Funcionário 19",
    "data": {
      "$date": {
        "$numberLong": "1684611636492"
      }
    },
    "inicio": 17,
    "fim": 21,
    "valortotal": 167,
    "observacao": "Observação 57",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833cea"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 35",
    "funcionario": "Funcionário 43",
    "data": {
      "$date": {
        "$numberLong": "1684611636492"
      }
    },
    "inicio": 16,
    "fim": 19,
    "valortotal": 301,
    "observacao": "Observação 58",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ceb"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 15",
    "funcionario": "Funcionário 21",
    "data": {
      "$date": {
        "$numberLong": "1684611636492"
      }
    },
    "inicio": 10,
    "fim": 20,
    "valortotal": 416,
    "observacao": "Observação 59",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833cec"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 80",
    "funcionario": "Funcionário 38",
    "data": {
      "$date": {
        "$numberLong": "1684611636492"
      }
    },
    "inicio": 12,
    "fim": 19,
    "valortotal": 402,
    "observacao": "Observação 60",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ced"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 37",
    "funcionario": "Funcionário 6",
    "data": {
      "$date": {
        "$numberLong": "1684611636492"
      }
    },
    "inicio": 12,
    "fim": 21,
    "valortotal": 441,
    "observacao": "Observação 61",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833cee"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 53",
    "funcionario": "Funcionário 50",
    "data": {
      "$date": {
        "$numberLong": "1684611636493"
      }
    },
    "inicio": 12,
    "fim": 20,
    "valortotal": 122,
    "observacao": "Observação 62",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833cef"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 97",
    "funcionario": "Funcionário 11",
    "data": {
      "$date": {
        "$numberLong": "1684611636493"
      }
    },
    "inicio": 8,
    "fim": 22,
    "valortotal": 244,
    "observacao": "Observação 63",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833cf0"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 96",
    "funcionario": "Funcionário 37",
    "data": {
      "$date": {
        "$numberLong": "1684611636493"
      }
    },
    "inicio": 9,
    "fim": 22,
    "valortotal": 466,
    "observacao": "Observação 64",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833cf1"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 3",
    "funcionario": "Funcionário 40",
    "data": {
      "$date": {
        "$numberLong": "1684611636493"
      }
    },
    "inicio": 16,
    "fim": 20,
    "valortotal": 382,
    "observacao": "Observação 65",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833cf2"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 99",
    "funcionario": "Funcionário 38",
    "data": {
      "$date": {
        "$numberLong": "1684611636494"
      }
    },
    "inicio": 8,
    "fim": 20,
    "valortotal": 66,
    "observacao": "Observação 66",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833cf3"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 43",
    "funcionario": "Funcionário 43",
    "data": {
      "$date": {
        "$numberLong": "1684611636494"
      }
    },
    "inicio": 13,
    "fim": 22,
    "valortotal": 367,
    "observacao": "Observação 67",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833cf4"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 82",
    "funcionario": "Funcionário 25",
    "data": {
      "$date": {
        "$numberLong": "1684611636494"
      }
    },
    "inicio": 10,
    "fim": 22,
    "valortotal": 488,
    "observacao": "Observação 68",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833cf5"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 76",
    "funcionario": "Funcionário 12",
    "data": {
      "$date": {
        "$numberLong": "1684611636494"
      }
    },
    "inicio": 15,
    "fim": 22,
    "valortotal": 364,
    "observacao": "Observação 69",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833cf6"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 42",
    "funcionario": "Funcionário 39",
    "data": {
      "$date": {
        "$numberLong": "1684611636494"
      }
    },
    "inicio": 11,
    "fim": 21,
    "valortotal": 372,
    "observacao": "Observação 70",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833cf7"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 21",
    "funcionario": "Funcionário 50",
    "data": {
      "$date": {
        "$numberLong": "1684611636494"
      }
    },
    "inicio": 12,
    "fim": 22,
    "valortotal": 176,
    "observacao": "Observação 71",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833cf8"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 15",
    "funcionario": "Funcionário 8",
    "data": {
      "$date": {
        "$numberLong": "1684611636495"
      }
    },
    "inicio": 9,
    "fim": 19,
    "valortotal": 485,
    "observacao": "Observação 72",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833cf9"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 53",
    "funcionario": "Funcionário 15",
    "data": {
      "$date": {
        "$numberLong": "1684611636495"
      }
    },
    "inicio": 17,
    "fim": 20,
    "valortotal": 191,
    "observacao": "Observação 73",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833cfa"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 30",
    "funcionario": "Funcionário 39",
    "data": {
      "$date": {
        "$numberLong": "1684611636495"
      }
    },
    "inicio": 14,
    "fim": 21,
    "valortotal": 420,
    "observacao": "Observação 74",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833cfb"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 80",
    "funcionario": "Funcionário 1",
    "data": {
      "$date": {
        "$numberLong": "1684611636495"
      }
    },
    "inicio": 8,
    "fim": 22,
    "valortotal": 203,
    "observacao": "Observação 75",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833cfc"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 65",
    "funcionario": "Funcionário 36",
    "data": {
      "$date": {
        "$numberLong": "1684611636495"
      }
    },
    "inicio": 12,
    "fim": 20,
    "valortotal": 88,
    "observacao": "Observação 76",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833cfd"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 19",
    "funcionario": "Funcionário 23",
    "data": {
      "$date": {
        "$numberLong": "1684611636495"
      }
    },
    "inicio": 16,
    "fim": 22,
    "valortotal": 331,
    "observacao": "Observação 77",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833cfe"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 81",
    "funcionario": "Funcionário 13",
    "data": {
      "$date": {
        "$numberLong": "1684611636495"
      }
    },
    "inicio": 13,
    "fim": 19,
    "valortotal": 278,
    "observacao": "Observação 78",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833cff"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 82",
    "funcionario": "Funcionário 22",
    "data": {
      "$date": {
        "$numberLong": "1684611636496"
      }
    },
    "inicio": 18,
    "fim": 20,
    "valortotal": 220,
    "observacao": "Observação 79",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d00"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 58",
    "funcionario": "Funcionário 32",
    "data": {
      "$date": {
        "$numberLong": "1684611636496"
      }
    },
    "inicio": 9,
    "fim": 20,
    "valortotal": 288,
    "observacao": "Observação 80",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d01"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 7",
    "funcionario": "Funcionário 19",
    "data": {
      "$date": {
        "$numberLong": "1684611636496"
      }
    },
    "inicio": 9,
    "fim": 22,
    "valortotal": 56,
    "observacao": "Observação 81",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d02"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 24",
    "funcionario": "Funcionário 16",
    "data": {
      "$date": {
        "$numberLong": "1684611636496"
      }
    },
    "inicio": 8,
    "fim": 21,
    "valortotal": 412,
    "observacao": "Observação 82",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d03"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 95",
    "funcionario": "Funcionário 33",
    "data": {
      "$date": {
        "$numberLong": "1684611636496"
      }
    },
    "inicio": 13,
    "fim": 20,
    "valortotal": 235,
    "observacao": "Observação 83",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d04"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 27",
    "funcionario": "Funcionário 8",
    "data": {
      "$date": {
        "$numberLong": "1684611636496"
      }
    },
    "inicio": 11,
    "fim": 19,
    "valortotal": 74,
    "observacao": "Observação 84",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d05"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 41",
    "funcionario": "Funcionário 42",
    "data": {
      "$date": {
        "$numberLong": "1684611636496"
      }
    },
    "inicio": 9,
    "fim": 21,
    "valortotal": 191,
    "observacao": "Observação 85",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d06"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 25",
    "funcionario": "Funcionário 9",
    "data": {
      "$date": {
        "$numberLong": "1684611636497"
      }
    },
    "inicio": 10,
    "fim": 22,
    "valortotal": 336,
    "observacao": "Observação 86",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d07"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 81",
    "funcionario": "Funcionário 39",
    "data": {
      "$date": {
        "$numberLong": "1684611636497"
      }
    },
    "inicio": 10,
    "fim": 20,
    "valortotal": 452,
    "observacao": "Observação 87",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d08"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 62",
    "funcionario": "Funcionário 6",
    "data": {
      "$date": {
        "$numberLong": "1684611636497"
      }
    },
    "inicio": 13,
    "fim": 20,
    "valortotal": 362,
    "observacao": "Observação 88",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d09"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 83",
    "funcionario": "Funcionário 17",
    "data": {
      "$date": {
        "$numberLong": "1684611636497"
      }
    },
    "inicio": 14,
    "fim": 22,
    "valortotal": 152,
    "observacao": "Observação 89",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d0a"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 74",
    "funcionario": "Funcionário 36",
    "data": {
      "$date": {
        "$numberLong": "1684611636497"
      }
    },
    "inicio": 17,
    "fim": 22,
    "valortotal": 195,
    "observacao": "Observação 90",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d0b"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 1",
    "funcionario": "Funcionário 27",
    "data": {
      "$date": {
        "$numberLong": "1684611636497"
      }
    },
    "inicio": 13,
    "fim": 20,
    "valortotal": 251,
    "observacao": "Observação 91",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d0c"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 20",
    "funcionario": "Funcionário 3",
    "data": {
      "$date": {
        "$numberLong": "1684611636497"
      }
    },
    "inicio": 11,
    "fim": 20,
    "valortotal": 264,
    "observacao": "Observação 92",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d0d"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 47",
    "funcionario": "Funcionário 47",
    "data": {
      "$date": {
        "$numberLong": "1684611636498"
      }
    },
    "inicio": 12,
    "fim": 22,
    "valortotal": 66,
    "observacao": "Observação 93",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d0e"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 86",
    "funcionario": "Funcionário 8",
    "data": {
      "$date": {
        "$numberLong": "1684611636498"
      }
    },
    "inicio": 13,
    "fim": 20,
    "valortotal": 106,
    "observacao": "Observação 94",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d0f"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 94",
    "funcionario": "Funcionário 4",
    "data": {
      "$date": {
        "$numberLong": "1684611636498"
      }
    },
    "inicio": 17,
    "fim": 20,
    "valortotal": 71,
    "observacao": "Observação 95",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d10"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 49",
    "funcionario": "Funcionário 42",
    "data": {
      "$date": {
        "$numberLong": "1684611636498"
      }
    },
    "inicio": 9,
    "fim": 19,
    "valortotal": 487,
    "observacao": "Observação 96",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d11"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 46",
    "funcionario": "Funcionário 23",
    "data": {
      "$date": {
        "$numberLong": "1684611636498"
      }
    },
    "inicio": 16,
    "fim": 22,
    "valortotal": 383,
    "observacao": "Observação 97",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d12"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 73",
    "funcionario": "Funcionário 31",
    "data": {
      "$date": {
        "$numberLong": "1684611636498"
      }
    },
    "inicio": 15,
    "fim": 20,
    "valortotal": 205,
    "observacao": "Observação 98",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d13"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 7",
    "funcionario": "Funcionário 23",
    "data": {
      "$date": {
        "$numberLong": "1684611636498"
      }
    },
    "inicio": 17,
    "fim": 21,
    "valortotal": 378,
    "observacao": "Observação 99",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d14"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 22",
    "funcionario": "Funcionário 46",
    "data": {
      "$date": {
        "$numberLong": "1684611636498"
      }
    },
    "inicio": 14,
    "fim": 21,
    "valortotal": 185,
    "observacao": "Observação 100",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d15"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 17",
    "funcionario": "Funcionário 39",
    "data": {
      "$date": {
        "$numberLong": "1684611636499"
      }
    },
    "inicio": 18,
    "fim": 20,
    "valortotal": 147,
    "observacao": "Observação 101",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d16"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 19",
    "funcionario": "Funcionário 16",
    "data": {
      "$date": {
        "$numberLong": "1684611636499"
      }
    },
    "inicio": 18,
    "fim": 20,
    "valortotal": 413,
    "observacao": "Observação 102",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d17"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 22",
    "funcionario": "Funcionário 17",
    "data": {
      "$date": {
        "$numberLong": "1684611636499"
      }
    },
    "inicio": 15,
    "fim": 21,
    "valortotal": 354,
    "observacao": "Observação 103",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d18"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 89",
    "funcionario": "Funcionário 20",
    "data": {
      "$date": {
        "$numberLong": "1684611636499"
      }
    },
    "inicio": 16,
    "fim": 19,
    "valortotal": 246,
    "observacao": "Observação 104",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d19"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 96",
    "funcionario": "Funcionário 27",
    "data": {
      "$date": {
        "$numberLong": "1684611636499"
      }
    },
    "inicio": 9,
    "fim": 22,
    "valortotal": 490,
    "observacao": "Observação 105",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d1a"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 46",
    "funcionario": "Funcionário 41",
    "data": {
      "$date": {
        "$numberLong": "1684611636499"
      }
    },
    "inicio": 8,
    "fim": 19,
    "valortotal": 247,
    "observacao": "Observação 106",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d1b"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 76",
    "funcionario": "Funcionário 33",
    "data": {
      "$date": {
        "$numberLong": "1684611636499"
      }
    },
    "inicio": 17,
    "fim": 22,
    "valortotal": 289,
    "observacao": "Observação 107",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d1c"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 50",
    "funcionario": "Funcionário 38",
    "data": {
      "$date": {
        "$numberLong": "1684611636500"
      }
    },
    "inicio": 13,
    "fim": 20,
    "valortotal": 457,
    "observacao": "Observação 108",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d1d"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 43",
    "funcionario": "Funcionário 39",
    "data": {
      "$date": {
        "$numberLong": "1684611636500"
      }
    },
    "inicio": 8,
    "fim": 21,
    "valortotal": 195,
    "observacao": "Observação 109",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d1e"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 75",
    "funcionario": "Funcionário 46",
    "data": {
      "$date": {
        "$numberLong": "1684611636500"
      }
    },
    "inicio": 11,
    "fim": 21,
    "valortotal": 85,
    "observacao": "Observação 110",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d1f"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 58",
    "funcionario": "Funcionário 47",
    "data": {
      "$date": {
        "$numberLong": "1684611636500"
      }
    },
    "inicio": 15,
    "fim": 21,
    "valortotal": 163,
    "observacao": "Observação 111",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d20"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 50",
    "funcionario": "Funcionário 9",
    "data": {
      "$date": {
        "$numberLong": "1684611636500"
      }
    },
    "inicio": 15,
    "fim": 21,
    "valortotal": 430,
    "observacao": "Observação 112",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d21"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 61",
    "funcionario": "Funcionário 21",
    "data": {
      "$date": {
        "$numberLong": "1684611636500"
      }
    },
    "inicio": 15,
    "fim": 20,
    "valortotal": 411,
    "observacao": "Observação 113",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d22"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 6",
    "funcionario": "Funcionário 21",
    "data": {
      "$date": {
        "$numberLong": "1684611636500"
      }
    },
    "inicio": 16,
    "fim": 19,
    "valortotal": 52,
    "observacao": "Observação 114",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d23"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 76",
    "funcionario": "Funcionário 37",
    "data": {
      "$date": {
        "$numberLong": "1684611636500"
      }
    },
    "inicio": 10,
    "fim": 20,
    "valortotal": 229,
    "observacao": "Observação 115",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d24"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 72",
    "funcionario": "Funcionário 33",
    "data": {
      "$date": {
        "$numberLong": "1684611636501"
      }
    },
    "inicio": 18,
    "fim": 20,
    "valortotal": 216,
    "observacao": "Observação 116",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d25"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 100",
    "funcionario": "Funcionário 50",
    "data": {
      "$date": {
        "$numberLong": "1684611636501"
      }
    },
    "inicio": 18,
    "fim": 21,
    "valortotal": 346,
    "observacao": "Observação 117",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d26"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 4",
    "funcionario": "Funcionário 46",
    "data": {
      "$date": {
        "$numberLong": "1684611636501"
      }
    },
    "inicio": 17,
    "fim": 21,
    "valortotal": 250,
    "observacao": "Observação 118",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d27"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 61",
    "funcionario": "Funcionário 42",
    "data": {
      "$date": {
        "$numberLong": "1684611636514"
      }
    },
    "inicio": 16,
    "fim": 21,
    "valortotal": 484,
    "observacao": "Observação 119",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d28"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 48",
    "funcionario": "Funcionário 17",
    "data": {
      "$date": {
        "$numberLong": "1684611636514"
      }
    },
    "inicio": 14,
    "fim": 22,
    "valortotal": 177,
    "observacao": "Observação 120",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d29"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 36",
    "funcionario": "Funcionário 35",
    "data": {
      "$date": {
        "$numberLong": "1684611636514"
      }
    },
    "inicio": 17,
    "fim": 19,
    "valortotal": 167,
    "observacao": "Observação 121",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d2a"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 4",
    "funcionario": "Funcionário 37",
    "data": {
      "$date": {
        "$numberLong": "1684611636514"
      }
    },
    "inicio": 17,
    "fim": 21,
    "valortotal": 108,
    "observacao": "Observação 122",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d2b"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 13",
    "funcionario": "Funcionário 12",
    "data": {
      "$date": {
        "$numberLong": "1684611636515"
      }
    },
    "inicio": 18,
    "fim": 22,
    "valortotal": 291,
    "observacao": "Observação 123",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d2c"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 65",
    "funcionario": "Funcionário 21",
    "data": {
      "$date": {
        "$numberLong": "1684611636515"
      }
    },
    "inicio": 11,
    "fim": 20,
    "valortotal": 202,
    "observacao": "Observação 124",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d2d"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 32",
    "funcionario": "Funcionário 1",
    "data": {
      "$date": {
        "$numberLong": "1684611636515"
      }
    },
    "inicio": 15,
    "fim": 21,
    "valortotal": 73,
    "observacao": "Observação 125",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d2e"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 66",
    "funcionario": "Funcionário 39",
    "data": {
      "$date": {
        "$numberLong": "1684611636515"
      }
    },
    "inicio": 16,
    "fim": 19,
    "valortotal": 299,
    "observacao": "Observação 126",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d2f"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 14",
    "funcionario": "Funcionário 11",
    "data": {
      "$date": {
        "$numberLong": "1684611636516"
      }
    },
    "inicio": 10,
    "fim": 19,
    "valortotal": 435,
    "observacao": "Observação 127",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d30"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 9",
    "funcionario": "Funcionário 30",
    "data": {
      "$date": {
        "$numberLong": "1684611636516"
      }
    },
    "inicio": 11,
    "fim": 22,
    "valortotal": 453,
    "observacao": "Observação 128",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d31"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 52",
    "funcionario": "Funcionário 17",
    "data": {
      "$date": {
        "$numberLong": "1684611636516"
      }
    },
    "inicio": 16,
    "fim": 22,
    "valortotal": 194,
    "observacao": "Observação 129",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d32"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 58",
    "funcionario": "Funcionário 19",
    "data": {
      "$date": {
        "$numberLong": "1684611636516"
      }
    },
    "inicio": 15,
    "fim": 22,
    "valortotal": 59,
    "observacao": "Observação 130",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d33"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 99",
    "funcionario": "Funcionário 40",
    "data": {
      "$date": {
        "$numberLong": "1684611636516"
      }
    },
    "inicio": 16,
    "fim": 19,
    "valortotal": 97,
    "observacao": "Observação 131",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d34"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 53",
    "funcionario": "Funcionário 9",
    "data": {
      "$date": {
        "$numberLong": "1684611636516"
      }
    },
    "inicio": 10,
    "fim": 22,
    "valortotal": 67,
    "observacao": "Observação 132",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d35"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 18",
    "funcionario": "Funcionário 49",
    "data": {
      "$date": {
        "$numberLong": "1684611636516"
      }
    },
    "inicio": 14,
    "fim": 22,
    "valortotal": 139,
    "observacao": "Observação 133",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d36"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 43",
    "funcionario": "Funcionário 10",
    "data": {
      "$date": {
        "$numberLong": "1684611636516"
      }
    },
    "inicio": 11,
    "fim": 22,
    "valortotal": 407,
    "observacao": "Observação 134",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d37"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 70",
    "funcionario": "Funcionário 8",
    "data": {
      "$date": {
        "$numberLong": "1684611636517"
      }
    },
    "inicio": 11,
    "fim": 22,
    "valortotal": 269,
    "observacao": "Observação 135",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d38"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 95",
    "funcionario": "Funcionário 34",
    "data": {
      "$date": {
        "$numberLong": "1684611636517"
      }
    },
    "inicio": 14,
    "fim": 20,
    "valortotal": 195,
    "observacao": "Observação 136",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d39"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 73",
    "funcionario": "Funcionário 6",
    "data": {
      "$date": {
        "$numberLong": "1684611636517"
      }
    },
    "inicio": 17,
    "fim": 21,
    "valortotal": 414,
    "observacao": "Observação 137",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d3a"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 14",
    "funcionario": "Funcionário 10",
    "data": {
      "$date": {
        "$numberLong": "1684611636517"
      }
    },
    "inicio": 10,
    "fim": 21,
    "valortotal": 314,
    "observacao": "Observação 138",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d3b"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 18",
    "funcionario": "Funcionário 38",
    "data": {
      "$date": {
        "$numberLong": "1684611636517"
      }
    },
    "inicio": 8,
    "fim": 19,
    "valortotal": 246,
    "observacao": "Observação 139",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d3c"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 54",
    "funcionario": "Funcionário 10",
    "data": {
      "$date": {
        "$numberLong": "1684611636517"
      }
    },
    "inicio": 18,
    "fim": 19,
    "valortotal": 294,
    "observacao": "Observação 140",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d3d"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 20",
    "funcionario": "Funcionário 42",
    "data": {
      "$date": {
        "$numberLong": "1684611636517"
      }
    },
    "inicio": 15,
    "fim": 19,
    "valortotal": 457,
    "observacao": "Observação 141",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d3e"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 74",
    "funcionario": "Funcionário 40",
    "data": {
      "$date": {
        "$numberLong": "1684611636517"
      }
    },
    "inicio": 17,
    "fim": 21,
    "valortotal": 182,
    "observacao": "Observação 142",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d3f"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 82",
    "funcionario": "Funcionário 5",
    "data": {
      "$date": {
        "$numberLong": "1684611636518"
      }
    },
    "inicio": 8,
    "fim": 19,
    "valortotal": 451,
    "observacao": "Observação 143",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d40"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 30",
    "funcionario": "Funcionário 13",
    "data": {
      "$date": {
        "$numberLong": "1684611636518"
      }
    },
    "inicio": 8,
    "fim": 22,
    "valortotal": 242,
    "observacao": "Observação 144",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d41"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 100",
    "funcionario": "Funcionário 9",
    "data": {
      "$date": {
        "$numberLong": "1684611636518"
      }
    },
    "inicio": 13,
    "fim": 22,
    "valortotal": 454,
    "observacao": "Observação 145",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d42"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 58",
    "funcionario": "Funcionário 13",
    "data": {
      "$date": {
        "$numberLong": "1684611636518"
      }
    },
    "inicio": 9,
    "fim": 22,
    "valortotal": 105,
    "observacao": "Observação 146",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d43"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 46",
    "funcionario": "Funcionário 19",
    "data": {
      "$date": {
        "$numberLong": "1684611636518"
      }
    },
    "inicio": 17,
    "fim": 22,
    "valortotal": 116,
    "observacao": "Observação 147",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d44"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 98",
    "funcionario": "Funcionário 8",
    "data": {
      "$date": {
        "$numberLong": "1684611636518"
      }
    },
    "inicio": 11,
    "fim": 19,
    "valortotal": 170,
    "observacao": "Observação 148",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d45"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 49",
    "funcionario": "Funcionário 29",
    "data": {
      "$date": {
        "$numberLong": "1684611636518"
      }
    },
    "inicio": 15,
    "fim": 22,
    "valortotal": 420,
    "observacao": "Observação 149",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d46"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 51",
    "funcionario": "Funcionário 47",
    "data": {
      "$date": {
        "$numberLong": "1684611636518"
      }
    },
    "inicio": 9,
    "fim": 22,
    "valortotal": 153,
    "observacao": "Observação 150",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d47"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 96",
    "funcionario": "Funcionário 11",
    "data": {
      "$date": {
        "$numberLong": "1684611636519"
      }
    },
    "inicio": 12,
    "fim": 20,
    "valortotal": 272,
    "observacao": "Observação 151",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d48"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 82",
    "funcionario": "Funcionário 3",
    "data": {
      "$date": {
        "$numberLong": "1684611636519"
      }
    },
    "inicio": 14,
    "fim": 20,
    "valortotal": 373,
    "observacao": "Observação 152",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d49"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 35",
    "funcionario": "Funcionário 1",
    "data": {
      "$date": {
        "$numberLong": "1684611636519"
      }
    },
    "inicio": 10,
    "fim": 20,
    "valortotal": 336,
    "observacao": "Observação 153",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d4a"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 11",
    "funcionario": "Funcionário 36",
    "data": {
      "$date": {
        "$numberLong": "1684611636519"
      }
    },
    "inicio": 10,
    "fim": 20,
    "valortotal": 106,
    "observacao": "Observação 154",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d4b"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 65",
    "funcionario": "Funcionário 39",
    "data": {
      "$date": {
        "$numberLong": "1684611636519"
      }
    },
    "inicio": 18,
    "fim": 20,
    "valortotal": 216,
    "observacao": "Observação 155",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d4c"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 55",
    "funcionario": "Funcionário 42",
    "data": {
      "$date": {
        "$numberLong": "1684611636519"
      }
    },
    "inicio": 13,
    "fim": 20,
    "valortotal": 444,
    "observacao": "Observação 156",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d4d"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 18",
    "funcionario": "Funcionário 48",
    "data": {
      "$date": {
        "$numberLong": "1684611636519"
      }
    },
    "inicio": 18,
    "fim": 20,
    "valortotal": 170,
    "observacao": "Observação 157",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d4e"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 57",
    "funcionario": "Funcionário 39",
    "data": {
      "$date": {
        "$numberLong": "1684611636519"
      }
    },
    "inicio": 9,
    "fim": 21,
    "valortotal": 396,
    "observacao": "Observação 158",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d4f"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 4",
    "funcionario": "Funcionário 13",
    "data": {
      "$date": {
        "$numberLong": "1684611636520"
      }
    },
    "inicio": 13,
    "fim": 22,
    "valortotal": 118,
    "observacao": "Observação 159",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d50"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 34",
    "funcionario": "Funcionário 50",
    "data": {
      "$date": {
        "$numberLong": "1684611636520"
      }
    },
    "inicio": 8,
    "fim": 20,
    "valortotal": 411,
    "observacao": "Observação 160",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d51"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 32",
    "funcionario": "Funcionário 1",
    "data": {
      "$date": {
        "$numberLong": "1684611636520"
      }
    },
    "inicio": 13,
    "fim": 22,
    "valortotal": 287,
    "observacao": "Observação 161",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d52"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 76",
    "funcionario": "Funcionário 23",
    "data": {
      "$date": {
        "$numberLong": "1684611636520"
      }
    },
    "inicio": 16,
    "fim": 20,
    "valortotal": 50,
    "observacao": "Observação 162",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d53"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 85",
    "funcionario": "Funcionário 46",
    "data": {
      "$date": {
        "$numberLong": "1684611636520"
      }
    },
    "inicio": 14,
    "fim": 19,
    "valortotal": 101,
    "observacao": "Observação 163",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d54"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 76",
    "funcionario": "Funcionário 31",
    "data": {
      "$date": {
        "$numberLong": "1684611636520"
      }
    },
    "inicio": 13,
    "fim": 20,
    "valortotal": 130,
    "observacao": "Observação 164",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d55"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 70",
    "funcionario": "Funcionário 21",
    "data": {
      "$date": {
        "$numberLong": "1684611636520"
      }
    },
    "inicio": 15,
    "fim": 20,
    "valortotal": 179,
    "observacao": "Observação 165",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d56"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 19",
    "funcionario": "Funcionário 20",
    "data": {
      "$date": {
        "$numberLong": "1684611636520"
      }
    },
    "inicio": 16,
    "fim": 19,
    "valortotal": 401,
    "observacao": "Observação 166",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d57"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 22",
    "funcionario": "Funcionário 15",
    "data": {
      "$date": {
        "$numberLong": "1684611636521"
      }
    },
    "inicio": 17,
    "fim": 20,
    "valortotal": 182,
    "observacao": "Observação 167",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d58"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 90",
    "funcionario": "Funcionário 44",
    "data": {
      "$date": {
        "$numberLong": "1684611636521"
      }
    },
    "inicio": 18,
    "fim": 22,
    "valortotal": 114,
    "observacao": "Observação 168",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d59"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 85",
    "funcionario": "Funcionário 16",
    "data": {
      "$date": {
        "$numberLong": "1684611636521"
      }
    },
    "inicio": 17,
    "fim": 22,
    "valortotal": 288,
    "observacao": "Observação 169",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d5a"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 98",
    "funcionario": "Funcionário 23",
    "data": {
      "$date": {
        "$numberLong": "1684611636521"
      }
    },
    "inicio": 17,
    "fim": 22,
    "valortotal": 460,
    "observacao": "Observação 170",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d5b"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 77",
    "funcionario": "Funcionário 10",
    "data": {
      "$date": {
        "$numberLong": "1684611636521"
      }
    },
    "inicio": 15,
    "fim": 20,
    "valortotal": 277,
    "observacao": "Observação 171",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d5c"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 90",
    "funcionario": "Funcionário 22",
    "data": {
      "$date": {
        "$numberLong": "1684611636521"
      }
    },
    "inicio": 12,
    "fim": 20,
    "valortotal": 219,
    "observacao": "Observação 172",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d5d"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 62",
    "funcionario": "Funcionário 10",
    "data": {
      "$date": {
        "$numberLong": "1684611636521"
      }
    },
    "inicio": 11,
    "fim": 21,
    "valortotal": 491,
    "observacao": "Observação 173",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d5e"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 83",
    "funcionario": "Funcionário 28",
    "data": {
      "$date": {
        "$numberLong": "1684611636521"
      }
    },
    "inicio": 16,
    "fim": 22,
    "valortotal": 407,
    "observacao": "Observação 174",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d5f"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 93",
    "funcionario": "Funcionário 35",
    "data": {
      "$date": {
        "$numberLong": "1684611636522"
      }
    },
    "inicio": 14,
    "fim": 20,
    "valortotal": 204,
    "observacao": "Observação 175",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d60"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 80",
    "funcionario": "Funcionário 5",
    "data": {
      "$date": {
        "$numberLong": "1684611636522"
      }
    },
    "inicio": 15,
    "fim": 20,
    "valortotal": 410,
    "observacao": "Observação 176",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d61"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 1",
    "funcionario": "Funcionário 16",
    "data": {
      "$date": {
        "$numberLong": "1684611636522"
      }
    },
    "inicio": 11,
    "fim": 19,
    "valortotal": 378,
    "observacao": "Observação 177",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d62"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 38",
    "funcionario": "Funcionário 26",
    "data": {
      "$date": {
        "$numberLong": "1684611636522"
      }
    },
    "inicio": 14,
    "fim": 20,
    "valortotal": 370,
    "observacao": "Observação 178",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d63"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 45",
    "funcionario": "Funcionário 27",
    "data": {
      "$date": {
        "$numberLong": "1684611636522"
      }
    },
    "inicio": 10,
    "fim": 21,
    "valortotal": 209,
    "observacao": "Observação 179",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d64"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 66",
    "funcionario": "Funcionário 22",
    "data": {
      "$date": {
        "$numberLong": "1684611636522"
      }
    },
    "inicio": 10,
    "fim": 21,
    "valortotal": 95,
    "observacao": "Observação 180",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d65"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 86",
    "funcionario": "Funcionário 5",
    "data": {
      "$date": {
        "$numberLong": "1684611636522"
      }
    },
    "inicio": 12,
    "fim": 19,
    "valortotal": 453,
    "observacao": "Observação 181",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d66"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 41",
    "funcionario": "Funcionário 7",
    "data": {
      "$date": {
        "$numberLong": "1684611636522"
      }
    },
    "inicio": 10,
    "fim": 19,
    "valortotal": 404,
    "observacao": "Observação 182",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d67"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 87",
    "funcionario": "Funcionário 30",
    "data": {
      "$date": {
        "$numberLong": "1684611636522"
      }
    },
    "inicio": 10,
    "fim": 22,
    "valortotal": 419,
    "observacao": "Observação 183",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d68"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 47",
    "funcionario": "Funcionário 21",
    "data": {
      "$date": {
        "$numberLong": "1684611636523"
      }
    },
    "inicio": 15,
    "fim": 19,
    "valortotal": 373,
    "observacao": "Observação 184",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d69"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 52",
    "funcionario": "Funcionário 35",
    "data": {
      "$date": {
        "$numberLong": "1684611636523"
      }
    },
    "inicio": 10,
    "fim": 21,
    "valortotal": 489,
    "observacao": "Observação 185",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d6a"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 21",
    "funcionario": "Funcionário 24",
    "data": {
      "$date": {
        "$numberLong": "1684611636525"
      }
    },
    "inicio": 18,
    "fim": 20,
    "valortotal": 490,
    "observacao": "Observação 186",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d6b"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 57",
    "funcionario": "Funcionário 12",
    "data": {
      "$date": {
        "$numberLong": "1684611636525"
      }
    },
    "inicio": 11,
    "fim": 19,
    "valortotal": 65,
    "observacao": "Observação 187",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d6c"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 80",
    "funcionario": "Funcionário 32",
    "data": {
      "$date": {
        "$numberLong": "1684611636526"
      }
    },
    "inicio": 15,
    "fim": 19,
    "valortotal": 332,
    "observacao": "Observação 188",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d6d"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 66",
    "funcionario": "Funcionário 23",
    "data": {
      "$date": {
        "$numberLong": "1684611636526"
      }
    },
    "inicio": 10,
    "fim": 21,
    "valortotal": 329,
    "observacao": "Observação 189",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d6e"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 46",
    "funcionario": "Funcionário 3",
    "data": {
      "$date": {
        "$numberLong": "1684611636526"
      }
    },
    "inicio": 18,
    "fim": 22,
    "valortotal": 440,
    "observacao": "Observação 190",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d6f"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 31",
    "funcionario": "Funcionário 9",
    "data": {
      "$date": {
        "$numberLong": "1684611636526"
      }
    },
    "inicio": 10,
    "fim": 22,
    "valortotal": 112,
    "observacao": "Observação 191",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d70"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 85",
    "funcionario": "Funcionário 31",
    "data": {
      "$date": {
        "$numberLong": "1684611636526"
      }
    },
    "inicio": 8,
    "fim": 21,
    "valortotal": 345,
    "observacao": "Observação 192",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d71"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 59",
    "funcionario": "Funcionário 8",
    "data": {
      "$date": {
        "$numberLong": "1684611636526"
      }
    },
    "inicio": 18,
    "fim": 21,
    "valortotal": 433,
    "observacao": "Observação 193",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d72"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 93",
    "funcionario": "Funcionário 33",
    "data": {
      "$date": {
        "$numberLong": "1684611636527"
      }
    },
    "inicio": 13,
    "fim": 21,
    "valortotal": 274,
    "observacao": "Observação 194",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d73"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 99",
    "funcionario": "Funcionário 6",
    "data": {
      "$date": {
        "$numberLong": "1684611636527"
      }
    },
    "inicio": 18,
    "fim": 22,
    "valortotal": 146,
    "observacao": "Observação 195",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d74"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 86",
    "funcionario": "Funcionário 13",
    "data": {
      "$date": {
        "$numberLong": "1684611636527"
      }
    },
    "inicio": 16,
    "fim": 22,
    "valortotal": 439,
    "observacao": "Observação 196",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d75"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 93",
    "funcionario": "Funcionário 26",
    "data": {
      "$date": {
        "$numberLong": "1684611636527"
      }
    },
    "inicio": 8,
    "fim": 19,
    "valortotal": 277,
    "observacao": "Observação 197",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d76"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 36",
    "funcionario": "Funcionário 42",
    "data": {
      "$date": {
        "$numberLong": "1684611636527"
      }
    },
    "inicio": 14,
    "fim": 22,
    "valortotal": 344,
    "observacao": "Observação 198",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d77"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 57",
    "funcionario": "Funcionário 32",
    "data": {
      "$date": {
        "$numberLong": "1684611636527"
      }
    },
    "inicio": 14,
    "fim": 19,
    "valortotal": 318,
    "observacao": "Observação 199",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d78"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 63",
    "funcionario": "Funcionário 12",
    "data": {
      "$date": {
        "$numberLong": "1684611636528"
      }
    },
    "inicio": 18,
    "fim": 20,
    "valortotal": 324,
    "observacao": "Observação 200",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d79"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 5",
    "funcionario": "Funcionário 20",
    "data": {
      "$date": {
        "$numberLong": "1684611636528"
      }
    },
    "inicio": 10,
    "fim": 20,
    "valortotal": 459,
    "observacao": "Observação 201",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d7a"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 11",
    "funcionario": "Funcionário 45",
    "data": {
      "$date": {
        "$numberLong": "1684611636528"
      }
    },
    "inicio": 9,
    "fim": 21,
    "valortotal": 226,
    "observacao": "Observação 202",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d7b"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 48",
    "funcionario": "Funcionário 38",
    "data": {
      "$date": {
        "$numberLong": "1684611636528"
      }
    },
    "inicio": 16,
    "fim": 22,
    "valortotal": 383,
    "observacao": "Observação 203",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d7c"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 16",
    "funcionario": "Funcionário 18",
    "data": {
      "$date": {
        "$numberLong": "1684611636528"
      }
    },
    "inicio": 15,
    "fim": 21,
    "valortotal": 73,
    "observacao": "Observação 204",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d7d"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 5",
    "funcionario": "Funcionário 22",
    "data": {
      "$date": {
        "$numberLong": "1684611636528"
      }
    },
    "inicio": 13,
    "fim": 22,
    "valortotal": 130,
    "observacao": "Observação 205",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d7e"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 100",
    "funcionario": "Funcionário 16",
    "data": {
      "$date": {
        "$numberLong": "1684611636528"
      }
    },
    "inicio": 17,
    "fim": 22,
    "valortotal": 389,
    "observacao": "Observação 206",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d7f"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 36",
    "funcionario": "Funcionário 18",
    "data": {
      "$date": {
        "$numberLong": "1684611636529"
      }
    },
    "inicio": 8,
    "fim": 20,
    "valortotal": 407,
    "observacao": "Observação 207",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d80"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 23",
    "funcionario": "Funcionário 37",
    "data": {
      "$date": {
        "$numberLong": "1684611636529"
      }
    },
    "inicio": 18,
    "fim": 22,
    "valortotal": 202,
    "observacao": "Observação 208",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d81"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 8",
    "funcionario": "Funcionário 9",
    "data": {
      "$date": {
        "$numberLong": "1684611636529"
      }
    },
    "inicio": 8,
    "fim": 22,
    "valortotal": 251,
    "observacao": "Observação 209",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d82"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 7",
    "funcionario": "Funcionário 36",
    "data": {
      "$date": {
        "$numberLong": "1684611636529"
      }
    },
    "inicio": 17,
    "fim": 20,
    "valortotal": 404,
    "observacao": "Observação 210",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d83"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 98",
    "funcionario": "Funcionário 20",
    "data": {
      "$date": {
        "$numberLong": "1684611636529"
      }
    },
    "inicio": 11,
    "fim": 21,
    "valortotal": 156,
    "observacao": "Observação 211",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d84"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 5",
    "funcionario": "Funcionário 24",
    "data": {
      "$date": {
        "$numberLong": "1684611636529"
      }
    },
    "inicio": 18,
    "fim": 20,
    "valortotal": 194,
    "observacao": "Observação 212",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d85"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 89",
    "funcionario": "Funcionário 5",
    "data": {
      "$date": {
        "$numberLong": "1684611636529"
      }
    },
    "inicio": 9,
    "fim": 21,
    "valortotal": 462,
    "observacao": "Observação 213",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d86"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 12",
    "funcionario": "Funcionário 6",
    "data": {
      "$date": {
        "$numberLong": "1684611636530"
      }
    },
    "inicio": 9,
    "fim": 20,
    "valortotal": 405,
    "observacao": "Observação 214",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d87"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 62",
    "funcionario": "Funcionário 26",
    "data": {
      "$date": {
        "$numberLong": "1684611636530"
      }
    },
    "inicio": 13,
    "fim": 19,
    "valortotal": 380,
    "observacao": "Observação 215",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d88"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 40",
    "funcionario": "Funcionário 3",
    "data": {
      "$date": {
        "$numberLong": "1684611636530"
      }
    },
    "inicio": 13,
    "fim": 21,
    "valortotal": 266,
    "observacao": "Observação 216",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d89"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 7",
    "funcionario": "Funcionário 42",
    "data": {
      "$date": {
        "$numberLong": "1684611636530"
      }
    },
    "inicio": 14,
    "fim": 21,
    "valortotal": 245,
    "observacao": "Observação 217",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d8a"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 92",
    "funcionario": "Funcionário 13",
    "data": {
      "$date": {
        "$numberLong": "1684611636530"
      }
    },
    "inicio": 14,
    "fim": 22,
    "valortotal": 171,
    "observacao": "Observação 218",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d8b"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 80",
    "funcionario": "Funcionário 12",
    "data": {
      "$date": {
        "$numberLong": "1684611636530"
      }
    },
    "inicio": 14,
    "fim": 19,
    "valortotal": 382,
    "observacao": "Observação 219",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d8c"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 36",
    "funcionario": "Funcionário 49",
    "data": {
      "$date": {
        "$numberLong": "1684611636531"
      }
    },
    "inicio": 16,
    "fim": 20,
    "valortotal": 392,
    "observacao": "Observação 220",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d8d"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 99",
    "funcionario": "Funcionário 47",
    "data": {
      "$date": {
        "$numberLong": "1684611636531"
      }
    },
    "inicio": 12,
    "fim": 21,
    "valortotal": 90,
    "observacao": "Observação 221",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d8e"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 46",
    "funcionario": "Funcionário 22",
    "data": {
      "$date": {
        "$numberLong": "1684611636531"
      }
    },
    "inicio": 10,
    "fim": 21,
    "valortotal": 246,
    "observacao": "Observação 222",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d8f"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 65",
    "funcionario": "Funcionário 14",
    "data": {
      "$date": {
        "$numberLong": "1684611636531"
      }
    },
    "inicio": 12,
    "fim": 19,
    "valortotal": 445,
    "observacao": "Observação 223",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d90"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 39",
    "funcionario": "Funcionário 33",
    "data": {
      "$date": {
        "$numberLong": "1684611636531"
      }
    },
    "inicio": 8,
    "fim": 22,
    "valortotal": 133,
    "observacao": "Observação 224",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d91"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 78",
    "funcionario": "Funcionário 6",
    "data": {
      "$date": {
        "$numberLong": "1684611636531"
      }
    },
    "inicio": 9,
    "fim": 19,
    "valortotal": 287,
    "observacao": "Observação 225",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d92"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 60",
    "funcionario": "Funcionário 38",
    "data": {
      "$date": {
        "$numberLong": "1684611636531"
      }
    },
    "inicio": 17,
    "fim": 21,
    "valortotal": 189,
    "observacao": "Observação 226",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d93"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 46",
    "funcionario": "Funcionário 47",
    "data": {
      "$date": {
        "$numberLong": "1684611636531"
      }
    },
    "inicio": 12,
    "fim": 20,
    "valortotal": 94,
    "observacao": "Observação 227",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d94"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 27",
    "funcionario": "Funcionário 48",
    "data": {
      "$date": {
        "$numberLong": "1684611636532"
      }
    },
    "inicio": 15,
    "fim": 20,
    "valortotal": 329,
    "observacao": "Observação 228",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d95"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 80",
    "funcionario": "Funcionário 50",
    "data": {
      "$date": {
        "$numberLong": "1684611636532"
      }
    },
    "inicio": 8,
    "fim": 22,
    "valortotal": 181,
    "observacao": "Observação 229",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d96"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 73",
    "funcionario": "Funcionário 2",
    "data": {
      "$date": {
        "$numberLong": "1684611636532"
      }
    },
    "inicio": 12,
    "fim": 21,
    "valortotal": 440,
    "observacao": "Observação 230",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d97"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 8",
    "funcionario": "Funcionário 30",
    "data": {
      "$date": {
        "$numberLong": "1684611636532"
      }
    },
    "inicio": 15,
    "fim": 20,
    "valortotal": 448,
    "observacao": "Observação 231",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d98"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 20",
    "funcionario": "Funcionário 35",
    "data": {
      "$date": {
        "$numberLong": "1684611636532"
      }
    },
    "inicio": 16,
    "fim": 19,
    "valortotal": 60,
    "observacao": "Observação 232",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d99"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 53",
    "funcionario": "Funcionário 22",
    "data": {
      "$date": {
        "$numberLong": "1684611636532"
      }
    },
    "inicio": 14,
    "fim": 21,
    "valortotal": 356,
    "observacao": "Observação 233",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d9a"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 88",
    "funcionario": "Funcionário 23",
    "data": {
      "$date": {
        "$numberLong": "1684611636533"
      }
    },
    "inicio": 10,
    "fim": 19,
    "valortotal": 332,
    "observacao": "Observação 234",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d9b"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 91",
    "funcionario": "Funcionário 23",
    "data": {
      "$date": {
        "$numberLong": "1684611636533"
      }
    },
    "inicio": 17,
    "fim": 21,
    "valortotal": 63,
    "observacao": "Observação 235",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d9c"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 26",
    "funcionario": "Funcionário 32",
    "data": {
      "$date": {
        "$numberLong": "1684611636533"
      }
    },
    "inicio": 17,
    "fim": 21,
    "valortotal": 331,
    "observacao": "Observação 236",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d9d"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 4",
    "funcionario": "Funcionário 24",
    "data": {
      "$date": {
        "$numberLong": "1684611636533"
      }
    },
    "inicio": 8,
    "fim": 22,
    "valortotal": 251,
    "observacao": "Observação 237",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d9e"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 100",
    "funcionario": "Funcionário 25",
    "data": {
      "$date": {
        "$numberLong": "1684611636533"
      }
    },
    "inicio": 9,
    "fim": 21,
    "valortotal": 215,
    "observacao": "Observação 238",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833d9f"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 6",
    "funcionario": "Funcionário 7",
    "data": {
      "$date": {
        "$numberLong": "1684611636534"
      }
    },
    "inicio": 14,
    "fim": 21,
    "valortotal": 251,
    "observacao": "Observação 239",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833da0"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 31",
    "funcionario": "Funcionário 38",
    "data": {
      "$date": {
        "$numberLong": "1684611636534"
      }
    },
    "inicio": 11,
    "fim": 22,
    "valortotal": 184,
    "observacao": "Observação 240",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833da1"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 88",
    "funcionario": "Funcionário 2",
    "data": {
      "$date": {
        "$numberLong": "1684611636534"
      }
    },
    "inicio": 12,
    "fim": 19,
    "valortotal": 216,
    "observacao": "Observação 241",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833da2"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 6",
    "funcionario": "Funcionário 41",
    "data": {
      "$date": {
        "$numberLong": "1684611636534"
      }
    },
    "inicio": 17,
    "fim": 22,
    "valortotal": 166,
    "observacao": "Observação 242",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833da3"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 51",
    "funcionario": "Funcionário 11",
    "data": {
      "$date": {
        "$numberLong": "1684611636534"
      }
    },
    "inicio": 17,
    "fim": 21,
    "valortotal": 379,
    "observacao": "Observação 243",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833da4"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 41",
    "funcionario": "Funcionário 3",
    "data": {
      "$date": {
        "$numberLong": "1684611636534"
      }
    },
    "inicio": 15,
    "fim": 20,
    "valortotal": 363,
    "observacao": "Observação 244",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833da5"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 88",
    "funcionario": "Funcionário 35",
    "data": {
      "$date": {
        "$numberLong": "1684611636534"
      }
    },
    "inicio": 17,
    "fim": 21,
    "valortotal": 421,
    "observacao": "Observação 245",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833da6"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 52",
    "funcionario": "Funcionário 18",
    "data": {
      "$date": {
        "$numberLong": "1684611636534"
      }
    },
    "inicio": 15,
    "fim": 19,
    "valortotal": 269,
    "observacao": "Observação 246",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833da7"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 49",
    "funcionario": "Funcionário 18",
    "data": {
      "$date": {
        "$numberLong": "1684611636534"
      }
    },
    "inicio": 14,
    "fim": 19,
    "valortotal": 300,
    "observacao": "Observação 247",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833da8"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 99",
    "funcionario": "Funcionário 34",
    "data": {
      "$date": {
        "$numberLong": "1684611636534"
      }
    },
    "inicio": 8,
    "fim": 20,
    "valortotal": 470,
    "observacao": "Observação 248",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833da9"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 55",
    "funcionario": "Funcionário 27",
    "data": {
      "$date": {
        "$numberLong": "1684611636534"
      }
    },
    "inicio": 10,
    "fim": 22,
    "valortotal": 380,
    "observacao": "Observação 249",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833daa"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 85",
    "funcionario": "Funcionário 37",
    "data": {
      "$date": {
        "$numberLong": "1684611636535"
      }
    },
    "inicio": 13,
    "fim": 21,
    "valortotal": 459,
    "observacao": "Observação 250",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833dab"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 79",
    "funcionario": "Funcionário 28",
    "data": {
      "$date": {
        "$numberLong": "1684611636535"
      }
    },
    "inicio": 8,
    "fim": 20,
    "valortotal": 85,
    "observacao": "Observação 251",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833dac"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 10",
    "funcionario": "Funcionário 5",
    "data": {
      "$date": {
        "$numberLong": "1684611636535"
      }
    },
    "inicio": 12,
    "fim": 20,
    "valortotal": 277,
    "observacao": "Observação 252",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833dad"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 80",
    "funcionario": "Funcionário 14",
    "data": {
      "$date": {
        "$numberLong": "1684611636535"
      }
    },
    "inicio": 15,
    "fim": 21,
    "valortotal": 215,
    "observacao": "Observação 253",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833dae"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 47",
    "funcionario": "Funcionário 41",
    "data": {
      "$date": {
        "$numberLong": "1684611636535"
      }
    },
    "inicio": 11,
    "fim": 21,
    "valortotal": 446,
    "observacao": "Observação 254",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833daf"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 31",
    "funcionario": "Funcionário 5",
    "data": {
      "$date": {
        "$numberLong": "1684611636536"
      }
    },
    "inicio": 14,
    "fim": 21,
    "valortotal": 227,
    "observacao": "Observação 255",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833db0"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 47",
    "funcionario": "Funcionário 35",
    "data": {
      "$date": {
        "$numberLong": "1684611636536"
      }
    },
    "inicio": 16,
    "fim": 21,
    "valortotal": 340,
    "observacao": "Observação 256",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833db1"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 85",
    "funcionario": "Funcionário 20",
    "data": {
      "$date": {
        "$numberLong": "1684611636536"
      }
    },
    "inicio": 12,
    "fim": 22,
    "valortotal": 222,
    "observacao": "Observação 257",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833db2"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 83",
    "funcionario": "Funcionário 44",
    "data": {
      "$date": {
        "$numberLong": "1684611636536"
      }
    },
    "inicio": 14,
    "fim": 22,
    "valortotal": 313,
    "observacao": "Observação 258",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833db3"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 53",
    "funcionario": "Funcionário 39",
    "data": {
      "$date": {
        "$numberLong": "1684611636536"
      }
    },
    "inicio": 18,
    "fim": 20,
    "valortotal": 205,
    "observacao": "Observação 259",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833db4"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 86",
    "funcionario": "Funcionário 41",
    "data": {
      "$date": {
        "$numberLong": "1684611636537"
      }
    },
    "inicio": 17,
    "fim": 20,
    "valortotal": 355,
    "observacao": "Observação 260",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833db5"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 31",
    "funcionario": "Funcionário 39",
    "data": {
      "$date": {
        "$numberLong": "1684611636537"
      }
    },
    "inicio": 13,
    "fim": 20,
    "valortotal": 175,
    "observacao": "Observação 261",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833db6"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 43",
    "funcionario": "Funcionário 48",
    "data": {
      "$date": {
        "$numberLong": "1684611636537"
      }
    },
    "inicio": 16,
    "fim": 19,
    "valortotal": 164,
    "observacao": "Observação 262",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833db7"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 64",
    "funcionario": "Funcionário 48",
    "data": {
      "$date": {
        "$numberLong": "1684611636537"
      }
    },
    "inicio": 17,
    "fim": 20,
    "valortotal": 181,
    "observacao": "Observação 263",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833db8"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 42",
    "funcionario": "Funcionário 12",
    "data": {
      "$date": {
        "$numberLong": "1684611636537"
      }
    },
    "inicio": 12,
    "fim": 19,
    "valortotal": 220,
    "observacao": "Observação 264",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833db9"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 32",
    "funcionario": "Funcionário 47",
    "data": {
      "$date": {
        "$numberLong": "1684611636537"
      }
    },
    "inicio": 12,
    "fim": 20,
    "valortotal": 375,
    "observacao": "Observação 265",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833dba"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 7",
    "funcionario": "Funcionário 37",
    "data": {
      "$date": {
        "$numberLong": "1684611636537"
      }
    },
    "inicio": 10,
    "fim": 20,
    "valortotal": 342,
    "observacao": "Observação 266",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833dbb"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 2",
    "funcionario": "Funcionário 22",
    "data": {
      "$date": {
        "$numberLong": "1684611636537"
      }
    },
    "inicio": 10,
    "fim": 20,
    "valortotal": 343,
    "observacao": "Observação 267",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833dbc"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 33",
    "funcionario": "Funcionário 39",
    "data": {
      "$date": {
        "$numberLong": "1684611636537"
      }
    },
    "inicio": 15,
    "fim": 20,
    "valortotal": 432,
    "observacao": "Observação 268",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833dbd"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 51",
    "funcionario": "Funcionário 7",
    "data": {
      "$date": {
        "$numberLong": "1684611636537"
      }
    },
    "inicio": 17,
    "fim": 19,
    "valortotal": 329,
    "observacao": "Observação 269",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833dbe"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 9",
    "funcionario": "Funcionário 6",
    "data": {
      "$date": {
        "$numberLong": "1684611636537"
      }
    },
    "inicio": 10,
    "fim": 19,
    "valortotal": 402,
    "observacao": "Observação 270",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833dbf"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 99",
    "funcionario": "Funcionário 27",
    "data": {
      "$date": {
        "$numberLong": "1684611636537"
      }
    },
    "inicio": 17,
    "fim": 19,
    "valortotal": 391,
    "observacao": "Observação 271",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833dc0"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 21",
    "funcionario": "Funcionário 31",
    "data": {
      "$date": {
        "$numberLong": "1684611636538"
      }
    },
    "inicio": 15,
    "fim": 22,
    "valortotal": 392,
    "observacao": "Observação 272",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833dc1"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 36",
    "funcionario": "Funcionário 39",
    "data": {
      "$date": {
        "$numberLong": "1684611636538"
      }
    },
    "inicio": 14,
    "fim": 21,
    "valortotal": 191,
    "observacao": "Observação 273",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833dc2"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 97",
    "funcionario": "Funcionário 8",
    "data": {
      "$date": {
        "$numberLong": "1684611636538"
      }
    },
    "inicio": 16,
    "fim": 21,
    "valortotal": 470,
    "observacao": "Observação 274",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833dc3"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 3",
    "funcionario": "Funcionário 41",
    "data": {
      "$date": {
        "$numberLong": "1684611636538"
      }
    },
    "inicio": 11,
    "fim": 20,
    "valortotal": 417,
    "observacao": "Observação 275",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833dc4"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 71",
    "funcionario": "Funcionário 17",
    "data": {
      "$date": {
        "$numberLong": "1684611636538"
      }
    },
    "inicio": 10,
    "fim": 19,
    "valortotal": 217,
    "observacao": "Observação 276",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833dc5"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 3",
    "funcionario": "Funcionário 2",
    "data": {
      "$date": {
        "$numberLong": "1684611636538"
      }
    },
    "inicio": 9,
    "fim": 21,
    "valortotal": 307,
    "observacao": "Observação 277",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833dc6"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 33",
    "funcionario": "Funcionário 21",
    "data": {
      "$date": {
        "$numberLong": "1684611636538"
      }
    },
    "inicio": 8,
    "fim": 20,
    "valortotal": 393,
    "observacao": "Observação 278",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833dc7"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 76",
    "funcionario": "Funcionário 8",
    "data": {
      "$date": {
        "$numberLong": "1684611636538"
      }
    },
    "inicio": 16,
    "fim": 22,
    "valortotal": 324,
    "observacao": "Observação 279",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833dc8"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 16",
    "funcionario": "Funcionário 7",
    "data": {
      "$date": {
        "$numberLong": "1684611636538"
      }
    },
    "inicio": 8,
    "fim": 22,
    "valortotal": 444,
    "observacao": "Observação 280",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833dc9"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 66",
    "funcionario": "Funcionário 8",
    "data": {
      "$date": {
        "$numberLong": "1684611636538"
      }
    },
    "inicio": 16,
    "fim": 20,
    "valortotal": 457,
    "observacao": "Observação 281",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833dca"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 16",
    "funcionario": "Funcionário 21",
    "data": {
      "$date": {
        "$numberLong": "1684611636538"
      }
    },
    "inicio": 14,
    "fim": 20,
    "valortotal": 151,
    "observacao": "Observação 282",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833dcb"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 96",
    "funcionario": "Funcionário 18",
    "data": {
      "$date": {
        "$numberLong": "1684611636538"
      }
    },
    "inicio": 14,
    "fim": 19,
    "valortotal": 72,
    "observacao": "Observação 283",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833dcc"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 78",
    "funcionario": "Funcionário 18",
    "data": {
      "$date": {
        "$numberLong": "1684611636538"
      }
    },
    "inicio": 13,
    "fim": 22,
    "valortotal": 441,
    "observacao": "Observação 284",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833dcd"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 73",
    "funcionario": "Funcionário 34",
    "data": {
      "$date": {
        "$numberLong": "1684611636538"
      }
    },
    "inicio": 8,
    "fim": 20,
    "valortotal": 279,
    "observacao": "Observação 285",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833dce"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 82",
    "funcionario": "Funcionário 19",
    "data": {
      "$date": {
        "$numberLong": "1684611636539"
      }
    },
    "inicio": 12,
    "fim": 22,
    "valortotal": 433,
    "observacao": "Observação 286",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833dcf"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 28",
    "funcionario": "Funcionário 12",
    "data": {
      "$date": {
        "$numberLong": "1684611636539"
      }
    },
    "inicio": 13,
    "fim": 19,
    "valortotal": 63,
    "observacao": "Observação 287",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833dd0"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 43",
    "funcionario": "Funcionário 1",
    "data": {
      "$date": {
        "$numberLong": "1684611636539"
      }
    },
    "inicio": 14,
    "fim": 21,
    "valortotal": 117,
    "observacao": "Observação 288",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833dd1"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 27",
    "funcionario": "Funcionário 41",
    "data": {
      "$date": {
        "$numberLong": "1684611636539"
      }
    },
    "inicio": 12,
    "fim": 20,
    "valortotal": 257,
    "observacao": "Observação 289",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833dd2"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 88",
    "funcionario": "Funcionário 31",
    "data": {
      "$date": {
        "$numberLong": "1684611636539"
      }
    },
    "inicio": 9,
    "fim": 19,
    "valortotal": 460,
    "observacao": "Observação 290",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833dd3"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 79",
    "funcionario": "Funcionário 30",
    "data": {
      "$date": {
        "$numberLong": "1684611636539"
      }
    },
    "inicio": 12,
    "fim": 22,
    "valortotal": 77,
    "observacao": "Observação 291",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833dd4"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 80",
    "funcionario": "Funcionário 28",
    "data": {
      "$date": {
        "$numberLong": "1684611636539"
      }
    },
    "inicio": 17,
    "fim": 21,
    "valortotal": 118,
    "observacao": "Observação 292",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833dd5"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 61",
    "funcionario": "Funcionário 32",
    "data": {
      "$date": {
        "$numberLong": "1684611636539"
      }
    },
    "inicio": 16,
    "fim": 19,
    "valortotal": 211,
    "observacao": "Observação 293",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833dd6"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 37",
    "funcionario": "Funcionário 30",
    "data": {
      "$date": {
        "$numberLong": "1684611636539"
      }
    },
    "inicio": 12,
    "fim": 22,
    "valortotal": 54,
    "observacao": "Observação 294",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833dd7"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 53",
    "funcionario": "Funcionário 8",
    "data": {
      "$date": {
        "$numberLong": "1684611636539"
      }
    },
    "inicio": 14,
    "fim": 20,
    "valortotal": 227,
    "observacao": "Observação 295",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833dd8"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 56",
    "funcionario": "Funcionário 16",
    "data": {
      "$date": {
        "$numberLong": "1684611636541"
      }
    },
    "inicio": 17,
    "fim": 22,
    "valortotal": 192,
    "observacao": "Observação 296",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833dd9"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 59",
    "funcionario": "Funcionário 4",
    "data": {
      "$date": {
        "$numberLong": "1684611636541"
      }
    },
    "inicio": 16,
    "fim": 22,
    "valortotal": 189,
    "observacao": "Observação 297",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833dda"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 48",
    "funcionario": "Funcionário 9",
    "data": {
      "$date": {
        "$numberLong": "1684611636542"
      }
    },
    "inicio": 17,
    "fim": 20,
    "valortotal": 498,
    "observacao": "Observação 298",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ddb"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 95",
    "funcionario": "Funcionário 37",
    "data": {
      "$date": {
        "$numberLong": "1684611636542"
      }
    },
    "inicio": 12,
    "fim": 21,
    "valortotal": 99,
    "observacao": "Observação 299",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ddc"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 6",
    "funcionario": "Funcionário 15",
    "data": {
      "$date": {
        "$numberLong": "1684611636542"
      }
    },
    "inicio": 10,
    "fim": 19,
    "valortotal": 196,
    "observacao": "Observação 300",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ddd"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 80",
    "funcionario": "Funcionário 24",
    "data": {
      "$date": {
        "$numberLong": "1684611636542"
      }
    },
    "inicio": 16,
    "fim": 20,
    "valortotal": 390,
    "observacao": "Observação 301",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833dde"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 33",
    "funcionario": "Funcionário 36",
    "data": {
      "$date": {
        "$numberLong": "1684611636542"
      }
    },
    "inicio": 10,
    "fim": 20,
    "valortotal": 271,
    "observacao": "Observação 302",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ddf"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 3",
    "funcionario": "Funcionário 19",
    "data": {
      "$date": {
        "$numberLong": "1684611636542"
      }
    },
    "inicio": 16,
    "fim": 19,
    "valortotal": 356,
    "observacao": "Observação 303",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833de0"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 92",
    "funcionario": "Funcionário 47",
    "data": {
      "$date": {
        "$numberLong": "1684611636543"
      }
    },
    "inicio": 13,
    "fim": 21,
    "valortotal": 193,
    "observacao": "Observação 304",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833de1"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 51",
    "funcionario": "Funcionário 36",
    "data": {
      "$date": {
        "$numberLong": "1684611636543"
      }
    },
    "inicio": 10,
    "fim": 22,
    "valortotal": 75,
    "observacao": "Observação 305",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833de2"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 42",
    "funcionario": "Funcionário 23",
    "data": {
      "$date": {
        "$numberLong": "1684611636543"
      }
    },
    "inicio": 11,
    "fim": 21,
    "valortotal": 69,
    "observacao": "Observação 306",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833de3"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 93",
    "funcionario": "Funcionário 9",
    "data": {
      "$date": {
        "$numberLong": "1684611636543"
      }
    },
    "inicio": 18,
    "fim": 22,
    "valortotal": 437,
    "observacao": "Observação 307",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833de4"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 65",
    "funcionario": "Funcionário 8",
    "data": {
      "$date": {
        "$numberLong": "1684611636543"
      }
    },
    "inicio": 16,
    "fim": 19,
    "valortotal": 227,
    "observacao": "Observação 308",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833de5"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 44",
    "funcionario": "Funcionário 31",
    "data": {
      "$date": {
        "$numberLong": "1684611636543"
      }
    },
    "inicio": 9,
    "fim": 20,
    "valortotal": 125,
    "observacao": "Observação 309",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833de6"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 22",
    "funcionario": "Funcionário 17",
    "data": {
      "$date": {
        "$numberLong": "1684611636543"
      }
    },
    "inicio": 14,
    "fim": 21,
    "valortotal": 489,
    "observacao": "Observação 310",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833de7"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 88",
    "funcionario": "Funcionário 5",
    "data": {
      "$date": {
        "$numberLong": "1684611636543"
      }
    },
    "inicio": 9,
    "fim": 21,
    "valortotal": 375,
    "observacao": "Observação 311",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833de8"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 18",
    "funcionario": "Funcionário 17",
    "data": {
      "$date": {
        "$numberLong": "1684611636543"
      }
    },
    "inicio": 8,
    "fim": 22,
    "valortotal": 197,
    "observacao": "Observação 312",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833de9"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 41",
    "funcionario": "Funcionário 24",
    "data": {
      "$date": {
        "$numberLong": "1684611636543"
      }
    },
    "inicio": 18,
    "fim": 22,
    "valortotal": 270,
    "observacao": "Observação 313",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833dea"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 18",
    "funcionario": "Funcionário 34",
    "data": {
      "$date": {
        "$numberLong": "1684611636543"
      }
    },
    "inicio": 11,
    "fim": 19,
    "valortotal": 70,
    "observacao": "Observação 314",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833deb"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 77",
    "funcionario": "Funcionário 14",
    "data": {
      "$date": {
        "$numberLong": "1684611636544"
      }
    },
    "inicio": 17,
    "fim": 19,
    "valortotal": 326,
    "observacao": "Observação 315",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833dec"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 98",
    "funcionario": "Funcionário 9",
    "data": {
      "$date": {
        "$numberLong": "1684611636544"
      }
    },
    "inicio": 18,
    "fim": 22,
    "valortotal": 157,
    "observacao": "Observação 316",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ded"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 2",
    "funcionario": "Funcionário 26",
    "data": {
      "$date": {
        "$numberLong": "1684611636544"
      }
    },
    "inicio": 12,
    "fim": 21,
    "valortotal": 113,
    "observacao": "Observação 317",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833dee"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 10",
    "funcionario": "Funcionário 17",
    "data": {
      "$date": {
        "$numberLong": "1684611636544"
      }
    },
    "inicio": 14,
    "fim": 22,
    "valortotal": 337,
    "observacao": "Observação 318",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833def"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 50",
    "funcionario": "Funcionário 11",
    "data": {
      "$date": {
        "$numberLong": "1684611636544"
      }
    },
    "inicio": 18,
    "fim": 20,
    "valortotal": 245,
    "observacao": "Observação 319",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833df0"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 94",
    "funcionario": "Funcionário 2",
    "data": {
      "$date": {
        "$numberLong": "1684611636544"
      }
    },
    "inicio": 17,
    "fim": 20,
    "valortotal": 460,
    "observacao": "Observação 320",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833df1"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 83",
    "funcionario": "Funcionário 43",
    "data": {
      "$date": {
        "$numberLong": "1684611636544"
      }
    },
    "inicio": 17,
    "fim": 22,
    "valortotal": 417,
    "observacao": "Observação 321",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833df2"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 37",
    "funcionario": "Funcionário 25",
    "data": {
      "$date": {
        "$numberLong": "1684611636544"
      }
    },
    "inicio": 17,
    "fim": 21,
    "valortotal": 320,
    "observacao": "Observação 322",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833df3"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 83",
    "funcionario": "Funcionário 28",
    "data": {
      "$date": {
        "$numberLong": "1684611636544"
      }
    },
    "inicio": 15,
    "fim": 19,
    "valortotal": 81,
    "observacao": "Observação 323",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833df4"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 33",
    "funcionario": "Funcionário 20",
    "data": {
      "$date": {
        "$numberLong": "1684611636544"
      }
    },
    "inicio": 14,
    "fim": 20,
    "valortotal": 318,
    "observacao": "Observação 324",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833df5"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 37",
    "funcionario": "Funcionário 29",
    "data": {
      "$date": {
        "$numberLong": "1684611636544"
      }
    },
    "inicio": 9,
    "fim": 21,
    "valortotal": 133,
    "observacao": "Observação 325",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833df6"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 77",
    "funcionario": "Funcionário 33",
    "data": {
      "$date": {
        "$numberLong": "1684611636545"
      }
    },
    "inicio": 12,
    "fim": 22,
    "valortotal": 488,
    "observacao": "Observação 326",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833df7"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 8",
    "funcionario": "Funcionário 8",
    "data": {
      "$date": {
        "$numberLong": "1684611636545"
      }
    },
    "inicio": 10,
    "fim": 21,
    "valortotal": 145,
    "observacao": "Observação 327",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833df8"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 60",
    "funcionario": "Funcionário 27",
    "data": {
      "$date": {
        "$numberLong": "1684611636545"
      }
    },
    "inicio": 15,
    "fim": 20,
    "valortotal": 342,
    "observacao": "Observação 328",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833df9"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 45",
    "funcionario": "Funcionário 44",
    "data": {
      "$date": {
        "$numberLong": "1684611636545"
      }
    },
    "inicio": 11,
    "fim": 22,
    "valortotal": 410,
    "observacao": "Observação 329",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833dfa"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 84",
    "funcionario": "Funcionário 21",
    "data": {
      "$date": {
        "$numberLong": "1684611636545"
      }
    },
    "inicio": 8,
    "fim": 22,
    "valortotal": 376,
    "observacao": "Observação 330",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833dfb"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 96",
    "funcionario": "Funcionário 19",
    "data": {
      "$date": {
        "$numberLong": "1684611636545"
      }
    },
    "inicio": 15,
    "fim": 21,
    "valortotal": 383,
    "observacao": "Observação 331",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833dfc"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 39",
    "funcionario": "Funcionário 37",
    "data": {
      "$date": {
        "$numberLong": "1684611636545"
      }
    },
    "inicio": 16,
    "fim": 21,
    "valortotal": 390,
    "observacao": "Observação 332",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833dfd"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 42",
    "funcionario": "Funcionário 39",
    "data": {
      "$date": {
        "$numberLong": "1684611636545"
      }
    },
    "inicio": 12,
    "fim": 21,
    "valortotal": 330,
    "observacao": "Observação 333",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833dfe"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 49",
    "funcionario": "Funcionário 14",
    "data": {
      "$date": {
        "$numberLong": "1684611636545"
      }
    },
    "inicio": 9,
    "fim": 22,
    "valortotal": 219,
    "observacao": "Observação 334",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833dff"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 93",
    "funcionario": "Funcionário 43",
    "data": {
      "$date": {
        "$numberLong": "1684611636545"
      }
    },
    "inicio": 13,
    "fim": 20,
    "valortotal": 238,
    "observacao": "Observação 335",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e00"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 55",
    "funcionario": "Funcionário 5",
    "data": {
      "$date": {
        "$numberLong": "1684611636545"
      }
    },
    "inicio": 18,
    "fim": 19,
    "valortotal": 482,
    "observacao": "Observação 336",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e01"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 85",
    "funcionario": "Funcionário 37",
    "data": {
      "$date": {
        "$numberLong": "1684611636545"
      }
    },
    "inicio": 15,
    "fim": 21,
    "valortotal": 446,
    "observacao": "Observação 337",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e02"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 32",
    "funcionario": "Funcionário 27",
    "data": {
      "$date": {
        "$numberLong": "1684611636545"
      }
    },
    "inicio": 10,
    "fim": 19,
    "valortotal": 368,
    "observacao": "Observação 338",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e03"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 28",
    "funcionario": "Funcionário 7",
    "data": {
      "$date": {
        "$numberLong": "1684611636545"
      }
    },
    "inicio": 11,
    "fim": 19,
    "valortotal": 172,
    "observacao": "Observação 339",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e04"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 11",
    "funcionario": "Funcionário 50",
    "data": {
      "$date": {
        "$numberLong": "1684611636545"
      }
    },
    "inicio": 15,
    "fim": 20,
    "valortotal": 102,
    "observacao": "Observação 340",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e05"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 69",
    "funcionario": "Funcionário 50",
    "data": {
      "$date": {
        "$numberLong": "1684611636545"
      }
    },
    "inicio": 11,
    "fim": 22,
    "valortotal": 341,
    "observacao": "Observação 341",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e06"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 39",
    "funcionario": "Funcionário 47",
    "data": {
      "$date": {
        "$numberLong": "1684611636546"
      }
    },
    "inicio": 15,
    "fim": 21,
    "valortotal": 235,
    "observacao": "Observação 342",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e07"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 3",
    "funcionario": "Funcionário 3",
    "data": {
      "$date": {
        "$numberLong": "1684611636546"
      }
    },
    "inicio": 15,
    "fim": 22,
    "valortotal": 146,
    "observacao": "Observação 343",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e08"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 24",
    "funcionario": "Funcionário 32",
    "data": {
      "$date": {
        "$numberLong": "1684611636546"
      }
    },
    "inicio": 15,
    "fim": 22,
    "valortotal": 411,
    "observacao": "Observação 344",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e09"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 62",
    "funcionario": "Funcionário 2",
    "data": {
      "$date": {
        "$numberLong": "1684611636546"
      }
    },
    "inicio": 15,
    "fim": 20,
    "valortotal": 451,
    "observacao": "Observação 345",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e0a"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 14",
    "funcionario": "Funcionário 12",
    "data": {
      "$date": {
        "$numberLong": "1684611636546"
      }
    },
    "inicio": 13,
    "fim": 22,
    "valortotal": 475,
    "observacao": "Observação 346",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e0b"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 64",
    "funcionario": "Funcionário 46",
    "data": {
      "$date": {
        "$numberLong": "1684611636546"
      }
    },
    "inicio": 12,
    "fim": 19,
    "valortotal": 329,
    "observacao": "Observação 347",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e0c"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 39",
    "funcionario": "Funcionário 27",
    "data": {
      "$date": {
        "$numberLong": "1684611636546"
      }
    },
    "inicio": 15,
    "fim": 21,
    "valortotal": 253,
    "observacao": "Observação 348",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e0d"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 100",
    "funcionario": "Funcionário 12",
    "data": {
      "$date": {
        "$numberLong": "1684611636546"
      }
    },
    "inicio": 14,
    "fim": 19,
    "valortotal": 486,
    "observacao": "Observação 349",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e0e"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 21",
    "funcionario": "Funcionário 46",
    "data": {
      "$date": {
        "$numberLong": "1684611636546"
      }
    },
    "inicio": 14,
    "fim": 20,
    "valortotal": 67,
    "observacao": "Observação 350",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e0f"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 97",
    "funcionario": "Funcionário 50",
    "data": {
      "$date": {
        "$numberLong": "1684611636546"
      }
    },
    "inicio": 12,
    "fim": 21,
    "valortotal": 322,
    "observacao": "Observação 351",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e10"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 25",
    "funcionario": "Funcionário 27",
    "data": {
      "$date": {
        "$numberLong": "1684611636546"
      }
    },
    "inicio": 13,
    "fim": 20,
    "valortotal": 336,
    "observacao": "Observação 352",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e11"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 26",
    "funcionario": "Funcionário 41",
    "data": {
      "$date": {
        "$numberLong": "1684611636546"
      }
    },
    "inicio": 15,
    "fim": 21,
    "valortotal": 403,
    "observacao": "Observação 353",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e12"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 39",
    "funcionario": "Funcionário 15",
    "data": {
      "$date": {
        "$numberLong": "1684611636546"
      }
    },
    "inicio": 18,
    "fim": 20,
    "valortotal": 78,
    "observacao": "Observação 354",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e13"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 59",
    "funcionario": "Funcionário 48",
    "data": {
      "$date": {
        "$numberLong": "1684611636546"
      }
    },
    "inicio": 11,
    "fim": 19,
    "valortotal": 114,
    "observacao": "Observação 355",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e14"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 64",
    "funcionario": "Funcionário 17",
    "data": {
      "$date": {
        "$numberLong": "1684611636546"
      }
    },
    "inicio": 16,
    "fim": 21,
    "valortotal": 374,
    "observacao": "Observação 356",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e15"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 94",
    "funcionario": "Funcionário 48",
    "data": {
      "$date": {
        "$numberLong": "1684611636547"
      }
    },
    "inicio": 18,
    "fim": 19,
    "valortotal": 383,
    "observacao": "Observação 357",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e16"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 50",
    "funcionario": "Funcionário 12",
    "data": {
      "$date": {
        "$numberLong": "1684611636547"
      }
    },
    "inicio": 9,
    "fim": 21,
    "valortotal": 210,
    "observacao": "Observação 358",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e17"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 100",
    "funcionario": "Funcionário 47",
    "data": {
      "$date": {
        "$numberLong": "1684611636547"
      }
    },
    "inicio": 11,
    "fim": 21,
    "valortotal": 81,
    "observacao": "Observação 359",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e18"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 40",
    "funcionario": "Funcionário 6",
    "data": {
      "$date": {
        "$numberLong": "1684611636547"
      }
    },
    "inicio": 13,
    "fim": 19,
    "valortotal": 267,
    "observacao": "Observação 360",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e19"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 63",
    "funcionario": "Funcionário 47",
    "data": {
      "$date": {
        "$numberLong": "1684611636547"
      }
    },
    "inicio": 8,
    "fim": 19,
    "valortotal": 298,
    "observacao": "Observação 361",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e1a"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 42",
    "funcionario": "Funcionário 22",
    "data": {
      "$date": {
        "$numberLong": "1684611636547"
      }
    },
    "inicio": 12,
    "fim": 21,
    "valortotal": 96,
    "observacao": "Observação 362",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e1b"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 30",
    "funcionario": "Funcionário 41",
    "data": {
      "$date": {
        "$numberLong": "1684611636547"
      }
    },
    "inicio": 16,
    "fim": 20,
    "valortotal": 423,
    "observacao": "Observação 363",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e1c"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 23",
    "funcionario": "Funcionário 12",
    "data": {
      "$date": {
        "$numberLong": "1684611636547"
      }
    },
    "inicio": 9,
    "fim": 21,
    "valortotal": 437,
    "observacao": "Observação 364",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e1d"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 77",
    "funcionario": "Funcionário 25",
    "data": {
      "$date": {
        "$numberLong": "1684611636547"
      }
    },
    "inicio": 11,
    "fim": 19,
    "valortotal": 275,
    "observacao": "Observação 365",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e1e"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 79",
    "funcionario": "Funcionário 22",
    "data": {
      "$date": {
        "$numberLong": "1684611636547"
      }
    },
    "inicio": 11,
    "fim": 19,
    "valortotal": 236,
    "observacao": "Observação 366",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e1f"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 67",
    "funcionario": "Funcionário 28",
    "data": {
      "$date": {
        "$numberLong": "1684611636547"
      }
    },
    "inicio": 13,
    "fim": 22,
    "valortotal": 405,
    "observacao": "Observação 367",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e20"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 59",
    "funcionario": "Funcionário 28",
    "data": {
      "$date": {
        "$numberLong": "1684611636547"
      }
    },
    "inicio": 11,
    "fim": 19,
    "valortotal": 274,
    "observacao": "Observação 368",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e21"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 13",
    "funcionario": "Funcionário 23",
    "data": {
      "$date": {
        "$numberLong": "1684611636547"
      }
    },
    "inicio": 15,
    "fim": 19,
    "valortotal": 131,
    "observacao": "Observação 369",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e22"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 7",
    "funcionario": "Funcionário 49",
    "data": {
      "$date": {
        "$numberLong": "1684611636547"
      }
    },
    "inicio": 14,
    "fim": 19,
    "valortotal": 476,
    "observacao": "Observação 370",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e23"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 21",
    "funcionario": "Funcionário 27",
    "data": {
      "$date": {
        "$numberLong": "1684611636548"
      }
    },
    "inicio": 12,
    "fim": 20,
    "valortotal": 324,
    "observacao": "Observação 371",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e24"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 20",
    "funcionario": "Funcionário 6",
    "data": {
      "$date": {
        "$numberLong": "1684611636548"
      }
    },
    "inicio": 12,
    "fim": 21,
    "valortotal": 212,
    "observacao": "Observação 372",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e25"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 75",
    "funcionario": "Funcionário 28",
    "data": {
      "$date": {
        "$numberLong": "1684611636548"
      }
    },
    "inicio": 12,
    "fim": 22,
    "valortotal": 292,
    "observacao": "Observação 373",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e26"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 35",
    "funcionario": "Funcionário 32",
    "data": {
      "$date": {
        "$numberLong": "1684611636548"
      }
    },
    "inicio": 17,
    "fim": 21,
    "valortotal": 417,
    "observacao": "Observação 374",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e27"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 35",
    "funcionario": "Funcionário 50",
    "data": {
      "$date": {
        "$numberLong": "1684611636548"
      }
    },
    "inicio": 15,
    "fim": 21,
    "valortotal": 162,
    "observacao": "Observação 375",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e28"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 44",
    "funcionario": "Funcionário 10",
    "data": {
      "$date": {
        "$numberLong": "1684611636548"
      }
    },
    "inicio": 12,
    "fim": 19,
    "valortotal": 368,
    "observacao": "Observação 376",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e29"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 3",
    "funcionario": "Funcionário 32",
    "data": {
      "$date": {
        "$numberLong": "1684611636548"
      }
    },
    "inicio": 8,
    "fim": 20,
    "valortotal": 270,
    "observacao": "Observação 377",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e2a"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 98",
    "funcionario": "Funcionário 25",
    "data": {
      "$date": {
        "$numberLong": "1684611636548"
      }
    },
    "inicio": 13,
    "fim": 20,
    "valortotal": 168,
    "observacao": "Observação 378",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e2b"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 92",
    "funcionario": "Funcionário 8",
    "data": {
      "$date": {
        "$numberLong": "1684611636548"
      }
    },
    "inicio": 15,
    "fim": 20,
    "valortotal": 141,
    "observacao": "Observação 379",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e2c"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 16",
    "funcionario": "Funcionário 4",
    "data": {
      "$date": {
        "$numberLong": "1684611636548"
      }
    },
    "inicio": 11,
    "fim": 21,
    "valortotal": 417,
    "observacao": "Observação 380",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e2d"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 53",
    "funcionario": "Funcionário 38",
    "data": {
      "$date": {
        "$numberLong": "1684611636548"
      }
    },
    "inicio": 18,
    "fim": 19,
    "valortotal": 129,
    "observacao": "Observação 381",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e2e"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 45",
    "funcionario": "Funcionário 50",
    "data": {
      "$date": {
        "$numberLong": "1684611636548"
      }
    },
    "inicio": 15,
    "fim": 22,
    "valortotal": 73,
    "observacao": "Observação 382",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e2f"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 92",
    "funcionario": "Funcionário 3",
    "data": {
      "$date": {
        "$numberLong": "1684611636548"
      }
    },
    "inicio": 13,
    "fim": 19,
    "valortotal": 272,
    "observacao": "Observação 383",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e30"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 11",
    "funcionario": "Funcionário 6",
    "data": {
      "$date": {
        "$numberLong": "1684611636548"
      }
    },
    "inicio": 8,
    "fim": 20,
    "valortotal": 221,
    "observacao": "Observação 384",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e31"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 52",
    "funcionario": "Funcionário 3",
    "data": {
      "$date": {
        "$numberLong": "1684611636548"
      }
    },
    "inicio": 18,
    "fim": 21,
    "valortotal": 315,
    "observacao": "Observação 385",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e32"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 37",
    "funcionario": "Funcionário 16",
    "data": {
      "$date": {
        "$numberLong": "1684611636548"
      }
    },
    "inicio": 14,
    "fim": 21,
    "valortotal": 180,
    "observacao": "Observação 386",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e33"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 30",
    "funcionario": "Funcionário 31",
    "data": {
      "$date": {
        "$numberLong": "1684611636549"
      }
    },
    "inicio": 16,
    "fim": 20,
    "valortotal": 445,
    "observacao": "Observação 387",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e34"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 51",
    "funcionario": "Funcionário 25",
    "data": {
      "$date": {
        "$numberLong": "1684611636549"
      }
    },
    "inicio": 9,
    "fim": 22,
    "valortotal": 129,
    "observacao": "Observação 388",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e35"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 18",
    "funcionario": "Funcionário 8",
    "data": {
      "$date": {
        "$numberLong": "1684611636549"
      }
    },
    "inicio": 11,
    "fim": 22,
    "valortotal": 383,
    "observacao": "Observação 389",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e36"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 94",
    "funcionario": "Funcionário 21",
    "data": {
      "$date": {
        "$numberLong": "1684611636549"
      }
    },
    "inicio": 15,
    "fim": 20,
    "valortotal": 235,
    "observacao": "Observação 390",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e37"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 24",
    "funcionario": "Funcionário 3",
    "data": {
      "$date": {
        "$numberLong": "1684611636549"
      }
    },
    "inicio": 16,
    "fim": 19,
    "valortotal": 358,
    "observacao": "Observação 391",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e38"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 11",
    "funcionario": "Funcionário 43",
    "data": {
      "$date": {
        "$numberLong": "1684611636549"
      }
    },
    "inicio": 14,
    "fim": 19,
    "valortotal": 60,
    "observacao": "Observação 392",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e39"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 55",
    "funcionario": "Funcionário 43",
    "data": {
      "$date": {
        "$numberLong": "1684611636549"
      }
    },
    "inicio": 15,
    "fim": 21,
    "valortotal": 482,
    "observacao": "Observação 393",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e3a"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 59",
    "funcionario": "Funcionário 2",
    "data": {
      "$date": {
        "$numberLong": "1684611636549"
      }
    },
    "inicio": 11,
    "fim": 21,
    "valortotal": 213,
    "observacao": "Observação 394",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e3b"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 24",
    "funcionario": "Funcionário 32",
    "data": {
      "$date": {
        "$numberLong": "1684611636549"
      }
    },
    "inicio": 15,
    "fim": 22,
    "valortotal": 334,
    "observacao": "Observação 395",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e3c"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 69",
    "funcionario": "Funcionário 6",
    "data": {
      "$date": {
        "$numberLong": "1684611636549"
      }
    },
    "inicio": 12,
    "fim": 19,
    "valortotal": 394,
    "observacao": "Observação 396",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e3d"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 40",
    "funcionario": "Funcionário 34",
    "data": {
      "$date": {
        "$numberLong": "1684611636549"
      }
    },
    "inicio": 10,
    "fim": 21,
    "valortotal": 445,
    "observacao": "Observação 397",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e3e"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 88",
    "funcionario": "Funcionário 6",
    "data": {
      "$date": {
        "$numberLong": "1684611636549"
      }
    },
    "inicio": 15,
    "fim": 22,
    "valortotal": 291,
    "observacao": "Observação 398",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e3f"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 29",
    "funcionario": "Funcionário 15",
    "data": {
      "$date": {
        "$numberLong": "1684611636549"
      }
    },
    "inicio": 18,
    "fim": 21,
    "valortotal": 282,
    "observacao": "Observação 399",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e40"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 29",
    "funcionario": "Funcionário 25",
    "data": {
      "$date": {
        "$numberLong": "1684611636549"
      }
    },
    "inicio": 8,
    "fim": 22,
    "valortotal": 331,
    "observacao": "Observação 400",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e41"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 11",
    "funcionario": "Funcionário 46",
    "data": {
      "$date": {
        "$numberLong": "1684611636549"
      }
    },
    "inicio": 13,
    "fim": 20,
    "valortotal": 331,
    "observacao": "Observação 401",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e42"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 3",
    "funcionario": "Funcionário 20",
    "data": {
      "$date": {
        "$numberLong": "1684611636549"
      }
    },
    "inicio": 14,
    "fim": 20,
    "valortotal": 53,
    "observacao": "Observação 402",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e43"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 29",
    "funcionario": "Funcionário 14",
    "data": {
      "$date": {
        "$numberLong": "1684611636550"
      }
    },
    "inicio": 17,
    "fim": 20,
    "valortotal": 331,
    "observacao": "Observação 403",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e44"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 42",
    "funcionario": "Funcionário 26",
    "data": {
      "$date": {
        "$numberLong": "1684611636550"
      }
    },
    "inicio": 15,
    "fim": 19,
    "valortotal": 120,
    "observacao": "Observação 404",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e45"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 42",
    "funcionario": "Funcionário 49",
    "data": {
      "$date": {
        "$numberLong": "1684611636550"
      }
    },
    "inicio": 8,
    "fim": 21,
    "valortotal": 408,
    "observacao": "Observação 405",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e46"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 79",
    "funcionario": "Funcionário 39",
    "data": {
      "$date": {
        "$numberLong": "1684611636550"
      }
    },
    "inicio": 16,
    "fim": 21,
    "valortotal": 268,
    "observacao": "Observação 406",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e47"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 54",
    "funcionario": "Funcionário 28",
    "data": {
      "$date": {
        "$numberLong": "1684611636550"
      }
    },
    "inicio": 18,
    "fim": 22,
    "valortotal": 246,
    "observacao": "Observação 407",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e48"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 59",
    "funcionario": "Funcionário 14",
    "data": {
      "$date": {
        "$numberLong": "1684611636550"
      }
    },
    "inicio": 18,
    "fim": 22,
    "valortotal": 412,
    "observacao": "Observação 408",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e49"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 14",
    "funcionario": "Funcionário 11",
    "data": {
      "$date": {
        "$numberLong": "1684611636550"
      }
    },
    "inicio": 17,
    "fim": 20,
    "valortotal": 483,
    "observacao": "Observação 409",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e4a"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 78",
    "funcionario": "Funcionário 26",
    "data": {
      "$date": {
        "$numberLong": "1684611636550"
      }
    },
    "inicio": 14,
    "fim": 19,
    "valortotal": 119,
    "observacao": "Observação 410",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e4b"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 71",
    "funcionario": "Funcionário 29",
    "data": {
      "$date": {
        "$numberLong": "1684611636550"
      }
    },
    "inicio": 14,
    "fim": 21,
    "valortotal": 203,
    "observacao": "Observação 411",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e4c"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 27",
    "funcionario": "Funcionário 25",
    "data": {
      "$date": {
        "$numberLong": "1684611636550"
      }
    },
    "inicio": 15,
    "fim": 19,
    "valortotal": 189,
    "observacao": "Observação 412",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e4d"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 98",
    "funcionario": "Funcionário 46",
    "data": {
      "$date": {
        "$numberLong": "1684611636550"
      }
    },
    "inicio": 15,
    "fim": 21,
    "valortotal": 341,
    "observacao": "Observação 413",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e4e"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 72",
    "funcionario": "Funcionário 20",
    "data": {
      "$date": {
        "$numberLong": "1684611636550"
      }
    },
    "inicio": 9,
    "fim": 19,
    "valortotal": 377,
    "observacao": "Observação 414",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e4f"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 91",
    "funcionario": "Funcionário 10",
    "data": {
      "$date": {
        "$numberLong": "1684611636550"
      }
    },
    "inicio": 9,
    "fim": 19,
    "valortotal": 287,
    "observacao": "Observação 415",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e50"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 54",
    "funcionario": "Funcionário 26",
    "data": {
      "$date": {
        "$numberLong": "1684611636550"
      }
    },
    "inicio": 15,
    "fim": 21,
    "valortotal": 397,
    "observacao": "Observação 416",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e51"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 15",
    "funcionario": "Funcionário 13",
    "data": {
      "$date": {
        "$numberLong": "1684611636550"
      }
    },
    "inicio": 13,
    "fim": 21,
    "valortotal": 426,
    "observacao": "Observação 417",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e52"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 23",
    "funcionario": "Funcionário 22",
    "data": {
      "$date": {
        "$numberLong": "1684611636550"
      }
    },
    "inicio": 13,
    "fim": 21,
    "valortotal": 486,
    "observacao": "Observação 418",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e53"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 31",
    "funcionario": "Funcionário 42",
    "data": {
      "$date": {
        "$numberLong": "1684611636550"
      }
    },
    "inicio": 17,
    "fim": 22,
    "valortotal": 420,
    "observacao": "Observação 419",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e54"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 74",
    "funcionario": "Funcionário 2",
    "data": {
      "$date": {
        "$numberLong": "1684611636551"
      }
    },
    "inicio": 12,
    "fim": 22,
    "valortotal": 69,
    "observacao": "Observação 420",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e55"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 11",
    "funcionario": "Funcionário 31",
    "data": {
      "$date": {
        "$numberLong": "1684611636551"
      }
    },
    "inicio": 18,
    "fim": 21,
    "valortotal": 472,
    "observacao": "Observação 421",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e56"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 58",
    "funcionario": "Funcionário 39",
    "data": {
      "$date": {
        "$numberLong": "1684611636551"
      }
    },
    "inicio": 14,
    "fim": 20,
    "valortotal": 414,
    "observacao": "Observação 422",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e57"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 60",
    "funcionario": "Funcionário 32",
    "data": {
      "$date": {
        "$numberLong": "1684611636551"
      }
    },
    "inicio": 16,
    "fim": 21,
    "valortotal": 222,
    "observacao": "Observação 423",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e58"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 53",
    "funcionario": "Funcionário 5",
    "data": {
      "$date": {
        "$numberLong": "1684611636551"
      }
    },
    "inicio": 12,
    "fim": 22,
    "valortotal": 353,
    "observacao": "Observação 424",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e59"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 69",
    "funcionario": "Funcionário 5",
    "data": {
      "$date": {
        "$numberLong": "1684611636551"
      }
    },
    "inicio": 17,
    "fim": 19,
    "valortotal": 354,
    "observacao": "Observação 425",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e5a"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 96",
    "funcionario": "Funcionário 45",
    "data": {
      "$date": {
        "$numberLong": "1684611636551"
      }
    },
    "inicio": 13,
    "fim": 19,
    "valortotal": 435,
    "observacao": "Observação 426",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e5b"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 44",
    "funcionario": "Funcionário 50",
    "data": {
      "$date": {
        "$numberLong": "1684611636551"
      }
    },
    "inicio": 12,
    "fim": 22,
    "valortotal": 283,
    "observacao": "Observação 427",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e5c"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 16",
    "funcionario": "Funcionário 15",
    "data": {
      "$date": {
        "$numberLong": "1684611636551"
      }
    },
    "inicio": 18,
    "fim": 19,
    "valortotal": 116,
    "observacao": "Observação 428",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e5d"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 74",
    "funcionario": "Funcionário 28",
    "data": {
      "$date": {
        "$numberLong": "1684611636551"
      }
    },
    "inicio": 11,
    "fim": 19,
    "valortotal": 259,
    "observacao": "Observação 429",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e5e"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 46",
    "funcionario": "Funcionário 49",
    "data": {
      "$date": {
        "$numberLong": "1684611636551"
      }
    },
    "inicio": 8,
    "fim": 19,
    "valortotal": 54,
    "observacao": "Observação 430",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e5f"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 75",
    "funcionario": "Funcionário 37",
    "data": {
      "$date": {
        "$numberLong": "1684611636551"
      }
    },
    "inicio": 14,
    "fim": 21,
    "valortotal": 401,
    "observacao": "Observação 431",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e60"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 21",
    "funcionario": "Funcionário 4",
    "data": {
      "$date": {
        "$numberLong": "1684611636551"
      }
    },
    "inicio": 15,
    "fim": 22,
    "valortotal": 301,
    "observacao": "Observação 432",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e61"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 48",
    "funcionario": "Funcionário 12",
    "data": {
      "$date": {
        "$numberLong": "1684611636551"
      }
    },
    "inicio": 15,
    "fim": 22,
    "valortotal": 336,
    "observacao": "Observação 433",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e62"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 28",
    "funcionario": "Funcionário 44",
    "data": {
      "$date": {
        "$numberLong": "1684611636551"
      }
    },
    "inicio": 18,
    "fim": 21,
    "valortotal": 76,
    "observacao": "Observação 434",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e63"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 16",
    "funcionario": "Funcionário 12",
    "data": {
      "$date": {
        "$numberLong": "1684611636551"
      }
    },
    "inicio": 16,
    "fim": 20,
    "valortotal": 94,
    "observacao": "Observação 435",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e64"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 32",
    "funcionario": "Funcionário 30",
    "data": {
      "$date": {
        "$numberLong": "1684611636551"
      }
    },
    "inicio": 11,
    "fim": 19,
    "valortotal": 220,
    "observacao": "Observação 436",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e65"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 26",
    "funcionario": "Funcionário 25",
    "data": {
      "$date": {
        "$numberLong": "1684611636552"
      }
    },
    "inicio": 18,
    "fim": 20,
    "valortotal": 355,
    "observacao": "Observação 437",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e66"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 48",
    "funcionario": "Funcionário 14",
    "data": {
      "$date": {
        "$numberLong": "1684611636552"
      }
    },
    "inicio": 9,
    "fim": 21,
    "valortotal": 102,
    "observacao": "Observação 438",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e67"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 97",
    "funcionario": "Funcionário 13",
    "data": {
      "$date": {
        "$numberLong": "1684611636552"
      }
    },
    "inicio": 17,
    "fim": 19,
    "valortotal": 457,
    "observacao": "Observação 439",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e68"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 46",
    "funcionario": "Funcionário 45",
    "data": {
      "$date": {
        "$numberLong": "1684611636552"
      }
    },
    "inicio": 9,
    "fim": 19,
    "valortotal": 453,
    "observacao": "Observação 440",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e69"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 59",
    "funcionario": "Funcionário 32",
    "data": {
      "$date": {
        "$numberLong": "1684611636552"
      }
    },
    "inicio": 10,
    "fim": 19,
    "valortotal": 383,
    "observacao": "Observação 441",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e6a"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 6",
    "funcionario": "Funcionário 10",
    "data": {
      "$date": {
        "$numberLong": "1684611636552"
      }
    },
    "inicio": 9,
    "fim": 20,
    "valortotal": 101,
    "observacao": "Observação 442",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e6b"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 50",
    "funcionario": "Funcionário 4",
    "data": {
      "$date": {
        "$numberLong": "1684611636552"
      }
    },
    "inicio": 14,
    "fim": 21,
    "valortotal": 452,
    "observacao": "Observação 443",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e6c"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 74",
    "funcionario": "Funcionário 47",
    "data": {
      "$date": {
        "$numberLong": "1684611636552"
      }
    },
    "inicio": 9,
    "fim": 20,
    "valortotal": 479,
    "observacao": "Observação 444",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e6d"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 58",
    "funcionario": "Funcionário 26",
    "data": {
      "$date": {
        "$numberLong": "1684611636552"
      }
    },
    "inicio": 9,
    "fim": 22,
    "valortotal": 439,
    "observacao": "Observação 445",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e6e"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 78",
    "funcionario": "Funcionário 17",
    "data": {
      "$date": {
        "$numberLong": "1684611636552"
      }
    },
    "inicio": 8,
    "fim": 20,
    "valortotal": 109,
    "observacao": "Observação 446",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e6f"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 11",
    "funcionario": "Funcionário 9",
    "data": {
      "$date": {
        "$numberLong": "1684611636552"
      }
    },
    "inicio": 16,
    "fim": 20,
    "valortotal": 161,
    "observacao": "Observação 447",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e70"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 55",
    "funcionario": "Funcionário 48",
    "data": {
      "$date": {
        "$numberLong": "1684611636552"
      }
    },
    "inicio": 12,
    "fim": 21,
    "valortotal": 293,
    "observacao": "Observação 448",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e71"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 84",
    "funcionario": "Funcionário 43",
    "data": {
      "$date": {
        "$numberLong": "1684611636552"
      }
    },
    "inicio": 10,
    "fim": 22,
    "valortotal": 186,
    "observacao": "Observação 449",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e72"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 85",
    "funcionario": "Funcionário 13",
    "data": {
      "$date": {
        "$numberLong": "1684611636552"
      }
    },
    "inicio": 16,
    "fim": 19,
    "valortotal": 341,
    "observacao": "Observação 450",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e73"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 5",
    "funcionario": "Funcionário 40",
    "data": {
      "$date": {
        "$numberLong": "1684611636552"
      }
    },
    "inicio": 18,
    "fim": 19,
    "valortotal": 281,
    "observacao": "Observação 451",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e74"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 30",
    "funcionario": "Funcionário 4",
    "data": {
      "$date": {
        "$numberLong": "1684611636552"
      }
    },
    "inicio": 16,
    "fim": 19,
    "valortotal": 271,
    "observacao": "Observação 452",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e75"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 44",
    "funcionario": "Funcionário 32",
    "data": {
      "$date": {
        "$numberLong": "1684611636552"
      }
    },
    "inicio": 17,
    "fim": 22,
    "valortotal": 88,
    "observacao": "Observação 453",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e76"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 46",
    "funcionario": "Funcionário 8",
    "data": {
      "$date": {
        "$numberLong": "1684611636553"
      }
    },
    "inicio": 8,
    "fim": 22,
    "valortotal": 245,
    "observacao": "Observação 454",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e77"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 81",
    "funcionario": "Funcionário 34",
    "data": {
      "$date": {
        "$numberLong": "1684611636553"
      }
    },
    "inicio": 12,
    "fim": 20,
    "valortotal": 54,
    "observacao": "Observação 455",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e78"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 87",
    "funcionario": "Funcionário 45",
    "data": {
      "$date": {
        "$numberLong": "1684611636553"
      }
    },
    "inicio": 16,
    "fim": 22,
    "valortotal": 74,
    "observacao": "Observação 456",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e79"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 68",
    "funcionario": "Funcionário 44",
    "data": {
      "$date": {
        "$numberLong": "1684611636553"
      }
    },
    "inicio": 18,
    "fim": 22,
    "valortotal": 69,
    "observacao": "Observação 457",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e7a"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 61",
    "funcionario": "Funcionário 23",
    "data": {
      "$date": {
        "$numberLong": "1684611636553"
      }
    },
    "inicio": 18,
    "fim": 22,
    "valortotal": 302,
    "observacao": "Observação 458",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e7b"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 35",
    "funcionario": "Funcionário 37",
    "data": {
      "$date": {
        "$numberLong": "1684611636553"
      }
    },
    "inicio": 16,
    "fim": 22,
    "valortotal": 278,
    "observacao": "Observação 459",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e7c"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 81",
    "funcionario": "Funcionário 20",
    "data": {
      "$date": {
        "$numberLong": "1684611636553"
      }
    },
    "inicio": 17,
    "fim": 19,
    "valortotal": 452,
    "observacao": "Observação 460",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e7d"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 89",
    "funcionario": "Funcionário 43",
    "data": {
      "$date": {
        "$numberLong": "1684611636553"
      }
    },
    "inicio": 13,
    "fim": 22,
    "valortotal": 438,
    "observacao": "Observação 461",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e7e"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 31",
    "funcionario": "Funcionário 13",
    "data": {
      "$date": {
        "$numberLong": "1684611636553"
      }
    },
    "inicio": 10,
    "fim": 21,
    "valortotal": 297,
    "observacao": "Observação 462",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e7f"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 89",
    "funcionario": "Funcionário 16",
    "data": {
      "$date": {
        "$numberLong": "1684611636553"
      }
    },
    "inicio": 8,
    "fim": 21,
    "valortotal": 385,
    "observacao": "Observação 463",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e80"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 65",
    "funcionario": "Funcionário 24",
    "data": {
      "$date": {
        "$numberLong": "1684611636553"
      }
    },
    "inicio": 9,
    "fim": 21,
    "valortotal": 127,
    "observacao": "Observação 464",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e81"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 36",
    "funcionario": "Funcionário 26",
    "data": {
      "$date": {
        "$numberLong": "1684611636553"
      }
    },
    "inicio": 11,
    "fim": 21,
    "valortotal": 205,
    "observacao": "Observação 465",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e82"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 51",
    "funcionario": "Funcionário 9",
    "data": {
      "$date": {
        "$numberLong": "1684611636553"
      }
    },
    "inicio": 8,
    "fim": 20,
    "valortotal": 435,
    "observacao": "Observação 466",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e83"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 64",
    "funcionario": "Funcionário 49",
    "data": {
      "$date": {
        "$numberLong": "1684611636554"
      }
    },
    "inicio": 17,
    "fim": 22,
    "valortotal": 85,
    "observacao": "Observação 467",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e84"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 97",
    "funcionario": "Funcionário 15",
    "data": {
      "$date": {
        "$numberLong": "1684611636554"
      }
    },
    "inicio": 10,
    "fim": 21,
    "valortotal": 204,
    "observacao": "Observação 468",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e85"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 56",
    "funcionario": "Funcionário 5",
    "data": {
      "$date": {
        "$numberLong": "1684611636554"
      }
    },
    "inicio": 9,
    "fim": 21,
    "valortotal": 270,
    "observacao": "Observação 469",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e86"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 54",
    "funcionario": "Funcionário 19",
    "data": {
      "$date": {
        "$numberLong": "1684611636554"
      }
    },
    "inicio": 13,
    "fim": 22,
    "valortotal": 96,
    "observacao": "Observação 470",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e87"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 37",
    "funcionario": "Funcionário 16",
    "data": {
      "$date": {
        "$numberLong": "1684611636554"
      }
    },
    "inicio": 11,
    "fim": 20,
    "valortotal": 118,
    "observacao": "Observação 471",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e88"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 77",
    "funcionario": "Funcionário 37",
    "data": {
      "$date": {
        "$numberLong": "1684611636554"
      }
    },
    "inicio": 10,
    "fim": 19,
    "valortotal": 182,
    "observacao": "Observação 472",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e89"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 6",
    "funcionario": "Funcionário 16",
    "data": {
      "$date": {
        "$numberLong": "1684611636554"
      }
    },
    "inicio": 12,
    "fim": 21,
    "valortotal": 486,
    "observacao": "Observação 473",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e8a"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 76",
    "funcionario": "Funcionário 25",
    "data": {
      "$date": {
        "$numberLong": "1684611636554"
      }
    },
    "inicio": 17,
    "fim": 19,
    "valortotal": 112,
    "observacao": "Observação 474",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e8b"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 32",
    "funcionario": "Funcionário 2",
    "data": {
      "$date": {
        "$numberLong": "1684611636554"
      }
    },
    "inicio": 16,
    "fim": 22,
    "valortotal": 444,
    "observacao": "Observação 475",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e8c"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 89",
    "funcionario": "Funcionário 21",
    "data": {
      "$date": {
        "$numberLong": "1684611636554"
      }
    },
    "inicio": 12,
    "fim": 20,
    "valortotal": 456,
    "observacao": "Observação 476",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e8d"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 63",
    "funcionario": "Funcionário 46",
    "data": {
      "$date": {
        "$numberLong": "1684611636554"
      }
    },
    "inicio": 13,
    "fim": 20,
    "valortotal": 493,
    "observacao": "Observação 477",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e8e"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 9",
    "funcionario": "Funcionário 28",
    "data": {
      "$date": {
        "$numberLong": "1684611636554"
      }
    },
    "inicio": 9,
    "fim": 22,
    "valortotal": 375,
    "observacao": "Observação 478",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e8f"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 23",
    "funcionario": "Funcionário 20",
    "data": {
      "$date": {
        "$numberLong": "1684611636554"
      }
    },
    "inicio": 8,
    "fim": 21,
    "valortotal": 344,
    "observacao": "Observação 479",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e90"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 23",
    "funcionario": "Funcionário 3",
    "data": {
      "$date": {
        "$numberLong": "1684611636554"
      }
    },
    "inicio": 12,
    "fim": 21,
    "valortotal": 298,
    "observacao": "Observação 480",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e91"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 40",
    "funcionario": "Funcionário 13",
    "data": {
      "$date": {
        "$numberLong": "1684611636554"
      }
    },
    "inicio": 10,
    "fim": 19,
    "valortotal": 459,
    "observacao": "Observação 481",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e92"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 77",
    "funcionario": "Funcionário 9",
    "data": {
      "$date": {
        "$numberLong": "1684611636555"
      }
    },
    "inicio": 11,
    "fim": 19,
    "valortotal": 400,
    "observacao": "Observação 482",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e93"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 4",
    "funcionario": "Funcionário 46",
    "data": {
      "$date": {
        "$numberLong": "1684611636555"
      }
    },
    "inicio": 16,
    "fim": 19,
    "valortotal": 238,
    "observacao": "Observação 483",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e94"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 28",
    "funcionario": "Funcionário 9",
    "data": {
      "$date": {
        "$numberLong": "1684611636555"
      }
    },
    "inicio": 17,
    "fim": 19,
    "valortotal": 469,
    "observacao": "Observação 484",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e95"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 29",
    "funcionario": "Funcionário 9",
    "data": {
      "$date": {
        "$numberLong": "1684611636555"
      }
    },
    "inicio": 13,
    "fim": 22,
    "valortotal": 434,
    "observacao": "Observação 485",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e96"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 66",
    "funcionario": "Funcionário 13",
    "data": {
      "$date": {
        "$numberLong": "1684611636555"
      }
    },
    "inicio": 18,
    "fim": 21,
    "valortotal": 177,
    "observacao": "Observação 486",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e97"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 14",
    "funcionario": "Funcionário 30",
    "data": {
      "$date": {
        "$numberLong": "1684611636555"
      }
    },
    "inicio": 15,
    "fim": 22,
    "valortotal": 475,
    "observacao": "Observação 487",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e98"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 87",
    "funcionario": "Funcionário 23",
    "data": {
      "$date": {
        "$numberLong": "1684611636555"
      }
    },
    "inicio": 18,
    "fim": 22,
    "valortotal": 459,
    "observacao": "Observação 488",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e99"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 46",
    "funcionario": "Funcionário 15",
    "data": {
      "$date": {
        "$numberLong": "1684611636555"
      }
    },
    "inicio": 11,
    "fim": 20,
    "valortotal": 69,
    "observacao": "Observação 489",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e9a"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 74",
    "funcionario": "Funcionário 6",
    "data": {
      "$date": {
        "$numberLong": "1684611636555"
      }
    },
    "inicio": 16,
    "fim": 19,
    "valortotal": 251,
    "observacao": "Observação 490",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e9b"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 25",
    "funcionario": "Funcionário 44",
    "data": {
      "$date": {
        "$numberLong": "1684611636555"
      }
    },
    "inicio": 12,
    "fim": 20,
    "valortotal": 488,
    "observacao": "Observação 491",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e9c"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 59",
    "funcionario": "Funcionário 50",
    "data": {
      "$date": {
        "$numberLong": "1684611636555"
      }
    },
    "inicio": 16,
    "fim": 22,
    "valortotal": 159,
    "observacao": "Observação 492",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e9d"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 71",
    "funcionario": "Funcionário 18",
    "data": {
      "$date": {
        "$numberLong": "1684611636555"
      }
    },
    "inicio": 13,
    "fim": 20,
    "valortotal": 256,
    "observacao": "Observação 493",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e9e"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 84",
    "funcionario": "Funcionário 4",
    "data": {
      "$date": {
        "$numberLong": "1684611636555"
      }
    },
    "inicio": 18,
    "fim": 19,
    "valortotal": 53,
    "observacao": "Observação 494",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833e9f"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 85",
    "funcionario": "Funcionário 19",
    "data": {
      "$date": {
        "$numberLong": "1684611636555"
      }
    },
    "inicio": 18,
    "fim": 22,
    "valortotal": 293,
    "observacao": "Observação 495",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ea0"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 40",
    "funcionario": "Funcionário 12",
    "data": {
      "$date": {
        "$numberLong": "1684611636555"
      }
    },
    "inicio": 18,
    "fim": 22,
    "valortotal": 306,
    "observacao": "Observação 496",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ea1"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 1",
    "funcionario": "Funcionário 8",
    "data": {
      "$date": {
        "$numberLong": "1684611636555"
      }
    },
    "inicio": 17,
    "fim": 21,
    "valortotal": 159,
    "observacao": "Observação 497",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ea2"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 100",
    "funcionario": "Funcionário 13",
    "data": {
      "$date": {
        "$numberLong": "1684611636555"
      }
    },
    "inicio": 11,
    "fim": 20,
    "valortotal": 500,
    "observacao": "Observação 498",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ea3"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 77",
    "funcionario": "Funcionário 40",
    "data": {
      "$date": {
        "$numberLong": "1684611636555"
      }
    },
    "inicio": 18,
    "fim": 20,
    "valortotal": 86,
    "observacao": "Observação 499",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ea4"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 78",
    "funcionario": "Funcionário 2",
    "data": {
      "$date": {
        "$numberLong": "1684611636556"
      }
    },
    "inicio": 14,
    "fim": 19,
    "valortotal": 163,
    "observacao": "Observação 500",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ea5"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 2",
    "funcionario": "Funcionário 42",
    "data": {
      "$date": {
        "$numberLong": "1684611636556"
      }
    },
    "inicio": 10,
    "fim": 22,
    "valortotal": 109,
    "observacao": "Observação 501",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ea6"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 90",
    "funcionario": "Funcionário 35",
    "data": {
      "$date": {
        "$numberLong": "1684611636556"
      }
    },
    "inicio": 13,
    "fim": 20,
    "valortotal": 459,
    "observacao": "Observação 502",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ea7"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 95",
    "funcionario": "Funcionário 50",
    "data": {
      "$date": {
        "$numberLong": "1684611636556"
      }
    },
    "inicio": 13,
    "fim": 22,
    "valortotal": 72,
    "observacao": "Observação 503",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ea8"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 95",
    "funcionario": "Funcionário 39",
    "data": {
      "$date": {
        "$numberLong": "1684611636556"
      }
    },
    "inicio": 14,
    "fim": 19,
    "valortotal": 288,
    "observacao": "Observação 504",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ea9"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 91",
    "funcionario": "Funcionário 23",
    "data": {
      "$date": {
        "$numberLong": "1684611636556"
      }
    },
    "inicio": 18,
    "fim": 22,
    "valortotal": 148,
    "observacao": "Observação 505",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833eaa"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 83",
    "funcionario": "Funcionário 1",
    "data": {
      "$date": {
        "$numberLong": "1684611636556"
      }
    },
    "inicio": 13,
    "fim": 22,
    "valortotal": 164,
    "observacao": "Observação 506",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833eab"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 8",
    "funcionario": "Funcionário 30",
    "data": {
      "$date": {
        "$numberLong": "1684611636556"
      }
    },
    "inicio": 9,
    "fim": 20,
    "valortotal": 446,
    "observacao": "Observação 507",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833eac"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 65",
    "funcionario": "Funcionário 40",
    "data": {
      "$date": {
        "$numberLong": "1684611636556"
      }
    },
    "inicio": 8,
    "fim": 22,
    "valortotal": 256,
    "observacao": "Observação 508",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ead"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 70",
    "funcionario": "Funcionário 42",
    "data": {
      "$date": {
        "$numberLong": "1684611636556"
      }
    },
    "inicio": 10,
    "fim": 20,
    "valortotal": 182,
    "observacao": "Observação 509",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833eae"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 95",
    "funcionario": "Funcionário 14",
    "data": {
      "$date": {
        "$numberLong": "1684611636556"
      }
    },
    "inicio": 8,
    "fim": 19,
    "valortotal": 275,
    "observacao": "Observação 510",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833eaf"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 17",
    "funcionario": "Funcionário 21",
    "data": {
      "$date": {
        "$numberLong": "1684611636556"
      }
    },
    "inicio": 18,
    "fim": 20,
    "valortotal": 145,
    "observacao": "Observação 511",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833eb0"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 7",
    "funcionario": "Funcionário 5",
    "data": {
      "$date": {
        "$numberLong": "1684611636556"
      }
    },
    "inicio": 11,
    "fim": 22,
    "valortotal": 283,
    "observacao": "Observação 512",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833eb1"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 24",
    "funcionario": "Funcionário 46",
    "data": {
      "$date": {
        "$numberLong": "1684611636556"
      }
    },
    "inicio": 10,
    "fim": 20,
    "valortotal": 69,
    "observacao": "Observação 513",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833eb2"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 27",
    "funcionario": "Funcionário 7",
    "data": {
      "$date": {
        "$numberLong": "1684611636556"
      }
    },
    "inicio": 16,
    "fim": 20,
    "valortotal": 201,
    "observacao": "Observação 514",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833eb3"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 25",
    "funcionario": "Funcionário 48",
    "data": {
      "$date": {
        "$numberLong": "1684611636557"
      }
    },
    "inicio": 10,
    "fim": 22,
    "valortotal": 161,
    "observacao": "Observação 515",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833eb4"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 85",
    "funcionario": "Funcionário 3",
    "data": {
      "$date": {
        "$numberLong": "1684611636557"
      }
    },
    "inicio": 8,
    "fim": 19,
    "valortotal": 103,
    "observacao": "Observação 516",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833eb5"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 55",
    "funcionario": "Funcionário 48",
    "data": {
      "$date": {
        "$numberLong": "1684611636557"
      }
    },
    "inicio": 13,
    "fim": 19,
    "valortotal": 282,
    "observacao": "Observação 517",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833eb6"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 1",
    "funcionario": "Funcionário 24",
    "data": {
      "$date": {
        "$numberLong": "1684611636557"
      }
    },
    "inicio": 13,
    "fim": 22,
    "valortotal": 435,
    "observacao": "Observação 518",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833eb7"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 9",
    "funcionario": "Funcionário 42",
    "data": {
      "$date": {
        "$numberLong": "1684611636557"
      }
    },
    "inicio": 16,
    "fim": 21,
    "valortotal": 306,
    "observacao": "Observação 519",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833eb8"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 32",
    "funcionario": "Funcionário 16",
    "data": {
      "$date": {
        "$numberLong": "1684611636557"
      }
    },
    "inicio": 12,
    "fim": 19,
    "valortotal": 190,
    "observacao": "Observação 520",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833eb9"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 75",
    "funcionario": "Funcionário 33",
    "data": {
      "$date": {
        "$numberLong": "1684611636557"
      }
    },
    "inicio": 11,
    "fim": 19,
    "valortotal": 128,
    "observacao": "Observação 521",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833eba"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 66",
    "funcionario": "Funcionário 50",
    "data": {
      "$date": {
        "$numberLong": "1684611636557"
      }
    },
    "inicio": 10,
    "fim": 20,
    "valortotal": 255,
    "observacao": "Observação 522",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ebb"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 3",
    "funcionario": "Funcionário 48",
    "data": {
      "$date": {
        "$numberLong": "1684611636557"
      }
    },
    "inicio": 11,
    "fim": 20,
    "valortotal": 280,
    "observacao": "Observação 523",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ebc"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 81",
    "funcionario": "Funcionário 44",
    "data": {
      "$date": {
        "$numberLong": "1684611636557"
      }
    },
    "inicio": 15,
    "fim": 22,
    "valortotal": 364,
    "observacao": "Observação 524",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ebd"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 89",
    "funcionario": "Funcionário 45",
    "data": {
      "$date": {
        "$numberLong": "1684611636557"
      }
    },
    "inicio": 13,
    "fim": 21,
    "valortotal": 415,
    "observacao": "Observação 525",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ebe"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 29",
    "funcionario": "Funcionário 34",
    "data": {
      "$date": {
        "$numberLong": "1684611636557"
      }
    },
    "inicio": 11,
    "fim": 21,
    "valortotal": 268,
    "observacao": "Observação 526",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ebf"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 15",
    "funcionario": "Funcionário 45",
    "data": {
      "$date": {
        "$numberLong": "1684611636557"
      }
    },
    "inicio": 10,
    "fim": 20,
    "valortotal": 443,
    "observacao": "Observação 527",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ec0"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 8",
    "funcionario": "Funcionário 32",
    "data": {
      "$date": {
        "$numberLong": "1684611636557"
      }
    },
    "inicio": 17,
    "fim": 19,
    "valortotal": 374,
    "observacao": "Observação 528",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ec1"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 9",
    "funcionario": "Funcionário 49",
    "data": {
      "$date": {
        "$numberLong": "1684611636557"
      }
    },
    "inicio": 16,
    "fim": 22,
    "valortotal": 374,
    "observacao": "Observação 529",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ec2"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 10",
    "funcionario": "Funcionário 26",
    "data": {
      "$date": {
        "$numberLong": "1684611636557"
      }
    },
    "inicio": 8,
    "fim": 21,
    "valortotal": 271,
    "observacao": "Observação 530",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ec3"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 31",
    "funcionario": "Funcionário 6",
    "data": {
      "$date": {
        "$numberLong": "1684611636557"
      }
    },
    "inicio": 8,
    "fim": 22,
    "valortotal": 182,
    "observacao": "Observação 531",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ec4"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 6",
    "funcionario": "Funcionário 13",
    "data": {
      "$date": {
        "$numberLong": "1684611636558"
      }
    },
    "inicio": 12,
    "fim": 22,
    "valortotal": 261,
    "observacao": "Observação 532",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ec5"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 76",
    "funcionario": "Funcionário 5",
    "data": {
      "$date": {
        "$numberLong": "1684611636558"
      }
    },
    "inicio": 14,
    "fim": 20,
    "valortotal": 145,
    "observacao": "Observação 533",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ec6"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 74",
    "funcionario": "Funcionário 10",
    "data": {
      "$date": {
        "$numberLong": "1684611636558"
      }
    },
    "inicio": 14,
    "fim": 21,
    "valortotal": 361,
    "observacao": "Observação 534",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ec7"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 21",
    "funcionario": "Funcionário 28",
    "data": {
      "$date": {
        "$numberLong": "1684611636558"
      }
    },
    "inicio": 17,
    "fim": 19,
    "valortotal": 419,
    "observacao": "Observação 535",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ec8"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 39",
    "funcionario": "Funcionário 37",
    "data": {
      "$date": {
        "$numberLong": "1684611636558"
      }
    },
    "inicio": 11,
    "fim": 19,
    "valortotal": 451,
    "observacao": "Observação 536",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ec9"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 86",
    "funcionario": "Funcionário 4",
    "data": {
      "$date": {
        "$numberLong": "1684611636558"
      }
    },
    "inicio": 12,
    "fim": 21,
    "valortotal": 453,
    "observacao": "Observação 537",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833eca"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 6",
    "funcionario": "Funcionário 15",
    "data": {
      "$date": {
        "$numberLong": "1684611636558"
      }
    },
    "inicio": 13,
    "fim": 20,
    "valortotal": 386,
    "observacao": "Observação 538",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ecb"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 79",
    "funcionario": "Funcionário 14",
    "data": {
      "$date": {
        "$numberLong": "1684611636558"
      }
    },
    "inicio": 11,
    "fim": 22,
    "valortotal": 98,
    "observacao": "Observação 539",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ecc"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 88",
    "funcionario": "Funcionário 31",
    "data": {
      "$date": {
        "$numberLong": "1684611636558"
      }
    },
    "inicio": 14,
    "fim": 21,
    "valortotal": 212,
    "observacao": "Observação 540",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ecd"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 53",
    "funcionario": "Funcionário 18",
    "data": {
      "$date": {
        "$numberLong": "1684611636558"
      }
    },
    "inicio": 17,
    "fim": 20,
    "valortotal": 354,
    "observacao": "Observação 541",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ece"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 61",
    "funcionario": "Funcionário 27",
    "data": {
      "$date": {
        "$numberLong": "1684611636558"
      }
    },
    "inicio": 14,
    "fim": 20,
    "valortotal": 458,
    "observacao": "Observação 542",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ecf"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 30",
    "funcionario": "Funcionário 45",
    "data": {
      "$date": {
        "$numberLong": "1684611636558"
      }
    },
    "inicio": 11,
    "fim": 21,
    "valortotal": 231,
    "observacao": "Observação 543",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ed0"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 84",
    "funcionario": "Funcionário 16",
    "data": {
      "$date": {
        "$numberLong": "1684611636558"
      }
    },
    "inicio": 9,
    "fim": 22,
    "valortotal": 156,
    "observacao": "Observação 544",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ed1"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 4",
    "funcionario": "Funcionário 3",
    "data": {
      "$date": {
        "$numberLong": "1684611636558"
      }
    },
    "inicio": 8,
    "fim": 21,
    "valortotal": 368,
    "observacao": "Observação 545",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ed2"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 13",
    "funcionario": "Funcionário 31",
    "data": {
      "$date": {
        "$numberLong": "1684611636558"
      }
    },
    "inicio": 17,
    "fim": 21,
    "valortotal": 304,
    "observacao": "Observação 546",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ed3"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 92",
    "funcionario": "Funcionário 5",
    "data": {
      "$date": {
        "$numberLong": "1684611636558"
      }
    },
    "inicio": 8,
    "fim": 22,
    "valortotal": 436,
    "observacao": "Observação 547",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ed4"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 77",
    "funcionario": "Funcionário 13",
    "data": {
      "$date": {
        "$numberLong": "1684611636558"
      }
    },
    "inicio": 9,
    "fim": 22,
    "valortotal": 373,
    "observacao": "Observação 548",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ed5"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 61",
    "funcionario": "Funcionário 22",
    "data": {
      "$date": {
        "$numberLong": "1684611636558"
      }
    },
    "inicio": 15,
    "fim": 21,
    "valortotal": 73,
    "observacao": "Observação 549",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ed6"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 81",
    "funcionario": "Funcionário 2",
    "data": {
      "$date": {
        "$numberLong": "1684611636559"
      }
    },
    "inicio": 18,
    "fim": 19,
    "valortotal": 103,
    "observacao": "Observação 550",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ed7"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 82",
    "funcionario": "Funcionário 42",
    "data": {
      "$date": {
        "$numberLong": "1684611636559"
      }
    },
    "inicio": 12,
    "fim": 21,
    "valortotal": 368,
    "observacao": "Observação 551",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ed8"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 7",
    "funcionario": "Funcionário 40",
    "data": {
      "$date": {
        "$numberLong": "1684611636559"
      }
    },
    "inicio": 11,
    "fim": 22,
    "valortotal": 247,
    "observacao": "Observação 552",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ed9"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 25",
    "funcionario": "Funcionário 9",
    "data": {
      "$date": {
        "$numberLong": "1684611636559"
      }
    },
    "inicio": 17,
    "fim": 20,
    "valortotal": 395,
    "observacao": "Observação 553",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833eda"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 51",
    "funcionario": "Funcionário 18",
    "data": {
      "$date": {
        "$numberLong": "1684611636559"
      }
    },
    "inicio": 9,
    "fim": 21,
    "valortotal": 486,
    "observacao": "Observação 554",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833edb"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 67",
    "funcionario": "Funcionário 44",
    "data": {
      "$date": {
        "$numberLong": "1684611636559"
      }
    },
    "inicio": 12,
    "fim": 22,
    "valortotal": 223,
    "observacao": "Observação 555",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833edc"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 18",
    "funcionario": "Funcionário 38",
    "data": {
      "$date": {
        "$numberLong": "1684611636559"
      }
    },
    "inicio": 18,
    "fim": 20,
    "valortotal": 457,
    "observacao": "Observação 556",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833edd"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 98",
    "funcionario": "Funcionário 27",
    "data": {
      "$date": {
        "$numberLong": "1684611636559"
      }
    },
    "inicio": 11,
    "fim": 20,
    "valortotal": 446,
    "observacao": "Observação 557",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ede"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 37",
    "funcionario": "Funcionário 48",
    "data": {
      "$date": {
        "$numberLong": "1684611636559"
      }
    },
    "inicio": 8,
    "fim": 22,
    "valortotal": 123,
    "observacao": "Observação 558",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833edf"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 65",
    "funcionario": "Funcionário 46",
    "data": {
      "$date": {
        "$numberLong": "1684611636559"
      }
    },
    "inicio": 9,
    "fim": 19,
    "valortotal": 444,
    "observacao": "Observação 559",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ee0"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 97",
    "funcionario": "Funcionário 17",
    "data": {
      "$date": {
        "$numberLong": "1684611636559"
      }
    },
    "inicio": 16,
    "fim": 22,
    "valortotal": 120,
    "observacao": "Observação 560",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ee1"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 20",
    "funcionario": "Funcionário 44",
    "data": {
      "$date": {
        "$numberLong": "1684611636559"
      }
    },
    "inicio": 14,
    "fim": 21,
    "valortotal": 72,
    "observacao": "Observação 561",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ee2"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 59",
    "funcionario": "Funcionário 20",
    "data": {
      "$date": {
        "$numberLong": "1684611636559"
      }
    },
    "inicio": 11,
    "fim": 21,
    "valortotal": 453,
    "observacao": "Observação 562",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ee3"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 8",
    "funcionario": "Funcionário 49",
    "data": {
      "$date": {
        "$numberLong": "1684611636559"
      }
    },
    "inicio": 10,
    "fim": 20,
    "valortotal": 430,
    "observacao": "Observação 563",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ee4"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 31",
    "funcionario": "Funcionário 8",
    "data": {
      "$date": {
        "$numberLong": "1684611636560"
      }
    },
    "inicio": 14,
    "fim": 22,
    "valortotal": 439,
    "observacao": "Observação 564",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ee5"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 50",
    "funcionario": "Funcionário 8",
    "data": {
      "$date": {
        "$numberLong": "1684611636560"
      }
    },
    "inicio": 16,
    "fim": 20,
    "valortotal": 479,
    "observacao": "Observação 565",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ee6"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 49",
    "funcionario": "Funcionário 2",
    "data": {
      "$date": {
        "$numberLong": "1684611636560"
      }
    },
    "inicio": 11,
    "fim": 21,
    "valortotal": 459,
    "observacao": "Observação 566",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ee7"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 76",
    "funcionario": "Funcionário 34",
    "data": {
      "$date": {
        "$numberLong": "1684611636560"
      }
    },
    "inicio": 13,
    "fim": 19,
    "valortotal": 371,
    "observacao": "Observação 567",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ee8"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 37",
    "funcionario": "Funcionário 3",
    "data": {
      "$date": {
        "$numberLong": "1684611636560"
      }
    },
    "inicio": 17,
    "fim": 19,
    "valortotal": 412,
    "observacao": "Observação 568",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ee9"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 9",
    "funcionario": "Funcionário 25",
    "data": {
      "$date": {
        "$numberLong": "1684611636560"
      }
    },
    "inicio": 16,
    "fim": 21,
    "valortotal": 137,
    "observacao": "Observação 569",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833eea"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 51",
    "funcionario": "Funcionário 34",
    "data": {
      "$date": {
        "$numberLong": "1684611636560"
      }
    },
    "inicio": 8,
    "fim": 19,
    "valortotal": 230,
    "observacao": "Observação 570",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833eeb"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 68",
    "funcionario": "Funcionário 31",
    "data": {
      "$date": {
        "$numberLong": "1684611636560"
      }
    },
    "inicio": 17,
    "fim": 20,
    "valortotal": 236,
    "observacao": "Observação 571",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833eec"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 69",
    "funcionario": "Funcionário 50",
    "data": {
      "$date": {
        "$numberLong": "1684611636560"
      }
    },
    "inicio": 15,
    "fim": 20,
    "valortotal": 344,
    "observacao": "Observação 572",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833eed"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 5",
    "funcionario": "Funcionário 42",
    "data": {
      "$date": {
        "$numberLong": "1684611636560"
      }
    },
    "inicio": 12,
    "fim": 19,
    "valortotal": 270,
    "observacao": "Observação 573",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833eee"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 42",
    "funcionario": "Funcionário 21",
    "data": {
      "$date": {
        "$numberLong": "1684611636560"
      }
    },
    "inicio": 18,
    "fim": 19,
    "valortotal": 389,
    "observacao": "Observação 574",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833eef"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 55",
    "funcionario": "Funcionário 20",
    "data": {
      "$date": {
        "$numberLong": "1684611636560"
      }
    },
    "inicio": 15,
    "fim": 22,
    "valortotal": 228,
    "observacao": "Observação 575",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ef0"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 40",
    "funcionario": "Funcionário 49",
    "data": {
      "$date": {
        "$numberLong": "1684611636560"
      }
    },
    "inicio": 10,
    "fim": 20,
    "valortotal": 59,
    "observacao": "Observação 576",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ef1"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 32",
    "funcionario": "Funcionário 27",
    "data": {
      "$date": {
        "$numberLong": "1684611636560"
      }
    },
    "inicio": 14,
    "fim": 20,
    "valortotal": 65,
    "observacao": "Observação 577",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ef2"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 42",
    "funcionario": "Funcionário 17",
    "data": {
      "$date": {
        "$numberLong": "1684611636561"
      }
    },
    "inicio": 8,
    "fim": 19,
    "valortotal": 142,
    "observacao": "Observação 578",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ef3"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 73",
    "funcionario": "Funcionário 35",
    "data": {
      "$date": {
        "$numberLong": "1684611636561"
      }
    },
    "inicio": 12,
    "fim": 20,
    "valortotal": 75,
    "observacao": "Observação 579",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ef4"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 34",
    "funcionario": "Funcionário 26",
    "data": {
      "$date": {
        "$numberLong": "1684611636561"
      }
    },
    "inicio": 9,
    "fim": 20,
    "valortotal": 362,
    "observacao": "Observação 580",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ef5"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 21",
    "funcionario": "Funcionário 26",
    "data": {
      "$date": {
        "$numberLong": "1684611636561"
      }
    },
    "inicio": 9,
    "fim": 19,
    "valortotal": 256,
    "observacao": "Observação 581",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ef6"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 63",
    "funcionario": "Funcionário 1",
    "data": {
      "$date": {
        "$numberLong": "1684611636561"
      }
    },
    "inicio": 8,
    "fim": 22,
    "valortotal": 368,
    "observacao": "Observação 582",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ef7"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 43",
    "funcionario": "Funcionário 32",
    "data": {
      "$date": {
        "$numberLong": "1684611636561"
      }
    },
    "inicio": 10,
    "fim": 21,
    "valortotal": 213,
    "observacao": "Observação 583",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ef8"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 17",
    "funcionario": "Funcionário 2",
    "data": {
      "$date": {
        "$numberLong": "1684611636561"
      }
    },
    "inicio": 15,
    "fim": 19,
    "valortotal": 320,
    "observacao": "Observação 584",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ef9"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 33",
    "funcionario": "Funcionário 26",
    "data": {
      "$date": {
        "$numberLong": "1684611636561"
      }
    },
    "inicio": 16,
    "fim": 21,
    "valortotal": 439,
    "observacao": "Observação 585",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833efa"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 9",
    "funcionario": "Funcionário 24",
    "data": {
      "$date": {
        "$numberLong": "1684611636561"
      }
    },
    "inicio": 9,
    "fim": 22,
    "valortotal": 364,
    "observacao": "Observação 586",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833efb"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 95",
    "funcionario": "Funcionário 8",
    "data": {
      "$date": {
        "$numberLong": "1684611636561"
      }
    },
    "inicio": 16,
    "fim": 20,
    "valortotal": 197,
    "observacao": "Observação 587",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833efc"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 92",
    "funcionario": "Funcionário 2",
    "data": {
      "$date": {
        "$numberLong": "1684611636561"
      }
    },
    "inicio": 12,
    "fim": 22,
    "valortotal": 358,
    "observacao": "Observação 588",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833efd"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 12",
    "funcionario": "Funcionário 41",
    "data": {
      "$date": {
        "$numberLong": "1684611636561"
      }
    },
    "inicio": 17,
    "fim": 22,
    "valortotal": 317,
    "observacao": "Observação 589",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833efe"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 11",
    "funcionario": "Funcionário 29",
    "data": {
      "$date": {
        "$numberLong": "1684611636562"
      }
    },
    "inicio": 15,
    "fim": 22,
    "valortotal": 282,
    "observacao": "Observação 590",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833eff"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 8",
    "funcionario": "Funcionário 1",
    "data": {
      "$date": {
        "$numberLong": "1684611636562"
      }
    },
    "inicio": 12,
    "fim": 21,
    "valortotal": 486,
    "observacao": "Observação 591",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f00"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 80",
    "funcionario": "Funcionário 31",
    "data": {
      "$date": {
        "$numberLong": "1684611636562"
      }
    },
    "inicio": 17,
    "fim": 19,
    "valortotal": 74,
    "observacao": "Observação 592",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f01"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 61",
    "funcionario": "Funcionário 44",
    "data": {
      "$date": {
        "$numberLong": "1684611636562"
      }
    },
    "inicio": 9,
    "fim": 20,
    "valortotal": 494,
    "observacao": "Observação 593",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f02"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 28",
    "funcionario": "Funcionário 2",
    "data": {
      "$date": {
        "$numberLong": "1684611636562"
      }
    },
    "inicio": 8,
    "fim": 22,
    "valortotal": 185,
    "observacao": "Observação 594",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f03"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 48",
    "funcionario": "Funcionário 9",
    "data": {
      "$date": {
        "$numberLong": "1684611636562"
      }
    },
    "inicio": 17,
    "fim": 20,
    "valortotal": 69,
    "observacao": "Observação 595",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f04"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 74",
    "funcionario": "Funcionário 6",
    "data": {
      "$date": {
        "$numberLong": "1684611636562"
      }
    },
    "inicio": 9,
    "fim": 21,
    "valortotal": 396,
    "observacao": "Observação 596",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f05"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 83",
    "funcionario": "Funcionário 13",
    "data": {
      "$date": {
        "$numberLong": "1684611636562"
      }
    },
    "inicio": 16,
    "fim": 20,
    "valortotal": 324,
    "observacao": "Observação 597",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f06"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 32",
    "funcionario": "Funcionário 28",
    "data": {
      "$date": {
        "$numberLong": "1684611636562"
      }
    },
    "inicio": 11,
    "fim": 20,
    "valortotal": 184,
    "observacao": "Observação 598",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f07"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 30",
    "funcionario": "Funcionário 25",
    "data": {
      "$date": {
        "$numberLong": "1684611636562"
      }
    },
    "inicio": 13,
    "fim": 21,
    "valortotal": 74,
    "observacao": "Observação 599",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f08"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 58",
    "funcionario": "Funcionário 1",
    "data": {
      "$date": {
        "$numberLong": "1684611636562"
      }
    },
    "inicio": 16,
    "fim": 21,
    "valortotal": 172,
    "observacao": "Observação 600",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f09"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 100",
    "funcionario": "Funcionário 44",
    "data": {
      "$date": {
        "$numberLong": "1684611636562"
      }
    },
    "inicio": 8,
    "fim": 19,
    "valortotal": 272,
    "observacao": "Observação 601",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f0a"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 3",
    "funcionario": "Funcionário 49",
    "data": {
      "$date": {
        "$numberLong": "1684611636562"
      }
    },
    "inicio": 17,
    "fim": 21,
    "valortotal": 427,
    "observacao": "Observação 602",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f0b"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 90",
    "funcionario": "Funcionário 32",
    "data": {
      "$date": {
        "$numberLong": "1684611636562"
      }
    },
    "inicio": 14,
    "fim": 20,
    "valortotal": 261,
    "observacao": "Observação 603",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f0c"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 58",
    "funcionario": "Funcionário 37",
    "data": {
      "$date": {
        "$numberLong": "1684611636562"
      }
    },
    "inicio": 13,
    "fim": 19,
    "valortotal": 264,
    "observacao": "Observação 604",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f0d"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 26",
    "funcionario": "Funcionário 37",
    "data": {
      "$date": {
        "$numberLong": "1684611636563"
      }
    },
    "inicio": 15,
    "fim": 22,
    "valortotal": 69,
    "observacao": "Observação 605",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f0e"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 87",
    "funcionario": "Funcionário 45",
    "data": {
      "$date": {
        "$numberLong": "1684611636563"
      }
    },
    "inicio": 14,
    "fim": 20,
    "valortotal": 123,
    "observacao": "Observação 606",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f0f"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 86",
    "funcionario": "Funcionário 50",
    "data": {
      "$date": {
        "$numberLong": "1684611636563"
      }
    },
    "inicio": 16,
    "fim": 22,
    "valortotal": 95,
    "observacao": "Observação 607",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f10"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 31",
    "funcionario": "Funcionário 1",
    "data": {
      "$date": {
        "$numberLong": "1684611636563"
      }
    },
    "inicio": 14,
    "fim": 19,
    "valortotal": 490,
    "observacao": "Observação 608",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f11"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 8",
    "funcionario": "Funcionário 27",
    "data": {
      "$date": {
        "$numberLong": "1684611636563"
      }
    },
    "inicio": 14,
    "fim": 21,
    "valortotal": 480,
    "observacao": "Observação 609",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f12"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 89",
    "funcionario": "Funcionário 34",
    "data": {
      "$date": {
        "$numberLong": "1684611636563"
      }
    },
    "inicio": 17,
    "fim": 20,
    "valortotal": 173,
    "observacao": "Observação 610",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f13"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 46",
    "funcionario": "Funcionário 38",
    "data": {
      "$date": {
        "$numberLong": "1684611636563"
      }
    },
    "inicio": 8,
    "fim": 22,
    "valortotal": 343,
    "observacao": "Observação 611",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f14"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 32",
    "funcionario": "Funcionário 25",
    "data": {
      "$date": {
        "$numberLong": "1684611636563"
      }
    },
    "inicio": 18,
    "fim": 20,
    "valortotal": 328,
    "observacao": "Observação 612",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f15"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 90",
    "funcionario": "Funcionário 30",
    "data": {
      "$date": {
        "$numberLong": "1684611636563"
      }
    },
    "inicio": 12,
    "fim": 20,
    "valortotal": 316,
    "observacao": "Observação 613",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f16"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 46",
    "funcionario": "Funcionário 27",
    "data": {
      "$date": {
        "$numberLong": "1684611636563"
      }
    },
    "inicio": 13,
    "fim": 20,
    "valortotal": 352,
    "observacao": "Observação 614",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f17"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 6",
    "funcionario": "Funcionário 21",
    "data": {
      "$date": {
        "$numberLong": "1684611636563"
      }
    },
    "inicio": 18,
    "fim": 19,
    "valortotal": 412,
    "observacao": "Observação 615",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f18"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 14",
    "funcionario": "Funcionário 49",
    "data": {
      "$date": {
        "$numberLong": "1684611636563"
      }
    },
    "inicio": 13,
    "fim": 19,
    "valortotal": 182,
    "observacao": "Observação 616",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f19"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 1",
    "funcionario": "Funcionário 22",
    "data": {
      "$date": {
        "$numberLong": "1684611636563"
      }
    },
    "inicio": 18,
    "fim": 21,
    "valortotal": 494,
    "observacao": "Observação 617",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f1a"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 65",
    "funcionario": "Funcionário 26",
    "data": {
      "$date": {
        "$numberLong": "1684611636563"
      }
    },
    "inicio": 17,
    "fim": 21,
    "valortotal": 259,
    "observacao": "Observação 618",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f1b"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 57",
    "funcionario": "Funcionário 16",
    "data": {
      "$date": {
        "$numberLong": "1684611636563"
      }
    },
    "inicio": 8,
    "fim": 20,
    "valortotal": 330,
    "observacao": "Observação 619",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f1c"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 5",
    "funcionario": "Funcionário 20",
    "data": {
      "$date": {
        "$numberLong": "1684611636563"
      }
    },
    "inicio": 12,
    "fim": 20,
    "valortotal": 215,
    "observacao": "Observação 620",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f1d"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 48",
    "funcionario": "Funcionário 13",
    "data": {
      "$date": {
        "$numberLong": "1684611636563"
      }
    },
    "inicio": 16,
    "fim": 19,
    "valortotal": 63,
    "observacao": "Observação 621",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f1e"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 23",
    "funcionario": "Funcionário 38",
    "data": {
      "$date": {
        "$numberLong": "1684611636563"
      }
    },
    "inicio": 10,
    "fim": 19,
    "valortotal": 227,
    "observacao": "Observação 622",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f1f"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 94",
    "funcionario": "Funcionário 47",
    "data": {
      "$date": {
        "$numberLong": "1684611636564"
      }
    },
    "inicio": 13,
    "fim": 20,
    "valortotal": 313,
    "observacao": "Observação 623",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f20"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 28",
    "funcionario": "Funcionário 12",
    "data": {
      "$date": {
        "$numberLong": "1684611636564"
      }
    },
    "inicio": 13,
    "fim": 21,
    "valortotal": 271,
    "observacao": "Observação 624",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f21"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 61",
    "funcionario": "Funcionário 25",
    "data": {
      "$date": {
        "$numberLong": "1684611636564"
      }
    },
    "inicio": 13,
    "fim": 20,
    "valortotal": 324,
    "observacao": "Observação 625",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f22"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 4",
    "funcionario": "Funcionário 11",
    "data": {
      "$date": {
        "$numberLong": "1684611636564"
      }
    },
    "inicio": 18,
    "fim": 22,
    "valortotal": 336,
    "observacao": "Observação 626",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f23"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 39",
    "funcionario": "Funcionário 4",
    "data": {
      "$date": {
        "$numberLong": "1684611636564"
      }
    },
    "inicio": 17,
    "fim": 22,
    "valortotal": 300,
    "observacao": "Observação 627",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f24"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 62",
    "funcionario": "Funcionário 13",
    "data": {
      "$date": {
        "$numberLong": "1684611636564"
      }
    },
    "inicio": 17,
    "fim": 20,
    "valortotal": 461,
    "observacao": "Observação 628",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f25"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 4",
    "funcionario": "Funcionário 16",
    "data": {
      "$date": {
        "$numberLong": "1684611636564"
      }
    },
    "inicio": 12,
    "fim": 20,
    "valortotal": 306,
    "observacao": "Observação 629",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f26"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 83",
    "funcionario": "Funcionário 2",
    "data": {
      "$date": {
        "$numberLong": "1684611636564"
      }
    },
    "inicio": 18,
    "fim": 20,
    "valortotal": 333,
    "observacao": "Observação 630",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f27"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 9",
    "funcionario": "Funcionário 46",
    "data": {
      "$date": {
        "$numberLong": "1684611636564"
      }
    },
    "inicio": 13,
    "fim": 22,
    "valortotal": 101,
    "observacao": "Observação 631",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f28"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 74",
    "funcionario": "Funcionário 12",
    "data": {
      "$date": {
        "$numberLong": "1684611636564"
      }
    },
    "inicio": 18,
    "fim": 19,
    "valortotal": 243,
    "observacao": "Observação 632",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f29"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 17",
    "funcionario": "Funcionário 19",
    "data": {
      "$date": {
        "$numberLong": "1684611636564"
      }
    },
    "inicio": 10,
    "fim": 22,
    "valortotal": 207,
    "observacao": "Observação 633",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f2a"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 70",
    "funcionario": "Funcionário 28",
    "data": {
      "$date": {
        "$numberLong": "1684611636564"
      }
    },
    "inicio": 12,
    "fim": 21,
    "valortotal": 353,
    "observacao": "Observação 634",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f2b"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 82",
    "funcionario": "Funcionário 41",
    "data": {
      "$date": {
        "$numberLong": "1684611636564"
      }
    },
    "inicio": 13,
    "fim": 19,
    "valortotal": 101,
    "observacao": "Observação 635",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f2c"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 14",
    "funcionario": "Funcionário 35",
    "data": {
      "$date": {
        "$numberLong": "1684611636564"
      }
    },
    "inicio": 8,
    "fim": 19,
    "valortotal": 103,
    "observacao": "Observação 636",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f2d"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 25",
    "funcionario": "Funcionário 39",
    "data": {
      "$date": {
        "$numberLong": "1684611636564"
      }
    },
    "inicio": 16,
    "fim": 22,
    "valortotal": 473,
    "observacao": "Observação 637",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f2e"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 15",
    "funcionario": "Funcionário 49",
    "data": {
      "$date": {
        "$numberLong": "1684611636564"
      }
    },
    "inicio": 18,
    "fim": 19,
    "valortotal": 324,
    "observacao": "Observação 638",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f2f"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 10",
    "funcionario": "Funcionário 48",
    "data": {
      "$date": {
        "$numberLong": "1684611636564"
      }
    },
    "inicio": 14,
    "fim": 21,
    "valortotal": 203,
    "observacao": "Observação 639",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f30"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 76",
    "funcionario": "Funcionário 8",
    "data": {
      "$date": {
        "$numberLong": "1684611636564"
      }
    },
    "inicio": 13,
    "fim": 21,
    "valortotal": 433,
    "observacao": "Observação 640",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f31"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 84",
    "funcionario": "Funcionário 22",
    "data": {
      "$date": {
        "$numberLong": "1684611636564"
      }
    },
    "inicio": 8,
    "fim": 20,
    "valortotal": 352,
    "observacao": "Observação 641",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f32"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 20",
    "funcionario": "Funcionário 37",
    "data": {
      "$date": {
        "$numberLong": "1684611636565"
      }
    },
    "inicio": 12,
    "fim": 19,
    "valortotal": 204,
    "observacao": "Observação 642",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f33"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 15",
    "funcionario": "Funcionário 2",
    "data": {
      "$date": {
        "$numberLong": "1684611636565"
      }
    },
    "inicio": 17,
    "fim": 22,
    "valortotal": 455,
    "observacao": "Observação 643",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f34"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 83",
    "funcionario": "Funcionário 37",
    "data": {
      "$date": {
        "$numberLong": "1684611636565"
      }
    },
    "inicio": 8,
    "fim": 22,
    "valortotal": 161,
    "observacao": "Observação 644",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f35"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 20",
    "funcionario": "Funcionário 22",
    "data": {
      "$date": {
        "$numberLong": "1684611636565"
      }
    },
    "inicio": 18,
    "fim": 20,
    "valortotal": 345,
    "observacao": "Observação 645",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f36"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 28",
    "funcionario": "Funcionário 40",
    "data": {
      "$date": {
        "$numberLong": "1684611636565"
      }
    },
    "inicio": 10,
    "fim": 20,
    "valortotal": 438,
    "observacao": "Observação 646",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f37"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 48",
    "funcionario": "Funcionário 39",
    "data": {
      "$date": {
        "$numberLong": "1684611636565"
      }
    },
    "inicio": 15,
    "fim": 20,
    "valortotal": 317,
    "observacao": "Observação 647",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f38"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 62",
    "funcionario": "Funcionário 2",
    "data": {
      "$date": {
        "$numberLong": "1684611636565"
      }
    },
    "inicio": 10,
    "fim": 21,
    "valortotal": 405,
    "observacao": "Observação 648",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f39"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 62",
    "funcionario": "Funcionário 35",
    "data": {
      "$date": {
        "$numberLong": "1684611636565"
      }
    },
    "inicio": 13,
    "fim": 22,
    "valortotal": 255,
    "observacao": "Observação 649",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f3a"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 9",
    "funcionario": "Funcionário 27",
    "data": {
      "$date": {
        "$numberLong": "1684611636565"
      }
    },
    "inicio": 18,
    "fim": 21,
    "valortotal": 62,
    "observacao": "Observação 650",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f3b"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 72",
    "funcionario": "Funcionário 4",
    "data": {
      "$date": {
        "$numberLong": "1684611636565"
      }
    },
    "inicio": 14,
    "fim": 19,
    "valortotal": 135,
    "observacao": "Observação 651",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f3c"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 83",
    "funcionario": "Funcionário 21",
    "data": {
      "$date": {
        "$numberLong": "1684611636565"
      }
    },
    "inicio": 8,
    "fim": 19,
    "valortotal": 192,
    "observacao": "Observação 652",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f3d"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 15",
    "funcionario": "Funcionário 35",
    "data": {
      "$date": {
        "$numberLong": "1684611636565"
      }
    },
    "inicio": 16,
    "fim": 19,
    "valortotal": 371,
    "observacao": "Observação 653",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f3e"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 16",
    "funcionario": "Funcionário 33",
    "data": {
      "$date": {
        "$numberLong": "1684611636565"
      }
    },
    "inicio": 17,
    "fim": 22,
    "valortotal": 53,
    "observacao": "Observação 654",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f3f"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 10",
    "funcionario": "Funcionário 12",
    "data": {
      "$date": {
        "$numberLong": "1684611636565"
      }
    },
    "inicio": 8,
    "fim": 21,
    "valortotal": 253,
    "observacao": "Observação 655",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f40"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 63",
    "funcionario": "Funcionário 8",
    "data": {
      "$date": {
        "$numberLong": "1684611636565"
      }
    },
    "inicio": 9,
    "fim": 19,
    "valortotal": 69,
    "observacao": "Observação 656",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f41"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 84",
    "funcionario": "Funcionário 5",
    "data": {
      "$date": {
        "$numberLong": "1684611636565"
      }
    },
    "inicio": 18,
    "fim": 21,
    "valortotal": 109,
    "observacao": "Observação 657",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f42"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 9",
    "funcionario": "Funcionário 22",
    "data": {
      "$date": {
        "$numberLong": "1684611636565"
      }
    },
    "inicio": 11,
    "fim": 20,
    "valortotal": 307,
    "observacao": "Observação 658",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f43"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 44",
    "funcionario": "Funcionário 30",
    "data": {
      "$date": {
        "$numberLong": "1684611636565"
      }
    },
    "inicio": 13,
    "fim": 22,
    "valortotal": 369,
    "observacao": "Observação 659",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f44"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 68",
    "funcionario": "Funcionário 47",
    "data": {
      "$date": {
        "$numberLong": "1684611636565"
      }
    },
    "inicio": 11,
    "fim": 20,
    "valortotal": 419,
    "observacao": "Observação 660",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f45"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 70",
    "funcionario": "Funcionário 6",
    "data": {
      "$date": {
        "$numberLong": "1684611636565"
      }
    },
    "inicio": 13,
    "fim": 20,
    "valortotal": 256,
    "observacao": "Observação 661",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f46"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 77",
    "funcionario": "Funcionário 50",
    "data": {
      "$date": {
        "$numberLong": "1684611636566"
      }
    },
    "inicio": 13,
    "fim": 20,
    "valortotal": 370,
    "observacao": "Observação 662",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f47"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 79",
    "funcionario": "Funcionário 8",
    "data": {
      "$date": {
        "$numberLong": "1684611636566"
      }
    },
    "inicio": 10,
    "fim": 21,
    "valortotal": 110,
    "observacao": "Observação 663",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f48"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 85",
    "funcionario": "Funcionário 5",
    "data": {
      "$date": {
        "$numberLong": "1684611636566"
      }
    },
    "inicio": 17,
    "fim": 21,
    "valortotal": 364,
    "observacao": "Observação 664",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f49"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 97",
    "funcionario": "Funcionário 50",
    "data": {
      "$date": {
        "$numberLong": "1684611636566"
      }
    },
    "inicio": 17,
    "fim": 21,
    "valortotal": 475,
    "observacao": "Observação 665",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f4a"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 2",
    "funcionario": "Funcionário 29",
    "data": {
      "$date": {
        "$numberLong": "1684611636566"
      }
    },
    "inicio": 11,
    "fim": 21,
    "valortotal": 117,
    "observacao": "Observação 666",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f4b"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 32",
    "funcionario": "Funcionário 49",
    "data": {
      "$date": {
        "$numberLong": "1684611636566"
      }
    },
    "inicio": 17,
    "fim": 22,
    "valortotal": 70,
    "observacao": "Observação 667",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f4c"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 17",
    "funcionario": "Funcionário 8",
    "data": {
      "$date": {
        "$numberLong": "1684611636566"
      }
    },
    "inicio": 9,
    "fim": 20,
    "valortotal": 441,
    "observacao": "Observação 668",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f4d"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 2",
    "funcionario": "Funcionário 39",
    "data": {
      "$date": {
        "$numberLong": "1684611636566"
      }
    },
    "inicio": 17,
    "fim": 22,
    "valortotal": 417,
    "observacao": "Observação 669",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f4e"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 9",
    "funcionario": "Funcionário 31",
    "data": {
      "$date": {
        "$numberLong": "1684611636566"
      }
    },
    "inicio": 14,
    "fim": 20,
    "valortotal": 63,
    "observacao": "Observação 670",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f4f"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 29",
    "funcionario": "Funcionário 40",
    "data": {
      "$date": {
        "$numberLong": "1684611636566"
      }
    },
    "inicio": 11,
    "fim": 19,
    "valortotal": 74,
    "observacao": "Observação 671",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f50"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 15",
    "funcionario": "Funcionário 3",
    "data": {
      "$date": {
        "$numberLong": "1684611636566"
      }
    },
    "inicio": 14,
    "fim": 19,
    "valortotal": 194,
    "observacao": "Observação 672",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f51"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 5",
    "funcionario": "Funcionário 2",
    "data": {
      "$date": {
        "$numberLong": "1684611636566"
      }
    },
    "inicio": 10,
    "fim": 20,
    "valortotal": 432,
    "observacao": "Observação 673",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f52"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 86",
    "funcionario": "Funcionário 47",
    "data": {
      "$date": {
        "$numberLong": "1684611636566"
      }
    },
    "inicio": 17,
    "fim": 21,
    "valortotal": 134,
    "observacao": "Observação 674",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f53"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 22",
    "funcionario": "Funcionário 35",
    "data": {
      "$date": {
        "$numberLong": "1684611636566"
      }
    },
    "inicio": 15,
    "fim": 21,
    "valortotal": 266,
    "observacao": "Observação 675",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f54"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 27",
    "funcionario": "Funcionário 22",
    "data": {
      "$date": {
        "$numberLong": "1684611636566"
      }
    },
    "inicio": 10,
    "fim": 21,
    "valortotal": 309,
    "observacao": "Observação 676",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f55"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 81",
    "funcionario": "Funcionário 7",
    "data": {
      "$date": {
        "$numberLong": "1684611636566"
      }
    },
    "inicio": 10,
    "fim": 22,
    "valortotal": 441,
    "observacao": "Observação 677",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f56"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 4",
    "funcionario": "Funcionário 13",
    "data": {
      "$date": {
        "$numberLong": "1684611636566"
      }
    },
    "inicio": 12,
    "fim": 20,
    "valortotal": 466,
    "observacao": "Observação 678",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f57"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 51",
    "funcionario": "Funcionário 12",
    "data": {
      "$date": {
        "$numberLong": "1684611636566"
      }
    },
    "inicio": 17,
    "fim": 20,
    "valortotal": 192,
    "observacao": "Observação 679",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f58"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 55",
    "funcionario": "Funcionário 41",
    "data": {
      "$date": {
        "$numberLong": "1684611636566"
      }
    },
    "inicio": 12,
    "fim": 20,
    "valortotal": 360,
    "observacao": "Observação 680",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f59"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 31",
    "funcionario": "Funcionário 31",
    "data": {
      "$date": {
        "$numberLong": "1684611636567"
      }
    },
    "inicio": 8,
    "fim": 20,
    "valortotal": 249,
    "observacao": "Observação 681",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f5a"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 47",
    "funcionario": "Funcionário 49",
    "data": {
      "$date": {
        "$numberLong": "1684611636567"
      }
    },
    "inicio": 14,
    "fim": 22,
    "valortotal": 178,
    "observacao": "Observação 682",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f5b"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 93",
    "funcionario": "Funcionário 42",
    "data": {
      "$date": {
        "$numberLong": "1684611636567"
      }
    },
    "inicio": 16,
    "fim": 19,
    "valortotal": 81,
    "observacao": "Observação 683",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f5c"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 92",
    "funcionario": "Funcionário 46",
    "data": {
      "$date": {
        "$numberLong": "1684611636567"
      }
    },
    "inicio": 9,
    "fim": 21,
    "valortotal": 86,
    "observacao": "Observação 684",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f5d"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 21",
    "funcionario": "Funcionário 24",
    "data": {
      "$date": {
        "$numberLong": "1684611636567"
      }
    },
    "inicio": 15,
    "fim": 19,
    "valortotal": 58,
    "observacao": "Observação 685",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f5e"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 89",
    "funcionario": "Funcionário 28",
    "data": {
      "$date": {
        "$numberLong": "1684611636567"
      }
    },
    "inicio": 12,
    "fim": 19,
    "valortotal": 367,
    "observacao": "Observação 686",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f5f"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 85",
    "funcionario": "Funcionário 5",
    "data": {
      "$date": {
        "$numberLong": "1684611636567"
      }
    },
    "inicio": 10,
    "fim": 19,
    "valortotal": 187,
    "observacao": "Observação 687",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f60"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 91",
    "funcionario": "Funcionário 35",
    "data": {
      "$date": {
        "$numberLong": "1684611636567"
      }
    },
    "inicio": 17,
    "fim": 22,
    "valortotal": 98,
    "observacao": "Observação 688",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f61"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 90",
    "funcionario": "Funcionário 41",
    "data": {
      "$date": {
        "$numberLong": "1684611636567"
      }
    },
    "inicio": 10,
    "fim": 19,
    "valortotal": 203,
    "observacao": "Observação 689",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f62"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 17",
    "funcionario": "Funcionário 28",
    "data": {
      "$date": {
        "$numberLong": "1684611636567"
      }
    },
    "inicio": 18,
    "fim": 20,
    "valortotal": 377,
    "observacao": "Observação 690",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f63"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 57",
    "funcionario": "Funcionário 38",
    "data": {
      "$date": {
        "$numberLong": "1684611636567"
      }
    },
    "inicio": 8,
    "fim": 20,
    "valortotal": 361,
    "observacao": "Observação 691",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f64"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 81",
    "funcionario": "Funcionário 33",
    "data": {
      "$date": {
        "$numberLong": "1684611636567"
      }
    },
    "inicio": 17,
    "fim": 20,
    "valortotal": 51,
    "observacao": "Observação 692",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f65"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 16",
    "funcionario": "Funcionário 28",
    "data": {
      "$date": {
        "$numberLong": "1684611636567"
      }
    },
    "inicio": 17,
    "fim": 19,
    "valortotal": 397,
    "observacao": "Observação 693",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f66"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 17",
    "funcionario": "Funcionário 43",
    "data": {
      "$date": {
        "$numberLong": "1684611636567"
      }
    },
    "inicio": 9,
    "fim": 20,
    "valortotal": 266,
    "observacao": "Observação 694",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f67"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 71",
    "funcionario": "Funcionário 37",
    "data": {
      "$date": {
        "$numberLong": "1684611636567"
      }
    },
    "inicio": 18,
    "fim": 19,
    "valortotal": 272,
    "observacao": "Observação 695",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f68"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 10",
    "funcionario": "Funcionário 23",
    "data": {
      "$date": {
        "$numberLong": "1684611636567"
      }
    },
    "inicio": 9,
    "fim": 22,
    "valortotal": 389,
    "observacao": "Observação 696",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f69"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 93",
    "funcionario": "Funcionário 23",
    "data": {
      "$date": {
        "$numberLong": "1684611636567"
      }
    },
    "inicio": 8,
    "fim": 22,
    "valortotal": 290,
    "observacao": "Observação 697",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f6a"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 6",
    "funcionario": "Funcionário 42",
    "data": {
      "$date": {
        "$numberLong": "1684611636567"
      }
    },
    "inicio": 18,
    "fim": 20,
    "valortotal": 386,
    "observacao": "Observação 698",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f6b"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 4",
    "funcionario": "Funcionário 13",
    "data": {
      "$date": {
        "$numberLong": "1684611636567"
      }
    },
    "inicio": 10,
    "fim": 20,
    "valortotal": 205,
    "observacao": "Observação 699",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f6c"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 74",
    "funcionario": "Funcionário 25",
    "data": {
      "$date": {
        "$numberLong": "1684611636568"
      }
    },
    "inicio": 11,
    "fim": 22,
    "valortotal": 286,
    "observacao": "Observação 700",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f6d"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 52",
    "funcionario": "Funcionário 23",
    "data": {
      "$date": {
        "$numberLong": "1684611636568"
      }
    },
    "inicio": 11,
    "fim": 21,
    "valortotal": 431,
    "observacao": "Observação 701",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f6e"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 44",
    "funcionario": "Funcionário 8",
    "data": {
      "$date": {
        "$numberLong": "1684611636568"
      }
    },
    "inicio": 18,
    "fim": 19,
    "valortotal": 455,
    "observacao": "Observação 702",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f6f"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 83",
    "funcionario": "Funcionário 6",
    "data": {
      "$date": {
        "$numberLong": "1684611636568"
      }
    },
    "inicio": 14,
    "fim": 20,
    "valortotal": 223,
    "observacao": "Observação 703",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f70"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 93",
    "funcionario": "Funcionário 41",
    "data": {
      "$date": {
        "$numberLong": "1684611636568"
      }
    },
    "inicio": 10,
    "fim": 22,
    "valortotal": 262,
    "observacao": "Observação 704",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f71"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 91",
    "funcionario": "Funcionário 10",
    "data": {
      "$date": {
        "$numberLong": "1684611636568"
      }
    },
    "inicio": 18,
    "fim": 19,
    "valortotal": 69,
    "observacao": "Observação 705",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f72"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 27",
    "funcionario": "Funcionário 15",
    "data": {
      "$date": {
        "$numberLong": "1684611636568"
      }
    },
    "inicio": 9,
    "fim": 22,
    "valortotal": 350,
    "observacao": "Observação 706",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f73"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 78",
    "funcionario": "Funcionário 48",
    "data": {
      "$date": {
        "$numberLong": "1684611636568"
      }
    },
    "inicio": 16,
    "fim": 20,
    "valortotal": 389,
    "observacao": "Observação 707",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f74"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 31",
    "funcionario": "Funcionário 29",
    "data": {
      "$date": {
        "$numberLong": "1684611636568"
      }
    },
    "inicio": 10,
    "fim": 20,
    "valortotal": 85,
    "observacao": "Observação 708",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f75"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 45",
    "funcionario": "Funcionário 12",
    "data": {
      "$date": {
        "$numberLong": "1684611636568"
      }
    },
    "inicio": 11,
    "fim": 21,
    "valortotal": 258,
    "observacao": "Observação 709",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f76"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 82",
    "funcionario": "Funcionário 35",
    "data": {
      "$date": {
        "$numberLong": "1684611636568"
      }
    },
    "inicio": 15,
    "fim": 21,
    "valortotal": 371,
    "observacao": "Observação 710",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f77"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 84",
    "funcionario": "Funcionário 26",
    "data": {
      "$date": {
        "$numberLong": "1684611636568"
      }
    },
    "inicio": 17,
    "fim": 20,
    "valortotal": 385,
    "observacao": "Observação 711",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f78"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 99",
    "funcionario": "Funcionário 29",
    "data": {
      "$date": {
        "$numberLong": "1684611636568"
      }
    },
    "inicio": 17,
    "fim": 20,
    "valortotal": 383,
    "observacao": "Observação 712",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f79"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 52",
    "funcionario": "Funcionário 11",
    "data": {
      "$date": {
        "$numberLong": "1684611636568"
      }
    },
    "inicio": 8,
    "fim": 22,
    "valortotal": 139,
    "observacao": "Observação 713",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f7a"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 93",
    "funcionario": "Funcionário 12",
    "data": {
      "$date": {
        "$numberLong": "1684611636568"
      }
    },
    "inicio": 17,
    "fim": 19,
    "valortotal": 142,
    "observacao": "Observação 714",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f7b"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 83",
    "funcionario": "Funcionário 40",
    "data": {
      "$date": {
        "$numberLong": "1684611636568"
      }
    },
    "inicio": 15,
    "fim": 19,
    "valortotal": 211,
    "observacao": "Observação 715",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f7c"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 62",
    "funcionario": "Funcionário 7",
    "data": {
      "$date": {
        "$numberLong": "1684611636568"
      }
    },
    "inicio": 15,
    "fim": 20,
    "valortotal": 465,
    "observacao": "Observação 716",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f7d"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 60",
    "funcionario": "Funcionário 12",
    "data": {
      "$date": {
        "$numberLong": "1684611636568"
      }
    },
    "inicio": 15,
    "fim": 22,
    "valortotal": 428,
    "observacao": "Observação 717",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f7e"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 27",
    "funcionario": "Funcionário 43",
    "data": {
      "$date": {
        "$numberLong": "1684611636568"
      }
    },
    "inicio": 17,
    "fim": 21,
    "valortotal": 345,
    "observacao": "Observação 718",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f7f"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 25",
    "funcionario": "Funcionário 47",
    "data": {
      "$date": {
        "$numberLong": "1684611636568"
      }
    },
    "inicio": 9,
    "fim": 20,
    "valortotal": 51,
    "observacao": "Observação 719",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f80"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 89",
    "funcionario": "Funcionário 16",
    "data": {
      "$date": {
        "$numberLong": "1684611636569"
      }
    },
    "inicio": 13,
    "fim": 19,
    "valortotal": 373,
    "observacao": "Observação 720",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f81"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 77",
    "funcionario": "Funcionário 5",
    "data": {
      "$date": {
        "$numberLong": "1684611636569"
      }
    },
    "inicio": 17,
    "fim": 21,
    "valortotal": 257,
    "observacao": "Observação 721",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f82"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 47",
    "funcionario": "Funcionário 28",
    "data": {
      "$date": {
        "$numberLong": "1684611636569"
      }
    },
    "inicio": 17,
    "fim": 20,
    "valortotal": 479,
    "observacao": "Observação 722",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f83"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 54",
    "funcionario": "Funcionário 17",
    "data": {
      "$date": {
        "$numberLong": "1684611636569"
      }
    },
    "inicio": 16,
    "fim": 21,
    "valortotal": 444,
    "observacao": "Observação 723",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f84"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 7",
    "funcionario": "Funcionário 27",
    "data": {
      "$date": {
        "$numberLong": "1684611636569"
      }
    },
    "inicio": 11,
    "fim": 21,
    "valortotal": 133,
    "observacao": "Observação 724",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f85"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 88",
    "funcionario": "Funcionário 34",
    "data": {
      "$date": {
        "$numberLong": "1684611636569"
      }
    },
    "inicio": 14,
    "fim": 22,
    "valortotal": 98,
    "observacao": "Observação 725",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f86"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 51",
    "funcionario": "Funcionário 33",
    "data": {
      "$date": {
        "$numberLong": "1684611636569"
      }
    },
    "inicio": 9,
    "fim": 21,
    "valortotal": 414,
    "observacao": "Observação 726",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f87"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 50",
    "funcionario": "Funcionário 3",
    "data": {
      "$date": {
        "$numberLong": "1684611636569"
      }
    },
    "inicio": 15,
    "fim": 22,
    "valortotal": 438,
    "observacao": "Observação 727",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f88"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 96",
    "funcionario": "Funcionário 4",
    "data": {
      "$date": {
        "$numberLong": "1684611636569"
      }
    },
    "inicio": 11,
    "fim": 20,
    "valortotal": 268,
    "observacao": "Observação 728",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f89"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 41",
    "funcionario": "Funcionário 48",
    "data": {
      "$date": {
        "$numberLong": "1684611636569"
      }
    },
    "inicio": 15,
    "fim": 20,
    "valortotal": 380,
    "observacao": "Observação 729",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f8a"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 45",
    "funcionario": "Funcionário 26",
    "data": {
      "$date": {
        "$numberLong": "1684611636569"
      }
    },
    "inicio": 12,
    "fim": 20,
    "valortotal": 226,
    "observacao": "Observação 730",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f8b"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 7",
    "funcionario": "Funcionário 27",
    "data": {
      "$date": {
        "$numberLong": "1684611636569"
      }
    },
    "inicio": 9,
    "fim": 22,
    "valortotal": 375,
    "observacao": "Observação 731",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f8c"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 77",
    "funcionario": "Funcionário 29",
    "data": {
      "$date": {
        "$numberLong": "1684611636569"
      }
    },
    "inicio": 12,
    "fim": 20,
    "valortotal": 374,
    "observacao": "Observação 732",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f8d"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 100",
    "funcionario": "Funcionário 40",
    "data": {
      "$date": {
        "$numberLong": "1684611636569"
      }
    },
    "inicio": 11,
    "fim": 20,
    "valortotal": 454,
    "observacao": "Observação 733",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f8e"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 65",
    "funcionario": "Funcionário 8",
    "data": {
      "$date": {
        "$numberLong": "1684611636569"
      }
    },
    "inicio": 14,
    "fim": 21,
    "valortotal": 430,
    "observacao": "Observação 734",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f8f"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 17",
    "funcionario": "Funcionário 46",
    "data": {
      "$date": {
        "$numberLong": "1684611636569"
      }
    },
    "inicio": 12,
    "fim": 20,
    "valortotal": 183,
    "observacao": "Observação 735",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f90"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 88",
    "funcionario": "Funcionário 25",
    "data": {
      "$date": {
        "$numberLong": "1684611636569"
      }
    },
    "inicio": 10,
    "fim": 20,
    "valortotal": 327,
    "observacao": "Observação 736",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f91"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 97",
    "funcionario": "Funcionário 16",
    "data": {
      "$date": {
        "$numberLong": "1684611636569"
      }
    },
    "inicio": 17,
    "fim": 22,
    "valortotal": 388,
    "observacao": "Observação 737",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f92"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 42",
    "funcionario": "Funcionário 38",
    "data": {
      "$date": {
        "$numberLong": "1684611636569"
      }
    },
    "inicio": 13,
    "fim": 21,
    "valortotal": 51,
    "observacao": "Observação 738",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f93"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 48",
    "funcionario": "Funcionário 42",
    "data": {
      "$date": {
        "$numberLong": "1684611636570"
      }
    },
    "inicio": 10,
    "fim": 19,
    "valortotal": 475,
    "observacao": "Observação 739",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f94"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 91",
    "funcionario": "Funcionário 15",
    "data": {
      "$date": {
        "$numberLong": "1684611636570"
      }
    },
    "inicio": 13,
    "fim": 20,
    "valortotal": 493,
    "observacao": "Observação 740",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f95"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 21",
    "funcionario": "Funcionário 5",
    "data": {
      "$date": {
        "$numberLong": "1684611636570"
      }
    },
    "inicio": 16,
    "fim": 21,
    "valortotal": 115,
    "observacao": "Observação 741",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f96"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 46",
    "funcionario": "Funcionário 3",
    "data": {
      "$date": {
        "$numberLong": "1684611636570"
      }
    },
    "inicio": 17,
    "fim": 19,
    "valortotal": 331,
    "observacao": "Observação 742",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f97"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 28",
    "funcionario": "Funcionário 33",
    "data": {
      "$date": {
        "$numberLong": "1684611636570"
      }
    },
    "inicio": 15,
    "fim": 19,
    "valortotal": 242,
    "observacao": "Observação 743",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f98"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 98",
    "funcionario": "Funcionário 46",
    "data": {
      "$date": {
        "$numberLong": "1684611636570"
      }
    },
    "inicio": 16,
    "fim": 20,
    "valortotal": 239,
    "observacao": "Observação 744",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f99"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 49",
    "funcionario": "Funcionário 40",
    "data": {
      "$date": {
        "$numberLong": "1684611636570"
      }
    },
    "inicio": 9,
    "fim": 22,
    "valortotal": 258,
    "observacao": "Observação 745",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f9a"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 19",
    "funcionario": "Funcionário 27",
    "data": {
      "$date": {
        "$numberLong": "1684611636570"
      }
    },
    "inicio": 10,
    "fim": 20,
    "valortotal": 322,
    "observacao": "Observação 746",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f9b"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 61",
    "funcionario": "Funcionário 41",
    "data": {
      "$date": {
        "$numberLong": "1684611636570"
      }
    },
    "inicio": 16,
    "fim": 22,
    "valortotal": 178,
    "observacao": "Observação 747",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f9c"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 87",
    "funcionario": "Funcionário 2",
    "data": {
      "$date": {
        "$numberLong": "1684611636570"
      }
    },
    "inicio": 15,
    "fim": 22,
    "valortotal": 292,
    "observacao": "Observação 748",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f9d"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 62",
    "funcionario": "Funcionário 16",
    "data": {
      "$date": {
        "$numberLong": "1684611636570"
      }
    },
    "inicio": 15,
    "fim": 19,
    "valortotal": 105,
    "observacao": "Observação 749",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f9e"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 76",
    "funcionario": "Funcionário 41",
    "data": {
      "$date": {
        "$numberLong": "1684611636570"
      }
    },
    "inicio": 9,
    "fim": 19,
    "valortotal": 155,
    "observacao": "Observação 750",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833f9f"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 99",
    "funcionario": "Funcionário 28",
    "data": {
      "$date": {
        "$numberLong": "1684611636570"
      }
    },
    "inicio": 12,
    "fim": 19,
    "valortotal": 180,
    "observacao": "Observação 751",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fa0"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 13",
    "funcionario": "Funcionário 40",
    "data": {
      "$date": {
        "$numberLong": "1684611636570"
      }
    },
    "inicio": 17,
    "fim": 22,
    "valortotal": 347,
    "observacao": "Observação 752",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fa1"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 74",
    "funcionario": "Funcionário 28",
    "data": {
      "$date": {
        "$numberLong": "1684611636570"
      }
    },
    "inicio": 17,
    "fim": 19,
    "valortotal": 125,
    "observacao": "Observação 753",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fa2"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 26",
    "funcionario": "Funcionário 36",
    "data": {
      "$date": {
        "$numberLong": "1684611636570"
      }
    },
    "inicio": 16,
    "fim": 21,
    "valortotal": 287,
    "observacao": "Observação 754",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fa3"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 79",
    "funcionario": "Funcionário 6",
    "data": {
      "$date": {
        "$numberLong": "1684611636570"
      }
    },
    "inicio": 11,
    "fim": 21,
    "valortotal": 226,
    "observacao": "Observação 755",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fa4"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 62",
    "funcionario": "Funcionário 30",
    "data": {
      "$date": {
        "$numberLong": "1684611636570"
      }
    },
    "inicio": 17,
    "fim": 19,
    "valortotal": 109,
    "observacao": "Observação 756",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fa5"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 18",
    "funcionario": "Funcionário 34",
    "data": {
      "$date": {
        "$numberLong": "1684611636570"
      }
    },
    "inicio": 14,
    "fim": 21,
    "valortotal": 120,
    "observacao": "Observação 757",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fa6"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 20",
    "funcionario": "Funcionário 44",
    "data": {
      "$date": {
        "$numberLong": "1684611636570"
      }
    },
    "inicio": 17,
    "fim": 22,
    "valortotal": 196,
    "observacao": "Observação 758",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fa7"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 46",
    "funcionario": "Funcionário 43",
    "data": {
      "$date": {
        "$numberLong": "1684611636571"
      }
    },
    "inicio": 12,
    "fim": 20,
    "valortotal": 90,
    "observacao": "Observação 759",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fa8"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 9",
    "funcionario": "Funcionário 49",
    "data": {
      "$date": {
        "$numberLong": "1684611636571"
      }
    },
    "inicio": 14,
    "fim": 22,
    "valortotal": 351,
    "observacao": "Observação 760",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fa9"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 44",
    "funcionario": "Funcionário 50",
    "data": {
      "$date": {
        "$numberLong": "1684611636571"
      }
    },
    "inicio": 14,
    "fim": 19,
    "valortotal": 99,
    "observacao": "Observação 761",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833faa"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 58",
    "funcionario": "Funcionário 24",
    "data": {
      "$date": {
        "$numberLong": "1684611636571"
      }
    },
    "inicio": 18,
    "fim": 19,
    "valortotal": 229,
    "observacao": "Observação 762",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fab"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 100",
    "funcionario": "Funcionário 10",
    "data": {
      "$date": {
        "$numberLong": "1684611636571"
      }
    },
    "inicio": 11,
    "fim": 20,
    "valortotal": 224,
    "observacao": "Observação 763",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fac"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 48",
    "funcionario": "Funcionário 1",
    "data": {
      "$date": {
        "$numberLong": "1684611636571"
      }
    },
    "inicio": 11,
    "fim": 19,
    "valortotal": 403,
    "observacao": "Observação 764",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fad"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 28",
    "funcionario": "Funcionário 42",
    "data": {
      "$date": {
        "$numberLong": "1684611636571"
      }
    },
    "inicio": 14,
    "fim": 21,
    "valortotal": 225,
    "observacao": "Observação 765",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fae"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 85",
    "funcionario": "Funcionário 46",
    "data": {
      "$date": {
        "$numberLong": "1684611636571"
      }
    },
    "inicio": 10,
    "fim": 22,
    "valortotal": 96,
    "observacao": "Observação 766",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833faf"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 63",
    "funcionario": "Funcionário 48",
    "data": {
      "$date": {
        "$numberLong": "1684611636571"
      }
    },
    "inicio": 9,
    "fim": 19,
    "valortotal": 90,
    "observacao": "Observação 767",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fb0"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 48",
    "funcionario": "Funcionário 39",
    "data": {
      "$date": {
        "$numberLong": "1684611636571"
      }
    },
    "inicio": 16,
    "fim": 22,
    "valortotal": 78,
    "observacao": "Observação 768",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fb1"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 43",
    "funcionario": "Funcionário 42",
    "data": {
      "$date": {
        "$numberLong": "1684611636571"
      }
    },
    "inicio": 13,
    "fim": 19,
    "valortotal": 281,
    "observacao": "Observação 769",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fb2"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 13",
    "funcionario": "Funcionário 34",
    "data": {
      "$date": {
        "$numberLong": "1684611636571"
      }
    },
    "inicio": 10,
    "fim": 19,
    "valortotal": 434,
    "observacao": "Observação 770",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fb3"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 81",
    "funcionario": "Funcionário 35",
    "data": {
      "$date": {
        "$numberLong": "1684611636571"
      }
    },
    "inicio": 8,
    "fim": 22,
    "valortotal": 225,
    "observacao": "Observação 771",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fb4"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 40",
    "funcionario": "Funcionário 3",
    "data": {
      "$date": {
        "$numberLong": "1684611636571"
      }
    },
    "inicio": 16,
    "fim": 22,
    "valortotal": 264,
    "observacao": "Observação 772",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fb5"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 55",
    "funcionario": "Funcionário 3",
    "data": {
      "$date": {
        "$numberLong": "1684611636571"
      }
    },
    "inicio": 10,
    "fim": 20,
    "valortotal": 360,
    "observacao": "Observação 773",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fb6"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 13",
    "funcionario": "Funcionário 1",
    "data": {
      "$date": {
        "$numberLong": "1684611636571"
      }
    },
    "inicio": 18,
    "fim": 20,
    "valortotal": 144,
    "observacao": "Observação 774",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fb7"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 13",
    "funcionario": "Funcionário 49",
    "data": {
      "$date": {
        "$numberLong": "1684611636571"
      }
    },
    "inicio": 15,
    "fim": 22,
    "valortotal": 405,
    "observacao": "Observação 775",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fb8"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 57",
    "funcionario": "Funcionário 45",
    "data": {
      "$date": {
        "$numberLong": "1684611636571"
      }
    },
    "inicio": 10,
    "fim": 22,
    "valortotal": 50,
    "observacao": "Observação 776",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fb9"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 94",
    "funcionario": "Funcionário 1",
    "data": {
      "$date": {
        "$numberLong": "1684611636571"
      }
    },
    "inicio": 16,
    "fim": 21,
    "valortotal": 488,
    "observacao": "Observação 777",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fba"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 47",
    "funcionario": "Funcionário 27",
    "data": {
      "$date": {
        "$numberLong": "1684611636572"
      }
    },
    "inicio": 15,
    "fim": 22,
    "valortotal": 447,
    "observacao": "Observação 778",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fbb"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 59",
    "funcionario": "Funcionário 13",
    "data": {
      "$date": {
        "$numberLong": "1684611636572"
      }
    },
    "inicio": 14,
    "fim": 19,
    "valortotal": 348,
    "observacao": "Observação 779",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fbc"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 2",
    "funcionario": "Funcionário 13",
    "data": {
      "$date": {
        "$numberLong": "1684611636572"
      }
    },
    "inicio": 17,
    "fim": 20,
    "valortotal": 171,
    "observacao": "Observação 780",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fbd"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 90",
    "funcionario": "Funcionário 49",
    "data": {
      "$date": {
        "$numberLong": "1684611636572"
      }
    },
    "inicio": 13,
    "fim": 21,
    "valortotal": 272,
    "observacao": "Observação 781",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fbe"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 47",
    "funcionario": "Funcionário 39",
    "data": {
      "$date": {
        "$numberLong": "1684611636572"
      }
    },
    "inicio": 15,
    "fim": 22,
    "valortotal": 130,
    "observacao": "Observação 782",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fbf"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 17",
    "funcionario": "Funcionário 49",
    "data": {
      "$date": {
        "$numberLong": "1684611636572"
      }
    },
    "inicio": 15,
    "fim": 21,
    "valortotal": 68,
    "observacao": "Observação 783",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fc0"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 81",
    "funcionario": "Funcionário 15",
    "data": {
      "$date": {
        "$numberLong": "1684611636572"
      }
    },
    "inicio": 18,
    "fim": 22,
    "valortotal": 203,
    "observacao": "Observação 784",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fc1"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 73",
    "funcionario": "Funcionário 21",
    "data": {
      "$date": {
        "$numberLong": "1684611636572"
      }
    },
    "inicio": 9,
    "fim": 19,
    "valortotal": 399,
    "observacao": "Observação 785",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fc2"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 87",
    "funcionario": "Funcionário 23",
    "data": {
      "$date": {
        "$numberLong": "1684611636572"
      }
    },
    "inicio": 9,
    "fim": 19,
    "valortotal": 202,
    "observacao": "Observação 786",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fc3"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 40",
    "funcionario": "Funcionário 48",
    "data": {
      "$date": {
        "$numberLong": "1684611636572"
      }
    },
    "inicio": 14,
    "fim": 20,
    "valortotal": 115,
    "observacao": "Observação 787",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fc4"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 100",
    "funcionario": "Funcionário 44",
    "data": {
      "$date": {
        "$numberLong": "1684611636572"
      }
    },
    "inicio": 15,
    "fim": 21,
    "valortotal": 77,
    "observacao": "Observação 788",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fc5"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 79",
    "funcionario": "Funcionário 34",
    "data": {
      "$date": {
        "$numberLong": "1684611636572"
      }
    },
    "inicio": 9,
    "fim": 22,
    "valortotal": 266,
    "observacao": "Observação 789",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fc6"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 88",
    "funcionario": "Funcionário 30",
    "data": {
      "$date": {
        "$numberLong": "1684611636572"
      }
    },
    "inicio": 9,
    "fim": 20,
    "valortotal": 450,
    "observacao": "Observação 790",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fc7"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 68",
    "funcionario": "Funcionário 22",
    "data": {
      "$date": {
        "$numberLong": "1684611636572"
      }
    },
    "inicio": 10,
    "fim": 19,
    "valortotal": 293,
    "observacao": "Observação 791",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fc8"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 92",
    "funcionario": "Funcionário 37",
    "data": {
      "$date": {
        "$numberLong": "1684611636572"
      }
    },
    "inicio": 14,
    "fim": 22,
    "valortotal": 185,
    "observacao": "Observação 792",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fc9"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 11",
    "funcionario": "Funcionário 36",
    "data": {
      "$date": {
        "$numberLong": "1684611636572"
      }
    },
    "inicio": 12,
    "fim": 20,
    "valortotal": 109,
    "observacao": "Observação 793",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fca"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 5",
    "funcionario": "Funcionário 47",
    "data": {
      "$date": {
        "$numberLong": "1684611636572"
      }
    },
    "inicio": 14,
    "fim": 19,
    "valortotal": 482,
    "observacao": "Observação 794",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fcb"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 15",
    "funcionario": "Funcionário 30",
    "data": {
      "$date": {
        "$numberLong": "1684611636572"
      }
    },
    "inicio": 11,
    "fim": 22,
    "valortotal": 240,
    "observacao": "Observação 795",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fcc"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 78",
    "funcionario": "Funcionário 1",
    "data": {
      "$date": {
        "$numberLong": "1684611636572"
      }
    },
    "inicio": 17,
    "fim": 19,
    "valortotal": 137,
    "observacao": "Observação 796",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fcd"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 23",
    "funcionario": "Funcionário 39",
    "data": {
      "$date": {
        "$numberLong": "1684611636572"
      }
    },
    "inicio": 11,
    "fim": 19,
    "valortotal": 264,
    "observacao": "Observação 797",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fce"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 70",
    "funcionario": "Funcionário 26",
    "data": {
      "$date": {
        "$numberLong": "1684611636573"
      }
    },
    "inicio": 13,
    "fim": 20,
    "valortotal": 51,
    "observacao": "Observação 798",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fcf"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 59",
    "funcionario": "Funcionário 24",
    "data": {
      "$date": {
        "$numberLong": "1684611636573"
      }
    },
    "inicio": 13,
    "fim": 22,
    "valortotal": 421,
    "observacao": "Observação 799",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fd0"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 3",
    "funcionario": "Funcionário 1",
    "data": {
      "$date": {
        "$numberLong": "1684611636573"
      }
    },
    "inicio": 8,
    "fim": 19,
    "valortotal": 168,
    "observacao": "Observação 800",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fd1"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 50",
    "funcionario": "Funcionário 47",
    "data": {
      "$date": {
        "$numberLong": "1684611636573"
      }
    },
    "inicio": 17,
    "fim": 20,
    "valortotal": 214,
    "observacao": "Observação 801",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fd2"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 12",
    "funcionario": "Funcionário 28",
    "data": {
      "$date": {
        "$numberLong": "1684611636573"
      }
    },
    "inicio": 12,
    "fim": 20,
    "valortotal": 207,
    "observacao": "Observação 802",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fd3"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 36",
    "funcionario": "Funcionário 6",
    "data": {
      "$date": {
        "$numberLong": "1684611636573"
      }
    },
    "inicio": 12,
    "fim": 21,
    "valortotal": 287,
    "observacao": "Observação 803",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fd4"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 50",
    "funcionario": "Funcionário 21",
    "data": {
      "$date": {
        "$numberLong": "1684611636573"
      }
    },
    "inicio": 13,
    "fim": 22,
    "valortotal": 443,
    "observacao": "Observação 804",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fd5"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 17",
    "funcionario": "Funcionário 32",
    "data": {
      "$date": {
        "$numberLong": "1684611636573"
      }
    },
    "inicio": 14,
    "fim": 19,
    "valortotal": 376,
    "observacao": "Observação 805",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fd6"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 72",
    "funcionario": "Funcionário 42",
    "data": {
      "$date": {
        "$numberLong": "1684611636573"
      }
    },
    "inicio": 9,
    "fim": 22,
    "valortotal": 421,
    "observacao": "Observação 806",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fd7"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 67",
    "funcionario": "Funcionário 46",
    "data": {
      "$date": {
        "$numberLong": "1684611636573"
      }
    },
    "inicio": 17,
    "fim": 22,
    "valortotal": 255,
    "observacao": "Observação 807",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fd8"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 87",
    "funcionario": "Funcionário 34",
    "data": {
      "$date": {
        "$numberLong": "1684611636573"
      }
    },
    "inicio": 15,
    "fim": 21,
    "valortotal": 330,
    "observacao": "Observação 808",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fd9"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 16",
    "funcionario": "Funcionário 36",
    "data": {
      "$date": {
        "$numberLong": "1684611636573"
      }
    },
    "inicio": 17,
    "fim": 20,
    "valortotal": 259,
    "observacao": "Observação 809",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fda"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 88",
    "funcionario": "Funcionário 4",
    "data": {
      "$date": {
        "$numberLong": "1684611636573"
      }
    },
    "inicio": 10,
    "fim": 20,
    "valortotal": 180,
    "observacao": "Observação 810",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fdb"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 55",
    "funcionario": "Funcionário 1",
    "data": {
      "$date": {
        "$numberLong": "1684611636573"
      }
    },
    "inicio": 14,
    "fim": 21,
    "valortotal": 201,
    "observacao": "Observação 811",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fdc"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 8",
    "funcionario": "Funcionário 24",
    "data": {
      "$date": {
        "$numberLong": "1684611636573"
      }
    },
    "inicio": 18,
    "fim": 19,
    "valortotal": 288,
    "observacao": "Observação 812",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fdd"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 57",
    "funcionario": "Funcionário 33",
    "data": {
      "$date": {
        "$numberLong": "1684611636573"
      }
    },
    "inicio": 17,
    "fim": 22,
    "valortotal": 206,
    "observacao": "Observação 813",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fde"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 43",
    "funcionario": "Funcionário 17",
    "data": {
      "$date": {
        "$numberLong": "1684611636573"
      }
    },
    "inicio": 12,
    "fim": 21,
    "valortotal": 273,
    "observacao": "Observação 814",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fdf"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 16",
    "funcionario": "Funcionário 24",
    "data": {
      "$date": {
        "$numberLong": "1684611636573"
      }
    },
    "inicio": 8,
    "fim": 21,
    "valortotal": 269,
    "observacao": "Observação 815",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fe0"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 96",
    "funcionario": "Funcionário 11",
    "data": {
      "$date": {
        "$numberLong": "1684611636574"
      }
    },
    "inicio": 17,
    "fim": 20,
    "valortotal": 297,
    "observacao": "Observação 816",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fe1"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 8",
    "funcionario": "Funcionário 28",
    "data": {
      "$date": {
        "$numberLong": "1684611636574"
      }
    },
    "inicio": 8,
    "fim": 21,
    "valortotal": 235,
    "observacao": "Observação 817",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fe2"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 31",
    "funcionario": "Funcionário 33",
    "data": {
      "$date": {
        "$numberLong": "1684611636574"
      }
    },
    "inicio": 13,
    "fim": 20,
    "valortotal": 379,
    "observacao": "Observação 818",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fe3"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 57",
    "funcionario": "Funcionário 44",
    "data": {
      "$date": {
        "$numberLong": "1684611636574"
      }
    },
    "inicio": 9,
    "fim": 19,
    "valortotal": 91,
    "observacao": "Observação 819",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fe4"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 9",
    "funcionario": "Funcionário 30",
    "data": {
      "$date": {
        "$numberLong": "1684611636574"
      }
    },
    "inicio": 8,
    "fim": 21,
    "valortotal": 435,
    "observacao": "Observação 820",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fe5"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 68",
    "funcionario": "Funcionário 13",
    "data": {
      "$date": {
        "$numberLong": "1684611636574"
      }
    },
    "inicio": 9,
    "fim": 20,
    "valortotal": 339,
    "observacao": "Observação 821",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fe6"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 93",
    "funcionario": "Funcionário 30",
    "data": {
      "$date": {
        "$numberLong": "1684611636574"
      }
    },
    "inicio": 15,
    "fim": 20,
    "valortotal": 194,
    "observacao": "Observação 822",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fe7"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 99",
    "funcionario": "Funcionário 41",
    "data": {
      "$date": {
        "$numberLong": "1684611636574"
      }
    },
    "inicio": 18,
    "fim": 19,
    "valortotal": 442,
    "observacao": "Observação 823",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fe8"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 2",
    "funcionario": "Funcionário 16",
    "data": {
      "$date": {
        "$numberLong": "1684611636574"
      }
    },
    "inicio": 17,
    "fim": 22,
    "valortotal": 340,
    "observacao": "Observação 824",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fe9"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 60",
    "funcionario": "Funcionário 50",
    "data": {
      "$date": {
        "$numberLong": "1684611636574"
      }
    },
    "inicio": 12,
    "fim": 21,
    "valortotal": 107,
    "observacao": "Observação 825",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fea"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 11",
    "funcionario": "Funcionário 23",
    "data": {
      "$date": {
        "$numberLong": "1684611636574"
      }
    },
    "inicio": 9,
    "fim": 21,
    "valortotal": 497,
    "observacao": "Observação 826",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833feb"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 83",
    "funcionario": "Funcionário 1",
    "data": {
      "$date": {
        "$numberLong": "1684611636574"
      }
    },
    "inicio": 18,
    "fim": 21,
    "valortotal": 206,
    "observacao": "Observação 827",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fec"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 19",
    "funcionario": "Funcionário 32",
    "data": {
      "$date": {
        "$numberLong": "1684611636574"
      }
    },
    "inicio": 13,
    "fim": 21,
    "valortotal": 217,
    "observacao": "Observação 828",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fed"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 61",
    "funcionario": "Funcionário 23",
    "data": {
      "$date": {
        "$numberLong": "1684611636574"
      }
    },
    "inicio": 17,
    "fim": 20,
    "valortotal": 490,
    "observacao": "Observação 829",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fee"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 36",
    "funcionario": "Funcionário 50",
    "data": {
      "$date": {
        "$numberLong": "1684611636574"
      }
    },
    "inicio": 15,
    "fim": 19,
    "valortotal": 104,
    "observacao": "Observação 830",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fef"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 29",
    "funcionario": "Funcionário 49",
    "data": {
      "$date": {
        "$numberLong": "1684611636574"
      }
    },
    "inicio": 9,
    "fim": 21,
    "valortotal": 75,
    "observacao": "Observação 831",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ff0"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 72",
    "funcionario": "Funcionário 22",
    "data": {
      "$date": {
        "$numberLong": "1684611636574"
      }
    },
    "inicio": 16,
    "fim": 21,
    "valortotal": 87,
    "observacao": "Observação 832",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ff1"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 77",
    "funcionario": "Funcionário 23",
    "data": {
      "$date": {
        "$numberLong": "1684611636574"
      }
    },
    "inicio": 9,
    "fim": 22,
    "valortotal": 313,
    "observacao": "Observação 833",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ff2"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 87",
    "funcionario": "Funcionário 36",
    "data": {
      "$date": {
        "$numberLong": "1684611636574"
      }
    },
    "inicio": 13,
    "fim": 20,
    "valortotal": 364,
    "observacao": "Observação 834",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ff3"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 13",
    "funcionario": "Funcionário 18",
    "data": {
      "$date": {
        "$numberLong": "1684611636575"
      }
    },
    "inicio": 8,
    "fim": 19,
    "valortotal": 371,
    "observacao": "Observação 835",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ff4"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 14",
    "funcionario": "Funcionário 5",
    "data": {
      "$date": {
        "$numberLong": "1684611636575"
      }
    },
    "inicio": 17,
    "fim": 19,
    "valortotal": 317,
    "observacao": "Observação 836",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ff5"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 73",
    "funcionario": "Funcionário 32",
    "data": {
      "$date": {
        "$numberLong": "1684611636575"
      }
    },
    "inicio": 15,
    "fim": 19,
    "valortotal": 167,
    "observacao": "Observação 837",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ff6"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 25",
    "funcionario": "Funcionário 38",
    "data": {
      "$date": {
        "$numberLong": "1684611636575"
      }
    },
    "inicio": 14,
    "fim": 20,
    "valortotal": 180,
    "observacao": "Observação 838",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ff7"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 95",
    "funcionario": "Funcionário 24",
    "data": {
      "$date": {
        "$numberLong": "1684611636575"
      }
    },
    "inicio": 9,
    "fim": 20,
    "valortotal": 223,
    "observacao": "Observação 839",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ff8"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 47",
    "funcionario": "Funcionário 3",
    "data": {
      "$date": {
        "$numberLong": "1684611636575"
      }
    },
    "inicio": 15,
    "fim": 21,
    "valortotal": 489,
    "observacao": "Observação 840",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ff9"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 20",
    "funcionario": "Funcionário 33",
    "data": {
      "$date": {
        "$numberLong": "1684611636575"
      }
    },
    "inicio": 10,
    "fim": 22,
    "valortotal": 69,
    "observacao": "Observação 841",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ffa"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 4",
    "funcionario": "Funcionário 34",
    "data": {
      "$date": {
        "$numberLong": "1684611636575"
      }
    },
    "inicio": 11,
    "fim": 21,
    "valortotal": 278,
    "observacao": "Observação 842",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ffb"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 73",
    "funcionario": "Funcionário 43",
    "data": {
      "$date": {
        "$numberLong": "1684611636575"
      }
    },
    "inicio": 11,
    "fim": 19,
    "valortotal": 393,
    "observacao": "Observação 843",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ffc"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 72",
    "funcionario": "Funcionário 27",
    "data": {
      "$date": {
        "$numberLong": "1684611636575"
      }
    },
    "inicio": 9,
    "fim": 21,
    "valortotal": 299,
    "observacao": "Observação 844",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ffd"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 30",
    "funcionario": "Funcionário 14",
    "data": {
      "$date": {
        "$numberLong": "1684611636575"
      }
    },
    "inicio": 13,
    "fim": 22,
    "valortotal": 440,
    "observacao": "Observação 845",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833ffe"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 52",
    "funcionario": "Funcionário 14",
    "data": {
      "$date": {
        "$numberLong": "1684611636575"
      }
    },
    "inicio": 11,
    "fim": 19,
    "valortotal": 87,
    "observacao": "Observação 846",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778833fff"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 98",
    "funcionario": "Funcionário 34",
    "data": {
      "$date": {
        "$numberLong": "1684611636575"
      }
    },
    "inicio": 11,
    "fim": 19,
    "valortotal": 176,
    "observacao": "Observação 847",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834000"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 53",
    "funcionario": "Funcionário 36",
    "data": {
      "$date": {
        "$numberLong": "1684611636575"
      }
    },
    "inicio": 12,
    "fim": 21,
    "valortotal": 497,
    "observacao": "Observação 848",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834001"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 71",
    "funcionario": "Funcionário 22",
    "data": {
      "$date": {
        "$numberLong": "1684611636575"
      }
    },
    "inicio": 9,
    "fim": 19,
    "valortotal": 113,
    "observacao": "Observação 849",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834002"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 57",
    "funcionario": "Funcionário 3",
    "data": {
      "$date": {
        "$numberLong": "1684611636575"
      }
    },
    "inicio": 8,
    "fim": 19,
    "valortotal": 427,
    "observacao": "Observação 850",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834003"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 44",
    "funcionario": "Funcionário 37",
    "data": {
      "$date": {
        "$numberLong": "1684611636576"
      }
    },
    "inicio": 16,
    "fim": 19,
    "valortotal": 305,
    "observacao": "Observação 851",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834004"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 1",
    "funcionario": "Funcionário 13",
    "data": {
      "$date": {
        "$numberLong": "1684611636576"
      }
    },
    "inicio": 14,
    "fim": 19,
    "valortotal": 367,
    "observacao": "Observação 852",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834005"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 93",
    "funcionario": "Funcionário 5",
    "data": {
      "$date": {
        "$numberLong": "1684611636576"
      }
    },
    "inicio": 16,
    "fim": 22,
    "valortotal": 402,
    "observacao": "Observação 853",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834006"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 99",
    "funcionario": "Funcionário 6",
    "data": {
      "$date": {
        "$numberLong": "1684611636576"
      }
    },
    "inicio": 9,
    "fim": 19,
    "valortotal": 442,
    "observacao": "Observação 854",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834007"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 7",
    "funcionario": "Funcionário 24",
    "data": {
      "$date": {
        "$numberLong": "1684611636576"
      }
    },
    "inicio": 10,
    "fim": 21,
    "valortotal": 407,
    "observacao": "Observação 855",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834008"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 15",
    "funcionario": "Funcionário 25",
    "data": {
      "$date": {
        "$numberLong": "1684611636576"
      }
    },
    "inicio": 16,
    "fim": 21,
    "valortotal": 56,
    "observacao": "Observação 856",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834009"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 31",
    "funcionario": "Funcionário 34",
    "data": {
      "$date": {
        "$numberLong": "1684611636576"
      }
    },
    "inicio": 11,
    "fim": 22,
    "valortotal": 458,
    "observacao": "Observação 857",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d977883400a"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 2",
    "funcionario": "Funcionário 42",
    "data": {
      "$date": {
        "$numberLong": "1684611636576"
      }
    },
    "inicio": 16,
    "fim": 19,
    "valortotal": 291,
    "observacao": "Observação 858",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d977883400b"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 80",
    "funcionario": "Funcionário 43",
    "data": {
      "$date": {
        "$numberLong": "1684611636576"
      }
    },
    "inicio": 9,
    "fim": 19,
    "valortotal": 436,
    "observacao": "Observação 859",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d977883400c"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 76",
    "funcionario": "Funcionário 5",
    "data": {
      "$date": {
        "$numberLong": "1684611636576"
      }
    },
    "inicio": 9,
    "fim": 22,
    "valortotal": 333,
    "observacao": "Observação 860",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d977883400d"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 5",
    "funcionario": "Funcionário 41",
    "data": {
      "$date": {
        "$numberLong": "1684611636576"
      }
    },
    "inicio": 16,
    "fim": 22,
    "valortotal": 311,
    "observacao": "Observação 861",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d977883400e"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 58",
    "funcionario": "Funcionário 18",
    "data": {
      "$date": {
        "$numberLong": "1684611636576"
      }
    },
    "inicio": 11,
    "fim": 20,
    "valortotal": 207,
    "observacao": "Observação 862",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d977883400f"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 69",
    "funcionario": "Funcionário 24",
    "data": {
      "$date": {
        "$numberLong": "1684611636576"
      }
    },
    "inicio": 10,
    "fim": 21,
    "valortotal": 421,
    "observacao": "Observação 863",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834010"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 11",
    "funcionario": "Funcionário 26",
    "data": {
      "$date": {
        "$numberLong": "1684611636576"
      }
    },
    "inicio": 11,
    "fim": 20,
    "valortotal": 238,
    "observacao": "Observação 864",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834011"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 96",
    "funcionario": "Funcionário 15",
    "data": {
      "$date": {
        "$numberLong": "1684611636576"
      }
    },
    "inicio": 9,
    "fim": 19,
    "valortotal": 328,
    "observacao": "Observação 865",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834012"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 99",
    "funcionario": "Funcionário 19",
    "data": {
      "$date": {
        "$numberLong": "1684611636576"
      }
    },
    "inicio": 18,
    "fim": 20,
    "valortotal": 430,
    "observacao": "Observação 866",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834013"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 67",
    "funcionario": "Funcionário 21",
    "data": {
      "$date": {
        "$numberLong": "1684611636576"
      }
    },
    "inicio": 10,
    "fim": 20,
    "valortotal": 315,
    "observacao": "Observação 867",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834014"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 22",
    "funcionario": "Funcionário 14",
    "data": {
      "$date": {
        "$numberLong": "1684611636576"
      }
    },
    "inicio": 14,
    "fim": 19,
    "valortotal": 285,
    "observacao": "Observação 868",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834015"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 97",
    "funcionario": "Funcionário 10",
    "data": {
      "$date": {
        "$numberLong": "1684611636577"
      }
    },
    "inicio": 13,
    "fim": 22,
    "valortotal": 83,
    "observacao": "Observação 869",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834016"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 54",
    "funcionario": "Funcionário 13",
    "data": {
      "$date": {
        "$numberLong": "1684611636577"
      }
    },
    "inicio": 16,
    "fim": 22,
    "valortotal": 128,
    "observacao": "Observação 870",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834017"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 11",
    "funcionario": "Funcionário 7",
    "data": {
      "$date": {
        "$numberLong": "1684611636577"
      }
    },
    "inicio": 18,
    "fim": 19,
    "valortotal": 500,
    "observacao": "Observação 871",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834018"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 57",
    "funcionario": "Funcionário 36",
    "data": {
      "$date": {
        "$numberLong": "1684611636577"
      }
    },
    "inicio": 9,
    "fim": 21,
    "valortotal": 362,
    "observacao": "Observação 872",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834019"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 20",
    "funcionario": "Funcionário 5",
    "data": {
      "$date": {
        "$numberLong": "1684611636577"
      }
    },
    "inicio": 18,
    "fim": 20,
    "valortotal": 429,
    "observacao": "Observação 873",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d977883401a"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 59",
    "funcionario": "Funcionário 24",
    "data": {
      "$date": {
        "$numberLong": "1684611636577"
      }
    },
    "inicio": 9,
    "fim": 19,
    "valortotal": 240,
    "observacao": "Observação 874",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d977883401b"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 40",
    "funcionario": "Funcionário 16",
    "data": {
      "$date": {
        "$numberLong": "1684611636577"
      }
    },
    "inicio": 8,
    "fim": 22,
    "valortotal": 101,
    "observacao": "Observação 875",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d977883401c"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 46",
    "funcionario": "Funcionário 15",
    "data": {
      "$date": {
        "$numberLong": "1684611636577"
      }
    },
    "inicio": 12,
    "fim": 21,
    "valortotal": 235,
    "observacao": "Observação 876",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d977883401d"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 84",
    "funcionario": "Funcionário 8",
    "data": {
      "$date": {
        "$numberLong": "1684611636577"
      }
    },
    "inicio": 17,
    "fim": 19,
    "valortotal": 237,
    "observacao": "Observação 877",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d977883401e"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 53",
    "funcionario": "Funcionário 30",
    "data": {
      "$date": {
        "$numberLong": "1684611636577"
      }
    },
    "inicio": 14,
    "fim": 20,
    "valortotal": 265,
    "observacao": "Observação 878",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d977883401f"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 77",
    "funcionario": "Funcionário 20",
    "data": {
      "$date": {
        "$numberLong": "1684611636577"
      }
    },
    "inicio": 17,
    "fim": 22,
    "valortotal": 251,
    "observacao": "Observação 879",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834020"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 44",
    "funcionario": "Funcionário 31",
    "data": {
      "$date": {
        "$numberLong": "1684611636577"
      }
    },
    "inicio": 15,
    "fim": 22,
    "valortotal": 488,
    "observacao": "Observação 880",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834021"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 37",
    "funcionario": "Funcionário 20",
    "data": {
      "$date": {
        "$numberLong": "1684611636577"
      }
    },
    "inicio": 13,
    "fim": 20,
    "valortotal": 109,
    "observacao": "Observação 881",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834022"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 51",
    "funcionario": "Funcionário 48",
    "data": {
      "$date": {
        "$numberLong": "1684611636577"
      }
    },
    "inicio": 15,
    "fim": 21,
    "valortotal": 446,
    "observacao": "Observação 882",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834023"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 21",
    "funcionario": "Funcionário 42",
    "data": {
      "$date": {
        "$numberLong": "1684611636578"
      }
    },
    "inicio": 10,
    "fim": 22,
    "valortotal": 466,
    "observacao": "Observação 883",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834024"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 49",
    "funcionario": "Funcionário 48",
    "data": {
      "$date": {
        "$numberLong": "1684611636578"
      }
    },
    "inicio": 18,
    "fim": 20,
    "valortotal": 94,
    "observacao": "Observação 884",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834025"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 41",
    "funcionario": "Funcionário 30",
    "data": {
      "$date": {
        "$numberLong": "1684611636578"
      }
    },
    "inicio": 10,
    "fim": 19,
    "valortotal": 477,
    "observacao": "Observação 885",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834026"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 64",
    "funcionario": "Funcionário 46",
    "data": {
      "$date": {
        "$numberLong": "1684611636578"
      }
    },
    "inicio": 16,
    "fim": 19,
    "valortotal": 489,
    "observacao": "Observação 886",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834027"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 94",
    "funcionario": "Funcionário 2",
    "data": {
      "$date": {
        "$numberLong": "1684611636578"
      }
    },
    "inicio": 8,
    "fim": 21,
    "valortotal": 125,
    "observacao": "Observação 887",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834028"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 4",
    "funcionario": "Funcionário 3",
    "data": {
      "$date": {
        "$numberLong": "1684611636578"
      }
    },
    "inicio": 9,
    "fim": 21,
    "valortotal": 283,
    "observacao": "Observação 888",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834029"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 98",
    "funcionario": "Funcionário 20",
    "data": {
      "$date": {
        "$numberLong": "1684611636578"
      }
    },
    "inicio": 11,
    "fim": 19,
    "valortotal": 192,
    "observacao": "Observação 889",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d977883402a"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 2",
    "funcionario": "Funcionário 6",
    "data": {
      "$date": {
        "$numberLong": "1684611636578"
      }
    },
    "inicio": 16,
    "fim": 19,
    "valortotal": 144,
    "observacao": "Observação 890",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d977883402b"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 56",
    "funcionario": "Funcionário 31",
    "data": {
      "$date": {
        "$numberLong": "1684611636578"
      }
    },
    "inicio": 10,
    "fim": 20,
    "valortotal": 245,
    "observacao": "Observação 891",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d977883402c"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 64",
    "funcionario": "Funcionário 9",
    "data": {
      "$date": {
        "$numberLong": "1684611636578"
      }
    },
    "inicio": 17,
    "fim": 22,
    "valortotal": 408,
    "observacao": "Observação 892",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d977883402d"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 64",
    "funcionario": "Funcionário 18",
    "data": {
      "$date": {
        "$numberLong": "1684611636578"
      }
    },
    "inicio": 8,
    "fim": 22,
    "valortotal": 284,
    "observacao": "Observação 893",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d977883402e"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 42",
    "funcionario": "Funcionário 48",
    "data": {
      "$date": {
        "$numberLong": "1684611636578"
      }
    },
    "inicio": 10,
    "fim": 21,
    "valortotal": 252,
    "observacao": "Observação 894",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d977883402f"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 22",
    "funcionario": "Funcionário 2",
    "data": {
      "$date": {
        "$numberLong": "1684611636578"
      }
    },
    "inicio": 15,
    "fim": 22,
    "valortotal": 216,
    "observacao": "Observação 895",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834030"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 10",
    "funcionario": "Funcionário 8",
    "data": {
      "$date": {
        "$numberLong": "1684611636578"
      }
    },
    "inicio": 17,
    "fim": 21,
    "valortotal": 293,
    "observacao": "Observação 896",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834031"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 51",
    "funcionario": "Funcionário 17",
    "data": {
      "$date": {
        "$numberLong": "1684611636578"
      }
    },
    "inicio": 16,
    "fim": 20,
    "valortotal": 417,
    "observacao": "Observação 897",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834032"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 44",
    "funcionario": "Funcionário 38",
    "data": {
      "$date": {
        "$numberLong": "1684611636578"
      }
    },
    "inicio": 18,
    "fim": 21,
    "valortotal": 160,
    "observacao": "Observação 898",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834033"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 44",
    "funcionario": "Funcionário 30",
    "data": {
      "$date": {
        "$numberLong": "1684611636578"
      }
    },
    "inicio": 17,
    "fim": 22,
    "valortotal": 397,
    "observacao": "Observação 899",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834034"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 43",
    "funcionario": "Funcionário 34",
    "data": {
      "$date": {
        "$numberLong": "1684611636578"
      }
    },
    "inicio": 12,
    "fim": 20,
    "valortotal": 133,
    "observacao": "Observação 900",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834035"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 52",
    "funcionario": "Funcionário 5",
    "data": {
      "$date": {
        "$numberLong": "1684611636578"
      }
    },
    "inicio": 14,
    "fim": 20,
    "valortotal": 415,
    "observacao": "Observação 901",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834036"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 27",
    "funcionario": "Funcionário 35",
    "data": {
      "$date": {
        "$numberLong": "1684611636578"
      }
    },
    "inicio": 17,
    "fim": 20,
    "valortotal": 236,
    "observacao": "Observação 902",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834037"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 45",
    "funcionario": "Funcionário 5",
    "data": {
      "$date": {
        "$numberLong": "1684611636579"
      }
    },
    "inicio": 14,
    "fim": 19,
    "valortotal": 173,
    "observacao": "Observação 903",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834038"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 95",
    "funcionario": "Funcionário 22",
    "data": {
      "$date": {
        "$numberLong": "1684611636579"
      }
    },
    "inicio": 17,
    "fim": 21,
    "valortotal": 455,
    "observacao": "Observação 904",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834039"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 80",
    "funcionario": "Funcionário 6",
    "data": {
      "$date": {
        "$numberLong": "1684611636579"
      }
    },
    "inicio": 14,
    "fim": 21,
    "valortotal": 455,
    "observacao": "Observação 905",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d977883403a"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 12",
    "funcionario": "Funcionário 40",
    "data": {
      "$date": {
        "$numberLong": "1684611636579"
      }
    },
    "inicio": 8,
    "fim": 19,
    "valortotal": 202,
    "observacao": "Observação 906",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d977883403b"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 41",
    "funcionario": "Funcionário 33",
    "data": {
      "$date": {
        "$numberLong": "1684611636579"
      }
    },
    "inicio": 10,
    "fim": 20,
    "valortotal": 269,
    "observacao": "Observação 907",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d977883403c"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 43",
    "funcionario": "Funcionário 47",
    "data": {
      "$date": {
        "$numberLong": "1684611636579"
      }
    },
    "inicio": 17,
    "fim": 20,
    "valortotal": 266,
    "observacao": "Observação 908",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d977883403d"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 51",
    "funcionario": "Funcionário 29",
    "data": {
      "$date": {
        "$numberLong": "1684611636579"
      }
    },
    "inicio": 14,
    "fim": 20,
    "valortotal": 206,
    "observacao": "Observação 909",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d977883403e"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 64",
    "funcionario": "Funcionário 1",
    "data": {
      "$date": {
        "$numberLong": "1684611636579"
      }
    },
    "inicio": 14,
    "fim": 22,
    "valortotal": 264,
    "observacao": "Observação 910",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d977883403f"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 69",
    "funcionario": "Funcionário 16",
    "data": {
      "$date": {
        "$numberLong": "1684611636579"
      }
    },
    "inicio": 15,
    "fim": 20,
    "valortotal": 199,
    "observacao": "Observação 911",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834040"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 43",
    "funcionario": "Funcionário 13",
    "data": {
      "$date": {
        "$numberLong": "1684611636579"
      }
    },
    "inicio": 14,
    "fim": 22,
    "valortotal": 190,
    "observacao": "Observação 912",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834041"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 26",
    "funcionario": "Funcionário 50",
    "data": {
      "$date": {
        "$numberLong": "1684611636579"
      }
    },
    "inicio": 13,
    "fim": 21,
    "valortotal": 195,
    "observacao": "Observação 913",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834042"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 65",
    "funcionario": "Funcionário 11",
    "data": {
      "$date": {
        "$numberLong": "1684611636579"
      }
    },
    "inicio": 18,
    "fim": 22,
    "valortotal": 483,
    "observacao": "Observação 914",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834043"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 83",
    "funcionario": "Funcionário 8",
    "data": {
      "$date": {
        "$numberLong": "1684611636579"
      }
    },
    "inicio": 13,
    "fim": 22,
    "valortotal": 442,
    "observacao": "Observação 915",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834044"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 90",
    "funcionario": "Funcionário 42",
    "data": {
      "$date": {
        "$numberLong": "1684611636579"
      }
    },
    "inicio": 15,
    "fim": 21,
    "valortotal": 138,
    "observacao": "Observação 916",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834045"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 74",
    "funcionario": "Funcionário 31",
    "data": {
      "$date": {
        "$numberLong": "1684611636579"
      }
    },
    "inicio": 15,
    "fim": 22,
    "valortotal": 458,
    "observacao": "Observação 917",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834046"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 9",
    "funcionario": "Funcionário 3",
    "data": {
      "$date": {
        "$numberLong": "1684611636579"
      }
    },
    "inicio": 16,
    "fim": 22,
    "valortotal": 285,
    "observacao": "Observação 918",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834047"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 88",
    "funcionario": "Funcionário 21",
    "data": {
      "$date": {
        "$numberLong": "1684611636580"
      }
    },
    "inicio": 9,
    "fim": 21,
    "valortotal": 371,
    "observacao": "Observação 919",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834048"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 52",
    "funcionario": "Funcionário 4",
    "data": {
      "$date": {
        "$numberLong": "1684611636580"
      }
    },
    "inicio": 16,
    "fim": 19,
    "valortotal": 280,
    "observacao": "Observação 920",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834049"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 72",
    "funcionario": "Funcionário 6",
    "data": {
      "$date": {
        "$numberLong": "1684611636580"
      }
    },
    "inicio": 18,
    "fim": 21,
    "valortotal": 237,
    "observacao": "Observação 921",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d977883404a"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 68",
    "funcionario": "Funcionário 32",
    "data": {
      "$date": {
        "$numberLong": "1684611636580"
      }
    },
    "inicio": 16,
    "fim": 19,
    "valortotal": 63,
    "observacao": "Observação 922",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d977883404b"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 8",
    "funcionario": "Funcionário 50",
    "data": {
      "$date": {
        "$numberLong": "1684611636580"
      }
    },
    "inicio": 15,
    "fim": 22,
    "valortotal": 114,
    "observacao": "Observação 923",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d977883404c"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 91",
    "funcionario": "Funcionário 13",
    "data": {
      "$date": {
        "$numberLong": "1684611636580"
      }
    },
    "inicio": 11,
    "fim": 20,
    "valortotal": 450,
    "observacao": "Observação 924",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d977883404d"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 52",
    "funcionario": "Funcionário 34",
    "data": {
      "$date": {
        "$numberLong": "1684611636580"
      }
    },
    "inicio": 9,
    "fim": 20,
    "valortotal": 330,
    "observacao": "Observação 925",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d977883404e"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 73",
    "funcionario": "Funcionário 10",
    "data": {
      "$date": {
        "$numberLong": "1684611636580"
      }
    },
    "inicio": 18,
    "fim": 19,
    "valortotal": 431,
    "observacao": "Observação 926",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d977883404f"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 5",
    "funcionario": "Funcionário 13",
    "data": {
      "$date": {
        "$numberLong": "1684611636580"
      }
    },
    "inicio": 18,
    "fim": 21,
    "valortotal": 204,
    "observacao": "Observação 927",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834050"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 41",
    "funcionario": "Funcionário 11",
    "data": {
      "$date": {
        "$numberLong": "1684611636580"
      }
    },
    "inicio": 14,
    "fim": 22,
    "valortotal": 357,
    "observacao": "Observação 928",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834051"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 47",
    "funcionario": "Funcionário 42",
    "data": {
      "$date": {
        "$numberLong": "1684611636580"
      }
    },
    "inicio": 10,
    "fim": 19,
    "valortotal": 156,
    "observacao": "Observação 929",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834052"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 99",
    "funcionario": "Funcionário 20",
    "data": {
      "$date": {
        "$numberLong": "1684611636580"
      }
    },
    "inicio": 8,
    "fim": 22,
    "valortotal": 419,
    "observacao": "Observação 930",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834053"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 86",
    "funcionario": "Funcionário 12",
    "data": {
      "$date": {
        "$numberLong": "1684611636580"
      }
    },
    "inicio": 10,
    "fim": 19,
    "valortotal": 494,
    "observacao": "Observação 931",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834054"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 95",
    "funcionario": "Funcionário 49",
    "data": {
      "$date": {
        "$numberLong": "1684611636580"
      }
    },
    "inicio": 10,
    "fim": 22,
    "valortotal": 349,
    "observacao": "Observação 932",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834055"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 11",
    "funcionario": "Funcionário 13",
    "data": {
      "$date": {
        "$numberLong": "1684611636580"
      }
    },
    "inicio": 11,
    "fim": 21,
    "valortotal": 152,
    "observacao": "Observação 933",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834056"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 87",
    "funcionario": "Funcionário 36",
    "data": {
      "$date": {
        "$numberLong": "1684611636580"
      }
    },
    "inicio": 8,
    "fim": 22,
    "valortotal": 84,
    "observacao": "Observação 934",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834057"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 93",
    "funcionario": "Funcionário 32",
    "data": {
      "$date": {
        "$numberLong": "1684611636580"
      }
    },
    "inicio": 9,
    "fim": 22,
    "valortotal": 351,
    "observacao": "Observação 935",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834058"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 46",
    "funcionario": "Funcionário 49",
    "data": {
      "$date": {
        "$numberLong": "1684611636580"
      }
    },
    "inicio": 11,
    "fim": 19,
    "valortotal": 446,
    "observacao": "Observação 936",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834059"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 39",
    "funcionario": "Funcionário 28",
    "data": {
      "$date": {
        "$numberLong": "1684611636580"
      }
    },
    "inicio": 9,
    "fim": 22,
    "valortotal": 355,
    "observacao": "Observação 937",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d977883405a"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 94",
    "funcionario": "Funcionário 1",
    "data": {
      "$date": {
        "$numberLong": "1684611636580"
      }
    },
    "inicio": 8,
    "fim": 22,
    "valortotal": 345,
    "observacao": "Observação 938",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d977883405b"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 74",
    "funcionario": "Funcionário 15",
    "data": {
      "$date": {
        "$numberLong": "1684611636581"
      }
    },
    "inicio": 13,
    "fim": 21,
    "valortotal": 214,
    "observacao": "Observação 939",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d977883405c"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 49",
    "funcionario": "Funcionário 7",
    "data": {
      "$date": {
        "$numberLong": "1684611636581"
      }
    },
    "inicio": 10,
    "fim": 20,
    "valortotal": 462,
    "observacao": "Observação 940",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d977883405d"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 48",
    "funcionario": "Funcionário 43",
    "data": {
      "$date": {
        "$numberLong": "1684611636581"
      }
    },
    "inicio": 8,
    "fim": 20,
    "valortotal": 231,
    "observacao": "Observação 941",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d977883405e"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 35",
    "funcionario": "Funcionário 37",
    "data": {
      "$date": {
        "$numberLong": "1684611636581"
      }
    },
    "inicio": 18,
    "fim": 20,
    "valortotal": 442,
    "observacao": "Observação 942",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d977883405f"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 59",
    "funcionario": "Funcionário 35",
    "data": {
      "$date": {
        "$numberLong": "1684611636581"
      }
    },
    "inicio": 16,
    "fim": 20,
    "valortotal": 463,
    "observacao": "Observação 943",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834060"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 47",
    "funcionario": "Funcionário 23",
    "data": {
      "$date": {
        "$numberLong": "1684611636581"
      }
    },
    "inicio": 12,
    "fim": 19,
    "valortotal": 279,
    "observacao": "Observação 944",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834061"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 66",
    "funcionario": "Funcionário 23",
    "data": {
      "$date": {
        "$numberLong": "1684611636581"
      }
    },
    "inicio": 16,
    "fim": 20,
    "valortotal": 252,
    "observacao": "Observação 945",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834062"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 50",
    "funcionario": "Funcionário 17",
    "data": {
      "$date": {
        "$numberLong": "1684611636581"
      }
    },
    "inicio": 13,
    "fim": 20,
    "valortotal": 119,
    "observacao": "Observação 946",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834063"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 49",
    "funcionario": "Funcionário 36",
    "data": {
      "$date": {
        "$numberLong": "1684611636581"
      }
    },
    "inicio": 14,
    "fim": 22,
    "valortotal": 90,
    "observacao": "Observação 947",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834064"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 39",
    "funcionario": "Funcionário 37",
    "data": {
      "$date": {
        "$numberLong": "1684611636581"
      }
    },
    "inicio": 18,
    "fim": 19,
    "valortotal": 304,
    "observacao": "Observação 948",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834065"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 4",
    "funcionario": "Funcionário 26",
    "data": {
      "$date": {
        "$numberLong": "1684611636581"
      }
    },
    "inicio": 12,
    "fim": 20,
    "valortotal": 346,
    "observacao": "Observação 949",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834066"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 85",
    "funcionario": "Funcionário 9",
    "data": {
      "$date": {
        "$numberLong": "1684611636581"
      }
    },
    "inicio": 11,
    "fim": 22,
    "valortotal": 452,
    "observacao": "Observação 950",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834067"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 46",
    "funcionario": "Funcionário 17",
    "data": {
      "$date": {
        "$numberLong": "1684611636581"
      }
    },
    "inicio": 8,
    "fim": 21,
    "valortotal": 437,
    "observacao": "Observação 951",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834068"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 97",
    "funcionario": "Funcionário 34",
    "data": {
      "$date": {
        "$numberLong": "1684611636581"
      }
    },
    "inicio": 8,
    "fim": 22,
    "valortotal": 379,
    "observacao": "Observação 952",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834069"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 38",
    "funcionario": "Funcionário 20",
    "data": {
      "$date": {
        "$numberLong": "1684611636581"
      }
    },
    "inicio": 10,
    "fim": 20,
    "valortotal": 116,
    "observacao": "Observação 953",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d977883406a"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 88",
    "funcionario": "Funcionário 24",
    "data": {
      "$date": {
        "$numberLong": "1684611636581"
      }
    },
    "inicio": 17,
    "fim": 20,
    "valortotal": 450,
    "observacao": "Observação 954",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d977883406b"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 9",
    "funcionario": "Funcionário 22",
    "data": {
      "$date": {
        "$numberLong": "1684611636581"
      }
    },
    "inicio": 9,
    "fim": 21,
    "valortotal": 492,
    "observacao": "Observação 955",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d977883406c"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 31",
    "funcionario": "Funcionário 1",
    "data": {
      "$date": {
        "$numberLong": "1684611636581"
      }
    },
    "inicio": 18,
    "fim": 20,
    "valortotal": 288,
    "observacao": "Observação 956",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d977883406d"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 12",
    "funcionario": "Funcionário 1",
    "data": {
      "$date": {
        "$numberLong": "1684611636581"
      }
    },
    "inicio": 13,
    "fim": 22,
    "valortotal": 273,
    "observacao": "Observação 957",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d977883406e"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 72",
    "funcionario": "Funcionário 41",
    "data": {
      "$date": {
        "$numberLong": "1684611636581"
      }
    },
    "inicio": 16,
    "fim": 22,
    "valortotal": 436,
    "observacao": "Observação 958",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d977883406f"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 37",
    "funcionario": "Funcionário 3",
    "data": {
      "$date": {
        "$numberLong": "1684611636582"
      }
    },
    "inicio": 18,
    "fim": 20,
    "valortotal": 463,
    "observacao": "Observação 959",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834070"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 69",
    "funcionario": "Funcionário 31",
    "data": {
      "$date": {
        "$numberLong": "1684611636582"
      }
    },
    "inicio": 9,
    "fim": 21,
    "valortotal": 52,
    "observacao": "Observação 960",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834071"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 65",
    "funcionario": "Funcionário 17",
    "data": {
      "$date": {
        "$numberLong": "1684611636582"
      }
    },
    "inicio": 11,
    "fim": 22,
    "valortotal": 208,
    "observacao": "Observação 961",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834072"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 20",
    "funcionario": "Funcionário 32",
    "data": {
      "$date": {
        "$numberLong": "1684611636582"
      }
    },
    "inicio": 17,
    "fim": 20,
    "valortotal": 73,
    "observacao": "Observação 962",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834073"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 34",
    "funcionario": "Funcionário 23",
    "data": {
      "$date": {
        "$numberLong": "1684611636582"
      }
    },
    "inicio": 8,
    "fim": 21,
    "valortotal": 398,
    "observacao": "Observação 963",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834074"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 83",
    "funcionario": "Funcionário 27",
    "data": {
      "$date": {
        "$numberLong": "1684611636582"
      }
    },
    "inicio": 18,
    "fim": 21,
    "valortotal": 194,
    "observacao": "Observação 964",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834075"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 23",
    "funcionario": "Funcionário 25",
    "data": {
      "$date": {
        "$numberLong": "1684611636582"
      }
    },
    "inicio": 15,
    "fim": 22,
    "valortotal": 73,
    "observacao": "Observação 965",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834076"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 59",
    "funcionario": "Funcionário 17",
    "data": {
      "$date": {
        "$numberLong": "1684611636582"
      }
    },
    "inicio": 8,
    "fim": 22,
    "valortotal": 90,
    "observacao": "Observação 966",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834077"
    },
    "sala": "Sala 5",
    "cliente": "Cliente 4",
    "funcionario": "Funcionário 6",
    "data": {
      "$date": {
        "$numberLong": "1684611636582"
      }
    },
    "inicio": 11,
    "fim": 21,
    "valortotal": 274,
    "observacao": "Observação 967",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834078"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 53",
    "funcionario": "Funcionário 49",
    "data": {
      "$date": {
        "$numberLong": "1684611636582"
      }
    },
    "inicio": 9,
    "fim": 22,
    "valortotal": 452,
    "observacao": "Observação 968",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834079"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 84",
    "funcionario": "Funcionário 20",
    "data": {
      "$date": {
        "$numberLong": "1684611636582"
      }
    },
    "inicio": 14,
    "fim": 20,
    "valortotal": 334,
    "observacao": "Observação 969",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d977883407a"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 41",
    "funcionario": "Funcionário 13",
    "data": {
      "$date": {
        "$numberLong": "1684611636582"
      }
    },
    "inicio": 15,
    "fim": 20,
    "valortotal": 402,
    "observacao": "Observação 970",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d977883407b"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 45",
    "funcionario": "Funcionário 41",
    "data": {
      "$date": {
        "$numberLong": "1684611636582"
      }
    },
    "inicio": 18,
    "fim": 21,
    "valortotal": 258,
    "observacao": "Observação 971",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d977883407c"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 46",
    "funcionario": "Funcionário 24",
    "data": {
      "$date": {
        "$numberLong": "1684611636582"
      }
    },
    "inicio": 18,
    "fim": 21,
    "valortotal": 258,
    "observacao": "Observação 972",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d977883407d"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 73",
    "funcionario": "Funcionário 16",
    "data": {
      "$date": {
        "$numberLong": "1684611636582"
      }
    },
    "inicio": 9,
    "fim": 20,
    "valortotal": 306,
    "observacao": "Observação 973",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d977883407e"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 2",
    "funcionario": "Funcionário 28",
    "data": {
      "$date": {
        "$numberLong": "1684611636582"
      }
    },
    "inicio": 12,
    "fim": 21,
    "valortotal": 183,
    "observacao": "Observação 974",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d977883407f"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 9",
    "funcionario": "Funcionário 29",
    "data": {
      "$date": {
        "$numberLong": "1684611636582"
      }
    },
    "inicio": 15,
    "fim": 20,
    "valortotal": 314,
    "observacao": "Observação 975",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834080"
    },
    "sala": "Sala 6",
    "cliente": "Cliente 2",
    "funcionario": "Funcionário 11",
    "data": {
      "$date": {
        "$numberLong": "1684611636582"
      }
    },
    "inicio": 16,
    "fim": 21,
    "valortotal": 161,
    "observacao": "Observação 976",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834081"
    },
    "sala": "Sala 4",
    "cliente": "Cliente 97",
    "funcionario": "Funcionário 38",
    "data": {
      "$date": {
        "$numberLong": "1684611636582"
      }
    },
    "inicio": 14,
    "fim": 21,
    "valortotal": 442,
    "observacao": "Observação 977",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834082"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 35",
    "funcionario": "Funcionário 4",
    "data": {
      "$date": {
        "$numberLong": "1684611636582"
      }
    },
    "inicio": 10,
    "fim": 21,
    "valortotal": 459,
    "observacao": "Observação 978",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834083"
    },
    "sala": "Sala 3",
    "cliente": "Cliente 84",
    "funcionario": "Funcionário 8",
    "data": {
      "$date": {
        "$numberLong": "1684611636583"
      }
    },
    "inicio": 15,
    "fim": 19,
    "valortotal": 399,
    "observacao": "Observação 979",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834084"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 61",
    "funcionario": "Funcionário 37",
    "data": {
      "$date": {
        "$numberLong": "1684611636583"
      }
    },
    "inicio": 16,
    "fim": 22,
    "valortotal": 76,
    "observacao": "Observação 980",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834085"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 30",
    "funcionario": "Funcionário 42",
    "data": {
      "$date": {
        "$numberLong": "1684611636583"
      }
    },
    "inicio": 12,
    "fim": 20,
    "valortotal": 249,
    "observacao": "Observação 981",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834086"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 72",
    "funcionario": "Funcionário 30",
    "data": {
      "$date": {
        "$numberLong": "1684611636583"
      }
    },
    "inicio": 10,
    "fim": 21,
    "valortotal": 161,
    "observacao": "Observação 982",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834087"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 2",
    "funcionario": "Funcionário 36",
    "data": {
      "$date": {
        "$numberLong": "1684611636583"
      }
    },
    "inicio": 14,
    "fim": 19,
    "valortotal": 472,
    "observacao": "Observação 983",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834088"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 30",
    "funcionario": "Funcionário 21",
    "data": {
      "$date": {
        "$numberLong": "1684611636583"
      }
    },
    "inicio": 10,
    "fim": 22,
    "valortotal": 246,
    "observacao": "Observação 984",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834089"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 56",
    "funcionario": "Funcionário 34",
    "data": {
      "$date": {
        "$numberLong": "1684611636585"
      }
    },
    "inicio": 17,
    "fim": 19,
    "valortotal": 161,
    "observacao": "Observação 985",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d977883408a"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 76",
    "funcionario": "Funcionário 1",
    "data": {
      "$date": {
        "$numberLong": "1684611636585"
      }
    },
    "inicio": 17,
    "fim": 21,
    "valortotal": 170,
    "observacao": "Observação 986",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d977883408b"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 24",
    "funcionario": "Funcionário 14",
    "data": {
      "$date": {
        "$numberLong": "1684611636585"
      }
    },
    "inicio": 13,
    "fim": 22,
    "valortotal": 483,
    "observacao": "Observação 987",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d977883408c"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 63",
    "funcionario": "Funcionário 3",
    "data": {
      "$date": {
        "$numberLong": "1684611636585"
      }
    },
    "inicio": 17,
    "fim": 20,
    "valortotal": 200,
    "observacao": "Observação 988",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d977883408d"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 5",
    "funcionario": "Funcionário 9",
    "data": {
      "$date": {
        "$numberLong": "1684611636585"
      }
    },
    "inicio": 10,
    "fim": 21,
    "valortotal": 495,
    "observacao": "Observação 989",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d977883408e"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 43",
    "funcionario": "Funcionário 21",
    "data": {
      "$date": {
        "$numberLong": "1684611636585"
      }
    },
    "inicio": 18,
    "fim": 19,
    "valortotal": 440,
    "observacao": "Observação 990",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d977883408f"
    },
    "sala": "Sala 10",
    "cliente": "Cliente 25",
    "funcionario": "Funcionário 11",
    "data": {
      "$date": {
        "$numberLong": "1684611636585"
      }
    },
    "inicio": 16,
    "fim": 22,
    "valortotal": 266,
    "observacao": "Observação 991",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834090"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 12",
    "funcionario": "Funcionário 14",
    "data": {
      "$date": {
        "$numberLong": "1684611636585"
      }
    },
    "inicio": 14,
    "fim": 21,
    "valortotal": 390,
    "observacao": "Observação 992",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834091"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 6",
    "funcionario": "Funcionário 37",
    "data": {
      "$date": {
        "$numberLong": "1684611636586"
      }
    },
    "inicio": 17,
    "fim": 21,
    "valortotal": 393,
    "observacao": "Observação 993",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834092"
    },
    "sala": "Sala 9",
    "cliente": "Cliente 27",
    "funcionario": "Funcionário 41",
    "data": {
      "$date": {
        "$numberLong": "1684611636586"
      }
    },
    "inicio": 16,
    "fim": 19,
    "valortotal": 123,
    "observacao": "Observação 994",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834093"
    },
    "sala": "Sala 7",
    "cliente": "Cliente 36",
    "funcionario": "Funcionário 5",
    "data": {
      "$date": {
        "$numberLong": "1684611636586"
      }
    },
    "inicio": 15,
    "fim": 21,
    "valortotal": 363,
    "observacao": "Observação 995",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834094"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 69",
    "funcionario": "Funcionário 12",
    "data": {
      "$date": {
        "$numberLong": "1684611636586"
      }
    },
    "inicio": 18,
    "fim": 22,
    "valortotal": 195,
    "observacao": "Observação 996",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834095"
    },
    "sala": "Sala 8",
    "cliente": "Cliente 53",
    "funcionario": "Funcionário 19",
    "data": {
      "$date": {
        "$numberLong": "1684611636586"
      }
    },
    "inicio": 16,
    "fim": 20,
    "valortotal": 378,
    "observacao": "Observação 997",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834096"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 28",
    "funcionario": "Funcionário 36",
    "data": {
      "$date": {
        "$numberLong": "1684611636586"
      }
    },
    "inicio": 13,
    "fim": 22,
    "valortotal": 390,
    "observacao": "Observação 998",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834097"
    },
    "sala": "Sala 2",
    "cliente": "Cliente 44",
    "funcionario": "Funcionário 41",
    "data": {
      "$date": {
        "$numberLong": "1684611636586"
      }
    },
    "inicio": 15,
    "fim": 22,
    "valortotal": 82,
    "observacao": "Observação 999",
    "status": "C",
    "__v": 0
  },{
    "_id": {
      "$oid": "64692234c2f24d9778834098"
    },
    "sala": "Sala 1",
    "cliente": "Cliente 65",
    "funcionario": "Funcionário 36",
    "data": {
      "$date": {
        "$numberLong": "1684611636586"
      }
    },
    "inicio": 10,
    "fim": 19,
    "valortotal": 118,
    "observacao": "Observação 1000",
    "status": "R",
    "__v": 0
  },{
    "_id": {
      "$oid": "646c41563251e10d4dc970b5"
    },
    "numero": 1243,
    "sala": "64192278e00009fd9fb2bddb",
    "funcionario": "WEB - Internet",
    "cliente": "Internet - WWW",
    "cpf": 54877,
    "data": {
      "$date": {
        "$numberLong": "1320105600000"
      }
    },
    "inicio": 13,
    "fim": 15,
    "valortotal": 1050000,
    "observacao": "GOSTO DE FANTA",
    "status": "R",
    "__v": 0
  }];

  const mockres = {
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
    }
  }

reservaModel.create = jest.fn().mockResolvedValue(mockres);

  const req = {body: mockres};
  const res = {
    json: jest.fn(),
    status: jest.fn().mockReturnThis(),
  };

  await reservaController.createReserva(req, res);

  expect(res.status).toHaveBeenCalledWith(201);
});
