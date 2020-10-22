import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-animal-length',
  templateUrl: './animal-length.component.html',
  styleUrls: ['./animal-length.component.scss']
})
export class AnimalLengthComponent {

  constructor(private apiSvc: ApiServiceService) {}
  @Input('animalsLength') animalsLength;
  @Input('isLength') isLength;
  @Output() itemLength:EventEmitter<any> = new EventEmitter();
  length;
  elems;
  el;


  typeItem(item) {
    this.elems = this.animalsLength.filter(el => el.type === item.type)
    this.apiSvc.getFilteredItems(item, this.animalsLength, this.length);

    this.length = this.elems.length;
    const arr = [this.el, this.length]
    this.itemLength.emit(arr);
  }

}
