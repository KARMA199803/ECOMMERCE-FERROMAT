import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ProductoListComponent } from './components/producto-list/producto-list.component';
import { ProductoItemComponent } from './components/producto-item/producto-item.component';
import { ProductoComponent } from './components/producto/producto.component';
import { PaymentCardComponent } from './components/payment-card/payment-card.component';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductoListComponent,
    ProductoItemComponent,
    ProductoComponent,
    PaymentCardComponent,
    UbicacionComponent,
    CategoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleMapsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
