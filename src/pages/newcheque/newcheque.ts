import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewChequeService } from './newcheque.service'

/**
 * Generated class for the NewchequePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newcheque',
  templateUrl: 'newcheque.html',
  providers: [ NewChequeService ],
})
export class NewchequePage {
    fundCheque: any;
    routingNumber:any;
    accountNumber: any;
    accountType: any;
    amount:number;
    checkNumber:any;
    checkType:any;
    chequeUrl:any;

  constructor(public navCtrl: NavController, public navParams: NavParams , public newChequeService: NewChequeService) {
  }

  checkSubmit()
  {
    this.fundCheque = 
    {
    'routingNumber' : this.routingNumber,
    'accountNumber' : this.accountNumber,
    'accountType' : this.accountType,
    'checkNumber' : this.checkNumber,
    'checkType' : this.checkType,
    'amount': this.amount
    }
    this.chequeUrl = 'http://10.140.247.14:8000/cce-api/v1/1/FundbyCheque';
  this.newChequeService.fundCheque(this.fundCheque , this.chequeUrl)
  .subscribe((response: any) =>
  {
      console.log(response);
  });
}
}
