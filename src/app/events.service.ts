import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor() { }

  public getEvents(): Observable<any> {
    let data: any = [
      {
        title: 'Long Event',
        start: moment().subtract('day', 1),
        end: moment().subtract('day', 1).add('minutes', 150)
      },
      {
        title: 'Long Event',
        start: moment(),
        end: moment().add('minutes', 150)
      },
      {
        title: 'Long Event',
        start: moment().add('day', 1),
        end: moment().add('day', 1).add('minutes', 150)
      }
    ];
    
    return Observable.of(data);
  }
}
