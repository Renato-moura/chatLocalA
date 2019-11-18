import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MsgService } from '../../app/msg.service';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  msg;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public msgService: MsgService) {

                this.msg  = navParamsg.get("no")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

}
