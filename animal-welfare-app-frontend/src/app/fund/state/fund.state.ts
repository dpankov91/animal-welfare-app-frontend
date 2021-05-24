
import { Injectable } from '@angular/core';
import {Action, Selector, State, StateContext} from '@ngxs/store';
import {FundDto} from '../shared/Dto/fund.dto';
import {GetAllFunds, GetFundsByCharityName} from './fund.action';
import {FundModel} from '../shared/Model/FundModel';

export interface FundStateModel {
  funds: FundModel[];
  fund: FundModel;
  addFunds: FundDto; // this is coz dto has all the values compared to model for creating.
}
@State<FundStateModel>({
  name: 'Fund',
  defaults: {
    funds: [] ,     // thi array has all the fundmodel values from the state.
    fund: {charityName: ''}, // need to understand what undefined is here, or needs something else.
    addFunds: FundDto;
  }
})
@Injectable()
export class FundState {
  @Selector()
  static fund(state: FundStateModel): FundModel[] {
    return state.funds; //  are we returning here funds from (line 16)
  }
  @Selector() // single fund relates to fund from line 17. as we are trying to get each fund by charity name.
  static singlefund(state: FundStateModel): FundModel{
    return state.fund;
  }
  @Selector()
  static addFunds(state: FundStateModel): FundDto {
    return state.addFunds;
  }
  @Action(GetAllFunds)
  getTotalFunds(ctx: StateContext<FundStateModel>): void {
    const state = ctx.getState(); // this is read only. cant change state directly here.
    ctx.setState({
      ...state,
     funds : []   // here we are setting new values to the fundmodel recived from state. In the lecture lars
      // done it differently. why
    });
  }
  @Action(GetFundsByCharityName)
  getFundsByCharityName(ctx: StateContext<FundStateModel>): void {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      fund : FundState.singlefund() // need to understand this part
    });
  }

  @Action(AddNewCharityToFunds)
  addNewCharityToFunds(ctx: StateContext<FundStateModel>): void {
  const state = ctx.getState();
  ctx.setState({
    ...state,
    addFunds: FundState.addFunds() // need to understand this part.
  });
  }
}
