import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { CadastrobabaComponent } from './cadastrobaba/cadastrobaba.component';
import { MatCardModule } from '@angular/material/card';
import { MapazitoComponent } from './mapazito/mapazito.component';

import { AgmCoreModule } from '@agm/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselzitoComponent } from './carouselzito/carouselzito.component';

import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
//import {CarouselModule} from "angular-bootstrap-md";
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
//import {MDBRootModule} from "angular-bootstrap-md";
//import {MDBBootstrapModule} from "angular-bootstrap-md";

import { FormsModule } from '@angular/forms';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';

@NgModule({
  declarations: [
    MenuComponent,
    CadastrobabaComponent,
    MapazitoComponent,
    CarouselzitoComponent,
  ],
  exports: [MenuComponent, MapazitoComponent, CarouselzitoComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    BrowserModule,
    MdbCheckboxModule,
    //CarouselModule,
    MdbCarouselModule,
    //MDBRootModule,
    //MDBBootstrapModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: '',
    }),
    MdbCollapseModule,
  ],
  providers: [],
})
export class LayoutModule {}
