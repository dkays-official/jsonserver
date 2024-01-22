import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-notecontainer',
  templateUrl: './notecontainer.component.html',
  styleUrl: './notecontainer.component.css',
})
export class NotecontainerComponent {
  @Output() del: EventEmitter<any> = new EventEmitter();
  @Output() edit: EventEmitter<any> = new EventEmitter();
  @Input() userNotes!: any[];

  delete(index: any) {
    this.del.emit(index);
  }
  editNote(index: any) {
    this.edit.emit(index);
  }
}
