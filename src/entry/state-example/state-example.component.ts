import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { Store, select } from '@ngrx/store';
import {Decrement, Increment, Reset} from '../../shared/src/store/counter.actions';

@Component({
  selector: 'app-state-example',
  templateUrl: './state-example.component.html',
  styleUrls: ['./state-example.component.scss']
})
export class StateExampleComponent implements OnInit {
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.pipe(select('counter'));
  }

  ngOnInit() {
  }

  increment() {
    this.store.dispatch(new Increment());
  }

  decrement() {
    this.store.dispatch(new Decrement());
  }

  reset() {
    this.store.dispatch(new Reset());
  }
}
