import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  constructor(private route: Router,
    private statusBar: StatusBar) { 

    
    }

  ngOnInit() {
  }

  ionViewWillEnter() {
    //this.statusBar.styleDefault();
    this.statusBar.overlaysWebView(true);
    //console.log('test');
    //this.statusBar.hide();
  }

}
