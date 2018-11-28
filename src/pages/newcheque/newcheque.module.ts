import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewchequePage } from './newcheque';

@NgModule({
  declarations: [
    NewchequePage,
  ],
  imports: [
    IonicPageModule.forChild(NewchequePage),
  ],
})
export class NewchequePageModule {}
