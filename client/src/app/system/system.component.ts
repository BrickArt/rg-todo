import { Component, OnInit, Input } from '@angular/core';
import { TaskBoard } from '../shared/models/taskboard.model';
import { TaskService } from '../shared/services/task.service';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.sass']
})
export class SystemComponent implements OnInit {

    isLoaded: boolean = false;

    tasksBoards: TaskBoard[] = [];
    hide = true;

    constructor( private taskService: TaskService ) { }

    ngOnInit() {
        this.loadTaskBoards();
    }

    onAddWindowClose() {
        this.hide = true;
    }

    onAddBoard(taskBoard: TaskBoard) {
        this.taskService.createNewTaskBoard(taskBoard).subscribe((taskb: TaskBoard) => {
            this.hide = true;
            this.tasksBoards.push(taskBoard)
        })
    }

    private loadTaskBoards() {
        let user = JSON.parse(window.localStorage.getItem('user'))
        this.taskService.getTaskBoardByUserId(user.id).subscribe((tskb: TaskBoard[]) => {
            this.tasksBoards = tskb;
            this.isLoaded = true;
        })
    }

    TaskBoardDelete(tb: TaskBoard) {
        this.taskService.deleteTaskBoard(tb.id).subscribe((deleted: TaskBoard) => {
            this.isLoaded = false;
            this.loadTaskBoards()
        })
    }

    tbEdit(tbEdited: TaskBoard) {
        this.taskService.editTaskBoard(tbEdited).subscribe((tbNew: TaskBoard) => {
            this.isLoaded = false;
            this.loadTaskBoards()
        })
    }

    tbChange(tbChanged: TaskBoard) {
        this.taskService.editTaskBoard(tbChanged).subscribe((result: TaskBoard) => {
            console.log('Changes saved')
        })
    }

}
