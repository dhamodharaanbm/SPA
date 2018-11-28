import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewcardPage } from './newcard';

@NgModule({
  declarations: [
    NewcardPage,
  ],
  imports: [
    IonicPageModule.forChild(NewcardPage),
  ],
})
export class NewcardPageModule {}
