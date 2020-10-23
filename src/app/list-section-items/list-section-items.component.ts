import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiServiceService } from './../services/api-service.service';

@Component({
  selector: 'app-list-section-items',
  templateUrl: './list-section-items.component.html',
  styleUrls: ['./list-section-items.component.scss']
})
export class ListSectionItemsComponent implements OnInit {

  @Output() dataLength:EventEmitter<any> = new EventEmitter();
  animalsData = [];
  isLength;
  constructor(private dataService: ApiServiceService) {}
 

  getTypeItem(e) {
    this.dataService.getAnimals()
    this.isLength = e[1];

    console.log(e[0], 'event')
    this.dataLength.emit(this.isLength);

    // this.dataLength.emit(e);
    return e;
  }

  ngOnInit(): void {
    this.dataService.getAnimals()
    .subscribe((data)=>{
      this.dataLength.emit(data.length);
      this.isLength = data.length;
      this.animalsData = data;
    })  

  }

}
