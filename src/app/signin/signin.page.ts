import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

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
