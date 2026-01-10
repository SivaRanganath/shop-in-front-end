import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignIn } from './sign-in/sign-in';
import { LogIn } from './log-in/log-in';
import { Dashboard } from './dashboard/dashboard/dashboard';
import { activateGuard } from './shared/guards/activate-guard';
import { loginGuard } from './shared/guards/login-guard';
import { childrenActivateGuard } from './shared/guards/children-activate-guard';

const routes: Routes = [{
  path: 'login', component:  SignIn // ,canActivate: [loginGuard]
},
{
  path: 'signup', component: LogIn
},
{
  path: '', loadChildren: () => import('../app/dashboard/dashboard/dashboard-module').then(m => m.DashboardModule), canActivateChild: [childrenActivateGuard]
},
{
  path: '**', redirectTo: '/login'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
