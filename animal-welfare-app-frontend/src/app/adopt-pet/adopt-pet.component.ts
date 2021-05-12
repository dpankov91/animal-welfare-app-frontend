import {Component, OnDestroy, OnInit} from '@angular/core';
import {AdoptPetService} from './shared/adopt-pet.service';
import {AdoptPetDto} from './shared/adopt-pet.dto';
import {Observable, Subject, Subscription} from 'rxjs';

import {Pet} from './shared/adopt-pet.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-adopt-pet',
  templateUrl: './adopt-pet.component.html',
  styleUrls: ['./adopt-pet.component.scss']
})
export class AdoptPetComponent implements OnInit, OnDestroy {

  pet: AdoptPetDto;
  // allPets: AdoptPetDto[] = [];
  allPets$: Observable<Pet[]> | undefined;
  unsubscribe$ = new Subject();
  petSelected: Pet | undefined;
  // allPets$: Subscription;

  constructor(private petService: AdoptPetService, private router: Router) { }

  ngOnInit(): void {

    console.log('Page loaded');
    this.allPets$ = this.petService.getAllPets();
    this.petService.getPets();
    console.log('Pets in Frontend:' + this.allPets$);

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

  goAddPerson(petSelected: Pet) {
    this.router.navigate(['adopt-form/', petSelected.id]);
  }
}
