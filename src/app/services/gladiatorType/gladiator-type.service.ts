import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import {map, Observable} from "rxjs";
import {GladiatorTypeModel} from "../../models/gladiatorType.model";

@Injectable({
  providedIn: 'root'
})
export class GladiatorTypeService {
  baseUrl: String = environment.API_URL
  constructor(private http: HttpClient) { }

  /*  Get all different types of gladiators from Animal. */
  public getAllGladiatorTypes(): Observable<GladiatorTypeModel[]> {
    return this.http.get(this.baseUrl + `gladiatorType/`).pipe(
      map((types: any) => {
        return types.gladiatorType;
      })
    );
  }

}
