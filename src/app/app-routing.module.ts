import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from "./layout/cadastro/cadastro.component";
import { ListagemBabaComponent } from "./layout/listagem-baba/listagem-baba.component";
import { CarouselzitoComponent } from "./layout/carouselzito/carouselzito.component";

const routes: Routes = [
  {
    path: 'cadastrarbabysitter',
    component: CadastroComponent
  },
  {
    path:'listarbabysitter',
    component: ListagemBabaComponent
  },
  {
    path: '',
    component:CarouselzitoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
