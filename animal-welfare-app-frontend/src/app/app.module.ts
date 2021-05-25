import { BrowserModule } from '@angular/platform-browser';
import {Injectable, NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { FooterComponent } from './shared/footer/footer.component';
import {Socket} from 'ngx-socket-io';
import { AddPetComponent } from './add-pet/add-pet.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxsModule} from '@ngxs/store';
import {environment} from '../environments/environment';
import {AdoptPetState} from './adopt-pet/state/adopt-pet.state';
import {FundState} from './fund/state/fund.state';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';

@Injectable()
export class SocketAdopt extends Socket{
  constructor() {
    super({url: environment.adoptPetBackendApi, options: {} });
  }
}

@Injectable()
export class SocketFunds extends Socket{
  constructor() {
    super({url: environment.fundsBackendApi, options: {} });
  }
}
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomePageComponent,
    FooterComponent,
    AddPetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    NgxsModule.forRoot([AdoptPetState, FundState], {
      developmentMode: !environment.production
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [SocketFunds, SocketAdopt],
  bootstrap: [AppComponent]
})
export class AppModule { }
