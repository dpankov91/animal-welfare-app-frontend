import {UpdateMoneyDto} from '../shared/update-money.dto';
import {FundDto} from '../shared/fund.dto';

export class UpdateDonation{
  static readonly type = '[Fund] Funds Update';
  constructor(public fund: UpdateMoneyDto) {
  }
}

export class GetFunds{
  static readonly type = '[Fund] GetFunds';
}

export class UpdateAllFunds{
  static readonly type = '[Fund] UpdateAllFunds';
  constructor(public fund: FundDto[]) {
  }
}
