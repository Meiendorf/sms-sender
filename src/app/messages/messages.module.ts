import {NgModule} from "@angular/core";
import {MessagesComponent} from "./messages.component";
import {SharedModule} from "../shared.module";
import {RouterModule} from "@angular/router";
import {MessageComponent} from './message/message.component';

@NgModule({
  declarations: [
    MessagesComponent,
    MessageComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '', component: MessagesComponent
      },
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class MessagesModule {

}
