import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {GameNumber} from '../shared/gameNumber.model';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output('timeEmited') timeEmited = new EventEmitter<GameNumber>();
  @Output('endGame') endGame = new EventEmitter();
  timerNumber = 0;
  myIntervalFunction: any;


  constructor() {
  }

  startGame() {
    this.myIntervalFunction = setInterval(() => this.incrementTimer(), 1000);
    console.log('start game is called');
  }

  incrementTimer() {
    this.timerNumber++;
    this.timeEmited.emit(new GameNumber(this.timerNumber % 2 === 0 ? 'EVEN' : 'ODD', this.timerNumber));
  }

  stopGame() {
    console.log('stop game is called');
    if (this.myIntervalFunction !== undefined ) {
    clearInterval(this.myIntervalFunction);
    } else {
      console.log('attempting to stop undefined interval function');
    }
    this.timerNumber = 0;
    this.endGame.emit();
  }
  ngOnInit() {
  }

}
