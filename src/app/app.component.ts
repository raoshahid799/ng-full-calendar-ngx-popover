import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { OptionsInput } from 'fullcalendar';
import * as $ from 'jquery';
declare var jQuery: any;
import * as moment from 'moment';
import { EventsService } from './events.service';
import { CalendarComponent } from 'ng-fullcalendar';
import { PopoverService } from './popover.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('popoverElementRef', { read: ViewContainerRef }) popoverElementRef: ViewContainerRef;
  calendarOptions: OptionsInput;
  @ViewChild('ucCalendar') ucCalendar: CalendarComponent;

  constructor(public eventsService: EventsService, public popoverService: PopoverService) {
  }


  ngOnInit() {
    this.calendarOptions = {
      defaultDate: moment(),
      editable: true,
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'agendaDay,agendaWeek,month'
      },
      footer: true,
      allDaySlot: false,
      eventLimit: true,
      height: 'auto',
      defaultView: "agendaWeek"
    };
    this.loadEvents();
  }

  loadEvents() {
    this.eventsService.getEvents().subscribe((events: []) => {
      this.ucCalendar.eventsModel = events;
    });
  }

  onEventHover(model) {
    console.log('hover', model);
    this.popoverService.showPopover(this.popoverElementRef, model);
  }
  eventMouseOut(model) {
    console.log('mouse out', model);
    this.popoverElementRef.clear();
  }

}
