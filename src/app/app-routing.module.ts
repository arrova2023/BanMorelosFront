import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumenComponent } from './resumen/resumen.component'; // Importa tu componente de resumen

const routes: Routes = [
  { path: 'resumen', component: ResumenComponent }, // Agrega la ruta a tu componente de resumen
  // Otras rutas...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
