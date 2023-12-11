import { Routes } from '@angular/router';
import { ProjectsComponent } from './projects.component';

export const PROJECTS_ROUTES: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          ),
      },
      {
        path: 'sympliact',
        loadComponent: () =>
          import('./sympliact/sympliact.component').then(
            (m) => m.SympliactComponent
          ),
      },
    ],
  },
];
