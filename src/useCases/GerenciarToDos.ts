import ToDo from "../entidades/ToDo";
import { v4 as uuid } from 'uuid'

interface ICriarToDoDTO {
    titulo: string;
}

/**
 * 
 * Classe para gerenciamento de To Dos.
 */
class GerenciarToDos {
    private toDos: ToDo[] = [];
    private ultimo: ToDo;
    private quantidade: number = 0;


    /**
     * Cria um novo To Do e adiciona a lista de To Dos.
     * 
     * @param  {ICriarToDoDTO} dados
     * @returns ToDo
     */
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
    /**
     * 
     * Realiza busca pelo titulo exato do To Do.
     * Obs: Não é busca de FTS.
     * 
     * @param  {string} titulo
     * @returns ToDo
     */
    public buscarPeloTitulo(titulo: string): ToDo | undefined {
        return this.toDos.find((toDo) => toDo.titulo === titulo)
    }

    /**
     * Deleta um To Do pelo seu ID.
     * Obs: Os to dos possuem exclusão lógica.
     * 
     * @param  {string} id
     * @returns void
     */
    public deletar(id: string): void {
        const toDo = this.procuraPeloId(id);
        if (!toDo) throw new Error("To Do não encontrado!")

        toDo.setDeletado(new Date());
        this.quantidade--;
    }

    /**
     * Retorna um To Do de acordo com o id informado.
     * 
     * @param  {string} id
     * @returns ToDo
     */
    public procuraPeloId(id: string): ToDo | undefined {
        return this.toDos.find((toDo) => toDo.id === id)
    }

    /**
     * Lista todos os to dos ativos.
     * 
     * @returns ToDo
     */
    public listarTodos(): ToDo[] {
        return this.toDos.filter((toDo) => !toDo.deletado)
    }

    /**
     * Informa a quantidade de to dos ativos.
     * 
     * @returns number
     */
    public pegarQuantidade(): number {
        return this.quantidade;
    }

    /**
     * Retorna o último to do cadastrado, caso ele não foi deletado.
     * 
     * @returns ToDo
     */
    public pegarUltimoCadastrado(): ToDo {
        if (this.ultimo.deletado) throw new Error("O último to do foi deletado.")

        return this.ultimo
    }
}

export default GerenciarToDos;