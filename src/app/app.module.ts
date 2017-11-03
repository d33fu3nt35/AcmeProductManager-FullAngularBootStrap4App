import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {MDBBootstrapModule} from 'angular-bootstrap-md';

import {AppComponent} from './app.component';
import {ProductListComponent} from './products/product-list.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {ConvertToSpacesPipe} from './shared/convert-to-spaces.pipe';
import {StarComponent} from './shared/star.component';
import {HttpClientModule} from '@angular/common/http';
import {ProductsDetailComponent} from './products/products-detail.component';
import {WelcomeComponent} from './home/welcome.component';
import {RouterModule} from '@angular/router';
import {RouterLinkActive} from '@angular/router';
import {ProductGuardService} from './products/product-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    NavbarComponent,
    FooterComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductsDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'products', component: ProductListComponent},
      {
        path: 'products/:id',
        canActivate: [ProductGuardService],
        component: ProductsDetailComponent
      },
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ])
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [ProductGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
