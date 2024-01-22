import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { NotecontainerComponent } from '../shared/component/notecontainer/notecontainer.component';
import { MaterialModule } from '../shared/material/material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotesComponent } from './components/notes/notes.component';

@NgModule({
  declarations: [NotesComponent, NavbarComponent, NotecontainerComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class NotesModule {}
