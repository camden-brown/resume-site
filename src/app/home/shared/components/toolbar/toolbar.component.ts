import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  WritableSignal,
  signal,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'toolbar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  imports: [MatIconModule, RouterModule, CommonModule],
})
export class ToolBarComponent implements OnInit {
  @Input({ required: true }) title: string = '';
  readonly segments: WritableSignal<string[]> = signal([]);

  ngOnInit(): void {
    this.segments.set(this.fetchURLSegments());
  }

  private fetchURLSegments(): string[] {
    var url = window.location.href;
    var path = url.replace(window.location.origin, '');
    var segments = path.split('/');
    return segments;
  }
}
