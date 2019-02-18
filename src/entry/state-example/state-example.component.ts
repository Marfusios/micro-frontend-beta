import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { Store, select } from '@ngrx/store';
import {Decrement, Increment, Reset} from '../../shared/src/store/counter.actions';
import {VersionService} from '../../shared/src/services/version-service/version.service';

@Component({
  selector: 'app-state-example',
  templateUrl: './state-example.component.html',
  styleUrls: ['./state-example.component.scss']
})
export class StateExampleComponent implements OnInit {
  count$: Observable<number>;

  constructor(
    private store: Store<{ count: number }>,
    public version: VersionService
    ) {
    this.count$ = store.pipe(select('counter'));
    this.version.registerService('Beta service');
    console.log('[GLOBAL STATE - BETA]', store, this.version);
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
