import {Component, OnDestroy, OnInit} from '@angular/core';
import {AdoptPetService} from './shared/adopt-pet.service';
import {AdoptPetDto} from './shared/adopt-pet.dto';
import {Observable, Subject, Subscription} from 'rxjs';
import {Pet} from './shared/adopt-pet.model';
import {take, takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-adopt-pet',
  templateUrl: './adopt-pet.component.html',
  styleUrls: ['./adopt-pet.component.scss']
})
export class AdoptPetComponent implements OnInit, OnDestroy {

  pet: AdoptPetDto;
  // allPets: AdoptPetDto[] = [];
  allPets: Pet[] | undefined;
  unsubscribe$ = new Subject();
  petSelected: Pet | undefined;
  allPets$: Subscription;

  constructor(private petService: AdoptPetService) { }

  ngOnInit(): void {
    //this.petService.getPets();
    // console.log('Pets in Frontend:' + this.allPets);
    this.petService.getAllPets()
      .pipe(
      takeUntil(this.unsubscribe$)
      ).subscribe(pets => {
        this.allPets = pets;
        console.log('allPets in Frontend =', pets);
      });
    console.log('Pets in Frontend:' + this.allPets);
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
