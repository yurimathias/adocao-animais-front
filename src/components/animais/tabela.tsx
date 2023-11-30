import Animal from "@/core/Animal"
import { IconeEdicao, IconeLixo } from "../icones/tabela"

interface TabelaProps {
    animais: Animal[]
    animalSelecionado?: (animal: Animal) => void
    animalExcluido?: (animal: Animal) => void
}

export default function Tabela(props: TabelaProps) {

    const exibirAcoes = props.animalSelecionado || props.animalExcluido

    function renderHeader() {
        return (
            <tr>
                <th className="text-center p-3">Id</th>
                <th className="text-center p-3">Nome</th>
                <th className="text-center p-3">Data Nascimento</th>
                <th className="text-center p-3">Data Entrada</th>
                <th className="text-center p-3">Data Saida</th>
                <th className="text-center p-3">Descrição</th>
                <th className="text-center p-3">Status</th>
                <th className="text-center p-3">Tutor</th>
                {exibirAcoes ? <th className="p-3">Ações</th> : false}
            </tr>
        )
    }

    function renderDados() {
        return props.animais?.map((animal, i) => {
            return (
                <tr key={animal.id}
                    className={`${i % 2 === 0 ? 'bg-emerald-200' : 'bg-emerald-100'} `}>
                    <td className="text-center p-3">{animal.id}</td>
                    <td className="text-center p-3">{animal.nome}</td>
                    <td className="text-center p-3">{animal.dataNascimento}</td>
                    <td className="text-center p-3">{animal.dataEntrada}</td>
                    <td className="text-center p-3">{animal.dataSaida ? animal.dataSaida : '---'}</td>
                    <td className="text-left p-3">{animal.descricao}</td>
                    <td className="text-center p-3">{animal.status}</td>
                    <td className="text-center p-3">{animal.tutor ? animal.tutor : '---'}</td>
                    {exibirAcoes
                        ? renderizarAcoes(animal)
                        : false}
                </tr>
            )
        })
    }

    function renderizarAcoes(animal: Animal) {
        return (
            <td className="flex justify-center">
                {props.animalSelecionado ? (
                    <button onClick={() => props.animalSelecionado?.(animal)} className={`flex justify-center items
                    text-emerald-600 rounded-full p-2 m-1
                    hover:bg-gray-100`}>{IconeEdicao}</button>
                ) : false}
                {props.animalExcluido ? (
                    <button onClick={() => props.animalExcluido?.(animal)} className={`flex justify-center items
                    text-red-600 rounded-full p-2 m-1
                    hover:bg-gray-100`}>{IconeLixo}</button>
                ) : false}
            </td>
        )
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`text-gray-100
            bg-gradient-to-r from-emerald-500 to-emerald-800`}>
                {renderHeader()}
            </thead>
            <tbody>
                {renderDados()}
            </tbody>
        </table>
    )
}