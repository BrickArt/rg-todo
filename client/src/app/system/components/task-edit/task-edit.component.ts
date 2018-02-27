import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Task } from '../../../shared/models/task.model';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.sass']
})
export class TaskEditComponent implements OnInit {

    @Input() t: Task;
    @Output() taskEditCancel = new EventEmitter;
    @Output() taskEdit = new EventEmitter<string>();

    form: FormGroup;

    constructor() { }

    ngOnInit() {
        this.form = new FormGroup({
            title: new FormControl(this.t.title, [Validators.required])
        })
    }

    onCancel(): void {
        this.taskEditCancel.emit();
    }

    onSubmit(): void {
        this.taskEdit.emit(this.form.value['title']);
    }

}
