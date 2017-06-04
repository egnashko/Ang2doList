import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-todo-form',
    templateUrl: './todo-form.component.html',
    styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent {
    title: string = '';
    @Output() add = new EventEmitter();

    onSubmit() {
        this.add.emit(this.title);
    }
}
