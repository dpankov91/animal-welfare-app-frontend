import { Component, OnInit } from '@angular/core';
import {FundService} from './shared/fund.service';
import {Observable} from 'rxjs';
import {FundDto} from './shared/fund.dto';
import {FormControl} from '@angular/forms';
import {UpdateMoneyDto} from './shared/update-money.dto';
import {Select, Store} from '@ngxs/store';
import {GetFunds, UpdateDonation} from './state/fund.action';
import {FundState} from './state/fund.state';

@Component({
  selector: 'app-fund',
  templateUrl: './fund.component.html',
  styleUrls: ['./fund.component.scss']
})
export class FundComponent implements OnInit {
  fund: FundDto | undefined;
  donationAmount = new FormControl();

  @Select(FundState.funds) allFunds: Observable<FundDto[]>;
  funds: FundDto[];
  constructor(private fundService: FundService, private store: Store) {
    this.store.dispatch(
      new GetFunds()
    );
  }

  ngOnInit(): void {
    this.allFunds.subscribe((data) => {
      console.table(data);
      if (this.fund){
        this.fund = data.find(item => item.id === this.fund.id);
      }
      this.funds = data;
    });
  }

  getSelectedFunds(eachFund: FundDto): void{
    this.fund = eachFund;
  }

  updateAmount(): void {
    const numb = Number(this.donationAmount.value);
    if (this.fund.hasOwnProperty('id') && !isNaN(numb)){
    const dto: UpdateMoneyDto = {id: this.fund.id, donationAmount: this.fund.totalIncome + this.donationAmount.value};
    this.store.dispatch(new UpdateDonation(dto));
    }
    this.donationAmount.reset();
  }
}
