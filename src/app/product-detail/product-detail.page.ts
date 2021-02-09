import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {

  slideOptsMain = {
    slidesPerView : 1,
    loop: true,
    autoplay: {
      delay: 1500
    }
  };

  constructor(private actionSheetCtrl: ActionSheetController,
    private statusBar: StatusBar,
    private navCtrl: NavController) { }

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

  async viewDesc(){
    const actionSheet = await this.actionSheetCtrl.create({
      mode: 'md',
      header: 'Lorem ipsum dolor sit, sed consectetur adipiscing.Dolor sit amet, sed consectetur adipiscing.',
      buttons: [{
        text: 'Cancel',
        //icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      ]
    });
    await actionSheet.present();
  }
}
