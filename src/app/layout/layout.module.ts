import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { AgmCoreModule } from '@agm/core';
import { BrowserModule } from '@angular/platform-browser';

import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
//import { CarouselModule } from "angular-bootstrap-md";
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
//import { MDBRootModule } from "angular-bootstrap-md";
//import { MDBBootstrapModule } from "angular-bootstrap-md";
import { FormsModule } from '@angular/forms';
//import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { CardsModule } from "angular-bootstrap-md";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

import { FooterzitoComponent } from './footerzito/footerzito.component';
import { HomezitoComponent } from './homezito/homezito.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemBabaComponent } from './listagem-baba/listagem-baba.component';
import { MapazitoComponent } from './mapazito/mapazito.component';
import { CarouseldasbbstrsComponent } from './carouseldasbbstrs/carouseldasbbstrs.component';
import { CarouselzitoComponent } from './carouselzito/carouselzito.component';
import { PartezitaComponent } from './partezita/partezita.component';
import { MatTabsModule } from "@angular/material/tabs";
import { MatCheckboxModule } from "@angular/material/checkbox";

import {ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    MenuComponent,
    MapazitoComponent,
    CarouselzitoComponent,
    CarouseldasbbstrsComponent,
    FooterzitoComponent,
    HomezitoComponent,
    CadastroComponent,
    ListagemBabaComponent,
    PartezitaComponent,
  ],
  exports: [MenuComponent, MapazitoComponent, CarouselzitoComponent, CarouseldasbbstrsComponent, FooterzitoComponent, HomezitoComponent, CadastroComponent, ListagemBabaComponent,PartezitaComponent],
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
      apiKey: 'AIzaSyBWxOxl9SDbOzQm-Ih8Ko14F52Qkz8WEx8',
    }),
    //MdbCollapseModule,
    CardsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatCheckboxModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    RouterModule
  ],
  providers: [],
})
export class LayoutModule {}
