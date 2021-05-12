import { Injectable } from '@angular/core';
import {Socket} from 'ngx-socket-io';
import {Observable} from 'rxjs';
import {FundDto} from './fund-Dto';

@Injectable({
  providedIn: 'root'
})
export class FundService {

  constructor(private socket: Socket) { }

<<<<<<< Updated upstream
=======
  getFundsFromCharity(): void {
    this.socket.emit('allFundsFromCharity');
  }

>>>>>>> Stashed changes
  getAllFunds(): Observable<FundDto[]> {
    return this.socket.fromEvent<FundDto[]>('allFunds');

  }
  getFundsByCharityName(): Observable<FundDto> {
    return this.socket.fromEvent<FundDto>('charityName');
  }
<<<<<<< Updated upstream
=======

  getCharityName(): void{
    this.socket.emit('getCharityName');
  }
>>>>>>> Stashed changes
}
