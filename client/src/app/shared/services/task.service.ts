import { Http, Response } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { BaseApi } from "../core/base-api";
import { TaskBoard } from "../models/taskboard.model";



@Injectable()
export class TaskService extends BaseApi {
    constructor(public http: Http) {
        super(http)
    }

    getTaskBoardByUserId(user_id: string): Observable<TaskBoard[]> {
        return this.get(`tasksboards?user_id=${user_id}`)
    }

    createNewTaskBoard(taskBoard: TaskBoard): Observable<TaskBoard> {
        console.log('service', taskBoard)
        return this.post('tasksboards', taskBoard)
    }

    deleteTaskBoard(id: string): Observable<TaskBoard> {
        return this.delete(`tasksboards/${id}`)
    }

    editTaskBoard(taskBoard: TaskBoard): Observable<TaskBoard> {
        return this.put(`tasksboards/${taskBoard.id}`, taskBoard)
    }
}
