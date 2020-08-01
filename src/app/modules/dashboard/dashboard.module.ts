import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard.component";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { StatsComponent } from './components/stats/stats.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { ProgressionComponent } from './components/progression/progression.component';

@NgModule({
  imports: [CommonModule, DashboardRoutingModule],
  declarations: [DashboardComponent, StatsComponent, LeaderboardComponent, ProgressionComponent]
})
export class DashboardModule {}
