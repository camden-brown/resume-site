import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ToolBarComponent } from '../shared/components/toolbar/toolbar.component';

@Component({
  selector: 'dashboard',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [ToolBarComponent],
})
export class DashboardComponent {}
