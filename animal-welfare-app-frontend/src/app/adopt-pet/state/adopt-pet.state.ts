import {Action, Selector, State, StateContext} from '@ngxs/store';
import {Injectable} from '@angular/core';
import {Pet} from '../shared/adopt-pet.model';
import {CreatePet, ListenForPets} from './adopt-pet.action';
import {AdoptPetService} from '../shared/adopt-pet.service';



export interface AdoptPetStateModel {
  pets: Pet[];

}

@State<AdoptPetStateModel>({
  name: 'AdoptPet',
  defaults: {
    pets: [],

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
    this.petService.getStatePets().subscribe(data => {
      const state = ctx.getState();
      const newState: AdoptPetStateModel = {
        ...state,
        pets: data
      };
      ctx.setState(newState);
    });

  }

  @Action(CreatePet)
  createPet({getState, setState}: StateContext<AdoptPetStateModel>, {pet}: CreatePet) {
    console.log(pet);
    return this.petService.createPet(pet).subscribe(data => {
      const state = getState();
      setState({
        pets: [...state.pets, data]
      });
    });

    // then((result) => {
    //   const state = getState();
    //   patch({
    //     pets: [...state.pets, result]
    //   });
    // });

    // return this.petService.createPet(pet).pipe(tap((result) => {
    //   const state = getState();
    //   patchState({
    //     pets: [...state.pets, result]
    //   });
    // }));


    // return this.petService.createPet(pet).pipe(tap((data) => {
    //   const state = getState();
    //   patchState({
    //     pets: [...state.pets, data]
    //   });
    // }));


    //   .subscribe(data => {
    //   const state = ctx.getState();
    //   const newState: AdoptPetStateModel = {
    //     ... state,
    //     pets: data
    //   };
    //   ctx.setState(newState);
    // });
  }

}
