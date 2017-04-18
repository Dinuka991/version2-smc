import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {AngularFire , FirebaseListObservable  } from 'angularfire2';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { PDA } from '../pages/pda/pda';
import { Chart } from 'chart.js';
//import { CloudSettings, CloudModule } from '@ionic/cloud-angular';

import {AngularFireModule} from 'angularfire2' ;
import { ChartJsPage } from '../pages/chart-js/chart-js';
import {SignupPage} from '../pages/singuppage/singuppage';

// const cloudSettings: CloudSettings = {
//   'core': {
//     'app_id': '1e9ee597'
//   }
// };

export const firebaseConfig = {
  apiKey: "AIzaSyDRJPv7vEE5aRz0IVIhPTyoCDp9hRljeog",
    authDomain: "my-booklist-c5144.firebaseapp.com",
    databaseURL: "https://my-booklist-c5144.firebaseio.com/",
    projectId: "my-booklist-c5144",
    storageBucket: "my-booklist-c5144.appspot.com",
    messagingSenderId: "789508297778"

};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    PDA,
    ChartJsPage ,
    SignupPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
   //  IonicModule.forRoot(MyApp),
   // CloudModule.forRoot(cloudSettings),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    PDA,
    ChartJsPage ,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireModule ,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
