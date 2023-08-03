import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUser } from 'src/app/models/login-user';
import { LoginService } from 'src/app/services/login.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  isLogged = false;
  loginUser: LoginUser;
  username: string = '';
  password: string = '';

  constructor(
    private tokenService: TokenService,
    private loginService: LoginService,
    private router: Router
  ) {
    this.loginUser = new LoginUser(this.username, this.password);
  }

  ngOnInit() {
    
  }

  onLogin( loginForm: NgForm ): void {
    this.loginUser.username = loginForm.value.userName;
    this.loginUser.password = loginForm.value.password;
    
    this.loginService.login(this.loginUser).subscribe(
      data => {
        console.log(data)

        this.isLogged = true;

        this.tokenService.setToken(data.token);

        this.loginService.inLogin();

        this.router.navigate([ 'home/index' ]);
      }
    )

    // console.log( this.loginUser )

    // console.log( loginForm.value );
  }
}
