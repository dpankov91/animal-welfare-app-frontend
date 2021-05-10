import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdoptPetComponent } from './adopt-pet.component';
import {AddPetComponent} from '../add-pet/add-pet.component';
import {AdoptFormComponent} from "./adopt-form/adopt-form.component";

const routes: Routes = [{ path: '', component: AdoptPetComponent },
  {path: 'add-pet', component: AddPetComponent},
  {path: 'adopt-form', component: AdoptFormComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdoptPetRoutingModule { }
