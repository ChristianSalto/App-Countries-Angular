import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CapitalComponent } from './country/pages/capital/capital.component';
import { InfoPaisComponent } from './country/pages/info-pais/info-pais.component';
import { PaisComponent } from './country/pages/pais/pais.component';
import { RegionComponent } from './country/pages/region/region.component';

const routes: Routes = [
  {
    path: '',
    component: PaisComponent,
    pathMatch: 'full',
  },
  {
    path: 'region',
    component: RegionComponent,
  },
  {
    path: 'capital',
    component: CapitalComponent,
  },
  {
    path: 'infoPais/:id',
    component: InfoPaisComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
