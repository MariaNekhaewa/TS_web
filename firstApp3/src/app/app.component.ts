import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>

  <h1> Angular routes </h1>
  <nav>
    <a routerLink="">Start</a>
    <a routerLink="/home">Home</a>
    <a routerLink="/finish">Finish</a>
  </nav>
  <router-outlet></router-outlet>
  </div>`
})
export class AppComponent {
  title = 'firstApp';
}
