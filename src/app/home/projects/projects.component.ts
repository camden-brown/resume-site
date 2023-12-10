import { Component } from '@angular/core';
import { ToolBarComponent } from '../shared/components/toolbar/toolbar.component';
import { ProjectWidgetComponent } from '../shared/components/project-widget/project-widget.component';

@Component({
  standalone: true,
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  imports: [ToolBarComponent, ProjectWidgetComponent],
})
export class ProjectsComponent {
  constructor() {}
}
