import ToDo from "../entidades/ToDo";
import ToDoItem from "../entidades/ToDoItem";
import { v4 as uuid } from 'uuid'

interface ICriarToDoDTO {
    titulo: string;
}

class GerenciarToDos {
    private toDos: ToDo[] = [];
    private ultimo: ToDo;
    private ultimoItem: ToDoItem;

    public criar(dados: ICriarToDoDTO): ToDo {
        const verificaTitulo = this.buscarPeloTitulo(dados.titulo)
        if (verificaTitulo) throw new Error("Titulo já cadastrado!")

        const toDo = new ToDo({
            id: uuid(),
            titulo: dados.titulo,
            criado: new Date()
        })
        this.ultimo = toDo;
        this.toDos.push(toDo);

        return toDo;
    }

    public buscarPeloTitulo(titulo: string): ToDo | undefined {
        return this.toDos.find((toDo) => toDo.titulo === titulo)
    }

    public deletar(id: string): void {
        const toDo = this.procuraPeloId(id);
        if (!toDo) throw new Error("To Do não encontrado!")

        toDo.setDeletado(new Date());
    }

    public procuraPeloId(id: string): ToDo | undefined {
        return this.toDos.find((toDo) => toDo.id === id)
    }
}

export default GerenciarToDos;