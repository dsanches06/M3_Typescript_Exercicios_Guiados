/* Cria uma classe TarefaClass que implemente a interface Tarefa.
Dica lógica passo a passo:
1. Implemente os atributos da interface.
2. Crie um constructor que receba o id e o título.
3. A propriedade `concluida` deve iniciar sempre como false.
4. Adicione um método marcarConcluida() que mude o estado para true */
export default class TaskClass {
    constructor(id, title) {
        this.id = id;
        this.title = title;
        this.completed = false;
    }
    markCompleted() {
        this.completed = true;
    }
}
