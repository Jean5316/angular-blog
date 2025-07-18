import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MenuBar } from './components/menu-bar/menu-bar';
import { MenuTitle } from './components/menu-title/menu-title';
import { BigCard } from './components/big-card/big-card';
import { SmallCard } from './components/small-card/small-card';
import { Home } from './pages/home/home';

@NgModule({
  declarations: [
    App,
    MenuBar,
    MenuTitle,
    BigCard,
    SmallCard,
    Home
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
