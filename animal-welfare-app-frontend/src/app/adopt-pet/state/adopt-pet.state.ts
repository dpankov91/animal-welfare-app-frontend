import {Action, Selector, State, StateContext} from '@ngxs/store';
import {Injectable} from '@angular/core';
import {Pet} from '../shared/adopt-pet.model';
import {GetAllPets, ListenForPets} from './adopt-pet.action';
import {state} from '@angular/animations';
import {AdoptPetService} from '../shared/adopt-pet.service';

export interface AdoptPetStateModel {
  pets: Pet[];
  pet: Pet;
}

@State<AdoptPetStateModel>({
  name: 'adopt-pet',
  defaults: {
    pets: [],
    pet: {id: 4, name: 'd', description: 'Pezer'},
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
    this.petService.getAllPets().subscribe(pets => {
      const state = ctx.getState();
      const getPetsState: AdoptPetStateModel = {
        ...state,
        pets: [{id: 22, name: 'Slayer', description: 'dd'}]
      };
      ctx.setState(getPetsState);
    });
    // ctx.setState({
    //   ...state,
    //   pets: [{id: 22, name: 'Slayer', description: 'dd'}]
    // });

  }

  @Action(GetAllPets)
  getAllPets(ctx: StateContext<AdoptPetStateModel>): void {
        const states = ctx.getState();
        const pets = states.pet({
     if(pets){
       this.petService.getPets({
         id: pets.id,
         name: pets.name,
         description: pets.description
       });
     }
   });
        ctx.setState(pets);
  }
}
