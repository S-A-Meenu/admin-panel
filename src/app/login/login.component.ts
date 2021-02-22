import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls:['./login.component.html']
})
export class LoginComponent implements OnInit {

  email:any;
  password:any;

constructor(private router: Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  submitLoginForm =(form:FormGroup) => {
    console.log(form);
    this.router.navigate(['/'],{
      relativeTo:this.route
    });
  }
    }


//   loginForm!: FormGroup;
//   hide = true;
//   password: any;
//   email: any;

//   constructor(private formBuilder: FormBuilder) { }

//   ngOnInit() {
//     this.loginForm = this.formBuilder.group({
//       'email': [this.email, [
//         Validators.required,
//         Validators.email
//       ]],
//       'password': [this.password, [
//         Validators.required,
//         Validators.minLength(6),
//         Validators.maxLength(30)
//       ]]
//     });
//   }

//   onLoginSubmit() {
//     alert(this.email + ' ' + this.password);
//   }



