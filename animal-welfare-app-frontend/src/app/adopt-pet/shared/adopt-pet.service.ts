import { Injectable } from '@angular/core';
import {Socket} from 'ngx-socket-io';
import {Observable} from 'rxjs';
import {AdoptPetDto} from './adopt-pet.dto';
import {SocketAdopt} from '../../app.module';
import {Pet} from './adopt-pet.model';
import {PersonModel} from './person.model';

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

   getStatePets(): Observable<any>{
    console.log('pets');
    this.socket.emit('allPets', null);
    return this.socket
      .fromEvent<Pet[]>('allPets');
  }

  createPet(pet: Pet): Observable<any> {
    console.log('pet===' + pet.name);
    return this.socket.emit('add-pet', pet);
  }

  createPerson(person: PersonModel, petId: number): void {
    console.log('emitting== ' + person.firstName + ' ' + 'Id ==' + petId);
    person.pet = {
      address: '', age: 0, description: '', name: '', type: '',
      id: petId
    };
    this.socket.emit('create-person', person);
  }
}
