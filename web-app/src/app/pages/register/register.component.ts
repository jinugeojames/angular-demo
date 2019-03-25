import { Component, OnInit } from '@angular/core';
import { UserService} from 'src/app/shared/user.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private service: UserService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.service.formData = {
      username: '',
      email: '',
      firstname: '',
      lastname: '',
      password: ''
    };
  }
  onSubmit(form: NgForm) {
    this.service.postData('users/register', form.value).subscribe(res => {
      console.log(res);
      this.resetForm(form);

  });
}

}
