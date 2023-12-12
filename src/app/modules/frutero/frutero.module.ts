import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrutaComponent } from '../../components/fruta/fruta.component';
import { ManzanaComponent } from '../../components/manzana/manzana.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FrutaComponent,
    ManzanaComponent
  ]
})
export class FruteroModule { }
