import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderCmpComponent } from './header-cmp/header-cmp.component';
import { SideNavCmpComponent } from './side-nav-cmp/side-nav-cmp.component';
import { FooterCmpComponent } from './footer-cmp/footer-cmp.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderCmpComponent,
    SideNavCmpComponent,
    FooterCmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
