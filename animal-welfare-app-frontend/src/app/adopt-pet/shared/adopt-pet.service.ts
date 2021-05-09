import { Injectable } from '@angular/core';
import {Socket} from 'ngx-socket-io';
import {Observable} from 'rxjs';
import {AdoptPetDto} from './adopt-pet.dto';
import {SocketAdopt} from '../../app.module';
import {AdoptPet} from './adopt-pet.model';

@Injectable({
  providedIn: 'root'
})
export class AdoptPetService {

  constructor(private socket: SocketAdopt) { }

  getAllPets(): Observable<AdoptPet[]>{
    return this.socket
      .fromEvent<AdoptPet[]>('allPets');
  }

  getPets(): void{
    console.log('pets');
    this.socket.emit('allPets', null);
  }
}
