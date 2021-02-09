import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { PaymentComponent } from '../component/payment/payment.component';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  constructor(private navCtrl: NavController,
    private modalCtrl: ModalController,
    private statusBar: StatusBar) {

      
     }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.statusBar.overlaysWebView(false);
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#ffffff');
  }

  back(){
    this.navCtrl.pop();
  }

  async Success(){
    const modal = await this.modalCtrl.create({
      component: PaymentComponent,
      showBackdrop: true,
      backdropDismiss: false,
      mode:	"ios",
      cssClass: 'modal-success'
    });
    return await modal.present();
  }

}
