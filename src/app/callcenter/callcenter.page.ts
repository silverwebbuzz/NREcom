import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-callcenter',
  templateUrl: './callcenter.page.html',
  styleUrls: ['./callcenter.page.scss'],
})
export class CallcenterPage implements OnInit {

  constructor(private navCtrl: NavController,
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

}
