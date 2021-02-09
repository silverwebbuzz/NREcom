import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.page.html',
  styleUrls: ['./forgotpass.page.scss'],
})
export class ForgotpassPage implements OnInit {

  constructor(private statusBar: StatusBar) { 

    
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.statusBar.overlaysWebView(true);
    //console.log('test');
    //this.statusBar.hide();
  }

}
