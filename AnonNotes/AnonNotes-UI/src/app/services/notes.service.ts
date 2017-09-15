import { Note } from './../models/note';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
// import { INote } from '../models/inote';

@Injectable()
export class NoteService {

  config = {
    url: 'http://localhost:8080/notes'
  };
  notes: Array<Note> = [];

  private noteCreatedSource = new Subject<Note>();
  // Observable string streams
  noteAnnounced$ = this.noteCreatedSource.asObservable();

  announceNoteCreated(note: Note) {
    console.log('announceNewNote');
    this.noteCreatedSource.next(note);
  }

  constructor(private http: HttpClient) { }

  getAllNotes(callback) {
    this.http.get<Note[]>(this.config.url).subscribe(
      data => {
        console.log(data);
        this.notes = data;
        callback(this.notes);
      },
      (err) => {
        console.log(err);
      });
  }

  createNote(note: Note, callback) {
    this.http.post<Note>(this.config.url, note).subscribe(
      res => {
        this.announceNoteCreated(res);
        callback(res);
      },
      err => {
        console.log(err);
      });
  }





}
