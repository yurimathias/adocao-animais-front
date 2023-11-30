import Animal from "@/core/Animal";
import Entrada from "./entrada";
import { useState } from "react";
import { stringParaEntradaDeData } from "@/utils/converters";
import Botao from "./botao";

interface FormularioProps {
    animal: Animal
    animalMudou?: (animal: Animal) => void
    cancelado?: () => void
}

export default function Formulario(props: FormularioProps) {
    const id = props.animal?.id
    const [nome, setNome] = useState(props.animal?.nome)
    const [dataNascimento, setDataNascimento] = useState(props.animal?.dataNascimento)
    const [dataEntrada, setDataEntrada] = useState(props.animal?.dataEntrada)
    const [dataSaida, setDataSaida] = useState(props.animal?.dataSaida)
    const [descricao, setDescricao] = useState(props.animal?.descricao)
    const [status, setStatus] = useState(props.animal?.status)
    const [tutor, setTutor] = useState(props.animal?.tutor)

    return (
        <div>
            {id ? (<Entrada texto="id" valor={id} somenteLeitura></Entrada>) : false}
            <Entrada texto="Nome" valor={nome} onChange={setNome}></Entrada>
            <Entrada texto="Data Nascimento" tipo="date" valor={stringParaEntradaDeData(dataNascimento)} onChange={setDataNascimento}></Entrada>
            <Entrada texto="Data Entrada" tipo="date" valor={stringParaEntradaDeData(dataEntrada)} onChange={setDataEntrada}></Entrada>
            <Entrada texto="Data Saída" tipo="date" valor={""} onChange={setDataSaida}></Entrada>
            <Entrada texto="Descricao" valor={descricao} onChange={setDescricao}></Entrada>
            <Entrada texto="Status" valor={status} onChange={setStatus}></Entrada>
            <Entrada texto="Tutor" valor={tutor} onChange={setTutor}></Entrada>
            <div className="flex justify-end mt-5">
                <Botao className="mr-3" cor="bg-gradient-to-r from-blue-500 to-blue-700"
                    onClick={() => props.animalMudou?.(new Animal(
                        id, nome, dataNascimento, dataEntrada, dataSaida, descricao, status, tutor))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao cor="bg-gradient-to-r from-gray-500 to-gray-700"
                    onClick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}