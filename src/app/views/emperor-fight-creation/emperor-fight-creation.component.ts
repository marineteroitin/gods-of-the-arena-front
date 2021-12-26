import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {PropositionModel} from "../../models/proposition.model";

@Component({
  selector: 'app-emperor-fight-creation',
  templateUrl: './emperor-fight-creation.component.html',
  styleUrls: ['./emperor-fight-creation.component.css']
})
export class EmperorFightCreationComponent implements OnInit {
  public proposition: PropositionModel = {
    id_proposition: -1,
    animal: false,
    gladiatorType1: -1,
    name_gladiatortype1: '',
    gladiatorType2: -1,
    name_gladiatortype2: '',
  };

  constructor( private router: Router) { }

  ngOnInit(): void {
    this.proposition = window.history.state.data;
    console.log(this.proposition);
  }

}
