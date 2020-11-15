import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./modules/core/components/login/login.component";
import {AuthGuard} from "./modules/core/guards/auth.guard";
import {FeatureModule} from "./modules/feature/feature.module";

// Lazy load feature module and in features module add the child components route. Here is the excerpt
// const routes: Routes = [
//   {
//     path: '',
//     component: FeatureComponent
//   }
// ];
// Replace AuthGuard for LoginComponent after it works - shouldnt be there at all
const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'search',
    loadChildren: () => import('./modules/feature/feature.module'). then(m => FeatureModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
