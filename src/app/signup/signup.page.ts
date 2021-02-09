import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(private statusBar: StatusBar) { 

    
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.statusBar.overlaysWebView(true);
    //this.statusBar.hide();
  }

}
