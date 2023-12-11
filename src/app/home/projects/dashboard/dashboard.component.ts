import { Component } from '@angular/core';
import { ToolBarComponent } from '../../shared/components/toolbar/toolbar.component';
import { ProjectWidgetComponent } from '../../shared/components/project-widget/project-widget.component';

@Component({
  standalone: true,
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [ToolBarComponent, ProjectWidgetComponent],
})
export class DashboardComponent {
  constructor() {}
}
