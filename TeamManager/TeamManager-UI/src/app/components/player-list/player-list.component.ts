import { ModalConfirmComponent } from './../modal-confirm/modal-confirm.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { PlayerService } from './../../services/player/player.service';
import { Player } from './../../models/player';
import { Component, OnInit } from '@angular/core';
import { Observer } from 'rxjs/Observer';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  players$: Observable<Player[]>;
  constructor(private service: PlayerService, private modalService: NgbModal) { }

  ngOnInit() {
    this.players$ = this.service.getAll();
  }

  deletePlayer(player: Player) {
    const modalRef = this.modalService.open(ModalConfirmComponent);

    modalRef.componentInstance.title = 'DELETE';
    modalRef.componentInstance.message = `Are you sure you want to delete: "${player.name}"`;
    modalRef.result.then((data) => {
      console.log(data);
      if (data) {
        this.service.delete(player._id).subscribe(res => {
          this.players$ = this.service.getAll();
        });
      }
    }, (reason) => {
      // console.log(reason);
    });
    //
  }

}
