import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TaskBoard } from '../../../shared/models/taskboard.model';

@Component({
  selector: 'app-system-add',
  templateUrl: './system-add.component.html',
  styleUrls: ['./system-add.component.sass']
})
export class SystemAddComponent implements OnInit {

    @Output() addBoardCancel = new EventEmitter
    @Output() addBoard = new EventEmitter

    form: FormGroup;

    constructor() { }

    ngOnInit() {
        this.form = new FormGroup({
            title: new FormControl(null, [Validators.required])
        })
    }

    onCancel() {
        this.addBoardCancel.emit();
    }

    onSubmit() {
        let user = JSON.parse(window.localStorage.getItem('user'))
        this.addBoard.emit({
            user_id: user.id,
            title: this.form.value['title']
        })
    }

}
