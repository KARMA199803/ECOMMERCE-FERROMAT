import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import path from 'path';
import { ProductoComponent } from './components/producto/producto.component';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';
import { CategoriaComponent } from './components/categoria/categoria.component';

const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'categoria', component: CategoriaComponent},
{path: 'ubicacion', component: UbicacionComponent},
{path: 'signin', component: SigninComponent},
{path: 'signup', component: SignupComponent},
{path: 'producto/:id', component: ProductoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
