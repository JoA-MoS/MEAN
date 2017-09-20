import { PlayerService } from './../../services/player/player.service';
import { Player } from './../../models/player';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-player-create',
  templateUrl: './player-create.component.html',
  styleUrls: ['./player-create.component.scss']
})
export class PlayerCreateComponent implements OnInit {
  @Input() player: Player;
  playerForm: FormGroup;

  constructor(private fb: FormBuilder,
    private playerService: PlayerService) {
    this.createForm();
  }

  createForm(): any {
    this.playerForm = this.fb.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      preferredPosition: ['']
    });
  }
  ngOnInit() {
  }

}
