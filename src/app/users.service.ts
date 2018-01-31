import {Injectable} from '@angular/core';
import {CounterService} from './counter.service';


@Injectable()
export class UsersService {
activeUsers = ['Paul', 'John'];
inactiveUsers = ['Jane', 'Anna'];

setToActive(id: number) {
  this.activeUsers.push(this.inactiveUsers[id]);
  this.inactiveUsers.splice(id, 1);
  this.counterServ.incrementInactToActive();
}

setToInactive(id: number) {
  this.inactiveUsers.push(this.activeUsers[id]);
  this.activeUsers.splice(id, 1);
  this.counterServ.incrementActToInactive();

}
constructor(private counterServ: CounterService) {
}
}
