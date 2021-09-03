class ToDoItem {
    public id: string;
    public titulo: string;
    public descricao: string;
    public criado: Date;
    public deletado: Date;

    constructor(props: Partial<ToDoItem>) {
        Object.assign(this, props);
    }
}

export default ToDoItem;