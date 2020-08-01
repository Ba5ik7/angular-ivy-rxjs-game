import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidePanelService } from './shared/services/side-panel.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor(private _sidePanelService: SidePanelService) { }

  ngOnInit(): void {
    this._sidePanelService.sidePanelToggle$.subscribe(() => this.sidenav.toggle());
    this._sidePanelService.sidePanelOpen$.subscribe(() => this.sidenav.open());
    this._sidePanelService.sidePanelClose$.subscribe(() => this.sidenav.close());
  }
}
