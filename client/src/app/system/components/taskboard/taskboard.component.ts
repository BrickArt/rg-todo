import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskBoard } from '../../../shared/models/taskboard.model';
import { fadeStateTrigger } from '../../../shared/animations/fade.animation';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../../../shared/components/dialog/dialog.component';
import { Task } from '../../../shared/models/task.model';

@Component({
    selector: 'app-taskboard',
    templateUrl: './taskboard.component.html',
    styleUrls: ['./taskboard.component.sass'],
    animations: [fadeStateTrigger]
})
export class TaskboardComponent implements OnInit {

    @Input() tb: TaskBoard;
    hide: boolean = true;
    edited: boolean = false;
    sortable: boolean = false;

    @Output() tbDelete = new EventEmitter;
    @Output() tbEdit = new EventEmitter<TaskBoard>();
    @Output() tbChange = new EventEmitter<TaskBoard>();

    constructor(private dialog: MatDialog) { }

    ngOnInit() {
    }

    onDrop() {
        this.tbChange.emit(this.tb)
        this.sortable = false
        console.log(event)
    }

    openDialog() {
        let dialogRef = this.dialog.open(DialogComponent, {data: {title: this.tb.title}});
        dialogRef.beforeClose().subscribe(result => {
            if(result){
                this.tbDelete.emit(this.tb)
            }
        })
    }

    onEdit(tbEdited: TaskBoard) {
        this.tbEdit.emit(tbEdited)
    }

    taskAdd(task: Task) {

        if (this.tb.tasks) {
            this.tb.tasks = [...this.tb.tasks, task]
        } else {
            this.tb.tasks = [task]
        }
        this.tbChange.emit(this.tb)

        // this.onEdit(t)
    }

    onTaskChange(result: any) {
        this.tbChange.emit(this.tb)
        console.log(this.tb)
    }

    onTaskDelete(idx: number) {
        this.tb.tasks.splice(idx, 1);
        this.tbChange.emit(this.tb)
        console.log(idx)
    }

}
