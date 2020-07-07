import {Component, Input, OnInit} from '@angular/core';
import {Message} from "../../services/messages.service";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Input() msg: Message;

  ngOnInit(): void {
  }

}
