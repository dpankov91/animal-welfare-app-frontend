import {Component, OnDestroy, OnInit} from '@angular/core';
import {AdoptPetService} from './shared/adopt-pet.service';
import {AdoptPetDto} from './shared/adopt-pet.dto';
import {Observable, Subject, Subscription} from 'rxjs';
import {Pet} from './shared/adopt-pet.model';
import {AdoptPetState} from './state/adopt-pet.state';
import {Select, Store} from '@ngxs/store';
import {ListenForPets} from './state/adopt-pet.action';
import {ActivatedRoute, Router} from "@angular/router";
import {PersonModel} from "./shared/person.model";
// import {Select, Store} from '@ngxs/store';
// import {AdoptPetState} from './state/adopt-pet.state';
// import { ListenForPets} from './state/adopt-pet.action';

@Component({
  selector: 'app-adopt-pet',
  templateUrl: './adopt-pet.component.html',
  styleUrls: ['./adopt-pet.component.scss']
})
export class AdoptPetComponent implements OnInit, OnDestroy {

  @Select(AdoptPetState.pets) pets: Observable<Pet[]>;
  allPets: Pet[];
  allPets$: Observable<Pet[]> | undefined;
  pet: AdoptPetDto;
  unsubscribe$ = new Subject();
  petSelected: Pet | undefined;
  allPersons$: Observable<PersonModel[]> | undefined;
  allPersons: PersonModel[];
  bookedPets: Pet[];
  petIds: number[] = [];
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
    });
      this.petService.getPersons();
      this.petService.getAllPersons().subscribe( data => this.allPersons = data);
  }

  getAllPetIdFromPersons(): number[] {
    for (let person of this.allPersons) {
      console.log("inside loop")
      this.petIds.push(person.pet?.id)
    }
    console.log("after loop" + this.petIds[2])
    return this.petIds;
  }

  getBookedPets(): Pet[] {
    const ids = this.getAllPetIdFromPersons();
    for (let id of ids) {
      this.bookedPets.push(this.allPets.find( pet => pet.id == id))
    }
    return this.bookedPets;
  }

  getNotBookedPets(): Pet[] {
    this.notBookedPets = this.allPets.filter( b => !this.getBookedPets().includes(b))
    return  this.notBookedPets;
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
