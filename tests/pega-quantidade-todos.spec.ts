import GerenciarToDos from "../src/useCases/GerenciarToDos";
import faker from 'faker';

it("Não deve listar to do deletado", () => {
    const gerenciarToDos = new GerenciarToDos();

    //cria todos
    const todos = [
        faker.name.title(),
        faker.name.title(),
        faker.name.title(),
        faker.name.title()
    ].map((item) => gerenciarToDos.criar({ titulo: item }))

    const quantidade = gerenciarToDos.pegarQuantidade()

    expect(quantidade).toBe(todos.length);
})