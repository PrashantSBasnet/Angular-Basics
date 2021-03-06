

import { Component, OnDestroy, OnInit, } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private firstObsSubscription: Subscription | any;


  constructor() { }

  ngOnInit(): void {
    // this.firstObsSubscription= interval(1000).subscribe(count => {
    //     console.log(count);
    // })
    const customIntervalObservable = Observable.create((observer: any) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count == 4) {
          observer.complete(); //it will come to hault and no values are emitted after this
        }
        if (count > 5) {
          observer.error(new Error('count is greater than 5')) //it will give error
        }
        count++;
      },
        1000);
    });

    // //example of use of pipe
    // customIntervalObservable.pipe(map((data: number) => {
    //   return 'Round' + data;
    // }))

    this.firstObsSubscription = customIntervalObservable.subscribe((data: any) => {
      console.log(data);
    })
  }

  

  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }
}
