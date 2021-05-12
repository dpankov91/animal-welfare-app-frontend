import { Component, OnInit } from '@angular/core';
import {Pet} from '../adopt-pet/shared/adopt-pet.model';
import {FormBuilder} from '@angular/forms';
import {AdoptPetService} from '../adopt-pet/shared/adopt-pet.service';

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

  constructor(private fb: FormBuilder, private petService: AdoptPetService) { }

  ngOnInit(): void {
  }

  createPet() {
    this.error = undefined;
    const pet: Pet = this.petForm.value;
    this.petService.createPet(pet);
  }
}
