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
    this.socket.emit('allPets', null);
  }

   getStatePets(): Observable<any>{
    this.socket.emit('allPets', null); // Send message to backend through specific socket
    return this.socket
      .fromEvent<Pet[]>('allPets'); // Returns an Observable from an event name through same socket.
  }

  createPet(pet: Pet): void {
    this.socket.emit('add-pet', pet);
  }

  listenForCreatePet(): Observable<Pet> {
    return this.socket.fromEvent('pet-created-success');
  }

  getAllPersons(): Observable<PersonModel[]>{
    return this.socket
      .fromEvent<PersonModel[]>('allPersons');
  }

  getPersons(): void{
    this.socket.emit('allPersons', null);
  }

  createPerson(person: PersonModel, petId: number): void {
    person.pet = {
      address: '', age: '', description: '', name: '', type: '', isBooked: null,
      id: petId
    };
    this.socket.emit('create-person', person);
  }
}
