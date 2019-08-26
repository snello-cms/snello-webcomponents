import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class SimulatedService {

  constructor(public httpClient: HttpClient) { }


  getComponent(): Observable<any> {
    return of({
      html: `<div>{{values.name}} {{values.surname}}ha {{values.eta}} anni</div>
            <br/>
            <ul>  <li *ngFor="let user of values.users">
            {{ user.name }}
          </li></ul>
            `,
      styles: [':host {color: red}'],
      values: {
        name: 'mario',
        surname: 'rossi',
        eta: 33,
        indirizzo: 'via cornelio nepote 8'
      },
      load: [
        {
          name: 'users',
          url: 'https://jsonplaceholder.typicode.com/users'
        }, {
          name: 'todos',
          url: 'https://jsonplaceholder.typicode.com/todos'
        }]
    });
  }

  complete(): Observable<any> {
    return this.getComponent().pipe(
      map(item => {
        if (item.load) {
          for (const ll of item.load) {
            this.httpClient.get(ll.url).subscribe(
              result => {
                item.values[ll.name] = result;
                console.log(item.values);
              });
          }
        }
      }));
  }

}
