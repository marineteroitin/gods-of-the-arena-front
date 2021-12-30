import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {map, Observable} from "rxjs";
import {AbstractControl, FormBuilder, Validators} from "@angular/forms";

import {PropositionModel} from "../../models/proposition.model";
import {GladiatorModel} from "../../models/gladiator.model";
import {WeaponModel} from "../../models/weapon.model";

import {GladiatorService} from "../../services/gladiator/gladiator.service";
import {WeaponService} from "../../services/weapon/weapon.service";
import {FightService} from "../../services/fight/fight.service";


@Component({
  selector: 'app-emperor-fight-creation',
  templateUrl: './emperor-fight-creation.component.html',
  styleUrls: ['./emperor-fight-creation.component.css']
})
export class EmperorFightCreationComponent implements OnInit {
  public success: boolean = false; // to show success notification

  public proposition: PropositionModel = <PropositionModel>{};
  public gladiatorsType1: GladiatorModel[] = [];
  public gladiatorsType2: GladiatorModel[] = [];
  public animals: GladiatorModel[] = [];
  public weaponType1: WeaponModel[] = [];
  public weaponType2: WeaponModel[] = [];

  /* Form */
  public isSubmitted: boolean = false;

  fightCreationForm = this.fb.group({
    gladiator1: ['', [Validators.required]],
    id_weapon1: [''],
    gladiator2: ['', [Validators.required]],
    id_weapon2: [''],
    idListAnimals: ['']
  })


  constructor(private router: Router,
              private gladiatorService: GladiatorService,
              private weaponServcice: WeaponService,
              private fightService: FightService,
              public fb: FormBuilder
  ) {
  }

  ngOnInit(): void {

    if (!window.history.state.data) { // If you access this page without having selected a proposal before, you are redirected to the page of proposals made to the emperor.
      this.router.navigate(['/emperor']);
    } else {

      this.proposition = window.history.state.data;

      /* get possible fighters */
      this.getGladiatorsByType(1, this.proposition.gladiatorType1);
      this.getGladiatorsByType(2, this.proposition.gladiatorType2);


      /* get usable weapons */
      this.getWeaponByGladiatorType(1, this.proposition.gladiatorType1);
      this.getWeaponByGladiatorType(2, this.proposition.gladiatorType2);

      /* if needed, get animals */
      if (this.proposition.animal) {
        this.getAllAnimals();
      }

    }

  }

  /* Get all gladiators according to a given type and store them in a given list. */
  getGladiatorsByType(numGladiatorsType: number, id_gladiatorType: number): void {
    this.gladiatorService.getAllGladiatorByType(id_gladiatorType).subscribe((gladiators) => {

      switch (numGladiatorsType) {
        case 1:
          this.gladiatorsType1 = gladiators;
          break;
        case 2:
        this.gladiatorsType2 = gladiators;
          break;
        default:
          console.log(`Error there is no variable gladiatorType${numGladiatorsType}.`);
      }

    })

  }

  /* Get all weapons that can be used by a given type of gladiator and store them in a given list. */
  getWeaponByGladiatorType(numGladiatorsType: number ,id_gladiatorType: number): void {
    this.weaponServcice.getWeaponByGladiatorType(id_gladiatorType).subscribe( (weapons) => {
      switch (numGladiatorsType) {
        case 1:
          this.weaponType1 = weapons;
          break;
        case 2:
          this.weaponType2 = weapons;
          break;
        default:
          console.log(`Error there is no variable weaponType${numGladiatorsType}.`);
      }
    })

  }

  /* Get all animals */
  getAllAnimals(): void {
    this.gladiatorService.getAllAnimals().subscribe((animals) => {
      this.animals = animals;
    })
  }

  /* Form */

  /* To know if there are missing data in the database */
  isErrorData(): boolean {
    return !this.gladiatorsType1 ||
        !this.gladiatorsType2 ||
      ( this.fightCreationForm.value.gladiator1.customization && !this.weaponType1.length ) ||
      ( this.fightCreationForm.value.gladiator2.customization && !this.weaponType2.length);
  }

//Getter to access formControls
  get gladiator1(): AbstractControl | null {
    return this.fightCreationForm.get('gladiator1');
  }

  get id_weapon1(): AbstractControl | null {
    return this.fightCreationForm.get('id_weapon1');
  }

  get gladiator2(): AbstractControl | null {
    return this.fightCreationForm.get('gladiator2');
  }

  get id_weapon2(): AbstractControl | null {
    return this.fightCreationForm.get('id_weapon2');
  }

  get idListAnimals(): AbstractControl | null {
    return this.fightCreationForm.get('idListAnimals');
  }

  submitForm(): boolean {
    this.isSubmitted = true;

    if (!this.fightCreationForm.valid) {
      return false;
    } else {

      let gladiator1 = {
        "id_gladiator": this.fightCreationForm.value.gladiator1.id_gladiator,
        "id_weapon": this.fightCreationForm.value.id_weapon1
      }

      let gladiator2 = {
        "id_gladiator": this.fightCreationForm.value.gladiator2.id_gladiator,
        "id_weapon": this.fightCreationForm.value.id_weapon2
      }


      /* add fight in database */
      this.fightService.addFight(this.proposition.id_proposition, gladiator1, gladiator2, this.fightCreationForm.value.idListAnimals).subscribe((res) => {
        console.log(res);
        this.success = true;
      })
      return true;
    }
  }


}
