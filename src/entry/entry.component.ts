import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {select, Store} from '@ngrx/store';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class EntryComponent implements OnInit {
  _counter$;

  constructor(private store: Store<{ count: number }>) {
    this._counter$ = store.pipe(select('counter'));
  }

  ngOnInit() {
  }

}
