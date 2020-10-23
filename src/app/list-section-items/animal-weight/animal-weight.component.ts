import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-animal-weight',
  templateUrl: './animal-weight.component.html',
  styleUrls: ['./animal-weight.component.scss']
})
export class AnimalWeightComponent {

  @Input('animalsWeight') animalsWeight;
  @Input('isLength') isLength;
  @Output() itemWeight:EventEmitter<any> = new EventEmitter();
  length;
  elems;
  el;


  typeItem(item) {
    this.elems = this.animalsWeight.filter(el => el.weight === item.weight)

    this.animalsWeight.map(el => {
      if (el.weight === item.weight) {
        el['active'] = true;
        this.length = this.animalsWeight.length;
      } else {
        el['active'] = false;
      }
      return el;
    })

    this.length = this.elems.length;
    const arr = [this.el, this.length]
    this.itemWeight.emit(arr);
  }
}
