import {Pet} from '../shared/adopt-pet.model';

export class ListenForPets{
  static readonly type = '[Pet] Listen for Pets';
}

export class GetAllPets{
  constructor(public pets: Pet[]) {}

  static readonly type = '[Pet] Get All Pets';
}
