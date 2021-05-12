import {Component, OnDestroy, OnInit} from '@angular/core';
import {AdoptPetService} from './shared/adopt-pet.service';
import {AdoptPetDto} from './shared/adopt-pet.dto';
import {Observable, Subject, Subscription} from 'rxjs';
import {Pet} from './shared/adopt-pet.model';
import {AdoptPetState} from './state/adopt-pet.state';
import {Select, Store} from '@ngxs/store';
import {ListenForPets} from './state/adopt-pet.action';
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
  // allPets: AdoptPetDto[] = [];

  unsubscribe$ = new Subject();
  petSelected: Pet | undefined;
  // allPets$: Subscription;

  constructor(private petService: AdoptPetService, private store: Store) {
    this.store.dispatch(
      new ListenForPets()
    );
  }

  ngOnInit(): void {
    console.log('Page loaded');


    this.pets.subscribe((data) => {
      console.table(data);
      this.allPets = data;
    });
    // this.allPets$ = this.store.dispatch(new ListenForPets());
    // this.petService.getPets();

    // this.store.dispatch(new GetAllPets());
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
