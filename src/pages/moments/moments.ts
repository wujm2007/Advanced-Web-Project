import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { ModalNewPostPage } from './newPost';
import { ModalMomentDetailPage } from './momentDetail';

import {MomentService} from '../../services/moment.service'

@Component({
  selector: 'page-moments',
  templateUrl: 'moments.html',
  providers: [MomentService]
})

export class MomentsPage {
  moments;

  constructor(public modalCtrl: ModalController,private momentService: MomentService) {
      this.initMoments();
  }

  initMoments() {
      this.momentService.getMoments().then(moments => {
          this.moments = moments;
      });
  }

  openModalNewPostPage() {
    let modal = this.modalCtrl.create(ModalNewPostPage);
    modal.present();
  }

  openModalMomentDetailPage(moment) {
    let modal = this.modalCtrl.create(ModalMomentDetailPage, moment);
    modal.present();
  }
}