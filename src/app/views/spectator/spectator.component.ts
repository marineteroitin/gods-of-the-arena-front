import { Component, OnInit } from '@angular/core';
import {FightService} from "../../services/fight/fight.service";
import {FightDetailsModel} from "../../models/fightDetails.model";

@Component({
  selector: 'app-spectator',
  templateUrl: './spectator.component.html',
  styleUrls: ['./spectator.component.css']
})
export class SpectatorComponent implements OnInit {
  public fights : FightDetailsModel[] = [];

  constructor(private fightService: FightService) { }

  ngOnInit(): void {
    this.getTodaysFights();
  }

  getTodaysFights(): void {
    this.fightService.getTodaysFights().subscribe( (fights) => {
      this.fights = fights;
    })
  }

}
