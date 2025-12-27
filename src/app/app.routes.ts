import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    redirectTo: "portail",
    pathMatch: "full",
  },
  {
    path: "portail",
    loadComponent: () => import("./pages/portail/components/portail-page/portail-page.component").then(m => m.PortailPageComponent),
  },
  {
    path: "accueil",
    canActivate: [],
    loadComponent: () =>
      import("./pages/accueil/components/accueil-page/accueil-page.component").then(m => m.AccueilPageComponent),
  },
 
  {
    path: "**",
    redirectTo: "portail",
  },

  /*{
    path: "",
    redirectTo: "accueil",
    pathMatch: "full",
  },
  {
    path: "portail",
    loadComponent: () => import("./pages/portail/components/portail-page/portail-page.component").then(m => m.PortailPageComponent),
  },
  {
    path: "accueil",
    canActivate: [],
    loadComponent: () =>
      import("./pages/accueil/components/accueil-page/accueil-page.component").then(m => m.AccueilPageComponent),
  },
 
  {
    path: "**",
    redirectTo: "accueil",
  },
  */
];
