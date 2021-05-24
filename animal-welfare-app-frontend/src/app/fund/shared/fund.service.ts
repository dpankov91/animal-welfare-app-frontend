import { Injectable } from '@angular/core';
import {Socket} from 'ngx-socket-io';
import {Observable} from 'rxjs';
import {SocketFunds} from '../../app.module';
import {FundDto} from './fund.dto';
import {UpdateMoneyDto} from './update-money.dto';
import {Pet} from '../../adopt-pet/shared/adopt-pet.model';

@Injectable({
  providedIn: 'root'
})
export class FundService {

  constructor(private socket: SocketFunds) { }

  listenForAllFunds(): void {
    // Listening for the funds in the backend
    this.socket.emit('allFundsFromCharity');
  }

  getAllFunds(): Observable<FundDto[]> {
    // Receiving the information.
    return this.socket.fromEvent<FundDto[]>('allFunds');

  }

  updatePrice(dto: UpdateMoneyDto): void {
    console.log(dto.donationAmount + '+++' + dto.id);
    this.socket.emit('donationAmount', dto);
  }

}
