import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'project-widget',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <button
      class="widget"
      [routerLink]="['/home', 'projects', projectRouteName]"
    >
      <ng-content select="[logo]"></ng-content>
      <h2 class="widget__title">{{ title }}</h2>
      <p class="widget__description">{{ description }}</p>
    </button>
  `,
  styleUrl: './project-widget.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectWidgetComponent {
  @Input({ required: true }) title: string = '';
  @Input({ required: true }) description: string = '';
  @Input({ required: true }) projectRouteName: string = '';
}
