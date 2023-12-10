import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CurrentUserInfoComponent } from './components/current-user-info/current-user-info.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'home',
  standalone: true,
  imports: [
    RouterOutlet,
    MatSidenavModule,
    CurrentUserInfoComponent,
    RouterModule,
    MatButtonModule,
    MatIconModule,
  ],
  template: `
    <mat-sidenav-container>
      <mat-sidenav class="sidenav" mode="side" opened>
        <current-user-info></current-user-info>

        <ul>
          <li class="fwt-500">
            <a
              [routerLink]="['/home', 'projects']"
              routerLinkActive="router-link-active"
            >
              <mat-icon>folder_open</mat-icon>
              Projects
            </a>
          </li>
          <!-- <li class="fwt-500">
            <a [routerLink]="['/home']" routerLinkActive="router-link-active">
              <mat-icon>book</mat-icon>
              Articles
            </a>
          </li> -->
          <li class="fwt-500">
            <a
              [routerLink]="['/home', 'about']"
              routerLinkActive="router-link-active"
            >
              <mat-icon>person</mat-icon>
              About Me
            </a>
          </li>
        </ul>
      </mat-sidenav>
      <mat-sidenav-content class="home">
        <div class="top-nav">
          <a
            href="mailto:camdenebrown@gmail.com"
            mat-raised-button
            class="fwt-500 contact-me-button"
          >
            Contact Me
          </a>
        </div>
        <router-outlet></router-outlet>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor() {}
}
