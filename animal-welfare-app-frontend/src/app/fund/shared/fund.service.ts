import { Injectable } from '@angular/core';
import {Socket} from 'ngx-socket-io';
import {Observable} from 'rxjs';
import {SocketFunds} from '../../app.module';
import {FundDto} from './Dto/fund.dto';
import {UpdateMoneyDto} from './update-money.dto';
import {FundModel} from './Model/FundModel';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FundService {

  constructor(private socket: SocketFunds) { }

  listenForAllFunds(): Observable<FundModel[]> {
    return this.socket.fromEvent<FundDto[]>('allFunds')
      .pipe(
        map(fundDtos => {
          return fundDtos.map(dto => {
            const model: FundModel = {
              id: dto.id,
              charityName: dto.charityName,
              totalIncome: dto.totalIncome,
              description: dto.description,
            };
            return model;
          });
        })
      );
  }

  getAllFunds(): void {
    this.socket.emit('allFundsFromCharity');
  }
  /*listenForCharityName(): void{
    this.socket.emit('getCharityName');
  }
  getFundsByCharityName(): Observable<FundDto>{
    return this.socket.fromEvent<FundDto>('getCharityName');
  }*/


  updatePrice(dto: UpdateMoneyDto): void {
    console.log(dto.donationAmount + '+++' + dto.id);
    this.socket.emit('donationAmount', dto);
  }
}
