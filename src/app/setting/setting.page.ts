import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {

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

  async logout() {
    const alert = await this.alertCtrl.create({
      header: 'Confirm!',
      message: 'Are you sure you want to logout ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'alertColor'
        }, 
        {
          text: 'Logout',
          cssClass: 'alertColor',
          handler: () => {
            //console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

}
