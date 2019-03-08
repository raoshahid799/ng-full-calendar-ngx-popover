import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FullCalendarModule } from 'ng-fullcalendar';
import { PopoverComponent } from './popover/popover.component';
import { PopoverModule } from 'ngx-bootstrap/popover';

@NgModule({
  declarations: [
    AppComponent,
    PopoverComponent
  ],
  imports: [
    BrowserModule,
    FullCalendarModule,
    PopoverModule.forRoot()
  ],
  providers: [],
  entryComponents:[PopoverComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
