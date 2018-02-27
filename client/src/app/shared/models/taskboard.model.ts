import { Task } from "./task.model";

export class TaskBoard {
    constructor(
        public user_id: string,
        public title: string,
        public tasks?: Task[],
        public id?: string
    ) { }
}
