import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage({ segment: 'home' })
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  addNewCard(){
    this.navCtrl.push('NewcardPage');
  }
  addNewCheque(){
    this.navCtrl.push('NewchequePage');
  }

}
