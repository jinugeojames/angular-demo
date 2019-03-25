import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { NgForm } from '@angular/forms';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message = null;
  messageType = null;
  constructor(private service: UserService) {}

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.service.loginData = {
      username: '',
      password: '',
      remember : false
    };
  }
  onSubmit(form: NgForm) {
    this.service.postData('users/authenticate', form.value).subscribe((res) => {
    console.log(res);
    this.resetForm(form);

    },
    err => {
      this.messageType = 'alert-danger';
      this.message = err.error.error.message;
    });
  }
}
