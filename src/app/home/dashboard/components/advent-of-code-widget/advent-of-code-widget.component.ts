import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'advent-of-code-widget',
  templateUrl: './advent-of-code-widget.component.html',
  styleUrls: ['./advent-of-code-widget.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
})
export class AdventOfCodeWidgetComponent {
  constructor() {}
}
