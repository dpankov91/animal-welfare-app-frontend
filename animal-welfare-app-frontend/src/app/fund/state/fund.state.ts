
import {Selector, State} from '@ngxs/store';
import {FundDto} from '../shared/fund.dto';
import {Injectable} from '@angular/core';
import {FundService} from '../shared/fund.service';
import {Pet} from '../../adopt-pet/shared/adopt-pet.model';
import {AdoptPetStateModel} from '../../adopt-pet/state/adopt-pet.state';

export interface FundStateModel {
  funds: FundDto[];
}

@State<FundStateModel>({
  name: 'Funds',
  defaults: {
    funds: [],
  }
})
@Injectable()
export class Fundstate{

  constructor(private fundService: FundService) {
  }
  @Selector()
  static pets(state: FundStateModel): FundDto[] {
    return state.funds;
  }
  

}
