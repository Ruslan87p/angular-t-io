import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-animal-color',
  templateUrl: './animal-color.component.html',
  styleUrls: ['./animal-color.component.scss']
})
export class AnimalColorComponent {


  @Input('animalsColor') animalsColor;
  @Output() itemColor:EventEmitter<any> = new EventEmitter();
  @Input('isLength') isLength;
  length;
  elems;
  el;


  typeItem(item) {
    this.elems = this.animalsColor.filter(el => el.type === item.type)

    this.el = this.animalsColor.map(el => {
      if (el.type === item.type) {
        el['active'] = true;
        this.length = this.animalsColor.length;
      } else {
        el['active'] = false;
      }
      return el;
    })

    this.length = this.elems.length;
    const arr = [this.el, this.length]
    this.itemColor.emit(arr);
  }


}
