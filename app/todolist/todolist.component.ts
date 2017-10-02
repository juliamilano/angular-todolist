import { Component } from "@angular/core";

// Для использования относительных путей, необходимо добавить свойство moduleId и установить значение для свойства module.id
// Данное свойство необходимо устанавливать в случае если в проекте используется загрузчик systemJS

class Todo {
    title: string;
    completed: boolean;
}

const todos: Todo[] = [
    {
        title: "Изучить JS",
        completed: true
    },
    {
        title:  "Изучить Angular 2",
        completed: false
    },{
        title:  "Написать ToDoList",
        completed: false
    }
];

@Component({
    moduleId: module.id,
    selector: "todos",
    templateUrl: "todolist.component.html",
    styleUrls: ["todolist.component.css"]
})
export class TodosComponent  {
    title = `Изучить Angular 2`;
    todos: Todo[] = todos;

    toggles(todo: Todo){
        console.log("toggle");
        console.log(todo.completed);
        todo.completed = !todo.completed;
    };
    delete(todo: Todo){

        let index = this.todos.indexOf(todo);
        if(index>-1){
            this.todos.splice(index,1);
        }
    };
}