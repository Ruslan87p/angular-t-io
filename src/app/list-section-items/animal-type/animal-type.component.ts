import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-animal-type',
  templateUrl: './animal-type.component.html',
  styleUrls: ['./animal-type.component.scss']
})
export class AnimalTypeComponent {

  constructor() { }
  @Input('animalsType') animalsType;
  @Input('isLength') isLength;
  @Output() itemType:EventEmitter<any> = new EventEmitter();
  length;
  elems;
  el;



  typeItem(item) {
    this.elems = this.animalsType.filter(el => el.type === item.type)
    
    this.el = this.animalsType.map(el => {
      if (el.type === item.type) {
        el['active'] = true;
        this.length = this.animalsType.length;
      } else {
        el['active'] = false;
      }
      return el;
    })

    this.length = this.elems.length;
    const arr = [this.el, this.length]
    this.itemType.emit(arr);
  }

}
