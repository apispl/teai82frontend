import {Component, Input, OnInit} from '@angular/core';
import {NoteService} from '../../services/note.service';
import {Note} from '../../Note';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  notes: Note[];
  oneNote: Note;
  noteToEdit: Note;
  indexes: number[];

  constructor(private noteService: NoteService) {
    this.oneNote = new Note();
    this.oneNote.creationDate = new Date();
    this.oneNote.editingDate = new Date();

    this.noteToEdit = new Note();
    this.noteToEdit.creationDate = new Date();
    this.noteToEdit.editingDate = new Date();
  }

  ngOnInit(): void {
    this.noteService.getNotes().subscribe(value => {
        this.notes = value;
        this.indexes = Array.from(Array(this.notes.length), (_, i) => i + 1);
    });

  }
  onSubmit() {
    this.noteService.addNote(this.oneNote).subscribe(value => {
      console.log(value);
    });
    location.reload();
  }

  onSubmitEdit() {
    this.noteService.editNote(this.noteToEdit).subscribe(value => {
        console.log(value);
    });
    location.reload();
  }
}
