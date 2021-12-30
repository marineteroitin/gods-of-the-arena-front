import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import {map, Observable} from "rxjs";
import {WeaponModel} from "../../models/weapon.model";

@Injectable({
  providedIn: 'root'
})
export class WeaponService {
  baseUrl: string = environment.API_URL;

  constructor(private http: HttpClient) { }

  /* Get all weapons that can be used by a given type of gladiator. */
  public getWeaponByGladiatorType(id_gladiatorType: number) : Observable<WeaponModel[]>{
    return this.http.get(this.baseUrl + `weapon/gladiatorType/${id_gladiatorType}`).pipe(
      map( (res:any) => {

        if(res){
          return res.weapons;
        } else {
          return res;
        }
      })
    )

  }
}
