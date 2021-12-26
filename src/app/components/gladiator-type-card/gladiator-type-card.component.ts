import { Component,Input, OnInit } from '@angular/core';
import { getIconGladiatorType } from '../../utils/utils';

@Component({
  selector: 'app-gladiator-type-card',
  templateUrl: './gladiator-type-card.component.html',
  styleUrls: ['./gladiator-type-card.component.css']
})
export class GladiatorTypeCardComponent implements OnInit {

  private _name_gladiatorType = '';
  @Input('name_gladiatorType')
  set name_gladiatorType(name: string) {
    this._name_gladiatorType = name;
  }
  get name_gladiatorType() {
    return this._name_gladiatorType;
  }

  constructor() { }

  ngOnInit(): void {
  }

  getIcon(name: string){
    return getIconGladiatorType(name);
  }

}
