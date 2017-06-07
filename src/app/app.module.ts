import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService}  from '../services/in-memory-data.service';

import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {FriendsPage} from '../pages/friends/friends';
import {MomentsPage} from '../pages/moments/moments';
import {ModalNewPostPage} from '../pages/moments/newPost';
import {ModalMomentDetailPage} from '../pages/moments/momentDetail';
import {TabsPage} from '../pages/tabs/tabs';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {UserService} from '../services/user.service'

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
        HttpModule,
        IonicModule.forRoot(MyApp),
        InMemoryWebApiModule.forRoot(InMemoryDataService),
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
        SplashScreen, UserService,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}
