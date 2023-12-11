import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ToolBarComponent } from '../../shared/components/toolbar/toolbar.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'resume-site-otus',
  standalone: true,
  imports: [CommonModule, ToolBarComponent, MatIconModule],
  templateUrl: './otus.component.html',
  styleUrls: ['../shared/sass/_project.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OtusComponent {}
