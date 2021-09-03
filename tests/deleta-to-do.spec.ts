import GerenciarToDos from "../src/useCases/GerenciarToDos";

test('Deve retornar erro de não encontrado', () => {
    const gerenciarToDos = new GerenciarToDos();

    try {
        gerenciarToDos.deletar("0000");
        fail();
    } catch (err) {
        expect(err.message).toBe("To Do não encontrado!")
    }
});

test("Deve deletar o to do", () => {
    const gerenciarToDos = new GerenciarToDos();

    const todo = gerenciarToDos.criar({ titulo: "To Do para deletar!" })

    try {
        gerenciarToDos.deletar(todo.id)

        
    } catch (err) {
        fail()
    }

})