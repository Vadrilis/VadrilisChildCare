import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from "./layout/cadastro/cadastro.component";
import { ListagemBabaComponent } from "./layout/listagem-baba/listagem-baba.component";
import { CarouselzitoComponent } from "./layout/carouselzito/carouselzito.component";
import { MenuComponent} from "./layout/menu/menu.component";
import {PadrzitoComponent} from "./layout/padrzito/padrzito.component";

const routes: Routes = [
  {
    path: 'cadastrarbabysitter',
    component: CadastroComponent
  },
  {
    path:'listarbabysitter',
    component: CadastroComponent
  },
  {
    path: '',
    component:PadrzitoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
