import {Pet} from '../shared/adopt-pet.model';


export class ListenForPets{
  static readonly type = '[Pet] Listen for Pets';
}
export class CreatePet{
  static readonly type = '[Pet] Created a Pet';

  constructor(public pet: Pet) { }
}
