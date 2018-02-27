import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskBoard } from '../../../shared/models/taskboard.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-tb-edit',
  templateUrl: './tb-edit.component.html',
  styleUrls: ['./tb-edit.component.sass']
})
export class TbEditComponent implements OnInit {

    form: FormGroup;

    @Input() tb: TaskBoard;
    @Output() taskBoardEditCancel = new EventEmitter;
    @Output() taskBoardEdit = new EventEmitter;

    constructor() { }

    ngOnInit() {
        this.form = new FormGroup({
            title: new FormControl(this.tb.title, [Validators.required])
        })
    }

    onCancel() {
        this.taskBoardEditCancel.emit();
    }

    onSubmit(): void {
        this.taskBoardEdit.emit({...this.tb, title: this.form.value['title']});
    }

}
