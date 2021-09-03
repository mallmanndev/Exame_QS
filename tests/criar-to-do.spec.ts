import GerenciarToDos from "../src/useCases/GerenciarToDos";

test('Deve criar uma lista de to dos', () => {
    const gerenciarToDos = new GerenciarToDos();

    const titulo = "Meu primeiro To Do"

    const novoToDo = gerenciarToDos.criar({ titulo })

    expect(novoToDo.id).not.toBeNull()
    expect(novoToDo.titulo).toBe(titulo)
    expect(novoToDo.criado).not.toBeNull();
});

test("Deve dar erro de tiulo já cadastrado", () => {
    const gerenciarToDos = new GerenciarToDos();

    const titulo = "Meu primeiro To Do"

    gerenciarToDos.criar({ titulo })

    try {
        gerenciarToDos.criar({ titulo });
    } catch (err) {
        expect(err.message).toBe("Titulo já cadastrado!")
    }
});

