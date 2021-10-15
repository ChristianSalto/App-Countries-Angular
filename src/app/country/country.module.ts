import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { CapitalComponent } from './pages/capital/capital.component';
import { PaisComponent } from './pages/pais/pais.component';
import { RegionComponent } from './pages/region/region.component';
import { InfoPaisComponent } from './pages/info-pais/info-pais.component';
import { PaisTablaComponent } from './components/pais-tabla/pais-tabla.component';
import { PaisInputComponent } from './components/pais-input/pais-input.component';

@NgModule({
  declarations: [
    CapitalComponent,
    PaisComponent,
    RegionComponent,
    InfoPaisComponent,
    PaisTablaComponent,
    PaisInputComponent,
  ],
  exports: [
    CapitalComponent,
    PaisComponent,
    RegionComponent,
    InfoPaisComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    FormsModule,
    RouterModule
  ],
})
export class CountryModule {}
