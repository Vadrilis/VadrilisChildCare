import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from "./layout/cadastro/cadastro.component";
import { ListagemBabaComponent } from "./layout/listagem-baba/listagem-baba.component";
import { CarouselzitoComponent } from "./layout/carouselzito/carouselzito.component";
import { MenuComponent} from "./layout/menu/menu.component";
import {PadrzitoComponent} from "./layout/padrzito/padrzito.component";
import {PerfilbabaComponent} from "./layout/perfilbaba/perfilbaba.component";
import {ListagemComentarioComponent} from "./layout/listagem-comentario/listagem-comentario.component";
import {ComentarioindividualpeditComponent} from "./layout/comentarioindividualpedit/comentarioindividualpedit.component";

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
    path:'perfilbaba',
    component: PerfilbabaComponent
  },
  {
    path:'listagembabasemtabela',
    component: ListagemBabaComponent
  },
  {
    path:'listagembabasemtabela/:id',
    component: PerfilbabaComponent
  },
  {
    path:'comentarioindividualpedit/:id',
    component: ComentarioindividualpeditComponent
  },
  {
    path:'listagemcomentariosemtabela',
    component: ListagemComentarioComponent
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
