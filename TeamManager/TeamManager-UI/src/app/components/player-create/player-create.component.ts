import { Router } from '@angular/router';
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
    private playerService: PlayerService,
    private router: Router) {
    this.createForm();
  }

  createForm(): any {
    this.playerForm = this.fb.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      preferredPosition: ['']
    });
  }


  prepareSavePlayer(): Player {
    const formModel = this.playerForm.value;
    const savePlayer: Player = {
      _id: null,
      name: formModel.name as string,
      preferredPosition: formModel.preferredPosition as string,
      gameStatuses: [null, 0, 0, 0]
    };
    console.log(savePlayer);
    return savePlayer;
  }


  onSubmit() {
    console.log('trying to save');
    this.player = this.prepareSavePlayer();
    this.playerService.create(this.player).subscribe(data => {
      this.playerForm.reset();
      this.router.navigate(['/players']);
    });


  }

  ngOnInit() {
  }

}
