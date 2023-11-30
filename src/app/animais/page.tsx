'use client';
import Botao from "@/components/animais/botao";
import Formulario from "@/components/animais/formulario";
import Layout from "@/components/animais/layout";
import Tabela from "@/components/animais/tabela";
import Animal from "@/core/Animal";
import { atualizarAnimal, cadastrarAnimal, excluirAnimal, fetchAnimais } from "@/service/animalService";
import { useEffect, useState } from "react";

export default function Animais() {

  const [animal, setAnimal] = useState<Animal>(Animal.vazio())
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  const [animais, setAnimais] = useState<Animal[]>([]);

  useEffect(() => {
    if (visivel === 'tabela') {
      const loadAnimais = async () => {
        try {
          const dados = await fetchAnimais();
          setAnimais(dados);
        } catch (error) {
          console.error("Erro ao buscar animais:", error);
        }
      }

      loadAnimais();
    }
  }, [visivel]);


  function animalSelecionado(animal: Animal) {
    setAnimal(animal)
    setVisivel('form')
  }

  async function animalExcluido(animal: Animal) {
    const confirmacao = window.confirm("Tem certeza de que deseja excluir este animal?");
    if (confirmacao) {
      try {
        if (animal.id !== null) {
          await excluirAnimal(animal.id);
        } else {
          console.error("Id do animal é nulo!");
        }
        setAnimais(prevAnimais => prevAnimais.filter(ev => ev.id !== animal.id));
      } catch (error) {
        console.error("Erro ao excluir animal:", error);
      }
    }
  }

  function salvarOuAlterarAnimal(animal: Animal) {
    if (animal.id) {
      alterarAnimal(animal)
    } else {
      salvarAnimal(animal)
    }
  }

  async function alterarAnimal(animal: Animal) {
    try {
      const animalAtualizado = await atualizarAnimal(animal);
      setVisivel("tabela");
    } catch (error) {
      console.error("Erro ao atualizar animal:", error);
    }
  }

  async function salvarAnimal(animal: Animal) {
    try {
      const novoAnimal = await cadastrarAnimal(animal);
      setVisivel("tabela");
    } catch (error) {
      console.error("Erro ao salvar animal:", error);
    }
  }

  function novoAnimal() {
    setAnimal(Animal.vazio())
    setVisivel("form")
  }

  return (
    <div className={`
     flex justify-center items-center h-screen
     bg-gradient-to-bl from-emerald-900 via-emerald-400 to-emerald-900
     text-white`}>
      <Layout titulo="Cadastro de animais">
        {visivel === 'tabela' ? (
          <>
            <div className="flex justify-end">
              <Botao className="mb-4" cor="bg-gradient-to-r from-emerald-500 to-emerald-700"
                onClick={() => novoAnimal()}>
                Novo animal
              </Botao>
            </div>
            <Tabela animais={animais}
              animalSelecionado={animalSelecionado}
              animalExcluido={animalExcluido}></Tabela>
          </>
        ) : (
          <Formulario animal={animal}
            animalMudou={salvarOuAlterarAnimal}
            cancelado={() => setVisivel('tabela')} />
        )}
      </Layout>
    </div>
  )
}
