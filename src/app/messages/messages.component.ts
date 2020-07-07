import {Component, OnInit} from '@angular/core'
import {HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Message, MessagesService} from "../services/messages.service";


@Component({
  selector: 'app-about',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  messages: Message[] = [];
  loading = false;

  constructor(private messagesService: MessagesService) {
  }

  ngOnInit() {
    this.loading = true;
    this.messagesService.getMessages()
      .subscribe(data => {
        this.messages = [];
        data.forEach(msg => {
          this.messages.push({fromName: msg.sender_id, toNumber: msg.to, body: msg.message, status: msg.status});
        });
        this.loading = false;
      })
  }
}
