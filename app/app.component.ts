import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { ShopPage } from '../pages/shop/shop';
import { TabsPage } from '../pages/tabs/tabs';
import { GamblePage } from '../pages/gamble/gamble';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

    });
  }
}
