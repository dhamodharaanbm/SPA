import { Component, ViewChild } from "@angular/core";
import { Nav, Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { firstRunPage } from "../pages";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  public rootPage: any = firstRunPage;
  @ViewChild(Nav) public nav: Nav;
  public pages: Array<{ title: string; component: string }> = [
    { title: "Home", component: "HomePage" },
    { title: "Card", component: "NewcardPage" },
    { title: "Cheque", component: "NewchequePage" }
  ];

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
)
{
    platform.ready().then(() =>
    {
        statusBar.styleDefault();
        splashScreen.hide();
    });
}

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
