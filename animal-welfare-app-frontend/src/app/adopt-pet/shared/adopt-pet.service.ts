import { Injectable } from '@angular/core';
import {Socket} from 'ngx-socket-io';
import {Observable} from 'rxjs';
import {AdoptPetDto} from './adopt-pet.dto';

@Injectable({
  providedIn: 'root'
})
export class AdoptPetService {

  constructor(private socket: Socket) { }

  getAllPets(): Observable<AdoptPetDto[]>{
    return this.socket
      .fromEvent<AdoptPetDto[]>('allPets');
  }
}
