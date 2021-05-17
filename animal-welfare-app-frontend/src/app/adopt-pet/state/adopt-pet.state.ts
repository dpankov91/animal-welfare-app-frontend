import {Action, Selector, State, StateContext} from '@ngxs/store';
import {Injectable} from '@angular/core';
import {Pet} from '../shared/adopt-pet.model';
import {CreatePet, ListenForPets} from './adopt-pet.action';
import {AdoptPetService} from '../shared/adopt-pet.service';
import {Observable} from 'rxjs';
import {take, tap} from 'rxjs/operators';



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
  createPet({getState, setState}: StateContext<AdoptPetStateModel>, {pet}: CreatePet): void {
    console.log(pet);
    this.petService.listenForCreatePet().pipe(
      take(1),
      tap(data => {
        const state = getState();
        setState({
          pets: [...state.pets, data]
        });
      })
    ).subscribe();
    this.petService.createPet(pet);
  }

}
