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
  this.allFunds$ = this.fundsService.getAllFunds();
  }

  getFundsByCharityName(): void {
    this.fund$ = this.fundsService.getFundsByCharityName();
  }
}
