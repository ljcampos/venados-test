import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _services: ServicesService) { }

  ngOnInit() {
    this._services.getGames().subscribe( response => {
      console.log('res', response);
    }, error => {
      console.log('err', error);
    });
  }

}
