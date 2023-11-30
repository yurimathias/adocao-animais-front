import Animal from '../core/Animal';

let animaisList: Animal[] = [
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
let proximoId = animaisList.length + 1;

export const fetchAnimais = async (): Promise<Animal[]> => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return animaisList;
  } catch (error) {
    throw new Error('Erro ao buscar animais');
  }
};

export const cadastrarAnimal = async (novoAnimal: Animal): Promise<Animal> => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 500));

    novoAnimal.id = proximoId++;
    animaisList.push(novoAnimal);

    return novoAnimal;
  } catch (error) {
    console.error("Erro ao cadastrar animal:", error);
    throw error;
  }
};

export const atualizarAnimal = async (animalAtualizado: Animal): Promise<Animal> => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 500));

    const index = animaisList.findIndex((animal) => animal.id === animalAtualizado.id);

    if (index !== -1) {
      animaisList[index] = animalAtualizado;
      return animalAtualizado;
    } else {
      throw new Error('Animal não encontrado');
    }
  } catch (error) {
    console.error("Erro ao atualizar animal:", error);
    throw error;
  }
};

export const excluirAnimal = async (id: number): Promise<void> => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 500));

    animaisList = animaisList.filter((animal) => animal.id !== id);
  } catch (error) {
    console.error("Erro ao excluir animal:", error);
    throw error;
  }
};