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
      {
        path: 'hexa',
        loadComponent: () =>
          import('./hexa/hexa.component').then((m) => m.HexaComponent),
      },
      {
        path: 'wayspring',
        loadComponent: () =>
          import('./wayspring/wayspring.component').then(
            (m) => m.WayspringComponent
          ),
      },
      {
        path: 'metova',
        loadComponent: () =>
          import('./metova/metova.component').then((m) => m.MetovaComponent),
      },
      {
        path: 'airvel',
        loadComponent: () =>
          import('./airvel/airvel.component').then((m) => m.AirvelComponent),
      },
      {
        path: 'sxm',
        loadComponent: () =>
          import('./sxm/sxm.component').then((m) => m.SxmComponent),
      },
    ],
  },
];
