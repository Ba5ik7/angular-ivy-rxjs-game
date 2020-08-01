import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { AppService } from './shared/services/app.service';
import { SidePanelService } from './shared/services/side-panel.service';
import { ModalService } from './shared/services/modal.service';

import { MaterialModule } from './shared/modules/material/material.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MaterialModule ],
  declarations: [ AppComponent, HeaderComponent, FooterComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AppService, SidePanelService, ModalService]
})
export class AppModule { }
