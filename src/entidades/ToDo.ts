class ToDo {
    public id: string;
    public titulo: string;
    public criado: Date;
    public deletado: Date;

    public setDeletado(value: Date) {
        this.deletado = value;
    }

    constructor(props: Partial<ToDo>) {
        Object.assign(this, props);
    }
}

export default ToDo;