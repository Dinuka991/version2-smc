import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AngularFireModule} from 'angularfire2' ;
import {AngularFire , FirebaseListObservable  } from 'angularfire2';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ChartJsPage } from '../pages/chart-js/chart-js';
import { PDA } from '../pages/pda/pda';
import {SignupPage} from '../pages/singuppage/singuppage';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

