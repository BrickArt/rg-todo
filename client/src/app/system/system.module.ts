import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DndModule } from 'ng2-dnd';

import { SystemComponent } from './system.component';
import { TaskComponent } from './components/task/task.component';
import { TaskboardComponent } from './components/taskboard/taskboard.component';
import { SharedModule } from '../shared/shared.module';
import { SystemRoutingModule } from './system-routing.module';
import { SystemAddComponent } from './components/system-add/system-add.component';
import { TaskService } from '../shared/services/task.service';
import { DialogComponent } from '../shared/components/dialog/dialog.component';
import { TbEditComponent } from './components/tb-edit/tb-edit.component';
import { TaskAddComponent } from './components/task-add/task-add.component';
import { TaskEditComponent } from './components/task-edit/task-edit.component';
import { TaskEditorComponent } from './components/task-editor/task-editor.component';
import { UserComponent } from './components/user/user.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SystemRoutingModule,
    DndModule.forRoot()
  ],
  declarations: [
      SystemComponent,
      TaskComponent,
      TaskboardComponent,
      SystemAddComponent,
      TbEditComponent,
      TaskAddComponent,
      TaskEditComponent,
      TaskEditorComponent,
      UserComponent
    ],
    providers: [
        TaskService
    ],
    entryComponents: [ DialogComponent ]
})
export class SystemModule { }
