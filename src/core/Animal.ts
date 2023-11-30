import { stringParaEntradaDeData } from "@/utils/converters";

export default class Animal {
  id: number | null;
  nome: string;
  dataNascimento: string;
  dataEntrada: string;
  dataSaida: string;
  descricao: string;
  status: string;
  tutor: string;

  constructor(id: number | null, nome: string, dataNascimento: string,
    dataEntrada: string, dataSaida: string,
    descricao: string, status: string, tutor: string) {
    this.id = id;
    this.nome = nome;
    this.dataNascimento = dataNascimento;
    this.dataEntrada = dataEntrada;
    this.dataSaida = dataSaida;
    this.descricao = descricao;
    this.status = status;
    this.tutor = tutor;
  }

  static geraEventosMock() {
    return [
      new Animal(
        1,
        "Mima",
        "2023-10-01",
        "2023-10-02",
        "",
        "Escaminha fiv/felv negativo",
        "DISPONIVEL",
        ""
      ),
      new Animal(
        2,
        "Mimo",
        "2023-09-01",
        "2023-10-05",
        "2023-10-10",
        "Cinzinha fiv/felv negativo, castração agendada",
        "ADOTADO",
        "Lucas Silva"
      ),
    ]
  }

  static vazio(): Animal {
    return new Animal(null, "", stringParaEntradaDeData(""), stringParaEntradaDeData(""), stringParaEntradaDeData(""), "", "", "");
  }
}