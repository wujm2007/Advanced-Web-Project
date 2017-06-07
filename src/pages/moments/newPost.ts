import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

import { Camera } from 'ionic-native';

import {MomentService} from '../../services/moment.service'

@Component({
  selector: 'page-newPost',
  templateUrl: 'newPost.html',
  providers: [MomentService]
})

export class ModalNewPostPage {
  path;
  profilePicture;
  content;

  constructor(public viewCtrl: ViewController,private momentService: MomentService) { }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  post() {
    this.momentService.createMoment({
                "image": "advance-card-tmntr.jpg",
                "content": this.content
              }).then(moment=>{console.log(moment);this.dismiss();});
  }

  takePhoto() {
      var options = {
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI,
        encodingType: Camera.EncodingType.JPEG,
        mediaType: Camera.MediaType.PICTURE,
        saveToPhotoAlbum:true,
        sourceType:Camera.PictureSourceType.CAMERA,
        correctOrientation: true
      }
      Camera.getPicture(options).then((imageData) => {
        let base64Image =  imageData;
        this.path = base64Image;
        this.profilePicture = base64Image;
      }, (err) => {
        alert( err.toString());
      });
    }
}