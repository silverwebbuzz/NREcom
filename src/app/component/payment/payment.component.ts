import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {

  constructor(private modalCtrl: ModalController,
    private route: Router) { }

  ngOnInit() {}

  closeModal(){
    this.modalCtrl.dismiss();
    this.route.navigate(['/tabs/home']);
  }

}
