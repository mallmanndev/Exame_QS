import ToDo from "../entidades/ToDo";
import { v4 as uuid } from 'uuid'

interface ICriarToDoDTO {
    titulo: string;
}

class GerenciarToDos {
    private toDos: ToDo[] = [];
    private ultimo: ToDo;
    private quantidade: number = 0;

    public criar(dados: ICriarToDoDTO): ToDo {
        const verificaTitulo = this.buscarPeloTitulo(dados.titulo)
        if (verificaTitulo) throw new Error("Titulo já cadastrado!")

        const toDo = new ToDo({
            id: uuid(),
            titulo: dados.titulo,
            criado: new Date()
        })
        this.ultimo = toDo;
        this.quantidade++;
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
        this.quantidade--;
    }

    public procuraPeloId(id: string): ToDo | undefined {
        return this.toDos.find((toDo) => toDo.id === id)
    }

    public listarTodos(): ToDo[] {
        return this.toDos.filter((toDo) => !toDo.deletado)
    }

    public pegarQuantidade(): number {
        return this.quantidade;
    }

    public pegarUltimoCadastrado(): ToDo {
        if (this.ultimo.deletado) throw new Error("O último to do foi deletado.")

        return this.ultimo
    }
}

export default GerenciarToDos;