import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-animal-color',
  templateUrl: './animal-color.component.html',
  styleUrls: ['./animal-color.component.scss']
})
export class AnimalColorComponent {

  constructor(private apiSvc: ApiServiceService) {}

  @Input('animalsColor') animalsColor;
  @Output() itemColor:EventEmitter<any> = new EventEmitter();
  @Input('isLength') isLength;
  length;
  elems;
  el;


  typeItem(item) {
    this.elems = this.animalsColor.filter(el => el.type === item.type)
    this.apiSvc.getFilteredItems(item, this.animalsColor, this.length);

    this.length = this.elems.length;
    const arr = [this.el, this.length]
    this.itemColor.emit(arr);
  }


}
