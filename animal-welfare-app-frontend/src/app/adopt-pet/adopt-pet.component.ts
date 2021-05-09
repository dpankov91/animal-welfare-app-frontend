import { Component, OnInit } from '@angular/core';
import {AdoptPetService} from './shared/adopt-pet.service';
import {AdoptPetDto} from './shared/adopt-pet.dto';
import {Observable, Subject, Subscription} from 'rxjs';
import {AdoptPet} from './shared/adopt-pet.model';
import {take, takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-adopt-pet',
  templateUrl: './adopt-pet.component.html',
  styleUrls: ['./adopt-pet.component.scss']
})
export class AdoptPetComponent implements OnInit {

  pet: AdoptPetDto;
  // allPets: AdoptPetDto[] = [];
  allPets: Observable<AdoptPet[]> | undefined;
  unsubscribe$ = new Subject();
  petSelected: AdoptPet | undefined;
  allPets$: Subscription;

  constructor(private petService: AdoptPetService) { }

  ngOnInit(): void {
    this.petService.getPets();
    this.allPets = this.petService.getAllPets();
      // .pipe(
      // take(1)
      // ).subscribe(pets => {
      //   this.allPets = pets;
      //   console.log('allPets in Frontend =', pets);
      // });
    console.log('Pets in Frontend:' + this.allPets);
  }

}
