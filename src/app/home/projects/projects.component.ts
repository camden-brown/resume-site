import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'projects',
  template: '<router-outlet></router-outlet>',
  imports: [RouterOutlet],
})
export class ProjectsComponent {
  constructor() {}
}
