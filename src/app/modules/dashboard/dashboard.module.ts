import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard.component";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { StatsComponent } from './components/stats/stats.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { ProgressionComponent } from './components/progression/progression.component';
import { MotdComponent } from './components/motd/motd.component';
import { WeatherComponent } from './components/weather/weather.component';
import { StockIndicesComponent } from './components/stock-indices/stock-indices.component';
import { NewsComponent } from './components/news/news.component';
import { WidgetService } from './services/widget.service';

@NgModule({
  imports: [CommonModule, DashboardRoutingModule],
  declarations: [DashboardComponent, StatsComponent, LeaderboardComponent, ProgressionComponent, MotdComponent, WeatherComponent, StockIndicesComponent, NewsComponent],
  providers: [WidgetService]
})
export class DashboardModule {}
