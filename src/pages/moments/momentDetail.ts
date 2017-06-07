import { Component } from '@angular/core';
import { AlertController, ViewController, NavParams } from 'ionic-angular';

import {MomentService} from '../../services/moment.service'

@Component({
  selector: 'page-momentDetail',
  templateUrl: 'momentDetail.html',
  providers: [MomentService]
})

export class ModalMomentDetailPage {
  moment;

  constructor(public viewCtrl: ViewController, public params: NavParams, public alertCtrl: AlertController, private momentService: MomentService) {
    this.moment = this.params.get('moment');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  like(momentId:number) {
      this.momentService.like(momentId).then(moment => {
          this.moment = moment;
      });
  }

  comment(momentId: number, comment: string) {
    this.momentService.comment(momentId, comment).then(moment => {
          this.moment = moment;
      });
  }

  doPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Comment',
      message: "Enter your comment",
      inputs: [
        {
          name: 'comment-text',
          placeholder: 'Comment'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Submit',
          handler: data => {
            this.comment(this.moment.id,data["comment-text"]);
          }
        }
      ]
    });
    prompt.present();
  }
}