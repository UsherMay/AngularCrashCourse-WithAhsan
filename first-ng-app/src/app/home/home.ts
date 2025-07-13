import { Component, signal } from '@angular/core';
import { Greeting } from '../components/greeting/greeting';

@Component({
  selector: 'app-home',
  imports: [Greeting],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  homeMessage = signal("Hello World!");

  // keyUpHandler(){
  //   console.log('user type sth in the input');
  // }

  keyUpHandler(event: KeyboardEvent){
    console.log(`user pressed the ${event.key} key`);
  }
}
