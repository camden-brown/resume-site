import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ToolBarComponent } from '../shared/components/toolbar/toolbar.component';
import { ProjectWidgetComponent } from '../shared/components/project-widget/project-widget.component';
import { AdventOfCodeWidgetComponent } from './components/advent-of-code-widget/advent-of-code-widget.component';

@Component({
  selector: 'dashboard',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [
    ToolBarComponent,
    ProjectWidgetComponent,
    AdventOfCodeWidgetComponent,
  ],
})
export class DashboardComponent {}
