import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Task } from '../../../shared/models/task.model';
import { fadeStateTrigger } from '../../../shared/animations/fade.animation';

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.sass'],
    animations: [fadeStateTrigger]
})
export class TaskComponent implements OnInit {

    @Input() t: Task;
    @Input() idx: number;

    hide: boolean = true;
    edit: boolean = false;

    @Output() taskCange = new EventEmitter();
    @Output() taskDelete = new EventEmitter<number>();

    @Output() keyup = new EventEmitter();
    @Output() keydown = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

    onChange(): void {
        this.t.status = !this.t.status;
        this.taskCange.emit()
    }

    onDelete() {
        this.taskDelete.emit(this.idx)
        console.log('del')
    }

    onEditCancel():void {
        this.edit = false;
    }

    onEdit(title: string) {
        this.t.title = title;
        this.edit = false;
        this.taskCange.emit(this.t)
    }

    onKeydown() {
        this.keydown.emit();
    }

    onKeyup() {
        this.keyup.emit();
    }

}
