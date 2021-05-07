import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomePageComponent} from './welcome-page/welcome-page.component';

const routes: Routes = [{ path: 'funds', loadChildren: () => import('./fund/fund.module').then(m => m.FundModule) },
  { path: 'adopt-pet', loadChildren: () => import('./adopt-pet/adopt-pet.module').then(m => m.AdoptPetModule) },
  {path: '', component: WelcomePageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
