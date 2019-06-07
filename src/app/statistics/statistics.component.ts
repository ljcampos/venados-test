import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';
import { Statistic } from '../model/statistic.model';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  _statistics: Statistic[] = [];
  isLoading: boolean;

  constructor(private _service: ServicesService) { }

  ngOnInit() {
    this.getStatistics();
  }

  getStatistics() {
    this.isLoading = true;

    this._service.getStatistics()
    .subscribe((response: any) => {
      console.log('response:', response);
      setTimeout(() => {
        this._statistics = response.data.statistics;
        this.isLoading = false;
      }, 1000);
    }, error => {
      console.log('error:', error);
      this.isLoading = false;
    });
  }

}
