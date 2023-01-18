
import { LoginService } from './../../service/login.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Login } from '../../model/login';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  myForm!: FormGroup;
  private readonly notifier: NotifierService;
  constructor(
    private loginService: LoginService,
    private router: Router,
    notifierService: NotifierService
  ) {
    this.notifier = notifierService;
  }
  public login!: Login;
  // checkVal: any;
  ngOnInit(): void {
    this.login = new Login();
    this.createForm();
  }
  createForm() {
    this.myForm = new FormGroup({
      emailId: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }


  loginGetFn() {
    this.loginService.loginGetService(this.login).subscribe((data: any) => {
      // console.log(data, 'rrrrrrrrrrr');
      // this.checkVal = data;
      // console.log(data.message);
      if (data.message == 'login successful') {
        // this.clear();
        // console.log("massage found");
        
        // this.notifier.notify('succuess', 'Saved succuessfully');
        this.router.navigateByUrl('/master/material-uasage-type');
      } else if (data.message == 'user not found') {
        // this.notifier.notify('error', 'user and password not match');
        console.log('user not found');
        // this.clear();
        alert('user or password not match');
      } else {
        // this.notifier.notify('succuess', 'Saved succuessfully');
        // this.clear();
        console.log('field is empty or null');
      }
    });
  }
  clear() {
    this.login.emailId = '';
    this.login.password = '';
  }
}
