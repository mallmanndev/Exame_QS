import GerenciarToDos from "../src/useCases/GerenciarToDos";
import faker from "faker";

test('Deve criar uma lista de to dos', () => {
    const gerenciarToDos = new GerenciarToDos();

    const titulo = faker.name.title()

    const novoToDo = gerenciarToDos.criar({ titulo })

    expect(novoToDo.id).not.toBeNull()
    expect(novoToDo.titulo).toBe(titulo)
    expect(novoToDo.criado).not.toBeNull();
});

test("Deve dar erro de tiulo já cadastrado", () => {
    const gerenciarToDos = new GerenciarToDos();

    const titulo = faker.name.title();

    gerenciarToDos.criar({ titulo })

    try {
        gerenciarToDos.criar({ titulo });
    } catch (err) {
        expect(err.message).toBe("Titulo já cadastrado!")
    }
});

