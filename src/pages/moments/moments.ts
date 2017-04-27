import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { ModalNewPostPage } from './newPost';
import { ModalMomentDetailPage } from './momentDetail';


@Component({
  selector: 'page-moments',
  templateUrl: 'moments.html'
})

export class MomentsPage {

  constructor(public modalCtrl: ModalController) { }

  openModalNewPostPage() {
    let modal = this.modalCtrl.create(ModalNewPostPage);
    modal.present();
  }

  openModalMomentDetailPage() {
    let modal = this.modalCtrl.create(ModalMomentDetailPage);
    modal.present();
  }

}