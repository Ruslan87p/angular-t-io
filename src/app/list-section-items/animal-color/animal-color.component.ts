import { Component, EventEmitter, Input, Output } from '@angular/core';

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
    this.elems = this.animalsColor.filter(el => el.color === item.color)
    
    this.animalsColor.map(el => {
      if (el.color === item.color) {
        el['active'] = true;
        this.length = this.animalsColor.length;
      } else {
        el['active'] = false;
      }
      return el;
    })

    console.log(this.elems);
    this.length = this.elems.length;
    const arr = [this.el, this.length]
    this.itemColor.emit(arr);
  }


}
