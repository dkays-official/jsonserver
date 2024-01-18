import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoggedUserService } from '../../../shared/services/logged-user.service';
import { NotesService } from '../../../shared/services/notes.service';
import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css'
})
export class NotesComponent {
  note: FormGroup;
  noteBtn: string;
  userNotes: any[] = [];
  allNotes: any[] = [];
  noteId: string | undefined;
  noteIndex: number | undefined;
  userId: string | undefined;
  currentUserNotes: any;
  loggedUser: any;
  constructor(private _loggedUser: LoggedUserService, private _notesService: NotesService) {
    this.noteBtn = 'Save'
    const loggedUserString = localStorage.getItem("LoggedUser");
    this.loggedUser = loggedUserString ? JSON.parse(loggedUserString) : null;
    this.note = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      userId: new FormControl(this.loggedUser.id)
    })
    this._notesService.getNotes().subscribe((note) => {
      this.allNotes = note;
      this.allNotes.forEach((note: any) => {
        if (note.userId == this.loggedUser.id) {
          this.userNotes.push(note)
        }
      });
    })
  }

  //Save Note
  saveNote() {
    if (!this.note.invalid) {
      const loggedUserString = localStorage.getItem("LoggedUser");
      const loggedUser = loggedUserString ? JSON.parse(loggedUserString) : null;
      this._notesService.createNote(this.note.value).subscribe((note) => {
        this.userNotes.push(note)
        console.log(this.userNotes);
        this.note.reset()
        // this._notesService.getNotes().subscribe((notes) => {
        //   this.allNotes = notes;
        //   this.userNotes = notes.filter((note: any) => note.userId === loggedUser.id);
        //  this.userNotes.reverse();
        // //  this.note.reset()     
        // });
      });
    }
  }
  //Delete Note
  delNote(index: any) {
    this._notesService.delNote(this.userNotes[index]["id"]).subscribe((notes) => {
      console.log(notes);
    });
    this.userNotes.splice(index, 1)
  }

  globalIndex: any;
  //Edit Button
  editNote(index: any) {
    this.noteBtn = "Update"
    this.globalIndex = index
    this.note.controls['title'].setValue(this.userNotes[index].title)
    this.note.controls['description'].setValue(this.userNotes[index].description)
  }

  //Update Note
  updateNote(index: any) {
    let updatedNote = { title: this.note.value.title, description: this.note.value.description, userId: this.loggedUser.id }
    this._notesService.updateNote(this.userNotes[index].id, updatedNote).subscribe((note) => {
    this.userNotes.splice(index, 1, note)
    this.note.reset();
    })
  }

  noteHandler() {
    if (this.noteBtn == "Save") {
      this.saveNote();
    }
    else {
      this.updateNote(this.globalIndex);
      this.noteBtn = "Save";
    }
  }
}
