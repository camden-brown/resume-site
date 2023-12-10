import { Component } from '@angular/core';
import { ToolBarComponent } from '../shared/components/toolbar/toolbar.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  standalone: true,
  selector: 'about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  imports: [ToolBarComponent, MatIconModule],
})
export class AboutMeComponent {
  constructor() {}
}
