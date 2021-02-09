import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  slideOpts = {
    slidesPerView : 'auto',
    spaceBetween : 0,
  };

  slideOptsProd = {
    slidesPerView : 2.4,
    spaceBetween : 15,
  };

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
