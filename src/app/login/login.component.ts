import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private router:Router, private data: DataService) { }
  formGroup: FormGroup;
  ngOnInit(): void {

    this.formGroup = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })

  }

  createLogin(){
    console.log("enter dashboard");
    window.localStorage.setItem("authtoken", "5bc07d492835c1a514d392283f9054da");
    this.router.navigate(["/dashboard/home"]);
  }

}
