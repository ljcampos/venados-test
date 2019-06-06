import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  team: any[] = [];

  constructor(private _services: ServicesService) { }

  ngOnInit() {
    this._services.getPlayers().subscribe( (response: any) => {
      console.log('res', response);
      this.team = response.data.team;
    }, error => {
      console.log('err', error);
    });
  }

}
