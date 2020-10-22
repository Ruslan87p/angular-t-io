import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isLength;

  getDataLength(event) {
    this.isLength = event;
    return this.isLength;
  }
}
