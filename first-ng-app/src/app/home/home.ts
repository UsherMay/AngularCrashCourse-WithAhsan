import { Component, signal } from '@angular/core';
import { Greeting } from '../components/greeting/greeting';
import { Counter } from '../components/counter/counter';
// import { TodosService } from '../services/todos';

@Component({
  selector: 'app-home',
  imports: [Greeting, Counter],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  // to make the service available ONLY to the home page + delete whatever (providedIn) is inside de injectable declaration in todos.ts
  // providers:[
  //   Todos
  // ]
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
