import { HttpBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerform = new FormGroup({
    fullname: new FormControl(''),
    email: new FormControl(''),
    password:new FormControl(''),
    secretcode:new FormControl('')
})
  constructor(private http:HttpService,private router:Router) { }

  ngOnInit(): void{}

  onSubmit() {
    const user = this.registerform.value;
    this.registerform.controls.fullname.setValue('')
    this.registerform.controls.email.setValue('')
    this.registerform.controls.password.setValue('')
    if(this.registerform.controls.secretcode.value=="admin1"){
    this.http.adduser(user).subscribe((data:any) => console.log(data));
    this.router.navigate(['/login'])}
    else{
      alert("if you have correct secret code please enter details again");
    }
  }
}
