import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  constructor(private navCtrl: NavController,
    private statusBar: StatusBar) {

     }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.statusBar.overlaysWebView(true);
    // this.statusBar.show();
    // this.statusBar.styleLightContent();
    // this.statusBar.backgroundColorByHexString('#ff8d90');
  }

}
