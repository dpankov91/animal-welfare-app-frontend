import { Component, OnInit } from '@angular/core';
import {Pet} from '../adopt-pet/shared/adopt-pet.model';
import {FormBuilder} from '@angular/forms';
import {AdoptPetService} from '../adopt-pet/shared/adopt-pet.service';
import {Store} from '@ngxs/store';
import {CreatePet} from '../adopt-pet/state/adopt-pet.action';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.scss']
})
export class AddPetComponent implements OnInit {
  petForm = this.fb.group({
    name: [''],
    description: [''],
    age: [''],
    type: [''],
    address: ['']
  });
  petCreate: Pet | undefined;
  error: string | undefined;

  constructor(private fb: FormBuilder, private petService: AdoptPetService, private store: Store) { }

  ngOnInit(): void {
  }

  createPet(): void {
    this.error = undefined;
    const pet: Pet = this.petForm.value;
    // this.petService.createPet(pet);
    this.store.dispatch(new CreatePet(pet));
  }
}
