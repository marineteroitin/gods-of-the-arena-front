import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import {map, Observable} from "rxjs";
import {PropositionModel} from "../../models/proposition.model";

@Injectable({
  providedIn: 'root'
})
export class PropositionService {
  baseUrl: string = environment.API_URL;

  constructor(private http: HttpClient) { }

  /* Add a propositon */
  public addProposition(animal: boolean, gladiatorType1: number, gladiatorType2: number):Observable<PropositionModel>{
      return this.http.post(this.baseUrl +`proposition/`, ({animal, gladiatorType1,gladiatorType2}) ).pipe(
        map((res: any) => {
          return res.proposition;
        })
      )
  }
}
