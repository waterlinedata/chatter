import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { config } from '../app.config';
import { Message } from './message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  public messages: FirebaseListObservable<Message[]>;

  constructor(public db: AngularFireDatabase) { }

  ngOnInit() {
    this._getChatData();
  }

  private _getChatData() {
    this.messages = this.db.list('chat_messages');
  }

  public newMessage(textField) {
    if (textField.value) {
      const newMessage = {
        author: config.authorName,
        value: textField.value
      };
      this.messages.push(newMessage);

      textField.value = '';
    }
  }
}
