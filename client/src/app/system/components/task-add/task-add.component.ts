import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Task } from '../../../shared/models/task.model';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.sass']
})
export class TaskAddComponent implements OnInit {

    form: FormGroup;
    @Output() taskAdd = new EventEmitter<Task>();


    constructor() { }

    ngOnInit() {
        this.form = new FormGroup({
            title: new FormControl(null, [Validators.required])
        })
    }

    onSubmit() {
        this.taskAdd.emit({
            title: this.form.value['title'],
            status: false
        })
        this.form.reset();
    }

}
