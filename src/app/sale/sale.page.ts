import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.page.html',
  styleUrls: ['./sale.page.scss'],
})
export class SalePage implements OnInit {

  constructor(private navCtrl: NavController,
    private statusBar: StatusBar,
    private alertCtrl: AlertController) {

      
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

}
