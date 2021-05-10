import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdoptPetRoutingModule } from './adopt-pet-routing.module';
import { AdoptPetComponent } from './adopt-pet.component';
import { AdoptFormComponent } from './adopt-form/adopt-form.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [AdoptPetComponent, AdoptFormComponent],
  imports: [
    CommonModule,
    AdoptPetRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdoptPetModule { }
