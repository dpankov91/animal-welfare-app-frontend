import { Injectable } from '@angular/core';
import {Socket} from 'ngx-socket-io';
import {Observable} from 'rxjs';
import {SocketFunds} from '../../app.module';
import {FundDto} from './Dto/fund.dto';
import {UpdateMoneyDto} from './update-money.dto';

@Injectable({
  providedIn: 'root'
})
export class FundService {

  constructor(private socket: SocketFunds) { }

  listenForAllFunds(): void {
    this.socket.emit('allFundsFromCharity');
  }

  getAllFunds(): Observable<FundDto[]> {
    return this.socket.fromEvent<FundDto[]>('allFunds');

  }
  /*listenForCharityName(): void{
    this.socket.emit('getCharityName');
  }
  getFundsByCharityName(): Observable<FundDto>{
    return this.socket.fromEvent<FundDto>('getCharityName');
  }*/


  updatePrice(dto: UpdateMoneyDto): void {
    console.log(dto.donationAmount + "+++" + dto.id);
    this.socket.emit('donationAmount', dto);
  }
}
