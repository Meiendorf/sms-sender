import {Component, OnInit} from '@angular/core'
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MessagesService} from "../services/messages.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  form: FormGroup;
  loading = false;

  constructor(private messagesService: MessagesService, private router: Router) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      nameFrom: new FormControl('', [Validators.required, Validators.maxLength(11), Validators.pattern('^[a-zA-Z]+$')]),
      numberTo: new FormControl('', [Validators.required, Validators.pattern('\\+[0-9]{3}[0-9]{8}')]),
      body: new FormControl('', [Validators.required, Validators.maxLength(80)]),
    })
  }

  submit() {
    if (this.form.valid) {
      this.loading = true;
      this.messagesService.sendMessage(this.form.value.nameFrom, this.form.value.body, this.form.value.numberTo)
        .subscribe(response => {
          this.loading = false;
          this.router.navigate(['messages']);
        });
    }
  }
}
