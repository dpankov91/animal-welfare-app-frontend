import {Component, OnDestroy, OnInit} from '@angular/core';
import {AdoptPetService} from './shared/adopt-pet.service';
import {AdoptPetDto} from './shared/adopt-pet.dto';
import {Observable, Subject, Subscription} from 'rxjs';

import {Pet} from './shared/adopt-pet.model';
import {Select, Store} from '@ngxs/store';
import {AdoptPetState} from './state/adopt-pet.state';
import {GetAllPets, ListenForPets} from './state/adopt-pet.action';

@Component({
  selector: 'app-adopt-pet',
  templateUrl: './adopt-pet.component.html',
  styleUrls: ['./adopt-pet.component.scss']
})
export class AdoptPetComponent implements OnInit, OnDestroy {
  @Select(AdoptPetState.pets) allPets$: Observable<Pet[]> | undefined;
  pet: AdoptPetDto;
  // allPets: AdoptPetDto[] = [];

  unsubscribe$ = new Subject();
  petSelected: Pet | undefined;
  // allPets$: Subscription;

  constructor(private petService: AdoptPetService, private store: Store) { }

  ngOnInit(): void {
    console.log('Page loaded');
    // this.allPets$ = this.petService.getAllPets();
    // this.petService.getPets();

    this.store.dispatch(new ListenForPets());
    this.store.dispatch(new GetAllPets());
    console.log('Pets in Frontend:' + this.allPets$);
      // .pipe(
      // takeUntil(this.unsubscribe$)
      // ).subscribe(pets => {
      //   this.allPets$ = pets;
      //   console.log('allPets in Frontend =', pets);
      // });
    //
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  // refresh(): any {
  //   this.allPets$ = this.petService.getAllPets();
  // }
  loadSelectedPet(pet: Pet): void {
    this.petSelected = pet;
  }
}
