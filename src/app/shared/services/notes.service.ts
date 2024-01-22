import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private _httpService : HttpClient) { }
  url = 'http://localhost:3000/';
  createNote(note: any): Observable <any>{
    return this._httpService.post(this.url+"notes", note);
  }
  getNotes(): Observable <any>{    
    return this._httpService.get(this.url+"notes");
  }

  delNote(noteId:any): Observable<any> {    
    return this._httpService.delete<any>(this.url + "notes/" + noteId);
  }

  updateNote(noteId: any, updatedNote : any): Observable<any>{    
    return this._httpService.put(this.url+'notes/' + noteId + '/', updatedNote);
  }
 
}
