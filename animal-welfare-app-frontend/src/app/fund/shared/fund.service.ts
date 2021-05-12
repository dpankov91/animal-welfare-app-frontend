import { Injectable } from '@angular/core';
import {Socket} from 'ngx-socket-io';
import {Observable} from 'rxjs';
import {FundDto} from './fund-Dto';

@Injectable({
  providedIn: 'root'
})
export class FundService {

  constructor(private socket: Socket) { }

  getAllFunds(): Observable<FundDto[]> {
    return this.socket.fromEvent<FundDto[]>('allFunds');

  }
  getFundsByCharityName(): Observable<FundDto> {
    return this.socket.fromEvent<FundDto>('charityName');
  }
}
