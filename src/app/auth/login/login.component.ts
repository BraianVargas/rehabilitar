import { Component } from '@angular/core';
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
  userName: string = '';
  password: string = '';

  constructor(
    private tokenService: TokenService,
    private loginService: LoginService,
    private router: Router
  ) {
    this.loginUser = new LoginUser(this.userName, this.password);
  }

  ngOnInit() {
    
  }

  onLogin(): void {
    this.loginService.login(this.loginUser).subscribe(
      data => {
        this.isLogged = true;

        this.tokenService.setToken(data.token)

        console.log(data)
      }
    )
  }
}
