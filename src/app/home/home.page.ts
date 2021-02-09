import { Component } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slideOptsMain = {
    slidesPerView : 1,
    loop: true,
    autoplay: {
      delay: 1500
    }
  };
  slideOpts = {
    slidesPerView : 2.5,
    spaceBetween : 10,
  };
  slideOptsSale = {
    slidesPerView : 2.5,
    spaceBetween : 10,
  }
  slideOptsCat ={
    slidesPerView: 2.3,
    slidesPerColumn: 2,
    spaceBetween: 8,
  }

  constructor(private statusBar: StatusBar) {
    
    
  }

  ionViewWillEnter() {
    this.statusBar.overlaysWebView(false);
    this.statusBar.show();
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#ff8d90');
  }

}
