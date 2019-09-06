import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NguCarouselModule } from '@ngu/carousel';

import { AppComponent } from './app.component';
import { DemoPageComponent } from './demo-page/demo-page.component';
import { TestimonyCarouselComponent } from './testimony-carousel/testimony-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoPageComponent,
    TestimonyCarouselComponent
  ],
  imports: [
    BrowserModule,
    NguCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
