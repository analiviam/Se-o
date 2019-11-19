import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Menu } from './menu/menu';
import { MenssagemComponent } from './menssagem/menssagem';
import { Filtroaluno } from './filtroaluno/filtroaluno';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {path: 'menu', component : Menu},
  {path: 'menssagem', component : MenssagemComponent},

  {path: 'filtroaluno', component : Filtroaluno},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
