import { BrowserModule } from '@angular/platform-browser';
import {Injectable, NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { FooterComponent } from './shared/footer/footer.component';
import {Socket} from 'ngx-socket-io';

@Injectable()
export class SocketAdopt extends Socket{
  constructor() {
    super({url: 'http://localhost:3001', options: {} });
  }
}

@Injectable()
export class SocketFunds extends Socket{
  constructor() {
    super({url: 'http://localhost:3300', options: {} });
  }
}
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomePageComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [SocketFunds, SocketAdopt],
  bootstrap: [AppComponent]
})
export class AppModule { }
