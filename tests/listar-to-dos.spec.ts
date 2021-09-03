import GerenciarToDos from "../src/useCases/GerenciarToDos";
import faker from 'faker'

test("Deve listar todos os to dos ativos", () => {
    const gerenciarToDos = new GerenciarToDos();

    const todos = [
        faker.name.title(),
        faker.name.title(),
        faker.name.title(),
        faker.name.title()
    ].map((item) => gerenciarToDos.criar({ titulo: item }))

    const lista = gerenciarToDos.listarTodos()

    expect(lista).toStrictEqual(todos)
})

it("Não deve listar to do deletado", () => {
    const gerenciarToDos = new GerenciarToDos();

    const todos = [
        faker.name.title(),
        faker.name.title(),
        faker.name.title(),
        faker.name.title()
    ].map((item) => gerenciarToDos.criar({ titulo: item }))

    gerenciarToDos.deletar(todos[1].id)

    const todosDepoisDeletado = todos.filter((_, key) => key !== 1);

    const lista = gerenciarToDos.listarTodos();

    expect(todosDepoisDeletado).toStrictEqual(lista)
})