import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';
import { Games } from '../model/games.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  games: Games[] = [];
  copas: Games[] = [];
  ascensos: Games[] = [];
  isCopaActive: boolean = true;
  isLoading: boolean;

  constructor(private _services: ServicesService) {}

  ngOnInit() {
    this.getGames();
  }

  getGames() {
    this.games = [];
    this.copas = [];
    this.ascensos = [];
    this.isLoading = true;

    this._services.getGames().subscribe( response => {
      // console.log('res', response);
      setTimeout(() => {
        this.games = response.data.games;
        this.copas = this.games.filter(x => x.league.toUpperCase().trim() === "COPA MX".trim());
        this.ascensos = this.games.filter(x => x.league.toUpperCase().trim() === "ASCENSO MX".trim());
        this.isLoading = false;
      }, 1000);
    }, error => {
      console.log('err', error);
      this.isLoading = false;
    });
  }

  showLeague(league: boolean) {
    this.isCopaActive = league;
    this.getGames();
  }

}
