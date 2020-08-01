import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { AppService } from './shared/services/app.service';
import { SidePanelService } from './shared/services/side-panel.service';
import { ModalService } from './shared/services/modal.service';

import { MaterialModule } from './shared/modules/material/material.module';
import { SidenavButtonListComponent } from './shared/components/sidenav-button-list/sidenav-button-list.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
  ],
  declarations: [ AppComponent, HeaderComponent, FooterComponent, SidenavButtonListComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AppService, SidePanelService, ModalService]
})
export class AppModule { }
