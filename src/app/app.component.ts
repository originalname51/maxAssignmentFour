import { Component } from '@angular/core';
import {GameNumber} from './shared/gameNumber.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gameEvents: GameNumber[] = [];

  gameEvent(gameNumber: {type: string, amount: number}) {
   const pushItem = new GameNumber(gameNumber.type, gameNumber.amount);
    this.gameEvents.push(pushItem);
  }

  clearArray() {
    this.gameEvents = [];
  }
}
