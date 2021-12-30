import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {FightModel} from '../../models/fight.model';
import {FightDetailsModel} from "../../models/fightDetails.model";

@Injectable({
  providedIn: 'root'
})
export class FightService {
  baseUrl: string = environment.API_URL;

  constructor(private http: HttpClient) { }

  /* Add fight */
  public addFight(id_proposition: number, gladiator1: any, gladiator2: any, animals : number[]): Observable<FightModel>{
    return this.http.post(this.baseUrl+`fight/`, ({id_proposition, gladiator1, gladiator2, animals})).pipe(
      map((res:any) => {
        return res;
      })
    )
  }

  /* Get today's fight */
public getTodaysFights(): Observable<FightDetailsModel[]> {
  return this.http.get(this.baseUrl + `fight/today`).pipe(
    map( (res: any) => {
      return res.fights;
    })
  )
}
}
