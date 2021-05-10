import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AdoptPetService} from "../shared/adopt-pet.service";
import {Pet} from "../shared/adopt-pet.model";
import {PersonModel} from "../shared/person.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-adopt-form',
  templateUrl: './adopt-form.component.html',
  styleUrls: ['./adopt-form.component.scss']
})
export class AdoptFormComponent implements OnInit {

  id: number | undefined

  personForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    pNumber: new FormControl('')
  })

  constructor(private petService: AdoptPetService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'))
  }

  savePerson() {
       const person: PersonModel = {
        firstName: this.personForm.get('firstName').value,
        lastName: this.personForm.get('lastName').value,
        phoneNumber: this.personForm.get('pNumber').value,
        email: this.personForm.get('email').value,
        petId: this.id
      }
      this.petService.createPerson(person);
  }

  goBack() {

  }
}
