import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdoptPetComponent } from './adopt-pet.component';

const routes: Routes = [{ path: '', component: AdoptPetComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdoptPetRoutingModule { }
