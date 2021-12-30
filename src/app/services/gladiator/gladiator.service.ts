import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import {map, Observable} from "rxjs";
import {GladiatorModel} from "../../models/gladiator.model";

@Injectable({
  providedIn: 'root'
})
export class GladiatorService {
  baseUrl: string = environment.API_URL;

  constructor(private http: HttpClient) { }

  /* Get all gladiators according to a given type */
  public getAllGladiatorByType(id_gladiatorType: number) : Observable<GladiatorModel[]>{
    return this.http.get(this.baseUrl + `gladiator/gladiatorType/${id_gladiatorType}`).pipe(
      map((res: any) => {

        if(res) {
          return res.gladiators;
        } else {
          return res;
        }
      })
    )
  }

  /* Get all animals */
  public getAllAnimals(): Observable<GladiatorModel[]>{
    return this.http.get(this.baseUrl + `gladiator/animals`).pipe(
      map((res: any) => {
        if(res) {
          return res.animals;
        } else {
          return res;
        }
      })
    )
  }
}
