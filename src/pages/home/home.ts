import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('f') tipForm: NgForm;
  amount: number;
  tipAmount: number;
  constructor(public navCtrl: NavController) {
  }
  percnetage(input:number){
    console.log(input);
    this.tipAmount = (this.amount*input)/100;
    console.log(this.tipAmount);
  }
  clear(){
    this.tipForm.reset();
  }

}
