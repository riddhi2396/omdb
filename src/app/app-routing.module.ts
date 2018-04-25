import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { ResponseComponent } from './response/response.component';

const routes: Routes = [
    {path: '', redirectTo: '/movie', pathMatch: 'full'},
	{path: 'movie', component: MovieComponent},
	{path: 'response/:title', component: ResponseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
