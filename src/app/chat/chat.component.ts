import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { config } from '../app.config';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  messages: FirebaseListObservable<any[]>;

  constructor(public db: AngularFireDatabase) { }

  ngOnInit() {
    this.getChatData();
  }

  getChatData() {
    this.messages = this.db.list('chat_messages');
  }

  newMessage(message) {
    const newMessage = {
      author: config.authorName,
      value: message.value
    };
    this.messages.push(newMessage);
    message.value = '';
  }
}
