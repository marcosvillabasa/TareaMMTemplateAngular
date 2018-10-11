
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/pages/home/home.component';
import { AboutComponent } from './componentes/pages/about/about.component';
import { MostrarServicioComponent } from './componentes/pages/mostrar-servicio/mostrar-servicio.component';

const app_routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: MostrarServicioComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];




@NgModule({
  imports: [
    RouterModule.forRoot(app_routes, {useHash: true})
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }

// export const app_routing = RouterModule.forRoot(app_routes);
