import {FundDto} from '../shared/Dto/fund.dto';
import {FundModel} from '../shared/Model/FundModel';

export class GetAllFunds {
  static readonly type = '[Fund] Get All Funds';
}

export class GetFundsByCharityName{
  static readonly type = '[Fund] Get Funds By Charity Name';
}

export class ListenForAllFunds{
  static readonly type = '[Fund] Listen For All Funds';
}

export class UpdateAllFunds{
  static readonly type = '[Fund] Update All Funds';
  constructor(public funds: FundModel[]) {}
}

export class AddNewCharityToFunds{
  static readonly type = '[Fund] Add New Charity to Funds';
  constructor(public fund: FundModel) {
  }
}
