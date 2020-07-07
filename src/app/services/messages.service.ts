import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {environment} from "../../environments/environment.prod";

export interface Message {
  fromName: string;
  toNumber: string;
  body: string;
  status: string;
}

export interface ApiMsg {
  sender_id: string;
  message: string;
  to: string;
  status: string;
}

@Injectable({
  providedIn: "root"
})
export class MessagesService {
  constructor(private http: HttpClient) {
  }

  getMessages(): Observable<ApiMsg[]> {
    return this.http.get<ApiMsg[]>(environment.getUrl, {
      headers: new HttpHeaders({'Authorization': 'Bearer '+environment.apiKey})
    })
      .pipe(map(response => response['data']));
  }

  sendMessage(name: string, message: string, to: string): Observable<void> {
    return this.http.post<void>(environment.postUrl, {
      sender_id: name,
      message: message,
      to: to,
    }, {
      headers: new HttpHeaders({'Authorization': 'Bearer '+environment.apiKey})
    });
  }

}
