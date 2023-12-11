import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ToolBarComponent } from '../../shared/components/toolbar/toolbar.component';

@Component({
  selector: 'sympliact',
  templateUrl: './sympliact.component.html',
  styleUrls: ['./sympliact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatIconModule, ToolBarComponent],
})
export class SympliactComponent {
  constructor() {}
}
