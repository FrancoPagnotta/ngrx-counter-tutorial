import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  count$!: Observable<number>;

  constructor(private store: Store<{ count: number}>) {
    //connect this.count$ stream to the current store count state
    this.count$ = store.select('count');
  }

  increment(): void {
    //dispatch an increment action
    this.store.dispatch(increment());
  }

  decrement(): void {
    //dispatch an decrement action
    this.store.dispatch(decrement());
  }

  reset(): void {
    //dispatch a reset action
    this.store.dispatch(reset());
  }

}
