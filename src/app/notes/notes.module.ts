import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesComponent } from './components/notes/notes.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from '../app-routing.module';
import { MaterialModule } from '../shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotewrapperComponent } from './components/notewrapper/notewrapper.component';
import { NotecontainerComponent } from '../shared/component/notecontainer/notecontainer.component';


@NgModule({
  declarations: [
    NotesComponent,
    NavbarComponent,
    NotecontainerComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,    
  ]
})
export class NotesModule { }
