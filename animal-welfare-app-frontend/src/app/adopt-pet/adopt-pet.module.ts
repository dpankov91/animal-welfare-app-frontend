import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdoptPetRoutingModule } from './adopt-pet-routing.module';
import { AdoptPetComponent } from './adopt-pet.component';
import { AdoptFormComponent } from './adopt-form/adopt-form.component';


@NgModule({
  declarations: [AdoptPetComponent, AdoptFormComponent],
  imports: [
    CommonModule,
    AdoptPetRoutingModule
  ]
})
export class AdoptPetModule { }
