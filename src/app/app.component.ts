import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  route: string = 'recipes';

  handleNav(route: string) {
    this.route = route;
    console.log(route);
  }
}
