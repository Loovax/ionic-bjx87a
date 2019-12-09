import { Component } from '@angular/core';


@Component({
  templateUrl: 'tabs.html'
  
})
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { ShopPage } from '../pages/shop/shop';

export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = ShopPage;

  constructor() {

  }
}
