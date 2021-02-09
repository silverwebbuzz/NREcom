import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PaymentComponent } from './component/payment/payment.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AndroidFullScreen } from '@ionic-native/android-full-screen/ngx';

@NgModule({
  declarations: [AppComponent, PaymentComponent],
  entryComponents: [PaymentComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot({
      mode : 'ios'
    }),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AndroidFullScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
