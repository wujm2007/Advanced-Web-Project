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

  constructor(public modalCtrl: ModalController, private momentService: MomentService) {
      this.initMoments();
  }

  initMoments() {
      this.momentService.getMoments().then(moments => {
        console.log(moments);
          this.moments = moments.sort((a:any,b:any)=>b.id-a.id);
      });
  }

  openModalNewPostPage() {
    let modal = this.modalCtrl.create(ModalNewPostPage);
    modal.onDidDismiss(() => {
      this.initMoments();
    });
    modal.present();
  }

  openModalMomentDetailPage(moment) {
    let modal = this.modalCtrl.create(ModalMomentDetailPage, moment);
    modal.onDidDismiss(() => {
      this.initMoments();
    });
    modal.present();
  }

  like(momentId:number) {
    console.log("like",momentId);
      this.momentService.like(momentId).then(moment => {
          this.moments.filter(m=>m.id==momentId).forEach(m=>m.likes = moment.likes);
      });
  }
}