import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss']
})
export class SplashPage implements OnInit {

  constructor(private router: Router,
    private statusBar: StatusBar) {

     
   }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['/intro']);
  }, 3000);
  }

  ionViewWillEnter() {
    this.statusBar.overlaysWebView(true);
    //console.log('test');
    //this.statusBar.hide();
  }

}
