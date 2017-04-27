import { Component } from '@angular/core';

import { FriendsPage } from '../friends/friends';
import { MomentsPage } from '../moments/moments';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = FriendsPage;
  tab2Root = MomentsPage;

  constructor() {

  }
}
