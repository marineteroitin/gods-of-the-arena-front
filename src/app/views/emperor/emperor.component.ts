import {Component, OnInit} from '@angular/core';
import {PropositionModel} from "../../models/proposition.model";
import {PropositionService} from "../../services/proposition/proposition.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-emperor',
  templateUrl: './emperor.component.html',
  styleUrls: ['./emperor.component.css']
})
export class EmperorComponent implements OnInit {
  public propositions: PropositionModel[] = [];

  constructor(private propositionService: PropositionService,
              private router: Router
  ) {
  }

  ngOnInit(): void {
    this.getAllProposition();
  }

  getAllProposition(): void {
    this.propositionService.getAllProposition().subscribe((propositionList) => {
      this.propositions = propositionList;
    })
  }

  /* delete the proposition according to a given id */
  onDeleteClicked(id_proposition: number): void {
    this.propositionService.deleteProposition(id_proposition).subscribe(() => {
      for (let i = 0; i < this.propositions.length; i++) {
        if (this.propositions[i].id_proposition === id_proposition) {
          this.propositions.splice(i, 1);
        }
      }
    })

  }

  /* redirect to the creation page of a fight */
  onAcceptClicked(proposition: PropositionModel): void{
    this.router.navigate(['/fight/creation'], {state: {data: proposition}})
  }

}
