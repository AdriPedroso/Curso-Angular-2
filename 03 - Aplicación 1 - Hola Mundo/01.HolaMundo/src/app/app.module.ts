import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HeaderComponent }  from '../app/components/header.component';
import { BodyComponent }  from '../app/components/body.component';
import { FooterComponent }  from '../app/components/footer.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,
                  HeaderComponent,
                  BodyComponent,
                  FooterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
