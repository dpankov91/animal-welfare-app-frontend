import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdoptPetRoutingModule } from './adopt-pet-routing.module';
import { AdoptPetComponent } from './adopt-pet.component';


@NgModule({
  declarations: [AdoptPetComponent],
  imports: [
    CommonModule,
    AdoptPetRoutingModule
  ]
})
export class AdoptPetModule { }
