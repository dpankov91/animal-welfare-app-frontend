import { Component, OnInit } from '@angular/core';
import {FundService} from './shared/fund.service';
import {Observable} from 'rxjs';
import {FundDto} from './shared/fund.dto';

@Component({
  selector: 'app-fund',
  templateUrl: './fund.component.html',
  styleUrls: ['./fund.component.scss']
})
export class FundComponent implements OnInit {
  allFunds$: Observable<FundDto[]> | undefined;

  constructor(private fundService: FundService) { }

  ngOnInit(): void {
    this.allFunds$ = this.fundService.getAllFunds();
    this.fundService.listenForAllFunds();
    console.log(this.allFunds$);

  }

}
