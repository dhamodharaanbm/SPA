import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewCardService } from './newcard.service';

@IonicPage({ segment: 'new-card' })
@Component({
  selector: 'page-newcard',
  templateUrl: 'newcard.html',
  providers: [ NewCardService ],
})


export class NewcardPage {
  fundCard: any;
  cardNumber: any;
  cvv: number;
  amount:any;
  expDate:any;
  cardUrl:any;
  constructor(public navCtrl: NavController, public navParams: NavParams , public newCardService: NewCardService) {
  }

  cardSubmit()
  {
      
      let datestring = new Date(this.expDate);
      let cardExpiry = (datestring.getMonth() + 02 )+ "/" + datestring.getFullYear().toString().substr(-2);
      this.fundCard = 
      {
      'cardNumber' : this.cardNumber,
      'amount' : this.amount,
      'cardExpiry' : cardExpiry
      }
      this.cardUrl = 'http://localhost:8000/cce-api/v1/1/FundbyCard';
    this.newCardService.fundCard(  this.fundCard , this.cardUrl)
    .subscribe((response: any) =>
    {
        console.log(response);
    });
  }

}
