import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Note} from '../Note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:8080/notes';
  }

  public getNotes(): Observable<Note[]> {
    return this.httpClient.get<Note[]>(this.baseUrl);
  }

  public addNote(note: Note){
      return this.httpClient.post<Note>(this.baseUrl, note);
    }

  public editNote(note: Note){
    return this.httpClient.post(this.baseUrl + '/edit' + '?id=' + note.id, note);
  }
}
