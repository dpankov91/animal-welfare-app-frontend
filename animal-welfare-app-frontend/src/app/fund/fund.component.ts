import { Component, OnInit } from '@angular/core';
import {FundService} from './shared/fund.service';
import {Observable} from 'rxjs';
import {FundDto} from './shared/fund.dto';
import {FormControl} from '@angular/forms';
import {UpdateMoneyDto} from './shared/update-money.dto';

@Component({
  selector: 'app-fund',
  templateUrl: './fund.component.html',
  styleUrls: ['./fund.component.scss']
})
export class FundComponent implements OnInit {
  allFunds$: Observable<FundDto[]> | undefined;
  fund: FundDto | undefined;
  donationAmount = new FormControl();

  constructor(private fundService: FundService) { }

  ngOnInit(): void {
    this.allFunds$ = this.fundService.getAllFunds();
    this.fundService.listenForAllFunds();
    // this.fund$ = this.fundService.getFundsByCharityName();
    // this.fundService.listenForCharityName();
    console.log(this.allFunds$);

  }

  getSelectedFunds(eachFund: FundDto): void{
    this.fund = eachFund;
  }

  updateAmount(): void {
  if (this.fund.id && !Number.isNaN(this.donationAmount.value)){
    const dto: UpdateMoneyDto = {id: this.fund.id, donationAmount: this.donationAmount.value};
    this.fundService.updatePrice(dto);
  }
  }
}
