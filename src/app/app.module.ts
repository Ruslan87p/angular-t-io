import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListSectionItemsComponent } from './list-section-items/list-section-items.component';
import { AnimalTypeComponent } from './list-section-items/animal-type/animal-type.component';
import { AnimalColorComponent } from './list-section-items/animal-color/animal-color.component';
import { AnimalWeightComponent } from './list-section-items/animal-weight/animal-weight.component';
import { AnimalLengthComponent } from './list-section-items/animal-length/animal-length.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListSectionItemsComponent,
    AnimalTypeComponent,
    AnimalColorComponent,
    AnimalWeightComponent,
    AnimalLengthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
