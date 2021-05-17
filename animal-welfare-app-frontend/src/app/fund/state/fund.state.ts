import {FundDto} from '../shared/fund.dto';
import {UpdateMoneyDto} from '../shared/update-money.dto';
import {Action, Selector, State, StateContext, Store} from '@ngxs/store';
import {Injectable} from '@angular/core';
import {FundService} from '../shared/fund.service';
import {GetFunds, UpdateAllFunds, UpdateDonation} from './fund.action';

export interface FundStateModel {
  funds: FundDto[];
  updateFunds: UpdateMoneyDto | undefined;
}

@State<FundStateModel>({
  name: 'Funds',
  defaults: {
    funds: [],
    updateFunds: undefined,
  }
})
@Injectable()
export class FundState {

  constructor(private fundService: FundService, private store: Store) {
    this.fundService.getAllFunds().subscribe((data) => {
       this.store.dispatch(new UpdateAllFunds(data));
    });
  }

  @Selector()
  static funds(state: FundStateModel): FundDto[] {
    return state.funds;
  }

  @Action(UpdateAllFunds)
  updateFundsALL({getState, setState}: StateContext<FundStateModel>, {fund}: UpdateAllFunds): void {
    const state = getState();
    setState( {
      ...state,
      funds: fund
    });
  }

  @Action(UpdateDonation)
  updateDonation({getState, setState}: StateContext<FundStateModel>, {fund}: UpdateDonation): void {
    console.log(fund);
    this.fundService.updatePrice(fund);
  }

  @Action(GetFunds)
  getFunds(ctx: StateContext<FundStateModel>): void {
    this.fundService.listenForAllFunds();
  }
}
