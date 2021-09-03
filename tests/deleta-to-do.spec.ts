import GerenciarToDos from "../src/useCases/GerenciarToDos";
import { v4 as uuid } from 'uuid'
import faker from 'faker'

test('Deve retornar erro de não encontrado', () => {
    const gerenciarToDos = new GerenciarToDos();

    try {
        gerenciarToDos.deletar(uuid());
        fail();
    } catch (err) {
        expect(err.message).toBe("To Do não encontrado!")
    }
});

test("Deve deletar o to do", () => {
    const gerenciarToDos = new GerenciarToDos();

    const todo = gerenciarToDos.criar({ titulo: faker.name.title() })

    try {
        gerenciarToDos.deletar(todo.id)

        const todos = gerenciarToDos.listarTodos()
        expect(todos.length).toBe(0);
    } catch (err) {
        fail()
    }
})