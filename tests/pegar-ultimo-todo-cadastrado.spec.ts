import GerenciarToDos from "../src/useCases/GerenciarToDos";
import faker from 'faker';

it("Deve buscar ultimo to do cadastrado", () => {
    const gerenciarToDos = new GerenciarToDos();

    //cria todos
    const todos = [
        faker.name.title(),
        faker.name.title(),
        faker.name.title(),
        faker.name.title()
    ].map((item) => gerenciarToDos.criar({ titulo: item }))


    try{
        const ultimo = gerenciarToDos.pegarUltimoCadastrado();
        expect(ultimo).toBe(todos[todos.length - 1])
    }catch(err){
        fail();
    }
})