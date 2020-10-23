import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-animal-length',
  templateUrl: './animal-length.component.html',
  styleUrls: ['./animal-length.component.scss']
})
export class AnimalLengthComponent {

  @Input('animalsLength') animalsLength;
  @Input('isLength') isLength;
  @Output() itemLength:EventEmitter<any> = new EventEmitter();
  length;
  elems;
  el;


  typeItem(item) {
    this.elems = this.animalsLength.filter(el => el.length === item.length)

    this.animalsLength.map(el => {
      if (el.length === item.length) {
        el['active'] = true;
        this.length = this.animalsLength.length;
      } else {
        el['active'] = false;
      }
      return el;
    })

    this.length = this.elems.length;
    const arr = [this.el, this.length]
    this.itemLength.emit(arr);
  }

}
