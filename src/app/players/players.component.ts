import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Team, Player, Coache } from '../model/team';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  team: Team;
  _player: Player;
  _coache: Coache;
  isLoading: boolean;

  constructor(private _services: ServicesService,
              private _modalService: NgbModal) {
    this.team = new Team();
    this._player = new Player();
    this._coache = new Coache();
  }

  ngOnInit() {
    this.getPlayers();
  }

  getPlayers() {
    this.isLoading = true;

    this._services.getPlayers().subscribe( (response: any) => {
      setTimeout(() => {
        this.team.centers = response.data.team.centers;
        this.team.coaches = response.data.team.coaches;
        this.team.defenses = response.data.team.defenses;
        this.team.forwards = response.data.team.forwards;
        this.team.goalkeepers = response.data.team.goalkeepers;

        this.isLoading = false;
      }, 1000);
    }, error => {
      console.log('err', error);
      this.isLoading = false;
    });
  }

  getPlayer(player: number, type: number) {
    let playerData: any = null;

    if (type === 0) { // centers
      playerData = this.team.centers.find(x => x.number == player);
    }

    if (type === 1) { // coaches
      playerData = this.team.coaches[player];
    }

    if (type === 2) { // defenses
      playerData = this.team.defenses.find(x => x.number == player);
    }

    if (type === 3) { // fordwards
      playerData = this.team.forwards.find(x => x.number == player);
    }

    if (type === 4) { // goalkeepers
      playerData = this.team.goalkeepers.find(x => x.number == player);
    }

    return playerData;
  }

  openPlayerModal(playerModal: any, player: number, type: number) {
    this._player = null;// reset previous content
    this._player = this.getPlayer(player, type);
    this._modalService.open(playerModal, {ariaLabelledBy: 'modal-basic-title'});
  }

  openCoacheModal(coacheModal: any, player: number, type: number) {
    this._coache = null;// reset previous content
    this._coache = this.getPlayer(player, type);
    this._modalService.open(coacheModal, {ariaLabelledBy: 'modal-basic-title'});
  }

}
