import {Action, Selector, State, StateContext} from '@ngxs/store';
import {Injectable} from '@angular/core';
import {Pet} from '../shared/adopt-pet.model';
import {ListenForPets} from './adopt-pet.action';;
import {AdoptPetService} from '../shared/adopt-pet.service';

export interface AdoptPetStateModel {
  pets: Pet[];
  // pet: Pet;
}

@State<AdoptPetStateModel>({
  name: 'AdoptPet',
  defaults: {
    pets: [],
    // pet: {id: 4, name: 'd', description: 'Pezer'},
  }
})
@Injectable()
export class AdoptPetState{
  constructor(private petService: AdoptPetService) {
  }
  @Selector()
  static pets(state: AdoptPetStateModel): Pet[] {
    return state.pets;
  }

  @Action(ListenForPets)
  getPets(ctx: StateContext<AdoptPetStateModel>): void {
    this.petService.getAllPets().subscribe(data => {
      const state = ctx.getState();
      const newState: AdoptPetStateModel = {
        ...state,
        pets: data
      };
      ctx.setState(newState);
    });

  }

  // @Action(GetAllPets)
  // getAllPets(ctx: StateContext<AdoptPetStateModel>): void {
  //   // this.petService.getPets()
  //   //   .subscribe(data => {
  //   //   const state = ctx.getState();
  //   //   const newState: AdoptPetStateModel = {
  //   //     ...state,
  //   //     pets: data
  //   //   };
  //   //   ctx.setState(newState);
  //   // });
  // }
}
