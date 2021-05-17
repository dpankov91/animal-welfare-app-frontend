import { Component } from '@angular/core';
import {FundService} from './fund/shared/fund.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'animal-welfare-app-frontend';
  constructor() {

  }
}
