import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import {GladiatorTypeModel} from "../../models/gladiatorType.model";
import {GladiatorTypeService} from "../../services/gladiatorType/gladiator-type.service";
import {PropositionService} from "../../services/proposition/proposition.service";

@Component({
  selector: 'app-ludi',
  templateUrl: './ludi.component.html',
  styleUrls: ['./ludi.component.scss']
})

export class LudiComponent implements OnInit {
  public gladiatorTypes : GladiatorTypeModel[] = [];
  animal: boolean = false;

  form: FormGroup;
  notification: string = '';
  notificationColor: string = '';


  constructor(private gladiatorTypeService: GladiatorTypeService,
              private propositionService: PropositionService,
              private fb: FormBuilder
              ) {

    this.form = this.fb.group({
      selectedTypes: this.fb.array([])
    })
  }

  ngOnInit(): void {
    this.getAllGladiatorType();
  }

  getAllGladiatorType(){
    this.gladiatorTypeService.getAllGladiatorTypes().subscribe((types) => {
      this.gladiatorTypes = types;
    })
  }


  onCheckboxChange({e}: { e: any }): void {
    const selectedTypes: FormArray = this.form.get('selectedTypes') as FormArray;

    if (e.target.checked) {
      selectedTypes.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;


      selectedTypes.controls.forEach((item) => {
        if (item.value == e.target.value) {
          selectedTypes.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  oncheckedAnimal({e}: { e: any }): void {
    this.animal = e.target.checked;
  }

  submitForm(): void {

    if(this.form.value.selectedTypes.length !=2){ /* wrong number of partipants */
      this.notificationColor = "red";
      this.notification = 'Vous devez choisir 2 types!';

    } else { /* add propostion in database */
      this.propositionService.addProposition(this.animal, this.form.value.selectedTypes[0], this.form.value.selectedTypes[1]).subscribe((proposition) => {
        console.log(proposition);
        this.notificationColor = "#28B886";
        this.notification = 'Proposition envoyée à l\'Empereur.';
      })

    }
  }



}
