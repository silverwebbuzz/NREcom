import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AndroidFullScreen } from '@ionic-native/android-full-screen/ngx';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
  animations: [

    trigger('bounce', [
      state('*', style({
        transform: 'translateX(0)'
      })),
      transition('* => rightSwipe', animate('700ms ease-out', keyframes([
        style({transform: 'translateX(0)', offset: 0}),
        style({transform: 'translateX(-65px)', offset: .3}),
        style({transform: 'translateX(0)', offset: 1})
      ]))),
      transition('* => leftSwipe', animate('700ms ease-out', keyframes([
        style({transform: 'translateX(0)', offset: 0}),
        style({transform: 'translateX(65px)', offset: .3}),
        style({transform: 'translateX(0)', offset: 1})
      ])))
    ])
  ]
})
export class IntroPage implements OnInit {

  @ViewChild(IonSlides) slides: IonSlides;

  state: string = 'x';

  btnSkipActive: boolean = true;
  btnDoneActive: boolean = false;

  slideOptsMain = {
     pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
  };

  constructor(private route: Router,
    private statusBar: StatusBar,
    private androidFullScreen: AndroidFullScreen) {

     
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.statusBar.overlaysWebView(true);
    //console.log('test');
    //this.statusBar.hide();
  }


  btnSkip() {
    this.route.navigate(['/landing']);
  }

  btnDone() {
    this.route.navigate(['/landing']);
  }

  slideChanged() {
    let me = this;
    me.slides.isEnd().then((istrue) => {
      if (istrue) {
        this.btnDoneActive = true;
        this.btnSkipActive = false;
      } else {
        this.btnSkipActive = true;
      this.btnDoneActive = false;
      }
    });
  }

  slideMoved() {
    if (this.slides.getActiveIndex() >= this.slides.getPreviousIndex())
      this.state = 'rightSwipe';
    else
      this.state = 'leftSwipe';
  }

  animationDone() {
    this.state = 'x';
  }

}