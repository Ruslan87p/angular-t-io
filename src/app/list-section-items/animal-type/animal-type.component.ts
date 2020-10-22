import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-animal-type',
  templateUrl: './animal-type.component.html',
  styleUrls: ['./animal-type.component.scss']
})
export class AnimalTypeComponent {

  constructor(private apiSvc: ApiServiceService) { }
  @Input('animalsType') animalsType;
  @Input('isLength') isLength;
  @Output() itemType:EventEmitter<any> = new EventEmitter();
  length;
  elems;
  el;



  typeItem(item) {
    this.elems = this.animalsType.filter(el => el.type === item.type)
    this.apiSvc.getFilteredItems(item, this.animalsType, this.length);

    this.length = this.elems.length;
    const arr = [this.el, this.length]
    this.itemType.emit(arr);
  }

}
