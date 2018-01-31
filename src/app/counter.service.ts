import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
activeToInactiveCounter = 0;
inactiveToActiveCounter = 0;

incrementActToInactive() {
  this.activeToInactiveCounter++;
  console.log('Active to inactive counter: ' + this.activeToInactiveCounter);
}
  incrementInactToActive() {
    this.inactiveToActiveCounter++;
    console.log('Inactive to active counter: ' + this.inactiveToActiveCounter);
  }
  constructor() { }

}
