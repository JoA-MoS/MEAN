import { Note } from './../../models/note';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NoteService } from '../../services/notes.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})

export class NoteListComponent implements OnInit, OnDestroy {
  public notes: Array<Note> = [];
  subscription: Subscription;

  constructor(private noteService: NoteService) {
    this.subscription = noteService.noteAnnounced$.subscribe(
      note => {
        this.getNotes();
      });
    this.getNotes();
  }

  ngOnInit() {
  }

  getNotes() {
    this.noteService.getAllNotes(notes => {
      // sort the resultes in descending order
      this.notes = notes.sort((a: Note, b: Note) => {
        return a.createdAt < b.createdAt;
      });
    });
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
}
