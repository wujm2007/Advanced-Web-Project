import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { FriendsPage } from '../pages/friends/friends';
import { MomentsPage } from '../pages/moments/moments';
import { ModalNewPostPage } from '../pages/moments/newPost';
import { ModalMomentDetailPage } from '../pages/moments/momentDetail';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    FriendsPage,
    MomentsPage,
    TabsPage,
    ModalNewPostPage,
    ModalMomentDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FriendsPage,
    MomentsPage,
    TabsPage,
    ModalNewPostPage,
    ModalMomentDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
