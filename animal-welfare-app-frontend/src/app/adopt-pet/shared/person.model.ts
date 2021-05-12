import {Pet} from "./adopt-pet.model";

export interface PersonModel {
  id?: number;
  firstName: string;
  lastName: string,
  email: string,
  phoneNumber: number;
  pet?: Pet;
}
