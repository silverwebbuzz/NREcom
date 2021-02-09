import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NavController, ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  constructor(private navCtrl: NavController,
    private statusBar: StatusBar,
    private actionSheetCtrl: ActionSheetController) { 

      
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

  async sortSheet(){
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'SORT BY',
      cssClass: 'headBottom',
      mode: 'md',
      buttons: [{
        text: 'Popularity',
        cssClass: 'btnBottom',
        handler: () => {
          console.log('Popularity clicked');
        }
      }, {
        text: 'New',
        cssClass: 'btnBottom',
        handler: () => {
          console.log('New clicked');
        }
      }, {
        text: 'Discount',
        cssClass: 'btnBottom',
        handler: () => {
          console.log('Discount clicked');
        }
      }, {
        text: 'Price : High - Low',
        cssClass: 'btnBottom',
        handler: () => {
          console.log('High - Low clicked');
        }
      }, {
        text: 'Price : Low - High',
        cssClass: 'btnBottom',
        handler: () => {
          console.log('Low - High clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async filterSheet(){
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'FILTER BY',
      cssClass: 'headBottom',
      mode: 'md',
      buttons: [{
        text: 'Categories',
        cssClass: 'btnBottom',
        handler: () => {
          console.log('Categories clicked');
        }
      }, {
        text: 'Price',
        cssClass: 'btnBottom',
        handler: () => {
          console.log('Price clicked');
        }
      }, {
        text: 'Brand',
        cssClass: 'btnBottom',
        handler: () => {
          console.log('Brand clicked');
        }
      }, {
        text: 'Ratings',
        cssClass: 'btnBottom',
        handler: () => {
          console.log('Ratings clicked');
        }
      }, {
        text: 'Offers',
        cssClass: 'btnBottom',
        handler: () => {
          console.log('Offers clicked');
        }
      },{
        text: 'Availability',
        cssClass: 'btnBottom',
        handler: () => {
          console.log('Availability clicked');
        }
      }]
    });
    await actionSheet.present();
  }

}
