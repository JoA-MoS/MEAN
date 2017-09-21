import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-admin',
  templateUrl: './game-admin.component.html',
  styleUrls: ['./game-admin.component.css']
})
export class GameAdminComponent implements OnInit {

  gameId: number;


  constructor(private route: ActivatedRoute) { }



  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.gameId = +params.get('id');
    });
  }

}
