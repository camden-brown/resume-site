import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'current-user-info',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './current-user-info.component.html',
  styleUrls: ['./current-user-info.component.scss'],
  imports: [MatIconModule, MatButtonModule, RouterModule, MatDividerModule],
})
export class CurrentUserInfoComponent {}
