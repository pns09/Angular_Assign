import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule}from '@angular/forms';
import { AppComponent } from './app.component';
import { SunComponent } from './SUN/sun.component';
import { MoonComponent } from './moon/moon.component';

@NgModule({
  declarations: [
    AppComponent,
    SunComponent,
    MoonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
