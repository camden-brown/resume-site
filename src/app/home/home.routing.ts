import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';

export const HOME_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'about',
      },
      {
        path: '',
        loadChildren: () =>
          import('./dashboard/dashboard.routing').then(
            (m) => m.DASHBOARD_ROUTES
          ),
      },
      {
        path: 'about',
        loadChildren: () =>
          import('./about-me/about-me.routing').then((m) => m.ABOUT_ME_ROUTES),
      },
      {
        path: 'projects',
        loadChildren: () =>
          import('./projects/projects.routing').then((m) => m.PROJECTS_ROUTES),
      },
    ],
  },
];
