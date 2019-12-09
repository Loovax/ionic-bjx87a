import { Component } from '@angular/core';
import { AboutPage } from '../pages/about/about/';
import { ContactPage } from '/pages/contact/contact';
import { HomePage } from '/pages/home/home';
import { ShopPage } from '/pages/shop/shop'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = ShopPage;

  constructor() {

  }
}
