import { OrderByNamePipe } from './../../order-by-name.pipe';
import { PlayerService } from './../../services/player/player.service';
import 'rxjs/add/operator/switchMap';
import { Player } from './../../models/player';
import { Component, OnInit, Pipe } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-player-game-statuses',
  templateUrl: './player-game-statuses.component.html',
  styleUrls: ['./player-game-statuses.component.css'],

})
export class PlayerGameStatusesComponent implements OnInit {
  players$: Observable<Player[]>;
  gameId: number;


  constructor(private route: ActivatedRoute, private router: Router, private service: PlayerService) { }



  ngOnInit() {
    this.players$ = this.service.getAll();
    this.route.parent.paramMap.subscribe(params => {
      this.gameId = +params.get('id');
    });
  }

  statusChanged(player: Player) {
    console.log(player);
    this.service.update(player._id, player).subscribe();
  }
}
