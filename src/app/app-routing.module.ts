import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//local components
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component'


const routes: Routes = [
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full'
	},
	{
		path: 'home',
		component: HomeComponent
	},
	{
		path: 'about/:id',
		component: AboutComponent
	}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
