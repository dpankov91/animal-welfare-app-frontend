import { Injectable } from '@angular/core';
import {Socket} from 'ngx-socket-io';
import {Observable} from 'rxjs';
import {AdoptPetDto} from './adopt-pet.dto';
import {SocketAdopt} from '../../app.module';
import {Pet} from './adopt-pet.model';
import {PersonModel} from "./person.model";

@Injectable({
  providedIn: 'root'
})
export class AdoptPetService {

  constructor(private socket: SocketAdopt) { }

  getAllPets(): Observable<Pet[]>{
    return this.socket
      .fromEvent<Pet[]>('allPets');
  }

  getPets(): void{
    console.log('pets');
    this.socket.emit('allPets', null);
  }

  createPet(pet: Pet): void {
    this.socket.emit('add-pet', pet);
  }

  createPerson(person: PersonModel) {
    this.socket.emit('create-person', person);
  }
}
