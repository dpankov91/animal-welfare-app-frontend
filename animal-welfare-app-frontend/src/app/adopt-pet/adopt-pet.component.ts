import {Component, OnDestroy, OnInit} from '@angular/core';
import {AdoptPetService} from './shared/adopt-pet.service';
import {AdoptPetDto} from './shared/adopt-pet.dto';
import {Observable, Subject, Subscription} from 'rxjs';
import {Pet} from './shared/adopt-pet.model';
import {AdoptPetState} from './state/adopt-pet.state';
import {Select, Store} from '@ngxs/store';
import {ListenForPets} from './state/adopt-pet.action';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-adopt-pet',
  templateUrl: './adopt-pet.component.html',
  styleUrls: ['./adopt-pet.component.scss']
})
export class AdoptPetComponent implements OnInit, OnDestroy {

  @Select(AdoptPetState.pets) pets: Observable<Pet[]>;
  allPets: Pet[];
  pet: AdoptPetDto;
  unsubscribe$ = new Subject();
  petSelected: Pet | undefined;
  bookedPets: Pet[];
  notBookedPets: Pet[];

  constructor(private petService: AdoptPetService, private store: Store
    ,         private router: Router) {
    this.store.dispatch(
      new ListenForPets()
    );
  }

  ngOnInit(): void {
      this.pets.subscribe((data) => {
      console.table(data);
      this.allPets = data;
      this.bookedPets = this.allPets.filter(pet => pet.isBooked === true);
      this.notBookedPets = this.allPets.filter(pet => pet.isBooked === false);
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  loadSelectedPet(pet: Pet): void {
    this.petSelected = pet;
  }

  goAddPerson(petSelected: Pet) {
    this.router.navigate(['adopt-form/', petSelected.id]);
  }
}
