import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.scss'
})
export class Counter {
  conterValue = signal(0);

  increment(){
    // this.conterValue.set(this.conterValue() + 1);
    this.conterValue.update(prev => prev + 1);
  }

  decrement(){
    this.conterValue.update(prev => prev - 1);
  }

  reset(){
    this.conterValue.set(0);
  }
}
