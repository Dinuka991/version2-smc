import { Component } from '@angular/core';
import { NavController ,AlertController } from 'ionic-angular';
import {AngularFire , FirebaseListObservable  } from 'angularfire2';
import { LoginPage } from '../login/login';
import { PDA } from '../pda/pda';
import { ChartJsPage } from '../chart-js/chart-js';
import {SignupPage} from '../singuppage/singuppage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   books : FirebaseListObservable<any>;
  constructor(public navCtrl: NavController , public alertCtrl :AlertController , angFire : AngularFire) {
    this.books = angFire.database.list( '/Books');
        window.localStorage.removeItem('currentuser');
    if (!this.isLoggedin()) {
      console.log('You are not logged in');
      this.navCtrl.push(LoginPage);
}
    


  }
   
    pagepda()
  {
    this.navCtrl.push(PDA);
  }
    isLoggedin() {
    if (window.localStorage.getItem('currentuser')) {
      return true;
    }
}
 

}
