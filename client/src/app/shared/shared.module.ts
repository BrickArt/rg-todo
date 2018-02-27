import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { MaterialModule } from './modules/material.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { DialogComponent } from './components/dialog/dialog.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [
    NotFoundComponent,
    DialogComponent,
    // HeaderComponent
  ]
})
export class SharedModule {}
