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

  messages: FirebaseListObservable<Message[]>;

  constructor(public db: AngularFireDatabase) { }

  ngOnInit() {
    this.getChatData();
  }

  getChatData() {
    this.messages = this.db.list('chat_messages');
  }

  newMessage(textField) {
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
