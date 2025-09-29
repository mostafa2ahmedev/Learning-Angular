import { Routes } from '@angular/router';
import { Products } from './Components/products/products';
import { Home } from './Components/home/home';
import { NotFound } from './Components/not-found/not-found';
import { Details } from './Components/details/details';
import { AboutUs } from './Components/about-us/about-us';
import { Values } from './Components/values/values';
import { Vision } from './Components/vision/vision';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'Home' },
  { path: 'Home', component: Home },
  { path: 'Products', component: Products },
  { path: 'Details/:id', component: Details },
  {
    path: 'AboutUs',
    component: AboutUs,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'Vision' },
      { path: 'Vision', component: Vision },
      { path: 'Values', component: Values },
    ],
  },
  { path: '**', component: NotFound },
];
