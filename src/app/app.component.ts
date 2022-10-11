import { Component } from '@angular/core';
import { from, of } from "rxjs";
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-rxjs-usage';
  /**
   *
   */
  constructor() {

    const values = of("oguzhan", 2, ['a', 'b']);
    values.subscribe(data => {
      console.log(data);
    });

    const nums = of(1, 2, 3);

    const squareValues = map((val: number) => val * val);
    const squaredNums = squareValues(nums);

    squaredNums.subscribe(x => console.log(x));


    const foo = from([
      undefined,
      'oguzhan',
      999,
      false,
      () => { },
      new Date('August 30, 1922 19:05:19'),
      new Promise(resolve => resolve('RxJS')),
    ]);

    const bar = foo.pipe(
      map(item => typeof item),
      filter(type => type !== 'undefined')
    );

    foo.subscribe(value => console.log(`foo: ${value}`));
    bar.subscribe(value => console.log(`bar: ${value}`));
  }

}
