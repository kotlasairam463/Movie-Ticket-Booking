import { HttpBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms'
import { HttpService } from 'src/app/services/http.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

loginform=new FormGroup({
  email:new FormControl(''),
  password:new FormControl(''),
})
  constructor(private http:HttpService, private router: Router) { }

  ngOnInit(): void {
  }
  userlist : any =[]
  onsubmit(){
    const userData=this.loginform.value;
    this.loginform.controls.email.setValue('');
    this.loginform.controls.password.setValue('');
    this.http.getUsers().subscribe((data:any)=> {
      this.userlist = data.filter((user: any) => user.email === userData.email && user.password === userData.password);
      if(this.userlist.length==1){
        this.router.navigate(['/admintasks']);
      }else{
        alert("enter correct details");
      }

    });

    
  }
  navToRegister(){
    this.router.navigate(['/register']);
  }
}

