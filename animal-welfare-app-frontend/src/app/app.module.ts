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

@Injectable()
export class SocketAdopt extends Socket{
  constructor() {
    super({url: 'http://localhost:3001', options: {} });
  }
}

@Injectable()
export class SocketFunds extends Socket{
  constructor() {
    super({url: 'http://localhost:3002', options: {} });
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
    NgxsModule.forRoot([AdoptPetState], {
      developmentMode: !environment.production
    })
  ],
  providers: [SocketFunds, SocketAdopt],
  bootstrap: [AppComponent]
})
export class AppModule { }
