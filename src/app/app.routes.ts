import { Routes } from '@angular/router';
import { ListadoComponent } from './Listado/listado.component';
import { FormularioComponent } from './Formulario/formulario.component';
import { PageNotFoundComponent } from './404/404.component';

export const routes: Routes = [
  { path: 'Listado', component: ListadoComponent},
  { path: 'Formulario', component: FormularioComponent},
  {path: '**', component: PageNotFoundComponent}
];
