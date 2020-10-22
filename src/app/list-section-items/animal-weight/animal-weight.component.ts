import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-animal-weight',
  templateUrl: './animal-weight.component.html',
  styleUrls: ['./animal-weight.component.scss']
})
export class AnimalWeightComponent {

  constructor(private apiSvc: ApiServiceService) { }
  @Input('animalsWeight') animalsWeight;
  @Input('isLength') isLength;
  @Output() itemWeight:EventEmitter<any> = new EventEmitter();
  length;
  elems;
  el;


  typeItem(item) {
    this.elems = this.animalsWeight.filter(el => el.type === item.type)
    this.apiSvc.getFilteredItems(item, this.animalsWeight, this.length);

    this.length = this.elems.length;
    const arr = [this.el, this.length]
    this.itemWeight.emit(arr);
  }
}
