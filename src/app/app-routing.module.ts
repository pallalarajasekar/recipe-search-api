import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GuardGuard } from './guard.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RecipeComponent } from './recipe/recipe.component';


const routes: Routes = [
{
  path: "login",
  component: LoginComponent
},
{
  
  path: "dashboard",
  component: DashboardComponent,
  canActivate: [GuardGuard],
  children:[
    {
      path: "home",
      component: HomeComponent
    },
    {
      path: "recipe/:id",
      component: RecipeComponent
    }
  ]
},
{
  path: "**",
  redirectTo: "login"
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
