import { NoteService } from './../../services/notes.service';
import { Note } from './../../models/note';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-note-create',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.css']
})
export class NoteCreateComponent implements OnInit {
  @Input() note: Note;

  noteForm: FormGroup;

  constructor(private fb: FormBuilder, private noteService: NoteService) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.noteForm = this.fb.group({
      noteText: ['', Validators.compose([Validators.required, Validators.minLength(3)])], // <--- the FormControl called "name"
    });
  }

  prepareSaveNote(): Note {
    const formModel = this.noteForm.value;
    const saveNote: Note = {

      noteText: formModel.noteText as string,
      createdAt: null
    };
    return saveNote;
  }

  onSubmit() {
    console.log('trying to save');
    this.note = this.prepareSaveNote();
    this.noteService.createNote(this.note, () => {
      this.noteForm.reset();

    }); //.subscribe(/* error handling */);
    // this.ngOnChanges();
  }

}
