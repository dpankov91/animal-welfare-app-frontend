import { Component, OnInit } from '@angular/core';
import {FundService} from './shared/fund.service';
import {Observable} from 'rxjs';
import {FundDto} from './shared/fund-Dto';

@Component({
  selector: 'app-fund',
  templateUrl: './fund.component.html',
  styleUrls: ['./fund.component.scss']
})
export class FundComponent implements OnInit {
  allFunds$: Observable<FundDto[]> | undefined;
  fund$: Observable<FundDto> | undefined;
  constructor(private fundsService: FundService) { }

  ngOnInit(): void {
<<<<<<< Updated upstream
  this.allFunds$ = this.fundsService.getAllFunds();
  }

  getFundsByCharityName(): void {
    this.fund$ = this.fundsService.getFundsByCharityName();
  }
=======
    this.allFunds$ = this.fundsService.getAllFunds();
    this.fund$ = this.fundsService.getFundsByCharityName();
    this.fundsService.getCharityName();
    this.fundsService.getFundsFromCharity();
  }
>>>>>>> Stashed changes
}
