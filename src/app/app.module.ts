import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { LoggedinPage } from '../pages/loggedin/loggedin';
import { SalirPage } from '../pages/salir/salir';
import { Proveedor1Provider } from '../providers/proveedor1/proveedor1';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { IonicStorageModule } from '@ionic/storage';




const firebaseAuth = {
    apiKey: "AIzaSyB87uk9qL0m-M45KuhzdY_4w1X9RqibzZQ",
    authDomain: "tigrezhito-731d8.firebaseapp.com",
    databaseURL: "https://tigrezhito-731d8.firebaseio.com",
    projectId: "tigrezhito-731d8",
    storageBucket: "tigrezhito-731d8.appspot.com",
    messagingSenderId: "930939373756"
  };


@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    RegisterPage,
    LoginPage,
    LoggedinPage,
    SalirPage,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule,
    IonicStorageModule.forRoot()
    
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    
    RegisterPage,
    LoginPage,
    LoggedinPage,
    SalirPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Proveedor1Provider
   

  ]
})
export class AppModule {}
