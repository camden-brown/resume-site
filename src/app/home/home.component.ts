import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CurrentUserInfoComponent } from './components/current-user-info/current-user-info.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'home',
  standalone: true,
  imports: [
    RouterOutlet,
    MatSidenavModule,
    CurrentUserInfoComponent,
    RouterModule,
    MatIconModule,
  ],
  template: `
    <mat-sidenav-container>
      <mat-sidenav class="sidenav" mode="side" opened>
        <div class="logo">
          <a routerLink="/home">
            <img src="assets/images/logo.svg" alt="logo" />
          </a>
        </div>
        <current-user-info></current-user-info>

        <ul>
          <li class="fwt-500">
            <a [routerLink]="['/home']" routerLinkActive="router-link-active">
              <mat-icon>warehouse</mat-icon>
              Locations
            </a>
          </li>

          <li class="fwt-500">
            <a [routerLink]="['/home']" routerLinkActive="router-link-active">
              <mat-icon>local_shipping</mat-icon>
              Orders
            </a>
          </li>
        </ul>
      </mat-sidenav>
      <mat-sidenav-content class="home">
        <router-outlet></router-outlet>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [
    `
      @use '/src/sass/variables.scss';

      mat-sidenav-container {
        display: flex;
        flex-direction: row;
        height: 100%;
        width: 100%;
      }

      .logo {
        width: 100px;
        margin-bottom: 1rem;
      }

      ul {
        margin: 2rem 0;
        overflow: auto;

        li {
          margin: 1rem 0;

          a {
            align-items: center;
            display: flex;
            gap: 0.5rem;
            color: #dbdfe9;

            &:hover,
            &:focus {
              color: variables.$white;

              mat-icon {
                color: variables.$white;
              }
            }

            mat-icon {
              color: #4b5675;
            }
          }
        }
      }

      .sidenav {
        background-color: variables.$sidebar-base-color;
        width: variables.$sidebar-width;
        padding: 1rem;
      }

      .home {
        background-color: variables.$primary-home-background;
        flex: 1;
      }
    `,
  ],
})
export class HomeComponent {
  constructor() {}
}
