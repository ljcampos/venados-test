import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { PlayersComponent } from './players/players.component';
import { StatisticsComponent } from './statistics/statistics.component';

const routes: Routes = [
  { path: 'games', component: HomeComponent },
  { path: 'players', component: PlayersComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: '', redirectTo: '/games', pathMatch: 'full' },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
