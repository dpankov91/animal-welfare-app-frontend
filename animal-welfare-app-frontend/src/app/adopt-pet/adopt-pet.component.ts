import { Component, OnInit } from '@angular/core';
import {AdoptPetService} from "./shared/adopt-pet.service";
import {AdoptPetDto} from "./shared/adopt-pet.dto";
import {Subject, Subscription} from "rxjs";
import {AdoptPet} from "./shared/adopt-pet.model";
import {take, takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-adopt-pet',
  templateUrl: './adopt-pet.component.html',
  styleUrls: ['./adopt-pet.component.scss']
})
export class AdoptPetComponent implements OnInit {

  public pet: AdoptPetDto;
  allPets: AdoptPetDto[] = [];
  unsubscribe$ = new Subject();
  petSelected: AdoptPet | undefined;
  allPets$: Subscription;

  constructor(private petservice: AdoptPetService) { }

  ngOnInit(): void {
    this.allPets$ = this.petservice.getAllPets()
      .pipe(
      take(1)
      ).subscribe(pets => {
        this.allPets = pets;
        console.log('allPets in Frontend =', pets);
      })
  }

}
